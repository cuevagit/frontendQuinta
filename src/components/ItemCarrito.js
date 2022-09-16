//import {useState} from "react"
import { Button } from 'react-daisyui'
import { Link } from 'react-router-dom';
import { useContext } from "react"
import CartContext from './context/CartContext';
import ProdsContext from './context/ProdsContext';


const ItemCarrito = ( {codigo, slug, marca, tipo, precio, estado, stock, cantidad, img} ) => {

    const {removeItem} = useContext(CartContext)
    const {items} = useContext(CartContext)
    const {prods} = useContext(ProdsContext)
    const {stockf} = useContext(ProdsContext)

    console.log(prods)
    //stockf(prods, items, codigo)
   // (() => stockf(prods, items, codigo))
   //<Button onClick={() => {removeItem(codigo); stockf(prods, items, codigo);}}>Eliminar</Button>          

    return (
   <>      
        <div className="card w-96 bg-base-100 shadow-xl px-6 py-6"> 
          <strong>{tipo}</strong>
          <img className= "imagen" src={img} alt="Imagen producto"/>
          <h6>Marca: {marca} </h6>
          <h6>Stock: {stock} </h6>
          <h6>Precio: {precio}</h6>
          <h6>Estado: {estado}</h6>
          <h6>Cantidad: {cantidad}</h6>
          <br></br>
          <Link to={'/item/' + slug}>
          <Button>Ver Detalle</Button>
          </Link>
          <br></br>
          <br></br>
          <Button onClick={() => {stockf(prods, items, codigo); removeItem(codigo); }}>Eliminar</Button>          

          <br></br><br></br>
      </div>
  </>

    )
  }

  export default ItemCarrito