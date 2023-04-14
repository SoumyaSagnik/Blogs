import Code from "../components/Code";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const ScopeAndLE = () => {
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
        <Helmet>
          <title>Scope & Lexical Environment</title>
          <meta
            name="description"
            content="Explanation of scope and lexical environment in javascript"
          />
          <meta
            name="keywords"
            content="scope in javascript, lexical environment, scope chain, execution context"
          />
        </Helmet>
        <h1>Scope & Lexical Environment in JavaScript</h1>
        <p>
          <span className="green">Scope</span> in JavaScript is directly related
          to <span className="green">lexical environment</span>.
        </p>
        <p>
          Scope of a variable referes to where all the variable can be accessed.
        </p>
        <p>
          Whenever an{" "}
          <a
            href="https://blogs-ssk.netlify.app/js-hoisting"
            target="_blank"
            rel="noreferrer"
          >
            execution context
          </a>{" "}
          is created, a <span className="green">lexical environment</span> is
          also created.
        </p>
        <p>
          Lexical Environment is the{" "}
          <span className="green">local memory </span>
          and the <span className="green">lexical environment</span> of its{" "}
          <span className="green">parent</span>.{" "}
          <span className="green">Local memory</span> refers to the memory
          component of the execution context.
        </p>
        <p>Lexical basically means hierarchical.</p>
        <p className="space-top">
          If the above lines did not make any sense, don't worry. Let's simplify
          this.
        </p>
        <p>
          Let's say a variable(var) is declared in the global space. This
          variable can be accessed anywhere in the entire program. This means
          that a <span className="green">variable</span> declared in the{" "}
          <span className="green">parent</span> is{" "}
          <span className="green">accessible</span> to its{" "}
          <span className="green">child</span>.
        </p>
        <p className="space-bottom">
          Now we have another variable which is declared inside a function. This
          variable can be accessed only within the function. This variable
          cannot be accessed beyond the function's scope.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">function</span> a
              <span className="pink">()</span> {leftCurly}
            </p>
            <p className="space-list">
              <span className="yellow">var</span> b{" "}
              <span className="grn">= </span>10;
            </p>
            <p className="space-list">
              c<span className="pink">()</span>;
            </p>
            <p className="space-list">
              <span className="yellow">function</span> c
              <span className="pink">()</span> {leftCurly}
            </p>
            <p className="space-list2">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>b<span className="pink">)</span>;
            </p>
            <p className="space-list">{rightCurly}</p>
            <p>{rightCurly}</p>
            <p>
              a<span className="pink">()</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">10</p>
          </div>
        </pre>
        <p className="white space-bottom">
          Explanation: Scope is directly related to lexical environment and
          lexical environment is the local memory plus the lexical environment
          of its parent.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">function</span> a
              <span className="pink">()</span> {leftCurly}
            </p>
            <p className="space-list">
              <span className="yellow">var</span> b{" "}
              <span className="grn">= </span>10;
            </p>
            <p>{rightCurly}</p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>b<span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="red">
              Uncaught ReferenceError: b is not defined at {"<anonymous>"}
            </p>
            <p className="space-top em white">
              [anonymous is the global execution context]
            </p>
          </div>
        </pre>
        <p className="space-bottom">
          JavaScript will first search for a variable in the local memory. If
          not found it searches for the variable in the variables' parent's
          local memory, and so on.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">function</span> a
              <span className="pink">()</span> {leftCurly}
            </p>
            <p className="space-list">
              <span className="yellow">var</span> b{" "}
              <span className="grn">=</span> 10;
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>b<span className="pink">)</span>;
            </p>
            <p>{rightCurly}</p>
            <p>
              <span className="yellow">var</span> b{" "}
              <span className="grn">=</span> 20;
            </p>
            <p>
              a<span className="pink">()</span>;
            </p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>b<span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">10</p>
            <p className="white">20</p>
          </div>
        </pre>
        <p className="space-all">
          Explanation: When JS encounters log of b inside function a, it first
          searches for b in local memory which it finds to be 10.
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
              <span className="pink">(</span>b<span className="pink">)</span>;
            </p>
            <p>{rightCurly}</p>
            <p>
              <span className="yellow">var</span> b{" "}
              <span className="grn">=</span> 20;
            </p>
            <p>
              a<span className="pink">()</span>;
            </p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>b<span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">20</p>
            <p className="white">20</p>
          </div>
        </pre>
        <p className="space-top">
          Here, JS couldn't find variable b inside function a, so it searches
          for b in a's parent which is the global space here.
        </p>
        <p>
          This chain formed as a result of searching a variable in lexical
          environment is called <span className="green">scope chain</span>.
        </p>
      </div>
    </motion.div>
  );
};

export default ScopeAndLE;
