import Code from "../components/Code";
import { motion } from "framer-motion";

const JSHoisting = () => {
  const leftCurly = "{";
  const rightCurly = "}";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="content page">
        <h1>Hoisting in JavaScript</h1>
        <p className="white">
          Hoisting is the phenomenon in JavaScript by which we can access
          variables and functions without any error even before initializing
          them.
        </p>
        <h3>Execution Context</h3>
        <p>
          Everything in JavaScript happens inside an{" "}
          <span className="green">execution context</span>. Whenever a
          JavaScript program is run, a{" "}
          <span className="green">Global Execution Context</span> is created.
          Every execution context has two phases:
        </p>
        <ul>
          <li>
            <p className="space-top">
              <span className="blanchedalmond">Memory Creation Phase: </span>{" "}
              This is where all the <span className="green">variables</span> and{" "}
              <span className="green">functions</span> are stored as{" "}
              <span className="green">key-value</span> pairs.
            </p>
            <p>
              <span className="blanchedalmond">Code Execution Phase: </span>{" "}
              This is where code is <span className="green">executed</span> one
              line at a time.
            </p>
          </li>
        </ul>
        <p className="space-all">Let's understand this through an example.</p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">var</span> n{" "}
              <span className="grn">=</span> <span className="red">2</span>;
            </p>
            <p>
              <span className="yellow">function</span> printNum
              <span className="pink">(</span>num<span className="pink">)</span>{" "}
              {leftCurly}
            </p>
            <p>
              {"  "}
              console.<span className="yellow">log</span>
              <span className="pink">(</span>num<span className="pink">)</span>;
            </p>
            <p>{rightCurly}</p>
            <p>
              printNum<span className="pink">(</span>n
              <span className="pink">)</span>;
            </p>
            <p className="em white space-top">[Note: we're using var here.</p>
            <p className="em white">
              Variables defined with let and const are hoisted to the top of the
              block,
            </p>
            <p className="em white">
              but not initialized. Meaning the block of code is aware of the
              variable,
            </p>
            <p className="em white">
              but it cannot be used until it has been declared.
            </p>
            <p className="em white">
              Using let or const before declaration will result in Uncaught
              RefereceError.]
            </p>
          </div>
        </pre>
        <p className="space-top">
          During the <span className="green">memory creation</span> phase, JS
          skims through the entire code and allocates{" "}
          <span className="green">memory</span> to{" "}
          <span className="green">variables</span> and{" "}
          <span className="green">functions</span>, which are stored as{" "}
          <span className="green">keys</span>.
        </p>
        <p className="space-bottom">
          The corresponding <span className="green">value</span> for variables
          is <span className="green">undefined</span>, and for functions its the{" "}
          <span className="green">entire code of function</span>.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#Memory Creation phase</p>
            <p>n: undefined</p>
            <p>
              printNum: ƒ printNum(num){leftCurly}
              console.log(num);
              {rightCurly}
            </p>
          </div>
        </pre>
        <p className="space-bottom">
          During the <span className="green">code execution </span>phase, JS
          goes through the code once again and executes it line by line.
          Variables are assigned the said values. As for functions, whenever JS
          finds a <span className="green">function call</span>, a{" "}
          <span className="green">new execution context</span> is created. This
          new execution context goes through a similar memory creation and code
          execution phase. Once the function is executed, the execution context
          created for executing it is <span className="green">deleted</span>. JS
          maintains a <span className="green">call stack</span> for handling the
          <span className="green"> creation</span> and{" "}
          <span className="green">deletion</span> of exection contexts.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#Code Execution Phase</p>
            <p>n: 2</p>
            <p>printNum: new execution context created</p>
          </div>
        </pre>
        <Code />
        <pre>
          <div className="code-body">
            <p className="pink">Execution context for printNum</p>
            <p className="space-top red">#Memory Creation phase</p>
            <p>num: undefined</p>
            <p className="space-top red">#Code Execution phase</p>
            <p>num: 2</p>
          </div>
        </pre>
        <p>
          After the program is executed, the{" "}
          <span className="green">global execution context</span> is{" "}
          <span className="green">deleted</span>.
        </p>
        <h3>Hoisting</h3>
        <p className="space-bottom">
          Now that you know how JS runs behind the scene, let's understand
          hoisting.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">var</span> n{" "}
              <span className="grn">=</span> <span className="red">2</span>;
            </p>
            <p>
              <span className="yellow">function</span> hello
              <span className="pink">()</span> {leftCurly}
            </p>
            <p>
              {"  "}
              console.<span className="yellow">log</span>
              <span className="pink">(</span>"Hello World!"
              <span className="pink">)</span>;
            </p>
            <p>{rightCurly}</p>
            <p className="space-top">
              hello<span className="pink">()</span>;
            </p>
            <p>
              console.<span className="yellow">log</span>
              <span className="pink">(</span>n<span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">Hello World!</p>
            <p className="white">2</p>
          </div>
        </pre>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              hello<span className="pink">()</span>;
            </p>
            <p>
              console.<span className="yellow">log</span>
              <span className="pink">(</span>n<span className="pink">)</span>;
            </p>
            <p className="space-top">
              <span className="yellow">var</span> n{" "}
              <span className="grn">=</span> <span className="red">2</span>;
            </p>
            <p>
              <span className="yellow">function</span> hello
              <span className="pink">()</span> {leftCurly}
            </p>
            <p>
              {"  "}
              console.<span className="yellow">log</span>
              <span className="pink">(</span>"Hello World!"
              <span className="pink">)</span>;
            </p>
            <p>{rightCurly}</p>
            <p className="space-top">Output</p>
            <p className="white">Hello World!</p>
            <p className="white">undefined</p>
            <p className="space-top pink">Explanation</p>
            <p className="em white">
              Function doesn't get affected as a new execution context is
              created for it.
            </p>
            <p className="em white">
              In the code execution phase of GEC, n is still undefined when it's
              printed.
            </p>
            <p className="em white">GEC{" ->"} Global Execution Context</p>
          </div>
        </pre>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              hello<span className="pink">()</span>;
            </p>
            <p>
              console.<span className="yellow">log</span>
              <span className="pink">(</span>n<span className="pink">)</span>;
            </p>
            <p className="space-top">
              <span className="yellow">function</span> hello
              <span className="pink">()</span> {leftCurly}
            </p>
            <p>
              {"  "}
              console.<span className="yellow">log</span>
              <span className="pink">(</span>"Hello World!"
              <span className="pink">)</span>;
            </p>
            <p>{rightCurly}</p>
            <p className="space-top">Output</p>
            <p className="white">Hello World!</p>
            <p className="red">Uncaught ReferenceError: n is not defined</p>
          </div>
        </pre>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              console.<span className="yellow">log</span>
              <span className="pink">(</span>hello
              <span className="pink">)</span>;
            </p>
            <p>
              <span className="yellow">function</span> hello
              <span className="pink">()</span> {leftCurly}
            </p>
            <p>
              {"  "}
              console.<span className="yellow">log</span>
              <span className="pink">(</span>"Hello World!"
              <span className="pink">)</span>;
            </p>
            <p>{rightCurly}</p>
            <p>
              console.<span className="yellow">log</span>
              <span className="pink">(</span>hello
              <span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">
              ƒ hello() {leftCurly}
              console.log("Hello World!");
              {rightCurly}
            </p>
            <p className="white">
              ƒ hello() {leftCurly}
              console.log("Hello World!");
              {rightCurly}
            </p>
          </div>
        </pre>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              hello<span className="pink">()</span>;
            </p>
            <p>
              <span className="yellow">var </span>
              hello <span className="grn">= </span>
              <span className="pink">() </span>
              <span className="grn">{"=> "}</span>
              {leftCurly}
            </p>
            <p>
              {"  "}console.<span className="yellow">log</span>
              <span className="pink">(</span>
              "Hello World!"
              <span className="pink">)</span>;
            </p>
            <p>{rightCurly}</p>
            <p className="space-top">Output</p>
            <p className="red">Uncaught TypeError: hello is not a function</p>
            <p className="space-top pink">Explanation</p>
            <p className="em white">
              Whenever we assign a function in a variable, it behaves like a
              variable
            </p>
            <p className="em white">
              and we know that variables have undefined stored in them post
              memory
            </p>
            <p className="em white">creation phase.</p>
            <p className="em white">
              So when we try to call something undefined, JS throws this error.
            </p>
          </div>
        </pre>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              hello<span className="pink">()</span>;
            </p>
            <p>
              <span className="yellow">var</span> hello{" "}
              <span className="grn">= </span>
              <span className="yellow">function</span>
              <span className="pink">()</span> {leftCurly}
            </p>
            <p>
              {"  "}console.<span className="yellow">log</span>
              <span className="pink">(</span>
              "Hello World!"
              <span className="pink">)</span>;
            </p>
            <p>{rightCurly}</p>
            <p className="space-top">Output</p>
            <p className="red">Uncaught TypeError: hello is not a function</p>
          </div>
        </pre>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">var</span> hello{" "}
              <span className="grn">= </span>
              <span className="yellow">function</span>
              <span className="pink">()</span> {leftCurly}
            </p>
            <p>
              {"  "}console.<span className="yellow">log</span>
              <span className="pink">(</span>
              "Hello World!"
              <span className="pink">)</span>;
            </p>
            <p>{rightCurly}</p>
            <p>
              hello<span className="pink">()</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">Hello World!</p>
          </div>
        </pre>
        <h3>Summary</h3>
        <div className="space-list">
          <ol>
            <li>
              <p>
                Hoisting is the phenomenon in JavaScript by which we can access
                variables and functions without any error even before
                initializing them.
              </p>
            </li>
            <li>
              <p>
                As long as we <span className="green">don't</span> assign a
                function to another variable, calling it{" "}
                <span className="green">before</span> or{" "}
                <span className="green">after</span> it's definition yields the{" "}
                <span className="green">same</span> output.
              </p>
            </li>
            <li>
              <p>
                When we try to access a variable of{" "}
                <span className="green">var</span> type before it's declaration,
                we get <span className="green">undefined</span>.
              </p>
            </li>
            <li>
              <p>
                When we try to access a variable of{" "}
                <span className="green">let/ const</span> type before it's
                declaration, we get an <span className="red">error</span>
              </p>
              <p className="red">
                Uncaught ReferenceError: {"<variable-name>"} is not defined
              </p>
            </li>
            <li>
              <p>
                When we assign a function to a variable and try to call that
                function before its declaration, we get an{" "}
                <span className="red">error</span>{" "}
              </p>
              <p className="red">
                Uncaught TypeError: {"<variable-name>"} is not a function
              </p>
            </li>
          </ol>
        </div>
      </div>
    </motion.div>
  );
};

export default JSHoisting;
