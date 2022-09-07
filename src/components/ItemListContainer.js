import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from './ItemList'
import productosJson from "../productos.json";

const ItemListContainer = () => {

  const [prods, setProds] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {     
    getItem(productosJson , 2000)
     .then((datos) => {
       setProds(datos);
     })
     .catch((err) => console.log(err, ": no hay productos"));
 }, []);

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
  
//En caso de querer usar fetch
 /* useEffect(() => {

    //Traigo los datos del archivo Json
    fetch('../productos.json')
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
        <div>Listado de Productos</div>
        {categoryId === undefined ?  
          (<ItemList prods={prods}/>)  :   
          (categoryId === 'ofertas' ? (<ItemList prods={prods.filter(p => p.oferta === 'S')}/>) :
          (<ItemList prods={prods.filter(p => p.categoria === categoryId)}/>) 
          )
        }
          <br></br>  <br></br> 
        </div>
      </>
    )
  }
  export default ItemListContainer