import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <>
      <h1>User</h1>

      <div className="users">
        {users.map((user) => (
          //   <ListItem button key={user.id} onClick={() => handleUserClick(user)}>
          // <ListItemAvatar>
          //   <Avatar src={`https://robohash.org/${user.id}?set=set2`} />
          // </ListItemAvatar>
          // <ListItemText primary={user.name} />
          //   </ListItem>
          
          <div className="users-list">

            <h3>{user.profile.firstName} {user.profile.lastName}</h3>
            <div>
              <img src={user.avatar} alt="avatar" />
            </div>
            <p>{user.jobTitle}</p>
          </div>
          
        ))}
      </div>
    </>
  );
}
