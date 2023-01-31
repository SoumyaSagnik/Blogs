import Code from "../components/Code";
import { motion } from "framer-motion";

const Closures = () => {
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
        <h1>Closures in JavaScript</h1>
        <p className="space-bottom">
          A <span className="green">function</span> along with its{" "}
          <a
            href="https://blogs-ssk.netlify.app/js-scope&le"
            target="_blank"
            rel="noreferrer"
          >
            lexical environment
          </a>{" "}
          is called <span className="green">closure</span>.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">function</span> x
              <span className="pink">(</span>
              <span className="pink">)</span> {leftCurly}
            </p>
            <p className="space-list">
              <span className="yellow">var</span> a{" "}
              <span className="grn">= </span>
              10;
            </p>
            <p className="space-list">
              <span className="yellow">function</span> y
              <span className="pink">(</span>
              <span className="pink">)</span> {leftCurly}
            </p>
            <p className="space-list2">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>a<span className="pink">)</span>;
            </p>
            <p className="space-list">{rightCurly}</p>
            <p className="space-list">
              y<span className="pink">()</span>;
            </p>
            <p>{rightCurly}</p>
            <p>
              x<span className="pink">()</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">10</p>
          </div>
        </pre>
        <p>
          The above code is an example of a closure. The function y doesn't have
          the variable a in its local memory. But it can access variable a as it
          is present in its lexical environment.
        </p>
        <p className="white">
          Lexical environment is the local memory plus the lexical environment
          of the parent.
        </p>
        <p>
          Local memory is the memory allocated to the variables and functions
          during the memory allocation phase of the{" "}
          <a
            href="https://blogs-ssk.netlify.app/js-hoisting"
            target="_blank"
            rel="noreferrer"
          >
            execution context
          </a>
          .
        </p>
        <p className="space-all">Let's look at another example.</p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">function</span> x
              <span className="pink">(</span>
              <span className="pink">)</span> {leftCurly}
            </p>
            <p className="space-list">
              <span className="yellow">var</span> a{" "}
              <span className="grn">= </span>
              10;
            </p>
            <p className="space-list">
              <span className="yellow">function</span> y
              <span className="pink">(</span>
              <span className="pink">)</span> {leftCurly}
            </p>
            <p className="space-list2">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>a<span className="pink">)</span>;
            </p>
            <p className="space-list">{rightCurly}</p>
            <p className="space-list">
              <span className="pink">return </span>y;
            </p>
            <p>{rightCurly}</p>
            <p>
              <span className="yellow">var</span> z{" "}
              <span className="grn">= </span>x<span className="pink">()</span>;
            </p>
            <p>
              z<span className="pink">(</span>
              <span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">10</p>
          </div>
        </pre>
        <p>
          JavaScript creates a new execution context whenever a function is
          invoked.{" "}
          <span className="white">
            But it also destroys the execution context after the function is
            executed.
          </span>
        </p>
        <p>
          In the above code, we're returning the function y to the variable z.
        </p>
        <p className="white">
          The variable z is not inside the function x. But the variable a is
          declared inside the function x.
        </p>
        <p className="white">
          Looking at the output, we can say that the variable z was somehow able
          to point to the variable a and print its value.
        </p>
        <p className="white">
          This is because whenever a function is returned, they retain their
          lexical environment. This is why we are able to access the variable a
          even after its execution context has been destroyed.
        </p>
        <p className="green">This is the underlying concept of closures.</p>
        <p className="space-all">Repeating once more:</p>
        <p className="white">
          Whenever a function is returned, it maintains its lexical environment.
          That is why we are able to access the variables declared in its
          lexical environment even after the execution context of the function
          returned has been destroyed.
        </p>
        <p className="space-top">
          So we can say that whenever a function is returned, the function plus
          its lexical environment is returned. Now check the first line of this
          article!
        </p>
        <p>
          Thus we can safely say that whenever a function is returned and
          assigned to another variable, the variable stores a{" "}
          <span className="green">closure</span>.
        </p>
        <p className="space-all">Let's look at another example.</p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">function</span> x
              <span className="pink">(</span>
              <span className="pink">)</span> {leftCurly}
            </p>
            <p className="space-list">
              <span className="yellow">var</span> a{" "}
              <span className="grn">= </span>
              10;
            </p>
            <p className="space-list">
              <span className="yellow">function</span> y
              <span className="pink">(</span>
              <span className="pink">)</span> {leftCurly}
            </p>
            <p className="space-list2">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>a<span className="pink">)</span>;
            </p>
            <p className="space-list">{rightCurly}</p>
            <p className="space-list">
              a <span className="grn">= </span>20;
            </p>
            <p className="space-list">
              <span className="pink">return </span>y;
            </p>
            <p>{rightCurly}</p>
            <p>
              <span className="yellow">var</span> z{" "}
              <span className="grn">= </span>x<span className="pink">()</span>;
            </p>
            <p>
              z<span className="pink">(</span>
              <span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">20</p>
          </div>
        </pre>
        <p>
          In this example, we're changing the value of a before returning the
          function y. But as mentioned above, a function retains its lexical
          environment when returned and the value does change in the lexical
          environment in this case.
        </p>
        <p>
          Another way of putting it would be that variable a's reference is
          retained and not the value that a has (just like a pointer in C/C++).
        </p>
        <p className="space-all">Let's dive deeper with another example.</p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">function</span> x
              <span className="pink">(</span>
              <span className="pink">)</span> {leftCurly}
            </p>
            <p className="space-list">
              <span className="yellow">var</span> a{" "}
              <span className="grn">= </span>10;
            </p>
            <p className="space-list">
              <span className="pink">return </span>
              <span className="yellow">function </span>y
              <span className="pink">()</span> {leftCurly}
            </p>
            <p className="space-list2">
              <span className="yellow">var</span> b{" "}
              <span className="grn">= </span>20;
            </p>
            <p className="space-list2">
              <span className="pink">return </span>
              <span className="yellow">function </span>z
              <span className="pink">()</span> {leftCurly}
            </p>
            <p className="space-list3">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>a, b<span className="pink">)</span>
              ;
            </p>
            <p className="space-list2">{rightCurly}</p>
            <p className="space-list">{rightCurly}</p>
            <p>{rightCurly}</p>
            <p>
              const p = x<span className="pink">()()</span>;
            </p>
            <p>
              p<span className="pink">()</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">10 20</p>
          </div>
        </pre>
        <p>
          In the above example, variable p receives the function z. Hence when
          we call p i.e., z we see that both the variables a and b were
          accessible to the returned colsure.
        </p>
      </div>
    </motion.div>
  );
};

export default Closures;
