import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function Dashboard() {
  return (
    <div className='h-[100vh] flex w-[300px] bg-black text-white p-5'>
        <div className='flex flex-col'>
         <div className='py-4'>
             <h1 className='font-bold text-2xl'>Dashboard</h1>
         </div>
         <div>
             <ul className='flex flex-col py-4 gap-5 text-xl'>
                 <Link to='/admin/product'>Products</Link>
                 <Link to='/admin/Summary'>Summary</Link>
                 <Link to='/admin/order'>Orders</Link>
                 <Link to='/admin/user'>Users</Link>
             </ul>
         </div>
        </div>
        <div className='ml-52 w-full p-2'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Dashboard