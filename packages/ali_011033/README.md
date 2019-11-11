---
data:
  showapi_res_code: 0
  showapi_res_error: ''
  showapi_res_body:
    ret_code: 0
    list:
    - {prov: 天津, p90: '6.01', p0: '6.09', p95: '6.84', p97: '6.84', p89: '5.48', p92: '6.48',
      p93: '6.48', ct: '2017-01-13 09:10:18.731'}
    - {prov: 河北, p90: '6.01', p0: '6.09', p95: '6.84', p97: '6.84', p89: '5.48', p92: '6.48',
      p93: '6.48', ct: '2017-01-13 09:10:39.237'}
    - {prov: 新疆, p90: '5.78', p0: '5.52', p95: '6.93', p97: '6.45', p89: '6.06', p92: '6.41',
      p93: '5.97', ct: '2017-01-13 09:10:42.251'}
data_one:
  showapi_res_code: 0
  showapi_res_error: ''
  showapi_res_body:
    ret_code: 0
    list:
    - {prov: 天津, p90: '6.01', p0: '6.09', p95: '6.84', p97: '6.84', p89: '5.48', p92: '6.48',
      p93: '6.48', ct: '2017-01-13 09:10:18.731'}

---
# 今日油价

## 阿里云地址
> https://market.aliyun.com/products/57000002/cmapi011033.html

## 使用方法

### 准备数据

```js
export default {
    data(){
        return {
            data:{
                "showapi_res_code": 0,
                "showapi_res_error": "",
                "showapi_res_body": {
                    "ret_code": 0,
                    "list": [
                        {
                            "prov": "天津",    //省份名称
                            "p90": "6.01",     //90号汽油
                            "p0": "6.09",     //0号柴油
                            "p95": "6.84",    //95号汽油
                            "p97": "6.84",     //97号汽油
                            "p89": "5.48",      //89号汽油
                            "p92": "6.48",      //92号汽油
                            "p93": "6.48",      //93号汽油
                            "ct": "2017-01-13 09:10:18.731"     
                        },
                        {
                            "prov": "河北",
                            "p90": "6.01",
                            "p0": "6.09",
                            "p95": "6.84",
                            "p97": "6.84",
                            "p89": "5.48",
                            "p92": "6.48",
                            "p93": "6.48",
                            "ct": "2017-01-13 09:10:39.237"
                        },
                        {
                            "prov": "新疆",
                            "p90": "5.78",
                            "p0": "5.52",
                            "p95": "6.93",
                            "p97": "6.45",
                            "p89": "6.06",
                            "p92": "6.41",
                            "p93": "5.97",
                            "ct": "2017-01-13 09:10:42.251"
                        }
                    ]
                }
            }
        }
    }
}
```

### html代码

```html 
<!--多条数据-->
<aps-ali-011033 :data="data" />
<!--一条数据-->
<aps-ali-011033 :data="data"  style="width: 300px"/>
```

## 最终呈现--多条数据

::: warning 提示
 可以按价格排序
:::

<aps-ali-011033 :data="$frontmatter.data"  class="mt-10"  />

## 最终呈现--一条数据


<aps-ali-011033 :data="$frontmatter.data_one"  class="mt-10"   style="width: 300px" />

 <style>
table{
    margin:0 !important;
    border-collapse: collapse;
}
thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
}
</style>