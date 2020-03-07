// 创建一个链表
function Node(value) {
    this.value = value;
    this.next = null;
}

var a = new Node(1);
var b = new Node(2);
var c = new Node(3);
var d = new Node(4);

a.next = b;
b.next = c;
c.next = d;
d.next = null;

// 链表的遍历 （循环遍历）
function bianLink(root) {
    var temp = root;
    while(true) {
        if (temp != null) {
            console.log(temp.value);
        } else {
            break;
        }
        temp = temp.next;
    }
}


//递归遍历
function _bianLink(root) {
    if (root == null) return;
    console.log(root.value);
    _bianLink(root.next);
}

// 链表的逆置 
function nizhi(root) {
    if (root.next.next == null) {//代表当前节点是倒数第二个节点
        root.next.next = root;//让最后一个节点指向自己（倒数第二个节点）
        return root.next;
    } else {
        var result = nizhi(root.next);
        root.next.next = root;
        root.next = null;
        return result;
    }
}

