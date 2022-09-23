import { useState } from "react"
import React from "react";
import {collection, doc, getDoc, getDocs, updateDoc, getFirestore, query, where} from "firebase/firestore";

const ProdsContext = React.createContext([])

export default ProdsContext

const ProdsProvider = ({defaultValue=[], children}) => {

  //Paso la lógica que trae los datos de los productos al Json a este Provider Custimizado, 
  //para tenerlos disponibles en otros componentes
    const [prods, setProds] = useState(defaultValue)

  function cargar(categoryId) {
        //Trayendo datos del Firebase
        //categoryId = "armas"
          const db = getFirestore();

          if (categoryId === 'ofertas'){ 
            //console.log("entró!!")
             const q = query(collection(db, 'productos'), where('oferta', "==", 'S'));
             getDocs(q).then((snapshot) => {
              /* if(snapshot.exists()){*/
             setProds(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
          })     
            } else {

          if (categoryId) { 
             const q = query(collection(db, 'productos'), where("categoria", "==", categoryId));

            getDocs(q).then((snapshot) => {
              /* if(snapshot.exists()){*/
             setProds(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
          })
          } else {
            const productos = collection(db, 'productos');
            getDocs(productos).then((snapshot) => {
              /* if(snapshot.exists()){*/
             setProds(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
             })
           }
          }
          
       //Trayendo datos del Json
     /*   const getDatos = (datos, time) => {
           //Trayendo del Json
            return new Promise((resolve, reject) => {
            setTimeout(() => {
              if (datos) {
                resolve(datos);
              } else {
                reject("Error");
              }
            }, time);
            
          }
        )
      };*/

 //   function cargar(productosJson) {

           // console.log(snapshot.data())
          

    //Trayendo datos del Json  
      /*  getDatos(productosJson , 2000)
        .then((prods) => {
          setProds(prods);
        })
        .catch((err) => console.log(err, ": no hay productos"));*/

    }


     //Función para Cuando elimino un producto del carrito, vuelva esos productos al stock del producto 
    function stockf(prods, item, codigo){

      const db = getFirestore();

             console.log("Esto es stockf")
             console.log(prods)

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

       //setProds([])
       console.log("Acaba de Restear: items y prods")
       console.log(items)
       console.log(prods)
       items.forEach( c => {
        console.log("Esta es la cantidad")
        console.log(c.cantidad)

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