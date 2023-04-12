const CONST = require("./src/const/const");
const utils = require("./src/utils/utils");
const userRouter = require("./src/routes/userRouter.js");
const clientRouter = require("./src/routes/clientRouter.js");

const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const express = require("express");
const cors = require('cors');

const PORT = 3333;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use((req, res, next) => {
  try {
    const token = req.headers.authorization ? req.headers.authorization : null;
    if (token) {
      jwt.verify(token, CONST.TOKEN_KEY, (err, payload) => {
        if (err) next();
        else if (payload) {
          utils.readJsonFile(CONST.USERS_PATH).then(r => {
            r.some(user => {
              const condition = user.id === payload.id;
              if (condition) {
                req.user = user;
              }
              return condition;
            });
            next();
          }).catch(r => {
            console.log(CONST.ERROR_MSGS.USER.CANT_READ);
            next();
          })
        }
      })
    } else {
      next()
    }
  } catch (e) {
    console.log(e);
    next();
  }
});

// console.log(clientRouter)
// console.log(userRouter)

app.use("/clients", clientRouter);
app.use("/user", userRouter);

app.use((req, res, next) => {
  res.status(CONST.RESP_STATUS.NOT_FOUND).send("Not Found")
});


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} :)`);
});
