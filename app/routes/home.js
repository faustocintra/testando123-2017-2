var controller = require('../controllers/home');
var c = controller();

module.exports = function(app) {
   app.get('/', c.index);
   app.get('/index', c.index);
   app.get('/ajuda', c.ajuda);
   app.get('/login', c.login);
   app.get('/help', c.ajuda);
};