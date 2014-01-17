//
window.opnRedBall = [8, 10, 12, 14, 18, 28];

//列间隔
window.colCountRef = [ 
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
                   [ 1, 2, 2, 1, 0, 0 ]
                 ];

//上间隔
window.upMarginRef = [ 
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
                   [ 1, 3, 3, 5, 5, 6 ]
                 ];

//下间隔
window.downMarginRef = [ 
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
                   [ 1, 3, 3, 6, 7, 12 ]
                 ];

//数尾
window.singleDigitRef = [ 
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
                  [ 0, 2, 4, 8, 8, 8 ]
                 ];

//
window.colMap = [ 
                  [         ], //0
                  [ 1, 7, 3 ], //1
                  [ 1, 19, 14 ], //2
                  [ 1, 4, 1 ], //3
                  [ 2, 1, 1 ], //4
                  [ 1, 2, 17 ], //5
                  [ 1, 4, 4 ], //6
                  [ 3, 5, 1 ], //7
                  [ 1, 7, 0 ], //8
                  [ 2, 3, 6 ], //9
                  [ 2, 3, 0 ], //10  
                  [ 3, 2, 4 ], //11
                  [ 3, 12, 0 ], //12
                  [ 3, 7, 8 ], //13
                  [ 4, 6, 0 ], //14
                  [ 1, 3, 2 ], //15
                  [ 4, 1, 9 ], //16
                  [ 4, 11, 1 ], //17
                  [ 5, 1, 0 ], //18
                  [ 3, 3, 3 ], //19
                  [ 4, 8, 6 ], //20
                  [ 5, 3, 1 ], //21
                  [ 4, 9, 3 ], //22  
                  [ 3, 2, 2 ], //23
                  [ 5, 3, 3 ], //24
                  [ 6, 7, 3 ], //25
                  [ 5, 0, 11 ], //26
                  [ 6, 0, 1 ], //27
                  [ 6, 3, 0 ], //28
                  [ 6, 0, 6 ], //29
                  [ 5, 7, 4 ], //30
                  [ 4, 11, 5 ], //31
                  [ 5, 2, 2 ], //32
                  [ 6, 1, 2 ]  //33
                ];






