# Building the Wear AAPS app

適用於智慧型手錶的 **AAPS** Wear OS 應用程式（“Wear OS apk”）已從 Android 手機的“完整” **AAPS** 版本中分離出來。 因此，你需要生成第二個安裝檔案或 apk，將 **AAPS** wear 安裝到手錶上（這是透過從手機側載到手錶上完成的）。 強烈建議在第一次建置手機的完整 **AAPS** apk 後立即生成 **AAPS** Wear apk 檔案。 Not only is this very quick to do if you are [building **AAPS** for the first time](../SettingUpAaps/BuildingAaps.md), but it will avoid any potential compatibility issues when you try to set up the watch-phone communication. 如果手錶上的 **AAPS** Wear apk 與手機上的 **AAPS** apk 是在不同版本的 Android Studio 中建置的，或如果距離最初的 **AAPS** 建置已經過了幾個月，則可能不相容。

如果你已經在手機上使用 **AAPS**，但當時沒有同時建置手機和手錶的 **AAPS** apk，為了確保成功，最好同時重新建置這兩個 apk 檔案。 Build the AAPS phone and watch apks at the same time, using the same **keystore file**.

## Supported Wear OS versions

AAPS requires at least Wear OS API level 28 (Android 9).

```{warning}
AAPS Watchfaces are available for Wear OS smartwatches with API level 28 to 33.
Wear OS 5 changes locked the watchfaces: only complications can be used.
```

## 建置 **AAPS** Wear apk

The build process for the Wear apk is similar to that for the "full" phone apk.

- Follow the instructions for [Building AAPS](../SettingUpAaps/BuildingAaps.md).
- When you reach [module selection](#Building-APK-wearapk) in "Build the AAPS signed apk", make sure to select **`AndroidAPS.wear`**.

![Wear module](../images/Building-the-App/wear_build1.png)

Select "**fullRelease**" to generate the **AAPS** Wear apk file.

![Wear module](../images/Building-the-App/wear_build2.png)

如果你願意，你也可以從下拉選單中選擇建置 **“pumpcontrolRelease”**，這將只允許你遠端控制幫浦，但不包括循環功能。

## 問題排除

在建置 3.2 版完整 **AAPS** 應用程式（實際上是任何已簽章的應用程式）過程中，Android Studio 會在同一個資料夾中生成一個 .json 檔案。 這會在你嘗試建置下一個已簽章的應用程式（如 **AAPS** wear 應用程式）時，導致[未提交的變更](#troubleshooting_androidstudio-uncommitted-changes)錯誤。 解決此問題的最快方法是導航到建置完整 AAPS 應用程式的資料夾，你的資料夾可能類似於：

`C:\Users\Your Name\AndroidStudioProjects\AndroidAPS\app\aapsclient\release.`

將不需要的 .json 檔案刪除或移出該資料夾。 然後再次嘗試建置 **AAPS** wear 應用程式。 If that doesn't work, the more detailed [troubleshooting guide](../GettingHelp/TroubleshootingAndroidStudio.md) will help you to identify the specific file causing the issue, which could also be your keystore file. 