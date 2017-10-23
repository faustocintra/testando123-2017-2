module.exports = function(app) {

   var controller = app.controllers.questoes;

   app.get('/questoes', controller.listar);
   app.get('/questoes/:id', controller.obterUm);
   app.delete('/questoes/:id', controller.excluir);
   app.put('/questoes', controller.novo);
   app.post('/questoes', controller.atualizar);

}