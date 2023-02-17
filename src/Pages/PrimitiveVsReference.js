import Code from "../components/Code";
import { motion } from "framer-motion";

const PrimitiveVsReference = () => {
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
        <h1>Primitive vs Reference types in JavaScript</h1>
        <p>
          In JavaScript, there are two categories of data types:{" "}
          <span className="white">primitives and reference types</span>.
        </p>
        <p className="space-top blanchedalmond">
          Primitives are immutable (cannot be changed) and are passed by value.
        </p>
        <p>
          <span className="white">
            Boolean, Null, Undefined, Number, String and Symbol
          </span>{" "}
          come under this category.
        </p>
        <p className="space-top blanchedalmond">
          Reference types are mutable (can be changed) and are passed by
          reference.
        </p>
        <p>
          <span className="white">
            Object, Array, Function, Date, RegExp and Error
          </span>{" "}
          fall under this category.
        </p>
        <p className="space-top">
          It is important not to confuse a primitive itself with a variable
          assigned a primitive value. The variable may be reassigned to a new
          value, but the existing value cannot be changed in the ways that
          objects, arrays and functions can be altered.
        </p>
        <p className="space-top">
          When you pass a primitive to a function or assign it to a variable, a
          <span className="green"> copy of the value</span> is created. When you
          pass a reference type to a function or assign it to a variable, a
          <span className="green"> reference to the object in memory</span> is
          created. This means that any changes made to the object will be
          reflected in all references to that object.
        </p>
        <p className="space-all">Let's understand this with an example.</p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">let </span>a
              <span className="grn"> = </span>10;
            </p>
            <p>
              <span className="yellow">let </span>b
              <span className="grn"> = </span>a;
            </p>
            <p>
              a<span className="grn">++</span>;
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
            <p className="space-top">
              <span className="yellow">let </span>
              obj1
              <span className="grn"> = </span>
              {leftCurly} value: 10 {rightCurly}
            </p>
            <p>
              <span className="yellow">let </span>obj2
              <span className="grn"> = </span>obj1;
            </p>
            <p>
              obj1.value<span className="grn">++</span>;
            </p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>obj1.value
              <span className="pink">)</span>;
            </p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>obj2.value
              <span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">11</p>
            <p className="white">10</p>
            <p className="white">11</p>
            <p className="white">11</p>
          </div>
        </pre>
        <p>
          In the first example, a copy of value of{" "}
          <span className="white">`a`</span> is created when it is assigned to{" "}
          <span className="white">`b`</span>, so changing{" "}
          <span className="white">`a`</span> does not affect{" "}
          <span className="white">`b`</span>.
        </p>
        <p>
          In the second example, <span className="white">`obj1`</span> and{" "}
          <span className="white">`obj2`</span> both reference the same object
          in memory, so changing a property on{" "}
          <span className="white">`obj1`</span> also changes the same property
          on <span className="white">`obj2`</span>.
        </p>
        <p className="space-all">Let's look at another example.</p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">let </span>a
              <span className="grn"> = </span>10;
            </p>
            <p>
              <span className="yellow">function </span>
              increment
              <span className="pink">(</span>a<span className="pink">)</span>{" "}
              {leftCurly}
            </p>
            <p className="space-list">
              a<span className="grn">++</span>;
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>a<span className="pink">)</span>;
            </p>
            <p>{rightCurly}</p>
            <p className="space-top">
              increment
              <span className="pink">(</span>a<span className="pink">)</span>;
            </p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>a<span className="pink">)</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">11</p>
            <p className="white">10</p>
          </div>
        </pre>
        <p>
          In the above example, when <span className="white">`a`</span> is
          passed to the <span className="white">`increment()`</span>, another
          copy of <span className="white">`a`</span> is created. This copy's
          value is incremented and we get `11`. But the value of{" "}
          <span className="white">`a`</span> in the global space is still `10`
          and that's what printed next.
        </p>
      </div>
    </motion.div>
  );
};

export default PrimitiveVsReference;
