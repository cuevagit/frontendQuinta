import { Button } from 'react-daisyui'
import { useContext } from 'react';
import CartContext from './context/CartContext';
import { addDoc, doc, getDoc, getFirestore, updateDoc, collection } from "firebase/firestore";
import Swal from 'sweetalert2'

function Orden(){

   const {items} = useContext(CartContext)
   const {clear} = useContext(CartContext)


   const nrocomprobante = Math.floor(Math.random()*999999);

   const db = getFirestore();

   const totalprecio = items.reduce((acumulador, items) => acumulador + Number(items.precio) * items.cantidad, 0)
   var f = new Date();
   const fecha = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();

   const totalcantidad = items.reduce((acumulador, items) => acumulador + Number(items.cantidad), 0)

     function onSubmit(ev){
        ev.preventDefault()

        if(ev.target.apynom.value === ""  || ev.target.telefono.value === "" || ev.target.email.value === ""){    
        Swal.fire(
          'Debe ingresar todos los datos',
          '',
          'error'
         )  
         return
        }

        const nombre = ev.target.apynom.value
        const telefono = ev.target.telefono.value
        const email = ev.target.email.value

        let  arr, carrito;   


        items.forEach( c => {
         arr = [{id: c.slug, name: c.marca, tipo: c.tipo, price: c.precio, quantity: c.cantidad, totalprice: c.precio * c.cantidad}]

        if (carrito)
         carrito = carrito.concat(arr)
        else 
         carrito = arr
 
    
         const datoItem = doc(db, "productos", (c.slug));
         getDoc(datoItem).then((snapshot) => {
           if(snapshot.exists()){
             const stockProd = doc(db, "productos", (c.slug));
             updateDoc(stockProd, {stock: items.find(p => p.codigo === c.codigo).stock - items.find(p => p.codigo === c.codigo).cantidad})
           }
        } )})
        

        const order = {
           buyer: { name: nombre, phone: telefono, email: email},
           items: {carrito, fecha, totalcantidad, totalprecio}
     }

     if(items.length > 0){
     const orderCollection = collection(db, 'ordenes')
     addDoc(orderCollection, order).then(({ id }) => 
     Swal.fire(
      '¡Felicitaciones!',
      'La compra se realizó con éxito, su número de comprobante es: ' + nrocomprobante,
      'success'
     )  , 
     clear(),
     ev.target.apynom.value = "",
     ev.target.telefono.value = "",
     ev.target.email.value = ""
    );
     
     }

    }
 
    return (
    <div className="flex flex-center">
    <div className="orden">
    <form onSubmit={onSubmit}>    
    <h1><strong>Formulario datos del Comprador: </strong> </h1>
    <br></br>
    <label>Nombre y Apellido</label>         
    <input type="text" name="apynom" placeholder="Nombre" class="mt-20 input input-bordered w-full max-w-xs" />   
    <br></br>
    <br></br>
    <label>
        Teléfono:
        <input type="text" name="telefono" placeholder="Teléfono" class="input input-bordered w-full max-w-xs" />    </label>
    <br></br>
    <br></br>

    <label>
        E-mail:
        <input type="text" name="email" placeholder="E-mail: ejemplo@gmail.com" class="input input-bordered w-full max-w-xs" />    </label>
    <br></br>
    <br></br>
    <Button type="submit" className="botonenviar">Enviar</Button>
    </form>

    </div>

    <div className="cuadro mt-4 mb-3 ml-60 border-1 drop-shadow-xl">
    
    <p className = "bg-green-200 text-green-700 mb-4 text-lg">Productos Seleccionados</p>

    <div className="mt-2 mb-1">
       
        <table className="table-auto">
        <thead>
          <tr>
            <th className="pr-4 pl-4">Producto</th>
            <th className="pr-4">Cantidad</th>
            <th className="pr-4">Importe</th>
          </tr>
        </thead>
        <tbody>
          {items.map(p=>
          <tr key={p.codigo} className="divide-y divide-solid ">
            <td className="pl-2 pr-4">{p.tipo}</td>
            <td className="pl-2 pr-4">{p.cantidad}</td>
            <td className="pl-2 pr-4">$ {p.precio * p.cantidad}</td>
          </tr>
         )}
        <div className="flex ml-3 mt-2 drop-shadow-xl bg-gray-100">
         <h1 className="pr-20"> Costo Total:</h1> 
         <p className="ml-20"> $ {totalprecio}</p>
      </div>
        </tbody>
      </table>

    </div>
</div>

    </div>

    )
}

export default Orden