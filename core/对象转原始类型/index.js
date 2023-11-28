//调用顺序
//1. [Symbol.toPrimitive
//2. valueOf
//3. toString

var value = 2;

const obj = {
    value: 1,

    valueOf: () => {
        return this.value + 1;
    },

    toString: () => {
        return this.value + 2;
    },

    [Symbol.toPrimitive]() {
        return this.value + 3;
    }

}

console.log(obj + 2);