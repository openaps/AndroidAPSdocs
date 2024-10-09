(Accessing-logfiles-accessing-logfiles)=

# 讀取日誌檔案

* 將手機連線到電腦，並選擇檔案傳輸模式
* 在 AAPS 資料目錄中找到日誌檔案
    
    * (2.8.2) 資料夾位置類似於 ***內部儲存(1) / Android / data / info.nightscout.androidaps / files***
    * (3.0.0) 資料夾位置類似於 ***內部儲存(1) / AAPS / logs***
    * 根目錄資料夾的名稱 (1) 可能會根據手機稍有不同。

![日誌](../images/aapslog.png)

* 目前的日誌檔案是一個 .log 檔案，可以透過多種方式查看，例如 Android Studio 中的 [LogCat](https://developer.android.com/studio/debug/am-logcat.html)、任何日誌查看器 Android 應用程式，或僅作為純文字查看。 
* 先前的日誌檔案會被壓縮並按日期/時間順序存儲在資料夾中。 
* 如果你在 [Discord](https://discord.gg/4fQUWHZ4Mw) 上分享你的日誌檔案以討論潛在的錯誤，請解壓縮並上傳錯誤發生前的檔案。