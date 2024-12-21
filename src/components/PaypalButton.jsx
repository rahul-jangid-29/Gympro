import React, { useEffect } from "react";

const PayPalButton = () => {
  useEffect(() => {
    const loadPayPalScript = () => {
      // Check if PayPal SDK script is already loaded
      if (!document.querySelector('script[src*="paypal.com/sdk/js"]')) {
        const script = document.createElement("script");
        script.src = "https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"; // Replace YOUR_CLIENT_ID
        script.async = true;
        script.onload = initializePayPalButton;
        document.body.appendChild(script);
      } else {
        initializePayPalButton();
      }
    };

    const initializePayPalButton = () => {
      const container = document.getElementById("paypal-button-container");
      if (container) container.innerHTML = ""; // Clear container
      if (window.paypal) {
        window.paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "49.99",
                  },
                  description: "GymPro Membership Plan",
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              alert(`Transaction completed by ${details.payer.name.given_name}`);
            });
          },
          onError: (err) => {
            console.error("PayPal Error:", err);
            alert("Payment could not be processed. Please try again.");
          },
        }).render("#paypal-button-container");
      }
    };

    loadPayPalScript(); // Load the PayPal SDK
  }, []);

  return <div id="paypal-button-container"></div>;
};

export default PayPalButton;
