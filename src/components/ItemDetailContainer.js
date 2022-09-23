import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from './ItemDetail'
//import productosJson from "../productos.json";
import { doc, getDoc, getFirestore } from "firebase/firestore";

//Cargo datos desde el archivo Json y llamo al itemDetail
const ItemDetailContainer = () => {

  const [prods, setProds] = useState([])
  const { slug } = useParams()

      useEffect(() => {     
       setTimeout(() => {
        getItem();
       }, 2000);

      /*Esto sería desde el Json
      getItem(productosJson, 2000)
      .then((datos) => {
        setProds(datos);
      })
      .catch((err) => console.log(err, ": no hay productos"));*/

      //eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);
     //los traigo usando la función de tipo Promise getItem
     //const getItem = (datos, time) => {
      const getItem = () => {
         const db = getFirestore();
         const datoItem = doc(db, "productos", slug);

         getDoc(datoItem).then((snapshot) => {
            if(snapshot.exists()){
              setProds({id: snapshot.id, ...snapshot.data()})
            }

         })

     /*Esto es de Json
       return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (datos) {
          resolve(datos);
        } else {
          reject("Error");
        }
      }, time);
    }
    )*/
  };
  
  //En caso de querer usar Fetch:
        //Traigo los datos del archivo Json usando Fecth
  //fetch('http://localhost:3000/productos.json' )
 /*fetch('/productos.json' )
   .then( resp => resp.json() )
   .then( datos => {
    setTimeout(() => {
       setProds(datos)
     }, 2000);
   })
   .catch(error => console.error("Se produjo un error: " + error));
}, [])*/

      return (
        <>
          <div className="container"> 
          <br></br>   
          <div><strong>Detalle del Producto</strong></div>
          <ItemDetail prods={prods}/> 
          <br></br>  <br></br> 
          </div>
        </>
      )
    }

    export default ItemDetailContainer
