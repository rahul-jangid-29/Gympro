// Payment.jsx
import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js"; // Using PayPal React package

const Payment = () => {
  return (
    <div>
      <h1>Pay for your Membership</h1>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "20.00", // Amount to be charged
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            alert("Transaction completed by " + details.payer.name.given_name);
          });
        }}
        onError={(err) => {
          console.error("Error:", err);
        }}
      />
    </div>
  );
};

export default Payment;
