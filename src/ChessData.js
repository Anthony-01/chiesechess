const Point = require('./utils/Point.js');

module.exports = {
	red: [
		{
			name: "兵",
			count: 5,
			pos: [new Point(0, 6), new Point(2, 6),new Point(4, 6), new Point(6, 6), new Point(8, 6)],
			value: 27
		},
		{
			name: "炮",
			count: 2,
			pos: [new Point(1, 7), new Point(7, 7)],
			value: 25
		},
		{
			name: "车",
			count: 2,
			pos: [new Point(0, 9), new Point(8, 9)],
			value: 23
		},
		{
			name: "马",
			count: 2,
			pos: [new Point(1, 9), new Point(7, 9)],
			value: 21
		},
		{
			name: "相",
			count: 2,
			pos: [new Point(2, 9), new Point(6, 9)],
			value: 19
		},
		{
			name: "士",
			count: 2,
			pos: [new Point(3, 9), new Point(5, 9)],
			value: 17
		},
		{
			name: "帅",
			count: 1,
			pos: [new Point(4, 9)],
			value: 16
		}
	],
	black: [
		{
			name: "卒",
			count: 5,
			pos: [new Point(0, 3), new Point(2, 3),new Point(4, 3), new Point(6, 3), new Point(8, 3)],
			value: 11
		},
		{
			name: "炮",
			count: 2,
			pos: [new Point(1, 2), new Point(7, 2)],
			value: 9
		},
		{
			name: "车",
			count: 2,
			pos: [new Point(0, 0), new Point(8, 0)],
			value: 7
		},
		{
			name: "马",
			count: 2,
			pos: [new Point(1, 0), new Point(7, 0)],
			value: 5
		},
		{
			name: "象",
			count: 2,
			pos: [new Point(2, 0), new Point(6, 0)],
			value: 3
		},
		{
			name: "仕",
			count: 2,
			pos: [new Point(3, 0), new Point(5, 0)],
			value: 1
		},
		{
			name: "将",
			count: 1,
			pos: [new Point(4, 0)],
			value: 0
		}
	]
}