# Sledovanie AAPS (bez zasahovania do systému AAPS)

Okrem množstva možností na vzdialené ovládanie _a_ sledovanie **AAPS**, ktoré sú opísané v časti [vzdialené ovládanie](../RemoteFeatures/RemoteControl.md), existuje niekoľko ďalších aplikácií a zariadení, ktoré vytvorila komunita na jednoduché sledovanie hodnôt (glykémie a ďalších údajov) bez zasahovania do **AAPS**.

Dobrý prehľad mnohých možností sledovania **AAPS** nájdete na webovej stránke [Nightscout follower](https://nightscout.github.io/nightscout/downloaders/#).

```{contents} Table of contents
:depth: 1
:local: true
```

Najčastejšie spôsoby, ktoré sa používajú spolu s **AAPS**, sú podrobnejšie vysvetlené nižšie.

## Aplikácie pre smartfóny

```{contents} These are some of the main “follower” apps used by **AAPS** users. All of these apps are “free”: 
:depth: 1
:local: true
```

### Dexcom Follow ([Android](https://play.google.com/store/apps/details?id=com.dexcom.follow.region2.mgdl) a [iOS](https://apps.apple.com/fr/app/dexcom-follow-mg-dl-dxcm2/id1032203080))

![obrázok](../images/ded350b0-6012-4104-b21c-5d5bfd91aa65.png)

* Dexcom Follow funguje na veľkom množstve telefónov (Android aj iPhone). Dexcom Follow môžete používať, aj keď na príjem dát zo senzora nepoužívate oficiálnu aplikáciu Dexcom.

* Mnohí opatrovatelia poznajú Dexcom Follow a uprednostňujú jeho prehľadné rozhranie pred niečím zložitejším.

* Dexcom Follow je veľmi dobrý pre učiteľov, starých rodičov a ľudí, ktorí o diabete a glykémii vedia veľmi málo. Má nastaviteľné upozornenia (hodnota glykémie, aký zvuk sa prehrá atď.). Alarmy sa dajú v prípade potreby úplne vypnúť, čo je veľmi užitočné, ak máte senzor, ktorý sa ešte ustáľuje a hlási viacero falošných nízkych hodnôt.

#### Nastavenie Dexcom Follow: návod

Ak na príjem dát zo senzora používate neoficiálnu aplikáciu Dexcom BYODA, možno budete môcť posielať pozvánky sledujúcim priamo z aplikácie BYODA.

Z aplikácií tretích strán už nie je možné posielať e-maily s pozvánkou sledujúcim Dexcom. V xDripe žiadosť o pozvánku skončí iba správou „invite not sent“ (pozvánka nebola odoslaná).

Musíte nainštalovať oficiálnu aplikáciu Dexcom, poslať pozvánku a potom oficiálnu aplikáciu odinštalovať.

Postup je nasledovný:

1)  Nainštalujte oficiálnu aplikáciu „Dexcom“ do _ľubovoľného_ smartfónu (Android/iPhone); môže to byť aj telefón sledujúceho, ak je to pohodlnejšie. 2)  Prihláste sa svojím používateľským menom a heslom Dexcom; sú to rovnaké prihlasovacie údaje, aké používate pre Dexcom Clarity, ak už ste zákazníkom Dexcom/Clarity. Ak nemáte prihlasovacie údaje Dexcom, v tomto kroku si môžete vytvoriť nové.   
3)  Prejdite úvodnými obrazovkami. 4)  Ako kód senzora zadajte „no code“ (bez kódu). 5)  V časti Transmitter SN (sériové číslo vysielača) vyberte „enter manually“ (zadať ručne) a zadajte ľubovoľný platný kód vysielača (ak nejaký poznáte, použite kód niektorého z vašich starých vysielačov, aby to nerušilo prácu vášho aktuálneho vysielača; kódy majú pevný formát čísel a písmen: „NLNNNL“ a platia iba určité kombinácie, preto je najjednoduchšie použiť kód, o ktorom už viete, že je platný). 6)  Keď sa aplikácia pokúša nájsť vysielač a senzor, budete môcť pozvať sledujúcich: vyberte tri malé bodky vľavo hore v aplikácii a pridajte nového sledujúceho. Môžete to použiť aj vtedy, keď si niektorý zo sledujúcich vymenil telefón a potrebuje nové pozvanie: tu ho môžete odstrániť zo zoznamu sledujúcich a poslať mu nový e-mail s pozvánkou, ktorý použije v novom telefóne. 7)  V telefóne sledujúceho nainštalujte Dexcom Follow z App Store (iPhone) alebo z Google Play (Android). Nastavte aplikáciu Dexcom Follow; vyzve vás, aby ste otvorili e-mail a našli v ňom pozvánku na sledovanie.    
8)  Teraz môžete oficiálnu aplikáciu Dexcom G6 odinštalovať.

