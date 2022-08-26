import Saludo from './components/Saludo';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
//import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


/*Código original sacado
<p>
<h1>Hola Mundo</h1>
<Saludo Hola name="Juan" lastname='Pérez'>  
<p> Nos vemos </p>
</Saludo>
</p>
<a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
>
Learn React
</a>*/


function App(props) {
  //Edit <code>src/App.js</code> and save to reload.
  let mensaje = 'Esto es una Tienda en React JS';

  return (

     <div className="App">
      <header className="App-header"> 
         <NavBar></NavBar>  
      </header>

      <main className="App-main"> 
      <br></br> <br></br>
      <p> <h1><ItemListContainer greeting={mensaje}/></h1> </p>
     </main>

    </div>
    
  );
}

export default App;
