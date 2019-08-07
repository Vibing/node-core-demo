const EventEmit = require("events");

class Player extends EventEmit {}

const player = new Player();

// 定义事件
// player.on("play", param => {
//   console.log(`播放器播放了：《${param}》`);
// });

// 使用once只执行一次
player.once("play", param => {
  console.log(`播放器播放了：《${param}》`);
});

// 触发事件
player.emit("play", "千百度");
player.emit("play", "海阔天空");
