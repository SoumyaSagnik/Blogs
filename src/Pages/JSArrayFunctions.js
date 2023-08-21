import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import JsArrayFunctionsCS from "../codeSnippets/JsArrayFunctionsCS";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { cb } from "react-syntax-highlighter/dist/esm/styles/prism";

const JSArrayFunctions = () => {
  const lessThan = "<";
  const greaterThanEqual = ">=";
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="content page">
        <Helmet>
          <title>JS Array Functions</title>
          <meta
            name="description"
            content="Commonly used array functions in javascript with examples, js array functions cheat sheet."
          />
          <meta
            name="keywords"
            content="javascript, array functions, splice, slice, map, reduce, filter, forEach, pop, push, shift, unshift, concat"
          />
        </Helmet>
        <h1>JavaScript Array Functions</h1>
        <p>
          JavaScript has several built-in functions that can be used to
          manipulate arrays. Some of the commonly used array functions are
          listed below.
        </p>
        <h3 className="space-top">forEach()</h3>
        <p>
          <span className="blanchedalmond">Definition:</span> The forEach()
          method executes a provided function once for each array element.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>
          callbackFn(element, index, array).
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>undefined.
        </p>
        <p>
          It is commonly used for <span className="green">iterating</span> over
          an array.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.forEach}
        </SyntaxHighlighter>

        <h3>pop()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The pop() method
          <span className="green"> removes</span> the
          <span className="green"> last</span> element from an array.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>none.
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>the removed element.
        </p>
        <p>This method changes the length of the array.</p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.pop}
        </SyntaxHighlighter>
        <h3>push()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The push() method
          <span className="green"> adds</span> the specified
          <span className="green"> element(s) </span>to the{" "}
          <span className="green">end </span> of an array.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>element(s) to be
          inserted.
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>new length of the
          array.
        </p>
        <p>This method changes the length of the array.</p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.push}
        </SyntaxHighlighter>
        <h3>shift()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The shift() method
          <span className="green"> removes</span> the
          <span className="green"> first</span> element from an array.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>none.
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>the removed element.
        </p>
        <p>This method changes the length of the array.</p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.shift}
        </SyntaxHighlighter>
        <h3>unshift()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The unshift()
          method
          <span className="green"> adds</span> the specified
          <span className="green"> element(s) </span>to the{" "}
          <span className="green">beginning </span> of an array.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>element(s) to be
          inserted.
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>new length of the
          array.
        </p>
        <p>This method changes the length of the array.</p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.unshift}
        </SyntaxHighlighter>
        <h3>concat()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The concat()
          method is used to
          <span className="green"> merge</span> two or more arrays.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>array(s) to be
          merged.
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>the merged array.
        </p>
        <p>
          This method <span className="green">doesn't mutate</span> the original
          array(s).
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.concat}
        </SyntaxHighlighter>
        <h3>join()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The join() method
          is used to
          <span className="green"> create</span> a new{" "}
          <span className="green">string</span> by
          <span className="green"> concatenating </span> all the elements in an
          array.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>separator. The
          default separator is a <span className="green">comma (,)</span>.
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>the new string formed
          after concatenation.
        </p>
        <p>
          If the array has only one item, then that item is returned without
          using the separator.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.join}
        </SyntaxHighlighter>
        <h3>reverse()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The reverse()
          method
          <span className="green"> reverses</span> an array.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>none.
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>the reference to the
          same array, now reversed.
        </p>
        <p>
          This method <span className="green">mutates</span> the original array.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.reverse}
        </SyntaxHighlighter>
        <h3>toReversed()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The toReversed()
          method
          <span className="green"> reverses</span> an array, without changing
          the original array.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>none.
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>a new reversed array.
        </p>
        <p>
          This method <span className="green">doesn't mutate</span> the original
          array.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.toReversed}
        </SyntaxHighlighter>
        <h3>filter()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The filter()
          method is used to create a <span className="green">new</span> array
          containing elements that meet a specified
          <span className="green"> condition</span>.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>
          callbackFn(element, index, array).
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>a new filtered array.
        </p>
        <p>
          This method <span className="green">doesn't mutate</span> the original
          array.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.filter}
        </SyntaxHighlighter>
        <h3>map()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The map() method
          is used to create a <span className="green">new</span> array populated
          with the results of <span className="green">calling </span> the
          provided function on
          <span className="green"> every</span> element in the calling array.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>
          callbackFn(element, index, array).
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>a new array.
        </p>
        <p>
          This method <span className="green">doesn't mutate</span> the original
          array.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.map}
        </SyntaxHighlighter>
        <h3>reduce()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The reduce()
          method is used to <span className="green">reduce</span> an array to a{" "}
          <span className="green">single </span> value by applying a callback
          function to each array element, and passing in the return value from
          the calculation on the preceding element to this callback function.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>
          callbackFn(accumulator, currentValue, index, array), initialValue.
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>accumulated value
          obtained after reducing the array.
        </p>
        <p>
          This method <span className="green">doesn't mutate</span> the original
          array. If an initialValue is not provided, the{" "}
          <span className="green">first</span> element of the array is used as
          the <span className="green">initialValue</span>, and the iteration
          will start from the
          <span className="green"> second</span> element.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.reduce}
        </SyntaxHighlighter>
        <p>
          In the above example, without the initial value,{" "}
          <span className="white">1</span> is taken as the initial value, and
          the result is <span className="white">1 + (4 + 6)</span> instead of
          <span className="white"> 0 + (2 + 4 + 6)</span>.
        </p>
        <h3 className="space-up">reduceRight()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The reduceRight()
          method is similar to <span className="green">reduce()</span> method,
          but here the execution starts from the right side.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>
          callbackFn(accumulator, currentValue, index, array), initialValue.
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>accumulated value
          obtained after reducing the array.
        </p>
        <p>
          This method <span className="green">doesn't mutate</span> the original
          array. If an initialValue is not provided, the{" "}
          <span className="green">last</span> element of the array is used as
          the <span className="green">initialValue</span>, and the iteration
          will start from the
          <span className="green"> second last</span> element.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.reduceRight}
        </SyntaxHighlighter>
        <h3>sort()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The sort() method{" "}
          <span className="green">sorts</span> the elements of an array as{" "}
          <span className="green">string(s)</span>. The default sort order is{" "}
          <span className="green">ascending</span>.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>
          compareFn(firstElement, secondElement).
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>reference to the same
          array, now sorted.
        </p>
        <p>
          This method <span className="green">mutates</span> the original array.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.sort}
        </SyntaxHighlighter>
        <h3>toSorted()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The toSorted()
          method is similar to <span className="green">sorted()</span> method,
          the only difference being that it doesn't mutate the original array.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>
          compareFn(firstElement, secondElement).
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>reference to the same
          array, now sorted.
        </p>
        <p>
          This method <span className="green">doesn't mutate</span> the original
          array.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.toSorted}
        </SyntaxHighlighter>
        <h3>find()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The find() method
          is used to
          <span className="green"> find</span> the{" "}
          <span className="green">first </span> element in an array that
          satisfies the provided testing function.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>
          callbackFn(element, index, array).
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>
          <span className="green">first </span>element that matches the given
          condition or <span className="green">undefined</span>.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.find}
        </SyntaxHighlighter>
        <h3>findIndex()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The findIndex()
          method is used to
          <span className="green"> find</span> the{" "}
          <span className="green">index </span> of the{" "}
          <span className="green">first </span>element in an array that
          satisfies the provided testing function.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>
          callbackFn(element, index, array).
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>
          <span className="green">index </span> of{" "}
          <span className="green">first </span>element that matches the given
          condition or <span className="green">-1</span>.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.findIndex}
        </SyntaxHighlighter>
        <h3>indexOf()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The indexOf()
          method is similar to
          <span className="green"> findIndex()</span>, but it checks each
          element for <span className="green">equality</span> with the value
          instead of using a testing function.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>
          (searchElement, fromIndex).
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>
          <span className="green">index </span> of{" "}
          <span className="green">first </span>element that matches the given
          <span className="green"> search value </span>or{" "}
          <span className="green">-1</span>.
        </p>
        <p className="space-up">
          If <span className="green">fromIndex {lessThan} 0</span>,{" "}
          <span className="green">fromIndex + array.length</span> is used. But
          the array is still searched from{" "}
          <span className="green">front to back</span>. If{" "}
          <span className="green">fromIndex {lessThan} -array.length</span> or
          the fromIndex is <span className="green">omitted</span>,{" "}
          <span className="green">0 </span>is used as fromIndex and the entire
          array is searched.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.indexOf}
        </SyntaxHighlighter>
        <h3>findLast()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The findLast()
          method is used to
          <span className="green"> find</span> the{" "}
          <span className="green">last </span> element in an array that
          satisfies the provided testing function.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>
          callbackFn(element, index, array).
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>
          <span className="green">last </span>element that matches the given
          condition or <span className="green">undefined</span>.
        </p>
        <p>
          Technically, this method traverses the array in{" "}
          <span className="green">reverse </span>order and returns the{" "}
          <span className="green">first </span>element that matches the provided
          function.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.findLast}
        </SyntaxHighlighter>
        <h3>findLastIndex()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The
          findLastIndex() method is used to
          <span className="green"> find</span> the{" "}
          <span className="green">index </span> of the{" "}
          <span className="green">last </span>element in an array that satisfies
          the provided testing function.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>
          callbackFn(element, index, array).
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>
          <span className="green">index </span> of{" "}
          <span className="green">last </span>element that matches the given
          condition or <span className="green">-1</span>.
        </p>
        <p>
          Technically, this method traverses the array in{" "}
          <span className="green">reverse </span>order and returns the{" "}
          <span className="green">index </span> of{" "}
          <span className="green">first</span> element that matches the provided
          function.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.findLastIndex}
        </SyntaxHighlighter>
        <h3>lastIndexOf()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The lastIndexOf()
          method is similar to
          <span className="green"> lastIndex()</span>, but it checks each
          element for <span className="green">equality</span> with the value
          instead of using a testing function.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>
          (searchElement, fromIndex).
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>
          <span className="green">index </span> of{" "}
          <span className="green">last </span>element that matches the given
          <span className="green"> search value </span>or{" "}
          <span className="green">-1</span>.
        </p>
        <p className="space-up">
          If <span className="green">fromIndex {lessThan} 0</span>,{" "}
          <span className="green">fromIndex + array.length</span> is used. If{" "}
          <span className="green">fromIndex {lessThan} -array.length</span>, the
          array is <span className="green">not searched</span> and
          <span className="green">-1 </span>is returned. If{" "}
          <span className="green">
            fromIndex {greaterThanEqual} array.length
          </span>{" "}
          or the fromIndex is <span className="green">omitted</span>,{" "}
          <span className="green">array.length - 1</span> is used as the
          fromIndex and the entire array is searched.
        </p>
        <p>
          Technically, this method traverses the array in{" "}
          <span className="green">reverse </span>order and returns the{" "}
          <span className="green">index </span> of the{" "}
          <span className="green">first</span> element that matches the
          searchElement.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.lastIndexOf}
        </SyntaxHighlighter>
        <h3>some()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The some() method
          is used to check if <span className="green">one or more</span>{" "}
          elements in the array pass the provided function.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>
          callbackFn(element, index, array).
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>
          <span className="green">true </span> if at least one element in the
          array passes the provided function, else{" "}
          <span className="green">false</span>.
        </p>
        <p>
          This method <span className="green">doesn't mutate</span> the original
          array.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.some}
        </SyntaxHighlighter>
        <h3>every()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The every() method
          is used to check if <span className="green">every</span> element in
          the array passes the provided function.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>
          callbackFn(element, index, array).
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>
          <span className="green">true </span> if all the element in the array
          passes the provided function, else{" "}
          <span className="green">false</span>.
        </p>
        <p>
          This method <span className="green">doesn't mutate</span> the original
          array.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.every}
        </SyntaxHighlighter>
        <h3>includes()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The includes()
          method is used to check if an array
          <span className="green"> contains</span> the given element.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>
          (searchElement, fromIndex).
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>
          <span className="green">true </span> if array contains the
          searchElement, else
          <span className="green"> false</span>.
        </p>
        <p>
          Array is always checked from the <span className="green">left</span>{" "}
          side.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.includes}
        </SyntaxHighlighter>
        <h3>fill()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The fill() method
          is used to <span className="green">modify</span> an array in a given
          <span className="green"> range</span>.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>
          (value, start, end).
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>
          the modified array.
        </p>
        <p>
          This method <span className="green">mutates</span> the original array.
          Start is <span className="green">inclusive </span>, and end is{" "}
          <span className="green">exclusive</span>.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.fill}
        </SyntaxHighlighter>
        <h3>slice()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The slice() method
          is used to create a <span className="green">shallow copy</span> of an
          array in a given
          <span className="green"> range</span>.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>
          (start, end).
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>
          shallow copy of the given array in the given range.
        </p>
        <p>
          This method <span className="green">doesn't mutate</span> the original
          array. Start is <span className="green">inclusive </span>, and end is{" "}
          <span className="green">exclusive</span>.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.slice}
        </SyntaxHighlighter>
        <h3>splice()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The splice()
          method is used to <span className="green">add</span>,{" "}
          <span className="green">remove</span>, or
          <span className="green"> replace</span> element(s) in an array.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>
          (start, deleteCount, n items to be added).
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>
          an array containing the <span className="green">deleted </span>
          elements.
        </p>
        <p>
          This method <span className="green">mutates</span> the original array.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.splice}
        </SyntaxHighlighter>
        <h3>toSpliced()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The toSpliced()
          method is similar to <span className="green">splice()</span>, the only
          difference being that it doesn't mutate the original array.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>
          (start, deleteCount, n items to be added).
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>
          an array containing the <span className="green">deleted </span>
          elements.
        </p>
        <p>
          This method <span className="green">doesn't mutate</span> the original
          array.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.toSpliced}
        </SyntaxHighlighter>
        <h3>with()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The with() method
          is used to <span className="green">change</span> an element in an
          array at a given
          <span className="green"> index</span>.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>
          (index, value).
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>a new array with the
          element at <span className="green">index </span>replaced with
          <span className="green"> value</span>.
        </p>
        <p>
          This method <span className="green">doesn't mutate</span> the original
          array. An exception is thrown if{" "}
          <span className="green">index {greaterThanEqual} array.length</span>{" "}
          or <span className="green">index {lessThan} -array.length</span>
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.with}
        </SyntaxHighlighter>
        <h3>at()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The at() method is
          used to <span className="green">fetch</span> an array element at a
          given
          <span className="green"> index</span>.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>
          (index).
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>value of array
          element at given <span className="green">index</span> if index is
          valid, else <span className="green">undefined</span>.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.at}
        </SyntaxHighlighter>
        <h3>copyWithin()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The copyWithin()
          method
          <span className="green"> shallow copies</span> a part of an array to
          another <span className="green">location</span> in the{" "}
          <span className="green">same</span> array,{" "}
          <span className="green">without</span> modifying the array's{" "}
          <span className="green">length</span>.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>
          (target, start, end).
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>the modified array.
        </p>
        <p>
          This method <span className="green">mutates</span> the original array.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.copyWithin}
        </SyntaxHighlighter>
        <h3>flat()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The flat() method
          is used to
          <span className="green"> flat</span> a nested array upto a specified.
          <span className="green"> depth</span>.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>
          (depth).
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>the new array with
          the sub-array elements concatenated into it.
        </p>
        <p>
          This method <span className="green">doesn't mutate</span> the original
          array. The default depth is <span className="green">1</span>.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.flat}
        </SyntaxHighlighter>
        <h3>flatMap()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The flatMap()
          method is a combination of
          <span className="green"> flat & map</span> methods. First the map
          method is applied, followed by the flat method with a depth of{" "}
          <span className="green">1</span>.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>
          callbackFn(element, index, array).
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>the new modified
          array.
        </p>
        <p>
          This method <span className="green">doesn't mutate</span> the original
          array. It is slightly more efficeint than calling map & flat methods
          separately.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.flatMap}
        </SyntaxHighlighter>
        <h3>isArray()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The isArray()
          method is used to check whether the passed value is an array or not.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>
          (value).
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>
          <span className="green">true </span> if value is an array, else{" "}
          <span className="green">false</span>.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.isArray}
        </SyntaxHighlighter>
        <h3>from()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The from() method
          is used to <span className="green">create</span> a new, shallow copied
          array instance from an iterable or array-like object.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>
          (arrayLike, mapFn(element, index)).
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>a new array instance.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.from}
        </SyntaxHighlighter>
        <h3>of()</h3>
        <p>
          <span className="blanchedalmond">Definition: </span>The of() method,
          shallow copied array instance from n arguments, regardless of number
          or type of arguments.
        </p>
        <p>
          <span className="blanchedalmond">Parameters: </span>
          (n elements).
        </p>
        <p>
          <span className="blanchedalmond">Returns: </span>a new array instance.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.of}
        </SyntaxHighlighter>
        <h3>Cheat Sheet</h3>
        <SyntaxHighlighter
          language="javascript"
          style={cb}
          className="codeSnippet"
        >
          {JsArrayFunctionsCS.cheatSheet}
        </SyntaxHighlighter>
      </div>
    </motion.div>
  );
};

export default JSArrayFunctions;
