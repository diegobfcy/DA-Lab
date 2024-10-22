import React, { useState } from 'react';
import axios from 'axios';

function Aerolinea() {
    const [formData, setFormData] = useState({
        nombre: '',
        fecha_nacimiento: '',
        precio_base: ''
    });
    const [result, setResult] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3004/calcular_precio', formData)
            .then(response => {
                const { edad, precio_final } = response.data;
                setResult(`Edad del pasajero: ${edad} años. Precio final del pasaje: S/ ${precio_final}`);
            })
            .catch(error => {
                setResult(`Error al calcular el precio: ${error.response ? error.response.data : error.message}`);
            });
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-3">Registro de Pasajeros y Venta de Pasajes</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre Completo:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="fecha_nacimiento" className="form-label">Fecha de Nacimiento:</label>
                    <input
                        type="date"
                        className="form-control"
                        id="fecha_nacimiento"
                        name="fecha_nacimiento"
                        value={formData.fecha_nacimiento}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="precio_base" className="form-label">Precio Base del Pasaje (S/):</label>
                    <input
                        type="number"
                        className="form-control"
                        id="precio_base"
                        name="precio_base"
                        value={formData.precio_base}
                        onChange={handleChange}
                        step="0.01"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Registrar y Calcular Precio</button>
            </form>
            {result && <div className="alert alert-success mt-3">{result}</div>}
        </div>
    );
}

export default Aerolinea;
