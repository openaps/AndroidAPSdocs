# 建置 Wear AAPS 應用程式

適用於 Wear OS 智慧型手錶的 **AAPS** 應用程式（**Wear apk**，`aaps-wear-….apk`）是與 **AAPS** 手機應用程式分開的安裝檔。兩者都需要安裝：手機應用程式會執行循環，手錶應用程式則會顯示資料，並可傳送指令給手機應用程式。手錶應用程式需從手機安裝，請參閱[在 Wear OS 手錶上設定 AAPS](WearOsSmartwatch.md)。

兩個應用程式必須符合以下條件才能搭配使用：

- 手機和手錶上的 **AAPS 版本相同**。
- 兩個應用程式使用**相同的金鑰儲存庫**簽署。

最簡單的確保方式，是在同一次建置中**同時**建置兩個應用程式。使用瀏覽器建置時，系統會自動為您完成這項工作：每次建置都會一併產生手機 APK 和 Wear APK。使用 Android Studio 或命令列時，請在建置手機 APK 後，接著進行第二個步驟來建置 Wear APK。

```{note}
手機上已在使用 **AAPS**，但沒有同一次建置產生的 Wear APK 嗎？請使用相同的金鑰儲存庫重新建置兩個應用程式，並重新安裝手機應用程式。如果 Wear APK 是幾個月後才建置，或使用不同版本的 Android Studio 建置，就不太可能與手機應用程式相容。
```

## 支援的 Wear OS 版本

**AAPS** 可在搭載 **Wear OS 3.0、3.2 或 3.5**（Android 11、API 等級 30）**或更新版本**（Wear OS 4、5 和 6）的手錶上執行。不支援搭載 Wear OS 2 的手錶。

```{warning}
AAPS 錶盤適用於 API 等級 30 至 33 的 Wear OS 智慧型手錶（Wear OS 3.0、3.2、3.5 和 4）。<br>
較新的 Wear OS 版本會逐步造成 AAPS 錶盤無法正常運作 — 請參閱 [Wear OS 錶盤變更](#wearos-watchface-changes) 和 [Wear OS 5 的限制](#BuildingAapsWearOs-WearOS5)。
```

(building-aaps-wear-os-method)=

## 依照建置方式取得 Wear APK

請依照您用來[建置 AAPS](../SettingUpAaps/BuildingAaps.md)的方式，參閱對應的章節。

(building-aaps-wear-os-browser)=

### 瀏覽器建置（建議）

**不需要額外操作。** 每次瀏覽器建置都會使用相同的來源和金鑰庫，產生兩個檔案：

- `aaps-….apk`：手機應用程式。
- `aaps-wear-….apk`：手錶應用程式。

Wear APK 會依照您選擇的建置[變體](#browserbuild-variant)產生：`fullRelease` 會產生 **AAPS Wear** 應用程式，`aapsclientRelease` 會產生 **AAPSClient Wear** 應用程式，`pumpcontrolRelease` 則會產生 **PumpControl Wear** 應用程式。每個 Wear 應用程式只能與相對應的手機應用程式通訊。

Wear APK 的下載位置：

- **AAPS Builder**: on the build page, scroll down to **Artifacts** and download `aaps-wear-….apk` next to the phone app, as shown in [Step 5 – Install the app on your phone](#aaps-builder-step5). 如果您要透過手機安裝手錶應用程式（使用 Wear Installer 2 或 Easy Fire Tools），請將檔案下載至執行 **AAPS** 的手機；如果您使用 ADB，則請下載至電腦。

  ![Artifacts，包含手機與手錶的應用程式](../images/Building-the-App/CI/AapsBuilder52_Artifacts.png)

- **使用 Google Drive 的 Fork**：開啟您的 Google Drive，進入 `AAPS` 資料夾，再開啟您所建置版本的資料夾。資料夾中會有手機 APK 和 Wear APK，請參閱[步驟 4 – 建置 APK](#github-build-apk)。

  ![Google 雲端硬碟位置](../images/update/CI/GitHubActions5.png)

請在備份中將 Wear APK 與手機 APK 放在一起。使用 **AAPS Builder** 時，檔案只會在建置頁面上保留 14 天。

下一步：在手錶上安裝 Wear APK，請參閱[在 Wear OS 手錶上設定 AAPS](WearOsSmartwatch.md)。

(building-aaps-wear-os-android-studio)=

### Android Studio

Wear APK 和手機 APK 一樣建置，但需另外進行一次簽章建置。請在手機 APK 建置完成後立即進行，並使用相同版本的 Android Studio 和相同的金鑰庫。

- 請依照[Android Studio 建置](../SettingUpAaps/ComputerBuild.md)的指示操作。
- 當你在「建置 AAPS 簽章 APK」中到達[模組選擇](#Building-APK-wearapk)時，請確保選擇**`AndroidAPS.wear`**。

![Wear 模組](../images/Building-the-App/wear_build1.png)

選擇"**fullRelease**"以產生**AAPS** Wear APK 檔案。

![Wear 模組](../images/Building-the-App/wear_build2.png)

如果你願意，你也可以從下拉選單中選擇建置 **“pumpcontrolRelease”**，這將只允許你遠端控制幫浦，但不包括循環功能。

下一步：在手錶上安裝 Wear APK，請參閱[在 Wear OS 手錶上設定 AAPS](WearOsSmartwatch.md)。

(building-aaps-wear-os-troubleshooting)=

#### Android Studio 建置疑難排解

建置完整的 **AAPS** 應用程式時（事實上，建置任何已簽章的應用程式時也一樣），Android Studio 都會在同一個資料夾中產生一個 .json 檔案。這會在你嘗試建置下一個已簽章的應用程式（如 **AAPS** wear 應用程式）時，導致[未提交的變更](#troubleshooting_androidstudio-uncommitted-changes)錯誤。解決此問題的最快方法是導航到建置完整 AAPS 應用程式的資料夾，你的資料夾可能類似於：

`C:\Users\你的名稱\AndroidStudioProjects\AndroidAPS\app\aapsclient\release。`

將不需要的 .json 檔案刪除或移出該資料夾。然後再次嘗試建置 **AAPS** wear 應用程式。如果這不起作用，請參閱[更詳細的問題排除指南](../GettingHelp/TroubleshootingAndroidStudio.md)，以幫助你識別導致問題的具體檔案，也可能是你的密鑰庫檔案。

(building-aaps-wear-os-cli)=

### 命令列

請依照[命令列建置指示](../SettingUpAaps/CLIBuild.md)操作，並使用相同的金鑰庫，針對 `wear` 模組重複編譯和簽章步驟：

```sh
./gradlew :wear:assembleFullRelease
```

未簽章的 Wear APK 會存放在 `wear/build/outputs/apk/full/release/` 資料夾中。請使用 `apksigner`，按照與手機 APK 完全相同的方式簽章，然後安裝至手錶。請參閱[在 Wear OS 手錶上設定 AAPS](WearOsSmartwatch.md)。
