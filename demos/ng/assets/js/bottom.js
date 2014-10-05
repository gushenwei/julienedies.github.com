/**
 *
 *
 */

(function () {

    var dbApp = angular.module('dbApp', ['ngRoute', 'ctrls', 'servs']);

    var ctrls = angular.module('ctrls', []);

    var servs = angular.module('servs', []);

    ctrls.controller('bottomCtrl', function ($scope) {

        $scope.vs = function(v) { return v; };

        var r = f();

        $scope.ng = ng.slice(ng.length- r.prev.length,ng.length);
        $scope.prevList = r.prev;
        $scope.nextList = r.next;
        $scope.upList = r.up;

    });


    function f() {

        var rsto = {};
        var bsto = {};
        var rtop = [];

        for (var i = 0, ngl = ng.length; i < ngl; i++) {

            var num = ng[i];
            var rs = num.red;
            var bs = num.blue;

            //red
            for (var k = 1; k < 34; k++) {

                for (var j = 0; j < 6; j++) {

                    var r = rs[j];

                    if (k === r) {

                        var rstoItem = rsto[k] = rsto[k] || { margin: [] };

                        if ('start' in rstoItem) {

                            rstoItem.margin.push(i - rstoItem.start - 1);


                            var rtopItem = rtop[i] = rtop[i] || {};

                            rtopItem[k] = rstoItem.margin.length - 1;

                        }

                        rstoItem.start = i;

                    }

                }


                if (i === ngl - 1) {

                    var rstoItem = rsto[k] = rsto[k] || { margin: [] };
                    rstoItem.margin.push(i - (rstoItem.start || 0));

                }

            }


            //blue
            for (var k = 1; k < 17; k++) {

                if (k === bs) {

                    var bstoItem = bsto[k] = bsto[k] || { margin: [] };

                    if ('start' in bstoItem) {
                        bstoItem.margin.push(i - bstoItem.start - 1);
                    }

                    bstoItem.start = i;

                }


                if (i === ngl - 1) {

                    var bstoItem = bsto[k] = bsto[k] || { margin: [] };
                    bstoItem.margin.push(i - (bstoItem.start || 0));
                }

            }

        }

        //console.log(rsto, rtop);

        var prev = [];
        var next = [];
        var up = [];

        _.each(rtop, function (v, k, list) {
            var arr = [];
            var arr1 = [];
            var arr2 = [];
            for (var i in v) {
                var margin = rsto[i].margin;

                arr.push(margin[v[i]]);
                arr1.push(margin[v[i]-1]);

                var index = v[i] + 1;
                var ob = {v: margin[index]};
                if (index + 1 === margin.length) {
                    ob.over = 1;
                }
                arr2.push(ob);
            }

            prev.push(arr);
            up.push(arr1);
            next.push(arr2);
        });


        return {
            prev: prev,
            next: next,
            up:up
        };


    }


})();


