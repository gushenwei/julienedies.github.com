//
window.opnRedBall = [8, 20, 25, 30, 32, 33 ]

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
                   [ 0, 1, 0, 2, 1, 2 ]
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
                   [ 2, 5, 9, 13, 16, 23 ]
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
                   [2, 3, 4, 4, 6, 15 ]
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
                  [ 0, 0, 2, 3, 5, 8 ]
                 ];

//
window.colMap = [ 
                  [         ], //0
                  [ 1, 5, 6 ], //1
                  [ 1, 3, 19 ], //2
                  [ 1, 10, 5 ], //3
                  [ 2, 2, 5 ], //4
                  [ 1, 2, 2 ], //5
                  [ 1, 8, 1 ], //6
                  [ 2, 4, 2 ], //7
                  [ 1, 6, 0 ], //8
                  [ 1, 10, 11 ], //9
                  [ 2, 15, 1 ], //10  
                  [ 1, 2, 4 ], //11
                  [ 3, 0, 2 ], //12
                  [ 3, 4, 1 ], //13
                  [ 3, 5, 4 ], //14
                  [ 2, 7, 8 ], //15
                  [ 4, 6, 1 ], //16
                  [ 2, 2, 9 ], //17
                  [ 2, 6, 3 ], //18
                  [ 4, 6, 2 ], //19
                  [ 2, 3, 0 ], //20
                  [ 3, 2, 3 ], //21
                  [ 4, 0, 3 ], //22  
                  [ 5, 7, 1 ], //23
                  [ 6, 6, 1 ], //24
                  [ 3, 4, 0 ], //25
                  [ 6, 4, 10 ], //26
                  [ 5, 0, 2 ], //27
                  [ 6, 12, 8 ], //28
                  [ 6, 6, 4 ], //29
                  [ 4, 4, 0 ], //30
                  [ 6, 2, 2 ], //31
                  [ 5, 2, 0 ], //32
                  [ 6, 15, 0 ]  //33
                ];






