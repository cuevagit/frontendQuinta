import { Button } from 'react-daisyui'
import { useContext } from "react"
import CartContext from './context/CartContext';
import ProdsContext from './context/ProdsContext';
import ItemCarrito from './ItemCarrito'


function Carrito(){

    const {clear} = useContext(CartContext)
    const {items} = useContext(CartContext)
    const {prods} = useContext(ProdsContext)
    const {resetear} = useContext(ProdsContext)

   // console.log(items.length)
    //console.log(items)

    return(
    <>
     <br></br>
     <br></br> <br></br>
     <div className="container">

     <div >        

     <h1>Desea eliminar todos los productos del carrito?</h1>

     </div>

     <p>
        <Button onClick={() => {clear(); resetear(items, prods); }}>Eliminar Todos los Productos del Carrito  </Button>
     </p>
     
      <div className="listadocarrito">
         <br></br>
      <h1>De lo contrario elija cual eliminar</h1>

     { items.length ?  (items.map( p =>
        <ItemCarrito key={p.codigo} codigo={p.codigo} slug={p.slug} marca={p.marca} 
        tipo={p.tipo} precio={p.precio} estado={p.estado} cantidad={p.cantidad} stock={p.stock} img={p.img}/>
         )) : (  <p className="mensaje"> <br></br> <h1><strong>No hay productos... </strong></h1></p>)  
     }
     </div>
   </div>
    </>
   )
}

export default Carrito