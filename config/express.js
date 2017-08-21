var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//var home = require('../app/routes/home');

module.exports = function() {
   var app = express();

   app.set('port', 3000);

   app.set('view engine', 'ejs');
   app.set('views', './app/views');

   /* Assegura que os verbos DELETE e PUT irão funcionar
      mesmo que o navegador cliente não lhes dê suporte
   */
   app.use(bodyParser.urlencoded({extended: true}));
   app.use(bodyParser.json());
   app.use(methodOverride());

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