Pre Dexcom Follow sa potom dáta zo senzora exportujú z telefónu s **AAPS** buď priamo z BYODA, alebo z xDripu, podľa toho, ktorú aplikáciu používate.


### [Nightguard](https://apps.apple.com/fr/app/nightguard/id1116430352) (iOS)

![obrázok](../images/f2c7d330-9889-4526-9a5c-bbb012d804ab.png)

Výhody (podľa skúseností používateľov):

* Dostupný v [App Store](https://apps.apple.com/us/app/nightguard/id1116430352), jednoduché a používateľsky prívetivé rozhranie.

* Potiahnutím tlačidla alebo zatrasením telefónom môžete alarmy odložiť na rôzne dlhý čas od 5 min do 24 hodín

* Nastaviteľné alarmy (vysoká, nízka glykémia, chýbajúce hodnoty, keď 15–45 minút neprichádzajú dáta).

* Rýchly nárast/pokles počas 2–5 po sebe idúcich hodnôt (podľa vašej voľby). Dá sa nastaviť aj rozdiel medzi dvoma jednotlivými hodnotami

* Inteligentné odloženie, takže neupozorňuje, ak sa hodnoty menia správnym smerom

* Je tu karta Care, ktorá zrejme umožňuje nastaviť nový dočasný cieľ na určitý čas, zmazať dočasný cieľ alebo zadať sacharidy.

Nevýhody (podľa skúseností používateľov)

* Dostupný iba pre iOS

* DC sa zobrazuje ako 5 mmol bez ohľadu na to, aká hodnota DC je nastavená

* Nikdy nezobrazuje hodnotu dočasného bazálu, hoci ukazuje TB

### [Nightwatch](https://play.google.com/store/apps/details?id=se.cornixit.nightwatch) (Android)

![obrázok](../images/855c3a74-e612-4a6f-8b63-18d286ea0a3f.png)


* Nightwatch sa predstavuje ako klient Nightscoutu a sleduje hodnoty glykémie používateľa v Nightscoute v telefóne alebo tablete s Androidom.

* Aplikáciu si môžete stiahnuť z [Google Play](https://play.google.com/store/apps/details?id=se.cornixit.nightwatch) a zobrazuje dáta glykémie v reálnom čase.

* Používateľa môžu upozorňovať nastaviteľné hlasné alarmy pri nízkej a vysokej glykémii.

* Dáta glykémie sa dajú zobraziť v mmol/l alebo mg/dl.

* Vyžaduje Android 5.0 alebo novší.

* It has a dark UI, large readings and buttons, designed for usage at night.

### xDrip (Android)

xDrip môžete používať na sledovanie.

#### S Nightscoutom

Nastavte xDrip ako sledujúceho Nightscoutu (Nightscout Follower). Dostanete glykémiu a ošetrenia, nie bazál.

![obrázok](../images/remote_control_and_following/xDrip+_Nightscout_Follower.png)

#### Bez Nightscoutu - xDrip ako zdroj glykémie

Ak je vaším zdrojom dát v **AAPS** xDrip (alebo ak xDrip môže prijímať glykémiu aj z inej aplikácie, napríklad BYODA, Juggluco, ...), môžete ho z hlavného telefónu použiť na zdieľanie dát so sledujúcimi v xDripe a zobrazovať glykémiu, ošetrenia a bazálne dávky.

![obrázok](../images/remote_control_and_following/xDrip+_Master_Sync.png)

#### Bez Nightscoutu - xDrip so zdrojom glykémie Companion App

Ak vaším zdrojom dát v **AAPS** nie je xDrip, ale v xDripe môžete zobrazovať glykémiu zo zdroja dát Companion App, môžete ho z hlavného telefónu použiť na zdieľanie dát so sledujúcimi v xDripe a zobrazovať glykémiu, ošetrenia a bazálne dávky.

![obrázok](../images/remote_control_and_following/xDrip+_Companion_Sync.png)

### xDrip4iOS (iOS)

![obrázok](../images/remote_control_and_following/xdrip4ios.jpg)

xDripSwift vznikol prenesením pôvodnej aplikácie xDrip do iOS a vyvinul sa na „xDrip for iOS“, písané **xDrip4iOS** .

```{admonition} Further detail about how to attempt to obtain the original **xDrip4iOS** app
:class: dropdown
[Skupina xDrip4iOS na Facebooku](https://www.facebook.com/groups/853994615056838/announcements) je hlavnou komunitnou podporou pre xDrip4iOS a Shuggah. **xDrip4iOS** sa dokáže pripojiť k mnohým rôznym systémom CGM a vysielačom, zobrazovať hodnoty glykémie, grafy a štatistiky a tiež spúšťať alarmy. Dokáže tiež nahrávať do Nightscoutu alebo fungovať ako [aplikácia na sledovanie Nightscoutu](https://xdrip4ios.readthedocs.io/en/latest/connect/follower/). 

„Ako dostanem **xDrip4iOS** do svojho iPhonu?“
Sú dve možnosti:

1. Ak máte Mac a účet Apple Developer (99 EUR/USD ročne), môžete si xDrip4iOS zostaviť sami [podľa návodu](https://xdrip4ios.readthedocs.io/en/latest/install/build/).

Ak chcete, môžete sa potom stať „releaserom“ (vydavateľom) a [zdieľať osobný Testflight xDrip4iOS](https://xdrip4ios.readthedocs.io/en/latest/install/personal_testflight/) až so 100 ďalšími ľuďmi a pomôcť im.

2. Pridajte sa do [skupiny xDrip4iOS na Facebooku](https://www.facebook.com/groups/853994615056838/announcements) a v pripnutých príspevkoch si prečítajte aktuálne spôsoby, ako aplikáciu získať. **Nežiadajte o pozvánku do aplikácie** (prečítajte si pravidlá skupiny).
```



![obrázok](../images/fae3ec63-2c2c-4152-ab42-97f9744a8f36.png)

„Čo je **Shuggah**?“ Skupina ukrajinských vývojárov skopírovala kód projektu xDrip4iOS (ktorý je verejne zdieľaný na GitHube) a vydala ho v App Store pod firemným účtom. Vydanie Shuggah vývojári xDrip4iOS nijako nespravujú.

[Skupina xDrip4iOS na Facebooku](https://www.facebook.com/groups/853994615056838/announcements) podporuje xDrip4iOS a príslušné aplikácie pre Apple Watch.

### [Sugarmate](https://apps.apple.com/fr/app/sugarmate/id1111093108) (iOS)

![obrázok](../images/340cd555-a9e0-4a20-a131-36c078f5b8ea.png)

![obrázok](../images/21b83c41-85c6-4619-a702-a65450768855.png)


[Sugarmate](https://sugarmate.io/) si môžete stiahnuť do iPhonu z App Store. Sugarmate funguje na:
* Apple iPhone (vyžaduje verziu softvéru 13.0 alebo novšiu)
* Apple iPad (vyžaduje verziu softvéru 13.0 alebo novšiu)
* Google Android (webovú aplikáciu si uložte na domovskú obrazovku)

Používatelia Sugarmate uvádzajú, že v USA sa dá použiť s Apple CarPlay na zobrazenie glykémie počas jazdy. Zatiaľ nie je overené, či je to možné aj v krajinách mimo USA. Ak o tom viete viac, doplňte prosím podrobnosti do dokumentácie pomocou pull requestu (odkaz), je to rýchle a jednoduché.


### [Spike](https://spike-app.com/) (iOS)

![obrázok](../images/1129ba00-8159-4940-936e-76fd4ae45a2d.png)

Spike sa dá použiť ako hlavný prijímač alebo ako aplikácia na sledovanie; poskytuje glykémiu, alarmy, IOB a ďalšie.

Webová stránka a aplikácia sa už ďalej nevyvíjajú. Podporu nájdete na [Facebooku](https://www.facebook.com/groups/1973791946274873) a [Gitteri](https://gitter.im/SpikeiOS/Lobby).

## Inteligentné hodinky na **sledovanie AAPS** (úplné dáta profilu alebo iba glykémia), keď **AAPS** beží v telefóne.

Pozrite [tu](../Getting-Started/Watches.md).


## Zariadenia na sledovanie AAPS

```{contents} Devices include:
:depth: 1
:local: true
```

### M5 stack

![obrázok](../images/061edb52-56d2-45f4-b3da-82b2036d7bc6.png)

M5Stack je malá krabička, ktorú je možné naprogramovať na mnoho účelov; Martinov projekt [M5Stack NightscoutMon](https://github.com/mlukasek/M5_NightscoutMon/wiki) zobrazuje hodnoty glykémie zo senzora a trendy, IOB a COB. Je v plastovej krabičke a má farebný displej, slot na kartu micro SD, 3 tlačidlá, reproduktor a vnútornú batériu. Je to výborný monitor glykémie a ak máte účet Nightscout, nastavuje sa pomerne jednoducho. Používatelia ho zvyčajne používajú na domácej Wi-Fi, ale niektorí ho používajú ako displej pri jazde na motorke, keď beží cez Wi-Fi hotspot z telefónu.

### Sugarpixel

SugarPixel je zariadenie na doplnkové zobrazenie glykémie a upozornenia pri kontinuálnom monitorovaní glukózy, ktoré sa pripája k aplikácii Dexcom alebo Nightscout v smartfóne používateľa. Zariadenie zobrazuje hodnoty glykémie v reálnom čase. Tento hardvérový monitor CGM má zvukové upozornenia s náhodne generovanými tónmi (ktoré sú veľmi hlasné), upozornenia vibráciou pre sluchovo postihnutých, nastaviteľné možnosti zobrazenia a priamo podporuje sledovanie viacerých používateľov.

![obrázok](../images/39137beb-17cc-4c87-98b7-cf1831d484cb.png)

![obrázok](../images/87883ebb-9683-4aa8-8014-49c2ca902c93.png)

* SugarPixel má viacero možností zobrazenia v mg/dl a mmol/l, aby vyhovel potrebám používateľa, s farebne odlíšenými hodnotami glykémie.
* Štandardný ciferník zobrazuje glykémiu, šípku trendu a rozdiel (delta). Rozdiel (delta) je zmena + alebo - od poslednej hodnoty.
* SugarPixel sa dá nastaviť na používanie pri slabom jase s ciferníkom BG and Time (glykémia a čas), aby používateľ na nočnom stolíku videl svoju glykémiu a aktuálny čas.
* Farebný ciferník SugarPixel využíva celý displej na zobrazenie jednej farby, ktorá predstavuje hodnotu glykémie. Používateľ tak môže vidieť hodnoty glykémie na diaľku cez okno, keď sa hrá vonku na dvore, na terase alebo pri bazéne.
* Ciferník Big BG (veľká glykémia) je užitočný pre ľudí, ktorí ho majú na nočnom stolíku a nosia okuliare alebo kontaktné šošovky.

### Nightscout Clock na Ulanzi TC001

**Nightscout Clock** je softvér s otvoreným zdrojovým kódom, ktorý beží na zariadení **Ulanzi TC001**. Pripája sa k serverom Dexcom alebo k Nightscoutu a zobrazuje hodnoty glykémie v reálnom čase.

![Sledovanie pomocou Nightscout Clock](../images/FollowingNightscoutClock.png)

* Hodiny podporujú jednotky mmol/l aj mg/dl a majú zvukové alarmy.
* Several displays are available, see [Github nightscout-clock](https://github.com/ktomy/nightscout-clock?tab=readme-ov-file#more-information-for-people-who-needs-it) for an overview.
* Nastavenie a konfigurácia zariadenia má iba niekoľko jednoduchých krokov. Po nastavení potrebuje na fungovanie iba napájanie a Wi-Fi.
* Zariadenie Ulanzi TC001 je výrazne lacnejšie ako SugarPixel.
* Softvér aj návod na inštaláciu nájdete na [Github nightscout-clock](https://github.com/ktomy/nightscout-clock?tab=readme-ov-file).
* Vyvíja a spravuje ho Artiom Kenibasov, ktorý poskytuje podporu v [skupine Facebook AAPS Users](https://www.facebook.com/groups/cgminthecloud/posts/8776932509094594/).

### PC (TeamViewer)
Niektorým používateľom pri pokročilom riešení problémov na diaľku pomáha nástroj na úplný vzdialený prístup, napríklad [TeamViewer](https://www.teamviewer.com/).
