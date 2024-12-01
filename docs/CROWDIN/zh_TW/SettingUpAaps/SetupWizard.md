# AAPS設定嚮導

當你首次啟動**AAPS**時，系統會引導你使用「**設定嚮導**」，以便快速設置應用程式的所有基本配置。 **設定嚮導**會引導你，以避免遺忘某些關鍵內容。 例如，**權限設定**對於正確設置**AAPS** 是非常重要的。

不過，在首次使用**設定嚮導**時，並不一定需要完全配置所有內容，你可以輕鬆地退出嚮導，稍後再返回。 在**設定嚮導**之後，有三條路徑可供選擇以進一步優化/變更配置。 這些路徑將在下一部分進行解釋。 因此，如果你在設定嚮導中跳過了一些選項，沒關係，你可以輕鬆地稍後配置他們。

在使用**設定嚮導**期間及其後，你可能不會注意到**AAPS**中有任何顯著可見的變化。 要啟用你的**AAPS**循環，你必須遵循**目標**以啟用每一項功能。 你會在設定嚮導結束時開始**目標 1**。 你是**AAPS**的主導者，而不是相反。

```{admonition} Preview Objectives
:class: note
如果你想知道目標的結構，請閱讀[完成目標](../SettingUpAaps/CompletingTheObjectives.md)，然後先返回這裡運行設定嚮導。

```

從以往經驗中，我們知道新用戶經常會給自己施加壓力，希望儘快設置**AAPS**，這可能會導致挫折，因為這是個龐大的學習曲線。

因此，請花時間配置你的循環，運行良好的**AAPS**循環帶來的好處是巨大的。

```{admonition} Ask for Help
:class: note
如果文件中有錯誤或您對如何解釋某些內容有更好的想法，您可以按照[與其他用戶聯繫](../GettingHelp/WhereCanIGetHelp.md)的說明向社區尋求幫助。
```
## AAPS設定嚮導逐步指南
### 歡迎訊息

這只是歡迎訊息，你可以透過點擊“下一步”按鈕跳過：

![圖像](../images/setup-wizard/Screenshot_20231202_125636.png)

### 許可協議

在最終用戶授權協議中，有關於使用**AAPS**的法律事宜的重要訊息。 請仔細閱讀。

如果你不理解或無法同意最終用戶授權協議，請根本不要使用**AAPS**！

如果你暸解並同意，請點擊“我暸解並同意”按鈕並繼續設定嚮導：

![圖像](../images/setup-wizard/Screenshot_20231202_125650.png)

### 必要的權限

**AAPS** 需要一些權限才能正常運行。

在接下來的畫面中，你會被問到幾個必須同意的問題，以使**AAPS**正常運作。 嚮導本身會解釋為何需要相關設置。

在此畫面中，我們提供更多背景訊息，將更技術性的內容轉換為常用語系，或解釋其原因。

請點擊“下一步”按鈕：

![圖像](../images/setup-wizard/Screenshot_20231202_125709.png)

智慧型手機的電池消耗仍然是需要考慮的因素，因為電池性能仍然相當有限。 因此，智慧型手機上的Android操作系統在允許應用程式運作和消耗CPU時間（因此消耗電池電量）方面有嚴格的限制。

然而，**AAPS** 需要定期運行，_例如_每幾分鐘接收血糖讀值，然後根據你的規範應用算法來決定如何處理你的血糖水平。 因此，必須讓Android允許一些權限。

你可以透過確認設置來完成這一操作。

請點擊“請求許可”按鈕：

![圖像](../images/setup-wizard/Screenshot_20231202_125721.png)

請選擇“允許”：

![圖像](../images/setup-wizard/Screenshot_20231202_125750.png)

如果應用程式希望向你發送通知，Android需要特殊的許可。

雖然停用通知很方便_例如_來自社群媒體應用程式的通知，但你必須允許**AAPS**向你發送通知。

請點擊“請求許可”按鈕：

![圖像](../images/setup-wizard/Screenshot_20231202_125813.png)


選擇“AAPS”應用程式：

![圖像](../images/setup-wizard/Screenshot_20231202_125833.png)

透過向右滑動滑塊來啟用“允許在其他應用程式上顯示”：

![圖像](../images/setup-wizard/Screenshot_20231202_125843.png)

如果已啟用，滑塊應該看起來是這樣的：

![圖像](../images/setup-wizard/Screenshot_20231202_125851.png)

Android將藍牙通訊的使用與位置服務的使用權限相關聯。 你可能在其他應用程式中也見過這一點。 如果你想查看藍牙，通常需要位置權限。

