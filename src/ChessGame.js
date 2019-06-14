var REDPLAYER = 1;
var BLACKPLAYER = 2;

var chessAry = new Array();
var Map = new Array();
var myCanvas = document.getElementById('myCanvas');
var context = myCanvas.getContext('2d');
// var qipan = document.getElementById('qipan');
// var shuai = document.getElementById("Info1");
// var jiang = document.getElementById("Info2");
// var message_txt = document.getElementById('message_txt');

//棋盘点类
var Point = require('./utils/Point.js');

//初始化棋盘
function initMap() {
	var i,j;
	for (i = 1; i <= 9; i++) {
		Map[i] = new Array();
		for (j = 1; j <=10; j++) {
			Map[i][j] = -1;
		}
	}
}

//初始化
function init() {
	initChess();
	// shuai.style.display = "block";
	// jiang.style.display = "none";
	myCanvas.addEventListener('mousedown', doMouseDown, false);
}

const chessData = require('./ChessData');
var Chess = require('./components/Chess.js');

function initChess() {
	// console.log(chessData);
	for (const name in chessData) {
		var faction = chessData[name]; //红以及黑
		var color = name == "red" ? 1 : 2;
		for (var chess of faction) {
			for (var n = 0; n < chess.pos.length; n++) {
				var c = new Chess(color, chess.name, chess.pos[n]);
				chessAry.push(c);
				Map[chess.pos[n].x][chess.pos[n].y] = chess.value + n;
			}
		}
	}
	console.log(Map);
	console.log(chessAry);
}

function doMouseDown(e) {

}

module.exports = {
	initMap: initMap,
	init: init
}