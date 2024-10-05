import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import FeaturedProducts from './pages/FeaturedProducts';
import NewProducts from './pages/NewProducts';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />}>
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
          </Route>
          
          <Route path="contact" element={<Contact />} />
          
          <Route path="contact-us" element={<Contact />} />
          <Route path="contactanos" element={<Contact />} />
          <Route path="get-in-touch" element={<Contact />} />

          <Route path="contact*" element={<Contact />} />
          
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
