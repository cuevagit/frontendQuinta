import { Button } from 'react-daisyui'
import { useContext } from "react"
import CartContext from './context/CartContext';
import ItemCarrito from './ItemCarrito'
 

function Carrito(){

    const {clear} = useContext(CartContext)
    const {items} = useContext(CartContext)


   // console.log(items.length)
    console.log(items)

    return(
    <>
     <br></br>
     <br></br> <br></br>
     <div className="container">

     <div >        

     <h1><strong>Desea eliminar todos los productos del carrito?</strong></h1>
     </div>

     <p>
        <Button onClick={clear}>Eliminar Todos los Productos del Carrito  </Button>
     </p>
  <div className="listadocarrito">
     { items.length ? (items.map( p =>
        
        <ItemCarrito key={p.codigo} codigo={p.codigo} slug={p.slug} marca={p.marca} 
        tipo={p.tipo} precio={p.precio} estado={p.estado} cantidad={p.cantidad} stock={p.stock} img={p.img}/>
      
        )) : (  <p className="mensaje"> <h1>No hay productos... </h1></p>)  
     }
     </div>
   </div>
    </>
   )
}

export default Carrito