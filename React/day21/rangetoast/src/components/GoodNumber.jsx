import { useState } from "react";
import { toast } from "react-toastify";

const GoodNumber = () => {
  const [num, setNum] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const n = Number(num);

    if (n % 10 === 0 && n >= 10 && n <= 100) {
      toast.success("Good Number");
    } else {
      toast.error("Not a Good Number");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h3 className=" bg-amber-300 text-lg font-semibold mb-3">Good Number Checker</h3>
      <input type="number" className="input  bg-amber-200" value={num} onChange={(e) => setNum(e.target.value)} />
      <button className="btn bg-amber-800 text-white p-1 rounded">Check</button>
    </form>
  );
};

export default GoodNumber;
