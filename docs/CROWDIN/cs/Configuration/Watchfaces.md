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

Ověřte, že obě verze AAPS pro telefon i pro hodinky jsou podepsány pomocí stejného klíče!

Wear verzi APK je třeba nainstalovat do hodinek stejným způsobem, jakým do telefonu instalujete APK pro telefon. Na hodinkách může být potřeba povolit *vývojářský režim* a nahrát do nich a nainstalovat APK pomocí: `adb install wear-full-release.apk`

Jestliže používáte verzi AAPS pro hodinky, vždy ji aktualizujte společně s aplikací pro telefon – vždy mějte obě verze synchronizované.

### Nastavení na telefonu

V aplikaci AndroidAPS musíte na kartě „Konfigurace“ [povolit modul Wear](../Configuration/Config-Builder#wear).

## Ovládání AAPS z hodinek

Systém AndroidAPS je navržený tak, aby ho bylo možné *ovládat* hodinkami Android Wear. Chcete-li z hodinek zadávat bolus atd., musíte v „Nastavení wear“ aktivovat volbu „Ovládání z hodinek“.

Z hodinek lze ovládat následující funkce:

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

Lze si vybrat z několika ciferníků (watchfaces), které zobrazují průměrnou hodnotu delta, IOB, aktuálně aktivní bazál a bazální profil + graf hodnot glykémie z CGM.

Ujistěte se, že nemáte zakázané oznámení AndroidAPS na hodinkách. Potvrzování akcí (např. bolusu, dočasného cíle) se objeví jako notifikace, které je nutné odsunout a potvrdit klepnutím.

Chcete-li se rychleji dostat do nabídky AAPS, dvakrát klepněte na hodnotu glykémie. Dvojitým klepnutím na graf glykémie změníte časový rozsah grafu.

## Dostupné ciferníky

![Dostupné ciferníky](../images/Watchface_Types.png)

## Ciferník AAPSv2 – Popis

![Popis ciferníku AndroidAPSv2](../images/Watchface_Legend.png)

A - čas od posledního spuštění smyčky

B - hodnota glykémie

C - minuty od posledního čtení hodnoty glykémie

D - porovnání změny od posledního čtení (v mmol nebo mg/dl)

E - průměrná změna hodnoty glykémie za posledních 15 minut

F - stav baterie telefonu

G - hodnota bazální dávky (zobrazená v U/h, pokud je zvolena standardní hodnota, nebo v %, pokud je aktivní dočasný bazál)

G - ukazatel BGI (blood glucose interaction), neboli jak moc „by měla“ glykémie růst nebo klesat pouze na základě aktivity inzulínu.

I - sacharidy (zbývající sacharidy I rozložené sacharidy v budoucnosti)

J - zbývající inzulín (z bolusu I bazálu)

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

## Komplikace

*Komplikace* je termín pocházející z tradičního hodinářství. Obvykle se jím označuje jakákoli funkce přidaná navíc k hlavnímu ciferníku – například datumové okénko nebo další malý ciferník (datum, den v týdnu, fáze měsíce apod.). Systém Wear OS 2.0 používá tento pojem analogicky. Uživatelé si mohou do ciferníků, které použití komplikací umožňují, přidávat vlastní data, např. informace o počasí, oznámení, fitness trackery a další.

Aplikace AndroidAPS pro Wear OS nabízí podporu komplikací od verze `2.6` a umožňují nakonfigurovat jakýkoli ciferník třetí strany, který podporuje komplikace, aby zobrazoval informace z AAPS (glykémie a její trend, IOB, COB atd.).

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

Při konfiguraci komplikací na ciferníku Wear OS zobrazí a filtruje seznam komplikací, které lze zobrazit ve vybraném místě pro komplikace na ciferníku. If specific complications cannot be found on the list, it is probably due to its type that cannot be used for the given place.

### Complications provided by AAPS

AndroidAPS provides following complications:

![Seznam_AAPS_Komplikací](../images/Watchface_Complications_List.png)

* **BR, CoB & IoB** (`SHORT TEXT`, opens *Menu*): Displays *Basal Rate* on the first line and *Carbs on Board* and *Insulin on Board* on the second line.
* **Blood Glucose** (`SHORT TEXT`, opens *Menu*): Displays *Blood Glucose* value and *trend* arrow on the first line and *measurement age* and *BG delta* on the second line.
* **CoB & IoB** (`SHORT TEXT`, opens *Menu*): Displays *Carbs on Board* on the first line and *Insulin on Board* on the second line.
* **CoB Detailed** (`SHORT TEXT`, opens *Wizard*): Displays current active *Carbs on Board* on the first line and planned (future, eCarbs) Carbs on the second line.
* **CoB Icon** (`SHORT TEXT`, opens *Wizard*): Displays *Carbs on Board* value with a static icon.
* **Full Status** (`LONG TEXT`, opens *Menu*): Shows most of the data at once: *Blood Glucose* value and *trend* arrow, *BG delta* and *measurement age* on the first line. On the second line *Carbs on Board*, *Insulin on Board* and *Basal Rate*.
* **Full Status (flipped)** (`LONG TEXT`, opens *Menu*): Same data as for standard *Full Status*, but lines are flipped. Can be used in watchfaces which ignores one of two lines in `LONG TEXT`
* **IoB Detailed** (`SHORT TEXT`, opens *Bolus*): Displays total *Insulin on Board* on the first line and split of *IoB* for *Bolus* and *Basal* part on the second line.
* **IoB Icon** (`SHORT TEXT`, opens *Bolus*): Displays *Insulin on Board* value with a static icon.
* **Uploader/Phone Battery** (`RANGED VALUE`, opens *Status*): Displays battery percentage of AAPS phone (uploader), as reported by AAPS. Displayed as percentage gauge with a battery icon that reflects reported value. It may be not updated in real-time, but when other important AAPS data changes (usually: every ~5 minutes with new *Blood Glucose* measurement).

Additionally, there are three complications of `LARGE IMAGE` kind: **Dark Wallpaper**, **Gray Wallpaper** and **Light Wallpaper**, displaying static AAPS wallpaper.

### Complication related settings

* **Akce po klepnutí na komplikaci** (default `Default`): Decides which dialog is opened when user taps complication: 
    * *Default*: action specific to complication type *(see list above)*
    * *Menu*: AAPS main menu
    * *Wizard*: bolus wizard - bolus calculator
    * *Bolus*: direct bolus value entry
    * *eCarb*: eCarb configuration dialog
    * *Status*: status sub-menu
    * *None*: Disables tap action on AAPS complications
* **Unicode in Complications** (default `On`): When `On`, the complication will use Unicode characters for symbols like `Δ` Delta, `⁞` vertical dot separator or `⎍` Basal Rate symbol. Rendering of them depends on the font, and that can be very watchface-specific. This option allows switching Unicode symbols `Off` when needed - if the font used by custom watchface does not support those symbols - to avoid graphical glitches.

## Performance and battery life tips

Wear OS watches are very power-constrained devices. The size of the watch case limits the capacity of the included battery. Even with recent advancements both on hardware and software side, Wear OS watches still require daily charging.

If an experienced battery span is shorter than a day (from dusk to dawn), here are some tips to troubleshoot the issues.

Main battery-demanding areas are:

* Active display with a backlight on (for LED) or in full intensity mode (for OLED)
* Rendering on screen
* Radio communication over Bluetooth

Since we cannot compromise on communication (we need up-to-date data) and want to have the most recent data rendered, most of the optimizations can be done in *display time* area:

* Stock watchfaces are usually better optimized than custom one, downloaded from the store.
* It is better to use watchfaces that limit the amount of rendered data in inactive / dimmed mode.
* Be aware when mixing other Complications, like third party weather widgets, or other - utilizing data from external sources.
* Start with simpler watchfaces. Add one complication at the time and observe how they affect battery life.
* Try to use **Dark** theme for AAPS watchfaces, and [**Matching divider**](#watchface-settings). On OLED devices it will limit the amount of pixels lit and limit burnout.
* Check what performs better on your watch: AAPS stock watchfaces or other watchfaces with AAPS Complications.
* Observe over a few days, with different activity profiles. Most watches activate the display on glancing, movement and other usage-related triggers.
* Check your global system settings that affect performance: notifications, backlight/active display timeout, when GPS is activated.
* Check [list of tested phones and watches](../Getting-Started/Phones#list-of-tested-phones) and [ask community](../Where-To-Go-For-Help/Connect-with-other-users.md) for other users experiences and reported battery lifetime.
* **We cannot guarantee that data displayed on watchface or complication is up-to-date**. In the end, it is up to Wear OS to decide when to update a watchface or a complication. Even when the AAPS app requests update, the System may decide to postpone or ignore updates to conserve battery. When in doubt and low on battery on watch - always double-check with main AAPS app on phone.

## Řešení problémů s wear aplikací:

* Na Android Wear 2.0 (hodinky) se ciferník (watchface) neinstaluje automaticky. Nyní je nutné přejít do Google Play na hodinkách (jedná se o jiný Google Play než na telefonu) a najít kategorii aplikací nainstalovaných v telefonu, ze které pak můžete ciferník aktivovat. Také povolte automatické aktualizace. 
* Někdy pomůže znovu synchronizovat aplikace do hodinek, i když to ručně může být poněkud zdlouhavé: Wear OS > Rozšířená nastavení (Ikona ozubeného kola) > Znovu synchronizovat aplikace.
* Povolte ADB ladění ve vývojářských možnostech (na hodinkách), připojte hodinky k počítači přes USB a spusťte Wear aplikaci, až budete mít na počítači otevřené Android Studio.
* Pokud se komplikace neaktualizují – nejdříve zkontrolujte, zda vůbec AAPS ciferník funguje.

## Zobrazení dat z Nightscoutu

Pokud používáte jiný systém smyčky a chtěli byste si *prohlédnout* detailní informace o své smyčce na hodinkách s Wear OS nebo byste chtěli sledovat smyčku svého dítěte, pak vám bude stačit stáhnout pouze aplikaci NSClient. V tom případě se řiďte [pokyny, jak sestavit APK](../Installing-AndroidAPS/Building-APK.md) a vyberte variantu sestavení „NSClientRelease“. Lze si vybrat z několika ciferníků (watchfaces), které zobrazují průměrnou hodnotu delta, IOB, aktuálně aktivní bazál a bazální profil + graf hodnot glykémie z CGM.

# Pebble

Uživatelé hodinek Pebble mohou také použít [Watchface Urchin](https://github.com/mddub/urchin-cgm), který umožňuje *zobrazovat* informace o smyčce (pokud jsou nahrávané do Nightscoutu), ale nebudou přes hodinky schopní ovládat AndroidAPS. Můžete si zvolit údaje, které se mají zobrazovat, např. IOB, aktuální dočasný bazál a predikce. Jestliže používáte otevřenou smyčku, můžete využít [IFTTT](https://ifttt.com/), abyste vytvořili applet, který říká: „Pokud je od AndroidAPS přijatá notifikace, tak buď odešli SMS, nebo push notifikaci“.