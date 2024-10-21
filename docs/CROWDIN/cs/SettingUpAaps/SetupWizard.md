# Průvodce nastavením AAPS

Po prvním spuštění aplikace **AAPS** se spustí **Průvodce nastavením**, který vám pomůže rychle provést základní nastavení aplikace najednou. **Průvodce nastavením** zajišťuje, že nic důležitého nezapomenete nastavit. Na příklad **nastavení oprávnění** je pro správné fungování **AAPS** naprosto nezbytné.

Nicméně není nutné mít vše zcela nakonfigurováno při prvním spuštění **Průvodce nastavením** a můžete ho jednoduše ukončit a vrátit se k němu později. Jsou k dispozici tři způsoby, jak podrobněji optimalizovat nebo konfigurovat aplikaci po dokončení **Průvodce nastavením**. Všechny budou popsány v následující sekci. Je tedy v pořádku, pokud některé body v Průvodci nastavením přeskočíte, později je můžete snadno nakonfigurovat.

Během a bezprostředně po použití **Průvodce nastavením** nemusíte pozorovat žádné významné pozorovatelné změny v **AAPS**. Abyste povolili smyčku v **AAPS**, budete muset projít **Cíle** k povolení jedné funkce po druhé. Po dokončení Průvodce nastavením začnete s plněním **Cíle 1**. Jsi pánem **AAPS**, nikoli naopak.

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

V licenční smlouvě koncového uživatele jsou důležité informace o právních aspektech používání **AAPS**. Přečtěte si ji prosím pozorně.

Pokud nerozumíte nebo s licenčním ujednáním nesouhlasíte, vůbec **AAPS** nepoužívejte!

Pokud rozumíte a souhlasíte, klikněte na tlačítko "ROZUMÍM A SOUHLASÍM" a pokračujte v Průvodci nastavením:

![image](../images/setup-wizard/Screenshot_20231202_125650.png)

### Vyžadovaná oprávnění

**AAPS** portřebuje ke správnému fungování splnění určitých požadavků.

Na následujících obrazovkách budete dotázáni na několik oprávnění, se kterými budete muset souhlasit, aby **AAPS** fungovalo správně. Průvodce vždy poskytne vysvětlení, z jakého důvodu jsou tato nastavení vyžadována.

Na těchto obrazovkách se zaměřujeme na poskytnutí informací o pozadí, přeložení technických termínů do běžného jazyka nebo vysvětlení důvodů.

Klikněte prosím na tlačítko "DALŠÍ":

![image](../images/setup-wizard/Screenshot_20231202_125709.png)

U chytrých telefonů je pořád důležité brát ohled na spotřebu energie, protože kapacita baterií je stále docela omezená. Z toho důvodu je operační systém Android na vašem telefonu docela restriktivní ohledně povolení aplikacím fungovat a spotřebovávat čas procesoru a tedy i energii baterie.

Nicméně **AAPS** musí pracovat v pravidelných intervalech, _např._ každých pár minut načíst aktuální glykémii a potom spustit algorytmus, který na základě vašich specifikací rozhodne, jak s hodnotami glykémie naložit. Proto AAPS potřebuje povolení v systému Android.

Toho dosáhnete potvrzením požadovaných nastavení.

Klikněte prosím na tlačítko "VYŽÁDAT OPRÁVNĚNÍ":

![image](../images/setup-wizard/Screenshot_20231202_125721.png)

Vyberte prosím "Povolit":

![image](../images/setup-wizard/Screenshot_20231202_125750.png)

Android vyžaduje zvláštní oprávnění pro aplikace, které potřebují posílat uživateli upozornění.

Přestože může být účelné upozornění vypnout _např._ pro aplikace sociálních médií, povolit odesílání upozornění **AAPS** je nezbytné.

Klikněte prosím na tlačítko "VYŽÁDAT OPRÁVNĚNÍ":

![image](../images/setup-wizard/Screenshot_20231202_125813.png)

Vyberte aplikaci "AAPS":

![image](../images/setup-wizard/Screenshot_20231202_125833.png)

Povolte oprávnění "Zobrazit nahoře" přesunem přepínače doprava:

![image](../images/setup-wizard/Screenshot_20231202_125843.png)

Přepínač v povoleném stavu by měl vypadat takto:

![image](../images/setup-wizard/Screenshot_20231202_125851.png)

Android propojuje využití Bluetooth komunikace s funkcemi určení polohy. Možná už jste na to narazili i u jiných aplikací. Běžně je nutné povolit služby určování polohy, pokud potřebujete přístup k Bluetooth.

