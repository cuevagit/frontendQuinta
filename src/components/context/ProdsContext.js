import { useState } from "react"
import React from "react";
import {collection, doc, getDoc, getDocs, updateDoc, getFirestore, query, where} from "firebase/firestore";

const ProdsContext = React.createContext([])

export default ProdsContext

const ProdsProvider = ({defaultValue=[], children}) => {

  //Paso la lógica que trae los datos de los productos al Json a este Provider Custimizado, 
  //para tenerlos disponibles en otros componentes
    const [prods, setProds] = useState(defaultValue)

  async function cargar(categoryId) {
        //Trayendo datos del Firebase
          const db = getFirestore();

          if (categoryId === 'ofertas'){ 
             const q = query(collection(db, 'productos'), where('oferta', "==", 'S'));
             await getDocs(q).then((snapshot) => {
             setProds(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
          })     
            } else {

          if (categoryId) { 
             const q = query(collection(db, 'productos'), where("categoria", "==", categoryId));

            await getDocs(q).then((snapshot) => {
            setProds(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
          })
          } else {
            const productos = collection(db, 'productos');
            await getDocs(productos).then((snapshot) => {
            setProds(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            })
           }
          }
    }


     //Función para Cuando elimino un producto del carrito, vuelva esos productos al stock del producto 
    function stockf(prods, item, codigo){

      const db = getFirestore();

       prods.find(p => p.codigo === codigo).stock = item.find(p => p.codigo === codigo).stock 
       prods.find(p => p.codigo === codigo).stock = prods.find(p => p.codigo === codigo).stock + item.find(p => p.codigo === codigo).cantidad
       const stockProd = doc(db, "productos", (item.find(p => p.codigo === codigo).slug))
       updateDoc(stockProd, {stock: prods.find(p => p.codigo === codigo).stock })

       setProds(prods)
    }

    //Elimino todos los productos del carrito, y luego recorro cada uno de los que se eliminan,
    //y devuelvo ese stock al stock de cada producto
    function resetear(items, prods){
      const db = getFirestore();

       items.forEach( c => {
        const datoItem = doc(db, "productos", (c.slug));
        getDoc(datoItem).then((snapshot) => {
          if(snapshot.exists()){
            const arr = {id: snapshot.id, ...snapshot.data()}
            prods.find(p => p.codigo === c.codigo).stock = arr.stock
            prods.find(p => p.codigo === c.codigo).stock = prods.find(p => p.codigo === c.codigo).stock + Number(c.cantidad)
            const stockProd = doc(db, "productos", (c.slug))
            updateDoc(stockProd, {stock: prods.find(p => p.codigo === c.codigo).stock })
          }
       })
       })
       setProds(prods)
    }

    
      return (
        <ProdsContext.Provider value={{prods, cargar, stockf, resetear}}>
          {children}
        </ProdsContext.Provider>
      )
 }

export  {ProdsProvider}