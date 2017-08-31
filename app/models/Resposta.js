var mongoose = require('mongoose');

module.exports = function() {

   var schema = mongoose.Schema({
      
      texto: {
         type: String,
         required: true
      },

      correta: {
         type: Boolean,
         required: true
      },

      // Cada resposta faz referência a uma (e apenas uma) questão
      questao: {
         type: mongoose.Schema.ObjectId,
         ref: 'Questao', // model Questao
         required: true
      }

   });

}