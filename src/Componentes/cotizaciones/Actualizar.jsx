import React, { useState } from 'react';
import '../../css/style.css'
function Actualizar({ onDataUpdate }) {
    const [id, setid] = useState('');
    const [fecha_cotizacion, setfecha_cotizacion] = useState('');
    const [idusuario, setidusuario] = useState('');
    const [total_cotizacion, settotal_cotizacion] = useState('');
    const [estado, setestado] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const usuario = {
            id,
            fecha_cotizacion,
            idusuario,
            total_cotizacion,
            estado,
        };

        fetch('https://4.227.136.227/kamjac/api.php?apicall=UCotizacion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuario),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    setMessage('Error al actualizar el usuario');
                } else {
                    setMessage('Usuario actualizado correctamente');
                    setid('');
                    setfecha_cotizacion('');
                    setidusuario('');
                    settotal_cotizacion('');
                    setestado('');
                    onDataUpdate(); // Llama a la función de actualización de datos en el componente padre
                }
            })
            .catch((error) => {
                setMessage('Error en la solicitud');
                console.log(error);
            });
    };

    return (
        <div className="ingresar-container">
            <h2>Actualizar Cotizacion</h2>
            <form onSubmit={handleSubmit} className="accesory-form">
                 <div>
                    <label htmlFor="id">id:</label>
                    <input className="accesorio" type="text" id="id" value={id} onChange={(e) => setid(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="fecha_cotizacion">Fecha:</label>
                    <input className="accesorio" type="text" id="fecha_cotizacion" value={fecha_cotizacion}  onChange={(e) => setfecha_cotizacion(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="id_usuario">Usuario:</label>
                    <input className="accesorio" type="text" id="idusuario" value={idusuario} onChange={(e) => setidusuario(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="total_cotizacion">Total:</label>
                    <input className="accesorio" type="text" id="total_cotizacion" value={total_cotizacion} onChange={(e) => settotal_cotizacion(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="estado">Estado:</label>
                    <input className="accesorio" type="text" id="estado" value={estado} onChange={(e) => setestado(e.target.value)} required/>
                </div>

                <button className='orange-btn' type="submit">Actualizar Cotizacion</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Actualizar;