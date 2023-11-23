Array.prototype.coverMap = function(callBack, thisArg) {
  //第一步，判异常
  if (this === null || this === undefined) {
    throw new TypeError('调用者不能为空啊....')
  }

  if (Object.prototype.toString.call(callBack) !== '[object Function]') {
    throw new TypeError(callBack + '不是一个函数啊....')
  }

  //第二步 将this对象化
          //让长度为整数
  let O = Object(this);

  //保证长度为整数
  let L = this.length >>> 0;

  //第三步  初始化结果数组
  let res = new Array(L);

  //第四步  遍历数组

  for (let i = 0; i < L; i++) {
    //in操作符会找到原型链上有无该属性
    //数组的是有无该索引；对象的话是有无该属性
    if(i in O) {
      //传入回调的三个参数
      res[i] = callBack(O[i], i, O);
    }
  }

  return res;
}

const arr = [1, 2, 3];

console.log(arr.coverMap((item, index, a) => {
  return item + 1;
}))