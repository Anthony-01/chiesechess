const Point = require('./utils/Point.js');

module.exports = {
	red: [
		{
			name: "兵",
			count: 5,
			pos: [new Point(1, 7), new Point(3, 7),new Point(5, 7), new Point(7, 7), new Point(9, 7)],
			value: 27
		},
		{
			name: "炮",
			count: 2,
			pos: [new Point(2, 8), new Point(8, 8)],
			value: 25
		},
		{
			name: "车",
			count: 2,
			pos: [new Point(1, 10), new Point(9, 10)],
			value: 23
		},
		{
			name: "马",
			count: 2,
			pos: [new Point(2, 10), new Point(8, 10)],
			value: 21
		},
		{
			name: "相",
			count: 2,
			pos: [new Point(3, 10), new Point(7, 10)],
			value: 19
		},
		{
			name: "仕",
			count: 2,
			pos: [new Point(4, 10), new Point(6, 10)],
			value: 17
		},
		{
			name: "帅",
			count: 1,
			pos: [new Point(5, 10)],
			value: 16
		}
	],
	black: [
		{
			name: "卒",
			count: 5,
			pos: [new Point(1, 4), new Point(3, 4),new Point(5, 4), new Point(7, 4), new Point(9, 4)],
			value: 11
		},
		{
			name: "炮",
			count: 2,
			pos: [new Point(2, 3), new Point(8, 3)],
			value: 9
		},
		{
			name: "车",
			count: 2,
			pos: [new Point(1, 1), new Point(9, 1)],
			value: 7
		},
		{
			name: "马",
			count: 2,
			pos: [new Point(2, 1), new Point(8, 1)],
			value: 5
		},
		{
			name: "象",
			count: 2,
			pos: [new Point(3, 1), new Point(7, 1)],
			value: 3
		},
		{
			name: "士",
			count: 2,
			pos: [new Point(4, 1), new Point(6, 1)],
			value: 1
		},
		{
			name: "将",
			count: 1,
			pos: [new Point(5, 1)],
			value: 0
		}
	]
}