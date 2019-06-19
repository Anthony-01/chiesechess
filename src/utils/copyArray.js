//copy二维数组
function copyArray(ary) {
	if (ary.length && ary[0].length) {
		let copy = [];
		ary.forEach((value, index) => {
			//value任然时数组
			copy[index] = new Array();
			value.forEach((cell,cellIndex) => {
				copy[index].push(cell);
			})
		})
		return copy;
	} else {
		console.log("复制的并不是二维数组");
		console.log(ary);
		return ary;
	}
}

module.exports = copyArray;