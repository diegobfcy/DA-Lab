import React from 'react';
import './styles.css';

const Comp1 = ({ message, onClick }) => {
  return (
    <div>
      {message}
      <button onClick={onClick}>Haz clic aquí</button>
    </div>
  );
};
export default Comp1;