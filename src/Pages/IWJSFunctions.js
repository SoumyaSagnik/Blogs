import Code from "../components/Code";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const IWJSFunctions = () => {
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
          <title>Internal Working of JS Functions</title>
          <meta
            name="description"
            content="Internal working of javascript functions"
          />
          <meta
            name="keywords"
            content="internal working javascript, execution context"
          />
        </Helmet>
        <h1>Internal Working of JS Functions</h1>
        <p>
          Functions are a crucial part of JavaScript. In this article, you'll
          learn how they work internally.
        </p>
        <p>
          Everything in JavaScript happens inside an{" "}
          <a
            href="https://blogs-ssk.netlify.app/js-hoisting"
            target="_blank"
            rel="noreferrer"
          >
            Execution Context
          </a>
          . As we run a JavaScript program, a{" "}
          <span className="green">Global Execution Context (GEC)</span> is
          created and it is put into a call stack. Further, as JS sees a{" "}
          <span className="green">function call</span>, a separate execution
          context is created where the very function is
          <span className="green"> executed</span>. This function specific
          execution context is also put into the same call stack.
        </p>
        <p>
          If you're wondering what a <span className="green">call stack</span>{" "}
          is, it is a <span className="green">mechanism</span> that JS maintains
          for <span className="green">managing</span> the{" "}
          <span className="green">creation</span> and{" "}
          <span className="green">deletion</span> of{" "}
          <span className="green">execution contexts</span>.
        </p>
        <p className="space-bottom">
          Now, lets understand how functions are run behind the scene with an
          example.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">var</span> n{" "}
              <span className="grn">=</span> 10;
            </p>
            <p>
              f1<span className="pink">()</span>;
            </p>
            <p>
              f2<span className="pink">()</span>;
            </p>
            <p>
              console.<span className="yellow">log</span>
              <span className="pink">(</span>n<span className="pink">)</span>;
            </p>
            <p className="space-top">
              <span className="yellow">function</span> f1
              <span className="pink">()</span> {leftCurly}
            </p>
            <p className="space-list">
              <span className="yellow">var</span> n{" "}
              <span className="grn">=</span> 20;
            </p>
            <p className="space-list">
              console.<span className="yellow">log</span>
              <span className="pink">(</span>n<span className="pink">)</span>;
            </p>
            <p>{rightCurly}</p>
            <p className="space-top">
              <span className="yellow">function</span> f2
              <span className="pink">()</span> {leftCurly}
            </p>
            <p className="space-list">
              <span className="yellow">var</span> n{" "}
              <span className="grn">=</span> 30;
            </p>
            <p className="space-list">
              console.<span className="yellow">log</span>
              <span className="pink">(</span>n<span className="pink">)</span>;
            </p>
            <p>{rightCurly}</p>
            <p className="space-top">Output</p>
            <p className="white">20</p>
            <p className="white">30</p>
            <p className="white">10</p>
          </div>
        </pre>
        <p>
          As soon as the program is run, <span className="green">GEC</span> is
          created, put into the call stack and it stores{" "}
          <span className="green">undefined</span> for{" "}
          <span className="green">n</span>, function{" "}
          <span className="green">code</span> for{" "}
          <span className="green">f1</span> and{" "}
          <span className="green">f2</span> during the{" "}
          <span className="green">memory creation</span> phase.
        </p>
        <p className="space-top">
          Now lets move the <span className="green">code execution</span> phase
          of the <span className="green">GEC</span>.
        </p>
        <p>
          <span className="green">n</span> is assigned the value{" "}
          <span className="green">10</span>
        </p>
        <p>
          Next <span className="green">f1</span> is called which creates a new
          execution context. This execution context is put into the call stack.
        </p>
        <p>
          During the memory creation phase of f1's execution context, n is
          assigned the value undefined.
        </p>
        <p>
          During the code execution phase of f1's exeution context, n is
          assigned the value <span className="green">20</span>.
        </p>
        <p>Next, this value of n is printed in the console.</p>
        <p>
          Post <span className="green">execution</span> of funtion f1, the
          execution context of f1 is <span className="green">deleted </span>
          and <span className="green">removed</span> from the call stack.
        </p>
        <p className="space-top">
          Then we move back to the <span className="green">third</span> line of
          our code. f2 gets invoked and it's execution context is created and
          put into the call stack.
        </p>
        <p>
          During the memory creation phase of f2's execution context, n is
          assigned the value undefined.
        </p>
        <p>
          During the code execution phase of f2's execution context, n is
          assigned the value of <span className="green">30</span>. This value is
          then printed onto the console.
        </p>
        <p>
          Next, f2's execution context is deleted and removed from the call
          stack.
        </p>
        <p className="space-top">
          Then we move to the <span className="green">fourth</span> line of our
          code. If you remeber correctly, n was assigned the value of{" "}
          <span className="green">10</span> while executing the{" "}
          <span className="green">first</span> line of our code. This value is
          then printed onto the console.
        </p>
        <p className="space-top">
          Finally, theres nothing left to execute! The{" "}
          <span className="green">GEC</span> is deleted and removed from the
          call stack.
        </p>
      </div>
    </motion.div>
  );
};

export default IWJSFunctions;
