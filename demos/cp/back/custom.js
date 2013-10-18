window.filter = function(){};
	
window.q = [];
//
window.opnRedBall = ['7','10','13','15','26','27']
window.colRef1 = ['0','1','2','1','1','1'];
window.colRef2 = ['0','2','2','2','3','7'];
window.colRef3 = ['0','0','1','2','2','40'];
//
window.colMap = [ 
                  [         ], //0
                  [ 1, 0, 10 ], //1
                  [ 1, 6, 4 ], //2
                  [ 2, 2, 4 ], //3
                  [ 1, 6, 1 ], //4
                  [ 2, 0, 1 ], //5
                  [ 3, 0, 1 ], //6
                  [ 1, 0, 0 ], //7
                  [ 5, 8, 11 ], //8
                  [ 1, 7, 5 ], //9
                  [ 2, 0, 40 ], //10  
                  [ 3, 5, 9 ], //11
                  [ 2, 0, 5 ], //12
                  [ 3, 1, 0 ], //13
                  [ 4, 2, 22 ], //14
                  [ 4, 2, 0 ], //15
                  [ 3, 6, 7 ], //16
                  [ 3, 2, 4 ], //17
                  [ 4, 4, 2 ], //18
                  [ 4, 2, 24 ], //19
                  [ 3, 15, 3 ], //20
                  [ 3, 1, 6 ], //21
                  [ 4, 0, 3 ], //22  
                  [ 5, 5, 2 ], //23
                  [ 4, 3, 5 ], //24
                  [ 5, 23, 1 ], //25
                  [ 5, 2, 0 ], //26
                  [ 6, 0, 0 ], //27
                  [ 4, 0, 14 ], //28
                  [ 5, 0, 12 ], //29
                  [ 4, 9, 16 ], //30
                  [ 6, 7, 2 ], //31
                  [ 6, 0, 3 ], //32
                  [ 6, 0, 4 ]  //33
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
