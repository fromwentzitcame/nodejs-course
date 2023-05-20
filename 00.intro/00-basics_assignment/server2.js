const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Basics Assignment</title></head>');
        res.write('<body>');
        res.write('<h1>Willkommen!</h1>');
        res.write(
            '<form action="/numbers" method="POST"><input type="text" name="number"><button type="submit">count in German</button></form>'
        );
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/zahlen') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Basics Assignment</title></head>');
        res.write('<body>');
        res.write('<ul><li>Eins</li><li>Zwei</li><li>Drei</li></ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/numbers' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
});

server.listen(3000);
