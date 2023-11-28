
Array.prototype.coverReduce = function(callBack, initValue) {

    if (Object.prototype.toString.call(callBack) !== '[object Function]') {
        throw new TypeError('回调函数必须为函数类型');
    }

    if (this === null || this === undefined) {
        throw new TypeError('数组不能为空');
    }

    let O = Object(this);
    let length = O.length >>> 0;
    let k = 0;

    let totalValue = initValue;

    if (totalValue === undefined) {
        for (; k < length; k++) {
            if (k in O) {
                totalValue = O[k];
                k++;
                break;
            }
        }
    }

    if (k === length && totalValue === undefined) throw new TypeError('数组不能为空');

    for (; k < length; k++) {
        totalValue = callBack.call(undefined, totalValue, O[k], k, O);
    }

        return totalValue;

}

let str = 'Hello, World!';
const res = Array.from(str).coverReduce((pre, cur, all) => {
    return cur + pre;
});

console.log(res);

