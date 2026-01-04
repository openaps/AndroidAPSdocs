# Freestyle Libre 2 和 2+

即使使用官方應用程式，Freestyle Libre 2 傳感器現在也是一款真正的連續血糖監測儀（CGM）。 然而，LibreLink 仍無法將資料傳送至 AAPS。 有幾種解決方案可以將其與 AAPS 搭配使用。

## 1. 使用藍牙橋接器和 OOP

藍牙發射器可用於 Libre 2（EU）或 2+（EU），以及一個 非處理演算法 應用程式。 你可以像使用 [Libre 1](./Libre1.md) 一樣每 5 分鐘接收一次血糖讀取值。

請確認你要使用的橋接器與應用程式與你的傳感器及 xDrip+ 相容。

Libre2 的 OOP（可在[此處](#Libre2_OOP2)找到）產生的血糖讀值與原始接收器所顯示的結果相同。 AAPS 與 Libre 2 的讀取值會經過 10 至 25 分鐘的平滑處理，以避免某些讀取值的跳動。 請參閱以下內容[讀取值平滑化及原始讀取值](#libre2-value-smoothing-raw-values)。 OOP 每 5 分鐘生成一次讀取值，並取最近 5 分鐘的平均值。 因此，這些血糖讀取值可能不如其他方法平滑，但他們與原始讀取器的讀取值一致，並且更快速地反應“真實”血糖讀取值。 如果你嘗試使用 OOP 進行循環，請在 xDrip+ 中啟用所有平滑設定。

有幾個使用藍牙傳輸器的理由：

-   你可以選擇多種 OOP2 校正策略（1）：使用「無校正」獲得讀取器讀取值，或者像 Libre 1 一樣使用「基於原始資料進行校正」，或者最終使用「基於葡萄糖進行校正」來校正讀取器的讀取值。  
  請確保停用 OOP1（2）。

    → 漢堡選單 → 設定 → 不常見的設定 → 其他雜項選項 選項

![OOP2 校正](../images/Libre2_OOP2Calibration.png)

-   Libre 2 傳感器可像 Libre 1 一樣使用 14.5 天。
-   支援 8 小時的回填資料。

備註：傳輸器可以與 LibreLink 應用程式並行使用而不會相互干擾。

### 啟動傳感器

- → 漢堡選單 (1) → 啟動傳感器 (2) → 啟動傳感器 (3) → 回答「暫不」(4)。

![xDrip+ 啟動 Libre 傳輸器與傳感器 3](../images/xDrip_Libre_Transmitter03.png)

這不會實際啟動任何 Libre2 傳感器，也不會與其進行任何互動。 這只是為了讓 xDrip+ 知道有一個新的傳感器正在傳送血糖資料。 如果可用，請輸入兩個指血測量值進行初始校正。 現在，血糖值應每 5 分鐘顯示在 xDrip+ 中。 錯過的讀取值，例如因為你離手機太遠，不會被回填。

更換傳感器後，xDrip+ 會自動偵測到新傳感器並刪除所有校正資料。 啟動後，你可以檢查你的血糖值並進行新的初始校正。

### 設定 AAPS（僅用於循環功能）

-   在 AAPS 中，前往 組態建置工具 >血糖來源，並勾選 'xDrip+'。

![xDrip+血糖來源](../images/ConfBuild_BG_xDrip.png)

-   如果 AAPS 在手機處於飛航模式時未接收到血糖 值，請使用「識別接收器」，如在 [xDrip+ 設定頁面](#xdrip-identify-receiver) 所述。

## 2. 使用 xDrip+ 直接連線

```{admonition} Libre 2 EU only
:class: warning
xDrip+ 不支援直接連接到 Libre 2 美國和澳洲版本。
僅支持 Libre 2 和 2+ **EU** 型號。
```

- 請按照 [這些指示](./Libre2MinimalL00per.md) 設定 xDrip+，因為原始文檔鏈接到過時的 OOP2 版本。
- 按照[xDrip+ 設定頁面](../CompatibleCgms/xDrip.md)上的設置說明進行操作。

-   在[組態建置工具的血糖來源](#Config-Builder-bg-source)中選擇 xDrip+。

(libre2-value-smoothing-raw-values)=

### 讀取值平滑化與原始值

技術上來說，目前的血糖值每分鐘會傳送到 xDrip+。 加權平均濾波器預設會計算最近 25 分鐘內的平滑資料。 你可以在 NFC 掃描功能選單中更改此時間段。

→ 漢堡選單 → 設定 → NFC 掃描功能 → 使用 xxx 方法時平滑 Libre 3 資料

![xDrip+ 進階設定：Libre 2 與原始值](../images/xDrip_Libre3_Smooth.png)

這對循環是必要的。 曲線看起來很平滑，循環結果也非常好。 用來設定鬧鐘的原始值波動稍大一些，但與讀取器顯示的值相符。 此外，你可以在 xDrip+ 圖表中顯示原始值，從而及時應對快速變化。 請開啟「不常見的設定」\>「Libre 2 的進階設定」\>「顯示原始值」和「顯示傳感器資訊」。 然後，原始值會額外顯示為小白點，並在系統選單中提供更多傳感器資訊。

當血糖快速變化時，原始值非常有幫助。 即使這些點的波動較大，但與平滑線相比，你能更好地察覺趨勢，從而做出正確的治療決策。

→ 漢堡選單 → 設定 → 不常見的設定 → Libre 2 的進階設定

![xDrip+ 進階設定：Libre 2 與原始值](../images/Libre2_RawValues.png)



#### 校正

你可以將 Libre2 校正為**偏差 -40 mg/dL 至 +20 mg/dL \[-2,2 mmol/l 至 +1,1 mmol/l\]**（截距）。 斜率無法更改。 請在設置新傳感器後進行指血測試，並注意插入後的前 12 小時可能不太準確。 由於血糖測試可能存在較大誤差，請每 24 小時驗證一次並在必要時校正。 如果幾天後傳感器的讀取值完全不準確，應考慮更換傳感器。

## 3. 使用 Diabox

- 安裝 [Diabox](https://www.bubblesmartreader.com/_files/ugd/6afd37_f183eabd4fbd44fcac4b1926a79b094f.pdf)。 在設定中，進入「整合」，啟用「與其他應用程式共享資料」。

![Diabox](../images/Diabox.png)

- 在[組態建置工具的血糖來源](#Config-Builder-bg-source)中選擇 xDrip+。

## 4. 使用 Juggluco

請參閱 [這裡](./Juggluco.md).
