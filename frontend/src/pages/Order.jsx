import React from 'react'
import { useSelector } from 'react-redux'
import OrderComponent from '../components/OrderComponent'


function Order() {
  
  const { orders } = useSelector((state) => state.orders);
  
  return (
    <div className='p-5'>
      <h1 className='text-center font-bold text-3xl py-3'>Your Orders</h1>
      <div className='lfex flex-col gap-4'>
      {orders.map((item) => (
        <OrderComponent item={item} key={item._id}/>
      ))}
      </div>
    </div>
  )
}

export default Order