**AAPS** využívá Bluetooth ke komunikaci s CGM a inzulínovou pumpou, pokud jsou přímo řízené aplikací **AAPS** a nikoli samostanými aplikacemi. Detaily se mohou lišit u různých konfigurací.

Klikněte prosím na tlačítko "VYŽÁDAT OPRÁVNĚNÍ":

![image](../images/setup-wizard/Screenshot_20231202_125924.png)

Toto je důležité. **AAPS** jinak nemůže vůbec správně fungovat.

Klikněte na "Během používání aplikace":

![image](../images/setup-wizard/Screenshot_20231202_125939.png)

Kliněte na tlačítko "DALŠÍ":

![image](../images/setup-wizard/Screenshot_20231202_130002.png)

**AAPS** potřebuje zaznamenávat informace do trvalé paměti telefonu. Trvalá paměť znamená, že data budou k dispozici i po restartu vašeho telefonu. Informace uložené pouze v operační paměti a nikoli v paměti trvalé mohou být ztracené.

Klikněte prosím na tlačítko "VYŽÁDAT OPRÁVNĚNÍ":

![image](../images/setup-wizard/Screenshot_20231202_130012.png)

Klikněte na "Povolit":

![image](../images/setup-wizard/Screenshot_20231202_130022.png)

Budete informováni o tom, že po této změně musíte váš telefon restartovat.

Prosím, **nezastavuje v této chvíli Průvodcenastavením**. Můžete to udělat po dokončení Průvodce nastavením.

Klikněte na "OK" a potom na tlačítko "DALŠÍ":

![image](../images/setup-wizard/Screenshot_20231202_130031.png)

### Hlavní heslo

Jelikož **AAPS** obsahuje citlivá data (_např._ API_KEY pro přístup k Nightscout serveru), používá šifrování dat pomocí hesla, které zde můžete zadat.

Je velmi důležité **NIKDY NEZTRATIT HLAVNÍ HESLO**. Poznamenejte si ho _např._ na Google Drive. Google Drive je vhodné místo, protože ho pro vás Google automaticky zálohuje. Váš telefon nebo poočítač se může porouchat a vy byste mohli skončit bez vašeho aktuálního hesla. Pokud byste ztratili Hlavní heslo do aplikace (Master password), bylo by v budoucnu obtížné obnovit nastavení profilu a vaše splněné **Cíle**.

Po dvojím zadání hesla klikněte na tlačítko "DALŠÍ":

![image](../images/setup-wizard/Screenshot_20231202_130122.png)

### Odesílání do Fabric

Tady můžete nastavit využití automatického reportování pádů aplikace a jejího využití.

Není to povinné, ale je dobrým zvykem tato data odesílat.

Pomůžete tak vývojářům lépe porozumnět tomu, jak aplikaci využíváte a k jakým dochází pádům aplikace.

Vývojáři dostanou:

1. Informaci o pádech aplikace, o kterých by jinak nevěděli protože v jejich prostředí a nastavení všechno funguje správně.
2. V zaslaných datech (informace o pádu) získají informace o okolnostech pádu aplikace a jaká se využívá konfigurace.

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

Vaše cíle glykémie _např._ jsou konfigurovány samostatně ve vašem profilu.

Váš rozsah pro analýzu Času v rozsahu se konfiguruje nezávisle na vašem reportovacím serveru.

Klikněte prosím na tlačítko "DALŠÍ":

![image](../images/setup-wizard/Screenshot_20231202_135853.png)

### Synchronizace dat s reportovacím serverem a další

Zde nastavujete nahrávání dat na reportovací server.

Je zde možné konfigurovat i další nastavení, ale v prvním průběhu se budeme soustředit pouze na reportovací server.

Pokud ho v tuto chvíli nemůžete nastavit, tak obrazovku přeskočte. K nastavením se můžete vrátit později.

Pokud zde vyberete položku zaškrtnutím na levé straně, vpravo můžete zaškrtnout její viditelnost (pod symbolem oka) a tak pro tuto funkci zapnout samostatnou záložku na domovské obrazovce **AAPS**. Zaškrněte prosím také viditelnost pokud budete v tomto bodě konfigurovat reportovací server.

V tomto příkladu vybereme reportovací server Nightscout a zkonfigurujeme ho.

