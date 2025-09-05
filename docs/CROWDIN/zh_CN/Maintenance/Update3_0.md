# 升级到 AAPS 3.0 后的必要检查

* **最低支持Android 9.0。**
* **数据不会迁移至新数据库。**

  由于数据库结构变动过大，无法进行数据迁移。 升级后，IOB、COB、治疗记录等数据将被清空。 升级后IOB、COB等数据清零，需新建[配置文件切换](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)

  请谨慎规划升级时间！ ！ 建议在无活性胰岛素和碳水时进行升级

* 新功能及变更详情请参阅[版本说明](../Maintenance/ReleaseNotes.md)。


## 检查自动化规则

* 新增了限制条件。 请检查所有自动化规则，确保条件仍有效。
* 若条件缺失，需重新添加。
* 红色标记的自动化规则包含无效操作，需编辑并重置为有效值。

  示例：此前允许切换至140%的配置文件，现限制为130%。

## 检查 NSClient 设置并配置同步项

* NSClient 插件实现已完全重构。
* 进入 NSClient 标签页，通过右侧菜单打开设置。 新增“同步”选项。
* 现在可详细选择与 Nightscout 同步的数据项。

(Update3_0-nightscout-profile-cannot-be-pushed)=
## Nightscout 配置文件无法推送
* Nightscout 配置文件功能已移除！
* 若需将当前 Nightscout 配置文件复制为本地配置文件，进入治疗页面（现通过右侧菜单打开）
* 查找 100% 的配置文件切换记录，点击“克隆”
* 将添加新的本地配置文件，有效期从当前日期开始
* 若需更新 Nightscout 端的配置文件：使用“克隆”功能（需选择记录，而非配置文件）， 保存更改后可见“配置文件生效于:”更新为当前日期。

(Update3_0-reset-master-password)=
## 重置主密码
* 现支持忘记主密码时进行重置
* 在手机文件系统的 `/AAPS/extra` 目录下创建名为 `PasswordReset` 的空文件
* 重启 AAPS
* 新密码将变为当前使用泵的序列号
* Dash 泵：序列号固定为 4241
* EROS 泵：序列号显示在 POD 标签页的“Sequence Number”中

## BG 值下方的警告信号

从 AndroidAPS 3.0 开始，主界面 BG 数值下方可能出现警告标识：

  ![红色 BG 警告](../images/bg_warn_red.png)

  ![黄色 BG 警告](../images/bg_warn_yellow.png)

详细信息请参阅 [AAPS 界面说明](#aaps-screens-bg-warning-sign)

(update30-failure-message-data-from-different-pump)=
## 错误提示：来自其他泵的数据

   ![错误提示：来自其他泵的数据](../images/Screen_DifferentPump.png)

解决方法：进入[配置构建器](#Config-Builder-pump)， 将泵类型切换为“虚拟泵”，重新切换回实际使用的泵类型， 此操作将重置泵状态。
