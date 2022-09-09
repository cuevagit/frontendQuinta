import '../App.css';
import CartWidget from "./CartWidget"
import logo from '../logocazasinfondo.png';
//import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


const NavBar = () => {
    
  return (
    
    <main>  


    <div className="container">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <nav className="navbar navbar-expand-lg navbar-light">

                    <ul><img src={logo} className="App-logo" alt="logo" /></ul>
                    <ul className="brand"> <Link className="dropdown-item" to='/'>Armeria "La Liebre"</Link></ul>
                    <ul><Link className="dropdown-item" to='/inicio'>Inicio</Link></ul>
                    <ul><Link className="dropdown-item" to='/productos'> Productos</Link></ul>
                    <ul><Link className="dropdown-item" to='/productos/ofertas'> Ofertas</Link></ul>
                    <ul><Link className="dropdown-item" to='/category/municiones'> Municiones</Link></ul>
                    <ul><Link className="dropdown-item" to='/category/armas'> Armas</Link></ul>
                    <ul><Link className="dropdown-item" to='/nosotros'> Nosotros</Link></ul>
                    <ul><Link className="dropdown-item" to='/contacto'> Contacto</Link></ul>
                    <ul><Link to='/carrito'> <CartWidget/> </Link> </ul>
              </nav>

        <form className="d-flex">
        </form>
    </div>
  

</main>
    
  )
}
export default NavBar
