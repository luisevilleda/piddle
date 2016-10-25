const express = require('express');
const morgan = require('morgan');
const api = require('./routes/api');
const auth = require('./routes/auth');
const path = require('path');
const config = require('../config');
const session = require('express-session');
const passport = require('./passportConfig');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(session({
  secret: config.sessionSecret,
  resave: true,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', api);
app.use('/auth', auth);

app.use('/', express.static(path.join(__dirname, '/public')));

const port = process.env.PORT || 3000;
app.listen(port);

console.log(`Server listening on port: ${port}`);
module.exports = app;