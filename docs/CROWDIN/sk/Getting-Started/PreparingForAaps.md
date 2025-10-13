# Príprava na štart s AAPS

Vitajte. Táto dokumentácia má slúžiť ako pomôcka pre používateľov, ktorí sa pripravujú na nastavenie a začatie používania systému umelého pankreasu pre systém Android (**AAPS**).

## Ako sa vyznať v dokumentácii

**Index** a vysvetlenie štruktúry dokumentácie nájdete [tu](../index.md), môžete sa k tomu dostať aj kliknutím na symbol **AAPS** v ľavom hornom rohu dokumentácie. Nájdete tam zhrnutie, na čo slúžia rôzne časti dokumentácie. Na navigáciu v dokumentácii môžete použiť aj nadpisy naľavo od tejto stránky. Nakoniec je tu funkcia vyhľadávania priamo pod symbolom **AAPS**.

Naším cieľom je uľahčiť určenie možností aj obmedzení systému **AAPS**. Môže byť nepríjemné keď po naštudovaní návodu zistíte, že vaša pumpa alebo senzor niesú kompatibilné s **AAPS** alebo že systém vie niečo iné než ste čakali.

Mnohé podrobnosti týkajúce sa skúseností v dokumentácii k **AAPS** dávajú väčší zmysel, keď **AAPS** skutočne používate v reálnom čase. Rovnako ako je ťažké naučiť sa šport len ​​čítaním pravidiel, vyžaduje si to kombináciu učenia sa základov pravidiel pre bezpečné fungovanie **AAPS** a následného učenia sa ako tieto pravidlá čo najlepšie uplatňovať keď začínate používať **AAPS**.

(preparing-safety-first)=

## Safety First
„S veľkou mocou prichádza aj veľká zodpovednosť…“

### Technická bezpečnosť
Systém **AAPS** má rozsiahlu sadu bezpečnostných prvkov. Tieto obmedzenia sa postupne odstraňujú prostredníctvom postupného plnenia série [Cieľov](../SettingUpAaps/CompletingTheObjectives.md), ktoré zahŕňajú testovanie špecifických parametrov a odpovedanie na otázky s výberom odpovede. Funkcie **AAPS** sa odomknú po úspešnom splnení cieľov. Tento proces umožňuje používateľovi bezpečne migrovať po etapách z otvorenej slučky do uzavretej slučky a zároveň sa učiť o rôznych funkciách systému **AAPS**.

[Ciele](../SettingUpAaps/CompletingTheObjectives.md) boli navrhnuté tak, aby sa dosiahol čo najlepší úvod do **AAPS**, berúc do úvahy typické chyby ktoré vývojári **AAPS** pozorovali u nových používateľov. Chyby sa môžu stať, pretože začiatočník je neskúsený a príliš dychtivý začať s **AAPS** alebo prehliadol kľúčové body. Cieľom [Cieľov](../SettingUpAaps/CompletingTheObjectives.md) je minimalizovať tieto problémy.

### Bezpečnosť pri používaní zdravotníckych zariadení a inzulínovej techniky
```{admonition} Avoid permanent and painful damage to your eyes and nerves
:class: danger
V súvislosti s rýchlym zlepšením kontroly hladiny glukózy v krvi a znížením HbA1c sa odporúča opatrnosť 
```

Dôležitým bezpečnostným aspektom je, že **rýchle zníženie HbA1c a zlepšená kontrola hladiny glukózy v krvi u osôb, ktoré majú dlhší čas zvýšené hladiny glukózy, môže spôsobiť trvalé poškodenie**. Mnoho ľudí s cukrovkou si to neuvedomuje a nie všetci lekári o tomto probléme informujú svojich pacientov.

Toto poškodenie môže zahŕňať **stratu zraku a trvalú neuropatiu (bolesť)**. Tomuto poškodeniu sa dá vyhnúť pomalším znižovaním priemerných hladín glukózy. Ak máte momentálne zvýšený HbA1c a prechádzate na **AAPS** (alebo akýkoľvek iný systém s uzavretou slučkou), _prosím_ pred začatím preberte toto potenciálne riziko so svojím lekárom a dohodnite si s ním časový harmonogram s postupným znižovaním bezpečných cieľových hodnôt glukózy. V **AAPS** si môžete spočiatku jednoducho nastaviť vyššie cieľové hodnoty glukózy (v súčasnosti je najvyššia cieľová hodnota, ktorú si môžete vybrať, 10,6 mmol/l, ale v prípade potreby si môžete udržiavať aj zámerne slabý profil) a potom cieľovú hodnotu v priebehu mesiacov znižovať.

