(troubleshooting_androidstudio-troubleshooting-android-studio)=

# 問題排除 Android Studio

```{contents} List of common issues
:depth: 2
:local: true
```

(troubleshooting_androidstudio-lost-keystore)=
## 遺失的密鑰庫
如果您遺失金鑰庫或其密碼，使用新金鑰庫簽署的 APK 無法更新目前安裝的 **AAPS**：您必須先解除安裝，再重新安裝。請參閱[使用新金鑰庫重新安裝 AAPS](#reinstall-aaps)。

## Gradle 同步失敗
Gradle 同步可能因多種原因失敗。當你收到“gradle 同步失敗”的訊息時，請打開 Android Studio 底部的“建置”選項卡 (1)，檢查顯示的錯誤訊息 (2)。

![Gradle 失敗](../images/studioTroubleshooting/07_GradleSyncFailed2.png)

```{contents} Likely reasons for gradle sync failures are:
:depth: 1
:local: true
```

*重要*: 在你遵循針對具體問題的指示後，你需要再次觸發[gradle 同步](#gradle-resync)。

(troubleshooting_androidstudio-uncommitted-changes)=
### 未提交的更改

如果你收到像這樣的失敗訊息：

![Gradle 未提交的變更](../images/studioTroubleshooting/02_GradleUncommitedChanges.png)

```
建立檔案 'C:\Data\50-Android\AndroidAPS\app\build.gradle.kts' 行: 243

存在未提交的變更。請重新複製來源，如wiki中所述，並且不要允許 Gradle 更新。
```

#### 步驟 1 - 檢查 git 安裝
  * 在 Android Studio 底部開啟終端機分頁（1），然後複製下方文字並貼上或輸入到終端機（2）。
    ```
    git --version
    ```

    ![Gradle Git 版本](../images/studioTroubleshooting/03_GitVersion.png)

    注意：Git 和版本之間有一個空格和兩個連字符！

  * 你必須收到一條訊息，告訴你安裝了什麼 Git 版本，如上圖所示。在這種情況下，請轉到 [第 2 步](#troubleshooting-android-studio-check-for-uncommitted-changes)。

  * In case you get a message saying
    ```
    Git: command not found
    ```
    你的 Git 安裝不正確。

  * [檢查 git 安裝](#BuildingAaps-steps-for-installing-git)

  * 如果您使用 Windows，且剛安裝 Git，請重新啟動電腦，讓 Git 在安裝後能夠全域使用。

  * If Git is installed, you have restarted (if on Windows), and Git still cannot be found:

  * 在計算機上搜索文件“git.exe”。

    請記下它存儲在哪個目錄。

  * Go to the Environment variables in Windows, select the variable "PATH" and click edit. 請添加你找到 Git 安裝的目錄。

  * 儲存並關閉。

  * 重新啟動 Android Studio。

(問題排除-檢查 Android Studio 是否有未提交的更改)=
#### 步驟 2：檢查未提交的更改。

  * 在 Android Studio 中，打開左側的“提交”選項卡 (1)。 ![提交標籤：未提交的更改](../images/studioTroubleshooting/04_CommitTabWithChanges.png)
  * 您可能會看到「變更」（舊版 Android Studio 中稱為「預設變更集」）（2）或「未版本控制的檔案」（3）：

    * 如果是「變更」，可能是您更新了「Gradle」，或不小心變更了部分檔案內容。

    * 在「變更」上按一下滑鼠右鍵，然後選取「復原…」 (1)

      ![提交標籤：回滾變更](../images/studioTroubleshooting/05_CommitTabRollback.png)

    * 文件將再次從 Git 服務器中獲取。如果在提交標籤中沒有其他更改，請轉到[第3步](#gradle-resync)。

  * 如果你能看到“未版本控制的文件”，則可能不小心將文件儲存在源代碼目錄中。也許它們是重要的文件：例如你的金鑰存儲文件，應移動到其他地方。如果你不知道那些文件是什麼，且你沒有自己創建它們，你可以刪除它們。

    * 使用你電腦上的常規文件管理器將該文件移動或剪切並粘貼到安全的地方。

    * 返回 Android Studio，單擊提交選項卡內的重新整理按鈕 (4)，以確保該文件不再儲存在 **AAPS** 目錄中。

      如果提交選項卡中沒有其他更改，請轉到 [步驟 3](#gradle-resync)。


#### 步驟 3：再次同步 Gradle

請按照[Gradle Resync](#gradle-resync)上的指示進行操作。

### Git Pull Failed - Please tell me who you are

如果你看到此訊息，Git 需要你進行身份確認。

![Git 身份確認](../images/studioTroubleshooting/164_Git_Identify.png)

打開命令列視窗，依序輸入以下兩條指令：

```
git config --global user.name "你的名稱"
git config --global user.email 你的email@xxx.com
```

您的名稱需要用引號括起來。

![Git 身份確認修復](../images/studioTroubleshooting/164_Git_Identify2.png)

(troubleshooting_androidstudio-android-gradle-plugin-requires-java-11-to-run)=

(incompatible-gradle-jvm)=
### 不相容的 Gradle JVM

![不相容的 Gradle JVM](../images/studioTroubleshooting/160_InkompatibelAndroidGradleJVM.png)

```
你的建置目前配置為使用不相容的 Java 21.0.3 和 Gradle 8.2。無法同步專案。

我們建議升級到 Gradle 版本 8.9。

最低相容的 Gradle 版本為 8.5。

最大相容的 Gradle JVM 版本為 19。
```

或:

```
原因: 錯誤: 無效的來源釋出: 21
```

If you experience the above error message, you need to download a correct JVM version before you can try to rebuild:

1.  檢查[需求表](#Building-APK-recommended-specification-of-computer-for-building-apk-file)以確定你需要的**AAPS**版本的 JVM 版本，並做好記錄。

2. 通過單擊 Android Studio 右側的“大象圖示” (1) 打開 Gradle 視圖，並打開設定 (2)，然後選擇 **Gradle 設定** (3)：

![開啟Gradle設定](../images/studioTroubleshooting/161_GradleSettings.png)

3.  在 **Gradle JDK** 欄位中，檢查是否選擇了適當的版本（1）如果沒有，請點選該欄位，並查看它是否已經在列表中可用。下面的範例顯示 JVM 21 標示為“jbr-21”。如果你找到了，請選擇它，就完成了。如果沒有這個選項，請選取 **下載 JDK**（2）。


![選擇下載JDK](../images/studioTroubleshooting/162_DownloadJDK.png)

4. 在版本 (1) 中，選擇你的 **AAPS** 版本所需的 JDK（當你檢查需求表時做的註記）。在廠商（2）中選擇任何廠商。位置 (3)：請勿更改。按一下 **下載**（4）。

![選擇JDK 17](../images/studioTroubleshooting/163_JDKSelection.png)

5.  用**OK**關閉**設定**對話框。
6. 你現在需要重新啟動Gradle同步。請按照[Gradle Resync](#gradle-resync)上的指示進行操作。

(incompatible-version-of-android-gradle-plugin)=
### 不相容的 Android Gradle 外掛版本

  如果你遇到以下錯誤訊息

`專案使用了不相容版本 (AGP x.x.x) 的 Android Gradle 外掛。最新支援的版本為 AGP x.x.x`

  ![不相容的 Android Gradle 外掛版本](../images/studioTroubleshooting/15_InkompatibelAndroidGradlePlugin.png)

  你使用的是過期版本的 Android Studio。在選單中，轉到幫助 > 檢查更新，並安裝找到的所有 Android Studio 及其外掛的更新。

(troubleshooting_androidstudio-could-not-resolve-no-cached-version)=
### 無法解析/無緩存版本

  你可能會收到此錯誤訊息：

![無法解析... 無快取版本](../images/studioTroubleshooting/08_NoCachedVersion.png)

  * 在右側，打開 Gradle 標籤 (1)。

    確保顯示為 (2) 的按鈕*未選中*。

    ![Gradle 離線模式](../images/studioTroubleshooting/10_GradleOfflineMode.png)

  * 現在你需要觸發[Gradle 重新同步](#gradle-resync)

(troubleshooting_androidstudio-unable-to-start-daemon-process)=
### 無法啟動守護程序進程

  如果你看到如下所示的錯誤訊息，你可能使用的是 Windows 10 32 位系統。這在 Android Studio 3.5.1 及以上版本中不受支援，很遺憾 **AAPS** 開發者無法對此做出任何改變！

  網路上有關於如何判斷您是否擁有 32 位或 64 位作業系統的資訊 - 例如 [這個](https://support.microsoft.com/en-us/windows/32-bit-and-64-bit-windows-frequently-asked-questions-c6ca9541-8dce-4d48-0415-94a3faa2e13d)。

  ![無法啟動守護進程的截圖](../images/AndroidStudioWin10_32bitError.png)

(gradle-resync)=
### Gradle 重新同步

  如果仍看到 Gradle 同步失敗的訊息，請選取 **再試一次**（1）連結。 ![Gradle 同步失敗模式](../images/studioTroubleshooting/01_GradleSyncFailed.png)


  如果你不再看到這條訊息，你仍然可以手動觸發：

  * 在 Android Studio 的右側邊框打開 Gradle 標籤 (1)。

    ![Gradle 重新載入](../images/studioTroubleshooting/06_GradleResyncManually.png)

  * 右鍵單擊 AAPS (2)

  * 點擊 "重新載入 Gradle 項目" (3)

## 成功生成簽章 APK，但生成了 0 個建置變體

產生簽署 APK 時，您可能會看到通知顯示產生成功，但產生的「建置變體數量」為 0：

![生成了 0 個建置變體的 APK](../images/studioTroubleshooting/14_BuildWith0Variants.png)

這是一個錯誤警告。檢查你選擇的“目的地資料夾”以進行生成（步驟 [生成簽名 APK](#Building-APK-generate-signed-apk)），你會在那裡找到生成的 apk！


## 應用程序是用編譯器/Kotlin 警告建立的

如果你的建置成功完成，但出現編譯器或 Kotlin 警告（由黃色或藍色感嘆號標識），那麼你可以忽略這些警告。

 ![Gradle 完成但有警告](../images/studioTroubleshooting/13_BuildWithWarnings.png)

你的 apk 已成功建立，可以轉移到你的手機上！


## AAPS 未接收 CGM 資料

* 如果你正在使用修補過的 Dexcom G6 應用程式：此應用程式已過時。請改用[BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)應用程序。

* 如果您使用 xDrip，請依照 [xDrip 設定頁面](#xdrip-identify-receiver)的說明識別接收器。


## Apk 未安裝

![未安裝手機應用程式](../images/Update_AppNotInstalled.png)

* 請確保你已將 "app-full-release.apk" 文件傳輸到你的手機。
* 這通常表示新 APK 使用的金鑰庫與目前安裝的 **AAPS** 不同。如果您仍保有先前的金鑰庫，請選取該金鑰庫，然後重新建置。否則，請參閱[使用新金鑰庫重新安裝 AAPS](#reinstall-aaps)。
* 如果手機上顯示 "應用程序未安裝"，請按照以下步驟操作：

1. [匯出設定](../Maintenance/ExportImportSettings.md)（在已安裝於你手機上的 AAPS 版本中）
2. 在你的手機上卸載 **AAPS**。
3. 開啟飛航模式並關閉藍牙。
4. 安裝新版本（"app-full-release.apk"）
5. [匯入設置](../Maintenance/ExportImportSettings.md)
6. 重新開啟藍牙，並關閉飛航模式。

## Apk 已安裝但版本舊

If you built the app successfully, transferred it to your phone and installed it successfully but the version number stays the same then you might have forgotten to [update your local copy](#Update-to-new-version-update-your-local-copy)

## 上述方法均無效

如果以上技巧均未幫助你，你可能考慮從頭開始構建 apk：

1. [匯出設定](../Maintenance/ExportImportSettings.md)（在已安裝於你手機上的 AAPS 版本中）

2. 準備好你的密鑰密碼和密鑰庫密碼。

    或者你可以使用新的密鑰庫。

3. 按此 [從頭構建 apk](#Building-APK-download-AAPS-code) 的說明。

4. 當你成功構建 apk 後，請刪除手機上現有的 apk，將新的 apk 轉移到手機上並安裝。
5. [再次匯入設定](../Maintenance/ExportImportSettings.md)以恢復你的目標和設定。
6. 你應該檢查你的電池優化選項並再次停用他們。

## 最壞的情況

如果上述方法無法解決你的構建問題，你可能希望嘗試完全卸載 Android Studio，然後從頭開始構建。一些用戶發現這可以解決他們的構建問題。在刪除 Android Studio 時，請勿刪除 Android 使用者設定，並**確保卸載與 Android Studio 相關的所有文件。** 如果你不完全移除 Android Studio 及所有隱藏文件，卸載可能會導致新的問題，而不是解決你當前存在的問題。可以在網際網路上找到完整卸載指南，例如

[https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10](https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10)。

按照[此處](#Building-APK-install-android-studio)的說明從頭安裝 Android Studio。
