import { useEffect, useState } from "react";

const NoData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-2">No Data</h2>
      <button
        onClick={() => setUsers([])}
        className="bg-red-500 text-white px-3 py-1 mb-2"
      >
        Clear
      </button>

      {users.length === 0
        ? <p>No Data Found</p>
        : users.map(user => <p key={user.id}>{user.name}</p>)
      }
    </div>
  );
};

export default NoData;
