import { useSelector } from "react-redux"
import CartItems from '../components/CartItem'
import { Link } from "react-router-dom"


function Cart() {
  const cart = useSelector((state) => state.cart)

  if ( cart.cartTotalQuantity < 1 ) {
    return(
      <>
      <h1 className="text-center font-bold py-10 text-xl">Your bag is empty</h1>
      </>
    )
  }
  return (
    <div className="grid grid-cols-3 p-5 gap-7">
       <div className="col-span-2 flex flex-col gap-6">
        { cart.cartItems.map((item) => (
           <CartItems key={item._id} item={item}/>
        ))}
       </div>
       <div className="col-span-1 bg-white p-5 rounded shadow-md shadow-black h-[150px]">
         <p className="flex justify-between font-semibold  text-xs sm:text-base">total Item: <span>{cart.cartTotalQuantity}</span></p>
         <p className="flex justify-between font-semibold py-3 text-xs ">total Price: <span>$ {cart.cartTotalAmount}</span></p>
         <Link className="bg-black text-yellow-500 flex justify-center py-2 text-xs sm:text-base rounded" to='/checkout'>Checkout</Link>
       </div>
    </div>
  )
}

export default Cart