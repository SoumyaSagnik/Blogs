import Code from "../components/Code";
import { motion } from "framer-motion";

const ConstructorProperty = () => {
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
        <h1>Constructor property in JavaScript</h1>
        <p className="white">
          In JavaScript, every object has a special property called{" "}
          <span className="green">constructor</span> which refers to the
          functions that was used to create the object
        </p>
        <p>
          When an object is created using the{" "}
          <a
            href="https://blogs-ssk.netlify.app/js-factory-constructor"
            target="_blank"
            rel="noreferrer"
          >
            constructor function
          </a>
          , the <span className="green">constructor</span> property of that
          object is set to the{" "}
          <span className="white">
            constructor function that was used to create it
          </span>
          .
        </p>
        <p className="space-all">Let's see an example.</p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">function</span> Person
              <span className="pink">(</span>
              name, age
              <span className="pink">)</span> {leftCurly}
            </p>
            <p className="space-list">
              <span className="pink">this</span>.name
              <span className="grn"> = </span>name;
            </p>
            <p className="space-list">
              <span className="pink">this</span>.age
              <span className="grn"> = </span>age;
            </p>
            <p>{rightCurly}</p>
            <p className="space-top">
              <span className="yellow">const</span> john
              <span className="grn"> = </span>
              <span className="yellow">new </span>Person
              <span className="pink">(</span>
              "John", 23
              <span className="pink">)</span>;
            </p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              john.
              <span className="blue">constructor</span>
              <span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white em">f Person(name, age) {leftCurly}</p>
            <p className="space-list white em">this.name = name;</p>
            <p className="space-list white em">this.age = age;</p>
            <p className="white em">{rightCurly}</p>
          </div>
        </pre>
        <p>
          Here, <span className="white">`john`</span> is an object created using
          the <span className="white">`Person`</span> constructor function. The{" "}
          <span className="white">`constructor`</span> property of{" "}
          <span className="white">`john`</span> refers to the{" "}
          <span className="white">`Person` </span>
          function.
        </p>
        <p>
          Note that the value of this property is a{" "}
          <span className="white">reference to the function itself</span>, not a
          string containing the function's name.
        </p>
        <p className="space-all">
          We can also use the <span className="white">`constructor`</span>{" "}
          property to create new objects of the same type as the original
          object. Example given below.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">const</span> jane
              <span className="grn"> = </span>
              <span className="yellow">new </span>
              john.
              <span className="blue">constructor</span>
              <span className="pink">(</span>
              "Jane", 25
              <span className="pink">)</span>;
            </p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              jane
              <span className="pink">)</span>;
            </p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              jane.
              <span className="blue">constructor</span>
              <span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white em">
              Person {leftCurly}name: 'Jane', age: 25{rightCurly}
            </p>
            <p className="white em">f Person(name, age) {leftCurly}</p>
            <p className="space-list white em">this.name = name;</p>
            <p className="space-list white em">this.age = age;</p>
            <p className="white em">{rightCurly}</p>
          </div>
        </pre>
        <p className="white">
          In JavaScript, every funcion is also an object, and as such, it also
          has a <span className="green">`constructor`</span> property.
        </p>
        <p className="space-top">
          In the case of the <span className="white">`Person`</span> function
          from the previous example, its{" "}
          <span className="white">`constructor`</span> property would refer to
          the <span className="white">`Function`</span> constructor.
        </p>
        <p>
          This is because the <span className="white">`Person`</span> function
          is itself a constructor function, and was created using the{" "}
          <span className="white">`Function`</span> constructor.
        </p>
        <h3>Function() constructor</h3>
        <p>
          The <span className="white">Function()</span> constructor creates a
          new <span className="white">Function</span> object. Calling the
          constructor directly can create functions dynamically, but suffers
          from security and performance issues.
        </p>
        <p className="space-bottom">
          <span className="white">Function </span>constructor creates functions
          which execute in the global scope only.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">const </span>prod
              <span className="grn"> = </span>
              <span className="yellow">new </span>
              <span className="red">Function</span>
              <span className="pink">(</span>
              'n1', 'n2', 'return n1 * n2'
              <span className="pink">)</span>;
            </p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              prod
              <span className="pink">(</span>
              6, 9<span className="pink">))</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">54</p>
          </div>
        </pre>
        <p>
          All arguments passed to the function, except the last, are treated as
          the names of identifiers of the parameters in the function to be
          created, in the order in which they're passed.
        </p>
        <p className="space-all">
          Now that you've understood the Function constructor, let's go back to
          where we left.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">function</span> Person
              <span className="pink">(</span>
              name, age
              <span className="pink">)</span> {leftCurly}
            </p>
            <p className="space-list">
              <span className="pink">this</span>.name
              <span className="grn"> = </span>name;
            </p>
            <p className="space-list">
              <span className="pink">this</span>.age
              <span className="grn"> = </span>age;
            </p>
            <p>{rightCurly}</p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              Person.
              <span className="blue">constructor</span>
              <span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white em">
              ƒ Function() {leftCurly} [native code] {rightCurly}
            </p>
          </div>
        </pre>
        <p>
          In the case of the <span className="white">`Person`</span> function,
          its <span className="white">`constructor`</span> property would refer
          to the <span className="white">`Function`</span> constructor.
        </p>
        <p>
          <span className="white">`[native code]`</span> indicates that the
          implementation of the <span className="white">`Function`</span>{" "}
          constructor is written in native code, such as C, C++ rather than
          JavaScript.
        </p>
        <p>
          This is because the <span className="white">`Function`</span>{" "}
          constructor is a fundamental part of the JavaScript language, and it
          is implemented in the JavaScript engine itself, which is typically
          written in a lower-level language for performance reasons.
        </p>
        <p className="space-top">
          The <span className="white">`Function`</span> constructor is itself a
          built in JavaScript function, and like every other function, it has a{" "}
          <span className="white">`constructor`</span> property that refers to
          the constructor function that was used to create it. In this case, the{" "}
          <span className="white">`constructor`</span> property of the{" "}
          <span className="white">`Function`</span> constructor refers to the{" "}
          <span className="white">`Function`</span> constructor itself.
        </p>
        <p className="space-all">
          In other words, the <span className="white">`Function`</span>{" "}
          constructor was created using the{" "}
          <span className="white">`Function`</span> constructor, so its{" "}
          <span className="white">`constructor`</span> property points back to
          itself.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              <span className="red">Function</span>.
              <span className="blue">constructor</span>
              <span className="grn"> === </span>
              <span className="red">Function</span>
              <span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">true</p>
          </div>
        </pre>
      </div>
    </motion.div>
  );
};

export default ConstructorProperty;
