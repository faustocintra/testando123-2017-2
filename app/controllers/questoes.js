/*
var questoes = [
   {
      '_id': 1,
      'enunciado': 'Qual a representação de 17 decimal em binário?',
      'categoria': 'Computação'
   },
   {
      '_id': 2,
      'enunciado': 'Em Engenharia de Software, requisito é:',
      'categoria': 'Engenharia de Software'
   },
   {
      '_id': 3,
      'enunciado': 'Para efetuar contagens, a estrutura de repetição mais apropriada é:',
      'categoria': 'Lógica de Programação'
   }
];
*/

module.exports = function(app) {

   var Questao = app.models.Questao;

   var controller = {};

   // Lista todas as questões
   controller.listar = function(req, res) {
      
      Questao.find().exec().then(
         function(questoes) { // Callback se der certo
            res.json(questoes);
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
      var idQuestao = req.params.id;

      Questao.findById(idQuestao).exec().then(
         function(questao) {
            if(!questao) throw new Error('Questão não encontrada');
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
      var idQuestao = req.params.id;

      var restantes = questoes.filter(function(questao){
         return questao._id != idQuestao;
      });

      // Se o vetor filtrado tiver menos elementos que o original
      if(restantes.length < questoes.length) {
         questoes = restantes;
         res.status(200).send('Excluído');
      }
      else {
         res.status(404).send('Questão não encontrada para excluir');
      }

   }

   return controller;

}