(Open-APS-features-DynamicISF)=
# 动态 ISF（DynISF）

迄今为止，在使用 **AMA** 和 **SMB** 时，**ISF**（胰岛素敏感系数）在 **配置文件** 中被定义为静态值，并在一天中的每个时间段固定不变。 然而，实际上，用户的 **ISF** 并非静态，而是根据其 **血糖（BG）** 水平变化：当处于高血糖水平时，用户需要更多胰岛素才能将 **BG** 降低 50mg/dL / 3mmol/L，相比之下，低**血糖**时所需胰岛素更少。 [Autosens](#Open-APS-features-autosens) 是首个尝试解决此问题的算法，通过在非进餐时间调整 **ISF**。

**动态 ISF**（也称为 **DynISF**）具有相同目的，但更为先进，可全天候使用。 此功能仅建议已熟练掌握 **AAPS** 控制与监测的高级用户使用。 在尝试使用前，请仔细阅读下文 [启用动态 ISF 时的注意事项](#dyn-isf-things-to-consider-when-activating-dynamicisf)。

```{admonition} CAUTION - Automations or Profile Percentage change
:class: 警告

使用 **自动化** 时务必谨慎。 这对 **动态 ISF** 尤为重要。

启用 **动态 ISF** 时，请禁用所有通过 **自动化规则** 临时更改 **配置文件** 的操作，因为这会导致 **动态 ISF** 在纠正大剂量时过于激进，从而引发低血糖。 这正是 **动态 ISF** 的设计目的，因此无需通过自动化在高 **BG** 时额外补充胰岛素。

```

要使用 **动态 ISF**，**AAPS** 的数据库需包含至少 7 天的用户数据。

## 动态 ISF 的作用

**动态 ISF** 根据以下因素动态调整胰岛素敏感系数（**ISF**）：

- 每日胰岛素总剂量（TDD）；
- 当前和预测的血糖值。

启用 **动态 ISF** 后，**配置文件** 中设置的静态 **ISF** 值将不再被使用（除非 **AAPS** 数据库缺乏足够的 TDD 数据，*例如*全新安装应用时作为备用）。

**SMB/AMA 示例** - 用户**配置文件**中由用户设定并被 **SMB** 和 **AMA** 使用的静态 **ISF**。

![静态ISF](../images/DynamicISF/DynISF1.png)

**动态 ISF 示例** - 由 **动态 ISF** 动态调整的 **ISF** 值。

![动态ISF](../images/DynamicISF/DynISF2.png)

红色圆圈标注部分显示：`配置文件 ISF` -> `由 DynISF 计算的 ISF`。 点击该部分可查看详细信息，例如计算器使用的 **ISF** 和碳水吸收情况（参见下文 [ISF 的其他用途](#dynisf-other-usages-of-isf)）。

**DynISF** 值也可通过额外图表中的“可变敏感度”数据线 （白色线条，见上图红色箭头）展示。

## 动态 ISF 的计算原理

**动态 ISF** 采用 Chris Wilson 模型替代用户**配置文件**中设置的静态 **ISF** 值。 详细解释可参考： [Chris Wilson on Insulin Sensitivity (Correction Factor) with Loop and Learn, 2/6/2022](https://www.youtube.com/watch?v=oL49FhOts3c)。

实现中使用的 **动态 ISF** 公式为：`ISF = 1800 / ((TDD * DynISF 调整因子) * Ln((当前 BG / 胰岛素除数) + 1))`

公式中各变量的详细说明如下：<br/> 注：`Ln` 表示自然对数（数学函数）。

该公式用于计算当前 **ISF**，并应用于 oref1 [对 **IOB**、**ZT**（零时临时基础率）和 **UAM** 的预测（参见 AAPS 屏幕预测线）](#aaps-screens-prediction-lines)。 此外，也用于 **COB** 和大剂量向导（参见下文 [ISF 的其他用途](#dynisf-other-usages-of-isf)）。

### 总日剂量（TDD）
TDD将使用以下值的组合：
1.  7 天平均 **TDD**；
2.  前一天的**TDD**；
3.  过去八小时胰岛素使用量的加权平均值，并推算出24小时的值。

在动态 ISF 的计算中，所使用的 ​总日剂量（TDD）​​ 是由以上三个部分的加权平均值组成，每个部分各占 ​1/3 权重​。

### 动态ISF调整因子

此值在用户 **偏好设置** 中设定，用于调节 **动态 ISF** 的激进程度。 详见下文 [偏好设置](#dyn-isf-preferences)。

### 胰岛素除数
胰岛素除数取决于所使用的胰岛素的峰值，并且与峰值时间成反比。 对于Lyumjev，此值为75；对于Fiasp，为65；对于常规速效胰岛素，为55。

### 基于预测 BG 的 ISF 用于剂量决策

动态敏感度使用 **当前 BG** 值计算，并在 **AAPS** 中显示为当前 ISF。 但在剂量计算时，oref1 算法会使用 **未来 ISF**。

以避免在低血糖或预测低血糖时过量注射。

**未来 ISF** 使用相同公式，但可能以 **预测最低 BG** 替代**当前 BG**。 **预测最低 BG**（基于 [oref1 计算](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html)）是预测周期内血糖的最低值。

* 若当前 **BG** 高于目标<br/>**且**波动在 +/-3 mg/dL 内：<br/> `取平均值(预测最低 BG,当前 BG)`。
* 若最终 ​**BG**​ 高于目标且血糖上升，<br/>  
  **或**最终 ​**BG**​ 高于当前 **BG**：`使用当前 BG`；
* 其他情况：<br/>`使用预测最低 BG`。

简化示例如下图所示， 橙色点使用**预测 BG**，紫色点使用**平均值**，蓝色点使用**当前 BG**。

![DynISF_BGValue.png ](../images/DynamicISF/DynISF_BGValue.png)

(dynisf-other-usages-of-isf)=
## ISF 的其他用途

### ISF 与碳水吸收

如 [COB 计算](../DailyLifeWithAaps/CobCalculation.md) 所述，通常碳水吸收计算公式为：   
`吸收碳水 = 偏差deviation * 碳水系数ic / ISF`  
启用 **动态 ISF** 时，此处使用的 **ISF** 为过去 24 小时动态 ISF 的平均值。

### 大剂量向导中的 ISF

使用 [推注向导](#aaps-screens-bolus-wizard) 时，若 ​**BG​** 高于目标，会基于 **​ISF​** 添加纠正剂量。

启用 ​**动态 ISF​ 时**，此处 **​ISF​** 为过去 24 小时动态 ISF 的平均值。

(dyn-isf-preferences)=
## 偏好设置

在 [偏好设置 > OpenAPS SMB](#Preferences-openaps-smb-settings) 中勾选 **启用动态敏感度** 以激活功能。 启用后将显示新设置项。

![动态 ISF 设置](../images/Pref2020_DynISF.png)

(dyn-isf-adjustment-factor)=
### 动态ISF调整因子
**动态 ISF** 基于通用规则设计，假设相同 TDD 的用户具有相同敏感度。 由于个体差异，**调整因子** 允许用户自定义胰岛素敏感度相对于“标准”值的比例。

**调整因子** 范围为 1% 至 300%， 作为 **TDD** 的乘数：

* 高于 100% 时，**DynISF** 更激进（**ISF** 值*更小*，降**糖**所需胰岛素更多）；
* 低于 100% 时，**DynISF** 更保守（**ISF** 值更大，降**糖**所需胰岛素更少）。

启用 [包含比例的**配置文件百分比切换**](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) 时，**调整因子** 会相应调整。 较低的**配置文件比例**会降低**调整因子**，而较高的**配置文件比例**则会产生相反效果。

例如，若当前**调整因子**为 80%，切换至 80% **配置文件**时，实际**调整因子**为`0.8*0.8=0.64`。

这意味着使用 **DynISF** 时，可通过 **配置文件百分比** 手动临时调节敏感度， 适用于运动（降低百分比）、疾病（提高百分比）等场景。

### 触发暂停注射的低血糖值

触发胰岛素暂停的 **BG 值**， 默认为标准目标模型。 可设置为 60mg/dL (3.3mmol/L) 至 100mg/dL (5.5mmol/L)。 低于 65/3.6 时将使用默认模型。

### 启用基于TDD的敏感性比率以调整基础率和血糖目标

此设置替换了Autosens，并使用过去24小时**TDD**与7天**TDD**的比率作为基础来增加或减少基础率，这与标准Autosens的方式相同。 如果启用了根据敏感性调整目标的选项，则此计算值也用于调整目标。 与Autosens不同，此选项不会调整**ISF**值。

(dyn-isf-things-to-consider-when-activating-dynamicisf)=
## 启用动态 ISF 的注意事项

* 该功能仅推荐给那些已经熟练掌握**AAPS**控制和监测的高级用户。 最好在使用 **​SMB**​ 实现良好控制后再尝试 **​动态 ISF**。
* 禁用所有基于 ​**BG**​ 触发 ​**配置文件百分比**​ 的[ **自动化**](../DailyLifeWithAaps/Automations.md)，避免胰岛素过量导致低血糖。 这已是 ​**动态ISF**​ 算法的一部分。
* [配置文件百分比](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) 会影响动态 ISF计算（参见 [动态 ISF调整因子](#dyn-isf-adjustment-factor)）。 长期使用非 100% 的**配置文件百分比**属于不良实践， 若需调整**配置文件**，应创建新**配置文件**而非长期使用百分比。
* ​**动态 ISF**​ 可能不适用于所有人。 尤其是以下情况：
  * 生活方式波动大（饮食或运动不规律）；
  * TDD 或敏感度日间差异显著。
* **调整因子** 的初始值无精确指导原则。 然而，作为初始参考点：假设您的 **配置文件** 参数设置正确，当血糖处于目标范围内且 **BG** 水平保持稳定时，**DynISF** 值应大致与您先前 **配置文件** 中的设定值相近。<br/>若发现 **动态 ISF** 作用过于激进，可降低 **调整因子**，反之亦然。
* 尽管 **DynISF** 不使用**配置文件 ISF**，但若发现敏感度与原配置差异较大，建议更新配置文件。 在您丢失 **AAPS** 数据的情况下（_例如_ 更换新手机、升级 **AAPS** 版本等），这一机制将发挥作用，因为您的 **配置文件 ISF** 会作为接下来 7 天的备用参数。