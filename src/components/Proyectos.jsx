import React from 'react'
import ecommerce from '../assets/img/ecommerce.PNG'
import valrouss from '../assets/img/valtienda.PNG'
import venciapp from '../assets/img/venciapp.PNG'
import imagen1 from '../assets/img/image8.jpg'
import imagen2 from '../assets/img/image9.png'
import imagen3 from '../assets/img/image10.png'
import imagen4 from '../assets/img/image11.png'
const Proyectos = () => {
    return ( 
        <div className="proyectos">
            <h1 className="proyectos__title">Proyectos</h1>
            <div className="proyecto row" >
                <div className="col-lg-6  col-md-6 col-sm-12">
                   <a href="https://tienda.emilima.com.pe/"><img src={imagen1} className="proyecto__img "></img> </a>
                </div>
                <div className="proyecto__texto col-lg-6 col-md-6 col-sm-12" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <p>Tienda virtual de venta de libros, realizada para la Municipalidad de Lima. Estado: <b>EN DESARROLLO</b> </p>
                </div>
            </div>
            <div className="proyecto row">
                <div className="col-lg-6  col-md-6 col-sm-12">
                   <a href="https://controlseguridadyservicios.com/"><img src={imagen2} className="proyecto__img "></img>  </a>
                </div>
                <div className="proyecto__texto col-lg-6 col-md-6 col-sm-12" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <p>Pagina web de presentacion de la EMPRESA CONTROL SEGURIDAD Y SERVICIOS, encargada de venta, reparacion e instalacion de equipos de SEGURIDAD.  Estado:<b> CONCLUIDA</b>.</p>
                </div>
            </div>
            <div className="proyecto row">
                <div className="col-lg-6  col-md-6 col-sm-12">
                <a href="https://productos-vencidos.netlify.app/"><img src={imagen3} className="proyecto__img "></img></a> 
                </div>
                <div className="proyecto__texto col-lg-6 col-md-6 col-sm-12" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <p>Pagina web utilizada para registrar y visualizar productos proximos a vencer, se podria utilizar en bodegas y supermercados, mejorandola. Estado: <b>A MEJORAR</b></p>
                </div>
            </div>
            <div className="proyecto row">
                <div className="col-lg-6  col-md-6 col-sm-12">
                   <a href="https://gerardoq-prog.github.io/ServiYa/"><img src={imagen4} className="proyecto__img "></img>  </a>
                </div>
                <div className="proyecto__texto col-lg-6 col-md-6 col-sm-12" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <p>Plataforma web que servira para encontrar y promocionar servicios domesticos en epoca de pandemia, hecha para trabajadores independientes y microempresas Estado: <b>EN DESARROLLO</b></p>
                </div>
            </div>
            
            
        </div>
     );
}
 
export default Proyectos;