# Příprava na začátek s AAPS

Vítejte. Tato dokumentace si klade za cíl vést uživatele, kteří se připravují na nastavení a začátek používání systému umělé slinivky Android APS (**AAPS**).

## Orientace v dokumentaci

**Index** a vysvětlení struktury dokumentace můžete najít [zde](index.md) a můžete se k němu také dostat klepnutím na symbol **AAPS** v levém horním rohu. Zde naleznete přehled účelu jednotlivých sekcí dokumentace. Můžete také použít nadpisy nalevo od této stránky k navigaci dokumentací. Konečně je tu šikovná funkce vyhledávání, přímo pod **AAPS**.

Snažíme se umožnit jednoše pochobit možnosti a limity **AAPS**. Po investování času do čtení dokumentace může být zklamáním zjistit, že třeba nemáte kompatibilní inzulínovou pumpu nebo CGM, nebo že **AAPS** nabízí jinou funkcionalitu než jste očekávali.

Mnoho detailů v **AAPS** dokumentaci dává větší smysl, když **AAPS** skutečně používáte. Stejně tak, jako je obtížné se nauřit sport pouhým přečtením pravidel, je nutná kombinace naučení se základních pravidel pro bezpečné provozování **AAPS** a naučení se, jak je používat, jakmile **AAPS** spustíte.

(preparing-safety-first)=

## Bezpečnost především
"S velkou mocí přichází velká odpovědnost..."

### Technická bezpečnost
**AAPS** má rozsáhlou sadu bezpečnostních prvků. Tato vynucená omezení jsou postupně uvolňována díky plnění série [cílů](Usage/Objectives.md), které zahrnují testování konkrétních parametrů a otázky s více možnými odpověďmi. Všechny funkce **AAPS** budou odemnknuty po úspěšném splnění cílů. Tento postup umožňuje uživateli bezpečný postup od otevřené k uzavřené smyčce, zatímco se učí o různých funkcích **AAPS**.

Tyto [cíle](Usage/Objectives.md) byly navrženy tak, aby co nejlépe představili **AAPS** a vzali do úvahy tpické chyby a trendy, které vývojáři **AAPS** vysledovali u nových uživatelů. Chyby můžou nastat protože nováčci jsou nezkušení a příliš dychtivý ke spuštění **AAPS**, nebo přehlédli důležité body. [Cíle](Usage/Objectives.md) jsou zaměřené na minimalizaci těchto problémů.

### Zdravotní bezpečnost
::::{admonition}Zabraňte trvalému a bolestivému poškození očí a nervů
:class:nebezpečí Doporučuje se opatrnost pokud jde o rychlá vylepšení v kontrole krevního cukru a snižování HbA1c
:::

Důležitým aspektem je, že **rychlé snížení HbA1c a zlepšená kontrola krevního cukru u těch, kteří měli nějakou dobu zvýšené glykémie, může vést k trvalému poškození**. Mnozí lidé s diabetem si toho nejsou vědomi a ne všichni lékaři o této problematice informují své pacienty.

Tato poškození mohou zahrnovat **ztrátu zraku a trvalou neuropatii (bolesti)**. Tomuto poškození je možné zabránit pomalejším snižováním úrovně glykémie. Pokud v současné době máte zvýšenou hodnotu HbA1c a začínáte se systémem **AAPS** (nebo jiným systémem uzavřené smyčky), _prosím_ prodiskutujte toto možné riziko s Vaším lékařem před zahájením, a dohodněte se na časovém horizontu s postupným bezpečným snižováním cílů glykémie. Vyšší cíle glykémie můžete je možné zpoičátku v **AAPS** nastavit (momentálně je nejvyšší nastavitelný cíl 10,6 mmol/L, ale můžete také využít nastavení slabého profilu) a poté je v průběhu měsíců snižovat.

#### Jak rychle můžu snížit můj HbA1c bez rizika trvalých následků?

