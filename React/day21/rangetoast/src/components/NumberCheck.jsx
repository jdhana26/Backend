import { useState } from "react";
import { toast } from "react-toastify";

const NumberCheck = () => {
  const [num, setNum] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // empty input validation
    if (num === "") {
      toast.error("Please enter a number");
      return;
    }

    const n = Number(num);

    if (n % 10 === 0 && n >= 10 && n <= 100) {
      toast.success("Good Number");
    } else {
      toast.error("Not a Good Number");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h3 className="bg-amber-300 text-lg font-semibold mb-3">
        Number Check
      </h3>

      <input
        type="number"
        className="input bg-amber-200"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="Enter number"
      />

      <button
        type="submit"
        className="btn bg-amber-800 text-white p-1 rounded"
      >
        Check
      </button>
    </form>
  );
};

export default NumberCheck;
