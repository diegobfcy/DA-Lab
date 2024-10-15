import React, { useState, createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';

const AuthContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({ name: username });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <h1>Authentication Example</h1>
      {user ? <WelcomeScreen /> : <LoginScreen />}
    </AuthContext.Provider>
  );
}

function LoginScreen() {
  const { login } = useContext(AuthContext);

  return (
    <>
      <h2>Please Log In</h2>
      <button onClick={() => login("Jane Doe")}>Log in as Jane Doe</button>
    </>
  );
}

function WelcomeScreen() {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <h2>Welcome, {user.name}</h2>
      <button onClick={logout}>Log Out</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
