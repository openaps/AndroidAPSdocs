# Operation of AAPS via your Wear OS smartwatch

(Watchfaces-aaps-watchfaces)=

## Ciferníky AAPS

```{warning}
AAPS Watchfaces are available for Wear OS smartwatches with API level 28 to 33.
Wear OS 5 changes locked the watchfaces: only complications can be used.
```

There are several watchfaces to choose from that are included in the base build of the AAPS Wear APK. These watchfaces include average delta, IOB, currently active temp basal rate and basal profiles and a CGM readings graph.

Some available actions on the watchfaces are:

* Double tap on the BG to get to the AAPS menu
* Double tap on the BG graph to change the graph's time scale

## Configuration

Enable the Wear module in the [Config Builder](../SettingUpAaps/ConfigBuilder.md).

Use the Wear Preferences to define which variables should be considered when calculating bolus given though your watch (i.e. 15min trend, COB...).

If you want to bolus etc. from the watch then within "Wear settings" you need to enable "Controls from Watch".

![Wear settings](../images/ConfBuild_Wear.png)

Through Wear tab or hamburger menu (top left of screen, if tab is not displayed) you can

* Resend all data. Might be helpful if watch was not connected for some time, and you want to push the information to the watch.
* Open settings on your watch directly from your phone.

Ensure notifications from AAPS are not blocked on the watch. Confirmation of an action (e.g. bolus, tempt target) comes via a notification which you will need to swipe and tick.

## Vstup do hlavní nabídky AAPS

Chcete-li získat přístup k hlavní nabídce AAPS, máte následující možnosti:

* poklepejte na hodnotu glykémie
* vyberte ikonu AAPS v nabídce aplikací na hodinách
* klepněte na komplikaci AAPS (je-li nastavena tak, aby umožňovala vstup do nabídky)

## Nastavení (na hodinkách)

Chcete-li získat přístup k nastavení ciferníku, vstupte do hlavní nabídky AAPS na hodinkách, potáhněte prstem nahoru a vyberte možnost „Nastavení“.

Symbol plné hvězdy znamená, že možnost je povolená (**Zap**), symbol hvězdy bez výplně znamená, že možnost je zakázaná (**Vyp**):

![Nastavení zap/vyp](../images/Watchface_Settings_On_Off.png)

### Doplňkové parametry AAPS

* **Vibrovat při bolusu** (výchozí hodnota `Zap`):
* **Jednotky pro Akce** (výchozí hodnota `mg/dl`): jestliže je tato možnost **Zap**, jednotka pro akce je `mg/dl`, je-li možnost **Vyp**, jednotka je `mmol/l`. Používá se při nastavování dočasných cílů z hodinek.

(Watchfaces-watchface-settings)=

### Nastavení ciferníku

* **Zobrazovat datum** (výchozí hodnota `Vyp`): poznámka: datum není k dispozici na všech cifernících
* **Zobrazovat IOB** (výchozí hodnota `Zap`): Možnost zobrazit hodnotu IOB (podrobnější nastavení viz sekce Wear v nastavení AAPS na telefonu)
* **Zobrazovat COB** (výchozí hodnota `Zap`): Možnost zobrazit hodnotu COB
* **Zobrazovat Deltu** (výchozí hodnota `Zap`): Možnost zobrazit rozdíl glykémií za posledních 5 minut
* **Zobrazovat prům. Deltu** (výchozí hodnota `Zap`): Možnost zobrazit průměrný rozdíl glykémií za posledních 15 minut
* **Zobrazovat baterii telefonu** (výchozí hodnota `Zap`): Nabití baterie telefonu v %. Při poklesu pod 30 % se zobrazuje červeně.
* **Zobrazovat baterii Rigu** (výchozí hodnota `Vyp`): Baterie Rigu je souhrnný údaj vyjadřující stav baterie telefonu, pumpy a senzoru (obecně tu nejnižší z těchto 3 hodnot)
* **Zobrazovat bazály** (výchozí hodnota `Zap`): Možnost zobrazit aktuální bazální dávku (v U/h nebo v %, je-li aktivní TBR)
* **Zobrazovat stav smyčky** (výchozí hodnota `Zap`): Zobrazuje, kolik minut uběhlo od posledního spuštění smyčky (šipky kolem hodnoty se změní na červené, pokud uběhlo více než 15 min).
* **Zobrazovat glykémii** (výchozí hodnota `Zap`): Možnost zobrazit hodnotu glykémie
* **Zobrazovat trendovou šipku** (výchozí hodnota `Zap`): Možnost zobrazit šipku trendu glykémie
* **Zobrazovat stáří glykémie** (výchozí hodnota `Zap`): Zobrazuje, kolik minut oběhlo od posledního odečtu glykémie.
* **Tmavé pozadí** (výchozí hodnota `Zap`): Můžete přepnout z tmavého pozadí na bílé (kromě ciferníků Cockpit a Steampunk)
* **Zvýraznit bazály** (výchozí hodnota `Vyp`): Zlepšuje viditelnost bazálů a dočasných bazálních dávek
* **Skrýt oddělovač** (výchozí hodnota `Vyp`): Pro ciferníky AAPS, AAPSv2 a AAPS(Large), zobrazuje oddělovač s kontrastním pozadím (**Vyp**), nebo se stejnou barvou, jakou má pozadí (**Zap**)
* **Rozlišení grafu** (výchozí hodnota `3 hodiny`): V podnabídce můžete vybrat max. časové rozlišení grafu v rozmezí 1–5 hodin.

