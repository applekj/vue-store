# vue-store

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

1、路由元信息

    v-if dom是真实的存在或隐藏 v-show 通过css控制dom的显示或隐藏

    在路由中添加meta属性，即路由元信息，可以控制组件的显示和隐藏

2、路由的跳转及传参

    路由的跳转有两种方式

    申明式导航：router-link
    编程式导航：$router.push | $router.replace ,相对于申明式导航可以书写一些自己的业务

    params参数，需要在路由的path中占位params参数，跳转时，params参数会传递进路由中
    query参数，?key1=value1&key2=value2

3、路由面试题

    a、路由传参数时，path是否可以和params参数一起使用？
        路由跳转时，name和path的写法都可以，但是path不能和params参数一起使用

    b、如何制定params参数可传可不传
        在路由中占位params参数时，后面添加?即可

    c、如果制定params参数可传可不传，如果传递的params参数是空字符串，如何解决
        传递params参数时，当字符串是空字符串，传递undefined就可以解决

    d、路由传参数时，能不能通过props传递
        可以，常用的函数式写法，即可以传递params参数，也可以传递query参数

4、axios二次封装
    请求拦截器，可以在请求前处理一些业务
    响应拦截器，当服务端数据返回后，可以处理一些逻辑

5、防抖和节流

