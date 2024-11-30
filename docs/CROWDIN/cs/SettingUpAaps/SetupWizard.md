# Průvodce nastavením AAPS

When you first start **AAPS** you are guided by the "**Setup Wizard**", to quickly setup all the basic configurations of your app in one go. **Setup Wizard** guides you, in order to avoid forgetting something crucial. For example, the **permission settings** are fundamental for setting up **AAPS** correctly.

However, it's not mandatory to get everything completely configured in the first run of using the **Setup Wizard** and you can easily exit the Wizard and come back to it later. There are three routes available after the **Setup Wizard** to further optimise/change the configuration. Všechny budou popsány v následující sekci. Je tedy v pořádku, pokud některé body v Průvodci nastavením přeskočíte, později je můžete snadno nakonfigurovat.

During, and directly after using the **Setup Wizard** you may not notice any significant observable changes in **AAPS**. To enable your **AAPS** loop, you have to follow the **Objectives** to enable feature after feature. You will start **Objective 1** at the end of the Setup Wizard. You are the master of **AAPS**, not the other way around.

```{admonition} Preview Objectives
:class: note
If you are keen to know the structure of the objectives, please read [Completing the objectives](../SettingUpAaps/CompletingTheObjectives.md) but then come back here to run the Setup Wizard first.

```

From previous experience, we are aware that new starters often put themselves under pressure to setup **AAPS** as fast as possible, which can lead to frustration as it is a big learning curve.

So, please take your time in configuring your loop, the benefits of a well-running **AAPS** loop are huge.

```{admonition} Ask for Help
:class: note
If there is an error in the documentation or you have a better idea for how something can be explained, you can ask for help from the community as explained at [Connect with other users](../GettingHelp/WhereCanIGetHelp.md).
```
## Průvodce nastavením AAPS krok za krokem
### Uvítací zpráva

Toto je pouze uvítací zpráva kterou můžete přeskočit kliknutím na tlačítko "Další":

![image](../images/setup-wizard/Screenshot_20231202_125636.png)

### Licenční ujednání

In the end user license agreement there is important information about the legal aspects of using **AAPS**. Přečtěte si ji prosím pozorně.

If you don't understand, or can't agree to the end user license agreement please don't use **AAPS** at all!

Pokud rozumíte a souhlasíte, klikněte na tlačítko "ROZUMÍM A SOUHLASÍM" a pokračujte v Průvodci nastavením:

![image](../images/setup-wizard/Screenshot_20231202_125650.png)

### Vyžadovaná oprávnění

**AAPS** needs some requirements to operate correctly.

In the following screens you are asked several questions you have to agree to, to get **AAPS** working. Průvodce vždy poskytne vysvětlení, z jakého důvodu jsou tato nastavení vyžadována.

Na těchto obrazovkách se zaměřujeme na poskytnutí informací o pozadí, přeložení technických termínů do běžného jazyka nebo vysvětlení důvodů.

Klikněte prosím na tlačítko "DALŠÍ":

![image](../images/setup-wizard/Screenshot_20231202_125709.png)

U chytrých telefonů je pořád důležité brát ohled na spotřebu energie, protože kapacita baterií je stále docela omezená. Z toho důvodu je operační systém Android na vašem telefonu docela restriktivní ohledně povolení aplikacím fungovat a spotřebovávat čas procesoru a tedy i energii baterie.

However, **AAPS** needs to run regularly, _e.g._ to receive the glucose readings every few minutes and then apply the algorithm to decide how to deal with your glucose levels, based on your specifications. Proto AAPS potřebuje povolení v systému Android.

Toho dosáhnete potvrzením požadovaných nastavení.

Klikněte prosím na tlačítko "VYŽÁDAT OPRÁVNĚNÍ":

![image](../images/setup-wizard/Screenshot_20231202_125721.png)

Vyberte prosím "Povolit":

![image](../images/setup-wizard/Screenshot_20231202_125750.png)

Android vyžaduje zvláštní oprávnění pro aplikace, které potřebují posílat uživateli upozornění.

While it is a good feature to disable notifications _e.g._ from  social media apps, it is essential that you allow **AAPS** to send you notifications.

Klikněte prosím na tlačítko "VYŽÁDAT OPRÁVNĚNÍ":

