import React, { useReducer, useState, useRef, lazy, Suspense } from "react";

const TaskSix = () => {

  /* =====================================================
     🧪 Task 6 — Theme & Font Controller + Lazy Text View
  ===================================================== */

  // Lazy Loaded Component (inside same file)
  const TextView = lazy(() =>
    Promise.resolve({
      default: ({ theme, size }) => (
        <div
          style={{
            background: theme === "dark" ? "#111" : "#f2f2f2",
            color: theme === "dark" ? "#fff" : "#000",
            padding: "20px",
            marginTop: "20px",
            fontSize: size,
            transition: "0.3s ease"
          }}
        >
          This is Lazy Loaded Text View
        </div>
      ),
    })
  );

  // Reducer for theme + font size
  const reducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_THEME":
        return {
          ...state,
          theme: state.theme === "light" ? "dark" : "light",
        };

      case "CHANGE_SIZE":
        return {
          ...state,
          fontSize: action.payload,
        };

      default:
        return state;
    }
  };

  const [settings, dispatch] = useReducer(reducer, {
    theme: "light",
    fontSize: "16px",
  });

  const [changeCount, setChangeCount] = useState(0);

  // Store previous font size
  const previousFontSize = useRef(settings.fontSize);

  const handleThemeToggle = () => {
    dispatch({ type: "TOGGLE_THEME" });
    setChangeCount((prev) => prev + 1);
  };

  const handleFontChange = (e) => {
    previousFontSize.current = settings.fontSize; // store old value
    dispatch({ type: "CHANGE_SIZE", payload: e.target.value + "px" });
    setChangeCount((prev) => prev + 1);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Task 6 — Theme & Font Controller</h2>

      <button onClick={handleThemeToggle}>
        Toggle Theme
      </button>

      <br /><br />

      <input
        type="range"
        min="12"
        max="30"
        onChange={handleFontChange}
      />

      <p>Total Changes: {changeCount}</p>
      <p>Previous Font Size: {previousFontSize.current}</p>

      <Suspense fallback={<p>Loading Text View...</p>}>
        <TextView theme={settings.theme} size={settings.fontSize} />
      </Suspense>
    </div>
  );
};

export default TaskSix;