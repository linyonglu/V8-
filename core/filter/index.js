
Array.prototype.copyFilter = function (callBack, thisArg) {
    if (this === null || this === undefined) throw new TypeError('必须存在数组');

    if (Object.prototype.toString.call(callBack) != '[object Function]') throw new TypeError('回调函数必须为函数类型');

    let O = Object(this);
    let length = O.length >>> 0;
    //结果数组
    let resArr = [];

    for (let i = 0; i < length; i++) {
        if (i in O) {
            const item = O[i];
            if (callBack.call(thisArg, item, i, O)) resArr.push(item);
        }
    }

    return resArr;
}

//test case

const arr = [1, 1, 2, 2, 3];
console.log(arr.copyFilter((item, index) => index === 1));