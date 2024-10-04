import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemList from './components/ItemList';
import './index.css';

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', price: 100 },
    { id: 2, name: 'Item 2', price: 200 },
    { id: 3, name: 'Item 3', price: 300 }
  ]);

  const addItem = () => {
    const newItem = { id: items.length + 1, name: `Item ${items.length + 1}`, price: (items.length + 1) * 100 };
    setItems([...items, newItem]);
  };

  return (
    <div className="App">
      <Header />
      <ItemList items={items} addItem={addItem} />
      <Footer />
    </div>
  );
}

export default App;
