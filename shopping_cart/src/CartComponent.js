import React, { useContext, useEffect, useState } from 'react'
import { Contex } from './Data'
const CartComponent = () => {
    const items = useContext(Contex)
    const [check , setChec] = useState(false)

    const increase= (id)=>{
        items.quan[0][id][0]+=1
        items.quan[0][id][1]=(Number(items.quan[0][id][0])*Number(items.quan[0][id][2])).toFixed(2)
        items.quan[1]({...items.quan[0]})
    }

    const decrease= (id)=>{
        if(items.quan[0][id][0]>1){
            items.quan[0][id][0]-=1
            items.quan[0][id][1]=(Number(items.quan[0][id][0])*Number(items.quan[0][id][2])).toFixed(2)
            items.quan[1]({...items.quan[0]})
        }
    }

    const deleteItem = (product)=>{
        let ind = items.cart[0].indexOf(product)
        items.cart[0].splice(ind , 1)
        items.cart[1]([...items.cart[0]])
        items.quan[0][product.id] = [0 , 0 , 0]
        items.quan[1]({...items.quan[0]})
    }

    const checkout = ()=>{
        if(items.cart[0].length===0)    return
        items.quan[1]({})
        items.cart[1]([])
        setChec(true)
    }

       

    useEffect(()=>{
        let t = 0;
        Object.keys(items.quan[0]).map((item)=>{
            t+=  Number(items.quan[0][item][1])
        })
        t = t.toFixed(2)
        items.total[1](t)
    },[items.quan[0]])
    // console.log(items.quan[0])

  return (
    <div className='Cart'>
        <h1>Shopping Cart <span><button id='chk' onClick={checkout}>Checkout</button>₹{items.total[0]}</span></h1>
        {
            check===true ? <h1 className='checkout'>Order Placed Successfully</h1> :
        
            items.cart[0].length>0 ? 
            items.cart[0].map((product , index) =>
                <div key={index} className='card'>
                    <div>
                        <img src={product.image} alt='#' />
                    </div>
                    <div>
                        <p className='n'>{product.title}<span style={{color: 'brown'}}>₹{items.quan[0][product.id][1]}</span></p>
                        <p className='g'>In Stock</p>
                        <p className='p'>₹{product.price}</p>
                        <p className='btn'>
                            <button style={{color:'red'}} onClick={()=>decrease(product.id)}>-</button>{items.quan[0][product.id][0]}<button onClick={()=>increase(product.id)} style={{color:'green'}}>+</button>
                            <button onClick={()=>deleteItem(product)}  className='del'>Delete</button>
                        </p>
                    </div>
                </div>
            ) : <h1 className='empty'>Your Cart is Empty</h1>
        }
    </div>
  )
}

export default CartComponent