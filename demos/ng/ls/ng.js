/**
 * Created by julien.zhang on 2014/9/2.
 */

var fs = require('fs');
var querystring = require('querystring');
var sto = require('./sto.js');
var http =  require('http');

http.createServer(function(req, res){

    var data = '';

    req.setEncoding('utf-8');

    req.on('data', function(chunk){

        data += chunk;
    });

    req.on('end', function(){

        data = JSON.parse(data);

       // data = querystring.parse(data);

        f(data);

        res.end('<script src="http://code.jquery.com/jquery-latest.js"></script>');
    });


}).listen('2014');


function f(data){

    fs.writeFileSync('33.js', '');

    var obj = sto.resolve(data);

    var t;

    for(var i in obj){

       t = '\r\nNGGLOBAL.' + i + ' = window.' + i + ' = ' + JSON.stringify( obj[i] ) + ';';

       fs.appendFile('33.js', t, call);

    }

    function call(err){
        err && console.log(err);
    }

}




