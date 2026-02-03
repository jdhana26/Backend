import { useState } from "react";
import { toast } from "react-toastify";

const PatternCheck = () => {
  const [num, setNum] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (/^9\d{3}$/.test(num)) {
      toast.success("Accepted Number");
    } else {
      toast.error("Rejected Number");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h3 className=" bg-amber-300 text-lg font-semibold mb-3">Pattern Check</h3>
      <input type="number" className="input  bg-amber-200" value={num} onChange={(e) => setNum(e.target.value)} />
      <button className="btn bg-amber-800 text-white p-1 rounded">Check</button>
    </form>
  );
};

export default PatternCheck;