### Nastavení uživatelského rozhraní

* **Metoda zadávání**: Pomocí tohoto parametru můžete zvolit pozici tlačítek "+" a "-" při zadávání hodnot pro AAPS (dočasný cíl, inzulin, sacharidy...)

![Možnosti metod zadávání](../images/Watchface_InputDesign.png)

### Parametry konkrétních ciferníků

#### Ciferník Steampunk

* **Podrobnost Delty** (výchozí hodnota `Střední`)

![Steampunk_gauge](../images/Watchface_Steampunk_Gauge.png)

#### Ciferník Circle

* **Velká čísla** (výchozí hodnota `Vyp`): Zvětšená velikost textu kvůli lepší čitelnosti
* **Kruh historie** (výchozí hodnota `Vyp`): Grafické zobrazení historie glykémie pomocí šedých kruhů uvnitř zeleného hodinového kruhu
* **Světlý kruh historie** (výchozí hodnota `Zap`): Decentnější kruh historie s tmavší šedou
* **Animace** (výchozí hodnota `Zap`): Je-li tato možnost povolena, bude kruhový ciferník animovaný, jestliže je tato funkcemi hodinkami podporována a hodinky nejsou v úsporném režimu s nízkým rozlišením

### Nastavení příkazů

* **Kalkulačka v nabídce** (výchozí hodnota `Zap`): Možnost povolit rozhraní bolusové kalkulačky v hlavní nabídce pro zadávání sacharidů a posílání bolusů z hodinek
* **Plnění v nabídce** (výchozí hodnota `Vyp`): Možnost provádět Plnění/Doplňování z hodinek
* **Jedna cíl. hodnota** (výchozí hodnota `Zap`):
  
  * `Zap`: pro dočasný cíl lze nastavit jedinou hodnotu
  * `Vyp`: pro dočasný cíl lze nastavit nízkou a vysokou hodnotu

* **Procento z kalkulace** (výchozí hodnota `Vyp`): Umožňuje upravit velikost bolusu vypočteného kalkulačkou (hodnota v procentech zadaná před potvrzením oznámení)

(Watchfaces-complications)=

## Komplikace

*Komplikace* je termín pocházející z tradičního hodinářství. Obvykle se jím označuje jakákoli funkce přidaná navíc k hlavnímu ciferníku – například datumové okénko nebo další malý ciferník (datum, den v týdnu, fáze měsíce apod.). Systém Wear OS 2.0 používá tento pojem analogicky. Uživatelé si mohou do ciferníků, které použití komplikací umožňují, přidávat vlastní data, např. informace o počasí, oznámení, fitness trackery a další.

AAPS Wear OS app supports complications since build `2.6`, and allow any third party watchface that supports complications to be configured to display AAPS related data (BG with the trend, IOB, COB, etc.).

Komplikace slouží rovněž jako **zkratky** k různým funkcím AAPS. Klepnutím na komplikace můžete otevřít příslušné nabídky a dialogová okna AAPS (v závislosti na typu komplikace a nastavení).

![Komplikace_Pro_Ciferníky](../images/Watchface_Complications_On_Watchfaces.png)

