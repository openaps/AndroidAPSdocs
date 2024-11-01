# 日常生活 - 幫浦
## 更換注射組件：胰島素儲存罐和套管

以下描述的程序僅適用於有管幫浦，不適用於像 Omnipod、Medtrum Nano、Accu-Chek Solo 等無管幫浦。 此程序有時稱為「組件更換」，完整的組件更換包括胰島素儲存罐和套管，部分更換僅指更換套管。

Physical cartridge/reservoir changes cannot be done via **AAPS** and have to be carried out via the pump directly. These need to be logged in **AAPS** manually, once completed.

### 更換幫浦儲存罐和套管的指南

1)  In **AAPS**, disconnect the pump: Long press “Open Loop”/”Closed Loop” icon on the **AAPS** Home Screen and select ‘Disconnect pump - 1 hour”. 幫浦圖示將變為灰色，表示幫浦已中斷連線。

2)  Physically change the insulin reservoir: physically disconnect your pump from the body, and change the reservoir/cartridge and cannula as per manufacturer's instructions.

3)  Prime/fill the tubing and cannula: this can be done directly on the pump. 請確保消除輸液管中的所有氣泡。

4)  Attach the new cannula to the body. 當套管插入並移除針頭後，已附著的套管會有一個小的空氣間隙，這也需要進行注射。 To announce this in **AAPS** and prime the site: select the PRIME/FILL button in the **AAPS** actions tab and tick “Pump site change” and/or “Insulin Cartridge Change” as appropriate to record the change. 現在按下預設的胰島素套管注射量（通常約為 0.3 U，但請確認此數值是否適合你的套管），然後選擇「確定」。 閱讀摘要訊息，並點選「確定」以確認執行注射。

5)  Reconnect the pump in **AAPS**: Press the grey disconnected pump symbol and select ‘Reconnect pump’ to continue looping.

### 有關胰島素/套管更換的有用資訊

●   Logging a pump site change resets Autosens to 100%. It also resets the corresponding cannula/insulin status lights and ages on the **AAPS** Home screen.

●   You can set/adjust the default prime amount in Preferences > Overview > Fill/Prime standard insulin amounts. 請參閱你的套管包裝內的使用說明書，以了解根據針頭長度和輸液管長度應注射多少單位。

●   Insulin delivered using the prime function is not taken into account by **AAPS** when calculating insulin on board (IOB), and is marked in the **AAPS** treatments menu as “Prime”.

●   Any insulin bolused from the pump during a pump disconnection will also not be taken into account by **AAPS**. If you happen to bolus directly from the pump while **AAPS** is disconnected, once you reconnect the pump you can announce this insulin (without bolusing it) under the “insulin” tab (see link to below ”to announce delivered insulin without actually bolusing” for more details).

### 套管、注射部位、輸液管和/或幫浦問題

If you are confident that you haven’t received any insulin for a period of time, despite **AAPS** recording that you have, and you know exactly when the issue started (_e.g._ you remove the cannula and see that the cannula was kinked during the insertion process) you can correct this in **AAPS**, while being aware that the insulin may in fact have been delivered but may be slow to act for some reason.

```{admonition} Caution - Risk of Hypoglycemia
:class: danger
只有在極端謹慎的情況下，才從 **AAPS** 中刪除胰島素輸送紀錄，以防實際已輸送了胰島素，並在接下來的 24 小時內密切監測血糖。
```

To remove boluses and SMBs which you know have not been delivered, open the Treatments tab and conservatively delete the logged bolus information from > carbs and bolus starting from the point the incident happened. This will correct the “insulin on board” (IOB) value which is key for **AAPS**’ calculations, if you now return to the homescreen you will see that the IOB has now reduced. Be aware that you cannot delete basal insulin which **AAPS** calculates to have been delivered, so that will still be taken into account by **AAPS**.

In less obvious cases of insulin delivery problems  _e.g._ leakages, occlusions or tunneling where either you are not sure when the issue started, or think some of the insulin was delivered, you need to be careful. 你可以透過「聞」到胰島素、看到潮濕的粘膠、血糖值過高或收到警報來偵測這些問題。 由於你永遠無法知道有多少胰島素進入你的皮膚（可能在一段時間後開始發揮作用），因此很難確定需要從目前「活性胰島素」（IOB）數值中扣除多少胰島素。 一種策略是解決胰島素輸送問題後暫停循環 5 小時（或你的胰島素作用時間），然後恢復循環。 這將確保你在重新開始循環時，IOB 是正確的。

## 中斷幫浦連線來進行洗澡或活動

If you take your pump off for showering, bathing, swimming, contact sports or other activities you must let **AAPS** know that no insulin is being delivered, to keep the IOB correct. The pump can be disconnected using the Loop Status icon on the **AAPS** Home Screen.

由於幫浦中斷連線期間你無法獲得任何胰島素，應每兩小時重新連線一次，以補上缺失的基礎胰島素。 You can do this by connecting, bolusing the missing basal amounts (_e.g._ of the last two hours) before disconnecting again. 這將有助於避免嚴重缺乏胰島素，導致糖尿病酮酸中毒（DKA）。 If it is inconvenient to reconnect the pump during activity (cannula site is covered by wearing a wetsuit _etc._), consider a pen injection instead. This manual injection can be logged in **AAPS**, and doesn’t have to be logged at the time of injection (just make a note of the time of injection) since you can announce the insulin and backdate the time the insulin was actually given when you reconnect the pump.

## 如何紀錄已輸送的胰島素但實際上不進行注射

To announce insulin delivered from the pump either while **AAPS** was disconnected, or from pen injections to **AAPS**: select the “insulin” tab, enter the amount in units and select “do not bolus, record only”. 當你選擇此選項時，會出現一個「時間偏移」標籤。 You can ignore this if the injection was given recently, but if the bolus was given some time ago, you can add a minus sign in front of the time (_e.g._ - 30 min) to record the actual time of the bolus. **AAPS** will then take into account the duration of insulin action and calculate the remaining insulin still in the system accordingly.

If you are using **AAPS** as a careiver, you can remotely disconnect (and reconnect) the pump very easily by [SMS command](../RemoteFeatures/SMSCommands.md) using commands such as “pump disconnect 120” and “pump connect 120”. 遠端斷線的持續時間範圍為 1 - 120 分鐘（此範例為 120 分鐘）。 This is very useful if the **AAPS** handset is inconvenient for you to access, buried in a pump belt on a kid who is running off towards the swimming complex, or being closely guarded (or in use) by a teenager.

## 活動後重新連線幫浦

After a long disconnection (1 - 2 hours) it is fairly common for **AAPS** to calculate that you now have negative IOB. 當你重新連線幫浦時，根據偏好設定/目前血糖值/計劃的食物或後續活動，你可以選擇：

a) Just reconnect the pump in **AAPS** (grey-to-green, for closed loop) and leave it up to **AAPS** to start to deliver insulin again

_or_

b) 如果你希望更加積極（例如，你即將發生高血糖），你可以到計算機並用0碳水化合物注射，會立即計算出缺少的胰島素來進行注射。


你比較喜歡哪種策略是很看個人的選擇，最好的方法就是自己多試幾次，找到最適合的。    
