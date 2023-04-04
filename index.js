const express = require('express');
const routerApi = require('./routes');

const {logErrors , errorHandler, boomErrorHandler } = require("./middlewares/error.handler")

const app = express();
const port = 3001;


app.use(express.json())


routerApi(app)
// app.get('/users', (req, res) => {
//   const { limit, offset } = req.query;
//   if (limit && offset) {
//     res.json({
//       limit,
//       offset,
//     });
//   } else {
//     res.send('there isnt params');
//   }
// });

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  console.log('My port' + port);
});