![image](../images/setup-wizard/Screenshot_20231202_125813.png)


Vyberte aplikaci "AAPS":

![image](../images/setup-wizard/Screenshot_20231202_125833.png)

Povolte oprávnění "Zobrazit nahoře" přesunem přepínače doprava:

![image](../images/setup-wizard/Screenshot_20231202_125843.png)

Přepínač v povoleném stavu by měl vypadat takto:

![image](../images/setup-wizard/Screenshot_20231202_125851.png)

Android propojuje využití Bluetooth komunikace s funkcemi určení polohy. Možná už jste na to narazili i u jiných aplikací. Běžně je nutné povolit služby určování polohy, pokud potřebujete přístup k Bluetooth.

**AAPS** uses bluetooth to communicate with your CGM and insulin pump if they are directly controlled by **AAPS** and not another app which is used by **AAPS**. Detaily se mohou lišit u různých konfigurací.

Klikněte prosím na tlačítko "VYŽÁDAT OPRÁVNĚNÍ":

![image](../images/setup-wizard/Screenshot_20231202_125924.png)

Toto je důležité. Otherwise **AAPS** can not work properly at all.

Klikněte na "Během používání aplikace":

![image](../images/setup-wizard/Screenshot_20231202_125939.png)

Kliněte na tlačítko "DALŠÍ":

![image](../images/setup-wizard/Screenshot_20231202_130002.png)

**AAPS** needs to log information to the permanent storage of your smartphone. Trvalá paměť znamená, že data budou k dispozici i po restartu vašeho telefonu. Informace uložené pouze v operační paměti a nikoli v paměti trvalé mohou být ztracené.

Klikněte prosím na tlačítko "VYŽÁDAT OPRÁVNĚNÍ":

![image](../images/setup-wizard/Screenshot_20231202_130012.png)

Klikněte na "Povolit":

![image](../images/setup-wizard/Screenshot_20231202_130022.png)

Budete informováni o tom, že po této změně musíte váš telefon restartovat.

Please **don't stop the Setup Wizard now**. Můžete to udělat po dokončení Průvodce nastavením.

Klikněte na "OK" a potom na tlačítko "DALŠÍ":

![image](../images/setup-wizard/Screenshot_20231202_130031.png)


### Hlavní heslo

As the configuration of **AAPS** contains some sensitive data (_e.g._ API_KEY for accessing your Nightscout server) it is encrypted by a password you can set here.

The second sentence is very important, please **DO NOT LOSE YOUR MASTER PASSWORD**. Please make a note of it _e.g._ on Google Drive. Google Drive je vhodné místo, protože ho pro vás Google automaticky zálohuje. Váš telefon nebo poočítač se může porouchat a vy byste mohli skončit bez vašeho aktuálního hesla. If you forget your Master Password, it can be difficult to recover your profile configuration and progress through the **Objectives** at a later date.

Po dvojím zadání hesla klikněte na tlačítko "DALŠÍ":

![image](../images/setup-wizard/Screenshot_20231202_130122.png)


### Odesílání do Fabric

Tady můžete nastavit využití automatického reportování pádů aplikace a jejího využití.

Není to povinné, ale je dobrým zvykem tato data odesílat.

Pomůžete tak vývojářům lépe porozumnět tomu, jak aplikaci využíváte a k jakým dochází pádům aplikace.

Vývojáři dostanou:

1. Informaci o pádech aplikace, o kterých by jinak nevěděli protože v jejich prostředí a nastavení všechno funguje správně.
1. V zaslaných datech (informace o pádu) získají informace o okolnostech pádu aplikace a jaká se využívá konfigurace.

Díky tomu mohou vývojáři aplikaci postupně zdokonalovat.

Povolte prosím "Odesílání do Fabric" přepnutím přepínače doprava:


![image](../images/setup-wizard/Screenshot_20231202_130136.png)

Dále můžete sami sebe identifikovat pro případ, že se na vás vývojáři budou chtít obrátit s dotazy nebo v naléhavé záležitosti:

![image](../images/setup-wizard/Screenshot_20231202_130147.png)

