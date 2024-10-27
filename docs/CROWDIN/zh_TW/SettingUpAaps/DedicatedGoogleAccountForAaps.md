# 為 AAPS 建立專用的 Google 帳戶（可選）

一些 **AAPS** 用戶喜歡將他們的主電子郵件帳戶用於 **AAPS**。 或者，一些 **AAPS** 用戶（或他們的照護者）會設置專用的 **AAPS** 電子郵件帳戶 - 這是可選的，我們在下方介紹如何設置。

如果您不想設置專門用於 **AAPS** 的 Gmail 帳號，可以直接進入下一部分，[建立 AAPS](../SettingUpAaps/BuildingAaps.md)。

```{admonition} Advantages of a dedicated Google account for AAPS
:class: dropdown

- 專用的 Google 雲端空間意味著你不必擔心填滿你的個人 Google 雲端儲存限制，**匯出偏好**不會佔用空間。
- 每個版本的 **AAPS**（以及支援應用程式如 xdrip+、BYODA 等）將存儲在一個獨立的地方，而與你的電腦硬體無關。如果你的 PC 或手機被盜/遺失/損壞，你仍然可以訪問。
- 透過統一設置，將使類似的資料夾結構之下的使用者能方便線上支援。
- 根據設置（如下所示），你將擁有一個作為別名的獨立身份，可以在社區內進行溝通，能夠保護你的隱私。
- 患有 1 型糖尿病的孩子能夠保留他們的「日常」電子郵件帳號，同時使用 **AAPS** 和需要成年帳號的相關功能。
- Gmail 允許你在同一個手機號碼下註冊最多 4 個帳號。
```

## 如何為AAPS設置專用的Google帳號

(⌛大約10分鐘)

![](../images/Building-the-App/building_0001.png)

需求：

- 你擁有一台Windows電腦（Windows 10或更新版本）和一部Android手機（Android 9或更新版本），這些設備將運作 **AAPS** 應用程式。 這些設備都已安裝最新的安全更新，具備網際網路連線和管理員權限，因為某些步驟需要下載和安裝程式。
- Android手機已經設置了你的個人“日常”電子郵件地址，例如Gmail帳號。

```{admonition} Things to consider when setting up your new account
:class: dropdown
- 你可以使用與你的名字不同的名稱，例如 t1dsuperstar，與帳號相關，以保持隱私。然後，你可以在 **AAPS** 公開論壇中使用他，同時保持自己的身份私密。由於 Google 需要恢復電子郵件和手機號碼，仍然可以追蹤。
- 新的 **AAPS** 帳號將使用與你“_日常_”的帳號相同的手機號碼進行驗證。他將使用「日常」電子郵件地址進行驗證；
- 我們將設置電子郵件轉發，這樣發送至新的專用 AAPS 帳號的任何電子郵件將轉發至主要帳號（因此無需檢查兩個不同的郵箱）；
- 為你的 _日常_ Gmail 帳號和 AAPS 專用 Gmail 帳號使用不同的密碼
- 如果你為一個 Gmail 帳號使用 Google 的「雙步驟驗證」（也稱為多因子）身份驗證，那麼你也應該為兩個 Gmail 帳號設置他。
- 如果你打算使用 Google 的「密碼金鑰」，請確保你註冊多個設備。這樣你就不會將自己鎖在外面。僅在其他人無法訪問的設備上進行登錄（例如不在有共用帳號的 PC 上，其他人可以解鎖的情況）。
```



```{admonition} Video Walkthrough! 
:class: Note
點擊[這裡](<https://drive.google.com/file/d/1dMZTIolO-kd2eB0soP7boEVtHeCDEQBF/view?usp=drive_link>)觀看如何設置專用Google帳號的影片指南。
```

影片中概述的步驟如下：

在此示例中：

- 你現有的“_日常_”Google帳號為<donald.muck42@gmail.com> ；![](../images/Building-the-App/building_0002.png)
- 你的新“_AAPS_”Gmail帳號將是：<donald.muck42.aaps@gmail.com>；![](../images/Building-the-App/building_0003.png)

#### 前往<https://account.google.com>

如果你已經登錄Google，這將把你導向你的“日常” **我的帳戶** 頁面。
(1) 點擊頁面右上角的個人資料圖片（在此示例中，一個簡單的![](../images/Building-the-App/building_0002.png)
(2) 選擇“_新增另一個帳號_”。

