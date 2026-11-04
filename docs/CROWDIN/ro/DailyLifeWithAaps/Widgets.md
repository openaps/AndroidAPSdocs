(widgets)=
# Home screen widgets

**AAPS** provides widgets that you can add to your phone's home screen. A widget shows your current data without opening the app. Tap a widget to open **AAPS**.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Widgeturi disponibile

Sunt disponibile cinci widgeturi. They are listed under **AAPS** in the Android widget picker:

![AAPS widgets in the Android widget picker](../images/widgets/widget_picker_aaps.png)

| Widget                                  | Dimensiune implicită | What it shows                                                                                                                                                                                                                                                                                          |
| --------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Widget AAPS**                         | 5 × 2                | Blocul de stare de pe ecranul principal: glicemia cu tendința și delta, modul buclei ca pictogramă lângă numele profilului, ținta, sensibilitatea (afișată ca pe ecranul principal), IOB și COB. Textele se micșorează pentru a se potrivi cu mărimea pe care o dați widgetului, în loc să fie tăiate. |
| **Cerc glicemie AAPS**                  | 2 × 2                | The BG circle of the main screen: a ring in the BG colour, the trend arc, the delta, the BG value and the time since the last reading.                                                                                                                                                                 |
| **AAPS mic**                            | 2 × 2                | Profile name, BG with trend arrow, time since the last reading, delta, IOB and COB.                                                                                                                                                                                                                    |
| **AAPS Glicemie + IOB + COB (compact)** | 4 × 1                | One line with BG and trend arrow, IOB and COB.                                                                                                                                                                                                                                                         |
| **Grafic glicemie AAPS**                | 3 × 1                | Valoarea glicemiei cu un grafic mic al citirilor recente.                                                                                                                                                                                                                                              |

The **AAPS widget**, the **glucose circle** and the **Small** widget on a home screen:

![AAPS widget, glucose circle and Small widget on the home screen](../images/widgets/home_widgets_full_circle_small.png)

The **compact** widget and the **BG graph** widget:

![Compact widget and BG graph widget on the home screen](../images/widgets/home_widgets_compact_graph.png)

BG values use the same colours as in **AAPS**: green in range, yellow above range, red below range.

---

## Adăugarea unui widget

The exact steps depend on your phone and its launcher. Pe majoritatea telefoanelor:

1. Long-press an empty area of the home screen and select **Widgets**.

   ![The widget picker](../images/widgets/widget_picker_list.png)

2. Open **AAPS** in the list and tap the widget you want.
3. Press **Add** (or drag the widget to the place you want).

   ![The Add button below the selected widget](../images/widgets/widget_picker_add_button.png)

The widget is placed on the home screen. Right after adding it, it is shown with handles: drag a handle to **resize** the widget, or drag the widget to move it. The glucose circle can be resized to any size.

![Un widget abia adăugat, cu mânerele de redimensionare și butonul de setări](../images/widgets/widget_glucose_circle_added.png)

If the home screen page is full, the phone puts the widget on a new page.

---

## Configurare widget

Tap the **pencil** button shown on the widget just after you added it. Later, long-press the widget to get the handles and the pencil back.

Dialogul **Configurare widget** are două setări:

- **Configurați opacitatea** — cât de opac este fundalul widgetului. A low value lets the wallpaper show through.
- **Use black color** — use a black background instead of the default one.

![Configurare widget](../images/widgets/widget_configuration.png)

Each widget has its own configuration.

---

## Bine de știut

- Un widget doar **afișează** date. You cannot bolus or change anything from a widget.
- Widgetul este actualizat de **AAPS**. If **AAPS** is not running, or if Android restricts it in the background, the widget may show old data. Check the time since the last reading, and make sure **AAPS** is excluded from [battery optimization](#SetupWizard-StoragePermission).
- With **AAPSClient**, **AAPSClient2** and **AAPSClient3**, the widget background is yellow, blue or green, so that you can tell the apps apart. Măriți opacitatea în configurarea widgetului dacă culoarea se vede greu. Vedeți [Despre AAPSClient, AAPSClient2 și AAPSClient3](#remotecontrol-aapsclient-versions).
