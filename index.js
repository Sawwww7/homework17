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
const randomDelayPrint=(message) => {  
  let arrLetter= message.split('')
  arrLetter.forEach((letter, i)=> setTimeout(() => console.log(letter), Math.floor((Math.random()+i) * 500)))
}
randomDelayPrint("Hello World")


/*const randomDelayPrint2=(message) => {
   const timeout= (i) => {if(i===0){return  500}  else if (i===1){return 1500} else if(i===2){return 1800} else if(i===3){return 2100}
   else if(i===4){return 2400}else if(i===5){return 34000} else{return i*1000} }
   let arrLetter= message.split('')
   arrLetter.forEach((letter, i)=> setTimeout(() => console.log(letter), timeout(i)))
 }
 randomDelayPrint2("Hello World")  */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*debounce. Створіть функцію debounce, яка приймає функцію зворотного виклику і затримку (в мілісекундах) як аргументи. 
Функція debounce повинна повертати нову функцію, яка викликає вихідну функцію тільки після того,
 як минула вказана кількість часу без викликів.
 Це дасть змогу ігнорувати часті виклики функції та виконувати її лише один раз через зазначену затримку після останнього виклику.*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function debounce(func, timeout = 1000){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
const say = () => {
  console.log("Hi");
};

const processChange = debounce(say);

processChange( )
processChange( )
processChange( )
processChange( )
processChange( )
setTimeout(processChange, 3000)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*intervalRace.Створіть функцію intervalRace, яка прийматиме масив функцій та інтервал часу t у мілісекундах.
 Функція intervalRace має викликати кожну функцію з масиву по черзі через заданий інтервал часу t. 
 Коли всі функції виконано, intervalRace має повернути масив із результатами.*/
const fn1 = () => "fn1";
const fn2 = () => "fn2";
const fn3 = () => "fn3";
const fn4 = () => "fn4";
const fn5 = () => "fn5";
const arrFunc = [fn1, fn2, fn3, fn4, fn5];

const intervalRace = (arrFunc, time) => {
  const rezultArr =[]
  arrFunc.forEach((func, i) => setTimeout(() =>{rezultArr.push(func()), console.log(func())}, (1+i)*time ))
   return rezultArr
};
console.log(intervalRace(arrFunc, 2000));
/////////////////////////////////////////////////////////////////////////
