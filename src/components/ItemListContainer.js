import { useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import ItemList from './ItemList'
//import productosJson from "../productos.json";
import ProdsContext from './context/ProdsContext';


//Cargo datos desde el archivo Json y llamo al ItemList
const ItemListContainer = () => {

  const { categoryId } = useParams()
  const {prods} = useContext(ProdsContext)
  const {cargar} = useContext(ProdsContext) 


  useEffect(() => {    
      cargar(categoryId);
    //Llamo a la función que carga los datos, definida en el contexto de Productos: ProdsContext
     //eslint-disable-next-line react-hooks/exhaustive-deps
 }, [categoryId]);

 

    return (
      <>
        <div className="container"> 
        <br></br>   
        <div><strong>{categoryId ? ("Listado de " + categoryId) : ("Listado de productos")}</strong></div>
           <ItemList prods={prods}/>  
    
          <br></br>  <br></br> 
        </div>
      </>
    )
  }

  export default ItemListContainer