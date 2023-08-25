const { config } = require('./../config/config');

module.exports = {
  development: {
    username: 'nico',
    password: 'admin123',
    database: 'my_store',
    host: 'localhost',
    dialect: 'postgres',
  },
  production: {
    url: config.dbUrl,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};
