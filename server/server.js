const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Le server Darkstryder est entrain de fonctionner !');
});

server.listen(process.env.PORT || 3000);
