import React from 'react';
import '../styles/ItemList.css';

const ItemList = ({ items, addItem }) => {
  return (
    <div className="item-list">
      <h2>Lista de Items</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - S/.{item.price}
          </li>
        ))}
      </ul>
      <button onClick={addItem}>Agregar Item</button>
    </div>
  );
};

export default ItemList;
