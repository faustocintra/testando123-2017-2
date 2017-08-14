module.exports = function() {

   var controller = {}; // Objeto vazio

   controller.index = function(req, res) {
      res.render('index', {nome: 'Testando123'});
   }

   controller.ajuda = function(req, res) {
      res.render('ajuda'); // Sem variável na view
   }

   controller.login = function(req, res) {
      res.render('login', {
         nome: 'Testando123',
         mensagem: 'Informe seus dados para ter acesso ao sistema'
      }); // Duas variáveis na view
   }
   
   return controller;

}