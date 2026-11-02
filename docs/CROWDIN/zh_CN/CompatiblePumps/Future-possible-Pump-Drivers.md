# 未来（可能）的泵驱动程序

This is a list of some pumps on the market, the status of their support in other looping systems, and their status in AAPS. At the end there is some information about what a pump needs to be "Loop capable".

    {contents} Table of contents
    :depth: 1
    :local: true

## Pumps in AAPS integration phase

**Coming soon:** drivers for these pumps are in development and already running in test builds.

Omnipod 5 ([Homepage](https://www.omnipod.com/))

![Omnipod 5 driver in development](../images/future-pumps/omnipod5-driver.png)

Tandem: t:Mobi ([Homepage](https://www.tandemdiabetes.com/))

![Tandem t:Mobi driver in development](../images/future-pumps/tandem-mobi-driver.png)

## 能闭环的泵

### Kaleido ([主页](https://www.hellokaleido.com/))

**闭环状态:** 泵是闭环候选，但当前协议未知。厂商对开源不感兴趣。

**硬件要求 AAPS：** 无。似乎启用了蓝牙。

### Tandem: t:slim X3 ([Homepage](https://www.tandemdiabetes.com/about-us/pipeline))

**Loop status:** Possible future Loop candidate. The hope is that t:slim X3 will allow full control from a phone, which would enable AAPS support, but the timeline and features are still unknown.

**硬件要求 AAPS：** 无。 It is expected to be Bluetooth enabled.

**Comments:** Not yet released. t:slim X3 appears to be repeatedly deprioritized on Tandem's roadmap in favour of t:Mobi (including a tubeless version) and Sigi (their patch pump).

### Twiist ([Homepage](https://www.twiist.com/))

**Loop status:** Loop candidate.

**硬件要求 AAPS：** 无。 It is Bluetooth enabled.

### Willcare Insulin pump ([首页](http://shinmyungmedi.com/en/))

**Loop status:** At the moment it is not a Loop candidate, but their staff contacted us and they are interested in making the pump loopable (it seems to be missing only the get/set profile commands).

**硬件要求 AAPS：** 无。似乎启用了蓝牙。

**备注：** 由于该公司有意与AAPS整合，可能会自行实现相关功能。

### Ypsopump ([Homepage](https://www.ypsomed.com/))

**Loop status:** Loop candidate. The pump's Bluetooth protocol has been reverse-engineered by the community, so communicating with it is possible in principle.

**硬件要求 AAPS：** 无。 It is Bluetooth enabled.

**Comments:** The Ypsopump protects its Bluetooth communication with heavy third-party encryption. Working with it is technically demanding, which makes building and maintaining a reliable driver hard. There is no production-ready AAPS driver yet.

## 不再销售的泵（公司已停止运营）

### Animas Vibe

### Animas Ping

### Cellnovo

### Accu-Chek Insight

**备注：** 支持终止于2025年3月。

## 无法闭环的泵

### Medtronic 蓝牙

**评论：** Medtronic [已撤回](https://www.tidepool.org/blog/tidepool-loop-partner-update-ace-pumps)。

### Tandem: t:slim X2 ([主页](https://www.tandemdiabetes.com/))

**Comments:** The Tandem Bluetooth protocol has been reverse-engineered, but on the t:slim X2 only boluses can be delivered — basal delivery cannot be controlled — so it cannot be used safely for looping. This is unlikely to change unless Tandem allows full control of the X2 from a phone, which would more probably arrive with the t:slim X3 instead.

### Accu-Chek Solo

**备注：** 社区未能成功与Solo泵通信。

## 泵实现闭环的要求

**先决条件**

- 泵必须支持某种远程控制功能。（蓝牙，无线电频率等）
- 协议已被破解/记录/等。

**最低要求**

- 设置临时基础率
- 获取状态
- 取消临时基础率

**对于oref1(超微大剂量)或大剂量给药：**

- 设置大剂量

**最好有**

- 取消大剂量
- 获取基础率配置文件（几乎是必需条件）
- 设置基础率配置文件（最好具备）
- 读取历史记录 

**其他（不是必需的，但最好有）**

- 设置扩展大剂量
- 取消扩展大剂量
- 读取历史记录
- 读取 TDD

### 其他泵支持

若您想了解其他泵的状态，请在Discord上联系我们。