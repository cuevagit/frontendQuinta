import { useEffect, useState } from "react"
import ItemList from './ItemList'

const Ofertas = () => {

  const [prods, setProds] = useState([])


  useEffect(() => {
    //Traigo los datos del archivo Json
    fetch('./productos.json')
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
        <div>Ofertas</div>
           <ItemList prods={prods.filter((p) => p.oferta ==="S")}/> 
          <br></br>  <br></br> 
        </div>
      </>
    )
  }
  export default Ofertas