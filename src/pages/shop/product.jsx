import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

const Product = (props) => {
    const { id, productName, price, productImage } = props.data
    const {addToCart, cartItems} = useContext(ShopContext)
  return (
    <div className='product'>
        <img alt="product" src={productImage} />
        <div className="description">
        <p>
            <b>{productName}</b>
        </p>
        <p> ${price}</p>
        <button className="addToCartBttn" onClick={()=> addToCart(id)}> 
        Add To Cart {cartItems[id] > 0 && <>({cartItems[id]}) </>}
        </button>
        </div>

    </div>
  )
}

export default Product
