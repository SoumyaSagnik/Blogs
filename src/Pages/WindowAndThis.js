import Code from "../components/Code";
import { motion } from "framer-motion";

const WindowAndThis = () => {
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
        <h1>window and this keyword in JavaScript</h1>
        <p>
          The <span className="green">window</span> keyword in JavaScript is
          used to refer to the <span className="green">global object</span> in
          the <span className="green">browser</span>. It is used to access the{" "}
          <span className="green">properties</span> and{" "}
          <span className="green">methods</span> of the global object, such as
          alert(), setTimeout(), document, etc.
        </p>
        <p className="space-top">
          It basically has access to everything that's in the{" "}
          <span className="green">global scope</span>.
        </p>
        <p className="space-bottom">
          <span className="blanchedalmond">Global space: </span>
          Anything that's <span className="green">not inside</span> a{" "}
          <span className="green">function</span> is in the global scope.
        </p>
        <p>
          The <span className="green">this</span> keyword in JavaScript{" "}
          <span className="green">refers</span> to the{" "}
          <span className="green">object</span> that is{" "}
          <span className="green">currently executing</span> the code.
        </p>
        <p>
          Whenever a JavaScript program is run, a{" "}
          <span className="green">Global Execution Context</span>,{" "}
          <span className="green">global object(window for browser)</span> is
          created.
          <p>
            Whenever an execution context is created, a{" "}
            <span className="green">this</span> is created along with it.
          </p>
          <p>
            We know that an execution context is created at global level as well
            as whenever a function call is incurred. So everytime a{" "}
            <span className="green">this</span> will be created along with the
            execution context.
          </p>
        </p>
        <p className="space-bottom">
          In the <span className="green">global space</span>, this points to the
          window object.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#Global Level</p>
            <p>
              this<span className="grn"> === </span>window;
            </p>
            <p className="space-top">Output</p>
            <p className="white">true</p>
          </div>
        </pre>
        <p className="space-bottom">
          Whatever function or variable we create in the global space, they get
          attached to the global object (window for browser).
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">var</span> a{" "}
              <span className="grn">= </span>10;
            </p>
            <p>
              <span className="yellow">function</span> b
              <span className="pink">()</span> {leftCurly}
            </p>
            <p className="space-list">
              <span className="yellow">var</span> c{" "}
              <span className="grn">= </span>20;
            </p>
            <p>{rightCurly}</p>
            <p className="space-top">
              console.<span className="yellow">log</span>
              <span className="pink">(</span>window.a
              <span className="pink">)</span>;
            </p>
            <p>
              console.<span className="yellow">log</span>
              <span className="pink">(</span>a<span className="pink">)</span>;
            </p>
            <p>
              console.<span className="yellow">log</span>
              <span className="pink">(</span>this.a
              <span className="pink">)</span>;
            </p>
            <p>
              console.<span className="yellow">log</span>
              <span className="pink">(</span>c<span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">10</p>
            <p className="white">10</p>
            <p className="white">10</p>
            <p className="red">
              Uncaught ReferenceError: c is not defined at {"<anonymous>"}
            </p>
          </div>
        </pre>
        <p>Let us now understand the above code.</p>
        <p>
          In the global space, window object being the global object has access
          to everything declared in the global space. Hence the{" "}
          <span className="green">first</span> line of output.
        </p>
        <p>
          In the global space, if we can access the variables and functions
          directly without using the <span className="green">window</span>{" "}
          keyword. Hence the <span className="green">second</span> line of
          output.
        </p>
        <p>
          In the global space <span className="green">this</span> points to the{" "}
          <span className="green">window</span> object and hence the{" "}
          <span className="green">third</span> line of output.
        </p>
        <p>
          In the <span className="green">fourth</span> line of output, we see an
          error. This is because we're trying to access a variable directly
          which is not present in the global scope.
        </p>
        <p>
          Notice <span className="green">anonymous</span> in the error, it is
          nothing but the{" "}
          <span className="green">Global Execution Context</span>.
        </p>
      </div>
    </motion.div>
  );
};

export default WindowAndThis;
