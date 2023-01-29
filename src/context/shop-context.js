import React, {createContext, useState} from 'react'

import { Products } from '../products'

export const ShopContext = createContext(null)

const getDefaultCart = () =>{
    let cart = {}
    Products.forEach((product)=>{
        cart[product.id] = 0
    })
    return cart
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }
    return (
        <ShopContext.Provider value={contextValue}>
          {props.children}
        </ShopContext.Provider>
    )
}

