(generaltroubleshooting)=

# **故障排除**

您可以在维基的许多页面中找到故障排除信息。 This page is a collection of links to help you find the information to solve your problem for various known issues.

更多有用信息可能也可在[常见问题解答](../UsefulLinks/FAQ.md)中找到。

---

(generaltroubleshooting-aaps-app)=

## **AAPS 应用**

### **构建与更新**

* [丢失密钥库](#troubleshooting_androidstudio-lost-keystore)
* [Android Studio 故障排除](TroubleshootingAndroidStudio)

### **安装**

您可能会看到 Google Play Protect 警告，提示该应用不安全、为旧版 Android 构建且不包含最新的隐私保护功能。

忽略该警告：更多详情，仍要安装。

![Google Play Protect 警告](../images/troubleshooting/InstallGPP.png)

### **设置**
* 配置文件

  ![错误：基础率未按小时对齐](../images/Screen_DifferentPump.png)

* [胰岛素泵 - 来自不同泵的数据](#update30-failure-message-data-from-different-pump)

  ![错误提示：来自其他泵的数据](../images/BasalNotAlignedToHours2.png)

* [Nightscout 客户端](../GettingHelp/TroubleshootingNsClient.md)

### **使用**
* [错误的碳水化合物值](#CobCalculation-detection-of-wrong-cob-values)

   ![错误：碳水化合物吸收缓慢](../images/Calculator_SlowCarbAbsorption.png)

* [短信指令](#SMSCommands-troubleshooting)

---

(generaltroubleshooting-bluetooth-related-issues)=


## **Bluetooth related issues**

For known issues with Bluetooth connections, dropouts of pump/pods, or activation and connection issues [Bluetooth Troubleshooting](../GettingHelp/BluetoothTroubleshooting.md)

---

(generaltroubleshooting-android-related-issues)=

## **Android Related Issues**

### **电池优化**

Android has implemented battery saving setting that are enabled by default. These settings automatically suspend/pause applications that are not required for the system to function to help conserve the amount of battery energy used by apps that don't always need to be running.

When this is enabled, it will very likely cause issue for **AAPS** and other supporting apps like **xDrip+**.

It's important to ensure that you have disabled Battery Optimization to ensure **AAPS** and other supporting apps remain active all the time.

Depending on your phone model and make there may be more than one location and setting which needs to have this disabled.

***NOTE:** Follow the steps below to Disable Battery Optimization for the Bluetooth service if your phone has this option, the same steps can be used to disable for **AAPS** and other apps, however the screenshots will only show how to do this for the Bluetooth service.*

#### **Pixel手机（原生安卓系统）**

* Go to the Android settings, select "Apps".

  ![Android 设置 > 应用](../images/troubleshooting/pixel/01_androidsettings.png)

* 选择"查看所有应用"

  ![查看所有应用](../images/troubleshooting/pixel/02_apps.png)

* 在右侧菜单中选择"显示系统"应用

  ![显示系统应用](../images/troubleshooting/pixel/03_allapps.png)

* 现在搜索并选择"蓝牙"应用

  ![蓝牙应用](../images/troubleshooting/pixel/03_bluetooth.png)

* 点击"应用电池用量"并选择"无限制"

  ![蓝牙电池优化](../images/troubleshooting/pixel/04_btunrestricted.png)


#### **三星手机**

* 进入 Android 设置，选择"应用"

* 在疑似改变排序算法的图标处（1），选择"显示系统应用"（2）

  ![应用过滤器](../images/troubleshooting/samsung/Samsung01_Apps.png)

  ![显示系统应用](../images/troubleshooting/samsung/Samsung02_ShowSystemApps.png)

* 现在搜索蓝牙应用并选择查看其设置

  ![蓝牙应用](../images/troubleshooting/samsung/Samsung03_BtApp.png)

* 选择"电池"

  ![电池设置](../images/troubleshooting/samsung/Samsung04_Battery.png)

* 设置为"无限制"

  ![未优化](../images/troubleshooting/samsung/Samsung05_NotOptimized.png)

#### **Huawei phones**

See this guide for [Huawei bluetooth & battery optimization](../CompatiblePhones/Huawei.md)

---

(generaltroubleshooting-cgm)=

## **Continious Glucose Monitor (CGM)**

Useful links to known issues and steps to resolve for CGMs.

* [常规](#general-cgm-troubleshooting)
* [Dexcom G6](#DexcomG6-troubleshooting-g6)
* [Libre 3](#libre3-experiences-and-troubleshooting)
* [xDrip - 无 CGM 数据](#xdrip-identify-receiver)
* [xDrip - Dexcom 故障排除](#xdrip-troubleshooting-dexcom-g5-g6-and-xdrip)

---

(generaltroubleshooting-pumps)=

## **胰岛素泵**

Useful links to known issues and steps to resolve for Pumps

* [DanaRS](#DanaRS-Insulin-Pump-dana-rs-specific-errors)
* [Accu-Chek Combo 通用指南](../CompatiblePumps/Accu-Chek-Combo-Tips-for-Basic-usage.md)
* [Accu-Chek Insight](#Accu-Chek-Insight-Pump-insight-specific-errors)
* [Medtronic + RileyLink](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)

---

(generaltroubleshooting-phones)=

## **手机**

Useful links to known issues and steps to resolve for Phones

* [List of tested phone and device setups](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true)
* [Jelly](../CompatiblePhones/Jelly.md)
* [华为蓝牙与电池优化](../CompatiblePhones/Huawei.md)

(generaltroubleshooting-smartwatches)=

## 智能手表

Useful links to known issues and steps to resolve for Smartwatches

* [穿戴应用故障排除](#Watchfaces-troubleshooting-the-wear-app)
