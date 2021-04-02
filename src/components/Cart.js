import React from 'react'
import '../index.css'

const Cart = ({ cartItems }) => {
    
    console.log(cartItems)
    return (
        <p>Items in Cart: {cartItems.length }</p>
    )
}

export default Cart
