import React from 'react'
import Hero from '../components/Hero'
import Category from '../components/Category'
import Products from './Products'
import PopularEvents from '../components/PopularEvents'

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