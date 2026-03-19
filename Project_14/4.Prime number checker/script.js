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
