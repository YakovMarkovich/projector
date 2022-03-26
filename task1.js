//Реализовать функцию groupBy на чистом JS, которая будет группировать массив по определённой функции, переданной вторым аргументом:

const groupBy = (array, func) => {
    return array.reduce((accumulator, element) => {
        let key = func(element);
        let currentValueForKey = accumulator[key];
        if (currentValueForKey) {
            accumulator[key].push(element);
        } else {
            let newKey = func(element);
            accumulator[newKey] = [];
            accumulator[newKey].push(element)
        }
        return accumulator;
    }, {});
}

console.log(groupBy([3.6, 3.7, 6.4, 8.9], Math.floor)) // { '3': [3.6, 3.7], '6': [6.4], '8': [8.9] }