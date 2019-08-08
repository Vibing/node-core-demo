const http = require('http');

// 使用http请求
const options = {
  protocol: 'http:',
  hostname: 'e-static.oss-cn-shanghai.aliyuncs.com',
  port: '80',
  method: 'GET',
  path: '/js/jquery-1.9.0.min.js'
};

let responseData = '';
const request = http.request(options, response => {
  console.log(response.statusCode); // 获取链接请求的状态码

  response.setEncoding('utf8');

  response.on('data', chunk => {
    responseData += chunk;
  });

  response.on('end', () => {
    // ...
  });
});

request.on('error', error => {
  console.log(error);
});

request.end();

// 使用http创建服务器
const port = 3000;
const host = '127.0.0.1';

const server = http.createServer();

server.on('request', (request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  response.end('Hello World\n');
});

server.listen(port, host, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
