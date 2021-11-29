const http = require('http');

const server = http.server((req, res) => {
    res.end('This is my first response');
})

server.listen(process.env.PORT || 3000);