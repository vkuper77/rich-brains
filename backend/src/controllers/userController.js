const utils = require("../utils/utils");
const CONST = require("../const/const.js");
const jwt = require('jsonwebtoken');

exports.login = (request, response) => {
    utils.readJsonFile(CONST.USERS_PATH).then(r => {
        const {login, password} = request.body;
        const userIsFound = r.some(user => {
            const condition = login === user.login && password === user.password;
            if (condition) {
                response.status(CONST.RESP_STATUS.OK).json({
                    id: user.id,
                    login: user.login,
                    token: jwt.sign({id: user.id}, CONST.TOKEN_KEY)
                });
            }
            return condition
        });
        if (!userIsFound) {
            response.status(CONST.RESP_STATUS.ERROR).json(utils.returnErrorMsg(CONST.ERROR_MSGS.COMMON.NOT_FOUND))
        }
    }).catch(r => {
        response.status(CONST.RESP_STATUS.ERROR).json(utils.returnErrorMsg(CONST.ERROR_MSGS.USER.CANT_READ))
    });
};
