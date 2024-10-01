//Message
import React, { useState } from 'react';

const Message = () => {
  const [message, setMessage] = useState('Hola, Mundo!');

  const changeMessage = () => {
    setMessage('Mensaje actualizado');
  };

  return (
    <div>
      <p>{message}</p>
      <button onClick={changeMessage}>Cambiar Mensaje</button>
    </div>
  );
};

export default Message;
