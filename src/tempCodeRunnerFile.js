function calculator(number=0) {
  //выбрасываем исключения
  if (isNaN(number)){
    throw new Error('number is not a number');
  }
  let calc = {};
  calc.sum = (...args) => args.reduce((prev, curr) => prev + curr, number);
  calc.dif = (...args) => args.reduce((prev, curr) => prev - curr, number);
  calc.div = (...args) => args.reduce((prev, curr) => {
    if (!curr) {
      throw new Error('division by 0');
    }
    return prev / curr;
  }, number);
  calc.mul = (...args) => args.reduce((prev, curr) => prev * curr, number);
  return calc;
}
console.log(calculator(20).div(1, 1, 2, 1));