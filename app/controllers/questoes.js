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

module.exports = function() {

   var controller = {};

   // Lista todas as questões
   controller.listar = function(req, res) {
      res.json(questoes);
   }

   // Retorna uma única questão
   controller.obterUm = function(req, res) {
      var idQuestao = req.params.id;

      var questao = questoes.filter(function(questao) {
         return questao._id == idQuestao;
      });

      if(questao[0]) {
         res.json(questao[0]);
      }
      else{
         res.status(404).send('Questão não encontrada');
      }

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