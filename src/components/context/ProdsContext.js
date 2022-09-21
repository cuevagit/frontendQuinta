import { useState } from "react"
import React from "react";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";

const ProdsContext = React.createContext([])

export default ProdsContext

const ProdsProvider = ({defaultValue=[], children}) => {

  //Paso la lógica que trae los datos de los productos al Json a este Provider Custimizado, 
  //para tenerlos disponibles en otros componentes
    const [prods, setProds] = useState(defaultValue)

   
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
  function cargar(categoryId) {
          //Trayendo datos del Firebase
        //categoryId = "armas"
          const db = getFirestore();

          if (categoryId === 'ofertas'){ 
            console.log("entró!!")
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
       prods.find(p => p.codigo === codigo).stock = prods.find(p => p.codigo === codigo).stock + item.find(p => p.codigo === codigo).cantidad
       setProds(prods)
    }

    //Elimino todos los productos del carrito, y luego recorro cada uno de los que se eliminan,
    //y devuelvo ese stock al stock de cada producto
    function resetear(items, prods){
       setProds([])
       items.forEach( c => {
       prods[c.codigo-1].stock = prods[c.codigo-1].stock + Number(c.cantidad)
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