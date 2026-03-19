let num = 40;
let sum = 0;
for (let i = 0; i < num.toString().length; i++) {
  sum += Number(num.toString()[i]);
}
console.log("Sum of all digits=", sum);
