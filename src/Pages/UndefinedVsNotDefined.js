import Code from "../components/Code";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const UndefinedVsNotDefined = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="content page">
        <Helmet>
          <title>undefiend vs not defined</title>
          <meta
            name="description"
            content="Undefined vs Not Defined in JavaScript"
          />
          <meta name="keywords" content="undefined, not defined, javascript" />
        </Helmet>
        <h1>Undefined vs Not Defined in JavaScript</h1>
        <p>
          In JavaScript, the keyword <span className="green">undefined</span> is
          used to indicate that a variable has been{" "}
          <span className="green">declared</span> but not yet{" "}
          <span className="green">assigned</span> a value. It is also used to
          indicate that a <span className="green">function</span> doesn't return{" "}
          <span className="green">any</span> value.
        </p>
        <p>
          You must have seen undefined in the console whenever you execute
          something that doesn't return a value. Now you know why{" "}
          <span className="white">:D</span>.
        </p>
        <p className="space-all">
          JavaScript assigns the value <span className="green">undefined</span>{" "}
          to <span className="green">variables</span> during the{" "}
          <span className="green">memory creation</span> phase of an{" "}
          <a
            href="https://blogs-ssk.netlify.app/js-hoisting"
            target="_blank"
            rel="noreferrer"
          >
            execution context
          </a>
          . Until JS hasn't reached the line where the variable is{" "}
          <span className="green">initialized</span> during the{" "}
          <span className="green">code execution</span> phase, the variable
          holds the value <span className="green">undefined</span>.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>a<span className="pink">)</span>;
            </p>
            <p>
              <span className="yellow">var</span> a{" "}
              <span className="grn">=</span> 10;
            </p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>a<span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p>
              <span className="white">undefined</span>
            </p>
            <p>
              <span className="white">10</span>
            </p>
          </div>
        </pre>
        <p className="space-all">
          Assigning a variable undefined is JavaScript's way of recognizing the
          presence of the variable in the code, but not giving the variable it's
          assigned value until JS has reached that line of code execution i.e.,
          if at all the variable is initialized at some point in the code. If we
          don't initialize the variable at all, it will have the value{" "}
          <span className="green">undefined</span> throughout the entire
          program.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">var</span> a;
            </p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>a<span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">undefiend</p>
          </div>
        </pre>
        <p className="bold white">undefiend doesn't imply empty or void.</p>
        <p>
          It is considered a bad practice to assign a variable undefined
          manually. JS won't throw any error while doing so but it completely
          takes away the purpose of the keyword.
        </p>
        <p className="space-top">
          <span className="green">Not defined</span> is when a variable hasn't
          been allocated <span className="green">memory</span> in the first
          place.
        </p>
        <p className="space-bottom">
          This can happen when you don't decalre a variable and try to access it
          somewhere in the code.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">var</span> a{" "}
              <span className="grn">= </span> 10;
            </p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>a<span className="pink">)</span>;
            </p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>b<span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">10</p>
            <p className="red">
              Uncaught ReferenceError: b is not defined at {"<anonymous>"}
            </p>
            <p className="em white space-top">
              [anonymous refers to the global execution context]
            </p>
          </div>
        </pre>
      </div>
    </motion.div>
  );
};

export default UndefinedVsNotDefined;
