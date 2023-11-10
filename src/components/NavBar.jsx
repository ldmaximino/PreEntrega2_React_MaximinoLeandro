import { Link } from 'react-router-dom';
import { useState } from 'react';

import { CartWidget } from "./CartWidget"

import '../App.css';
import { CantidadProductos } from './CantidadProductos';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <>
          <nav className="nav">
            <div className="nav-line1">
              <div className="logo">
              <Link to="/"><img src="../src/assets/logo.png" alt="Logo Huaraché" /> </Link>
              <Link to="/"><h1>Hüaraché</h1></Link>
              </div>
              <CartWidget />
            </div>
            <div className="destello1"></div>
            <div  className="nav-line2">
              <Link className={`nav-line2-text ${activeLink === 0 ? 'nav-active' : ''}`} to="/category/cuchillos" onClick={() => handleLinkClick(0)}>Cuchillos</Link>
              <Link className={`nav-line2-text ${activeLink === 1 ? 'nav-active' : ''}`} to="/category/sombreros" onClick={() => handleLinkClick(1)}>Gorras y Sombreros</Link>
              <Link className={`nav-line2-text ${activeLink === 2 ? 'nav-active' : ''}`} to="/category/mates" onClick={() => handleLinkClick(2)}>Mates</Link>
              <Link className={`nav-line2-text ${activeLink === 3 ? 'nav-active' : ''}`} to="/category/tablas" onClick={() => handleLinkClick(3)}>Tablas</Link>
              <Link className={`nav-line2-text ${activeLink === 4 ? 'nav-active' : ''}`} to="/" onClick={() => handleLinkClick(4)}>Todo</Link>
            </div>
          </nav>
        
    </>
  )
}

//const MiComponente = () => {
//  const miCondicion = true; // Puedes cambiar esto según tu lógica
//
//  return (
//    <div className={`mi-clase ${miCondicion ? 'otra-clase' : ''}`}>
//      {/* Contenido del componente */}
//      </div>
//      );
//    };
