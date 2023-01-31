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
    console.log(cartItems);

    const addToCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }
    
    const getTotalAmount = () =>{
        let total = 0;
        for (const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = Products.find(product => product.id === Number(item))
                total += cartItems[item] * itemInfo.price
            }
        }
        return total;
    }
    const updateCartItemCount = (value, itemId) =>{
        setCartItems(prev => ({...prev, [itemId]: value}))
    }
    const checkout = () =>{
        setCartItems(getDefaultCart())
    }

    const contextValue = {cartItems, addToCart, removeFromCart, getTotalAmount, updateCartItemCount, checkout}
    return (
        <ShopContext.Provider value={contextValue}>
          {props.children}
        </ShopContext.Provider>
    )
}

