import React from "react";
import PayPalButton from "./PaypalButton";

const Payment = () => {
  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4">Complete Your Payment</h1>
      <p className="mb-5">
        Pay securely with PayPal to access your GymPro Membership.
      </p>
      <PayPalButton />
    </div>
  );
};

export default Payment;
