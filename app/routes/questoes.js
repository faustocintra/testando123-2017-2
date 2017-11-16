module.exports = function(app) {

   var auth = app.controllers.auth;
   var controller = app.controllers.questoes;

   app.get('/questoes', /* auth.verify,*/ controller.listar);
   app.get('/questoes/:id', controller.obterUm);
   app.delete('/questoes/:id', controller.excluir);
   app.put('/questoes', controller.novo);
   app.post('/questoes', controller.atualizar);

}