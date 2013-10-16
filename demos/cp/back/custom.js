window.filter = function(){};
	
window.q = [];
//
window.opnRedBall = ['4','5','6','7','25','27']
window.colRef1 = ['2','2','0','0','1','1'];
window.colRef2 = ['0','0','1','5','5','5'];
window.colRef3 = ['0','0','3','6','7','23'];
//
window.colMap = [ 
                  [         ], //0
                  [ 1, 0, 9 ], //1
                  [ 1, 6, 3 ], //2
                  [ 2, 2, 3 ], //3
                  [ 1, 6, 0 ], //4
                  [ 2, 0, 0 ], //5
                  [ 3, 0, 0 ], //6
                  [ 4, 7, 0 ], //7
                  [ 5, 8, 10 ], //8
                  [ 1, 7, 4 ], //9
                  [ 3, 0, 40 ], //10  
                  [ 3, 5, 8 ], //11
                  [ 2, 0, 4 ], //12
                  [ 3, 2, 1 ], //13
                  [ 4, 2, 21 ], //14
                  [ 2, 2, 2 ], //15
                  [ 3, 6, 6 ], //16
                  [ 3, 2, 3 ], //17
                  [ 4, 4, 1 ], //18
                  [ 4, 2, 23 ], //19
                  [ 3, 15, 2 ], //20
                  [ 3, 1, 5 ], //21
                  [ 4, 0, 2 ], //22  
                  [ 5, 5, 1 ], //23
                  [ 4, 3, 4 ], //24
                  [ 5, 23, 0 ], //25
                  [ 5, 2, 2 ], //26
                  [ 6, 3, 0 ], //27
                  [ 4, 0, 13 ], //28
                  [ 5, 0, 11 ], //29
                  [ 4, 9, 15 ], //30
                  [ 6, 7, 1 ], //31
                  [ 6, 0, 2 ], //32
                  [ 6, 0, 3 ]  //33
                ];

//
function getLocation (nu){
	var arr = [];
	var n;
	
	outerloop:
	for(var i = 1; i < 34; i++){
		for(var j in nu){
			n = nu[j]*1;
			if(i == n){
				arr[i] = '1';
				continue outerloop; 
			}
		}

		for ( var k in nu) {
			n = nu[k] * 1;
			if (i == n - 1 || i == n + 1) {
				arr[i] = '2';
				break;
			} else {
				arr[i] = '3';
			}
		}		
		
		
		
	}
	
	return arr;
}

//
function countLocation(data) {
	var loca1 = 0, loca2 = 0, loca3 = 0;

	for ( var i in data) {
		var val = data[i];
		if (val == 1) {
			loca1 += 1;
		} else if (val == 2) {
			loca2 += 1;
		} else {
			loca3 += 1;
		}
	}
	
	return [loca1,loca2,loca3];
}

//
function countCol(data) {
	var col1 = 0, col2 = 0, col3 = 0, col4 = 0, col5 = 0, col6 = 0;

	for ( var i in data) {
		var val = data[i];
		if (val == 1) {
			col1 += 1;
		} else if (val == 2) {
			col2 += 1;
		} else if (val == 3) {
			col3 += 1;
		} else if (val == 4) {
			col4 += 1;
		} else if (val == 5) {
			col5 += 1;
		} else {
			col6 += 1;
		} 
		
	}
	
	return [col1,col2,col3,col4,col5,col6];
}


//	
function combination(a, b, c, d, e, arr) {
	var v, f, r, w, s;
	var i, j, k, m, n;
	for (i in a) {
		v = [];
		v.push(a[i]);
		for (j in b) {
			f = v.slice();
			f = f.concat(b[j].split(' '));
			//alert(f);
			for (k in c) {
				r = f.slice();
				r.push(c[k]);
				for (m in d) {
					w = r.slice();
					w.push(d[m]);
					for (n in e) {
						s = w.slice();
						s.push(e[n]);
						s.sort(function(a, b) {
							return a * 1 - b * 1
						});
						arr.push(s);
					}
				}
			}
		}
	}

};

//
$('#del').click(function() {
	$('input[name="op"]:checked').each(function() {
		$(this).parent().remove();
	});
	$('#info').html($list.find('li').length);
});

//
$('#choice').toggle(function() {
	$('input[name="op"]').show();
}, function() {
	$('input[name="op"]').hide();
});

//
$('#show').toggle(function() {
	$('.details').show();
}, function() {
	$('.details').hide();
});

//
$('#list').delegate('li', 'click', function() {
	var $th = $(this);
	var input = $th.find('input[name="op"]');

	if (input.attr('checked')) {
		input.attr('checked', false);
	} else {
		input.attr('checked', true);
	}

});

//
$('#list').delegate('li', 'mouseover', function() {
	var $th = $(this);
	$th.addClass('bg');
	//$th.find('.details').css('visibility', 'visible');
});

$('#list').delegate('li', 'mouseout', function() {
	var $th = $(this);
	$th.removeClass('bg');
	//$th.find('.details').css('visibility', 'hidden');
});
