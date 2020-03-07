// 1. 普通方式 数组排序

var arr = [4,1,6,9,3,2,8,7];
//找最小值
function getMin(arr) {
    if (arr == null || arr.length == 0) return;
    var index = -1;
    for (var i = 0 ; i < arr.length ; i ++) {
        if (arr[i] != null && arr[i] < arr[index] || arr[i] != null && index == -1) {
            index = i;
        }
    }
    var result = arr[index];
    arr[index] = null;
    return result;
}

function sort(arr) {
    var newArr = new Array(arr.length);
    for (var i = 0 ; i < newArr.length ; i ++) {
        newArr[i] = getMin(arr);
    }
    return newArr;
}

console.log(sort(arr));

//2. 冒泡排序  排序的本质是比较和交换
function compare(a, b) {//比较之后需要得出是否需要交换
    if (b < a) return true;
    else return false;
}

function exchange(arr, a, b) {//将数组中ab位置里的值进行交换
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function popSort(arr) {//这个sort可以是冒泡排序也可以是选择排序也可以是其它排序。
    for (var i = 0 ; i < arr.length ; i ++) {
        for (var j = 0 ; j < arr.length - 1 - i ; j ++) {
            if (compare(arr[j], arr[j + 1])) {
                exchange(arr, j, j + 1);
            }
        }
    }
}
popSort(arr);
console.log(arr);

// 3. 选择排序
//选择排序，内层循环，每一圈选出一个最大的，然后放在后面
function selectSort(arr) {
    for (var i = 0 ; i < arr.length ; i ++) {
        var maxIndex = 0;
        for (var j = 0 ; j < arr.length - 1 - i ; j ++) {
            if (compare(arr[maxIndex], arr[j])) {
                maxIndex = j;
            }
        }
        exchange(arr, maxIndex, arr.length - 1 - i);
    }
}

// 4. 简单快排
function quickSort(arr) {
    if (arr == null || arr.length == 0) return [];
    //选领头的
    var leader = arr[0];
    //小的站左边，大的站右边
    var left = [];
    var right = [];
    for (var i = 1 ; i < arr.length ; i ++) {
        if (arr[i] < leader) left.push(arr[i]);
        else right.push(arr[i]);
    }
    left = quickSort(left);
    right = quickSort(right);
    left.push(leader);
    return left.concat(right);
}

//5. 标准快排
function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function quickSort2(arr, begin, end) {
    if (begin >= end - 1) return;
    var left = begin;
    var right = end;
    do {
        do left ++; while (left < right && arr[left] < arr[begin]);
        do right --; while (right > left && arr[right] > arr[begin]);
        if (left < right) swap(arr, left, right)
    } while (left < right);
    var swapPoint = left == right ? right - 1 : right;
    swap(arr, begin, swapPoint);
    quickSort2(arr, begin, swapPoint);
    quickSort2(arr, swapPoint + 1, end);
}
quickSort2(arr, 0, arr.length);


