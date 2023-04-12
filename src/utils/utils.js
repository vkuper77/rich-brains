const fs = require('fs');

const readJsonFile = (path, isParsedView = true) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) return reject();
      let respData;
      if (isParsedView) {
        respData = JSON.parse(data);
      } else {
        respData = data;
      }
      resolve(respData);
    });
  });
};

const returnErrorMsg = (msg) => ({message: msg});

exports.readJsonFile = readJsonFile;
exports.returnErrorMsg = returnErrorMsg;