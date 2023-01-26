# Konfigurace

V závislosti na vašich nastaveních můžete Konfiguraci otevřít prostřednictvím záložky v horní části obrazovky nebo pomocí nabídky hamburger.

![Otevřít průvodce konfigurací](../images/ConfBuild_Open_AAPS30.png)

Konfigurace (Conf) je záložka, kde si zapínáte nebo vypínáte jednotlivé moduly. Zaškrtnutím boxu (kroužek) na levé straně (A) vybíráte modul, který chcete používat, boxy (čtverečky) na pravé straně (C) zajistí zobrazení modulu jako záložky (E) v AndroidAPS. I když není pravý box zaškrtnutý, dostanete se k funkci přes hamburger menu (D) v levém horním rohu obrazovky.

Pokud má modul další dodatečná nastavení, dostanete se k nim kliknutím na ozubené kolo (B).

**První konfigurace:** Od AAPS 2.0 Vás provede procesem nastavení AndroidAPS Setup wizard (Průvodce nastavením). Stiskněte 3 tečky v pravé horní části obrazovky (F) a vyberte „Průvodce nastavením“.

![Tlačítko konfigurace a ozubené kolo](../images/ConfBuild_ConfigBuilder_AAPS30.png)

## Záložka nebo hamburger menu

Pomocí zaškrtávacího políčka pod symbolem oka se můžete rozhodnout, jak otevřít odpovídající sekci programu.

![Záložka nebo hamburger menu](../images/ConfBuild_TabOrHH_AAPS30.png)

## Profil

* Vyberte bazální profil, který chcete použít. Viz stránka [Profily](../Usage/Profiles.md) pro další informace o nastavení.
* Od AAPS 3.0 je k dispozici pouze lokální profil.

Nicméně i nadále je možné synchronizovat Nightscout profil do lokálního profilu. Za tímto účelem je však důležité naklonovat celý záznam sestávající z několika profilů v Nightscoutu. Podívejte se prosím na níže uvedené pokyny. Zadání změny prostřednictvím webového rozhraní může být užitečné v případě, že se jedná o velmi rozsáhlé změny profilu, např. ruční zkopírování dat z tabulky.

### Místní profil

Místní profil používá bazální profil zapsaný přímo do telefonu. Po jeho vybrání se v AAPS objeví nová záložka, kde si můžete profil upravovat. Ten je pak v případě potřeby načten pumpou. Při přepnutí profilu je uložen do pumpy jako profil 1. Tento profil je doporučen, protože nevyžaduje připojení k internetu.

Your local profiles are part of [exported settings](../Usage/ExportImportSettings.md). Proto se ujistěte, že máte zálohu bezpečně uloženou.

![Nastavení Místního profilu](../images/LocalProfile_Settings.png)

Tlačítka:

* zelené plus: přidat
* červené X: odstranit
* modrá šipka: kopírovat

Děláte-li v profilu nějaké změny, ujistěte se, že upravujete správný profil. Na záložce profilu nemusí být pokaždé zobrazen aktuální profil. Například když na domovské obrazovce přepnete přes záložku profilu na jiný profil, může pak být aktuální profil odlišný od toho, který je zobrazen v záložce profil, protože mezi nimi není žádné spojení.

#### Klonování přepnutí profilu

Z přepnutí profilu můžete snadno vytvořit nový místní profil. Posun času a procentuální změna budou v takovém případě přeneseny do nového místního profilu.

1. Klikněte na 3 tečky v pravém horním rohu.
2. Vyberte „Ošetření“.
3. Stiskněte symbol hvězdičky pro přístup na stránku přepnutí profilu.
4. Vyberte požadovaný přepínač profilu, a stiskněte „Klonovat“.
5. Nový místní profil můžete upravit na kartě Místní profil (MPRF) nebo prostřednictvím hamburger menu.

![Klonování přepnutí profilu](../images/LocalProfile_ClonePS_AAPS30.png)

#### Nahrávání místních profilů do Nighscoutu

