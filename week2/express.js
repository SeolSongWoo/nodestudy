let http = require('http');
let fs = require('fs');
let url = require('url');

let app = http.createServer(function(request,response){
    let _url = request.url;
    let queryData = url.parse(_url,true).query;
    console.log(queryData.id);
    if(url == '/'){
        url = '/index.html';
    }
    if(url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
    console.log(__dirname + url);
    response.end(queryData.id);

});
app.listen(3000);