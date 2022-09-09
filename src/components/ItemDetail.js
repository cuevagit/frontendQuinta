const ItemDetail = ( {prods}) => {
    return (
     <>
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
            </div>
          ) : (<h1>Loading...</h1>)  
         }
      </div>
      </>
    )
  }
  
  export default ItemDetail