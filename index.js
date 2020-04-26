var http = require('http'),
	localAddress = '127.0.0.1',
	listenPort = 2015;
	
function getVerseOfTheDay(callback, error) {
	http.get('http://labs.bible.org/api/?passage=gen1:1', function(response) {
	//http.get('http://labs.bible.org/api/?passage=votd', function(response) {
		var verse = '';
		
		response.on('data', function(d) {
            verse += d;
        });
		
		response.on('end', function () {
			callback(verse);
	  	});
	}).on('error', function(e) {
		error(e);
	});
}

//Definição de um servidor
http.createServer(function (req, res) {
	
	//Verso do Dia ;)
	getVerseOfTheDay(function(verse){
		res.writeHead(200, {'Content-Type': 'text/html'});
		console.log(verse);
		res.end(verse);

	}, function(e){
		res.writeHead(500, {'Content-Type': 'text/html'});
		res.end(e);
	});
}).listen(listenPort, localAddress);

let localhost = 'http://' + localAddress + ':' + listenPort;  
console.log('Servidor rodando em %s na %s', localAddress, listenPort);
console.log('Servidor rodando em %s', localhost);