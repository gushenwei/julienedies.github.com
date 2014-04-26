
//全局变量命名空间
window.NGGLOBAL = window.NGGLOBAL || {};

//
NGGLOBAL.opnRedBall = window.opnRedBall = [2, 4, 9, 11, 19, 22];

//列间隔
NGGLOBAL.colCountRef = window.colCountRef = [ 
                   [ 1, 2, 1, 1, 1, 0 ],
                   [ 0, 0, 1, 2, 3, 0 ],
                   [ 2, 0, 2, 0, 2, 0 ],
                   [ 1, 0, 0, 3, 1, 1 ],
                   [ 0, 1, 0, 2, 2, 1 ],
                   [ 1, 1, 1, 2, 0, 1 ],
                   [ 1, 2, 1, 1, 0, 1 ],
                   [ 1, 0, 1, 1, 1, 2 ],
                   [ 0, 3, 1, 1, 1, 0 ],
                   [ 2, 0, 1, 1, 2, 0 ],
                   [ 1, 2, 0, 1, 0, 2 ],
                   [ 1, 0, 3, 0, 1, 1 ],
                   [ 0, 1, 0, 0, 3, 2 ],
                   [ 2, 0, 2, 0, 1, 1 ],
                   [ 0, 1, 2, 3, 0, 0 ],
                   [ 0, 1, 0, 2, 1, 2 ],
                   [ 1, 2, 0, 3, 0, 0 ],
                   [ 2, 0, 2, 2, 0, 0 ],
                   [ 1, 1, 1, 0, 1, 2 ],
                   [ 1, 1, 2, 1, 0, 1 ],
                   [ 2, 1, 0, 0, 1, 2 ],
                   [ 1, 2, 1, 1, 0, 1 ],
                   [ 1, 1, 1, 0, 2, 1 ],
                   [ 0, 2, 1, 1, 0, 2 ],
                   [ 1, 3, 0, 0, 1, 1 ],
                   [ 1, 0, 1, 0, 1, 3 ],
                   [ 0, 2, 1, 0, 2, 1 ],
                   [ 2, 0, 0, 2, 1, 1 ],
                   [ 0, 0, 2, 1, 2, 1 ],
                   [ 2, 2, 0, 1, 1, 0 ],
                   [ 1, 2, 2, 1, 0, 0 ],
                   [ 1, 0, 0, 2, 2, 1 ],
                   [ 1, 1, 1, 1, 1, 1 ],
                   [ 2, 0, 1, 2, 0, 1 ],
                   [ 0, 3, 1, 1, 0, 1 ],
                   [ 1, 0, 3, 0, 2, 0 ],
                   [ 3, 0, 1, 1, 1, 0 ],
                   [ 0, 2, 0, 2, 2, 0 ],
                   [ 1, 0, 2, 0, 0, 3 ],
                   [ 2, 1, 1, 0, 0, 2 ],
                   [ 2, 0, 1, 1, 2, 0 ],
                   [ 0, 0, 0, 2, 3, 1 ],
                   [ 1, 1, 0, 3, 0, 0 ],
                   [ 0, 2, 1, 1, 1, 1 ],
                   [ 0, 2, 2, 1, 0, 1 ],
                   [ 1, 2, 1, 0, 0, 2 ],
                   [ 2, 0, 1, 1, 2, 0 ],
                   [ 1, 0, 1, 2, 2, 0 ],
                   [ 2, 2, 1, 0, 0, 1 ],
                   [ 2, 3, 0, 0, 1, 0 ],
                   [ 1, 0, 1, 1, 2, 1 ],
                   [ 0, 0, 0, 2, 3, 1 ],
                   [ 1, 2, 2, 0, 0, 1 ],
                   [ 0, 0, 2, 1, 2, 1 ],
                   [ 1, 1, 0, 3, 1, 0 ],
                   [ 2, 0, 1, 0, 0, 3 ],
                   [ 0, 0, 2, 1, 0, 3 ],
                   [ 3, 1, 0, 0, 0, 2 ],
                   [ 0, 2, 0, 2, 1, 1 ],
                   [ 2, 1, 1, 1, 1, 0 ],
                   [ 1, 1, 1, 0, 2, 1 ],
                   [ 0, 1, 2, 1, 0, 2 ],
                   [ 0, 1, 2, 1, 1, 1 ],
                   [ 4, 1, 1, 0, 0, 0 ],
                   [ 0, 2, 2, 1, 1, 0 ],
                   [ 0, 0, 0, 1, 3, 2 ],
                   [ 1, 1, 1, 1, 1, 1 ],
                   [ 0, 1, 1, 0, 2, 2 ],
                   [ 2, 2, 0, 1, 0, 1 ]
                 ];
