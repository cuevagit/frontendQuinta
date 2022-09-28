import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from './ItemList'
import {collection, getDocs,  getFirestore, query, where} from "firebase/firestore";


//Cargo datos desde el archivo Json y llamo al ItemList
const ItemListContainer = () => {

  const { categoryId } = useParams()
  const [prods, setProds] = useState([])


  useEffect(() => {    
      cargar(categoryId);
    //Llamo a la función que carga los datos, definida en el contexto de Productos: ProdsContext
     //eslint-disable-next-line react-hooks/exhaustive-deps
 }, [categoryId]);


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