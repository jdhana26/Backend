import { useEffect, useState } from "react";

const ShowHide = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-2">Show / Hide</h2>
      <button
        onClick={() => setShow(!show)}
        className="bg-green-500 text-white px-3 py-1 mb-2"
      >
        Toggle
      </button>

      {show &&
        users.map(user => (
          <p key={user.id}>{user.name}</p>
        ))}
    </div>
  );
};

export default ShowHide;
