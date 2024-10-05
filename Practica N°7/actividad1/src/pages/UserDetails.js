import { useParams } from "react-router-dom";

const userData = {
  1: { name: "Julio Centeno", email: "julio@example.com", age: 20 },
  2: { name: "Nohelia Centeno", email: "nohelia@example.com", age: 25 },
  3: { name: "Olga Centeno", email: "olga@example.com", age: 30 },
};

const UserDetails = () => {
  const { userId } = useParams(); 

  const user = userData[userId];

  if (!user) {
    return <h1>Usuario no encontrado</h1>;
  }

  return (
    <div className="user-details">
      <h1>Detalles del Usuario {userId}</h1>
      <p><strong>Nombre:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Edad:</strong> {user.age}</p>
    </div>
  );
};

export default UserDetails;