### Typy komplikací

Aplikace AAPS pro Wear OS poskytuje v závislosti na nastavených formátech pouze nezpracovaná (raw) data. Aplikace třetích stran se musí samy rozhodnout, jak vykreslit komplikace včetně jejich rozvržení, okrajů, barvy a písma. Z mnoha typů Wear OS komplikací, které jsou k dispozici, AAPS využívá:

* `SHORT TEXT` - Obsahuje dva řádky textu, každý o délce 7 znaků, někdy se označuje jako hodnota a popisek. Obvykle se vykreslí uvnitř kroužku nebo malého ováleného pole – pod sebou nebo vedle sebe. Je to prostorově velmi omezená komplikace. AAPS se snaží odstranit zbytečné znaky tak, aby se do zobrazení vešly: zaokrouhlením hodnot, odstraněním úvodních a koncových nul z hodnot atd.
* ` DLOUHÝ TEXT `-Obsahuje dva řádky textu, každý o 20 znacích. Obvykle se vykreslují uvnitř obdélníku nebo dlouhého oválného pole pod sebou. Používá se pro další podrobnosti a text.
* ` HODNOTA ROZSAHU `-Používá se pro hodnoty z předem definovaného rozsahu, například procento. Obsahuje ikonu, popisek a je obvykle vykreslen jako kruhový ukazatel průběhu.
* ` VELKÝ OBRÁZEK `-Vlastní obrázek na pozadí, který lze použít (je-li podporován watchfacem) jako pozadí.

### Nastavení komplikací

Chcete-li přidat komplikaci, dlouze přidržte ikonu ozubeného kola níže. Záleží, jak se konkrétní ciferník konfiguruje – buď klepněte na zástupné symboly nebo vstupte do nabídky nastavení ciferníku pro komplikace. Komplikace AAPS jsou seskupeny pod položkou nabídky AAPS.

Při konfiguraci komplikací na ciferníku Wear OS zobrazí a filtruje seznam komplikací, které lze zobrazit ve vybraném místě pro komplikace na ciferníku. Nelze-li na seznamu nalézt konkrétní komplikace, je to pravděpodobně kvůli jejich typu, který nelze pro dané místo použít.

### Komplikace AAPS

AAPS provides following complications:

![Seznam_AAPS_Komplikací](../images/Watchface_Complications_List.png)

* **BR, CoB & IoB** (`KRÁTKÝ TEXT`, otevře *Menu*): zobrazuje *hodnotu bazálu* na prvním řádku a *aktuální množství sacharidů* a *aktivní množství inzulínu* na druhém řádku.
* **Glykémie** (`KRÁTKÝ TEXT`, otevře *Menu*): znázorňuje *glykémii* , *trendovou* šipku na prvním řádku a *čas odečtu* a *hodnotu změny glykémie* na druhém řádku.
* **CoB & IoB** (`KRÁTKÝ TEXT`, otevře *Menu*): zobrazuje *aktivní sacharidy* na prvním řádku *aktivní inzulín* na druhém řádku.
* **Detailní CoB** (`KRÁTKÝ TEXT`, otevře *Wizard*): zobrazuje aktuálně aktivní sacharidy *aktivní sacharidy* na prvním řádku a plánované (budoucí, eCarbs) sacharidy na druhém řádku.
* **Ikona CoB** (`KRÁTKÝ TEXT`, otevře *Wizard*): Zobrazuje *aktivní sacharidy* pomocí statické ikony.
* **Úplný stav** (`DLOUHÝ TEXT`, otevře *Menu*): Zobrazí většinu údajů dohromady: *glykémii* a *trendovou* šipku, *hodnotu změny glykémie* a *čas odečtu* na prvním řádku. Na druhém řádku * aktivní sacharidy *, * aktivní inzulín * a * hodnotu bazálu *.
* **Úplný stav (převrácené)** (`DLOUHÝ TEXT`, otevře *Menu*): Stejné hodnoty jako standardní *Úplný stav*, ale řádky jsou převrácené. Může být použit pro ciferníky, které ignorují jeden ze dvou řádků v `DLOUHÝ TEXT`
* **Detailní IoB** (`KRÁTKÝ TEXT`, otevře *Bolus*): Zobrazuje celkové množství *aktivního inzulínu* na prvním řádku a celkové *IoB* z *bolusu* a *bazálu* na druhém řádku.
* **Ikona IoB** (`KRÁTKÝ TEXT`, otevře *Bolus*): Zobrazuje *aktivní inzulín* jako statickou ikonu.
* **Baterie Uploaderu/Telefonu** (`HODNOTA ROZSAHU`, otevře *Status*): Znázorňuje nabití baterie v procentech na AAPS telefonu (uploader), jak je uvedeno v AAPS. Zobrazí se jako jako procentuální ukazatel s ikonou baterie znázorňující hodnotu. Toto není zobrazováno v reálném čase, ale když se změní jiné důležité hodnoty AAPS (obvykle: každých ~5 minut s novým odečtem </em>glykémie</0> ).

