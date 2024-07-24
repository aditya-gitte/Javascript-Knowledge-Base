let arr1 = [1,2,4,5,6,7,8];

//map
// The map method creates a new array with the results of calling a provided function on every element in the calling array.
let arr2 = arr1.map((item) => item * 2);
console.log(arr2); // [2, 4, 8, 10, 12, 14, 16]


// Filter
let arr3= arr1.filter((item) => item % 2 === 0);
console.log(arr3); // [2, 4, 6, 8]
//the filter method creates a new array with all elements that pass the test implemented by the provided function. The callback function returns a boolean that tells whether the element should be included in the new array or not.


//reduce
let arr4 = arr1.reduce((acc, item) => acc + item, 0);
console.log(arr4); // 33
//The reduce function in JavaScript is a powerful array method that processes an array to produce a single value based on a callback function. It's often used for operations like summing numbers, concatenating strings, or accumulating complex values like objects or arrays.