export const topics = [
  {
    id: 'intro',
    title: '👋 Introduction to JavaScript',
    description: "JavaScript is a programming language used to make websites interactive and smart. It helps websites respond to user actions like clicking buttons, typing text, or loading content.\n\nThink of a website like this:\n- HTML gives the structure (body)\n- CSS adds the style (clothes)\n- JavaScript gives the actions (brain)\n\nJavaScript helps the website think and react.",
    examples: [
      {
        title: "Printing Output",
        description: "Use console.log to print messages to the browser's developer console.",
        code: `console.log("Hello, World!");`
      },
      {
        title: "Dynamic Content",
        description: "JavaScript can change the content of HTML elements.",
        code: `// Assuming there is an element with id='demo'
// document.getElementById("demo").innerHTML = "JS Changed This!";
console.log("DOM manipulation example");`
      }
    ],
    interactiveTask: "Use console.log to print 'I am ready' to the console.",
    expectedOutput: "I am ready"
  },
  {
    id: 'variables',
    title: '📦 Variables',
    description: "Variables are like containers that store information. We use variables to remember values and use them later in our program.\n\nJavaScript has three ways to create variables:\n- let: value can change\n- const: value cannot change\n- var: old method (not recommended today)\n\nIn modern JavaScript, we mainly use let and const.",
    examples: [
      {
        title: "Using 'let'",
        description: "Use 'let' for values that might change later (like a score or counter).",
        code: `let score = 10;
console.log(score);
score = 20; // Allowed
console.log(score);`
      },
      {
        title: "Using 'const'",
        description: "Use 'const' for values that should NOT change (like mathematical constants or configuration).",
        code: `const PI = 3.14;
console.log(PI);
// PI = 3.14159; // Error! Cannot reassign const`
      },
      {
        title: "Legacy 'var'",
        description: "Avoid using 'var' in modern code. It has function scope and can be redeclared, which leads to bugs.",
        code: `var oldWay = "I am var";
var oldWay = "I can be redeclared"; // No error, but bad practice
console.log(oldWay);`
      }
    ],
    interactiveTask: "Declare a variable 'city' using let, assign it 'Paris', then change it to 'London' and log it.",
    expectedOutput: "London"
  },
  {
    id: 'datatypes',
    title: '🏷️ Data Types',
    description: "Data types tell JavaScript what kind of value a variable holds.\n\nCommon data types are:\n- String: text values\n- Number: numbers\n- Boolean: true or false\n- Null: empty value on purpose\n- Undefined: value not assigned yet\n\nJavaScript automatically understands the data type.",
    examples: [
      {
        title: "String",
        description: "A sequence of characters used for text.",
        code: `let name = "Alice";
let greeting = 'Hello';
console.log(name);`
      },
      {
        title: "Number",
        description: "Represents both integer and floating-point numbers.",
        code: `let price = 99.99;
let quantity = 5;
console.log(price * quantity);`
      },
      {
        title: "Boolean",
        description: "Represents a logical entity and can have two values: true and false.",
        code: `let isOnline = true;
let hasAccess = false;
console.log(isOnline);`
      },
      {
        title: "Null & Undefined",
        description: "Null is an empty value. Undefined is a variable declared but not assigned.",
        code: `let empty = null;
let unknown;
console.log(empty); // null
console.log(unknown); // undefined`
      }
    ],
    interactiveTask: "Create a string variable 'fruit' with value 'Apple' and log it.",
    expectedOutput: "Apple"
  },
  {
    id: 'operators',
    title: '➕ Operators',
    description: "Operators are symbols used to perform actions on values. They help JavaScript calculate, compare, and make decisions.\n\nExamples include:\n- Math operations like add and subtract\n- Comparison checks like greater or equal\n- Logical checks like AND and OR",
    examples: [
      {
        title: "Arithmetic Operators",
        description: "Perform math: +, -, *, /, % (remainder).",
        code: `let x = 10;
let y = 3;
console.log(x + y); // 13
console.log(x % y); // 1 (remainder)`
      },
      {
        title: "Comparison Operators",
        description: "Compare values: ==, ===, >, <, >=, <=.",
        code: `let val = 5;
console.log(val > 3);  // true
console.log(val === 5); // true (strict equality)`
      },
      {
        title: "Logical Operators",
        description: "Combine logic: && (AND), || (OR), ! (NOT).",
        code: `let age = 20;
let hasID = true;
console.log(age >= 18 && hasID); // true`
      }
    ],
    interactiveTask: "Compute 10 * 5 and log the result.",
    expectedOutput: "50"
  },
  {
    id: 'conditions',
    title: '🔀 Conditional Statements',
    description: "Conditional statements help JavaScript decide what to do. If a condition is true, one block of code runs. If it is false, another block runs.\n\nThis helps the program take decisions based on situations.",
    examples: [
      {
        title: "If / Else",
        description: "Execute a block of code if a specified condition is true.",
        code: `let hour = 10;
if (hour < 12) {
  console.log("Good morning");
} else {
  console.log("Good day");
}`
      },
      {
        title: "Else If",
        description: "Specify a new condition if the first condition is false.",
        code: `let size = 15;
if (size < 10) {
  console.log("Small");
} else if (size < 20) {
  console.log("Medium");
} else {
  console.log("Large");
}`
      }
    ],
    interactiveTask: "Write an if statement: if 5 > 2 log 'True'.",
    expectedOutput: "True"
  },
  {
    id: 'loops',
    title: '🔄 Loops',
    description: "Loops are used to repeat the same code multiple times. They save time and reduce writing the same code again and again.\n\nLoops are very useful when working with lists and repeated tasks.",
    examples: [
      {
        title: "For Loop",
        description: "Loops through a block of code a number of times.",
        code: `for (let i = 0; i < 3; i++) {
  console.log("Count: " + i);
}`
      },
      {
        title: "While Loop",
        description: "Loops through a block of code as long as a specified condition is true.",
        code: `let i = 0;
while (i < 3) {
  console.log("While: " + i);
  i++;
}`
      }
    ],
    interactiveTask: "Use a for loop to log 'A' 3 times.",
    expectedOutput: "A\nA\nA"
  },
  {
    id: 'arrays',
    title: '📚 Arrays',
    description: "Arrays store multiple values in a single variable. Each value has a position number called index, starting from 0.\n\nArrays are useful for storing lists like names, colors, or numbers.",
    examples: [
      {
        title: "Creating & Accessing",
        description: "Access array items by referring to the index number.",
        code: `const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0]); // Saab`
      },
      {
        title: "Array Methods",
        description: "Common methods: push(), pop(), length.",
        code: `const fruits = ["Banana", "Orange"];
fruits.push("Apple");
console.log(fruits.length); // 3
console.log(fruits);`
      }
    ],
    interactiveTask: "Create an array with number 1, log the first element.",
    expectedOutput: "1"
  },
  {
    id: 'objects',
    title: '🗂️ Objects',
    description: "Objects store related information together using key and value pairs. They help organize data in a meaningful way.\n\nFor example, details of a car or a person can be stored in an object.",
    examples: [
      {
        title: "Object Literal",
        description: "Define an object with properties.",
        code: `const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};
console.log(person.firstName);`
      },
      {
        title: "Updating Properties",
        description: "You can change property values or add new ones.",
        code: `const laptop = { brand: "Dell" };
laptop.model = "XPS";
console.log(laptop.model);`
      }
    ],
    interactiveTask: "Create object {a: 1}, log property a.",
    expectedOutput: "1"
  },
  {
    id: 'functions',
    title: '🔧 Functions',
    description: "Functions are blocks of code that perform a specific task. You can reuse them many times.\n\nFunctions can take input and return output, which makes code clean and organized.",
    examples: [
      {
        title: "Function Declaration",
        description: "Standard way to define a function.",
        code: `function greet(name) {
  return "Hello " + name;
}
console.log(greet("Alice"));`
      },
      {
        title: "Function Expression",
        description: "Storing a function in a variable.",
        code: `const square = function(number) {
  return number * number;
};
console.log(square(4)); // 16`
      }
    ],
    interactiveTask: "Write a function that returns 'ok', call it and log result.",
    expectedOutput: "ok"
  },
  {
    id: 'es6',
    title: '🚀 ES6+ Features',
    description: "ES6 is a modern version of JavaScript that makes coding easier and shorter. It introduced better ways to write functions, strings, and extract values.\n\nModern JavaScript is easier to read and maintain.",
    examples: [
      {
        title: "Arrow Functions",
        description: "A shorter syntax for writing function expressions.",
        code: `const add = (x, y) => x + y;
console.log(add(5, 3));`
      },
      {
        title: "Template Literals",
        description: "Easy way to interpolate variables using backticks.",
        code: `let item = "Coffee";
let price = 5;
console.log(\`One \${item} costs $\${price}\`);`
      },
      {
        title: "Destructuring",
        description: "Unpack values from arrays or properties from objects.",
        code: `const point = { x: 10, y: 20 };
const { x, y } = point;
console.log(x); // 10`
      }
    ],
    interactiveTask: "Use an arrow function to return 5 and log it.",
    expectedOutput: "5"
  },
  {
    id: 'callbacks',
    title: '📞 Callbacks',
    description: "A callback is a function passed to another function and executed later. It helps control the order of operations.\n\nCallbacks are commonly used when tasks take time to finish.",
    examples: [
      {
        title: "Simple Callback",
        description: "Passing a function to be called later.",
        code: `function display(some) {
  console.log(some);
}
function calculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}
calculator(5, 5, display);`
      }
    ],
    interactiveTask: "Re-run the callback example.",
    expectedOutput: "10"
  },
  {
    id: 'promises',
    title: '🤝 Promises',
    description: "Promises handle tasks that finish in the future. They tell whether a task is completed successfully or failed.\n\nPromises help manage time-based operations like data loading.",
    examples: [
      {
        title: "Creating a Promise",
        description: "Using the Promise constructor.",
        code: `let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;
  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) { console.log(value); }
);`
      }
    ],
    interactiveTask: "Re-run the promise example.",
    expectedOutput: "OK"
  },
  {
    id: 'async',
    title: '⏳ Async / Await',
    description: "Async and await make asynchronous code easier to understand. They allow the program to wait for a task to complete before moving forward.\n\nThis makes code look simple and clean.",
    examples: [
      {
        title: "Async Function",
        description: "Keyword 'async' before a function makes the function return a promise.",
        code: `async function myFunction() {
  return "Hello";
}
myFunction().then(console.log);`
      },
      {
        title: "Await",
        description: "Keyword 'await' makes the function pause the execution and wait for a resolved promise.",
        code: `async function test() {
   let promise = new Promise((resolve) => {
      resolve("Done!");
   });
   let result = await promise;
   console.log(result);
}
test();`
      }
    ],
    interactiveTask: "Re-run the async example.",
    expectedOutput: "Hello\nDone!"
  },
  {
    id: 'fetch',
    title: '🌐 Fetch API',
    description: "The Fetch API is used to get data from servers or the internet. It is commonly used to connect frontend and backend.\n\nFetch helps load data dynamically in modern web apps.",
    examples: [
      {
        title: "Basic Fetch",
        description: "Fetching data from a URL.",
        code: `// Simulation
console.log("Fetching...");
setTimeout(() => console.log("Data received"), 100);`
      }
    ],
    interactiveTask: "Log 'Fetching...' then 'Data received'.",
    expectedOutput: "Fetching...\nData received"
  }
];
