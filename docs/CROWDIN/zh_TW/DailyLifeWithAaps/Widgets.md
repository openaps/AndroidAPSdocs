(widgets)=
# 主畫面小工具

**AAPS** 提供可新增至手機主畫面的小工具。不開啟應用程式也能透過小工具查看目前資料。點選小工具即可開啟 **AAPS**。

```{contents} Table of contents
:depth: 2
:local: true
```

---

## 可用的小工具

共有五種小工具。這些小工具會列在 Android 小工具選擇器的 **AAPS** 項目下：

![Android 小工具選擇器中的 AAPS 小工具](../images/widgets/widget_picker_aaps.png)

| 小工具                          | 預設大小  | 顯示內容                                                                                                                                                                                                                                                       |
| ---------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **AAPS 小工具**                 | 5 × 2 | The status block of the main screen: BG with trend and delta, the loop mode as an icon beside the profile name, target, sensitivity (shown as on the main screen), IOB and COB. The texts shrink to fit the size you give the widget instead of being cut. |
| **AAPS 血糖圓圈**                | 2 × 2 | 主畫面的血糖圓圈：血糖顏色的圓環、趨勢弧線、變化量、血糖值，以及距離上次讀取值的時間。                                                                                                                                                                                                                |
| **AAPS 小型**                  | 2 × 2 | 設定檔名稱、血糖及趨勢箭頭、距離上次讀取值的時間、變化量、IOB 和 COB。                                                                                                                                                                                                                    |
| **AAPS 血糖 + IOB + COB （精簡）** | 4 × 1 | 單行顯示血糖及趨勢箭頭、IOB 和 COB。                                                                                                                                                                                                                                     |
| **AAPS 血糖圖表**                | 3 × 1 | 血糖值及近期讀取值的小型圖表。                                                                                                                                                                                                                                            |

主畫面上的 **AAPS 小工具**、**血糖圓圈**和**小型**小工具：

![主畫面上的 AAPS 小工具、血糖圓圈和小型小工具](../images/widgets/home_widgets_full_circle_small.png)

**精簡**小工具和**血糖圖表**小工具：

![主畫面上的精簡小工具和血糖圖表小工具](../images/widgets/home_widgets_compact_graph.png)

血糖值使用與 **AAPS** 相同的顏色：範圍內為綠色、高於範圍為黃色、低於範圍為紅色。

---

## 新增小工具

實際操作步驟會因手機和使用的啟動器而異。大多數手機：

1. 長按主畫面的空白處，然後選取 **小工具**。

   ![小工具選擇器](../images/widgets/widget_picker_list.png)

2. 在清單中開啟 **AAPS**，然後點選您要的小工具。
3. 按下 **新增**（或將小工具拖曳至您想放置的位置）。

   ![所選小工具下方的「新增」按鈕](../images/widgets/widget_picker_add_button.png)

小工具會放置在主畫面上。新增後，小工具會立即顯示調整控制點：拖曳控制點可**調整大小**，也可以拖曳小工具來移動位置。血糖圓圈可以調整為任何大小。

![剛新增的小工具，顯示調整大小控制點和設定按鈕](../images/widgets/widget_glucose_circle_added.png)

如果主畫面頁面已滿，手機會將小工具放到新頁面。

---

## 小工具設定

點選剛新增的小工具上顯示的**鉛筆**按鈕。之後，長按小工具即可再次顯示控制點和鉛筆按鈕。

**小工具設定**對話方塊有兩個設定：

- **設定不透明度** — 設定小工具背景的不透明程度。數值較低時，可以透出桌布。
- **使用黑色** — 使用黑色背景，而非預設背景。

![小工具設定](../images/widgets/widget_configuration.png)

每個小工具都有自己的設定。

---

## 注意事項

- 小工具只會**顯示**資料。您無法透過小工具進行注射或變更任何設定。
- 小工具會由 **AAPS** 重新整理。如果 **AAPS** 未執行，或 Android 限制其在背景執行，小工具可能會顯示舊資料。請確認距離上次讀取值的時間，並確定 **AAPS** 未受[電池最佳化](#SetupWizard-StoragePermission)限制。
- 使用 **AAPSClient**、**AAPSClient2** 和 **AAPSClient3** 時，小工具背景會分別呈現黃色、藍色或綠色，方便您區分這些應用程式。如果顏色不易辨識，請在小工具設定中調高不透明度。請參閱 [關於 AAPSClient、AAPSClient2 和 AAPSClient3](#remotecontrol-aapsclient-versions)。
