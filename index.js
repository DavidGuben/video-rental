const winston = require('winston');
const express = require('express');
const app = express();
const path = require("path");

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();
require('./startup/production')(app);

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
    const index = path.join(__dirname, "build", "index.html")
    res.sendFile(index);
});
const port = process.env.PORT || 3000;
const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));

module.exports = server;