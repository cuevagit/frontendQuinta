const ItemDetail = ( {prods}) => {
    return (
      <div  className="card w-96 bg-base-100 shadow-xl px-6 py-6">
        { prods.length ? (prods.map( p =>
            <div>
                <br></br>
                <img className= "imagen_detalle" src={'.' + p.img} alt="Imagen producto"/>
                <h5> <strong>Producto: </strong>{p.tipo}</h5> 
                <h5> <strong>Marca: </strong> {p.marca} </h5>  
                <br></br>
                <h5> <strong>Características: </strong></h5>  
                <h5 className="textoDescripcion"> <strong> {p.detalle} </strong></h5>  
                <h5> <strong> Estado: {p.estado} </strong></h5>  
                <h5> <strong> Precio: {p.precio} </strong></h5>  
            </div>
          )) : (<h1>Loading...</h1>)  
        }
      </div>
    )
  }
  
  export default ItemDetail