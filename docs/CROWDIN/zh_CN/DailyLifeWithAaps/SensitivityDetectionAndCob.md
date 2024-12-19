(Sensitivity-detection-and-COB-sensitivity-detection)=

# 灵敏度检测

## 灵敏度检测算法

目前我们有三种灵敏度检测模型：

* 灵敏度AAPS
* 灵敏度加权平均
* 灵敏度 Oref1

### 灵敏度AAPS

灵敏度计算方式与Oref1相同，但您可以指定过去的时间范围。 最小碳水化合物吸收量根据偏好设置中的最大碳水化合物吸收时间来计算。

### 灵敏度加权平均

灵敏度是通过加权平均偏差来计算的。 您可以指定过去的时间范围。 较新的偏差具有更高的权重。 最小碳水化合物吸收量根据偏好设置中的最大碳水化合物吸收时间来计算。 这种算法在跟踪灵敏度变化方面是最快的。

(SensitivityDetectionAndCob-sensitivity-oref1)=

### 灵敏度 Oref1

灵敏度是根据过去8小时的数据或上次更换输注部位以来的数据（如果少于8小时）来计算的。 如果碳水化合物未被吸收，则会在偏好设置中指定的时间后被削减。 只有Oref1算法支持未宣布的餐食（UAM）。 这意味着检测到UAM的时间段会被排除在灵敏度计算之外。 因此，如果您在使用带有UAM功能的闭环胰岛素输注系统（SMB），您必须选择Oref1算法才能正常工作。 有关更多信息，请阅读[OpenAPS Oref1文档](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)。

## 同时摄入的碳水化合物

在使用AAPS时，WeightedAverage与Oref1之间存在显著差异。 Oref插件期望一次只有一餐在衰减。 这意味着第二餐要在第一餐完全衰减后才开始衰减。 而AAPS+WeightedAverage则会在您输入碳水化合物后立即开始衰减。 如果同时有多餐在体内，最小碳水化合物衰减会根据餐食大小和最大吸收时间进行调整。 因此，与Oref插件相比，最小吸收量会相应更高。