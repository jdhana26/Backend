import { useState } from "react";

const CountAfterLoad = () => {
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
      <h2 className="font-bold mb-2">Count After Load</h2>
      <button
        onClick={fetchData}
        className="bg-indigo-500 text-white px-3 py-1 mb-2"
      >
        Load Data
      </button>

      {loading && <p>Loading...</p>}
      {!loading && users.length > 0 && (
        <p>Total Records: {users.length}</p>
      )}
    </div>
  );
};

export default CountAfterLoad;
