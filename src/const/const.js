const RESP_STATUS = {
  OK: 200,
  NOT_AUTHORIZED: 401,
  NOT_FOUND: 404,
  ERROR: 404,
};
const TOKEN_KEY = '1a2b-3c4d-5e6f-7g8h';

const USERS_PATH = "./src/data/users.json";

const CLIENTS_PATH = "./src/data/clients.json";

const ERROR_MSGS = {
  CLIENTS: {
    CANT_READ: "Cant read clients file",
    DUPLICATE: "Client already exists",
    EMPTY_PARAM: "Parameter cant be empty",
    CANT_SAVE: "Cant save client",
  },
  COMMON: {
    NOT_FOUND: "Not found"
  },
  USER: {
    CANT_READ: "Cant read user file"
  },
  HEADERS:{
    TOKEN: "Authorization header token is empty"
  }
};
exports.RESP_STATUS = RESP_STATUS;
exports.CLIENTS_PATH = CLIENTS_PATH;
exports.USERS_PATH = USERS_PATH;
exports.TOKEN_KEY = TOKEN_KEY;
exports.ERROR_MSGS = ERROR_MSGS;