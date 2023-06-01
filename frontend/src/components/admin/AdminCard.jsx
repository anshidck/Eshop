import React from 'react'

function AdminCard({ item }) {
  return (
    <div className='flex p-2 bg-white shadow-md shadow-black text-black gap-6 w-[900px] h-[150px] items-center'>
      <div>
        <img className='w-[100px]' src={item.image} alt={item.slug} />
      </div>
      <div className='flex gap-7'>
        <p className='font-bold text-xl'>{item.name}</p>
        <p>{item.description}</p>
        <p className='text-red-700 font-bold'>${item.price}</p>
      </div>
      <div className='flex gap-4 ml-auto mx-10'>
        <button className='bg-red-700 text-white p-3 rounded'>Delete</button>
        <button className='bg-blue-600 text-white p-3 px-5 rounded'>Edit</button>
      </div>
    </div>
  )
}

export default AdminCard