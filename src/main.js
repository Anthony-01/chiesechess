//游戏入口

//游戏输赢，用策略模式去实现

var chess = require('./ChessGame.js');

chess.initMap();
chess.init();

document.getElementsByTagName("body")[0].addEventListener("click", chess.initEvent, false);