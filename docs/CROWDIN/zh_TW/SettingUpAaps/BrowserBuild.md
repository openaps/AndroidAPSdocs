# 瀏覽器建置

使用 GitHub Actions 建置 AAPS。

**最低支援 AAPS 版本為 3.3.2.1。**

## 自行建置，而不是下載

**AAPS 應用程式（apk檔案）因醫療設備相關法規而無法下載。 自行建置應用程式以供個人使用是合法的，但你不得將副本提供給他人！**

詳細資訊請參閱 [FAQ 頁面](../UsefulLinks/FAQ.md)。

(Building-APK-without-a-computer)=

## 建置 AAPS 的裝置和軟體規格

你需要一個可在 Android 或 iOS 上運作的瀏覽器

你還需要一個 Google 帳號，以便將應用程式保存在你的 Google 雲端硬碟中。

```{note}
本 wiki 假設你使用 Android 手機和 Chrome 瀏覽器進行所有操作。  
你會需要在不同的頁籤之間切換，所以在開始之前，你可以先關閉其它頁籤，避免在切換時找不到頁面。
```

(github-fork)=

## 1. AAPS 個人分支

你需要儲存你的個人 Android Java 金鑰和 Google 雲端硬碟資訊於 GitHub 中的 Secrets（稍後會說明如何操作）。

由於這無法在 AndroidAPS 的公開倉庫中完成，你需要製作自己的原始碼副本（稱為分支）。

### GitHub 帳號

