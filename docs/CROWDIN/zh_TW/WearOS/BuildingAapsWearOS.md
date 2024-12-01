# 建置 Wear AAPS 應用程式

適用於智慧型手錶的 **AAPS** Wear OS 應用程式（“Wear OS apk”）已從 Android 手機的“完整” **AAPS** 版本中分離出來。 因此，你需要生成第二個安裝檔案或 apk，將 **AAPS** wear 安裝到手錶上（這是透過從手機側載到手錶上完成的）。 強烈建議在第一次建置手機的完整 **AAPS** apk 後立即生成 **AAPS** Wear apk 檔案。 如果您[第一次建置 **AAPS**](../SettingUpAaps/BuildingAaps.md)，這樣做不僅非常快速，還可以避免設置手錶與手機通訊時出現任何相容性問題。 如果手錶上的 **AAPS** Wear apk 與手機上的 **AAPS** apk 是在不同版本的 Android Studio 中建置的，或如果距離最初的 **AAPS** 建置已經過了幾個月，則可能不相容。

如果你已經在手機上使用 **AAPS**，但當時沒有同時建置手機和手錶的 **AAPS** apk，為了確保成功，最好同時重新建置這兩個 apk 檔案。 同時建置 AAPS 手機和手錶的 APK，使用相同的 **keystore 檔案**。

## 支援的 Wear OS 版本

AAPS 至少需要 Wear OS API 等級 28（Android 9）。

```{warning}
AAPS 錶面適用於 API 等級 28 到 33 的 Wear OS 智慧型手錶。<br>
Wear OS 5 有[限制](BuildingAapsWearOs-WearOS5)。
```

## 建置 **AAPS** Wear apk

Wear APK 的建置過程與「完整」手機 APK 的建置類似。

- 請按照[建置 AAPS](../SettingUpAaps/BuildingAaps.md)的指示進行。
- 當您在「建置 AAPS 簽章 APK」中到達[模組選擇](#Building-APK-wearapk)時，請確保選擇**`AndroidAPS.wear`**。

![Wear 模組](../images/Building-the-App/wear_build1.png)

選擇"**fullRelease**"以產生**AAPS** Wear APK 檔案。

![Wear 模組](../images/Building-the-App/wear_build2.png)

如果你願意，你也可以從下拉選單中選擇建置 **“pumpcontrolRelease”**，這將只允許你遠端控制幫浦，但不包括循環功能。

## 問題排除

在建置 3.2 版完整 **AAPS** 應用程式（實際上是任何已簽章的應用程式）過程中，Android Studio 會在同一個資料夾中生成一個 .json 檔案。 這會在你嘗試建置下一個已簽章的應用程式（如 **AAPS** wear 應用程式）時，導致[未提交的變更](#troubleshooting_androidstudio-uncommitted-changes)錯誤。 解決此問題的最快方法是導航到建置完整 AAPS 應用程式的資料夾，你的資料夾可能類似於：

`C:\Users\您的名稱\AndroidStudioProjects\AndroidAPS\app\aapsclient\release。`

將不需要的 .json 檔案刪除或移出該資料夾。 然後再次嘗試建置 **AAPS** wear 應用程式。 如果這不起作用，請參閱[更詳細的問題排除指南](../GettingHelp/TroubleshootingAndroidStudio.md)，以幫助你識別導致問題的具體檔案，也可能是你的密鑰庫檔案。 