//Dashboard.jsx
import React from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import ItemList from './../ItemList/ItemList';

const Dashboard = () => {
  return (
    <div>
      <Header title="Dashboard" />
      <main>Contenido Dashboard</main>
      <Footer year={2024} />
      <ItemList />
    </div>
  );
};

export default Dashboard;
