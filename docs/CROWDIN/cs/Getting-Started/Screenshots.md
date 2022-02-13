# Obrazovky AndroidAPS

## Hlavní stránka

![Hlavní obrazovka V2.7.](../images/Home2020_Homescreen.png)

Toto je první obrazovka, na kterou narazíte, když spustíte aplikaci AndroidAPS. Obsahuje většinu informací, které budete potřebovat každý den.

### Sekce A – Karty

* Procházejte mezi různými moduly AndroidAPS.
* Obrazovky můžete také změnit tak, že přejedete prstem doleva nebo doprava.
* Zobrazené karty mohou být vybrány v [konfiguraci](../Configuration/Config-Builder#tab-or-hamburger-menu).

### Sekce B – Profil & cíl

#### Aktuální profil

![Profile switch remaining duration](../images/Home2020_ProfileSwitch.png)

* Aktuální profil je zobrazen v levém panelu.
* Krátkým stiskem panelu profilu zobrazíte detaily profilu
* Dlouhým stiskem panelu profilu [přepínejte mezi různými profily](../Usage/Profiles#profile-switch).
* Pokud byl profil přepnut s dobou trvání, tak se zbývající minuty platnosti profilu zobrazí v závorkách.

#### Cíl

![Temp target remaining duration](../images/Home2020_TT.png)

* Aktuální cílová hladina glykémie je zobrazena v pravém řádku.
* Krátkým stisknutím cílové hodnoty nastavíte [dočasný cíl](../Usage/temptarget.md).
* Pokud je nastaven dočasný cíl, zobrazí se žlutě a zbývající čas v minutách bude zobrazen v závorkách.

#### Vizualizace dynamické úpravy cíle

![Visualization of dynamic target adjustment](../images/Home2020_DynamicTargetAdjustment.png)

* AAPS může dynamicky upravovat vaši cílovou hodnotu na základě citlivosti, pokud používáte algoritmus SMB.
* Povolte jednu nebo obě [následující možnosti](../Configuration/Preferences#openaps-smb-settings) 
   * "citlivost zvyšuje cíl" a/nebo 
   * "rezistence snižuje cíl" 
* Jestliže AAPS detekuje rezistenci nebo citlivost, cíl se bude lišit od hodnoty, která je nastavena v profilu. 
* Když tato funkce změní cílovou glykémii, její hodnota bude podbarvena zeleně.

### Sekce C – glykémie a stav smyčky

#### Aktuální hodnota glykémie

* Nejnovější glykémie z CGM je zobrazena na levé straně.
* Barva hodnoty glykémie odráží stav vzhledem k definovanému [rozsahu](../Configuration/Preferences#range-for-visualization). 
   * zelená = v rozmezí
   * červená = pod cílovým rozmezím
   * žlutá = nad cílovým rozmezím
* Šedý blok uprostřed zobrazuje minuty od posledního načtení hodnoty a změny od posledního čtení, za posledních 15 a 40 minut.

#### Stav smyčky

![Stav smyčky](../images/Home2020_LoopStatus.png)

* Nová ikona zobrazující stav smyčky:
   
   * zelený kruh = smyčka běží
   * zelený kruh s tečkovanou čárou = [režim vypnutí před nízkou (LGS)](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend)
   * červený kruh = smyčka vypnutá (nefunguje trvale)
   * žlutý kruh = smyčka pozastavena (dočasně pozastavena, ale bude vydán bazální inzulin) - zbývající čas je zobrazen pod ikonou
   * šedý kruh = pumpa odpojena (dočasně žádný výdej inzulínu) - zbývající čas je zobrazen pod ikonou
   * Oranžový kruh = je spuštěn superbolus - zbývající čas je zobrazen pod ikonou
   * modrý kruh s tečkovanou čárou = otevřená smyčka

* Krátkým nebo dlouhým stiskem ikony otevřete dialog smyčky pro přepnutí režimu smyčky (Uzavřená smyčka, Zastavení před nízkou, Otevřená smyčka, Vypnuto), pozastavit / znovu povolit smyčku nebo odpojit / znovu připojit pumpu.
   
   * Pokud krátce stisknete ikonu smyčky, je po výběru některé možnosti v dialogu smyčky vyžadováno ověření
   
   ![Loop status menu](../images/Home2020_Loop_Dialog.png)

### Sekce D – IOB, COB, BR a AS

![Sekce D](../images/Home2020_TBR.png)

* Injekční stříkačka: aktivní inzulín (IOB) - množství aktivního inzulinu v těle
   
   * Ukazatel aktivního inzulínu by měl být nula, pokud běží pouze váš standardní bazál a žádný z předchozích bolusů už nemá aktivní zůstatek. 
   * IOB může být i záporný, pokud byl dříve aktivován snížený bazál.
   * Stisknutím ikony zobrazíte rozdělení bolusové a bazální dávky

* Klas: [aktivní sacharidy (COB)](../Usage/COB-calculation.rst) – dosud neabsorbované sacharidy, které jste již zkonzumovali -> ikona pulzuje, pokud je nutné doplnit sacharidy

* Fialový řádek: bazál – změny ikon odrážející dočasné změny bazálu (rovná linka při 100 %) 
   * Stisknutím ikony zobrazíte základní bazální dávku a podrobnosti o jakémkoli dočasném bazálu (včetně zbývající doby trvání)
* Šipky nahoru a dolů: indikace aktuálního stavu [autosens](../Usage/Open-APS-features#autosens) (povoleno nebo zakázáno) a hodnota je zobrazena pod ikonou

#### Požadavek sacharidů

![Požadavek sacharidů](../images/Home2020_CarbsRequired.png)

* Návrhy sacharidů jsou uvedeny v případě, že algoritmus detekuje potřebu sacharidů.
* Děje se tak tehdy, když si algoritmus oref myslí, že vás nedokáže zachránit zastavením bazálu (nulový bazál) a že budete potřebovat další sacharidy.
* Oznámení jsou mnohem sofistikovanější než ta z bolusového kalkulátoru. Můžete vidět návrh sacharidů, zatímco bolusová kalkulačka neobsahuje chybějící sacharidy.
* V případě potřeby může být notifikace vyžadovaných sacharidů odeslána do Nightscoutu. Notifikace se pak zobrazí v Nightscoutu a bude vysílána.

### Sekce E – Stavové indikátory

![Sekce E](../images/Home2020_StatusLights.png)

* Stavové indikátory zobrazují vizuální varování pro 
   * Stáří kanyly
   * Stáří inzulínu (doba použití aktuálního zásobníku)
   * Stav zásobníku (jednotky)
   * Stáří senzoru
   * Stáří a úroveň (%) baterie
* Pokud dojde k dosažení prahové hodnoty, zobrazí se hodnoty žlutě.
* Pokud dojde k dosažení kritické prahové hodnoty, hodnoty se zobrazí červeně.
* Nastavení indikátorů lze změnit v [Nastavení](../Configuration/Preferences#status-lights).

### Sekce F – Hlavní graf

![Sekce F](../images/Home2020_MainGraph.png)

* Graf zobrazuje vaši glykémii (BG), jak je načtena z vašeho senzoru (CGM). 
* Zde jsou zobrazeny poznámky zadané na záložce Akce, jako jsou kalibrace pomocí měření glykémie z prstu, záznamy sacharidů a přepnutí profilu. 
* Dlouhým přidržením prstu na grafu změníte časové měřítko. Můžete si vybrat 6, 12, 18 nebo 24 hodin.
* Zelená plocha zobrazuje váš cílový rozsah. Lze ji upravit v [Nastavení](../Configuration/Preferences#range-for-visualization).
* Modré trojúhelníky znázorňují jednotlivé [SMB](../Usage/Open-APS-features#super-micro-bolus-smb) – jsou-li povoleny v [Nastavení](../Configuration/Preferences#openaps-smb-settings).
* Volitelné informace:
   
   * Predikce
   * Bazály
   * Aktivita – Křivka aktivity inzulínu

#### Aktivovat volitelné informace

* Kliknutím na trojúhelník na pravé straně hlavního grafu vyberete, které informace se zobrazí v hlavním grafu.
* Pro hlavní graf jsou k dispozici pouze tři možnosti nad řádkem "\---\---- Graf 1 \---\----".
   
   ![Main graph setting](../images/Home2020_MainGraphSetting.png)

#### Linky predikce

* **Oranžová** linka: [COB](../Usage/COB-calculation.rst) (barva se obecně používá k vizualizaci COB a sacharidů)
   
   Linka predikce ukazuje, jak se bude vaše glykémie (ne pouze samotné COB!) vyvíjet na základě aktuálního nastavení pumpy a za předpokladu, že odchylky způsobené absorpcí sacharidů zůstanou konstantní. Tato linka se zobrazí pouze v případě, že je známý COB.

* **Tmavě modrá** linka: IOB (barva se obecně používá k vizualizaci IOB a inzulínu)
   
   Linka předpovědi ukazuje, co by se stalo pouze pod vlivem inzulínu. Například, pokud jste aplikovali nějaký inzulín a pak nejedli žádné sacharidy.

* **Světle modrá** linka: nulový dočasný bazál (předpověď glykémie, pokud by byl dočasný bazál nastaven na 0 %)
   
   Linka předpovědi ukazuje, jak by se změnila trajektorie IOB, pokud pumpa zastaví všechny dodávky inzulínu. (0% dočasný bazál).

* **Tmavě žlutá** linka: [UAM](../Configuration/Sensitivity-detection-and-COB#sensitivity-oref1) (neohlášená jídla)
   
   Neohlášená jídla znamenají, že je zjištěn výrazný nárůst glykemie v důsledku jídla, adrenalinu nebo jiných vlivů. Linka předpovědi je podobná ORANŽOVÉ COB lince, ale předpokládá, že se odchylky budou snižovat konstantní rychlostí (rozšířením současné rychlosti snížení).

Obvykle vaše skutečná křivka glykémie končí uprostřed těchto linek nebo blízko k té, jejíž předpoklady se nejvíce podobají vaší situaci.

#### Bazály

* **Nepřerušovaná modrá** linka ukazuje bazál z pumpy, který se aktuálně vydává.
* **Tečkovaná modrá** linka ukazuje, jaký bazál by se vydával, pokud by nedocházelo k žádné úpravě dočasného bazálu (TBR).
* V době, kdy je vydáván standardní bazál, je plocha pod linkou zbarvena tmavě modře.
* Když je bazální dávka dočasně upravena (zvýšena nebo snížena), plocha pod křivkou je znázorněna světle modře.

#### Aktivita

* **Tenká žlutá** linka ukazuje aktivitu Inzulínu. 
* Je založena na očekávaném poklesu glykémie odpovídajícímu množství inzulínu, pokud nebyly přítomny žádné jiné faktory (jako např. sacharidy).

### Sekce G – Další grafy

* Můžete aktivovat až čtyři další grafy pod hlavním grafem.
* Chcete-li otevřít nastavení pro další grafy, klepněte na trojúhelník na pravé straně [hlavního grafu](../Getting-Started/Screenshots#section-f-main-graph) a rolujte dolů.

![Additional graph settings](../images/Home2020_AdditionalGraphSetting.png)

* Chcete-li přidat další graf, zaškrtněte políčko vpravo u jeho názvu (např. \---\---- Graf 1 \---\----).

#### Absolutní inzulin

* Aktivní inzulin včetně bolusů **a bazálu**.

#### Aktivní inzulín

* Zobrazuje vydaný inzulín, který je aktivní (= aktivní inzulín v těle). Zahrnuje inzulín z bolusu a dočasného bazálu (**ale nezahrnuje bazální dávky nastavené ve vašem profilu**).
* Pokud by neexistovaly žádné [SMB](../Usage/Open-APS-features#super-micro-bolus-smb), žádné bolusy ani žádné TBR během doby DIA, tato hodnota by byla nula.
* IOB může být záporný, pokud již není aktivní žádný bolus a po delší dobu byl nastaven nulový/nízký dočasný bazál.
* Odbourávání závisí na vaší hodnotě [DIA a nastavení inzulinového profilu](../Configuration/Config-Builder#local-profile-recommended). 

#### Zbývající sacharidy

* Shows the carbs you have on board (= active, not yet decayed carbs in your body). 
* Vstřebávání závisí na odchylkách, které detekuje algoritmus. 
* Pokud se zjistí vyšší absorpce, než se očekávalo, může dojít k vydání inzulinu. To bude mít za následek zvýšení IOB (zda více či méně závisí na vašich bezpečnostních nastaveních). 

#### Odchylky

* **ŠEDÉ** sloupce zobrazují odchylku způsobenou sacharidy. 
* **ZELENÉ** sloupce ukazují, že je glykémie vyšší, než algoritmus očekával. Green bars are used to increase resistance in [Autosens](../Usage/Open-APS-features#autosens).
* **ČERVENÉ** sloupce ukazují, že je glykémie nižší, než algoritmus očekával. Red bars are used to increase sensitivity in [Autosens](../Usage/Open-APS-features#autosens).
* **YELLOW** bars show a deviation due to UAM.
* **BLACK** bars show small deviations not taken into account for sensitivity

#### Citlivost

* Shows the sensitivity that [Autosens](../Usage/Open-APS-features#autosens) has detected. 
* Citlivost je výpočet citlivosti na inzulín v důsledku pohybu, hormonů atd.

#### Aktivita

* Shows the activity of insulin, calculated by your insulin profile (it's not derivative of IOB). 
* Hodnota je vyšší pro inzulín blíže době špičky.
* Derivace by znamenala, že aktivita bude záporná, pokud IOB klesá. 

#### Odchylka sklonu

* Internal value used in algorithm.

### Section H - Buttons

![Homescreen buttons](../images/Home2020_Buttons.png)

* Buttons for insulin, carbs and Calculator are 'always on'. 
* Other Buttons have to be setup in [preferences](../Configuration/Preferences#buttons).

#### Inzulín

![Insulin button](../images/Home2020_ButtonInsulin.png)

* To give a certain amount of insulin without using [bolus calculator](#bolus-wizard).
* By checking the box you can automatically start your [eating soon temp target](../Configuration/Preferences#default-temp-targets).
* If you do not want to bolus through pump but record insulin amount (i.e. insulin given by syringe) check the corresponding box.

#### Sacharidy

![Carbs button](../images/Home2020_ButtonCarbs.png)

* To record carbs without bolusing.
* Certain [pre-set temporary targets](../Configuration/Preferences#default-temp-targets) can be set directly by checking the box.
* Time offset: When will you / have you been eaten carbs (in minutes).
* Duration: To be used for ["extended carbs"](../Usage/Extended-Carbs.rst)
* You can use the buttons to quickly increase carb amount.
* Notes will be uploaded to Nightscout - depending on your settings for [NS client](../Configuration/Preferences#nsclient).

#### Kalkulačka

* See Bolus Wizard [section below](#bolus-wizard)

#### Calibrations

* Sends a calibration to xDrip+ or opens Dexcom calibration dialogue.
* Must be activated in [preferences](../Configuration/Preferences#buttons).

#### CGM

* Opens xDrip+.
* Back button returns to AAPS.
* Must be activated in [preferences](../Configuration/Preferences#buttons).

#### Průvodce rychlým bolusem

* Easily enter amount of carbs and set calculation basics.
* Details are setup in [preferences](../Configuration/Preferences#quick-wizard).

## Bolus Wizard

![Bolusová kalkulačka](../images/Home2020_BolusWizard_v2.png)

Když se chystáte odesílat bolus k jídlu, dobře se k tomu hodí funkce kalkulačka.

### Section I

* BG field is normally already populated with the latest reading from your CGM. Pokud právě nemáte senzor v provozu, pak bude pole prázdné. 
* Do pole „Sacharidy“ vkládáte odhadované množství sacharidů (nebo ekvivalentní hodnotu), ke kterému chcete poslat bolus. 
* The CORR field is if you want to modify the end dosage for some reason.
* The CARB TIME field is for pre-bolusing so you can tell the system that there will be a delay before the carbs are to be expected. Můžete zde zadat i záporné číslo, pokud později dopichujete bolus k již dříve zkonzumovaným sacharidům.

#### Eating reminder

* For carbs in the future the alarm checkbox can be selected (and is by default when a time in the future is entered) so that you can be reminded at a time in the future of when to eat the carbs you have input into AndroidAPS
   
   ![BolusWizard with Eating Reminder](../images/Home2021_BolusWizard_EatingReminder.png)

### Section J

* SUPERBOLUS je funkce, kdy je k dávce okamžitého bolusu přičtený bazální inzulín za následující dvě hodiny a zároveň je na pumpě nastavená dočasná bazální dávka 0% na dvě hodiny, aby se tak kompenzoval extra podaný inzulín. The option only shows when "Enable [superbolus](../Configuration/Preferences#superbolus) in wizard" is set in the [preferences overview](../Configuration/Preferences#overview).
* Cílem je dodat inzulín dřív, aby se snížil kopec, který na grafu glykémie obvykle následuje.
* For details visit [diabetesnet.com](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/).

### Section K

* Zobrazuje vypočtený bolus. 
* Pokud množství již aktivního inzulínu v krvi převyšuje vypočtený bolus, pak se jen zobrazí doporučené množství sacharidů k jeho pokrytí.
* Notes will be uploaded to Nightscout - depending on your settings for [NS client](../Configuration/Preferences#nsclient).

### Section L

* Details of wizard's bolus calculation.
* Můžete zrušit označení všech, které se vám nehodí, ale normálně by k tomu neměl být důvod.
* For safety reasons the **TT box must be ticked manually** if you want the bolus wizard to calculate based on an existing temporary target.

#### Kombinace COB a IOB a jejich význam

* For safety reasons IOB boxed cannot be unticked when COB box is ticked as you might run the risk of too much insulin as AAPS is not accounting for what’s already given.
* Pokud vyberete COB a IOB, budou při výpočtu zohledněny nestrávané sacharidy, které již nejsou pokryty inzulinem + veškerý inzulin, který byl dodán jako DBD nebo SMB.
* Pokud vyberete IOB bez COB, AAPS bude zohledňovat již vydaný inzulin, ale nezapočítá žádné zkonzumované sacharidy, které dosud nejsou stráveny. To vede k oznámení o 'chybějících sacharidech'.
* If you bolus for **additional food** shortly after a meal bolus (i.e. additional desert) it can be helpful to **untick all boxes**. Tak lze přidat pouze nově zkonzumované sacharidy, jelikož hlavní jídlo dosud nemusí být stráveno, takže IOB krátce po bolusu k jídlu nebude přesně odpovídat množství COB.

#### Chybná detekce COB

![Pomalá absorpce sacharidů](../images/Calculator_SlowCarbAbsorption.png)

* Pokud uvidíte výše uvedené varování po použití průvodce bolusem, funkce AndroidAPS zjistila, že vypočtená hodnota COB může být chybná. 
* Takže chcete-li si dát bolus znovu po předchozím jídle s COB, měli byste si dát pozor na možné předávkování inzulinem! 
* Podrobnosti viz pokyny na [stránce výpočtu COB](../Usage/COB-calculation#detection-of-wrong-cob-values).

## Action tab

![Záložka akce](../images/Home2021_Action.png)

### Actions - section M

* Button [profile switch](../Usage/Profiles#profile-switch) as an alternative to pressing the [current profile](../Getting-Started/Screenshots#section-b-profile-target) on homescreen.
* Button [temporary target](../Usage/temptarget#temp-targets) as an alternative to pressing the [current target](../Getting-Started/Screenshots#section-b-profile-target) on homescreen.
* Button to start or cancel a temporary basal rate. Please note that the button changes from “TEMPBASAL” to “CANCEL x%” when a temporary basal rate is set.
* Even though [extended boluses](../Usage/Extended-Carbs#extended boluses) do not really work in a closed loop environment some people were asking for an option to use extended bolus anyway.
   
   * This option is only available for Dana RS and Insight pumps. 
   * Closed loop will automatically be stopped and switched to open loop mode for the time running extended bolus.
   * Make sure to read the [details](../Usage/Extended-Carbs#extended boluses) before using this option.

### Careportal - section N

* Displays information on
   
   * sensor age & level (battery percentage)
   * insulin age & level (units)
   * cannula age
   * pump battery age & level (percentage

* Less information will be shown if [low resolution skin](../Configuration/Preferences#skin) is used.

#### Sensor level (battery)

* Needs xDrip+ nightly build Dec. 10, 2020 or newer.
* Works for CGM with additional transmitter such as MiaoMiao 2. (Technically sensor has to send cat level information to xDrip+.)
* Thresholds can be set in [preferences](../Configuration/Preferences#status-lights).
* If sensor level is the same as phone battery level you xDrip+ version is probably too old and needs an update.
   
   ![Sensor levels equals phone battery level](../images/Home2021_ActionSensorBat.png)

### Careportal - section O

* BG check, prime/fill, sensor insert and pump battery change are the base for the data displayed in [section N](#careportal-section-n).
* Prime/Fill allows you to record pump site and insulin cartridge change.
* Section O reflects the Nightscout careportal. So exercise, announcement and question are special forms of notes.

### Tools - section P

#### History Browser

* Allows you to ride back in AAPS history.

#### CDD

* Total daily dose = bolus + basal per day
* Někteří lékaři doporučují – hlavně pro nové uživatele pumpy – poměr bazál-bolus 50:50. 
* Poměr se proto vypočítá jako TDD / 2 * TBB (celková bazální dávka = součet hodnot bazálních dávek za 24 hodin). 
* Jiní dávají přednost hodnotám, kdy TBB tvoří 32 % až 37 % z TDD. 
* Stejně jako podobná pravidla má i toto v reálném životě omezenou platnost. Poznámka: Váš diabetes může být jiný!

![Histroy browser + TDD](../images/Home2021_Action_HB_TDD.png)

## Inzulínový profil

![Inzulínový profil](../images/Screenshot_insulin_profile.png)

* This shows the activity profile of the insulin you have chosen in [config builder](../Configuration/Config-Builder#insulin). 
* FIALOVÁ linka ukazuje, jaké množství inzulínu průběžně v čase zůstává od aplikace po úplné rozložení, a MODRÁ linka ukazuje, nakolik je v čase aktivní.
* The important thing to note is that the decay has a long tail. 
* Pokud jste byli zvyklí na ruční podávání inzulínu, pravděpodobně jste předpokládali, že inzulín se bude postupně spotřebovávat asi 3,5 hodiny. 
* Avšak pokud používáte smyčku, tak na zbytkovém inzulínu (na onom „ocasu“) záleží. Pokud s ním totiž počítáte, výsledné výpočty jsou mnohem přesnější. Zvláště patrné je to v rekurzivním výpočtu algoritmu AndroidAPS, když se počítá řada malých zbytků inzulínu.

Podrobnější informace o různých typech inzulínu, o jejich profilech aktivity a o tom, proč je to vše důležité, najdete v článku [Understanding the New IOB Curves Based on Exponential Activity Curves](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

A také si o tom můžete přečíst výborný článek blogu zde: [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

And even more at: [Exponential Insulin Curves + Fiasp](https://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Stav pumpy

![Stav pumpy](../images/Screenshot_PumpStatus.png)

* Different information on pump status. Displayed information depends on your pump model.
* See [pumps page](../Hardware/pumps.rst) for details.

## Péče

Careportal replicated the functions you will find on your Nightscout screen under the “+” symbol which allows you to add notes to your records.

### Review carb calculation

![Review carb calculation on treatment tab](../images/Screenshots_TreatCalc.png)

* If you have used the [Bolus Wizard](../Getting-Started/Screenshots#bolus-wizard) to calculate insulin dosage you can review this calculation later on treatments tab.
* Just press the green Calc link. (Depending on pump used insulin and carbs can also be shown in one single line in treatments.)

### Korekce sacharidy

![Ošetření na 1 nebo 2 řádky](../images/Treatment_1or2_lines.png)

Záložka ošetření může být použita k opravě chybných záznamů sacharidů (např. jste sacharidy přecenili nebo podcenili).

1. Zkontrolujte a zapamatujte si aktuální COB a IOB na domovské obrazovce.
2. V závislosti na pumpě se mohou sacharidy v záložce ošetření zobrazovat společně s inzulínem v jednom řádku nebo jako samostatný záznam (např. s Danou RS).
3. Odstraňte záznam s chybným množstvím sacharidů.
4. Ujistěte se, že sacharidy byly úspěšně odstraněny kontrolou COB na domovské obrazovce.
5. Kontrolu proveďte také pro IOB, pokud v záložce ošetření jeden řádek obsahuje sacharidy i inzulín.
   
   -> Nejsou-li sacharidy odstraněny tak, jak bylo zamýšleno, a přidáte další sacharidy, jak je zde vysvětleno (6.), COB budou příliš vysoké a to může vést k podání příliš vysokého množství inzulínu.

6. Zadejte správné množství sacharidů pomocí tlačítka na domovské obrazovce a ujistěte se, že jste nastavili správný čas události.

7. Pokud je v záložce ošetření pouze jedna řádka obsahující sacharidy i inzulín, musíte také přidat množství inzulínu. Nezapomeňte nastavit správný čas události a po potvrzení nového záznamu zkontrolujte IOB na domovské obrazovce.

## Loop, AMA / SMB

* These tabs show details about the algorithm's calculations and why AAPS acts the way it does.
* Calculations are each time the system gets a fresh reading from the CGM.
* For more details see [APS section on config builder page](../Configuration/Config-Builder#aps).

## Profil

![Profil](../images/Screenshots_Profile.png)

* Profile contains information on your individual diabetes settings:
   
   * DIA (Duration of Insulin Action)
   * IC or I:C: Insulin to Carb ratio
   * ISF: Insulin Sensitivity Factor
   * Bazál
   * Target: Blood glucose level that you want AAPS to be aiming for

* As of version 3.0 only [local profile](../Configuration/Config-Builder#local-profile) is possible. The local profile can be edited on your smartphone and synced to your Nightscout site.

## Bolus

History of the following treatments:

* Bolus & carbs -> option to [remove entries](../Getting-Started/Screenshots#carb-correction) to correct history
* [Prodloužený bolus](../Usage/Extended-Carbs#extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
* Temporary basal rate
* [Dočasný cíl](../Usage/temptarget.md)
* [Přepínání profilu](../Usage/Profiles.md)
* [Careportal](../Usage/CPbefore26#careportal-discontinued) - notes entered through action tab and notes in dialogues

## BG Source - xDrip+, BYODA...

![BG Source tab - here xDrip](../images/Screenshots_BGSource.png)

* Depending on your BG source settings this tab is named differently.
* Shows history of CGM readings and offers option to remove reading in case of failure (i.e. compression low).

## NSClient

![NSClient](../images/Screenshots_NSClient.png)

* Displays status of the connection with your Nightscout site.
* Settings are made in [preferences](../Configuration/Preferences#nsclient). You can open the corresponding section by clicking the cog wheel on the top right side of the screen.
* For troubleshooting see this [page](../Usage/Troubleshooting-NSClient.md).