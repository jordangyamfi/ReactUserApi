import React, { useState, useEffect } from "react";
import axios from "axios";

const UsersAgain = () => {
  let myUsers = [];
  const [users, setUsers] = useState(myUsers);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>All Users</h1>3
      <hr />
      <div>
        {users.map((user) => (
          <div>
            <p>{user.username}</p>
            <p>{user.website}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersAgain;
