Armstrong Number Check

This is a simple JavaScript program to check whether a number is an Armstrong number or not.

What it does
The program takes a number and checks if the sum of the cubes of its digits is equal to the original number.

Example:

- 153 → Armstrong Number
- 123 → Not Armstrong

How it works

- Store the number in `num`
- Keep a copy in `original`
- Extract each digit using `% 10`
- Cube each digit and add to `sum`
- Remove last digit using `Math.floor(num / 10)`
- Compare `sum` with original number

## Code

```javascript
let num = 153;
let original = num;
let sum = 0;

while (num > 0) {
  let digit = num % 10;
  sum += digit * digit * digit;
  num = Math.floor(num / 10);
}

if (sum === original) {
  console.log("Is it an Armstrong Number?", "yes");
} else {
  console.log("Is it an Armstrong Number?", "no");
}
```

How to run
1.Open `index.html` in browser
2.Open Console (Right click → Inspect → Console)
3.Check the output
