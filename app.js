const http = require('http');
const { routesHandler } = require('./routes');


const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req?.body);
    routesHandler(req, res);
});
server.listen(4000);