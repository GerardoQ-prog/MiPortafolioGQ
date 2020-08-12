import React from 'react';

import './assets/css/main.css'
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Acercademi from './components/Acercademi';
import Habilidades from './components/Habilidades';
import Proyectos from './components/Proyectos';
import Certificaciones from './components/Certificaciones';
import Contacto from './components/Contacto';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Inicio></Inicio>
      <Acercademi></Acercademi>
      {/* <Habilidades></Habilidades>
      <Proyectos></Proyectos>
      <Certificaciones></Certificaciones>
      <Contacto></Contacto> */}
    </>
  );
}

export default App;
