module.exports = function(app) {
   var controller = app.controllers.home;
   app.get('/ajuda', controller.ajuda);
   app.get('/help', controller.ajuda);
}