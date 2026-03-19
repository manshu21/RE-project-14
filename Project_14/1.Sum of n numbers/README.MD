Sum of Array Elements (JavaScript)

This is a simple JavaScript program that calculates the sum of all elements in an array.
The script takes an array of numbers and adds all the values together.

Example:
If the array is [1, 2, 3, 4, 5]
Output will be:

sum = 15

How it works

1.An array is stored in variable `arr`
2.A variable `sum` is initialized to 0
3.A loop runs through each element of the array
4.Each element is added to `sum`
5.Final result is printed in the console

Code

```javascript
let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log("sum=", sum);
```

How to run

1. Open `index.html` in your browser
2. Open Console (Right click → Inspect → Console)
3. Check the output
