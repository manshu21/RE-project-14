let prmt = Number(prompt("Enter your Number"));

// with the help of prompt we can find the factor of any number

for (let i = 1; i <= prmt; i++) {
  if (prmt % i === 0) {
    console.log("factors of number", prmt, "is", i);
  }
}