//col

//上间隔
NGGLOBAL.upMarginRef = window.upMarginRef = [ 
                   [ 0, 0, 1, 2, 3, 4 ],
                   [ 1, 2, 2, 3, 7, 7 ],
                   [ 2, 3, 4, 4, 5, 13 ],
                   [ 0, 0, 1, 2, 4, 6 ],
                   [ 0, 0, 3, 6, 7, 23 ],
                   [ 1, 1, 8, 8, 14, 28 ],
                   [ 0, 2, 2, 2, 2, 17 ],
                   [ 0, 1, 4, 5, 5, 16 ],
                   [ 0, 0, 4, 9, 13, 15 ],
                   [ 0, 1, 3, 6, 7, 10 ],
                   [ 0, 0, 2, 4, 10, 17 ],
                   [ 0, 4, 6, 6, 6, 15 ],
                   [ 0, 0, 0, 1, 1, 1 ],
                   [ 0, 0, 2, 3, 5, 5 ],
                   [ 0, 0, 1, 1, 2, 4 ],
                   [ 2, 5, 9, 13, 16, 23 ],
                   [ 2, 3, 4, 6, 6, 7 ],
                   [ 0, 0, 2, 5, 8, 9 ],
                   [ 0, 2, 4, 4, 6, 10 ],
                   [ 1, 2, 5, 6, 8, 12 ],
                   [ 2, 10, 12, 13, 15, 15 ],
                   [ 2, 2, 2, 5, 5, 7 ],
                   [ 2, 4, 4, 5, 6, 12 ],
                   [ 1, 3, 3, 4, 4, 6 ],
                   [ 0, 1, 1, 2, 3, 9 ],
                   [ 1, 2, 2, 2, 7, 10 ],
                   [ 0, 1, 1, 2, 3, 5 ],
                   [ 0, 2, 3, 4, 8, 9 ],
                   [ 0, 0, 4, 6, 10, 10 ],
                   [ 0, 1, 3, 3, 9, 12 ],
                   [ 1, 3, 3, 5, 5, 6 ],
                   [ 0, 1, 2, 3, 6, 7 ],
                   [ 2, 3, 3, 7, 7, 8 ],
                   [ 1, 1, 5, 7, 11, 17 ],
                   [ 0, 1, 3, 3, 7, 7 ],
                   [ 0, 2, 2, 3, 4, 7 ],
                   [ 0, 1, 1, 3, 11, 11 ],
                   [ 1, 1, 2, 4, 6, 9 ],
                   [ 1, 1, 4, 4, 8, 19 ],
                   [ 0, 1, 3, 4, 7, 21 ],
                   [ 0, 2, 4, 4, 5, 7 ],
                   [ 1, 2, 2, 4, 6, 6 ],
                   [ 0, 0, 0, 1, 3, 7 ],
                   [ 0, 2, 2, 3, 4, 5 ],
                   [ 1, 1, 5, 5, 7, 9 ],
                   [ 0, 0, 1, 2, 13, 20 ],
                   [ 0, 1, 2, 4, 5, 6 ],
                   [ 0, 2, 8, 8, 9, 14 ],
                   [ 1, 2, 2, 5, 7, 15 ],
                   [ 2, 2, 3, 4, 11, 12 ],
                   [ 0, 0, 0, 2, 4, 7 ],
                   [ 0, 0, 1, 1, 3, 3 ],
                   [ 0, 0, 1, 4, 6, 6 ],
                   [ 0, 1, 3, 3, 10, 12 ],
                   [ 0, 0, 1, 1, 4, 21 ],
                   [ 0, 1, 1, 2, 2, 7 ],
                   [ 0, 3, 3, 4, 12, 13 ],
                   [ 2, 2, 5, 8, 9, 16 ],
                   [ 0, 2, 4, 5, 6, 7 ],
                   [ 0, 1, 5, 8, 10, 11 ],
                   [ 1, 1, 2, 9, 9, 13 ],
                   [ 0, 1, 2, 2, 3, 6 ],
                   [ 1, 4, 6, 9, 10, 17 ],
                   [ 2, 3, 4, 8, 17, 22 ],
                   [ 0, 1, 1, 1, 1, 11 ],
                   [ 0, 2, 2, 9, 14, 25 ],
                   [ 0, 0, 2, 3, 4, 6 ],
                   [ 0, 1, 2, 6, 8, 9 ],
                   [ 0, 0, 2, 3, 8, 10 ]
                 ];
