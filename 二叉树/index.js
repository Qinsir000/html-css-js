// 1. 建立二叉树
function Node(value) {
    this.value = value;
    this.neighbor = [];
}

var a = new Node("a");
var b = new Node("b");
var c = new Node("c");
var d = new Node("d");
var e = new Node("e");
var f = new Node("f");

a.neighbor.push(b);
a.neighbor.push(c);
a.neighbor.push(f);
b.neighbor.push(a);
b.neighbor.push(d);
b.neighbor.push(e);
c.neighbor.push(a);
d.neighbor.push(b);
e.neighbor.push(b);

// 2. 二叉树前序遍历 根左右
function f1(root) {
    if (root == null) return;
    console.log(root.value);
    f1(root.left);
    f1(root.right);
}

// 3. 中序遍历 左根右
function f2(root) {
    if (root == null) return;
    f2(root.left);
    console.log(root.value);
    f2(root.right);
}

// 4. 后续遍历 左右根
function f3(root) {
    if (root == null) return;
    f3(root.left);
    f3(root.right);
    console.log(root.value);
}

// 给定前序中序 还原二叉树
var qian = ['a', 'c', 'f', 'g', 'b', 'd', 'e'];
var zhong = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];

function Node1(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function fqz(qian, zhong) {
    if (qian == null || zhong == null || qian.length == 0 || zhong.length == 0 || qian.length != zhong.length) return null;
    var root = new Node1(qian[0]);
    var index = zhong.indexOf(root.value);//找到根节点在中序遍历中的位置
    var qianLeft = qian.slice(1, 1 + index);//前序遍历的左子树
    var qianRight = qian.slice(1 + index, qian.length);//前序遍历的右子树
    var zhongLeft = zhong.slice(0, index);//中序遍历的左子树
    var zhongRight = zhong.slice(index + 1, zhong.length);//中序遍历的右子树
    root.left = fqz(qianLeft, zhongLeft);//根据左子树的前序和中序还原左子树并赋值给root.left
    root.right = fqz(qianRight, zhongRight);//根绝右子树的前序和中序还原右子树并赋值给root.right
    return root;
}

var root = fqz(qian, zhong);

console.log(root.left);
console.log(root.right);

// 给定中后还原二叉树
var _zhong = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];
var hou = ['f', 'g', 'c', 'd', 'e', 'b', 'a'];

function Node2(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function fzh(zhong, hou) {
    if (zhong == null || hou == null || _zhong.length == 0 || hou.length == 0 || zhong.length != hou.length) return null;
    var root = new Node2(hou[hou.length - 1]);
    var index = zhong.indexOf(root.value);

    var leftZhong = zhong.slice(0, index);
    var rightZhong = zhong.slice(index + 1, zhong.length);
    var leftHou = hou.slice(0, index);
    var rightHou = hou.slice(index, hou.length - 1);

    root.left = fzh(leftZhong, leftHou);
    root.right = fzh(rightZhong, rightHou);
    return root;
}

var root = fzh(_zhong, hou);
console.log(root.left);
console.log(root.right);

//二叉树的深度优先搜索，和前序遍历的顺序是一样的。
function deepSearch(root, target) {
    if (root == null) return false;
    if (root.value == target) return true;
    var left = deepSearch(root.left, target);
    var right = deepSearch(root.right, target);
    return left || right;
}

//二叉树广度优先搜索  广度优先搜索就是把每一行按照顺序输出 一行行来
function fg(rootList, target) {
    if (rootList == null || rootList.length == 0) return false;
    var childList = [];//当前层所有节点的子节点，都在这个list中，这样传入下一层级的时候，就可以遍历整个层级的节点。
    for (var i = 0 ; i < rootList.length ; i ++) {
        if (rootList[i] != null && rootList[i].value == target) {
            return true;
        } else {
            childList.push(rootList[i].left);
            childList.push(rootList[i].right);
        }
    }
    return fg(childList, target);
}

// 二叉树比较
function compareTree(root1, root2) {
    if (root1 == root2) return true;//是同一个颗树
    if (root1 == null && root2 != null || root2 == null && root1 != null) return false;//其中一个为空，另一个不为空
    if (root1.value != root2.value) return false;//相同位置的值不相等
    var leftBool = compareTree(root1.left, root2.left);//判断左子树是否相等
    var rightBool = compareTree(root1.right, root2.right);//判断右子树是否相等
    return leftBool && rightBool;//必须左右子树都相等才算相等
}

// 二叉树左右子树互换后的比较
function _compareTree(root1, root2) {
    if (root1 == root2) return true;//是同一个颗树
    if (root1 == null && root2 != null || root2 == null && root1 != null) return false;//其中一个为空，另一个不为空
    if (root1.value != root2.value) return false;//相同位置的值不相等
    return _compareTree(root1.left, root2.left) && _compareTree(root1.right, root2.right)
    || _compareTree(root1.left, root2.right) && _compareTree(root1.right, root2.left);
}

// 二叉树的 diff 算法
//新增了什么，修改了什么，删除了什么

// {type: "新增", origin: null, now: c2},
// {type: "修改", origin: c1, now: c2},
// {type: "删除", origin: c2, now: null }
// var diffList = [];

function diffTree(root1, root2, diffList) {
    if (root1 == root2) return diffList;
    if (root1 == null && root2 != null) {// 新增了节点
        diffList.push({type: "新增", origin: null, now: root2});
    } else if (root1 != null && root2 == null) {// 删除了节点
        diffList.push({type: "删除", origin: root1, now: null});
    } else if (root1.value != root2.value) {//相同位置的节点值不同了，修改了节点
        diffList.push({type: "修改", origin: root1, now: root2});
        diffTree(root1.left, root2.left, diffList);
        diffTree(root1.right, root2.right, diffList);
    } else {
        diffTree(root1.left, root2.left, diffList);
        diffTree(root1.right, root2.right, diffList);
    }
}

