// require('@babel/polyfill')
function * generator() {
    yield 1;
}

console.log(generator().next(() => {
    console.log('generator 执行完毕');
}));

console.log("Allen Feng".includes("Feng"));