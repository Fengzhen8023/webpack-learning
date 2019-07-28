## 1. 写在前面

很多从事前端开发的程序员，都会接触到 **webpack** 非常熟悉的概念，但是我想很多人对webpack只是一知半解，知道这是一个打包器，可以将我们编写的Vue代码、React代码打包编译成原生的JS代码，方便浏览器识别。

但是对于webpack更底层的知识，比如：如何配置webpack，webpack为什么可以对我们的代码进行打包编译等，了解甚少。

所以借着这次学习webpack的机会，写一些文章，从一个前端小白的角度出发，一步步了解webpack的相关知识。希望这些文章可以对那些前端小白有多帮助。写得不好的地方，也请大家多多批评。

## 2. 文档目录

- **[1. webpack基本简介](https://github.com/Fengzhen8023/webpack-learning/blob/master/blog/1.%20webpack%E5%9F%BA%E6%9C%AC%E7%AE%80%E4%BB%8B.md)**
- **[2. 初始化一个webpack项目](https://github.com/Fengzhen8023/webpack-learning/blob/master/blog/2.%20%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AAwebpack%E9%A1%B9%E7%9B%AE.md)**
- **[3. 自定义脚本，帮助项目管理](https://github.com/Fengzhen8023/webpack-learning/blob/master/blog/4.%20%E5%AE%89%E8%A3%85%E5%92%8C%E9%85%8D%E7%BD%AEwebpack%E5%BC%80%E5%8F%91%E6%9C%8D%E5%8A%A1%E5%99%A8.md)**
- **[4. 安装和配置webpack开发服务器](https://github.com/Fengzhen8023/webpack-learning/blob/master/blog/4.%20%E5%AE%89%E8%A3%85%E5%92%8C%E9%85%8D%E7%BD%AEwebpack%E5%BC%80%E5%8F%91%E6%9C%8D%E5%8A%A1%E5%99%A8.md)**
- **[5. 使用webpack打包编译css文件](https://github.com/Fengzhen8023/webpack-learning/blob/master/blog/5.%20%E4%BD%BF%E7%94%A8webpack%E6%89%93%E5%8C%85%E7%BC%96%E8%AF%91css%E6%96%87%E4%BB%B6.md)**
- **[6. 使用babel打包编译js文件](https://github.com/Fengzhen8023/webpack-learning/blob/master/blog/6.%20%E4%BD%BF%E7%94%A8babel%E6%89%93%E5%8C%85%E7%BC%96%E8%AF%91js%E6%96%87%E4%BB%B6.md)**
- **[7. 关于babel的一些补充](https://github.com/Fengzhen8023/webpack-learning/blob/master/blog/7.%20%E5%85%B3%E4%BA%8Ebabel%E7%9A%84%E4%B8%80%E4%BA%9B%E8%A1%A5%E5%85%85.md)**
- **[8. 使用ESLint检查项目代码](https://github.com/Fengzhen8023/webpack-learning/blob/master/blog/8.%20%E4%BD%BF%E7%94%A8ESLint%E6%A3%80%E6%9F%A5%E9%A1%B9%E7%9B%AE%E4%BB%A3%E7%A0%81.md)**
- **[9. 在项目中引入全局变量](https://github.com/Fengzhen8023/webpack-learning/blob/master/blog/9.%20%E5%9C%A8%E9%A1%B9%E7%9B%AE%E4%B8%AD%E5%BC%95%E5%85%A5%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F.md)**
- **[10. 在项目中使用图片资源](https://github.com/Fengzhen8023/webpack-learning/blob/master/blog/10.%20%E5%9C%A8%E9%A1%B9%E7%9B%AE%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%9B%BE%E7%89%87%E8%B5%84%E6%BA%90.md)**
- **[11. 在项目中对打包编译的文件进行分类](https://github.com/Fengzhen8023/webpack-learning/blob/master/blog/11.%20%E5%9C%A8%E9%A1%B9%E7%9B%AE%E4%B8%AD%E5%AF%B9%E6%89%93%E5%8C%85%E7%BC%96%E8%AF%91%E7%9A%84%E6%96%87%E4%BB%B6%E8%BF%9B%E8%A1%8C%E5%88%86%E7%B1%BB.md)**
- **[12. 打包编译后文件的引入路径问题](https://github.com/Fengzhen8023/webpack-learning/blob/master/blog/12.%20%E6%89%93%E5%8C%85%E7%BC%96%E8%AF%91%E5%90%8E%E6%96%87%E4%BB%B6%E7%9A%84%E5%BC%95%E5%85%A5%E8%B7%AF%E5%BE%84%E9%97%AE%E9%A2%98.md)**
- **[13. 使用Webpack打包多页面应用](https://github.com/Fengzhen8023/webpack-learning/blob/master/blog/13.%20%E4%BD%BF%E7%94%A8Webpack%E6%89%93%E5%8C%85%E5%A4%9A%E9%A1%B5%E9%9D%A2%E5%BA%94%E7%94%A8.md)**
- **[14. Webpack的源码映射](https://github.com/Fengzhen8023/webpack-learning/blob/master/blog/14.%20Webpack%E7%9A%84%E6%BA%90%E7%A0%81%E6%98%A0%E5%B0%84.md)**
- **[15. Webpack中的三个小插件](https://github.com/Fengzhen8023/webpack-learning/blob/master/blog/15.%20Webpack%E4%B8%AD%E7%9A%84%E4%B8%89%E4%B8%AA%E5%B0%8F%E6%8F%92%E4%BB%B6.md)**
- **[16. Webpack的跨域请求问题](https://github.com/Fengzhen8023/webpack-learning/blob/master/blog/16.%20Webpack%E7%9A%84%E8%B7%A8%E5%9F%9F%E8%AF%B7%E6%B1%82%E9%97%AE%E9%A2%98.md)**
- **[17. Webpack的resolve属性](https://github.com/Fengzhen8023/webpack-learning/blob/master/blog/17.%20Webpack%E7%9A%84resolve%E5%B1%9E%E6%80%A7.md)**


## 3. webpack基本简介

什么是webpack呢，下面我们引出 **官方定义** ：

> webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

![](https://github.com/Fengzhen8023/webpack-learning/blob/master/blog-img/1559356365410.png)

说的直白一点，就是讲我们的代码进行编译打包，变成能够被浏览器识别的前端脚本。就拿一个Vue项目为例：

一开始我们是用 **Vue-cli脚手架** 快速搭建一个项目，随后在项目中都是采用Vue语法来编写我们的项目，不仅如此，我们还会使用 **ES6** 语法，还会使用SCSS等CSS预处理器等等。

这些语法我们是熟悉的，但是浏览器不认识呀，浏览器能够识别的是原生JS语法，而且就目前情况来说，只能识别ES5语法，不能识别我们使用的ES6语法。这就意味着，我们的Vue项目是跑不起来的。这该怎么办呢？

这个时候webpack就开始发挥它的作用了，webpack通过分析Vue语法、理清代码模块之前的依赖关系、分析SCSS预处理器、分析项目中引用的图片等静态资源等，将这些浏览器不识别的语法进行打包编写编译，最终打包输出 **.js、.css、.jpg、.png** 等能够被浏览器识别的语法和文件。如此一来，我们的项目就可以顺利地在浏览器上面跑起来了。

## 4. webpack的作用总结

结合上面的简单介绍，我们来总结一下webpack的作用：

#### 代码转换

webpack可以将ES6语法转换为ES5语法，可以将LESS、SASS语法转换成CSS语法

#### 文件优化

在webpack打包的过程中，可以合并文件，压缩文件体积

#### 代码分割、模块合并

在开发的过程中，将一些公共的模块进行抽离，形成单独的模块，方便其他模块进行调用

#### 自动刷新

即我们熟悉的热更新，在开发过程中，webpack会帮我们启动一个本地服务，每当产生新代码的时候，该服务会自动刷新，然我们看到最新的页面

#### 代码校验

在开发过程中，webpack可以帮助我们检查代码语法规范，减少bug的数量

#### 自动发布

项目开发完成之后，我们可以借助webpack帮助我们自动发布代码，部署到服务器上

## 5.后记

以上就是webpack学习笔记的开篇语，希望接下来的一系列笔记，对你理解webpack会有所帮助。大家加油！

 