Po vyplnění kontaktních informací klikněte na tlačítko "OK". Kontaktní informace může být i vaše identifikace na Facebooku, Discordu apod. Zadejte takové kontaktní informace, které jsou nejvhodnější k vašemu kontaktování:

![image](../images/setup-wizard/Screenshot_20231202_135748.png)

Kliněte na tlačítko "DALŠÍ":

![image](../images/setup-wizard/Screenshot_20231202_135807.png)

### Units (mg/dL <-> mmol/L)

Vyberte prosím, jestli vaše hodnoty glykémie jsou v mg/dl nebo mmol/L a klikněte na tlačítko "DALŠÍ":

![image](../images/setup-wizard/Screenshot_20231202_135830.png)

### Přehled

 Tady nastavíte hodnoty glykémie, které budou zobrazovány jako "v rozsahu". V tuto chvíli můžete ponechat výchozí hodnoty a k nastavení se vrátit později.

Zadané hodnoty ovlivňují pouze grafické zobrazení diagramu a nic jiného.

Your glucose target _e.g._ is configured separately in your profile.

Váš rozsah pro analýzu Času v rozsahu se konfiguruje nezávisle na vašem reportovacím serveru.

Klikněte prosím na tlačítko "DALŠÍ":

![image](../images/setup-wizard/Screenshot_20231202_135853.png)

(SetupWizard-synchronization-with-the-reporting-server-and-more)=
### Synchronizace dat s reportovacím serverem a další

Zde nastavujete nahrávání dat na reportovací server.

Je zde možné konfigurovat i další nastavení, ale v prvním průběhu se budeme soustředit pouze na reportovací server.

Pokud ho v tuto chvíli nemůžete nastavit, tak obrazovku přeskočte. K nastavením se můžete vrátit později.

If you select an item here on the left tick box, on the right you can then ticking the visibility (eye) box, which will place this plugin in the upper menu on the **AAPS** home screen. Zaškrněte prosím také viditelnost pokud budete v tomto bodě konfigurovat reportovací server.

V tomto příkladu vybereme reportovací server Nightscout a zkonfigurujeme ho.

```{admonition}  Make sure to choose the correct **NSClient** version for your needs! 
:class: Note

Click [here](#version3200) for the release notes of **AAPS** 3.2.0.0 which explain the differences between the top option **NSClient** (this is "v1", although it is not explicitly labelled) and the second option, **NSClient v3**.

Nightscout users should choose **NSClient v3**, unless you want to monitor or send remote treatments (_e.g._ as a parent or caregiver using **AAPS** for a child) through Nightscout, in which case, choose the first option "**NSClient**" until further notice. 
```
Pro reportovací server Tidepool je nastavení ještě jednodušší, protože je třeba pouze zadání vašch přihlašovacích údajů.

After making your selection, please press the cogwheel button next to the item you selected :

![image](../images/setup-wizard/Screenshot_20231202_140916.png)

Zde nastavujete reportovací server Nightscout.

Klikněte prosím na "Nightscout URL":

![image](../images/setup-wizard/Screenshot_20231202_140952.png)

Zadejte URL adresu vašho osobního Nightscout serveru. Jedná se buď o URL, které jste sami nastavili nebo jste ho dostali od vašeho poskytovatele služby Nightscout.

Klikněte prosím na tlačítko "OK":

![image](../images/setup-wizard/Screenshot_20231202_141051.png)

Zadejte váš Nightscout přístupový token. Jedná se o přístupový token, který jste nastavili na vašem Nightscout serveru. Bez tohoto tokenu nebude přístup fungovat.

If you don't have it at the moment please check the documentation for setting up the reporting server in the **AAPS** documentation.

After filling in the "**NS access token**" and clicking "OK", please click on the "Synchronization" button:

![image](../images/setup-wizard/Screenshot_20231202_141131.png)

Pokud jste v předchozích krocích Průvodce nastavením zkonfigurovali Nightscout server, vyberte "Nahrávat data do NS".

If you have stored profiles on Nightscout and want to download them to **AAPS**, enable "Receive profile store":

![image](../images/setup-wizard/Screenshot_20231202_141219.png)


Vraťte se na předchozí obrazovku a vyberte "Nastavení alarmů":

![image](../images/setup-wizard/Screenshot_20231202_141310.png)

