Prime Number Check

This is a simple JavaScript program to check whether a given number is prime or not.
The script checks if a number can be divided evenly by any number other than 1 and itself.

- If it can be divided → Not Prime
- If it cannot be divided → Prime

Example:

- 7 → Prime
- 10 → Not Prime

How it works

1. A number is stored in variable `num`
2. Assume the number is prime (`isPrime = true`)
3. Run a loop from 2 to `num - 1`
4. Check if the number is divisible:
   - If yes → mark it as not prime and stop the loop

5. After the loop, print the result

Code

```javascript
let num = 153;
let isPrime = true;

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime && num > 1) {
  console.log("Prime");
} else {
  console.log("The number is Prime :", isPrime && num > 1);
}
```

How to run

1. Open `index.html` in a browser
2. Open Console (Right click → Inspect → Console)
3. Check the output
