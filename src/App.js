import Inicio from './components/Inicio';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Ofertas from './components/Ofertas';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Carrito from './components/Carrito';
import ItemDetalle from './components/ItemDetalle';

//import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*<ItemListContainer/> */



function App(props) {
  //Edit <code>src/App.js</code> and save to reload.

  return (
    <>
    <BrowserRouter> 
  
      <div className="App">
      <header className="App-header"> 
      <NavBar></NavBar>  
      </header>

      <main className="App-main"> 
      <Routes>
         <Route exact path="/" element={<Inicio/>}/>  
         <Route exact path="/productos" element={<ItemListContainer/>}/>  
         <Route exact path="/ofertas" element={<Ofertas/>}/>  
         <Route exact path="/nosotros" element={<Nosotros/>}/>  
         <Route exact path="/contacto" element={<Contacto/>}/>  
         <Route exact path="/carrito" element={<Carrito/>}/>  
         <Route exact path="/productos/:codigo" element={<ItemDetalle/>}/>  
      </Routes>
      <br></br>
      
     </main>
    </div>

    <footer className="App-footer">
       <h5>Cueva Martin © 2022 </h5>  
   </footer>

   </BrowserRouter>
      </>
    
  );
}

export default App;
