import { useState } from "react"
import React from "react";

const CartContext = React.createContext([])

export default CartContext


const CartProvider = ({defaultValue=[], children}) => {

    const [items, setItems] = useState(defaultValue)

    const addItem = (item, quantity) => {  

      //const aux = items;
    // console.log(aux)

     //const cantidad = Number(quantity)
//console.log(item[0].codigo) 
     
      if(isInCart(item[0].codigo)){

        //console.log("Ya está!!!!")
        item[0].cantidad = item[0].cantidad + quantity
        item[0].stock = item[0].stock - quantity

       // console.log(quantity)
        setItems(items)
      } else {
        item[0].cantidad = quantity
        item[0].stock = item[0].stock - quantity

       setItems( prevState => prevState.concat(item) )
      }
      //console.log(items.codigo)


    }

   // console.log(items)


    const clear = () => {
        setItems([])
    }

      function isInCart(id){
         return items.find(p => p.codigo===id)
      }

      function removeItem(id){
        setItems(items.filter(p => p.codigo!==id))
      }

      return (
        <CartContext.Provider value={{items, addItem, clear, removeItem}}>
          {children}
        </CartContext.Provider>
      )

}

export  {CartProvider}