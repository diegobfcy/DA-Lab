//UserDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { userId } = useParams();

  return <h2>Detalles del Usuario {userId}</h2>;
};

export default UserDetail;
