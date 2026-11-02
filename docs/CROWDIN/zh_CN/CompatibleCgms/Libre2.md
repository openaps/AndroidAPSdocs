# Freestyle Libre 2 和 2+

FreeStyle Libre 2传感器现已成为真正的CGM设备，即使使用官方应用亦可实现。然而，LibreLink仍无法向AAPS传输数据。现有多种方案可实现其与AAPS的协同使用。

## 1. 使用蓝牙桥接器和 OOP

Bluetooth transmitters can be used with the Libre 2 (EU) or 2+ (EU) and an out of process algorithm app. 您可以像使用[Libre 1](./Libre1.md)一样，每5分钟接收一次血糖读数。

Check the bridge and app you want to use are compatible with your sensor and xDrip.

The Libre2 OOP (find it [here](#Libre2_OOP2)) is creating the same BG readings as with the original reader. AAPS系统配合Libre 2使用时，会进行10至25分钟的数据平滑处理，以避免跳点。请参阅下方[数值平滑处理与原始数据](#libre2-value-smoothing-raw-values)部分。 OOP算法每5分钟生成一次读数，该数值为过去5分钟的平均值。因此，血糖读数虽不够平滑，但与原始读取设备数据吻合，且能更快追踪"真实"血糖值变化。 If you try to loop with OOP please enable all smoothing settings in xDrip.

使用蓝牙发射器存在若干重要优势：

-   You can choose various OOP2 calibration strategies (1): have the reader values using "no calibration", or calibrate the sensor like a Libre 1 using "calibrate based on raw" or ultimately calibrate the reader-like values with "calibrate based on glucose".  
  Make sure to leave OOP1 disabled (2).

    → 汉堡菜单 → 设置 → 较少使用的设置 → 其他杂项选项

![OOP2 Calibration](../images/Libre2_OOP2Calibration.png)

-   Libre 2 传感器可以像 Libre 1 一样使用 14.5 天
-   完全支持 8 小时回填

备注：该发射器可与LibreLink应用并行使用，且不会对其造成干扰。

### 启动传感器

- → 汉堡菜单 (1) → 启动传感器 (2) → 启动传感器 (3) → 回答“不是今天”(4)。

![xDrip Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)

此操作不会实际启动任何Libre2传感器，也不会与其产生任何交互。 This is simply to indicate xDrip that a new sensor is delivering blood sugar levels. If available, enter two blood-measured values for the initial calibration. Now the blood glucose values should be displayed in xDrip every 5 minutes. 若因距离手机过远导致数据遗漏，系统将不会补传这些缺失值。

After a sensor change xDrip will automatically detect the new sensor and will delete all calibration data. You may check your blood glucose after activation and make a new initial calibration.

### Configure AAPS (for looping only)

-   In **AAPS**, open the **menu** (☰) in the top-left corner, go to **Configuration** > **BG Source** and select **xDrip+**

![Configuration > BG Source with xDrip+ BG selected](../images/v4/Configuration/configuration_bg_source.png)

-   If AAPS does not receive BG values when phone is in airplane mode, use 'Identify receiver' as described on [xDrip settings page](#xdrip-identify-receiver).

## 2. Use xDrip direct connection

```{admonition} Libre 2 EU only
:class: warning
xDrip doesn't support direct connection to Libre 2 US and AUS.
仅限 Libre 2 和 2+ **EU** 型号。
```

- Follow [these instructions](./Libre2MinimalL00per.md) to setup xDrip as the original documentation links to an obsolete OOP2  version.
- Follow setup instructions on [xDrip settings page](../CompatibleCgms/xDrip.md).

-   Select xDrip+ in [Configuration > BG Source](#Config-Builder-bg-source).

(libre2-value-smoothing-raw-values)=

### 数值平滑和原始值

Technically, the current blood sugar value is transmitted to xDrip every minute. 默认情况下，加权平均滤波器会基于过去25分钟的数据计算平滑值。您可通过NFC扫描功能菜单调整该时段参数。

→ 汉堡菜单 → 设置 → NFC 扫描功能 → 使用 xxx 方法时平滑 libre 3 数据

![xDrip advanced settings Libre 2 & raw values](../images/xDrip_Libre3_Smooth.png)

这对于闭环是强制性的。曲线看起来平滑，闭环结果非常好。触发警报的原始数值波动稍大，但与读取器显示数值完全一致。 In addition, the raw values can be displayed in the xDrip graph in order to be able to react in time to rapid changes. 请启用"较少使用设置 > Libre2高级设置"中的"显示原始数值"与"显示传感器信息"选项。此时原始数值将额外显示为白色小点，且系统菜单中可查看更多传感器信息。

当血糖快速波动时，原始数值极具参考价值。 Even if the dots are jumpier you would detect the tendency much better than using the smoothed line to make proper therapy decisions.

→ 汉堡菜单 → 设置 → 较不常见的设置 → Libre 2 的高级设置

![xDrip advanced settings Libre 2 & raw values](../images/Libre2_RawValues.png)



#### 校准

You can calibrate the Libre2 **with an offset of -40 mg/dL to +20 mg/dL \[-2.2 mmol/L to +1.1 mmol/L\]** (intercept). 斜率参数不可调整。设置新传感器后，请通过指尖采血验证读数，需注意植入后最初12小时数据可能不准确。由于可能存在与血液测量值的显著差异，请每24小时进行验证，必要时重新校准。若传感器在数日后仍存在显著偏差，则应予以更换。

## 3. 使用 Diabox

- 安装[Diabox](https://www.bubblesmartreader.com/_files/ugd/6afd37_f183eabd4fbd44fcac4b1926a79b094f.pdf)。在“设置”、“集成”中，启用“与其他应用程序共享数据”。

![Diabox](../images/Diabox.png)

- Select xDrip+ in [Configuration > BG Source](#Config-Builder-bg-source).

## 4. 使用 Juggluco

See [here](./Juggluco.md).
