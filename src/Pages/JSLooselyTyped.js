import Code from "../components/Code";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const JSLooselyTyped = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="content page">
        <Helmet>
          <title>Loosely Typed Language</title>
          <meta name="description" content="Why javascript is loosely typed" />
          <meta name="keywords" content="loosely typed, javascript" />
        </Helmet>
        <h1>JavaScript is a loosely typed language</h1>
        <p>
          A loosely typed language is one that doesn't attach it's variables to
          a particular datatype.
        </p>
        <p className="space-bottom">
          This gives us the freedom of assigning a variable with different
          datatypes.
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
              <span className="grn">= </span>10;
            </p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>a<span className="pink">)</span>;
            </p>
            <p>
              a <span className="grn">=</span> "Hello";
            </p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>a<span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">undefiend</p>
            <p className="white">10</p>
            <p className="white">Hello</p>
          </div>
        </pre>
        <p>
          The <span className="green">opposite</span> of a loosely typed
          language would be a <span className="green">strictly</span> typed
          language.
        </p>
        <p>Languages such as Java, C++ fall under this category.</p>
      </div>
    </motion.div>
  );
};

export default JSLooselyTyped;
