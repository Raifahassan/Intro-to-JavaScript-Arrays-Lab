/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/
const food = [];  

console.log('Exercise 1 result:', food);


/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/
// Add strings to the array

foods= ["apple", "banana"]; foods.push("pizza");

foods.push("cheesburger");

console.log('Exercise 2 result:', foods);

/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/


foods= ["apple", "banana"]; 
foods.unshift("taco");
console.log('Exercise 3 result:', foods);


/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/

let fruits = ["apple", "banana", "orange", "pizza"];
console.log(fruits[3]);
let favFood = fruits[-1];
console.log('Exercise 4 result:', favFood);

/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/

foods=["pizza","cheeseburger"];
const elementToInsert="tofu";
const indexToInsert=1;
foods.splice(indexToInsert,0,elementToInsert);
console.log('Exercise 5 result:', foods);

/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/

foods = ["apple", "pizza", "orange"];
foods[1] = "sushi";
foods[2]= "cupcake"; 
console.log('Exercise 6 result:', foods);


/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/

const yummy = ["apple", "pizza","sushi", "orange", "cupcake"];
const newYummy = yummy.slice(2, 4);
console.log(newYummy);

/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/

foods = ["tofu", "apple", "banana", "orange", "banana"]; 
const soyIdx= fruits.indexOf("banana")
console.log('Exercise 8 result:', soyIdx);

/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/

const allfoods = ["apple", "banana", "orange"]; 
const allFoods = foods.join(" ->");
console.log('Exercise 9 result:', allFoods);

/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/
foods = ['apple', 'banana', 'orange', 'soup'];
var hasSoup
if (foods.includes('soup')) {
hasSoup = true
} else {
hasSoup = false
}
console.log('Exercise 10 result:', hasSoup);

/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/
let odds = [];
for (let i = 1; i <= 10; i++) {
if (i % 2 !== 0) { 
// Check if the number is odd
odds.push(i);
}
}
console.log('Exercise 11 result:', odds);

/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/
function fizzBuzz(n) {
function fizzBuzzRecursive(n) {
var results = [];
if (n === 1) {
return '1';
} else {
if (n % 3 === 0 && n % 5 === 0) {
results.push('FizzBuzz');

} else if (n % 5 === 0) {

results.push('Buzz');

} else if (n % 3 === 0) {

results.push('Fizz');

} else {
results.push(''+ n);
}
return results.concat(fizzBuzzRecursive(n - 1));
}
}
return fizzBuzzRecursive(n).reverse();
};
console.log(fizzBuzz(15));

/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
*/

const numArrays = [

[100, 5, 23],

[15, 21, 72, 9],

[45, 66],

[7, 81, 90]]

numList = numArrays[ numArrays.lenght-1]
console.log('Exercise 13 result:', numList);
/*
Exercise 14: Accessing within nested arrays

1) Retrieve the number `66` from the `numArrays` array. As part of this process
   do not alter the original `numArrays` array.

2) Assign it to a variable called `num`.

Complete Exercise 14 in the space below:
*/

numArrays = [ [1, 2, 3], [4, 66, 6], [7, 8, 9] ]; const num = nestedArray[1][1]

console.log('Exercise 14 result:', num);

/*
Exercise 15: Nested array sum

1) Use nested loops or `forEach()` methods to sum up all numbers within 
   `numArrays` nested arrays.
   
2) Assign the sum to a variable called `total`.

Hint: Be sure to declare and initialize the total variable before the iterations.

Complete Exercise 15 in the space below:
*/
function newArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {

if (Array.isArray(arr[i])) {

sum += sumNestedArray(arr[i]);

} else {
sum += arr[i];
}
}
return sum;
}
const numbers = [1, 2, [3, 4], [5, [6, 7]]];
const total = newArray(numbers);
 // Output: 28
console.log('Exercise 15 result')

