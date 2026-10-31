# Inteligentné hodinky a AAPS

Na zobrazenie niektorých informácií dostupných v **AAPS** alebo na vzdialené ovládanie je možné použiť rôzne inteligentné hodinky.

Priame ovládanie **AAPS** (pumpa a senzor) inteligentnými hodinkami sa dá dosiahnuť pomocou hodiniek s Androidom (ktoré sa považujú za malé [smartfóny](./Phones.md)).

Niektoré inteligentné hodinky vám umožňujú zadávať ošetrenia alebo iné veci ale samotný telefón stále spravuje **AAPS**.

Inteligentné hodinky sa s **AAPS** používajú čoraz viac, a to _ako_ u dospelých s diabetom, tak aj u opatrovateľov/rodičov detí s diabetom.

## Všeobecné výhody používania inteligentných hodiniek s **AAPS**


Inteligentné hodinky – v závislosti od modelu – sa dajú s technológiou **AAPS** používať mnohými rôznymi spôsobmi. Môžu sa použiť na úplné alebo čiastočné ovládanie **AAPS** alebo jednoducho na vzdialenú kontrolu glykémie, aktívneho inzulínu (IOB) a ďalších parametrov.

Prepojenie inteligentných hodiniek s **AAPS** môže byť užitočné v mnohých situáciách, napríklad pri riadení auta, pri jazde na (motorke) bicykli a počas cvičenia. Niektorí ľudia majú pocit, že pohľad na hodinky (na stretnutí, večierku, pri stole a pod.) je nenápadnejší ako pohľad na telefón. Z hľadiska bezpečnosti môžu byť inteligentné hodinky užitočné aj na cestách: telefón s **AAPS** môžete mať schovaný (napríklad v taške) a na vzdialené ovládanie pritom používať hodinky.

## Konkrétne výhody pre rodičov/opatrovateľov používajúcich **AAPS**

Pre dieťa – ak má telefón s funkciou **AAPS** nablízku – môže opatrovateľ použiť inteligentné hodinky na monitorovanie alebo vykonávanie úprav bez nutnosti používať telefón s **AAPS**. Toto môže byť užitočné napríklad, ak je telefón **AAPS** skrytý v opasku s pumpou.

Inteligentné hodinky sa dajú použiť _popri_ možnostiach cez TELEFÓN pre vzdialené ovládanie alebo [iba sledovanie](../RemoteFeatures/FollowingOnly.md), alebo ako ich _náhrada_.

Navyše, na rozdiel od telefónov rodičov/opatrovateľov na sledovanie (ktoré závisia od mobilnej siete alebo pripojenia Wi-Fi), môžu byť inteligentné hodinky pripojené cez Bluetooth užitočné na odľahlých miestach, napríklad v jaskyni, na lodi alebo v polovici cesty na horu. Ak sú obe zariadenia (telefón s **AAPS** a inteligentné hodinky) v rovnakej sieti Wi-Fi, môžu komunikovať aj cez Wi-Fi.

## Rôzne typy interakcií inteligentných hodiniek a AAPS

V súčasnosti existuje päť hlavných spôsobov, akými sa inteligentné hodinky používajú v spojení s **AAPS**. Tieto sú uvedené v tabuľke nižšie: 

