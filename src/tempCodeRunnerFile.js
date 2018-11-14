function calculator(number=0, ...args) {
  //выбрасываем исключения
  console.log(args);
  try {
    if (isNaN(number)){
      throw new Error('number is not a number');
    } 
  } catch (error) {
    console.log(error.message);
  }
//   let number = number;
//   let args = arguments;
  let calc = {
    sum: function () {
      let summa = number;
      for (const arg of args) {
        summa += arg;
      }
      console.log(summa);
      return summa;
    },
    dif: function(){
      let difference = number;
      for (const arg of args) {
        difference -= arg;
      }
      console.log(difference);
      return difference;
    },
    div: function(){
      let division = number;
      for (const arg of args) {
        try {
         if (arg === 0){
            throw new Error('division by 0');
          } 
        } catch (error) {
          console.log(error.message);
        }
        division = division/arg;
      }
      console.log(division);
      return division;
    },
    mul: function(){
      let multiplier = number;
      for (const arg of args) {
        multiplier = multiplier*arg;
      }
      console.log(multiplier);
      return multiplier;
    }
  }
  console.log(calc.sum());
  console.log(calc.dif());
  console.log(calc.div());
  console.log(calc.mul());
  return calc;
}
calculator(1000,2,0,2,2);