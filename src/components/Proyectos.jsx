import React from 'react'
import ecommerce from '../assets/img/ecommerce.PNG'
import valrouss from '../assets/img/valtienda.PNG'
import venciapp from '../assets/img/venciapp.PNG'

const Proyectos = () => {
    return ( 
        <div className="proyectos">
            <h1 className="proyectos__title">Proyectos</h1>
            <div className="proyecto">
                <img src={ecommerce} className="img"></img> 
                <div className="proyecto__texto">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reiciendis corrupti quod quae iste. Perspiciatis, saepe eos aliquam, et vel dolor quam repellendus ut expedita ipsum voluptate voluptatem inventore placeat.</p>
                </div>
            </div>
            <div className="proyecto">
                <img src={venciapp} className="img"></img> 
                <div className="proyecto__texto">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reiciendis corrupti quod quae iste. Perspiciatis, saepe eos aliquam, et vel dolor quam repellendus ut expedita ipsum voluptate voluptatem inventore placeat.</p>
                </div>
            </div>
            <div className="proyecto">
                <img src={venciapp} className="img"></img> 
                <div className="proyecto__texto">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reiciendis corrupti quod quae iste. Perspiciatis, saepe eos aliquam, et vel dolor quam repellendus ut expedita ipsum voluptate voluptatem inventore placeat.</p>
                </div>
            </div>
            
        </div>
     );
}
 
export default Proyectos;