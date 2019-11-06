---
data:
  ret: 200
  data:
    cityinfo: {provinces: 浙江, city: 杭州, area: 西湖, id: '101210113', prov_py: zhejiang,
      city_py: hangzhou, qh: '0571', jb: '3', yb: '310000', area_py: xihu, area_short_code: xh,
      lng: '120.12979', lat: '30.25949'}
    now:
      id: '101210113'
      area_name: 西湖
      city: {night_air_temperature: '24', day_air_temperature: '31', wind_direction: 东风,
        wind_power: 4-5级转3-4级, weather: 多云, weather_code: '01'}
      detail: {time: '14:55', date: 09月12日, week: 四, temperature: '33', wind_direction: 东北风,
        wind_direction_str: NE, wind_power: 2级, wind_speed: <12km/h, humidity: 54%,
        weather: 多云, weather_code: '01', weather_english: Cloudy, qy: '1006', njd: 10.98km,
        rain: '0.0', aqi: '57', quality: 良, aqi_pm25: '', so2: '2', o3: '16', co: '8',
        no2: '25', pm10: '73', nongli: 八月十四, sun_begin: '05:42', sun_end: '18:09'}
      update_time: 1568273100
  qt: 0.065

---
# 天气预报

## 阿里云地址
> https://market.aliyun.com/products/57126001/cmapi00035384.html

## 使用方法

### 数据准备

```js 
export default {
    data(){
        return {
            data:{
                "ret": 200,
                "data": {
                    "cityinfo": {
                        "provinces": "浙江", //省份
                        "city": "杭州", //城市
                        "area": "西湖", //区县
                        "id": "101210113", //编码
                        "prov_py": "zhejiang", //省份拼音
                        "city_py": "hangzhou", //城市拼音
                        "qh": "0571", //区号
                        "jb": "3", //城市级别
                        "yb": "310000", //邮编
                        "area_py": "xihu", //区县拼音
                        "area_short_code": "xh", //区县缩写
                        "lng": "120.12979", //经度
                        "lat": "30.25949" //纬度
                    },
                    "now": {
                        "id": "101210113", //地区编码
                        "area_name": "西湖", //区县
                        "city": {
                            "night_air_temperature": "24", //夜晚温度
                            "day_air_temperature": "31", //白天温度
                            "wind_direction": "东风", //风向
                            "wind_power": "4-5级转3-4级", //风力
                            "weather": "多云" //天气文字标示
                            "weather_code": "01" //天气图片标示
                        },
                        "detail": {
                            "time": "14:55", //更新时间
                            "date": "09月12日", //日期
                            "week": "四", //周几
                            "temperature": "33", //温度
                            "wind_direction": "东北风", //风向
                            "wind_direction_str": "NE", //风向标示
                            "wind_power": "2级", //风力
                            "wind_speed": "<12km\/h", //风速
                            "humidity": "54%", //湿度
                            "weather": "多云", //天气文字标示
                            "weather_code": "01" //天气图片标示
                            "weather_english": "Cloudy", //天气英文
                            "qy": "1006", //气压
                            "njd": "10.98km", //能见度
                            "rain": "0.0", //降雨量
                            "aqi": "57", //空气质量
                            "quality": "良", //空气质量文字标示
                            "aqi_pm25": "", //pm2.5
                            "so2": "2", // so2
                            "o3": "16", // o3
                            "co": "8", // co
                            "no2": "25", // no2
                            "pm10": "73", // pm10
                            "nongli": "八月十四", //农历
                            "sun_begin": "05:42", //日出时间
                            "sun_end": "18:09" //日落时间
                        },
                        "update_time": 1568273100
                    }
                },
                "qt": 0.065
            }
        }
    }
}
```

### html代码
```html
<aps-ali-00035384 :data="data" style="width:400px;"/>
```

### 最终呈现

<aps-ali-00035384 :data="$frontmatter.data"  class="mt-10" style="width:400px;"/>