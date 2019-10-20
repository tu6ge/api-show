---
data: 
 showapi_res_code: 0
 showapi_res_error: ""
 showapi_res_body: 
  ret_code: 0
  indexList: 
   - 
    yestodayClosePrice: 3131.9385
    max52: ""
    diff_money: "-16.1398"
    tradeNum: 130848835
    code: sh000001
    maxPrice: 3129.8382
    nowPrice: 3115.7987
    min52: ""
    time: "2016-10-26 13:37:00.022"
    name: "上证指数"
    tradeAmount: 147643643377
    swing: "0.5515%"
    todayOpenPrice: 3129.8382
    diff_rate: "-0.5153%"
    minPrice: 3112.5663
   - 
    yestodayClosePrice: 10871.505
    max52: ""
    diff_money: "-61.8370"
    tradeNum: 15302406081
    code: sz399001
    maxPrice: 10871.239
    nowPrice: 10809.668
    min52: ""
    time: "2016-10-26 13:37:00.034"
    name: "深证成指"
    tradeAmount: 232533336567.038
    swing: "0.7139%"
    todayOpenPrice: 10871.239
    diff_rate: "-0.5688%"
    minPrice: 10793.626
   - 
    yestodayClosePrice: 7019.311
    max52: ""
    diff_money: "-48.0150"
    tradeNum: 1116230775
    code: sz399005
    maxPrice: 7016.919
    nowPrice: 6971.296
    min52: ""
    time: "2016-10-26 13:37:00.107"
    name: "中小板指"
    tradeAmount: 18569945096.13
    swing: "0.6984%"
    todayOpenPrice: 7016.227
    diff_rate: "-0.6840%"
    minPrice: 6967.894
   - 
    yestodayClosePrice: 2200.208
    max52: ""
    diff_money: "-17.7470"
    tradeNum: 809151739
    code: sz399006
    maxPrice: 2204.842
    nowPrice: 2182.461
    min52: ""
    time: "2016-10-26 13:37:00.120"
    name: "创业板指"
    tradeAmount: 17377878963.92
    swing: "1.1402%"
    todayOpenPrice: 2203.479
    diff_rate: "-0.8066%"
    minPrice: 2179.756
   - 
    yestodayClosePrice: 23565.111
    max52: 24364
    diff_money: -166.73
    tradeNum: ""
    code: HSI
    maxPrice: 23464.031
    nowPrice: 23398.381
    min52: 18278.801
    time: "2016-10-26 13:37:00.135"
    name: "恒生指数"
    tradeAmount: 30841982.45
    swing: "0.5257%"
    todayOpenPrice: 23396.141
    diff_rate: "-0.710%"
    minPrice: 23340.141
kline_data: 
 showapi_res_code: 0
 showapi_res_error: ""
 showapi_res_body: 
  dataList: 
   - 
    min: "3231.050"
    time: 201612091500
    open: "3232.030"
    volumn: "6283731.000"
    max: "3233.590"
    close: "3232.880"
   - 
    min: "3227.070"
    time: 201612091455
    open: "3227.330"
    volumn: "5896942.000"
    max: "3231.810"
    close: "3231.810"
   - 
    min: "3225.540"
    minute: 201612091450
    open: "3226.550"
    volumn: "4614218.000"
    max: "3228.230"
    close: "3228.230"
  ret_code: 0
  market: sh
  count: 232
  name: "上证指数"
  code: 000001
---
# 股票行情

## 阿里云地址
> https://market.aliyun.com/products/57000002/cmapi010845.html

## 大盘股指行情_批量

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
                    "indexList": [//股票指数列表
                        {
                            "yestodayClosePrice": 3131.9385,//昨日收盘价
                            "max52": "",
                            "diff_money": "-16.1398",//涨跌金额
                            "tradeNum": 130848835,//成交量
                            "code": "sh000001",//指数编码
                            "maxPrice": 3129.8382,//最高价
                            "nowPrice": 3115.7987,//当前价
                            "min52": "",
                            "time": "2016-10-26 13:37:00.022",//刷新时间
                            "name": "上证指数",//指数名称
                            "tradeAmount": 147643643377,//成交金额
                            "swing": "0.5515%",
                            "todayOpenPrice": 3129.8382,//今日开盘价
                            "diff_rate": "-0.5153%",//涨跌幅度
                            "minPrice": 3112.5663//最低价
                        },
                        //...
                    ]
                }
            }
        }
    }
}
```

### 页面呈现

```html 
 <aps-ali-010845  :data="data"  ></aps-ali-010845> 
```

### 最终的展示效果

 <aps-ali-010845  :data="$frontmatter.data"  class="mt-10"  ></aps-ali-010845> 

## K线图

### 数据准备

```js 
export default {
    data(){
        return {
            kline_data:{
                "showapi_res_code": 0,
                "showapi_res_error": "",
                "showapi_res_body": {
                    "dataList": [//k线数据结构
                        {
                            "min": "3231.050",//时间区间内最小的价格
                            "time": "201612091500",//时间点，5分|30分|60分k线时，此时间返回到分钟级别。day|week|month的k线时，时间返回到天级别。
                            "open": "3232.030",//时间区间开始的价格
                            "volumn": "6283731.000",//时间区间成交手数总合
                            "max": "3233.590",//时间区间内最高的价格
                            "close": "3232.880"//时间区间结束的价格
                        },
                        {
                            "min": "3227.070",//时间区间内最小的价格
                            "time": "201612091455",//时间点，5分|30分|60分k线时，此时间返回到分钟级别。day|week|month的k线时，时间返回到天级别。
                            "open": "3227.330",//时间区间开始的价格
                            "volumn": "5896942.000",//时间区间成交手数总合
                            "max": "3231.810",//时间区间内最高的价格
                            "close": "3231.810"//时间区间结束的价格
                        },
                        {
                            "min": "3225.540",//时间区间内最小的价格
                            "minute": "201612091450",//时间点，分钟
                            "open": "3226.550",//时间区间开始的价格
                            "volumn": "4614218.000",//时间区间成交手数总合
                            "max": "3228.230",//时间区间内最高的价格
                            "close": "3228.230"//时间区间结束的价格
                        } 
                    ],
                    "ret_code": 0,
                    "market": "sh",
                    "count": "232",
                    "name": "上证指数",
                    "code": "000001"
                }
            }
        }
    }
}
```

### 页面呈现

```html 
 <aps-ali-010845-kline  :data="kline_data"  ></aps-ali-010845-kline> 
```

### 最终的展示效果

 <aps-ali-010845-kline  :data="$frontmatter.kline_data"  class="mt-10"  ></aps-ali-010845-kline> 

 <style>
table{
    margin:0;
    border-collapse: collapse;
}
thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
}
</style>