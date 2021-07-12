module.exports = function reverse (n) {
    if (n < 0) {
        n = Math.abs(n);
    }
        let str = '' + n;
        let newStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
            newStr += str[i];
        }
        let newNum = + newStr
        return newNum;
}
