# Konfigurace

V závislosti na vašich nastaveních můžete Konfiguraci otevřít prostřednictvím záložky v horní části obrazovky nebo pomocí nabídky hamburger.

![Otevřít průvodce konfigurací](../images/ConfBuild_Open.png)

Konfigurace (Conf) je záložka, kde si zapínáte nebo vypínáte jednotlivé moduly. Zaškrtnutím boxu (kroužek) na levé straně (A) vybíráte modul, který chcete používat, boxy (čtverečky) na pravé straně (C) zajistí zobrazení modulu jako záložky (E) v AndroidAPS. I když není pravý box zaškrtnutý, dostanete se k funkci přes hamburger menu (D) v levém horním rohu obrazovky.

Pokud má modul další dodatečná nastavení, dostanete se k nim kliknutím na ozubené kolo (B).

**První konfigurace:** Od AAPS 2.0 Vás provede procesem nastavení AndroidAPS Setup wizard (Průvodce nastavením). Stiskněte 3 tečky v pravé horní části obrazovky (F) a vyberte „Průvodce nastavením“.

![Tlačítko konfigurace a ozubené kolo](../images/ConfBuild_ConfigBuilder.png)

## Záložka nebo hamburger menu

Pomocí zaškrtávacího políčka pod symbolem oka se můžete rozhodnout, jak otevřít odpovídající sekci programu.

![Záložka nebo hamburger menu](../images/ConfBuild_TabOrHH.png)

## Profil

Vyberte bazální profil, který chcete použít. Další informace viz stránka [Profily](../Usage/Profiles.md).

### Místní profil (doporučeno)

Místní profil používá bazální profil zapsaný přímo do telefonu. Po jeho vybrání se v AAPS objeví nová záložka, kde si můžete profil upravovat. Ten je pak v případě potřeby načten pumpou. Při přepnutí profilu je uložen do pumpy – v profilu 1. Tento profil je doporučen, protože nevyžaduje připojení k internetu.

Vaše místní profily jsou součástí [exportovaného nastavení](../Usage/ExportImportSettings.rst). Proto se ujistěte, že zálohu máte bezpečně uloženou.

![Nastavení Místního profilu](../images/LocalProfile_Settings.png)

Tlačítka:

* zelené plus: přidat
* červené X: odstranit
* modrá šipka: kopírovat

Děláte-li v profilu nějaké změny, ujistěte se, že upravujete správný profil. Na záložce profilu nemusí být pokaždé zobrazen aktuální profil. Například když na domovské obrazovce přepnete přes záložku profilu na jiný profil, může pak být aktuální profil odlišný od toho, který je zobrazen v záložce profil, protože mezi nimi není žádné spojení.

#### Klonování přepnutí profilu

Z přepnutí profilu můžete snadno vytvořit nový místní profil. Posun času a procentuální změna budou v takovém případě přeneseny do nového místního profilu.

1. Přejděte na kartu Ošetření.
2. Vyberte možnost Přepnutí profilu.
3. Zvolte možnost "Klonovat".
4. Nový místní profil můžete upravit na kartě Místní profil (MPRF) nebo prostřednictvím hamburger menu.

![Klonování přepnutí profilu](../images/LocalProfile_ClonePS.png)

Jestliže chcete přepnout z Nightscout profilu na místní profil, jednoduše udělejte přepnutí profilu na svém NS profilu a naklonujte přepnutí profilu podle výše popsaného postupu.

#### Nahrávání místních profilů do Nighscoutu

