
//1. 新建字符串，作为新的拼接字符串
//2. 累计个数，取余3并且不是开头就插入,
const fn = (number) => {
    //数字转换为字符串
    let str = String(number), count = 0;
    //整数部分   小数部分
    let intergerPart = decimalPart = newInterPart = '';
    let len;

    //分两种情况，有小数跟无小数
    const index = str.indexOf('.');
    if (index !== -1) {
        intergerPart = str.slice(0, index);
        decimalPart = str.slice(index);
        len = intergerPart.length - 1;
    } else {
        intergerPart = str;
        len = intergerPart.length - 1;
    }

    //每三位插入,
    for(let i = len; i >= 0; i--) {
        newInterPart = intergerPart[i] + newInterPart;
        count++;

        //每三为加个，并且如果是最开头就不加
        if (count % 3 === 0 && i !== 0) {
            newInterPart = ',' + newInterPart;
        }
    }

    return newInterPart + decimalPart;
}

const res = 1223.2333;
// fn(res);
console.log(fn(res));
// console.log(fn(123132312312312));
