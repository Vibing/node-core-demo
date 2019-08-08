const fs = require('fs');
const zlib = require('zlib');

const fileReadStream = fs.createReadStream('./logs/data.json');
const fileWriteStream = fs.createWriteStream('./logs/data-write.json');

let count = 0;

/* 通过文件流的事件方式 */
fileReadStream.on('data', chunk => {
  console.log(`${++count} 接收到：${chunk.length}`);
  fileWriteStream.write(chunk); // 可写流写入文件 如果文件不存在则创建文件
});

fileReadStream.on('error', err => {
  console.log('错误：', err);
});

fileReadStream.on('end', () => {
  console.log('结束');
});

// 监听pipe事件
fileWriteStream.on('pipe', source => {
  console.log(source);
});

/* 通过pipe方式 */
fileReadStream.pipe(fileWriteStream);

/* 链式pipe */
fileReadStream.pipe(zlib.createGzip()).pipe(fileWriteStream);
