# Stellar KeyPair Generator

Javascript web application for quickly generating account key pairs for the Stellar blockchain.

## Getting Started

I deployed this application publically and you can call it by sending a GET request to:

[https://stellar-horizon-client-gsiylynhie.now.sh/keypair](https://stellar-horizon-client-gsiylynhie.now.sh/keypair)

This is on a free server so there may be a delay while it gets warmed up. I also may begin to be rate limited with heavy traffic so donations are welcome 😀

XLM Donation Address:
```
GCBFBLHRG6U2NG5XOAX2RDNXIMOSB24F2P26ODO3MVJAP7IT2S4KRC5P
```

## Deploy Locally

This is pretty easy to get running locally. Just make sure you have node.js installed and run!

Download or clone this repo to a folder and simply use the following command to start the server.

```
node server.js
```

## Interaction

Once you start your server you should see the port printed in the console.

You can call the API with a get request to:

```
http://localhost:{PORT_NUMBER}/keypair
```
Replacing {PORT_NUMBER} with the port that it is deployed on. e.g. `3000`

The response should look like this:

```
{
    "publicKey": {String},
    "secret": {String}
}
```

## Future Features
* Get account based on secret key

## Contributing

Feel free to make pull requests or open issues with anything you find.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [Stellar](stellar.org)


