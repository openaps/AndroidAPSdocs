(aaps-ci-option2-computer)=

# 選項 2 · 電腦－上傳現有的金鑰儲存庫

```{note}
在**電腦**（Windows / Mac / Linux）上使用[選項 2](BrowserBuildO2.md)（上傳現有的金鑰儲存庫）。
```

## 1. 下載準備檔案

:::{include} BrowserBuildDownloadPrep.md
:::

## 2. 啟動本機伺服器並上傳金鑰儲存庫

電腦上相容的作法（支援 Windows/Mac/Linux）

<!--crowdin: exclude-->
<div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
  <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
    <iframe
      src="https://geo.dailymotion.com/player/x9rdyc6.html?video=x9rdyc6&loop=true&mute=true"
      loading="lazy"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>
</div>

Install Simple Web Server<br/><br/> If you are a Windows or Mac user, you can install it from the Microsoft Store or the Mac App Store. 如果瀏覽器詢問您是否要開啟商店應用程式，請允許。<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_store.png)<br/><br/>

在 Mac 上的範例：

- 取得 → 安裝 → 開啟<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server.png)<br/><br/>

- 按一下 「Get Started」鈕<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step1.png)<br/><br/>

- 點選 New Server<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step2.png)<br/><br/>

- 在文件夾路徑中，選擇包含 aaps-ci-preparation.html 的資料夾，然後按一下「Create Server」鈕。<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step3.png)<br/><br/>

- 看到這個畫面表示伺服器已啟動。<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step4.png)<br/><br/>

- 請勿關閉 Simple Web Server。 Please switch to your browser and open<br/><br/> [http://127.0.0.1:8080/aaps-ci-preparation.html](http://127.0.0.1:8080/aaps-ci-preparation.html)<br/><br/>

- For the subsequent steps, please refer to the video below, starting from 2 minutes 18 seconds.<br/><br/>
  <!--crowdin: exclude-->
  <div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
    <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
      <iframe
        src="https://geo.dailymotion.com/player/x9rdvt0.html?video=x9rdvt0&startTime=138&loop=true&mute=true"
        loading="lazy"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
        frameborder="0"
        allowfullscreen>
      </iframe>
    </div>
  </div>

----

**下一步：[步驟 3 – 授權 Google Drive](BrowserBuildGoogleDrive.md) →**
