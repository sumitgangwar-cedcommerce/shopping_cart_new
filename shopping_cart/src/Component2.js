import { Drawer } from '@mui/material'
import React, { useContext, useState } from 'react'
import CartComponent from './CartComponent'
import {Contex} from './Data'

const Component2 = () => {
    const item = useContext(Contex)
    const [open , setOpen] = useState(false)


    const catHandler = (e) =>{
        if(e.target.checked){
            item.cat[1]([...item.cat[0] , e.target.value])
        }
        else{
            let c = item.cat[0]
            let ind  = item.cat[0].indexOf(e.target.value)
            console.log(ind)
            c.splice(ind , 1)
            item.cat[1]([...c])
        }
    }
  return (
    <div className="two">
        <h2>Filter</h2>
        <p>
            <input type="checkbox" value="men's clothing" onClick={catHandler} /> Mens Clothing
        </p>
        <p>
            <input type="checkbox" value="jewelery" onClick={catHandler} /> Jwellery
        </p>
        <p>
            <input type="checkbox" value="electronics" onClick={catHandler} /> Electronics
        </p>
        <p>
            <input type="checkbox" value="women's clothing" onClick={catHandler} /> Women's Clothing
        </p>
        <div className="cart_btn" onClick={() =>setOpen(true)}>Go to Cart</div>
        <Drawer
          anchor='right' 
          open={open}
          onClose={() =>setOpen(false)}
        >
          <CartComponent />
        </Drawer>
    </div>
  )
}

export default Component2