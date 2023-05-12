import React from 'react'
import { Link } from 'react-router-dom'

function OrderSuccess() {
  return (
    <div>
        <h1>Your Order Was Success</h1>
        <Link to='/'>Countinue Shopping</Link>
    </div>
  )
}

export default OrderSuccess