import React from 'react'

function OrderComponent({ item }) {
  console.log(item);
  return (
    <div className='flex justify-between p-6 bg-white rounded my-4'>
    <p>{item._id}</p>
    <p>{item.user.name}</p>
    <p>{item.shippingAddress.city}</p>
    <p>${item.totalPrice}</p>
    <button className='border border-black p-1 shadow-sm shadow-black rounded'>Details</button>
  </div>
  )
}

export default OrderComponent