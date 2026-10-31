(widgets)=
# Widgety na domovskej obrazovke

**AAPS** ponúka widgety, ktoré si môžete pridať na domovskú obrazovku telefónu. Widget zobrazuje vaše aktuálne údaje bez otvorenia aplikácie. Ťuknutím na widget otvoríte **AAPS**.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Dostupné widgety

K dispozícii je päť widgetov. Nájdete ich pod položkou **AAPS** v ponuke widgetov systému Android:

![Widgety AAPS v ponuke widgetov systému Android](../images/widgets/widget_picker_aaps.png)

| Widget                               | Predvolená veľkosť | Čo zobrazuje                                                                                                                                |
| ------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **AAPS widget**                      | 5 × 2              | Stavový blok hlavnej obrazovky: glykémia s trendom a rozdielom (delta), režim okruhu, profil, cieľ, citlivosť, IOB a COB.                   |
| **Kruhové zobrazenie glykémie AAPS** | 2 × 2              | Kruh glykémie z hlavnej obrazovky: prstenec vo farbe glykémie, oblúk trendu, rozdiel (delta), hodnota glykémie a čas od posledného merania. |
| **AAPS Malé**                        | 2 × 2              | Názov profilu, glykémia so šípkou trendu, čas od posledného merania, rozdiel (delta), IOB a COB.                                            |
| **AAPS GLY + IOB + COB (kompaktné)** | 4 × 1              | Jeden riadok s glykémiou a šípkou trendu, IOB a COB.                                                                                        |
| **Graf glykémie AAPS**               | 3 × 1              | Hodnota glykémie s malým grafom posledných meraní.                                                                                          |

Widget **AAPS widget**, **Kruhové zobrazenie glykémie** a widget **Malé** na domovskej obrazovke:

![AAPS widget, Kruhové zobrazenie glykémie a widget Malé na domovskej obrazovke](../images/widgets/home_widgets_full_circle_small.png)

**Kompaktný** widget a widget **Graf glykémie**:

![Kompaktný widget a widget Graf glykémie na domovskej obrazovke](../images/widgets/home_widgets_compact_graph.png)

Hodnoty glykémie majú rovnaké farby ako v **AAPS**: zelená v rozsahu, žltá nad rozsahom, červená pod rozsahom.

---

## Pridanie widgetu

Presný postup závisí od vášho telefónu a jeho spúšťača (launchera). Na väčšine telefónov:

1. Dlho stlačte prázdne miesto na domovskej obrazovke a vyberte **Miniaplikácie** (Widgets).

   ![Ponuka widgetov](../images/widgets/widget_picker_list.png)

2. V zozname otvorte **AAPS** a ťuknite na widget, ktorý chcete.
3. Stlačte **Pridať** (Add) (alebo widget potiahnite na miesto, kde ho chcete mať).

   ![Tlačidlo Pridať pod vybraným widgetom](../images/widgets/widget_picker_add_button.png)

Widget sa umiestni na domovskú obrazovku. Hneď po pridaní sa zobrazí s úchytmi: potiahnutím úchytu môžete **zmeniť veľkosť** widgetu, potiahnutím widgetu ho presuniete. Kruhové zobrazenie glykémie môže mať ľubovoľnú veľkosť.

![Práve pridaný widget s úchytmi na zmenu veľkosti a tlačidlom nastavení](../images/widgets/widget_glucose_circle_added.png)

Ak je stránka domovskej obrazovky plná, telefón umiestni widget na novú stránku.

---

## Konfigurácia widgetu

Ťuknite na tlačidlo s **ceruzkou**, ktoré sa na widgete zobrazí hneď po jeho pridaní. Neskôr widget dlho stlačte a úchyty aj ceruzka sa znova zobrazia.

Dialóg **Konfigurácia widgetu** má dve nastavenia:

- **Konfigurovať priehľadnosť** – ako veľmi je pozadie widgetu nepriehľadné. Pri nízkej hodnote presvitá tapeta.
- **Použiť čiernu farbu** – použije čierne pozadie namiesto predvoleného.

![Konfigurácia widgetu](../images/widgets/widget_configuration.png)

Každý widget má vlastnú konfiguráciu.

---

## Dobré vedieť

- Widget údaje iba **zobrazuje**. Z widgetu nemôžete podať bolus ani nič zmeniť.
- Widget obnovuje **AAPS**. Ak **AAPS** nebeží alebo ho Android obmedzuje na pozadí, widget môže zobrazovať staré údaje. Skontrolujte čas od posledného merania a uistite sa, že **AAPS** je vylúčený z [optimalizácie batérie](#SetupWizard-StoragePermission).
- Pri **AAPSClient**, **AAPSClient2** a **AAPSClient3** je pozadie widgetu žlté, modré alebo zelené, aby ste aplikácie od seba rozlíšili. Ak je farba zle viditeľná, zvýšte v konfigurácii widgetu nepriehľadnosť. Pozrite [O aplikáciách AAPSClient, AAPSClient2 a AAPSClient3](#remotecontrol-aapsclient-versions).
