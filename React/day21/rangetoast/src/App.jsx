import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import GoodNumber from "./components/GoodNumber";
import RangeValidation from "./components/RangeValidation";
import AttemptLimit from "./components/AttemptLimit";
import PatternCheck from "./components/PatternCheck";
import ConditionalReset from "./components/ConditionalReset";
import NumberCheck from "./components/NumberCheck";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        useState Practice Tasks
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GoodNumber />
        <RangeValidation />
        <AttemptLimit />
        <PatternCheck />
        <ConditionalReset />
        <NumberCheck />

      </div>

      <ToastContainer position="top-center" />
    </div>
  );
};

export default App;
