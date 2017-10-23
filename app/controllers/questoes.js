module.exports = function(app) {

   var Questao = app.models.Questao;

   var controller = {};

   // Lista todas as questões
   controller.listar = function(req, res) {
      
      // populate('categoria'): preenche o campo de referência
      // à categoria com dados reais da categoria
      Questao.find().populate('categoria').exec().then(
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

      Questao.remove({_id: idQuestao}).exec().then(
         function() {
            // HTTP 204: Sem conteúdo            
            res.status(204).end();
         },
         function(erro) {
            console.error(erro);
         }
      );

   }

   // Inserção de uma nova questão
   controller.novo = function(req, res) {
      Questao.create(req.body).then(
         function(questao) {
            // HTTP 201: criado
            res.status(201).json(questao);
         },
         function(erro) {
            console.error(erro);
            // HTTP 500: Erro interno do servidor
            res.status(500).json(erro);
         }
      )
   }

   controller.atualizar = function(req, res) {

      var idQuestao = req.body._id;

      // Se o _id existir, procedemos à atualização
      if(idQuestao) {
         Questao.findByIdAndUpdate(idQuestao, req.body).then(
            function(questao) {
               // HTTP 200: OK
               res.status(200).json(questao);
            },
            function (erro) {
               console.error(erro);
               // HTTP 500: Erro interno do servidor
               res.status(500).json(erro);
            }
         )
      }

   }

   return controller;

}