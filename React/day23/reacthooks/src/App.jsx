// App.jsx
import { useState, useRef, useEffect, createContext, useContext } from "react";

/* =====================
   TASK GROUP 1 – CONTEXT
===================== */

// 🌗 Theme Context
const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.style.background = theme === "light" ? "#fff" : "#111";
    document.body.style.color = theme === "light" ? "#000" : "#fff";
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      style={{
        padding: "8px 16px",
        backgroundColor: theme === "light" ? "#2563eb" : "#f59e0b",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
      }}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      Toggle Theme
    </button>
  );
};

// 🔢 Global Counter
const CounterContext = createContext();
const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};

const CounterIncrement = () => {
  const { setCount } = useContext(CounterContext);
  return (
    <button
      style={{
        padding: "6px 14px",
        backgroundColor: "#16a34a",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
      }}
      onClick={() => setCount(c => c + 1)}
    >
      Increment
    </button>
  );
};

const CounterDisplay = () => {
  const { count } = useContext(CounterContext);
  return <h3>Count: {count}</h3>;
};

// 🎯 Focus Input via Context
const FocusContext = createContext();
const FocusProvider = ({ children }) => {
  const inputRef = useRef();
  return (
    <FocusContext.Provider value={inputRef}>
      {children}
    </FocusContext.Provider>
  );
};

const FocusInput = () => {
  const ref = useContext(FocusContext);
  return <input ref={ref} placeholder="Focus me" />;
};

const FocusButton = () => {
  const ref = useContext(FocusContext);
  return (
    <button
      style={{
        padding: "6px 14px",
        backgroundColor: "#7c3aed",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
      }}
      onClick={() => ref.current.focus()}
    >
      Focus Input
    </button>
  );
};

// 🔐 Login Persistence
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const Login = () => {
  const { user, setUser } = useContext(AuthContext);
  return (
    <div>
      <input value={user} onChange={e => setUser(e.target.value)} />
      <p>Logged in as: {user}</p>
    </div>
  );
};

// 🔁 Render Count via Context
const RenderContext = createContext();
const RenderProvider = ({ children }) => {
  const renderRef = useRef(0);
  useEffect(() => {
    renderRef.current++;
  });
  return (
    <RenderContext.Provider value={renderRef.current}>
      {children}
    </RenderContext.Provider>
  );
};

// const RenderDisplay = () => {
//   const renders = useContext(RenderContext);
//   return <p>Renders: {renders}</p>;
// };

// /* =====================
//    TASK GROUP 2 – useRef
// ===================== */

// const PreviousValue = () => {
//   const [val, setVal] = useState("");
//   const prev = useRef("");

//   useEffect(() => {
//     prev.current = val;
//   }, [val]);

//   return (
//     <div>
//       <input value={val} onChange={e => setVal(e.target.value)} />
//       <p>Current: {val}</p>
//       <p>Previous: {prev.current}</p>
//     </div>
//   );
// };

// const NoRenderCounter = () => {
//   const refCount = useRef(0);
//   const [stateCount, setState] = useState(0);

//   return (
//     <div>
//       <button onClick={() => refCount.current++}>Ref +</button>
//       <button onClick={() => setState(stateCount + 1)}>State +</button>
//       <p>Ref: {refCount.current}</p>
//       <p>State: {stateCount}</p>
//     </div>
//   );
// };

// /* =====================
//    APP
 const RenderDisplay = () => {
  const renders = useContext(RenderContext);

  return (
    <p className="text-lg font-medium text-gray-700">
      Renders: <span className="font-bold text-blue-600">{renders}</span>
    </p>
  );
};
const PreviousValue = () => {
  const [val, setVal] = useState("");
  const prev = useRef("");

  useEffect(() => {
    prev.current = val;
  }, [val]);

  return (
    <div className="p-4 border rounded-md w-72 mt-4">
      <input
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        className="w-full p-2 border border-gray-400 rounded
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <p className="mt-3 text-gray-700">
        Current: <span className="font-semibold">{val}</span>
      </p>

      <p className="text-gray-500">
        Previous: <span className="font-semibold">{prev.current}</span>
      </p>
    </div>
  );
};
const NoRenderCounter = () => {
  const refCount = useRef(0);
  const [stateCount, setState] = useState(0);

  return (
    <div className="p-4 border rounded-md w-72 mt-4">
      <div className="flex gap-3">
        <button
          onClick={() => refCount.current++}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Ref +
        </button>

        <button
          onClick={() => setState(stateCount + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          State +
        </button>
      </div>

      <p className="mt-4 text-gray-700">
        Ref: <span className="font-bold">{refCount.current}</span>
      </p>

      <p className="text-gray-700">
        State: <span className="font-bold">{stateCount}</span>
      </p>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <CounterProvider>
        <FocusProvider>
          <AuthProvider>
            <RenderProvider>
              <div
                style={{
                  minHeight: "100vh",
                  padding: "24px",
                  maxWidth: "720px",
                  margin: "0 auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px"
                }}
              >
                {/* TASK 1 */}
                <section style={{ padding: "16px", border: "1px solid #ddd", borderRadius: "10px" }}>
                  <h2>Task 1: Theme Switcher</h2>
                  <ThemeToggle />
                </section>

                {/* TASK 2 */}
                <section style={{ padding: "16px", border: "1px solid #ddd", borderRadius: "10px" }}>
                  <h2>Task 2: Global Counter</h2>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <CounterIncrement />
                    <CounterDisplay />
                  </div>
                </section>

                {/* TASK 3 */}
                <section style={{ padding: "16px", border: "1px solid #ddd", borderRadius: "10px" }}>
                  <h2>Task 3: Focus Input</h2>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <FocusInput />
                    <FocusButton />
                  </div>
                </section>

                {/* TASK 4 */}
                <section style={{ padding: "16px", border: "1px solid #ddd", borderRadius: "10px" }}>
                  <h2>Task 4: Login Persistence</h2>
                  <Login />
                </section>

                {/* TASK 5 */}
                <section style={{ padding: "16px", border: "1px solid #ddd", borderRadius: "10px" }}>
                  <h2>Task 5: Render Count</h2>
                  <RenderDisplay />
                </section>

                {/* TASK 6 */}
                <section style={{ padding: "16px", border: "1px solid #ddd", borderRadius: "10px" }}>
                  <h2>Task 6: Previous Value Tracker</h2>
                  <PreviousValue />
                </section>

                {/* TASK 7 */}
                <section style={{ padding: "16px", border: "1px solid #ddd", borderRadius: "10px" }}>
                  <h2>Task 7: Ref vs State Counter</h2>
                  <NoRenderCounter />
                </section>
              </div>
            </RenderProvider>
          </AuthProvider>
        </FocusProvider>
      </CounterProvider>
    </ThemeProvider>
  );
}
