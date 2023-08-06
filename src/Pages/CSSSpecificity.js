import Code from "../components/Code";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const CSSSpecificity = () => {
  const leftCurly = "{";
  const rightCurly = "}";
  const left = "(";
  const right = ")";
  const greater = ">";
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="content page">
        <Helmet>
          <title>CSS Specificity</title>
          <meta name="description" content="How specificity impacts css." />
          <meta name="keywords" content="css specificity" />
        </Helmet>
        <h1>Specificity in CSS</h1>
        <p>
          In CSS, specificity is the measure of how specific a selector is in
          selecting an element or group of elements on a web page. Specificity
          is determined by the number and type of selectors used in the CSS
          rule, and it determines which CSS rule is applied to an element when{" "}
          <span className="green">multiple rules</span> target the{" "}
          <span className="green">same element</span>.
        </p>
        <p className="space-all">
          A selector's specificity is calculated based on the following
          criteria:
        </p>
        <ul>
          <li>
            <p>
              <span className="blanchedalmond">
                {" "}
                The number of ID selectors:
              </span>{" "}
              Each ID selector increases the specificity by{" "}
              <span className="green">100</span>.
            </p>
          </li>
          <li>
            <p>
              <span className="blanchedalmond">
                The number of class selectors, attribute selectors, and
                pseudo-class selectors:
              </span>{" "}
              Each of these selectors increases the specificity by{" "}
              <span className="green">10</span>.
            </p>
          </li>
          <li>
            <p>
              <span className="blanchedalmond">
                The number of element selectors and pseudo-element selectors:
              </span>{" "}
              Each of these selectors increses the specificity by{" "}
              <span className="green">1</span>.
            </p>
          </li>
        </ul>

        <p className="space-top">Example:</p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="red">#navbar</span> a {leftCurly}{" "}
              <span className="pink">color</span>: blue; {rightCurly}{" "}
              <span className="white">--101 points</span>
            </p>
            <p>
              <span className="yellow">.navbar</span> a {leftCurly}{" "}
              <span className="pink">color</span>: pink; {rightCurly}{" "}
              <span className="white">--11 points</span>
            </p>
            <p>
              <span className="yellow">.navbar .nav:hover</span> a {leftCurly}{" "}
              <span className="pink">color</span>: red; {rightCurly}{" "}
              <span className="white">--31 points</span>
            </p>
            <p>
              <span className="red">#navbar</span>
              <span className="yellow"> .nav[type='text']</span> a {leftCurly}{" "}
              <span className="pink">color</span>: black; {rightCurly}{" "}
              <span className="white">--121 points</span>
            </p>
            <p>
              a {leftCurly} <span className="pink">color</span>: green;{" "}
              {rightCurly} <span className="white">--1 point</span>
            </p>
          </div>
        </pre>
        <p className="space-all white bold">
          Formula: {left}no. of ID selectors{right} * 100 + {left}no. of class
          selectors{right} * 10 + {left}no. of type selectors{right} * 1
        </p>

        <p>CSS Rule having the highest point is applied to the element.</p>

        <p>
          <span className="green">Inline CSS overrides</span> all of the
          properties mentioned above.
        </p>
        <p>
          <span className="green">!important overrides inline css</span>.
          However using either of them is not a good practice as they make it
          difficult to understand and maintain the code.
        </p>

        <p className="space-all white bold">
          Final rule: !important {greater} Inline CSS {greater} ID {greater}{" "}
          Class {greater} Tag.
        </p>
      </div>
    </motion.div>
  );
};

export default CSSSpecificity;
