import React from 'react'
import fotoyo from '../assets/img/fotoyo.png'

const Acercademi = () => {
    return ( 
        <section className="acerca container-fluid">
            <div className="row">
            <div className="acerca__info  col-sm-12 col-lg-6">
                <h1 className="acerca__title row-sm">Acerca de mí</h1>
                <p className="acerca__parrafo row-sm">Mi nombre es Gerardo, tengo 20 años y estudio Ingenieria de Sistemas en la Universidad Tecnologica del Perú, cursando el 6to ciclo de la carrera.

Eficiente para el trabajo en equipo, habituado para trabajar con objetivos y adaptable a los cambios organizacionales y con gran sentido de responsabilidad.</p>
                <div className=" acerca__datos container-fluid row">
                    <div className=" row-6">
                    <p className="acerca__dato col">Nombre: Gerardo J. Quispe Chavez</p>
                    <p className="acerca__dato col">Edad: 20</p>
                    <p className="acerca__dato col">Movil: +51 970481426</p>
                    </div>
                    <div className="row-6">
                    <p className="acerca__dato col">Nacionalidad: Perú</p>
                    <p className="acerca__dato col">Ciudad: Lima</p>
                    <p className="acerca__dato col">Estado: Disponible</p>
                    </div>
                </div>
            </div>
            <div className=" col-sm-12 col-lg-6">
                <div className=" acerca__foto row">
                      <div className="acerca__cuadro col-sm-12"></div>
                      <img src={fotoyo} className="img-fluid acerca__yo col-sm-12"></img>
                </div>
              
                
            </div>
            
            </div>
           
        </section>
     );
}
 
export default Acercademi;