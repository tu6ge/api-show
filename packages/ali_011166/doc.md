---
shfutures:
  status: '0'
  msg: ok
  result:
  - {type: AU1511, typename: 黄金1511, price: '237.25', changequantity: '1.951', buyprice: '233.25',
    buyamount: '0', sellprice: '244.6', sellamount: '0', tradeamount: '20', openingprice: '236.049',
    lastclosingprice: '235.299', maxprice: '237.25', minprice: '236.049', holdamount: '16',
    increaseamount: '0'}
  - {type: AU1512, typename: 黄金1512, price: '238.7', changequantity: '-0.949', buyprice: '238.7',
    buyamount: '5', sellprice: '238.75', sellamount: '100', tradeamount: '210274',
    openingprice: '241.5', lastclosingprice: '239.649', maxprice: '241.5', minprice: '237.799',
    holdamount: '188302', increaseamount: '-6086'}
bank:
  status: '0'
  msg: ok
  result:
  - {type: 美元账户黄金, midprice: '1164.95', buyprice: '1163.65', sellprice: '1166.25',
    maxprice: '1166.45', minprice: '1162.65', openingprice: '1163.20', lastclosingprice: '1164.50',
    changequantity: '-0.85', updatetime: '2015-10-26 17:36:57'}
  - {type: 美元账户铂金, midprice: '989.50', buyprice: '983.50', sellprice: '995.50', maxprice: '1004.50',
    minprice: '988.50', openingprice: '1001.50', lastclosingprice: '1001.30', changequantity: '-17.80',
    updatetime: '2015-10-26 17:36:57'}
hkgold:
  status: '0'
  msg: ok
  result:
  - {type: 人民币公斤条合约, buyprice: '238.58', sellprice: '241.58', finalprice: '240.06',
    openingprice: '-', closingprice: '-', maxprice: '243.72', minprice: '236.4', updatetime: '2015-10-26
      17:37:10'}
  - {type: 港元999.9黄金合约, buyprice: '10919.0', sellprice: '10938.0', finalprice: '10926.25',
    openingprice: '-', closingprice: '-', maxprice: '10951.0', minprice: '10889.0',
    updatetime: '2015-10-26 17:37:10'}
currency:
  status: '0'
  msg: ok
  result:
  - {type: 黄金英镑, price: '759.5400', changequantity: '-0.3000', dollarrate: '1.5334',
    ratechange: '0.0023', updatetime: '2015-10-26 17:38:03'}
  - {type: 黄金欧元, price: '1055.7400', changequantity: '-0.3900', dollarrate: '1.1031',
    ratechange: '0.0013', updatetime: '2015-10-26 17:38:03'}
  - {type: 黄金澳元, price: '1604.9900', changequantity: '-6.5400', dollarrate: '0.7253',
    ratechange: '0.0033', updatetime: '2015-10-26 17:38:03'}
london:
  status: '0'
  msg: ok
  result:
  - {type: 黄金美元, price: '1164.45', changepercent: 0.07%, changequantity: '0.59', openingprice: '1163.66',
    maxprice: '1166.20', minprice: '1161.90', lastclosingprice: '1163.86', amplitude: '0.37',
    buyprice: '1165.25', sellprice: '1164.45', updatetime: '2015-10-26 17:30:00'}
shgold:
  status: '0'
  msg: ok
  result:
  - {type: Au(T+D), typename: 黄金延期, price: '238.05', openingprice: '241.00', maxprice: '241.50',
    minprice: '237.50', changepercent: -0.90%, lastclosingprice: '240.22', tradeamount: '45998.0000',
    updatetime: '2015-10-26 15:29:13'}
  - {type: Au99.99, typename: 沪金99, price: '238.30', openingprice: '241.48', maxprice: '241.48',
    minprice: '238.00', changepercent: -0.91%, lastclosingprice: '240.49', tradeamount: '25400.9800',
    updatetime: '2015-10-26 15:29:15'}

---
# 黄金价格查询

## 阿里云地址
> https://market.aliyun.com/products/57000002/cmapi011166.html

## 使用方法

### 数据准备

```js
export default {
    data(){
        return {
            shfutures:{
                "status": "0",
                "msg": "ok",
                "result": [
                    {
                        "type": "AU1511",
                        "typename": "黄金1511",
                        "price": "237.25",
                        "changequantity": "1.951",
                        "buyprice": "233.25",
                        "buyamount": "0",
                        "sellprice": "244.6",
                        "sellamount": "0",
                        "tradeamount": "20",
                        "openingprice": "236.049",
                        "lastclosingprice": "235.299",
                        "maxprice": "237.25",
                        "minprice": "236.049",
                        "holdamount": "16",
                        "increaseamount": "0"
                    },
                    {
                        "type": "AU1512",
                        "typename": "黄金1512",
                        "price": "238.7",
                        "changequantity": "-0.949",
                        "buyprice": "238.7",
                        "buyamount": "5",
                        "sellprice": "238.75",
                        "sellamount": "100",
                        "tradeamount": "210274",
                        "openingprice": "241.5",
                        "lastclosingprice": "239.649",
                        "maxprice": "241.5",
                        "minprice": "237.799",
                        "holdamount": "188302",
                        "increaseamount": "-6086"
                    }
                ]
            },
            bank://... 
            hkgold://..
            //... 其他数据
        }
    }
}
```

### html代码

```html
<h3>上海期货交易所价格查询</h3>
<!-- type默认值是shfutures -->
<aps-ali-011166 :data="shfutures" />

<h3>银行账户黄金价格查询</h3>
<aps-ali-011166 :data="bank" type="bank" />

<h3>香港金银业贸易场价格查询</h3>
<aps-ali-011166 :data="hkgold" type="hkgold" />

<h3>货币贵金属价格查询</h3>
<aps-ali-011166 :data="currency" type="currency" />

<h3>伦敦金银价格查询</h3>
<aps-ali-011166 :data="london" type="london" />

<h3>上海黄金交易所价格查询</h3>
<aps-ali-011166 :data="shgold" type="shgold" />
```

### 最终呈现

#### 上海期货交易所价格查询
<aps-ali-011166 :data="$frontmatter.shfutures"   class="mt-10"/>


#### 银行账户黄金价格查询
<aps-ali-011166 :data="$frontmatter.bank" type="bank"   class="mt-10"/>

#### 香港金银业贸易场价格查询
<aps-ali-011166 :data="$frontmatter.hkgold" type="hkgold"   class="mt-10"/>

#### 货币贵金属价格查询
<aps-ali-011166 :data="$frontmatter.currency" type="currency"   class="mt-10"/>

#### 伦敦金银价格查询
<aps-ali-011166 :data="$frontmatter.london" type="london"   class="mt-10"/>

#### 上海黄金交易所价格查询
<aps-ali-011166 :data="$frontmatter.shgold" type="shgold"   class="mt-10"/>