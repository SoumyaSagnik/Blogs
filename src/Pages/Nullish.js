import Code from "../components/Code";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Nullish = () => {
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
          <title>Nullish Coalescing</title>
          <meta
            name="description"
            content="How to use the nullish coalescing operator in javascript with examples."
          />
          <meta
            name="keywords"
            content="nullish coalescing, javascript, logical operator"
          />
        </Helmet>
        <h1>Nullish coalescing operator (??) in JavaScript</h1>
        <p>
          The nullish coalescing operator is a logical operator that returns its{" "}
          <span className="white">right-hand side</span> operand when its{" "}
          <span className="white">left-hand side</span> operand is{" "}
          <span className="green">null</span> or{" "}
          <span className="green">undefined</span>, and otherwise its{" "}
          <span className="white">left-hand side</span> operand.
        </p>
        <p className="space-all">Let's look at an example.</p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">let </span>n;
            </p>
            <p>
              <span className="blue">for </span>
              <span className="pink">(</span>
              <span className="yellow">let </span>i
              <span className="grn"> = </span>0; i{" "}
              <span className="grn">{"<"}</span> 2; i
              <span className="grn">++</span>
              <span className="pink">)</span> {leftCurly}
            </p>
            <p className="space-list">
              <span className="red">if </span>
              <span className="pink">(</span>i<span className="grn"> === </span>
              1<span className="pink">)</span>
            </p>
            <p className="space-list2">
              n<span className="grn"> = </span>10;
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>n <span className="red">?? </span>i
              <span className="pink">)</span>;
            </p>
            <p>{rightCurly}</p>
            <p className="space-top">Output</p>
            <p className="white">0</p>
            <p className="white">10</p>
          </div>
        </pre>
        <p>
          During the first iteration, `n` hasn't been assigned any value yet and
          is undefined. Therefore, value of `i` i.e., the{" "}
          <span className="white">right-hand</span> side operand is printed.
        </p>
        <p className="space-bottom">
          During the seconde iteration, `n` is assigned a value of 10 and is no
          longer undefined. Hence the value of `n` i.e., the{" "}
          <span className="white">left-hand</span> side operand is printed.
        </p>
        <h3>Assigning default value to a variable</h3>
        <p className="space-bottom">
          Earlier, people used the{" "}
          <span className="white">logical OR operator</span> for assigning
          default value to a variable
        </p>
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">let </span>name;
            </p>
            <p>
              <span className="yellow">let </span>nameReceived
              <span className="grn"> = </span>name{" "}
              <span className="red">|| </span>"defaultName";
            </p>
          </div>
        </pre>
        <p>
          However, due to <span className="red">|| </span>{" "}
          <span className="white">being a boolean logical operator</span>, the
          left-hand side operand was coerced to a boolean for the evaluation and
          any <span className="green">falsy</span> value, (like 0, '', Nan,
          false, etc.) was not returned. This behavior may cause unexpected
          consequences if you consider <span className="white">0, '',</span> or{" "}
          <span className="white">Nan</span> as valid values.
        </p>
        <p className="space-top">
          The nullish coalescing operator avoids this pitfall by only returning
          the second operand when the first one is either{" "}
          <span className="white">undefined</span> or{" "}
          <span className="white">null</span> and no other value.
        </p>
      </div>
    </motion.div>
  );
};

export default Nullish;
