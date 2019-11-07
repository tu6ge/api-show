---
data:
  showapi_res_code: 0
  showapi_res_error: ''
  showapi_res_body:
    ret_code: 0
    pm: {num: '1', so2: '2', o3: '96', area_code: hangzhou, pm2_5: '91', ct: '2017-05-06
        16:19:26.556', primary_pollutant: 颗粒物(PM10), co: '0.28', area: 杭州, no2: '8',
      aqi: '500', quality: 严重污染, pm10: '841', o3_8h: '89'}
    siteList:
    - {site_name: 万寿西宫, co: '0.2', so2: '2', o3: '112', no2: '8', aqi: '59', quality: 良,
      pm10: '54', pm2_5: '42', o3_8h: '89', primary_pollutant: 细颗粒物(PM2.5), ct: '2017-05-06
        16:19:40.889'}
    - {site_name: 定陵, co: '0.2', so2: '2', o3: '116', no2: '2', aqi: '52', quality: 良,
      pm10: _, pm2_5: '36', o3_8h: '109', primary_pollutant: 细颗粒物(PM2.5), ct: '2017-05-06
        16:19:40.889'}

---
# PM2.5空气质量指数

## 阿里云地址
> https://market.aliyun.com/products/57096001/cmapi010843.html

## 使用方法

### 数据准备

```js 
export default {
    data(){
        return {
            data:{
                "showapi_res_code": 0,
                "showapi_res_error": "",
                "showapi_res_body": {
                    "ret_code": 0,
                    "pm": {
                        "num": "1",  //排名
                        "so2": "2",  //
                        "o3": "96",  //臭氧1小时平均，μg/m3
                        "area_code": "hangzhou",  //
                        "pm2_5": "91",  //颗粒物（粒径小于等于2.5μm）1小时平均，μg/m3
                        "ct": "2017-05-06 16:19:26.556",  //发布时间
                        "primary_pollutant": "颗粒物(PM10)",  //首要污染物
                        "co": "0.28",  //一氧化碳1小时平均，mg/m3
                        "area": "杭州",  //城市名称
                        "no2": "8",  //二氧化氮1小时平均，μg/m3
                        "aqi": "500",  //空气质量指数(AQI)，即air quality index，是定量描述空气质量状况的无纲量指数
                        "quality": "严重污染",  //空气质量指数类别，有“优、良、轻度污染、中度污染、重度污染、严重污染”6类
                        "pm10": "841",  //颗粒物（粒径小于等于10μm）1小时平均，μg/m3
                        "o3_8h": "89"  //臭氧8小时滑动平均，μg/m3
                    },
                    "siteList": [  //城市下属的监测点列表
                        {
                            "site_name": "万寿西宫",
                            "co": "0.2",
                            "so2": "2",
                            "o3": "112",
                            "no2": "8",
                            "aqi": "59",
                            "quality": "良",
                            "pm10": "54",
                            "pm2_5": "42",
                            "o3_8h": "89",
                            "primary_pollutant": "细颗粒物(PM2.5)",
                            "ct": "2017-05-06 16:19:40.889"
                        },
                        {
                            "site_name": "定陵",
                            "co": "0.2",
                            "so2": "2",
                            "o3": "116",
                            "no2": "2",
                            "aqi": "52",
                            "quality": "良",
                            "pm10": "_",
                            "pm2_5": "36",
                            "o3_8h": "109",
                            "primary_pollutant": "细颗粒物(PM2.5)",
                            "ct": "2017-05-06 16:19:40.889"
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
<aps-ali-010843 :data="data" style="width: 900px"/>
```
### 最终呈现

<aps-ali-010843 :data="$frontmatter.data"  class="mt-10 custom" />


<style>
.custom{
    width: 900px;margin-left:-100px;
}
.aps-ali-010843 h1{
    color:#fff;
}
</style>