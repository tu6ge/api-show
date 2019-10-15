---
ali_011807:
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
ali_011807_channel: 
 status: 0
 msg: ok
 result: 
  - 
   tvid: 1
   name: "中央台"
   parentid: 0
   istv: 0
  - 
   tvid: 2381
   name: "中国美食"
   parentid: 4
   istv: 1
  - 
   tvid: 2382
   name: "人文历史"
   parentid: 4
   istv: 1
  - 
   tvid: 2383
   name: "中国旅游"
   parentid: 4
   istv: 1
---

# 电视节目预告

### 阿里云接口地址
> https://market.aliyun.com/products/57002003/cmapi011807.html

## 电视节目查询接口

### 接口返回数据
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

### 使用组件展示

```html
 <aps-ali-011807  :data="ali_011807" ></aps-ali-011807> 
```
```js
export default {
    data(){
        ali_011807:{
            // 使用 接口返回的数据
        }
    }
}
```

### 最终的展示效果

 <aps-ali-011807  :data="$frontmatter.ali_011807" class="mt-10"></aps-ali-011807> 

 ## 电视频道查询接口

 ### 使用方式

1. 数据准备
```js
export default {
    data(){
        "ali_011807_channel":{
                "status": "0",
                "msg": "ok",
                "result": [
                    {
                        "tvid": "1",
                        "name": "中央台",
                        "parentid": "0",
                        "istv": "0"
                    },
                    {
                        "tvid": "2381",
                        "name": "中国美食",
                        "parentid": "4",
                        "istv": "1"
                    },
                    {
                        "tvid": "2382",
                        "name": "人文历史",
                        "parentid": "4",
                        "istv": "1"
                    },
                    {
                        "tvid": "2383",
                        "name": "中国旅游",
                        "parentid": "4",
                        "istv": "1"
                    }
                ]
        },
        ali_011807_channel_val:""
    },
    methods:{
        change(val){
            //频道选中事件
            this.ali_011807_channel_val = val
        }
    }
}
```
2. 页面呈现
```html
 <aps-ali-011807-channel  :data="ali_011807_channel"  ></aps-ali-011807-channel> 
<!--使用回调-->
 <aps-ali-011807-channel  :data="ali_011807_channel" @change="change" ></aps-ali-011807-channel> 
 选中结果：{{ ali_011807_channel_val}}
```

### 最终的展示效果

 <aps-ali-011807-channel  :data="$frontmatter.ali_011807_channel" class="mt-10" @change="change"></aps-ali-011807-channel> 

选中结果：
{{ ali_011807_channel_val}}

<script>
export default{
    data(){
        return {
            ali_011807_channel_val:""
        }
    },
    methods:{
        change(val){
            this.ali_011807_channel_val = val
        }
    }
}
</script>
