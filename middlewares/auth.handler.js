const boom = require('@hapi/boom');
const { config } = require('./../config/config');

function checkApiKey(req, res, next) {
  const apiKey = req.headers['api'];
  if (apiKey === config.apiKey) {
    next();
  } else {
    next(boom.unauthorized());
  }
}

function checkAdminRole(req, res, next) {
  const role = req.user.role;
  if (role === 'admin') {
    next();
  } else {
    next(boom.forbidden());
  }
}

function checkRoles(...roles) {
  return (req, res, next) => {
    const role = req.user.role;
    if (roles.includes(role)) {
      next();
    } else {
      next(boom.forbidden());
    }
  };
}

module.exports = { checkApiKey, checkAdminRole, checkRoles };
