import Code from "../components/Code";
import { motion } from "framer-motion";

const ForInAndForOfLoop = () => {
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
        <h1>for-in and for-of loop in JavaScript</h1>
        <h3>for-in loop</h3>
        <p className="space-bottom white">
          The for-in loop is used for iterating over objects.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red space-bottom">
              #Print all key-value pairs of an object.
            </p>
            <p>
              <span className="yellow">const </span>details
              <span className="grn"> = </span>
              {leftCurly}
            </p>
            <p className="space-list">name: "John",</p>
            <p className="space-list">age: 39,</p>
            <p className="space-list">address: {leftCurly}</p>
            <p className="space-list2">street: "21 street",</p>
            <p className="space-list2">state: "Boston",</p>
            <p className="space-list">{rightCurly}</p>
            <p>{rightCurly}</p>
            <p className="space-top">
              <span className="yellow">for </span>
              <span className="pink">(</span>i <span className="pink">in</span>{" "}
              details
              <span className="pink">) </span>
              {leftCurly}
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              i, details[i]
              <span className="pink">)</span>;
            </p>
            <p>{rightCurly}</p>
            <p className="space-top">Output</p>
            <p className="white">name John</p>
            <p className="white">age 39</p>
            <p className="white">
              address{" "}
              <span className="em">
                {leftCurly}street: '21 street', state: 'Boston'{rightCurly}
              </span>
            </p>
          </div>
        </pre>
        <p className="space-bottom">
          In case you need to print all the keys of a nested object in separate
          lines, I've got you covered, provided you know the name of the nested
          object.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">for </span>
              <span className="pink">(</span>i <span className="pink">in</span>{" "}
              details.address
              <span className="pink">) </span>
              {leftCurly}
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              i, details.address[i]
              <span className="pink">)</span>;
            </p>
            <p>{rightCurly}</p>
            <p className="space-top">Output</p>
            <p className="white">street 21 street</p>
            <p className="white">state Boston</p>
          </div>
        </pre>
        <h3>for-of loop</h3>
        <p className="space-bottom white">
          The for-of loop is used for iterating over iterables.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">for </span>
              <span className="pink">(</span>
              <span className="yellow">let </span>i{" "}
              <span className="pink">of</span>{" "}
              <span className="blue">Object</span>.
              <span className="yellow">keys</span>
              <span className="pink">(</span>
              details
              <span className="pink">)</span>
              <span className="pink">) </span>
              {leftCurly}
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>i<span className="pink">)</span>;
            </p>
            <p>{rightCurly}</p>
            <p className="space-top">Output</p>
            <p className="white">name</p>
            <p className="white">age</p>
            <p className="white">address</p>
          </div>
        </pre>
        <p>Let's see a practice question.</p>
        <p className="white space-bottom">
          You're given an object and a key. Find if the object contains that
          key.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">const </span>obj
              <span className="grn"> = </span>
              {leftCurly}
            </p>
            <p className="space-list">id: 1,</p>
            <p className="space-list">num: 2,</p>
            <p>{rightCurly}</p>
            <p className="space-top">
              <span className="yellow">function </span>isKeyInObject
              <span className="pink">(</span>
              object, key
              <span className="pink">) </span>
              {leftCurly}
            </p>
            <p className="space-list">
              <span className="red">return </span>
              <span className="pink">(</span>
            </p>
            <p className="space-list2">
              key <span className="pink">in </span>object{" "}
              <span className="red">? </span>true : false
            </p>
            <p className="space-list pink">)</p>
            <p>{rightCurly}</p>
            <p className="space-top">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              isKeyInObject
              <span className="pink">(</span>obj, "num"
              <span className="pink">)</span>
              <span className="pink">)</span>;
            </p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              isKeyInObject
              <span className="pink">(</span>obj, "name"
              <span className="pink">)</span>
              <span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">true</p>
            <p className="white">false</p>
          </div>
        </pre>
      </div>
    </motion.div>
  );
};

export default ForInAndForOfLoop;