Navíc existují tři druhy komplikací </code>VELKÝ OBRÁZEK</0> **Tmavá tapeta**, **Šedá tapeta** a**Světlá tapeta**, zobrazující statickou tapetu AAPS.

### Nastavení související s komplikacemi

* **Akce po klepnutí na komplikaci** (výchozí `Výchozí`): Rozhodne, které dialogové okno se otevře, když uživatel poklepe na komplikaci: 
  * *Výchozí*: specifické akce pro typ kompilace *(viz seznam výše)*
  * *Menu*: Hlavní nabídka AAPS
  * *Wizard*: bolusový průvodce – bolusová kalkulačka
  * *Bolus*: přímé zadávání bolusu
  * *eCarb*: dialogové okno konfigurace eCarb
  * *Status*: dílčí nabídka stavu
  * *None*: Zakáže akci klepnutím na komplikace AAPS
* **Unicode v komplikacích** (výchozí hodnota `On`): Pokud je`On`, komplikace bude používat Unicode znaky pro symboly jako `Δ` Delta, `⁞` vertikální oddělovač teček nebo `⎍` symbol hodnoty bazálu. Vykreslování závisí na typu písma, které může být u každého ciferníku jiné. Tato volba umožňuje symboly Unicode `Vypnout` v případě potřeby – pokud písmo používané vlastním ciferníkem tyto symboly nepodporuje – aby se zabránilo chybám v zobrazení grafiky.

(WearOsSmartwatch-wear-os-tiles)=

## Wear OS Tiles

Wear OS Tiles provide easy access to users' information and actions to get things done. The tiles are only available on Android smartwatches running on Wear Os version 2.0 and higher.

Tiles allow you to quickly access actions on the AAPS application without going through the watch face menu. The tiles are optional and can be added and configured by the user.

The tiles are used "next to" any watch face. To access a tile, when enabled, swipe right to left on your watch face to show them.

Please note; that the tiles do not hold the actual state of the AAPS phone app and will only make a request, which has to be confirmed on the watch before it is applied.

## How to add Tiles

Before using the tiles, you have to switch on "Control from Watch" in the "Wear OS" settings of Android APS.

![Wear phone preferences enabled](../images/wear_phone_preferences.jpg)

Depending on your Wear OS version, brand and smartphone there are two ways of enabling the tiles:

1. On your watch, from your watch face; 
  * Swipe right to left till you reach the "+ Add tiles" 
  * Select one of the tiles.
2. On your phone open the companion app for your watch. 
  * For Samsung open "Galaxy Wearable", or for other brands "Wear OS"
  * In the click on the section "Tiles", followed by "+ Add" button
  * Find the AAPS tile you like to add by selecting it. ![Wear phone add tile](../images/wear_companion_app_add_tile.png)
  * The order of the tiles can be changed by dragging and dropping

The content of the tiles can be customized by long-pressing a tile and clicking the "Edit" or "gear icon" button.

### APS(Actions) Tile

The action tile can hold 1 to 4 user-defined action buttons. To configure, long-press the tile, which will show the configuration options. Similar actions are also available through the standard watch menu.

Actions supported in the Action tile can request the AAPS phone app for:

* **Calc**; do a bolus calculation, based on carb input and optional a percentage [1]
* **Insulin**; request insulin delivery by entering the unit of insulin
* **Treatment**; request both insulin delivery and add carbs
* **Carbs**; add (extended) carbs
* **TempT**; set a custom temporary target and duration

![Wear action tile, sample calculator](../images/wear_actions.png)

