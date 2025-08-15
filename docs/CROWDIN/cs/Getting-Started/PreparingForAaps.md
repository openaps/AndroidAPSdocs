# Příprava na začátek s AAPS

Vítejte. Tato dokumentace si klade za cíl vést uživatele, kteří se připravují na nastavení a začátek používání systému umělé slinivky Android APS (**AAPS**).

## Orientace v dokumentaci

An **index** and explanation of the documentation structure can be found [here](../index.md), you can also reach it by clicking on the **AAPS** symbol at the top left of the documentation. Zde naleznete přehled účelu jednotlivých sekcí dokumentace. Můžete také použít nadpisy nalevo od této stránky k navigaci dokumentací. Konečně je tu šikovná funkce vyhledávání, přímo pod **AAPS**.

Snažíme se umožnit jednoše pochobit možnosti a limity **AAPS**. Po investování času do čtení dokumentace může být zklamáním zjistit, že třeba nemáte kompatibilní inzulínovou pumpu nebo CGM, nebo že **AAPS** nabízí jinou funkcionalitu než jste očekávali.

Mnoho detailů v **AAPS** dokumentaci dává větší smysl, když **AAPS** skutečně používáte. Stejně tak, jako je obtížné se nauřit sport pouhým přečtením pravidel, je nutná kombinace naučení se základních pravidel pro bezpečné provozování **AAPS** a naučení se, jak je používat, jakmile **AAPS** spustíte.

(preparing-safety-first)=

## Bezpečnost především
"S velkou mocí přichází velká odpovědnost..."

### Technická bezpečnost
**AAPS** má rozsáhlou sadu bezpečnostních prvků. These impose constraints which are gradually removed through staged completion of a series of [Objectives](../SettingUpAaps/CompletingTheObjectives.md) which involve testing specific parameters and answering multiple choice questions. Všechny funkce **AAPS** budou odemnknuty po úspěšném splnění cílů. Tento postup umožňuje uživateli bezpečný postup od otevřené k uzavřené smyčce, zatímco se učí o různých funkcích **AAPS**.

The [Objectives](../SettingUpAaps/CompletingTheObjectives.md) have been designed to achieve the best possible introduction to **AAPS**, taking into consideration the typical errors and general trends **AAPS** developers have observed with new users. Chyby můžou nastat protože nováčci jsou nezkušení a příliš dychtivý ke spuštění **AAPS**, nebo přehlédli důležité body. The [Objectives](../SettingUpAaps/CompletingTheObjectives.md) aim to minimise these issues.

### Zdravotní bezpečnost
```{admonition} Avoid permanent and painful damage to your eyes and nerves
:class: danger
Caution is advised concerning rapid improvements in blood glucose control and lowering of HbA1c 
```

An important safety consideration is that a **rapid reduction in HbA1c and improved blood glucose control in those who have had elevated glucose levels for some time can cause permanent damage**. Many people with diabetes are unaware of this, and not all clinicans make their patients aware of this issue.

This damage can include **sight loss, and permanent neuropathy (pain)**. It is possible to avoid this damage occurring, by reducing average glucose levels more slowly. If you currently have an elevated HbA1c and are moving to **AAPS** (or any other closed loop system), _please_ discuss this potential risk with your clinical team before starting, and agree a timescale with gradually decreasing safe glucose targets with them. You can easily set higher glucose targets in **AAPS** initially (currently, the highest target you can select is 10.6 mmol/L but you can also maintain a purposefully weak profile if needed), and then reduce the target as the months pass.

#### Jak rychle můžu snížit můj HbA1c bez rizika trvalých následků?

