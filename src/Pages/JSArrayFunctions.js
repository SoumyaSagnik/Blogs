import Code from "../components/Code";
import { motion } from "framer-motion";

const JSArrayFunctions = () => {
  const leftCurly = "{";
  const rightCurly = "}";
  const left = "(";
  const right = ")";
  const greater = ">";
  const arrow = "=>";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="content page">
        <h1>JavaScript Array Functions</h1>
        <p>
          JavaScript has several built-in functions that can be used to
          manipulate arrays. Some of the most commonly used array functions are
          as follows.
        </p>
        <h3>forEach()</h3>
        <p className="space-bottom">
          It is commonly used for <span className="green">iterating</span> over
          an array.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              const nums = <span className="yellow">[1,2,3]</span>;
            </p>
            <p>
              nums.<span className="pink">forEach</span>
              <span className="yellow">{left}</span>n {arrow} console.
              <span className="pink">log</span>
              (n)
              <span className="yellow">{right}</span>;
            </p>
            <p className="space-top">Output</p>
            <p className="white">1</p>
            <p className="white">2</p>
            <p className="white">3</p>
          </div>
        </pre>
        <h3>pop()</h3>
        <p className="space-bottom">
          <span className="green">Removes</span> the{" "}
          <span className="green">last</span> element from an array.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              const nums = <span className="yellow">[1,2,3]</span>;
            </p>
            <p>
              nums.<span className="pink">pop</span>
              <span className="yellow">
                {left}
                {right}
              </span>
              ;
            </p>
            <p>
              console.<span className="pink">log</span>
              (nums);
            </p>
            <p className="space-top">Output</p>
            <p className="white">[1,2]</p>
          </div>
        </pre>

        <h3>push()</h3>
        <p className="space-bottom">
          <span className="green">Adds</span> an element to the{" "}
          <span className="green">end</span> of an array.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              const nums = <span className="yellow">[1,2,3]</span>;
            </p>
            <p>
              nums.
              <span className="pink">push</span>
              <span className="yellow">{left}</span>4
              <span className="yellow">{right}</span>;
            </p>
            <p>
              console.<span className="pink">log</span>
              (nums);
            </p>
            <p className="space-top">Output</p>
            <p className="white">[1,2,3,4]</p>
          </div>
        </pre>
        <h3>shift()</h3>
        <p className="space-bottom">
          <span className="green">Removes</span> the{" "}
          <span className="green">first</span> element from an array.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              const nums = <span className="yellow">[1,2,3]</span>;
            </p>
            <p>
              nums.
              <span className="pink">shift</span>
              <span className="yellow">{left}</span>
              <span className="yellow">{right}</span>;
            </p>
            <p>
              console.<span className="pink">log</span>
              (nums);
            </p>
            <p className="space-top">Output</p>
            <p className="white">[2,3]</p>
          </div>
        </pre>
        <h3>unshift()</h3>
        <p className="space-bottom">
          <span className="green">Adds</span> an element to the{" "}
          <span className="green">beginning</span> of an array.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              const nums = <span className="yellow">[1,2,3]</span>;
            </p>
            <p>
              nums.
              <span className="pink">unshift</span>
              <span className="yellow">{left}</span>0
              <span className="yellow">{right}</span>;
            </p>
            <p>
              console.<span className="pink">log</span>
              (nums);
            </p>
            <p className="space-top">Output</p>
            <p className="white">[0,1,2,3]</p>
          </div>
        </pre>
        <h3>concat()</h3>
        <p className="space-bottom">
          <span className="green">Combines</span> two or more arrays and returns
          a <span className="green">new</span> array.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              const n1 = <span className="yellow">[1,2]</span>;
            </p>
            <p>
              const n2 = <span className="yellow">[3,4]</span>;
            </p>
            <p>
              const combined = n1.<span className="pink">concat</span>
              <span className="yellow">{left}</span>n2
              <span className="yellow">{right}</span>;
            </p>
            <p>
              console.<span className="pink">log</span>
              (combined);
            </p>
            <p className="space-top">Output</p>
            <p className="white">[1,2,3,4]</p>
          </div>
        </pre>
        <h3>join()</h3>
        <p className="space-bottom">
          Converts an array to a <span className="green">string</span> and
          separates the elements with a specified{" "}
          <span className="green">delimiter</span>. It doesn't change the
          original array. Default delimiter is{" "}
          <span className="green">comma (,)</span>. It returns the converted
          array as a <span className="green">string</span>.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              const nums = <span className="yellow">[1,2]</span>;
            </p>
            <p>
              const numsString = nums.<span className="pink">join</span>
              <span className="yellow">()</span>;
            </p>
            <p className="space-top">
              const names = <span className="yellow">["John", "Sally"]</span>;
            </p>
            <p>
              const namesString = names.<span className="pink">join</span>
              <span className="yellow">(</span>" and "
              <span className="yellow">)</span>;
            </p>
            <p className="space-top">
              console.<span className="pink">log</span>
              (numsString);
            </p>
            <p>
              console.<span className="pink">log</span>
              (namesString);
            </p>
            <p className="space-top">Output</p>
            <p className="white">1,2</p>
            <p className="white">John and Sally</p>
          </div>
        </pre>
        <h3>reverse()</h3>
        <p className="space-bottom">
          <span className="green">Reverses</span> the order of elements in an
          array. It <span className="green">overwrites</span> the original
          array.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              const nums = <span className="yellow">[1,2,3]</span>;
            </p>
            <p>
              const reverse = nums.<span className="pink">reverse</span>
              <span className="yellow">()</span>;
            </p>
            <p className="space-top">
              console.<span className="pink">log</span>(nums);
            </p>
            <p>
              console.<span className="pink">log</span>(reverse);
            </p>
            <p className="space-top">Output</p>
            <p className="white">[3, 2, 1]</p>
            <p className="white">[3, 2, 1]</p>
          </div>
        </pre>
        <h3>filter()</h3>
        <p className="space-bottom">
          It is used to <span className="green">create</span> a{" "}
          <span className="green">new array</span> with all elements that{" "}
          <span className="green">pass</span> the test implemented by the
          provided function. The function is called for each element in the
          array. It <span className="green">doesn't change</span> the original
          array. It returns a <span className="green">new array</span> with the
          elements that pass the test.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#ages above 18.</p>
            <p>
              const ages = <span className="yellow">[12,19,21,6,16]</span>;
            </p>
            <p>
              const above18 = ages.<span className="pink">filter</span>
              <span className="yellow">(</span>age{" "}
              <span className="grn">{arrow}</span> age {greater} 18{" "}
              <span className="yellow">)</span>;
            </p>
            <p className="space-top">
              console.<span className="pink">log</span>(above18);
            </p>
            <p>
              console.<span className="pink">log</span>(ages);
            </p>
            <p className="space-top">Output</p>
            <p className="white">[19,21]</p>
            <p className="white">[12,19,21,6,16]</p>
          </div>
        </pre>
        <h3>map()</h3>
        <p className="space-bottom">
          It is used to <span className="green">create</span> a{" "}
          <span className="green">new array</span> with the results of calling a
          provided function on <span className="green">every</span> element in
          the calling array. It <span className="green">doesn't change</span>{" "}
          the original array. It returns a new array with the elements modified
          by the callback function. It is useful to transform an array of items
          into a new array with the same number of items, but with the{" "}
          <span className="green">desired transformation</span> applied to each
          item.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#Square of each element in an array.</p>
            <p>
              const nums = <span className="yellow">[1,2,3]</span>;
            </p>
            <p>
              const square = nums.<span className="pink">map</span>
              <span className="yellow">(</span>n{" "}
              <span className="grn">{arrow}</span> n * n
              <span className="yellow">)</span>;
            </p>
            <p className="space-top">
              console.<span className="pink">log</span>(square);
            </p>
            <p>
              console.<span className="pink">log</span>(nums);
            </p>
            <p className="space-top">Output</p>
            <p className="white">[1,4,9]</p>
            <p className="white">[1,2,3]</p>
          </div>
        </pre>
        <h3>sort()</h3>
        <p className="space-bottom">
          By default, it sorts values as <span className="green">strings</span>.
          When sorting numbers, it can be used along with a{" "}
          <span className="green">compare function</span> which takes in{" "}
          <span className="green">two</span> params which are the two values
          being compared at a given iteration. It{" "}
          <span className="green">changes</span> the original array and returns
          the sorted array.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#Sorting strings.</p>
            <p>
              const names ={" "}
              <span className="yellow">["John", "Sally", "Carter"]</span>;
            </p>
            <p>
              names.<span className="pink">sort</span>
              <span className="yellow">()</span>;
            </p>
            <p>
              console.<span className="pink">log</span>(names);
            </p>
            <p className="space-top">Output</p>
            <p className="white">['Carter', 'John', 'Sally']</p>
          </div>
        </pre>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#Sorting numbers.</p>
            <p>
              const nums = <span className="yellow">[5,11,9]</span>;
            </p>
            <p>
              const nums2 = <span className="yellow">[3,9,8]</span>;
            </p>
            <p className="space-top">
              const ascending = nums.<span className="pink">sort</span>
              <span className="yellow">(</span>
              <span className="red">(</span>a, b<span className="red">)</span>{" "}
              <span className="grn">{arrow}</span> a - b
              <span className="yellow">)</span>;
            </p>
            <p>
              const descending = nums2.<span className="pink">sort</span>
              <span className="yellow">(</span>
              <span className="red">(</span>a, b<span className="red">)</span>{" "}
              <span className="grn">{arrow}</span> b - a
              <span className="yellow">)</span>;
            </p>
            <p className="space-top">
              console.<span className="pink">log</span>(ascending);
            </p>
            <p>
              console.<span className="pink">log</span>(descending);
            </p>
            <p className="space-top">Output</p>
            <p className="white">[5,9,11]</p>
            <p className="white">[9,8,3]</p>
            <p className="space-top">Explanation</p>
            <p>If the result is negative, a is sorted before b.</p>
            <p>If the result is positive, b is sorted before a.</p>
            <p>If the result is 0, no change.</p>
          </div>
        </pre>
        <h3>reduce()</h3>
        <p className="space-bottom">
          It is used to apply a function to <span className="green">each</span>{" "}
          element in an array and <span className="green">reduce</span> the
          array to a <span className="green">single</span> value. It takes{" "}
          <span className="green">two</span> parameters:{" "}
          <span className="green">callback function</span> and{" "}
          <span className="green">initial value of accumulator</span>. The
          callback function takes <span className="green">two</span> parameters:{" "}
          <span className="green">accumulator</span> and{" "}
          <span className="green">current value</span>. It{" "}
          <span className="green">doesn't change</span> the original array. It
          returns a <span className="green">single</span> value that is the
          result of the reduction.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#Sum of all elements in an array.</p>
            <p>
              const nums = <span className="yellow">[1,2,3]</span>;
            </p>
            <p>
              const sum = nums.<span className="pink">reduce</span>
              <span className="yellow">(</span>
              <span className="red">(</span>total, n
              <span className="red">)</span>{" "}
              <span className="grn">{arrow}</span> total + n, 0
              <span className="yellow">)</span>;
            </p>
            <p>
              console.<span className="pink">log</span>(sum);
            </p>
            <p className="space-top">Output</p>
            <p className="white">6</p>
            <p className="space-top">Explanation</p>
            <p>total: accumulator</p>
            <p>n: current value</p>
            <p>0: initial value of accumulator</p>
          </div>
        </pre>
        <h3>find()</h3>
        <p className="space-bottom">
          It returns the <span className="green">first</span> element in an
          array that satisfies the provided test condition. It{" "}
          <span className="green">doesn't change</span> the original array. If{" "}
          <span className="green">none</span> of the items in the array satisfy
          the condition, it returns <span className="green">undefined</span>.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              const nums = <span className="yellow">[3,9,8]</span>;
            </p>
            <p>
              const divisibleBy2 = nums.<span className="pink">find</span>
              <span className="yellow">(</span>n{" "}
              <span className="grn">{arrow}</span> n % 2{" "}
              <span className="red">===</span> 0
              <span className="yellow">)</span>;
            </p>
            <p>
              const divisibleBy5 = nums.<span className="pink">find</span>
              <span className="yellow">(</span>n{" "}
              <span className="grn">{arrow}</span> n % 5{" "}
              <span className="red">===</span> 0
              <span className="yellow">)</span>;
            </p>
            <p className="space-top">
              console.<span className="pink">log</span>(divisibleBy2);
            </p>
            <p>
              console.<span className="pink">log</span>(divisibleBy5);
            </p>
            <p className="space-top">Output</p>
            <p className="white">8</p>
            <p className="white">undefined</p>
          </div>
        </pre>
        <h3>some()</h3>
        <p className="space-bottom">
          It is used to test whether at <span className="green">least one</span>{" "}
          element in an array passes a given condition. It{" "}
          <span className="green">doesn't change</span> the original array. It
          returns a <span className="green">boolean</span> value.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              const nums = <span className="yellow">[3,5,9]</span>;
            </p>
            <p>
              const divisibleBy2 = nums.<span className="pink">some</span>
              <span className="yellow">(</span>n{" "}
              <span className="grn">{arrow}</span> n % 2{" "}
              <span className="red">=== </span>0
              <span className="yellow">)</span>;
            </p>
            <p>
              const divisibleBy3 = nums.<span className="pink">some</span>
              <span className="yellow">(</span>n{" "}
              <span className="grn">{arrow}</span> n % 3{" "}
              <span className="red">=== </span>0
              <span className="yellow">)</span>;
            </p>
            <p className="space-top">
              console.<span className="pink">log</span>(divisibleBy2);
            </p>
            <p>
              console.<span className="pink">log</span>(divisibleBy3);
            </p>
            <p className="space-top">Output</p>
            <p className="white">false</p>
            <p className="white">true</p>
          </div>
        </pre>
        <h3>every()</h3>
        <p className="space-bottom">
          It is used to test whether <span className="green">all</span> the
          elements in an array pass a given condition. It{" "}
          <span className="green">doesn't change</span> the original array. It
          returns a <span className="green">boolean</span> value.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              const nums = <span className="yellow">[5,10,15]</span>;
            </p>
            <p>
              const divisibleBy5 = nums.<span className="pink">every</span>
              <span className="yellow">(</span>n{" "}
              <span className="grn">{arrow}</span> n % 5{" "}
              <span className="red">=== </span>0
              <span className="yellow">)</span>;
            </p>
            <p>
              const divisibleBy3 = nums.<span className="pink">every</span>
              <span className="yellow">(</span>n{" "}
              <span className="grn">{arrow}</span> n % 3{" "}
              <span className="red">=== </span>0
              <span className="yellow">)</span>;
            </p>
            <p className="space-top">
              console.<span className="pink">log</span>(divisibleBy5);
            </p>
            <p>
              console.<span className="pink">log</span>(divisibleBy3);
            </p>
            <p className="space-top">Output</p>
            <p className="white">true</p>
            <p className="white">false</p>
          </div>
        </pre>
        <h3>includes()</h3>
        <p className="space-bottom">
          It is used to check if an array{" "}
          <span className="green">contains</span> a specified value. We can
          mention the <span className="green">starting index</span> of the
          checking. By default the start index is{" "}
          <span className="green">0</span>. It{" "}
          <span className="green">doesn't change</span> the original array. It
          returns a <span className="green">boolean</span> value.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              const nums = <span className="yellow">[5,1,9]</span>;
            </p>
            <p>
              const includes5 = nums.<span className="pink">includes</span>
              <span className="yellow">(</span>5
              <span className="yellow">)</span>;
            </p>
            <p>
              const includes5StartingIndex1 = nums.
              <span className="pink">includes</span>
              <span className="yellow">(</span>5,1
              <span className="yellow">)</span>;
            </p>
            <p className="space-top">
              console.<span className="pink">log</span>(includes5);
            </p>
            <p>
              console.<span className="pink">log</span>
              (includes5StartingIndex1);
            </p>
            <p className="space-top">Output</p>
            <p className="white">true</p>
            <p className="white">false</p>
          </div>
        </pre>
        <h3>fill()</h3>
        <p className="space-bottom">
          It is used to fill all the elements of an array from a{" "}
          <span className="green">start</span> index to an{" "}
          <span className="green">end</span> index with a{" "}
          <span className="green">static</span> value. It{" "}
          <span className="green">changes</span> the original array and returns
          the <span className="green">modified</span> array.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              const n1 = <span className="yellow">[1,2,3]</span>
            </p>
            <p>
              const n2 = <span className="yellow">[4,5,6]</span>
            </p>
            <p>
              const n3 = <span className="yellow">[7,8,9]</span>
            </p>
            <p className="space-top">
              const r1 = n1.<span className="pink">fill</span>
              <span className="yellow">(</span>0
              <span className="yellow">)</span>;
            </p>
            <p>
              const r2 = n2.<span className="pink">fill</span>
              <span className="yellow">(</span>0,1
              <span className="yellow">)</span>;
            </p>
            <p>
              const r3 = n3.<span className="pink">fill</span>
              <span className="yellow">(</span>0,1,2
              <span className="yellow">)</span>;
            </p>
            <p className="space-top">
              console.<span className="pink">log</span>(r1);
            </p>
            <p>
              console.<span className="pink">log</span>(r2);
            </p>
            <p>
              console.<span className="pink">log</span>(r3);
            </p>
            <p className="space-top">Output</p>
            <p className="white">[0,0,0]</p>
            <p className="white">[4,0,0]</p>
            <p className="white">[7,0,9]</p>
          </div>
        </pre>
        <h3>slice()</h3>
        <p className="space-bottom">
          Returns a <span className="green">shallow copy</span> of a portion of
          an array. It <span className="green">doesn't change</span> the
          original array. It returns a new array with the extracted elements.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              const nums = <span className="yellow">[1,2,3,4]</span>;
            </p>
            <p>
              const n1 = nums.<span className="pink">slice</span>
              <span className="yellow">()</span>;
            </p>
            <p>
              const n2 = nums.<span className="pink">slice</span>
              <span className="yellow">(</span>1
              <span className="yellow">)</span>;
            </p>
            <p>
              const n3 = nums.<span className="pink">slice</span>
              <span className="yellow">(</span>1,3
              <span className="yellow">)</span>;
            </p>
            <p className="space-top">
              console.<span className="pink">log</span>(n1);
            </p>
            <p>
              console.<span className="pink">log</span>(n2);
            </p>
            <p>
              console.<span className="pink">log</span>(n3);
            </p>
            <p className="space-top">Output</p>
            <p className="white">[1,2,3,4]</p>
            <p className="white">[2,3,4]</p>
            <p className="white">[2,3]</p>
          </div>
        </pre>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#Last 3 numbers of an array.</p>
            <p>
              const nums = <span className="yellow">[1,2,3,4,5]</span>;
            </p>
            <p>
              const last3 = nums.<span className="pink">slice</span>
              <span className="yellow">(</span>-3
              <span className="yellow">)</span>;
            </p>
            <p>
              console.<span className="pink">log</span>(last3);
            </p>
            <p className="space-top">Output</p>
            <p className="white">[3,4,5]</p>
          </div>
        </pre>
        <h3>splice()</h3>
        <p className="space-bottom">
          It is used to <span className="green">add</span> or{" "}
          <span className="green">remove</span> elements from an array. It has{" "}
          <span className="green">3</span> parameters. The first parameter is
          the <span className="green">index</span>. The second parameter is the{" "}
          <span className="green">number of elements to remove</span>. The third
          parameter is the element to be <span className="green">added</span>.
          It <span className="green">changes</span> the original array and
          returns the array containing the{" "}
          <span className="green">deleted</span> elements.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              const n1 = <span className="yellow">[1,2,3]</span>;
            </p>
            <p>
              const n2 = <span className="yellow">[1,2,3,4,5]</span>;
            </p>
            <p className="space-top">
              const r1 = n1.<span className="pink">splice</span>
              <span className="yellow">(</span>2,0,4
              <span className="yellow">)</span>;
            </p>
            <p>
              const r2 = n2.<span className="pink">splice</span>
              <span className="yellow">(</span>1,2
              <span className="yellow">)</span>;
            </p>
            <p className="space-top">
              console.<span className="pink">log</span>(n1);
            </p>
            <p>
              console.<span className="pink">log</span>(n2);
            </p>
            <p>
              console.<span className="pink">log</span>(r1);
            </p>
            <p>
              console.<span className="pink">log</span>(r2);
            </p>
            <p className="space-top">Output</p>
            <p className="white">[1,2,4,3]</p>
            <p className="white">[1,4,5]</p>
            <p className="white">[]</p>
            <p className="white">[2,3]</p>
          </div>
        </pre>
      </div>
    </motion.div>
  );
};

export default JSArrayFunctions;
