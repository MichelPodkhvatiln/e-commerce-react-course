import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100; //stripe price in cents
  const publishableKey = 'pk_test_51J3KW3CY1MRXn8LJIT3JNx0WWTzUBPHem5Jqqi0VFyF46C09r4BK9yvgYNZ71CZB7HGnKueMlqctEZpbyP2Q256500hRGwiVID';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
   <StripeCheckout
     label='Pay Now'
     name='CRWN Clothing Ltd.'
     billingAddress
     shippingAddress
     image='https://svgshare.com/i/CUz.svg'
     description={`Your total is $${price}`}
     amount={priceForStripe}
     panelLabel='Pay Now'
     token={onToken}
     stripeKey={publishableKey} />
  );
};

export default StripeButton;
