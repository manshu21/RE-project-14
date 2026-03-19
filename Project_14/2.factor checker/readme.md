Factors Finder (JavaScript)

This is a small beginner-friendly JavaScript project that finds and prints all the factors of a number entered by the user.

When the page loads in a browser, it asks the user to enter a number using a prompt box. After entering the number, the script calculates all the factors of that number and prints them in the browser console.

A factor is any number that divides the given number without leaving a remainder.

Example:
If the input is 12, the output will be:

1, 2, 3, 4, 6, 12

How it works

1. The browser shows a prompt asking for a number.
2. The input is converted into a number using `Number()`.
3. A loop runs from 1 to the entered number.
4. For each value, it checks:
   - If the number is divisible (`number % i === 0`)

5. If yes, that value is a factor and gets printed.

Code Used

```javascript
let prmt = Number(prompt("Enter your Number"));

for (let i = 1; i <= prmt; i++) {
  if (prmt % i === 0) {
    console.log("factors of number", prmt, "is", i);
  }
}
```

How to run

1. Open the project folder.
2. Double-click `index.html` or open it in any browser.
3. Enter a number in the prompt.
4. Open the browser console (Right click → Inspect → Console).
5. View the factors printed there.
