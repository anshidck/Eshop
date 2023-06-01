import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Spinner from '../../components/Spinner';
import { createProducts, reset } from "../../features/products/productsSlice";

function CreatePage() {
    const [formData, setFormData] = useState({
        name: '',
        slug: '',
        image: '',
        brand: '',
        category: '',
        description: '',
        price: '',
        countInStock: '',
        rating: '',
        numReviews: ''
      })
    
      const { name, slug, image, brand, category, description, price, countInStock, rating, numReviews} = formData;
      
      const dispatch = useDispatch();
      const navigate = useNavigate();
    
      const { products, isLoading, isError, isSuccess, message } = useSelector((state) => state.products)
    
      useEffect(() => {
        if (isError) {
          toast.error(message)
        } 
        
        dispatch(reset())
      },[products, isError, isSuccess, dispatch, navigate, message])
    
      const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }
    
      const onSubmit = (e) => {
        e.preventDefault()
          dispatch(createProducts(formData))
        }
      
    
      if (isLoading) {
        return <Spinner/>
      }
    
  return (
    <div>
      <section className='bg-white w-[400px] h-100vh  mx-auto my-2 flex flex-col items-center p-6 '>
        <h1 className='text-5xl font-bold py-3 text-black'>Create product</h1>
        <p className='font-semibold'>add so many items</p>
      <form onSubmit={onSubmit} className='w-full py-6 flex flex-col'>
        <div className="flex gap-3 w-full ">
          <div className='py-2'>
            <input type="text" className='w-full py-3 px-2 outline-1 outline-none shadow-sm shadow-black rounded text-black font-semibold' id='name' name='name' value={name} onChange={onChange} placeholder='Product Name'/>
          </div>
          <div className='py-2'>
            <input type="text" className='w-full py-3 px-2 outline-1 outline-none shadow-sm shadow-black rounded text-black font-semibold' id='slug' name='slug' value={slug} onChange={onChange} placeholder='Slug'/>
          </div>
        </div>
        <div className="flex gap-3 w-full">
          <div className='py-2'>
            <input type="text" className='w-full py-3 px-2 outline-1 outline-none shadow-sm shadow-black rounded text-black font-semibold' id='image' name='image' value={image} onChange={onChange} placeholder='Image URL'/>
          </div>
          <div className='py-2'>
            <input type="text" className='w-full py-3 px-2 outline-1 outline-none shadow-sm shadow-black rounded text-black font-semibold' id='brand' name='brand' value={brand} onChange={onChange} placeholder='Brand'/>
          </div>
        </div>
        <div className="flex gap-3 w-full">
          <div className='py-2'>
            <input type="text" className='w-full py-3 px-2 outline-1 outline-none shadow-sm shadow-black rounded text-black font-semibold' id='category' name='category' value={category} onChange={onChange} placeholder='Category'/>
          </div>
          <div className='py-2'>
            <input type="text" className='w-full py-3 px-2 outline-1 outline-none shadow-sm shadow-black rounded text-black font-semibold' id='description' name='description' value={description} onChange={onChange} placeholder='Description'/>
          </div>
        </div>
        <div className="flex gap-3 w-full">
          <div className='py-2'>
            <input type="number" className='w-full py-3 px-2 outline-1 outline-none shadow-sm shadow-black rounded text-black font-semibold' id='price' name='price' value={price} onChange={onChange} placeholder='Price'/>
          </div>
          <div className='py-2'>
            <input type="number" className='w-full py-3 px-2 outline-1 outline-none shadow-sm shadow-black rounded text-black font-semibold' id='coountInStock' name='countInStock' value={countInStock} onChange={onChange} placeholder='Stock'/>
          </div>
        </div>
        <div className="flex gap-3 w-full">
          <div className='py-2'>
            <input type="number" className='w-full py-3 px-2 outline-1 outline-none shadow-sm shadow-black rounded text-black font-semibold' id='rating' name='rating' value={rating} onChange={onChange} placeholder='Rating'/>
          </div>
          <div className='py-2'>
            <input type="number" className='w-full py-3 px-2 outline-1 outline-none shadow-sm shadow-black rounded text-black font-semibold' id='numReviews' name='numReviews' value={numReviews} onChange={onChange} placeholder='Reviews'/>
          </div>
        </div>
        
        <div className='py-2'>
          <button className='w-full text-center py-3 bg-black text-white rounded' type='submit'>Submit</button>
        </div>
        </form>
      </section>
    </div>
  )
}

export default CreatePage