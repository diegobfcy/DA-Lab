import React, { useState, useEffect } from 'react';

function CounterWithEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Cuenta actual: ${count}`;
  }, [count]); 

  return (
    <div>
      <h2>Contador con useEffect</h2>
      <p>Cuenta actual: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default CounterWithEffect;
