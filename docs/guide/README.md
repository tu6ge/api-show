# 介绍

api show 是一个快速呈现api返回数据的ui库，旨在帮助企业快速的查看第三方api返回的数据呈现方式，并把其放到自己的项目中
## 安装

```js
npm i -S api-show 
```

> 国内用户如果下载比较慢，请使用[国内镜像](http://npm.taobao.org)

## CDN
目前可以通过 unpkg.com/api-show 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

```html 
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/api-show/lib/apishow.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/api-show/lib/apishow.umd.min.js"></script>
```

## 使用案例

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <!-- import CSS -->
<link rel="stylesheet" href="https://unpkg.com/api-show/lib/apishow.css">
</head>
<body>
  <div id="app">
      <aps-ali-011807  :data="ali_011807" ></aps-ali-011807> 
  </div>
</body>
  <!-- import Vue before Element -->
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <!-- import JavaScript -->
  <script src="https://unpkg.com/api-show/lib/apishow.umd.min.js"></script>
  <script>
    new Vue({
      el: '#app',
      data: function() {
        return {  
            // https://market.aliyun.com/products/57002003/cmapi011807.html 接口返回的数据
            ali_011807:{
                "status": "0",
                "msg": "ok",
                "result": {
                    "tvid": "435",
                    "name": "CCTV-3（综艺）",
                    "date": "2015-08-09",
                    "program": [
                        {
                            "name": "综艺喜乐汇",
                            "starttime": "01:18"
                        },
                        {
                            "name": "综艺喜乐汇",
                            "starttime": "02:36"
                        },
                        {
                            "name": "2014中国梦-我梦最美",
                            "starttime": "03:55"
                        }
                    ]
                }
            }
        }
      }
    })
  </script>
</html>

```
