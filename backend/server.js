// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.


const stripe = require("stripe")("KEY");
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors'); // Import the cors package

// app.use(cors());
app.use(bodyParser.json());
app.use(cors());

app.use(express.static("public"));

const YOUR_DOMAIN = "http://localhost:3000";

app.post("/create-checkout-session", async (req, res) => {
  const {amount}= req.body;
  // console.log("sdads");
  // console.log("this is =>>>>>", amount);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "usd",
          unit_amount: 900,
          product_data: {
            name: "test",
          },
        },
      },
    ],
    customer_email: "BorisAlex0714@gmail.com",

    success_url: "http://localhost:3000/payment-success", //redirect url for frontend when success
    cancel_url: "http://localhost:3000/payment-failure", //redirect url for frontend when cancel
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log("Running on port 4242"));
