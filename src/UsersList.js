import { useState } from "react";
import "./UsersList.css";
import ButtonsPanel from "./components/ButtonsPanel";


const UsersList = () => {

  const [users, setUsers] = useState([]);
  const [displayedUsers, setDisplayedUsers] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    usertype: "Admin",
  });

  const showList = (action) => {
    let filteredUsers = [];
    if (action === "admins") {
      filteredUsers = users.filter(user => user.usertype === "Admin");
    } else if (action === "users") {
      filteredUsers = users.filter(user => user.usertype === "User");
    } else {
      filteredUsers = users;
    }
    setDisplayedUsers(filteredUsers);
  };


  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    setFormData((prevDataForm) => {
      return { ...prevDataForm, [name]: target.value };
    });
  };

  const setUser = (e) => {
    e.preventDefault();
    const newUser = { ...formData, id: Date.now() };
    setUsers([...users, newUser]);
    setDisplayedUsers([...users, newUser]);
  }

  const removeUser = (id) => {
    const filteredUsers = users.filter(user => user.id !== id);
    setUsers(filteredUsers);
    setDisplayedUsers(filteredUsers);
  };


  return (
    <div className="usersList">
      <ButtonsPanel showList={showList}/>
      <form onSubmit={setUser}>
        <label htmlFor="username">User name</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="User name"
          onChange={handleInputChange}
          value={formData.username}
        />
        <label htmlFor="email">User email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="User email"
          onChange={handleInputChange}
          value={formData.email}
        />
        <label htmlFor="usertype">User type</label>
        <select id="usertype" name="usertype" onChange={handleInputChange}>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <button>Save</button>
      </form>

      <div className="list">
        {displayedUsers.map((user) => {
          return (
            <div className="userItem" key={user.id} onClick={() => removeUser(user.id)} >
              <p>{user.username}</p>
              <p>{user.email}</p>
              <p>{user.usertype}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersList;
