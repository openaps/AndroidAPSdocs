# Android Auto

**AAPS** 能夠將您的當前狀態以訊息形式直接發送到車內的 Android Auto。

```{admonition} 版本和最後更改訊息 :class: dropdown 最後編輯日期：2023/07/05

文檔使用的版本：

* AAPS 3.2.0-dev-i
* Android Auto：9.3.631434-release ```

## 需求

**AAPS** 使用了 Android Auto 的一個功能，允許來自手機應用的訊息傳輸到車載音響顯示。

這意味著：

* 您必須配置**AAPS**以使用系統通知來進行警報和通知，並且
* 由於**AAPS** 是非官方應用，需允許 Android Auto 使用「未知來源」。

![AAPS CGM 資料在 Android Auto 上的顯示](../images/android_auto_01.png)

(Android-auto-AAPS-settings-for-android-auto)

## 在**AAPS**中使用系統通知進行警報和通知

打開**AAPS**主畫面右上角的三點選單並選擇**偏好設定**

![使用系統通知來進行警報和通知](../images/android_auto_02.png)

在**本地警報**中啟用**使用系統通知來進行警報和通知**

![使用系統通知來進行警報和通知](../images/android_auto_03.png)

現在請確認在前往您的車輛之前，您能夠在手機上接收到來自**AAPS**的通知！

![使用系統通知來進行警報和通知](../images/android_auto_04.png)

(Android-auto-AAPS-settings-in-android-auto-app-on-your-phone)

## 允許 Android Auto 使用「未知來源」。

由於**AAPS**不是官方的 Android Auto 應用，因此需要在 Android Auto 中啟用「未知來源」的通知。 這是透過使用開發者模式來完成的，我們將在此為您展示。

前往您的車輛並將手機連線到車載音響系統。

您現在應該會看到類似於此螢幕的畫面。

![啟用開發者模式](../images/android_auto_05.png)

點擊**設置**圖示以開始配置。

向下滾動到頁面底部並選擇**在手機上查看更多**。

![啟用開發者模式](../images/android_auto_06.png)

現在我們將在手機上啟用開發者模式。

第一個畫面看起來是這樣的。 向下滾動到頁面底部。

![啟用開發者模式](../images/android_auto_07.png)

您會看到列出的 Android Auto 版本。 連續點擊 Android Auto 版本 10 次。 透過此隱藏的組合操作，您現在已啟用了開發者模式。

![啟用開發者模式](../images/android_auto_08.png)

在彈出的對話框「允許開發設置？」中確認您希望啟用開發者模式。

![啟用開發者模式](../images/android_auto_09.png)

在**開發者設置**中啟用「未知來源」。

![啟用開發者模式](../images/android_auto_10.png)

如果您願意，現在可以退出開發者模式。 點擊右上角的三點選單來執行此操作。

## 在車上顯示通知

在車內的 Android Auto 中，點擊右下角的**數字圖示**。

![數字圖示 - 車內 Android Auto](../images/android_auto_11.png)

您的 CGM 資料將顯示如下：

![AAPS CGM 資料在 Android Auto 上的顯示](../images/android_auto_01.png)

## 故障排除：

* 如果您看不到通知，請檢查是否已在 Android 中[允許 AAPS 顯示通知](Android-auto-AAPS-settings-for-android-auto)，以及 Android Auto 是否[擁有通知的存取權限](Android-auto-AAPS-settings-in-android-auto-app-on-your-phone)。