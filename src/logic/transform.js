// import * as move from './GameLogic.ts';
var move = require('./GameLogic.ts')
var moveMaster = new move.MoveMaster();
var Point = require('../utils/Point.js');
var copyArray = require('../utils/copyArray.js');
//

function setMap(map) {
	//位置转化
	var copy = positionTransform(map);
	// var copy = copyArray(map);
	//数值转化
	valueTransform(copy);
	
	
	moveMaster.updateMap(copy);
}

function positionTransform(map) {
	var copy = copyArray(map);

	//转化map;
	//去除第一行以及第一列
	// copy.forEach((value, index) => {
	// 	for (let n = 0; n < value.length / 2; n++) {
	// 		let temp = value[n];
	// 		copy[index][n] = copy[index][copy[index].length - 1 - n]; 
	// 		copy[index][copy[index].length - 1 - n] = temp;
	// 	}
	// });
	return copy;
}

function valueTransform(map) {
	map.forEach(function(row, rowIndex) {
		map[rowIndex] = row.map(transformItem);
	})
}

function transformItem(value, index) {
	var red = value < 16 ? -1 : 1;
	var trans = value < 16 ? value : value - 16;
	switch(trans) {
		case 0: {
			return red * 7;
		}
		case 1:
		case 2: {
			return red * 6;
		}
		case 3:
		case 4: {
			return red * 5;
		}
		case 5:
		case 6: {
			return red * 4;
		}
		case 7:
		case 8: {
			return red * 3;
		}
		case 9:
		case 10: {
			return red * 2;
		}
		case 11:
		case 12:
		case 13:
		case 14:
		case 15: {
			return red * 1;
		}
		default: {
			return 0;
		}
	}
}



function isAbleTo(chess, x, y) {
	var side = chess.player == 1 ? 1 : 0;
	var ary = [];
	var point = transformPoint(chess.pos.x, chess.pos.y);
	var goal = transformPoint(x, y);
	switch(chess.chessName) {
		case "将":
		case "帅": {
			ary = moveMaster.bossMove(point,side);
			return match(ary, goal);
			break;
		}
		case "兵":
		case "卒": {
			ary = moveMaster.binMove(point,side);
			return match(ary, goal);
			// return moveMaster.binMove(transformPoint(x, y),side) != 0 ? true : false;
			break;
		}
		case "仕":
		case "士": {
			ary = moveMaster.shiMove(point,side);
			return match(ary, goal);
			// return moveMaster.shiMove(transformPoint(x, y),side) != 0 ? true : false;
			break;
		}
		case "象":
		case "相": {
			ary = moveMaster.xiangMove(point,side);
			return match(ary, goal);
			// return moveMaster.xiangMove(transformPoint(x, y),side) != 0 ? true : false;
			break;
		}
		case "马": {
			ary = moveMaster.maMove(point,side);
			return match(ary, goal);
			// return moveMaster.maMove(transformPoint(x, y),side) != 0 ? true : false;
			break;
		}
		case "车": {
			ary = moveMaster.juMove(point,side);
			return match(ary, goal);
			// return moveMaster.juMove(transformPoint(x, y),side) != 0 ? true : false;
			break;
		}
		case "炮": {
			ary = moveMaster.paoMove(point,side);
			return match(ary, goal);
			// return moveMaster.paoMove(transformPoint(x, y),side) != 0 ? true : false;
			break;
		}
	}
}

/**
 * 数组中是否有匹配的点
 */
function match(ary, point) {
	//forEach value
	var back = false;
	ary.forEach(value => {
		if (value.x == point.x && value.y == point.y) {
			back = true;
		}
	})
	return back;
}



function transform(map) {
	var row = [];
	for (var n = 0; n <= 10; n++) {
		row.push(-1);
	}
	map.forEach(function (row) {
		row.unshift(-1);
	});
	map.unshift(row);
	return map;
}

function transformPoint(x, y) {
	//x、y的转化以及数值的转化
	//0,0 -> 0,0
	return new Point(x,  y);
}

module.exports = {
	setMap: setMap,
	isAbleTo: isAbleTo
}