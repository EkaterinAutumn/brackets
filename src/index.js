module.exports = function check(str, bracketsConfig) {

    if (str.length % 2 !== 0) {
        return false;
    }
    let stack = [];
    const pairObj = bracketsConfig.reduce((acc, brackets) => {
        acc[brackets[1]] = brackets[0]
        return acc
    }, {})

    const openArr = Object.values(pairObj)

    for (let i = 0; i < str.length; i++) {

        let currentSymbol = str[i];

        let topElement = stack[stack.length - 1];


        if (topElement === currentSymbol && pairObj[currentSymbol] === currentSymbol) {
            stack.pop();
            continue
        }

        if (openArr.includes(currentSymbol)) {
            stack.push(currentSymbol);
        }
        else {
            if (stack.length === 0) {
                return false;
            }
            if (pairObj[currentSymbol] === topElement) {
                stack.pop();
            }

            else {
                return false;
            }
        }
    }
    return stack.length === 0;
}