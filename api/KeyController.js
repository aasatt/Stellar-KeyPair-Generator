'use strict';

var StellarSdk = require('stellar-sdk');

exports.generateKey = function(req, res) {
    var pair = StellarSdk.Keypair.random();

    res.json({
        "publicKey": pair.publicKey(),
        "secret": pair.secret()
    });
}

