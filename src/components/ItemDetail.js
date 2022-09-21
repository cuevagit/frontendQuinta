import { useState, useContext } from "react"
import { Button } from "react-daisyui";
import { Link } from 'react-router-dom';
import ItemCount from "./ItemCount";
import CartContext from './context/CartContext';
import Spinner from './Spinner';


//Detalle del producto
const ItemDetail = ( {prods}) => {

 const {addItem} = useContext(CartContext)
 const [quantitytoadd, setQuantitytoadd] = useState(0)
 const {sumar} = useContext(CartContext)
 const {cantidadactual} = useContext(CartContext)


    //Agrego producto al carito
    function onAdd(cantidad){
     setQuantitytoadd(cantidad) 
     addItem(prods, cantidad)
     sumar(cantidadactual, cantidad)
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
                
                <div p="botones">
                {quantitytoadd === 0 ? 
                (<ItemCount onAdd={onAdd} stock={prods[0].stock} initial="1"/>) : 
                (<Link to={'/Cart/'}><Button> Terminar Compra</Button> </Link>)
                }
                {quantitytoadd > 0 ? (
                <Link to={'/productos/'}><Button> Seguir Comprando</Button></Link>) : ( "" )
                }
                </div>
                 
                <br></br>
                <br></br> 
            </div>      
          ) : (<Spinner/>)  
         }
      </div>
      </>
    )
  }
  
  export default ItemDetail