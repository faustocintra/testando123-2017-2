var controller = require('../controllers/home');
var c = controller();

module.exports = function(app) {
   app.get('/', c.index);
};