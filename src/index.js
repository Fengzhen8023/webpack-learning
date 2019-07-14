import logo from './logo.png'   // 引入图片
// console.log(logo);  

let img = new Image();
img.src = logo;

document.getElementsByTagName('body')[0].appendChild(img);

require('./index.css')

console.lo("我是错误语法");