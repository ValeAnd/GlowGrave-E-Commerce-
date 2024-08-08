import { useEffect } from 'react';  
import CardWidget from '../CardWidget/CardWidget';
import './NavBar.css';
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

function NavBar() {
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
                    <li className="nav__item"><Link to="/">Inicio</Link></li>
                    <li className="nav__item nav__list--products">Productos
                        <ul className="nav__products">
                            <li className="item__products products__category"><Link to="/productos/limpiador" className="nav-link categoria-link">Limpiador Facial</Link></li>
                            <li className="item__products products__category"><Link to="/productos/hidratacion" className="nav-link categoria-link">Hidratación</Link></li>
                            <li className="item__products products__category"><Link to="/productos/exfoliante" className="nav-link categoria-link">Exfoliante</Link></li>
                            <li className="item__products products__category"><Link to="/productos/bloqueador" className="nav-link categoria-link">Bloqueador Solar</Link></li>
                        </ul>
                    </li>
                    <li className="nav__item nav__item--center"><Link to="/">GlowGrove</Link></li>
                    <li className="nav__item"><Link to="/nosotros">Sobre Nosotros</Link></li>
                    <li className="nav__item"><Link to="/blogs">Blogs</Link></li>
                    <div className="nav_item--icons">
                        <li className="nav__item--icon nav__item--right"><CardWidget /></li>
                        <li className="nav__item--icon"><FaRegHeart size= {20}/></li>
                        <li className="nav__item--icon"><FaRegUser size= {20}/></li>
                    </div>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
