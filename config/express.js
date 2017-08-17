var express = require('express');
var load = require('express-load');

//var home = require('../app/routes/home');

module.exports = function() {
   var app = express();

   app.set('port', 3000);

   app.set('view engine', 'ejs');
   app.set('views', './app/views');

   //app.use(express.static('./public'));

   //home(app);

   /* Carrega, na ordem, tudo o que estiver em
      app/models, depois em app/controllers,
      depois em app/routes, colocando tudo dentro
      da variável app.
   */
   load('models', {cwd: 'app'})
      .then('controllers')
      .then('routes')
      .into(app);

   return app;
};