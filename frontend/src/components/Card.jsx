import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { addToCart } from '../features/cart/cartSlice'
import Rating from "./Rating";
import { fetchProductById, reset } from "../features/item/productSlice";

function Card({ product }) {
  
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  const handleitems = (product) => {
    dispatch(fetchProductById(product))
  }

  
  return (
    <>
    <div className=' shadow-md shadow-black p-2 rounded bg-white'>
      
        <div>
           <img className='p-4 w-full h-[200px] object-cover rounded' src={product.image} alt={product.name} />
        </div>
        <div className="px-4 py-3">
            <h1 className='font-bold text-base sm:text-xl'>{product.name}</h1>
            <Rating rating={product.rating} numReviews={product.numReviews}/>
            <p className="font-bold text-red-600 text-sm sm:text-base">${product.price}</p>
        </div>
        <div className="grid grid-cols-2 px-4 gap-2">
        <button onClick={() => handleAddToCart(product)} className='bg-black text-yellow-400 col-span-1 py-2 px-2 rounded font-bold text-[8px] sm:text-sm'>Add to Cart</button>
        <Link to={`/product/${product._id}`} onClick={() => handleitems(product._id)} className='bg-white col-span-1 text-black border border-black font-bold rounded flex justify-center items-center text-sm sm:text-lg'>view</Link>
        </div>
        
    </div>
    </>
  )
}

export default Card 