//up

//下间隔
NGGLOBAL.downMarginRef = window.downMarginRef = [ 
                   [0, 2, 3, 4, 7, 7 ],
                   [0, 1, 1, 2, 4, 5 ],
                   [0, 2, 2, 3, 7, 28 ],
                   [0, 2, 2, 5, 6, 14 ],
                   [1, 2, 2, 4, 8, 13 ],
                   [2, 3, 4, 4, 7, 15 ],
                   [0, 0, 1, 1, 1, 4 ],
                   [0, 0, 2, 3, 8, 23 ],
                   [0, 0, 2, 4, 10, 17 ],
                   [1, 2, 4, 4, 5, 6 ],
                   [0, 1, 1, 2, 2, 4 ],
                   [0, 0, 0, 1, 7, 12 ],
                   [0, 5, 6, 10, 13, 15 ],
                   [0, 0, 5, 6, 6, 10 ],
                   [0, 2, 5, 5, 10, 16 ],
                   [1, 1, 2, 5, 6, 9 ],
                   [0, 0, 2, 3, 6, 23 ],
                   [0, 0, 2, 2, 4, 6 ],
                   [4, 6, 6, 7, 8, 15 ],
                   [2, 3, 4, 4, 6, 15 ],
                   [0, 1, 2, 8, 9, 19 ],
                   [0, 2, 3, 4, 5, 5 ],
                   [1, 2, 2, 5, 12, 13 ],
                   [0, 0, 2, 2, 7, 9 ],
                   [1, 3, 4, 5, 9, 12 ],
                   [1, 1, 2, 3, 3, 10 ],
                   [0, 1, 1, 4, 6, 7 ],
                   [0, 1, 1, 2, 8, 9 ],
                   [0, 3, 3, 4, 8, 10 ],
                   [2, 3, 6, 10, 11, 12 ],
                   [0, 2, 3, 4, 5, 7 ],
                   [1, 3, 3, 7, 7, 9 ],
                   [1, 2, 2, 3, 3, 5 ],
                   [0, 1, 3, 4, 5, 11 ],
                   [ 1, 3, 3, 6, 7, 12 ],
                   [ 0, 1, 4, 6, 9, 17 ],
                   [ 1, 3, 4, 4, 7, 7 ],
                   [ 0, 0, 1, 3, 4, 7 ],
                   [ 1, 1, 2, 2, 3, 11 ],
                   [ 0, 1, 2, 7, 7, 8 ],
                   [ 0, 1, 1, 2, 6, 7 ],
                   [ 0, 1, 4, 5, 7, 9 ],
                   [ 0, 2, 3, 4, 6, 21 ],
                   [ 0, 2, 2, 3, 5, 9 ],
                   [ 0, 2, 2, 5, 13, 20 ],
                   [ 1, 1, 2, 2, 4, 10 ],
                   [ 0, 2, 3, 5, 7, 8 ],
                   [ 1, 2, 2, 3, 5, 14 ],
                   [ 0, 1, 1, 6, 6, 8 ],
                   [ 0, 2, 4, 4, 4, 4 ],
                   [ 0, 0, 1, 1, 2, 4 ],
                   [ 1, 2, 3, 4, 5, 15 ],
                   [ 0, 0, 0, 4, 11, 12 ],
                   [ 0, 0, 1, 3, 6, 10 ],
                   [ 1, 1, 1, 1, 2, 16 ],
                   [ 0, 0, 1, 4, 12, 21 ],
                   [ 0, 0, 1, 2, 5, 7 ],
                   [ 1, 3, 9, 10, 11, 22 ],
                   [ 1, 1, 2, 3, 7, 8 ],
                   [ 2, 2, 2, 5, 8, 13 ],
                   [ 0, 2, 4, 6, 9, 25 ],
                   [ 1, 2, 6, 6, 13, 17 ],
                   [ 0, 1, 1, 3, 5, 11 ],
                   [ 0, 0, 0, 1, 3, 9 ],
                   [ 2, 3, 4, 6, 6, 8 ],
                   [ 0, 1, 1, 2, 3, 4 ],
                   [ 2, 4, 4, 8, 14, 17 ],
                   [ 0, 0, 0, 1, 2, 9 ],
                   [ 0, 2, 2, 9, 9, 10 ],
                   [ 1, 1, 2, 3, 4, 8 ],
                   [ 0, 4, 5, 6, 9, 10 ],
                   [ 0, 0, 1, 2, 3, 12 ],
                   [ 0, 0, 1, 3, 3, 5 ]
                 ];
