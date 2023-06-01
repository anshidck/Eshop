import React from 'react'
import Hero from '../../components/user/Hero'
import Category from '../../components/user/Category'
import Products from './Products'

function HomePage() {
  return (
    <div>
        <Hero/>
        <Category/>
        <Products/>
    </div>
  )
}

export default HomePage