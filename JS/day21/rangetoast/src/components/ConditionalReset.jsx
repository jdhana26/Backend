import { useState } from "react";
import { toast } from "react-toastify";

const ConditionalReset = () => {
  const [num, setNum] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const n = Number(num);

    if (n % 3 === 0 && n % 5 === 0) {
      toast.success("Special Number");
      setNum("");
    } else {
      toast.info("Normal Number");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h3 className=" bg-amber-300 text-lg font-semibold mb-3">Conditional Reset</h3>
      <input type="number" className="input  bg-amber-200" value={num} onChange={(e) => setNum(e.target.value)} />
      <button className="btn bg-amber-800 text-white p-1 rounded">Submit</button>
    </form>
  );
};

export default ConditionalReset;
