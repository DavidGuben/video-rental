const helmet = require('helmet');
const compression = require('compression');
const express = require('express');
// production modules
const path = require('path');
module.exports = function(app) {
    app.use(helmet());
    app.use(compression());

    // server static assets if in production
  if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
}