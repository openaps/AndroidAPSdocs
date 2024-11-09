# 遠端控制 AAPS
有四種非常有效的工具可以遠端管理 **AAPS**：

1) [簡訊指令](#1-sms-commands) (關注者的手機可以是 Android 或 iOS)， 2) [AAPSClient](#2-aapsclient) (關注者的手機是 Android) 3) [Nightscout](#3-nightscout) (Android、iOS 或其他計算機/設備)。  
4) [智慧手錶](#4-smartwatches) (Android)

前三個工具主要適合照顧者/父母使用，但智慧型手錶對於照顧者/父母以及糖尿病患者自己都非常有用。

![圖像](../images/remote_control_and_following/AAPS_overview_remote_control_01.png)

#### 為兒童設置 AAPS 遠端控制的考量

1.  請考慮如何讓孩子的手機保持在幫浦和 CGM 的有效範圍內。 對於年齡較小，還無法對手機負責的兒童來說，這可能是一個挑戰。 確保你選擇的 AAPS 手機具有良好的藍牙連線範圍，並找到讓孩子舒適攜帶幫浦和手機的方法——如果他們年齡/體型夠大，可以隨身攜帶手機——例如，[SPI Belt](https://spibelt.com/collections/kids-belts) 可能會有所幫助。
2.  在開始遠端治療和監控之前，請花時間與孩子一起設置並測試指令。 許多父母選擇在學校假期或週末進行這些測試。
3.  確保其他照顧者/老師了解你孩子的治療計畫，並確定遠端控制如何與現有計畫協作或增強其效果。
4.  許多父母發現，與兒童看護人員保持單獨的聯繫方式是有幫助的，例如準備一個便宜的小型教師“追蹤”手機。
5.  不同年齡兒童學校護理計畫的示例可以在 **AAPS** Facebook 頁面的["文件區"](https://www.facebook.com/groups/AndroidAPSUsers/files/)找到。
6.  當遠端控制無法工作時，你的應急計劃是什麼（_例如_網絡問題或藍牙連線丟失）？  始終考慮當你突然無法發送新指令時，**AAPS** 會發生什麼情況。 **AAPS** 會使用目前設定覆蓋幫浦的基礎率、ISF 和 ICR。 如果切換到更強的胰島素設定，請只使用臨時設定切換（_例如_設置特定的持續時間），以防止遠端連線中斷。 當時間到期時，幫浦將恢復到原始設定。

## 1) SMS 指令

請參見專門的 [SMS 命令](../RemoteFeatures/SMSCommands.md) 頁面。

(aapsclient)=
## 2) AAPSClient

_請注意，**NSClient** 已被 **AAPSClient** 取代，適用於 AAPS 3.2 及更高版本，請查閱版本發佈說明以了解更多資訊。_

對於 AAPS 3.2 以下版本，如果你有照護者/父母的 Android 手機，你可以直接下載並安裝 [**AAPSClient**](https://github.com/nightscout/AndroidAPS/releases/) apk。 **AAPSClient** 的外觀與 **AAPS** 本身非常相似，提供了照護者可以遠端執行 **AAPS** 指令的標籤頁：

![NSCLIENT_ 2024-05-17 134512](https://github.com/openaps/AndroidAPSdocs/assets/137224335/6c66a27c-21d7-4c43-ac66-001669c0634f)


這裡有兩個可以[下載](https://github.com/nightscout/AndroidAPS/releases/)的 apk 版本，分別是 **AAPSClient** 和 **AAPSClient2**，他們有著細微但重要的差異，詳見下方說明。

**AAPSClient** 可以安裝在一部或多部追蹤者手機上（例如父母一的追蹤者手機和父母二的追蹤者手機），以便兩位照護者都能夠獲得權限並遠端控制患者的 **AAPS** 手機。

如果某位照護者需要第二個副本來遠端控制另一位患者，且該患者有 Nightscout 帳號，他們應該安裝 **AAPSClient2** 以外加 **AAPSClient**。 **AAPSClient2** 允許單一照護者在同一台追蹤者手機上安裝 **AAPSClient** apk 兩次，以便同時遠端控制兩位不同的患者。

要下載 **AAPSClient**，請前往 [此處](https://github.com/nightscout/AndroidAPS/releases/)，然後點擊資產**“app-AAPSClient-release_x.x.x.x”**（他可能比下面的截圖顯示版本更新）：

![圖像](../images/remote_control_and_following/AAPSClient_download_02.png)

然後前往電腦上的 _下載_ 資料夾。 在 Windows 上，-下載- 將顯示右邊的選單欄：

![圖像](../images/remote_control_and_following/AAPSClient_download_folder_03.png)

下載完成後，點擊 _顯示於資料夾中_ 來定位該檔案。

現在，**AAPSClient** apk 可以透過以下方式進行安裝：

透過 USB 傳輸線傳輸到追蹤者手機；或拖放至 Google 雲端硬碟資料夾，然後透過點擊“app-AAPSClient-release”檔案將其安裝到追蹤者手機。

### 同步設置 - AAPSClient 和 AAPS 配置（適用於 3.2.0.0 版本以上）

當追蹤者手機上安裝了 __AAPSClient__ apk，用戶必須確保在 "組態建置工具" 中的“偏好設定”已正確設置並與 __AAPS__ 的 Nightscout 15 對齊（請參閱發佈說明 [此處](../Maintenance/UpdateToNewVersion)）。 以下範例提供了使用 Nightscout 15 的 NSClient 和 NSClientV3 的同步指南，但 __AAPS__ 也有其他選項（例如 xDrip+）。

在“組態建置工具”的“同步設置”中，用戶可以選擇 __AAPS__ 和追蹤者手機的同步選項：

- 選項 1：NSClient（也稱為“v1”）- 同步用戶的資料與 Nightscout；或

- 選項 2：NSClientV3（也稱為“v3”）- 透過 v3 API 同步用戶的資料與 Nightscout。

![AAPS1_截圖 2024-05-17 133502](https://github.com/openaps/AndroidAPSdocs/assets/137224335/4bdfed7e-3b2f-4fe8-b6db-6fcf0e5c7d98)

用戶必須確保 __AAPS__ 和 AAPS Client 手機都透過執行 v1 或 v3 的選項同步：

選項 1：兩部手機均使用 v1：

- 輸入你的 Nightscout 網址

- 輸入你的 API 密碼

選項 2：兩部手機均使用 v3：

- 在 NSClientV3 標籤下輸入你的 Nightscout 網址

- 在“Config Build”標籤下輸入你的 NS 查看權杖。 請遵循[此處](https://nightscout.github.io/nightscout/security/#create-a-token)的說明

如果選擇 Websockets（可選），請確保 __AAPS__ 和 __AAPSClient__ 的手機上均已啟用或停用此功能。 啟用 Websockets 於 __AAPS__ 而未於 __AAPSClient__ 啟用（反之亦然），將會導致 __AAPS__ 無法正常運作。 啟用 Websockets 將加快與 Nightscout 的同步速度，但可能會導致手機耗電量增加。



![WB2_截圖 2024-05-17 140548](https://github.com/openaps/AndroidAPSdocs/assets/137224335/8d9a7dc5-b3ea-4bf3-9286-313f329b1966)


用戶應確保 __AAPSClient__ 和 __AAPS__ 均在“NSClient”標籤下顯示“已連線”，並且當在 __AAPSClient__ 中選擇後，“設定檔切換”或“臨時目標”可以在 __AAPS__ 中正確啟動。

用戶還應確保在 __AAPSClient__ 和 __AAPS__ 中的“治療”中紀錄碳水化合物，否則這可能表明用戶的設置存在問題。

### 問題排除“NS 查看權杖”配置問題

具體的“NS 查看權杖”配置可能會根據你的 Nightscout 提供商是否為付費託管網站而有所不同。

如果你在使用付費託管的 Nightscout 網站時，發現 **AAPS** v3 無法接受“NS 查看權杖”，建議你首先與 Nightscout 提供商聯繫，以解決“NS 查看權杖”問題。 否則，請聯繫 **AAPS** 小組，但在此之前，請務必仔細檢查是否正確遵循了說明 [此處](https://nightscout.github.io/nightscout/security/#create-a-token)。

### AAPSClient 的功能包括：

![Sara 的 AAPSClient 表格](../images/remote-control-23.png)

**AAPSClient** 允許照護者透過移動網絡或網際網路，遠端進行許多 **AAPS** 中允許的調整（不包括胰島素注射）。 **AAPSClient** 的主要優點是照護者/父母能夠以快速、便捷的方式遠端控制 **AAPS**。 __AAPSClient__ _可能_ 比輸入 SMS 指令快得多，尤其是當執行需要身份驗證的指令時。 透過 **AAPSClient** 輸入的指令將上傳到 Nightscout。

只有當你的同步運作良好時，才建議使用 **AAPSClient** 進行遠端控制（_即_ 不會出現不必要的資料更改，如自動修改臨時目標、臨時基礎率等），詳見[版本 2.8.1.1 發佈說明](#important-hints-2-8-1-1)了解更多細節。

### AAPSClient 與智慧型手錶的選項

智慧型手錶可以是一個非常有用的工具，幫助管理兒童的 **AAPS**。 有幾種不同的配置方式可供選擇。 如果**AAPSClient** 安裝在父母的手機上，則可以下載並安裝[**AAPSClient WearOS** 應用程式](https://github.com/nightscout/AndroidAPS/releases/)在與父母手機連線的相容智慧型手錶上。 這將顯示目前的血糖值、循環狀態，並允許輸入碳水化合物、設定臨時目標和更換設定檔。 無法從 WearOS 應用程式進行注射。 你可以在[這裡](#4-smartwatches)閱讀更多關於智慧型手錶的資訊。

(nightscout)=
## 3) Nightscout

Nightscout 不僅是雲端中的伺服器，還有一個專用的 **Nightscout** 應用程式，可以直接從 iPhone 的 App Store 下載。 如果你有 Android 追蹤者手機，並沒有專用的 Nightscout 應用程式，建議使用 [**AAPSClient**](#2-aapsclient)，或者如果你只想要追蹤而不發送治療資料，你可以從 Play 商店下載並安裝 [Nightwatch](https://play.google.com/store/apps/details?id=se.cornixit.nightwatch) 應用程式。

當你在 iPhone 上安裝了 **Nightscout** 應用程式，打開應用並按照設置提示進行操作，輸入你的 Nightscout 地址（見下方左側）。 此地址的格式可能取決於你的 Nightscout 是如何託管的。 (_例如_ http://youraddresshere.herokuapp.com)。 然後輸入你的 Nightscout API 密碼（見下方右側）。 如果未提示你輸入 API 密碼，請點擊應用程式頂部的鎖形圖示輸入密碼：

![圖像](../images/remote-control-24.png)

更多設置資訊可直接從 [Nightscout](https://nightscout.github.io/nightscout/discover/) 獲得

當你首次登入時，將會顯示一個非常簡單的介面（見下方左側）。 透過點擊右上角的“漢堡”選單並向下滾動來自定義顯示選項：

![圖像](../images/remote-control-25.png)

向下滾動到“設置”。 你可能會想將 血糖 顯示的“比例”設置為“線性”，因為預設值是對數比例，並在“渲染基礎率”下選擇“預設”以顯示幫浦的基礎率。 繼續向下滾動直到找到“顯示外掛”。 你需要確保已勾選“照護入口”，還可以選擇其他有用的指標（最常用的包括：IOB、照護入口、幫浦、套管時間、胰島素時間、基礎率設定和 OpenAPS）。

![圖像](../images/remote-control-26.png)

![圖像](../images/remote-control-27.png)

重要的是，你現在需要點擊底部的“儲存”，以使這些更改生效。

按下“儲存”後，應用程式將返回你的 Nightscout 主畫面，顯示如下：

![圖像](../images/remote-control-28.png)

更詳細地查看 Nightscout 應用程式左上角的選單：

![Nightscout 頂部欄](../images/remote-control-29.png)

此畫面上的灰色標籤包含大量關於 **AAPS** 系統狀態的資訊（點擊標籤可顯示更多資訊）：

![圖像](../images/remote-control-30.png)

![圖像](../images/remote-control-31.png)

### 透過 Nightscout 應用程式向 AAPS 發送治療資料

要設置從 **Nightscout** 應用程式向 **AAPS** 發送治療資料，請在主要 AAPS 手機中進入 **AAPSClient** 標籤。 打開右側的省略號選單，然後打開 AAPSClient 偏好設定 - 同步，並在此選單中選擇相關選項。 將其設置為接收不同的指令（例如臨時目標等）並同步設定檔。 如果似乎沒有同步，請返回 AAPSClient 標籤並選擇“完全同步”，等待幾分鐘。

你在 iPhone 上的 Nightscout 應用程式擁有與你在電腦上使用的 Nightscout 相同的功能。 他允許你向 **AAPS** 發送許多指令，但不允許你發送胰島素注射指令。

### 取消負胰島素以避免重複低血糖

儘管你無法實際注射胰島素，但你可以透過 Nightscout 宣佈胰島素作為“修正注射”，儘管他實際上並未注射。 由於 AAPS 會考慮到這個假設的胰島素注射，因此宣佈胰島素實際上可以使 AAPS _不那麼激進_，這在取消負胰島素和防止低血糖時非常有用，特別是當你的設定檔過於強烈（例如，由於之前的運動）。 你可能會希望親自查看這些設置，並在 **AAPS** 手機附近進行檢查，以防你的 **Nightscout** 設置有所不同。

![24-10-23，取消負胰島素 NS](../images/0af1dbe4-8aca-466b-816f-8e63758208ca.png)


一些最有用的 **Nightscout** 指令在下表中描述。

#### Nightscout 指令表

![圖像](../images/remote-control-33.png)

閱讀更多關於 **Nightscout** 的選項[此處](https://nightscout.github.io/)

### 獲取 Nightscout 應用程式最佳使用效果的小提示

1). 如果你被困在某個頁面上，並希望再次查看主畫面，只需點擊“重新整理”（底部中間），這將帶你返回 **Nightscout** 主頁，顯示 血糖 圖表。

要查看手機上目前運作的設定檔，請按圖表上方的各個圖示。 按下“基礎率”可以查看更多資訊（目前的碳水化合物比率、敏感性和時區等），“OpenAPS”顯示有關設定檔和目前目標的資訊。 你還可以監控手機電池百分比和幫浦電池百分比。 BWP 提供關於算法在考慮 IOB 和 COB 情況下預測未來結果的資訊。

#### 選單中的其他圖示：鉛筆（編輯）圖示是什麼意思？

你可以（技術上）使用編輯鉛筆來移動或刪除過去 48 小時內的注射或修正治療。

更多相關資訊請參閱 [這裡](https://nightscout.github.io/nightscout/discover/#edit-mode-edit)

雖然這可能對刪除已宣佈（但未實際注射）的碳水化合物有幫助，但在實際操作中，這在 **AAPS** 中並不運作良好，因此我們建議直接透過 **AAPS** 應用程式進行此類更改。

(smartwatches)=
## 4) 智慧型手錶

智慧型手錶越來越多地與 **AAPS** 結合使用，_無論是_ 對於患有糖尿病的成年人還是兒童的照護者/父母。

### 使用智慧型手錶搭配 **AAPS** 的一般優勢


根據不同的型號，智慧型手錶可以以多種不同的方式與 **AAPS** 結合使用。 他們可以用來完全或部分控制 **AAPS**，或者只是遠端查看血糖值、胰島素剩餘量（IOB）及其他參數。

在很多情況下，將智慧型手錶與 **AAPS** 整合非常有用，包括開車或騎車時，以及進行運動時。 有些人覺得在會議、聚會、餐桌等場合查看手錶比查看手機更加低調。 從安全的角度來看，當移動時，智慧型手錶還能提供幫助，使用戶可以將 **AAPS** 手機存放在看不見的地方（例如包內），但仍可以透過智慧型手錶進行遠端控制。

### 父母/照護者使用 **AAPS** 的具體優勢

對於孩子來說，如果他們的 **AAPS** 手機在附近，照護者可以使用智慧型手錶進行監控或修改，而無需使用 **AAPS** 手機。 例如，當 **AAPS** 手機藏在幫浦腰帶中時，這會很有用。

智慧手錶可以作為[僅關注](../RemoteFeatures/FollowingOnly.md)的選擇，或作為{em x-id="4">額外</em>的手機遠端控制選項。

此外，不同於父母/照護者的追蹤者手機（依賴於移動網絡或 Wi-Fi 連線），藍牙連線的智慧型手錶在偏遠地區（如洞穴、船上或半山腰）也能發揮作用。 如果兩個設備（**AAPS** 手機和智慧型手錶）都連線到相同的 Wi-Fi 網絡，他們也可以使用 Wi-Fi。

### 不同類型的智慧型手錶與 AAPS 的互動方式

許多 **AAPS** 用戶可使用的智慧型手錶選項詳見 [Nightscout 與智慧型手錶](https://nightscout.github.io/nightscout/wearable/#)，強烈建議你先閱讀這些頁面，以便更好地了解所有可能性。

目前有五種主要方式可將智慧型手錶與 **AAPS** 結合使用。 這些方式在下表中顯示： 


![2023年10月29日，更新了 AAPSClient 手錶選項表](../images/bbbe0e84-1a8c-4163-8a0b-dcf91144af14.png)



請注意，此表格編製於 2023 年，並非詳盡無遺，且不斷有新選項添加進來。

### 在購買智慧型手錶之前……

你購買的智慧型手錶具體型號取決於你所需的功能。 你可能會在 [手機頁面](../CompatiblePhones/ListOfTestedPhones.md) 上找到有用的信息，包括一份測試過的手機列表，還包含一些智慧型手錶。

受歡迎的手錶品牌包括三星 Galaxy、Garmin、Fossil、米動手環和 Fitbit。 上表中概述的不同選項將在下方詳細解釋，幫助你決定哪款智慧型手錶適合你的需求。

如果你打算將智慧型手錶與**AAPS** 手機結合使用並遠端操作**AAPS**，你還需要考慮這兩個設備是否相容，尤其是如果你的手機較舊或比較特殊。

一般來說，如果你只想要追蹤血糖資料而不與**AAPS** 進行互動，有更多價格實惠且簡單的手錶可供選擇。

選擇智慧型手錶的最佳方式是搜尋 Discord 或 Facebook**AAPS** 群組中的“手錶”相關帖子。 閱讀其他人的經驗分享，如果舊帖子中未解答你的問題，請發布具體問題。

#### 智慧型手錶選項 1 - 3：什麼是 _Wear OS_？

前三個智慧型手錶選項要求智慧型手錶安裝 **Wear OS**。

**Wear OS** 是運作在部分現代 Android 智慧型手錶上的作業系統。 在 [2018年](https://en.wikipedia.org/wiki/Wear_OS)，Google 將 _Android Wear 1.x_ 更名為 **Wear OS**，版本為 2.x。 因此，如果某款設備標示為“_Android Wear_”而不是 **Wear OS**，這可能表示該設備運作的是較舊版本。 如果智慧型手錶的描述僅指示與 Android 和 iOS 相容，則並不意味著他運作的是 **Wear OS**。 他可能運作的是其他供應商專用的作業系統，這些系統不與 **AAPS** 相容。 要支援安裝和使用任何版本的 **AAPS** 或 **AAPSClient**，智慧型手錶必須運作 **Wear OS**，且最好是 Android 10 或更新版本。 作為指引，截至 2023 年 10 月，**Wear OS** 的最新版本是基於 Android 13 的 4.0 版本。

如果你在 **Wear OS** 手錶上安裝了 **AAPS** wear.apk，你可以選擇一系列不同的自訂 **AAPS** 手錶錶盤。 或者，你可以使用標準的智慧型手機錶盤，並在錶盤上包含稱為“小工具”的小方塊，顯示你的 **AAPS** 資訊。 小工具是在錶盤上顯示的任何額外於時間的功能。 像這樣的小工具需要 Wear OS 2.0 或更新版本才能正常運作。


#### 我的智慧型手錶在遠端控制 AAPS 時可能是什麼樣子？

在手錶上安裝 **AAPS** 後，你將自動可以從這些專用的 **AAPS** 錶盤中選擇你偏好的錶盤。 在大多數手錶上，你只需長按主畫面，直到畫面縮小，然後向右滑動選擇另一個螢幕：

![圖像](../images/67fd75f3-721c-438d-be01-1a8e03532290.png)

#### 如何在日常操作中使用 Wear OS 手錶？

關於錶盤的更多細節，以及日常使用，包括如何製作（並分享）你自定義的錶盤，請參閱[Wear AAPS 在智慧型手錶上的操作](../UsefulLinks/WearOsSmartwatch.md)部分。

### 選項 1) 運作 **AAPS** 的獨立手錶

這聽起來像是一個很有吸引力的選項，對嗎？ 然而，目前只有少數愛好者正在嘗試在獨立手錶上運作 **AAPS**。 能夠與 **AAPS** 和你的 CGM 應用程式一起良好運作的獨立手錶界面目前數量有限。 受歡迎的型號包括 LEMFO LEM 14、15 和 16。 你需要在手錶上載入 **AAPS** 的“完整” apk（通常安裝在智慧型手機上的 apk），而不是 **AAPS** 的“wear” apk。

雖然目前沒有明確的規範告訴你哪款手錶適合獨立使用 **AAPS**，但以下參數會有所幫助：

1)  Android 10 或更新版本。 2)  能夠將錶盤從“方形”模式移除，以使文本更大、更易讀。 3)  非常好的電池續航能力。 4)  良好的藍牙範圍。

大多數在獨立手錶上運作 **AAPS** 的挫折來自於與小螢幕的互動，並且目前 **AAPS** 完整應用程式的界面並非為手錶設計。 由於螢幕大小受限，你可能會更願意使用觸控筆來編輯 **AAPS** 設定，並且某些 **AAPS** 按鈕可能無法在手錶螢幕上顯示。

額外的挑戰包括很難獲得足夠的電池續航能力，並且擁有足夠電池容量的手錶通常體積龐大且厚重。 用戶報告了操作系統和節能設置的問題、在手錶上啟動傳感器的困難、藍牙範圍差（無法與傳感器和幫浦保持穩定連線），以及不確定的防水性能。 下圖中展示了一些例子（圖片來源：Janvier Doyon）。

![圖像](../images/6d787373-bc0c-404d-89aa-54d3127c4a6f.png)

![圖像](../images/5d2feecc-3f10-4767-b143-1a72da2b9bd4.png)

如果你有興趣設置獨立手錶，請閱讀 **AAPS** Facebook 群組中的帖子和評論（好的搜尋詞是“standalone”和“Lemfo”）以及 Discord 獲取更多資訊。

### 選項 2) 在手錶上運作 **AAPS**，以遠端控制手機上的 **AAPS**

類似於使用追蹤者手機搭配 AAPSClient、Nightscout 或 SMS 指令（鏈接到相應部分），智慧型手錶可以用來遠端控制 **AAPS**，並提供完整的設定檔資料。 與使用追蹤者手機的主要區別是，智慧型手錶與 **AAPS** 手機的連線是透過藍牙進行的，並且不需要驗證碼。 順帶一提，使用者報告說，如果智慧型手錶和 **AAPS** 手機透過藍牙連線，並且同時連線到 Wi-Fi 網絡，那麼手錶還可以透過 Wi-Fi 與 **AAPS** 手機互動，提供更長距離的通訊範圍。 這包括在不同位置遠端注射胰島素，例如照護者透過 **AAPS** 手錶為 T1D 孩子（持有 **AAPS** 手機）進行注射，這在孩子上學時特別有用。

因此，遠端控制智慧型手錶在以下情況中特別有用：

a) 當 **AAPSClient**/Nightscout/**SMS** 指令無法使用時；或

b) 使用者希望避免輸入驗證碼（追蹤者手機需要在輸入資料、選擇 TT 或輸入碳水化合物時使用驗證碼）。

智慧型手錶需要運作 **Android wear** 軟體（最好是 10 或更新版本）才能控制 **AAPS**。 請檢查手錶的技術規格，並查看 [手機頁面](../Getting-Started/Phones.md)。 如果不確定，請在 **AAPS** 的 Facebook/Discord 群組中搜尋或詢問。

以下是設置流行型號 Samsung Galaxy Watch 4（40 毫米）的具體操作指南。 Garmin 手錶也是一個受歡迎的選擇，請參閱[這裡](https://apps.garmin.com/en-US/apps/a2eebcac-d18a-4227-a143-cd333cf89b55?fbclid=IwAR0k3w3oes-OHgFdPO-cGCuTSIpqFJejHG-klBTm_rmyEJo6gdArw8Nl4Zc#0)。 如果你有設置其他智慧型手錶的經驗，並且認為這對其他用戶有幫助，請[編輯文件](../SupportingAaps/HowToEditTheDocs.md)，將你的發現分享給更廣泛的 **AAPS** 社群。

#### AAPS Wear apk

適用於智慧型手錶的 **AAPS** Wear OS 應用程式（“Wear OS apk”）已從 Android 手機的“完整” **AAPS** 版本中分離出來。 因此，你需要生成第二個安裝檔案或 apk，將 **AAPS** wear 安裝到手錶上（這是透過從手機側載到手錶上完成的）。 強烈建議在第一次建置手機的完整 **AAPS** apk 後立即生成 **AAPS** Wear apk 檔案。 這不僅在你[首次建置 **AAPS**] 時非常快捷，而且還可以避免在設置手錶與手機的通訊時出現潛在的相容性問題。 如果手錶上的 **AAPS** Wear apk 與手機上的 **AAPS** apk 是在不同版本的 Android Studio 中建置的，或如果距離最初的 **AAPS** 建置已經過了幾個月，則可能不相容。

如果你已經在手機上使用 **AAPS**，但當時沒有同時建置手機和手錶的 **AAPS** apk，為了確保成功，最好同時重新建置這兩個 apk 檔案。 如果你已經安裝了 Android Studio，則可能需要卸載並重新安裝 Android Studio，並按照以下步驟同時建置 **AAPS** 手機和手錶 apk，使用相同的**密鑰庫檔案**。

#### 如何卸載 Android Studio

確保你的密鑰庫檔案已安全存儲在電腦上的其他位置，遠離 Android Studio 資料夾。

完全卸載 Android Studio 需要執行幾個步驟。 如果你使用的是 Windows 機器，這裡有一個[不錯的指南](https://www.geeksforgeeks.org/how-to-completely-uninstall-android-studio-on-windows/)。 在這些指示的最後一步，你還需要手動刪除“StudioProjects”資料夾。

現在重新安裝最新版本的 Android Studio。

#### 建置 **AAPS** Wear apk
簡單來說，Wear apk 的建置過程與手機 apk 的“完整”建置過程非常相似，不同之處在於你需要在 Android Studio 中的下拉選單中選擇“**AndroidAPS.wear**”，並選擇建置變體“**fullRelease**”。 這將生成 **AAPS** Wear apk 檔案。  如果你願意，你也可以從下拉選單中選擇建置 **“pumpcontrolRelease”**，這將只允許你遠端控制幫浦，但不包括循環功能。

以下指南假設你已重新安裝最新版本的 Android Studio（此場景使用的是 Giraffe 2022.3.1）。

![圖像](../images/e8e3b7f3-f82e-425a-968c-cc196434a5f8.png)

要回到這裡：

![圖像](../images/37f4589c-6097-49d4-b0b9-087664914198.png)

繼續按照說明進行操作。

按照不同畫面的提示，直到出現一個下拉選單，提供建置 AAPS 完整 apk 的選項。 在此時，從下拉選單中選擇“Wear”而不是“AndroidAPS.apk”，因為你正在為智慧型手錶建置 apk。


下一步，前往功能區中的“建置”選項

![圖像](../images/b2cccc84-85b6-4ee1-800b-7c6dcb9dd857.png)


前往建置 > 生成已簽章的包/ APK


![圖像](../images/f488fe36-8cb9-4d81-9d94-5f742a1aaaee.png)

選擇 > APK：

![圖像](../images/Installation_Screenshot_39b.PNG)


在模塊中選擇：AndroidAPSwear

![圖像](../images/cceaa832-70e6-4ad5-95ec-a82e2a6add1e.png)

輸入預設位置的密鑰庫檔案。 你的密鑰庫路徑取決於你將密鑰庫存放的位置。 在此場景中，密鑰庫路徑位於：C:\Program Files\Android\Android Studio\jbr\bin


下一個畫面應顯示如下：

![圖像](../images/87ce7943-256e-449e-8439-8f9fd5bef05e.png)


然後選擇“fullRelease”。

請耐心等待 - 建置 **AAPS** Wear apk 大約需要 10-20 分鐘，具體取決於你的網路連線速度。

### 問題排除

在建置 3.2 版完整 **AAPS** 應用程式（實際上是任何已簽章的應用程式）過程中，Android Studio 會在同一個資料夾中生成一個 .json 檔案。 這會在你嘗試建置下一個已簽章的應用程式（如 **AAPS** wear 應用程式）時，導致[未提交的變更](#troubleshooting_androidstudio-uncommitted-changes)錯誤。 解決此問題的最快方法是導航到建置完整 AAPS 應用程式的資料夾，你的資料夾可能類似於：

C:\Users\Your Name\StudioProjects\AndroidAPS\app\aapsclient\release。

將不需要的 .json 檔案刪除或移出該資料夾。 然後再次嘗試建置 **AAPS** wear 應用程式。 如果這不起作用，請參閱[更詳細的問題排除指南](../GettingHelp/TroubleshootingAndroidStudio)，以幫助你識別導致問題的具體檔案，也可能是你的密鑰庫檔案。


#### 如何設置 Samsung Galaxy 4 智慧型手錶與 **AAPS** 搭配使用

本節假設你對智慧型手錶完全陌生，將向你介紹一款流行手錶（**Galaxy Watch 4**）的基本操作，隨後是逐步設置 **AAPS** 在手錶上運作的指南。

_本指南假設你正在設置運作 Wear OS 3 或更低版本的 Samsung Galaxy 手錶。_ 如果你正在設置運作 Wear OS 4/OneUI 5 或更高版本的手錶，你將需要使用新的 ADB 配對過程，這在 Samsung 手機軟體中有解釋，並將在適當時更新到這裡。 這裡有關於 [Galaxy Watch 5](https://www.youtube.com/watch?v=Y5upzOIxwTU) 和 [Galaxy Watch 6](https://www.youtube.com/watch?v=D6bq20KzPW0) 的基本設置指南

##### 智慧型手錶的基本熟悉指南

根據上方影片進行手錶的基本設置後，前往手機上的 Play 商店並下載以下應用程式：“Galaxy Wearable”、“Samsung”和“Easy Fire tools”或“Wear Installer 2”。

有許多第三方 YouTube 視頻可幫助你熟悉新手錶，例如：

https://www.youtube.com/watch?v=tSVkqWNmO2c

“Galaxy Wearable”應用程式內也有一個使用手冊部分。 在手機上打開 Galaxy Wearable，搜尋手錶，嘗試將手錶與手機配對。 根據你的版本，這可能會提示你從 Play 商店安裝第三個應用程式“Galaxy Watch 4 外掛”（下載需要一些時間）。 在手機上安裝此應用程式，然後再次在 Galaxy Wearable 應用程式中嘗試將手錶與手機配對。 透過一系列選單並勾選各種偏好設定。

##### 設置 Samsung 帳號

你需要確保用來設置 Samsung 帳號的電子郵件帳戶的出生日期顯示用戶年齡 13 歲以上，否則 Samsung 的許可權批准將非常困難。 如果你已為 13 歲以下的孩子建立了 Gmail 帳號並使用該電子郵件地址，你無法簡單地將其更改為成人帳戶。 解決此問題的一種方法是將目前的出生日期修改為使目前年齡為 12 歲零 363 天。 第二天，該帳戶將被轉換為成人帳戶，然後你可以繼續設置 Samsung 帳戶。

(remote-control-transferring-the-aaps-wear-app-onto-your-aaps-phone)=
##### 將 **AAPS** Wear 應用程式傳輸到 **AAPS** 手機

從 Android Studio 將 Wear.apk 載入到你的手機，可以透過以下方式進行：

a) 使用 USB 傳輸線將 **AAPS** wear apk 檔案放入手機，然後將其“側載”到手錶上。 透過 USB 將 Wear.apk 傳輸到手機的下載資料夾；或

b) 從 Android Studio 將 Wear.apk 剪切並粘貼到你的 Gdrive 中。


你可以使用 Wear Installer 2 或 Easy Fire tools 將 AAPS 側載到手錶上。 這裡我們推薦使用 Wear Installer 2，因為視頻中的說明和過程非常清晰且解釋得很好。

##### 使用 Wear Installer 2 將 **AAPS** Wear 從手機側載到手錶上

 ![圖像](../images/43577a66-f762-4c11-a3b3-4d6d704d26c7.png)

Wear Installer 2 由 [Malcolm Bryant](https://www.youtube.com/@Freepoc) 開發，你可以從 Google Play 將其下載到手機上，並用來將 AAPS wear 應用程式側載到手錶上。 該應用程式包含一個便捷的“如何側載”[視頻](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV)。

該視頻提供了所有必要的細節（最好在單獨的設備上打開視頻，以便在設置手機時觀看）。

如視頻中所述，完成後，請關閉手錶上的 ADB 調試，以避免消耗智慧型手錶的電池。

或者，你可以：

```{admonition} Use Easy Fire tools to side-load the **AAPS** wear on the watch
:class: dropdown

1)   從 Play 商店下載 _Easy Fire Tools_ 到您的手機 

![image](../images/81ceb8f3-dfa6-468b-b9d0-c31b885bc104.png)

2)  在手錶上成為開發者 (設置好並連接到手機後)： 

前往設定>關於手錶 (底部選項)>- 軟體資訊> 軟體版本。 

快速點擊“軟體版本”，直到出現通知，告知手錶現在處於“開發者模式”。 返回設置選單頂部，向下滾動，並在“關於手錶”下方看到“開發者選項”。 

在“開發者選項”中，打開“ADB 調試”和“無線調試”。 後者將顯示手錶的 IP 地址，其最後兩位數字每次與新手機配對時都會改變。 他會像是：**167.177.0.20.** 5555（忽略最後4位數）。 請注意，每次將 AAPS 切換到新手機時，這個地址的最後兩位數字（這裡為“20”）將發生變化。  

![24-10-23, watch ADB debug pic](../images/643f4e8b-09f3-4a8d-8277-76b1839a5c3a.png)

步驟 3)     在手機上的 Easy Fire Tools 中輸入 IP 位址 _例如_ **167.177.0.20** (進入左側選單，設定並輸入 IP 位址)。 然後點擊右上角的插頭圖示。  

![image](../images/b927041f-cc53-4cde-9f77-11cd517c9be0.png)


![image](../images/00b2fb8b-5996-4b71-894e-516d63469e1b.png)


步驟 4) 請按照[這裡](https://wearablestouse.com/blog/2022/01/04/install-apps-apk-samsung-galaxy-watch-4/?utm_content=cmp-true)的指示，使用 Easy Fire 工具將 Wear.apk 透過側載（即傳輸）到手錶上

點擊應用中的側 "外掛" 插孔，以將 Wear OS.apk 上傳到手錶: 

![image](../images/d1bc4c9d-d5ef-4402-a9a2-a51ed242eff3.png)


 下一步 > 在手錶上接受授權請求


![image](../images/2c398a34-b865-4aa1-9c53-d83dfef052a7.png)

```


##### 設置 **AAPS** 手機與手錶的連線

最後一步是配置手機上的 **AAPS** 與智慧型手錶上的 **AAPS** Wear 互動。 為此，在 組態建置工具 中啟用 Wear 外掛：

* 前往手機上的 **AAPS** 應用程式

* 在左側漢堡按鈕中選擇 > 組態建置工具

* 在一般設定下勾選手錶選項

![圖像](../images/ae6d75a1-1829-4d2e-b0dc-153e31e4a466.png)


要更改 **AAPS** 手錶錶盤，請按下手錶的主畫面，他將進入“自訂”模式。 然後向右滑動，直到看到所有 **AAPS** 錶盤。

如果 **AAPS** Wear.apk 已成功側載到智慧型手錶上，他將顯示如下：


![24-10-23，成功的 Galaxy 手錶照片](../images/628e46d8-c7dc-4741-9eba-ae83f396c04c.png)

#### 排除 **AAPS** 手錶與 **AAPS** 手機通訊的問題
1.  如果 EasyFire tools 無法連線，或者你收到“授權失敗”訊息 > 請檢查 IP 地址是否正確輸入。
2.  檢查智慧型手錶是否已連線到網際網路（而不僅僅是透過藍牙與手機連線）。
3.  檢查 **AAPS** 手機和智慧型手錶是否已在 Samsung 應用程式中配對或連線。
4.  也可能需要對手機和智慧型手錶進行硬重啟（即關閉並重新啟動手機）。
5.  假設你已經成功下載 Wear.apk 到手機，但未收到任何血糖資料，_請檢查_ 你是否已將正確的 **AAPS** apk 版本側載到手錶上。 如果你的 AAPS wear.apk 版本列為以下任何一個：a) “wear-AAPSClient-release”；b) “wear-full-release.aab”；或c) 標題中出現“debug”一詞，那麼你在建置過程中選擇了錯誤的 Wear OS apk 版本。
6.  檢查路由器是否未將設備相互隔離。

更多問題排除提示請參閱[這裡](https://freepoc.org/wear-installer-help-page/#:~:text=If%20you%20are%20having%20problems,your%20phone%20and%20your%20watch.)

### 從 Wear 手錶控制 AAPS

一旦您在手錶上設置**AAPS**，有關手錶錶盤及其功能的詳細資訊可以在[Wear AAPS 在手錶上的操作](../UsefulLinks/WearOsSmartwatch.md)中找到。

簡要概述，以下功能可以從智慧型手錶觸發：

* 設置一個臨時目標

* 使用注射計算器（計算變數可在手機設定中定義）

* 管理 eCarbs

* 進行注射（胰島素 + 碳水化合物）

* 檢查手錶設定

* 狀態

* 檢查幫浦狀態

* 檢查循環狀態

* 檢查並更改個人設定、CPP（生理時鐘百分比設定 = 時間變動 + 百分比）

* 顯示 TDD（每日總劑量 = 每日注射 + 基礎劑量）

* 遠端注射，看護者和 T1D 兒童在不同位置（這對於 **AAPS** 手錶和 **AAPS** 手機是可能的，前提是這兩個設備連接到 WiFi 網路）

#### 照護者使用其他應用程式（如 Whatsapp）與手錶通訊

可以在手錶上添加其他應用程式，例如 Whatsapp，用於照護者和孩子之間的訊息交流（例如）。 重要的是，手機上只應關聯一個 Google 帳戶，否則手錶無法同步這些資料。 你需要年滿 13 歲才能擁有 Samsung 帳戶，並且此帳戶需要使用與 Android 手機相同的電子郵件地址設置。

這裡有一段視頻，解釋了如何在 Galaxy 4 手錶上設置 Whatsapp 訊息功能（你無法獲得 Whatsapp 的全部功能），請參閱[這裡](https://gorilla-fitnesswatches.com/how-to-get-whatsapp-on-galaxy-watch-4/)

在 **Galaxy wearable** 應用程式中的手機和手錶上進行調整後，可以使 Whatsapp 訊息透過輕微振動通知，並且 Whatsapp 訊息會顯示在現有錶盤上方。

#### Sony 智慧型手錶設置問題排除

雖然幾年前已經停產，但如果您正在使用 Sony Smartwatch SW 3，請參閱這裡的問題排除指南: [問題排除 Sony Smartwatch SW 3](../UsefulLinks/SonySW3.md)



### 選項 3) 在手錶上運作 AAPSClient 以遠端控制手機上的 **AAPS**

手錶軟體 **AAPSClient** Wear apk 可以直接從[Github](https://github.com/nightscout/AndroidAPS/releases/)下載。

要下載軟體，請點擊所需的應用程式（在此截圖中，**wear-aapsclient-release_3.2.0.1** 或 **wear-aapsclient2-release_3.2.0.1** 均可使用，這兩個版本中有一個是為了提供給第二位照護者的手錶）。

![圖像](../images/2308c075-f41c-45bc-9c0f-3938beeaaafb.png)


然後點擊“另存為”，並將文件儲存到電腦上的方便位置：


![圖像](../images/bcf63cbc-9028-41d5-8416-fa2a31fd6f7d.png)






您可以以與**AAPS** Wear 應用相同的方式，將**AAPSClient**穿戴 apk 傳輸到手機並側載到手錶上，如[將 Wear 應用傳輸到您的 AAPS 手機](#remote-control-transferring-the-aaps-wear-app-onto-your-aaps-phone)中詳細說明。

### 選項 4) FitBit 手錶的有限 Nightscout（和其他選項）



![圖像](../images/98620770-2fb3-47af-a13e-28af7db69096.png)



**"Sentinel"** 是一款由[Ryan Chen](http://ryanwchen.com/sentinel.html) 為其家人開發並免費提供給 FitBit 智慧型手錶的錶盤：Sense1/2, Versa 2/3/4。 他與 FitBit Luxe 不相容，因為他只是健身追蹤器。 Sentinel 可以從[FitBit 移動應用程式](https://gallery.fitbit.com/details/5f75448f-413d-4ece-a53d-b969c6afea7c)下載。

他允許使用 Dexcom Share、Nightscout 或兩者結合作為資料來源，來監控一個、兩個或三個人的血糖數值。

如果與本地網頁伺服器模式一起使用，你還可以使用 xDrip+ 或 SpikeApp。 用戶可以設置自定義警報，並透過 Nightscout 的 careportal 功能提交事件，直接從手錶追蹤胰島素剩餘量（IOB）、碳水化合物剩餘量（COB），輸入餐食資訊（碳水化合物計數和注射量），以及血糖檢查數值。

所有這些都將顯示在 Nightscout 的時間軸圖表中，並作為更新值顯示在 IOB 和 COB 欄位中。 社群支援可以在專門的[Facebook 群組 Sentinel](https://www.facebook.com/groups/3185325128159614)中找到。

FitBit 手錶還有一些僅限於監控的選項。 這包括[Glance](https://glancewatchface.com/)。 這些額外選項在[Nightscout 網頁](https://nightscout.github.io/nightscout/wearable/#fitbit)中有描述。

### 選項 5) 監控 **AAPS**（完整設定檔資料，或僅限血糖資料）當 **AAPS** 在手機上運作時。

這些選項在文件的["僅追蹤"](../RemoteFeatures/FollowingOnly.md)部分中有更詳細的描述。

通常，市場上有許多價格實惠的智慧型手錶可以提供僅限血糖資料顯示的功能。 如果你正在使用 Nightscout，那麼所有選項的概述可以在[Nightscout 頁面](https://nightscout.github.io/nightscout/wearable/#)中找到。






