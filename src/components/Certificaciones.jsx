import React from 'react';
import scrumcerti from '../assets/img/scrumcerti.png'
import flecha from '../assets/img/viñeta.png'

const Certificaciones = () => {
    return ( 
        <div className="cetificaciones">
            <h1 className="certificaciones__title">Certifiaciones</h1>
            <div className=" row-sm-12 row-lg-6 certificado">
                <div className="">
                    <img src={flecha} className="flecha "></img>
                </div>
                 <div className="col-5">
                     <h1 className="mx-5 title ">Scrum Foundation Professional Certificate (SFPC)</h1>
                </div >
     
                            <img src={scrumcerti} className="certificado__img mx-3"></img>

                

            </div>
           
           
                
            
            
        </div>
     );
}
 
export default Certificaciones;