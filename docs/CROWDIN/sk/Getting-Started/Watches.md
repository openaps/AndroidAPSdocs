# Inteligentné hodinky a AAPS

Na zobrazenie niektorých informácií dostupných v **AAPS** alebo na vzdialené ovládanie je možné použiť rôzne inteligentné hodinky.

Priame ovládanie **AAPS** (pumpa a senzor) inteligentnými hodinkami sa dá dosiahnuť pomocou hodiniek s Androidom (ktoré sa považujú za malé [smartfóny](./Phones.md)).

Niektoré inteligentné hodinky vám umožňujú zadávať ošetrenia alebo iné veci ale samotný telefón stále spravuje **AAPS**.

Inteligentné hodinky sa čoraz viac používajú s **AAPS** ako aj u dospelých s cukrovkou, tak aj u opatrovateľov/rodičov detí s cukrovkou.

## Všeobecné výhody používania inteligentných hodiniek s **AAPS**


Inteligentné hodinky – v závislosti od modelu – sa dajú s technológiou **AAPS** používať mnohými rôznymi spôsobmi. Môžu sa použiť na úplné alebo čiastočné ovládanie **AAPS** alebo jednoducho na diaľkovú kontrolu hladiny glukózy, inzulínu v krvi a ďalších parametrov.

Integrácia inteligentných hodiniek s **AAPS** môže byť užitočná v mnohých situáciách vrátane šoférovania auta alebo (motorky) a počas cvičenia. Niektorí ľudia majú pocit, že pozeranie sa na hodinky (na stretnutí, večierku, pri obede atď.) je diskrétnejšie ako pozeranie sa na telefón. Z bezpečnostného hľadiska môžu byť inteligentné hodinky užitočné aj na cestách, pretože umožňujú používateľovi mať svoj telefón **AAPS** uložený mimo dohľadu (napríklad v taške) a hodinky môžu byť použité ako diaľkový ovládač.

## Konkrétne výhody pre rodičov/opatrovateľov používajúcich **AAPS**

Pre dieťa – ak má telefón s funkciou **AAPS** nablízku – môže opatrovateľ použiť inteligentné hodinky na monitorovanie alebo vykonávanie úprav bez nutnosti používať telefón s **AAPS**. Toto môže byť užitočné napríklad, ak je telefón **AAPS** skrytý v opasku s pumpou.

Hodinky môžete použiť spolu s mobilom alebo aj namiesto neho či už chcete cez ne ovládať _AAPS_ na diaľku alebo len [sledovať dáta](../RemoteFeatures/FollowingOnly.md).

Navyše, na rozdiel od telefónov pre rodičov/opatrovateľov (ktoré sa spoliehajú na mobilnú sieť alebo Wi-Fi pripojenie), inteligentné hodinky s pripojením Bluetooth môžu byť užitočné na odľahlých miestach, ako je jaskyňa, na lodi alebo turistike. Ak sú obe zariadenia (telefón **AAPS** a inteligentné hodinky) pripojené k rovnakej sieti Wi-Fi, môžu tiež používať Wi-Fi.

## Rôzne typy interakcií inteligentných hodiniek a AAPS

V súčasnosti existuje päť hlavných spôsobov, akými sa inteligentné hodinky používajú v spojení s **AAPS**. Tieto sú uvedené v tabuľke nižšie: 

