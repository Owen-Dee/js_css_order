# js_css_order
关于 JS 与 CSS 是否阻塞 DOM 的渲染和解析:// https://juejin.cn/post/6973949865130885157

# how to run
1. yarn install
2. yarn dev

# description
1. yarn dev 1: CSS 不会阻塞 DOM 解析，但是会阻塞 DOM 渲染
2. yarn dev 2: 内联JS 会阻塞 DOM 解析
3. yarn dev 3: 外链同步JS 会阻塞 DOM 解析
4. yarn dev 4: CSS 会阻塞 JS 的执行
5. yarn dev 5: JS 会触发页面渲染
6. yarn dev 6: async外链异步的js不会会阻塞dom 文档的解析, 也不会阻塞 DOMContentLoaded事件
7. yarn dev 7: CSS 不会阻塞 DOM 解析，但是会阻塞 DOM 渲染
