const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51KVhQjSAfV4immPkVGnPMC1Pe4Up2YinmWWEIPabEaZ3CkS7HmgV5uS2HKhmSE3WsnMHddN6J7M4Z5XurFBcpMAQ00PGp4KaWR');

//API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (req, res) => {
    res.status(200).send('Hello');
});

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    console.log('payment received>>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  //in cents
        currency: "usd"
    });

    //OK - created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });

})

// - Listen command
exports.api = functions.https.onRequest(app);

// - Example endpoint
//http://localhost:5001/clone-7698a/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
