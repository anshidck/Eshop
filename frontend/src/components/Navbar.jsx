import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsPersonCircle } from 'react-icons/bs'
import { MdFavorite } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import { HiShoppingBag } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'


function Navbar() {
 

  const { user } = useSelector((state) => state.auth)
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <div className='h-[60px] sm:h-[80px] w-full flex justify-between bg-black items-center px-7 fixed z-10 sticky-top'>
      <div className='px-4'>
        <Link to='/'>
        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold flex gap-2 text-white'><FaShoppingCart size={30}/> E-SHOP </h1>
        </Link>
      </div>
      {user && user.isAdmin ?  (
        <>
        <Link className='text-white bg-yellow-500 p-2 rounded' to='/admin'>Admin DashBoard</Link>
        </>
      ) : ('')}
      <div className=' hidden lg:flex bg-white px-2 rounded gap-3 text-black items-center'>
        <input className='px-4 py-1 outline-none font-bold' type="search" placeholder='Search Product.....' />
        <AiOutlineSearch size={20} color='black'/>

      </div>
      <div>
        <ul className='hidden md:flex gap-5 font-semibold text-yellow-500 '>
          <Link to='/'>Home</Link>
          <Link to='/product'>Product</Link>
          <Link to='/faq'>FAQ</Link>
        </ul>
      </div>
      <div>
        <ul className='flex gap-10 px-5 text-xl font-bold items-center justify-center text-white'>
          <Link className='hidden md:flex'><MdFavorite size={25} /></Link>
          <Link className='flex relative' to={user ? ('/cart') : ('/auth/login')}>
          <HiShoppingBag size={25}/>
          {cartTotalQuantity > 0 ? (
            <span className='bg-yellow-500 rounded-full text-xs h-[17px] px-1 absolute ml-4'>{cartTotalQuantity}</span>
          ) : ('')}
          </Link>
          <Link className='hidden md:flex' to={ user ? (`/profile`) : ('/auth/login')}><BsPersonCircle size={25}/></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar