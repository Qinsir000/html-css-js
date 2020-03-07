//可继续遍历数据类型
const mapTag = '[object Map]';
const setTag = '[object Set]';
const arrayTag = '[object Array]';
const objectTag = '[object Object]';
const argsTag = '[object Arguments]';

//不可继续遍历数据类型
const boolTag = '[object Boolean]';
const dateTag = '[object Date]';
const errorTag = '[object Error]';
const numberTag = '[object Number]';
const regexpTag = '[object RegExp]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';
const funcTag = '[object Function]';

const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag];

//工具函数 通用while 
function forEach(array, iteratee) {
    let index = -1;
    const length = array.length;
    while (++index < length) {
        iteratee(array[index], index);
    }
    return array;
}
// 判断是否为引用类型
function isObject(target) {
    const type = typeof target;
    return target !== null && (type === 'object' || type === 'function');
}
//获取实际类型
function getType(target) {
    return Object.prototype.toString.call(target);
}
//初始化克隆对象
function getInit(target) {
    const Ctor = target.constructor;
    return new Ctor();
}
//克隆symbol
function cloneSymbol(target) {
    return Object(Symbol.prototype.valueOf.call(target));
}
//克隆正则
function cloneReg(target) {
    const reFlags = /\w*$/;
    const result = new target.constructor(target.source, reFlags.exec(target));
}
//克隆方法
function cloneFunction(func) {
    const bodyReg = /(?<={)(.|\n)+(?=})/m;
    const paramReg = /(?<=\().+(?=\)\s+{)/;
    const funcString = func.toString();
    if (func.prototype) {
        const param = paramReg.exec(funcString);
        const body = bodyReg.exec(funcString);
        if (body) {
            if (param) {
                const paramArr = param[0].split(',');
                return new Function(...paramArr, body[0]);
            } else {
                return new Function(body[0]);
            }

        } else {
            return null;
        }
    } else {
        return eval(funcString);
    }
}
//克隆不可遍历类型
function cloneOtherType(target, type) {
    const Ctor = target.constructor;
    switch (type) {
        // case boolTag:
        // case numberTag:
        // case stringTag:
        // case errorTag:
        //这几种暂时没找到合适方法
        case dateTag:
            return new Ctor(target);
        case regexpTag:
            return cloneReg(target);
        case symbolTag:
            return cloneSymbol(target);
        case funcTag:
            return cloneFunction(target);
        default:
            return null;

    }
}

function clone(target, map = new WeakMap()) {
    if (!isObject(target)) {
        return target;
    }

    const type = getType(target);
    let cloneTarget;
    if (deepTag.includes(type)) {
        cloneTarget = getInit(target, type);
    } else {
        return cloneOtherType(target, type);
    }
    if (map.get(target)) {
        return target;
    }
    map.set(target, cloneTarget);

    if (type === setTag) {
        target.forEach(value => {
            cloneTarget.add(clone(value));
        })
        return cloneTarget;
    }

    if (type === mapTag) {
        target.forEach(value => {
            cloneTarget.set(clone(value));
        })
        return cloneTarget;
    }

    const keys = type === arrayTag ? undefined : Object.keys(target);
    forEach(keys || target, (value, key) => {
        if (keys) {
            key = value;
        }
        cloneTarget[key] = clone(target[key], map);
    });

    return cloneTarget;

}