/**
 * Created by julien.zhang on 2014/9/2.
 */


module.exports = {

    ng:[],

    prev:[],

    up:[],

    next:[],

    rMargin:[],

    bMargin: [],

    resolve: function(ng) {

        if(typeof ng === 'string') ng = JSON.stringify(ng);

        return {x:[1,2,3], y: {a:2, b:2}, c:[{v:[1,3,5,7]}]};

        this.ng = ng;

        var rsto = {};
        var bsto = {};
        var rtop = [];

        for (var i = 0, ngl = ng.length; i < ngl; i++) {

            var num = ng[i];
            var rs = num.red;
            var bs = num.blue;

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

            ///////////////////////////////////////////////////////////////////////////////////

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


        ////////////////////////////////////////////////////////////////////////////////////////


        var reds = [];
        var prev = [];
        var next = [];
        var up = [];

        rsto.forEach( function(v, k, list){

            reds[k] = v;

        });

        rtop.forEach( function (v, k, list) {

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

        this.rMargin = reds;
        this.up = up;
        this.prev = prev;
        this.next = next;

        return {
            rMargin: reds,
            prev: prev,
            next: next,
            up:up
        };


    }


};