| Nastavenie hodiniek       | Vlastnosti                                     | Požiadavky                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Samostatne                | AAPS bez telefónu                              | Plnohodnotné inteligentné hodinky s Androidom (overte min. verziu Androidu)</br> so spustenou aplikáciou **app-fullRelease**                                                                                                                                                                                                                                    |
| Úplné vzdialené ovládanie | Väčšina funkcií AAPS                           | Hodinky s Android **Wear OS** (overte verziu Androidu/API)</br>so spustenou aplikáciou **wear-fullRelease**                                                                                                                                                                                                                                                     |
| Vzdialené ovládanie       | Funkcie AAPSClienta                            | Hodinky s Android **Wear OS** (overte verziu Androidu/API)</br>so spustenou aplikáciou **[wear-aapsclientRelease](https://github.com/nightscout/AndroidAPS/releases)**                                                                                                                                                                                          |
| Vzdialené ovládanie       | Niektoré funkcie AAPSClienta                   | Hodinky Garmin</br>(Samsung Tizen a Fitbit iba v starších nastaveniach, neodporúča sa)</br>Pozrite nižšie.                                                                                                                                                                                                                                                      |
| Displej                   | Glykémia, trend, IOB, COB, stav okruhu a pumpy | Mnohé inteligentné hodinky, cez sprievodnú aplikáciu v telefóne s **AAPS**, ktorá dostáva dáta z vysielania [Externé sprievodné (Companion) aplikácie](#watches-external-companion-apps): [WatchDrip+](https://bigdigital.home.blog/) (Xiaomi, Amazfit), [GlucoDataHandler](https://github.com/pachi81/GlucoDataHandler) (Wear OS), G-Watch</br>Pozrite nižšie. |

## Pred kúpou inteligentných hodiniek…

Presný model inteligentných hodiniek, ktorý si kúpite, závisí od požadovaných funkcií. Užitočné informácie môžete nájsť na [stránke Telefóny](#Phones-list-of-tested-phones) vrátane zoznamu testovaných telefónov, ktorý obsahuje aj niektoré inteligentné hodinky.

Medzi obľúbené značky hodiniek patria Samsung Galaxy, Garmin, Fossil a Mi Band. Možnosti zhrnuté v tabuľke vyššie sú podrobnejšie vysvetlené nižšie, aby ste sa mohli rozhodnúť, ktoré inteligentné hodinky sú pre vašu situáciu tie pravé.

Ak prepájate inteligentné hodinky s **AAPS** v telefóne, aby ste mohli **AAPS** ovládať na diaľku, musíte zvážiť aj to, či sú tieto dve zariadenia navzájom kompatibilné, najmä ak máte starší alebo neobvyklý telefón.

Vo všeobecnosti, ak chcete iba sledovať hodnoty glykémie a nechcete **AAPS** ovládať, existuje širší výber cenovo dostupných a jednoduchších hodiniek, ktoré môžete použiť.

Najlepší spôsob, ako si vybrať inteligentné hodinky, je vyhľadať príspevky so slovom „watch“ v skupinách **AAPS** na Discorde alebo na Facebooku. Prečítajte si skúsenosti ostatných a ak staršie príspevky neodpovedajú na vašu otázku, položte ju.

## Plnohodnotný Android

Znie to ako atraktívna možnosť, však? V súčasnosti však len niekoľko nadšencov experimentuje s **AAPS** na samostatných hodinkách. Inteligentných hodiniek s rozumným rozhraním, ktoré navyše dobre fungujú pri samostatnom používaní **AAPS** a vašej aplikácie pre CGM, je málo. Medzi obľúbené modely patria LEMFO LEM 15 Pro a 16. Do hodiniek budete musieť nahrať „plnohodnotnú“ apk od **AAPS** (apk, ktorá sa zvyčajne inštaluje do smartfónu), a nie „wear“ apk od **AAPS**.

Hoci neexistuje jasná špecifikácia, ktorá by vám pomohla zistiť, či hodinky budú dobre fungovať na samostatné použitie s **AAPS**, nasledujúce parametre vám môžu pomôcť:

1) Android 12 alebo novší. 2) Možnosť vypnúť štvorcový režim ciferníka, aby bol text väčší a ľahšie čitateľný. 3) Veľmi dobrá výdrž batérie. 4) Dobrý dosah Bluetooth.

Väčšina frustrácií zo samostatných hodiniek **AAPS** pramení z interakcie s malou obrazovkou a zo skutočnosti, že súčasné rozhranie plnej aplikácie AAPS nebolo navrhnuté pre hodinky. Na úpravu nastavení **AAPS** na hodinkách môžete uprednostniť použitie stylusu kvôli obmedzenej veľkosti obrazovky a niektoré tlačidlá AAPS nemusia byť na obrazovke hodiniek viditeľné.

Ďalšou výzvou je, že je ťažké dosiahnuť dostatočnú výdrž batérie a hodinky s dostatočnou výdržou batérie sú často objemné a hrubé. Používatelia hlásia boj s operačným systémom a nastaveniami úspory energie, ťažkosti so spustením senzorov na hodinkách, slabý dosah Bluetooth (na udržanie spojenia so senzorom aj s pumpou) a pochybnú odolnosť voči vode. Na fotografiách nižšie je zopár príkladov.

![obrázok](../images/6d787373-bc0c-404d-89aa-54d3127c4a6f.png)

Ak máte záujem o nastavenie samostatných hodiniek, prečítajte si príspevky a komentáre v skupine **AAPS** na Facebooku (skúste hľadať „standalone“ a „Lemfo“) a na Discorde, kde nájdete ďalšie informácie.

## Wear OS

