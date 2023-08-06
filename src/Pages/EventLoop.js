import Code from "../components/Code";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const EventLoop = () => {
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
          <title>Event Loop</title>
          <meta
            name="description"
            content="Detailed explanation of event loop in javascript."
          />
          <meta
            name="keywords"
            content="web api, setTimeout, internal working, event listner, callback queue, microtask queue, fetch in javascript, starvation"
          />
        </Helmet>
        <h1>Event Loop in JavaScript</h1>
        <p className="white">
          JavaScript is a synchronous single threaded language.
        </p>
        <p>
          It has only one call stack and can perform only one task at a time.
          This call stack is present inside the JavaScript Engine and all the
          code of JS is executed inside this call stack.
        </p>
        <p>
          In order to understand further explanations, make sure you know these
          topics:{" "}
          <a
            href="https://blogs-ssk.netlify.app/js-hoisting"
            target="_blank"
            rel="noreferrer"
          >
            execution context
          </a>
          ,{" "}
          <a
            href="https://blogs-ssk.netlify.app/js-callback"
            target="_blank"
            rel="noreferrer"
          >
            callback functions
          </a>
        </p>
        <p>
          Whenever a JavaScript program is run, a global execution context is
          created and it is pushed into the call stack.
        </p>
        <p>
          Further, whenever JS encounter a function call, a new execution
          context is created inside which the function is executed.
        </p>
        <p>
          After a function has been executed completely, its execution context
          is deleted and removed from the call stack.
        </p>
        <p>
          When there's nothing in the call stack for JavaScript to execute, the
          global execution context is also deleted and removed from the call
          stack.
        </p>
        <p>
          So basically, whatever is provided to the call stack, it simply
          executes it. It <span className="green">doesn't</span> wait for
          anything.
        </p>
        <p className="space-top">
          So how do we execute a particular portion of a code after sometime
          when JS waits for none?
        </p>
        <p>
          Lets move back a little. All the code in JS is executed inside the
          call stack. The call stack is present inside the JS engine. Every
          browser has a JS engine.
        </p>
        <p className="white">
          Hierarchy: Browser {"->"} JS Engine {"->"} Call Stack
        </p>
        <h3>Web APIs</h3>
        <p>
          The browser also has a set of Web APIs that we can use in our JS
          program.
        </p>
        <p className="white">
          Example: setTimeout, DOM APIs, fetch(), localStorage, console,
          location, etc.
        </p>
        <p>
          Now comes a shocker, all the examples mentioned above are part of the
          browser and not JavaScript.
        </p>
        <p className="space-all">
          We can access the web apis of the browser in JavaScript with the help
          of the global object, which in case of browsers is{" "}
          <a
            href="https://blogs-ssk.netlify.app/js-windowAndthis"
            target="_blank"
            rel="noreferrer"
          >
            window
          </a>
          .
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="red">window</span>.console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              "Hello"
              <span className="pink">)</span>;
            </p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              "Hello twice"
              <span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">Hello</p>
            <p className="white">Hello twice</p>
          </div>
        </pre>
        <p>
          We can ommit <span className="white">`window`</span> before using
          these Web APIs as its present in the global scope.
        </p>
        <h3>Internal Working of setTimeout</h3>
        <p className="space-bottom">Let's look an example.</p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              "Start"
              <span className="pink">)</span>;
            </p>
            <p className="space-top">
              <span className="red">setTimeout</span>
              <span className="pink">(</span>
              <span className="yellow">function</span>
              <span className="pink">()</span> {leftCurly}
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              "set timeout"
              <span className="pink">)</span>;
            </p>
            <p>
              {rightCurly}, 1000<span className="pink">)</span>;
            </p>
            <p className="space-top">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              "End"
              <span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">Start</p>
            <p className="white">End</p>
            <p className="white">set timeout</p>
          </div>
        </pre>
        <p>Now let's understand how JavaScript executes this code.</p>
        <p>
          Global Execution Context is created and inserted into the call stack.
        </p>
        <p>JS uses the console web api and prints Start to the console.</p>
        <p>
          JS encounters setTimeout, which calls the setTimeout web api. The
          setTimeout web api registers a callback and attaches a timer of
          1000ms. This callback function is registered inside the web api's
          environment.
        </p>
        <p>
          <span className="white">Time tide and JavaScript waits for none</span>
          . JS moves to the next line and prints End to the console with the
          help of console web api.
        </p>
        <p>
          JS is very fast and 1s has not passed yet. The call stack is empty and
          hence the global execution context is deleted and removed from the
          call stack.
        </p>
        <p>
          When the timer expires, the callback function is pushed into the{" "}
          <span className="green">Callback Queue</span>.
        </p>
        <p>
          Now comes the elephant in the room. In order for JS to execute the
          callback function, the callback function has to be moved into the call
          stack. This is done by the <span className="green">event loop</span>.
        </p>
        <p className="space-top white">
          The event loop is responsible for monitoring the callstack, callback
          queue, and the microtask queue.
        </p>
        <p>
          It is the responsibility of the event loop to check whether the call
          stack is empty and push the functions present in callback queue and
          microtask queue to the call stack once it's empty.
        </p>
        <p className="space-top">
          Coming back to the explanation, the callback function is pushed into
          the callback queue as soon as it's timer is finished.
        </p>
        <p>
          Meanwhile, the event loop is constantly checking the call stack,
          callback and microtask queue.
        </p>
        <p>It finds the callback function inside the callback queue.</p>
        <p>
          Then it checks whether the call stack is empty or not, which in our
          case is empty.
        </p>
        <p>
          The global execution context is recreated and put back into the call
          stack. Then the execution context of the callback function is created.
        </p>
        <p>
          The event loop takes the callback function's execution context and
          puts it into the call stack.
        </p>
        <p>
          JavaScript executes the callback function and set timeout is printed
          to the console, using the console web api.
        </p>
        <p>
          After all of this, the execution context of the callback function is
          deleted and removed from the call stack.
        </p>
        <p>
          The global execution context is also deleted and removed from the call
          stack.
        </p>
        <h3>Internal Working of eventListener</h3>
        <p className="space-bottom">Let's have a look at a similar example.</p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">const </span>
              button <span className="grn">= </span>
              document.
              <span className="red">querySelector</span>
              <span className="pink">(</span>
              'button'
              <span className="pink">)</span>;
            </p>
            <p>
              button.
              <span className="red">addEventListener</span>
              <span className="pink">(</span>
              'click', <span className="pink">()</span>{" "}
              <span className="grn">{"=> "}</span>
              {leftCurly}
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              "clicked"
              <span className="pink">)</span>;
            </p>
            <p>
              {rightCurly}
              <span className="pink">)</span>;
            </p>
          </div>
        </pre>
        <p>
          The above code will print `clicked` to the console every time the user
          clicks a button on the webpage.
        </p>
        <p className="space-top">
          The global execution context is created and pushed into the call
          stack.
        </p>
        <p>
          <span className="white">document.</span> is a part of the collection
          of DOM APIs present in the browser.
        </p>
        <p>
          JS calls this api which fetches the button from the dom and this is
          stored in the variable `button`.
        </p>
        <p>
          addEventListener registers a callback function with an event of
          `click` inside the web api's environment.
        </p>
        <p>
          Post this the call stack becomes empty, so the gec is deleted and
          removed from the call stack.
        </p>
        <p>
          But the event handler will remain in the web api's environment unless
          we explicitly remove this event listener from the button or close the
          webpage.
        </p>
        <p>
          Now whenever the user clicks on this button, the callback function of
          the event handler is pushed into the callback queue.
        </p>
        <p>
          Now the event loop will catch this and check whether the call stack is
          empty or not, which in this case, it is.
        </p>
        <p>
          The global execution context is recreated and pushed into the call
          stack, followed by the creation of the execution context of the event
          handler's callback function and it's execution context being pushed
          into the call stack.
        </p>
        <p>
          JS calls the console web api and `clicked` is printed on the console.
        </p>
        <p>
          Post this the callback function's execution context is deleted and
          removed from the call stack, followed by the gec being deleted and
          removed from the call stack.
        </p>
        <p className="white">
          It is important to note that the event loop is constantly checking the
          callback and the microtask queue in case anything is to be executed.
        </p>
        <p>
          If the user clicks the button again, the entire process is repeated.
        </p>
        <p>This is how JS handles eventListeners.</p>
        <h3>Need of callback/ microtask queue</h3>
        <p className="space-bottom">
          Let's say the user clicks a button that has an event listener of click
          attached to it.
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
          The above program basically prints the number of times the button has
          been clicked, each time we click the button. If the user clicks the
          button multiple times, multiple callback functions would be registered
          and sent to the callback queue so that they are sent to the call stack
          in the right order one at a time by the{" "}
          <span className="green">event loop</span>.
        </p>
        <p>
          If there were no such queues, there would be no way to synchronise the
          order in which they're sent to the call stack, which is crucial.
        </p>
        <p>
          Also, JS has only one call stack and being a single threaded language,
          it can execute one thing at a time. So there's no point in sending all
          the callback functions at the same time to the call stack, in case you
          were wondering this.
        </p>
        <h3>Internal working of fetch</h3>
        <p className="space-bottom">Let's look at an example</p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="red">setTimeout</span>
              <span className="pink">(</span>
              <span className="yellow">function</span>
              <span className="pink">()</span> {leftCurly}
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              "setTimeout"
              <span className="pink">)</span>;
            </p>
            <p>
              {rightCurly}, 1000
              <span className="pink">)</span>;
            </p>
            <p className="space-top">
              <span className="red">fetch</span>
              <span className="pink">(</span>
              "api_url"
              <span className="pink">)</span>.<span className="red">then</span>
              <span className="pink">(</span>
              <span className="yellow">function</span>
              <span className="pink">()</span> {leftCurly}
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              "promise resolved"
              <span className="pink">)</span>;
            </p>
            <p>
              {rightCurly}
              <span className="pink">)</span>;
            </p>
            <p className="space-top white">--millions of lines of code</p>
            <p className="space-top">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              "End"
              <span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">End</p>
            <p className="white">promise resolved</p>
            <p className="white">setTimeout</p>
            <p className="space-top em">
              [Assume the million lines of code take more than a second to
              execute]
            </p>
            <p className="em">
              [Assume promise of fetch is resolved within 100ms]
            </p>
          </div>
        </pre>
        <p>setTimeout will be executed as explained in the previous example.</p>
        <p>
          Similar to setTimeout, fetch will also register its callback function
          to the web api's environment.
        </p>
        <p>
          Now we have two callbacks registered into the web api's environment.
        </p>
        <p>
          setTimeout's callback function is waiting for the timer to expire,
          while fetch's callback function is waiting for the promise to get
          resolved.
        </p>
        <p>
          Assume the promise returned by fetch gets resolved in less than 100ms.
        </p>
        <p>
          Now post 100ms fetch's callback function is sent to the{" "}
          <span className="green">microtask queue</span>.
        </p>
        <p className="space-top white">
          The Microtask Queue is similar to the callback queue but it is of
          higher priority. This means if there is a function in the callback
          queue and concurrently there is also another function in the microtask
          queue, the function in the microtask queue is passed into the call
          stack on priority.
        </p>
        <p className="space-top">
          Now the question might arise, what goes inside the callback queue and
          what goes into the microtask queue?
        </p>
        <p className="white">
          All the callback functions that come through promises and mutation
          observer go into the microtask queue. All other callbacks are pushed
          to the callback queue.
        </p>
        <p className="space-top">Let's come back to the explanation.</p>
        <p>
          Both the callbacks from fetch and setTimeout are present in the web
          api's environment. After 100ms (assumption) promise of fetch is
          resolved and the callback is pushed into the microtask queue.
        </p>
        <p>
          Next JS will execute the millions of lines of code present in the
          code.
        </p>
        <p>
          Meanwhile, 1000ms is up and the callback function of setTimeout is
          pushed into the callback queue.
        </p>
        <p>
          But since the call stack is not empty till now, JS will keep on
          executing the millions of code lines.
        </p>
        <p>
          After it's done executing, `End` is printed to the console through the
          console web api.
        </p>
        <p>
          The global execution context is deleted and removed from the call
          stack.
        </p>
        <p className="space-top">
          Now the event loop has two callback functions to choose from, one in
          the microtask queue and the other in the callback queue.
        </p>
        <p>
          Due to its higher priority, the callback from the microtask queue
          i.e., the fetch callback's execution context will be pushed to the
          call stack right after a new global execution context has been
          recreated and pushed to the call stack.
        </p>
        <p>
          Now `promise resolved` is printed to the console through the console
          web api post which the callback's execution context is deleted and
          removed from the call stack. This is followed by the destruction and
          removal of the global execution context from the call stack.
        </p>
        <p>
          Now again the call stack is empty, so the event loop picks up the
          setTimeout's callback and sends it to the call stack.
        </p>
        <p>
          Again a global execution context is created and pushed into the call
          stack followed by the creation of execution context of setTimeout's
          callback, which is also pushed into the call stack.
        </p>
        <p>
          `setTimeout` is printed to the console, thanks to the console web api.
          After this both the execution contexts are destroyed and removed from
          the call stack.
        </p>
        <p>Hope you liked the explanation :D</p>
        <h3>Starvation of functions in Callback Queue</h3>
        <p>
          Think of a situation where there are 100s of functions in the
          microtask queue and a single function in the callback queue. When the
          event loop finds that the call stack is empty, it'll prioritize the
          microtask queue functions and only after all the functions in the
          microtask queue have been executed, the callback in the callback queue
          is sent to the call stack. This situation is called starvation of
          function(s) in callback queue. The function in the callback queue had
          to wait a long time before being sent to the call stack.
        </p>
      </div>
    </motion.div>
  );
};

export default EventLoop;
