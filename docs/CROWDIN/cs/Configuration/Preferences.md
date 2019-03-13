# Nastavení

## Heslo do nastavení

Tato volba Vám umožňuje nastavit heslo, abyste předešli náhodným nebo neoprávněným změnám v nastavení. Pokud zde zadáte heslo, budete požádáni, abyste ho zadali pro vstup do Nastavení. Chcete-li odstranit heslo, tak vymažte text v nastavení u této volby.

## Věk pacienta

V tomto nastavení jsou stanoveny bezpečnostní limity v závislosti na Vámi zvoleném věku. Pokud začnete narážet na limit (jako maximální bolus), je čas posunout se o stupeň výš. Není správné zvolit vyšší věk, než je skutečný, jelikož to může vést k předávkování zadáním nesprávné hodnoty v dialogovém okně pro inzulín (např. vynecháním desetinné čárky).

## Obecné

* Vyberte svůj jazyk. Pokud není Váš jazyk dostupný, nebo nejsou všechna slova přeložena, je možnost tato slova přeložit, nebo dát návrh na [Crowdin](https://crowdin.com/project/androidaps) anebo se zeptat na [gitter chatroom](https://gitter.im/MilosKozak/AndroidAPS).
* Průvodce rychlým nastavením Vám dovoluje přidat rychlé tlačítko pro často používaná jídla na hlavní obrazovku. Zadejte v nastavení počet sacharidů, a on Vám spočítá bolus pro tyto sacharidy na základě aktuálních poměrů (dle aktuální hodnoty glykémie a aktivního inzulínu atd.).
* Advanced settings to enable superbolus in wizard and to show status lights on home screen. Status lights give a visual warning for low reservoir and battery level as well as overdue site change.
    
    ![Status lights - detail](../images/StatusLights.jpg)

## Portál nastavení péče

‘Vloženo kým’ je text, který se ukazuje v poli/okně ‘vloženo kým’ ve Vašem Nightscoutovém portálu péče. Nastavte si toto tak, aby Vám to dávalo smysl. Je na Vás, zda to bude název apky, jméno člověka či název telefonu (např. pokud používáte AndroidAPS jako klient NS na telefonu, který nepatří pacientovi, pak si zde tímto můžete odlišit vlastníky telefonu).

## Bezpečnost zadání ošetření

### Maximální povolený bolus [U]

To je maximální výše bolusu, který má AAPS povoleno poslat. Toto nastavení slouží jako bezpečnostní limit, aby nemohlo dojít k poslaní enormní dávky, nebo jako chyba uživatele. Je doporučeno nastavit toto na rozumnou hodnotu, která nahrubo odpovídá množství, které jste kdy potřebovali k jídlu nebo korekčnímu bolusu. Toto omezení platí také pro výsledky kalkulačky bolusu.

### Maximální povolené sacharidy [g]

To je maximální množství sacharidů, které AAPS kalkulačka bolusu dovolí započítat. Toto nastavení slouží jako bezpečnostní limit, aby nemohlo dojít k poslaní enormní dávky bolusu nebo jako chyba uživatele. Je doporučeno nastavit toto na rozumnou hodnotu, která nahrubo odpovídá největšímu množství, které jste kdy potřebovali k jídlu.

## Smyčka

Zde můžete přepínat mezi otevřenou a uzavřenou smyčkou. Otevřené smyčka znamená, že návrhy dočasného bazálu jsou provedeny na základě skutečných dat a zobrazí se jako upozornění, ale musíte je ručně přijmout a ručně zadat do své pumpy. Uzavřená smyčka znamená, že návrhy dočasného bazálu budou automaticky odeslány do pumpy bez Vašeho potvrzení nebo Vašeho zadání. Na úvodní obrazovce se zobrazí v levém horním rohu, zda používáte smyčku otevřenou nebo uzavřenou. Stisknutím a podržením tohoto tlačítka je možno přepínat mezi smyčkami.

## Pokročilý asistent jídla v OpenAPS (AMA)

OpenAPS Advanced Meal Assist (AMA) umožňuje systému rychleji reagovat po bolusu na jídlo, pokud zadáte sacharidy správně. Zapněte si ho na kartě Konfigurace. Abyste viděli bezpečnostní nastavení zde nastavená, musíte mít splněn Cíl 7. O tomto nastavení a [ o Autosens si můžete přečíst více v dokumentech OpenAPS ](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

### Maximální povolený bazál [U/h]

Toto nastavení existuje jako bezpečnostní limit, aby se zabránilo AndroidAPS v nastavení nebezpečně vysokého bazálu. Hodnota je měřena v jednotkách za hodinu [U/hod]. Doporučuje se nastavit toto na rozumnou hodnotu. Doporučuje se vzít nejvyšší hodnotu bazálu ve Vašem profilu a vynásobit ji čtyřmi. Například, když je nejvyšší nastavení bazálu ve Vašem profilu 0,5 jednotky za hodinu, můžete to vynásobit 4 a dostanete hodnotu 2 jednotky za hodinu.

### Maximální bazální IOB [U]

Množství dodatečného bazálního inzulínu (v jednotkách), který je povolený, aby se nahromadil v těle, navíc oproti Vašemu normálnímu bazálu. Jakmile je dosaženo této hodnoty, AAPS přestane posílat další inzulín, a to až do té doby, kdy Váš inzulín v těle (IOB) klesne zpět do stanoveného rozsahu.

* Tato hodnota nebere v úvahu bolusový IOB, pouze IOB z bazálu.
* Tato hodnota je počítána a monitorována nezávisle na výši Vašeho normálního bazálu. V úvahu je brán pouze dodatečný bazální inzulín převyšující normální bazál.
* Tato hodnota je měřena v jednotkách inzulínu (U).

Když začínáte se smyčkou, ** je doporučováno nastavit si na nějaký čas maximální bazální IOB na 0**, než si na systém zvyknete. Toto zabrání AndroidAPS v tom, aby přidal jakýkoliv bazální inzulín. Během této doby bude AndoidAPS pořád schopná omezit či vypnout Váš bazální inzulín, aby se pomohlo předejít hypoglykémii.

Toto je důležitý krok kvůli:

* Dejte si čas na to, abyste si bezpečně zvykli na AndroidAPS a vysledovali, jak to funguje.
* Využijte této příležitosti k perfektnímu vyladění nastavení Vašeho bazálního profilu a faktoru citlivosti na inzulín (ISF).
* Všimněte si, jak AndroidAPS omezuje Váš bazální inzulín, aby se předešlo hypoglykémii.

Když se na to už budete cítit, můžete dovolit systému, aby Vám začal posílat další bazální inzulín, a to navýšením hodnoty maximálního množství bazálního inzulínu v těle. Doporučuje se vzít **nejvyšší hodnotu bazálu **ve Vašem profilu a ** vynásobit ji třemi**. Například, když je nejvyšší nastavení bazálu ve Vašem profilu 0,5 jednotky za hodinu, můžete to vynásobit 3 a dostanete hodnotu 1.5 jednotky za hodinu.

* Můžete začít s touto hodnotou opatrně a postupem času ji pomalu navyšovat. 
* Toto jsou pouze návrhy; tělo každého člověka je jiné. Možná zjistíte, že potřebujete více nebo naopak méně, než se doporučuje, ale vždy začněte opatrně a pomalu přizpůsobujte.

*Poznámka: Jako bezpečnostní prvek je maximální bazální IOB natvrdo nastaveno na maximálně 7 jednotek.*

## Nastavení absorpce sacharidů

Pokud jste si zvolili použití AMA Autosense, pak si budete moct zadat maximální čas absorpce jídla a také jak často chcete, aby se Autosense aktualizoval. Pokud často jíte jídla s vysokým obsahem tuků nebo bílkovin, budete si muset nastavit delší čas absorpce jídla.

## Nastavení pumpy

Možnosti zde se budou lišit v závislosti na tom, který ovladač pumpy jste zvolili v Konfiguraci. Spárujte a nastavte Vaši pumpu podle instrukcí [DanaR inzulínová pumpa ](../Configuration/DanaR-Insulin-Pump.md) nebo [DanaRS inzulínová pumpa](../Configuration/DanaRS-Insulin-Pump.md) nebo podle instrukcí [Accu Check Combo pumpa](../Configuration/Accu-Chek-Combo-Pump.md), podle použité pumpy. Pokud používáte AndroidAPS pro otevřenou smyčku, ujistěte se, že jste v konfiguraci zvolili virtuální pumpu.

## NS Client

* Zde si nastavte svou internetovou adresu k Nightscoutu (https://vasnazev.herokuapp.com nebo https://vasnazev.azurewebsites.net) a API secret (alespoň 12ti znakové heslo uložené v proměnných vašeho Heroku nebo Azure). To umožní, aby si mohly stránky Nightscoutu a AndroidAPS vyměňovat a zapisovat všechny potřebné údaje. Ještě jednou nastavení ověřte znak po znaku, pokud jste se zasekli v cíli 1 (jedná se pravděpodobně o nějaký překlep).
* "Logovat spuštění aplikace do NS" vloží do vašich záznamů péče poznámku pokaždé, kdy je aplikace spuštěna. Aplikace by se na mobilu neměla spouštět vícekrát než jednou denně. Pokud je to vícekrát, obvykle to signalizuje nějaký problém. 
* "Povolení odesílání" bude sdílet vaše záznamy péče také jiným aplikacím na mobilu, např. xDrip+. 
* "Nastavení alarmů" vám umožní vybrat, které výchozí Nightscout alarmy se mají napříč aplikací používat. Aby mohly alarmy vydávat zvuk, potřebujete mít nastavené Urgent High, High, Low a Urgent Low alarm proměnné ve vašich [Heroku nebo Azure proměnných](http://www.nightscout.info/wiki/welcome/website-features#customalarms). Alarmy budou fungovat pouze za podmínky, že máte stálé síťové spojení k Nightscoutu, a jsou určené pro rodiče/asistenty. Pokud máte zdroj glykémie přímo na svém telefonu, pak místo toho raději použijte alarmy místní aplikace (např. v xDrip+).

## SMS komunikátor

Toto nastavení dovoluje vzdálené ovládání telefonu s Aaps posláním sms s textem, jako je zastavení smyčky, nebo poslání bolusu. Další informace jsou uvedeny v [SMS příkazy](../Usage/SMS-Commands.md), ale zobrazí se v nastavení pouze v případě, že jste vybrali tuto možnost v konfigurátoru.

## Jiné

* Zde můžete nastavit výchozí vlastnosti pro dočasné cíle. Typy dočasných cílů mohou být různé ("Před jídlem" či aktivita). Pokud zvolíte dočasný cíl a pak vyberete např. "Před jídlem" z rozbalovací nabídky, pak se trvání a hodnota automaticky předvyplní údaji, které jste uvedli právě v dříve zmiňovaném nastavení. Další informace o použití Dočasných cílů naleznete v [OpenAPS features](../Usage/Open-APS-features.md). 
* Můžete nastavit výchozí množství pro plnění kanyly - toto množství pak bude pumpa do kanyly/setu plnit a tento inzulin se bude odečítat ze zásobníku, ale přitom se nebude započítávat do IOB výpočtů. Podívejte se do příbalového letáku kanyly, kolik jednotek je nutné do kanyly naplnit podle délky jehly a hadičky.
* Můžete změnit nastavení zobrazení hlavní stránky a vzhled hodnot glykémie podle toho, jestli jsou v cílovém rozsahu. Ale pozor, toto nastavení ovlivňuje pouze vzhled grafu a nemá žádný vliv ani na váš cíl glykémie, ani na výpočty.
* "Krátké názvy modulů" vám umožní, abyste viděli více záložek na jedné obrazovce, např. štítek záložky "Open APS" se stane jen "OAPS", "Ošetření" se změní na "OŠET" atd.
* "Místní upozornění" vám umožňují rozhodnout, zda se výstraha zobrazí a po jak dlouhé době nedostupnosti dat - výstraha dlouho nedostupné glykémie nebo výstraha dlouho nedostupné pumpy. Pokud často dostáváte výstrahu, že je pumpa nedostupná, tak zapněte Hlídač BT v rozšířeném nastavení v sekci pumpa.

## Rozšířené nastavení ``zbývá dodělat

* OpenAPS MA
* "Vždy používat krátkodobý průměrný rozdíl glykémií místo ..." Povolení tohoto nastavení je užitečné, pokud používáte data z nefiltrovaných zdrojů, například xDrip+, oproti filtrovaným zdrojům, jako je např. oficiální Dexcom Receiver. Filtrovaná data se zdají být hladká, zatímco nefiltrované údaje se mohou jevit rozkmitané. Tato nefiltrovaná data by mohla způsobit, že AndroidAPS bude nastavovat dočasné bazální dávky častěji, než je ve skutečnosti zapotřebí, protože OpenAPS algoritmus bude neustále reagovat na rozkmitané hodnoty. Pokud je toto nastavení aktivované, OpenAPS algoritmus použije krátkodobé průměrné Delta (průměrná změna hladiny glukózy v krvi za posledních 15 minut) namísto poslední obdržené glykémie. To má v důsledku "vyhlazující" vliv na obdržené hodnoty a pokouší se tak kompenzovat rozkmitané údaje. Uživatelům Abbot Freestyle Libre senzorů, kteří sbírají své glykémie přes zařízení jako např. LimiTTers, mohou tato nastavení pomoci dosáhnout lepších výsledků s AAPS.

Pro další tipy ohledně vyhlazení dat při používání xDrip+ jako zdroje dat si projděte [Vyhlazení dat glykémií v xDrip +](../Usage/Smoothing-blood-glucose-data-in-xDrip.md).

* OpenAPS preferences.json - před změnou kteréhokoliv z těchto nastavení si prosím přečtěte, jaké hodnoty jsou bezpečné a proč v [OpenAPS dokumentaci](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).
* "Ignorovat přepnutí profilu" nebude posílat aktuální profil AndroidAPS do pumpy. Nedoporučuje se tuto možnost vybrat, pokud nechcete testovat verzi AndroidAPS, jde o bezpečnostní opatření - před posláním bazálního profilu 1 do pumpy, pokud by AndroidAPS přestat pracovat nebo ztratil spojení s pumpou, tak by se pumpa přepnula do stejného profilu, který je výchozí, namísto abyste museli výchozí profil do pumpy zadávat ručně. Další informace o profilech naleznete v části [Profily](/docs/Usage/Profiles).
* "Hlídač BT" tuto možnost aktivujte, pokud se vám neustále ztrácí spojení s pumpou. Pokud se ztratí spojení s pumpou, hlídač vypne a zapne bluetooth, aby se spojení pokusilo znovu obnovit.

## Nastavení hodinek

Více informací o hodinkách najdete v sekci [Hodinky](../Configuration/Watchfaces.md).