**AAPS** 使用藍牙與你的 CGM 和胰島素幫浦通信，如果這些設備是直接由**AAPS** 控制，而不是其他應用程式所使用的。 具體細節可能因設置而異。

請點擊“請求許可”按鈕：

![圖像](../images/setup-wizard/Screenshot_20231202_125924.png)

這很重要。 否則**AAPS**將完全無法正常運作。

點擊“使用應用程式時”：

![圖像](../images/setup-wizard/Screenshot_20231202_125939.png)

點擊“下一步”按鈕：

![圖像](../images/setup-wizard/Screenshot_20231202_130002.png)

**AAPS** 需要將訊息記錄到你的智慧型手機的永久儲存中。 永久儲存意味著即使重啟智慧型手機後，他仍然可用。 其他訊息則會遺失，因為他們沒有儲存到永久儲存中。

請點擊“請求許可”按鈕：

![圖像](../images/setup-wizard/Screenshot_20231202_130012.png)

點擊“允許”：

![圖像](../images/setup-wizard/Screenshot_20231202_130022.png)

你將被告知需要重新啟動智慧型手機以使更改生效。

請**不要現在停止設定嚮導**。 你可以在完成設定嚮導後再進行。

點擊“確定”然後點擊“下一步”按鈕：

![圖像](../images/setup-wizard/Screenshot_20231202_130031.png)


### 主密碼

由於**AAPS**的配置包含一些敏感資料（_例如_進入你的 Nightscout 伺服器的 API_KEY），因此這些資料會通過你在此設置的密碼進行加密。

第二句非常重要，請**不要遺失你的主密碼**。 請將其記下來_例如：_在 Google 雲端硬碟上。 Google雲端硬碟是一個不錯的地方，因為他由Google為你進行備份。 你的智慧型手機或電腦可能會崩潰，並且你可能沒有實際副本。 如果你忘記了主密碼，將很難在稍後找回你的個人設定和在**目標**上的進度。

填寫密碼兩次後，請點擊“下一步”按鈕：

![圖像](../images/setup-wizard/Screenshot_20231202_130122.png)


### Fabric上傳

在這裡，你可以設置自動崩潰和使用報告服務的使用。

這不是強制性的，但使用他是一種良好的做法。

他幫助開發人員更好地了解你如何使用應用程式，並告知他們發生了哪些崩潰。

他們將獲得：

1. 應用程式崩潰的資訊，否則他們無法知道，因為他們自己的設置中一切運作正常，並且
1. 發送的資料（崩潰訊息）中包含崩潰發生的情況以及使用了何種配置的相關訊息。

因此，這有助於開發人員改進應用程式。

請透過向右滑動滑塊來啟用“Fabric上傳”：


![圖像](../images/setup-wizard/Screenshot_20231202_130136.png)

此外，你可以標識自己，以便在開發人員希望就問題或緊急關注事項聯繫你時能夠找到你：

![圖像](../images/setup-wizard/Screenshot_20231202_130147.png)

填寫你的“聯絡訊息”後，點擊“確定”按鈕。 聯絡訊息可以是你在Facebook、Discord等平台上的身份訊息…… 只需提供你認為能透過最佳方式聯繫你的訊息：

![圖像](../images/setup-wizard/Screenshot_20231202_135748.png)

點擊“下一步”按鈕：

![圖像](../images/setup-wizard/Screenshot_20231202_135807.png)

### 單位 (mg/dL <-> mmol/L)

請選擇你的血糖值是以 mg/dl 還是 mmol/L 為單位，然後點擊“下一步”按鈕：

![圖像](../images/setup-wizard/Screenshot_20231202_135830.png)

### 顯示設置

 在這裡，你可以選擇傳感器顯示的血糖範圍，這將顯示在你設置的範圍內的“範圍內”數值。 你可以暫時保留預設值，稍後再進行編輯。

你選擇的值只會影響圖表的圖形展示，其他方面不會受到影響。

你的血糖目標_例如：_在你的個人設定中單獨配置。

你的TIR（範圍內時間）分析範圍在你的報告伺服器中單獨配置。

請按下“下一步”按鈕：

![圖像](../images/setup-wizard/Screenshot_20231202_135853.png)

(SetupWizard-synchronization-with-the-reporting-server-and-more)=
### 與報告伺服器同步及更多設置

在這裡，你可以配置資料上傳到你的報告伺服器。

你也可以在這裡進行其他配置，但首次運作我們只會專注於報告伺服器。

如果你目前無法設置，請暫時跳過。 你可以稍後再進行配置。

