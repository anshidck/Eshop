import React from 'react'

function PopularEvents() {
  return (
    <div className='w-[85%] mx-auto my-10'>
        <div>
            <h1 className='text-3xl font-bold py-2'>Popular Events</h1>
        </div >
        <div className='grid grid-cols-2 bg-white p-3'>
            <div>
                <img src="https://www.mobilepagla.com/wp-content/uploads/2021/05/Apple-iPhone-14-Pro-Max-500x500.jpg" alt="iphone" />
            </div>
            <div className='px-7'>
                <h2 className='text-3xl font-bold pt-7 py-3'>IPhone 14 pro max</h2>
                <p className='font-semibold'>The iPhone 14 Pro and iPhone 14 Pro Max are smartphones designed, developed, and marketed by Apple Inc. They are the sixteenth-generation flagship iPhones,
                     succeeding the iPhone 13 Pro and iPhone 13 Pro Max. The devices were unveiled alongside the iPhone 14 and iPhone 14 Plus during the Apple Event at Apple Park in
                      Cupertino, California, on September 7, 2022. Pre-orders
                     for the iPhone 14 Pro and 14 Pro Max began on September 9, 2022, and were made available on September 16, 2022.
                     The iPhone 14 Pro and iPhone 14 Pro Max are the first iPhones to have a new type of display cutout called "Dynamic Island", replacing the notch design that has been 
                     in use since the iPhone X was introduced.</p>
                     <div className='py-3 flex gap-10 '>
                        <button className='p-3 bg-white border border-black rounded'>Details</button>
                        <button className='p-3 bg-black text-yellow-400 font-bold rounded'>Add To Cart</button>
                     </div>
            </div>
            

        </div>
    </div>
  )
}

export default PopularEvents