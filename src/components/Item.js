import { Button } from 'react-daisyui'
import { Link } from 'react-router-dom';

const Item = ( {slug, marca, tipo, precio, estado, stock, img} ) => {


//Card del Producto
    return (
   <>      
        <div className="card w-96 bg-base-100 shadow-xl px-6 py-6"> 
          <strong>{tipo}</strong>
          <img className= "imagen" src={img} alt="Imagen producto"/>
          <h6>Marca: {marca} </h6>
          <h6>Stock: {stock} </h6>
          <h6>Precio: $ {precio}</h6>
          <h6>Estado: {estado}</h6>
          <br></br>
          <Link to={'/item/' + slug}>
          <Button>Ver Detalle</Button>
          </Link>
          <br></br><br></br>
      </div>
  </>

    )
  }

  export default Item