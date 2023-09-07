import React, { useState } from 'react';
import '../../css/style.css'
function Delete({ onDataUpdate }) {
    const [id, setid] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const cotizacion = {
            id
        };

        fetch('https://4.227.136.227/kamjac/api.php?apicall=DCotizacion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cotizacion),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    setMessage('Error al eliminar la cotizacion');
                } else {
                    setMessage('cotizacion eliminada correctamente');
                    setid('');
                    onDataUpdate(); // Llama a la función de actualización de datos en el componente padre
                }
            })
            .catch((error) => {
                setMessage('Error en la solicitud');
                console.log(error);
            });
    };

    return (
        <div className="Insert-container">
            <h2>Eliminar cotización</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">Id: </label>
                    <input className="input" type="number" id="id" value={id} onChange={(e) => setid(e.target.value)} required />
                </div>
                <button className='orange-btn' type="submit">Eliminar Cotizacion</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Delete;