| Nastavenie hodiniek          | Vlastnosti                              | Požiadavky                                                                                                                                                                                                                                                       |
| ---------------------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Samostatne                   | AAPS bez telefónu                       | Full Android smartwatch (check min Android)</br> Running **app-fullRelease**                                                                                                                                                                                     |
| Kompletné diaľkové ovládanie | Väčšina funkcií AAPS                    | Android **Wear OS** watch (check Android/API)</br>Running **wear-fullRelease**                                                                                                                                                                                   |
| Vzdialené ovládanie          | AAPSClient functions                    | Android **Wear OS** watch (check Android/API)</br>Running **[wear-aapsclientRelease](https://github.com/nightscout/AndroidAPS/releases)**                                                                                                                        |
| Vzdialené ovládanie          | Niektoré funkcie AAPSClienta            | Niektoré hodinky Samsung, Fitbit a Garmin</br>Pozrite nižšie.                                                                                                                                                                                                    |
| Displej                      | Zobrazí niektoré hlásenia z AAPSclienta | Veľa inteligentných hodiniek (pozrite [tu](https://bigdigital.home.blog/))</br>[xDrip+](https://github.com/nightscoutfoundation/xdrip/releases) a [WatchDrip+](https://bigdigital.home.blog/2022/06/16/watchdrip-a-new-application-for-xdrip-watch-integration/) |

## Pred kúpou inteligentných hodiniek…

Presný model inteligentných hodiniek, ktorý si môžete kúpiť, závisí od požadovaných funkcií. Veľa užitočných informácií nájdete na stránke [Telefóny](#Phones-list-of-tested-phones) vrátane zoznamu testovaných telefónov, ktorý obsahuje aj niektoré inteligentné hodinky.

Medzi obľúbené značky hodiniek patria Samsung Galaxy, Garmin, Fossil, Mi Band a Fitbit. Možnosti zhrnuté v tabuľke vyššie sú podrobnejšie vysvetlené nižšie, aby ste sa mohli rozhodnúť, ktoré inteligentné hodinky sú pre vašu situáciu tie pravé.

Ak integrujete hodinky s **AAPS** do telefónu s úmyslom vzdialene ovládať **AAPS**, musíte zvážiť aj to, či sú tieto dve zariadenia navzájom kompatibilné, najmä ak máte starší alebo neobvyklý telefón.

Vo všeobecnosti, ak chcete sledovať iba hodnoty glukózy a nechcete interagovať s **AAPS**, existuje širšia škála cenovo dostupných a jednoduchších hodiniek, ktoré môžete použiť.

Najlepší spôsob, ako si vybrať inteligentné hodinky, je vyhľadať príspevky s názvom „hodinky“ v skupinách Discord alebo Facebook **AAPS**. Prečítajte si skúsenosti iných a pýtajte sa konkrétne otázky, ak ste na vašu otázku nenašli odpoveď v starších príspevkoch.

## Čistý android

Znie to ako atraktívna možnosť, však? V súčasnosti však len niekoľko nadšencov experimentuje s **AAPS** na samostatných hodinkách. Existuje obmedzený počet inteligentných hodiniek s rozumným rozhraním, ktoré tiež dobre fungujú so samostatným používaním **AAPS** a aplikácie CGM. Medzi obľúbené modely patrí LEMFO LEM. Do hodiniek budete musieť nahrať „plnohodnotnú“ apk od **AAPS** (apk, ktorá sa zvyčajne inštaluje do smartfónu), a nie „wear“ apk od **AAPS**.

Hoci neexistuje jasná špecifikácia, ktorá by vám pomohla zistiť, či hodinky budú dobre fungovať na samostatné použitie s **AAPS**, nasledujúce parametre vám môžu pomôcť:

1)  Android 12 or newer. 2) Možnosť vypnúť štvorcový režim ciferníka, aby bol text väčší a ľahšie čitateľný. 3) Veľmi dobrá výdrž batérie. 4) Dobrý dosah Bluetooth.

Väčšina frustrácií zo samostatných hodiniek **AAPS** pramení z interakcie s malou obrazovkou a zo skutočnosti, že súčasné rozhranie plnej aplikácie AAPS nebolo navrhnuté pre hodinky. Na úpravu nastavení **AAPS** na hodinkách môžete uprednostniť použitie stylusu kvôli obmedzenej veľkosti obrazovky a niektoré tlačidlá AAPS nemusia byť na obrazovke hodiniek viditeľné.

Ďalšou výzvou je, že je ťažké dosiahnuť dostatočnú výdrž batérie a hodinky s dostatočnou výdržou batérie sú často objemné a hrubé. Používatelia hlásia problémy s operačným systémom a nastaveniami úspory energie, ťažkosti so spustením senzorov na hodinkách, slabý dosah Bluetooth (na udržiavanie spojenia so senzorom aj pumpou). Na fotografiách nižšie je zopár príkladov.

![image](../images/6d787373-bc0c-404d-89aa-54d3127c4a6f.png)

Ak máte záujem o nastavenie samostatných hodiniek, prečítajte si príspevky a komentáre v skupine **AAPS** na Facebooku (skúste hľadať „standalone“ a „Lemfo“) a na Discorde, kde nájdete ďalšie informácie.

## Wear OS