```{admonition} Make sure to choose the correct **NSClient** version for your needs! 
:class: Note
Click [here](./Releasenotes.md) for the release notes of **AAPS** 3.2.0.0 which explain the differences between the top option **NSClient** (this is "v1", although it is not explicitly labelled) and the second option, **NSClient v3**. 

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

Pokud ho v této chvíli nemáte k dispozici, projděte si část o nastavení reportovacího serveru v dokumentaci **AAPS**.

Po zadání "NS přístupový token" a kliknutí na "OK" klikněte na tlačítko "Synchronizace":

![image](../images/setup-wizard/Screenshot_20231202_141131.png)

Pokud jste v předchozích krocích Průvodce nastavením zkonfigurovali Nightscout server, vyberte "Nahrávat data do NS".

Pokud máte na Nightscout serveru uložené profily a chcete je stáhnout do **AAPS**, povolte "Získat profily ze serveru":

![image](../images/setup-wizard/Screenshot_20231202_141219.png)

Vraťte se na předchozí obrazovku a vyberte "Nastavení alarmů":

![image](../images/setup-wizard/Screenshot_20231202_141310.png)

Prozatím ponechte přepínače vypnuté. Na obrazovku jsme se vrátili pouze proto, abyste se seznámili s možnostmi, které možná budete v budoucnu konfigurovat. V tuto chvíli to není třeba dělat.

Vraťte se na předchozí obrazovku a vyberte "Nastavení připojení".

Zde je možné nastavit jak se budou přenášet data na váš reportovací server.

Pečovatelé musí povolit "Použít mobilní připojení" jinak nebude možné, aby telefon dítěte/pacienta nahrával data na server mimo dosah WiFi, _např._ cestou do školy.

Ostatní uživatelé **AAPS** mohou přenos dat přes mobilní síť vypnout, pokud chtějí šetřit data a baterii.

Pokud máte pochybnosti, ponechte vše povoleno.

Vraťte se na předchozí obrazovku a vyberte "Rozšířená nastavení".

![image](../images/setup-wizard/Screenshot_20231202_141326.png)

Povolte "Zaznamenávat spuštění aplikace do NS", pokud chcete mít tuto informaci zaznamenanou na serveru. Může vám to, především jako ošetřující osobě, mít vzdáleně přehled jestli a kdy byla aplikace restartována.

Ze začátku může být zajímavé vidět, jestli je **AAPS** správně zkonfigurované, ale později už není tak důležité vidět v Nightscout serveru události zastavení a nastartování **AAPS**.

Povolte "Vytvořit oznámení z chyb" a "Vytvořit oznámení z návrhu sacharidů".

Položku "Zpomalit odesílání" ponechte vypnutou. Použijete ji pouze v neobvyklých případech, jako například pokud potřebujete přenést velké množství informací a Nightscout server zpracovává tato data pomalu.

Go back twice, to the list of plugins and select "NEXT" to go to the next screen:

![image](../images/setup-wizard/Screenshot_20231202_141351.png)

### Jméno pacienta

Tady můžete do **AAPS** zadat vaše jméno.

Může zde být zadáno cokoli. Položka slouží pouze k odlišení pacientů.

Pro jednoduchost zadejte jméno a příjmení.

Klikněte na tlačítko "DALŠÍ" a přejdete k další obrazovce.

![image](../images/setup-wizard/Screenshot_20231202_141445.png)

### Typ pacienta

Zde zadejte "Typ pacienta", což je důležité ínastavení, protože **AAPS** má v závislosti na věku pacienta odlišné limity. Nastavení je důležité z bezpečnostních důvodů.

Zároveň zde nastavujete **Maximální povolený bolus** na jídlo. Jedná se o největší hodnotu bolusu, který potřebujete k pokrytí typické porce jídla. Jedná se o bezpečnostní funkci, která brání náhodnému předávkování při posílání bolusu k jídlu.

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

### Profile

Teď se dostáváme k velmi důležité části Průvodce nastavením.

Přečtěte si, prosím, část dokumentace o profilech dříve, než se pokusíte na další obrazovce zadat vaše údaje.

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

Zadejte vaši "Dobu působnosti inzulínu (DIA) v hodinách. Potom klikněte na "IC":

![image](../images/setup-wizard/Screenshot_20231202_142143.png)

Zadejte vaše hodnoty inzulíno-sacharidového poměru (IC):

![image](../images/setup-wizard/Screenshot_20231202_142903.png)

Klikněte na "ISF". Zadejte vaše hodnoty Citlivosti na inzulín (ISF):

![image](../images/setup-wizard/Screenshot_20231202_143009.png)

Klikněte na "BAZ". Zadejte hodnoty vašich bazálních dávek inzulínu:

![image](../images/setup-wizard/Screenshot_20231202_143623.png)

Klikněte na "CÍL". Zadejte vaše cílové hodnoty glykémie.

Pro otevřenou smyčku může být cílová hodnota zadána jako širší pásmo, jinak vám bude **AAPS** neustále posílat upozornění na potřebnou změnu dočasného bazálu nebo jiného nastavení, což může být vyčerpávající.

Později, s uzavřenou smyčkou, budete mít obvykle zadanou stejnou hodnotu pro horní i dolní limit. To aplikaci **AAPS** zjednodušuje zacílení a přispívá tak k lepší celkové kontrole vašeho diabetu.

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

V opačném případě opusťte Průvodce nastavením kliknutím na šipku v levém horním rohu a nechte zatím **AAPS** zobrazovat hodnoty glykémie. Kdykoli se k připojení pumpy můžete vrátit nebo můžete využít možnost přímé konfigurace (bez využití Průvodce).

Please read the documentation for your [insulin pump](../Getting-Started/CompatiblePumps.md).

Klikněte na tlačítko "DALŠÍ" a přejdete k další obrazovce.

![image](../images/setup-wizard/Screenshot_20231202_143909.png)

V tomto případě vybereme "Virtuální pumpu".

Klinkněte na tlačítko "DALŠÍ" a přejděte na následující obrazovku:

![image](../images/setup-wizard/Screenshot_20231202_143935.png)

### APS algorithm

Vyberte OpenAPS SMB jako váš APS algoritmus. Bez ohledu na název bude SMB funkce algoritmu vypnutá dokud se s **AAPS** blíže neseznámíte a nepropracujete se počátečními cíli. OpenAPS SMB algoritmus je každopádně novější a obecně lepší než OpenAPS AMA.

Důvodem k vypnutí funkce SMB na začátku je ten, že SMB umožňuje rychlejší reakci na stav cukru v krvi díky využití mikrobolusů namísto zvýšení úrovně bazálu. Jelikož váš profil není na začátku tak dobrý, jako bude po nějakém čase užívání, je tato funkce prozatím vypnuta.

```{admonition} Only use the older algorithm **OpenAPS AMA** if you know what you are doing
:class: information
OpenAPS AMA is the most basic algorithm which does not support micro boluses to correct high values. There might be circumstances where it is better to use this algorithm but it is not the recommendation.
```

Press the cogwheel to see the details:

![image](../images/setup-wizard/Screenshot_20231202_144014.png)

Zde si pouze přečtěte text a nic zde neměňte.

Kvůli omezením, která jsou vyžadována **Cíli**, v současné době nemůžete použít ani "uzavřenou smyčku" ani „SMB funkce".

Go back and press "NEXT" to go to the next screen:

![image](../images/setup-wizard/Screenshot_20231202_144025.png)

### Typ smyčky

Ponechte vybranou možnost "Otevřená smyčka".

Klinkněte na tlačítko "DALŠÍ" a přejděte na následující obrazovku:

![image](../images/setup-wizard/Screenshot_20231202_144049.png)

### Detekce citlivosti

Jako standardní plugin pro citlivost ponechte vybraný "Sensitivity Oref1".

Klinkněte na tlačítko "DALŠÍ" a přejděte na následující obrazovku:

![image](../images/setup-wizard/Screenshot_20231202_144101.png)

### Začněte Cíl 1

Nyní vstupujete do Cílů. Jejich plněním se kvalifikujete k využívání dalších fukcí **AAPS**.

Zde začínáme Cíl 1, i když v tuto chvíli naše nastavení není zcela připraveno k jeho úspěšnému dokončení.

Ale je to začátek.

Stiskněte zelené tlačítko "START" pro spuštění cíle 1:

![image](../images/setup-wizard/Screenshot_20231202_144113.png)

Vidíte, že jste již udělali určitý pokrok, ale další oblasti je ještě třeba dokončit.

Klikněte na tlačítko "DOKONČIT" a přejděte k další obrazovce.

![image](../images/setup-wizard/Screenshot_20231202_144135.png)

Dostanete se na domovskou obrazovku **AAPS**.

Zde v **AAPS** najdete informační zprávu, že jste nastavili váš profil.

K tomu došlo ve chvíli, kdy jsme přepnuli na náš nový profil.

Můžete kliknout na "ODLOŽIT" a zpráva zmizí.

![image](../images/setup-wizard/Screenshot_20231202_144156.png)

If you accidentally leave the Setup Wizard at any point, you can either simply re-start the Wizard, or change the [configuration of the AAPS loop](../SettingUpAaps/ChangeAapsConfiguration.md) manually.

If your **AAPS** loop is now fully setup, please move on to the next section ["Completing the objectives"](../SettingUpAaps/CompletingTheObjectives.md).
