const JsArrayFunctionsCS = {
  forEach: `const nums = [1, 2, 3];
nums.forEach(n => console.log(n)); // 1 2 3`,
  pop: `const nums = [1, 2, 3];
const removed = nums.pop();
console.log(nums); // [1, 2]
console.log(removed); // 3`,
  push: `const nums = [1, 2, 3];
nums.push(4);
console.log(nums); // [1, 2, 3, 4]
console.log(nums.push(5, 6, 7)); // 7
console.log(nums); // [1, 2, 3, 4, 5, 6, 7]
const length = nums.push([0, -1]);
console.log(nums) // [1, 2, 3, 4, 5, 6, 7, [0, -1]];
console.log(length);  // 8`,
  shift: `const nums = [1, 2, 3];
const removed = nums.shift();
console.log(nums); // [2, 3]
console.log(removed); // 1`,
  unshift: `const nums = [1, 2, 3];
console.log(nums.unshift(4, 5)); // 5
console.log(nums); // [4, 5, 1, 2, 3]`,
  concat: `const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
arr1.concat(arr2); // [1, 2, 3, 4]
arr1.concat(arr2, arr3); // [1, 2, 3, 4, 5, 6]
console.log({ arr1, arr2, arr3 }); // {arr1: [1, 2], arr2: [3, 4], arr3: [5, 6]}`,
  join: `const arr = ['fire', 'water'];
arr.join(); // fire,water
arr.join(' and '); // fire and water
['fire'].join(); // fire

// reversing a string
const s = 'apple';
s.split('').reverse().join(''); // elppa`,
  reverse: `const arr = [1, 2, 3];
const reverse = arr.reverse();
console.log(arr); // [3, 2, 1]
console.log(reverse); // [3, 2, 1]`,
  toReversed: `const arr = [1, 2, 3];
const reverse = arr.toReversed();
console.log(arr); // [1, 2, 3]
console.log(reverse); // [3, 2, 1]`,
  filter: `const nums = [8, 6, 9, 4, 2, 1, 3, 10, 12];
const filtered = nums.filter((num, index) => {
  return num % 2 === 0 && index % 2 !== 0
});
console.log(filtered); // [6, 4, 10]
console.log(nums); // [8, 6, 9, 4, 2, 1, 3, 10, 12]`,
  map: `const nums = [1, 2];
const square = nums.map(num => num * num);
console.log(square); // [1, 4]
console.log(nums); // [1, 2]`,
  reduce: `const nums = [1, 2, 3];
// with initialValue
nums.reduce((total, n) => total + (n * 2), 0); // 12

// without initialValue
nums.reduce((total, n) => total + (n * 2)); // 11`,
  reduceRight: `const nums = [1, 2, 0, 3, 4];
  
// reduceRight
nums.reduceRight((sum, n) => {
  return n === 0 ? 0 : sum + n;
}, 0); // 3

// reduce
nums.reduce((sum, n) => {
  return n === 0 ? 0 : sum + n;
}, 0); // 7`,
  sort: `const arr1 = [1, 11, 12, 20, 21245, 3];
const arr2 = ['a', 'bab', 'aa', 'ab', 'aab', 'baa', 'bc'];

// default
arr1.sort() // [1, 11, 12, 20, 21245, 3];

// ascending
arr1.sort((a, b) => a - b); // [1, 3, 11, 12, 20, 21245]

// descending
arr1.sort((a, b) => b - a); // [21245, 20, 12, 11, 3, 1]

arr2.sort(); // ['a', 'aa', 'aab', 'ab', 'baa', 'bab', 'bc']`,
  find: `const nums = [1, 2, 3, 4];
nums.find(n => n % 2 === 0); // 2
nums.find(n => n % 5 === 0); // undefined`,
  findIndex: `const nums = [1, 2, 3, 4];
nums.findIndex(n => n % 2 === 0); // 1
nums.findIndex(n => n % 5 === 0); // -1`,
  indexOf: `const nums = [1, 2 , 3, 1];
nums.indexOf(1); // 0
nums.indexOf(1, 1); // 3
nums.indexOf(0); // -1
nums.indexOf(1, 4); -1
nums.indexOf(1, -1); // 3,
nums.indexOf(1, -4); // 0
nums.indexOf(1, -5); // 0`,
  findLast: `const nums = [1, 2, 3, 4];
nums.findLast(n => n % 2 === 0); // 4
nums.findLast(n => n % 5 === 0); // undefined`,
  findLastIndex: `const nums = [1, 2, 3, 4];
nums.findLastIndex(n => n % 2 === 0); // 3
nums.findLastIndex(n => n % 5 === 0); // -1`,
  lastIndexOf: `const nums = [1, 2 , 3, 1];
nums.lastIndexOf(1); // 3
nums.lastIndexOf(1, 1); // 0
nums.lastIndexOf(0); // -1
nums.lastIndexOf(1, 3); // 3
nums.lastIndexOf(1, -4); // 0
nums.lastIndexOf(1, 10); // 3,
nums.lastIndexOf(1, -5); // -1`,
  some: `const nums = [3,5,9];
nums.some(n => n % 2 === 0); // false
nums.some(n => n % 3 === 0); // true`,
  every: `const nums = [5, 10, 15];
nums.every(n => n % 5 === 0); // true
nums.every(n => n % 3 === 0); // false`,
  includes: `const nums = [1, 2, 3];
nums.includes(1); // true
nums.includes(1, 1); // false
nums.includes(1, -1); // false
nums.includes(1, -3); // true
nums.includes(1, -10); // true`,
  fill: `const arr = new Array(5);
arr.fill(0); // [0, 0, 0, 0, 0]
arr.fill(1, 2); // [0, 0, 1, 1, 1]
arr.fill(2, 3, 4); // [0, 0, 1, 2, 1]
arr.fill(-1, 1, 1); // [0, 0, 1, 2, 1]`,
  slice: `const arr = [1, 2, 3, 4, 5];
arr.slice(); // [1, 2, 3, 4, 5]
arr.slice(2); // [3, 4, 5]
arr.slice(1, -1); // [2, 3, 4]
arr.slice(0, 3); // [1, 2, 3]
arr.slice(-2); // [4, 5]`,
  splice: `const arr = [1, 2, 3, 4, 5];
  
// adding elements
arr.splice(0, 0, -1, 0); // return: [], arr: [-1, 0, 1, 2, 3, 4, 5]
arr.splice(-2, 0, -3); // return: [], arr: [-1, 0, 1, 2, 3, -3, 4, 5]

// replacing elements
arr.splice(0, 1, 5); // return: [-1], arr: [5, 0, 1, 2, 3, -3, 4, 5]
arr.splice(3, 2, 0, 0, 0); // return: [2, 3], arr: [5, 0, 1, 0, 0, 0, -3, 4, 5]
arr.splice(-1, 2, -5); // return: [5], arr: [5, 0, 1, 0, 0, 0, -3, 4, -5]

// removing elements
arr.splice(0, 5); // return: [5, 0, 1, 0, 0], arr: [0, -3, 4, -5]
arr.splice(0, arr.length); // return: [0, -3, 4, -5], arr: []`,
  with: `const arr = [1, 2, 3, 4];
arr.with(0, -1); // [-1, 2, 3, 4];
arr.with(-4, -4); // [-4, 2, 3, 4];
arr.with(4, 4); // error
arr.with(-5, -1); // error`,
  at: `const arr = [1, 2, 3];
arr.at(0); // 1
arr.at(-2); // 2
arr.at(3); // undefined
arr.at(-4); // undefined`,
  copyWithin: `const arr = [1, 2, 3, 4];
arr.copyWithin(1, 0, 1); // [1, 1, 3, 4]
arr.copyWithin(0, 1, 3); // [1, 3, 3, 4]
arr.copyWithin(3, 0); // [1, 3, 3, 1]
arr.copyWithin(-3, 0); // [1, 1, 3, 3]`,
  flat: `const arr = [1, 2, [3, 4, [5, 6, [7]]], 8];
arr.flat(); // [1, 2, 3, 4, [5, 6, [7]], 8]
arr.flat(2); // [1, 2, 3, 4, 5, 6, [7], 8]
arr.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7, 8]`,
  flatMap: `const arr = [1, 2, [3, 4], 5];
arr.flatMap((ele) => Array.isArray(ele) === false ? ele * 2 : ele); // [2, 4, 3, 4, 10]`,
  isArray: `Array.isArray([1, 2]); // true
Array.isArray([]); // true
Array.isArray(1); // false`,
  from: `Array.from('abc'); // ['a', 'b', 'c']
Array.from([1, 2, 3], (n) => n * 2); // [2, 4, 6]
Array.from({ length: 3 }, (_, i) => i); // [0, 1, 2]

// from map
const map = new Map([[1, 'a'], [2, 'b']]);
Array.from(map.keys()); // [1, 2]
Array.from(map.values()); // ['a', 'b']`,
  of: `Array.of(1); // [1]
Array.of(1, 2, 3); // [1, 2, 3]

// Array
Array(1); // [empty]`,
  toSpliced: `const arr = [1, 2, 3];
arr.toSpliced(0, 0, 0); // return: [0, 1, 2, 3], arr: [1, 2, 3]`,
  toSorted: `const arr = [1, 2 , 0];
const sorted = arr.toSorted((a, b) => a - b);
console.log(sorted); // [0, 1, 2]
console.log(arr); // [1, 2, 0]`,
  cheatSheet: `[1, 2, 3].forEach(n => console.log(n)); // 1 2 3
[1, 2, 3].pop(); // 3, arr: [1, 2]
[1, 2, 3].push(4); // 4, arr: [1, 2, 3, 4]
[1, 2, 3].shift(); // 1, arr: [2, 3]
[1, 2, 3].unshift(0); // 4, arr: [0, 1, 2, 3]
[1, 2].concat([3]); // [1, 2, 3]
[1, 2].join(' and '); // '1 and 2'
[1, 2, 3].reverse(); // [3, 2, 1], arr: [3, 2, 1]
[1, 2, 3].toReversed(); // [3, 2, 1], arr: [1, 2, 3]
['', false, null, undefined, 'a', 5, true].filter(Boolean); // ['a', 5, true]
[1, 2, 3].map(n => n * 2); // [2, 4, 6]
[1, 2, 0, 4].reduce((total, n) => n === 0 ? 0 : total + n, 0); // 4
[1, 2, 0, 3].reduceRight((total, n) => n === 0 ? 0 : total + n, 0); // 3
[1, 2, 11, 3].sort(); // [1, 11, 2, 3], arr: [1, 11, 2, 3]
[1, 2, 11, 3].toSorted(); // [1, 11, 2, 3], arr: [1, 2, 11, 3]
[1, 2, 3].find(n => n % 2 === 0); // 2
[1, 2, 3].findIndex(n => n % 2 === 0); // 1
[1, 2, 3, 1].indexOf(1, -2); // 3
[1, 2, 3].findLast(n => n % 2 !== 0); // 3
[1, 2, 3].findLastIndex(n => n % 2 !== 0); // 2
[1, 2, 3, 1].lastIndexOf(1, -2); // 0
[1, 2, 3].some(n => n % 2 === 0); // true
[1, 2, 3].every(n => n % 2 === 0); // false
[1, 2, 3].includes(1, 1); // false
[1, 2, 3].fill(0, 1, 2); // [1, 0, 3]
[1, 2, 3].slice(1); // [2, 3]
[1, 2, 3].splice(1, 1, 0); // [2], arr: [1, 0, 3]
[1, 2, 3].toSpliced(1, 1, 0); // [2], arr: [1, 2, 3]
[1, 2, 3].with(1, 0); // [1, 0, 3]
[1, 2, 3].at(-2); 2
[1, 2, 3].copyWithin(1, 0); // [1, 1, 2]
[1, 2, [3, [4]]].flat(Infinity); // [1, 2, 3, 4]
[1, 2, [3, 4], 5].flatMap(n => n * 2); // [2, 4, NaN, 10]
Array.isArray([1, 2]); // true
Array.from('abc'); // ['a', 'b', 'c']
Array.of(1, 2, 3); // [1, 2, 3]`,
};

export default JsArrayFunctionsCS;
