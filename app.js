// https://juejin.cn/post/6973949865130885157
const express = require('express');
const fs = require('fs');
const app = new express();
const port = 3000;
const indexNum = process.argv.slice(2);

const sleepFun = time => {
    return new Promise(res => {
        setTimeout(() => {
            res()
        }, time)
    })
};

const filter = (req, res, next) => {
    const { sleep } = req.query || 0
    if (sleep) {
        sleepFun(sleep).then(() => next())
    } else {
        next()
    }
};

app.use(filter);

app.use('/static/', express.static('./static/'));

let html = '';
let message = '';
switch(Number(indexNum)) {
    case 2:
        message = '内联JS 会阻塞 DOM 解析';
        html = './index2.html';
        break;
    case 3:
        message = '外链同步JS 会阻塞 DOM 解析';
        html = './index3.html';
        break;
    case 4:
        message = 'CSS 会阻塞 JS 的执行';
        html = './index4.html';
        break;
    case 5:
        message = 'JS 会触发页面渲染';
        html = './index5.html';
        break;
    case 6:
        message = 'async外链异步的js不会会阻塞dom 文档的解析, 也不会阻塞 DOMContentLoaded事件';
        html = './index6.html';
        break;
    case 7:
        message = 'defer外链异步的js不会会阻塞dom 文档的解析, 但会阻塞 DOMContentLoaded事件';
        html = './index7.html';
        break;
    default:
        message = 'CSS 不会阻塞 DOM 解析，但是会阻塞 DOM 渲染';
        html = './index.html';
}
console.log(message);
app.get('/', function (req, res, next) {
    fs.readFile(html, 'UTF-8', (err, data) => {
        if (err) return
        res.send(data)
    })
});

app.listen(port, () => {
    console.log(`app is running at http://127.0.0.1:${port}/`)
});

