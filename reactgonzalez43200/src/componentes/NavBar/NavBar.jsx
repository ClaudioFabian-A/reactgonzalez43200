import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <>
            <header>
                <h1>Hypatia</h1>
                <nav>
                    <ul>
                        <li><h3>Nosotros</h3></li>
                        <li><h3>Galeria</h3></li>
                        <li><h3>Destacados</h3></li>
                        <li><h3>Consultas</h3></li>
                        <li><h3>Contacto</h3></li>

                    </ul>
                </nav>
                <CartWidget/>
            </header>

        </>
    )
}

export default NavBar
