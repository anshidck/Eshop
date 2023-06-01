import React from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';

function PayButton({cartItems}) {
    const user = useSelector((state) => state.auth)
    const handleCheckout = () => {
        axios
          .post(`/api/stripe/create-checkout-session`, {
            cartItems,
            userId: user._id,
          })
          .then((response) => {
            if (response.data.url) {
              window.location.href = response.data.url;
            }
          })
          .catch((err) => console.log(err.message));
      };
  return (
    <>
    <button onClick={() => handleCheckout()} className='bg-black w-full py-2 text-yellow-500 rounded'>Checkout</button>
    </>
  )
}

export default PayButton