//Entity Area


var mapArray1 =
[[2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 17, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
[2, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 0, 0, 8, 0, 0, 1, 0, 0, 0, 0, 0, 0, 8, 13, 8, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 8, 0, 0, 1, 1, 0, 12, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
[1, 0, 0, 0, 0, 0, 8, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 8, 1, 1, 0, 0, 8, 0, 0, 1, 1, 1, 0, 8, 0, 8, 0, 8, 0, 8, 1, 1],
[1, 0, 8, 0, 8, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 8, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 1, 1, 1, 19, 0, 1, 1, 1, 9, 9, 9, 9, 9, 9, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 7, 6, 6, 6, 4, 6, 6, 6, 7, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 11, 5, 5, 5, 5, 5, 5, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 11, 5, 5, 5, 5, 5, 5, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var mapArray2 =
[[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[2, 2, 2, 2, 2, 2, 2, 12, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
[1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 8, 0, 13, 0, 1],
[1, 14, 0, 0, 0, 0, 0, 2, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1, 1],
[1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 1, 1, 0, 0, 0, 1, 1, 9, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
[1, 1, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 1, 1, 0, 0, 8, 11, 5, 5, 5, 10, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
[1, 0, 8, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 8, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 9, 9, 9, 9, 1],
[1, 1, 1, 1, 4, 1, 1, 4, 1, 11, 5, 5, 5, 5, 5, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 4, 1, 1, 1, 1, 1, 11, 5, 5, 5, 5, 10]
];

var mapArray3 =
[[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
[1, 0, 0, 0, 12, 12, 12, 12, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 19, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1],
[1, 0, 14, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1],
[1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 9, 1, 13, 0, 1],
[1, 1, 1, 1, 4, 6, 4, 7, 1, 1, 1, 1, 1, 1, 9, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 5, 5, 5, 10, 1, 1, 1]
];


var mapArray4 =
[[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
[1, 0, 0, 0, 12, 12, 0, 0, 0, 1, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 19, 0, 0, 0, 0, 0, 0, 0, 2, 2, 17, 17, 17, 17, 2, 2, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 13, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 1, 9, 9, 9, 9, 1, 9, 9, 9, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 15, 0, 0, 1],
[1, 0, 14, 0, 0, 0, 1, 1, 5, 5, 5, 5, 1, 5, 5, 5, 1, 0, 0, 0, 0, 0, 1, 0, 0, 4, 4, 7, 6, 1, 1, 1, 1, 4, 7, 4, 4, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var mapArray5 =
[[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
[1, 0, 0, 12, 0, 0, 1, 0, 0, 0, 12, 0, 0, 0, 2, 0, 0, 0, 1, 0, 2, 5, 5, 5, 5, 5, 5, 2, 12, 12, 12, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 3, 0, 0, 1, 0, 2, 2, 17, 2, 2, 2, 17, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 19, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 13, 0, 1],
[1, 2, 2, 0, 0, 0, 1, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 1],
[1, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 15, 0, 0, 15, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 15, 0, 15, 0, 15, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
[1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1]
];

var mapArray6 =
[[2, 0, 0, 2, 2, 2, 2, 2, 2, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 2, 17, 2, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 1, 0, 0, 1, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 15, 0, 15, 0, 2, 2, 2, 2, 0, 0, 1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 1, 9, 9, 9, 9, 9, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
[1, 1, 1, 1, 0, 0, 1, 5, 5, 5, 5, 5, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
[1, 1, 1, 0, 0, 0, 1, 5, 5, 5, 5, 5, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 2, 17, 2, 17, 2, 17, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 8, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 0, 0, 0, 0, 1],
[1, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 0, 13, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var mapArray7 =
[[2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];


var test =
[[2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 3, 0, 19, 0, 0, 19, 0, 0, 19, 0, 0, 19, 0, 0, 19, 0, 0, 19, 0, 0, 19, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 13, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

// Map Template
var Default =
[[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];


var AM = new AssetManager();

AM.queueDownload("./img/horz_walk_left.png");
AM.queueDownload("./img/horz_walk_right.png");
AM.queueDownload("./img/right_jump.png");
AM.queueDownload("./img/left_jump.png");
AM.queueDownload("./img/background_tile.png");
AM.queueDownload("./img/lava.png");
AM.queueDownload("./img/stonebackground.png");
AM.queueDownload("./img/skeleton_spike2.png");
AM.queueDownload("./img/SpikeWithSkull2.png");
AM.queueDownload("./img/Empty_Spike2.png");
AM.queueDownload("./img/torch.png");
AM.queueDownload("./img/surface_lava.png");
AM.queueDownload("./img/shot.png");
AM.queueDownload("./img/right_forward_fall.png");
AM.queueDownload("./img/right_forward_facing_fall_death.png");
AM.queueDownload("./img/forward_facing_spike_death.png");
AM.queueDownload("./img/left_forward_facing_spike_death.png");
AM.queueDownload("./img/leftlavaSide.png");
AM.queueDownload("./img/lavarightside.png");
AM.queueDownload("./img/BrokenTile.png");
AM.queueDownload("./img/right_swing.png");
AM.queueDownload("./img/left_swing.png");
AM.queueDownload("./img/left_stand.png");
AM.queueDownload("./img/right_stand.png");
AM.queueDownload("./img/left_fall_forward.png");
AM.queueDownload("./img/left_fall_forward_death.png");
AM.queueDownload("./img/title.png");
AM.queueDownload("./img/right_dismount.png");
AM.queueDownload("./img/left_dismount.png");
AM.queueDownload("./img/target.png");
AM.queueDownload("./img/left_facing_open_chest.png");
AM.queueDownload("./img/chest_open_rightside.png");
AM.queueDownload("./img/doors.png");
AM.queueDownload("./img/lavaCeiling.png");
AM.queueDownload("./img/smoke_puff_1.png");
AM.queueDownload("./img/smoke_puff_2.png");
AM.queueDownload("./img/smoke_puff_3.png");
AM.queueDownload("./img/smoke_puff_4.png");
AM.queueDownload("./img/smoke_puff_5.png");
AM.queueDownload("./img/smoke_puff_6.png");
AM.queueDownload("./img/platfrom.png");
AM.queueDownload("./img/Blood_splatter.png");
AM.queueDownload("./img/crush.png");
AM.queueDownload("./img/Blood-Splatter_dir.png");
AM.queueDownload("./img/drip.png");
AM.queueDownload("./img/Key.png");
AM.queueDownload("./img/InventoryBack.png");
AM.queueDownload("./img/Revive.png");
AM.queueDownload("./img/invincibility.png");
AM.queueDownload("./img/safefall.png");
AM.queueDownload("./img/lowGrav.png");
AM.queueDownload("./img/InvincibilityItem.png");
AM.queueDownload("./img/keyItem.png");
AM.queueDownload("./img/reviveItem.png");
AM.queueDownload("./img/lowgravItem.png");
AM.queueDownload("./img/lowGrav.png");
AM.queueDownload("./img/lowGravGray.png");
AM.queueDownload("./img/safefallGray.png");
AM.queueDownload("./img/invincibilityGray.png");
AM.queueDownload("./img/lowGravWaves.png");
AM.queueDownload("./img/invincibilityBubble.png");



//when mute === true : mute
var MUTE = false;
var MM = new MusicManager();
MM.queueDownload("./sound/bgm.mp3");
MM.queueDownload("./sound/bgm2.mp3");
MM.queueDownload("./sound/bgm3.mp3");
MM.queueDownload("./sound/spikeDeath.flac");
MM.queueDownload("./sound/fallDeath.wav");
MM.queueDownload("./sound/openChest.wav");
MM.queueDownload("./sound/walk.wav");
MM.queueDownload("./sound/hookshot.wav");
MM.queueDownload("./sound/openDoor.wav");
MM.queueDownload("./sound/land.wav");
MM.queueDownload("./sound/flameDeath.mp3");
MM.queueDownload("./sound/falling.mp3");
MM.queueDownload("./sound/fail.wav");
//access it in hero.js, so music can be start and stop.
var backgroundMusic = new BackgroundMusic();


MM.downloadAll(AM.downloadAll(function () {

  var canvas = document.getElementById("GameWorld");
  var ctx = canvas.getContext("2d");

  var inventoryCanvas = document.getElementById("Inventory");
  var ctx2 = inventoryCanvas.getContext("2d");

  //initialize bgm for the first stage.
  backgroundMusic.setMusic(MM.getSoundEF("./sound/bgm.mp3"));
 /*   backgroundMusic.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    }, false);*/



  var gameEngine = new GameEngine();


  gameEngine.ctx = ctx;

  //******************************************************************//
  //                          Title Screen                            //
  //******************************************************************//
  var bg = new Background(gameEngine, "./img/title.png", 1250, 900);
  var startbtn = new StartButton(25, 465, gameEngine);
  var target = new Target(gameEngine);
  var title_scene_elements = [bg, startbtn, target];
  var title = new Scene(title_scene_elements, gameEngine, 0, false, false);


  //******************************************************************//
  //                          Level 1 - part 1                        //
  //******************************************************************//
  var bg = new Background(gameEngine, "./img/stonebackground.png", 1250, 900);
  var map = new Map(gameEngine, mapArray1);
  var hero = new Hero(gameEngine, 100, 300, ctx2);
  var hookshot = new Hookshot(gameEngine, hero);
  var target1 = new Target(gameEngine);
  var scene_one_elements = [bg, map, hero, hookshot, target1];
  var Scene1 = new Scene(scene_one_elements, gameEngine, 1, true, false);

  //******************************************************************//
  //                          Level 1 - part 2                        //
  //******************************************************************//
  var bg2 = new Background(gameEngine, "./img/stonebackground.png", 1250, 900);
  var map2 = new Map(gameEngine, mapArray2);
  var hero2 = new Hero(gameEngine, 96, 300, ctx2);
  var hookshot2 = new Hookshot(gameEngine, hero2);
  var target2 = new Target(gameEngine);
  var scene_two_elements = [bg2, map2, hero2, hookshot2, target2];
  var Scene2 = new Scene(scene_two_elements, gameEngine, 2, false, false);

  //******************************************************************//
  //                          Level 1 - part 3                        //
  //******************************************************************//
  var bg3 = new Background(gameEngine, "./img/stonebackground.png", 1250, 900);
  var map3 = new Map(gameEngine, mapArray3);
  var hero3 = new Hero(gameEngine, 100, 640, ctx2);
  var hookshot3 = new Hookshot(gameEngine, hero3);
  var target3 = new Target(gameEngine);
  var scene_three_elements = [bg3, map3, hero3, hookshot3, target3];
  var Scene3 = new Scene(scene_three_elements, gameEngine, 3, false, false);

  //******************************************************************//
  //                          Level 1 - part 4                        //
  //******************************************************************//
  var bg4 = new Background(gameEngine, "./img/stonebackground.png", 1250, 900);
  var map4 = new Map(gameEngine, mapArray4);
  var hero4 = new Hero(gameEngine, 100, 640, ctx2);
  var hookshot4 = new Hookshot(gameEngine, hero4);
  var target4 = new Target(gameEngine);
  var scene_four_elements = [bg4, map4, hero4, hookshot4, target4];
  var Scene4 = new Scene(scene_four_elements, gameEngine, 4, false, true);

  //******************************************************************//
  //                          Level Complete                          //
  //******************************************************************//
  var bg4 = new Background(gameEngine, "./img/stonebackground.png", 1250, 900);
  var nextbutton = new NextButton(280, 568, gameEngine);
  var target4 = new Target(gameEngine);
  var Level_complete_scene_elements = [bg4, nextbutton, target4];
  var complete = new Scene(Level_complete_scene_elements, gameEngine, 4, false, false);




  //******************************************************************//
  //                          Level 2 - part 1                        //
  //******************************************************************//
  var bg2_1 = new Background(gameEngine, "./img/stonebackground.png", 1250, 900);
  var map2_1 = new Map(gameEngine, mapArray5);
  var hero2_1 = new Hero(gameEngine, 96, 300, ctx2);
  var hookshot2_1 = new Hookshot(gameEngine, hero2_1);
  var target2_1 = new Target(gameEngine);
  var scene_2_1_elements = [bg2_1, map2_1, hero2_1, hookshot2_1, target2_1];
  var Scene2_1 = new Scene(scene_2_1_elements, gameEngine, 5, true, false);

  //******************************************************************//
  //                          Level 2 - part 2                        //
  //******************************************************************//
  var bg2_2 = new Background(gameEngine, "./img/stonebackground.png", 1250, 900);
  var map2_2 = new Map(gameEngine, mapArray6);
  var hero2_2 = new Hero(gameEngine, 96, 300, ctx2);
  var hookshot2_2 = new Hookshot(gameEngine, hero2_2);
  var target2_2 = new Target(gameEngine);
  var scene_2_2_elements = [bg2, map2, hero2, hookshot2, target2];
  var Scene2_2 = new Scene(scene_2_2_elements, gameEngine, 6, false, false);

  //******************************************************************//
  //                          Level 2 - part 3                        //
  //******************************************************************//
  var bg2_3 = new Background(gameEngine, "./img/stonebackground.png", 1250, 900);
  var map2_3 = new Map(gameEngine, mapArray7);
  var hero2_3 = new Hero(gameEngine, 100, 640, ctx2);
  var hookshot2_3 = new Hookshot(gameEngine, hero2_3);
  var target2_3 = new Target(gameEngine);
  var scene_2_3_elements = [bg2_3, map2_3, hero2_3, hookshot2_3, target2_3];
  var Scene2_3 = new Scene(scene_2_3_elements, gameEngine, 7, false, false);

  //******************************************************************//
  //                          Level Complete                          //
  //******************************************************************//
  var bg2_c = new Background(gameEngine, "./img/stonebackground.png", 1250, 900);
  var nextbutton2_c = new NextButton(280, 568, gameEngine);
  var target2_c = new Target(gameEngine);
  var Level_2_c_elements = [bg2_c, nextbutton2_c, target2_c];
  var complete2_c = new Scene(Level_2_c_elements, gameEngine, 8, false, false);


  //******************************************************************//
  //                         Load Scenes                              //
  //******************************************************************//


  //Set Scenes
  var gameScenes = [title, Scene1, Scene2, Scene3, Scene4, complete, Scene2_1, Scene2_2, Scene2_3, complete2_c];
  gameEngine.scenes = gameScenes;
  gameEngine.init(ctx);
  title.init();


  gameEngine.start();

}));
