//import Saludo from './components/Saludo';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
//import 'bootstrap/dist/css/bootstrap.css';
import './App.css';



function App(props) {
  //Edit <code>src/App.js</code> and save to reload.

  return (
    <>

     <div className="App">
      <header className="App-header"> 
         <NavBar></NavBar>  
      </header>

      <main className="App-main"> 
      <br></br>
       <ItemListContainer/> 
      
     </main>
    </div>

    <footer className="App-footer">
       <h5>Cueva Inc.</h5>  
   </footer>
      </>
    
  );
}

export default App;
