import React from 'react';

const Navbar = () => {
    return ( 
        <header>
            <nav className="nav">
                <h1 className="nav__logo">GQ</h1>
                <div className="nav__rutas">
                    <a href="#"><p className="nav__ruta">Inicio</p></a>
                    <a href="#"><p className="nav__ruta">Acerca de mi</p></a>
                    <a href="#"><p className="nav__ruta">Habilidades</p></a>
                    <a href="#"><p className="nav__ruta">Proyectos</p></a>
                    <a href="#"><p className="nav__ruta">Certificaciones</p></a>
                    <a href="#"><p className="nav__ruta">Contactame</p></a>
                </div>
            </nav>
        </header>
     );
}
 
export default Navbar;