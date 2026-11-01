(Accessing-logfiles-accessing-logfiles)=

# 讀取日誌檔案

* 將手機連線到電腦，並選擇檔案傳輸模式
* 在 AAPS 資料目錄中找到日誌檔案，路徑為 `Android\data\info.nightscout.androidaps\files`。  
    根儲存資料夾的命名可能會根據手機略有不同。
* 對於 [AAPSClient](#RemoteControl_aapsclient)，位置是 `Android\data\info.nightscout.aapsclient\files`。
* Note: log location has changed in **AAPS 3.3**. 如果需要，請參閱先前版本的文件。

![日誌](../images/aapslog.png)

* The current log is a .log file which can be viewed in a number of ways such as [LogCat](https://developer.android.com/studio/debug/am-logcat.html) within Android Studio, any log viewer Android app, or simply as plain text. 
* 先前的日誌檔案會被壓縮並按日期/時間順序存儲在資料夾中。 
* 如果你在 [Discord](https://discord.gg/4fQUWHZ4Mw) 上分享你的日誌檔案以討論潛在的錯誤，請解壓縮並上傳錯誤發生前的檔案。