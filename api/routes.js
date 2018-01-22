'use strict';
  
module.exports = function(app) {
    var key = require('./KeyController');
  
    app.route('/keypair')
    .get(key.generateKey)  

    app.route('/lookupSecret')
    .get(key.fromSecret)
  };
  