/*randomDelayPrint. Створіть функцію randomDelayPrint, яка прийматиме рядок message як аргумент 
і виводитиме кожну букву цього рядка з довільною затримкою від 0 до 1 секунди.
 Використовуйте setTimeout, щоб додати випадкову затримку перед виведенням кожної літери.*/
// Очікуваний результат (затримки між літерами будуть різними):
// H (невелика затримка)
// e (велика затримка)
// l (маленька затримка)
// l (маленька затримка)
// o (велика затримка)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const randomDelayPrint = (message) => {
  let arrLetter = message.split("");
  arrLetter.forEach((letter) =>
    setTimeout(
      () => console.log(letter),
      Math.floor(Math.random() * 1000)     
    )
  );
};
randomDelayPrint("Hello World");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*debounce. Створіть функцію debounce, яка приймає функцію зворотного виклику і затримку (в мілісекундах) як аргументи. 
Функція debounce повинна повертати нову функцію, яка викликає вихідну функцію тільки після того,
 як минула вказана кількість часу без викликів.
 Це дасть змогу ігнорувати часті виклики функції та виконувати її лише один раз через зазначену затримку після останнього виклику.*/
/*const expensiveOperation = () => console.log("Виконую складну операцію..."); constdebouncedExpensiveOperation = debounce(expensiveOperation, 1000);
debouncedExpensiveOperation();
debouncedExpensiveOperation();
debouncedExpensiveOperation();
// Через 1 секунду після останнього виклику "Виконую складну операцію..." має бути виведене в консоль тільки один раз.*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function debounce(func, timeout = 1000) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, timeout);
  };
}
const expensiveOperation = () => console.log("Виконую складну операцію...");
const debouncedExpensiveOperation = debounce(expensiveOperation, 1000);

debouncedExpensiveOperation();
debouncedExpensiveOperation();
debouncedExpensiveOperation();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*intervalRace.Створіть функцію intervalRace, яка прийматиме масив функцій та інтервал часу t у мілісекундах.
 Функція intervalRace має викликати кожну функцію з масиву по черзі через заданий інтервал часу t. 
 Коли всі функції виконано, intervalRace має повернути масив із результатами.*/
/////////////////////////////////////////////////////////////////////////

const fn1 = () => "fn1";
const fn2 = () => "fn2";
const fn3 = () => "fn3";
const fn4 = () => "fn4";
const fn5 = () => "fn5";
const fn6 = () => "fn6";
const arrFunc = [fn1, fn2, fn3, fn4, fn5, fn6];

const intervalRace = (arr, time) => {
  const rezultArr = [];
  arr.forEach((funcs, i) =>
    setTimeout(() => {
      rezultArr.push(funcs());
      if (i === arr.length - 1) {
        console.log("All functions executed, result array:", rezultArr);           
      }
    }, (1 + i) * time)
  );
  
};
intervalRace(arrFunc, 500);

/////////////////////////////////////////////////////////////////

const intervalRace2 = (arr, time) => {
  const rezultArr = [];
  const executeFunction = (index) => {
    if (index < arr.length) {
      setTimeout(() => {
        const result = arr[index]();
        rezultArr.push(result);
        executeFunction(index + 1);
      }, time);
    } else {
      console.log("All functions executed, result array:", rezultArr);
    }
  };
  executeFunction(0);
  
};

intervalRace2(arrFunc, 1000);
////////////////////////////////////////////
