import Code from "../components/Code";
import { motion } from "framer-motion";

const Callback = () => {
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
        <h1>Callback Functions in JavaScript</h1>
        <p>
          Functions are{" "}
          <a
            href="https://blogs-ssk.netlify.app/js-jargons"
            target="_blank"
            rel="noreferrer"
          >
            first class citizens
          </a>{" "}
          in JavaScript.
        </p>
        <p>
          This means JS functions can be passed to another function as an
          argument.
        </p>
        <p className="white">
          The function that we pass into another function as argument is a{" "}
          <span className="green">callback</span> function.
        </p>
        <p className="white">
          Callback functions help us to perform{" "}
          <span className="green">asynchronous</span> tasks in JS which is a
          synchronous single threaded language.
        </p>
        <p className="space-bottom">Let's look an an example.</p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">setTimeout</span>
              <span className="pink">(</span>
              <span className="yellow">function</span>
              <span className="pink">()</span> {leftCurly}
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              "set timeout called"
              <span className="pink">)</span>;
            </p>
            <p>
              {rightCurly}, 3000<span className="pink">)</span>;
            </p>
            <p className="space-top">
              <span className="yellow">function</span> a
              <span className="pink">(</span>b<span className="pink">)</span>{" "}
              {leftCurly}
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>"a called"
              <span className="pink">)</span>;
            </p>
            <p className="space-list">
              b<span className="pink">()</span>;
            </p>
            <p>{rightCurly}</p>
            <p className="space-top">
              a<span className="pink">(</span>
              <span className="yellow">function </span>b
              <span className="pink">()</span> {leftCurly}
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              "b called"
              <span className="pink">)</span>;
            </p>
            <p>
              {rightCurly}
              <span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">a called</p>
            <p className="white">b called</p>
            <p>
              <span className="white">set timeout called</span> --after 3 secs
            </p>
          </div>
        </pre>
        <p className="white">Behind the scenes:</p>
        <p>
          Global{" "}
          <a
            href="https://blogs-ssk.netlify.app/js-hoisting"
            target="_blank"
            rel="noreferrer"
          >
            execution context
          </a>{" "}
          is created and it is inserted into the call stack.
        </p>
        <p>
          JavaScript encounters set timeout, acknowledges its presence and
          stores it for execution after 3000ms.
        </p>
        <p>
          function a is invoked, new execution context is created for function
          a, the ec is inserted to the call stack, and the callback function b
          is passed to it.
        </p>
        <p>function a is executed, thus invoking function b.</p>
        <p>
          function a is able to invoke function b since it has been passed to
          it.
        </p>
        <p>
          function b's execution context is created, its ec is also inserted to
          the call stack, followed by its execution.
        </p>
        <p>
          functions b's execution context is removed from the call stack fowwed
          by the removal of function a's execution context.
        </p>
        <p>
          JavaScript is very fast, till now 3 secs have not passed, so JS is
          idle as nothing else is left to execute.
        </p>
        <p>
          An <span className="green">important</span> point to be noted here is
          that now the Global Execution Context will be removed from the call
          stack.
        </p>
        <p>
          After 3 secs, the global execution context is created and inserted
          back to the call stack, followed by creation of the execution context
          of the callback function of setTimeout, which is also, you guessed it
          right, inserted to the call stack.
        </p>
        <p>
          At this point the call stack has two execution contexts: global and
          one for the setTimeout.
        </p>
        <p>
          The callback function is executed and its execution context is removed
          from the call stack.
        </p>
        <p>Finally, the GEC is removed from the call stack.</p>
        <h3>JavaScript has only one call stack</h3>
        <p>
          If a function takes a huge amount of time to execute, the function
          should be converted to a callback function. Otherwise JS wouldn't be
          able to execute anything else while the complicated function is being
          executed and this might affect your website's performance.
        </p>
        <p className="white">
          We should never block our main thread i.e., our call stack.
        </p>
        <p>
          We should always use asynchronous JS to execute things that might take
          more time.
        </p>
        <p className="space-top">
          Now imagine if functions were not first class citizens in JS.
        </p>
        <p>
          We wouldn't be able to pass functions as arguments to other functions.
        </p>
        <p>This means that callback functions would cease to exist.</p>
        <p>
          This would mean that there's no asynchronous JS and everything would
          be executed synchronously.
        </p>
        <p>JS wouldn't be the world's most popular language then.</p>
        <p className="space-top">
          Let's look at an important interview question now.
        </p>
        <p className="space-bottom">
          Write a JS code to detect how many times a button has been clicked on
          a webpage.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">function</span> closure
              <span className="pink">()</span> {leftCurly}
            </p>
            <p className="space-list">
              <span className="yellow">let </span>
              count
              <span className="grn"> = </span>
              0;
            </p>
            <p className="space-list">
              <span className="yellow">const</span> button
              <span className="grn"> = </span>
              <span className="yellow">document</span>.
              <span className="red">querySelector</span>
              <span className="pink">(</span>
              "button"
              <span className="pink">)</span>;
            </p>
            <p className="space-list">
              button.
              <span className="red">addEventListener</span>
              <span className="pink">(</span>
              "click", <span className="pink">()</span>
              <span className="grn">{" => "}</span>
              {leftCurly}
            </p>
            <p className="space-list2">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              <span className="grn">++</span>
              count
              <span className="pink">)</span>;
            </p>
            <p className="space-list">
              {rightCurly}
              <span className="pink">)</span>;
            </p>
            <p>{rightCurly}</p>
            <p>
              closure
              <span className="pink">()</span>;
            </p>
          </div>
        </pre>
        <p>
          Here I'm keeping the event listener inside a closure so that the
          variable count is not accessible to anything outside and hence its
          value cannot be changed by anything outside the function.
        </p>
        <p className="space-top">
          The callback function listening to click events on the button forms a{" "}
          <a
            href="https://blogs-ssk.netlify.app/js-closures"
            target="_blank"
            rel="noreferrer"
          >
            closure
          </a>{" "}
          with its outer scope. We use closures for{" "}
          <span className="green">data hiding</span>.
        </p>
        <p>
          The current value of variable count is maintained by JS in the closure
          and hence it's updating the value correctly.
        </p>
        <h3>Need of removing event listeners</h3>
        <p>Event listeners are heavy i.e., it takes memory.</p>
        <p>
          It forms a closure and JS keeps the variables/ functions declared in
          the closure in memory until you close the website on the browser as
          it's listening to event listners. It would have to stay alive,
          otherwise there's no point of having event listeners.
        </p>
        <p>
          Once we remove event listeners from an element, all the memory held in
          closure/ scope will be garbage collected.
        </p>
        <p className="space-bottom">
          Example of removing event listener. Note that in order to remove{" "}
          <span className="green">anonymous callbacks</span>, we need to store
          their <span className="green">reference</span>, like in a variable.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p className="pink">#Adding event listener</p>
            <p>
              <span className="yellow">const</span> element
              <span className="grn"> = </span>
              <span className="yellow">document</span>.
              <span className="red">querySelector</span>
              <span className="pink">(</span>
              "button"
              <span className="pink">)</span>;
            </p>
            <p>
              <span className="yellow">let </span>
              handleClick<span className="grn"> = </span>
              <span className="pink">()</span>
              <span className="grn">{" => "}</span> {leftCurly}
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              "clicked"
              <span className="pink">)</span>;
            </p>
            <p>{rightCurly}</p>
            <p>
              element.
              <span className="red">addEventListener</span>
              <span className="pink">(</span>
              "click", handleClick
              <span className="pink">)</span>
            </p>
            <p className="space-top pink">#Removing event listener</p>
            <p>
              element.
              <span className="red">removeEventListener</span>
              <span className="pink">(</span>
              "click", handleClick
              <span className="pink">)</span>;
            </p>
          </div>
        </pre>
        <p>
          Ending with a fun fact:{" "}
          <span className="green">callback functions </span>
          are on the mercy of the functions they're passed into. They cannot be
          called directly by the user. Hence the name.
        </p>
      </div>
    </motion.div>
  );
};

export default Callback;
