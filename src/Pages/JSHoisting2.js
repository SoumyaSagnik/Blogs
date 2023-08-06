import Code from "../components/Code";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const JSHoisting2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="content page">
        <Helmet>
          <title>Hoisting with let & const</title>
          <meta
            name="description"
            content="How let and const are hoisted in javascript"
          />
          <meta
            name="keywords"
            content="hoisting, let and const, temporal dead zone, let vs var vs const"
          />
        </Helmet>
        <h1>Hoisting in JavaScript with let and const</h1>
        <p className="space-bottom">
          let & const declarations are <span className="green">hoisted</span>.
          But they're hoisted differently when compared to var declaration.
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
            <p className="space-top">Output</p>
            <p className="white">undefined</p>
          </div>
        </pre>
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
            <p className="space-top">Output</p>
            <p className="red">
              Uncaught ReferenceError: Cannot access 'a' before initialization
            </p>
          </div>
        </pre>
        <p className="space-top">
          Looking at the above example, one could say let & const are not
          hoisted. But that's not true.
        </p>
        <p>
          Whenever a JS program is run a global{" "}
          <a
            href="https://blogs-ssk.netlify.app/js-hoisting"
            target="_blank"
            rel="noreferrer"
          >
            execution context
          </a>{" "}
          is created. Along with the GEC, a{" "}
          <a
            href="https://blogs-ssk.netlify.app/js-windowAndthis"
            target="_blank"
            rel="noreferrer"
          >
            global object
          </a>{" "}
          <span className="green">(window in case of browser)</span> and a
          variable <span className="green">this</span> is also created. Further,
          a{" "}
          <a
            href="https://blogs-ssk.netlify.app/js-scope&le"
            target="_blank"
            rel="noreferrer"
          >
            lexical environment
          </a>{" "}
          is also created.
        </p>
        <p className="space-top">
          Let and const are also allocated memory during the memory creation
          phase of the execution context. They're allocated the same placeholder{" "}
          <span className="green">undefined</span>. But they're in a{" "}
          <span className="green">temporal dead zone</span> i.e., JavaScript
          recognizes that they've been declared but it won't let you use them
          until they're <span className="green">declared</span>. Hence the error
          in the above example.
        </p>
        <p className="space all white">
          <span className="green">Temporal dead zone: </span> It is the time
          between when the let & const variables are assigned undefined during
          the memory creation phase of the execution context and when they're
          initialized in the code during the code execution phase of the
          execution context.
        </p>
        <p>
          So if a let variable is not initialized during the entire code, it'll
          remain in the temporal dead zone throughout the code execution.
        </p>
        <p>
          Variables of <span className="green">var</span> type get{" "}
          <span className="green">attached</span> to the global object when
          declared in the global space.
        </p>
        <p className="space-bottom">
          But <span className="green">let</span> &{" "}
          <span className="green">const</span> are not attached to the global
          object. They're stored in a separate space.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#var</p>
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
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>this.a
              <span className="pink">)</span>;
            </p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              window.a<span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">10</p>
            <p className="white">10</p>
            <p className="white">10</p>
            <p className="em white space-top">
              [In the global space this points to window]
            </p>
          </div>
        </pre>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#let or const</p>
            <p>
              <span className="yellow">let</span> a{" "}
              <span className="grn">= </span>10;
            </p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>a<span className="pink">)</span>;
            </p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>this.a
              <span className="pink">)</span>;
            </p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              window.a<span className="pink">)</span>;
            </p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              window.xyz<span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">10</p>
            <p className="white">undefined</p>
            <p className="white">undefined</p>
            <p className="white">undefined</p>
          </div>
        </pre>
        <p className="space-bottom">
          Another point of difference between var and let is that we cannot
          <span className="green"> re-declare</span> a{" "}
          <span className="green">let</span> variable with the same{" "}
          <span className="green">name</span> in the same{" "}
          <span className="green">scope</span>.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#var</p>
            <p>
              <span className="yellow">var</span> a{" "}
              <span className="grn">= </span>10;
            </p>
            <p>
              <span className="yellow">var</span> a{" "}
              <span className="grn">= </span>20;
            </p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>a<span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">20</p>
          </div>
        </pre>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#let</p>
            <p>
              <span className="yellow">let</span> a{" "}
              <span className="grn">= </span>10;
            </p>
            <p>
              <span className="yellow">let</span> a{" "}
              <span className="grn">= </span>20;
            </p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>a<span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="red">
              Uncaught SyntaxError: Identifier 'a' has already been declared
            </p>
          </div>
        </pre>
        <p className="space-bottom">
          <span className="green">const</span> behaves exactly the same way as
          <span className="green"> let</span> in hoisitng. But it's stricter
          than let in the sense that you'll have to{" "}
          <span className="green">initilize</span> a const variable in the{" "}
          <span className="green">same line</span> where it is{" "}
          <span className="green">declared</span>.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#let</p>
            <p>
              <span className="yellow">let</span> a;
            </p>
            <p>
              a <span className="grn">= </span>10;
            </p>
            <p>
              console.
              <span className="pink">(</span>a<span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">10</p>
          </div>
        </pre>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#const</p>
            <p>
              <span className="yellow">const</span> a;
            </p>
            <p>
              a <span className="grn">= </span>10;
            </p>
            <p>
              console.
              <span className="pink">(</span>a<span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="red">
              Uncaught SyntaxError: Missing initializer in const declaration
            </p>
          </div>
        </pre>
        <p className="space-bottom">The right way:</p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">const</span> a{" "}
              <span className="grn">= </span>10;
            </p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>a<span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">10</p>
          </div>
        </pre>
        <p>
          Another difference between let & const would be that let can be
          re-initialized while const cannot be re-initialized. I'm sure you knew
          this before!
        </p>
        <h3>Minimizing the temporal dead zone</h3>
        <p>
          The best way to minimize the temporal dead zone would be to declare
          and initilize all the variables to be used in the code to the top of
          the program. This would shrink the tdz to pretty much non-existence.
        </p>
      </div>
    </motion.div>
  );
};

export default JSHoisting2;
