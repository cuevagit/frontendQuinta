import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from './ItemDetail'
import productosJson from "../productos.json";


const ItemDetailContainer = () => {

  const [prods, setProds] = useState([])
  const { slug } = useParams()

      useEffect(() => {     
     getItem(productosJson, 2000)
      .then((datos) => {
        setProds(datos);
      })
      .catch((err) => console.log(err, ": no hay productos"));
     }, []);

     //los traigo usando la función de tipo Promise getItem
     const getItem = (datos, time) => {
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
          <ItemDetail prods={prods.filter(p => p.slug === slug)}/> 
          <br></br>  <br></br> 
          </div>
        </>
      )
    }

    export default ItemDetailContainer
