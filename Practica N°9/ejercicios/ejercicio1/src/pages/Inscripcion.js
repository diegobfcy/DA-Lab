import React, { useState } from 'react';

function Inscripcion() {
    const [formData, setFormData] = useState({
        nombreCompleto: '',
        direccion: '',
        correoElectronico: '',
        contrasena: '',
        fechaNacimiento: '',
        sexo: '',
        temasInteres: [],
        aficiones: []
    });
    const [showModal, setShowModal] = useState(false);
    const [savedData, setSavedData] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            if (checked) {
                setFormData({
                    ...formData,
                    [name]: [...formData[name], value]
                });
            } else {
                setFormData({
                    ...formData,
                    [name]: formData[name].filter(item => item !== value)
                });
            }
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const handleConfirm = () => {
        // Preparar los datos para enviar al servidor
        const dataToSend = {
            nombre: formData.nombreCompleto,
            direccion: formData.direccion,
            correo: formData.correoElectronico,
            contrasena: formData.contrasena,
            fecha_nacimiento: formData.fechaNacimiento,
            sexo: formData.sexo,
            intereses: formData.temasInteres.join(', '), 
            aficiones: formData.aficiones.join(', ')    
        };

        fetch('http://localhost:3004/registrar_usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        })
        .then(response => response.json())
        .then(data => {
            alert('Datos guardados con éxito!');
            console.log(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        setShowModal(false);
    };

    return (
        <div className="container mt-4">
        <h1 className="mb-4">Formulario de Inscripción</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Nombre completo</label>
                <input
                    type="text"
                    className="form-control"
                    name="nombreCompleto"
                    value={formData.nombreCompleto}
                    onChange={handleChange}
                    placeholder="Nombre completo"
                />
            </div>
            <div className="form-group">
                <label>Dirección</label>
                <input
                    type="text"
                    className="form-control"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                    placeholder="Dirección"
                />
            </div>
            <div className="form-group">
                <label>Correo electrónico</label>
                <input
                    type="email"
                    className="form-control"
                    name="correoElectronico"
                    value={formData.correoElectronico}
                    onChange={handleChange}
                    placeholder="Correo electrónico"
                />
            </div>
            <div className="form-group">
                <label>Contraseña</label>
                <input
                    type="password"
                    className="form-control"
                    name="contrasena"
                    value={formData.contrasena}
                    onChange={handleChange}
                    placeholder="Contraseña"
                />
            </div>
            <div className="form-group">
                <label>Fecha de Nacimiento</label>
                <input
                    type="date"
                    className="form-control"
                    name="fechaNacimiento"
                    value={formData.fechaNacimiento}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Sexo</label>
                <div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="sexo"
                            id="hombre"
                            value="Hombre"
                            checked={formData.sexo === "Hombre"}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="hombre">Hombre</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="sexo"
                            id="mujer"
                            value="Mujer"
                            checked={formData.sexo === "Mujer"}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="mujer">Mujer</label>
                    </div>
                </div>
            </div>
            <div className="form-group">
                    <label>Temas de interés</label>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="temasInteres"
                            value="Ficción"
                            checked={formData.temasInteres.includes("Ficción")}
                            onChange={handleChange}
                            id="ficcion"
                        />
                        <label className="form-check-label" htmlFor="ficcion">
                            Ficción
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="temasInteres"
                            value="Terror"
                            checked={formData.temasInteres.includes("Terror")}
                            onChange={handleChange}
                            id="terror"
                        />
                        <label className="form-check-label" htmlFor="terror">
                            Terror
                        </label>
                    </div>
                
                </div>
                <div className="form-group">
                    <label>Aficiones</label>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="aficiones"
                            value="Deporte al aire libre"
                            checked={formData.aficiones.includes("Deporte al aire libre")}
                            onChange={handleChange}
                            id="deporteAireLibre"
                        />
                        <label className="form-check-label" htmlFor="deporteAireLibre">
                            Deporte al aire libre
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="aficiones"
                            value="Fotografía"
                            checked={formData.aficiones.includes("Fotografía")}
                            onChange={handleChange}
                            id="fotografia"
                        />
                        <label className="form-check-label" htmlFor="fotografia">
                            Fotografía
                        </label>
                    </div>
                    {/* Agregar más checkboxes según sea necesario */}
                </div>
            <button type="submit" className="btn btn-primary">Registrar</button>
        </form>

        {showModal && (
            <div className="modal show d-block" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Confirmar Datos</h5>
                            <button type="button" className="close" onClick={() => setShowModal(false)}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <p><strong>Nombre completo:</strong> {formData.nombreCompleto}</p>
                            <p><strong>Dirección:</strong> {formData.direccion}</p>
                            <p><strong>Correo electrónico:</strong> {formData.correoElectronico}</p>
                            <p><strong>Fecha de Nacimiento:</strong> {formData.fechaNacimiento}</p>
                            <p><strong>Sexo:</strong> {formData.sexo}</p>
                            <p><strong>Temas de interés:</strong> {formData.temasInteres.join(', ')}</p>
                            <p><strong>Aficiones:</strong> {formData.aficiones.join(', ')}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancelar</button>
                            <button type="button" className="btn btn-primary" onClick={handleConfirm}>Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
    );
}

export default Inscripcion;
