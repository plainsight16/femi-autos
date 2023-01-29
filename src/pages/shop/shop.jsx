import React from 'react'
import { Products } from '../../products';
import Product from './product';
import './shop.css'

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Femi Autos</h1>
      </div>
      <div className='products'>
      {Products.map( product => <Product key={product.id} data={product}/> )}
      </div>
      
    </div>
  )
}

export default Shop;