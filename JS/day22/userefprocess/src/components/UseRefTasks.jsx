import { useEffect, useRef, useState } from "react";

const UseRefTasks = () => {
  const headingRef = useRef(null);
  const colorBoxRef = useRef(null);
  const autoFocusRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const counterRef = useRef(0);
  const counterDisplayRef = useRef(null);
  const paragraphRef = useRef(null);
  const scrollOneRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const setValueRef = useRef(null);

  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    autoFocusRef.current.focus();
  }, []);

  const btn =
    "mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition";

  return (
    <div className="space-y-10 p-6">

      {/* 1️⃣ */}
      <div className="border p-4 rounded">
        <h1 ref={headingRef} className="text-xl font-bold">
          Original Heading
        </h1>
        <button
          onClick={() => (headingRef.current.innerText = "Changed using useRef")}
          className={btn}
        >
          Change Text
        </button>
      </div>

      {/* 2️⃣ */}
      <div className="border p-4 rounded">
        <div ref={colorBoxRef} className="h-20 bg-gray-300 mb-2"></div>
        <button
          onClick={() =>
            (colorBoxRef.current.style.backgroundColor = "orange")
          }
          className={btn}
        >
          Change Background
        </button>
      </div>

      {/* 3️⃣ */}
      <div className="border p-4 rounded">
        <input
          ref={autoFocusRef}
          className="border px-2 py-1"
          placeholder="Auto Focus Input"
        />
      </div>

      {/* 4️⃣ */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(
            `Name: ${nameRef.current.value}\nEmail: ${emailRef.current.value}`
          );
        }}
        className="border p-4 rounded space-y-2"
      >
        <input ref={nameRef} placeholder="Name" className="border px-2 py-1" />
        <input ref={emailRef} placeholder="Email" className="border px-2 py-1" />
        <button className={btn}>Submit</button>
      </form>

      {/* 5️⃣ */}
      <div className="border p-4 rounded">
        <p ref={counterDisplayRef} className="text-lg">
          0
        </p>
        <button
          onClick={() => {
            counterRef.current += 1;
            counterDisplayRef.current.innerText = counterRef.current;
          }}
          className={btn}
        >
          Increment (useRef)
        </button>
      </div>

      {/* 6️⃣ */}
      <div className="border p-4 rounded">
        <p ref={paragraphRef}>Hello from paragraph</p>
        <button
          onClick={() => alert(paragraphRef.current.innerText)}
          className={btn}
        >
          Show Paragraph Text
        </button>
      </div>

      {/* 7️⃣ */}
      <div className="border p-4 rounded">
        <button
          onClick={() =>
            scrollOneRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className={btn}
        >
          Scroll Down
        </button>

        <div className="h-40"></div>

        <div ref={scrollOneRef} className="h-20 bg-yellow-300">
          Scroll Target
        </div>
      </div>

      {/* 8️⃣ */}
      <div className="border p-4 rounded space-y-2">
        <div className="space-x-2">
          <button onClick={() => section1Ref.current.scrollIntoView()} className={btn}>1</button>
          <button onClick={() => section2Ref.current.scrollIntoView()} className={btn}>2</button>
          <button onClick={() => section3Ref.current.scrollIntoView()} className={btn}>3</button>
          <button onClick={() => section4Ref.current.scrollIntoView()} className={btn}>4</button>
        </div>

        <div className="space-y-8 mt-4">
          <div ref={section1Ref} className="h-20 bg-gray-200">Section 1</div>
          <div ref={section2Ref} className="h-20 bg-gray-300">Section 2</div>
          <div ref={section3Ref} className="h-20 bg-gray-400">Section 3</div>
          <div ref={section4Ref} className="h-20 bg-gray-500">Section 4</div>
        </div>
      </div>

      {/* 9️⃣ */}
      <div className="border p-4 rounded">
        <input ref={setValueRef} className="border px-2 py-1" />
        <button
          onClick={() => (setValueRef.current.value = "React useRef")}
          className={`${btn} ml-2`}
        >
          Set Value
        </button>
      </div>

      {/* 🔟 */}
      <div className="border p-4 rounded">
        <p>Current: {count}</p>
        <p>Previous: {prevCountRef.current}</p>
        <button
          onClick={() => {
            prevCountRef.current = count;
            setCount(count + 1);
          }}
          className={btn}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default UseRefTasks;
