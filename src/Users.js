import React from "react";
import axios from "axios";
import "./Users.css";

export const url = "https://randomuser.me/api/?results=5";

export default function Users() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    async function getUsers() {
      try {
        const {
          data: { results },
        } = await axios.get(url);
        setUsers(results);
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
  }, []);

  return (
    <>
      {users && users.length === 0 ? (
        <div>Loading...</div>
      ) : (
        users &&
        users.map((user) => (
          <li key={user.name.first} data-testid="row">
            {user.name.first}
          </li>
        ))
      )}
    </>
  );
}
