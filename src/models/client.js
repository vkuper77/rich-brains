const CONST = require("../const/const.js");
const utils = require("../utils/utils");
const shortid = require('shortid');
const fs = require('fs');

module.exports = class Client {

  constructor(name, surname, age, phone, country) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.phone = phone;
    this.country = country;
    this.id = shortid.generate();
  }

  returnThisUser = () => ({
    name: this.name,
    surname: this.surname,
    age: this.age,
    phone: this.phone,
    id: this.id,
    country: this.country,
  });

  addUser = (usersArr) => {
    if (!usersArr || !Array.isArray(usersArr)) {
      console.log("cant write user");
      return
    }
    usersArr.push(this.returnThisUser());
    fs.writeFileSync(CONST.CLIENTS_PATH, JSON.stringify(usersArr));
  };


  static deleteUser = (id, usersArr, response) => {
    const oldLength = usersArr.length;
    const newArr = usersArr.filter(user => user.id !== id);
    const newLength = newArr.length;
    if (oldLength !== newLength) {
      fs.writeFile(CONST.CLIENTS_PATH, JSON.stringify(newArr), (error) => {
        if (error) {
          response.status(CONST.RESP_STATUS.ERROR).json(utils.returnErrorMsg(CONST.ERROR_MSGS.CLIENTS.CANT_SAVE));
          throw error
        }
        response.status(CONST.RESP_STATUS.OK).json({clients: newArr});
      });
    } else {
      response.status(CONST.RESP_STATUS.ERROR).json(utils.returnErrorMsg(CONST.ERROR_MSGS.COMMON.NOT_FOUND));
    }
  };


  static checkParams = (response, userParams) => {
    let fieldName;
    const isEmptyParam = Object.keys(userParams).some(key => {
      const isEmpty = !userParams[key];
      isEmpty && (fieldName = key);
      return isEmpty
    });
    isEmptyParam && response.status(CONST.RESP_STATUS.ERROR).json(utils.returnErrorMsg(`${fieldName} ${CONST.ERROR_MSGS.CLIENTS.EMPTY_PARAM}`));
    return isEmptyParam;
  };

  static readUsers = (response, isParsedView) => {
    return utils.readJsonFile(CONST.CLIENTS_PATH, isParsedView).then(res => {
      return res;
    }).catch(err => {
      const msg = "Cant read users";
      console.log(msg, JSON.stringify(err));
      response && response.status(CONST.RESP_STATUS.ERROR).json(utils.returnErrorMsg(CONST.ERROR_MSGS.CLIENTS.CANT_READ));
    });
  };

};