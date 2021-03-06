# REMETA

## 原因

因为移动端各类设备尺寸繁杂，前端开发者在书写跨屏样式时如果要考虑兼容ie，则需要书写大量的媒体查询代码，且效果呈现不一致，花费较多的时间在兼容适配上，根据[@大漠](https://github.com/airen)大漠老师15年在手淘的兼容方案：[使用Flexible实现手淘H5页面的终端适配](https://github.com/amfe/article/issues/17)的启发，通过重写viewport的meta标签实现页面的缩放调整，总结平时的业务需求写了remeta这个js脚本。

## 效果

它能够通过判断设备尺寸分段实现页面的缩放，减少开发者的移动端适配时间，使移动端效果呈现一致。

## 适用范围

有兼容需求，适配代码繁杂，适配要求较多的场景。

## 使用

在头部引入（防止页面重绘）即可。根据自身业务需求在判定范围书写合适的适配尺寸。例如：以414px（iPhone6、iPhone 6s）为例小于等于该尺寸自动缩放为414px尺寸样式。

## 相关

[关于remetajs](https://feahter.github.io/2017/08/07/%E5%85%B3%E4%BA%8Eremetajs/)

[demo](http://www.orz3boom.com/demo/remeta/)

![二维码](http://www.orz3boom.com/demo/remeta/qrcode.png)