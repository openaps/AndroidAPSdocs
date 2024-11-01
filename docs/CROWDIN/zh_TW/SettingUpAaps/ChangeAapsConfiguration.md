# 更改你的AAPS配置

After you have completed the **Setup Wizard** you don't need to run the entire Wizard again if you want to only change parts of the configuration.

有三種路徑可以更改不同的配置設置，你選擇哪一條路徑僅僅取決於方便，每條路徑都會通向相同的配置設置。

如下所示：

1. 組態建置工具，
1. 點擊右上角的三點選單並選擇“偏好設定”或
1. 點擊右上角的三點選單並選擇“外掛偏好設定”。

在這裡我們解釋哪個選項對每種情況最方便：

## 組態建置工具

The **config builder** is used if you want to **enable plugins** and their **visibility** in the top level menu. 如果他們已啟用，他們仍將運作，你可以決定是否希望他們在頂層選單中顯示。

Plugins which you have not enabled (_i.e._ disabled) plugins can not be made visible. For example, when you first start with **AAPS** on **objective 1**, you cannot yet use **automations**, so the **automations** plugin cannot be enabled and made visible in the top menu.

**Config builder** is the easiest way to further modify your configuration after you have used the **Setup Wizard**.

The documentation relating to the config builder is available [here](../SettingUpAaps/ConfigBuilder.md).

## 偏好設定

The preferences dialogue can be reached via the top right three dot menu on the **home screen** of AAPS. It gives you the possibility to change the configuration of **all enabled plugins at once**.

如果你不確定在哪裡尋找配置選項，這是一個不錯的選擇，但如果你知道自己只想更改一個特定外掛的配置，這可能有點繁瑣。

The documentation of the preferences is available [here](../SettingUpAaps/Preferences.md).


## 外掛偏好設定

The **plugin preferences** dialogue can be reached via the top right three dot menu on the home screen of AAPS. 它提供了修改目前螢幕上外掛組態的可能性。

This is a good route if you know that _e.g._ you _just_ want to change the configuration for BYODA. Then, you would select the tab "BYODA" on the top menu of **AAPS**, and then once you are on the BYODA page, in the top right, select the three dot menu and then the "plugin preferences" entry. 你將直接進入BYODA外掛的偏好設定對話框。

This is a "short cut" to the general preferences dialogue, the documentation of the preferences is available [here](../SettingUpAaps/Preferences.md).