Kód **AAPS** obsahuje rozšírenie aplikácie, ktoré je možné nainštalovať na inteligentné hodinky [**Wear OS**](https://wearos.google.com/#oem-carousel).

![Konfigurácia > Komunikácia so zapnutým Wear](../images/v4/Configuration/configuration_communication_wear.png)

Overte si, či vaše inteligentné hodinky spĺňajú [požiadavky](#maintenance-android-version-aaps-version) **AAPS**.

### Čo _je_ Wear OS?

Prvé tri možnosti vyžadujú, aby bol v inteligentných hodinkách nainštalovaný operačný systém **Wear OS**.

**Wear OS** je operačný systém, ktorý beží na niektorých moderných inteligentných hodinkách so systémom Android. Ak popis inteligentných hodiniek uvádza iba _kompatibilitu_ so systémom Android a iOS, neznamená to, že používajú systém Wear OS. Môže ísť o iný druh operačného systému špecifického pre dodávateľa, ktorý nie je kompatibilný s **AAPS**. Na inštaláciu a používanie akejkoľvek verzie **AAPS** alebo **AAPSClient** musia mať inteligentné hodinky **Wear OS 3.0, 3.2 alebo 3.5** (Android 11, úroveň API 30) **alebo novší**. Každé vydanie Wear OS zodpovedá verzii Androidu, na ktorej je založené: **Wear OS 3** je Android 11 (úroveň API 30), **Wear OS 4** je Android 13 (úroveň API 33), **Wear OS 5** je Android 14 (úroveň API 34) a **Wear OS 6** je Android 16 (úroveň API 36). Hodinky s Wear OS 2 nedokážu spustiť **AAPS**.

Ak si nainštalujete súbor **AAPS** wear.apk na hodinky **Wear OS**, môžete si vybrať z rôznych vlastných ciferníkov **AAPS**. Prípadne môžete použiť štandardný ciferník a informácie z **AAPS** zobraziť v malých okienkach na ciferníku, ktoré sa nazývajú „komplikácie“. Komplikácia je akákoľvek funkcia, ktorá sa na ciferníku zobrazuje okrem času.

```{note}
Nedávne zmeny vo **Wear OS** postupne pokazia vlastné ciferníky **AAPS** (čím vyššia verzia Wear OS, tým viac), **komplikácie** však fungujú ďalej. Pred kúpou alebo aktualizáciou hodiniek si prečítajte [Zmeny ciferníkov vo Wear OS](#wearos-watchface-changes).
```


### Ako by mohli vyzerať moje inteligentné hodinky?

Po [nainštalovaní **AAPS** do hodiniek](../WearOS/WearOsSmartwatch.md) si budete môcť automaticky vybrať preferovaný ciferník z ciferníkov určených pre **AAPS**. Na väčšine hodiniek jednoducho stačí dlho stlačiť domovskú obrazovku, kým sa nezmenší, a potom potiahnutím prstom doprava vyberte alternatívnu obrazovku:

![obrázok](../images/67fd75f3-721c-438d-be01-1a8e03532290.png)

Toto sú základné obrazovky vložené do **AAPS**. Existuje [viac ciferníkov](#WearOS_changing-to-AAPS-watchface) a môžete použiť aj [komplikácie](#Watchfaces-complications).

### Ako by som mal používať hodinky Wear OS v každodennom živote?

Ďalšie podrobnosti o ciferníkoch a ich každodennom používaní vrátane toho, ako si vytvoriť (a zdieľať) vlastný prispôsobený ciferník, nájdete v časti [Nastavenie AAPS na hodinkách s Wear OS](../WearOS/WearOsSmartwatch.md).

(Watchfaces-tizen)= (watches-external-companion-apps)=

## Externé sprievodné (Companion) aplikácie

**AAPS** môže vysielať svoj stav iným aplikáciám v tom istom telefóne: glykémiu a trend, IOB, COB, bazál a dočasný bazál, názov profilu, stav okruhu, batériu telefónu a pumpy, množstvo inzulínu v zásobníku a priebeh bolusu. Niekoľko sprievodných aplikácií pre hodinky toto vysielanie číta a zobrazuje dáta na hodinkách, ktoré **AAPS** priamo nepodporuje. Ak chcete dáta odosielať, zapnite **Externé sprievodné (Companion) aplikácie** v **Konfigurácia** > **Komunikácia** (pozrite [Externé sprievodné (Companion) aplikácie](#external-companion-apps) na stránke o konfigurácii). Vysielanie sa odošle s každou novou hodnotou a nedá sa vyžiadať: tlačidlo obnovenia v sprievodnej aplikácii nemá na **AAPS** žiadny vplyv.

![Konfigurácia > Komunikácia: karta Externé sprievodné (Companion) aplikácie](../images/v4/Configuration/configuration_external_companion_apps.png)

Sprievodné aplikácie, o ktorých vieme, že toto vysielanie používajú:

- [WatchDrip+](https://bigdigital.home.blog/) pre hodinky Xiaomi a Amazfit, pozrite [Hodinky Xiaomi a Amazfit](#watches-xiaomi-amazfit) nižšie.
- [GlucoDataHandler](https://github.com/pachi81/GlucoDataHandler) pre hodinky s Wear OS, ako komplikácia alebo widget. Je to užitočná záloha vo verziách Wear OS, kde ciferníky **AAPS** nefungujú spoľahlivo, pozrite [Nastavenie AAPS na hodinkách s Wear OS](../WearOS/WearOsSmartwatch.md). Jeho sprievodná aplikácia GlucoDataAuto zobrazuje rovnaké dáta v aute s Android Auto.
- [Aplikácia G-Watch](https://play.google.com/store/apps/details?id=sk.trupici.g_watch) pre hodinky Samsung Tizen a jej neskoršia verzia pre Wear OS. V starších verziách **AAPS** sa plugin podľa tejto aplikácie volal **Samsung Tizen**.

```{warning}
**Aplikácia G-Watch** a jej verzia pre **Wear OS** sa už neudržiavajú a Samsung presunul svoje inteligentné hodinky z Tizen na Wear OS. G-Watch má význam iba pre existujúce staršie nastavenia a pre novú inštaláciu sa neodporúča. Najnovšie správy nájdete v samostatnej [skupine na Facebooku](https://www.facebook.com/groups/gwatchapp).
```

(Watchfaces-garmin)=

## Garmin

V obchode Garmin ConnectIQ sú ciferníky pre Garmin, ktoré sa prepájajú s [AAPS](https://apps.garmin.com/search?keywords=androidaps).

![Konfigurácia > Komunikácia: karta Garmin](../images/v4/Configuration/configuration_garmin.png)

Ciferník [AAPS Glucose Watch](https://apps.garmin.com/apps/3d163641-8b13-456e-84c3-470ecd781fb1) sa priamo prepája s **AAPS**. Okrem hodnôt glykémie zobrazuje údaje o stave okruhu (aktívny inzulín, dočasný bazál) a odosiela údaje o srdcovej frekvencii do **AAPS**. Je dostupný v obchode ConnectIQ; zapnite plugin **Garmin** v **Konfigurácia → Komunikácia**. ![Ciferník AAPS Glucose Watch s očíslovanými poľami](../images/Garmin_WF-annotated.png)

1. Najvyššia a najnižšia hodnota glykémie v grafe
2. Zmena glykémie za minútu
3. Aktívny inzulín (IOB)
4. Čas od poslednej hodnoty glykémie (minúty:sekundy)
5. Dočasný bazál v percentách bazálnej dávky z profilu
6. Graf glykémie za posledné 2 hodiny
7. Aktuálna hodnota glykémie



## Fitbit

```{warning}
Google presúva Fitbit do Google Health a z hodiniek Fitbit v EÚ odstraňuje aplikácie a ciferníky tretích strán. Ciferníky Fitbit preto **už nie sú odporúčanou možnosťou** a kúpa hodiniek Fitbit na použitie s **AAPS** sa neodporúča.
```

Pre existujúce hodinky Fitbit uvádzajú [stránky Nightscout](https://nightscout.github.io/nightscout/wearable/#fitbit) niekoľko možností iba na sledovanie, napríklad [Glance](https://glancewatchface.com/). Aj to sú ciferníky tretích strán, takže platí rovnaké obmedzenie v EÚ.

## Iba sledovanie

Tieto inteligentné hodinky budú zobrazovať niektoré informácie z **AAPS**, niektoré budú vyžadovať iné aplikácie.

Existuje široká škála cenovo dostupných inteligentných hodiniek, ktoré môžu slúžiť len na zobrazenie údajov. Ak používate Nightscout, prehľad všetkých možností nájdete [tu](https://nightscout.github.io/nightscout/wearable/#)

Nižšie sú uvedené niektoré z možností hodiniek určených iba na sledovanie, ktoré sú obľúbené u používateľov **AAPS**:

(watches-xiaomi-amazfit)=
### Hodinky Xiaomi a Amazfit

**WatchDrip+** je sprievodná aplikácia vyvinutá komunitou, ktorá zobrazuje glykémiu a dáta okruhu na rôznych modeloch inteligentných hodiniek, hlavne značiek Xiaomi (_napr._ Mi Band) a Amazfit:

![obrázok](../images/4dba454b-f808-4e9e-bfc6-aba698e006f8.png)

Od verzie 0.5 číta **WatchDrip+** dáta priamo z **AAPS**, bez xDrip+ ako sprostredkovateľa. V telefóne s **AAPS**:

1. Zapnite **Externé sprievodné (Companion) aplikácie** v **Konfigurácia** > **Komunikácia**, pozrite [vyššie](#watches-external-companion-apps). Poskytuje aktuálnu glykémiu, deltu, šípku trendu, IOB a stav pumpy.
2. Zapnite plugin **xDrip** v **Konfigurácia** > **Komunikácia** a v jeho nastaveniach zapnite **Odosielať stav do xDrip+**. Poskytuje riadok so stavom IOB/COB a graf glykémie na hodinkách sa doplní po niekoľkých hodnotách.
3. Ak je v telefóne nainštalovaný xDrip+, vypnite v ňom **Broadcast Service API** (xDrip+ > Settings > Inter-app settings), aby hodinky nedostávali dáta dvakrát. Ak xDrip+ iba posielal dáta do hodiniek, môžete ho odinštalovať.

Tlačidlo obnovenia vo WatchDrip+ nemá pri **AAPS** žiadny účinok: dáta prichádzajú s každou novou hodnotou.


Viac o nich, vrátane ich nastavenia, si môžete prečítať na [webovej stránke WatchDrip+](https://bigdigital.home.blog/). Výhodou týchto hodiniek je, že sú malé a relatívne cenovo dostupné. Sú obľúbenou voľbou najmä pre deti a osoby s menšími zápästiami.

### Pebble hodinky

![obrázok](../images/52032f3b-c871-4342-b8e7-659c285a39c8.png)

![obrázok](../images/935d28bb-a909-4ca8-850d-6a765bd4fcde.png)


Hodinky Pebble ([už sa nevyrábajú](https://en.wikipedia.org/wiki/Pebble_(watch))) boli v bežnom predaji v rokoch 2013 až 2016 a stále môžu byť dostupné z druhej ruky. Fitbit prevzal majetok spoločnosti Pebble. Používatelia Pebble môžu na zobrazenie údajov Nightscout použiť ciferník Urchin. Medzi zobrazené možnosti údajov patrí IOB, aktívny dočasný bazál a predikcie. Pri otvorenom okruhu môžete pomocou IFTTT vytvoriť applet, ktorý po prijatí notifikácie z **AAPS** odošle SMS alebo notifikáciu cez Pushover.

### [Hodinky Bluejay](https://bluejay.website/)


![Hodinky BlueJay U3](../images/watches/bluejay_u3.png)


Ide o unikátne technológie, ktoré dokážu prijímať údaje o glykémii **priamo** z vysielača Dexcom. Málokto vie, že vysielače Dexcom G6/G7 v skutočnosti vysielajú aktuálne dáta glykémie na _dvoch_ samostatných kanáloch: na kanáli pre telefón a na zdravotníckom kanáli. Hodinky Bluejay sa dajú nastaviť na príjem dát glykémie z ktoréhokoľvek kanála, takže ak **AAPS** používa kanál pre telefón, hodinky Bluejay môžu používať zdravotnícky kanál.

Hlavnou výhodou je, že hodinky sú nezávislé od telefónu aj od systému okruhu. Takže napríklad, ak odpojíte pumpu a telefón **AAPS** na pláži alebo v zábavnom parku a ste mimo dosahu telefónu **AAPS**, stále môžete získavať údaje z vášho Dexcomu priamo do hodiniek Bluejay.

Pôvodné hodinky **Bluejay GTS** sa už nevyrábajú a Dexcom G7 čítať nedokážu. Neskoršie modely (U1, potom súčasné **U3**, v čase písania predávané v predbežnom prístupe) sú plnohodnotné hodinky s Androidom s aplikáciou xDrip, ktoré zbierajú dáta priamo z Dexcom G6 a G7. Výrobca opisuje hodinky ako výskumný nástroj, nie na zdravotnícke použitie. Uvádzané nevýhody sú, že nie vždy zachytia hodnotu každých 5 minút a že batériu treba často nabíjať. Aktuálny model a dostupnosť nájdete na [webovej stránke Bluejay](https://bluejay.website/).

### Apple hodinky

Pozrite si údaje z [Nightscout na hodinkách](https://nightscout.github.io/nightscout/wearable/#).

Hodinky Apple Watch teraz podporujú priame pripojenie G7 a možno ich používať súčasne s **AAPS**.

