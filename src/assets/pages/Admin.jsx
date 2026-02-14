import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

   useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);
  const deleteUser = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;

    const newUsers = users.filter((_, i) => i !== index);
    setUsers(newUsers);

    
    localStorage.setItem("users", JSON.stringify(newUsers));
  };

  return (
    <div className="admin-container">
      <h2>Admin Page</h2>

      <table  className="ad-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>DOB</th>
            <th>Email</th>
            <th>Phone</th>
             <th>Action</th>

            
          </tr>
        </thead>

        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="6">No users found</td>
            </tr>
          ) : (
            users.map((u, index) => (
              <tr key={index}>
                <td>{u.username}</td>
                <td>{u.password}</td>
                <td>{u.dob}</td>
                <td>{u.email}</td>
                <td>{u.phone}</td>
                <td>
                  <div className="delete-div">
                    <i onClick={() => deleteUser(index)} className="fa-solid fa-trash"></i>
                  </div>
                    

                    {/* <button onClick={() => deleteUser(index)} id="delete-btn"></button> */}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <br />
      <button onClick={() => navigate("/home")}>Go to Home</button>
    </div>
  );
}