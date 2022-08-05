import { Drawer } from '@mui/material'
import React, { useContext, useState } from 'react'
import CartComponent from './CartComponent'
import {Contex} from './Data'
const Component1 = () => {
  const [open , setOpen] = useState(false)

  const item = useContext(Contex)

  return (
    <div className="one">
        <div>
            <img src='https://cdn.top.gg/icons/d4387e84d53fd24697a4218a9f6924a5.png' alt='#' />
        </div>
        <div className="padd">
            <h2>Welcome To Store</h2>
        </div>
        <div className='padd' onClick={()=>setOpen(true)} >
            <i className="fa-solid fa-bag-shopping"></i><span>{item.cart[0].length}</span>
        </div>
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

export default Component1