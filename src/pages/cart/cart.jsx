import React, { useContext } from 'react';
import {Products}  from '../../products';
import { ShopContext } from '../../context/shop-context';
import { useNavigate } from "react-router-dom"
import CartItem from './cartItem';
import "./cart.css"
const Cart = () =>{
    const {cartItems, getTotalAmount, checkout} = useContext(ShopContext);
    const navigate = useNavigate();
    const totalAmount = getTotalAmount()

    return (
        <div className="cart">
            <h1>Your Cart Items</h1>
            <div className='cart'>
                {Products.map((product) => cartItems[product.id] > 0 && <CartItem data={product}/>)}
            </div>
            {
                totalAmount > 0 ?
                (<div className="checkout">
                    <p>Subtotal: ${totalAmount}</p>
                    <button onClick={() => navigate("/")}> Continue Shopping </button>
                    <button onClick={() => {checkout(); navigate("/checkout")}}> Checkout </button>
                </div>)
                :
                (<h1>Your Cart is empty</h1>)
           
            }
        
        
        </div>
    );
}

export default Cart;