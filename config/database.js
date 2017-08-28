var mongoose = require('mongoose');

module.exports = function(uri) {

   // URI = universal resource identificator
   mongoose.connect(uri, {useMongoClient : true});

   // Gera uma mensagem no console quando a conexão
   // tiver sido ativada
   mongoose.connection.on('connected', function() {
      console.log('Mongoose! conectado em ' + uri);
   });

   // Gera uma mensagem no console quando a conexão
   // tiver sido desativada
   mongoose.connection.on('disconnected', function() {
      console.log('Mongoose! desconectado de ' + uri);
   });

   mongoose.connection.on('error', function(erro) {
      console.log('Mongoose! Erro de conexão: ' + erro);
   });

   process.on('SIGINT', function() {
      mongoose.connection.close(function() {
         console.log('Mongoose! desconectado pelo término da aplicação');
         process.exit(0); // Suicida-se; 0 significa término sem erros
      })
   });

}