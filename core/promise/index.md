## promise的特性
1. 拥有三个状态值
    - pending：等待状态
    - fufill：完成状态
    - rejected：拒绝状态

只能从pending转换为fufill或者rejected，且改过程不可逆
2. 创建实例时传入的回调函数，有两个参数resolve，reject
3. 回调函数中的内容为同步任务；then函数的为微任务，且支持链式调用