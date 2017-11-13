module.exports = function(app) {

   var auth = {};

   auth.verify = function(req, res, next) {
      
      if(req.isAuthenticated()) {
         return next(); 
      }
      else {
         res.status('401').json('Não autorizado');
      }
   }

   return auth;

}