import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaUsersGear } from "react-icons/fa6";

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
      <div className="body d-flex justify-content-center align-items-center ">
        <div className="dashboard rounded-4 d-flex  ">
          <div className="left text-white p-3 w-50">
            <div className="d-flex gap-3 align-items-center">
                <FaUsersGear className="uicon" />

              <h3>All Users</h3>
            </div>

            <div className="users-container d-flex flex-column  pointer mt-3 m  ">
              {loading ? (
                <div className="spinner">
                  <div
                    class="inner spinner-border text-light "
                    role="status"
                    style={{ width: "2.5rem", height: "2.5rem" }}
                  >
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                ""
              )}
              {users.map((user, key) => (
                <div className="user  align-items-center d-flex gap-3 p-2 ps-3 rounded-4">
                  <div className="pic">
                    <img
                      src={`https://randomuser.me/api/portraits/med/men/${key}.jpg`}
                      alt="avatar"
                    />
                    {/* <img src={user.avatar} alt="avatar" /> */}
                  </div>
                  <div className="details">
                    <h6 className="m-0">
                      {user.profile.firstName} {user.profile.lastName}
                    </h6>
                    {/* <div>
            </div> */}
                    <p className="m-0">{user.profile.username}</p>
                    <p className="m-0">{user.jobTitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="right w-50 rounded-3 m-3 p-3 bg-white">
            <h2>User Information</h2>
            <p>Click the more nutton to get the user information</p>
          </div>
        </div>
      </div>
    </>
  );
}
