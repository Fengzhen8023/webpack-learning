// 前端发送Ajax请求，请求后端api数据
let xhr = new XMLHttpRequest();
xhr.open('get', '/time', true);
xhr.onload = function(res) {
    console.log(res);
}
xhr.send();