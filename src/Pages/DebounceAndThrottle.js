import Code from "../components/Code";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const DebounceAndThrottle = () => {
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
          <title>Debounce & Throttle</title>
          <meta
            name="description"
            content="Debounce and throttle explanation with example."
          />
          <meta name="keywords" content="debounce, throttle, javascript" />
        </Helmet>
        <h1>Debounce and Throttle in JavaScript</h1>
        <p className="space-bottom">
          In JavaScript, booth debounce and throttle are{" "}
          <span className="white">
            techniques used to optimize the performance of web applications by
            controlling the rate at which certain functions are executed.
          </span>
        </p>
        <h3>Debouncing</h3>
        <p className="space-bottom">
          The idea behind debouncing is that when an event is fired, a timer is
          set for a certain amount of time. If the event is fired again before
          the timer expires, the timer is reset. If the timer does expire
          without any further events being fired, the function is executed. This
          ensures that the function is only executed after a certain period of
          inactivity.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p className="space-bottom red">#Implementation</p>
            <p>
              <span className="yellow">function </span>
              debounce
              <span className="pink"> (</span>
              cb, delay <span className="grn">= </span>500
              <span className="pink">)</span> {leftCurly}
            </p>
            <p className="space-list">
              <span className="yellow">let</span> timer;
            </p>
            <p className="space-list">
              <span className="red">return </span>
              <span className="pink">(</span>
              <span className="red">...</span>
              args
              <span className="pink">)</span>{" "}
              <span className="grn">{"=>"}</span> {leftCurly}
            </p>
            <p className="space-list2">
              <span className="yellow">clearTimeout</span>
              <span className="pink">(</span>
              timer
              <span className="pink">)</span>;
            </p>
            <p className="space-list2">
              timer <span className="grn">= </span>
              <span className="yellow">setTimeout</span>
              <span className="pink">(()</span>{" "}
              <span className="grn">{"=> "}</span>
              {leftCurly}
            </p>
            <p className="space-list3">
              cb
              <span className="pink">(</span>
              <span className="red">...</span>args
              <span className="pink">)</span>;
            </p>
            <p className="space-list2">
              {rightCurly}, delay
              <span className="pink">)</span>;
            </p>
            <p className="space-list">{rightCurly};</p>
            <p>{rightCurly}</p>
          </div>
        </pre>
        <p className="space-bottom">
          In the above example, <span className="white">`debounce()`</span>{" "}
          returns a function <span className="white">`cb`</span> which is
          executed if there's a gap of more than 500ms (by default) between
          function calls as a result of some triggers.
        </p>
        <h3>Throttling</h3>
        <p>
          Throttling is a technique that limits the number of times a function
          is called over a certain period of time by setting a minimum time
          interval betweeen each function call. It is often used when handling
          events that are fired more frequently.
        </p>
        <p className="space-bottom">
          Throttling is similar to debouncing, but with throttling, the function
          is executed once every x milliseconds, until there are no more
          changes, instead of waiting for a period of inactivity. For the first
          time (or first time after a gap more than x milliseconds), the
          function is executed as soon as the event is triggered.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p className="space-bottom red">#Implementation</p>
            <p>
              <span className="yellow">function </span>throttle{" "}
              <span className="pink">(</span>
              cb, delay <span className="grn">= </span>500
              <span className="pink">)</span> {leftCurly}
            </p>
            <p className="space-list">
              <span className="yellow">let </span>shouldWait
              <span className="grn"> = </span>
              <span className="blue">false</span>;
            </p>
            <p className="space-list">
              <span className="yellow">let </span>
              waitingArgs;
            </p>
            <p className="space-list">
              <span className="yellow">function </span>
              timeoutFunc
              <span className="pink">() </span>
              {leftCurly}
            </p>
            <p className="space-list2">
              <span className="yellow">if</span>
              <span className="pink">(</span>
              waitingArgs <span className="grn">== </span>null
              <span className="pink">)</span>
            </p>
            <p className="space-list3">
              shouldWait <span className="grn">= </span>
              <span className="blue">false</span>;
            </p>
            <p className="space-list2">
              <span className="yellow">else </span>
              {leftCurly}
            </p>
            <p className="space-list3">
              cb
              <span className="pink">(</span>
              <span className="red">...</span>waitingArgs
              <span className="pink">)</span>;
            </p>
            <p className="space-list3">
              waitingArgs <span className="grn">= </span>null;
            </p>
            <p className="space-list3">
              <span className="yellow">setTimeout</span>
              <span className="pink">(</span>
              timeoutFunc, delay
              <span className="pink">)</span>;
            </p>
            <p className="space-list2">{rightCurly}</p>
            <p className="space-list">{rightCurly}</p>
            <p className="space-list">
              <span className="red">return </span>
              <span className="pink">(</span>
              <span className="red">...</span>
              args
              <span className="pink">)</span>{" "}
              <span className="grn">{"=>"}</span> {leftCurly}
            </p>
            <p className="space-list2">
              <span className="yellow">if</span>
              <span className="pink">(</span>
              shouldWait
              <span className="pink">)</span> {leftCurly}
            </p>
            <p className="space-list3">
              waitingArgs <span className="grn">= </span>args;
            </p>
            <p className="space-list3">
              <span className="red">return</span>;
            </p>
            <p className="space-list2">{rightCurly}</p>
            <p className="space-list2">
              cb
              <span className="pink">(</span>
              <span className="red">...</span>args
              <span className="pink">)</span>;
            </p>
            <p className="space-list2">
              shouldWait <span className="grn">= </span>
              <span className="blue">true</span>;
            </p>
            <p className="space-list2">
              <span className="yellow">setTimeout</span>
              <span className="pink">(</span>
              timeoutFunc, delay
              <span className="pink">)</span>;
            </p>
            <p className="space-list">{rightCurly}</p>
            <p>{rightCurly}</p>
          </div>
        </pre>
        <p>
          In the above example, <span className="white">`shouldWait`</span> is
          set to false initially as the function must execute as soon as the
          event is triggered when there's no activity for a while/ first time.
        </p>
        <p>
          Post that, we keep calling the{" "}
          <span className="white">`timeoutFunc()`</span> to check if there are
          any triggers that have not been taken care of.
        </p>
        <p className="space-bottom">
          If there are no such triggers, execution stops. Else it is set to be
          executed after 500ms (by default here) post function's first execution
          with the new arguments.
        </p>
        <p className="space-top">
          Generally, throttle is used in places where information should be
          reflected in the UI with high frequency, such as resizing of window,
          scrolling of a page, etc.
        </p>
        <p>
          Debouncing is ideal when it is okay to not update the UI until user
          stops triggering actions. Example include: search bar in a website.
        </p>
        <p>
          You can visualize the process{" "}
          <a
            href="https://web-development-study-soumyasagnik.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
        <p>
          You can check out the process visulization code{" "}
          <a
            href="https://github.com/SoumyaSagnik/WebDevelopment-Study/tree/main/Web%20Dev%20Simplified/Debouncing%20and%20Throttling"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
      </div>
    </motion.div>
  );
};

export default DebounceAndThrottle;
