// JSON方法
function clone_1(obj) {
    return JSON.parse(JSON.stringify(obj));
}

//模仿JQ extend 
function extend() {
    let origin, // 要拷贝的源
        target = arguments[0], // 获取第一个参数
        isDeepClone = false; // 是否深拷贝
        length = arguments.length, //拷贝的个数
        arr = "[object Array]",
        str = Object.prototype.toString,
        i = 0;
    if (typeof target === 'boolean') {
        isDeepClone = target;
        i++;
        target = arguments[i]; //获取目标元素
    }
    //防止循环引用
    if (origin === target) {
        return;
    }
    // 兼容function
    if (typeof target !== 'object' && typeof target !== 'function') {
        target = {};
    }
    for (; i < length; i++) {
        origin = arguments[i];
        for (let o in origin) {
            if (origin.hasOwnProperty(o)) {
                if (origin[o] === 'object') {
                    if (isDeepClone) {
                        target[o] = str.call(origin[o]) === arr ? [] : {};
                        extend(true, target[o], origin[o]);
                    }
                } else {
                    target[o] = origin[o];
                }
            }
        }
    }
    return target;
}