如果你在左側勾選此項目，則可以在右側勾選可見性（眼睛）框，這將使此外掛置於**AAPS**主螢幕的上方選單中。 如果你在此處配置報告伺服器，請務必選擇顯示可見性。

在此示例中，我們選擇Nightscout作為報告伺服器，並將進行配置。

```{admonition}  Make sure to choose the correct **NSClient** version for your needs! 
:class: 注意

點擊 [這裡](#version3200) 查看 **AAPS** 3.2.0.0 的發布說明，其中解釋了第一選項 **NSClient**（這是「v1」，雖然未明確標記）和第二選項 **NSClient v3** 之間的差異。

Nightscout 使用者應該選擇 **NSClient v3**，除非你想通過 Nightscout 監控或發送遠端治療（例如，作為孩子的父母或照顧者使用 **AAPS**），這種情況下請選擇第一個選項「**NSClient**」，直至另行通知。 
```
對於Tidepool來說，這更簡單，因為你只需要你的個人登錄訊息。

選擇後，請按下你選擇項目旁邊的齒輪按鈕：

![圖像](../images/setup-wizard/Screenshot_20231202_140916.png)

在這裡，你可以配置Nightscout報告伺服器。

請點擊“Nightscout URL”：

![圖像](../images/setup-wizard/Screenshot_20231202_140952.png)

輸入你的Nightscout URL，這是你的個人Nightscout伺服器。 這只是你自己設置的URL，或者是從你的Nightscout服務提供商那裡獲得的。

請點擊“確定”按鈕：

![圖像](../images/setup-wizard/Screenshot_20231202_141051.png)

輸入你的Nightscout存取權杖。 這是你配置的Nightscout伺服器的存取權杖。 沒有這個權杖，無法存取。

如果你目前沒有此文件，請查看**AAPS** 的文件以設置報告伺服器。

在填寫「**NS 存取權杖**」並點擊「確定」後，請按下「同步」按鈕：

![圖像](../images/setup-wizard/Screenshot_20231202_141131.png)

如果你在設定嚮導的前幾步中已經配置了Nightscout，請選擇“上傳資料到NS”。

如果你在 Nightscout 上已存儲個人設定並希望將其下載到**AAPS**，請啟用「接收個人設定」：

![圖像](../images/setup-wizard/Screenshot_20231202_141219.png)


返回上一個螢幕並選擇“警報選項”：

![圖像](../images/setup-wizard/Screenshot_20231202_141310.png)

現在先不要啟用這些開關。 我們只是介紹一下可能在未來配置的選項，讓你熟悉這些設定。 目前還不需要設置他們。

返回上一個螢幕並選擇“連線設置”。

在這裡，你可以配置如何將資料傳輸到報告伺服器。

照顧者必須啟用「使用手機網路連線」，否則提供依賴者/孩子的智慧型手機無法在 WiFi 範圍外上傳資料_例如：_在上學的路上。

其他**AAPS**使用者可以停用通過手機網路連線的傳輸，以節省資料或電池。

如果不確定，建議保持所有選項啟用。

返回上一個螢幕並選擇“進階設置”。

![圖像](../images/setup-wizard/Screenshot_20231202_141326.png)

如果你希望在報告伺服器中獲取應用程式啟動的相關訊息，請啟用“紀錄應用啟動到NS”。 這有助於你遠端了解應用程式是否已重新啟動，特別是作為照護者時。

查看**AAPS**當前是否正確配置可能會很有趣，但稍後通常不太重要能否在 Nightscout 中看到**AAPS**的啟動或停止。

啟用“從錯誤中建立公告”和“從需要碳水化合物警報中建立公告”。

保持“減慢上傳”為停用狀態。 你只會在特殊情況下使用他，例如當需要將大量資料傳輸到Nightscout伺服器時，而Nightscout伺服器處理資料速度較慢。

返回兩次，回到外掛列表，然後選擇 "下一步" 以進入下一個螢幕：

![圖像](../images/setup-wizard/Screenshot_20231202_141351.png)

### 患者名稱

在這裡你可以在**AAPS**中設置你的姓名。

這可以是任何名字。 他只是用來區分不同用戶。

為了簡單起見，只需輸入名字和姓氏。

按“下一步”進入下一個螢幕。

![圖像](../images/setup-wizard/Screenshot_20231202_141445.png)

### 病人類型

在這裡你選擇你的「患者類型」，這點很重要，因為**AAPS**軟體根據患者的年齡有不同的限制。 這對安全至關重要。

在這裡你也配置**每餐最高允許注射量**。 也就是說，你在典型餐點中需要的最大注射量。 這是一個安全功能，用於幫助避免在餐前注射時發生意外的過量注射。

