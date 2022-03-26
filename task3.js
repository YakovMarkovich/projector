//Реализовать функцию checkParentheses на чистом JS, которая проверяет на синтаксическую верность последовательность скобок ( (), {} и [] ). Функция возвразает false, если переданная строка содержит неправильную последовательность:

    const checkParentheses = (str) => {
        const normalizedString = str.replace(/[^{()}[\]]/g, '');
        let stack = [];

        for(let i = 0; i < normalizedString.length; i++)
        {
            let value = normalizedString[i];

            if (value  === '(' || value  === '[' || value  === '{')
            {
                stack.push(value);
                continue;
            }

            if (stack.length === 0)
                return false;

            let check;
            switch (value){
                case ')':
                    check = stack.pop();
                    if (check === '{' || check === '[')
                        return false;
                    break;

                case '}':
                    check = stack.pop();
                    if (check === '(' || check === '[')
                        return false;
                    break;

                case ']':
                    check = stack.pop();
                    if (check === '(' || check === '{')
                        return false;
                    break;
            }
        }
        return (stack.length === 0)
    }

console.log(checkParentheses('--()--')) // true
console.log(checkParentheses('-a]--[')) // false
console.log(checkParentheses('dsa{vsfs{ad')) // false
console.log(checkParentheses('j78(g5b]uyg')) // false
console.log(checkParentheses(',m{i987y}hj')) // true
console.log(checkParentheses('dsa[3ed---:]::')) // true