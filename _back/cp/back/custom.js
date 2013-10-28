window.filter = function(){};
	
window.q = [];
//
window.opnRedBall = ['4','10','19','27','31','33']
window.colRef1 = ['1','1','0','1','0','3'];
window.colRef2 = ['0','0','2','3','7','40'];
window.colRef3 = ['0','3','3','5','7','27'];
//
window.colMap = [ 
                  [         ], //0
                  [ 1, 10, 3 ], //1
                  [ 2, 4, 3 ], //2
                  [ 1, 5, 2 ], //3
                  [ 1, 0, 0 ], //4
                  [ 2, 0, 5 ], //5
                  [ 2, 1, 1 ], //6
                  [ 1, 0, 4 ], //7
                  [ 3, 13, 1 ], //8
                  [ 2, 6, 2 ], //9
                  [ 2, 3, 0 ], //10  
                  [ 4, 9, 3 ], //11
                  [ 2, 0, 9 ], //12
                  [ 3, 1, 4 ], //13
                  [ 4, 2, 26 ], //14
                  [ 3, 1, 2 ], //15
                  [ 3, 6, 11 ], //16
                  [ 5, 4, 3 ], //17
                  [ 4, 4, 1 ], //18
                  [ 3, 27, 0 ], //19
                  [ 3, 15, 7 ], //20
                  [ 3, 1, 10 ], //21
                  [ 4, 0, 7 ], //22  
                  [ 4, 3, 2 ], //23
                  [ 4, 3, 9 ], //24
                  [ 5, 0, 1 ], //25
                  [ 5, 2, 4 ], //26
                  [ 4, 3, 0 ], //27
                  [ 4, 16, 1 ], //28
                  [ 5, 0, 16 ], //29
                  [ 6, 17, 2 ], //30
                  [ 5, 5, 0 ], //31
                  [ 6, 0, 7 ], //32
                  [ 6, 7, 0 ]  //33
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
