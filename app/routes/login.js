module.exports = function(app) {
   var controller = app.controllers.home;
   app.get('/login', controller.login);
}