# AAPS na chytrých hodinkách se systémem Wear OS

Aplikaci AndroidAPS lze nainstalovat na chytré hodinky se systémem **Wear OS**. AAPS na hodinkách umožňuje:

* **zobrazovat různé informace**: pomocí [vlastních ciferníků](#aaps-watchfaces) nebo standardních ciferníků s možností používat různé [komplikace](#complications)
* **ovládat AAPS na telefonu z hodinek**: vydání bolusu, nastavení dočasného cíle atd. 

### Dříve než si koupíte hodinky…

* Některé funkce, jako např. *komplikace*, vyžadují Wear OS verze 2.0 nebo vyšší
* Google od verze 2.x přejmenoval *Android Wear 1.x* na *Wear OS*, takže pokud bude někde uvedeno *Android Wear*, zřejmě se jedná o starší verzi systému 1.x
* Jestliže je v popisu hodinek uvedeno, že jsou kompatibilní se systémy *Android* a *iOS*, **neznamená to**, že hodinky používají systém *Wear OS* - stejně tak se může jednat o nějaký jiný typ OS upraveného daným výrobcem, **který není kompatibilní s aplikací AAPS pro hodinky!**
* Podívejte se na [seznam otestovaných telefonů a hodinek](../Getting-Started/Phones#list-of-tested-phones), a pokud jste na pochybách, zda budou vaše hodinky podporované, [zeptejte se komunity](../Where-To-Go-For-Help/Connect-with-other-users.md)

### Sestavení verze AAPS pro Wear OS

Chcete-li sestavit verzi AAPS pro Wear OS, je nutné při [sestavování APK](../Installing-AndroidAPS/Building-APK.md) vybrat build variant s názvem "fullRelease" (nebo "pumpRelease", pokud chcete pouze dálkový ovladač k pumpě bez funkcí smyčky).

You can then update or install the watchface via the PlayStore on your watch.

### Nastavení na telefonu

Within AndroidAPS, in the ConfigBuilder you need to [enable Wear plugin](../Configuration/Config-Builder#wear).

## Ovládání AAPS z hodinek

AndroidAPS is designed to be *controlled* by Android Wear watches. Chcete-li z hodinek zadávat bolus atd., musíte v „Nastavení wear“ aktivovat volbu „Ovládání z hodinek“.

The following functions can be triggered from the watch:

* nastavovat dočasné cíle
* používat kalkulátor (nastavení kalkulátoru můžete definovat v [nastaveni](../Configuration/Config-Builder#wear) v telefonu)
* zadávat eSacharidy
* podávat bolus (inzulín + sacharidy)
* měnit nastavení hodinek
* monitorovat stav 
    * kontrolovat stav pumpy
    * kontrolovat stav smyčky
    * kontrolovat a měnit profil, CPP (Circadian Percentage Profile = posun času + procentní změna)
    * zobrazit TDD (celková denní dávka = bolus + bazál za den)

## Ciferníky AAPS

There are several watchfaces to choose from that include average delta, IOB, currently active temp basal rate and basal profiles + CGM readings graph.

Ensure notifications from AndroidAPS are not blocked on the watch. Confirmation of action (e.g. bolus, tempt target) comes via notification which you will need to swipe and tick.

To get faster to the AAPS menu, do a double tap on your BG. With a double tap onto the BG curve you can change the time scale..

## Dostupné ciferníky

![Available watchfaces](../images/Watchface_Types.png)

### New watchface as of AndroidAPS 2.8

![Watchface Digital Style](../images/Watchface_DigitalStyle.png)

* Color, lines and circle are configurable in setting menu on cog-sign of watchface chooser menu.

## Ciferník AAPSv2 – Popis

![Legend AndroidAPSv2 watchface](../images/Watchface_Legend.png)

A - time since last loop run

B - CGM reading

C - minutes since last CGM reading

D - change compared to last CGM reading (in mmol or mg/dl)

E - average change CGM reading last 15 minutes

F - phone battery

G - basal rate (shown in U/h during standard rate and in % during TBR)

H - BGI (blood glucose interaction) -> the degree to which BG “should” be rising or falling based on insulin activity alone.

I - carbs (carbs on board | e-carbs in the future)

J - insulin on board (from bolus | from basal)

## Vstup do hlavní nabídky AAPS

To access main menu of AAPS you can use on of following options:

* poklepejte na hodnotu glykémie
* vyberte ikonu AAPS v nabídce aplikací na hodinách
* klepněte na komplikaci AAPS (je-li nastavena tak, aby umožňovala vstup do nabídky)

## Nastavení (na hodinkách)

To access to the watchface settings, enter AAPS main menu, slide up and select "Settings".

Filled star is for enabled state (**On**), and hollow star icon indicates that setting is disabled (**Off**):

![Settings on/off](../images/Watchface_Settings_On_Off.png)

### Doplňkové parametry AAPS

* **Vibrovat při bolusu** (výchozí hodnota `Zap`):
* **Jednotky pro Akce** (výchozí hodnota `mg/dl`): jestliže je tato možnost **Zap**, jednotka pro akce je `mg/dl`, je-li možnost **Vyp**, jednotka je `mmol/l`. Používá se při nastavování dočasných cílů z hodinek.

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

![Input design options](../images/Watchface_InputDesign.png)

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

## Komplikace

*Complication* is a term from traditional watchmaking, where it describes addition to the main watchface - as another small window or sub-dial (with date, day of the week, moon phase, etc.). Wear OS 2.0 brings that metaphor to allow custom data providers, like weather, notifications, fitness counters and more - to be added to any watchfaces that support complications.

AndroidAPS Wear OS app supports complications since build `2.6`, and allow any third party watchface that supports complications to be configured to display AAPS related data (BG with the trend, IOB, COB, etc.).

Complications also serve as **shortcut** to AAPS functions. By tapping them you can open AAPS related menus and dialogs (depending on complication type and configuration).

![Complications_On_Watchfaces](../images/Watchface_Complications_On_Watchfaces.png)

### Typy komplikací

AAPS Wear OS app provides only raw data, according to predefined formats. It is up to third-party watchface to decide where and how to render complications, including its layout, border, color, and font. From many Wear OS complication types available, AAPS uses:

* `SHORT TEXT` - Obsahuje dva řádky textu, každý o délce 7 znaků, někdy se označuje jako hodnota a popisek. Obvykle se vykreslí uvnitř kroužku nebo malého ováleného pole – pod sebou nebo vedle sebe. Je to prostorově velmi omezená komplikace. AAPS se snaží odstranit zbytečné znaky tak, aby se do zobrazení vešly: zaokrouhlením hodnot, odstraněním úvodních a koncových nul z hodnot atd.
* ` DLOUHÝ TEXT `-Obsahuje dva řádky textu, každý o 20 znacích. Obvykle se vykreslují uvnitř obdélníku nebo dlouhého oválného pole pod sebou. Používá se pro další podrobnosti a text.
* ` HODNOTA ROZSAHU `-Používá se pro hodnoty z předem definovaného rozsahu, například procento. Obsahuje ikonu, popisek a je obvykle vykreslen jako kruhový ukazatel průběhu.
* `VELKÝ OBRÁZEK`-Vlastní obrázek na pozadí, který lze použít (je-li podporován watchfacem) jako pozadí.

### Nastavení komplikací

To add complication to watchface, configure it by long press and clicking the gear icon below. Depending on how specific watchface configures them - either click on placeholders or enter the watchface setup menu for complications. AAPS complications are grouped under the AAPS menu entry.

When configuring complications on watchface, Wear OS will present and filter the list of complications that can be fit into selected complication place on watchface. If specific complications cannot be found on the list, it is probably due to its type that cannot be used for the given place.

### Komplikace AAPS

AndroidAPS provides following complications:

![AAPS_Complications_List](../images/Watchface_Complications_List.png)

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

Additionally, there are three complications of `LARGE IMAGE` kind: **Dark Wallpaper**, **Gray Wallpaper** and **Light Wallpaper**, displaying static AAPS wallpaper.

### Complication related settings

* **Akce po klepnutí na komplikaci** (výchozí `Výchozí`): Rozhodne, které dialogové okno se otevře, když uživatel poklepe na komplikaci: 
    * *Výchozí*: specifické akce pro typ kompilace *(viz seznam výše)*
    * *Menu*: Hlavní nabídka AAPS
    * *Wizard*: bolusový průvodce – bolusová kalkulačka
    * *Bolus*: přímé zadávání bolusu
    * *eCarb*: dialogové okno konfigurace eCarb
    * *Status*: dílčí nabídka stavu
    * *None*: Zakáže akci klepnutím na komplikace AAPS
* **Unicode v komplikacích** (výchozí hodnota `On`): Pokud je`On`, komplikace bude používat Unicode znaky pro symboly jako `Δ` Delta, `⁞` vertikální oddělovač teček nebo `⎍` symbol hodnoty bazálu. Vykreslování závisí na typu písma, které může být u každého ciferníku jiné. Tato volba umožňuje symboly Unicode `Vypnout` v případě potřeby – pokud písmo používané vlastním ciferníkem tyto symboly nepodporuje – aby se zabránilo chybám v zobrazení grafiky.

## Tipy pro lepší chod a delší výdrž baterie

Wear OS watches are very power-constrained devices. The size of the watch case limits the capacity of the included battery. Even with recent advancements both on hardware and software side, Wear OS watches still require daily charging.

If an experienced battery span is shorter than a day (from dusk to dawn), here are some tips to troubleshoot the issues.

Main battery-demanding areas are:

* Aktivní displej se zapnutým podsvícením (LED), nebo max. intenzita (OLED)
* Vykreslování na obrazovce
* Bezdrátová komunikace přes Bluetooth

Since we cannot compromise on communication (we need up-to-date data) and want to have the most recent data rendered, most of the optimizations can be done in *display time* area:

* Originální ciferník je obvykle lépe optimalizován než vlastní, stažený z obchodu.
* Je lepší použít ciferníky, které omezují množství přenesených dat v režimu neaktivní/ztlumený režim.
* Uvědomte si, že při používaní dalších komplikací, jako jsou widgety počasí třetích stran nebo jiné, využíváte data z externích zdrojů.
* Začněte s jednoduššími ciferníky. Přidejte pouze jednu komplikaci a sledujte, jaký má vliv na výdrž baterie.
* Zkuste pro ciferník AAPS použít motiv **Tmavý** a také [**Matching divider**](#watchface-settings). Na zařízeních s OLED to omezí počet zapnutých pixelů a omezí vypalování.
* Zkuste, co lépe funguje na vašich hodinkách: Originální ciferník AAPS nebo jiný s AAPS komplikací.
* Sledujte několik dní, s různými profily aktivit. Většina hodinek aktivuje obrazovku při pohledu na ně, pohybu a dalších spouštěčích souvisejících s užíváním.
* Zkontrolujte globální nastavení systému, které ovlivňuje výkon: oznámení, časový limit podsvícení/aktivní zobrazení, je-li aktivována služba GPS apod.
* Zkontrolujte [seznam doporučených hodinek a telefonů](../Getting-Started/Phones#list-of-tested-phones) a [zeptejte se ve skupině ](../Where-To-Go-For-Help/Connect-with-other-users.md) na další zkušenosti spojené s úsporou baterie.
* **Nemůžeme garantovat, že data zobrazena na ciferníku nebo komplikaci jsou aktuální**. Konečné rozhodnutí o tom, kdy aktualizovat ciferník nebo komplikaci, je na operačním systému. I když se aplikace AAPS aktualizují, systém se může rozhodnout odložit nebo ignorovat aktualizace v zájmu úspory baterie. V případě pochybností nebo vybité baterie – vždy zkontrolujte hlavní AAPS v telefonu.

## Řešení problémů s wear aplikací:

* Na Android Wear 2.0 (hodinky) se ciferník (watchface) neinstaluje automaticky. Nyní je nutné přejít do Google Play na hodinkách (jedná se o jiný Google Play než na telefonu) a najít kategorii aplikací nainstalovaných v telefonu, ze které pak můžete ciferník aktivovat. Také povolte automatické aktualizace. 
* Někdy pomůže znovu synchronizovat aplikace do hodinek, i když to ručně může být poněkud zdlouhavé: Wear OS > Rozšířená nastavení (Ikona ozubeného kola) > Znovu synchronizovat aplikace.
* Povolte ADB ladění ve vývojářských možnostech (na hodinkách), připojte hodinky k počítači přes USB a spusťte Wear aplikaci, až budete mít na počítači otevřené Android Studio.
* Pokud se komplikace neaktualizují – nejdříve zkontrolujte, zda vůbec AAPS ciferník funguje.

### Sony Smartwatch 3

* The Sony Smartwach 3 is one of the most popular watches to be used with AAPS. 
* Unfortunately Google dropped support for wear OS 1.5 devices in fall 2020. This leads to problems when using Sony SW3 with AndroidAPS and above.
* A possible workaround can be found on this [troubleshooting page](../Usage/SonySW3.rst).

## Zobrazení dat z Nightscoutu

If you are using another looping system and want to *view* your looping detail on an Android Wear watch, or want to watch your child's looping, then you can build/download just the NSClient APK. To do this follow the [build APK instructions](../Installing-AndroidAPS/Building-APK.md) selecting the build variant "NSClientRelease". There are several watchfaces to choose from that include average delta, IOB, currently active temp basal rate and basal profiles + CGM readings graph.

# Pebble

Pebble users can use the [Urchin watchface](https://github.com/mddub/urchin-cgm) to *view* looping data (if uploaded to Nightscout), but you will not be able to interact with AndroidAPS through the watch. You can choose fields to display such as IOB and currently active temp basal rate and predictions. If open looping you can use [IFTTT](https://ifttt.com/) to create an applet that says if Notification received from AndroidAPS then send either SMS or pushover notification.