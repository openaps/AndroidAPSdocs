(widgets)=
# Widgety na domovské obrazovce

**AAPS** nabízí widgety, které si můžete přidat na domovskou obrazovku telefonu. Widget ukazuje vaše aktuální data, aniž byste museli otevřít aplikaci. Klepnutím na widget otevřete **AAPS**.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Dostupné widgety

K dispozici je pět widgetů. V nabídce widgetů Androidu jsou uvedené pod **AAPS**:

![Widgety AAPS v nabídce widgetů Androidu](../images/widgets/widget_picker_aaps.png)

| Widget                               | Výchozí velikost | Co ukazuje                                                                                                                                                                                                                                                 |
| ------------------------------------ | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Widget AAPS**                      | 5 × 2            | The status block of the main screen: BG with trend and delta, the loop mode as an icon beside the profile name, target, sensitivity (shown as on the main screen), IOB and COB. The texts shrink to fit the size you give the widget instead of being cut. |
| **Kruh glykémie AAPS**               | 2 × 2            | Kruh glykémie z hlavní obrazovky: prstenec v barvě glykémie, oblouk trendu, rozdíl, hodnota glykémie a čas od posledního měření.                                                                                                                           |
| **AAPS malé**                        | 2 × 2            | Název profilu, glykémie se šipkou trendu, čas od posledního měření, rozdíl, IOB a COB.                                                                                                                                                                     |
| **AAPS gly + IOB + COB (kompaktní)** | 4 × 1            | Jeden řádek s glykémií a šipkou trendu, IOB a COB.                                                                                                                                                                                                         |
| **Graf glykémie AAPS**               | 3 × 1            | Hodnota glykémie s malým grafem posledních měření.                                                                                                                                                                                                         |

**Widget AAPS**, **kruh glykémie** a widget **AAPS malé** na domovské obrazovce:

![Widget AAPS, kruh glykémie a widget AAPS malé na domovské obrazovce](../images/widgets/home_widgets_full_circle_small.png)

Widget **kompaktní** a widget **graf glykémie**:

![Kompaktní widget a widget graf glykémie na domovské obrazovce](../images/widgets/home_widgets_compact_graph.png)

Hodnoty glykémie mají stejné barvy jako v **AAPS**: zelená v rozsahu, žlutá nad rozsahem, červená pod rozsahem.

---

## Přidání widgetu

Přesný postup závisí na vašem telefonu a jeho spouštěči (launcheru). Na většině telefonů:

1. Dlouze stiskněte prázdné místo na domovské obrazovce a vyberte **Widgety**.

   ![Nabídka widgetů](../images/widgets/widget_picker_list.png)

2. V seznamu otevřete **AAPS** a klepněte na požadovaný widget.
3. Stiskněte **Přidat** (nebo widget přetáhněte na požadované místo).

   ![Tlačítko Přidat pod vybraným widgetem](../images/widgets/widget_picker_add_button.png)

Widget se umístí na domovskou obrazovku. Hned po přidání se zobrazí s úchyty: tažením úchytu můžete **změnit velikost** widgetu, tažením widgetu ho přesunete. Velikost kruhu glykémie lze změnit na libovolnou.

![Právě přidaný widget s úchyty pro změnu velikosti a tlačítkem nastavení](../images/widgets/widget_glucose_circle_added.png)

Pokud je stránka domovské obrazovky plná, telefon umístí widget na novou stránku.

---

## Konfigurace widgetu

Klepněte na tlačítko s **tužkou**, které se na widgetu zobrazí hned po jeho přidání. Později widget dlouze stiskněte a úchyty i tužka se znovu objeví.

Dialog **Konfigurace widgetu** má dvě nastavení:

- **Konfigurovat průhlednost** – jak moc je pozadí widgetu neprůhledné. Při nízké hodnotě prosvítá tapeta.
- **Použít černou barvu** – použije černé pozadí místo výchozího.

![Konfigurace widgetu](../images/widgets/widget_configuration.png)

Každý widget má vlastní konfiguraci.

---

## Dobré vědět

- Widget data jen **zobrazuje**. Z widgetu nemůžete dát bolus ani nic změnit.
- Widget obnovuje **AAPS**. Pokud **AAPS** neběží nebo ho Android na pozadí omezuje, widget může ukazovat stará data. Zkontrolujte čas od posledního měření a ujistěte se, že je **AAPS** vyjmutý z [optimalizace baterie](#SetupWizard-StoragePermission).
- U **AAPSClient**, **AAPSClient2** a **AAPSClient3** je pozadí widgetu žluté, modré nebo zelené, abyste aplikace od sebe rozeznali. Pokud je barva špatně vidět, zvyšte v konfiguraci widgetu neprůhlednost. Viz [O AAPSClient, AAPSClient2 a AAPSClient3](#remotecontrol-aapsclient-versions).
