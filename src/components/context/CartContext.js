import { useState } from "react"
import React from "react";

const CartContext = React.createContext([])

export default CartContext


const CartProvider = ({defaultValue=[], children}) => {

    const [items, setItems] = useState(defaultValue)

    const addItem = (item, quantity) => {  
      //Si ya existe el producto en el carrito, le sumo la cantidad nueva comprada
      if(isInCart(item[0].codigo)){
        item[0].cantidad = item[0].cantidad + quantity
        item[0].stock = item[0].stock - quantity 
        setItems(items)
      } else {   //Si no existe, agrego un nuevo producto al carrito
        item[0].cantidad = quantity
        item[0].stock = item[0].stock - quantity
        setItems( prevState => prevState.concat(item) )
      }
    }

    //Elimino todos los productos del carrito
    const clear = () => {
        setItems([])
    }

    //Función para ver si ya existe el producto en el carrito
      function isInCart(id){
         return items.find(p => p.codigo===id)
      }

      //Elimino un producto en particular del carrito
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