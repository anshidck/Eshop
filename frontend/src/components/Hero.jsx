import React from 'react'

function Hero() {
  return (
    <div className='relative'>
        <div className=''>
            <img className='max-h-[600px] w-full' src="https://images4.alphacoders.com/260/260758.jpg" alt="hero" />
        </div>
        <div className='absolute top-3 left-8 md:top-20 md:left-20 w-[50%]'>
            <h1 className='md:py-2 font-bold text-2xl md:text-4xl lg:text-5xl'>Best Collection of Home Decoration</h1>
            <p className='py-1 sm:py-4 text-xs sm:text-sm lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                <span className='hidden sm:block'>. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident</span></p>
            <button className='bg-yellow-500 my-1 px-2 md:px-7 py-1 md:py-2 font-bold text-base md:text-lg rounded'>Shop</button>
        </div>
    </div>
  )
}

export default Hero