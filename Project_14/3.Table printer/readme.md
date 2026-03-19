Multiplication Table

This is a simple JavaScript program that prints the multiplication table of a number.
The script takes a number and prints its table from 1 to 10 in the console.

For example:
If the number is 2, the output will be:

2*1=2
2*2=4
2*3=6
... up to 2*10=20

How it works

1.A number is stored in variable `n`
2.A loop runs from 1 to 10
3.On each iteration, it multiplies the number with the loop value
4.The result is printed in table format

Code

```javascript
let n = 2;

for (let i = 1; i <= 10; i++) {
  console.log(n + "*" + i + "=" + n * i);
}
```

How to run
1.Open `index.html` in a browser
2.Open console (Right click → Inspect → Console)
3.View the multiplication table output
