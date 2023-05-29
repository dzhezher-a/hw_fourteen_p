function sumFunc(firstNumber) {
  return function (secondNumber) {
    return (firstNumber += secondNumber);
  };
}

let sum = sumFunc(0);

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
