import React, {useEffect} from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsAsync } from '../features/products/productsSlice'
import Spinner from '../components/Spinner'
import AdminCard from '../components/AdminCard'

function AdminProduct() {
  
  const dispatch = useDispatch()
  const {products, isLoading, isError, message} = useSelector((state) => state.products)
  
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(fetchProductsAsync())
    
  },[isError, message, dispatch])

  if (isLoading) {
    return <Spinner/>
  }
    
  return (
    <div className=' '>
        <div className='my-3'>
         <Link className='bg-black p-3 rounded' to='create'>Create</Link>
        </div>
        <Outlet/>
        <div className='flex flex-col gap-4 w-full py-2'>
            {products.map((item) => (
              <AdminCard key={item._id} item={item}/>
            ))}
        </div>
    </div>
  )
}

export default AdminProduct