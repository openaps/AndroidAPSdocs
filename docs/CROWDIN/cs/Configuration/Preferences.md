# Nastavení

Open preferences by clicking three-dot-menu on top right side of homescreen:

![How to open Preferences](../images/PreferencesOpen.png)

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

![Preferences - Overview - Advanced Settings](../images/PreferencesOverviewAdvanced_V2_5.png)

* General setting to deliver only part of bolus wizard result. Only the set percentage (must be between 10 and 100) of the calculated bolus is delivered when using bolus wizard. The percentage is shown in bolus wizard.
    
    ![Bolus Wizard 80%](../images/BolusWizardPartDelivery.png)

* Option to enable [superbolus](../Getting-Started/Screenshots#section-a) in bolus wizard.

* Status baterie a zásobníku vizuálně upozorňuje na nízkou hladinu inzulínu a baterie, a tak zajišťuje jejich včasnou výměnu. Extended version shows elapsed time / battery percentage.
    
    ![Stavové indikátory – detail](../images/StatusLights_V2_5.png)
    
    Settings for status lights must be made in Nightscout settings. Set the following variables:
    
    * Cannula age: CAGE_WARN and CAGE_URGENT (standard 48 and 72 hours)
    * Insulin age (reservoir): IAGE_WARN and IAGE_URGENT (standard 72 and 96 hours)
    * Sensor age: SAGE_WARN and SAGE_URGENT (standard 164 and 166 hours)
    * Battery age: BAGE_WARN and BAGE_URGENT (standard 240 and 360 hours)

* Treshold for warning reservoir level and critical reservoir level.

* Treshold for warning battery level and critical battery level.

## Bezpečnost zadání ošetření

### Maximální povolený bolus [U]

Udává maximální velikost bolusu, jakou může AAPS poslat. Nastavení slouží jako bezpečnostní limit, který zabrání odeslání příliš velkého bolusu vzhledem k množství zadaných sacharidů nebo který ohlídá chyby uživatele. Doporučuje se nastavit ho na rozumnou hodnotu zhruba odpovídající maximálnímu bolusu, který jste kdy poslali na jídlo. Toto omezení platí také pro výsledky kalkulačky bolusu.

### Maximální povolené sacharidy [g]

To je maximální množství sacharidů, které AAPS kalkulačka bolusu dovolí započítat. Nastavení slouží jako bezpečnostní limit, který zabrání odeslání příliš velkého bolusu vzhledem k množství zadaných sacharidů nebo který ohlídá chyby uživatele. Je doporučeno nastavit limit na nějakou rozumnou hodnotu, která odpovídá maximálnímu množství sacharidů, které jste kdy v jídle snědli.

## Smyčka

Zde můžete přepínat mezi otevřenou a uzavřenou smyčkou. Otevřená smyčka znamená, že návrhy na změny dočasného bazálu jsou sice prováděny na základě skutečných dat, zobrazí se jako upozornění, ale Vy je musíte ručně potvrdit a ručně zadat do pumpy. Uzavřená smyčka znamená, že dočasné bazály jsou automaticky, bez jakéhokoliv potvrzení z vaší strany, posílány přímo do pumpy. Na úvodní obrazovce se zobrazí v levém horním rohu, zda používáte smyčku otevřenou nebo uzavřenou. Stisknutím a podržením tohoto tlačítka je možno přepínat mezi smyčkami.

## Pokročilý asistent jídla v OpenAPS (AMA)

OpenAPS Advanced Meal Assist (AMA) umožňuje systému rychleji reagovat po bolusu na jídlo, pokud zadáte sacharidy správně. Turn it on in the Config tab to view the safety settings here, you will need to have completed [Objective 9](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama) to use this feature. O tomto nastavení a [ o Autosens si můžete přečíst více v dokumentaci k OpenAPS ](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

### Maximální povolený bazál [U/h]

Toto nastavení existuje jako bezpečnostní limit, aby se zabránilo AndroidAPS v nastavení nebezpečně vysokého bazálu. Hodnota se udává v jednotkách za hodinu (U/h). Doporučuje se nastavit na rozumnou hodnotu. Je doporučeno vzít si ze svého profilu **nejvyšší hodnotu bazálu**, a **vynásobit ji 4**. Například, když je nejvyšší nastavení bazálu ve Vašem profilu 0,5 jednotky za hodinu, můžete to vynásobit 4 a dostanete hodnotu 2 jednotky za hodinu.

### Maximální bazální IOB [U]

Množství dodatečného bazálního inzulínu (v jednotkách), který je povolený, aby se nahromadil v těle navíc oproti Vašemu normálnímu bazálu. Jakmile je tato hodnota dosažena, AAPS zastaví přidávání dodatečného bazálu, dokud hodnota inzulínu v těle (IOB) opět neklesne pod tuto hodnotu.

* Tato hodnota nebere v úvahu bolusový IOB, pouze IOB z bazálu.
* This value is calculated and monitored independently of your normal basal rate. V úvahu je brán pouze dodatečný bazální inzulín převyšující normální bazál.
* Hodnota se udává v inzulínových jednotkách (U).

Když začínáte se smyčkou, ** je doporučováno nastavit si na nějaký čas maximální bazální IOB na 0**, než si na systém zvyknete. Toto zabrání AndroidAPS v tom, aby přidal jakýkoliv bazální inzulín. Během této doby bude AndoidAPS pořád schopen omezit či vypnout Váš bazální inzulín, aby pomohl předejít hypoglykémii.

Toto je důležitý krok kvůli:

* získání dostatečného času na to, abyste se naučili AndroidAPS ovládat a vysledovali, jak funguje;
* perfektnímu vyladění nastavení Vašeho bazálního profilu a faktoru citlivosti na inzulín (ISF);
* zjištění, jak AndroidAPS omezuje Váš bazální inzulín, aby se předešlo hypoglykémii.

Když se na to už budete cítit, můžete dovolit systému, aby Vám začal posílat další bazální inzulín, a to navýšením hodnoty maximálního množství bazálního inzulínu v těle. Doporučuje se vzít **nejvyšší hodnotu bazálu **ve Vašem profilu a ** vynásobit ji 3**. Například, je-li nejvyšší hodnota bazálu ve Vašem profilu 0,5 jednotky za hodinu, dostanete po vynásobení 3 hodnotu 1,5 U/h.

* Začněte tedy s touto hodnotou a postupem času ji opatrně navyšujte. 
* Toto jsou samozřejmě pouze návrhy; u každého člověka to je jiné. Možná zjistíte, že potřebujete méně nebo více, než je zde doporučeno. Vždy ale začněte opatrně a přidávejte postupně.

*Poznámka: Jako bezpečnostní prvek je u dospělého pacienta natvrdo nastaveno maximální bazální IOB na 7 U.*

## Nastavení absorpce sacharidů

Pokud jste si zvolili použití AMA Autosense, pak si budete moct zadat maximální čas absorpce jídla a také požadovanou frekvenci aktualizace Autosense. Pokud často jíte jídla s vysokým obsahem tuků nebo bílkovin, budete si muset nastavit delší čas absorpce jídla.

## Nastavení pumpy

V závislosti na ovladači pumpy vybraném v konfiguraci se zde mohou vyskytovat i jiné volby. Pair and set your pump up according to the pump related instructions:

* [DanaR Insulin Pump](../Configuration/DanaR-Insulin-Pump.md) 
* [DanaRS Insulin Pump](../Configuration/DanaRS-Insulin-Pump.md) 
* [Pumpa Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md) 
* [Pumpa Medtronic](..//Configuration/MedtronicPump.md)

Používáte-li AndroidAPS pouze jako otevřenou smyčku, vyberte v nastavení Virtuální pumpu.

## NS Client

* Zde si nastavte svou ‘Nightscout URL’ (https://jmenovasiwebovky.herokuapp.com nebo https://jmenovasiwebovky.azurewebsites.net) a heslo ‘API secret’ (12místné heslo z Vašeho heroku nebo azure). Toto umožní, aby data byla načítána a zapisována mezi Nightscoutem a AndroidAPS. Pokud jste uvízli v cíli 1, prověřte možné překlepy.
* **Ujistěte se, že adresa URL na konci NEOBSAHUJE /api/v1/.**
    
    ![Adresa URL NSClienta](../images/NSClientURL.png)

* „Zaznamenávat spuštění aplikace do NS" vloží do vašich záznamů péče poznámku pokaždé, když je aplikace spuštěna. Aplikace by se neměla spouštět vícekrát než jednou denně. Pokud k tomu odchází častěji, jde obvykle o problém.

* „Nastavení alarmů“ vám umožní vybrat, jaké výchozí Nightscout alarmy se budou v aplikaci používat. Pro fungování alarmů je nutné mít v [Azure, Heroku nebo ns.10be. de](http://www.nightscout.info/wiki/welcome/website-features#customalarms) nastavené proměnné pro alarmy Urgent High, High, Low a Urgent Low. Alarmy budou fungovat pouze za podmínky, že jste stále připojeni k Nightscoutu a jsou určené pro rodiče/asistenty. Pokud máte zdroj glykémie přímo na svém telefonu, pak místo nich raději použijte alarmy místní aplikace (např. v xDrip+).
* „Povolení odesílání“ bude sdílet vaše záznamy péče také jiným aplikacím na mobilu, např. xDrip+.
* Chcete-li používat autotune, musíte mít vybráno „Vždy používat absolutní hodnoty bazálu“.
    
    **Do not activate this when using [Insight pump](https://androidaps.readthedocs.io/en/latest/EN/Configuration/Accu-Chek-Insight-Pump#settings-in-aaps)!** It would lead to false TBR settings in Insight pump.

## SMS komunikátor

Toto nastavení dovoluje vzdálené ovládání telefonu s AAPS posláním SMS s textem, jako je zastavení smyčky nebo poslání bolusu. Další informace jsou uvedeny v části [SMS příkazy](../Children/SMS-Commands.rst), ale zobrazí se v nastavení, pouze pokud jste vybrali tuto možnost v konfigurátoru.

## Jiné

* Zde můžete nastavit výchozí hodnoty pro dočasné cíle. Dočasné cíle mohou být různé („Před jídlem“ či „Aktivita“). Pokud zvolíte dočasný cíl a pak vyberete např. „Před jídlem“ z rozbalovací nabídky, pak se trvání a hodnota automaticky předvyplní údaji, které jste uvedli právě v dříve zmiňovaném nastavení. Další informace o použití Dočasných cílů naleznete v [vlastnosti OpenAPS](../Usage/Open-APS-features.md). 
* Můžete nastavit výchozí množství pro plnění kanyly – toto množství pak bude pumpa do kanyly/setu plnit a tento inzulin se bude odečítat ze zásobníku, ale přitom se nebude započítávat do IOB výpočtů. Podívejte se do příbalového letáku kanyly, kolik jednotek je nutné do kanyly naplnit podle délky jehly a hadičky.
* Můžete změnit nastavení zobrazení hlavní stránky a vzhled hodnot glykémie podle toho, zda jsou v cílovém rozsahu. Toto nastavení ovlivňuje pouze vzhled grafu a nemá žádný vliv ani na váš cíl glykémie ani na výpočty.
* „Krátké názvy modulů“ vám umožní, abyste viděli více záložek na jedné obrazovce, např. štítek záložky „Open APS“ se změní jen na „OAPS“, „Ošetření“ se změní na „OŠET“ atd.
* „Místní výstrahy“ vám umožňují rozhodnout, po jaké době nedostupnosti dat nebo pumpy se zobrazí výstraha. Pokud často dostáváte výstrahu, že je pumpa nedostupná, tak zapněte Hlídač BT v rozšířeném nastavení v sekci pumpa.

## Možnosti dat

* „Odesílání do Fabric“ odešle vývojářům reporty o pádech aplikace a data o používání.