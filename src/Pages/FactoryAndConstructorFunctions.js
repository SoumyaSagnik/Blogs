import Code from "../components/Code";
import { motion } from "framer-motion";

const FactoryAndConstructorFunctions = () => {
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
        <h1>Factory function and Constructor function in JavaScript</h1>
        <h3>Factory function</h3>
        <p>
          In factory functions, we don't use the{" "}
          <span className="green">new </span>keyword to create an object.
        </p>
        <p className="white">
          Factory functions simply create an object and return it.
        </p>
        <p>
          Factory functions can contain inner values, methods, etc. just like
          regular functions. They differ from regular functions as they always
          return an object.
        </p>
        <p className="space-all">Let's see an example.</p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">function </span>
              createRectangle<span className="pink">(</span>
              l,b<span className="pink">) </span>
              {leftCurly}
            </p>
            <p className="space-list">
              <span className="red">return </span>rectangle
              <span className="grn"> = </span>
              {leftCurly}
            </p>
            <p className="space-list2">length: l,</p>
            <p className="space-list2">breadth: b,</p>
            <p className="space-list2">
              area: <span className="yellow">function</span>
              <span className="pink">() </span>
              {leftCurly}
            </p>
            <p className="space-list3">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              `area is <span className="yellow">$</span>
              {leftCurly}l <span className="grn">*</span> b{rightCurly}`
              <span className="pink">)</span>;
            </p>
            <p className="space-list2">{rightCurly}</p>
            <p className="space-list">{rightCurly}</p>
            <p>{rightCurly}</p>
            <p className="space-all">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              createRectangle
              <span className="pink">(</span>
              4, 2<span className="pink">)</span>.area
              <span className="pink">())</span>;
            </p>
            <p>Output</p>
            <p className="white">area is 8</p>
          </div>
        </pre>
        <p className="space-bottom">
          Factory functions come handy when we have to create multiple objects
          again and again that have the same logic. We can write the logic once
          in a function and use that function as a factory to create objects.
        </p>
        <h3>Constructor function</h3>
        <p>
          Constructor functions are used to define/ initialize objects. Unlike
          factory function, they don't return objects.
        </p>
        <p className="white space-bottom">
          The this keyword is used to refer to inner values and the new keyword
          is used while instantaiting new objects.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">function </span>
              Rectangle
              <span className="pink">(</span>
              l,b
              <span className="pink">)</span> {leftCurly}
            </p>
            <p className="space-list">
              <span className="pink">this</span>.length
              <span className="grn"> = </span>l;
            </p>
            <p className="space-list">
              <span className="pink">this</span>.breadth
              <span className="grn"> = </span>b;
            </p>
            <p className="space-list">
              <span className="pink">this</span>.area
              <span className="grn"> = </span>
              <span className="yellow">function</span>
              <span className="pink">()</span> {leftCurly}
            </p>
            <p className="space-list2">
              <span className="red">return </span>
              <span className="pink">this</span>.length
              <span className="grn"> * </span>
              <span className="pink">this</span>.breadth;
            </p>
            <p className="space-list">{rightCurly}</p>
            <p>{rightCurly}</p>
            <p className="space-top">
              <span className="yellow">const </span>
              rectangle
              <span className="grn"> = </span>
              <span className="yellow">new </span>
              Rectangle
              <span className="pink">(</span>
              4,5
              <span className="pink">)</span>;
            </p>
            <p>
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>
              rectangle.area
              <span className="pink">())</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">20</p>
          </div>
        </pre>
      </div>
    </motion.div>
  );
};

export default FactoryAndConstructorFunctions;