![](../images/Building-the-App/building_0005.png)

#### 輸入你的新專用帳號資訊：

- 輸入新帳號：
- 建立帳號
- 供我個人使用。

#### 輸入你的個人資料：

- 輸入名字
- 姓氏
- 出生日期（需要是成年人年齡）

#### 選擇你的新電子郵件地址和密碼

此示例將“.AAPS”附加到Donald Muck的現有帳號...
設置密碼

#### 輸入一個可以接收SMS驗證的電話號碼

Gmail現在將向你發送一個唯一的驗證碼。

#### 輸入恢復電子郵件地址

在此情況下，他將是你的現有“_日常_”電子郵件…

#### 完成帳號設置

Gmail將顯示帳號名稱。 他將要求你接受Gmail的條款與條件，並確認你的個人化設置。

#### 自定義新個人資料顯示

此時，你應該在Gmail的我的帳戶頁面上，顯示你的新 **AAPS** 專用電子郵件帳號。 預設情況下，個人資料圖片會設置為你名字的第一個字母。 更改為一些獨特的圖片以避免混淆… 在此示例中，Donald.Muck.AAPS已經用 ![](../images/Building-the-App/building_0003.png) 取代了 ![](../images/Building-the-App/building_0002.png)

![](../images/Building-the-App/building_0007.png)\
![](../images/Building-the-App/building_0008.png)

#### 在兩個視窗中打開Gmail網站來配置新帳號

為了避免需要監控一個獨立的電子郵件帳號，將所有來自新 **AAPS** 專用帳號的郵件轉發到你的日常帳號 \
這部分可能有點混亂，因為你需要在兩個帳號之間切換。 為了使操作更簡單，將兩個獨立的瀏覽器視窗堆疊在一起：

1. 將你現有的瀏覽器移到螢幕頂部，並調整其大小，使其只佔據螢幕頂部的一半…
2. 右鍵點擊你在任務欄上的瀏覽器圖示
3. 從選單中選擇“新視窗”... 然後調整該視窗，使其只佔據螢幕的下半部分。

在每個瀏覽器視窗中打開<https://gmail.com>。 確保你的個人帳號位於頂部，而新專用的 **AAPS** 帳號位於底部，並且透過右上角的個人資料圖片可以輕鬆識別。 （如果需要，你可以隨時透過點擊個人資料圖片切換帳號並選擇正確的帳號）。

![](../images/Building-the-App/building_0009.png)

你的Gmail首頁應該如下所示：\
![](../images/Building-the-App/building_0010.png)

#### 在新Gmail帳號（底部視窗）中，打開Gmail設置…

- 點擊個人資料圖片左邊的齒輪
- 然後選擇“**查看所有設定**”

![](../images/Building-the-App/building_0011.png)

#### 設置轉發…

- 點擊“轉發和POP/IMAP”設置標籤
- 點擊“新增轉發地址”
- 添加你的“日常”電子郵件地址
- Gmail將向你的“日常”電子郵件地址發送驗證碼。
- 你需要切換回你的日常帳號，並點擊連結來驗證你接受轉發（或者從Gmail的驗證電子郵件中獲取驗證碼，然後將其粘貼到你的“新AAPS專用”Gmail視窗中）。

這樣雖然需要在兩個視窗之間來回切換，但當你檢查“日常”帳號的郵件時，也會看到從AAPS專用帳號轉發的郵件，例如Gmail警報。

![](../images/Building-the-App/building_0012.png)

#### 驗證轉發的電子郵件地址

- 在“日常”Gmail（頂部視窗）中，你將收到“Gmail轉發確認”郵件。
- 打開郵件並“點擊連結確認請求”

#### 將轉發的郵件存檔在新專用的Gmail帳號中（底部視窗）

<!---->

1. 重新整理底部視窗
2. 勾選“轉發收到的電子郵件”
3. 並存檔Gmail的副本（以保持你的新專用信箱整潔）
4. 滾動到頁面的最底部以儲存你的更改\
   ![](../images/Building-the-App/building_0013.png)

![](../images/Building-the-App/building_0014.png)

恭喜！ 現在，你已經建立了一個專用於AAPS的Google帳號。 下一步是[建立 AAPS 應用](../SettingUpAaps/BuildingAaps.md)。
