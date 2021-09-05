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
console.log(newObj)
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
console.log(createObjectFromString(str));
///////////////////////////////////////////////////////////