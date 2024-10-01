//Users.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Users = () => {
  return (
    <div>
      <h1>Usuarios</h1>
      <nav>
        <Link to="1">Usuario 1</Link>
        <Link to="2">Usuario 2</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Users;