如果你尚未擁有帳號，你需要[創建一個 GitHub 帳號](https://github.com/signup)。  
你可以使用電子郵件註冊，也可以透過 Google 註冊。 遵循註冊和驗證過程。

當你擁有帳號後，請[登入 GitHub](https://github.com/login)。

### 分支 AndroidAPS

按照[這個連結](https://github.com/nightscout/AndroidAPS)打開官方 AndroidAPS 倉庫。

點選分支圖示。 這將在你的帳號內創建一個副本。

![fork_aaps](../images/Building-the-App/CI/ForkAAPS.png)

向下滾動至下一個螢幕並點選**建立分支**。

![fork_aaps_confirm](../images/Building-the-App/CI/ForkAAPS2.png)

*注意：如果你想要建置開發版本或自訂版本，你可以**取消選擇**「僅複製主分支」。*

![fork_aaps_main](../images/Building-the-App/CI/ForkAAPS3.png)

GitHub 現在顯示你個人的 AndroidAPS 副本。 請保持這個瀏覽器頁籤開啟。

![forked_aaps](../images/Building-the-App/CI/ForkAAPS4.png)

(aaps-ci-preparation)=

## 2. 準備步驟

- 如果你是從 Android 裝置建置，請先從 Google Play 商店安裝[File Manager Plus](https://play.google.com/store/apps/details?id=com.alphainventor.filemanager)。
- 從這裡下載準備檔案：
<!--crowdin:disable-->
```{eval-rst}
.. raw:: html

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../_static/CI/aaps-ci-preparation.html" download>aaps-ci-preparation.html</a>
```
<br>
<br>
<br>
<!--crowdin:enable-->

AndroidAPS 建置需要私有金鑰，這些金鑰儲存於 Java 金鑰庫（JKS）：

- 如果這是你第一次建立 AAPS（或你沒有 Android Studio 的 JKS），請參考 [AAPS-CI 選項 1 – 產生 JKS](aaps-ci-option1) 來完成設定。
- 如果你想使用自己的 JKS（你在先前的 AAPS 建置中使用的那個 JKS），並且你知道它的密碼和別名（key0），請選擇 [AAPS-CI 選項 2 – 上傳現有的 JKS](aaps-ci-option2)。

```{warning}
使用 **選項 1** 建立 AAPS 將無法更新已安裝的 AAPS：你需要卸載它，重新安裝後，從你的手機恢復設定，並從 Nightscout 讀取資料。
```

AAPS 應用程式在建立後會保存在你的 Google 雲端硬碟中：

- 同時執行 Google 雲端硬碟 [授權](aaps-ci-google-drive-auth) 以允許將建置保存到那裡。

(aaps-ci-option1)=
### AAPS-CI 選項 1 – 生成 JKS
 - 適合首次使用者、沒有 JKS 的使用者或忘記密碼或別名的使用者。
- 以下是使用多個平台的範例。

(aaps-ci-option1-android)=
 - 與 Android 相容（最簡單，建議使用這個方法）
```{eval-rst}
.. raw:: html

    <!--crowdin: exclude-->
    <div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
      <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
        <iframe
          src="https://www.youtube.com/embed/t1VlnCpm-A4"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0"
          allowfullscreen>
        </iframe>
      </div>
    </div>
```

(aaps-ci-ios-ipad)=
 - iOS 上相容的作法（以 iPad 為例）
```{eval-rst}
.. raw:: html

    <!--crowdin: exclude-->
    <div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
      <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
        <iframe
          src="https://www.youtube.com/embed/pA-z1ODrSps"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0"
          allowfullscreen>
        </iframe>
      </div>
    </div>
```

(aaps-ci-option1-computer)=
- 使用電腦（支援 Windows/Mac/Linux）

  打開網頁 https://simplewebserver.org/download.html

  安裝 Simple HTTP Server 如果您是 Windows/Mac 使用者，可以從應用商店安裝。 點擊連結後，系統會詢問您是否允許打開它。 請選擇打開連結。 ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_store.png)

  在 Mac 上的範例：

  - 取得 → 安裝 → 開啟 ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server.png)

  - 按一下 「新服務」鈕 ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step1.png)

  - 按一下「創建服務」鈕 ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step2.png)

  - 在文件夾路徑中，選擇包含 aaps-ci-preparation.html 的資料夾，然後按一下「創建服務」鈕。 ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step3.png)

  - 看到這個畫面表示伺服器已啟動。 ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step4.png)

  - 請勿關閉 Simple HTTP Server。 請切換到您的瀏覽器並打開 [http://127.0.0.1:8080/aaps-ci-preparation.html](http://127.0.0.1:8080/aaps-ci-preparation.html)

  - 後續步驟請參考下方影片，從 1 分 37 秒開始。

```{eval-rst}
.. raw:: html

    <!--crowdin: exclude-->
    <div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
      <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
        <iframe
          src="https://www.youtube.com/embed/t1VlnCpm-A4?start=97"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0"
          allowfullscreen>
        </iframe>
      </div>
    </div>
```

- 如影片所示，請將他複製到對應的欄位中。

![aaps_ci_pr_ci](../images/Building-the-App/CI/aaps_ci_option1.png)

(aaps-ci-option2)=
### AAPS-CI 選項 2 – 上傳現有 JKS
 - 適合已經擁有 JKS 並且知道 JKS 密碼和別名的用戶。
 - 以下是使用多個平台的範例。

(aaps-ci-option2-android)=
 - 與 Android 相容（最簡單，建議使用這個方法）
```{eval-rst}
.. raw:: html

    <!--crowdin: exclude-->
    <div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
      <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
        <iframe
          src="https://www.youtube.com/embed/L5L3XtnszMQ"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0"
          allowfullscreen>
        </iframe>
      </div>
    </div>
```

(aaps-ci-option2-computer)=
- 使用電腦（支援 Windows/Mac/Linux）

  打開網頁 https://simplewebserver.org/download.html

  安裝 Simple HTTP Server 如果您是 Windows/Mac 使用者，可以從應用商店安裝。 點擊連結後，系統會詢問您是否允許打開它。 請選擇打開連結。 ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_store.png)

  在 Mac 上的範例：

  - 取得 → 安裝 → 開啟 ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server.png)

  - 按一下 「新服務」鈕 ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step1.png)

  - 按一下「創建服務」鈕 ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step2.png)

  - 在文件夾路徑中，選擇包含 aaps-ci-preparation.html 的資料夾，然後按一下「創建服務」鈕。 ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step3.png)

  - 看到這個畫面表示伺服器已啟動。 ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step4.png)

  - 請勿關閉 Simple HTTP Server。 請切換到您的瀏覽器並打開 [http://127.0.0.1:8080/aaps-ci-preparation.html](http://127.0.0.1:8080/aaps-ci-preparation.html)

  - 後續步驟請參考下方影片，從 2 分 18 秒開始。

```{eval-rst}
.. raw:: html

    <!--crowdin: exclude-->
    <div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
      <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
        <iframe
          src="https://www.youtube.com/embed/L5L3XtnszMQ?start=138"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0"
          allowfullscreen>
        </iframe>
      </div>
    </div>
```

- 如影片所示，請將他複製到對應的欄位中。

![aaps_ci_option2](../images/Building-the-App/CI/aaps_ci_option2.png)

- 而 KEYSTORE_PASSWORD、KEY_ALIAS 和 KEY_PASSWORD 欄位，請在 GitHub 中輸入你的實際密碼和別名。

![aaps_ci_option2_2](../images/Building-the-App/CI/aaps_ci_option2_2.png)

![aaps_ci_option2_3](../images/Building-the-App/CI/aaps_ci_option2_3.png)

![aaps_ci_option2_4](../images/Building-the-App/CI/aaps_ci_option2_4.png)

(aaps-ci-google-drive-auth)=
### AAPS-CI Google 雲端硬碟授權
- 點選開始授權，啟動 Google 授權頁面，並在授權後將獲得的TOKEN設定在 GitHub 中。

![aaps_ci_gdrive_auth](../images/Building-the-App/CI/aaps_ci_gdrive_auth.png)

```{warning}
Google 雲端硬碟授權中的「自訂」欄位，適合熟悉Google Oauth2的人，並且想要使用自已的ClientID時使用。 僅供你參考。
```

(github-build-apk)=
## AAPS-CI GitHub Actions 以建置 AAPS APK
 - 適合一般使用者。
```{eval-rst}
.. raw:: html

    <!--crowdin: exclude-->
    <div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
      <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
        <iframe
          src="https://www.youtube.com/embed/amfEBwpTtQI"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0"
          allowfullscreen>
        </iframe>
      </div>
    </div>
```
  - 在 GitHub 中，前往 Actions，選擇 AAPS-CI，然後點擊運行工作流以開始建置 APK。

*注意： Android 和 Android Wear 應用程式將自動建置。*

  ![aaps_ci_github_build_apk](../images/Building-the-App/CI/aaps_ci_github_build_apk.png)

  - variant：
    - 請參考 [變體](variant)

<!-- If you want to test the items in a pull request has been moved to dev page /AdvancedOptions/DevBranch.md -->

(aaps-ci-troubleshooting)=
## AAPS-CI 問題排除

(aaps-ci-preparation)=
### aaps-ci-preparation 網頁
  - 當你使用「檔案管理器」打開 aaps-ci-preparation.html 時，它會在你的手機上啟動一個臨時本地伺服器來顯示網頁並接收 Google Refresh token。
  - 如果你看到以下螢幕，這表示你已經一段時間未進行操作，檔案管理器已經關閉本地伺服器。
  - 請使用「檔案管理器」應用程式重新打開 aaps-ci-preparation.html，並完成剩餘步驟。

  ![aaps_ci_html_not_found](../images/Building-the-App/CI/aaps_ci_html_not_found.png)

(aaps-ci-disable-software)=
### 停用可能會影響 OAUTH2 授權的軟體
  - 在嘗試獲取 OAUTH2 金鑰之前，請停用電話上的任何 VPN 或安全應用程式（防火牆、反惡意軟體等）。

(aaps-ci-actions-permission)=
### 檢查 GitHub Actions 權限設定
  - 請確保 GitHub Actions 政策設置為「Allow all actions and reusable workflows」（Settings → Actions → General）。

  ![aaps_ci_actions_permission](../images/Building-the-App/CI/aaps-ci-actions-permission.jpg)

--------

(github-cherry-pick)=

## 如果你想將特定的提交添加到你的分支，請使用 cherry-pick。

  ![aaps_cherry-pick_ci](../images/Building-the-App/CI/aaps_cherry_pick_ci.png)

  - Use workflow from Branch：請輸入你想要 cherry-pick 到的分支名稱。
  - Upstream Repository：請輸入你想要 cherry-pick 的庫名稱。
  - Commit SHA：請輸入你想要 cherry-pick 的提交 SHA（像 git commit hash）。
  - Select Build Variant： [變體](variant)