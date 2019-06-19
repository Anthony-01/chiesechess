const REDPLAYER = 1;
const BLACKPLAYER = 2;

const C_INTERVAL = 76;
const C_OFFX = 24;

function Chess(player, chessName, chesspos) {
	this.player = player;
	this.chessName = chessName;
	this.pos = {};
	this.SetPos(chesspos.x, chesspos.y);
}

Chess.prototype.showPic = function(context) {
	if (this.player == REDPLAYER) {
		var img1 = document.getElementById("Img" + this.chessName);
		context.drawImage(img1, this.x, this.y);
	} else {
		var img2 = document.getElementById("Img" + this.chessName + 1);
		context.drawImage(img2, this.x, this.y);
	}
}

Chess.prototype.SetPos = function(x, y) {
	this.pos.x = x;
	this.pos.y = y;
	this.x = (this.pos.x) * C_INTERVAL + C_OFFX;
	this.y = (this.pos.y) * C_INTERVAL + C_OFFX;
}

Chess.prototype.drawSelectedChess = function(context) {
	context.lineWidth = 5;
	context.strokeStyle = "red";
	context.beginPath();
	context.rect(this.x - 2, this.y - 2, 65, 65);
	context.stroke();
}

module.exports = {
	Chess: Chess,
	C_INTERVAL: C_INTERVAL,
	C_OFFX: C_OFFX
};