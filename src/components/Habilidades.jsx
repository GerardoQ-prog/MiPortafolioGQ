import React from 'react';
import comunicacion from '../assets/img/Mensaje.png'
import organizacion from '../assets/img/Calendario.png'
import equipo from '../assets/img/equipo.png'
const Habilidades = () => {
    return (  
        <div className="habilidades">
            <h1 className="habilidades__title">Habilidades Blandas</h1>
            <div className="habilidades__cards row">
                
                <div className="habilidades_card col-sm-12 col-lg-4 col-md-6" id="card">
                    <img src={comunicacion} className="card__img"></img>
                    <h1 className="card__title">Comunicación</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsam similique eum fugiat veritatis quisquam animi rerum! Magnam veritatis, animi consequatur, adipisci, quas ad excepturi necessitatibus suscipit doloremque voluptates eum.</p>
                </div>
                <div className="habilidades_card col-lg-4 col-sm-12 col-md-6" id="card1">
                    <img src={organizacion} className="card__img"></img>
                    <h1 className="card__title">Organización</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsam similique eum fugiat veritatis quisquam animi rerum! Magnam veritatis, animi consequatur, adipisci, quas ad excepturi necessitatibus suscipit doloremque voluptates eum.</p>
                </div>
                <div className="habilidades_card col-lg-4 col-sm-12 col-md-6" id="card2">
                    <img src={equipo} className="card__img "></img>
                    <h1 className="card__title">Trabajo en Equipo</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsam similique eum fugiat veritatis quisquam animi rerum! Magnam veritatis, animi consequatur, adipisci, quas ad excepturi necessitatibus suscipit doloremque voluptates eum.</p>
                </div>
            </div>
            <h1 className="habilidades__title">Habilidades Duras</h1>
            <div className="habilidades__cards row ">
                
                <div className="habilidades_card col-sm-12 col-lg-6 " id="card3">
                    <img src={equipo} className="card__img"></img>
                    
                </div>
                <div className="habilidades_card col-sm-12 col-lg-6 " id="card4">
                    <img></img>
                    <h1 className="card__title">Rapida Comunicación</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsam similique eum fugiat veritatis quisquam animi rerum! Magnam veritatis, animi consequatur, adipisci, quas ad excepturi necessitatibus suscipit doloremque voluptates eum.</p>
                </div>
            </div>
        </div>
    );
}
 
export default Habilidades;