//1. 抛异常
//2. 转对象
//3. 排最后
//4. 返长度

Array.prototype.copyPush = function(...items) {
    if (this === null || this === undefined) throw new TypeError('数组对象不能为null或者undefined');
    
    let O = Object(this);
    let length = O.length >>> 0;

    let itemLength = items.length >>> 0;

    //js是用双精度类型的64位表示，其中数值由53位构成，其他表示指数和符号
    if (length + itemLength > 2 ** 53 - 1) throw new TypeError('数组长度超出Number类型能表示的最大长度');

    for (let i = 0; i < itemLength; i++) {
        O[length + i] = items[i];
    }

    let newLength = itemLength + length;
    return newLength;
}

//test case
const arr = [1, 2, 3];
const arrLength = arr.copyPush(2, 3, 4);

console.log(arr);
console.log(arrLength);