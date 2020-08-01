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

Zde můžete přepínat mezi otevřenou a uzavřenou smyčkou.

**Otevřená smyčka** znamená, že návrhy na změny dočasného bazálu jsou sice prováděny na základě skutečných dat, zobrazí se jako upozornění, ale vy je musíte ručně potvrdit a ručně zadat do pumpy.

**Uzavřená smyčka** znamená, že dočasné bazály jsou automaticky posílány přímo do pumpy bez jakéhokoliv potvrzení z vaší strany.

V levém horním okraji domovské obrazovky je vidět, jakou smyčku máte aktuálně vybranou. Podržením tohoto tlačítka mezi nimi můžete přepínat.

### Minimální změna pro výzvu

Při použití otevřené smyčky budete dostávat oznámení pokaždé, když AAPS doporučí úpravu bazální dávky. Ke snížení počtu oznámení můžete použít buď širší rozsah cílové glykemie, nebo vyšší procento minimální změny pro výzvu. Toto definuje relativní změnu, která je požadována pro spuštění oznámení.

![Minimální změna pro výzvu](../images/MinRequestChange.png)

Poznámka: V uzavřené smyčce se doporučuje jeden cíl místo cílového rozsahu (tj. 5,5 mmol místo 5,0–7,0 mmol).

## OpenAPS AMA

