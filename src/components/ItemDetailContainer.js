import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from './ItemDetail'
import { doc, getDoc, getFirestore } from "firebase/firestore";

//Cargo datos desde el archivo Json y llamo al itemDetail
const ItemDetailContainer = () => {

  const [prods, setProds] = useState([])
  const { slug } = useParams()

      useEffect(() => {     
        getItem();
      //eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);
     //los traigo usando la función de tipo Promise getItem
      const getItem = async () => {
         const db = getFirestore();
         const datoItem = doc(db, "productos", slug);

        await getDoc(datoItem).then((snapshot) => {
            if(snapshot.exists()){
              setProds({id: snapshot.id, ...snapshot.data()})
            }
         })
  };
  

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
