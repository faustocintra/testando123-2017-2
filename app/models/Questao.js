var mongoose = require('mongoose');

module.exports = function() {

   var schema = mongoose.Schema({
      descricao: {
         type: String,
         required: true
      },
      categoria: {
         type: String,
         required: true
      }
   });

   return mongoose.model('Questao', schema, 'questoes');

}