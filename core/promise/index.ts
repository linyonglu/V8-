/**
 * 简易版，后续再增加then链式调用，和一些api的实现
 */


//三个状态
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function myPromise(excutor) {
    let self = this;
    self.staus = PENDING;
    self.error = null;
    self.value = null;
    self.onFulfill = null;
    self.onReject = null;
    function resolve (value){
        //只能从pending转换成另外两个，且此过程不可逆
        if (self.staus !== PENDING) return;
        setTimeout(() => {
            self.staus = FULFILLED;
            self.value = value;
            typeof self.onFulfill === 'function' && self.onFulfill(value);//成功执行回调
        })
    }

    function reject (value){
        //只能从pending转换成另外两个，且此过程不可逆
        if (self.staus !== PENDING) return;
        setTimeout(() => {
            self.staus = REJECTED;
            self.value = value;
            typeof self.onReject === 'function' && self.onReject(value);//失败执行回调
        })
    }

    excutor(resolve, reject);
}

myPromise.prototype.myThen = function (onFulfill, onReject){
    if (this.staus === PENDING) {
        this.onFulfill = onFulfill;
        this.onReject = onReject;
    } else if (this.staus === FULFILLED) {
        typeof onFulfill === 'function' && onFulfill(this.value);
    } else if (this.staus === REJECTED) {
        typeof onReject === 'function' && onReject(this.error);
    }
}


//test case
const res = new myPromise((resolve, reject) => {
    console.log(1);
    reject(2);
}).myThen((result) => {
    console.log(result)
}, (error) => {console.log(error)});

console.log('res', res);