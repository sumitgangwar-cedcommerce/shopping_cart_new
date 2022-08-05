import React, { useEffect, useState } from 'react'
import App from './App'
import items from './Data.json'
export const Contex = React.createContext()
const Data = (props) => {
    const [products , setProducts] = useState([...items])
    const [category , setCategory] = useState([])
    const [cart , setCart] = useState([])
    const [quantity , setQuantity] = useState({})
    const [total , setTotal] = useState(0)

   

    useEffect(()=>{
        if(category.length > 0){
            let temp=[]
            for (let i = 0; i < items.length; i++){
                if(category.indexOf(items[i].category)!==-1)    temp.push(items[i])
            }
            setProducts([...temp])
        }
        else{
            setProducts([...items])
        }
    },[category])

    

    return (
        <Contex.Provider value = {{products:[products , setProducts] , cat:[category , setCategory] , cart:[cart , setCart] , quan:[quantity , setQuantity] , total:[total , setTotal]}}>
            {props.children}
        </Contex.Provider>
    )
}

export default Data