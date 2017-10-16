module.exports = function(app) {

   var Categoria = app.models.Categoria;

   var controller = {};

   // Lista todas as questões
   controller.listar = function(req, res) {
      
      Categoria.find().exec().then(
         function(categorias) { // Callback se der certo
            res.json(categorias);
         },
         function(erro) {     // Callback se der errado
            console.error(erro);
            // HTTP 500: erro interno do servidor
            res.status(500).json(erro);
         }
      );

   }

   // Retorna uma única questão
   controller.obterUm = function(req, res) {
      var idCategoria = req.params.id;

      Categoria.findById(idCategoria).exec().then(
         function(categoria) {
            if(!questao) throw new Error('Categoria não encontrada');
            res.json(questao);
         },
         function(erro) {
            console.log(erro);
            // HTTP 404: não encontrado
            res.status(404).json(erro);
         }
      );

   }

   // Exclusão de uma questão
   controller.excluir = function(req, res) {
      var idCategoria = req.params.id;

      var restantes = categorias.filter(function(questao){
         return questao._id != idCategoria;
      });

      // Se o vetor filtrado tiver menos elementos que o original
      if(restantes.length < categorias.length) {
         categorias = restantes;
         res.status(200).send('Excluído');
      }
      else {
         res.status(404).send('Questão não encontrada para excluir');
      }

   }

   return controller;

}