---
ali_57002003_011807:
  status: '0'
  msg: ok
  result:
    tvid: '435'
    name: CCTV-3（综艺）
    date: '2015-08-09'
    program:
    - {name: 综艺喜乐汇, starttime: '01:18'}
    - {name: 综艺喜乐汇, starttime: '02:36'}
    - {name: 2014中国梦-我梦最美, starttime: '03:55'}
---

# 电视节目查询接口

### 阿里云接口地址
> https://market.aliyun.com/products/57002003/cmapi011807.html

## 接口返回数据
```json
{
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
```

## 使用组件展示

```html
 <ali-57002003-011807  :data="ali_57002003_011807"></ali-57002003-011807> 
```
```js
export default {
    data(){
        ali_57002003_011807:{
            // 使用 接口返回的数据
        }
    }
}
```

## 最终的展示效果

 <ali-57002003-011807  :data="$frontmatter.ali_57002003_011807"></ali-57002003-011807> 


<script>

</script>