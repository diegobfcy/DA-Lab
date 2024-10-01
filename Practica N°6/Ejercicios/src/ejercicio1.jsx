import React, { useState, useEffect } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0);

    
    useEffect(() => {
        document.title = `Contador: ${contador}`;
        console.log(`El contador ha cambiado a: ${contador}`);

        
        return () => {
            console.log('El componente se desmontará o el contador cambiará');
        };
    }, [contador]);
    
    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={() => setContador(contador + 1)}>
                Incrementar
            </button>
        </div>
    );
};

export default Contador;