#### Ako rýchlo si môžem znížiť HbA1c bez rizika trvalého poškodenia?

Jedna retrospektívna [štúdia](https://pubmed.ncbi.nlm.nih.gov/1464975/) so 76 pacientmi uviedla, že riziko progresie retinopatie sa zvýšilo 1,6-krát, 2,4-krát a 3,8-krát, ak Hba1C klesol o 1 %, 2 % alebo 3 % počas 6 mesiacov. Navrhli, aby **„pokles hodnoty HbA1c počas 6-mesačného obdobia bol obmedzený na menej ako 2 %, aby sa zabránilo progresii retinopatie... Príliš rýchly pokles na začiatku kontroly glykémie by mohol spôsobiť závažné alebo prechodné zhoršenie progresie retinopatie.“**

N.B. Ak používate iné jednotky HbA1c (mmol/mol namiesto %), kliknite [sem](https://www.diabetes.co.uk/hba1c-units-converter.html) pre výpočet HbA1c.

V ďalšom retrospektívnom [hodnotení](https://academic.oup.com/brain/article/138/1/43/337923) 954 pacientov výskumníci zistili, že:

**„Pri poklese HbA1c o 2 – 3 % počas 3 mesiacov existovalo 20 % riziko vzniku neuropatie vyvolanej liečbou pri diabete, pri poklese HbA1c o > 4 % počas 3 mesiacov riziko vzniku neuropatie vyvolanej liečbou pri diabete prekročilo 80 %“.**

V [komentári](https://academic.oup.com/brain/article/138/1/2/340563) k tejto práci sa zhoda, že na predchádzanie komplikáciám **cieľom by malo byť zníženie A1c o < 2 % počas 3 mesiacov.** Ďalšie recenzie na túto tému si môžete prečítať [tu](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6587545/pdf/DOM-21-454.pdf) a [tu](https://www.mdpi.com/1999-4923/15/7/1791).

Všeobecne je známe, že _novo_ diagnostikovaní diabetici 1. typu (ktorí majú často pri diagnóze veľmi vysoký HbA1c pred začatím inzulínovej liečby) sa zdajú byť schopní rýchlo znížiť svoj HbA1c ihneď po diagnóze bez toho, aby sa stretli s týmito rizikami v rovnakej miere, pretože nemali zvýšené hladiny glukózy v krvi počas takéhoto dlhodobého obdobia. Je to však stále otázka, ktorú by ste mali prediskutovať so svojím lekárom.

(PreparingForAaps-no-sglt-2-inhibitors)=
### Žiadne inhibítory SGLT-2

```{admonition} NO SGLT-2 inhibitors
:class: danger
Inhibítory SGLT-2, nazývané aj gliflozíny, inhibujú reabsorpciu glukózy v obličkách. Gliflozíny výrazne znižujú hladinu cukru v krvi, a preto ich NESMIETE užívať počas používania systému s uzavretou slučkou, ako je AAPS! Hrozí značné riziko ketoacidózy a/alebo hypoglykémie! Kombinácia tohto lieku so systémom, ktorý znižuje bazálne dávky s cieľom zvýšiť glykémiu, je obzvlášť nebezpečná. 

Stručne povedané:
- **Príklad 1: riziko hypoglykémie**
> Počas obeda použijete **AAPS** na podanie bolusu na základe konzumácie 45 g glukózy. Problém je v tom, že AAPS si to neuvedomuje, ale inhibítory spôsobujú, že telo vylučuje časť sacharidov, čo má za následok, že vaše telo má priveľa inzulínu v porovnaní s absorbovanými sacharidmi, čo vedie k hypoglykémii.

- **Príklad 2: riziko ketoacidózy**
> Inhibítory eliminujú časť sacharidov v pozadí, čo spôsobuje zníženie glykémie. **AAPS** will automatically instruct the pump to decrease insulin intake  including basal. Over time this can result  in your  BG remaining below target value to the point where the body does not have enough background insulin to absorb any carbs resulting in Ketoacidosis. Ordinarily, Ketoacidosis  develops in T1D patients because their pump fails which would trigger alerts on their phone and be noticeable due to a high BG value. However, the danger with Gliflozins  is that there would be no AAPS alerts as  the pump remains operational and the BG potentially remains within target.  

Common brand names of SGLT-2 inhibitors include: Invokana, Farxiga, Jardiance, Glyxambi, Synjardy, Steglatro, and Xigduo XR, others.
```


### Key principles of looping with AAPS

The key principles and concepts of looping must be understood before using **AAPS**. This is achieved by investing your personal time into reading the **AAPS** documentation, and completing the Objectives which aim to provide you with a solid platform for safe and effective use of **AAPS**. The volume of **AAPS** documentation may seem overwhelming at first but be patient and trust the process - with the proper approach, you'll get there!

The speed of progression will depend upon the individual, but be aware that completion of all the objectives typically takes 6 - 9 weeks. Many people start to build, install and setup **AAPS** well in advance of starting to use it. To aid with this, the system has a "virtual pump" which can be used during completion of the early objectives, so that you can become familiar with **AAPS** without actually using it to deliver insulin. A detailed breakdown of the timeline is given below, be aware that by objective 8 of **AAPS** you are closed looping, the later objectives add in additional features like **SMS commands** and **automations** which are useful to some users, but not essential to the core function of **AAPS**.

Success with **AAPS** requires a proactive approach, a willingness to reflect on the BG data and flexibility to make the necessary adjustments to **AAPS** in order to improve your outcomes. Just as it is nearly impossible to learn to play a sport by reading about the rules alone, the same can be said of **AAPS**.

#### Plan for delays and minor issues in getting everything set up and running

In the preliminary stages of getting started with **AAPS**, you may experience difficulties getting all the components of the loop communicating effectively with each other (and potential followers), and when fine-tuning your settings. Some glitches cannot be resolved until **AAPS** is used in everyday life, but plenty of help is available on the Facebook group and Discord. Please plan accordingly and choose "good" times, like a quiet morning of a weekend (i.e. not late at night or when you are tired, or before a big meeting or travel) to troubleshoot and resolve issues.

#### Technology compatibility

**AAPS** is only compatible with certain types of insulin pumps, CGMs and phones, and some technology may not be available for use in various countries. In order to avoid any disappointment or frustrations, please read the [CGM](../Getting-Started/CompatiblesCgms.md), [pump](../Getting-Started/CompatiblePumps.md) and [phone](../Getting-Started/Phones.md) sections.

#### App build time and progressing to full looping

The time to build the **AAPS** app  depends on your level of expertise and technical ability. Typically for inexperienced users, it can take up to half a day or a full day (with help from the community) in order to build **AAPS**. The process will significantly speed up for newer **AAPS** versions, as you become more experienced.

To aid the build process there are dedicated sections:

- List of questions and answers for frequent errors that are likely to occur in [FAQs (Section](../UsefulLinks/FAQ.md) K);

- “[How to install AAPS](../SettingUpAaps/BuildingAaps.md)? (Section D) which includes [Troubleshooting](../GettingHelp/GeneralTroubleshooting.md) Subsection.

How long it takes to get to closed looping depends on the individual, but an approximate timescale for getting to full looping with AAPS can be found ([here](#preparing-how-long-will-it-take))


#### Keystore & configuration settings export file

A “keystore” (.jks file) is a password encrypted file unique to your own copy of **AAPS**. Your Android phone uses it to ensure that nobody else can upgrade your own copy without the keystore. In short, as part of the **AAPS** build, you should:

1.  Save the your keystore file (.jks file used to sign your app) in a safe place;

2.  Keep a note of your password for your keystore file.


This will ensure that you can use that exact same keystore file each time an updated version of **AAPS** is created. On average, there will be 2 **AAPS** updates required each year.

In addition, **AAPS** provides the ability to [export all your configuration settings](../Maintenance/ExportImportSettings.md). This ensures that you can safely recover your system while changing phones, upgrading/reinstalling the application with minimum disruption. 

#### Troubleshooting

Please feel free to reach out to the AAPS community if there is anything you feel unsure about - there is no such thing as a silly question! All users with various levels of experience are encouraged to ask questions. Response times to questions are usually quick due to the number of **AAPS** users.

##### [ask on the AAPS Facebook group](https://www.facebook.com/groups/AndroidAPSUsers/)

##### [ask on the AAPS Discord channel](https://discord.gg/4fQUWHZ4Mw)





#### [Where to go for help](../UsefulLinks/BackgroundReading.md)?

This section is aimed to provide new users with links on resources in order to get help including accessing community support made up of both new and experienced users who can clarify questions, and resolve the usual pitfalls that come with AAPS.

#### [Section For Clinicians](../UsefulLinks/ClinicianGuideToAaps.md)

This is a [section specifically for clinicians](../UsefulLinks/ClinicianGuideToAaps.md) who want to know more about AAPS and open source artificial pancreas technology. There is also guidance on [how to talk to your clinical team](#introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team) in the Introduction.

## What are we going to build and install?

This diagram provides an overview of the key components (both hardware and software) of the **AAPS** system:

![preparing_overview](../images/preparing_images/AAPS_preparing_overview_01.png)


In addition to the three basic hardware components (phone, pump, glucose sensor), we also need: 1) The **AAPS** app 2) A reporting server and 3) A continuous glucose monitor (CGM) app

### 1) An Android Phone Application: **AAPS**

**AAPS** is an app that runs on android smartphones & devices. You are going to build the **AAPS** app (an apk file) yourself, using a step-by-step guide, by downloading the **AAPS** source code from GitHub, installing the necessary programs (Android Studio, GitHub desktop) on your computer and building your own copy of **AAPS** app. You will then transfer the **AAPS** app across to your smartphone (by email, USB cable _etc._) and install it.

### 2) A reporting server: NightScout (Tidepool*)

In order to fully take advantage of **AAPS**, you need to setup a Nightscout server. You can [do this yourself](https://nightscout.github.io/nightscout/new_user/#free-diy) or alternatively, pay a small fee for a [managed Nightscout service](https://nightscout.github.io/#nightscout-as-a-service) to be set up for you. Nightscout is used to collect data from **AAPS** over time and can generate detailed reports correlating CGM and insulin patterns. It is also possible for caregivers to use Nightscout to remotely communicate with the **AAPS** application, to oversee their child’s diabetic management. Such remote communication features include real-time monitoring of glucose and insulin levels, remote bolusing of insulin (by texting) and meal announcements. Attempting to analyse your diabetes performance by looking at CGM data separately from the pump data is like driving a car where the driver is blind and the passenger describes the scene.  Tidepool is also available as an alternative to Nightscout, for AAPS versions 3.2 and later.

### 3) CGM sensor app

Depending on your glucose sensor/CGM, you will need a compatible app for receiving glucose readings and sending them to **AAPS**. The different options are shown below and more information is given in the [compatible CGMs section](../Getting-Started/CompatiblesCgms.md):

![dexcom_options](../images/preparing_images/AAPS_connectivity_Dex_02.png) ![libre_options](../images/preparing_images/AAPSconnectivity_libre.png) ![eversense_options](../images/preparing_images/AAPS_connectivity_eversense.png)

### Maintenance of the **AAPS** system

Both **Nightscout** and **AAPS** must be updated approximately once a year, as improved versions are released. In some cases, the update can be delayed, in others it is strongly recommended or considered essential for safety. Notification of these updates will be given on the Facebook groups and Discord servers. The release notes will make it clear what the scenario is. There are likely to be many people asking similar questions to you at update time, and you will have support for performing the updates.

(preparing-how-long-will-it-take)=
## How long will it take to set everything up?

As mentioned earlier, using **AAPS** is more of a “journey” that requires investment of your personal time. It is not a one-time setup. Current estimates for building **AAPS**, installing and configuring **AAPS** and **CGM** software and getting from open loop to hybrid closed looping with **AAPS** are about 4 to 6 months overall. It is therefore suggested that you prioritize building the **AAPS** app and working through the early objectives as soon as possible, even if you are still using a different insulin delivery system (you can use a virtual pump up to objective 5).

Some of the objectives require a given amount of days to pass to make sure you understand the new functionality. It is not possible to bypass this waiting time, these minimal timings have been set-up for your own safety.

Here is an approximate timeframe:

| Tasks                                                         |           Approx time            |
| ------------------------------------------------------------- |:--------------------------------:|
| Initial reading of the documentation                          |             1-2 days             |
| Installing/configuring PC to allow the build                  |            2-8 hours             |
| Setting up a reporting server                                 |              1 hour              |
| Installing a CGM app (xDrip+, BYODA, …)                       |              1 hour              |
| Configuring CGM → xDrip+ → APPS initially                     |              1 hour              |
| Configuring AAPS → pump initially                             |              1 hour              |
| Configuring AAPS → Nightscout/Tidepool (reporting only)       |              1 hour              |
| Optional : Configuring NightScout ↔ **AAPS** & NSFollowers    |              1 hour              |
| Objective 1: Setting up visualization and monitoring          |              1 hour              |
| Objective 2: Learn how to control AAPS                        |              2 hour              |
| Objective 3: Prove your knowledge                             |          Up to 14 days           |
| Objective 4: Starting on an open loop                         |        Minimum of 7 days         |
| Objective 5: Understanding your open loop                     |              7 days              |
| Objective 6: Starting to close the loop (Low Glucose Suspend) |   Minimum of 5, up to 14 days    |
| Objective 7: Tuning the closed loop                           |  Minimum of 1 day, up to 7 days  |
| Objective 8: Adjust basals and ratios, enable Autosens        | Minimum of 7 days, up to 14 days |
| Objective 9: Enabling Super Micro Bolus (SMB)                 |        Minimum of 28 days        |
| Objective 10: Automation                                      |        Minimum of 28 days        |
| Objective 11: Dynamic ISF                                     |        Minimum of 28 days        |

Once you are fully operational on **AAPS**, you will still need to regularly fine tune your settings in order to improve your overall diabetic management.

## Requirements

### Medical considerations

In addition to the medical warnings in the [safety section](#preparing-safety-first) there are also different parameters, depending on which insulin you are using in the pump.

#### Insulin choice

**AAPS** calculations are based on insulin concentrations of 100U/ml (same as pump’s standard). The following types of insulin profile presets are supported:

- Rapid-Acting Oref: Humalog/NovoRapid/NovoLog
- Ultra-Rapid ORef:  Fiasp
- Lyumjev:

For Experimental/Advanced users only:
- Free-Peak Oref: Allows you to define peak of the insulin activity


### Technical

This documentation aims to reduce the technical expertise required to an absolute minimum. You will need to use your computer to build the **AAPS** application in Android Studio (step-by-step instructions). You also need to set up a server over the internet in a public cloud, configure several android phone apps and develop expertise in diabetes management. This can be  achieved by moving step-by-step, being patient, and help from the **AAPS** community. If you are already able to navigate the internet, manage your own Gmail emails, and keep your computer up-to-date, then it is a feasible task to build the **AAPS**. Just take your time.

### Smartphones

#### AAPS and Android Versions

The current version of **AAPS** (3.3) requires an Android smartphone with Google **Android 11.0 or above**. If you are considering buying a new phone, (as of December 2024), Android 14 is preferred.<br/> Users are strongly encouraged to keep their build of **AAPS** up to date for safety reasons. However, for users unable to use a device with Android 11.0 or newer, earlier versions of **AAPS** compatible for older Android versions, remain available, see: [Release notes](#maintenance-android-version-aaps-version).

#### Smartphone model choice
The exact model you buy depends on the desired function(s). You can find on the [Phones page](../Getting-Started/Phones.md) recommendations and user feedback about working setups.

Users are encouraged to keep their phone Android version up-to-date, including with security parameters. However, if you are new with **AAPS** or are not a technical expert you might want to delay updating your phone until others have done so and confirmed it is safe to do so, on our various forums.

```{admonition} delaying Samsung phones updates
:class: warning
Samsung has an unfortunate track record of forcing updates of their phones which cause bluetooth connectivity issues. To disable these forced updates you need to switch the phone to "developer mode" by:
 go to settings and about then software information, then tap build number u til it confirms you have unlocked developer mode. Got back to main settings menu and you should see a new developer options menu item. Open developer options and scroll to find auto system update and turn it off
```

```{admonition} Google Play Protect potential Issue
:class: warning
There have been several reports of **AAPS** being shut down arbitrarily by Google Play Protect every morning. If this happens you will have to go to the google play options and disable “Google Play Protect”. Not all  phone models or all Android versions are affected..
```

