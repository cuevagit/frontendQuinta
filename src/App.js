import Inicio from './components/Inicio';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
//import Ofertas from './components/Ofertas';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Carrito from './components/Carrito';
import ItemDetailContainer from './components/ItemDetailContainer';

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
         <Route exact path="/" element={<ItemListContainer/>}/>  
         <Route exact path="/inicio" element={<Inicio/>}/>  
         <Route exact path="/productos" element={<ItemListContainer/>}/>  
         <Route exact path="/productos/:categoryId" element={<ItemListContainer/>}/>  
         <Route exact path="/nosotros" element={<Nosotros/>}/>  
         <Route exact path="/contacto" element={<Contacto/>}/>  
         <Route exact path="/carrito" element={<Carrito/>}/>  
         <Route exact path="/item/:codigo" element={<ItemDetailContainer/>}/>  
         <Route exact path="/category/:categoryId" element={<ItemListContainer/>}/>  
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
