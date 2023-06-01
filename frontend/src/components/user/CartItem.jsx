import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, decreaseCart, removeFromCart, getTotals } from '../../features/cart/cartSlice'
import { AiOutlineClose } from 'react-icons/ai'

function CartItem({item}) {
  const {cart} = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTotals())
  },[dispatch, cart])
  const handleIncreseCart = (item) => {
    dispatch(addToCart(item))
  }

  const handleDecreseCart = (item) => {
    dispatch(decreaseCart(item))
  }

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  }
  return (
    <div className='flex p-6 bg-white w-[100%] shadow-md shadow-black rounded'>
        <div className='p-2'>
          <img className='w-[200px] h-[200px] object-cover' src={item?.image} alt={item.name} />
        </div>
        <div>
          <h2 className='text-xl sm:text-3xl font-bold'>{item.name}</h2>
        <div>
        </div>
        <div className='flex flex-col '>
        <div className="flex gap-4 justify-center py-2 sm:py-6">
            <button onClick={() => handleDecreseCart(item)} className='bg-slate-400 h-[25px] px-3 rounded font-bold'>
              -
            </button>
            <div>{item.cartQuantity}</div>
            <button onClick={() => handleIncreseCart(item)} className='bg-slate-400 h-[25px] px-3 rounded font-bold'>+</button>
          </div>
          <div className='pb-2 sm:py-4'>
            <p className='font-semibold'>{item.description}</p>
          </div>
          <div className="font-bold text-xl sm:text-2xl text-yellow-400">
            ${item.price * item.cartQuantity}
          </div>
        </div>
        </div>
        <div className='ml-auto'>
          <button onClick={() => handleRemoveFromCart(item)}><AiOutlineClose size={25}/></button>
          <span>{item.cartTotalQuantity}</span>
        </div>
        </div>
  )
}

export default CartItem