Prozatím ponechte přepínače vypnuté. Na obrazovku jsme se vrátili pouze proto, abyste se seznámili s možnostmi, které možná budete v budoucnu konfigurovat. V tuto chvíli to není třeba dělat.

Vraťte se na předchozí obrazovku a vyberte "Nastavení připojení".

Zde je možné nastavit jak se budou přenášet data na váš reportovací server.

Caregivers must enable "use cellular connection" as otherwise the smartphone which serves the dependant/child can not upload data outside of WiFi range _e.g._ on the way to school.

Other **AAPS** users can disable the tranfer via cellular connection if they want to save data or battery.

Pokud máte pochybnosti, ponechte vše povoleno.

Vraťte se na předchozí obrazovku a vyberte "Rozšířená nastavení".

![image](../images/setup-wizard/Screenshot_20231202_141326.png)

Povolte "Zaznamenávat spuštění aplikace do NS", pokud chcete mít tuto informaci zaznamenanou na serveru. Může vám to, především jako ošetřující osobě, mít vzdáleně přehled jestli a kdy byla aplikace restartována.

It might be interesting to see if **AAPS** is correctly configured now, but later it is usually not that important to be able to see **AAPS** stopping or starting in Nightscout.

Povolte "Vytvořit oznámení z chyb" a "Vytvořit oznámení z návrhu sacharidů".

Položku "Zpomalit odesílání" ponechte vypnutou. Použijete ji pouze v neobvyklých případech, jako například pokud potřebujete přenést velké množství informací a Nightscout server zpracovává tato data pomalu.

Go back twice, to the list of plugins and select "NEXT" to go to the next screen:

![image](../images/setup-wizard/Screenshot_20231202_141351.png)

### Patient name

Here you can setup your name in **AAPS**.

Může zde být zadáno cokoli. Položka slouží pouze k odlišení pacientů.

Pro jednoduchost zadejte jméno a příjmení.

Klikněte na tlačítko "DALŠÍ" a přejdete k další obrazovce.

![image](../images/setup-wizard/Screenshot_20231202_141445.png)

### Typ pacienta

Here you select your "Patient type" which is important, as the **AAPS** software has different limits, depending on the age of the patient. Nastavení je důležité z bezpečnostních důvodů.

Here is where you also configure the **maximum allowed bolus** for a meal. Jedná se o největší hodnotu bolusu, který potřebujete k pokrytí typické porce jídla. Jedná se o bezpečnostní funkci, která brání náhodnému předávkování při posílání bolusu k jídlu.

Druhý limit je koncipován obdobně, ale vztahuje se k maximálnímu očekávanému příjmu sacharidů.

Po zadání potřebných hodnot klikněte na "DALŠÍ":

![image](../images/setup-wizard/Screenshot_20231202_141817.png)

### Používaný inzulín

Vyberte typ inzulínu, který používáte v pumpě.

Názvy inzulínů by měly být samovysvětlující.

```{admonition} Don't use the "Free-Peak Oref" unless you know what you are doing
:class: danger
For advanced users or medical studies there is the possibility to define with "Free-Peak Oref" a customised profile of how insulin acts. Please don't use it unless you are an expert, usually the pre-defined values work well for each branded insulin.
```

Klinkněte na tlačítko "DALŠÍ" a přejděte na následující obrazovku:

![image](../images/setup-wizard/Screenshot_20231202_141840.png)


### Zdroj informací o glykémii

Vyberte zdroj dat o glykémii, který používáte. Please read the documentation for your [BG source](../Getting-Started/CompatiblesCgms.md).

Jelikož je k dispozici více možností, nebudeme zde popisovat všechny. V našem příkladu uvažujeme použití senzoru Dexcom G6 a aplikace BYODA:


![image](../images/setup-wizard/Screenshot_20231202_141912.png)


Pokud používáte Dexcom G6 a BYODA, povolte zobrazení patřičné záložky v horním menu zaškrtnutím čtverečku na pravé straně.

Po nastavení vašeho výběru klikněte na tlačítko "DALŠÍ" a přejděte k následující obrazovce:

![image](../images/setup-wizard/Screenshot_20231202_141925.png)


If you are using Dexcom G6 with BYODA, click on the cogwheel button to access the settings for BYODA.

