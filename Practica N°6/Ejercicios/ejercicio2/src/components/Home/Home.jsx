//Home.jsx
import React from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import ItemList from './../ItemList/ItemList';

const Home = () => {
  return (
    <div>
      <Header title="Home" />
      <main>Contenido Home</main>
      <Footer year={2024} />
      <ItemList />
    </div>
  );
};

export default Home;
