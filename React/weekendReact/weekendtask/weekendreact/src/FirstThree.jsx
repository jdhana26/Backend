import React, { useState, useReducer, useEffect, useRef } from "react";

const FirstThree = () => {

  /* =====================================================
     🧪 Task 1 — Debounced Search + History
  ===================================================== */

  const searchRef = useRef();
  const [search, setSearch] = useState("");
  const [searchCount, setSearchCount] = useState(0);

  const historyReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.payload];
      case "CLEAR":
        return [];
      default:
        return state;
    }
  };

  const [history, dispatchHistory] = useReducer(historyReducer, []);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search) {
        setSearchCount((prev) => prev + 1);
        dispatchHistory({ type: "ADD", payload: search });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [search]);


  /* =====================================================
     🧪 Task 2 — Scroll Counter with Throttle
  ===================================================== */

  const [scrollCount, setScrollCount] = useState(0);
  const prevScroll = useRef(0);

  const scrollReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const updated = [action.payload, ...state];
        return updated.slice(0, 5);
      case "CLEAR":
        return [];
      default:
        return state;
    }
  };

  const [positions, dispatchScroll] = useReducer(scrollReducer, []);

  useEffect(() => {
    let lastCall = 0;

    const handleScroll = () => {
      const now = Date.now();
      if (now - lastCall >= 1000) {
        lastCall = now;
        setScrollCount((prev) => prev + 1);
        prevScroll.current = window.scrollY;
        dispatchScroll({ type: "ADD", payload: window.scrollY });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  /* =====================================================
     🧪 Task 3 — Form with Focus Control
  ===================================================== */

  const formReducer = (state, action) => {
    switch (action.type) {
      case "UPDATE":
        return { ...state, [action.field]: action.value };
      case "RESET":
        return { name: "", email: "", password: "" };
      default:
        return state;
    }
  };

  const [form, dispatchForm] = useReducer(formReducer, {
    name: "",
    email: "",
    password: "",
  });

  const [submitCount, setSubmitCount] = useState(0);

  const emailRef = useRef();
  const passRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitCount((prev) => prev + 1);
    dispatchForm({ type: "RESET" });
  };

  return (
    <div>

      <h2>Task 1 — Debounced Search</h2>
      <input
        ref={searchRef}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
      <p>Search Count: {searchCount}</p>
      <button onClick={() => dispatchHistory({ type: "CLEAR" })}>
        Clear History
      </button>
      <ul>
        {history.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <hr />

      <h2>Task 2 — Scroll Counter</h2>
      <p>Scroll Count: {scrollCount}</p>
      <button onClick={() => dispatchScroll({ type: "CLEAR" })}>
        Clear Positions
      </button>
      <ul>
        {positions.map((pos, i) => (
          <li key={i}>{pos}</li>
        ))}
      </ul>

      <div style={{ height: "600px" }}></div>

      <hr />

      <h2>Task 3 — Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={form.name}
          placeholder="Name"
          onChange={(e) =>
            dispatchForm({
              type: "UPDATE",
              field: "name",
              value: e.target.value,
            })
          }
          onKeyDown={(e) => e.key === "Enter" && emailRef.current.focus()}
        />
        <br /><br />

        <input
          ref={emailRef}
          value={form.email}
          placeholder="Email"
          onChange={(e) =>
            dispatchForm({
              type: "UPDATE",
              field: "email",
              value: e.target.value,
            })
          }
          onKeyDown={(e) => e.key === "Enter" && passRef.current.focus()}
        />
        <br /><br />

        <input
          ref={passRef}
          value={form.password}
          placeholder="Password"
          onChange={(e) =>
            dispatchForm({
              type: "UPDATE",
              field: "password",
              value: e.target.value,
            })
          }
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <p>Submitted: {submitCount}</p>
    </div>
  );
};

export default FirstThree;