Povolte "Nahrát data glykémie do NS" a "Zaznamenat výměnu senzoru do NS".

Go back and press "NEXT" to go to the next screen:

![image](../images/setup-wizard/Screenshot_20231202_141958.png)

(setup-wizard-profile)=
### Profile

Teď se dostáváme k velmi důležité části Průvodce nastavením.

Please read the documentation about [profiles](../SettingUpAaps/YourAapsProfile.md) before you try to enter your profile details on the following screen.

```{admonition} Working profile required - no exceptions here !
:class: danger
An accurate profile is necessary to control the safe action of **AAPS**

It's required that you have determined and discussed your profile with your doctor, and that it has been proven to work by successful basal rate, ISF and IC testing!

If a robot has an incorrect input it will fail - consistently. **AAPS** can only work with the information it is given. If your profile is too strong, you risk hypoglycemia, and if it is too weak, you risk hyperglycemia. 
```

Klikněte na tlačítko "DALŠÍ" a přejdete k další obrazovce. Zadejte "Název profilu":

![image](../images/setup-wizard/Screenshot_20231202_142027.png)


Postupem času se může stát, že budete potřebovat několik různých profilů. V tuto chvíli vytvoříme pouze jeden.

```{admonition} Profile only for tutorial - not for your usage
:class: information
The example profile here is only to show you how to enter data.

It is not intended to be an accurate profile or something very well optimised, because each person's needs are so different.

Don't use it for actually looping!
```

