import React, { useState } from 'react';
import Borrar from './Borrar';
import '../../css/style.css'
import { Link } from "react-router-dom";
import Logo_dasaga_white from '../../img/Logo_dasaga_white.png';

function Quitar() {
    const [setDataUpdated] = useState(false);

    const handleDataUpdate = () => {
        setDataUpdated(true);
    };

    return (
        <div className="">
                <div className="primary-header">
        <div className="navbar container">
        <img src={Logo_dasaga_white} alt={"Logo_dasaga_white"} width={80}/>
        <div className="menu">
            <li className="menu"><i class="fa fa-book"></i> Gestión Cotizacion <span class="fa fa-chevron-right"></span>
                <ul className="submenu">
                <li><Link to={'/ConC'}><a type="submit">Consultar Cotizacion</a></Link></li>
                  <li><Link to={'/CI'}><a type="submit">Agregar Cotizacion</a></Link></li>
                  <li><Link to={'/CU'}><a type="submit">Actualizar cotizacion</a></Link></li>   
                </ul>
            </li>
            <li className="menu"><i class="fa fa-book"></i> Gestión Mueble <span class="fa fa-chevron-right"></span>
                <ul className="submenu">
                  <li><Link to={'/CmC'}><a type="submit">Consultar muebles</a></Link></li>
                  <li><Link to={'/CmA'}><a type="submit">Agregar mueble</a></Link></li>
                  <li><Link to={'/CM'}><a type="submit">Actualizar mueble</a></Link></li>  
                </ul>
            </li>
            <li className="menu"><i class="fa fa-edit"></i> Gestión Usuario <span class="fa fa-chevron-right"></span>
              <ul className="submenu">
              <li><a href="Controlador.php?ruta=listarUsuario&pag=0">Lista de usuarios</a></li>
                <li><a href="Controlador.php?ruta=mostrarEliminarUsuario">Agregar usuario</a></li>
              </ul>
            </li>
          <li className="menu"><i class="fa fa-table"></i> Gestión Accesorio <span class="fa fa-chevron-right"></span>
              <ul className="submenu">
                  <li><Link to={'/con'}><a type="submit">Consultar accesorios</a></Link></li>
                  <li><Link to={'/conI'}><a type="submit">Agregar accesorios</a></Link></li>
              </ul>
          </li>
          <li className="orange-btn"><a href="principal.php">Mi cuenta<span class="fa fa-chevron-right"></span></a></li>
              <a class="button"  href="Controlador.php?ruta=cerrarSesion"><i class="fa fa-sign-out pull-right"></i> Salir </a>
        </div>
      </div>
            <div className='bg-gray'>
                <Borrar onDataUpdated={handleDataUpdate} />
            </div>
        </div>
    </div>
    );
}

export default Quitar;