import React, { useState } from 'react';

function CounterFunction() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Contador con useState</h2>
      <p>Cuenta actual: {count}</p>
      <button onClick={incrementCount}>Incrementar</button>
    </div>
  );
}

export default CounterFunction;
