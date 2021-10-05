//Написать функцию, которая заменила бы testObj.bar.baz.foo на 111222
const testStr = "bar.baz.foo:111222";
const testObj = {
    bar: {
        baz: {
            foo: 333444,
            foo2: 674654
        },
        boo: {
            faa: 11
        }
    },
    fee: 333
};

function replaceInObjectWithoutMutation(testObj, testStr) {
    let [keyStr, replacementValue] = testStr.split(':');
    const keyArr = keyStr.split('.');
    const replacementKey = keyArr.pop();
    function deepClone(obj) {
        const newObj = {...obj};
        for (let [key, value] of Object.entries(newObj)) {
            if (key === replacementKey){
                newObj[key] = replacementValue;
            } else {
                if (value === Object(value)) {
                    newObj[key] = deepClone(value);
                }
            }
        }
        return newObj
    }
    return deepClone(testObj)
}
const newObj = replaceInObjectWithoutMutation(testObj, testStr);
// console.log(newObj)
///////////////////////////////////////////////////////////


//Написать функцию, которая делает из объекто-подобной строки объект
let str = 'one.two.three.four'
function createObjectFromString(str) {
  let arr = str.split('.');
  let result = {}
  arr.reverse().forEach((el, i) => {
    result = {[el]: result};
  })
  return result
}
// console.log(createObjectFromString(str));
///////////////////////////////////////////////////////////
function domainName(url){
    return url.match(/(?<=[\/\/.])\w+[^\.]/i)[0]
}

// console.log(domainName("http://github.com/carbonfive/raygun"));

///////////////////////////////////////////////////////////
var a = 5;
function f(a) {
    if (a) {
        console.log(a);
        var a = 10;
    }
}
f();
///////////////////////////////////////////////////////////

/*
Написать функцию, принимающую на вход урл, по которому нужно сходить за данными для отображения и количество попыток.
Если функция не смогла за переданное количество попыток получить данные, то необходимо вывести ошибку в консоль.
 */
async function(url, attemps) {
    try {
        for (let i = 0; i < attemps; i++) {
            let response = await fetch(url);
            if (response.status === 200) {
                let result = await response.json()
                return result
            }
        }
        let error = "attemps exceeded"
        throw error
    } catch(error) {
        console.log(error)
    }
}

* Дан массив, в котором могут храниться любые типы данных.
* Нужно реализовать функцию, которая разворачивает вложенные массивы в исходный массив.
* Данные остальных типов должны остаться без изменений.

flatten([1, 'any [complex] string', null, function() {}, [1, 2, [3, '4'], 0], [], { a: 1 }]);
// возвращает
//      [1, 'any [complex] string', null, function() {}, 1, 2, 3, '4', 0, { a: 1 }]

function flatten(arr) {
    return arr.reduce((acc, current) => {
        if (Array.isArray(current)) {
            acc.push(...flatten(current))
        } else {
            acc.push(current)
        }
        return acc
    }, [])
}

// Find the minimum and maximum sum of 4 numbers out of 5 numbers in the array
// Example: findSums([-1, 1, 0, 2, 3]) -> { min: 2, max: 6}
// -> O(n)

const findSums = (array) => {
    const newArray = [...array].sort((a,b) => b - a);
    return newArray.reduce((acc, current, index) => {
        if (index === 0) {
            acc.max += current;
        } else if (index === newArray.length - 1) {
            acc.min += current;
        } else {
            acc.max += current;
            acc.min += current;
        }
        return acc
    }, {min: 0, max: 0 })
};

console.log(findSums([2, 1, 0, 2, 3]));

const findSums = (array) => {
    
}

// What will be in console?
function main() {
    var a = 10;
    function foo() {
        return a + 5
    }
    function bar() {
        var a = 4;
        return foo();
    }
    return foo() + bar() // будет 15 + 15, т.к. foo обратится к своему окружению(где была создана) и найдёт а = 10
}

console.log(main());

// Мы почта и мы так или иначе работаем с посылками: Принимаем и доставляем.
// У нас есть различные сортировочные центры, которые обрабатывают посылки и развозят их до адресатов.
// В рамках задачи мы будем работать только с весом, например килограммами.
// Нам необходимо реализовать функцию сортировочного центра,
// которая на вход принимает какой то вес посылок и отправляет их самым оптимальным транспортом,
// под оптимальностью мы понимаем что транспорт едет полностью нагруженный, минимальное количество раз.
// У каждого транспорта есть грузоподъемность, которая записана в переменной transports.
// transSort(2100) => {
//         5000: 0,
//         2000: 1,
//         1000: 0,
//         100: 1,
//         10: 0
//     });

export const transSort = (weight) => {
    const transports = [
        5000, // Поезд
        2000, // Фура
        1000, // Газель
        100, // Легковой автомобиль
        10 // Почтальон
    ];
    let result = {}
    let left = weight;
    for (let i = 0; i < transports.length; i++) {
        if (Math.floor(left / transports[i]) > 0) {
            result[transports[i]] = Math.floor(left / transports[i]);
            left = left - transports[i] * Math.floor(left/ transports[i]);
        } else {
            result[transports[i]] = 0;
        }
    }
    return result;
};
console.log(transSort(2300));
/////////////////////////////////////////////////////////////////////////////////////////////////////////
var t = {};
function func(x) {
    x = 1;
    return x;
}
func(t);
console.log(t);

//Когда аргумент передаётся в функцию, переданное значения копируются в локальные переменную.
// Обратите внимание: функция изменяет значение from, но это изменение не видно снаружи. 
// Функция всегда получает только копию значения.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////