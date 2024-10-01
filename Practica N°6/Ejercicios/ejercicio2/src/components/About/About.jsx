//About.jsx
import React from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import ItemList from './../ItemList/ItemList';

const About = () => {
  return (
    <div>
      <Header title="About" />
      <main>Contenido del about</main>
      <Footer year={2024} />
      <ItemList />
    </div>
  );
};

export default About;
