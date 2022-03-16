import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckOutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publisableKey =
    "pk_test_51KWfW6SJpXJgPh9xKlZn2umWYGVmVsLcaZVc54UsdM3HJvWYXNLbLrpN70beO6n15j5yJqjGKli8YO6RuxDWofsv00MtuZEztV";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Block chain"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount="Pay Now"
      token={onToken}
      stripeKey={publisableKey}
    />
  );
};

export default StripeCheckOutButton;
