import { useEffect, useState } from "react";

const ReverseList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const reverseData = () => {
    setUsers([...users].reverse());
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-2">Reverse List</h2>
      <button
        onClick={reverseData}
        className="bg-purple-500 text-white px-3 py-1 mb-2"
      >
        Reverse
      </button>

      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default ReverseList;
