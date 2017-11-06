var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

module.exports = function() {

   var schema = mongoose.Schema({
      login: {
         type: String,
         required: true,
         // Não pode haver duplicidade de usuários nesta colação
         index: {
            unique: true
         }
      },
      nome: {
         type: String,
         required: true
      },
      dataInclusao: {
         type: Date,
         default: Date.now // Preenchido automaticamente com a data/hora da gravação
      }

   });

   schema.plugin(findOrCreate);

   return mongoose.model('Usuario', schema);

}