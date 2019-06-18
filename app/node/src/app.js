const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/', function (req, res) {
  res.send('Hello Worlds!');
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
