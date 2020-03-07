
var main = document.getElementById('main');
var go = document.getElementById('go');
var speed = 5, num = 0, timer, flag = true;
var colors = ['red', 'green', 'black', 'blue'];

// 创建每一行div元素
function cDiv() {
    var oDiv = document.createElement('div');
    // 获取一个随机数将每一行找到一个随机div 设置上颜色
    var index = Math.floor(Math.random() * 4);
    oDiv.setAttribute('class', 'row');
    for (var j = 0; j < 4; j++) {
        var iDiv = document.createElement('div');
        oDiv.appendChild(iDiv);
    }
    // 根据父级中是否有子元素   插入新生成的行
    if (main.childNodes.length == 0) {
        main.appendChild(oDiv);
    } else {
        main.insertBefore(oDiv, main.childNodes[0]);
    }
    var clickDiv = main.childNodes[0].childNodes[index];
    clickDiv.setAttribute('class', 'i');
    clickDiv.style.backgroundColor = colors[index];
}

// 移动
function move() {
    clearInterval(timer);
    timer = setInterval(function () {
        var step = parseInt(main.offsetTop) + speed;
        main.style.top = step + 'px';
        if (parseInt(main.offsetTop) >= 0) {
            cDiv();
            main.style.top = '-150px';
        }
        // 获得mian区域内的行数
        var len = main.childNodes.length;
        if (len == 6) {
            for (var i = 0; i < 4; i++) {
                if (main.childNodes[len - 1].children[i].classList.contains('i')) {
                    alert('游戏结束，得分：' + num);
                    clearInterval(timer);
                    // 游戏结束后不可以继续点击
                    flag = false;
                }
            }
            // 将展示过后的每一行移除
            main.removeChild(main.childNodes[len - 1]);
        }
    }, 20)
    bindEvent();
}

function bindEvent() {
    main.addEventListener('click', function (event) {
        if (flag) {
            var tar = event.target;
            // 判断点击的块是否为有颜色的
            if (tar.className == 'i') {
                tar.style.backgroundColor = '#bbb';
                tar.classList.remove('i');
                // 计数++
                num++;
            } else {
                // 如果点到了白色的块   游戏结束
                alert('游戏结束，得分：' + num);
                clearInterval(timer);
                flag = false;
            }
            // 速度++
            if (num % 10 == 0) {
                speed++;
            }
        }
    })
}

//开始移动 创建每一行元素
function clickStart() {
    go.addEventListener('click', function () {
        go.style.display = 'none';
        move();
    });
}
clickStart();