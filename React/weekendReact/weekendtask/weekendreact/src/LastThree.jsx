import React, { useReducer, useState, useRef } from "react";

const LastThree = () => {

  /* =====================================================
     🧪 Task 4 — Theme + Font Size Controller
  ===================================================== */

  const themeReducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE":
        return { ...state, theme: state.theme === "light" ? "dark" : "light" };
      case "SIZE":
        return { ...state, size: action.payload };
      default:
        return state;
    }
  };

  const [settings, dispatchSettings] = useReducer(themeReducer, {
    theme: "light",
    size: "16px",
  });

  const [changeCount, setChangeCount] = useState(0);
  const prevFont = useRef(settings.size);

  /* =====================================================
     🧪 Task 5 — Todo with Input Focus
  ===================================================== */

  const todoReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.payload];
      case "DELETE":
        return state.filter((_, i) => i !== action.index);
      default:
        return state;
    }
  };

  const [todos, dispatchTodo] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState("");
  const [todoCount, setTodoCount] = useState(0);
  const inputRef = useRef();

  const addTodo = () => {
    if (todoText) {
      dispatchTodo({ type: "ADD", payload: todoText });
      setTodoCount((prev) => prev + 1);
      setTodoText("");
      inputRef.current.focus();
    }
  };

  /* =====================================================
     🧪 Task 6 — Theme & Font Controller + Text View
  ===================================================== */

  const [textChanges, setTextChanges] = useState(0);

  return (
    <div>

      <h2>Task 4 — Theme & Font</h2>

      <button
        onClick={() => {
          dispatchSettings({ type: "TOGGLE" });
          setChangeCount((prev) => prev + 1);
        }}
      >
        Toggle Theme
      </button>

      <input
        type="range"
        min="12"
        max="30"
        onChange={(e) => {
          dispatchSettings({ type: "SIZE", payload: e.target.value + "px" });
          prevFont.current = settings.size;
          setChangeCount((prev) => prev + 1);
          setTextChanges((prev) => prev + 1);
        }}
      />

      <p>Total Changes: {changeCount}</p>

      <div
        style={{
          background: settings.theme === "dark" ? "#222" : "#eee",
          color: settings.theme === "dark" ? "#fff" : "#000",
          padding: "20px",
          fontSize: settings.size,
          marginTop: "10px",
        }}
      >
        Preview Text
      </div>

      <hr />

      <h2>Task 5 — Todo</h2>

      <input
        ref={inputRef}
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter todo"
      />

      <button onClick={addTodo}>Add</button>

      <p>Total Added: {todoCount}</p>

      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo}
            <button onClick={() => dispatchTodo({ type: "DELETE", index: i })}>
              X
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default LastThree;