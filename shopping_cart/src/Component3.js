import { Rating } from '@mui/material'
import React, { useContext } from 'react'
import {Contex} from './Data'

const Component3 = () => {
    const item = useContext(Contex)

    const add_to_cart = (product) => {
      if(item.cart[0].indexOf(product)===-1) {
        item.cart[1]([...item.cart[0] , product])
        item.quan[1]({...item.quan[0] , [product.id]:[1 , product.price , product.price]})
      }
    }
    // console.log(item.total)
  return (
    <div className="three">
      {
        item.products[0].map((product, index) =>
          <div key={index} className="card">
            <img src={product.image} alt='#' />
            <p><Rating readOnly value={product.rating.rate}></Rating><span style={{ fontSize:'2vw'}}>({product.rating.count})</span></p>
            <p className='title' style={{minHeight:'5vw'}}>{product.title}</p>
            <p className='price'> Only at: ₹{product.price}/-</p>
            <button onClick={()=>add_to_cart(product)}>Add To Cart</button>
          </div>
        )
      }
    </div>
  )
}

export default Component3