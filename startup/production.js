const helmet = require('helmet');
const compression = require('compression');
const express = require('express');
// production modules
const path = require('path');
module.exports = function(app) {
    app.use(helmet());
    app.use(compression());

    // server static assets if in production
  
}