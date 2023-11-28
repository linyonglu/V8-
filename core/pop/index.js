//1. 抛异常
//2. 转对象
//3. 删结尾
//4. 返回被删除的元素

Array.prototype.copyPop = function() {
    if (this === undefined || this === null) throw new TypeError('数组不能为空');
    if (Object.prototype.toString.call(this) !== '[object Array]') throw new TypeError('必须为数组');

    let O = Object(this);
    let length = O.length >>> 0;

    if (length === 0) throw new TypeError('数组无元素进行删除');

    length--;

    let value = O[length - 1];

    delete O[length - 1];

    O.length = length;

    return value;
}

//test case

const arr = [];
const v = arr.copyPop();

console.log(arr);
console.log(v);