第二個限制與此類似，但涉及你預期的最大碳水化合物攝入量。

設置這些值後，請按“下一步”進入下一個螢幕：

![圖像](../images/setup-wizard/Screenshot_20231202_141817.png)

### 使用的胰島素

選擇在幫浦中使用的胰島素類型。

胰島素名稱應該很好暸解。

```{admonition} Don't use the "Free-Peak Oref" unless you know what you are doing
:class: 危險
對於進階使用者或醫學研究，提供使用「自由高峰參數」定義胰島素作用的個性化設定的可能性。 除非你是一位專家，否則請不要使用它，通常預設值對每品牌胰島素運作良好。
```

按“下一步”進入下一個螢幕：

![圖像](../images/setup-wizard/Screenshot_20231202_141840.png)


### 血糖來源

選擇你使用的血糖來源。 請閱讀你的[血糖資料來源](../Getting-Started/CompatiblesCgms.md)的文件。

由於有多個選項可用，因此我們不會在此詳細解釋所有選項的配置。 在這裡我們使用Dexcom G6與BYODA應用程式的示例：


![圖像](../images/setup-wizard/Screenshot_20231202_141912.png)


如果你使用Dexcom G6與BYODA，請在頂層選單中點擊右側的勾選框來啟用可見性。

選擇後，按“下一步”進入下一個螢幕：

![圖像](../images/setup-wizard/Screenshot_20231202_141925.png)


如果你正在使用 Dexcom G6 與 BYODA，點擊齒輪按鈕來讀取 BYODA 的設定。

啟用“上傳血糖資料到NS”和“紀錄傳感器變更到NS”。

返回並按 "下一步" 以進入下一個螢幕：

![圖像](../images/setup-wizard/Screenshot_20231202_141958.png)

(setup-wizard-profile)=
### 設定檔

現在我們進入設定嚮導中的一個非常重要的部分。

在嘗試在下一個畫面中輸入你的個人設置詳細資訊之前，請閱讀關於[個人設置](../SettingUpAaps/YourAapsProfile.md)的文件。

```{admonition} Working profile required - no exceptions here !
:class: 危險
準確的個人設定對於控制 **AAPS** 的安全作用至關重要

需要你已經確定並與醫生討論你的個人設定，並且這一設定已成功通過基礎速率、ISF 和 IC 測試驗證有效！

如果一個機器人有錯誤的輸入，它將不斷失敗。 **AAPS** 只能使用所提供的訊息。 如果你的個人設定過強，則可能會面臨低血糖風險；如果過弱，則可能會面臨高血糖風險。 
```

按“下一步”進入下一個螢幕。 輸入一個“設定檔案名稱”：

![圖像](../images/setup-wizard/Screenshot_20231202_142027.png)


長期來看，如果有需要，你可以擁有多個設定檔案。 這裡我們只建立一個。

```{admonition} Profile only for tutorial - not for your usage
:class: 資訊
這裡的實例個人設定僅顯示如何輸入資料。

它並不打算是一個準確的或非常優化的個人設定，因為每個人的需求差異很大。

不要用它進行實際循環！
```