Místní profily lze také nahrát do Nightscoutu. Nastavení najdete v [preferencích NSClientu](../Configuration/Preferences#nsclient).

![Nahrávání místního profilu do Nighscoutu](../images/LocalProfile_UploadNS2.png)

Výhody:

* ke změně nastavení profilu nepotřebujete připojení k internetu
* změny profilu lze provést přímo na telefonu
* nový profil lze vytvořit z přepnutí profilu
* místní profily lze nahrát do Nightscoutu

Nevýhody:

* nic

### Pomocník s profilem

Pomocník s profilem nabízí dvě funkce:

1. Najít profil pro děti
2. Porovnání dvou profilů nebo přepnutí profilů za účelem naklonování nového profilu

Podrobnosti jsou vysvětleny na stránce nápovědy [pomocník s profilem](../Configuration/profilehelper.rst).

### NS profil

NS profil používá profily, které jste uložili na webu nightscout (https://[adresavašehoprofilu]/profile). K přepnutí profilu, který bude aktivní, můžete použít tlačítko [Přepnout profil](../Usage/Profiles.md). Tato akce zapíše profil do pumpy, kde bude použit v případě selhání AndroidAPS. Takto si v Nightscoutu můžete vytvořit více profilů (např.. práce, doma, sport, prázdniny atd.). Je-li váš mobil online, budou profily po stisknutí tlačítka „Uložit“ odeslány do AAPS. Pokud nemáte připojení k internetu nebo k Nightscoutu, budou profily uloženy pouze v AAPS, a to do té doby, dokud nebudou synchronizované.

Vybráním tlačítka [Přepnout profil](../Getting-Started/Screenshots.md#current-profile) se aktivuje vybraný profil z Nightscoutu. AAPS will write the selected profile into the pump after the profile change, so that it is available without AAPS in an emergency and continues to run.

Výhody:

* více profilů
* snadná úprava pomocí PC nebo tabletu

Nevýhody:

* nelze provádět místní změny v nastavení profilu
* změny profilu nelze provést přímo na telefonu

## Inzulín

![Insulin type](../images/ConfBuild_Insulin.png)

* Vyberte typ inzulínové křivky, kterou používáte.
* The options 'Rapid-Acting Oref', Ultra-Rapid Oref', 'Lyumjev' and 'Free-Peak Oref' all have an exponential shape. More information is listed in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves). 
* The curves will vary based on the DIA and the time to peak.
    
    * PURPLE line shows how much **insulin remains** after it has been injected as it decays with time.
    * BLUE line shows **how active** insulin is.

### Doba působnosti inzulínu

* Hodnota DIA není u každého člověka stejná. Proto si ji musíte muset vyzkoušet sami na sobě. 
* Vždy to však musí být alespoň 5 hodin.
* For a lot of people using ultra-rapid insulins like Fiasp there is practically no noticeable effect after 3-4 hours any more, even if 0.0xx units are available as a rule then. Nicméně i toto zbytkové množství může mít vliv například při sportu. Proto AndroidAPS používá jako minimální hodnotu DIA 5 h.
* Další informace o tom si můžete přečíst v části Inzulinový profil na [ této ](../Getting-Started/Screenshots#insulin-profile) stránce. 

### Insulin type differences

* For 'Rapid-Acting', 'Ultra-Rapid' and 'Lyumjev' the DIA is the only variable you can adjust by yourself, the time to peak is fixed. 
* „Volitelný vrchol“ umožňuje nastavit obě proměnné – DIA i dobu maximální účinnosti inzulínu. Tato volba je určena pouze pro pokročilé uživatele, kteří znají důsledky nastavených hodnot. 
* Graf [ Křivka inzulínu ](../Getting-Started/Screenshots#insulin-profile) pomáhá pochopit různé křivky. 
* Zaškrtnutím čtverečku vedle názvu si je můžete prohlédnout v záložce. Další možnost jejich zobrazení je přes hamburgerové menu.

#### Rychle působící - Oref

* doporučeno pro Humalog, Novolog a Novorapid
* DIA = alespoň 5 h
* Max. Max. účinek = 75 minut po podání (pevné hodnota, nelze měnit)

#### Ultra rychlý - Oref

* doporučeno pro FIASP
* DIA = alespoň 5 h
* Max. max. účinek = 55 minut po podání (pevná hodnota, nelze měnit)

#### Lyumjev

* special insulin profile for Lyumjev
* DIA = alespoň 5 h
* Max. Max. účinek = 45 minut po podání (pevné hodnota, nelze měnit)

#### Volitelný vrchol Oref

* V profilu „Volitelný vrchol 0ref“ můžete ručně zadat dobu max. účinku inzulínu.
* Pokud není v profilu zadána vyšší hodnota, je DIA je automaticky nastavena na 5 h.
* Tento profil je doporučován v případě, že používáte nepodporovaný inzulín nebo směs různých inzulínů.

## Zdroj glykémií

Vyberte, který zdroj glykémií používáte – další informace k nastavení viz [Zdroj glykémií](BG-Source.rst).

* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* Glykémie z NS
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de) - jsou podporovány pouze verze 4.15.57 a novější
* [Aplikace Dexcom G (upravená)](https://github.com/dexcomapp/dexcomapp/) – chcete-li používat alarmy xDrip+, vyberte v nastavení „Odesílat glykémie do xDrip+“.
    
    ![Konfigurace zdroje BG](../images/ConfBuild_BGSource.png)

* [Poctech](http://www.poctechcorp.com/en/contents/268/5682.html)

* [Tomato App](http://tomato.cool/) pro zařízení MiaoMiao
* Generovat náhodné hodnoty glykémie (pouze režim Demo)

## Pumpa

Vyberte kterou pumpu používáte.

* [Dana R](DanaR-Insulin-Pump.md)
* DanaR Korea (pro korejskou verzi pumpy DanaR)
* Dana Rv2 (DanaR s neoficiálním upgradem firmwaru)
* [Dana RS](DanaRS-Insulin-Pump.md)
* [Accu-Chek Insight](Accu-Chek-Insight-Pump.md)
* [Accu-Check Combo](Accu-Chek-Combo-Pump.md) (vyžaduje nainstalovanou aplikaci Ruffy)
* [Medtronic](MedtronicPump.md)
* MDI (AAPS poskytuje návrhy pro aplikaci inzulínu pomocí inzulínových per)
* Virtuální pumpa (otevřená smyčka pro pumpu, pro kterou zatím neexistuje ovladač – nabízí pouze návrhy AAPS)

Pro pumpy Dana – pokud je nutný BT watchdog, aktivujte ho v **Rozšířená nastavení**. Při problémech s připojením k pumpě vypne bluetooth na 1 sekundu. Toto nastavení může u některých mobilů pomoci při zamrzání bluetooth.

[Heslo pro Dana RS pumpy](../Configuration/DanaRS-Insulin-Pump.md) musí být správně zadáno. V předchozích verzích nebylo heslo kontrolováno.

## Detekce citlivosti

Vyberte variantu detekce citlivosti. Další detaily o různých modelech si můžete [přečíst zde](../Configuration/Sensitivity-detection-and-COB.md). Bude prováděna analýza historických dat. Jestliže se zjistí, že na inzulín reagujete citlivěji než obvykle (nebo naopak máte vyšší rezistenci), provedou se úpravy. Další podrobnosti o algoritmu citlivosti si můžete přečíst v [dokumentaci OpenAPS](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode).

Průběh citlivosti můžete na hlavní stránce zobrazit vybráním políčka Citlivost. Zobrazí se jako bílá čára. Pozn: aby mohla Detekce citlivosti/[ Autosens](../Usage/Open-APS-features#autosens) automaticky upravovat množství dodávaného inzulínu, musíte mít splněný [cíl 8](../Usage/Objectives#objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens). Před dosažením tohoto cíle slouží procentuální údaj Autosens a bílá čára v grafu pouze pro informaci.

### Nastavení absorpce sacharidů

Pokud používáte Oref1 s SMB, musíte změnit **min_5m_carbimpact** na 8. Tato hodnota se používá pouze při výpadcích hodnot odečítaných z CGM nebo v případech, kdy se fyzickou aktivitou vyrovná vzestup glykémie, který by jinak vedl k tomu, že by systém AAPS odbourával COB. V situacích, kdy [absorpci sacharidů](../Usage/COB-calculation.rst) nelze počítat dynamicky na základě reakcí vaší glykémie, je použita tato výchozí hodnota absorpce. V podstatě jde o bezpečnostní pojistku.

## APS

Vyberte požadovaný algoritmus APS pro úpravy léčby. Detaily vybraného algoritmu lze prohlížet na kartě OpenAPS (OAPS).

* OpenAPS AMA (advanced meal assist, state of the algorithm in 2017) More detail about OpenAPS AMA can be found in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). Zjednodušeně řečeno, výhodou je, že poté, co si dáte bolus k jídlu, systém zajistí rychlý nárůst dočasného bazálu, zadáte-li dobře sacharidy.
* [OpenAPS SMB](../Usage/Open-APS-features.md) (super micro bolus, most recent algorithm for advanced users) Note you need to be in [Objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) in order to use OpenAPS SMB and min_5m_carbimpact must be set to 8 in Config builder > Sensitivity detection > Sensitivity Oref1 settings.

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
* Uzavřená smyčka je k dispozici pouze v případě, že jste v [6. cíli](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend) nebo vyšším a používáte podporovanou pumpu.
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

Měli byste pravidelně [exportovat svá nastavení](../Usage/ExportImportSettings.rst) (včetně pokroku v plnění cílů). V případě, že v budoucnosti budete muset svůj smartphone nahradit (nové zařízení, poškození displeje atd.), můžete tato nastavení jednoduše importovat.

Více informací naleznete na stránce [Cíle](../Usage/Objectives.rst).

## Ošetření

Na záložce Ošetření můžete vidět ošetření, která byla nahrána do Nightscoutu. Chcete-li upravit nebo odstranit záznam (například když jste snědli méně sacharidů, než jste očekávali), vyberte „Odstranit“ a zadejte novou hodnotu (případně změňte čas) prostřednictvím [tlačítka Sacharidy na hlavní obrazovce](../Getting-Started/Screenshots#carb-correction).

## Obecné

### Přehled

Zobrazí aktuální stav smyčky a tlačítko pro přístup k běžným akcím (další podrobnosti viz část [Domácí obrazovka](../Getting-Started/Screenshots.md)). Kliknutím na ozubené kolo se dostanete do nastavení.

#### Nechat obrazovku zapnutou

Tato volba zabrání Androidu vypnout obrazovku. To je velmi vhodné například pro prezentace. Při tomto nastavení ale dochází k velmi rychlému vybíjení baterie. Proto je doporučeno připojit smartphone k napájecímu kabelu.

#### Tlačítka

Určuje, jaká tlačítka budou viditelná na domácí obrazovce.

* Ošetření
* Kalkulačka
* Inzulín
* Sacharidy
* CGM (otevře xDrip+)
* Kalibrace

Kromě toho můžete nastavit zkratky pro inzulín a sacharidy a rozhodnout se, zda bude v dialogu pro přidání ošetření i poznámka.

#### Nastavení Rychlého bolusu

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

Vyberte si, zda jsou názvy záložek v AndroidAPS dlouhé (např. AKCE, LOKÁLNÍ PROFIL, AUTOMATIZACE) nebo krátké (např. ACT, LP, AUTO)

#### Zobrazovat kolonku poznámky v dialozích ošetření

Vyberte si, chcete-li mít při zadávání ošetření k dispozici pole poznámka.

#### Stavové indikátory

Vyberte, zda chcete mít v přehledu [stavové indikátory](../Configuration/Preferences#status-lights)pro stáří kanyly, stáří inzulínu, stáří baterie, stav zásobníku nebo úroveň nabití baterie. Je-li dosaženo úrovně pro varování, změní se barva stavového indikátoru na žlutou. Kritická hodnota se zobrazí červeně.

#### Pokročilá nastavení

**Podat tuto část z výsledku kalkukace [%]**: Při použití SMB si mnoho lidí neposílá na jídlo 100% dávku inzulínu, ale pouze její část (např. 75 %), a nechá zbytek na SMB ve spolupráci s UAM (detekce neoznámeného jídla). V tomto nastavení si můžete zvolit výchozí hodnotu pro procento, se kterým by měl bolus kalkulátor počítat. Pokud je toto nastavení 75 % a máte dostat bolus 10 U, navrhne bolusový kalkulátor pouze 7,5 jednotky.

**V průvodci povolte funkci superbolus** (jde o něco jiné než *super mikro bolus*!): Funkci používejte s opatrností a nepovolujte ji, dokud se nenaučíte, co to skutečně dělá. V podstatě je bazál za následující 2 hodiny přidán do bolusu a po dobu těchto 2 h je nastaven nulový dočasný bazál. **Funkce smyčky AAPS budou deaktivovány – používat opatrně! Pokud používáte funkci SMB, funkce smyčky AAPS budou deaktivovány dle vašeho nastavení v části [„Maximální počet minut bazálu, ke kterým se limituje SMB“](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to), pokud funkci SMB nevyužíváte, funkce smyčky budou vypnuty na dvě hodiny.** Podorbnosti o superbolusu najdete [zde](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### Akce

* Tlačítka k běžně používaným úkonům.
* See [AAPS screenshots](../Getting-Started/Screenshots#action-tab) for details.

### Automatizace

Uživatelem vytvořené úlohy automatizace ('if-then-else '). Prosím, [přečtěte si zde](../Usage/Automation.rst).

### SMS komunikátor

**SMS komunikátor** umožňuje vzdálené ovládání některých funkcí AndroidAPS prostřednictvím SMS, viz [SMS příkazy](../Children/SMS-Commands.rst), kde najdete další informace o nastavení.

### Jídlo

Zobrazuje jídla přidaná do databáze Nightscoutu. Více informací viz [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods).

Poznámka: Tyto záznamy nelze použít v Kalkulačce v AndroidAPS. (Pouze je zobrazit)

### Wear

Sledování a ovládání AAPS prostřednictvím hodinek s Wear OS (viz [stránka Watchfaces](../Configuration/Watchfaces.md)). Chcete-li nastavit parametry pro výpočet bolusu na hodinkách (tj. 15min trend, COB…), klikněte na nastavení (ozubené kolo).

Chcete-li z hodinek zadávat bolus atd., musíte v „Nastavení wear“ aktivovat volbu „Ovládání z hodinek“.

![Záložka Wear](../images/ConfBuild_Wear.png)

Prostřednictvím záložky Wear nebo hamburger menu (levý horní roh obrazovky, když není záložka zobrazena) můžete

* znovu poslat všechna data. To může pomoci v případech, kdy byly hodinky nějakou dobu nedostupné a potřebujete do nich poslat data.
* Otevřít nastavení hodinek přímo z telefonu.

### Stavová řádka xDrip (hodinky)

Zobrazit na displeji hodinek (xDrip+ watchface) stav smyčky (pokud nepoužíváte AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md))

### NSClient

* Nastavení synchronizace dat AndroidAPS s Nightscoutem.
* Nastavení v [konfiguraci](../Configuration/Preferences#nsclient) lze otevřít kliknutím na ozubené kolo.

### Údržba

E-mail a počet logů, které budou odeslány. Obvykle není nutné tyto hodnoty měnit.

### Konfigurace

Místo hamburger menu použijte záložku konfigurace.