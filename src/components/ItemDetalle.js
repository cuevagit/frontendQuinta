import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Detalle from './Detalle'

const ItemDetalle = () => {

    const [prods, setProds] = useState([])
    const { codigo } = useParams()

  
    useEffect(() => {
      //Traigo los datos del archivo Json
    //  fetch('http://localhost:3000/productos.json' )
    fetch('/productos.json' )
        .then( resp => resp.json() )
        .then( datos => {
         setTimeout(() => {
            setProds(datos)
          }, 2000);
        })
        .catch(error => console.error("Se produjo un error: " + error));
    }, [])
    

      return (
        <>
        
          <div className="container"> 
          <br></br>   
          <div><strong>Detalle del Producto</strong></div>
          <Detalle prods={prods.filter((p) => p.codigo === codigo )}/> 
          <br></br>  <br></br> 
          </div>
        </>
      )
    }

    export default ItemDetalle
