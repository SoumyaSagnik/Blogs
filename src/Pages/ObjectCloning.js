import Code from "../components/Code";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const ObjectCloning = () => {
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
          <title>Object Cloning in JS</title>
          <meta
            name="description"
            content="Different ways to clone an object in javascript."
          />
          <meta
            name="keywords"
            content="object clone, spread operator, json, constructor function"
          />
        </Helmet>
        <h1>Object Cloning in JavaScript</h1>
        <p>
          Object is a{" "}
          <a
            href="https://blogs-ssk.netlify.app/js-primitiveVsReference"
            target="_blank"
            rel="noreferrer"
          >
            reference type
          </a>{" "}
          in JavaScript. This means that whenever we try to assign the value of
          an object to another object, the new object merely points to the
          reference of the former object in memory. Once the former object is
          changed, the new object will persist those changes.
        </p>
        <p className="space-all">
          There are several ways of cloning an object in JavaScript. Some of
          them are listed below.
        </p>
        <h3>Using for-in loop</h3>
        <p className="space-bottom"></p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">const </span>obj1
              <span className="grn"> = </span>
              {leftCurly} a: 1, b: 2 {rightCurly};
            </p>
            <p>
              <span className="yellow">const </span>obj2
              <span className="grn"> = </span>
              {leftCurly + " " + rightCurly};
            </p>
            <p className="space-top">
              <span className="yellow">for</span>
              <span className="pink">(</span>i <span className="pink">in </span>
              obj1
              <span className="pink">)</span> {leftCurly}
            </p>
            <p className="space-list">
              obj2[i]
              <span className="grn"> = </span>
              obj1[i];
            </p>
            <p>{rightCurly}</p>
          </div>
        </pre>
        <h3>Using Object.assign()</h3>
        <p className="space-bottom"></p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">const </span>obj1
              <span className="grn"> = </span>
              {leftCurly} a: 1, b: 2 {rightCurly};
            </p>
            <p>
              <span className="yellow">const </span>obj2
              <span className="grn"> = </span>
              <span className="blue">Object</span>.
              <span className="yellow">assign</span>
              <span className="pink">(</span>
              {leftCurly}
              {rightCurly}, obj1
              <span className="pink">)</span>;
            </p>
          </div>
        </pre>
        <h3>Using Spread Operator</h3>
        <p className="space-bottom"></p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">const </span>obj1
              <span className="grn"> = </span>
              {leftCurly} a: 1, b: 2 {rightCurly};
            </p>
            <p>
              <span className="yellow">const </span>obj2
              <span className="grn"> = </span>
              {leftCurly}...obj1{rightCurly};
            </p>
          </div>
        </pre>
        <h3>Using JSON.parse() & JSON.stringfy()</h3>
        <p className="space-bottom"></p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">const </span>obj1
              <span className="grn"> = </span>
              {leftCurly} a: 1, b: 2 {rightCurly};
            </p>
            <p>
              <span className="yellow">const </span>obj2
              <span className="grn"> = </span>
              <span className="yellow">JSON</span>.
              <span className="red">parse</span>
              <span className="pink">(</span>
              <span className="yellow">JSON</span>.
              <span className="red">stringify</span>
              <span className="pink">(</span>
              obj1
              <span className="pink">)</span>
              <span className="pink">)</span>;
            </p>
          </div>
        </pre>
        <h3>Using Constructor Function</h3>
        <p className="sapce-bottom"></p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">function</span> ObjectClone
              <span className="pink">(</span>
              obj
              <span className="pink">)</span> {leftCurly}
            </p>
            <p className="space-list">
              <span className="pink">this</span>.a
              <span className="grn"> = </span>obj.a;
            </p>
            <p className="space-list">
              <span className="pink">this</span>.b
              <span className="grn"> = </span>obj.b;
            </p>
            <p>{rightCurly}</p>
            <p className="space-top">
              <span className="yellow">const </span>obj1
              <span className="grn"> = </span>
              {leftCurly} a: 1, b: 2 {rightCurly};
            </p>
            <p>
              <span className="yellow">const </span>obj2
              <span className="grn"> = </span>
              <span className="yellow">new </span>ObjectClone
              <span className="pink">(</span>
              obj1
              <span className="pink">)</span>;
            </p>
          </div>
        </pre>
        <p className="space-bottom"></p>
        <p className="space-bottom">
          There's a way of pointing to the original object's properties when the
          object pointing to the original one is itself empty. This can be
          achieved through <span className="green">Object.create()</span>.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">const </span>obj1
              <span className="grn"> = </span>
              {leftCurly} a: 1, b: 2 {rightCurly};
            </p>
            <p>
              <span className="yellow">const </span>obj2
              <span className="grn"> = </span>
              <span className="blue">Object</span>.
              <span className="yellow">create</span>
              <span className="pink">(</span>
              obj1
              <span className="pink">)</span>;
            </p>
            <p className="space-top em white">
              Note: obj2 in this case will remain empty. However, obj2.a will
              point to obj1.a, and so on..
            </p>
          </div>
        </pre>
      </div>
    </motion.div>
  );
};

export default ObjectCloning;
