# Vzdialené sledovanie

![Sledovanie detí](../images/KidsMonitoring.png)

__AAPS__ ponúka niekoľko funkcií na vzdialené sledovanie detí s diabetom 1. typu a umožňuje aj vzdialené príkazy, ktoré posielajú pokyny do __AAPS__ na diaľku. Podobne sa dá __AAPSClient__ použiť aj na vzdialené sledovanie __AAPS__ vášho partnera alebo priateľa.

## Funkcie

- Pumpu dieťaťa ovláda telefón dieťaťa s __AAPS__.
- Opatrovatelia môžu na diaľku sledovať všetky dôležité dáta, ako je glykémia, aktívne sacharidy, aktívny inzulín atď., pomocou **AAPSClient apk** vo svojom telefóne s Androidom (verzia **AAPSClient** pre iPhone sa vyvíja, pozrite [AAPSClient](AapsClient.md)). Nastavenia zmenené v __AAPS__ sa synchronizujú s __AAPSClient__ a naopak.
- Opatrovateľov môže upozorňovať **aplikácia xDrip v režime sledovania (follower)** v ich telefóne s Androidom, ak je nastavený režim xDrip companion.
- Vzdialené ovládanie __AAPS__ pomocou [SMS príkazov](../RemoteFeatures/SMSCommands.md) je zabezpečené dvojfaktorovým overením.
- Vzdialené ovládanie cez __AAPSClient__ používa kanál podpísaných príkazov, ktorý priniesol **AAPS** 4: klient musí byť najprv **spárovaný** s hlavným zariadením (pomocou QR kódu alebo PIN kódu) a každý príkaz potvrdí a vykoná hlavné zariadenie. Telefón každého opatrovateľa môže dostať vlastnú [rolu](#client-master-control-roles), od režimu iba na čítanie po plné ovládanie — pozrite [Ovládanie Master ↔ Client](#client-master-control).

## Nástroje a aplikácie na vzdialené sledovanie

- [Nightscout](https://nightscout.github.io/) vo webovom prehliadači (hlavne zobrazenie dát).
- [__AAPSClient__](AapsClient.md) je zjednodušená verzia __AAPS__, ktorá dokáže sledovať hlavné zariadenie s __AAPS__ a po **spárovaní** posielať vzdialené príkazy: sacharidy, __Dočasné ciele__, __Prepnutia profilu__ a dokonca aj bolusy (pozrite [Ovládanie Master ↔ Client](#client-master-control)). Existujú 3 aplikácie: [AAPSClient, AAPSClient2 a AAPSClient3 na stiahnutie](https://github.com/nightscout/AndroidAPS/releases/), takže opatrovateľ môže z jedného telefónu sledovať až troch rôznych ľudí (napr. dve deti s diabetom 1. typu, každé s vlastným účtom Nightscout a vlastným hlavným zariadením s __AAPS__).
- Sledovanie v Dexcome (Dexcom follow), ak používate originálnu aplikáciu Dexcom (iba hodnoty glykémie).
- [xDrip](../CompatibleCgms/xDrip.md) v režime sledovania (hlavne hodnoty glykémie a **alarmy**).
- [Sugarmate](https://sugarmate.io/) alebo [Spike](https://spike-app.com/) v iOS (hlavne hodnoty glykémie a **alarmy**).
- Niektorým používateľom pri pokročilom riešení problémov na diaľku pomáha nástroj na úplný vzdialený prístup, napríklad [TeamViewer](https://www.teamviewer.com/).

## Možnosti s inteligentnými hodinkami

Inteligentné hodinky môžu byť veľmi užitočným pomocníkom pri používaní __AAPS__ u detí s diabetom 1. typu. Existuje niekoľko možností:

- Možnosť 1 - Ak je __AAPSClient__ nainštalovaný v telefóne opatrovateľa, môžete [aplikáciu AAPSClient pre WearOS](https://github.com/nightscout/AndroidAPS/releases/) nainštalovať do kompatibilných inteligentných hodiniek pripojených k telefónu opatrovateľa. Hodinky zobrazia aktuálnu __glykémiu__, stav okruhu a históriu bolusov a umožnia zadať sacharidy a zmeniť __Dočasné ciele__ a __Profil__. Ak je klient **spárovaný** s hlavným zariadením, hodinky môžu spustiť aj **bolus**: príkaz ide cez klienta na hlavné zariadenie, ktoré ho potvrdí a podá (pozrite [Ovládanie Master ↔ Client](#client-master-control)).
- Možnosť 2 - [Aplikáciu AAPS pre WearOS](../WearOS/WearOsSmartwatch.md) môžete tiež zostaviť a nainštalovať do kompatibilných inteligentných hodiniek, ktoré sú pripojené k telefónu dieťaťa, ale nosí ich opatrovateľ. Zahŕňa to všetky vyššie uvedené funkcie a navyše možnosť podať bolus inzulínu priamo, bez toho, aby ste museli dieťaťu brať telefón.
- Možnosť 3 - Iba zobrazenie: hodinky, ktoré **AAPS** priamo nepodporuje (Xiaomi, Amazfit alebo hodinky s Wear OS, ktoré ukazujú komplikáciu), môžu zobrazovať glykémiu, IOB, COB a stav okruhu cez sprievodnú aplikáciu, napríklad WatchDrip+ alebo GlucoDataHandler, ktorú napája plugin **Externé sprievodné (Companion) aplikácie** v telefóne s **AAPS** alebo **AAPSClient**, ku ktorému sú hodinky pripojené. Pozrite [Externé sprievodné (Companion) aplikácie](#watches-external-companion-apps).

## Veci, ktoré treba zvážiť

- Myslite na časový posun medzi hlavným zariadením a sledujúcim, ktorý vzniká pri nahrávaní a sťahovaní dát, a aj na to, že hlavný telefón s __AAPS__ nahráva dáta až po behu okruhu.
- Aký máte núdzový plán pre prípad, že vzdialené ovládanie nefunguje (_napr._ problémy so sieťou alebo stratené spojenie Bluetooth)? Vždy myslite na to, čo sa stane s **AAPS**, ak zrazu nebudete môcť poslať nový príkaz. **AAPS** prepíše bazál, ISF a ICR v pumpe hodnotami z aktuálneho profilu. Ak prepínate na silnejší inzulínový profil, používajte iba dočasné prepnutia profilu (_t. j._ s nastaveným trvaním) pre prípad, že sa vzdialené spojenie preruší. Pumpa sa potom po uplynutí času vráti k pôvodnému profilu.
