var game = document.getElementById('block');
var board = document.getElementById('board');
var maxRow = 40,
  maxCol = 40;
var color = ['#f59f9d', '#a4b9ee', '#eea4eb', '#f4c190', '#a4d2ee', '#d7baff'];
// 数组存放小砖块 列 * 行  颜色
var area = [
  { minY: 3, maxY: 12, minX: 2, maxX: 19, color: color[0] },
  { minY: 15, maxY: 24, minX: 2, maxX: 19, color: color[1] },
  { minY: 27, maxY: 36, minX: 2, maxX: 19, color: color[2] },
  { minY: 3, maxY: 12, minX: 22, maxX: 39, color: color[3] },
  { minY: 15, maxY: 24, minX: 22, maxX: 39, color: color[4] },
  { minY: 27, maxY: 36, minX: 22, maxX: 39, color: color[5] },
];
// 数组存放小砖块
var squareSet = [];
// 存放运动小球的数组
var ballSet = [];

//定时器
var timer;

// 设置控制小球运动速率的值
var frame = 200;

// 记录分数
var score = 0;

function init() {
  //插入小方块
  for (var i = 0; i < maxRow; i++) {
    squareSet[i] = [];
    for (var j = 0; j < maxCol; j++) {
      // 判断当前位置是否需要创建小砖块
      var result = needCreat(i, j);
      // 如果当前位置为空
      if (result == null) {
        squareSet[i][j] = null;
        continue;
      }
      var temp = createSquare(i, j, result);
      squareSet[i][j] = temp;
    }
  }

  // 创建小球
  createBall();

  run();

  // 实现拖拽挡板
  drag();
}
init();

// 根据初始数组中存放的坐标判断是否需要创建元素
function needCreat(row, col) {
  for (var i = 0; i < area.length; i++) {
    if (
      row >= area[i].minX &&
      row <= area[i].maxX &&
      col >= area[i].minY &&
      col <= area[i].maxY
    ) {
      return area[i].color;
    }
  }
  return null;
}
// 根据初始数组中存放的坐标判断是否需要创建元素
function needCreat(row, col) {
  for (var i = 0; i < area.length; i++) {
    if (
      row >= area[i].minX &&
      row <= area[i].maxX &&
      col >= area[i].minY &&
      col <= area[i].maxY
    ) {
      return area[i].color;
    }
  }
  return null;
}
// 根据初始数组中存放的坐标判断是否需要创建元素
function needCreat(row, col) {
  for (var i = 0; i < area.length; i++) {
    if (
      row >= area[i].minX &&
      row <= area[i].maxX &&
      col >= area[i].minY &&
      col <= area[i].maxY
    ) {
      return area[i].color;
    }
  }
  return null;
}
// 根据初始数组中存放的坐标判断是否需要创建元素
function needCreat(row, col) {
  for (var i = 0; i < area.length; i++) {
    if (
      row >= area[i].minX &&
      row <= area[i].maxX &&
      col >= area[i].minY &&
      col <= area[i].maxY
    ) {
      return area[i].color;
    }
  }
  return null;
}
// 根据初始数组中存放的坐标判断是否需要创建元素
function needCreat(row, col) {
  for (var i = 0; i < area.length; i++) {
    if (
      row >= area[i].minX &&
      row <= area[i].maxX &&
      col >= area[i].minY &&
      col <= area[i].maxY
    ) {
      return area[i].color;
    }
  }
  return null;
}
// 根据初始数组中存放的坐标判断是否需要创建元素
function needCreat(row, col) {
  for (var i = 0; i < area.length; i++) {
    if (
      row >= area[i].minX &&
      row <= area[i].maxX &&
      col >= area[i].minY &&
      col <= area[i].maxY
    ) {
      return area[i].color;
    }
  }
  return null;
} // 根据初始数组中存放的坐标判断是否需要创建元素
function needCreat(row, col) {
  for (var i = 0; i < area.length; i++) {
    if (
      row >= area[i].minX &&
      row <= area[i].maxX &&
      col >= area[i].minY &&
      col <= area[i].maxY
    ) {
      return area[i].color;
    }
  }
  return null;
}
// 根据初始数组中存放的坐标判断是否需要创建元素
function needCreat(row, col) {
  for (var i = 0; i < area.length; i++) {
    if (
      row >= area[i].minX &&
      row <= area[i].maxX &&
      col >= area[i].minY &&
      col <= area[i].maxY
    ) {
      return area[i].color;
    }
  }
  return null;
}
// 根据初始数组中存放的坐标判断是否需要创建元素
function needCreat(row, col) {
  for (var i = 0; i < area.length; i++) {
    if (
      row >= area[i].minX &&
      row <= area[i].maxX &&
      col >= area[i].minY &&
      col <= area[i].maxY
    ) {
      return area[i].color;
    }
  }
  return null;
}

