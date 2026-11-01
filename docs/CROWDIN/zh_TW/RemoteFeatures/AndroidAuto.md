# Android Auto

**AAPS** 能夠將你的目前狀態以訊息形式直接發送到車內的 Android Auto。

## 需求

**AAPS** uses a feature of Android Auto which allows messages from apps on the mobile to be routed to the display of the car audio system.

這意味著：

* Android 必須允許 **AAPS** 顯示通知，並且
* 由於**AAPS** 是非官方應用，需允許 Android Auto 使用「未知來源」。

![AAPS CGM 資料在 Android Auto 上的顯示](../images/android_auto_01.png)

(androidauto-check-that-aaps-can-show-notifications)=

## 確認 AAPS 可以顯示通知

**AAPS** 一律會顯示狀態通知，其中包含目前的血糖、IOB 和活性碳水化合物。這就是 Android Auto 在車上顯示的通知。 **AAPS** 中沒有需要開啟的設定，但 Android 必須允許 **AAPS** 顯示通知。

在手機上開啟 **設定** > **應用程式** > **AAPS** > **通知**，並確認已開啟 **所有 AAPS 通知**。

![已開啟所有 AAPS 通知](../images/android_auto_notifications_all.png)

向下捲動並確認已開啟 **持續通知**：這是狀態通知所使用的通知管道。

![已開啟持續通知管道](../images/android_auto_ongoing_channel.png)

現在請確認手機上看得到 **AAPS** 狀態通知，再走到車旁！

![手機上的 AAPS 通知](../images/android_auto_04.png)

(androidauto-allow-the-use-of-unknown-sources-with-android-auto)=

## 允許 Android Auto 使用「未知來源」。

由於**AAPS**不是官方的 Android Auto 應用，因此需要在 Android Auto 中啟用「未知來源」的通知。這是透過使用開發者模式來完成的，我們將在此為你展示。

Go to your car and connect your mobile with the car's audio system.

你現在應該會看到類似於此螢幕的畫面。

![啟用開發者模式](../images/android_auto_05.png)

點擊**設置**圖示以開始配置。

向下滾動到頁面底部並選擇**在手機上查看更多**。

![啟用開發者模式](../images/android_auto_06.png)

現在我們將在手機上啟用開發者模式。

第一個畫面看起來是這樣的。向下滾動到頁面底部。

![啟用開發者模式](../images/android_auto_07.png)

你會看到列出的 Android Auto 版本。連續點擊 Android Auto 版本 10 次。透過此隱藏的組合操作，你現在已啟用了開發者模式。

![啟用開發者模式](../images/android_auto_08.png)

在彈出的對話框「允許開發設置？」中確認你希望啟用開發者模式。

![啟用開發者模式](../images/android_auto_09.png)

在**開發者設置**中啟用「未知來源」。

![啟用開發者模式](../images/android_auto_10.png)

如果你願意，現在可以退出開發者模式。點擊右上角的三點選單來執行此操作。

## 在車上顯示通知

在車內的 Android Auto 中，點擊右下角的**數字圖示**。

![數字圖示 - 車內 Android Auto](../images/android_auto_11.png)

你的 CGM 資料將顯示如下：

![AAPS CGM 資料在 Android Auto 上的顯示](../images/android_auto_01.png)

(android-auto-troubleshooting)=

## 問題排除：

* 如果你沒有看到通知，請檢查你是否[允許 AAPS 顯示通知](#androidauto-check-that-aaps-can-show-notifications)，並檢查[Android Auto 是否有權限存取通知](#androidauto-allow-the-use-of-unknown-sources-with-android-auto)。