Kód **AAPS** obsahuje rozšírenie aplikácie, ktoré je možné nainštalovať na inteligentné hodinky [**Wear OS**](https://wearos.google.com/#oem-carousel).

![Wear OS](../images/WearOS.png)

Overte si či vaše hodinky spĺňajú **AAPS** [požiadavky](#maintenance-android-version-aaps-version).

### Čo je Wear OS?

Prvé tri možnosti inteligentných hodiniek vyžadujú, aby boli v hodinkách nainštalované operačné systémy **Wear OS**.

**Wear OS** je operačný systém, ktorý beží na niektorých moderných inteligentných hodinkách so systémom Android. Ak popis inteligentných hodiniek uvádza iba _kompatibilitu_ so systémom Android a iOS, neznamená to, že používajú systém Wear OS. Môže ísť o iný druh operačného systému špecifického pre dodávateľa, ktorý nie je kompatibilný s **AAPS**. Pre inštaláciu a používanie akejkoľvek verzie **AAPS** alebo **AAPSClient** musia inteligentné hodinky používať operačný systém **Wear OS** a systém Android 11 alebo novší. Pre informáciu, k októbru 2024 je najnovšou verziou systému **Wear OS** verzia 5.0 (založená na systéme Android 13).

Ak si nainštalujete súbor **AAPS** wear.apk na hodinky **Wear OS**, môžete si vybrať z rôznych vlastných ciferníkov **AAPS**. Prípadne môžete použiť štandardný ciferník pre smartfóny s informáciami o **AAPS** zobrazenými v mini okienkach na ciferníku známych ako „complications“. Je to akákoľvek funkcia, ktorá sa zobrazuje na ciferníku okrem času.


### Ako by mohli vyzerať moje inteligentné hodinky?

Po [nainštalovaní **AAPS** do hodiniek](../WearOS/WearOsSmartwatch.md) si budete môcť automaticky vybrať preferovaný ciferník z ciferníkov určených pre **AAPS**. Na väčšine hodiniek jednoducho stačí dlho stlačiť domovskú obrazovku, kým sa nezmenší, a potom potiahnutím prstom doprava vyberte alternatívnu obrazovku:

![image](../images/67fd75f3-721c-438d-be01-1a8e03532290.png)

Toto sú základné obrazovky vložené do **AAPS**, existuje [viac ciferníkov](#WearOS_changing-to-AAPS-watchface) a môžete použiť aj [complications](#Watchfaces-complications).

### Ako by som mal používať hodinky Wear OS v každodennom živote?

Ďalšie podrobnosti o ciferníkoch a ich každodennom používaní vrátane toho, ako si vytvoriť (a zdieľať) vlastný prispôsobený ciferník, nájdete v časti [Ovládanie Wear AAPS na inteligentných hodinkách](../WearOS/WearOsSmartwatch.md).

(Watchfaces-tizen)=

## Samsung Tizen

**AAPS** podporuje odosielanie údajov do [aplikácie G-Watch](https://play.google.com/store/apps/details?id=sk.trupici.g_watch).

Najnovšie informácie nájdete v [skupine na Facebooku](https://www.facebook.com/groups/gwatchapp).

![G-Watch](../images/G-Watch.png)

(Watchfaces-garmin)=

## Garmin

V obchode Garmin ConnectIQ nájdete niekoľko ciferníkov pre hodinky Garmin, ktoré sa integrujú s [AAPS](https://apps.garmin.com/search?keywords=androidaps).

![Garmin](../images/Garmin.png)

Hodinky [AAPS Glucose Watch](https://apps.garmin.com/apps/3d163641-8b13-456e-84c3-470ecd781fb1) sú priamo prepojené s **AAPS**. Zobrazujú údaje o stave slučky (IOB, dočasný bazál) okrem hodnôt glukózy a odosielajú údaje o srdcovej frekvencii do **AAPS**. Ciferník je dostupný v obchode ConnectIQ, potrebný plugin **AAPS** je dostupný až od verzie **AAPS** 3.2. ![Screenshot](../images/Garmin_WF-annotated.png)



## Fitbit

```{Warning}
Google postupne vyraďuje produkty Fitbit. Vlastné ciferníky už v Európe nie sú dostupné (musíte použiť VPN). Kúpa Fitbitu sa teraz neodporúča.
```

**AAPS** podporuje odosielanie údajov do ciferníka [Sentinel](http://ryanwchen.com/sentinel.html).

![image](../images/98620770-2fb3-47af-a13e-28af7db69096.png)



**„Sentinel“** je ciferník, ktorý vyvinul [Ryan Chen](http://ryanwchen.com/sentinel.html) pre svoju rodinu a ktorý je bezplatný pre inteligentné hodinky Fitbit: Sense1/2, Versa 2/3/4. Nie je kompatibilný s FitBit Luxe, pretože to je len fitness tracker. Sentinel si môžete stiahnuť z [mobilnej aplikácie FitBit](https://gallery.fitbit.com/details/5f75448f-413d-4ece-a53d-b969c6afea7c).

Umožňuje monitorovanie hodnôt glukózy v krvi 1, 2 alebo 3 osôb pomocou zdrojov údajov Dexcom Share, Nightscout alebo ich kombinácie.

Môžete použiť aj xDrip+ alebo SpikeApp, ak sa používa v režime lokálneho web servera. Používatelia si môžu nastaviť vlastné alarmy a odosielať udalosti pomocou funkcie careportal aplikácie Nightscout priamo z hodiniek, aby mohli sledovať hladinu inzulínu v tele (IOB), sacharidov (COB), zadávať informácie o jedle (počet sacharidov a množstvo bolusu) a kontrolovať hodnoty glykémie.

Všetko sa zobrazí v Nightscoute a ako aktualizované hodnoty v poliach IOB a COB. Podporu komunity nájdete v špecializovanej [skupine na Facebooku s názvom Sentinel.](https://www.facebook.com/groups/3185325128159614)

Pre hodinky FitBit existujú ďalšie možnosti, ktoré sú určené len na monitorovanie. Patria sem aj appka [Glance](https://glancewatchface.com/). Ďalšie možnosti sú popísané na [stránkach Nightscoutu.](https://nightscout.github.io/nightscout/wearable/#fitbit)

## Iba sledovanie

Tieto inteligentné hodinky budú zobrazovať niektoré informácie z **AAPS**, niektoré budú vyžadovať iné aplikácie.

Existuje široká škála cenovo dostupných inteligentných hodiniek, ktoré môžu slúžiť len na zobrazenie údajov. Ak používate Nightscout, prehľad všetkých možností nájdete [tu](https://nightscout.github.io/nightscout/wearable/#)

Nižšie sú uvedené niektoré z možností hodiniek určených iba na sledovanie, ktoré sú obľúbené u používateľov **AAPS**:

### **Hodinky Xiaomi a Amazfit**

[Artem](https://github.com/bigdigital) vytvoril integračnú aplikáciu WatchDrip+ s xDrip+ pre rôzne modely inteligentných hodiniek, najmä pre značky Xiaomi (_napr._ Mi band) a Amazfit:

![image](../images/4dba454b-f808-4e9e-bfc6-aba698e006f8.png)


Viac o nich, vrátane návodu na nastavenie, si môžete prečítať na jeho webovej stránke [tu](https://bigdigital.home.blog/). Výhodou týchto hodiniek je, že sú malé a relatívne cenovo dostupné. Sú obľúbenou voľbou najmä pre deti a osoby s menšími zápästiami.

### Pebble hodinky

![image](../images/52032f3b-c871-4342-b8e7-659c285a39c8.png)

![image](../images/935d28bb-a909-4ca8-850d-6a765bd4fcde.png)


Hodinky Pebble ([už sa nevyrábajú](https://en.wikipedia.org/wiki/Pebble_(watch))) boli v bežnom výpredaji od roku 2013 do roku 2016 a stále môžu byť dostupné z druhej ruky. Fitbit prevzal majetok spoločnosti Pebble. Používatelia Pebble môžu na zobrazenie údajov Nightscout použiť ciferník Urchin. Medzi zobrazené možnosti údajov patrí IOB, aktívny dočasný bazál a predikcie. V prípade otvorenej slučky môžete použiť IFTTT na vytvorenie appletu, ktorý po prijatí oznámenia od **AAPS** odošle buď SMS, alebo pushover oznámenie.

### [Hodinky Bluejay](https://bluejay.website/)


![image](../images/4d034157-b3d0-4dcb-98c8-fde0c2e7ad74.png)


Ide o unikátne technológie, ktoré dokážu prijímať údaje o glukóze **priamo** z vysielača Dexcom. Nie je všeobecne známe, že vysielače Dexcom G6/G7 v skutočnosti vysielajú aktuálne údaje o glukóze na _dvoch_ samostatných kanáloch, telefónnom kanáli a lekárskom kanáli. Hodinky Bluejay je možné nastaviť tak, aby prijímali údaje o glukóze na ktoromkoľvek kanáli, takže ak **AAPS** používa telefónny kanál, hodinky Bluejay môžu používať lekársky kanál.

Kľúčovou výhodou je, že sú to momentálne jediné hodinky, ktoré sú úplne nezávislé od telefónu aj od systému slučky. Takže napríklad, ak odpojíte pumpu a telefón **AAPS** na pláži alebo v zábavnom parku a ste mimo dosahu telefónu **AAPS**, stále môžete získavať údaje z vášho Dexcomu priamo do hodiniek Bluejay.

Medzi hlásené nevýhody patrí, že nie vždy zaznamenáva údaje každých 5 minút a batéria nie je vymeniteľná. Hodinky Bluejay GTS používajú upravenú verziu softvéru xDrip+, zatiaľ čo Bluejay U1 používajú plnú verziu xDrip+.

### Apple hodinky

Pozrite si údaje z [Nightscout na hodinkách](https://nightscout.github.io/nightscout/wearable/#).

Hodinky Apple Watch teraz podporujú priame pripojenie G7 a možno ich používať súčasne s **AAPS**.

