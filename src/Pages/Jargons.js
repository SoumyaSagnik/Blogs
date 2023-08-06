import Code from "../components/Code";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Jargons = () => {
  const leftCurly = "{";
  const rightCurly = "}";
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="content page">
        <Helmet>
          <title>Jargons in JS</title>
          <meta
            name="description"
            content="Commonly used jargons in javascript."
          />
          <meta
            name="keywords"
            content="function expression, function declaration, iife, first class citizen"
          />
        </Helmet>
        <h1>Commonly used Jargons in JavaScript</h1>
        <h3>Function Statement / Function Declaration</h3>
        <p className="space-bottom">
          A function statement in JavaScript is a way to define a new function
          <span className="green"> without assigning</span> it to a variable.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">function</span> a
              <span className="pink">()</span> {leftCurly}
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>"function called"
              <span className="pink">)</span>;
            </p>
            <p>{rightCurly}</p>
          </div>
        </pre>
        <p className="space-bottom">
          They <span className="green">can</span> be hoisted without any errors.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              a<span className="pink">()</span>;
            </p>
            <p>
              <span className="yellow">function</span> a
              <span className="pink">()</span> {leftCurly}
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>"function called"
              <span className="pink">)</span>;
            </p>
            <p>{rightCurly}</p>
            <p className="space-top">Output</p>
            <p className="white">function called</p>
          </div>
        </pre>
        <h3>Function Expression</h3>
        <p className="space-bottom">
          A function expression in JavaScript is a way to define a function by
          <span className="green"> assigning</span> it to a variable.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">var </span>b{" "}
              <span className="grn">= </span>
              <span className="yellow">function</span>
              <span className="pink">()</span> {leftCurly}
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>"function called"
              <span className="pink">)</span>;
            </p>
            <p>{rightCurly}</p>
            <p>
              b<span className="pink">()</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">function called</p>
          </div>
        </pre>
        <p className="space-bottom">
          They <span className="green">cannot</span> be hoisted. Read more{" "}
          <a
            href="https://blogs-ssk.netlify.app/js-hoisting"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              b<span className="pink">()</span>;
            </p>
            <p>
              <span className="yellow">var </span>b{" "}
              <span className="grn">= </span>
              <span className="yellow">function</span> a
              <span className="pink">()</span> {leftCurly}
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>"function called"
              <span className="pink">)</span>;
            </p>
            <p>{rightCurly}</p>
            <p className="space-top red">
              Uncaught TypeError: b is not a function
            </p>
          </div>
        </pre>
        <p>
          b is undefined when it's called and you cannot call something that's
          undefined.
        </p>
        <h3>Anonymous Function</h3>
        <p className="space-bottom">
          An anonymous function in JavaScript is a function without a name. They
          are often used as callbacks, event handlers, or to create closures.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">var</span> a{" "}
              <span className="grn">= </span>
              <span className="yellow">function</span>
              <span className="pink">()</span> {leftCurly}
            </p>
            <p className="space-list em">function body</p>
            <p>{rightCurly}</p>
          </div>
        </pre>
        <p className="white space-bottom">
          Anonymous functions don't have their own identity. That's why you
          can't do something like
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">function</span>
              <span className="pink">()</span> {leftCurly}
            </p>
            <p className="space-list em">function body</p>
            <p>{rightCurly}</p>
            <p className="space-top red">
              Uncaught SyntaxError: Function statements require a function name
            </p>
          </div>
        </pre>
        <p>
          According to ECMAScript specification, a function statement should
          always have a name.
        </p>
        <p className="white space-bottom">
          Anonymous functions are used in places where functions are used as
          values.
        </p>
        <h3>Immediately Invoked Function Expression (IIFE)</h3>
        <p className="space-bottom">
          An IIFE is a function that runs as soon as it is defined. The function
          defined inside an IIFE can be an anonymous function or a named
          function. The advantage of using an IIFE is that it creates a new
          scope and it allows the variables defined inside the IIFE to be
          private and not accessible outside the scope. It is also useful in
          situations where you want to run a block of code only once.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              (<span className="yellow">function</span>
              <span className="pink">()</span> {leftCurly}
            </p>
            <p className="space-list em">function body</p>
            <p>
              {rightCurly})<span className="pink">()</span>;
            </p>
            <p className="space-all em white">OR</p>
            <p>
              (<span className="pink">()</span>
              <span className="grn">{" => "}</span>
              {leftCurly}
            </p>
            <p className="space-list em">function body</p>
            <p>
              {rightCurly})<span className="pink">()</span>;
            </p>
          </div>
        </pre>
        <p className="white space-bottom">
          This allows you to run anonymous functions without assigning them to
          another variable.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p className="space-bottom red">#IIFE using a named function</p>
            <p>
              (<span className="yellow">function</span> myFunction
              <span className="pink">()</span> {leftCurly}
            </p>
            <p className="space-list em">function body</p>
            <p>
              {rightCurly})<span className="pink">()</span>;
            </p>
          </div>
        </pre>
        <h3>Named Function Expression</h3>
        <p className="space-bottom">
          If we use a named function in a function expression, it is called a
          named function expression. Basically, were not using an anonymous
          function here in the function expression.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">var </span>b{" "}
              <span className="grn">= </span>
              <span className="yellow">function</span> a
              <span className="pink">()</span> {leftCurly}
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>"function called"
              <span className="pink">)</span>;
            </p>
            <p>{rightCurly}</p>
            <p>
              b<span className="pink">()</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">function called</p>
          </div>
        </pre>
        <p className="space-bottom">
          It is important to note that the function a is only accessible within
          the function's scope and it is not accessible outside of it.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">var </span>b{" "}
              <span className="grn">= </span>
              <span className="yellow">function</span> a
              <span className="pink">()</span> {leftCurly}
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>"function called"
              <span className="pink">)</span>;
            </p>
            <p>{rightCurly}</p>
            <p>
              a<span className="pink">()</span>;
            </p>
            <p className="space-top red">
              Uncaught ReferenceError: a is not defined
            </p>
          </div>
        </pre>
        <h3>Parameters & Arguments</h3>
        <p>
          Almost everyone knows about these two terms but we sometimes get
          confused and use them interchangeably. Let's end this once and for
          all.
        </p>
        <p className="white spacec-top">
          Parameters are the fields lsited in the function's definition.
        </p>
        <p className="white space-bottom">
          Arguments are the real values passed to the function.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">function</span> print
              <span className="pink">(</span>num
              <span className="pink">)</span> {leftCurly}
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>num
              <span className="pink">)</span>;
            </p>
            <p>{rightCurly}</p>
            <p>
              print
              <span className="pink">(</span>5<span className="pink">)</span>;
            </p>
            <p className="space-top em white">
              [5 is the argument, num is the parameter]
            </p>
          </div>
        </pre>
        <h3>First Class Functions</h3>
        <p className="space-bottom">
          The ability to use functions as values in JavaScript is called first
          class functions. Functions can be passed down as arguments, can be
          returned from other functions.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">function</span> printFunction
              <span className="pink">(</span>fun
              <span className="pink">)</span> {leftCurly}
            </p>
            <p className="space-list">
              <span className="pink">return</span> fun;
            </p>
            <p>{rightCurly}</p>
            <p className="space-top">
              <span className="yellow">var</span> a{" "}
              <span className="grn">= </span>
              printFunction
              <span className="pink">(</span>
              <span className="yellow">function</span>
              <span className="pink">()</span> {leftCurly}
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>"Function"
              <span className="pink">)</span>;
            </p>
            <p>
              {rightCurly}
              <span className="pink">)</span>;
            </p>
            <p>
              a<span className="pink">()</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">Function</p>
          </div>
        </pre>
        <p className="white">
          The term first class functions is synonymous with{" "}
          <span className="green">first class citizens</span>.
        </p>
      </div>
    </motion.div>
  );
};

export default Jargons;
