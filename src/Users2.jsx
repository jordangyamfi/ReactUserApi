import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Users2 = () => {
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
      <h1 style={{ textAlign: "center", margin: "2%" }}>
        Users and their data
      </h1>
      <Table striped bordered style={{ margin: "5%" }}>
        <tbody>
          <tr>
            <th>User:</th>
            <th>Email:</th>
            <th>Website:</th>
          </tr>
          {users.map((user) => (
            <tr>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default Users2;
