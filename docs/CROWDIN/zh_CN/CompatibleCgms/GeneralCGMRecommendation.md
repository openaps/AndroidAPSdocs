# 常规CGM使用建议

## CGM 卫生

无论您使用何种CGM系统，若需进行基于血糖仪的校准，则必须遵循以下明确规则——此要求适用于DIY CGM软件和官方应用程序的所有用户。

-   确保手和设备清洁。
-   建议在血糖趋势箭头呈水平状态时进行校准（通常15-30分钟即可）。
-   避免在血糖水平上升或下降时进行校准。
-   请进行"充分"校准——在官方应用程序中，系统会提示您每天检查一至两次。对于DIY系统可能无校准提示，需谨慎对待长期未校准的情况。
-   对于无需或无法校准的传感器，请至少每日检测一次真实血糖值。 AAPS系统的安全性与您传感器读数的可靠性直接相关。
-   If it all possible, calibrate with some of your readings in a lower range (4-5mmol/L or 72-90mg/dL) and some at a slightly higher level (7-9mmol/L or 126-160mg/dL) as this provides a better range for the point/slope calibration.

## 设置传感器 (G6)

安装传感器时，建议不要用力按压植入器，以免造成出血。传感器触点不得接触血液。

安装传感器后，可将发射器卡入传感器底板。注意！请先将方形侧卡入，再按压圆形侧。

(general-cgm-troubleshooting)=
## 故障排除

### 连接问题

蓝牙连接可能受到附近其他蓝牙设备的干扰，例如血糖仪、耳机、平板电脑，或微波炉、电磁炉等厨房电器。 In this case xDrip does not display any BG values. 当蓝牙连接恢复时，系统将自动回填数据。

### 传感器错误

如频繁出现传感器错误，建议尝试选择其他身体部位安装传感器。传感器触点不得接触血液。

"传感器错误"通常可通过立即饮水和按摩传感器周围区域来纠正！

### 跳点

You might try to change settings for noise blocking in xDrip (Settings - Inter-App Settings - Noise Blocking) i.e. "Block Very High noise and worse". 另请参阅[血糖数据平滑处理](../CompatibleCgms/SmoothingBloodGlucoseData.md)。

### 传感器负向使用时长

![Sensor age on the Sensor row of the expanded status panel](../images/main/main_status_row_expanded.png)

The sensor age is shown on the **Sensor** row of the status panel on the main screen (tap the chevron to expand it). A negative age occurs if there is either a double "CGM Sensor Insert" [careportal entry](#aaps-screens-careportal) or a sensor insert with wrong date. Open **Treatments history** (menu ☰), select the **Careportal** tab and delete the wrong entry.
