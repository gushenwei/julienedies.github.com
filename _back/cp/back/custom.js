window.filter = function(){};
	
window.q = [];
//
window.opnRedBall = ['1','2','6','11','17','25']
window.colRef1 = ['2','0','3','0','1','0'];
window.colRef2 = ['0','0','2','5','6','23'];
window.colRef3 = ['1','1','4','4','9','10'];
//
window.colMap = [ 
                  [         ], //0
                  [ 1, 10, 0 ], //1
                  [ 2, 4, 0 ], //2
                  [ 2, 2, 5 ], //3
                  [ 1, 6, 2 ], //4
                  [ 2, 0, 2 ], //5
                  [ 3, 1, 0 ], //6
                  [ 1, 0, 1 ], //7
                  [ 5, 8, 12 ], //8
                  [ 1, 7, 6 ], //9
                  [ 2, 40, 1 ], //10  
                  [ 4, 9, 0 ], //11
                  [ 2, 0, 6 ], //12
                  [ 3, 1, 1 ], //13
                  [ 4, 2, 23 ], //14
                  [ 4, 2, 1 ], //15
                  [ 3, 6, 8 ], //16
                  [ 5, 4, 0 ], //17
                  [ 4, 4, 3 ], //18
                  [ 4, 2, 25 ], //19
                  [ 3, 15, 4 ], //20
                  [ 3, 1, 7 ], //21
                  [ 4, 0, 4 ], //22  
                  [ 5, 5, 3 ], //23
                  [ 4, 3, 6 ], //24
                  [ 6, 1, 0 ], //25
                  [ 5, 2, 1 ], //26
                  [ 6, 0, 1 ], //27
                  [ 4, 0, 15 ], //28
                  [ 5, 0, 13 ], //29
                  [ 4, 9, 17 ], //30
                  [ 6, 7, 3 ], //31
                  [ 6, 0, 4 ], //32
                  [ 6, 0, 5 ]  //33
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
