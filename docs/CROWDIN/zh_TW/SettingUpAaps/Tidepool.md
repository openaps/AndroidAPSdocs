# Tidepool

Tidepool is a third party tool that collects data regarding BG, insulin and carbs (and the notes you add to your treatments) and can be used to analyze and share this data with your clinical team. 自 **AAPS** 3.2 版起，它可作為 Nightscout 的替代方案，用於完成目標 1 的部分要求。他也可以與 Nightscout 結合使用，作為一個替代的報告平台，與臨床環境緊密整合。這對於使用 AAPS 的兒童來說可能是一個理想選擇，他們希望擁有 Nightscout 的遠端監控和控制功能，但希望使用他們的臨床團隊更熟悉的報告平台。

It is important to understand that Tidepool is for reporting only. 他不是一個實時的追蹤應用程式。 If you need to have followers apart from the main AAPS phone, you must set up Nightscout as well.

注意：Tidepool 組織已獲得 FDA 核准，將 iOS Loop 產品推向市場。這與他們的資料報告平台或 AAPS 無關。


## Step 1 - Set up a Tidepool account

- Navigate to [tidepool.org](https://www.tidepool.org/)

- Select “Personal Sign Up” or “Sign Up”

- Create and document an email and password

- Select “Personal Account” and click “Continue”

- Complete the patient information section and accept the terms of use

- Verify your email address via the instructions received to your email


## Step 2 - Connect AAPS to Tidepool

- Open the **menu** (☰) in the top-left corner of the main screen and select "**Configuration**"

- Open the "**Communication**" category and enable "**Tidepool**":

![Enable Tidepool](../images/v4/Tidepool/tidepool_enable.png)

- Tap "**Open plugin**" underneath Tidepool, then tap the **Login** icon (an arrow going into a door) in the top-right corner

- A browser window opens on the Tidepool login page. Log in with the email address and password you created in Step 1 above:

![Tidepool login page](../images/v4/Tidepool/tidepool_login.png)

- After a successful login the browser closes and the Tidepool screen shows the status "**Connected**"; the log below documents the data uploads. If the login fails, confirm your credentials are correct and that you have verified your email address with Tidepool.

![Tidepool connected](../images/v4/Tidepool/tidepool_status.png)

- In the "**Settings**" of the Tidepool plugin, open "**Connection settings**". By default "**Use Nightscout connection settings**" is on, so Tidepool uploads under the same conditions you set for Nightscout. Turn it off if you want separate conditions for Tidepool, for example to upload to Tidepool only on Wi-Fi and while charging, while Nightscout also uses mobile data.

![Connection settings with Use Nightscout connection settings on](../images/v4/Tidepool/tidepool_connection_settings.png) ![Separate connection settings for Tidepool](../images/v4/Tidepool/tidepool_connection_settings_separate.png)

如需更多關於如何在 Tidepool 上傳資料後使用你的資料的協助，請進入：[https://www.tidepool.org/viewing-your-data](https://www.tidepool.org/viewing-your-data)

(tidepool-menu)=
## The Tidepool buttons

In the top-right corner of the Tidepool screen:

- The **Login** or **Logout** icon — connect to or disconnect from your Tidepool account. Only one of them is shown: **Login** while you are logged out, **Logout** while you are logged in. **AAPS** asks you to confirm before it logs you out.
- The gear icon — the Tidepool settings.

The buttons at the bottom of the Tidepool screen:

- "**Upload now**" — upload new data straight away instead of waiting for the next automatic upload.
- "**Full synchronization**" — upload all data stored in **AAPS** again.
- "**Purge all data**" — delete **all** data that **AAPS** has uploaded to your Tidepool account. This cannot be undone. Use it only to remove wrong or duplicate data, then run "**Full synchronization**" to upload your data again.
- "**Clear log**" — empty the log shown on the Tidepool screen.

![The Tidepool screen and its buttons](../images/v4/Tidepool/tidepool_menu.png)

In Tidepool, the data uploaded by **AAPS** 4 is shown under the device name **AAPS**. See [What changed in AAPS v4](#v4changes-tidepool) if you used Tidepool with an older version. 