Místní profily lze také nahrát do Nightscoutu. The settings can be found in [NSClient preferences](../Configuration/Preferences.md#nsclient).

![Nahrávání místního profilu do Nighscoutu](../images/LocalProfile_UploadNS_AASP30.png)

#### Změna profilu v Nightscout editoru profilu

Změny provedené v Nightscout editoru profilu můžete synchronizovat do místního profilu. The settings can be found in [NSClient preferences](../Configuration/Preferences.md#nsclient).

Je nezbytné naklonovat všechny aktuální aktivní záznamy v databázi Nightscout, a ne pouze profil s modrou šipkou! Nové databázové záznamy pak obsahují aktuální datum a lze je aktivovat pomocí záložky "místní profil".

![Klonovat databázové záznamy](../images/Nightscout_Profile_Editor.PNG)

### Pomocník s profilem

Pomocník s profilem nabízí dvě funkce:

1. Najít profil pro děti
2. Porovnání dvou profilů nebo přepnutí profilů za účelem naklonování nového profilu

Details are explained on the separate [profile helper page](../Configuration/profilehelper.md).

## Inzulín

![Typ inzulínu](../images/ConfBuild_Insulin_AAPS30.png)

* Vyberte typ inzulínové křivky, kterou používáte.
* Všechny varianty „Rychle působící Oref“, „Ultra rychlý Oref“, „Lyumjev“ a „Volitelný vrchol Oref“ mají exponenciální tvar. Více informací najdete v [dokumentaci k OpenAPS](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves). 
* Křivky se liší podle DIA a času max. účinnosti inzulínu.
    
    * FIALOVÁ linka ukazuje, kolik **inzulínu zbývá** poté, co byl aplikován a postupem času se vstřebává.
    * MODRÁ linka ukazuje, **jak aktivní** inzulín je.

### Doba působnosti inzulínu

* Hodnota DIA není u každého člověka stejná. Proto si ji musíte vyzkoušet sami na sobě. 
* Vždy to však musí být alespoň 5 hodin.
* Pro velké množství lidí nemá ultra-rychlý inzulin jako Fiasp po 3–4 hodinách prakticky žádné znatelné účinky, i když fakticky zbývá cca 0,0xx jednotky. Nicméně i toto zbytkové množství může mít vliv například při sportu. Proto AndroidAPS používá jako minimální hodnotu DIA 5 h.
* You can read more about that in the Insulin Profile section of [this](../Getting-Started/Screenshots.md#insulin-profile) page.

### Rozdíly v typu inzulínu

* Pro „Rychle působící“ a „Ultra rychlý“ a „Lyumjev“ inzulín je DIA jediná proměnná, kterou si můžete upravovat. Doba maximální účinnosti je fixní. 
* „Volitelný vrchol“ umožňuje nastavit obě proměnné – DIA i dobu maximální účinnosti inzulínu. Tato volba je určena pouze pro pokročilé uživatele, kteří znají důsledky nastavených hodnot. 
* The [insulin curve graph](../Getting-Started/Screenshots.md#insulin-profile) helps you to understand the different curves.
* Zaškrtnutím čtverečku vedle názvu si je můžete prohlédnout v záložce. Další možnost jejich zobrazení je přes hamburgerové menu.

#### Rychle působící - Oref

![Inzulin typu Rychle působící - Oref](../images/ConfBuild_Insulin_RAO.png)

* doporučeno pro Humalog, Novolog a Novorapid
* DIA = alespoň 5 h
* Max. Max. účinek = 75 minut po podání (pevné hodnota, nelze měnit)

#### Ultra rychlý - Oref

![Inzulin typu Ultra rychlý - Oref](../images/ConfBuild_Insulin_URO.png)

* doporučeno pro FIASP
* DIA = alespoň 5 h
* Max. max. účinek = 55 minut po podání (pevná hodnota, nelze měnit)

#### Lyumjev

![Inzulín typu Lyumjev](../images/ConfBuild_Insulin_L.png)

* speciální inzulínový profil pro Lyumjev
* DIA = alespoň 5 h
* Max. Max. účinek = 45 minut po podání (pevné hodnota, nelze měnit)

#### Volitelný vrchol Oref

![Inzulín typu Volitelný vrchol - Oref](../images/ConfBuild_Insulin_FPO.png)

* V profilu „Volitelný vrchol 0ref“ můžete ručně zadat dobu max. účinku inzulínu. Chcete-li tak učinit, klikněte pro přístup k rozšířenému nastavení na ozubené kolečko.
* Pokud není v profilu zadána vyšší hodnota, je DIA je automaticky nastaveno na 5 h.
* Tento profil je doporučován v případě, že používáte nepodporovaný inzulín nebo směs různých inzulínů.

## Zdroj glykémií

Select the blood glucose source you are using - see [BG Source](BG-Source.md) page for more setup information.

![Konfigurace zdroje BG](../images/ConfBuild_BGSource_AAPS30.png)

* [Sestav si vlastní Dexcom aplikaci (BYODA)](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0).
* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk) - Cannot be used as receiver for Dexcom G6 as of AAPS 3.0 (see [release notes](../Installing-AndroidAPS/Releasenotes.md#important-hints) for details.
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de) - jsou podporovány pouze verze 4.15.57 a novější
* [Poctech](https://www.poctechcorp.com/en/contents/268/5682.html)
* [Tomato App](http://tomato.cool/) pro zařízení MiaoMiao
* [Glunovo aplikace](https://infinovo.com/) pro Glunovo CGM systém
* NSClient BG - není doporučeno, protože v tomto případě je uzavřená smyčka závislá na mobilních datech / Wi-Fi. CGM data budou přijímána pouze v případě, jste-li připojeni ke svému Nightscoutu. Je mnohem lepší využít některý z lokálních zdrojů CGM.
* Generovat náhodné hodnoty glykémie (pouze režim Demo)

## Pumpa

Vyberte, kterou pumpu používáte.

![Konfigurace - výběr pumpy](../images/ConfBuild_Pump_AAPS30.png)

* [Dana R](DanaR-Insulin-Pump.md)
* DanaR Korea (pro korejskou verzi pumpy DanaR)
* Dana Rv2 (DanaR s neoficiálním upgradem firmwaru)
* [Dana-i/RS](DanaRS-Insulin-Pump.md)
    
    * Pro pumpy Dana – pokud je nutný BT watchdog, aktivujte ho v **Rozšířená nastavení**. Při problémech s připojením k pumpě vypne bluetooth na 1 sekundu. Toto nastavení může u některých mobilů pomoci při zamrzání bluetooth.
    * [Heslo pro Dana RS pumpy](../Configuration/DanaRS-Insulin-Pump.md) musí být správně zadáno. V předchozích verzích nebylo heslo kontrolováno.

* [Accu-Chek Insight](Accu-Chek-Insight-Pump.md)

* [Accu-Check Combo](Accu-Chek-Combo-Pump.md) (vyžaduje nainstalovanou aplikaci Ruffy)
* [Omnipod Eros](OmnipodEros.md)
* [Omnipod DASH](OmnipodDASH.md)
* [Medtronic](MedtronicPump.md)
* [Diaconn G8](DiaconnG8.md)
* MDI (AAPS poskytuje návrhy pro aplikaci inzulínu pomocí inzulínových per)
* Virtuální pumpa (otevřená smyčka pro pumpu, pro kterou zatím neexistuje ovladač – nabízí pouze návrhy AAPS)

## Detekce citlivosti

Vyberte variantu detekce citlivosti. Další detaily o různých modelech si můžete [přečíst zde](../Configuration/Sensitivity-detection-and-COB.md). Bude prováděna analýza historických dat. Jestliže se zjistí, že na inzulín reagujete citlivěji než obvykle (nebo naopak máte vyšší rezistenci), provedou se úpravy. Další podrobnosti o algoritmu citlivosti si můžete přečíst v [dokumentaci OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

Průběh citlivosti můžete na hlavní stránce zobrazit vybráním políčka Citlivost. Zobrazí se jako bílá čára. Note, you need to be in [Objective 8](../Usage/Objectives.md#objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens) in order to let Sensitivity Detection/[Autosens](../Usage/Open-APS-features#autosens) automatically adjust the amount of insulin delivered. Před dosažením tohoto cíle slouží procentuální údaj Autosens a bílá čára v grafu pouze pro informaci.

### Nastavení absorpce sacharidů

Pokud používáte Oref1 s SMB, musíte změnit **min_5m_carbimpact** na 8. Tato hodnota se používá pouze při výpadcích hodnot odečítaných z CGM nebo v případech, kdy se fyzickou aktivitou vyrovná vzestup glykémie, který by jinak vedl k tomu, že by systém AAPS odbourával COB. At times when [carb absorption](../Usage/COB-calculation.md) can't be dynamically worked out based on your bloods reactions it inserts a default decay to your carbs. V podstatě jde o bezpečnostní pojistku.

## APS

Vyberte požadovaný algoritmus APS pro úpravy léčby. Detaily vybraného algoritmu lze prohlížet na kartě OpenAPS (OAPS).

* OpenAPS AMA (pokročilý asistent s jídly, stav algoritmu v roce 2017). Zjednodušeně řečeno, výhoda systému je v tom, že zadáte-li sacharidy, dokáže systém po poslání bolusu velmi rychle spustit vysoký dočasný bazál.
* [OpenAPS SMB](../Usage/Open-APS-features.md) (super micro bolus, most recent algorithm for advanced users) Note you need to be in [Objective 9](../Usage/Objectives.md#objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) in order to use OpenAPS SMB and min_5m_carbimpact must be set to 8 in Config builder > Sensitivity detection > Sensitivity Oref1 settings.

## Smyčka

* Přepínání mezi otevřenou smyčkou, uzavřenou smyčkou a pozastavením při nízké glykémii (LGS).

![Konfigurace - režim smyčky](../images/ConfigBuilder_LoopLGS.png)

### Otevřená smyčka

* AAPS průběžně hodnotí všechny dostupné údaje (IOB, COB, glykémie…) a předkládá návrhy, jak v případě potřeby upravit vaši léčbu. 
* Návrhy nebudou provedeny automaticky (tak jako v uzavřené smyčce), ale mohou být zadány ručně přímo do pumpy nebo tlačítkem z aplikace – pokud používáte podporovanou pumpu (DanaR/RS nebo Accu-check Combo). 
* Tato volba slouží k tomu, abyste poznali, jak vlastně AndroidAPS funguje, nebo používáte-li nepodporovanou pumpu.

### Uzavřená smyčka (Closed Loop)

* AAPS průběžně vyhodnocuje všechny dostupné údaje (IOB, COB, glykémie…) a podle potřeby automaticky upravuje léčbu (tj. bez dalšího Vašeho zásahu) s cílem dosáhnout nastaveného cílového pásma nebo hodnoty (podání bolusu, dočasné bazální dávky, vypnutí podávání inzulínu, aby se předešlo hypoglykémii atd.). 
* Uzavřená smyčka je zabezpečena velkým množstvím bezpečnostních limitů, které lze nastavit individuálně.
* Closed Loop is only possible if you are in [Objective 6](../Usage/Objectives.md#objective-6-starting-to-close-the-loop-with-low-glucose-suspend) or higher and use a supported pump.
* Poznámka: při používání uzavřené smyčky se doporučuje nastavit jeden cíl místo cílového rozsahu (tj. 5,5 mmol nebo 100 mg/l místo rozsahu 5,0–7,0 mmol nebo 90–125 mg/dl).

### Pozastavení při nízké glykémii (LGS)

* maxIOB je nastaveno na nulu
* To znamená, že klesá-li hladina glukózy v krvi, snížuje se odpovídajícím způsobem i bazál.
* Při rostoucí hladině glukózy ale nedochází k žádné automatické korekci. Hodnota bazálu zůstává stále na hodnotě nastavené z profilu.
* Dodatečný inzulín je pro snížení glykémie podáván pouze v případě, že je bazální IOB negativní (na základě jeho předchozího pozastavení při nízké glykémii).

### Minimální změna pro oznámení

* Při použití otevřené smyčky budete dostávat oznámení pokaždé, když AAPS doporučí úpravu bazální dávky. 
* Ke snížení počtu oznámení můžete použít buď širší rozsah cílové glykemie, nebo vyšší procento minimální změny pro výzvu.
* Toto definuje relativní změnu, která je požadována pro spuštění oznámení.

## Cíle (výukový program)

Součástí AndroidAPS je výukový program (cíle), které musíte splnit krok za krokem. Měly by vás bezpečně provést nastavením uzavřené smyčky. Postupným splněním cílů je zajištěno, že přesně porozumíte tomu, jak systém pracuje. Jedině touto cestou můžete svému systému plně důvěřovat.

You should [export your settings](../Usage/ExportImportSettings.md) (including progress of the objectives) on a regularly basis. V případě, že v budoucnosti budete muset svůj smartphone nahradit (nové zařízení, poškození displeje atd.), můžete tato nastavení jednoduše importovat.

See [Objectives](../Usage/Objectives.md) page for more information.

## Ošetření

Na záložce Ošetření můžete vidět ošetření, která byla nahrána do Nightscoutu. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the [carbs button on the home screen](../Getting-Started/Screenshots.md#carb-correction).

## Obecné

### Přehled

Zobrazí aktuální stav smyčky a tlačítko pro přístup k běžným akcím (další podrobnosti viz část [Domácí obrazovka](../Getting-Started/Screenshots.md)). Kliknutím na ozubené kolo se dostanete do nastavení.

#### Nechat obrazovku zapnutou

Tato volba zabrání Androidu vypnout obrazovku. To je velmi vhodné například pro prezentace. Při tomto nastavení ale dochází k velmi rychlému vybíjení baterie. Proto je doporučeno připojit smartphone k napájecímu kabelu.

#### Tlačítka

Určuje, která tlačítka budou zobrazena na domácí obrazovce.

* Ošetření
* Kalkulačka
* Inzulín
* Sacharidy
* CGM (otevře xDrip+)
* Kalibrace

Kromě toho můžete nastavit zkratky pro inzulín a sacharidy a rozhodnout se, zda bude v dialogu pro přidání ošetření i poznámka.

#### Nastavení rychlých bolusů

Vytvořte si tlačítko pro určité standardní jídlo (sacharidy a parametry pro výpočet bolusu), které se zobrazí na domácí obrazovce. Můžete ho použít pro standardní jídlo, které konzumujete pravidelně. U každého jídla (tlačítka) lze definovat i čas, a tak budete mít na domácí obrazovce k dispozici vhodné tlačítko pro dané jídlo odpovídající denní době.

Poznámka: tlačítko nebude viditelné, pokud je aktuální čas mimo interval definovaný v nastavení, nebo máte-li dostatek IOB k pokrytí sacharidů definovaných kalkulačkou.

![Tlačítko průvodce nastavení](../images/ConfBuild_QuickWizard.png)

#### Výchozí nastavení dočasných cílů

Vyberte výchozí dočasné cíle (doba trvání a cíl). Přednastavené hodnoty jsou:

* blížící se jídlo: cíl 72 mg/dl/4, 0 mmol/l, trvání 45 min
* aktivita: cíl 140 mg/dl/7, 8 mmol/l, trvání 90 min
* hypoglykemie: cíl 125 mg/dl/6, 9 mmol/l, trvání 45 min

#### Standardní množství inzulinu pro Plnění/Doplňování

Nastavte výchozí hodnoty tří tlačítek v dialogovém okně plnění/doplňování v závislosti na délce vaší hadičky.

#### Rozsah pro zobrazení

Nastavte hranice nízké a vysoké glykémie, které budou použité u grafů glykémie v AAPS a hodinkách. Jde pouze o zobrazení, nikoliv nastavení cílové hodnoty glykémie. Příklad: 70–180 mg/dl nebo 3,9–10 mmol/l

#### Krátké názvy modulů

Vyberte si, zda jsou názvy záložek v AndroidAPS dlouhé (např. AKCE, LOKÁLNÍ PROFIL, AUTOMATIZACE) nebo krátké (např. AKCE, MRPF, AUTO)

#### Zobrazovat kolonku poznámky v dialozích ošetření

Vyberte si, chcete-li mít při zadávání ošetření k dispozici pole poznámka.

#### Stavové indikátory

Choose if you want to have [status lights](../Configuration/Preferences.md#status-lights) on overview for cannula age, insulin age, sensor age, battery age, reservoir level or battery level. Je-li dosaženo úrovně pro varování, změní se barva stavového indikátoru na žlutou. Kritická hodnota se zobrazí červeně.

#### Pokročilá nastavení

**Podat tuto část z výsledku kalkukace [%]**: Při použití SMB si mnoho lidí neposílá na jídlo 100% dávku inzulínu, ale pouze její část (např. 75 %), a nechá zbytek na SMB ve spolupráci s UAM (detekce neoznámeného jídla). V tomto nastavení si můžete zvolit výchozí hodnotu pro procento, se kterým by měl bolus kalkulátor počítat. Pokud je toto nastavení 75 % a máte dostat bolus 10 U, navrhne bolusový kalkulátor pouze 7,5 jednotky.

**V průvodci povolte funkci superbolus** (jde o něco jiné než *super mikro bolus*!): Funkci používejte s opatrností a nepovolujte ji, dokud se nenaučíte, co to skutečně dělá. V podstatě je bazál za následující 2 hodiny přidán do bolusu a po dobu těchto 2 h je nastaven nulový dočasný bazál. **Funkce smyčky AAPS budou po dobu superbolusu deaktivovány – používat opatrně! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](../Usage/Open-APS-features.md#max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### Akce

* Tlačítka k běžně používaným úkonům.
* See [AAPS screenshots](../Getting-Started/Screenshots.md#action-tab) for details.

### Automatizace

Uživatelem vytvořené úlohy automatizace ('if-then-else'). Please [read on here](../Usage/Automation.md).

### SMS komunikátor

Allows remote caregivers to control some AndroidAPS features via SMS, see [SMS Commands](../Children/SMS-Commands.md) for more setup information.

### Jídlo

Zobrazuje jídla přidaná do databáze Nightscoutu. Více informací viz [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods).

Poznámka: Tyto záznamy nelze použít v Kalkulačce v AndroidAPS. (Pouze je zobrazit)

### Wear

Sledování a ovládání AAPS prostřednictvím hodinek s Wear OS (viz [stránka Ciferníky](../Configuration/Watchfaces.md)). Chcete-li nastavit parametry pro výpočet bolusu na hodinkách (tj. 15min trend, COB…), klikněte na nastavení (ozubené kolo).

Chcete-li z hodinek zadávat bolus atd., musíte v „Nastavení wear“ aktivovat volbu „Ovládání z hodinek“.

![Záložka Wear](../images/ConfBuild_Wear.png)

Prostřednictvím záložky Wear nebo hamburger menu (levý horní roh obrazovky, když není záložka zobrazena) můžete

* znovu poslat všechna data. To může pomoci v případech, kdy byly hodinky nějakou dobu nedostupné a potřebujete do nich poslat data.
* Otevřít nastavení hodinek přímo z telefonu.

### Stavová řádka xDrip (hodinky)

Zobrazit na displeji hodinek (ciferník xDrip+) stav smyčky (pokud nepoužíváte AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md))

### NSClient

* Nastavení synchronizace dat AndroidAPS s Nightscoutem.
* Settings in [preferences](../Configuration/Preferences.md#nsclient) can be opened by clicking the cog wheel.

### Údržba

E-mail a počet logů, které budou odeslány. Obvykle není nutné tyto hodnoty měnit.

### Konfigurace

Místo hamburger menu použijte záložku konfigurace.