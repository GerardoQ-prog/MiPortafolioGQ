import React from 'react';
import scrumcerti from '../assets/img/scrumcerti.png'

const Certificaciones = () => {
    return ( 
        <div className="cetificacione">
            <h1 className="certificaciones__title">Certifiacies</h1>
            <div className="">
                <div></div>
                <h1>SCRUM FOUNDATION PROFESSIONAL CERTIFICATE (SFPC)</h1>
                <img src={scrumcerti}></img>
            </div>
        </div>
     );
}
 
export default Certificaciones;