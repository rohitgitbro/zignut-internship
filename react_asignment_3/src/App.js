import React, { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import EditDetails from "./components/EditDetails";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUsers();
  }, []);

  const toggleLikeUser = (id) => {
    setUsers((users) =>
      users.map((user) =>
        user.id === id ? { ...user, liked: !user.liked } : user
      )
    );
  };

  const openEditDetails = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    setEditUser(userToEdit);
  };

  const updateUser = (updatedUser) => {
    setUsers((users) =>
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    closeEditDetails();
  };

  const closeEditDetails = () => {
    setEditUser(null);
  };

  const removeUser = (id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onLike={toggleLikeUser}
            onEdit={openEditDetails}
            onRemove={removeUser}
          />
        ))}
      </div>
      {editUser && (
        <EditDetails user={editUser} onSave={updateUser} onClose={closeEditDetails} />
      )}
    </div>
  );
};

export default App;