//down

//数尾
NGGLOBAL.singleDigitRef = window.singleDigitRef = [ 
                  [ 1, 1, 3, 3, 5, 6 ], 
                  [ 2, 4, 6, 6, 7, 9 ],
                  [ 0, 1, 2, 3, 5, 7 ], 
                  [ 2, 2, 4, 5, 7, 9 ],
                  [ 1, 5, 7, 8, 9, 9 ],
                  [ 1, 3, 4, 5, 9, 9 ],
                  [ 4, 4, 6, 6, 6, 8 ],
                  [ 3, 4, 4, 7, 7, 9 ],
                  [ 4, 4, 5, 6, 7, 8 ],
                  [ 1, 1, 3, 7, 7, 8 ],
                  [ 1, 1, 2, 2, 3, 5 ],
                  [ 0, 1, 3, 4, 5, 5 ],
                  [ 0, 1, 2, 2, 4, 9 ],
                  [ 1, 2, 2, 2, 7, 8 ],
                  [ 1, 2, 5, 7, 7, 9 ],
                  [ 0, 3, 3, 4, 6, 6 ],
                  [ 0, 0, 2, 3, 5, 8 ],
                  [ 0, 2, 5, 6, 7, 9 ],
                  [ 1, 2, 2, 4, 6, 7 ],
                  [ 0, 2, 5, 6, 8, 9 ],
                  [ 1, 5, 5, 6, 6, 9 ],
                  [ 0, 3, 3, 8, 9, 9 ],
                  [ 4, 4, 6, 6, 8, 9 ],
                  [ 1, 3, 3, 8, 8, 8 ],
                  [ 1, 4, 4, 7, 9, 9 ],
                  [ 0, 3, 5, 7, 9, 9 ],
                  [ 1, 1, 2, 3, 3, 4 ],
                  [ 0, 0, 1, 3, 6, 8 ],
                  [ 1, 2, 4, 4, 5, 9 ],
                  [ 2, 3, 3, 5, 7, 8 ],
                  [ 1, 3, 4, 7, 7, 7 ],
                  [ 0, 2, 4, 8, 8, 8 ],
                  [ 0, 1, 4, 5, 6, 9 ],
                  [ 0, 2, 5, 8, 9, 9 ],
                  [ 0, 1, 3, 5, 7, 8 ],
                  [ 0, 1, 2, 3, 4, 9 ],
                  [ 1, 1, 1, 4, 8, 9 ],
                  [ 1, 3, 5, 5, 7, 9 ],
                  [ 2, 4, 5, 9, 9, 9 ],
                  [ 0, 1, 2, 2, 3, 9 ],
                  [ 1, 2, 3, 3, 4, 7 ],
                  [ 4, 4, 5, 6, 6, 7 ],
                  [ 0, 1, 3, 3, 7, 8 ],
                  [ 0, 0, 1, 2, 5, 9 ],
                  [ 3, 4, 4, 5, 7, 9 ],
                  [ 0, 2, 5, 7, 8, 9 ],
                  [ 0, 1, 4, 6, 6, 7 ],
                  [ 1, 2, 3, 7, 7, 9 ],
                  [ 0, 0, 0, 3, 6, 8 ],
                  [ 0, 0, 1, 4, 5, 6 ],
                  [ 1, 1, 2, 3, 5, 6 ],
                  [ 0, 0, 1, 4, 6, 8 ],
                  [ 0, 1, 2, 6, 6, 7 ],
                  [ 1, 2, 4, 6, 7, 9 ],
                  [ 0, 2, 3, 4, 8, 9 ],
                  [ 0, 1, 4, 6, 7, 7 ],
                  [ 1, 2, 2, 3, 4, 9 ],
                  [ 2, 3, 3, 3, 5, 8 ],
                  [ 1, 1, 3, 4, 5, 8 ],
                  [ 2, 3, 7, 7, 8, 9 ],
                  [ 1, 1, 2, 7, 8, 9 ],
                  [ 0, 3, 4, 4, 5, 6 ],
                  [ 2, 3, 3, 4, 4, 7 ],
                  [ 0, 1, 1, 3, 5, 9 ],
                  [ 1, 2, 3, 4, 5, 6 ],
                  [ 1, 1, 2, 6, 7, 8 ],
                  [ 0, 2, 3, 5, 5, 8 ],
                  [ 2, 3, 4, 4, 5, 9 ],
                  [ 1, 3, 4, 7, 8, 9 ],
                  [ 1, 2, 2, 4, 9, 9 ]
                 ];
