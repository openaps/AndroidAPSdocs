# Freestyle Libre 1

若要将Libre用作CGM设备实现每5分钟自动获取血糖值（无需手动扫描传感器），需购买NFC转蓝牙桥接器（市售设备，基于已停用的[LimiTTer](https://github.com/JoernL/LimiTTer)项目）。

```{admonition} Libre 2, Libre 1 US and Libre Pro
:class: warning
请确认您选用的桥接器及应用程序与传感器兼容。  
```

市场上有几种桥接器可供选择：

-   [喵喵 Reader](https://www.miaomiao.cool/)（第1、2或3代）亦可通过全球速卖通购买。
-   [Blucon Nightrider](https://www.ambrosiasys.com/our-products/blucon/)（请注意：最新固件版本可能与部分应用程序不兼容，且厂商应用不会向AAPS广播数据）
-   [Bubble（或Bubble Mini）](https://www.bubblesmartreader.com/)可从欧洲供应商（[Bubblan](https://www.bubblan.org/)、[BubbleShop](https://bubbleshop.eu/)）购买，俄罗斯用户可[由此](https://vk.com/saharmonitor/)获取。 也可在 AliExpress 上找到。
-   俄罗斯用户的 Atom。

从技术沿革来看，可使用特定手表——索尼SmartWatch 3（SWR50型号），其内置可激活的NFC芯片，能作为NFC采集器使用。 然而，上文所列的定制NFC转蓝牙桥接器方案更为简便，已成为大多数用户将Libre 1（非美版）用作CGM的首选方案。

-   Sony Smartwatch 3 (SWR50) <https://github.com/pimpimmi/LibreAlarm/wiki/>

目前情况下，若使用Libre 1作为血糖数据源，则无法在SMB算法中启用"始终启用SMB"及"碳水化合物后启用SMB"功能。 Libre 1的血糖值波动性较大，无法安全使用。 详情请参阅[血糖数据平滑处理](../CompatibleCgms/SmoothingBloodGlucoseData.md)。

## 1. 使用 xDrip+

-   xDrip+ 支持 Miaomiao、Bubble、Blucon、Atom 和 LibreAlarm。
-   您可安全下载[最新稳定版APK](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)；若需最新功能，则应使用[每日快照版](https://github.com/NightscoutFoundation/xDrip/releases)。
-   请按照[xDrip+设置页面](../CompatibleCgms/xDrip.md)上的安装说明进行操作。
-    You also need OOP2 for Libre 1 US (and Libre 2 EU).
-   在[ConfigBuilder, BG Source](#Config-Builder-bg-source)中选择xDrip+。

(libre1-using-glimp)=
## 2. 使用 Glimp

-   Glimp 支持用于 Libre 1 和 Libre 2 EU 的 Miaomiao、Blucon 和 Bubble。
-   您需要 Glimp 4.15.57 或更新版本。 不支持旧版本。
-   安装 [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia)。
-   在 [ConfigBuilder, BG Source](#Config-Builder-bg-source) 中选择 Glimp。

(libre1-using-tomato)=
## 3. 使用 Tomato

- Tomato是喵喵设备的官方配套应用。
- 请安装[Tomato](http://tomato.cool/#download_page)并遵循厂商提供的[操作指南](http://tomato.cool/how-to-broadcast-data-to-android-aps/tips/)。
- 在[ConfigBuilder, BG Source](#Config-Builder-bg-source) 中选择 Tomato。

## 4. 使用 Diabox

- Diabox 是 Bubble 的官方配套应用。
- 安装 [Diabox](https://t.me/s/DiaboxApp)。 在“设置”、“集成”中，启用“与其他应用程序共享数据”。

![Diabox](../images/Diabox.png)

- 在[ConfigBuilder, BG Source](#Config-Builder-bg-source)中选择xDrip+。
