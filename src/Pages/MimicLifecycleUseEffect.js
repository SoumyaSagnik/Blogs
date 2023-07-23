import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { cb } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const useEffectExample = `useEffect(() => {
  // code to be executed whenever component re-renders
})`;

const componentDidMount = `useEffect(() => {
  // code to be executed after component mount
}, [])`;

const componentDidUpdate = `const [state, setState] = useState('');
useEffect(() => {
  // code to be executed after component updates
}, [state]);
`;

const componentWillUnmount = `useEffect(() => {
  // code to be executed after component mount
  return () => {
    // code to be executed just before component unmounts
  }
}, [])`;

const MimicLifecycleUseEffect = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="content page">
        <Helmet>
          <title>Mimic Lifecycle methods</title>
          <meta
            name="description"
            content="mimicking the lifecycle methods using useEffect hook"
          />
          <meta
            name="keywords"
            content="useEffect, componentdidMount, componentDidUpdate, componentWillUnmont"
          />
        </Helmet>
        <h1>Mimicking lifecycle methods using useEffect hook</h1>
        <h3>useEffect hook</h3>
        <p>
          The useEffect hook is used to perform side-effects based on certain
          conditions. It takes in two arguments, a callback function and an
          array of dependencies. The callback function is executed after the
          component is mounted and whenever one or more of the dependencies
          change. The dependencies array is optional and is used to specify the
          values that the callback function depends on.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {useEffectExample}
        </SyntaxHighlighter>
        <p className="white space-bottom">
          If we don't pass the dependencies array, the code inside the useEffect
          will be executed everytime the component re-renders.
        </p>
        <h3>Mimicking componentDidMount</h3>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {componentDidMount}
        </SyntaxHighlighter>
        <p className="space-bottom">
          The <span className="white">empty array</span> tells React that the
          effect should run only once, after the component has mounted. This is
          equivalent to <span className="white">componentDidMount</span>.
        </p>
        <h3>Mimicking componentDidUpdate</h3>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {componentDidUpdate}
        </SyntaxHighlighter>
        <p>
          In this case, the code inside useEffect runs only when the value in
          the dependencies array change.
        </p>
        <p className="space-top"></p>
        <h3>Mimicking componentWillUnmount</h3>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {componentWillUnmount}
        </SyntaxHighlighter>
        <p>
          The callback function passed to the useEffect hook is executed after
          the component mounts and returns the{" "}
          <span className="white">cleanup function</span>. This cleanup function
          will be executed just before the component unmounts.
        </p>
      </div>
    </motion.div>
  );
};

export default MimicLifecycleUseEffect;