// 根据初始数组中存放的坐标判断是否需要创建元素
function needCreat(row, col) {
  for (var i = 0; i < area.length; i++) {
    if (
      row >= area[i].minX &&
      row <= area[i].maxX &&
      col >= area[i].minY &&
      col <= area[i].maxY
    ) {
      return area[i].color;
    }
  }
  return null;
}
// 根据初始数组中存放的坐标判断是否需要创建元素
function needCreat(row, col) {
  for (var i = 0; i < area.length; i++) {
    if (
      row >= area[i].minX &&
      row <= area[i].maxX &&
      col >= area[i].minY &&
      col <= area[i].maxY
    ) {
      return area[i].color;
    }
  }
  return null;
}
// 根据初始数组中存放的坐标判断是否需要创建元素
function needCreat(row, col) {
  for (var i = 0; i < area.length; i++) {
    if (
      row >= area[i].minX &&
      row <= area[i].maxX &&
      col >= area[i].minY &&
      col <= area[i].maxY
    ) {
      return area[i].color;
    }
  }
  return null;
} // 根据初始数组中存放的坐标判断是否需要创建元素
function needCreat(row, col) {
  for (var i = 0; i < area.length; i++) {
    if (
      row >= area[i].minX &&
      row <= area[i].maxX &&
      col >= area[i].minY &&
      col <= area[i].maxY
    ) {
      return area[i].color;
    }
  }
  return null;
}
// 根据初始数组中存放的坐标判断是否需要创建元素
function needCreat(row, col) {
  for (var i = 0; i < area.length; i++) {
    if (
      row >= area[i].minX &&
      row <= area[i].maxX &&
      col >= area[i].minY &&
      col <= area[i].maxY
    ) {
      return area[i].color;
    }
  }
  return null;
}

// 根据初始数组中存放的坐标判断是否需要创建元素
function needCreat(row, col) {
  for (var i = 0; i < area.length; i++) {
    if (
      row >= area[i].minX &&
      row <= area[i].maxX &&
      col >= area[i].minY &&
      col <= area[i].maxY
    ) {
      return area[i].color;
    }
  }
  return null;
}
// 根据初始数组中存放的坐标判断是否需要创建元素
function needCreat(row, col) {
  for (var i = 0; i < area.length; i++) {
    if (
      row >= area[i].minX &&
      row <= area[i].maxX &&
      col >= area[i].minY &&
      col <= area[i].maxY
    ) {
      return area[i].color;
    }
  }
  return null;
}
// 根据初始数组中存放的坐标判断是否需要创建元素
function needCreat(row, col) {
  for (var i = 0; i < area.length; i++) {
    if (
      row >= area[i].minX &&
      row <= area[i].maxX &&
      col >= area[i].minY &&
      col <= area[i].maxY
    ) {
      return area[i].color;
    }
  }
  return null;
}
// 根据初始数组中存放的坐标判断是否需要创建元素
function needCreat(row, col) {
  for (var i = 0; i < area.length; i++) {
    if (
      row >= area[i].minX &&
      row <= area[i].maxX &&
      col >= area[i].minY &&
      col <= area[i].maxY
    ) {
      return area[i].color;
    }
  }
  return null;
}
// 根据初始数组中存放的坐标判断是否需要创建元素
function needCreat(row, col) {
  for (var i = 0; i < area.length; i++) {
    if (
      row >= area[i].minX &&
      row <= area[i].maxX &&
      col >= area[i].minY &&
      col <= area[i].maxY
    ) {
      return area[i].color;
    }
  }
  return null;
}
// 根据初始数组中存放的坐标判断是否需要创建元素
function needCreat(row, col) {
  for (var i = 0; i < area.length; i++) {
    if (
      row >= area[i].minX &&
      row <= area[i].maxX &&
      col >= area[i].minY &&
      col <= area[i].maxY
    ) {
      return area[i].color;
    }
  }
  return null;
}
// 根据初始数组中存放的坐标判断是否需要创建元素
function needCreat(row, col) {
  for (var i = 0; i < area.length; i++) {
    if (
      row >= area[i].minX &&
      row <= area[i].maxX &&
      col >= area[i].minY &&
      col <= area[i].maxY
    ) {
      return area[i].color;
    }
  }
  return null;
}
// 根据初始数组中存放的坐标判断是否需要创建元素
function needCreat(row, col) {
  for (var i = 0; i < area.length; i++) {
    if (
      row >= area[i].minX &&
      row <= area[i].maxX &&
      col >= area[i].minY &&
      col <= area[i].maxY
    ) {
      return area[i].color;
    }
  }
  return null;
}
// 根据初始数组中存放的坐标判断是否需要创建元素
function needCreat(row, col) {
  for (var i = 0; i < area.length; i++) {
    if (
      row >= area[i].minX &&
      row <= area[i].maxX &&
      col >= area[i].minY &&
      col <= area[i].maxY
    ) {
      return area[i].color;
    }
  }
  return null;
}

