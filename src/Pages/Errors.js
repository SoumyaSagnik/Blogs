import Code from "../components/Code";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Errors = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="content page">
        <Helmet>
          <title>Error types in Javascript</title>
          <meta name="description" content="Types of errors in javascript" />
          <meta
            name="keywords"
            content="syntax error, type error, reference error"
          />
        </Helmet>
        <h1>Types of Errors in JavaScript</h1>
        <h3>Syntax Error</h3>
        <p className="space-bottom">
          This is the most common error in JavaScript. It is caused by the
          incorrect use of a pre-defined syntax.{" "}
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">const </span>a;
            </p>
            <p>
              a <span className="grn">= </span>10;
            </p>
            <p className="space-top red">
              Uncaught SyntaxError: Missing initializer in const declaration
            </p>
          </div>
        </pre>
        <h3>Type Error</h3>
        <p className="space-bottom">
          A TypeError may be thrown whenever you try to achieve something with a
          type that doesn't support it.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">const </span>a{" "}
              <span className="grn">= </span>10;
            </p>
            <p>
              a <span className="grn">= </span>20;
            </p>
            <p className="space-top red">
              Uncaught TypeError: Assignment to constant variable.
            </p>
          </div>
        </pre>
        <h3>Reference Error</h3>
        <p className="space-bottom">
          The ReferenceError object represents an error when a variable that
          doesn't exist (or hasn't yet been initialized) in the current scope is
          referenced.
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
              <span className="yellow">let</span> a{" "}
              <span className="grn">= </span>10;
            </p>
            <p className="space-top red">
              Uncaught ReferenceError: Cannot access 'a' before initialization
            </p>
          </div>
        </pre>
      </div>
    </motion.div>
  );
};

export default Errors;
