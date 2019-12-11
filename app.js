const express = require('express'),
      session = require('express-session'),
      logger  = require('morgan'),
      chalk   = require('chalk'),
      lusca   = require('lusca'),
      flash   = require('express-flash'),
      path    = require('path'),
      multer  = require('multer');

const upload = multer({
    dest: path.join(__dirname, 'uploads')
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// set path for static assets
app.use(express.static(path.join(__dirname, 'public')));

const app = express();

app.listen(() => {
    console.log('Server has started');
});