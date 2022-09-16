import { useState, useContext } from "react"
import { Button } from "react-daisyui";
import { Link } from 'react-router-dom';
import ItemCount from "./ItemCount";
import CartContext from './context/CartContext';

//Detalle del producto
const ItemDetail = ( {prods}) => {

 const {addItem} = useContext(CartContext)
 const [quantitytoadd, setQuantitytoadd] = useState(0)

    //Agrego producto al carito
    function onAdd(cantidad){
     setQuantitytoadd(cantidad) 
     addItem(prods, cantidad)
  }

    return (
      <>
    <div>
    </div>
        <div  className="card w-96 bg-base-100 shadow-xl px-6 py-6">
        { prods.length ? (
            <div key={prods[0].codigo} >
                <br></br>
                <img className= "imagen_detalle" src={'' + prods[0].img} alt="Imagen producto"/>
                <h5> <strong> Producto: </strong>{prods[0].tipo}</h5> 
                <br></br>
                <h5> <strong>Marca: </strong> {prods[0].marca} </h5>  
                <br></br>
                <h5> <strong>Características: </strong></h5>  
                <h5 className="textoDescripcion">{prods[0].detalle} </h5> 
                <br></br> 
                <h5> <strong> Estado: </strong> {prods[0].estado} </h5> 
                <br></br> 
                <h5> <strong> Precio: </strong> $ {prods[0].precio} </h5>  
                <br></br> 
                <h5> <strong> Stock: </strong> {prods[0].stock} </h5> 
                <br></br> 
                <h5> <strong> Cantidad a comprar: </strong> {quantitytoadd} </h5> 
                <br></br> 
                {quantitytoadd === 0 ? 
                (<ItemCount onAdd={onAdd} stock={prods[0].stock} initial="1"/>) : 
                (<Link to={'/Carrito/'}><Button> Terminar Compra</Button></Link>)
                }
                <br></br>
                <br></br> 
            </div>      
          ) : (<p className="mensaje"><h1>Loading...</h1></p>)  
         }
      </div>
      </>
    )
  }
  
  export default ItemDetail