import {useState} from "react"
import { Button } from 'react-daisyui'

const Item = ( {codigo, marca, tipo, precio, estado, stock, img} ) => {

  const [clicks, setClicks] = useState(0)
  const [ver, setVer] = useState(true)


  function sumar(){
   
    setVer(false)

   if(clicks < stock)
    setClicks(clicks + 1)
  }

  function restar(){
    if(clicks>0)
     setClicks(clicks - 1)
    
     if(clicks===1)
      setVer(true)
  }


    return (

      <div className="card w-96 bg-base-100 shadow-xl px-6 py-6">
          <strong>{tipo}</strong>
          <img className= "imagen" src={img} alt="Imagen producto"/>
          <h6>{tipo} </h6>
          <h6>Marca: {marca} </h6>
          <h6>Stock: {stock} </h6>
          <h6>Precio: {precio}</h6>
          <h6>Estado: {estado}</h6>
          <br></br>
          <Button className="btn btn-square btn-secondary" type="button" onClick={restar}>-</Button> {clicks} <button className="btn btn-square bg-blue-500" onClick={sumar}>+</button> <br></br><br></br>
          <Button className="bg-blue-500" disabled={ver} > Comprar</Button>
          <br></br><br></br>
      </div>

    )
  }

  export default Item