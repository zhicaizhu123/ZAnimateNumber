let lastTime = 0;
const prefixes = "webkit moz ms o".split(" "); // 各浏览器前缀

let request;
let cancel;

request = window.requestAnimationFrame;
cancel = window.cancelAnimationFrame;
let prefix;
// 通过遍历各浏览器前缀，来得到requestAnimationFrame和cancelAnimationFrame在当前浏览器的实现形式
for (let i = 0; i < prefixes.length; i++) {
  if (request && cancel) {
    break;
  }
  prefix = prefixes[i];
  request = request || window[prefix + "RequestAnimationFrame"];
  cancel =
    cancel ||
    window[prefix + "CancelAnimationFrame"] ||
    window[prefix + "CancelRequestAnimationFrame"];
}

// 如果当前浏览器不支持requestAnimationFrame和cancelAnimationFrame，则会退到setTimeout
if (!request || !cancel) {
  request = function(callback) {
    const currTime = new Date().getTime();
    // 为了使setTimteout的尽可能的接近每秒60帧的效果
    const timeToCall = Math.max(0, 16 - (currTime - lastTime));
    const id = window.setTimeout(() => {
      // eslint-disable-next-line
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };

  cancel = function(id) {
    window.clearTimeout(id);
  };
}

export const requestAnimationFrame = request;
export const cancelAnimationFrame = cancel;
