import { useState } from "react"
import React from "react";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";

const CartContext = React.createContext([])

export default CartContext


const CartProvider = ({defaultValue=[], children}) => {

    const [items, setItems] = useState(defaultValue)
    const [cantidadactual, setCantidad] = useState(0)

    const addItem = (item, quantity) => {  
      //Si ya existe el producto en el carrito, le sumo la cantidad nueva comprada
      
      const db = getFirestore();
      const datoItem = doc(db, "productos", (item.slug));

      getDoc(datoItem).then((snapshot) => {
        if(snapshot.exists()){
          const arr = {id: snapshot.id, ...snapshot.data()}
          item.stock = arr.stock
        }
     })


      if(isInCart(item.codigo)){

        (items.find(p => p.codigo===(item.codigo))).cantidad = (items.find(p => p.codigo===(item.codigo))).cantidad + quantity;
        (items.find(p => p.codigo===(item.codigo))).stock = (items.find(p => p.codigo===(item.codigo))).stock - quantity;
        item.cantidad = quantity
        item.stock = item.stock - quantity
        const stockProd = doc(db, "productos", (item.slug))

        updateDoc(stockProd, {stock: (items.find(p => p.codigo===(item.codigo))).stock })
        setItems(items)

      } else {   //Si no existe, agrego un nuevo producto al carrito
        item.cantidad = quantity
        item.stock = item.stock - quantity
        const db = getFirestore();
        const stockProd = doc(db, "productos", (item.slug))
        updateDoc(stockProd, {stock: item.stock })
        setItems( prevState => prevState.concat(item) )
       }   
      
    }

    function sumar(cantidad, cantidadagregar){
      setCantidad(cantidad + cantidadagregar)
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
        //setCantidad(cantidad - Number(items.filter(p => p.codigo!==id).cantidad))
      }


      function cantidadFn(items, inicial){
        setCantidad(items.reduce((acumulador, items) => acumulador + items.cantidad, inicial))
      }


      return (
        <CartContext.Provider value={{items, addItem, clear, removeItem, cantidadactual, cantidadFn, sumar}}>
          {children}
        </CartContext.Provider>
      )

}

export  {CartProvider}