請輸入你的[胰島素作用時間 (DIA)](#your-aaps-profile-duration-of-insulin-action)，以小時為單位。 然後按“IC”：

![圖像](../images/setup-wizard/Screenshot_20231202_142143.png)

請輸入你的[胰島素與碳水化合物比例 (IC)](#your-aaps-profile-insulin-to-carbs-ratio)值：

![圖像](../images/setup-wizard/Screenshot_20231202_142903.png)

按“ISF”。 請輸入你的[胰島素敏感度係數 (ISF)](#your-aaps-profile-insulin-sensitivity-factor)值：

![圖像](../images/setup-wizard/Screenshot_20231202_143009.png)


按“基礎速率”。 請輸入你的[基礎胰島素值](#your-aaps-profile-basal-rates)：

![圖像](../images/setup-wizard/Screenshot_20231202_143623.png)


按“TARG”。 輸入你的血糖目標值。

對於開放循環，此目標範圍可以更寬，否則**AAPS**會持續通知你更改臨時基礎率或其他設定，這可能會很累人。

稍後，對於閉環循環，你通常只會有一個上限和下限值。 這樣可以使**AAPS**更容易達到目標，並為你提供更好的整體糖尿病控制。

輸入/確認目標值：

![圖像](../images/setup-wizard/Screenshot_20231202_143709.png)

點擊“儲存”來儲存設定檔案：

![圖像](../images/setup-wizard/Screenshot_20231202_143724.png)


儲存後將出現一個新按鈕“啟用設定檔案”。

```{admonition} Several defined but only one active profile
:class: information
你可以定義多個設定檔案，但任何時刻只能啟用一個設定檔案。
```

按下“啟用設定檔案”：

![圖像](../images/setup-wizard/Screenshot_20231202_143741.png)





設定檔案切換對話框出現。 在這種情況下，讓他保持預設。

```{admonition} Several defined but only one active profile
:class: information
你稍後將學習如何使用此通用對話框來處理疾病或運動等情況，在這些情況下，你需要更改適合情況的設定檔案。
```


按下“確定”：


![圖像](../images/setup-wizard/Screenshot_20231202_143808.png)



設定檔案切換的確認對話框出現。

你可以按“確定”確認他。 按“下一步”進入下一個螢幕：

![圖像](../images/setup-wizard/Screenshot_20231202_143822.png)

你的設定檔案現在已設置：

![圖像](../images/setup-wizard/Screenshot_20231202_143833.png)


### 胰島素幫浦



現在你要選擇你的胰島素幫浦。

你會看到一個重要的警告對話框。 請閱讀並按“確定”。

如果你已經在之前的步驟中設置了設定檔案，並且知道如何連線幫浦，現在可以隨時連線他。

否則，請離開設置嚮導，使用左上角的箭頭，讓**AAPS**首先向你顯示一些血糖值。 你可以隨時返回或使用直接配置選項（不使用嚮導）。

請閱讀你[胰島素幫浦](../Getting-Started/CompatiblePumps.md)的文件。

按“下一步”進入下一個螢幕。

![圖像](../images/setup-wizard/Screenshot_20231202_143909.png)


在此例中，我們選擇“虛擬幫浦”。

按“下一步”進入下一個螢幕：

![圖像](../images/setup-wizard/Screenshot_20231202_143935.png)

### APS 演算法

選擇OpenAPS SMB演算法作為你的APS演算法。 即使有這個名稱，SMB功能在你熟悉 **AAPS** 並完成第一階段目標之前是停用的。 無論如何，OpenAPS SMB 相較於 OpenAPS AMA 更新且通常效果更好。

在初期，你的設定檔案通常不如經驗豐富後好，所以這個功能在初期被停用。 因為一開始系統設定的精準度通常不如使用一段時間後那麼高，因此該功能在初期會預設關閉。

```{admonition} Only use the older algorithm **OpenAPS AMA** if you know what you are doing
:class: 資訊
OpenAPS AMA 是最基本的算法，不支援微量注射來修正高值。 在某些情況下，使用此算法可能更好，但這不是推薦的做法。
```

按齒輪查看詳細資訊：

![圖像](../images/setup-wizard/Screenshot_20231202_144014.png)


僅閱讀文本，此處不進行任何更改。

由於**目標**所施加的限制，你目前無法使用「關閉循環」或「SMB 功能」。

返回並按 "下一步" 以進入下一個螢幕：

![圖像](../images/setup-wizard/Screenshot_20231202_144025.png)

### APS模式

讓“開放循環”保持選中狀態。

按“下一步”進入下一個螢幕：

![圖像](../images/setup-wizard/Screenshot_20231202_144049.png)

### 敏感度偵測

讓「敏感度 Oref1」成為所選敏感度外掛的標準。

按“下一步”進入下一個螢幕：

![圖像](../images/setup-wizard/Screenshot_20231202_144101.png)

### 開始目標1

你現在進入目標。 獲取更進階**AAPS**功能的資格。

我們從目標1開始，即使此刻我們的設置尚未完全準備好成功完成此目標。

但這是開始。

按下綠色的“開始”按鈕以開始目標1：

![圖像](../images/setup-wizard/Screenshot_20231202_144113.png)

你會看到你已經取得了一些進展，但還有其他區域需要完成。

按“完成”進入下一個螢幕。

![圖像](../images/setup-wizard/Screenshot_20231202_144135.png)

你即將進入**AAPS**的主螢幕。

在此你可以找到**AAPS**中設定個人設定的資訊消息。

這是在我們切換到新設定檔案時完成的。

你可以點擊“延後”，他會消失。

![圖像](../images/setup-wizard/Screenshot_20231202_144156.png)

如果你在任何時候不小心離開設置嚮導，你可以簡單地重新啟動嚮導，或手動更改[AAPS 循環的配置](../SettingUpAaps/ChangeAapsConfiguration.md)。

如果你的**AAPS**循環現在已完全設置，請繼續下一部分[「完成目標」](../SettingUpAaps/CompletingTheObjectives.md)。