Podle výsledků jedné retrospektivní [studie](https://pubmed.ncbi.nlm.nih.gov/1464975/) u 76 pacientů se riziko postupného vývoje retinopatie zvýšilo 1,6krát, 2,4krát a 3,8krát, pokud Hba1C poklesla o 1%, 2% nebo 3 % během šestiměsíčního období. Autoři studie navrhli, že **"snížení hodnoty HbA1c během jakéhokoli šestiměsíčního období by mělo být omezeno na méně než 2%, aby se zabránilo postupu retinopatie... Příliš rychlý úvodní pokles glykémie by mohl způsobit silné nebo dočasné zhoršení postupu retinopatie."**

Poznámka: Pokud používáte jiné jednotky HbA1c (mmol/mol namísto %), použijte HbA1c kalkulátor [zde](https://www.diabetes.co.uk/hba1c-units-converter.html).

V jiném retrospektivním [vyhodnocení](https://academic.oup.com/brain/article/138/1/43/337923) 954 pacientů výzkumníci poznamenali:

**"S poklesem HbA1c o 2–3 % bodů za 3 měsíce existovalo 20% riziko vzniku neuropatie vyvolané léčbou cukrovky, s poklesem HbA1c o >4% bodů za 3 měsíce překročilo absolutní riziko vzniku neuropatie vyvolané léčbou cukrovky 80 %.“**

[Komentář](https://academic.oup.com/brain/article/138/1/2/340563) k této studii souhlasil s tím, že aby se předešlo komplikacím, **cílem by mělo být snížení A1c o <2 % za 3 měsíce.** Další recenze na téma [si můžete přečíst zde](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6587545/pdf/DOM-21-454.pdf) a [zde](https://www.mdpi.com/1999-4923/15/7/1791).

Obecně se uznává, že _nově_ diagnostikovaní pacienti s cukrovkou I. typu (kteří mají před zahájením inzulínové léčby často velmi vysokou hladinu HbA1c) se zdají být schopni rychle snížit své HbA1c bezprostředně po diagnóze, aniž by se s těmito riziky setkávaly ve stejném rozsahu, protože neměli zvýšenou hladinuglukózy v krvi po tak dlouhou dobu. Nicméně stále je to otázka, kterou byste měli prodiskutovat se svým lékařem.

### Žádné SGLT-2 inhibitory

:::{admonition} Žádné SGLT-2 inhibitory
:class: nebezpečí SGLT-2 inhibitory, také nazývané glifloziny, potlačují reabsorbci krevního cukru v ledvinách. Vzhledem k tomu, že Glifoziny nevyčíslitelně snižují hladinu cukru v krvi, při používání uzavřené smyčky jako je AndroidAPS je užívat NESMÍTE! Znamenalo by to značné riziko ketoacidózy nebo hypoglykémie! Kombinace těchto léků se systémem, který snižuje bazální dávky s cílem zvýšit glykémii je obszvlášť nebezpečné.

V kostce:
- **Příklad 1: Riziko Hypoglykémie**
> Během oběda použijete **AAPS** k bolusu založenému na konzumaci 45g glukózy. Problémem je, že AAPS není známo, že inhibitory způsobují odstranění některých sacharidů tělem, což vede k tomu, že v těle je příliš mnoho inzulínu vzhledem k absorbovaným sacharidům a výsledkem je hypoglykémie.

- **Příklad 2: Riziko Ketoacidózy**
> Inhibitory na pozadí eliminují část sacharidů, což způsobí snížení glykémie. **AAPS** automaticky vydá pumpě pokyn snížit dávky inzulínu včetně bazálu. V průběhu času to může způsobit, že vaše glykémie zůstane pod cílovou hodnotou až do chvíle, kdy tělo nemá dostatek inzulínu k tomu, aby absorbovalo všechny sacharidy, a to má za následek ketoacidózu. Obvykle se Ketoacidóza u T1D pacientů rozvine z důvodu výpadku inzulínové pumpy což spustí alarm na jejich telefonu a zároveň to bude patrné díky vysoké hodnotě glykémie. Nebezpečí Glifozinů ale spočívá v tom, že AAPS nespustí žádné upozornění, protože pumpa je stále funkční a hladina cukru v krvi zústává v cílovém rozsahu.

Běžné obchodní názvy SGLT-2 inhibitorů zahrnují: Invokana, Farxida, Jardiance, Glyxambi, Synjardy, Steglatro, Xigduo XR a další.
:::


### Klíčové principy smyčky s AAPS

Hlavním zásadám a pojmům problematiky smyčky musí uživatel porozumnět před začátkem používání **AAPS**. Toho lze dosáhnout obětováním vašeho času k přečtení dokumentace **AAPS** a dokončením cílů, které jsou zaměřené na poskytnutí pevných základů pro bezpečné a efektivní používání **AAPS**. Objem **AAPS** dokumentace se může zprvu zdát nepřekonatelný, ale když budete trpělivý a budete věřit postupu, dostanete se do cíle!

Rychlost postupu bude záviset na jednotlivci, ale uvědomte si, že splnění všech cílů obvykle trvá 6-9 týdnů. Mnoho lidí sestavuje, instaluje a nastavuje **AAPS** dlouho před tím, než ho začne používat. K tomu má systém "virtuální pumpu", kterou můžete využít během plnění počátečních cílů, abyste se mohli seznámit s **AAPS**, aniž byste ho skutečně používali k dávkování inzulínu. Detailní časová osa je uvedena níže, ale počítejte s tím, že splněním cíle 8 **AAPS** začínáte používat uzavřenou smyčku. Další cíle přidávají doplňkové funkce jako **řízení pomocí SMS** a **automatizaci**, které někteří uživatelé využijí, ale nejsou zásadní pro fungování **AAPS**.

Úspěch s **AAPS** vyžaduje proaktivní přístup, ochotu reagovat na data o krevním cukru a pružný přístup k provedení potřebných úprav nastavení **AAPS** za účelem zlepšení vašich výsledků. Je téměř nemožné naučit se nějaký sport pouze přečtením pravidel a to samé se nechá říct o **AAPS**.

#### Připravte se na zpoždění a drobné problémy při astavování a spouštění aplikace

V počátečních fázích zahájení provozu **AAPS** může docházet k potížím se zprovozněním všech komponent smyčky, správným zajištěním jejich vzájemné komunikace (a s potenciálními sledujícími) a při ladění nastavení. Některé problémy není možné vyřešit, dokud **AAPS** denně nevyužíváte, ale ve Facebookové skupině nebo na Discordu získáte veškerou potřebnou pomoc a podporu. Řešení zádrhelů a problémů si zkuste naplánovat na vhodnou dobu, jako například klidné víkendové ráno (takže raději ne pozdě v noci, když jste unavení, nebo před důležitou schůzkou či cestou).

#### Technologická kompatibilita

**AAPS** je kompatibilní pouze s určitými typy inzulínových pump, senzorů a telefonů a některé technologie nemusí být dostupné ve všech zemích. Abyste se vyhnuli zklamání nebo frustraci, přečtěte si prosím v dokumentaci oddíly [CGM](Configuration/BG-Source.md), [Inzulínové pumpy](Getting-Started/Pump-Choices.md) a [Telefony](Hardware/Phoneconfig.md).

#### Čas potřebný k sestavení aplikace a postup k plné smyčce

Čas potřebný na sestavení **AAPS** zavisí na vaší odborné úrovni a technických schopnostech. Nezkušenému uživateli může sestavení **AAPS** trvat (s pomocí komunity) půl dne až celý den. Jak budete v průběhu času získávat více zkušeností, postup sestavení nových verzí **AAPS** se výrazně urychlí.

Pro podporu procesu sestavení aplikace jsou vyčleněny tyto oddíly dokumentace:

- seznam orázek a odpovědí zaměřený na časté chyby v rámci FAQ (oddíl K);

- „[Jak nainstalovat AAPS](Installing-AndroidAPS/Building-APK.md)? (sekce D), která zahrnuje pododdíl [Řešení problémů](Usage/troubleshooting.md).

How long it takes to get to closed looping depends on the individual, but an approximate timescale for getting to full looping with AAPS can be found ([here](#how-long-will-it-take-to-set-everything-up))


#### Úložiště klíčů a konfigurace exportu nastavených hodnot

Úložiště klíčů (keystore) je heslem chráněný šifrovaný soubor jedinečný pro vaši kopii **AAPS**. Váš Android telefon soubor úložiště klíčů využívá k zajištění toho, že nikdo jiný nebude moct aktualizovat vaši kopii Aaps. Stručně řešeno, jako součást sestavení **AAPS** byste měli:

1.  Uložit váš soubor úložiště klíčů (.jks soubor použitý k podepsání vaší aplikace) na bezpečné místo;

2.  Zaznamenat si heslo k vašemu souboru úložiště klíčů.


Tím zajistíte, že při každém dalším sestavení aktualizované verze **AAPS** budete moct použít stejný soubor úložiště klíčů. V průměru budou potřebné 2 aktualizace **AAPS** ročně.

**AAPS** navíc umožňuje [exportovat všechny vaše nastavené hodnoty.](Usage/ExportImportSettings.md) To vám umožní bezpečně obnovit váš systém s minimálním výpadkem v případě změny telefonu, aktualizace/přeinstalování aplikace. 

#### Řešení problémů

Prosím, neváhejte se obrátit na komunitu AAPS, pokud si s něčím nejste jistí - neexistují žádné pošetilé otázky! Všichni uživatelé, bez ohledu na úroveň jejich zkušeností, mohou klást otázky podle potřeby. Díky množství **AAPS** uživatelů dostanete obvykle odpovědi na vaše otázky poměrně rychle.

##### [Zeptejte se na facebookové skupině AAPS](https://www.facebook.com/groups/AndroidAPSUsers/)

##### [Zeptejte se Discord kanálu AAPS](https://discord.gg/4fQUWHZ4Mw)





#### [Kde získat pomoc?](Where-To-Go-For-Help/Background-reading.md)

Cílem této sekce je poskytnout novým uživatelům odkazy na zdroje, aby získali pomoc včetně přístupu ke komunitní podpoře složené z nových i zkušených uživatelů, kteří mohou objasnit otázky, a vyřešit obvyklé nástrahy, které přicházejí s AAPS.

#### [Oddíl pro lékaře](Resources/clinician-guide-to-AndroidAPS.md)

Tato [sekce je zaměřená na lékaře](Resources/clinician-guide-to-AndroidAPS.md), kteří se chtějí dozvědět více informací o AAPS a open source technologii umělé slinivky. Jsou zde také doporučení, jak postupovat při úvodním [rozhovoru s Vaším lékařským týmem](introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team).

## Co budeme sestavovat a instalovat?

Tento diagram poskytuje přehled klíčových komponent (jak hardwarových, tak softwarových) systému **AAPS**:

![preparing_overview](./images/preparing_images/AAPS_preparing_overview_01.png)


Kromě tří základních hardwarových komponentů (telefon, pumpa, glukózový senzor) potřebujeme také: 1) AAPS aplikaci 2) Reportovací server a 3) Aplikaci pro kontinuální sledování hladiny glukózy (CGM)

### 1) Aplikace pro Android telefon: **AAPS**

**AAPS** je aplikace, která běží na Android smartphonech a dalších zařízeních. Sami pomocí podrobného návodu vytvoříte **AAPS** aplikaci (apk soubor). Stáhnete zdrojový kód **AAPS** z GitHubu, nainstalujete potřebné programy do vašeho počítače (Android Studio, GitHub desktop) a sestavíte si vlastní kopii **AAPS** aplikace. Přesunete **AAPS** aplikaci na váš chytrý telefon (pomocí e-mailu, USB kabelu apod.) a nainstalujete ji.

### 2) Reportovací server: NightScout (nebo Tidepool*)

Abyste dokázali plně využít **AAPS**, potřebujete nastavit Nightscout server. Můžete to udělat sami (odkaz na manuál) nebo alternativně zaplatit drobný poplatek za spravovanou Nighscout službu vytvořenou pro vás (odkaz na T1 pal 10.be atp.). Nightscout se používá pro průběžný sběr dat z **AAPS**, ze kterých může vytvářet podrobné zprávy související s CGM a inzulínovými schematy. Pečovatelé mohou používat Nightscout ke vzdálené komunikaci s **AAPS** aplikací, která jim umožní dohlížet nad nad managementem diabetu jejich dítěte. Možnosti vzdálené komunikace zahrnují monitoring úrovní glukózy a inzulínu v reálném čase, vzdálené posílání bolusů (pomocí textových zpráv) a zadávání jídel. Pokusit se analyzovat data o vaší sukrovce pomocí informací z CGM odděleně od dat z inzulínové pumpy je jako pokoušet se řídit auto se slepým řidičem, kterému pasažér popisuje situaci.  Pro AAPS verze 3.2 a novější je k dispozici také Tidepool jako alternativa k Nightscoutu.

### 3) Aplikace senzoru CGM

V závislosti na vašem glukózovém senzoru/CGM budete potřebovat kompatibilní aplikaci pro příjem měření glukózy a jejich odesílání do **AAPS**. Různé možnosti jsou zobrazeny níže a více informací je uvedeno v sekci [Kompatibilní CGM](./Configuration/BG-Source.md):

![dexcom_options](./images/preparing_images/AAPS_connectivity_Dex_02.png) ![libre_options](./images/preparing_images/AAPSconnectivity_libre.png) ![eversense_options](./images/preparing_images/AAPS_connectivity_eversense.png)

### Údržba **AAPS** systému

**Nightscout** i **AAPS**musí být přibližně jednou ročně aktualizovány, když jsou vydány nové verze. V některých případech je možné aktualizaci odložit, zatímco v jiných se z bezpečnostních důvodů důrazně doporučuje aktualizaci provést bezodkladně. Upozornění na dostupnou aktualizaci jsou zveřejňována ve Facebook skupinách a na Discord serveru. Poznámky k vydání nové verze vždy objadní, o jaký scénář se jedná. V čase aktualizace bude pravděpodobně mnoho lidí klást obdobné otázky a budete mít podporu při provedení aktualizace.

(preparing-how-long-will-it-take?)=
## Jak dlouho bude trvat všechno nastavit?

Jak bylo zmíněno dříve, používání **AAPS** je víceméně "cesta", která od vás bude obětovat váš volný čas. Nejde se o jednorázové řešení. Současné odhady pro sestavení **AAPS**, instalaci a konfiguraci **AAPS** a **CGM** softwaru a postup od otevřené k hybridní smyčce jsou 2 až 3 měsíce. Proto se doporučeje, abyste dali prioritu sestavení **AAPS** aplikace a co nejdříve se pustili do práce na počátečních cílích, i když ještě používáte jiný systém podávání inzulínu (až do cíle 5 můžete využívat pouze virtuální pumpu). Zde je přibližný časový rámec:

| Úlohy                                                                                                   | Odhadovaný čas |
| ------------------------------------------------------------------------------------------------------- |:--------------:|
| úvodní přečtení dokumentace:                                                                            |    1-2 dny     |
| instalace a konfigurace PC k sestavení aplikace:                                                        |   2-8 hodin    |
| sestavení Nightscout serveru:                                                                           |    1 hodina    |
| Instalace CGM aplikace (xDrip, BYODA, …)                                                                |    1 hodina    |
| úvodní konfigurace CGM->xDrip->AAPS:                                                                    |    1 hodina    |
| úvodní konfigurace AAPS->inzulínová pumpa:                                                              |    1 hodina    |
| konfigurace AAPS>NightScout (pouze výkazy):                                                             |    1 hodina    |
| volitelně (pro rodiče) - konfigurace NightScout <-> **AAPS** & AAPS klienti:                            |    1 hodina    |
| Cíl 1: Nastavit vizualizaci a monitoring, analyzovat bazály a poměry                                    |    1 hodina    |
| Cíl 2: Naučte se ovládat AAPS                                                                           |    2 hodiny    |
| Cíl 3: Prokázat své znalosti                                                                            |   až 14 dní    |
| Cíl 4: Začít s otevřenou smyčkou                                                                        |     7 dnů      |
| Cíl 5: Porozumění otevřené smyčce, včetně doporučení pro dočasné bazály                                 |     7 dnů      |
| Cíl 6: Začátek uzavřené smyčky - s pozastavením pumpy při nízké glykémii                                |   5 - 14 dní   |
| Cíl 7: Vyladit uzavřenou smyčku, zvyšovat max IOB nad a postupně snižovat cílovou glykémii:             |    až 7 dnů    |
| Cíl 8: Upravit bazály a poměry, když bude potřeba, a povolit automatickou detekci citlivosti na inzulín |   7 - 14 dní   |
| Cíl 9: Povolit další funkce oref1, jako je SMB (super micro bolus)                                      |   až 14 dní    |
| Cíl 10: Automatizace                                                                                    |     1 den      |


Jakmile budete plně fungovat na **AAPS**, budete potřebovat ladit nastavení vašich parametrů abyste dosáhli zlepšení ve zvládání vašeho diabetu.

## Požadavky

### Lékařská hlediska

Kromě lékařských varování popsaných v oddíle [Bezpečnost](preparing-safety-frist) existují také další parametry, které jsou závislé na typu inzulínu, který používáte v pumpě.

#### Výběr inzulínu

Výpočty **AAPS** jsou založené na koncenraci inzulínu 100U/ml (stejně jako norma pumpy). Podporovány jsou následující typy předvoleb inzulínového profilu:

- Rychlý Oref: Humalog/NovoRapid/NovoLog
- Ultra rychlý ORef: fiasp
- Lyumjev

Pouze pro experimentální použití / pokročilé uživatele:
- Oref s volitelným vrcholem: Umožňuje definovat vrchol aktivity inzulínu


### Technicky

Cílem této dokumentace je snížení potřebné technické odbornosti na absolutní minimum. K sestavení aplikace **AAPS** budete potřebovat váš počítač s instalovaným Android Sudiem (podrobné pokyny). Musíte také přes internet nastavit server ve veřejném cloudu, nakonfigurovat několik Android aplikací a rozvíjet své odborné znalosti v oblasti zvládání cukrovky. Toho můžete dosáhnout postupnými kroky, trpělivostí a pomocí od **AAPS** komunity. Pokud jste schopni používat internet, spravovat vaše e-maily na Gmailu a udržovat váš počítač aktualizovaný, pak je pro vás vytvoření **AAPS** proveditelný úkol. Jen nepospíchejte.

### Chytré telefony

#### AAPS a Android verze
The current version of **AAPS** (3.2) requires an Android smartphone with Google **Android 9.0 or above**. Pokud zvažujete nákup nového telefonu (od 2024), je doporučována verze Android 13. Users are strongly encouraged to keep their build of **AAPS** up to date for safety reasons, however for users unable to use a device with Android 9.0 or newer, earlier versions of  **AAPS** compatible for older Android versions like [Android 8](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2.1) and [Android 7](https://github.com/nightscout/AndroidAPS/releases/tag/2.6.2), remain available from previous releases (check the release notes for legacy versions).

#### Výběr modelu smartphone
Přesný model, který kupujete, závisí na požadovaných funkcích. Existují dvě archivované tabulky kompatibilních [smartphonů](https://docs.google.com/spreadsheets/d/1zO-Vf3wv0jji5Gflk6pe48oi348ApF5RvMcI6NG5TnY/edit#gid=2097219952) a [smartphonů a hodinek](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). Tabulky již nejsou aktualizovány, protože existuje příliš mnoho modelů, a proto nyní doporučujeme vyhledat ve skupinách podpory (Facebook nebo Discord) „telefon“ nebo konkrétní model, který si chcete pořídit. Pokud stále potřebujete další informace, zeptejte se v novém příspěvku.

Pokud chcete poskytnout chytrý telefon nebo hodinky k provedení testování, napište prosím na [donations@androidaps.org](mailto:donations@androidaps.org).

- [List of tested phones](../Getting-Started/Phones.md)
- [Jelly Settings](../Usage/jelly.md)
- [Huawei Settings](../Usage/huawei.md)

Uživatelům doporučujeme udržovat jejich Android telefon aktualizovaný, včetně bezpečnostních nastavení. Ovšem pokud jste noví uživatel **AAPS** nebo nejste technicky zdatný, možná budete chtít pozdržet aktualizaci svého telefonu do doby, než to udělají ostatní a potvrdí na fórech, že je to bezpečné.

:::{admonition} Odložení aktualizací na telefonech Samsung :class: upozornění Samsung má nešťastný zvyk vynucovat aktualizace jejich zařízení, což někdy způsobuje problémy s bluetooth připojením. Chcete-li tyto nucené aktualizace zakázat, je třeba přepnout telefon do "vývojářského režimu": přejděte do nastavení, informací o softwaru, poté klepněte na číslo sestavení, které potvrzuje, že máte odemčený vývojářský režim. Přejděte zpět do hlavního menu a měli byste vidět novou položku možností pro vývojáře. Otevřete možnosti vývojáře, najděte automatickou aktualizaci systému a položku vypněte.

:::{admonition} Potenciální problémy s Google Play Protect
:class: upozornění Byly reportovány události pravidelných ranních restartů aplikace **AAPS** službou Google Play Protect. Pokud se tak stane, otevřete možnosti Google Play a zakažte "Google Play Protect". Ne všechny modely telefonů nebo verze Androidu jsou tímto problémem ovlivněny.
:::