// 创建小砖块  并且反回dom元素
function createSquare(x, y, color) {
  var temp = document.createElement('div');
  temp.classList.add('square');
  temp.style.left = 10 * y + 'px';
  temp.style.top = 10 * x + 'px';
  temp.style.backgroundColor = color;
  game.appendChild(temp);
  return temp;
}

// 创建小球
function createBall() {
  var temp = document.createElement('div');
  temp.classList.add('ball');
  // 初始位置
  temp.style.left = '196px';
  temp.style.bottom = '188px';

  // 为小球运动设置方向   横向为1  纵向为-1
  temp.speedX = 1;
  temp.speedY = -1;

  // 将小球存到数组中  为了以后可以扩展分裂小球
  ballSet.push(temp);
  game.appendChild(temp);
}

// 拖拽挡板
function drag() {
  // 绑定事件
  document.onmousedown = function (e) {
    var lastX = e.clientX;
    document.onmousemove = function (e) {
      var dis = e.clientX - lastX;
      var location = board.offsetLeft + dis;
      // 判断左右临界值
      if (location <= 0) {
        location = 0;
      }
      if (location >= 400 - board.clientWidth) {
        location = 400 - board.clientWidth;
      }
      board.style.left = location + 'px';
      lastX = e.clientX;
    };
  };
  document.onmouseup = function () {
    document.onmousemove = null;
  };
}

// 小球运动
function run() {
  timer = setInterval(function () {
    // 遍历存着的多个小球的数组  但是现在只有一个小球可以不进行遍历
    for (var i = 0; i < ballSet.length; i++) {
      // 根据当前的运动方向决定小球当前的位置
      ballSet[i].style.left = ballSet[i].offsetLeft + ballSet[i].speedX + 'px';
      ballSet[i].style.top = ballSet[i].offsetTop + ballSet[i].speedY + 'px';
    }
    // 在运动过程中  判断是否碰撞和撞到砖块
    // 检查触碰
    checkCrash();
    // 检查结束
    checkFinish();
  }, 1000 / frame);
}

