import { useEffect, useState } from "react";

const RemoveById = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const removeUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-2">Remove by ID</h2>
      {users.map(user => (
        <div key={user.id} className="flex justify-between">
          <span>{user.name}</span>
          <button
            onClick={() => removeUser(user.id)}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default RemoveById;
