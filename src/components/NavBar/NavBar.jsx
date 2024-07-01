import { useEffect } from 'react';  // Importar React y useEffect
import CardWidget from '../CardWidget/CardWidget';
import './NavBar.css';

function NavBar({ cartCount, title }) {
    useEffect(() => {
        const activarSubmenu = document.querySelector(".nav__list--products");
        const productosItem = document.querySelector(".nav__products");

        const toggleSubmenu = () => {
            productosItem.classList.toggle("nav__products--active");
        };

        activarSubmenu.addEventListener("click", toggleSubmenu);

        return () => {
            activarSubmenu.removeEventListener("click", toggleSubmenu);
        };
    }, []);

    return (
        <header>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item nav__item--left"><a href="index.html">{title}</a></li>
                    <li className="nav__item"><a href="index.html">Inicio</a></li>
                    <li className="nav__item nav__list--products">Productos
                        <ul className="nav__products">
                            <li className="item__products products__category"><a href="#" className="nav-link categoria-link">Laptops</a></li>
                            <li className="item__products products__category"><a href="#" className="nav-link categoria-link">Tablet</a></li>
                            <li className="item__products products__category"><a href="#" className="nav-link categoria-link">Celulares</a></li>
                            <li className="item__products products__category"><a href="#" className="nav-link categoria-link">Audífonos</a></li>
                        </ul>
                    </li>
                    <li className="nav__item"><a href="#">Contáctanos</a></li>
                    <li className="nav__item nav__item--right"><CardWidget cartCount={cartCount} /></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
