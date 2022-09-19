const http = require('http');

http
  .Server((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
      res.write('<html><body>');
      res.write('<p>Hello There</p>');
      res.write(
        "<form method='POST' action='/create-user'><input type='text' name='username'/><button type='submit'>Send</button></form>"
      );
      res.write('</body></html>');
      return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
      const body = [];
      req.on('data', (chunk) => {
        body.push(chunk);
      });

      req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const username = parsedBody.split('=')[1];

        console.log(username);
      });

      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    }

    if (url === '/users') {
      res.write('<body><ul>');
      res.write('<li>User Uno</li>');
      res.write('<li>User Dos</li>');
      res.write('<li>Big A hole 3</li>');
      res.write('</ul></body>');
      return res.end();
    }
  })
  .listen(3000, 'localhost');
