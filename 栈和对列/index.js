// 栈是先进后出，队列是先进先出
//栈 利用数组的push和pop
function Stack() {
    this.arr = [];
    this.push = function (value) {
        this.arr.push(value);
    }
    this.pop = function () {
        return this.arr.pop();
    }
}
// 队列 利用数组的push和shift
function Queue() {
    this.arr = [];
    this.push = function (value) {
        this.arr.push(value);
    }
    this.pop = function () {
        return this.arr.shift();
    }
}
