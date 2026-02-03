import { useState } from "react";

const FetchOnClick = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-2">Fetch on Click</h2>
      <button
        onClick={fetchData}
        className="bg-blue-500 text-white px-3 py-1 mb-2"
      >
        Fetch
      </button>

      {loading && <p>Loading...</p>}
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default FetchOnClick;
