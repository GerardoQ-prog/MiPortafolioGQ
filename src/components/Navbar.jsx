import React from 'react';

const Navbar = () => {
    return ( 
        <header>
            <nav class="navbar navbar-expand-lg navbar-light  menu">
                <h1 class="nav__logo">GQ</h1>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav ">
                        <li class="nav-item ">
                            <a class="nav-link" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Acerca de mi</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Habilidades</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Proyectos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Certificaciones</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contactame</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
     );
}
 
export default Navbar;