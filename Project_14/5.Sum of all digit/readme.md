Sum of Digits

This is a simple JavaScript program that calculates the sum of all digits of a number.

The script takes a number and adds each of its digits one by one.

For example:
If the number is 40 → output will be 4
If the number is 123 → output will be 6

How it works

1.The number is first converted into a string using `toString()`
2.A loop runs through each character (digit)
3.Each digit is converted back into a number
4.All digits are added together and stored in `sum`

Code

```javascript
let num = 40;
let sum = 0;

for (let i = 0; i < num.toString().length; i++) {
  sum += Number(num.toString()[i]);
}

console.log("Sum of all digits=", sum);
```

How to run

1. Open `index.html` in your browser
2. Open the console (Right click → Inspect → Console)
3. See the output printed there
