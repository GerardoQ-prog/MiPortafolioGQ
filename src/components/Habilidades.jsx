import React from 'react';
import comunicacion from '../assets/img/Mensaje.png'
import organizacion from '../assets/img/Calendario.png'
import equipo from '../assets/img/equipo.png'
import react from '../assets/img/react logo.png'
const Habilidades = () => {
    return (  
        <div className="habilidades">
            <h1 className="habilidades__title">Habilidades Blandas</h1>
            <div className="habilidades__cards row">
                
                <div className="habilidades_card col-sm-12 col-lg-4 col-md-6" id="card">
                    <img src={comunicacion} className="card__img"></img>
                    <h1 className="card__title">Comunicación</h1>
                    <p>Respetuoso y preciso al momento de hablar, considero que la opinion de los demas siempre se debe respetar. Para que un proyecto salga a flote un punto fuerte es la comunicación entre el equipo de desarrollo. </p>
                </div>
                <div className="habilidades_card col-lg-4 col-sm-12 col-md-6" id="card1">
                    <img src={organizacion} className="card__img"></img>
                    <h1 className="card__title">Organización</h1>
                    <p>Un buen proyecto, empieza con una buena organización. En lo que es desarrollo de software, me gusta trabajar con metodologias agiles, ya que te ayuda en la organización y el trabajo en equipo. Donde todo es mutuo y aprendizaje constante </p>
                </div>
                <div className="habilidades_card col-lg-4 col-sm-12 col-md-6" id="card2">
                    <img src={equipo} className="card__img "></img>
                    <h1 className="card__title">Trabajo en Equipo</h1>
                    <p>Una habilidad importante para cualquier desarrollador, el trabajo en equipo. Creo yo que uno trabaja mejor en un equipo que estando solo, debido a que puedes a enseñar a los demas como tambien poder aprender de ellos.</p>
                </div>
            </div>
            <h1 className="habilidades__title">Habilidades Duras</h1>
            <div className="habilidades__cards row ">
                
                <div className="habilidades_card col-sm-12 col-lg-4" id="card3">
                    <img src={react} className="card__img" style={{width:'50%'}}></img>
                </div>
                <div className="habilidades_card col-sm-12 col-lg-4 " id="card4">
                    
                    <ul style={{listStyle:'none',fontSize:'20px'}}> 
                        <li style={{lineHeight:'60px'}}>HTML5 : Nivel Avanzado</li>
                        <li style={{lineHeight:'60px'}}>CSS3  /  SASS : Nivel Intermedio</li>
                        <li style={{lineHeight:'60px'}}>Bootstrap, Materialize, Material UI</li>
                        <li style={{lineHeight:'60px'}}>FIGMA : Nivel Intermedio</li>
                        <li style={{lineHeight:'60px'}}>JAVASCRIPT: Nivel Intermedio -Avanz.</li>
                        <li style={{lineHeight:'60px'}}>NODEJS : Nivel Basico</li>
                        <li style={{lineHeight:'60px'}}>GIT  : Nivel Intermedio</li>
                    </ul>
                </div>
                <div className="habilidades_card col-sm-12 col-lg-4" id="card5">

                <ul style={{listStyle:'none',fontSize:'20px'}}>
                <li >REACT: 
                            
                            <li style={{lineHeight:'60px'}}>JSX</li>
                            <li style={{lineHeight:'60px'}}>Componentes y Propiedades</li>
                            <li style={{lineHeight:'60px'}}>Hooks</li>
                            <li style={{lineHeight:'60px'}}>Hooks</li>
                            <li style={{lineHeight:'60px'}}>React Router DOM</li>
                            <li style={{lineHeight:'60px'}}>Consumo de API (Fetch / Axios)</li>
                            <li style={{lineHeight:'60px'}}>Styled Component</li>
                            <li style={{lineHeight:'60px'}}>Context  - Reducer</li>
                            
                        </li>
                </ul>
               
                </div>
                
            </div>
        </div>
    );
}
 
export default Habilidades;