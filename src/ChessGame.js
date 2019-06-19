var REDPLAYER = 1;
var BLACKPLAYER = 2;

var localPlayer = REDPLAYER; // localPlayer记录自己是红方还是黑方
var chessAry = new Array(32);
var Map = new Array();
var myCanvas = document.getElementById('myCanvas');
var context = myCanvas.getContext('2d');
var qipan = document.getElementById('qipan');
var shuai = document.getElementById("Info1");
var jiang = document.getElementById("Info2");
var message_txt = document.getElementById('message_txt');

//棋盘点类
var Point = require('./utils/Point.js');
//走棋规则
var transfrom = require('./logic/transform.js');

//初始化棋盘
function initMap() {
	var i,j;
	for (i = 0; i < 9; i++) {
		Map[i] = new Array();
		for (j = 0; j < 10; j++) {
			Map[i][j] = -1;
		}
	}
}

//初始化
function init() {
	initChess();
	shuai.style.display = "block";
	jiang.style.display = "none";
	myCanvas.addEventListener('mousedown', doMouseDown, false);
}

const chessData = require('./ChessData');
var myChess = require('./components/Chess.js');

function initChess() {
	// console.log(chessData);
	for (const name in chessData) {
		var faction = chessData[name]; //红以及黑
		var color = name == "red" ? 1 : 2;
		for (var chess of faction) {
			for (var n = 0; n < chess.pos.length; n++) {
				var c = new myChess.Chess(color, chess.name, chess.pos[n]);
				chessAry[chess.value + n] = c;
				//棋盘上用值代表棋子
				Map[chess.pos[n].x][chess.pos[n].y] = chess.value + n;
			}
		}
	}
	transfrom.setMap(Map);
	drawAll();
	// console.log(Map);
	// console.log(chessAry);
}

/**
 * 绘制棋盘和三十二颗棋子
 */
function drawAll() {
	//棋盘
	context.drawImage(qipan, 0, 0);
	chessAry.forEach(cell => {
		cell.showPic(context);
	})
}

/**
 * 绘制剩下的棋子
 */
function draw() {
	context.drawImage(qipan, 0, 0);
	for (var i = 0; i < 9; i++) {
		for (var j = 0; j < 10; j++) {
			if (Map[i][j] != -1) { //此处有棋子
				chessAry[Map[i][j]].showPic(context);
			}
		}
	}
}

function doMouseDown(e) {
	var x = e.pageX;
	var y = e.pageY;
	var goal = getPointOnCanvas(x, y);
	stageClick(goal.x, goal.y);

}

function getPointOnCanvas(x, y) {
	var bbox = myCanvas.getBoundingClientRect();
	return {
		x: x - bbox.left * (myCanvas.width / bbox.width ),
		y: y - bbox.top * (myCanvas.height / bbox.height )
	}
}

var m_lastCard = null;

function stageClick(x, y) {
	var tempx = parseInt(Math.floor(x - myChess.C_OFFX) / myChess.C_INTERVAL),
		tempy = parseInt(Math.floor(y - myChess.C_OFFX) / myChess.C_INTERVAL);

	if (tempx < 0 || tempx > 8 || tempy < 0 || tempy > 9) {
		message_txt.innerHTML = "x: " + tempx + ", y:" + tempy;
		return;
	}
	var selected = chessAry[Map[tempx][tempy]];
	// if (selected == null) {
	// 	let str = "";
	// 	if (m_lastCard) {
	// 		str = "请选择目标棋子";
	// 	} else {
	// 		str = "请选择准备移动的棋子";
	// 	}
	// 	message_txt.innerHTML = str;
	// 	return;
	// }
	if (isMyChess(selected)) { //点击自己的棋子
		// if (isMyChess(selected)) {
			if (m_lastCard) {
				//原来的m_lastCard要变回正常
				draw();
			}
			m_lastCard = selected;
			m_lastCard.drawSelectedChess(context);
		// } else {
		// 	message_txt.innerHTML = "请选择准备移动的棋子";
		// 	return;temp代表选中的
		// }
	} else { //点击的不是自己的棋子
		if (m_lastCard) {
			if (transfrom.isAbleTo(m_lastCard, tempx, tempy)) { //是否符合走棋规则
				var originx = m_lastCard.pos.x,
					originy = m_lastCard.pos.y;
				var goal = Map[tempx][tempy];
				//新地点等于m-laster
				Map[tempx][tempy] = Map[originx][originy];;
				Map[originx][originy] = -1;
				m_lastCard.SetPos(tempx, tempy);
				transfrom.setMap(Map);
				draw();
				changePlay();

				if (goal == 0) {
					message_txt.innerHTML = "红方赢了";
				}
				if (goal == 16) {
					message_txt.innerHTML = "黑方赢了";
				}
				

			} else {
				message_txt.innerHTML = "不符合走动规则";
				return;
			}
		} else {
			message_txt.innerHTML = "请选择准备移动的棋子";
			return;
		}
	}

}

function isMyChess(c) {
	if (c == undefined) return false;
	if (c.player != localPlayer) {
	   message_txt.innerHTML="单击成对方棋子了!"
	   return false;			   
	}
	return true;
} 

function changePlay() {
	if (localPlayer == REDPLAYER) {
		localPlayer = BLACKPLAYER;
		shuai.style.display = "none";
		jiang.style.display = "block";
	} else {
		localPlayer = REDPLAYER;
		shuai.style.display = "block";
		jiang.style.display = "none";
	}
}

module.exports = {
	initMap: initMap,
	init: init,
	initEvent: doMouseDown
}