Enter your [Duration of insulin Action (DIA)](#your-aaps-profile-duration-of-insulin-action) in hours. Potom klikněte na "IC":

![image](../images/setup-wizard/Screenshot_20231202_142143.png)

Enter your [IC](#your-aaps-profile-insulin-to-carbs-ratio) values:

![image](../images/setup-wizard/Screenshot_20231202_142903.png)

Klikněte na "ISF". Enter your [ISF values](#your-aaps-profile-insulin-sensitivity-factor):

![image](../images/setup-wizard/Screenshot_20231202_143009.png)


Klikněte na "BAZ". Enter your [basal values](#your-aaps-profile-basal-rates):

![image](../images/setup-wizard/Screenshot_20231202_143623.png)


Klikněte na "CÍL". Zadejte vaše cílové hodnoty glykémie.

For open looping this target can be a wider range, as otherwise **AAPS** notifies you permanently to change the temporary basal rate or another setting, which can be exhausting.

Později, s uzavřenou smyčkou, budete mít obvykle zadanou stejnou hodnotu pro horní i dolní limit. That makes it easier for **AAPS** to hit the target and give you better overall diabetes control.

Zadejte/potvrďte cílové hodnoty:

![image](../images/setup-wizard/Screenshot_20231202_143709.png)

Uložte profil kliknutím na tlačítko "ULOŽIT":

![image](../images/setup-wizard/Screenshot_20231202_143724.png)


Po uložení profilu se objeví nové tlačítko "AKTIVOVAT PROFIL".

```{admonition} Several defined but only one active profile
:class: information
Můžete mít několik vytvořených profilů, ale v jeden okamžik může být aktivovaný a běžící pouze jeden z nich.
```

Klikněte na "AKTIVOVAT PROFIL":

![image](../images/setup-wizard/Screenshot_20231202_143741.png)





Otevře se dialog přepnutí profilu. V tomto případě ponechte předvolené nastavení.

```{admonition} Several defined but only one active profile
:class: information
Časem se naučíte jak tento obecný dialog využívat k řešení situací jako jsou nemoc nebo sport, kdy budete potřebovat spustit profil s vhodným nastavením pro danou situaci.
```


Klikněte na tlačítko "OK":


![image](../images/setup-wizard/Screenshot_20231202_143808.png)



Otevře se potvrzovací dialog přepnutí profilu.

Můžete ho potvrdit kliknutím na "OK". Klinkněte na tlačítko "DALŠÍ" a přejděte na následující obrazovku:

![image](../images/setup-wizard/Screenshot_20231202_143822.png)

Váš profil byl nyní nastaven:

![image](../images/setup-wizard/Screenshot_20231202_143833.png)


### Inzulinová pumpa



Nyní si vybíráte inzulínovou pumpu.

Zobrazí se vám důležité upozornění. Přečtěte si ho, prosím, a potom klikněte na tlačítko "OK".

Pokud jste již v předchozích krocích nastavili svůj profil a víte, jak připojit vaši pumpu, můžete ji nyní připojit.

Otherwise, leave the Setup Wizard, using the arrow in the top left corner and let **AAPS** first show you some blood glucose values. Kdykoli se k připojení pumpy můžete vrátit nebo můžete využít možnost přímé konfigurace (bez využití Průvodce).

Please read the documentation for your [insulin pump](../Getting-Started/CompatiblePumps.md).

Klikněte na tlačítko "DALŠÍ" a přejdete k další obrazovce.

![image](../images/setup-wizard/Screenshot_20231202_143909.png)


V tomto případě vybereme "Virtuální pumpu".

Klinkněte na tlačítko "DALŠÍ" a přejděte na následující obrazovku:

![image](../images/setup-wizard/Screenshot_20231202_143935.png)

### APS algorithm

Vyberte OpenAPS SMB jako váš APS algoritmus. Bez ohledu na název bude SMB funkce algoritmu vypnutá dokud se s **AAPS** blíže neseznámíte a nepropracujete se počátečními cíli. OpenAPS SMB algoritmus je každopádně novější a obecně lepší než OpenAPS AMA.

Důvodem k vypnutí funkce SMB na začátku je ten, že SMB umožňuje rychlejší reakci na stav cukru v krvi díky využití mikrobolusů namísto zvýšení úrovně bazálu. As in the beginning your profile is in general not as good as after some time of experience the feature is disabled in the beginning.

```{admonition} Only use the older algorithm **OpenAPS AMA** if you know what you are doing
:class: information
OpenAPS AMA is the most basic algorithm which does not support micro boluses to correct high values. There might be circumstances where it is better to use this algorithm but it is not the recommendation.
```

Press the cogwheel to see the details:

![image](../images/setup-wizard/Screenshot_20231202_144014.png)


Zde si pouze přečtěte text a nic zde neměňte.

Due to the limitations which are imposed by the **Objectives** you can't use either "closed loop" or "SMB features" at the moment anyway.

Go back and press "NEXT" to go to the next screen:

![image](../images/setup-wizard/Screenshot_20231202_144025.png)

### Typ smyčky

Ponechte vybranou možnost "Otevřená smyčka".

Klinkněte na tlačítko "DALŠÍ" a přejděte na následující obrazovku:

![image](../images/setup-wizard/Screenshot_20231202_144049.png)

### Detekce citlivosti

Let "Sensitivity Oref1" the standard for the sensitivity plugins selected.

Klinkněte na tlačítko "DALŠÍ" a přejděte na následující obrazovku:

![image](../images/setup-wizard/Screenshot_20231202_144101.png)

### Začněte Cíl 1

Nyní vstupujete do Cílů. The qualification for access to further **AAPS** features.

Zde začínáme Cíl 1, i když v tuto chvíli naše nastavení není zcela připraveno k jeho úspěšnému dokončení.

Ale je to začátek.

Stiskněte zelené tlačítko "START" pro spuštění cíle 1:

![image](../images/setup-wizard/Screenshot_20231202_144113.png)

Vidíte, že jste již udělali určitý pokrok, ale další oblasti je ještě třeba dokončit.

Klikněte na tlačítko "DOKONČIT" a přejděte k další obrazovce.

![image](../images/setup-wizard/Screenshot_20231202_144135.png)

You are coming to the home screen of **AAPS**.

Here you find the information message in **AAPS** that you set your profile.

K tomu došlo ve chvíli, kdy jsme přepnuli na náš nový profil.

Můžete kliknout na "ODLOŽIT" a zpráva zmizí.

![image](../images/setup-wizard/Screenshot_20231202_144156.png)

If you accidentally leave the Setup Wizard at any point, you can either simply re-start the Wizard, or change the [configuration of the AAPS loop](../SettingUpAaps/ChangeAapsConfiguration.md) manually.

If your **AAPS** loop is now fully setup, please move on to the next section ["Completing the objectives"](../SettingUpAaps/CompletingTheObjectives.md).