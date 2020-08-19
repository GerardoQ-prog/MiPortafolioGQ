import React from 'react';

import './assets/css/main.css'
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Acercademi from './components/Acercademi';
import Habilidades from './components/Habilidades';
import Proyectos from './components/Proyectos';
import Certificaciones from './components/Certificaciones';
import Contacto from './components/Contacto';
import animaciones from './assets/css/animacion';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Inicio></Inicio>
      <Acercademi></Acercademi>
      <Habilidades></Habilidades>
      <Proyectos></Proyectos>
      <Certificaciones></Certificaciones>
      {/* <Contacto></Contacto> */}
      <script src={animaciones}></script>
    </>
  );
}

export default App;
