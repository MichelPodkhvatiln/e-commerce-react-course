import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100; //stripe price in cents
  const publishableKey = 'pk_test_51J3KW3CY1MRXn8LJIT3JNx0WWTzUBPHem5Jqqi0VFyF46C09r4BK9yvgYNZ71CZB7HGnKueMlqctEZpbyP2Q256500hRGwiVID';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert('succesful payment');
      })
      .catch(error => {
        console.log('Payment Error: ', error);
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
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
