const { 
  split,
  reverse,
  join,
  map,
  filter,
  match,
  reduce,
  curry
} = require('ramda');

// Упражнение 1
//==============
// Проведите рефакторинг и избавьтесь от всех аргументов путём частичного применения функции.

const test_str = 'Hello my name is German!';

const words = str => split(' ', str);

const _words = split(' ');

console.log(`words -> ${words(test_str)};`);
console.log(`_words -> ${_words(test_str)};`);

// Упражнение 1a
//==============
// Воспользуйтесь функцией map, чтобы создать новую функцию words, которая будет работать с массивами строк.

const test_str_arr = [test_str, test_str, test_str, test_str];

const wordArr = map(_words);

console.log(`wordsArr -> ${wordArr(test_str_arr)};`);

// Упражнение 2
//==============
// Проведите рефакторинг и избавьтесь от всех аргументов путём частичного применения функции.

const test_q = 'Query is query for db!';

const filterQs = xs => filter (
  x =>  match(/q/i, x), 
  xs
);

const _filterQs = filter(match(/q/i));

console.log(`filterQs -> ${filterQs(test_q)};`);
console.log(`_filterQs -> ${_filterQs(test_q)};`);

// Упражнение 3
//==============
// Воспользуйтесь функцией _keepHighest чтобы отрефакторить функцию max.
// Функция max не должна принимать аргументов.

// Не меняйте:
var _keepHighest = function(x,y){ return x >= y ? x : y; };

var max = reduce(_keepHighest, 0);

console.log(max([2, 3]));


const slice = curry((from, to, arr) => arr.slice(from, to));

console.log(slice(2, 4, [1, 2, 3, 4]));


//compose function 

const inc = x => ++x;

const double = x => x * 2;

const triple = x => x * 3;

const compose = (...funcs) => (...params) => {
  return funcs.reduceRight((res, f) => f(res), ...params); 
};

var newf_1 = compose(inc, double, inc, triple, inc);

console.log(newf_1(2));

const _split = split('');
const _join = join('');

const newf_2 = compose(_join ,reverse, _split);

console.log(newf_2('Hello world!'));