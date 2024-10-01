import React, { useState, useEffect } from 'react';

const ListaUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const obtenerUsuarios = async () => {
            try {
                const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await respuesta.json();
                setUsuarios(data);
                setCargando(false);
            } catch (error) {
                console.error('Error al obtener los usuarios:', error);
            }
        };

        obtenerUsuarios();
    }, []);
    
    return (
        <div>
            {cargando ? (
                <p>Cargando usuarios...</p>
            ) : (
                <ul>
                    {usuarios.map(usuario => (
                        <li key={usuario.id}>{usuario.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ListaUsuarios;
