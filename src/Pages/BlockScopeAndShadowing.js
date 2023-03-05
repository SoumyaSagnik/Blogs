import Code from "../components/Code";
import { motion } from "framer-motion";

const BlockScopeAndShadowing = () => {
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
        <h1>Block Scope & Shadowing in JavaScript</h1>
        <h3>Block</h3>
        <p className="space-bottom">
          Anything between two{" "}
          <span className="green">
            braces {leftCurly} {rightCurly}
          </span>{" "}
          is called a <span className="green">block</span>. It is also known as{" "}
          <span className="green">compound statement</span>. A block is used to{" "}
          <span className="green">combine</span> multiple JS statements into a
          single <span className="green">group</span>. This allows us to have
          multiple statements in a place where JS expects a single statement.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">if</span>
              <span className="pink">(</span>i {">"} 10
              <span className="pink">)</span> {leftCurly}
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>"true"
              <span className="pink">)</span>;
            </p>
            <p className="space-list">
              i<span className="red">--</span>;
            </p>
            <p>{rightCurly}</p>
          </div>
        </pre>
        <p>
          In JavaScript, if statement expects a single statement. So, if we want
          to execute multiple lines of code within the if statement, we'll have
          to <span className="green">combine</span> those statements into a{" "}
          <span className="green">single</span> group by placing them inside a{" "}
          <span className="green">block</span>.
        </p>
        <h3>Block Scope</h3>
        <p className="space-bottom">
          Block scope refers to the functions and variables that can be accessed
          within a given block.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>{leftCurly}</p>
            <p className="space-list">
              <span className="yellow">var</span> a{" "}
              <span className="grn">= </span>10;
            </p>
            <p className="space-list">
              <span className="yellow">const</span> b{" "}
              <span className="grn">= </span>20;
            </p>
            <p className="space-list">
              <span className="yellow">let</span> c{" "}
              <span className="grn">= </span>30;
            </p>
            <p className="space-list space-top">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>a<span className="pink">)</span>;
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>b<span className="pink">)</span>;
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>c<span className="pink">)</span>;
            </p>
            <p>{rightCurly}</p>
            <p className="space-top">
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
            <p className="white">20</p>
            <p className="white">30</p>
            <p className="white">10</p>
            <p className="red">Uncaught ReferenceError: b is not defined</p>
          </div>
        </pre>
        <p>
          From the above code, we can infer that{" "}
          <span className="green">let</span> &{" "}
          <span className="green">const</span> are{" "}
          <span className="green">block scoped</span>, while var is not block
          scoped.
        </p>
        <p>
          var is <span className="green">function</span> scoped, i.e., var can
          be accessed anywhere in the{" "}
          <a
            href="https://blogs-ssk.netlify.app/js-scope&le"
            target="_blank"
            rel="noreferrer"
          >
            lexical environment
          </a>{" "}
          of the variable. Hence we cannot access let and const outside the
          block they're declared in.
        </p>
        <p>
          <span className="green">let</span> and{" "}
          <span className="green">const</span> are{" "}
          <span className="green">not attached</span> to the{" "}
          <a
            href="https://blogs-ssk.netlify.app/js-windowAndthis"
            target="_blank"
            rel="noreferrer"
          >
            global object
          </a>
          . Instead they are stored in a separate memory. But{" "}
          <span className="green">var</span> gets{" "}
          <span className="green">attached</span> to the global object.
        </p>
        <h3>Shadowing</h3>
        <p className="space-bottom">
          When we have the <span className="green">same</span> variable{" "}
          <span className="green">name</span> in different places, the value of
          the variable <span className="green">closest</span> to the line of
          execution is chosen. This phenomenon is called shadowing.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">var</span> a{" "}
              <span className="grn">= </span>10;
            </p>
            <p>
              <span className="yellow">const</span> b{" "}
              <span className="grn">= </span>20;
            </p>
            <p>
              <span className="yellow">let</span> c{" "}
              <span className="grn">= </span>30;
            </p>
            <p>{leftCurly}</p>
            <p className="space-list">
              <span className="yellow">var</span> a{" "}
              <span className="grn">= </span>100;
            </p>
            <p className="space-list">
              <span className="yellow">const</span> b{" "}
              <span className="grn">= </span>200;
            </p>
            <p className="space-list">
              <span className="yellow">let</span> c{" "}
              <span className="grn">= </span>300;
            </p>
            <p className="space-list space-top">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>a<span className="pink">)</span>;
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>b<span className="pink">)</span>;
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>c<span className="pink">)</span>;
            </p>
            <p>{rightCurly}</p>
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
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>c<span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">100</p>
            <p className="white">200</p>
            <p className="white">300</p>
            <p className="white">100</p>
            <p className="white">20</p>
            <p className="white">30</p>
          </div>
        </pre>
        <p>
          The variables a, b and c inside the block are{" "}
          <span className="green">shadowing</span> their counter parts having
          the same name outside the block.
        </p>
        <p>
          But notice how in case of <span className="green">var</span>, the
          shadowing is <span className="green">permanent</span>.
        </p>
        <p className="white">
          This is because var is function scoped and gets attached to the global
          object. So a variable having the same name within a block and outside
          would point to the same location in the global object.
        </p>
        <p className="space-bottom">
          If we replace the block in the above code with a function, var behaves
          just like let and const.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">var</span> a{" "}
              <span className="grn">= </span>10;
            </p>
            <p>
              <span className="yellow">const</span> b{" "}
              <span className="grn">= </span>20;
            </p>
            <p>
              <span className="yellow">let</span> c{" "}
              <span className="grn">= </span>30;
            </p>
            <p className="space-top">
              <span className="yellow">function</span> x
              <span className="pink">()</span> {leftCurly}
            </p>
            <p className="space-list">
              <span className="yellow">var</span> a{" "}
              <span className="grn">= </span>100;
            </p>
            <p className="space-list">
              <span className="yellow">const</span> b{" "}
              <span className="grn">= </span>200;
            </p>
            <p className="space-list">
              <span className="yellow">let</span> c{" "}
              <span className="grn">= </span>300;
            </p>
            <p className="space-list space-top">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>a<span className="pink">)</span>;
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>b<span className="pink">)</span>;
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>c<span className="pink">)</span>;
            </p>
            <p>{rightCurly}</p>
            <p className="space-top">
              x<span className="pink">()</span>;
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
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>c<span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">100</p>
            <p className="white">200</p>
            <p className="white">300</p>
            <p className="white">10</p>
            <p className="white">20</p>
            <p className="white">30</p>
          </div>
        </pre>
        <p>
          We don't see this in case of let and const as they're block scoped.
          JavaScript maintains a separate instance of them inside every block
          where they're declared.{" "}
        </p>
        <h3>Illegal Shadowing</h3>
        <p className="space-bottom">
          The gist: while shadowing a variable,{" "}
          <span className="white">
            it should not cross the boundary of the scope
          </span>
          .
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#Illegal</p>
            <p>
              <span className="yellow">let</span> a{" "}
              <span className="grn">= </span>10;
            </p>
            <p>{leftCurly}</p>
            <p className="space-list">
              <span className="yellow">var</span> a{" "}
              <span className="grn">=</span> 100;
            </p>
            <p>{rightCurly}</p>
            <p className="space-top red">
              Uncaught SyntaxError: Identifier 'a' has already been declared
            </p>
          </div>
        </pre>
        <p className="space-bottom">
          This is illegal because var is not block scoped. So it put's JS in
          jeopardy whether to have 100 or 10 in the global space, and it can't
          just pick one. Also, in a particular scope, let cannot be re-declard.
          Hence the error.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#Legal</p>
            <p>
              <span className="yellow">var</span> a{" "}
              <span className="grn">= </span>10;
            </p>
            <p>{leftCurly}</p>
            <p className="space-list">
              <span className="yellow">let</span> a{" "}
              <span className="grn">=</span> 100;
            </p>
            <p>{rightCurly}</p>
          </div>
        </pre>
        <p className="space-bottom">
          This is legal because let is block scoped. So outside the block JS
          doesn't have any other value other than 10 to choose from.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#Legal</p>
            <p>
              <span className="yellow">let</span> a{" "}
              <span className="grn">= </span>10;
            </p>
            <p>
              <span className="yellow">function</span> x
              <span className="pink">(</span>
              <span className="pink">)</span> {leftCurly}
            </p>
            <p className="space-list">
              <span className="yellow">var</span> a{" "}
              <span className="grn">=</span> 100;
            </p>
            <p>{rightCurly}</p>
          </div>
        </pre>
        <p>
          This is legal because var is function scoped. So JS once again has
          only one choice in the global space.
        </p>
      </div>
    </motion.div>
  );
};

export default BlockScopeAndShadowing;