//digit

//
NGGLOBAL.colMap = window.colMap = [ 
                  [         ], //0
                  [ 1, 1, 9 ], //1
                  [ 1, 0, 0 ], //2
                  [ 1, 0, 5 ], //3
                  [ 2, 0, 0 ], //4
                  [ 2, 9, 2 ], //5
                  [ 3, 2, 5 ], //6
                  [ 1, 2, 4 ], //7
                  [ 3, 0, 9 ], //8
                  [ 3, 0, 0 ], //9
                  [ 2, 3, 14 ], //10  
                  [ 4, 3, 0 ], //11
                  [ 1, 1, 3 ], //12
                  [ 2, 3, 8 ], //13
                  [ 4, 5, 2 ], //14
                  [ 2, 1, 3 ], //15
                  [ 3, 9, 4 ], //16
                  [ 4, 3, 10 ], //17
                  [ 4, 10, 4 ], //18
                  [ 5, 5, 0 ], //19
                  [ 3, 2, 3 ], //20
                  [ 3, 2, 1 ], //21
                  [ 6, 3, 0 ], //22  
                  [ 4, 4, 7 ], //23
                  [ 5, 4, 2 ], //24
                  [ 4, 4, 3 ], //25
                  [ 6, 4, 23 ], //26
                  [ 4, 12, 1 ], //27
                  [ 5, 1, 1 ], //28
                  [ 5, 2, 13 ], //29
                  [ 6, 6, 8 ], //30
                  [ 6, 4, 6 ], //31
                  [ 5, 1, 10 ], //32
                  [ 6, 0, 1 ]  //33
                ];






