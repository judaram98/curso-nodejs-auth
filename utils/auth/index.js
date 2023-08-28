const passport = require('passport');

const LocalStrategty = require('./strategies/local.strategy');
const JwtStrategy = require('./strategies/jwt.strategy');

passport.use(LocalStrategty);
passport.use(JwtStrategy);
