/* ДЗ 3 - работа с исключениями и отладчиком */

/*
 Задание 1:

 1.1: Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true только если fn вернула true для всех элементов массива

 1.2: Необходимо выбрасывать исключение в случаях:
   - array не массив или пустой массив (с текстом "empty array")
   - fn не является функцией (с текстом "fn is not a function")

 Зарпещено использовать встроенные методы для работы с массивами

 Пример:
   isAllTrue([1, 2, 3, 4, 5], n => n < 10) // вернет true
   isAllTrue([100, 2, 3, 4, 5], n => n < 10) // вернет false
 */
function isAllTrue(array, fn) {
  //выбрасываем исключения
  if (!Array.isArray(array) || array.length === 0){
    throw new Error('empty array');
  }
  if (typeof(fn)!= 'function') {
    throw new Error('fn is not a function');
  }
  //выполняем функцию для каждого элемента и записываем значение в массив
  // for (const el of array) {
  //   fn(el);
  //   if (!fn(el)) {
  //     return false;
  //   };
  //   return true;
  // }
  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    if (!fn(el)) {
      return false;
    };
  }
  return true;
}
/*
 Задание 2:

 2.1: Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true если fn вернула true хотя бы для одного из элементов массива

 2.2: Необходимо выбрасывать исключение в случаях:
   - array не массив или пустой массив (с текстом "empty array")
   - fn не является функцией (с текстом "fn is not a function")

 Зарпещено использовать встроенные методы для работы с массивами

 Пример:
   isSomeTrue([1, 2, 30, 4, 5], n => n > 20) // вернет true
   isSomeTrue([1, 2, 3, 4, 5], n => n > 20) // вернет false
 */
function isSomeTrue(array, fn) {
  //выбрасываем исключения
  if (!Array.isArray(array) || array.length === 0){
    throw new Error('empty array');
  } 
  if (typeof(fn)!= 'function') {
    throw new Error('fn is not a function');
  }
  //создаем пустой массив для сбора значений функции
  let results = [];
  //выполняем функцию для каждого элемента и записываем значение в массив
  for (const el of array) {
    fn(el);
    results.push(fn(el));
  }
  //итоговый результат
  let final = false;
  //ищем положительный результат и если находим, переписываем итоговый ответ
  for (const result of results) {
    if (result == true) {
        final = true;
    }
  }
  return final;
}
/*
 Задание 3:

 3.1: Функция принимает заранее неизветсное количество аргументов, первым из которых является функция fn
 Функция должна поочередно запустить fn для каждого переданного аргумента (кроме самой fn)

 3.2: Функция должна вернуть массив аргументов, для которых fn выбросила исключение

 3.3: Необходимо выбрасывать исключение в случаях:
   - fn не является функцией (с текстом "fn is not a function")
 */
let fn = a => {
  if (a % 2 != 0) {
      throw new Error('not even');
  }
};
function returnBadArguments(fn, ...args) {
  if (typeof(fn)!= 'function') {
    throw new Error('fn is not a function');
  }
  let errors = [];
  for (const arg of args) {
    try {
      fn(arg);
    } catch (e) {
      errors.push(arg);
    } 
  }

  return errors;
}
returnBadArguments(fn, 2,3,5,6);
/*
 Задание 4:

 4.1: Функция имеет параметр number (по умолчанию - 0)

 4.2: Функция должна вернуть объект, у которого должно быть несколько методов:
   - sum - складывает number с переданными аргументами
   - dif - вычитает из number переданные аргументы
   - div - делит number на первый аргумент. Результат делится на следующий аргумент (если передан) и так далее
   - mul - умножает number на первый аргумент. Результат умножается на следующий аргумент (если передан) и так далее

 Количество передаваемых в методы аргументов заранее неизвестно

 4.3: Необходимо выбрасывать исключение в случаях:
   - number не является числом (с текстом "number is not a number")
   - какой-либо из аргументов div является нулем (с текстом "division by 0")
 */
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

/* При решении задач, пострайтесь использовать отладчик */

export {
    isAllTrue,
    isSomeTrue,
    returnBadArguments,
    calculator
};
