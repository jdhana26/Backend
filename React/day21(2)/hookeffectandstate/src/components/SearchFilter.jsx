import { useEffect, useState } from "react";

const SearchFilter = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-2">Search Filter</h2>
      <input
        className="border p-1 mb-2 w-full"
        placeholder="Search name"
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default SearchFilter;
