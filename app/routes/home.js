//var controller = require('../controllers/home');

module.exports = function(app) {
   var c = app.controllers.home;
   app.get('/', c.index);
   app.get('/index', c.index);
};