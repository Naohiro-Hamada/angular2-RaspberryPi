'use strict';

exports = module.exports = function(app) {

  app.get("/api/hoge", function(req, res, next){
    console.log('Hello Express');
    res.json( { hoge: 'hogehoge'} );
  });
};
