# Nastavení

Otevřete nastavení klepnutím na tři tečky v pravém horním rohu hlavní obrazovky:

![Jak otevřít Nastavení](../images/PreferencesOpen.png)

## Heslo do nastavení

Tato volba Vám umožňuje nastavit heslo, abyste předešli náhodným nebo neoprávněným změnám v nastavení. Pokud zde zadáte heslo, budete požádáni, abyste ho zadali pro vstup do Nastavení. Chcete-li odstranit heslo, vymažte text v nastavení u této volby.

## Věk pacienta

V tomto nastavení jsou stanoveny bezpečnostní limity v závislosti na vámi zvoleném věku. Pokud začnete narážet na limit (jako maximální bolus), je čas posunout se o stupeň výš. Není správné zvolit vyšší věk, než je skutečný, jelikož to může vést k předávkování zadáním nesprávné hodnoty v dialogovém okně pro inzulín (např. vynecháním desetinné čárky). Chcete-li zjistit aktuální pevně nastavené bezpečnostní limity, podívejte se na popis vámi používaného algoritmu na [této stránce](../Usage/Open-APS-features.md).

## Obecné

* Vyberte svůj jazyk. Pokud není Váš jazyk dostupný, nebo nejsou všechna slova přeložena, je možnost tato slova přeložit, nebo dát návrh na [Crowdin](https://crowdin.com/project/androidaps) anebo se zeptat na [gitter chatroom](https://gitter.im/MilosKozak/AndroidAPS).

## Přehled

* Jestliže plánujete prezentaci aplikace, ponechá obrazovku neustále zapnutou. Tento režim spotřebovává velké množství energie, takže je nutné připojit mobil do nabíječky.
* Tlačítka vám umožňují vybrat si, jaká tlačítka se budou zobrazovat na úvodní obrazovce. Taktéž obsahují několik nastavení pro vyskakovací okna, která se objeví po stisknutí příslušného tlačítka.
* Nastavení rychlých bolusů Vám dovoluje přidat na hlavní obrazovku tlačítko pro často používaná jídla. Když pak toho tlačítko vyberete, bude na základě aktuálního stavu (dle aktuální hodnoty glykémie, aktivního inzulínu atd. - pokud to nastavíte) vypočítán odpovídající bolus.

### Rozšířená nastavení

![Nastavení - Přehled - Rozšířená nastavení](../images/PreferencesOverviewAdvanced_V2_5.png)

* Obecné nastavení umožňující zvolit, že bude vydána jen určitá část z vypočteného bolusu. Při použití bolusové kalkulačky bude vydána pouze zadaná procentuální část (musíte zadat hodnotu mezi 10 a 100). Procentuální hodnota je zobrazena v kalkulačce.
    
    ![Bolusová kalkulačka 80%](../images/BolusWizardPartDelivery.png)

* Možnost povolit [superbolus](../Getting-Started/Screenshots#section-a) v bolusové kalkulačce.

### Stavové indikátory

* Stavové indikátory vizuálně upozorňují na nízkou hladinu inzulínu a baterie a také na včasnou výměnu kanyly. Rozšířená verze ukazuje čas/procento baterie.
    
    ![Stavové indikátory – detail](../images/StatusLights_V2_5.png)
    
    Nastavení stavových indikátorů je třeba provést v nastavení Nightscoutu. Viz následující proměnné:
    
    * Stáří kanyly: CAGE_WARN a CAGE_URGENT (standardně 48 a 72 hodin)
    * Stáří inzulinu (zásobníku): IAGE_WARN a IAGE_URGENT (standardně 72 a 96 hodin)
    * Stáří senzoru: SAGE_WARN a SAGE_URGENT (standardně 164 a 166 hodin)
    * Stáří baterie: BAGE_WARN a BAGE_URGENT (standardně 240 a 360 hodin)

* Prahová hodnota pro varování a kritické varování týkající se stavu zásobníku.

* Prahová hodnota pro varování a kritické varování týkající se stavu baterie.

## Bezpečnost zadání ošetření

### Maximální povolený bolus [U]

Udává maximální velikost bolusu, jakou může AAPS poslat. Nastavení slouží jako bezpečnostní limit, který zabrání odeslání příliš velkého bolusu vzhledem k množství zadaných sacharidů nebo který ohlídá chyby uživatele. Doporučuje se nastavit ho na rozumnou hodnotu zhruba odpovídající maximálnímu bolusu, který jste kdy poslali na jídlo. Toto omezení platí také pro výsledky kalkulačky bolusu.

### Maximální povolené sacharidy [g]

To je maximální množství sacharidů, které AAPS kalkulačka bolusu dovolí započítat. Nastavení slouží jako bezpečnostní limit, který zabrání odeslání příliš velkého bolusu vzhledem k množství zadaných sacharidů nebo který ohlídá chyby uživatele. Je doporučeno nastavit limit na nějakou rozumnou hodnotu, která odpovídá maximálnímu množství sacharidů, které jste kdy v jídle snědli.

## Smyčka

You can toggle between open and closed looping here.

**Open looping** means TBR suggestions are made based on your data and appear as a notification, but you must manually choose to accept them and manually enter them into your pump.

**Closed looping** means TBR suggestions are automatically sent to your pump without confirmation or input from you.

The homescreen will display in the top left corner whether you are open or closed looping, and pressing and holding this homescreen button will also allow you to toggle between the two.

### Minimal Request Rate

When using open loop you will receive notifications every time AAPS recommends to adjust basal rate. To reduce number of notifications you can either use a wider bg target range or increase percentage of the minimal request rate. This defines the relative change required to trigger a notification.

![Minimal request rate](../images/MinRequestChange.png)

Please note: In closed loop mode a single target instead of target range (i.e. 5,5 mmol instead of 5,0 - 7,0 mmol) is recommended.

## OpenAPS AMA

OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus IF you enter carbs reliably. Turn it on in the Config tab to view the safety settings here, you will need to have completed [Objective 9](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama) to use this feature. You can read more about the settings and [Autosens in the OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

### Max U/hr a Temp Basal can be set to

This setting exists as a safety limit to prevent AAPS from ever being capable of giving a dangerously high basal rate. The value is measured in units per hour (u/hr). Doporučuje se nastavit na rozumnou hodnotu. A good recommendation is to take the **highest basal rate** in your profile and **multiply it by 4**. For example, if the highest basal rate in your profile was 0.5u/hr you could multiply that by 4 to get a value of 2u/hr.

### Maximum basal IOB OpenAPS can deliver [U]

Amount of additional basal insulin (in units) allowed to accumulate in your body, on top of your normal basal profile. Once this value is reached, AAPS will stop giving additional basal insulin until your basal Insulin on Board (IOB) has decayed to within this range again.

* Tato hodnota nebere v úvahu bolusový IOB, pouze IOB z bazálu.
* Tato hodnota je počítána a monitorována nezávisle na vašem normálním bazálu. V úvahu je brán pouze dodatečný bazální inzulín převyšující normální bazál.
* Hodnota se udává v inzulínových jednotkách (U).

When you begin looping, **it is advised to set Max Basal IOB to 0** for a period of time, while you are getting used to the system. This prevents AAPS from giving any additional basal insulin at all. During this time AAPS will still be able to limit or turn off your basal insulin to help prevent hypoglycaemia.

This is an important step in order to:

* získání dostatečného času na to, abyste naučili AndroidAPS ovládat a vysledovat, jak funguje.
* perfektní vyladění nastavení Vašeho bazálního profilu a citlivosti na inzulín (ISF).
* zjištění, jak AndroidAPS omezuje Váš bazální inzulín, aby se předešlo hypoglykémii.

When you feel comfortable, you can allow the system to start giving you additional basal insulin, by raising the Max Basal IOB value. The recommended guideline for this is to take the **highest basal rate** in your profile and **multiply it by 3**. For example, if the highest basal rate in your profile was 0.5u/hr you could multiply that by 3 to get a value of 1.5u.

* Začněte tedy s touto hodnotou a postupem času ji opatrně navyšujte. 
* Toto jsou samozřejmě pouze návrhy; u každého člověka to je jiné. Možná zjistíte, že potřebujete méně nebo více, než je zde doporučeno. Vždy ale začněte opatrně a přidávejte pomalu.

*Note: As a safety feature, Max Basal IOB is hard-limited to 7u.*

## Nastavení absorpce sacharidů

If you have selected to use AMA Autosens then you will be able to enter your maximum meal absorption time and how frequently you want autosense to refresh. If you often eat high fat or protein meals you will need to increase your meal absorption time.

## Nastavení pumpy

The options here will vary depending on which pump driver you have selected in 'Config Builder'. Pair and set your pump up according to the pump related instructions:

* [Inzulinová pumpa DanaR](../Configuration/DanaR-Insulin-Pump.md) 
* [Inzulinová pumpa DanaRS](../Configuration/DanaRS-Insulin-Pump.md) 
* [Pumpa Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md) 
* [Pumpa Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md) 
* [Pumpa Medtronic](..//Configuration/MedtronicPump.md)

If using AndroidAPS to open loop then make sure you have selected Virtual Pump in config builder.

## NS Client

* Zde si nastavte URL nightscoutu (https://jmenovasiaplikace.herokuapp.com, https://jmenovasiaplikace.azurewebsites.net, https://jmenovasiaplikace.ns.10be.de nebo https://jmenovasiaplikace.nightscout.cz) a 'API heslo' (12 znakové heslo, které jste si zvolili na Heroku, Azure, ns10be.de nebo nightscout.cz). To umožní komunikaci (zápis i čtení) mezi Nightscoutem a AndroidAPS. Pokud jste uvízli v cíli 1, prověřte možné překlepy.
* **Ujistěte se, že adresa URL na konci NEOBSAHUJE /api/v1/.**
    
    ![Adresa URL NSClienta](../images/NSClientURL.png)

* „Zaznamenávat spuštění aplikace do NS“ vloží do vašich záznamů péče poznámku pokaždé, když je aplikace spuštěna. Aplikace by se neměla spouštět vícekrát než jednou denně. Pokud k tomu odchází častěji, jde obvykle o problém.

* „Nastavení alarmů“ vám umožní vybrat, jaké výchozí Nightscout alarmy se budou v aplikaci používat. Pro fungování alarmů je nutné mít v [Azure, Heroku nebo ns.10be. de](http://www.nightscout.info/wiki/welcome/website-features#customalarms) nastavené proměnné pro alarmy Urgent High, High, Low a Urgent Low. Alarmy budou fungovat pouze za podmínky, že jste stále připojeni k Nightscoutu, a jsou určené pro rodiče/asistenty. Pokud máte zdroj glykémie přímo na svém telefonu, pak místo nich raději použijte alarmy místní aplikace (např. v xDrip+).
* „Povolit lokální odesílání“ zpřístupní odesílání dat i jiným aplikacím v telefonu, např. xDrip+.
* Chcete-li používat autotune, musíte mít vybráno „Vždy používat absolutní hodnoty bazálu“.
    
    **Nepovolujte tuto volbu, pokud používáte [pumpu Insight](https://androidaps.readthedocs.io/en/latest/EN/Configuration/Accu-Chek-Insight-Pump#settings-in-aaps)!** Vedlo by to k nastavení falešných TBR v pumpě Insight.

## SMS komunikátor

This setting allows remote control of the app by texting instructions to the patients phone which the app will follow such as suspending loop, or bolusing. Further information is described in [SMS Commands](../Children/SMS-Commands.rst) but it will only display in Preferences if you have selected this option in the Config Builder.

## Jiné

* Zde můžete nastavit výchozí hodnoty pro dočasné cíle. Dočasné cíle mohou být různé („Před jídlem“ či „Aktivita“). Pokud zvolíte dočasný cíl a pak vyberete např. „Před jídlem“ z rozbalovací nabídky, pak se trvání a hodnota automaticky předvyplní údaji, které jste uvedli právě v dříve zmiňovaném nastavení. Další informace o použití Dočasných cílů naleznete v [vlastnosti OpenAPS](../Usage/Open-APS-features.md). 
* Můžete nastavit výchozí množství inzulínu pro plnění kanyly. Při plnění kanyly se inzulín bude odečítat ze zásobníku, ale nebude se počítat do výpočtů IOB. Podívejte se do příbalového letáku kanyly a hadičky, kolik jednotek potřebujete pro úplné naplnění. Množství se liší podle konkrétního typu.
* Můžete změnit nastavení zobrazení hlavní stránky a vzhled hodnot glykémie podle toho, zda jsou v cílovém rozsahu. Toto nastavení však ovlivňuje pouze vzhled grafu a nemá žádný vliv ani na váš cíl glykémie ani na výpočty.
* „Krátké názvy modulů“ vám umožní, abyste viděli více záložek na jedné obrazovce, např. štítek záložky „Open APS“ se změní jen na „OAPS“, „Ošetření“ se změní na „OŠET“ atd.
* „Místní výstrahy“ vám umožňují rozhodnout, po jaké době nedostupnosti dat nebo pumpy se zobrazí výstraha. Pokud se často objevuje výstraha, že je pumpa nedostupná, zapněte BT Watchdog v Rozšířeném Nastavení v sekci pumpa.

## Možnosti dat

* „Odesílání do Fabric“ odešle vývojářům reporty o pádech aplikace a data o používání.