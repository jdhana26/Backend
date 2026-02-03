import { useEffect, useState } from "react";

const SortByName = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const sortUsers = () => {
    setUsers([...users].sort((a, b) => a.name.localeCompare(b.name)));
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-2">Sort by Name</h2>
      <button
        onClick={sortUsers}
        className="bg-yellow-500 px-3 py-1 mb-2"
      >
        Sort
      </button>

      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default SortByName;
