import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { logout, reset } from '../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'
import { BsPersonCircle } from 'react-icons/bs'
import { HiOutlineClipboardList, HiOutlineLogout } from 'react-icons/hi'
import { MdOutlineSummarize, MdHistory } from 'react-icons/md';

function Profile() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        dispatch(clearCart())
        navigate('/')
      }
  return (
    <div className='flex gap-2'>
        <div className='bg-white h-[100vh] p-6 w-[25%]'>
           <div className='py-3 border-b-2 border-yellow-500 '>
              <div className='flex items-center gap-3'>
                <BsPersonCircle size={40}/>
                <div>
                    <h1 className='font-bold text-2xl'>{user && user.name}</h1>
                    <p>{user && user.email}</p>
                </div>
              </div>
           </div>
           <div className='flex flex-col justify-between'>
                <ul className='flex flex-col py-4 gap-7 text-lg font-semibold'>
                  <Link className='flex items-center gap-2' to='/profile/address'><HiOutlineClipboardList size={22}/>Address</Link>
                  <Link className='flex items-center gap-2' to='/profile/Summary'><MdOutlineSummarize size={22}/>Summary</Link>
                  <Link className='flex items-center gap-2' to='/profile/order'><MdHistory size={22}/>Orders</Link>
                  <Link className='flex items-center gap-2' to='/profile/user'>Users</Link>
                </ul>
           </div>
           <div className='font-semibold pt-36'>
             <button className='flex items-center gap-2' onClick={onLogout}><HiOutlineLogout size={22}/>Logout</button>
           </div>
        </div>
        <div className='w-full'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Profile