[1] Via, the Wear OS menu, set the "Calculator Percentage" option to "ON" to show the percentage input in the bolus calculator. The default percentage is based on the phone settings in the "Overview" section ["Deliver this part of the bolus wizard result %"](#Preferences-deliver-this-part-of-bolus-wizard-result) When the user does not provide a percentage, the default value from the phone is used. Configure the other parameters for the bolus calculator in the phone app via "Preferences" "Wizard Settings".

### AAPS(Temp Target) Tile

The Temp Target Tile can request a temporary target based on AAPS phone presets. Configure preset time and targets through the phone app setting by going to "Preferences", "Overview", ["Default Temp-Targets"](#Preferences-default-temp-targets) and set the duration and targets for each preset. Configure the visible actions on the tile through the tile settings. Long press the tile to show the configuration options and select 1 to 4 options:

* **Activity**; for sport
* **Hypo**; to raise the target during hypo treatment
* **Eating soon**; to lower the target to raise the insulin on board
* **Manual**; set a custom temporary target and duration
* **Cancel**; to stop the current temporary target

![Wear actions tile edit](../images/wear_tile_tempt_edit.png)

### AAPS(QuickWizard)Tile

The QuickWizard tile can hold 1 to 4 quick wizard action buttons, defined with the phone app[2]. See [QuickWizard](#Preferences-quick-wizard). You can set standard meals (carbs and calculation method for the bolus) to be displayed on the tile depending on the time of the day. Ideal for the most common meals/snacks you eat during the day. You can specify if the quick wizard buttons will show on the phone, watch, or both. Please note that the phone can show only one quick wizard button at a time. The quick wizard setup also can specify a custom percentage of the insulin for the bolus. The custom percentage enables you to vary, for example, snack at 120%, slow absorbing breakfast 80% and hypo treatment sugar snack at 0%

![Wear actions tile and phone configuration](../images/quickwizard_watch_phone.png)

[2] Wear OS limits tiles update frequency to only once every 30 seconds. When you notice that the changes on your phone are not reflected on the tile, consider; waiting 30 seconds, using the "Resend all data" button from the Wear OS section of AAPS, or removing the tile and adding it again. To change the order of the QuickWizard buttons dragging an item up or down.

## Always on

Long battery life for Android Wear OS smartwatches is a challenge. Some smartwatches get as much as 30 hours before recharging. The display should be switched off for optimal power saving when not in use. Most watches support the “Always on” display.

Since AAPS version 3, we can use a “Simplify UI” during always-on-mode. This UI only contains the blood glucose, direction, and time. This UI is power-optimized with less frequent updates, showing less information and lightening fewer pixels to save power on OLED displays.

The simplified UI mode is available for the watch-faces: AAPS, AAPS V2, Home Big, Digital Style, Steampunk, and Cockpit. The simplified UI is optional and is configured through the watch face settings. (log press the watch face and click “edit” or the gear icon) Select the configuration “Simplify UI" and set it to “Always on” or “Always on and charging”.

### Night-time mode

While charging, it would be helpful if the display could stay “always-on” and show your blood glucose during the night. However, the standard watch-faces are too bright and have too much information, and the details are hard to read with sleepy eyes. Therefore, we added an option for the watch-face to simplify the UI only during charging when set in the configuration.

The simplified UI mode is available for the watch-faces: AAPS, AAPS V2, Home Big, Digital Style, Steampunk, and Cockpit. The simplified UI is optional and is configured through the watch face settings. (log press the watch face and click “edit” or the gear icon) Select the configuration “Simplify UI" and set it to “During charging” or “Always on and charging”

The Android developer options enable your watch to stay awake during charging. To make the developer options available, see the [official documentation](https://developer.android.com/training/wearables/get-started/debugging). Set the “Stay awake when charging” to “on” in the developer options”.

Note: not all displays can handle always-on very well. It can cause screen burn-in, especially on the older OLED displays. The watches will generally dim the display to prevent burn-in; please check your owner’s manual, the manufacturing, or the internet for advice.

![Watchface Nightstand](../images/Watchface_nightstand.jpg)

![Simplified UI](../images/Watchface_simplified_ui.png)

## Snooze Alert shortcut

It is possible to create a shortcut to snooze the alerts/alarm of AAPS. Muting the sound via your watch is convenient and faster without reaching for your phone. Note; you still have to check your alarm message on your phone and handle it accordingly, but you can check that later. When your watch has two buttons, you can assign a key to the `AAPS Snooze Alert` program.

To link the button on the Samsung Watch 4 go to `Settings > Advanced Features > Customize Buttons > Double press > AAPS Snooze Alert`

### Snooze xDrip

When you use xDrip and have xDrip installed on the watch, the 'AAPS Snooze Alert' shortcut will also Snooze any xDrip alarm.

## Tipy pro lepší chod a delší výdrž baterie

Wear OS hodinky jsou zařízení s velmi omezenou výdrží baterie. Velikost hodinek omezuje kapacitu vestavěné baterie. Navzdory nedávnému vylepšení na straně hardwaru i softwaru hodinky Wear OS stále vyžadují denní nabíjení.

Pokud je výdrž baterie hodinek kratší než jeden den (od rána do večera), existuje pár tipů, jak se s tím vypořádat.

Baterii nejvíce vybíjejí:

* Aktivní displej se zapnutým podsvícením (LED), nebo max. intenzita (OLED)
* Vykreslování na obrazovce
* Bezdrátová komunikace přes Bluetooth

Protože nemůžeme ohrozit komunikaci (potřebujeme aktuální data) a chceme, aby se zobrazovaly nejnovější údaje, většinu optimalizací lze provést v oblasti * doba zobrazení *:

* Originální ciferník je obvykle lépe optimalizován než vlastní, stažený z obchodu.
* Je lepší použít ciferníky, které omezují množství přenesených dat v režimu neaktivní/ztlumený režim.
* Uvědomte si, že při používaní dalších komplikací, jako jsou widgety počasí třetích stran nebo jiné, využíváte data z externích zdrojů.
* Začněte s jednoduššími ciferníky. Přidejte pouze jednu komplikaci a sledujte, jaký má vliv na výdrž baterie.
* Try to use **Dark** theme for AAPS watchfaces, and [**Matching divider**](#watchface-settings). Na zařízeních s OLED to omezí počet zapnutých pixelů a omezí vypalování.
* Zkuste, co lépe funguje na vašich hodinkách: Originální ciferník AAPS nebo jiný s AAPS komplikací.
* Sledujte několik dní, s různými profily aktivit. Většina hodinek aktivuje obrazovku při pohledu na ně, pohybu a dalších spouštěčích souvisejících s užíváním.
* Zkontrolujte globální nastavení systému, které ovlivňuje výkon: oznámení, časový limit podsvícení/aktivní zobrazení, je-li aktivována služba GPS apod.
* Check [list of tested phones and watches](#Phones-list-of-tested-phones) and [ask community](../GettingHelp/WhereCanIGetHelp.md) for other users experiences and reported battery lifetime.
* **Nemůžeme garantovat, že data zobrazena na ciferníku nebo komplikaci jsou aktuální**. Konečné rozhodnutí o tom, kdy aktualizovat ciferník nebo komplikaci, je na operačním systému. I když se aplikace AAPS aktualizují, systém se může rozhodnout odložit nebo ignorovat aktualizace v zájmu úspory baterie. V případě pochybností nebo vybité baterie – vždy zkontrolujte hlavní AAPS v telefonu.

(Watchfaces-troubleshooting-the-wear-app)=

## Řešení problémů s wear aplikací:

* Někdy pomůže znovu sesynchronizovat aplikace do hodinek, i když to ručně může být poněkud zdlouhavé: Android wear > Ikona ozubeného kola > Název hodinek > Synchronizovat aplikace.
* Povolte ADB ladění ve vývojářských možnostech (na hodinkách), připojte hodinky k počítači přes USB a spusťte Wear aplikaci, až budete mít na počítači otevřené Android Studio.
* Pokud se komplikace neaktualizují – nejdříve zkontrolujte, zda vůbec AAPS ciferník funguje.

## Additional AAPS custom watchfaces are also available

[Here](../ExchangeSiteCustomWatchfaces/index.md) you can download Zip-Files with custom watchfaces made by other users.

## Build your own watchface

If you want to build your own watchface, follow the [guide here](../ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md).

Once you have built a custom watchface, you can share your own **AAPS** custom watchface with others, the zip-file can be uploaded in the folder "ExchangeSiteCustomWatchfaces" via a Pull Request into Github. During merge of the pull request, the documentation team will extract the CustomWatchface.png file and prefix it with the filename of the Zip-file.