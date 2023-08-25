const passport = require('passport');

const LocalStrategty = require('./strategies/local.strategy');

passport.use(LocalStrategty);
