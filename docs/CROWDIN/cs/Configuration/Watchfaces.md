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

Při konfiguraci komplikací na ciferníku Wear OS zobrazí a filtruje seznam komplikací, které lze zobrazit ve vybraném místě pro komplikace na ciferníku. Nelze-li na seznamu nalézt konkrétní komplikace, je to pravděpodobně kvůli jejich typu, který nelze pro dané místo použít.

### Komplikace AAPS

AndroidAPS nabízí následující komplikace:

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

Wear OS hodinky jsou zařízení s velmi omezenou kapacitou. Velikost hodinek omezuje kapacitu vestavěné baterie. Navzdory nedávnému vylepšení na straně hardwaru i softwaru hodinky Wear OS stále vyžadují denní nabíjení.

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

## Zobrazení dat z Nightscoutu

Pokud používáte jiný systém smyčky a chtěli byste si *prohlédnout* detailní informace o své smyčce na hodinkách s Wear OS nebo byste chtěli sledovat smyčku svého dítěte, pak vám bude stačit stáhnout pouze aplikaci NSClient. V tom případě se řiďte [pokyny, jak sestavit APK](../Installing-AndroidAPS/Building-APK.md) a vyberte variantu sestavení „NSClientRelease“. Lze si vybrat z několika ciferníků (watchfaces), které zobrazují průměrnou hodnotu delta, IOB, aktuálně aktivní bazál a bazální profil + graf hodnot glykémie z CGM.

# Pebble

Uživatelé hodinek Pebble mohou také použít [Watchface Urchin](https://github.com/mddub/urchin-cgm), který umožňuje *zobrazovat* informace o smyčce (pokud jsou nahrávané do Nightscoutu), ale nebudou přes hodinky schopní ovládat AndroidAPS. Můžete si zvolit údaje, které se mají zobrazovat, např. IOB, aktuální dočasný bazál a predikce. Jestliže používáte otevřenou smyčku, můžete využít [IFTTT](https://ifttt.com/), abyste vytvořili applet, který říká: „Pokud je od AndroidAPS přijatá notifikace, tak buď odešli SMS, nebo push notifikaci“.