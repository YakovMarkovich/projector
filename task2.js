//Реализовать функцию invert на чистом JS, которая будет менять ключи и значения объектов местами:

    const invert = (obj) => {
        const swappedKeyValue = Object.entries(obj).map(
            ([key, value]) => [value, key]
        );
        return Object.fromEntries(swappedKeyValue);
    }

console.log(invert({ 'a': 'some', 'b': 'object', 'c': 1 })) // { 'some': 'a', 'object': 'b', '1': 'c' }