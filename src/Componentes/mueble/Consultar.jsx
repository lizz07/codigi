import React, { useEffect, useState } from 'react';
import '../../css/style.css'
function Consultar({ dataUpdated }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [dataUpdated]); // Agregar dataUpdated como dependencia

    const fetchData = () => {
        fetch('https://4.227.136.227/kamjac/api.php?apicall=RMueble')
            .then(response => response.json())
            .then(data => setData(data.contenido))
            .catch(error => console.log(error));
    };

    return (
             <div className="">
    <h2>Muebles registrados</h2>
    <table>
        {Array.isArray(data) ? (
            data.map(item => (
                <tr key={item.id}>
                    <td className='text'>ID: {item.Id_mueble}</td>
                    <td className='text'>Nombre: {item.nombre}</td>
                    <td className='text'>Id categoria: {item.idcategoria}</td>
                    <td className='text'>Medidas: {item.medidas}</td>
                    <td className='text'>Color: {item.color}</td>
                    <td className='text'>Precio: {item.precio}</td>
                </tr>
            ))
        ) : (
            <p>No hay datos disponibles</p>
        )}
    </table>
</div>
    );



}

export default Consultar;