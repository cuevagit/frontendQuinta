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
    const {cantidadactual} = useContext(CartContext)
    const {cantidadFn} = useContext(CartContext)


    //Calculo el total gastado, más el total de la cantidad comprada, para mostrar en el 
    //Detalle del Carrito
    const totalfull = items.reduce((acumulador, items) => acumulador + Number(items.precio) * items.cantidad, 0)
    //const cantcaprada = items.reduce((acumulador, items) => acumulador + items.cantidad, 0)
    cantidadFn(items, 0)

    //Doy la posibilidad de eliminar uno en particular, o todos, ejecutando las funciones correspondientes
    return(
    <>
     <br></br>
     <br></br> <br></br>
     <div className="container">

     { items.length ? (
      <>
     <div >        

     <h1>Desea eliminar todos los productos del carrito? </h1>

     </div>

     <p> 
        <Button onClick={() => {clear(); resetear(items, prods); }}>Eliminar Todos los Productos del Carrito  </Button>
     </p>
     </>
     ) : ("") 
      }

      <div className="listadocarrito">
         <br></br>
         { items.length ? (
      <h1>De lo contrario elija cual eliminar:</h1>) : ("")
       }

     { items.length ?  (items.map( p =>
        <ItemCarrito key={p.codigo} codigo={p.codigo} slug={p.slug} marca={p.marca} 
        tipo={p.tipo} precio={p.precio} estado={p.estado} cantidad={p.cantidad} stock={p.stock} img={p.img}/>
         )) : (  <p className="mensaje"> <br></br> <h1><strong>No hay productos en el carrito... </strong></h1></p>)  
     }
     </div>

      {items.length ? ( <div className="card"><strong>Resumen del Carrito: <br></br></strong>
      <p className="detalleCarrito">
       <h3>Cantidad comprada: {cantidadactual}</h3>
       <h3>Costo total: $ {totalfull}</h3>
       </p>
       <br></br></div>) : ("")}
     </div>
    </>
   )
}

export default Carrito