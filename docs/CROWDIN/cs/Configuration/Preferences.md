# Nastavení

## Heslo do nastavení

Tato volba Vám umožňuje nastavit heslo, abyste předešli náhodným nebo neoprávněným změnám v nastavení. Pokud zde zadáte heslo, budete požádáni, abyste ho zadali pro vstup do Nastavení. Chcete-li odstranit heslo, tak vymažte text v nastavení u této volby.

## Věk pacienta

V tomto nastavení jsou stanoveny bezpečnostní limity v závislosti na Vámi zvoleném věku. Pokud začnete narážet na limit (jako maximální bolus), je čas posunout se o stupeň výš. Není správné zvolit vyšší věk, než je skutečný, jelikož to může vést k předávkování zadáním nesprávné hodnoty v dialogovém okně pro inzulín (např. vynecháním desetinné čárky). Chcete-li zjistit aktuální pevně nastavené bezpečnostní limity, podívejte se na popis vámi používaného algoritmu na [této stránce](../Usage/Open-APS-features.md).

## Obecné

* Vyberte svůj jazyk. Pokud není Váš jazyk dostupný, nebo nejsou všechna slova přeložena, je možnost tato slova přeložit, nebo dát návrh na [Crowdin](https://crowdin.com/project/androidaps) anebo se zeptat na [gitter chatroom](https://gitter.im/MilosKozak/AndroidAPS).

## Přehled

* Jestliže plánujete prezentaci aplikace, ponechá obrazovku neustále zapnutou. Tento režim spotřebovává velké množství energie, takže je nutné připojit mobil do nabíječky.
* Tlačítka vám umožňují vybrat si, jaká tlačítka se budou zobrazovat na úvodní obrazovce. Taktéž obsahují několik nastavení pro vyskakovací okna, která se objeví po stisknutí příslušného tlačítka.
* Nastavení rychlých bolusů Vám dovoluje přidat na hlavní obrazovku tlačítko pro často používaná jídla. Když pak toho tlačítko vyberete, bude na základě aktuálního stavu (dle aktuální hodnoty glykémie, aktivního inzulínu atd. - pokud to nastavíte) vypočítán odpovídající bolus.
* Pokročilé nastavení pro povolení superbolusu a zobrazení statusu baterie a zásobníku na domovské obrazovce. Status baterie a zásobníku vizuálně upozorňuje na nízkou hladinu inzulínu a baterie, a tak zajišťuje jejich včasnou výměnu.
    
    ![Status lights - detail](../images/StatusLights.jpg)

## Bezpečnost zadání ošetření

### Maximální povolený bolus [U]

Udává maximální velikost bolusu, jakou může AAPS poslat. Nastavení slouží jako bezpečnostní limit pro zabránění odeslání příliš velkého bolusu, nebo k ohlídání chyby uživatele. Doporučuje se nastavit ho na rozumnou hodnotu zhruba odpovídající maximálnímu bolusu, který jste kdy poslali na jídlo. Toto omezení se uplatňuje i pro výsledky z Bolusové kalkulačky.

### Maximální povolené sacharidy [g]

Jde o maximální množství sacharidů, které bolusová kalkulačka v AAPS dovolí započítat. Nastavení slouží jako bezpečnostní limit pro zabránění odeslání příliš velkého bolusu vzhledem k množství zadaných sacharidů, nebo k ohlídání chyby uživatele. Je doporučeno nastavit limit na nějakou rozumnou hodnotu, která odpovídá maximálnímu množství sacharidů, které jste kdy v jídle snědli.

## Smyčka

Zde můžete přepínat mezi otevřenou a uzavřenou smyčkou. Otevřené smyčka znamená, že návrhy na změny dočasného bazálu jsou sice prováděny na základě skutečných dat, zobrazí se jako upozornění, ale Vy je musíte ručně potvrdit a ručně zadat do pumpy. Uzavřená smyčka znamená, že dočasné bazály jsou automaticky, bez jakéhokoliv potvrzení z vaší strany, posílány přímo do pumpy. V levém horním okraji domovské obrazovky je vidět, jakou smyčku máte aktuálně vybranou. Podržením na tomto tlačítku se mezi nimi můžete přepínat.

## Pokročilý asistent jídla v OpenAPS (AMA)

OpenAPS Advanced Meal Assist (AMA) umožňuje systému rychleji reagovat po bolusu na jídlo, pokud zadáte sacharidy správně. Zapněte si ho na kartě Konfigurace. Abyste viděli bezpečnostní nastavení zde nastavená, musíte mít splněn Cíl 7. O tomto nastavení a [ o Autosens si můžete přečíst více v dokumentech OpenAPS ](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

### Maximální povolený bazál [U/h]

Toto nastavení existuje jako bezpečnostní limit, aby se zabránilo AndroidAPS v nastavení nebezpečně vysokého bazálu. Hodnota se udává v jednotkách za hodinu (U/h). Doporučuje se nastavit na rozumnou hodnotu. Je doporučeno vzít si ze svého profilu **nejvyšší hodnotu bazálu**, a **vynásobit ji 4**. Například: máte-li ve svém profilu nejvyšší hodnotu bazálu 0.5U/h, dostanete po vynásobení 4 hodnotu 2U/h.

### Maximální bazální IOB [U]

Maximální hodnota dodatečného bazálního inzulínu (v jednotkách), o který může smyčka navýšit Váš normální bazál. Jakmile je tato hodnota dosažena, AAPS zastaví přidávání dodatečného bazálu, dokud hodnota inzulínu v těle (IOB) opět neklesne pod tuto hodnotu.

* Tato hodnota nebere v úvahu bolusový IOB, pouze IOB z bazálu.
* Tato hodnota je počítána a monitorována nezávisle na Vašem normálním bazálu. V úvahu je brán pouze dodatečný bazální inzulín převyšující normální bazál.
* Hodnota se udává v inzulínových jednotkách (U).

Když začínáte se smyčkou, ** je doporučováno nastavit si na nějaký čas maximální bazální IOB na 0**, než si na systém zvyknete. Toto zabrání AndroidAPS v tom, aby přidal dodatečný bazální inzulín. Během této doby bude AndoidAPS pořád schopná omezit či vypnout Váš bazální inzulín, aby se pomohlo předejít hypoglykémii.

To je důležitý krok pro:

* získání dostatečného času na to, abyste naučili AndroidAPS ovládat a vysledovat, jak funguje.
* perfektní vyladění nastavení Vašeho bazálního profilu a faktoru citlivosti na inzulín (ISF).
* zjištění, jak AndroidAPS omezuje Váš bazální inzulín, aby se předešlo hypoglykémii.

Když se na to už budete cítit, můžete dovolit systému, aby začal přidávat bazální inzulín, a to navýšením hodnoty maximálního množství bazálního inzulínu v těle. Doporučuje se vzít **nejvyšší hodnotu bazálu **ve Vašem profilu, a ** vynásobit ji 3**. Například, je-li nejvyšší hodnota bazálu ve Vašem profilu 0,5 jednotky za hodinu, dostanete po vynásobení 3 hodnotu 1,5 U/h.

* Začněte tedy s touto hodnotou, a postupem času ji opatrně navyšujte. 
* Toto jsou samozřejmě pouze návrhy; u každého člověka to je jiné. Možná zjistíte, že potřebujete méně nebo více, než je zde doporučeno. Vždy ale začněte opatrně, a přidávejte pomalu.

*Poznámka: Jako bezpečnostní prvek je u dospělého pacienta natvrdo nastaveno maximální bazální IOB na 7U.*

## Nastavení absorpce sacharidů

Pokud jste si zvolili použití AMA Autosense, pak budete moci zadat maximální čas absorpce jídla, a také jak často chcete aby se Autosense aktualizoval. Pokud často jíte jídla s vysokým obsahem tuků nebo bílkovin, budete si muset nastavit delší čas absorpce jídla.

## Nastavení pumpy

V závislosti na ovladači pumpy vybraném v konfiguraci se zde mohou vyskytovat i jiné volby. Pro spárování a nastavení Vaší inzulínové pumpy použijte postup odpovídající typu pumpy: [DanaR](../Configuration/DanaR-Insulin-Pump.md) nebo [DanaRS](../Configuration/DanaRS-Insulin-Pump.md), a nebo [Accu Check Combo ](../Configuration/Accu-Chek-Combo-Pump.md). Používáte-li AndroidAPS pouze jako otevřenou smyčku, vyberte v nastavení Virtuální pumpu.

## NS Client

* Zde si nastavte URL nightscoutu (https://jmenovasiaplikace.herokuapp.com, https://jmenovasiaplikace.azurewebsites.net, https://jmenovasiaplikace.ns.10be.de nebo https://jmenovasiaplikace.nightscout.cz) a 'API heslo' (12 znakové heslo, které jste si zvolili na Heroku, Azure, ns10be.de nebo nightscout.cz). To umožní komunikaci (zápis i čtení) mezi Nightscoutem a AndroidAPS. Pokud jste uvízli v cíli 1, prověřte možné překlepy.
* "Logovat spuštění aplikace do NS" vloží do vašich záznamů péče poznámku pokaždé, kdy je aplikace spuštěna. Aplikace by se neměla spouštět vícekrát než jednou denně. Pokud k tomu odchází častěji, jde obvykle o problém. 
* "Nastavení alarmů" vám umožní vybrat, jaké výchozí Nightscout alarmy se budou v aplikaci používat. Pro fungování alarmů je nutné mít v [Azure, Heroku nebo ns.10be. de](http://www.nightscout.info/wiki/welcome/website-features#customalarms) nastavené proměnné pro alarmy Urgent High, High, Low a Urgent Low. Alarmy budou fungovat pouze za podmínky, že jste stále připojeni k Nightscoutu, a jsou určené pro rodiče/asistenty. Pokud máte zdroj glykémie přímo na svém telefonu, pak místo nich raději použijte alarmy místní aplikace (např. v xDrip+).
* "Povolení lokálního odesílání" zpřístupní odesílání dat i jiným aplikacím na mobilu, např. xDrip+.
* 'Always use basal absolute values' must be activated if you want to use Autotune properly.

## SMS komunikátor

This setting allows remote control of the app by texting instructions to the patients phone which the app will follow such as suspending loop, or bolusing. Further information is described in [SMS Commands](../Usage/SMS-Commands.md) but it will only display in Preferences if you have selected this option in the Config Builder.

## Jiné

* You can set defaults for your temp targets here for the different types of temp target (eating soon and activity). When you select a temp target and then choose, for example, "Eating Soon" from the drop down box, it will automatically populate the duration and value for you based on the figures you provided here. For more information on use of Temp Targets see [OpenAPS features](../Usage/Open-APS-features.md). 
* You can set default prime amounts - this will prime the pump the value specified and this insulin is counted as used from the reservoir but not counted in IOB calculations. See the instruction booklet in your cannula box for how many units should be primed depending on needle length and tubing length.
* You can change the display on the homescreen and watch for the values that are in range. Note that this is just how the graphs look and doesn't impact on your target or calculations.
* 'Shorten tab titles' allows you to see more tab titles on screen, for example the 'Open APS' tab becomes 'OAPS', 'Objectives' becomes 'Obj' etc.
* 'Local Alerts' lets you decide if you receive a warning and after how long for not receiving blood glucose values (stale data) or the pump being unreachable. If you frequently get pump unreachable alerts then enable BT Watchdog in the Advanced Settings.

## Data Choices

* 'Fabric Upload' will send crash reporting and feature usage data to the developers.