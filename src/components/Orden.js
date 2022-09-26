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

     function onSubmit(ev){
        ev.preventDefault()
        const nombre = ev.target.apynom.value
        const telefono = ev.target.telefono.value
        const email = ev.target.email.value

        let  arr, carrito;   

        const totalprecio = items.reduce((acumulador, items) => acumulador + Number(items.precio) * items.cantidad, 0)
        var f = new Date();
        const fecha = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();

        const totalcantidad = items.reduce((acumulador, items) => acumulador + Number(items.cantidad), 0)


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
     addDoc(orderCollection, order).then(({ codigo }) => console.log(codigo));

     clear();

     Swal.fire(
      '¡Felicitaciones!',
      'La compra se realizó con éxito, su número de comprobante es: ' + nrocomprobante,
      'info'
    );

     }

    }
 
    return (
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

    

    )
}

export default Orden