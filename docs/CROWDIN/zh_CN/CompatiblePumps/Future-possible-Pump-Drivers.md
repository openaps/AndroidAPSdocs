# 未来（可能）的泵驱动程序

这是市面上部分胰岛素泵的清单，包含各循环系统对其支持状态及在AAPS中的兼容情况。 文末附有胰岛素泵实现"闭环兼容"所需条件的说明。

## 能闭环的泵

### Kaleido ([主页](https://www.hellokaleido.com/))

**闭环状态:** 泵是闭环候选，但当前协议未知。 厂商对开源不感兴趣。

**硬件要求 AAPS：** 无。 似乎启用了蓝牙。

### Tandem: t:slim X2 ([主页](https://www.tandemdiabetes.com/))

**闭环状态:** 尚不可闭环。

虽然过去公司决定不允许外部设备控制他们的泵，但最近几年似乎发生了重大转变。 公司决定升级其t:slim X2泵以实现远程控制（通过t:connect应用程序），这意味着我们有望在未来通过AAPS控制泵。 新泵固件计划很快发布（今年或明年，在其无管路泵t:sport上市之前）。 目前尚不清楚t:connect将支持哪些操作（大剂量肯定可以，其他功能均未知）。

**硬件要求 AAPS：** 无。 似乎启用了蓝牙。

### Tandem：t:Mobi、t:slim X3和t:Mobi无管路版（[官网](https://www.tandemdiabetes.com/about-us/pipeline)）

**闭环状态:** 所有3款泵都将成为闭环候选。

Awaiting release of t:mobi in Europe (other two are not yet released anywhere). Development of AAPS t:mobi support has already started and should be available by end of 2025 (see more info on Discord).

**硬件要求 AAPS：** 无。 似乎启用了蓝牙。

### Willcare Insulin pump ([首页](http://shinmyungmedi.com/en/))

**闭环状态:** 目前尚不具备闭环条件，但其工作人员已与我们联系，并表示有意扩展泵的闭环功能（目前仅缺少获取/设置配置文件的指令）。

**硬件要求 AAPS：** 无。 似乎启用了蓝牙。

**备注：** 由于该公司有意与AAPS整合，可能会自行实现相关功能。

## 不再销售的泵（公司已停止运营）

### Animas Vibe

### Animas Ping

### Cellnovo

### Accu-Chek Insight

**备注：** 支持终止于2025年3月。

## 无法闭环的泵

### Medtronic 蓝牙

**评论：** Medtronic [已撤回](https://www.tidepool.org/blog/tidepool-loop-partner-update-ace-pumps)。

### Accu-Chek Solo

**备注：** 社区未能成功与Solo泵通信。

### Ypsomed 泵

**备注：** Ypso增加了非常严格的第三方加密。

## 泵实现闭环的要求

**先决条件**

- 泵必须支持某种远程控制功能。 （蓝牙，无线电频率等）
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