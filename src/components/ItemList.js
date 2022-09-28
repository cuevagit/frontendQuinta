import Item from './Item'
import Spinner from './Spinner'

//Recorro los productos y llamo al item
const ItemList = ( {prods}) => {
    return ( 
      <div className="producto">
        { prods.length ? (prods.map( p =>
          <Item key={p.codigo} codigo={p.codigo} slug={p.slug} marca={p.marca} 
          tipo={p.tipo} precio={p.precio} estado={p.estado}  stock={p.stock} disponible={p.disponible} img={p.img}/>)) : 
          ( <Spinner/>)  
        }
      </div>
    )
  }
  
  export default ItemList