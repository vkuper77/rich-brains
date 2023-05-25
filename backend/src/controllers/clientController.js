const Client = require("../models/client.js");
const CONST = require("../const/const");
const utils = require("../utils/utils");
const fs = require('fs');

exports.checkToken = (request, response, next) => {
    if (!request.user) {
        response.status(CONST.RESP_STATUS.ERROR).json(utils.returnErrorMsg(CONST.ERROR_MSGS.HEADERS.TOKEN));
    } else {
        next();
    }
};

exports.getUsers = (request, response) => {
    Client.readUsers(response).then(r => {
        response.status(CONST.RESP_STATUS.OK).json({clients: r});
    })
};

exports.getUser = (request, response) => {
    const {id} = request.body;
    const isEmptyParam = Client.checkParams(response, {id});
    if (isEmptyParam) {
        return
    }
    Client.readUsers(response).then(r => {
        const index = r.findIndex(client => client.id === id);
        if (index === -1) {
            response.status(CONST.RESP_STATUS.ERROR).json(utils.returnErrorMsg(CONST.ERROR_MSGS.COMMON.NOT_FOUND));
        } else {
            response.status(CONST.RESP_STATUS.OK).json({client: r[index]});
        }
    })
};


exports.editUser = (request, response) => {
    const {name, surname, age, phone, country, id} = request.body;
    const isEmptyParam = Client.checkParams(response, {name, surname, age, phone, country, id});
    if (isEmptyParam) {
        return
    }
    Client.readUsers(response).then(r => {
        const index = r.findIndex(client => client.id === id);
        if (index === -1) {
            response.status(CONST.RESP_STATUS.ERROR).json(utils.returnErrorMsg(CONST.ERROR_MSGS.COMMON.NOT_FOUND));
        } else {
            r[index] = {...r[index], name, surname, age, phone, country};
            fs.writeFile(CONST.CLIENTS_PATH, JSON.stringify(r), (error) => {
                if (error) {
                    response.status(CONST.RESP_STATUS.ERROR).json(utils.returnErrorMsg(CONST.ERROR_MSGS.CLIENTS.CANT_SAVE));
                    throw error
                }
                response.status(CONST.RESP_STATUS.OK).json({client: r[index]});
            });
        }
    })
};

exports.deleteUser = (request, response) => {
    const {id} = request.query;
    const isEmptyParam = Client.checkParams(response, {id});
    if (isEmptyParam) {
        return
    }
    Client.readUsers(response).then(r => {
        Client.deleteUser(id, r, response)
    })
};

exports.addUser = (request, response) => {
    const {name, surname, age, phone, country} = request.body;
    const isEmptyParam = Client.checkParams(response, {name, surname, age, phone, country});
    if (isEmptyParam) {
        return
    }
    Client.readUsers(response).then(r => {
        const isExists = r.some(user => user.name === name && user.surname === surname);
        if (isExists) {
            response.status(CONST.RESP_STATUS.ERROR).json(utils.returnErrorMsg(CONST.ERROR_MSGS.CLIENTS.DUPLICATE));
        } else {
            const newClient = new Client(name, surname, age, phone, country);
            newClient.addUser(r);
            response.status(CONST.RESP_STATUS.OK).json({client: newClient.returnThisUser()});
        }
    })
};
