(Troubleshooting-NSClient-troubleshooting-nsclient)=

# NSClient 問題排除

NSClient 依賴於與 Nightscout 的穩定連線。不穩定的連線會導致同步錯誤和高資料使用量。

如果沒有人在 Nightscout 上追蹤你，你可以選擇暫停 NSClient 以節省電池，或設置 NSClient 僅在連線 Wi-Fi 和/或充電時才連線。

* 如何偵測不穩定的連線？

開啟 NSClient 畫面（**組態** > **通訊** > **NSClientV3** > **開啟外掛**），並留意**狀態**和記錄檔。啟用 WebSocket 後，狀態應維持為「已連線」，而且記錄檔中幾乎不會出現重新連線訊息。如果看到很多重新連線訊息，則表示有問題。

* 重新啟動

首先，請重新啟動 Nightscout，接著重新啟動手機，確認問題是否持續發生。

如果你的 Nightscout 是託管在 Heroku 上，可以登入 Heroku，點擊你的 Nightscout 應用名稱，點擊「更多」選單，然後選擇「重新啟動所有 dynos」。

對於其他主機，請參閱你的主機指南文件。

* 手機問題

Android 可能會讓你的手機進入睡眠模式。檢查你的手機電源選項中是否為 AAPS 設定了例外，允許其始終在背景運作。

在網路信號強的地方再次檢查 NSClient。

嘗試使用另一部手機。

* Nightscout

如果你的網站託管在 Azure 上，許多人發現轉移到 Heroku 後，連線問題有所改善。

Azure 連線問題的解決方法是在應用程式設定中將 HTTP 協議設為2.0，並將 Websockets 設為開啟。

* Nightscout 沒有血糖讀取值

如果 **AAPS** 能正常連線至 Nightscout，但血糖顯示為 N/A，請在 [NSClientV3 設定](#Preferences-nsclient)中開啟**同步**，並啟用**從 NS 接收 CGM 資料**。啟用用戶端控制時，此選項會隱藏（[強化模式](#client-master-control-hardened-mode)）；在這種情況下，請確認已在**組態** → **血糖來源**中選取 **NSClient 血糖**。

* 如果仍然出現錯誤…

檢查 MongoDB 中資料庫的大小（或透過 Nightscout 中的資料庫大小外掛）。如果你使用的是 MongoDB 的免費層，496MB 表示已滿，需要清理。 [Follow these Nightscout instructions for checking the size of your database and clearing out data](https://nightscout.github.io/troubleshoot/troubleshoot/#database-full).

在清理資料庫中的資料之前，如果你還沒有設置，應該考慮將你的 AAPS 資料捐贈給 Open Humans 項目（用於研究）。指示在[OpenHumans 設定頁面](../SupportingAaps/OpenHumans.md)上。