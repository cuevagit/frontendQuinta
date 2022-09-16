import { useState } from "react"
import React from "react";
//import CartContext from './CartContext';


const ProdsContext = React.createContext([])

export default ProdsContext


const ProdsProvider = ({defaultValue=[], children}) => {

    const [prods, setProds] = useState(defaultValue)

    //const {items} = useContext(CartContext)

     
        const getDatos = (datos, time) => {
            return new Promise((resolve, reject) => {
            setTimeout(() => {
              if (datos) {
                resolve(datos);
              } else {
                reject("Error");
              }
            }, time);
            
          }
          )};

    function cargar(productosJson) {

        getDatos(productosJson , 2000)
        .then((prods) => {
          setProds(prods);
        })
        .catch((err) => console.log(err, ": no hay productos"));
    }


   // console.log(prods)

    function stockf(prods, item, codigo){
       prods.find(p => p.codigo === codigo).stock = prods.find(p => p.codigo === codigo).stock + item.find(p => p.codigo === codigo).cantidad
       setProds(prods)
    }

    function resetear(items, prods){
       setProds([])
       console.log(items)
       items.forEach( c => {
        /*console.log(c.codigo)
        console.log(prods[c.codigo].stock)
        console.log(c.cantidad)*/
        prods[c.codigo-1].stock = prods[c.codigo-1].stock + Number(c.cantidad)
       })
       setProds(prods)

        // cargar(productosJson)
    }


      return (
        <ProdsContext.Provider value={{prods, cargar, stockf, resetear}}>
          {children}
        </ProdsContext.Provider>
      )

   
 }

export  {ProdsProvider}