'use strict';

var StellarSdk = require('stellar-sdk');

exports.generateKey = function(req, res) {
    var pair = StellarSdk.Keypair.random();

    res.json({
        "publicKey": pair.publicKey(),
        "secret": pair.secret()
    });
}

exports.fromSecret = function(req, res) {
    var url = require('url');
    var queryData = url.parse(req.url, true).query;
    var key = queryData.secret

    console.log(key)
    var pair = StellarSdk.Keypair.fromSecret(key)

    res.json({
        "publicKey": pair.publicKey(),
        "secret": pair.secret()
    });
}

