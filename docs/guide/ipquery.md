---
query_data:
    ret: 200
    data: 
        country: 中国
        country_code: cn 
        prov: 北京
        city: 北京
        city_code: beijing
        city_short_code: bj 
        area: 海淀
        post_code: "100000"
        area_code: "010"
        isp: "联通"
        lng:  116.405285
        lat: 39.904989
        long_ip: 2070937600
        big_area:  华北
---

# IP归属地查询

### 阿里云接口地址
> 接口地址 https://market.aliyun.com/products/57000002/cmapi031829.html

## 使用方式

1. 数据准备
```js
export default {
    data(){
        "query_data":{
            "ret": 200,
            "data": {
                "country": "中国",
                "country_code": "cn",
                "prov": "北京",
                "city": "北京",
                "city_code": "beijing",
                "city_short_code": "bj",
                "area": "海淀",
                "post_code": "100000",
                "area_code": "010",
                "isp": "联通",
                "lng": "116.405285",
                "lat": "39.904989",
                "long_ip": 2070937600,
                "big_area": "华北"
            }
        }
    }
}
```
2. 页面呈现
```html
<!--默认只显示 省市区三项，本例加上了国家显示-->
 <aps-ali-031829  :data="query_data"  :show-country="true"></aps-ali-031829> 
```

### 最终的展示效果

<aps-ali-031829  :data="$frontmatter.query_data"  class="mt-10" :show-country="true"></aps-ali-031829> 

## 参数列表

|参数| 类型| 默认值| 说明 |
|---|---|---|---|
|show-country | Boolean| false | 是否显示国家| 
|show-post-code | Boolean| false | 是否显示邮政编码| 
|show-area-code | Boolean| false | 是否显示区号| 
|show-isp | Boolean| false | 是否显示运营商| 
|show-country | Boolean| false | 是否显示国家| 

