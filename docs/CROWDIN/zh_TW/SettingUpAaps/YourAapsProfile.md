# 你的 AAPS 配置

Your **AAPS Profile** is a set of four key parameters which define how **AAPS** should deliver insulin in response to your sensor glucose levels. 這些是 **AAPS** 的主要參數。隨著你逐步完成 **目標**，你將解鎖其他可修改的參數（如 SMB 設置），但這些功能的性能依賴於你的基礎 **配置** 是否正確。該 **配置** 包含：
* [血糖目標](#profile-glucose-targets)、
* [基礎率](#your-aaps-profile-basal-rates)（BR）、
* [胰島素敏感性因子](#your-aaps-profile-insulin-sensitivity-factor)（ISF）及
* [胰島素與碳水化合物比率](#your-aaps-profile-insulin-to-carbs-ratio)（IC 或 ICR）。

```{admonition} Where did DIA go?
:class: note
The **duration of insulin action (DIA)** is no longer part of your **Profile**. It is set per insulin instead — see [Manage → Insulin settings](#Config-Builder-insulin-dia).
```

As part of **AAPS**’ management, users should continually assess and scrutinize the accuracy of their **Profile** settings. 建議按照此處所提供的順序進行設定。在更改另一個設置之前，請確保先調整好一個設置。逐步進行調整，而不是一次性做出大幅更改。記得在每次更改後啟用新配置。 Regularly [back up your **Profile**](#YourAapsProfile_Profile-backup) settings by exporting your settings.

你的 **配置** 設置之間相互影響—你可能會有「錯誤」設置在某些情況下運作良好，但在其他情況下卻無法正常運作。例如，若基礎胰島素過高與太高的**CR**同時發生。這表示你需要針對各項設定進行個別調整，並確保它們在各種情況下能夠協調運作。

你可以使用 [Autotune](https://autotuneweb.azurewebsites.net/) 來引導你的思路，但不要盲目遵循：他可能並不適合你或所有情況。

```{admonition} Your diabetes may vary
:class: note
**Profiles** vary significantly from person-to-person.

對於基礎率（BR）、胰島素敏感度因子（ISF）和胰島素與碳水化合物比率（IC或ICR），胰島素需求的絕對值和趨勢因每個人的生理性別、年齡、體能水平等而異，還有一些短期因素如疾病和近期運動。想要獲得更多指導，亞當·布朗的書籍[“Brights Spots and Landmines”](https://diatribe.org/bright-spots-and-landmines/)是一本非常值得閱讀的好書。

```

最後四個參數（血糖目標、基礎率、胰島素敏感度因子和胰島素與碳水化合物比率）可以設定不同的值，並根據需要在24小時內每小時變更。

![基礎胰島素的小時變化](../images/MaxDailyBasal2.png)

來自**AAPS**的設定檔範例截圖如下。請注意，下面這個範例設定檔顯示了大量的時間點。當你開始使用**AAPS**時，你的個人設定可能會簡單許多。

![Example active profile](../images/Profile-Example-Active.png)

(profile-glucose-targets)=
## 血糖目標

### 描述

你的**血糖目標**是一個核心值，且所有**AAPS**的計算均以此為基礎。這與你通常希望維持血糖數值的目標範圍不同。目標用於**AAPS**的計算：如果**AAPS**預測你的**血糖**將落在目標範圍之外，則將會採取行動使你回到該範圍內。

目標可以在這些邊界內定義：

|    | _低_目標                  | _高_目標                    |
| -- | ---------------------- | ------------------------ |
| 最小 | 4.4 mmol/L or 80 mg/dL | 5 mmol/L or 90 mg/dL     |
| 最大 | 10 mmol/L or 180 mg/dL | 11.1 mmol/L or 200 mg/dL |

### 影響

If the target in your **Profile** is very wide (say, 3 or more mmol/L [50 mg/dL or more] wide), you will often find little **AAPS** action. 這是因為**血糖** 水平預測會落在那個寬範圍內，因此 **AAPS** 不太可能採取臨時基礎率的行動。

### 如何設定

下面的**圖示**顯示了如何在**AAPS** 口令設置中設定目標範圍的範例。

![目標](../images/Profile_Target.png)

**血糖**目標根據你的個人偏好和需求進行設置。例如，如果你擔心夜間低血糖，可以將目標稍微提高到晚上 9 點到早上 7 點的 117 mg/dL (6.5 mmol/L)。如果你希望在早餐前有充足的胰島素儲備，你可以將早上 7 點到 8 點的目標設定為較低的 81 mg/dL（4.5 mmol/L）。

在 [開環](#KeyAapsFeatures-OpenLoop) 時，特別是在推進 [前幾個目標](../SettingUpAaps/CompletingTheObjectives.md) 的過程中，使用較寬的目標範圍是個不錯的選擇，有助於你了解 **AAPS** 的行為並調整你的 **設定檔**。<br/> 在 [閉環](#KeyAapsFeatures-ClosedLoop) 時（自 **[目標 6](#objectives-objective6)** 開始），建議逐步縮小範圍，直到一天中的每個時段都只有單一目標（_低_ 目標 = _高_ 目標），以確保 **AAPS** 能及時對 **血糖** 波動做出反應。

(your-aaps-profile-basal-rates)=

## 基礎率

### 描述

你的胰島素基礎率（單位/小時）提供背景胰島素，在沒有食物或運動的情況下保持血糖穩定。

胰島素幫浦每幾分鐘會輸送少量速效胰島素，以防止肝臟釋放過多的葡萄糖，並將葡萄糖輸送到體細胞中。基礎胰島素通常占你每日總劑量（TDD）的 40-50%，取決於你的飲食，並且通常遵循日夜節律，在 24 小時內有一個高峰和一個低谷。有關更多資訊，Gary Scheiner 所著的[“像胰臟一樣思考”](https://amzn.eu/d/iVU0RGe)第 6 章非常有用。

Most type 1 diabetes educators (and people with type 1 diabetes!) agree that you should work on getting your basal rates correct, before attempting to optimize your ISF and ICR.

### 影響

精準的基礎率能讓你在醒來時保持血糖在範圍內，並在一天中可以提前或延後進餐，而不會引起血糖過高或過低。

基礎率過高可能會導致低血糖。反之亦然。

**AAPS** 以預設基礎率作為「基準」。如果基礎率過高，“零臨時基礎率”將計為比實際更大的負 IOB。這會導致**AAPS**進行比應有的更多後續修正，以最終將 IOB 變為零。

因此，基礎率過高將導致低**血糖**，不僅是依據預設基礎率，還會在幾個小時後因為**AAPS**修正至目標。

相反地，基礎率過低會導致高血糖，並無法將水平下調至目標。

### 如何設定

下面的**圖示**顯示了如何在**AAPS** 設定檔中設定基礎率的範例。

![基礎率](../images/Profile_BasalRates.png)

正確設定你的基礎率需要透過反覆試驗，並且應在與你的糖尿病團隊的諮詢下進行。

有些基礎率測試方法通常是在 24 小時期間進行<u>間歇性</u> 斷食，同時觀察你的基礎率與胰島素需求。雖然你需要測試全天的基礎率，但不建議連續禁食24小時。因為身體會啟動機制如激素來進行補償。 A recommended way is to fast over 3 different days for a period of 8 hours.

建議的方法是暫停循環（為了安全，你可以將 AAPS 設為 [**LGS**](#KeyAapsFeatures-LGS) 以避免低血糖，就像達成 [目標 6](#objectives-objective6) 時所做的那樣），這會回復到你的預設基礎率。觀察你的**血糖**如何變化：如果它下降，則基礎率過高。反之亦然。<br/> 另一種替代方法（ might be more tricky）是在循環運行的情況下，查看**IOB**如何變化。如果**IOB**是負的，則你的基礎率過高。反之亦然。請注意，這種方法依賴於**ISF**來修正**血糖**，因此需要其他變數合理設置，這樣才能成功。<br/> 調整基礎率的另一種方法是觀察在夜間的循環行為，當所有 COB 已經降到為止。這種方法對於兒童特別有用，因為禁食較困難或胰島素需求經常變化。[來自 Tidepool 的 Saleh Adi 醫師](https://www.youtube.com/watch?v=-fpWnGRhLSo)提供了分析夜間血糖曲線的實用方法，以最佳化你的基礎率。

關於如何在封閉式循環中分析型態並調整你的基礎設定檔，請參閱 [此處](../GettingHelp/ProfileTuning.md)。

在根據基礎率測試結果採取行動時，應在預期升高/下降前 1 到 2 小時（視你的胰島素種類而定）先變更**設定檔**。根據需要重複測試，直到你對**基礎率**設定感到滿意。

(your-aaps-profile-basal-not-compatible)=
#### Message: "Basal rate is not compatible with the current pump"

Each pump has limits: a lowest and a highest basal rate it can deliver and, for some pumps (for example Dana, Accu-Chek Combo, Medtronic and Diaconn G8), basal rates that can only change on the full hour. **AAPS** checks your profile against the pump you use, **after** applying the percentage you choose.

If a basal rate is outside these limits, the **Activate** screen shows this message and the **Activate** button stays grey:

![Activate screen with the message "Basal rate is not compatible with the current pump"](../images/v4/Profiles/profile_activate_pump_incompatible.png)

For example, with a basal rate of 0.10 U/h in the night and a profile percentage of 35 %, **AAPS** would have to deliver 0.035 U/h. This is less than a Dana pump can deliver (0.04 U/h).

To solve it, either:

* choose another percentage: a **higher** one if a basal rate becomes too low, a **lower** one if a basal rate becomes too high, or
* [edit the profile](#your-aaps-profile-create-and-edit-profiles) and change the basal rate.

The profile editor only lets you start basal rates on a full hour. A basal rate starting at e.g. 06:30 can only come from an older profile, for example after you change to a pump that does not support it.

(your-aaps-profile-insulin-sensitivity-factor)=

## 胰島素敏感度因子（ISF）

### 描述

胰島素敏感性係數（有時稱為修正係數）是衡量 1 單位胰島素會降低血糖的程度。

**以 mg/dL 單位計算：** 如果你的**ISF**為40，每單位胰島素將使你的血糖降低約40 mg/dL（例如，你的血糖將從140 mg/dL降至100 mg/dL）。

**以 mmol/L 單位計算：** 如果你的**ISF**為1.5，每單位胰島素將使你的血糖降低約1.5 mmol/L（例如，從8 mmol/L降至6.5 mmol/L）。

從這些例子中可以看出，_ISF_值越_小_，你對胰島素的敏感度就越低。 So if you reduce your ISF from 40 to 35 (mg/dL) or 1.5 to 1.3 (mmol/L), this is often called strengthening your **ISF**. Conversely, increasing the **ISF** value from 40 to 45 (mg/dL) or 1.5 to 1.8 mmol/L) is weakening your **ISF**.

### 影響

較**低/較強的ISF**（即40而不是50）意味著每單位胰島素對你的**血糖**的下降程度較少。這導致循環更為積極/強效，使用了**更多胰島素**進行修正。如果你的**ISF**過強（小值），可能導致血糖過低。

較**高/較弱的ISF**（即45而不是35）意味著每單位胰島素對你的血糖的降低程度較多。這將導致循環進行較不積極/較弱修正，使用**較少胰島素**。如果你的**ISF**過弱（大值），可能導致血糖過高。

**範例：**
* **血糖**為190 mg/dL（10.5 mmol/L），目標為100 mg/dL（5.6 mmol/L）。
* 因此，你希望進行的修正為`190 - 110 = 90 mg/dL`或`10.5 - 5.6 = 4.9 mmol/L`
* 如果`ISF = 30` -> `90 / 30 = 3`或`ISF = 1.63` -> `4.9 / 1.63 = 3`: 3單位胰島素
* 如果`ISF = 45` -> `90 / 45 = 2`或`ISF = 2.45` -> `4.9 / 2.45 = 2`: 2單位胰島素

一個過低的**ISF**（因此更積極，這不常見）可能導致「過度修正」，因為**AAPS**計算出使用者比實際所需的胰島素還需要更多來修正高的**血糖**。這可能導致血糖像「雲霄飛車」般的波動（特別是在未進食時），如下圖所示。在這種情況下，應該提高**ISF**值，以減少**AAPS**的積極程度。這將確保**AAPS**提供較小的修正劑量，避免對高**血糖**進行過度修正，導致血糖過低。

![ISF 過低](../images/isf.jpg)

相反，設置過高的**ISF**可能導致修正不足，意味著你的**血糖**仍然維持在目標之上——這在夜間特別明顯。

### 如何設定

請參見**下圖**，了解如何在**AAPS**設定檔中設置ISF值的示例。

![設定檔 ISF](../images/Profile_ISF.png)

確定你白天 ISF 的基本起點是基於你的每日總劑量（TDD），使用 1,700（94）規則。更多詳細內容見於 Gary Scheiner 所著的[“像胰臟一樣思考”](https://amzn.eu/d/iVU0RGe)第 7 章。

| 1700 (if measuring in mg/dL) or 94 (mmol/L)/ TDD = approx ISF.<br/><br/>Example: TDD = 40 U<br/>Approx ISF (mg/dL) = 1700/40 = 43<br/>Approx ISF (mmol/L) = 94/40 = 2.4 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                                                 |

假設你的基礎胰島素水平是正確的，你可以通過暫停循環，檢查**IOB**是否為零，然後服用幾片葡萄糖藥片以達到穩定的“高”水平來進行測試。

然後根據目前的 1/ISF 估算所需的胰島素量來達到目標血糖值。

請小心，這一值通常設置得過低。過低意味著 1 單位的胰島素會使血糖下降得比預期更快。

(your-aaps-profile-insulin-to-carbs-ratio)=

## 胰島素與碳水化合物的比例（ICR）

### 描述

**ICR**是衡量一單位胰島素可以覆蓋多少克碳水化合物的指標。

有些人也使用**I:C**作為對**ICR**的簡寫，或者談論碳水化合物比例：**CR**。

例如，1:10 的胰島素與碳水化合物比率表示你每攝入 10 克碳水化合物需要注射 1 單位的胰島素。一餐包含 25 克碳水化合物需要 2.5 單位的胰島素。

如果你的**ICR**較弱（數值較高），例如 1:20，你只需要 0.5U 的胰島素來覆蓋 10 克碳水化合物。一餐包含 25 克碳水化合物需要 25/20 = 1.25 單位的胰島素。

不同時段的**ICR**差異是很普遍的，這是由於荷爾蒙水平和身體活動。許多人發現在早餐時間他們的**ICR**最低/最強，因為他們通常對胰島素的抵抗力較高。例如，一位成年使用者的**ICR**在早餐時可能為 1:8，在午餐和晚餐時為 1:10，但這些模式並不適用於所有人，有些人在晚餐時間對胰島素的抵抗力較高，因此需要更強或更小的**ICR**。

> **注意：**
> 
> 在一些歐洲國家，曾使用麵包單位來確定需要多少胰島素來代謝食物。最初 1 麵包單位相當於 12 克碳水化合物，後來一些國家改為 10 克碳水化合物。
> 
> 在這種模式下，碳水化合物量是固定的，胰島素量是可變的。（“需要多少胰島素來覆蓋一個麵包單位？”）
> 
> 使用**ICR**時，胰島素的數量是固定的，而碳水化合物的數量則是可變的。（“一單位胰島素能覆蓋多少克碳水化合物？”）
> 
> 範例：
> 
> 麵包單位因子（BU = 12克碳水化合物）：2.4 U/BU -> 當你吃一個麵包單位時，你需要2.4單位的胰島素。
> 
> 每單位胰島素的 **ICR** 比例為：12g / 2.4U = 5.0 g/U -> 5.0g 碳水化合物可以用一單位的胰島素來覆蓋。
> 
> BU因子2.4 U / 12g   ===>   IC = 12g / 2.4 U = 5.0 g/U
> 
> 線上可找到轉換表，例如[此處](https://www.mylife-diabetescare.com/files/media/03_Documents/11_Software/FAS/SOF_FAS_App_KI-Verha%CC%88ltnis_MSTR-DE-AT-CH.pdf)。

### 影響

**較低/較強的ICR**意味著每單位能攝取的食物更少，即在固定的碳水化合物量下，你獲得的胰島素較多。這也叫做「比較積極」。如果你的IC過強，你會得到過多的胰島素，這可能導致血糖過低。

**較高/較弱的ICR** = 每單位能攝取的食物更多，即在固定的碳水化合物量下，你獲得的胰島素較少。這也叫做「比較保守」。如果你的IC過弱，你獲得的胰島素會少於所需，這可能導致血糖過高。

### 如何設定

下面的**圖示**顯示了一名使用者的**ICR**範例，以及如何在**AAPS Profile**中設置。 When entering these values, we enter the final part of the ratio, so an insulin-to-carb ratio of 1:3.5 is entered simply as “3.5”.

![設定檔 ICR](../images/Profile_ICR.png)

如果在用餐後消化完成且**IOB**返回為零時，你的**血糖**仍然高於用餐前的水平，那麼你的**ICR**可能過弱（_即數字過高，應該逐漸降低_）。相反地，如果你的**血糖**低於用餐前的水平，則表示**ICR**過強（_即數字過小，應該逐漸提高_）。

假設你的基礎率是正確的，你可以通過檢查**IOB**是否為零，並且在你的範圍內，吃著精確且已知的碳水化合物，然後根據當前的胰島素與碳水化合物比率攝取估計的胰島素量來進行測試。最好是在那個時段食用你通常吃的食物，並精確計算其碳水化合物的量。

## 與設定檔相關的常見問題

```{contents} Common questions related to the Profile
:depth: 1
:local: true
```

### 關於正確設置你的設定檔的重要性

**我為什麼需要正確設置我的個人設定？循環不是可以自動處理這些嗎？**

A hybrid closed loop _can_ attempt to make insulin delivery adjustments to minimize poor glycemic control that results from having incorrect **Profile** values. 它可以這樣做，例如如果你將要低血糖，它會暫停胰島素的輸送。然而，如果你的**設定檔**設定已盡可能接近你身體的需求，你可以實現更好的血糖控制。這是**AAPS**使用分階目標從開放式循環推進到混合閉環的原因之一。此外，還會有需要打開循環的時候（傳感器暖機、傳感器故障_等_），有時發生在半夜，你希望在這些情況下設定是正確的。

如果你是在使用其他開放或封閉循環幫浦系統後開始使用**AAPS**，你將已經對應該使用的基礎率（**BR**）、胰島素敏感度因子（**ISF**）和胰島素與碳水化合物比率（**ICR**）有相當合理的了解。

如果你是從注射（MDI）轉到**AAPS**，那麼最好先了解如何從 MDI 轉移到幫浦，並在與你的糖尿病團隊諮詢後仔細規劃並進行轉換。["胰島素輸注"](https://amzn.eu/d/iaCsFa2)由 John Walsh 和 Ruth Roberts 編寫的書籍，及[“像胰臟一樣思考”](https://amzn.eu/d/iVU0RGe)由 Gary Scheiner 編寫的書籍都是非常有用的參考資料。

### 什麼原因導致閉環系統中的餐後高峰？
首先，檢查你的基礎率，並進行無碳水化合物的基礎率測試。如果這是正確的，並且你的**血糖**在碳水化合物完全吸收後下降到目標範圍，請嘗試在用餐前某段時間在**AAPS**內設置“即將用餐”的臨時目標，或者與你的內分泌科醫師討論合適的預注射時間。 <br/> 如果你的**血糖**在用餐後過高，並且在碳水化合物完全吸收後仍然過高，考慮與你的內分泌科醫師一起降低你的**ICR**。如果你的**血糖**在**COB**期間過高，在碳水化合物完全吸收後又過低，請考慮與你的內分泌科醫師一起提高你的**ICR**以及合適的預注射時間。

### 我現在的血糖很高，循環無法幫我降下來。
導致 **AAPS** 無法提供足夠胰島素的可能原因有：
* **ISF** 可能不夠強。
* Basal rate might not be strong enough
* 安全設定可能啟動，例如 **maxIOB**。或者此時 **SMB** 被停用，這取決於你的設定。
* 自動化已經設置並覆蓋了 **AAPS**。

See also [Tweaking the AAPS Profile](../GettingHelp/ProfileTuning.md).

### 我有負的 IOB，這是個問題嗎？
負的 **IOB** 意味著你體內的絕對胰島素量（基礎 + 注射）少於基礎胰島素量。這會導致 **AAPS** 一旦血糖開始上升，就會發送更多的胰島素，因為它認為胰島素不足，這可能會導致後來的血糖偏低。

以下是造成負 IOB 的一些原因，以及應採取的行動：
* 基礎胰島素過強：調整你的 **設定檔**。
* 上一次餐點注射過多：調整你的 **設定檔** 或檢查你是否在正確的時間進行注射。
* DIA set too short on your insulin type, resulting in insulin stacking: tweak it in [Manage → Insulin settings](#Config-Builder-insulin-dia)
* 身體活動：下次考慮在活動期間使用較低的 [設定檔百分比](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) 來因應敏感度的提高。

## 管理你的設定檔

```{contents} Operations that you can perform on your **Profiles** in **AAPS**
:depth: 1
:local: true
```
(your-aaps-profile-create-and-edit-profiles)=
### 創建和編輯設定檔

In **AAPS** v4 your profiles live on the **Manage** screen (bottom navigation) → **Profile**, shown as a swipeable card carousel with an action bar (**➕ Add**, **✏️ Edit**, **⧉ Clone**, **🗑️ Delete**, **▶ Activate**). For managing and activating a profile, see [Managing and activating profiles](#ProfileSwitch-manage-v4). Coming from **AAPS** v3, where profiles had their own tab? See [What changed in AAPS v4](#v4changes-manage).

Tapping **✏️ Edit** opens the editor. Set the profile **name** and **units**, then fill in the four schedules using the tabs:

- **IC** — insulin-to-carb ratio (g/U)
- **ISF** — insulin sensitivity factor
- **BAS** — basal rates
- **TARG** — target range

![The profile editor — IC / ISF / BAS / TARG tabs](../images/setup-wizard/Wizard-Profile-IC.png)

Each schedule is a list of **time blocks**: add a block, set its start time and value, then **Save**.

If you make any changes to your **Profile**, make sure you are editing the correct **Profile**: the card of the profile in use is marked **ACTIVE**, but the card selected on screen may be another one.

(your-aaps-profile-profile-from-scratch-for-a-kid)=
### 為孩子從零開始建立一個設定檔

The [Profile Helper](#aaps-screens-profile-helper) (menu ☰ → **Profile helper**) may help you to create a profile for a child (up to 18 years).

**重要說明：**

**設定檔助手主要在幫助你為孩子找到初始設定檔。儘管該助手基於兩家不同醫院的資料集，但在使用新設定檔前，請務必與你的醫療團隊討論。**

設定檔助手提供來自兩家不同醫院的資料集，幫助你為 18 歲以下的孩子找到初始設定檔。

![設定檔助手兒童 1](../images/ProfileHelperKids1.png)

1. Make sure you are on the **Profile 1** tab.
2. 在 **設定檔類型** 中，請確保選擇「預設設定檔」。
3. 根據輸入的孩子年齡及總胰島素劑量（TDD）**或**體重，調整預設設定檔（基於醫院資料集）。
4. Change to the **Profile 2** tab.
5. 按下 **設定檔類型** 並選擇「DPV 預設設定檔」。
6. Adjust DPV Default profile (based on another hospital data set) by entering kids age, TDD Total and percentage of basal. Note that the DPV data set provides **basal rates** only, so IC and ISF are shown as zero for this profile.
7. Open the **Comparation** tab. 將顯示兩個調整後的設定檔的比較（請參見下方截圖）。
8. If you want to start tweaking your profile based on one of these suggestions, use the **Clone** button at the bottom of the comparison.

![設定檔助手兒童 2](../images/ProfileHelperKids2.png)

### 切換設定檔

請參見 [切換設定檔與設定檔百分比](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)。

(your-aaps-profile-clone-profile-switch)=
### 將設定檔切換複製到新的設定檔

![設定檔切換](../images/TreatmentsView4.png)

The [Treatments history](#aaps-screens-treatments) shows all past **Profile Switches**. When going to the **Profile switch** tab, you can use a past **Profile Switch** as a base to create a new **Profile**. 在這種情況下，時差和百分比將應用於新的本地設定檔。 Use the **Clone** button shown on line **2**.

You can now go to the [Profile screen](#your-aaps-profile-create-and-edit-profiles) (**Manage → Profile**) to edit the newly created Profile.

(YourAapsProfile_Profile-backup)=
### 設定檔備份

作為你循環系統的核心設定，你的 **設定檔** 非常敏感，這是你不想遺失的東西。

* 你的 **設定檔** 儲存在 **AAPS** 數據庫中。
* When **NSClientV3** is set up (see [Synchronization](#SetupWizard-synchronization-with-the-reporting-server-and-more)), your **Profiles** are also uploaded to Nightscout automatically.
* 它們也是[匯出設定](../Maintenance/ExportImportSettings.md)的一部分。因此，確保有一個安全的備份。

### 從 Nightscout 編輯個人設定

If enabled, **Profile** changes made directly in Nightscout can be received in **AAPS**. The setting is called "**Receive profile store from NS**" and is part of the **Nightscout data acceptance** options (accepting data from Nightscout is turned off by default, see the [Client control step of the Setup Wizard](../SettingUpAaps/SetupWizard.md)); you can find it quickly with the **search bar** on the main screen. While client control is on, the setting is hidden and **AAPS** takes no profile changes from Nightscout ([hardened mode](#client-master-control-hardened-mode)); edit the profile on a paired client instead, or load it once with **Full sync**.

這在對更廣泛的 **設定檔** 進行重大更改之前可能會很有幫助。透過網頁介面輸入這些設定會更加方便，例如，手動從電子表格複製資料。

不過，為此重要的是在 Nightscout 編輯器中複製整個 **數據庫記錄**，其中包含多個設定檔（見下方截圖中的藍色箭頭）。新的資料庫記錄將標示當前日期。保存後，更改/新增的 **設定檔** 可以通過常規的 [設定檔切換](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) 在 **AAPS** 中啟用。

![複製資料庫紀錄](../images/Nightscout_Profile_Editor.PNG)

(your-aaps-profile-compare-profiles)=
### 比較兩個設定檔

You can also use the [Profile Helper](#aaps-screens-profile-helper) (menu ☰ → **Profile helper**) to compare two different profiles or profile switches (percentage of one of your profiles used in a [profile switch](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) before).

![設定檔助手 1](../images/ProfileHelper1.png)

1. Make sure you are on the **Profile 1** tab.
2. 在 **設定檔類型** 中，選擇「可用設定檔」，以在所有儲存的 **設定檔** 之間進行選擇。
3. 從中選擇你想要比較的 **設定檔**。
4. Change to the **Profile 2** tab.
5. In **Profile type**, select "Profile switch" to choose in the history of all your **Profile Switches**.
6. 選擇你希望比較的 **設定檔切換**。
7. Open the **Comparation** tab. Comparison of the two profiles will be displayed (see screenshot below).

![設定檔助手 2](../images/ProfileHelper2.png)