One retrospective [study](https://pubmed.ncbi.nlm.nih.gov/1464975/) of 76 patients reported that the risk of progression of retinopathy increased by 1.6 times, 2.4 times and 3.8 times if the Hba1C dropped 1%, 2% or 3% respectively over a 6 month period. They suggested that the **"decrease in HbA1c value during any 6-month period should be limited to less than 2% in order to prevent the progression of retinopathy....Too rapid a decrease at the initiation of glycemic control could cause severe or transient exacerbation of the progression of retinopathy."**

N.B. If you use different HbA1c units (mmol/mol rather than %), click [here](https://www.diabetes.co.uk/hba1c-units-converter.html) for a HbA1c calculator tool.

In another retrospective [evaluation](https://academic.oup.com/brain/article/138/1/43/337923) of 954 patients, researchers noted that:

**"With a decrease in HbA1c of 2–3% points over 3 months there was a 20% absolute risk of developing treatment-induced neuropathy in diabetes, with a decrease in HbA1c of >4% points over 3 months the absolute risk of developing treatment-induced neuropathy in diabetes exceeded 80%."**

A [commentary](https://academic.oup.com/brain/article/138/1/2/340563) on this work agreed that to avoid complications **the goal should be to reduce A1c by <2% over 3 months.** You can read other reviews on the topic [here](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6587545/pdf/DOM-21-454.pdf) and [here](https://www.mdpi.com/1999-4923/15/7/1791).

It is generally recognised that _newly_ diagnosed type 1 diabetics (who often have very high HbA1c at diagnosis, before starting insulin therapy) appear to be able to rapidly reduce their HbA1c immediately after diagnosis without encountering these risks to the same extent, because they have not had elevated blood glucose levels for such a sustained period. However, it is still a consideration which you should discuss with your clinician.

(PreparingForAaps-no-sglt-2-inhibitors)=
### Žádné SGLT-2 inhibitory

```{admonition} NO SGLT-2 inhibitors
:class: danger
SGLT-2 inhibitors, also called gliflozins, inhibit reabsorption of glucose in the kidney. Gliflozins incalculably lower blood sugar levels, and so you MUST NOT take them while using a closed loop system like AAPS! There would be a significant risk of ketoacidosis and/or hypoglycemia! The combination of this medication with a system that lowers basal rates in order to increase BG is especially dangerous. 

In a nutshell:
- **Example 1: risk of Hypo**
>During lunch, you use **AAPS** to bolus based on consuming 45g of glucose. Problémem je, že AAPS není známo, že inhibitory způsobují odstranění některých sacharidů tělem, což vede k tomu, že v těle je příliš mnoho inzulínu vzhledem k absorbovaným sacharidům a výsledkem je hypoglykémie.

- **Example 2: risk of Ketoacidosis**
>The inhibitors eliminate some of the carbs in the background causing a reduction in your BG. **AAPS** will automatically instruct the pump to decrease insulin intake  including basal. V průběhu času to může způsobit, že vaše glykémie zůstane pod cílovou hodnotou až do chvíle, kdy tělo nemá dostatek inzulínu k tomu, aby absorbovalo všechny sacharidy, a to má za následek ketoacidózu. Obvykle se Ketoacidóza u T1D pacientů rozvine z důvodu výpadku inzulínové pumpy což spustí alarm na jejich telefonu a zároveň to bude patrné díky vysoké hodnotě glykémie. Nebezpečí Glifozinů ale spočívá v tom, že AAPS nespustí žádné upozornění, protože pumpa je stále funkční a hladina cukru v krvi zústává v cílovém rozsahu.  

Běžné obchodní názvy SGLT-2 inhibitorů zahrnují: Invokana, Farxida, Jardiance, Glyxambi, Synjardy, Steglatro, Xigduo XR a další.
```


### Klíčové principy smyčky s AAPS

Hlavním zásadám a pojmům problematiky smyčky musí uživatel porozumnět před začátkem používání **AAPS**. Toho lze dosáhnout obětováním vašeho času k přečtení dokumentace **AAPS** a dokončením cílů, které jsou zaměřené na poskytnutí pevných základů pro bezpečné a efektivní používání **AAPS**. Objem **AAPS** dokumentace se může zprvu zdát nepřekonatelný, ale když budete trpělivý a budete věřit postupu, dostanete se do cíle!

Rychlost postupu bude záviset na jednotlivci, ale uvědomte si, že splnění všech cílů obvykle trvá 6-9 týdnů. Mnoho lidí sestavuje, instaluje a nastavuje **AAPS** dlouho před tím, než ho začne používat. K tomu má systém "virtuální pumpu", kterou můžete využít během plnění počátečních cílů, abyste se mohli seznámit s **AAPS**, aniž byste ho skutečně používali k dávkování inzulínu. Detailní časová osa je uvedena níže, ale počítejte s tím, že splněním cíle 8 **AAPS** začínáte používat uzavřenou smyčku. Další cíle přidávají doplňkové funkce jako **řízení pomocí SMS** a **automatizaci**, které někteří uživatelé využijí, ale nejsou zásadní pro fungování **AAPS**.

Úspěch s **AAPS** vyžaduje proaktivní přístup, ochotu reagovat na data o krevním cukru a pružný přístup k provedení potřebných úprav nastavení **AAPS** za účelem zlepšení vašich výsledků. Je téměř nemožné naučit se nějaký sport pouze přečtením pravidel a to samé se nechá říct o **AAPS**.

#### Připravte se na zpoždění a drobné problémy při astavování a spouštění aplikace

V počátečních fázích zahájení provozu **AAPS** může docházet k potížím se zprovozněním všech komponent smyčky, správným zajištěním jejich vzájemné komunikace (a s potenciálními sledujícími) a při ladění nastavení. Některé problémy není možné vyřešit, dokud **AAPS** denně nevyužíváte, ale ve Facebookové skupině nebo na Discordu získáte veškerou potřebnou pomoc a podporu. Řešení zádrhelů a problémů si zkuste naplánovat na vhodnou dobu, jako například klidné víkendové ráno (takže raději ne pozdě v noci, když jste unavení, nebo před důležitou schůzkou či cestou).

#### Technologická kompatibilita

**AAPS** je kompatibilní pouze s určitými typy inzulínových pump, senzorů a telefonů a některé technologie nemusí být dostupné ve všech zemích. In order to avoid any disappointment or frustrations, please read the [CGM](../Getting-Started/CompatiblesCgms.md), [pump](../Getting-Started/CompatiblePumps.md) and [phone](../Getting-Started/Phones.md) sections.

#### Čas potřebný k sestavení aplikace a postup k plné smyčce

Čas potřebný na sestavení **AAPS** zavisí na vaší odborné úrovni a technických schopnostech. Nezkušenému uživateli může sestavení **AAPS** trvat (s pomocí komunity) půl dne až celý den. Jak budete v průběhu času získávat více zkušeností, postup sestavení nových verzí **AAPS** se výrazně urychlí.

Pro podporu procesu sestavení aplikace jsou vyčleněny tyto oddíly dokumentace:

- List of questions and answers for frequent errors that are likely to occur in [FAQs (Section](../UsefulLinks/FAQ.md) K);

- “[How to install AAPS](../SettingUpAaps/BuildingAaps.md)? (Section D) which includes [Troubleshooting](../GettingHelp/GeneralTroubleshooting.md) Subsection.

How long it takes to get to closed looping depends on the individual, but an approximate timescale for getting to full looping with AAPS can be found ([here](#how-long-will-it-take-to-set-everything-up))


#### Úložiště klíčů a konfigurace exportu nastavených hodnot

Úložiště klíčů (keystore) je heslem chráněný šifrovaný soubor jedinečný pro vaši kopii **AAPS**. Váš Android telefon soubor úložiště klíčů využívá k zajištění toho, že nikdo jiný nebude moct aktualizovat vaši kopii Aaps. Stručně řešeno, jako součást sestavení **AAPS** byste měli:

1.  Uložit váš soubor úložiště klíčů (.jks soubor použitý k podepsání vaší aplikace) na bezpečné místo;

2.  Zaznamenat si heslo k vašemu souboru úložiště klíčů.


Tím zajistíte, že při každém dalším sestavení aktualizované verze **AAPS** budete moct použít stejný soubor úložiště klíčů. V průměru budou potřebné 2 aktualizace **AAPS** ročně.

In addition, **AAPS** provides the ability to [export all your configuration settings](../Maintenance/ExportImportSettings.md). To vám umožní bezpečně obnovit váš systém s minimálním výpadkem v případě změny telefonu, aktualizace/přeinstalování aplikace. 

#### Troubleshooting

Prosím, neváhejte se obrátit na komunitu AAPS, pokud si s něčím nejste jistí - neexistují žádné pošetilé otázky! Všichni uživatelé, bez ohledu na úroveň jejich zkušeností, mohou klást otázky podle potřeby. Díky množství **AAPS** uživatelů dostanete obvykle odpovědi na vaše otázky poměrně rychle.

##### [Zeptejte se na facebookové skupině AAPS](https://www.facebook.com/groups/AndroidAPSUsers/)

##### [Zeptejte se Discord kanálu AAPS](https://discord.gg/4fQUWHZ4Mw)





#### [Where to go for help](../UsefulLinks/BackgroundReading.md)?

Cílem této sekce je poskytnout novým uživatelům odkazy na zdroje, aby získali pomoc včetně přístupu ke komunitní podpoře složené z nových i zkušených uživatelů, kteří mohou objasnit otázky, a vyřešit obvyklé nástrahy, které přicházejí s AAPS.

#### [Oddíl pro lékaře](../UsefulLinks/ClinicianGuideToAaps.md)

This is a [section specifically for clinicians](../UsefulLinks/ClinicianGuideToAaps.md) who want to know more about AAPS and open source artificial pancreas technology. There is also guidance on [how to talk to your clinical team](#introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team) in the Introduction.

## Co budeme sestavovat a instalovat?

Tento diagram poskytuje přehled klíčových komponent (jak hardwarových, tak softwarových) systému **AAPS**:

![preparing_overview](../images/preparing_images/AAPS_preparing_overview_01.png)


Kromě tří základních hardwarových komponentů (telefon, pumpa, glukózový senzor) potřebujeme také: 1) AAPS aplikaci 2) Reportovací server a 3) Aplikaci pro kontinuální sledování hladiny glukózy (CGM)

### 1) Aplikace pro Android telefon: **AAPS**

**AAPS** je aplikace, která běží na Android smartphonech a dalších zařízeních. You are going to build the **AAPS** app (an apk file) yourself, using a step-by-step guide, by downloading the **AAPS** source code from GitHub, installing the necessary programs (Android Studio, GitHub desktop) on your computer and building your own copy of **AAPS** app. Přesunete **AAPS** aplikaci na váš chytrý telefon (pomocí e-mailu, USB kabelu apod.) a nainstalujete ji.

### 2) Reportovací server: NightScout (nebo Tidepool*)

Abyste dokázali plně využít **AAPS**, potřebujete nastavit Nightscout server. You can [do this yourself](https://nightscout.github.io/nightscout/new_user/#free-diy) or alternatively, pay a small fee for a [managed Nightscout service](https://nightscout.github.io/#nightscout-as-a-service) to be set up for you. Nightscout se používá pro průběžný sběr dat z **AAPS**, ze kterých může vytvářet podrobné zprávy související s CGM a inzulínovými schematy. Pečovatelé mohou používat Nightscout ke vzdálené komunikaci s **AAPS** aplikací, která jim umožní dohlížet nad nad managementem diabetu jejich dítěte. Možnosti vzdálené komunikace zahrnují monitoring úrovní glukózy a inzulínu v reálném čase, vzdálené posílání bolusů (pomocí textových zpráv) a zadávání jídel. Pokusit se analyzovat data o vaší sukrovce pomocí informací z CGM odděleně od dat z inzulínové pumpy je jako pokoušet se řídit auto se slepým řidičem, kterému pasažér popisuje situaci.  Pro AAPS verze 3.2 a novější je k dispozici také Tidepool jako alternativa k Nightscoutu.

### 3) Aplikace senzoru CGM

V závislosti na vašem glukózovém senzoru/CGM budete potřebovat kompatibilní aplikaci pro příjem měření glukózy a jejich odesílání do **AAPS**. The different options are shown below and more information is given in the [compatible CGMs section](../Getting-Started/CompatiblesCgms.md):

![dexcom_options](../images/preparing_images/AAPS_connectivity_Dex_02.png) ![libre_options](../images/preparing_images/AAPSconnectivity_libre.png) ![eversense_options](../images/preparing_images/AAPS_connectivity_eversense.png)

### Údržba **AAPS** systému

**Nightscout** i **AAPS**musí být přibližně jednou ročně aktualizovány, když jsou vydány nové verze. V některých případech je možné aktualizaci odložit, zatímco v jiných se z bezpečnostních důvodů důrazně doporučuje aktualizaci provést bezodkladně. Upozornění na dostupnou aktualizaci jsou zveřejňována ve Facebook skupinách a na Discord serveru. Poznámky k vydání nové verze vždy objadní, o jaký scénář se jedná. V čase aktualizace bude pravděpodobně mnoho lidí klást obdobné otázky a budete mít podporu při provedení aktualizace.

(preparing-how-long-will-it-take)=
## Jak dlouho bude trvat všechno nastavit?

Jak bylo zmíněno dříve, používání **AAPS** je víceméně "cesta", která od vás bude obětovat váš volný čas. Nejde se o jednorázové řešení. Current estimates for building **AAPS**, installing and configuring **AAPS** and **CGM** software and getting from open loop to hybrid closed looping with **AAPS** are about 4 to 6 months overall. It is therefore suggested that you prioritize building the **AAPS** app and working through the early objectives as soon as possible, even if you are still using a different insulin delivery system (you can use a virtual pump up to objective 5).

Some of the objectives require a given amount of days to pass to make sure you understand the new functionality. It is not possible to bypass this waiting time, these minimal timings have been set-up for your own safety.

Zde je přibližný časový rámec:

| Úlohy                                                         |          Odhadovaný čas          |
| ------------------------------------------------------------- |:--------------------------------:|
| Initial reading of the documentation                          |             1-2 dny              |
| Installing/configuring PC to allow the build                  |            2-8 hodin             |
| Setting up a reporting server                                 |              1 hour              |
| Installing a CGM app (xDrip+, BYODA, …)                       |              1 hour              |
| Configuring CGM → xDrip+ → APPS initially                     |              1 hour              |
| Configuring AAPS → pump initially                             |              1 hour              |
| Configuring AAPS → Nightscout/Tidepool (reporting only)       |              1 hour              |
| Optional : Configuring NightScout ↔ **AAPS** & NSFollowers    |              1 hour              |
| Objective 1: Setting up visualization and monitoring          |              1 hour              |
| Cíl 2: Naučte se ovládat AAPS                                 |             2 hodiny             |
| Cíl 3: Prokázat své znalosti                                  |            až 14 dní             |
| Cíl 4: Začít s otevřenou smyčkou                              |        Minimum of 7 days         |
| Objective 5: Understanding your open loop                     |              7 dnů               |
| Objective 6: Starting to close the loop (Low Glucose Suspend) |   Minimum of 5, up to 14 days    |
| Objective 7: Tuning the closed loop                           |  Minimum of 1 day, up to 7 days  |
| Objective 8: Adjust basals and ratios, enable Autosens        | Minimum of 7 days, up to 14 days |
| Objective 9: Enabling Super Micro Bolus (SMB)                 |        Minimum of 28 days        |
| Cíl 10: Automatizace                                          |        Minimum of 28 days        |
| Objective 11: Dynamic ISF                                     |        Minimum of 28 days        |

Once you are fully operational on **AAPS**, you will still need to regularly fine tune your settings in order to improve your overall diabetic management.

## Požadavky

### Lékařská hlediska

In addition to the medical warnings in the [safety section](#safety-first) there are also different parameters, depending on which insulin you are using in the pump.

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

The current version of **AAPS** (3.3) requires an Android smartphone with Google **Android 11.0 or above**. If you are considering buying a new phone, (as of December 2024), Android 14 is preferred.<br/> Users are strongly encouraged to keep their build of **AAPS** up to date for safety reasons. However, for users unable to use a device with Android 11.0 or newer, earlier versions of **AAPS** compatible for older Android versions, remain available, see: [Release notes](#maintenance-android-version-aaps-version).

#### Výběr modelu smartphone
Přesný model, který kupujete, závisí na požadovaných funkcích. You can find on the [Phones page](../Getting-Started/Phones.md) recommendations and user feedback about working setups.

Uživatelům doporučujeme udržovat jejich Android telefon aktualizovaný, včetně bezpečnostních nastavení. Ovšem pokud jste noví uživatel **AAPS** nebo nejste technicky zdatný, možná budete chtít pozdržet aktualizaci svého telefonu do doby, než to udělají ostatní a potvrdí na fórech, že je to bezpečné.

```{admonition} delaying Samsung phones updates
:class: warning
Samsung has an unfortunate track record of forcing updates of their phones which cause bluetooth connectivity issues. To disable these forced updates you need to switch the phone to "developer mode" by:
 go to settings and about then software information, then tap build number u til it confirms you have unlocked developer mode. Přejděte zpět do hlavního menu a měli byste vidět novou položku možností pro vývojáře. Open developer options and scroll to find auto system update and turn it off
```

```{admonition} Google Play Protect potential Issue
:class: warning
There have been several reports of **AAPS** being shut down arbitrarily by Google Play Protect every morning. Pokud se tak stane, otevřete možnosti Google Play a zakažte "Google Play Protect". Ne všechny modely telefonů nebo verze Androidu jsou tímto problémem ovlivněny.
```

