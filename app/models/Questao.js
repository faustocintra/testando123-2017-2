var mongoose = require('mongoose');

module.exports = function() {

   var schema = mongoose.Schema({
      descricao: {
         type: String,
         required: true
      },
      categoria: {
         type: mongoose.Schema.ObjectId,
         ref: 'Categoria', // model Categoria
         required: true
      }
   });

   return mongoose.model('Questao', schema, 'questoes');

}