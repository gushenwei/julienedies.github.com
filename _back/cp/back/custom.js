window.filter = function(){};
	
window.q = [];
//
window.opnRedBall = ['2','3','13','20','22','33']
window.colRef1 = ['1','1','2','1','0','1'];
window.colRef2 = ['0','1','4','5','7','15'];
window.colRef3 = ['0','2','3','4','7','7'];
//
window.colMap = [ 
                  [         ], //0
                  [ 1, 10, 4 ], //1
                  [ 1, 3, 0 ], //2
                  [ 2, 2, 0 ], //3
                  [ 1, 0, 1 ], //4
                  [ 2, 0, 6 ], //5
                  [ 2, 1, 2 ], //6
                  [ 1, 0, 5 ], //7
                  [ 3, 13, 2 ], //8
                  [ 2, 6, 3 ], //9
                  [ 2, 3, 1 ], //10  
                  [ 4, 9, 4 ], //11
                  [ 2, 0, 10 ], //12
                  [ 3, 4, 0 ], //13
                  [ 4, 2, 27 ], //14
                  [ 3, 1, 3 ], //15
                  [ 3, 6, 12 ], //16
                  [ 5, 4, 4 ], //17
                  [ 4, 4, 2 ], //18
                  [ 3, 27, 1 ], //19
                  [ 4, 7, 0 ], //20
                  [ 3, 1, 11 ], //21
                  [ 5, 7, 0 ], //22  
                  [ 4, 3, 3 ], //23
                  [ 4, 3, 10 ], //24
                  [ 5, 0, 2 ], //25
                  [ 5, 2, 5 ], //26
                  [ 4, 3, 1 ], //27
                  [ 6, 16, 2 ], //28
                  [ 5, 0, 17 ], //29
                  [ 6, 17, 3 ], //30
                  [ 5, 5, 1 ], //31
                  [ 6, 0, 8 ], //32
                  [ 6, 0, 0 ]  //33
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
		$(this).parent().parent().remove();
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