// 检查小球是否碰撞  根据小球中心 判断 将小球看成一个点
function checkCrash() {
  for (var i = 0; i < ballSet.length; i++) {
    // 判断是否碰到左壁  // 右壁
    if (ballSet[i].offsetLeft <= 0 || ballSet[i].offsetLeft >= 400) {
      // x方向取反
      // console.log(111,ballSet[i].speedX)
      ballSet[i].speedX *= -1;
      // 触发top
    } else if (ballSet[i].offsetTop <= 0) {
      // y方向取反
      ballSet[i].speedY *= -1;
      // 判断小球触发到 挡板
    } else if (
      ballSet[i].offsetLeft > board.offsetLeft &&
      ballSet[i].offsetLeft < board.offsetLeft + 80 &&
      ballSet[i].offsetTop >= board.offsetTop &&
      ballSet[i].offsetTop <= board.offsetTop + 4
    ) {
      // y方向取反
      ballSet[i].speedY *= -1;
      // 判断小球到边界下边
    } else if (ballSet[i].offsetTop >= 650) {
      // 将漏下来的小球移除
      // 从dom结构中移除
      game.removeChild(ballSet[i]);

      ballSet.splice(i, 1);
      return;
    }
    // 接下来判断小球是否碰撞到砖块
    // 如果在砖块下方空白区域  不进行遍历判断
    if (ballSet[i].offsetTop + 2 >= 400) {
      continue;
    }
    //判断碰撞到砖块
    // 根据每一个小砖块的位置 left top 计算出每一个小砖块在第几行第几列
    var col = Math.floor((ballSet[i].offsetLeft + 2) / 10);
    var row = Math.floor((ballSet[i].offsetTop + 2) / 10);

    // 判读如果当前位置又小砖块

    if (squareSet[row][col] != null) {
      // 反弹
      rebund(ballSet[i], squareSet[row][col]);

      // 此位置小砖块消失
      disappear(row, col);
    }
  }
}

// 反弹
function rebund(ball, square) {
  // 取到球中心坐标 x y
  var x = ball.offsetLeft + 2 - square.offsetLeft;
  var y = ball.offsetTop + 2 - square.offsetTop;
  // 如果在分界线上 找到上一时刻的状态位置  根据区域去判断
  if (y == x || y == -x + 10) {
    x -= ball.speedX;
    y -= ball.speedY;
  }
  // 分界线的上下左右
  if (y > x && y > -x + 10) {
    //下方进入
    ball.speedY = -1 * ball.speedY;
  } else if (y < x && y > -x + 10) {
    //右侧进入
    ball.speedX = -1 * ball.speedX;
  } else if (y > x && y < -x + 10) {
    //左侧进入
    ball.speedX = -1 * ball.speedX;
  } else if (y < x && y < -x + 10) {
    //上方进入
    ball.speedY = -1 * ball.speedY;
  } else {
    // 此刻在分界线上  上一个时刻点还在分界线上
    var col = Math.floor(square.offsetLeft / 10);
    var row = Math.floor(square.offsetTop / 10);
    if (y == -x + 10 && y < x) {
      //正右上
      if (squareSet[row - 1][col] != null) {
        //上面存在，向右反弹
        ball.speedX = -1 * ball.speedX;
      } else {
        ball.speedY = -1 * ball.speedY;
      }
    } else if (y == -x + 10 && y > x) {
      //正左下
      if (row + 1 < 40 && squareSet[row + 1][col] != null) {
        //上面存在，向右反弹
        ball.speedX = -1 * ball.speedX;
      } else {
        ball.speedY = -1 * ball.speedY;
      }
    } else if (y == x && y > -x + 10) {
      //正右下
      if (row + 1 < 40 && squareSet[row + 1][col] != null) {
        //上面存在，向右反弹
        ball.speedX = -1 * ball.speedX;
      } else {
        ball.speedY = -1 * ball.speedY;
      }
    } else if (y == x && y < -x + 10) {
      //正左上
      if (squareSet[row - 1][col] != null) {
        //上面存在，向右反弹
        ball.speedX = -1 * ball.speedX;
      } else {
        ball.speedY = -1 * ball.speedY;
      }
    }
  }
}

// 消失
function disappear(x, y) {
  // 从dom元素中移除
  game.removeChild(squareSet[x][y]);
  // 置为null
  squareSet[x][y] = null;
  score += 10;
  // 计算长度  分数越高越来越短
  board.style.width = 80 - (score / 100) * 2 + 'px';
}
// 检查结束
function checkFinish() {
  if (ballSet.length == 0) {
    clearInterval(timer);
    alert('游戏结束,最后得分' + score);
  }
}
