# Freestyle Libre 2 和 2+

即使使用官方應用程式，Freestyle Libre 2 傳感器現在也是一款真正的連續血糖監測儀（CGM）。然而，LibreLink 仍無法將資料傳送至 AAPS。有幾種解決方案可以將其與 AAPS 搭配使用。

## 1. 使用藍牙橋接器和 OOP

藍牙發射器可用於 Libre 2（EU）或 2+（EU），以及一個 非處理演算法 應用程式。你可以像使用 [Libre 1](./Libre1.md) 一樣每 5 分鐘接收一次血糖讀取值。

請確認您要使用的橋接器和 App，與您的感測器及 xDrip 相容。

Libre2 的 OOP（可在[此處](#Libre2_OOP2)找到）產生的血糖讀值與原始接收器所顯示的結果相同。 AAPS 與 Libre 2 的讀取值會經過 10 至 25 分鐘的平滑處理，以避免某些讀取值的跳動。請參閱以下內容[讀取值平滑化及原始讀取值](#libre2-value-smoothing-raw-values)。 OOP 每 5 分鐘生成一次讀取值，並取最近 5 分鐘的平均值。因此，這些血糖讀取值可能不如其他方法平滑，但他們與原始讀取器的讀取值一致，並且更快速地反應“真實”血糖讀取值。如果您想使用 OOP 進行循環，請在 xDrip 中啟用所有平滑設定。

有幾個使用藍牙傳輸器的理由：

-   您可以選擇不同的 OOP2 校正策略（1）：使用讀取器讀取值並選取「不校正」，或像 Libre 1 一樣選取「根據原始值校正」來校正感測器；也可以選取「根據血糖值校正」，校正讀取器顯示的讀取值。  
  請確認 OOP1 保持停用（2）。

    → 漢堡選單 → 設定 → 不常見的設定 → 其他雜項選項選項

![OOP2 校正](../images/Libre2_OOP2Calibration.png)

-   Libre 2 傳感器可像 Libre 1 一樣使用 14.5 天。
-   支援 8 小時的回填資料。

備註：傳輸器可以與 LibreLink 應用程式並行使用而不會相互干擾。

### 啟動傳感器

- → 漢堡選單 (1) → 啟動傳感器 (2) → 啟動傳感器 (3) → 回答「暫不」(4)。

![xDrip 啟動 Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)

這不會實際啟動任何 Libre2 傳感器，也不會與其進行任何互動。這只是要讓 xDrip 知道有新的感測器 正在提供血糖值。如果可以，請輸入兩筆以血液測量的 數值，作為初始校正值。現在 xDrip 應該會每 5 分鐘顯示一次 血糖值。錯過的讀取值，例如因為你離手機太遠，不會被回填。

更換感測器後，xDrip 會自動偵測新的感測器 並刪除所有校正資料。註冊後，您可以測量血糖， 並重新進行初始校正。

### 設定 AAPS（僅用於循環功能）

-   在 **AAPS** 中，開啟左上角的**選單**（☰），前往**組態設定** > **血糖來源**，然後選取 **xDrip+**

![已選取 xDrip+ 血糖來源的組態設定 > 血糖來源畫面](../images/v4/Configuration/configuration_bg_source.png)

-   If AAPS does not receive BG values when phone is in airplane mode, use 'Identify receiver' as described on [xDrip settings page](#xdrip-identify-receiver).

## 2. 使用 xDrip 直接連線

```{admonition} Libre 2 EU only
:class: warning
xDrip 不支援直接連線至美國和澳洲的 Libre 2。僅支持 Libre 2 和 2+ **EU** 型號。
```

- 請依照[這些指示](./Libre2MinimalL00per.md)設定 xDrip，因為原始文件連結指向已過時的 OOP2 版本。
- 請依照[xDrip 設定頁面](../CompatibleCgms/xDrip.md)上的設定指示操作。

-   在[組態設定 &gt; 血糖來源](#Config-Builder-bg-source)中選取 xDrip+。

(libre2-value-smoothing-raw-values)=

### 讀取值平滑化與原始值

技術上來說，目前的血糖值每分鐘都會傳送至 xDrip。加權平均濾波器預設會計算最近 25 分鐘內的平滑資料。你可以在 NFC 掃描功能選單中更改此時間段。

→ 漢堡選單 → 設定 → NFC 掃描功能 → 使用 xxx 方法時平滑 Libre 3 資料

![xDrip 進階設定：Libre 2 和原始值](../images/xDrip_Libre3_Smooth.png)

這對循環是必要的。曲線看起來很平滑，循環結果也非常好。用來設定鬧鐘的原始值波動稍大一些，但與讀取器顯示的值相符。此外，也可以在 xDrip 圖表中顯示原始值 ，以便及時因應快速 變化。請開啟「不常見的設定」\>「Libre 2 的進階設定」\>「顯示原始值」和「顯示傳感器資訊」。然後，原始值會額外顯示為小白點，並在系統選單中提供更多傳感器資訊。

當血糖快速變化時，原始值非常有幫助。 Even if the dots are jumpier you would detect the tendency much better than using the smoothed line to make proper therapy decisions.

→ 漢堡選單 → 設定 → 不常見的設定 → Libre 2 的進階設定

![xDrip 進階設定：Libre 2 和原始值](../images/Libre2_RawValues.png)



#### 校正

You can calibrate the Libre2 **with an offset of -40 mg/dL to +20 mg/dL \[-2.2 mmol/L to +1.1 mmol/L\]** (intercept). 斜率無法更改。請在設置新傳感器後進行指血測試，並注意插入後的前 12 小時可能不太準確。由於血糖測試可能存在較大誤差，請每 24 小時驗證一次並在必要時校正。如果幾天後傳感器的讀取值完全不準確，應考慮更換傳感器。

## 3. 使用 Diabox

- 安裝 [Diabox](https://www.bubblesmartreader.com/_files/ugd/6afd37_f183eabd4fbd44fcac4b1926a79b094f.pdf)。在設定中，進入「整合」，啟用「與其他應用程式共享資料」。

![Diabox](../images/Diabox.png)

- 在[組態設定 &gt; 血糖來源](#Config-Builder-bg-source)中選取 xDrip+。

## 4. 使用 Juggluco

請參閱 [這裡](./Juggluco.md).
