// 文件操作系统
const fs = require("fs");

// 获取文件夹或文件相关信息
fs.stat("./events.js", (err, stats) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(stats);
  console.log("目录：", stats.isDirectory());
  console.log("文件：", stats.isFile());
  console.log("大小：", stats.size);
});

// 创建目录
fs.mkdir("./logs", err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("logs目录创建成功");
});

// 在文件里写入内容 若文件不存在则创建文件 若文件中有内容则覆盖
fs.writeFile("./logs/hello.log", "你好~", err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("写入成功");
});

// 与writeFile相同 不同的是若文件中有内容则追加内容
fs.appendFile("./logs/hello.log", "hello~\n我是陈龙", err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("写入成功");
});

// 读取文件内容
fs.readFile("./logs/hello.log", "utf8", (err, stats) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(stats);
});

// 读取文件夹
fs.readdir("./logs", (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(files); // [ 'hello.log' ]
});

// 修改名称
fs.rename("./logs/hello.log", "./logs/traking.log", err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("改名成功");
});

// 删除目录下文件
fs.readdirSync("./logs").map(file => {
  // 删除文件unlink
  fs.unlink(`./logs/${file}`, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("文件删除成功");
  });
});

// 只能删除空目录 若目录里不为空则会报错 所以要先删除里面的文件 再删除文件夹
fs.rmdir("./logs/22", err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("目录删除成功");
});
