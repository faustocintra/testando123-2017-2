var passport = require('passport');
var mongoose = require('mongoose');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = function() {

   var Usuario = mongoose.model('Usuario');

   passport.use(new GoogleStrategy({
      clientID: '1026199716202-97tp476f0rv1jkcjrcf0ur1e0trab44m.apps.googleusercontent.com',
      clientSecret: 'jD6gJ_aD4BuhyXAhFB1eutLC',
      callbackURL: 'http://localhost:3000/auth/google/callback',
      scope: 'profile'
   }, 
   
   function(accessToken, refreshToken, profile, done) {

      Usuario.findOrCreate(
         { login: profile.id },
         { nome: profile.displayName },
         function(erro, usuario) {
            if(erro) {
               console.log(erro);
               return done(erro); // Avisa ao Google que a resposta não é satisfatória
            }
            return done(null, usuario); // OK, Google!
         }
      );

   }));

   // Serializa no cookie apenas o _id do usuário
   passport.serializeUser(function(usuario, pronto) {
      pronto(null, usuario._id);
   });

   // Desserializa o _id do usuário a partir do cookie
   passport.deserializeUser(function(id, pronto) {
      Usuario.findById(id).exec().then(
         function(usuario) {
            pronto(null, usuario);
         }
      )
   });

}