module.exports = function (app) {
  app.use(`/api/user`, require('./users'));
  app.use(`/api/admin`, require('./admin'));
};
