import Item from './Item'

const ItemList = ( {prods}) => {
    return (
      <div className="producto">
        { prods.length ? (prods.map( p =>
          <Item key={p.codigo} codigo={p.codigo} marca={p.marca} 
          tipo={p.tipo} precio={p.precio} estado={p.estado}  stock={p.stock} img={p.img}/>)) : (<h1>Loading...</h1>)
        }
      </div>
    )
  }
  
  export default ItemList