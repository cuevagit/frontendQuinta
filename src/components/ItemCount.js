import { useState } from "react"
import { Button } from 'react-daisyui'

//Traigo botones + - con la cantidad de clicks y llamo función onAdd
function ItemCount({onAdd, stock, initial}){
    const [clicks, setClicks] = useState(Number(initial))
    const [ver, setVer] = useState(false)


    function sumar(){

      if(stock > 0)
       setVer(false)
  
     if(clicks < stock){
      setClicks(clicks + 1)
      } 
    }
  
    function restar(){
      if(clicks>0)
       setClicks(clicks - 1)
      
      if(clicks===1)
        setVer(true)
    }
  

    return (
        <> 
          <Button className="btn btn-square btn-secondary" type="button" onClick={restar}>-</Button> {stock === 0 ? 0 : clicks} <Button className="btn btn-square bg-blue-500" onClick={sumar}>+</Button> <br></br><br></br>
          {stock === 0 ? (<Button className="bg-blue-500" disabled="true" onClick={(() => onAdd(clicks))}> Agregar al Carrito</Button>) :
          (<Button className="bg-blue-500" disabled={ver} onClick={(() => onAdd(clicks))}> Agregar al Carrito</Button>) 
          }
          <br></br>
          </>
          )
}


export default ItemCount