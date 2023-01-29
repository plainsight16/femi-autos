import React from 'react'

const Product = (props) => {
    const { productName, price, productImage } = props.data;
  return (
    <div className='product'>
        <img alt="product" src={productImage} />
        <div className="description">
        <p>
            <b>{productName}</b>
        </p>
        <p> ${price}</p>
        </div>
    </div>
  )
}

export default Product
