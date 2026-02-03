import { useState } from "react";
import { toast } from "react-toastify";

const AttemptLimit = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (count >= 3) {
      toast.error("Limit Reached");
      return;
    }

    setCount(prev => prev + 1);
    toast.success(`Submitted ${count + 1} time(s)`);
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h3 className=" bg-amber-300 text-lg font-semibold mb-3">Attempt Limit</h3>
      <input className="input bg-amber-200" value={value} onChange={(e) => setValue(e.target.value)} />
      <button className="btn bg-amber-800 text-white p-1 rounded" disabled={count >= 3}>Submit</button>
    </form>
  );
};

export default AttemptLimit;
