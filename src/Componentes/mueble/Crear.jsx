import React, { useState } from 'react';
import '../../css/style.css'
function Crear({ onDataUpdate }) {
    const [nombre, setnombre] = useState('');
    const [idcategoria, setidcategoria] = useState('');
    const [medidas, setmedidas] = useState('');
    const [color, setcolor] = useState('');
    const [precio, setprecio] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const usuario = {
            nombre,
            idcategoria,
            medidas,
            color,
            precio,
        };

        fetch('https://4.227.136.227/kamjac/api.php?apicall=CMueble', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuario),
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setMessage('Error al crear el mueble');
                } else {
                    setMessage('Mueble creado correctamente');
                    setnombre('');
                    setidcategoria('');
                    setmedidas('');
                    setcolor('');
                    setprecio('');
                    onDataUpdate(); // Llama a la función de actualización de datos en el componente padre
                }
            })
            .catch(error => {
                setMessage('Error en la solicitud');
                console.log(error);
            });
    };

    return (
        <div className="ingresar-container">
            <h2>Ingresar Mueble</h2>
            <form onSubmit={handleSubmit} className="accesory-form">
                
                <div>
                    <label htmlFor="nombre">nombre:</label>
                    <input className="accesorio"
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={e => setnombre(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="idcategoria">idcategoria:</label>
                    <input className="accesorio"
                        type="text"
                        id="idcategoria"
                        value={idcategoria}
                        onChange={e => setidcategoria(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="medidas">medidas:</label>
                    <input className="accesorio"
                        type="text"
                        id="medidas"
                        value={medidas}
                        onChange={e => setmedidas(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="color">color:</label>
                    <input className="accesorio"
                        type="text"
                        id="color"
                        value={color}
                        onChange={e => setcolor(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="precio">precio:</label>
                    <input className="accesorio"
                        type="text"
                        id="precio"
                        value={precio}
                        onChange={e => setprecio(e.target.value)}
                        required
                    />
                </div>
                
                <button className='orange-btn' type="submit">Crear Mueble</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Crear;