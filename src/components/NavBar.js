import '../App.css';
import CartWidget from "./CartWidget"
import logo from '../logocazasinfondo.png';
//import 'bootstrap/dist/css/bootstrap.css';


const NavBar = () => {
    
  return (
    
    <main>  

<nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul><img src={logo} className="App-logo" alt="logo" /></ul>
                    <ul>Articulos de Caza "El Entreriano"</ul>
                    <ul><a className="dropdown-item" href="">Inicio</a></ul>
                    <ul><a className="dropdown-item" href="">Productos</a></ul>
                    <ul><a className="dropdown-item" href="">Ofertas</a></ul>
                    <ul><a className="dropdown-item" href="">Nosotros</a></ul>
                    <ul><a className="dropdown-item" href="">Contacto</a></ul>
                    <ul><CartWidget/></ul>

              <form className="d-flex">
              </form>
            </div>
          </div>
        </nav>

      </main>

    
  )
}
export default NavBar