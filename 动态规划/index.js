// 斐波那契 
function fibo(n) {
    if (n <= 0) return -1;
    if (n == 1) return 0;
    if (n == 2) return 1;
    var a = 0;
    var b = 1;
    var c = 0;
    for (var i = 3 ; i <= n ; i ++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}

function fibo2(n) {
    if (n <= 0) return -1;
    if (n == 1) return 0;
    if (n == 2) return 1;
    return fibo2(n-1) + fibo2(n-2);
}

// 一个青蛙，一次只能跳一级台阶，或者跳两级台阶。
// 问：这个青蛙跳上n级台阶有多少种跳法。

// 如果这只青蛙，跳上了第n级台阶，那么最后一次跳跃之前，他一定在n-1级台阶或n-2级台阶上。
// 那么跳上n级台阶有多少种情况就变成了两个子问题
// 跳上n-1级台阶的跳法 加上 跳上n-2级台阶的跳法。

// 按照此逻辑递推，跳上n-1级台阶可以拆解为两个子问题
// 既：跳上n-2级台阶的跳法 加上 跳上n-3级台阶的跳法

// f(n) = f(n-1) + f(n-2)

function jump(n) {
    if (n <= 0) return -1;
    if (n == 1) return 1;
    if (n == 2) return 2;
    return jump(n-1) + jump(n-2);
}

// 变态青蛙跳台阶
// 这只青蛙，一次可以跳1级台阶、2级台阶、或n级台阶。
// 问：这只青蛙，跳上n级台阶有多少种方法?

// f(n) = f(n-1) + f(n-2) + f(n-3) + …… + f(2) + f(1) + f(0)

function jumpbt(n) {
    if (n <= 0) return -1;
    if (n == 1) return 1;
    if (n == 2) return 2;
    var result = 0;
    for (var i = 1 ; i < n ; i ++) {
        result += jumpbt(n - i);
    }
    return result + 1;// +1代表从0级台阶直接跳上去的情况
}