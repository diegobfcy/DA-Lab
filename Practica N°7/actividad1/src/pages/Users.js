import { Link, Outlet } from "react-router-dom";

const Users = () => {
  return (
    <div className="users-container">
      <div className="users-list">
        <h1 className="page-title">Users List</h1>
        <ul>
          <li><Link to="/users/1">User 1</Link></li>
          <li><Link to="/users/2">User 2</Link></li>
          <li><Link to="/users/3">User 3</Link></li>
        </ul>
      </div>
      
      <div className="user-details-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Users;
