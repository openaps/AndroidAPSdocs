* * *

orphan: true

* * *

# 未來（可能）的幫浦驅動程式

這是一份目前市面上一些幫浦的清單，包含他們在任何閉環系統中的支援狀態，以及在 AAPS 中的狀態。 最後有一些關於幫浦成為“可閉環”的需求資訊。

## 可進行閉環的幫浦

### Ypsomed 幫浦 ([官網](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**閉環狀態：** 1 - 1.5 版（2018 年第二季）不是閉環候選幫浦。 儘管他們具備藍牙 (BT) 通訊功能，但通訊非常有限且為單向：幫浦 -> 應用程式。2022 年 6 月（在德國），公司推出了新版本，暱稱為 DOSE（1.6 版），允許透過他們的應用程式設置注射劑量和臨時基礎率 (TBR)。公司計劃實施自己的閉環方案已被取消，轉而與 CamAPS 合作（支援已經實施），並使用他們的閉環解決方案。 更多資訊請參閱此[頁面](https://www.mylife-diabetescare.com/en/loop-program.html)

**AAPS 硬體需求：**無。 他支援藍牙。

**評論：**DOSE 版幫浦具有非常強的加密，因此很可能 AAPS 在短期內（或永遠）不會支援此幫浦。 我們有一位開發者與 Ypsomed 合作，協助醫療試驗，因此他的驅動程式可能會被允許發布，但這只是小概率事件。 更多資訊請參閱我們在 Discord 的 “ypsopump-talk” 頻道。

### Kaleido ([官網](https://www.hellokaleido.com/))

**閉環狀態：** 目前尚未被任何閉環系統支援。 該幫浦是一個閉環候選者，但由於當時的協議未知，我認為這幫浦不會很快得到支援。

**AAPS 硬體需求：**可能沒有。 他支援藍牙。

### Equil（Aidex/GlucoRx/MicroTechMD 的幫浦）([官網](https://www.glucorx.ie/glucorx-equil/))

**閉環狀態：**是一個閉環候選者。

**AAPS 硬體需求：**無。 看起來他支援藍牙。

**評論：**一些人已經開始嘗試在 AAPS 中支援此幫浦，但這仍處於初步階段。 更多資訊請參閱我們在 Discord 的 “equil” 頻道。

### Accu-Chek Solo ([官網](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**閉環狀態：**是一個閉環候選者。

**AAPS 硬體需求：**無。 看起來他支援藍牙。

**評論：**有一些開發者正在研究解碼協議，但目前僅處於初步階段。

### Tandem: t:slim X2 ([官網](https://www.tandemdiabetes.com/))

**閉環狀態：** 尚不可閉環。

雖然該公司過去決定不允許外部設備控制其幫浦，但最近幾年形勢似乎發生了變化。 公司決定升級他們的 t:slim X2 幫浦，使其能夠透過 t:connect 應用程式進行遠端控制，這意味著我們可能有機會在未來透過 AAPS 控制幫浦。 計劃中的新幫浦韌體預計很快發布（今年或明年，在無管幫浦 t:sport 推出之前）。 目前還沒有具體的細節，尚不清楚 t:connect 能夠進行哪些操作（注射肯定可以，其他未知）。

**AAPS 硬體需求：**無。 看起來他支援藍牙。

### Tandem: t:Mobi、t:slim X3 和 t:Mobi 無管 ([官網](https://www.tandemdiabetes.com/about-us/pipeline))

**閉環狀態：** 這三款幫浦都將是閉環候選者。

他們計劃首先在 2022 年底或 2023 年推出 t:Mobi（以前稱為 t:sport）。 然後會在 2023 年推出 t:slim X3，之後推出 t:Mobi 無管。 t:Mobi 只能透過手機應用程式進行控制，而 X3 看起來會與 X2 相似，但會有一些新功能（如遠端更新韌體、透過手機應用程式進行遠端控制等）。

**AAPS 硬體需求：**無。 看起來他支援藍牙。

### Willcare 胰島素幫浦 ([官網](http://shinmyungmedi.com/en/))

**閉環狀態：** 目前尚未是閉環候選者，但他們的員工已與我們聯繫，表示有興趣將幫浦擴展為可閉環（目前我認為他只缺少設定/取得設定檔的指令）。

**AAPS 硬體需求：**無。 看起來他支援藍牙。

**評論：**由於公司對與 AAPS 整合感興趣，他們可能會自行實施該功能。

## 已停止銷售的幫浦（公司不再運營）

### Cellnovo 幫浦 ([參見 businesswire.com](https://www.businesswire.com/news/home/20190328005829/en/Cellnovo-Stops-Manufacturing-and-Commercial-Operations))

**閉環狀態：** 目前尚未被任何閉環系統支援。 該幫浦是一個閉環候選者，但由於當時的協議未知，我認為這幫浦不會很快得到支援。

**AAPS 硬體需求：**可能沒有。 他支援藍牙。

**產品說明：** 看起來公司決定退出幫浦業務。 你可以在這篇[文章](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)中查看更多資訊。

## 不可閉環的幫浦

### Animas Vibe

**閉環狀態：** 無法閉環。 無遠端控制功能。 **說明：** 此幫浦已停止銷售。 公司已退出幫浦業務（強生公司）。

### Animas Ping

**閉環狀態：** 無法閉環。 具有注射功能，但沒有 TBR 功能。 **說明：**Vibe 推出後，該幫浦停止銷售。

### Medtronic 藍牙

**評論：** 美敦力 [已撤回](https://www.tidepool.org/blog/tidepool-loop-partner-update-ace-pumps)。

## 幫浦成為可閉環的需求

**先決條件**

- 幫浦必須支援某種遠端控制。 （藍牙、無線電頻率等）
- 協議已被破解/紀錄等。

**最低要求**

- 設置臨時基礎率
- 取得狀態
- 取消臨時基礎率

**對於 oref1(SMB) 或注射：**

- 設置注射

**可選功能**

- 取消注射
- 取得基礎設定檔（幾乎是必要的）
- 設置基礎設定檔（可有可無）
- 讀取歷史紀錄 

**其他（不是必需但有很好）**

- 設置延長注射
- 取消延長注射
- 讀取歷史紀錄
- 讀取每日總劑量 (TDD)

### 其他幫浦支援

如果你有其他幫浦想查看狀態，請在 Discord 上聯繫我們。