OpenAPS Advanced Meal Assist (AMA) umožňuje systému rychleji reagovat po bolusu na jídlo, pokud zadáte sacharidy správně. Zapněte tuto funkci na kartě Konfigurace a podívejte se na její bezpečnostní nastavení. Abyste mohli tuto funkci využívat, musíte splnit [9. cíl](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama). O tomto nastavení a [ o Autosens si můžete přečíst více v dokumentech OpenAPS ](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

### Maximální povolený bazál [U/h]

Toto nastavení existuje jako bezpečnostní limit, aby se zabránilo AndroidAPS v nastavení nebezpečně vysokého bazálu. Hodnota se udává v jednotkách za hodinu (U/h). Doporučuje se nastavit na rozumnou hodnotu. Je doporučeno vzít **nejvyšší hodnotu bazálu** v profilu a **vynásobit ji 4**. Například: máte-li v profilu nejvyšší hodnotu bazálu 0,5 U/h, dostanete po vynásobení 4 hodnotu 2 U/h.

### Maximální bazální IOB [U]

Maximální hodnota dodatečného bazálního inzulínu (v jednotkách), o který může smyčka navýšit váš normální bazál. Jakmile je tato hodnota dosažena, AAPS zastaví přidávání dodatečného bazálu, dokud hodnota inzulínu v těle (IOB) opět neklesne pod tuto hodnotu.

* Tato hodnota nebere v úvahu bolusový IOB, pouze IOB z bazálu.
* Tato hodnota je počítána a monitorována nezávisle na vašem normálním bazálu. V úvahu je brán pouze dodatečný bazální inzulín převyšující normální bazál.
* Hodnota se udává v inzulínových jednotkách (U).

Když začínáte se smyčkou, ** je doporučováno nastavit si na nějaký čas maximální bazální IOB na 0**, než si na systém zvyknete. Toto zabrání AndroidAPS v tom, aby přidal dodatečný bazální inzulín. Během této doby bude AndoidAPS pořád schopen omezit či vypnout váš bazální inzulín, aby pomohl předejít hypoglykémii.

To je důležitý krok pro:

* získání dostatečného času na to, abyste naučili AndroidAPS ovládat a vysledovat, jak funguje.
* perfektní vyladění nastavení Vašeho bazálního profilu a citlivosti na inzulín (ISF).
* zjištění, jak AndroidAPS omezuje Váš bazální inzulín, aby se předešlo hypoglykémii.

Když se na to už budete cítit, můžete dovolit systému, aby začal přidávat bazální inzulín, a to navýšením hodnoty maximálního množství bazálního inzulínu v těle. Doporučuje se vzít **nejvyšší hodnotu bazálu **ve vašem profilu, a ** vynásobit ji 3**. Například, je-li nejvyšší hodnota bazálu ve vašem profilu 0,5 jednotky za hodinu, dostanete po vynásobení 3 hodnotu 1,5 U/h.

* Začněte tedy s touto hodnotou a postupem času ji opatrně navyšujte. 
* Toto jsou samozřejmě pouze návrhy; u každého člověka to je jiné. Možná zjistíte, že potřebujete méně nebo více, než je zde doporučeno. Vždy ale začněte opatrně a přidávejte pomalu.

*Poznámka: Jako bezpečnostní prvek je u dospělého pacienta napevno nastaveno maximální bazální IOB na 7 U.*

## Nastavení absorpce sacharidů

Pokud jste si zvolili použití AMA Autosense, pak budete moci zadat maximální čas absorpce jídla a také četnost aktualizace funkce Autosense. Pokud často jíte jídla s vysokým obsahem tuků nebo bílkovin, budete si muset nastavit delší čas absorpce jídla.

## Nastavení pumpy

V závislosti na ovladači pumpy vybraném v konfiguraci se zde mohou vyskytovat i jiné volby. Spárujte a nastavte pumpu podle pokynů pro jednotlivé pumpy:

* [Inzulinová pumpa DanaR](../Configuration/DanaR-Insulin-Pump.md) 
* [Inzulinová pumpa DanaRS](../Configuration/DanaRS-Insulin-Pump.md) 
* [Pumpa Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md) 
* [Pumpa Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md) 
* [Pumpa Medtronic](..//Configuration/MedtronicPump.md)

Používáte-li AndroidAPS pouze jako otevřenou smyčku, vyberte v nastavení Virtuální pumpu.

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

Toto nastavení umožňuje vzdálené ovládání telefonu s AAPS posláním SMS s textem, jako je zastavení smyčky nebo poslání bolusu. Další informace jsou uvedeny v části [SMS příkazy](../Children/SMS-Commands.rst), ale zobrazí se v nastavení, pouze pokud jste vybrali tuto možnost v konfigurátoru.

## Jiné

* Zde můžete nastavit výchozí hodnoty pro dočasné cíle. Dočasné cíle mohou být různé („Před jídlem“ či „Aktivita“). Pokud zvolíte dočasný cíl a pak vyberete např. „Před jídlem“ z rozbalovací nabídky, pak se trvání a hodnota automaticky předvyplní údaji, které jste uvedli právě v dříve zmiňovaném nastavení. Další informace o použití Dočasných cílů naleznete v [vlastnosti OpenAPS](../Usage/Open-APS-features.md). 
* Můžete nastavit výchozí množství inzulínu pro plnění kanyly. Při plnění kanyly se inzulín bude odečítat ze zásobníku, ale nebude se počítat do výpočtů IOB. Podívejte se do příbalového letáku kanyly a hadičky, kolik jednotek potřebujete pro úplné naplnění. Množství se liší podle konkrétního typu.
* Můžete změnit nastavení zobrazení hlavní stránky a vzhled hodnot glykémie podle toho, zda jsou v cílovém rozsahu. Toto nastavení však ovlivňuje pouze vzhled grafu a nemá žádný vliv ani na váš cíl glykémie ani na výpočty.
* „Krátké názvy modulů“ vám umožní, abyste viděli více záložek na jedné obrazovce, např. štítek záložky „Open APS“ se změní jen na „OAPS“, „Ošetření“ se změní na „OŠET“ atd.
* „Místní výstrahy“ vám umožňují rozhodnout, po jaké době nedostupnosti dat nebo pumpy se zobrazí výstraha. Pokud se často objevuje výstraha, že je pumpa nedostupná, zapněte BT Watchdog v Rozšířeném Nastavení v sekci pumpa.

## Možnosti dat

* „Odesílání do Fabric“ odešle vývojářům reporty o pádech aplikace a data o používání.