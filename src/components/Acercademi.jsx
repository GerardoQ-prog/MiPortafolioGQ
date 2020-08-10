import React from 'react'

const Acercademi = () => {
    return ( 
        <section className="acerca">
            <div className="acerca__info">
                <h1 className="acerca__title">Acerca de mí</h1>
                <p className="acerca__parrafo">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro incidunt vel id! Aperiam optio iste quas a error itaque aut repudiandae voluptatibus quaerat? Quidem consectetur tempore, id dolorem culpa fugit.</p>
                <div className="acerca__datos">
                    <p className="acerca__dato">Nombre: Gerardo J. Quispe Chavez</p>
                    <p className="acerca__dato">Edad: 20</p>
                    <p className="acerca__dato">Movil: +51 970481426</p>
                    <p className="acerca__dato">Nacionalidad: Perú</p>
                    <p className="acerca__dato">Ciudad: Lima</p>
                    <p className="acerca__dato">Estado: Disponible</p>
                </div>
            </div>
            <div className="acerca__foto">
                <div className="acerca__cuadro"></div>
                
            </div>
            
        </section>
     );
}
 
export default Acercademi;