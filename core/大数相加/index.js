//1. 反转数组
//2. 记录进位，最后还有进位的话就拼接到数组的最后一位

const addBigNum = (number1, number2) => {
    number1 = number1.split('').reverse();
    number2 = number2.toString().split('').reverse();
    
    //记录进位
    let carry = 0;

    //结果数组
    let resArr = [];

    let len1 = number1.length, len2 = number2.length;
    let maxLength = Math.max(len1, len2);

    for (let i = 0; i < maxLength; i++) {
        let value1 = i < len1 ? parseInt(number1[i], 10) : 0;
        let value2 = i < len2 ? parseInt(number2[i], 10) : 0;
        // console.log(value1);
        // console.log(value2);
        let current = (value1 + value2) % 10;
        // console.log(current);
        carry = Math.floor((value1 + value2) / 10);
        // console.log(carry);
        
        resArr.push(current + carry);
    }

    if (carry > 0) {
        resArr.push(carry);
    }

    const resStr = resArr.reverse().join('');
    return resStr;
}

//test case

const number1 = '12123131231231';
const number2 = '123456789098765444444444444222';
const result = addBigNum(number1, number2);
console.log(result);
console.log(typeof result);