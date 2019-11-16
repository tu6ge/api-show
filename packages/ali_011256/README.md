---
data:
  status: '0'
  msg: ok
  result:
  - {startcity: 杭州, endcity: 上海, startstation: 客运中心站, endstation: 上海, starttime: '06:50',
    price: '68', bustype: 大高3, distance: '181'}
  - {startcity: 杭州, endcity: 上海, startstation: 客运中心站, endstation: 上海南站, starttime: '07:10',
    price: '68', bustype: 大高3, distance: '181'}
  - {startcity: 杭州, endcity: 上海, startstation: 杭州南站, endstation: 上海南站, starttime: '07:10',
    price: '68', bustype: 大高2, distance: '181'}

---
# 长途汽车查询

## 阿里云地址
> https://market.aliyun.com/products/57002002/cmapi011256.html

## 使用方法

### 车站查询

::: warning 提示
使用该接口的同学，最大的可能会把数据存到自己的数据库中，
可以使用vant的Cell 单元格组件进行呈现，本插件不做呈现
:::

### 站站查询

#### 数据准备

```js
export default {
    data(){
        return {
            data:{
                "status": "0",
                "msg": "ok",
                "result": [
                    {
                        "startcity": "杭州",
                        "endcity": "上海",
                        "startstation": "客运中心站",
                        "endstation": "上海",
                        "starttime": "06:50",
                        "price": "68",
                        "bustype": "大高3",
                        "distance": "181"
                    },
                    {
                        "startcity": "杭州",
                        "endcity": "上海",
                        "startstation": "客运中心站",
                        "endstation": "上海南站",
                        "starttime": "07:10",
                        "price": "68",
                        "bustype": "大高3",
                        "distance": "181"
                    },
                    {
                        "startcity": "杭州",
                        "endcity": "上海",
                        "startstation": "杭州南站",
                        "endstation": "上海南站",
                        "starttime": "07:10",
                        "price": "68",
                        "bustype": "大高2",
                        "distance": "181"
                    }
                ]
            }
        }
    }
}
```

#### html代码

```html
<aps-ali-011256 :data="data" />
```

#### 最终呈现

<aps-ali-011256 :data="$frontmatter.data" class="mt-10" />