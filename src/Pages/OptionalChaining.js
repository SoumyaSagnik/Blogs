import Code from "../components/Code";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const OptionalChaining = () => {
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
          <title>Optional Chaining in JavaScript</title>
          <meta
            name="description"
            content="How to use optional chaining in javascript with examples."
          />
          <meta name="keywords" content="optional chaining, javascript" />
        </Helmet>
        <h1>Optionaling Chaining in JavaScript</h1>
        <p>
          The optional chaining <span className="white">(?.)</span> operator
          accesses an object's property or calls a function. If the object
          accessed or function called using this operator is undefined or null,
          the expression short circuits and evaluates to{" "}
          <span className="green">undefined</span> instead of{" "}
          <span className="white">throwing an error</span>.
        </p>
        <p className="space-all">Let's understand this by an example.</p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">const</span> address1
              <span className="grn"> = </span>
              {leftCurly}
            </p>
            <p className="space-list">apartment: "abc"</p>
            <p>{rightCurly}</p>
            <p>
              <span className="yellow">const</span> address2
              <span className="grn"> = </span>
              {leftCurly}
            </p>
            <p className="space-list">flat: "123"</p>
            <p>{rightCurly}</p>
            <p>
              <span className="yellow">let</span> address3;
            </p>
            <p className="space-top">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              address1.flat
              <span className="pink">)</span>;
            </p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              address2.flat
              <span className="pink">)</span>;
            </p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              address3.flat
              <span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">undefined</p>
            <p className="white">123</p>
            <p className="red">
              Uncaught TypeError: Cannot read properties of undefined
            </p>
          </div>
        </pre>
        <p className="space-bottom">
          This error was resolved traditionally like
        </p>
        <pre>
          <div className="code-body">
            <p>
              if
              <span className="pink">(</span>
              address3
              <span className="pink">)</span>
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              address3.flat
              <span className="pink">)</span>;
            </p>
            <p className="space-all em white">OR</p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              address3
              <span className="grn"> && </span>
              address3.flat
              <span className="pink">)</span>;
            </p>
          </div>
        </pre>
        <p className="space-bottom">Using optional chaining:</p>
        <pre>
          <div className="code-body">
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              address3
              <span className="red">?.</span>
              flat
              <span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">undefined</p>
          </div>
        </pre>
        <p>
          This results in shorter and simpler expressions when accessing chained
          properties when the possibility exists that a reference may be
          missing. It can also be helpful while exploring the content of an
          object when there's no known guarantee as to which properties are
          required.
        </p>
        <p className="space-all white">
          Optional chaining cannot be used on a non-declared root object, but
          can be used with a root object with value{" "}
          <span className="green">undefined</span>
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">let </span>
              address1;
            </p>
            <p className="space-top">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              address1
              <span className="red">?.</span>
              city
              <span className="pink">)</span>;
            </p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              address2
              <span className="red">?.</span>
              city
              <span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">undefined</p>
            <p className="red">
              Uncaught ReferenceError: address2 is not defined
            </p>
          </div>
        </pre>
        <p>
          Basically, optional chaining checks if{" "}
          <span className="white">address1 is undefined</span>. In this case, it
          is undefined and hence the output is reduced to undefined, city's
          value is not even checked.
        </p>
        <p>
          On the other hand,{" "}
          <span className="white">address 2 is not defined</span>. Hence the
          error.
        </p>
        <p>
          To know more about undefined vs not defined, check this{" "}
          <a
            href="https://blogs-ssk.netlify.app/js-undefinedVsNotDefined"
            target="_blank"
            rel="noreferrer"
          >
            artice
          </a>
          .
        </p>
        <p className="space-all"></p>
        <p className="space-top">
          Optional chaining can be used with functions. This may come handy when
          attempting to call a method which may not exist. For example, when
          using an API in which a method might be unavailable due to age
          restriction.
        </p>
        <p className="white space-bottom">
          Using optional chaining with function calls causes the expression to
          automatically return undefined instead of throwing an exception if the
          method isin't found.
        </p>
        <pre>
          <div className="code-body">
            <p>
              window.abc
              <span className="red">?.</span>
              <span className="pink">()</span>;
              <span className="space-list white em">--undefined</span>
            </p>
            <p>
              window.abc
              <span className="pink">()</span>;
              <span className="space-list red em">
                Uncaught TypeError: window.abc is not a function
              </span>
            </p>
          </div>
        </pre>
        <p>
          Here optional chaining is checking if `abc` exists and if it's a
          function.
        </p>
        <p className="space-all">
          Optional chaining can be used on arrays as well.
        </p>
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">let</span> array;
            </p>
            <p className="space-top">
              array
              <span className="pink">[</span>0<span className="pink">]</span>;
              <span className="space-list2 red em">
                Uncaught TypeError: Cannot read properties of undefined{" "}
              </span>
            </p>
            <p>
              array
              <span className="red">?.</span>
              <span className="pink">[</span>0<span className="pink">]</span>;
              <span className="space-list em white">--undefined</span>
            </p>
          </div>
        </pre>
        <p>The use cases are limitless with optional chaining.</p>
      </div>
    </motion.div>
  );
};

export default OptionalChaining;
