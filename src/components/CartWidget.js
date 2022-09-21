import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react"
import CartContext from './context/CartContext';


//Traigo el ícono del Cart
const CartWidget = () => {
  const {cantidadactual} = useContext(CartContext)

    return (
    
      <div className="dropdown-item">   
    
       {cantidadactual ? 
            <>
        <IoCartOutline/><p className="badge cantcart">{cantidadactual}</p>
        </>
        : null
       }

      </div>
    
    )
  }
  export default CartWidget