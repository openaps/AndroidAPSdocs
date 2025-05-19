- - -
orphan: true
- - -

# 平滑血糖数据

If **BG** data is jumpy/noisy, **AAPS** may dose insulin incorrectly resulting in highs or lows. 若发现连续血糖监测(CGM)数据异常，务必在问题解决前暂停闭环系统运行。 Depending on your CGM, such issues may be due to the CGM configuration in **AAPS** (as explained further below); or a CGM sensor site issue (which may require replacing the CGM sensor).

## 在AAPS内部进行数据平滑处理

As of **AAPS** version 3.2, **AAPS** offers the option to smooth the data within **AAPS** rather than within the CGM app. There are three options available in [Config Builder > Smoothing](../SettingUpAaps/ConfigBuilder.md).

![Smoothing](../images/ConfBuild_Smoothing.png)

### 指数平滑法​

In general, this is the recommended option to start with, as it is most aggressive in resolving noise and rewrites the most recent value. However, see the table below for other specific recommendations.

### 均值平滑法

该选项的运作方式类似于先前在某些CGM平台上实现的回溯平滑功能。 该选项对血糖数值的近期变化更为敏感，因此更容易因CGM数据噪点而做出错误响应。

### 无平滑处理

Use this option only if your CGM data is being properly smoothed by your collector app before being transmitted to **AAPS**.

(smoothing-xdrip-dexcom-g6)=

## 平滑处理使用建议

|               | 指数平滑  |   均值平滑    | 无  |
| ------------- |:-----:|:---------:|:--:|
| G5/G6/ONE     | 若存在噪点 |           | 推荐 |
| G7/ONE+/Stelo | 若存在噪点 | If stable |    |

Libre sensors are noisy and can require smoothing. When using xDrip+ direct connection, or the [patched app data source](https://xdrip.readthedocs.io/en/latest/install/libre2patch/) (receiving from another app, Juggluco included), smoothing is already done [inside the app](https://xdrip.readthedocs.io/en/latest/use/NFC/#smooth-libre-3-data-when-using-xxx-method).

| Sensor / Data source | Juggluco | xDrip+ direct | xDrip+ bridge | xDrip+ patched app |
| -------------------- |:--------:|:-------------:|:-------------:|:------------------:|
| Libre 1/14 days/Pro  |   N.A.   |     N.A.      |     均值平滑      |        N.A.        |
| Libre 2/2+ (EU)      |   均值平滑   |       无       |     均值平滑      |         无          |
| Libre 2/2+/3/3+      |   均值平滑   |     N.A.      |     N.A.      |         无          |
