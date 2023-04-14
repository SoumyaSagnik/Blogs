import Code from "../components/Code";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const JSInterview = () => {
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
          <title>Interview Questions</title>
          <meta
            name="description"
            content="Popular javascript interview questions."
          />
          <meta name="keywords" content="interview, javascript" />
        </Helmet>
        <h1>JavaScript Interview Questions</h1>
        <p className="space-bottom">
          Here are some interesting JavaScript interview questions.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">function</span> x
              <span className="pink">()</span> {leftCurly}
            </p>
            <p>
              <span className="yellow">var</span> a{" "}
              <span className="grn">= </span>10;
            </p>
            <p>
              <span className="yellow">setTimeout</span>
              <span className="pink">(</span>
              <span className="yellow">function</span>
              <span className="pink">()</span> {leftCurly}
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>"Hello"
              <span className="pink">)</span>;
            </p>
            <p>
              {rightCurly}, 1000<span className="pink">)</span>;
            </p>
            <p className="space-top">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>a<span className="pink">)</span>;
            </p>
            <p>{rightCurly}</p>
            <p>
              x<span className="pink">()</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">10</p>
            <p className="white">
              Hello
              <span className="space-list3 white em">[After 1 sec]</span>
            </p>
          </div>
        </pre>
        <p className="white">Time, tide and JavaScript wait for none.</p>
        <p className="space-all">
          <span className="blanchedalmond">Problem Statement: </span>
          Print numbers from 1 to 5 such that 1 appears in the console after 1
          sec, 2 after 2 secs, and so on..
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              <span className="yellow">var</span> num{" "}
              <span className="grn">= </span>0;
            </p>
            <p>
              <span className="yellow">function</span> printNum
              <span className="pink">()</span> {leftCurly}
            </p>
            <p className="space-list">
              <span className="yellow">if</span>
              <span className="pink">(</span>
              num
              <span className="grn"> === </span>6<span className="pink">)</span>
            </p>
            <p className="space-list2">
              <span className="pink">return</span>;
            </p>
            <p>
              <span className="yellow">if</span>
              <span className="pink">(</span>
              num <span className="grn">{">"}</span> 0
              <span className="pink">)</span>
            </p>
            <p className="space-list">
              console.
              <span className="yellow">log</span>
              <span className="pink">(</span>num
              <span className="pink">)</span>;
            </p>
            <p>
              num<span className="grn">++</span>;
            </p>
            <p>
              <span className="yellow">setTimeout</span>
              <span className="pink">(</span>
              printNum , num <span className="pink">{"*"}</span> 1000
              <span className="pink">)</span>;
            </p>
            <p className="space-bottom">{rightCurly}</p>
            <p>
              printNum
              <span className="pink">()</span>;
            </p>
          </div>
        </pre>
        <p className="space-bottom">
          We are calling the function post the required time which gives us the
          desired output.
        </p>
      </div>
    </motion.div>
  );
};

export default JSInterview;
