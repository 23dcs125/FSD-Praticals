import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      // eslint-disable-next-line no-eval
      const res = eval(input);
      setResult(res);
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-gray-800 rounded-2xl shadow-xl p-4 w-80">
        {/* Display */}
        <div className="text-right text-white text-2xl mb-4">
          <div className="text-gray-400 text-sm">
            {result !== "" ? `(${result})` : ""}
          </div>
          {input || "0"}
        </div>

        {/* Operator Row */}
        <div className="grid grid-cols-5 gap-2 mb-2">
          {["/", "*", "+", "-", "DEL"].map((op) => (
            <button
              key={op}
              className="bg-pink-600 text-white rounded-lg py-2 font-bold"
              onClick={() => (op === "DEL" ? handleDelete() : handleClick(op))}
            >
              {op}
            </button>
          ))}
        </div>

        {/* Number & Other Buttons */}
        <div className="grid grid-cols-3 gap-2">
          {["1","2","3","4","5","6","7","8","9","0",".","="].map((num) => (
            <button
              key={num}
              className={`${
                num === "="
                  ? "bg-pink-600 text-white"
                  : "bg-gray-700 text-white"
              } rounded-lg py-2 font-bold`}
              onClick={() => (num === "=" ? handleEqual() : handleClick(num))}
            >
              {num}
            </button>
          ))}
        </div>

        {/* Clear Button */}
        <button
          className="w-full mt-3 bg-red-600 text-white rounded-lg py-2 font-bold"
          onClick={handleClear}
        >
          C
        </button>
      </div>
    </div>
  );
}

export default App;
