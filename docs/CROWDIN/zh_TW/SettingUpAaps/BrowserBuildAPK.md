(github-build-apk)=

# 瀏覽器建置－步驟 4：建置 APK

```{note}
這是[瀏覽器建置](BrowserBuild.md)的**步驟 4**。請先完成[步驟 3－授權 Google Drive](BrowserBuildGoogleDrive.md)。
```

## AAPS-CI GitHub Actions 以建置 AAPS APK
 - 適合一般使用者。

```{tab-set}

:::{tab-item} Wiki
### 執行工作流程以建置已簽署的 APK

1. 在你的 GitHub 複製版 AndroidAPS 中，選擇操作。
2. 擴展所有工作流程。
3. 選取 AAPS-CI

![Actions AAPS-CI](../images/update/CI/GitHubActions1.png)

4. 向下滾動並點擊運行工作流程。

![執行工作流程](../images/update/CI/GitHubActions2.png)

5. 將 **Use workflow from** 保持在 master 分支。在 **Select AAPS Version** 中，選取您要建置的 **AAPS** 版本（通常是最新版本）。選取[變體](#browserbuild-variant)（fullRelease），然後點選 Run workflow。



![執行工作流程](../images/update/CI/GitHubActions3.png)

6. 你將會看到工作流程運行成功請求的訊息。重新整理你的瀏覽器頁面，你將能夠監控建置進度。當操作完成時，AAPS CI 的行動將顯示綠色勾選標記。你已成功建置 AndroidAPS 的更新版本。

![監控工作流程](../images/update/CI/GitHubActions4.png)

### 安裝 AAPS APK

1. 開啟 Google Drive
2. 瀏覽到 AAPS，選擇新版本資料夾，你會找到手機版和 Android Wear 版本。

![Google Drive 位置](../images/update/CI/GitHubActions5.png)
:::  

:::{tab-item} 影片
<div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
  <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
    <iframe
      src="https://geo.dailymotion.com/player/x9rdwms.html?video=x9rdwms&loop=true&mute=true"
      loading="lazy"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>
</div>
:::  

```

## 建構版本選擇

**僅 AAPS 版本 3.3.2.1 及以上將使用瀏覽器方法繼續建構。**

點選**Select AAPS Version**，並選取要建置的版本。最新版本會顯示在清單最上方。

![Select AAPS Version 清單](../images/Building-the-App/CI/BrowserBuildVariant2.png)

(browserbuild-variant)=

## 建構變數選擇

*注意： Android 和 Android Wear 應用程式將自動建置。*

  - 選擇您需要的變種：
    - fullRelease: 用於正常的幫浦使用，具有完整功能。
    - [aapsclientRelease、aapsclient2Release、aapsclient3Release](#RemoteControl_aapsclient)：供照護者使用（需要 [Nightscout](../SettingUpAaps/Nightscout.md)）。 `aapsclient3Release` 會建置 **AAPSClient3**，適用於 **AAPS** 4.0 版（請參閱 [關於 AAPSClient、AAPSClient2 和 AAPSClient3](#remotecontrol-aapsclient-versions)）。
    - pumpcontrolRelease：替換您的幫浦應用程式/控制器

![](../images/Building-the-App/CI/BrowserBuildVariant3.png)

結尾為「Debug」的版本表示 APK 會以偵錯模式建置，方便開發人員排除問題。

<!-- If you want to test the items in a pull request has been moved to dev page /AdvancedOptions/DevBranch.md -->

----

建置成功後，APK 會儲存到您的 Google 雲端硬碟。接著請參閱[轉移並安裝 AAPS](TransferringAndInstallingAaps.md)。

```{note}
自 2026 年 9 月起，Google 的 Android 開發者驗證可能會依你的國家／地區，阻擋透過點擊檔案安裝 APK。該頁面說明了免費的替代作法。
```

如果建置失敗，請先[查看建置記錄，找出問題所在](#aaps-ci-read-the-logs)，再參閱[瀏覽器建置疑難排解](../GettingHelp/BrowserBuildTroubleshooting.md)。若要在建置中加入特定的 commit，請參閱[挑選並套用 commit](#github-cherry-pick)。
