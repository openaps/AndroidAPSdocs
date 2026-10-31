# SMS príkazy

```{contents} Table of contents
:depth: 2
```

Väčšinu úprav na diaľku (dočasné ciele, sacharidy, prepnutia profilu a po spárovaní klienta aj bolusy) môžete urobiť pomocou aplikácie [**AAPSClient**](../RemoteFeatures/RemoteMonitoring.md) v telefóne s Androidom a pripojením na internet, pozrite [Ovládanie Master ↔ Client](#client-master-control) (verzia **AAPSClient** pre iPhone sa vyvíja, pozrite [AAPSClient](AapsClient.md)). SMS príkazy zostávajú alternatívou, ktorá funguje bez internetu, a jedinou možnosťou na diaľku, ak ako sledujúci používate iPhone a ešte nemáte **AAPSClient**.

**SMS príkazy sú veľmi užitočné:**
1. Na bežné ovládanie na diaľku

2. Ak chcete podať bolus inzulínu na diaľku bez spárovaného **AAPSClient**

3. V oblasti so slabým pripojením na internet, kde SMS správy prejdú, ale dátové/internetové pripojenie telefónu je obmedzené. Je to veľmi užitočné pri cestách do odľahlých oblastí (napr. kempovanie, lyžovanie).

4. Ak váš iný spôsob ovládania na diaľku (**AAPSClient**) dočasne nefunguje

## Bezpečnosť na prvom mieste

Ak povolíte **SMS komunikátor** v **AAPS**, myslite na to, že telefón nastavený na posielanie príkazov na diaľku môže niekto ukradnúť alebo ho môže použiť niekto iný. Telefón vždy zamknite aspoň kódom PIN. Dôrazne odporúčame silné heslo a/alebo biometrický zámok. Uistite sa, že sa líši od vášho hlavného hesla APK (heslo, ktoré je potrebné na export nastavení **AAPS**).

Ďalej odporúčame povoliť pre SMS príkazy aj [druhé telefónne číslo](#SMSCommands-authorized-phone-numbers). Takto môžete druhým číslom [vypnúť](#SMSCommands-other) SMS komunikátor, ak by bol váš hlavný telefón na ovládanie na diaľku zneužitý.

Predvolený minimálny čas medzi príkazmi na bolus je 15 minút. Z bezpečnostných dôvodov musíte pridať aspoň dve povolené telefónne čísla, aby ste mohli tento čas skrátiť. Ak sa pokúsite znova podať bolus na diaľku do 15 minút od predchádzajúceho bolusu, dostanete odpoveď „Diaľkovo ovládaný bolus nie je momentálne povolený. Skúste to neskôr.“

AAPS vás tiež SMS správou informuje, či boli vaše príkazy na diaľku, napríklad bolus alebo zmena profilu, vykonané. Je vhodné nastaviť to tak, aby sa potvrdzovacie SMS posielali aspoň na dve rôzne telefónne čísla pre prípad, že by niekto ukradol jeden z prijímajúcich telefónov.

**Ak podávate bolus cez SMS príkazy, sacharidy musíte zadať samostatne (druhou SMS, **AAPSClient**...)!** Ak to neurobíte, IOB bude správny, ale COB príliš nízky. To môže viesť k tomu, že sa nepodá korekčný bolus, pretože **AAPS** predpokladá, že máte príliš veľa aktívneho inzulínu.

Pri citlivých príkazoch sa na zvýšenie bezpečnosti musí použiť aplikácia Authenticator s časovo obmedzeným jednorazovým heslom.

Ak chcete telefónu opatrovateľa odobrať možnosť posielať SMS príkazy, použite v **AAPS** núdzové tlačidlo „[Resetovať autentifikátory](#sms-commands-authenticator-setup)“ alebo pošlite SMS príkaz „[SMS stop](#SMSCommands-other)“. Resetovaním autentifikátorov urobíte VŠETKY telefóny opatrovateľov neplatnými. Budete ich musieť nastaviť znova.

## Nastavenie SMS príkazov

```{contents} The overall process is as follows
:depth: 1
:local: true
```

(sms-commands-authenticator-setup)=
### Nastavenie autentifikátora

Na zvýšenie bezpečnosti sa používa dvojfaktorové overenie.

Na telefón opatrovateľa stiahnite (z App Store alebo Google Play) a nainštalujte aplikáciu Authenticator. Obľúbené bezplatné aplikácie sú:
  - [Authy](https://authy.com/download/)
  - Google Authenticator - [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) / [iOS](https://apps.apple.com/de/app/google-authenticator/id388497605)
  - [LastPass Authenticator](https://lastpass.com/auth/)
  - [FreeOTP Authenticator](https://freeotp.github.io/)

Tieto aplikácie Authenticator vytvárajú časovo obmedzené jednorazové 6-miestne heslo, podobne ako pri mobilnom bankovníctve alebo nakupovaní. Môžete použiť aj inú aplikáciu Authenticator, ak podporuje tokeny TOTP podľa RFC 6238. Microsoft Authenticator nefunguje.

### Kontrola nastavení telefónu

V telefóne prejdite do **Aplikácie > AAPS > Povolenia** (Permissions). Uistite sa, že **SMS** a **Telefón** (Phone) sú povolené.

![obrázok](../images/remote-control-08.png)

```{admonition} "App was denied access to SMS"
:class: tip
Android môže blokovať povolenie **SMS** pre aplikácie, ktoré neboli nainštalované z obchodu s aplikáciami, ako je **AAPS**. Ak sa vám pri udeľovaní povolenia **SMS** zobrazí táto správa, otvorte v telefóne **Nastavenia > Aplikácie > AAPS**, ťuknite na ponuku **⋮** (vpravo hore) a vyberte **Povoliť obmedzené nastavenia** (Allow restricted settings). Potom povolenie **SMS** udeľte znova.
```

![Aplikácii bol zamietnutý prístup k SMS](../images/sms_permission_restricted.png)

### Synchronizácia dátumu a času

Čas na oboch telefónoch musí byť synchronizovaný. Najlepšie je nastaviť ho automaticky zo siete. Rozdiely v čase môžu spôsobiť problémy s overením.

Na telefóne s **AAPS** aj na telefóne opatrovateľa skontrolujte, či sú dátum a čas synchronizované. Presný postup závisí od vášho zariadenia, možno budete musieť vyskúšať rôzne nastavenia.

Príklad (pre Samsung S23): **Nastavenia > Všeobecná správa > Dátum a čas** (Date and time): uistite sa, že je zapnutá možnosť **Automatický dátum a čas** (Automatic date and time).

Niektoré možnosti môžu byť sivé (neaktívne), pretože ak je telefón nastavený ako detský účet, potrebujú správu cez rodinný účet. Na iPhone opatrovateľa/rodiča sa toto nastavenie dátumu a času volá „Nastaviť automaticky“ (Set automatically). Ak si nie ste istí, či ste telefóny synchronizovali, nebojte sa. SMS príkazy môžete nastaviť a problémy riešiť až potom, ak sa ukáže, že spôsobujú problémy (v prípade potreby požiadajte o pomoc).

### Nastavenia AAPS

Keď ste skontrolovali nastavenia telefónu, v samotnej aplikácii **AAPS** prejdite do [**Konfigurácia** → **Komunikácia**](../SettingUpAaps/ConfigBuilder.md) a povoľte plugin **SMS komunikátor**.

Otvorte nastavenia **SMS komunikátora**.

Zapnite **Povoliť príkazy na diaľku cez SMS**. Možnosti **Ďalší povinný kód PIN na konci tokenu** a **Nastavenie autentifikátora** sa zobrazia až potom, ako to zapnete:

![Nastavenia SMS komunikátora](../images/sms_communicator_settings.png)

(SMSCommands-authorized-phone-numbers)=
#### Povolené telefónne čísla

Zadajte telefónne číslo (čísla) opatrovateľa. Uveďte kód krajiny a vynechajte prvú „0“ telefónneho čísla, ako v týchto príkladoch:
* Telefónne číslo vo Veľkej Británii: +447976304596
* Telefónne číslo v USA: +11234567890
* Telefónne číslo vo Francúzsku:  +33612344567
* _atď._

„+“ pred číslom môže, ale nemusí byť potrebné, podľa toho, kde sa nachádzate. Aby ste to zistili, pošlite skúšobnú SMS. Na obrazovke pluginu **SMS komunikátor** (**Konfigurácia** → **Komunikácia** → **SMS komunikátor** → **Otvoriť plugin**) uvidíte, v akom formáte prišla.

Ak pridávate viac telefónnych čísel, oddeľte ich bodkočiarkami **BEZ medzery medzi číslami** (to je veľmi dôležité!). Vyberte **OK**:

![Povolené telefónne čísla](../images/sms_allowed_numbers.png)

#### Minimálna vzdialenosť pre bolus na diaľku

- Môžete nastaviť minimálny čas (v minútach) medzi dvoma bolusmi poslanými cez SMS.
- Z bezpečnostných dôvodov musíte pridať aspoň dve povolené telefónne čísla, aby ste mohli túto hodnotu upraviť.

#### Ďalší povinný kód PIN na konci tokenu

Z bezpečnostných dôvodov musí za kódom odpovede nasledovať PIN. Zvoľte PIN, ktorý budete vy (a ďalší opatrovatelia) zadávať na konci kódu z aplikácie Authenticator pri posielaní SMS príkazu.

Požiadavky na PIN:

* 3 až 6 číslic
* nie rovnaké číslice (_napr._ 1111 alebo 1224)
* nie čísla za sebou (_napr._ 1234)

![Ďalší povinný kód PIN na konci tokenu](../images/sms_pin.png)

#### Nastavenie autentifikátora

* Ťuknite na **Nastavenie autentifikátora** a postupujte podľa pokynov na obrazovke.
* Otvorte nainštalovanú aplikáciu Authenticator na _telefóne opatrovateľa_, nastavte nové pripojenie a
* Telefónom opatrovateľa naskenujte QR kód, ktorý sa zobrazí pod **Naskenujte kód pre nastavenie AAPS OTP kódov**.

![Nastavenie autentifikátora pomocou QR kódu](../images/sms_authenticator_setup.png)

* V časti **Otestujte jednorázové heslo** zadajte do poľa **Kód pre kontrolu** jednorazový kód z aplikácie Authenticator v telefóne opatrovateľa a za ním váš PIN:

Príklad:
* Token z aplikácie Authenticator je 457051
* Váš povinný PIN je 2401
* Kód pre kontrolu: 4570512401

Ak je zadanie správne, červený text „NESPRÁVNY PIN“ sa automaticky zmení na zelené „OK“. **Nie je tu žiadne tlačidlo, ktoré by ste mali stlačiť!** Proces je hotový, po zadaní kódu nemusíte stlačiť žiadne tlačidlo „OK“:

![Test jednorazového hesla a resetovanie autentifikátorov](../images/sms_authenticator_test.png)

Teraz by ste mali mať SMS príkazy nastavené.

Ak chcete odstrániť nastavené autentifikátory, použite tlačidlo **Resetovať autentifikátory** v dolnej časti obrazovky **Nastavenie autentifikátora**. (Resetovaním autentifikátora urobíte VŠETKY už nastavené autentifikátory neplatnými. Budete ich musieť nastaviť znova.)

## Používanie SMS príkazov

### Prvé kroky s SMS príkazmi

1)  Aby ste overili, že ste všetko nastavili správne, otestujte spojenie: z telefónu opatrovateľa pošlite do telefónu s **AAPS** SMS správu „bg“. Mali by ste dostať odpoveď podobnú tejto:

![obrázok](../images/remote-control-06.png)

Ak nedostanete žiadnu odpoveď, pozrite si časť [Riešenie problémov](#SMSCommands-troubleshooting) nižšie.

2)  Teraz vyskúšajte SMS príkaz, ktorý vyžaduje aplikáciu Authenticator, _napr._ „target hypo“. Telefón opatrovateľa dostane odpoveď s výzvou, aby ste zadali **šesťmiestne heslo** z aplikácie Authenticator a za ním ďalší tajný **PIN**, ktorý poznajú iba opatrovatelia/sledujúci (spolu desať číslic, ak má váš PIN iba 4 číslice).

Keď budete SMS príkaz posielať prvýkrát, skúste to v blízkosti telefónu s **AAPS**, aby ste videli, ako to funguje:

![obrázok](../images/remote-control-16.png)

Telefón opatrovateľa dostane od **AAPS** SMS odpoveď, ktorá potvrdí, či bol SMS príkaz na diaľku úspešne vykonaný.

Ak bol príkaz úspešný, dostanete odpoveď, ktorá to potvrdí. Ak nastane problém, dostanete chybovú správu. Časté chyby nájdete v časti [Riešenie problémov](#SMSCommands-troubleshooting) nižšie.

**Nápoveda**: Ak sa bude posielať veľa SMS, môže byť užitočné mať v mobilnom programe neobmedzené SMS (pre každý používaný telefón).

### Podávanie bolusov k jedlu pomocou SMS príkazov

Bolus inzulínu na diaľku môžete podať cez **SMS príkazy** alebo cez spárovaný **AAPSClient** (pozrite [Ovládanie Master ↔ Client](#client-master-control)); cez webovú stránku Nightscout to nie je možné. Sacharidy môžete zadať aj cez SMS alebo **AAPSClient**. Pomocou SMS nie je možné poslať príkaz na sacharidy aj na inzulín v jednej SMS správe. Tieto príkazy musíte poslať samostatne takto:

1)  Pošlite bolus inzulínu (_napr._ „bolus 2“ podá bolus 2 jednotky). Bolus cez SMS príkazy zodpovedá voľbe **Ošetrenia** → **Inzulín** v **AAPS**. 2)  Pošlite sacharidy (_napr._ „carbs 20“ zadá 20 g sacharidov). Zodpovedá to voľbe **Ošetrenia** → **Sacharidy** v **AAPS**.

Aby ste predišli hypoglykémii, je dobré začať opatrne a podať bolus s **menej inzulínu**, než by zodpovedalo vášmu sacharidovému pomeru, pretože neberiete do úvahy aktuálnu glykémiu ani jej trend.

**Poradie, v akom tieto príkazy pošlete, je dôležité**. Ak akýmkoľvek spôsobom zadáte veľké množstvo sacharidov a máte povolené SMB, **AAPS** môže hneď reagovať a podať časť bolusu inzulínu. Ak potom skúsite poslať bolus inzulínu _po_ zadaní sacharidov, môžete sa stretnúť s nepríjemným oneskorením a so správou „bolus prebieha“ a potom musíte skontrolovať, čo bolo podané ako SMB. Alebo ak si nevšimnete, že sa podáva SMB, a váš vlastný následný bolus je tiež úspešný, môže sa k jedlu celkovo podať príliš veľa inzulínu. Preto pri podávaní bolusov k jedlu na diaľku vždy pošlite bolus inzulínu _pred_ zadaním sacharidov. Ak chcete, môžete **AAPSClient** kombinovať so SMS príkazmi: sacharidy zadané v spárovanom **AAPSClient** nepotrebujú overovací kód, a preto sú rýchlejšie než SMS príkazy. Sacharidy ani iné ošetrenia zadané na webovej stránke Nightscout sa **nepoužijú**, kým je zapnuté ovládanie z klienta; **AAPS** je vtedy v [režime zvýšeného zabezpečenia](#client-master-control-hardened-mode).

(SMSCommands-commands)=
## Príkazy

```{contents} List of command groups
:depth: 1
:local: true
```

Príkazy musíte posielať v angličtine. Odpoveď bude vo vašom jazyku, ak je text odpovede už [preložený](#translations-translate-strings-for-AAPS-app). Na veľkosti písmen v príkazoch nezáleží, môžete použiť malé aj veľké písmená.

![Príklad SMS príkazov](../images/SMSCommands.png)

**Tabuľky SMS príkazov** nižšie ukazujú všetky možné SMS príkazy. Pre lepšie pochopenie sú uvedené _príkladové hodnoty_. Príkazy majú rovnaký rozsah možných hodnôt (ciele, percento profilu atď.), aký je povolený v samotnej aplikácii **AAPS**.

(authentication-or-not)=
### S overením alebo bez neho?

Niektoré SMS príkazy dajú odpoveď hneď, iné vyžadujú silné **overenie** cez aplikáciu Authenticator. Jednoduchý dotaz ako „**BG**“ (žiada aktuálnu glykémiu) sa rýchlo napíše, nepotrebuje overenie a vráti informácie o stave **AAPS**, ako vidíte nižšie:

![obrázok](../images/remote-control-06.png)

Príkazy, ktoré potrebujú vyššiu bezpečnosť, vyžadujú zadanie kódu, napríklad:

![SMS authenticated for markdown-smaller](../images/remote-control-07.png)

Stĺpec *Overenie* v tabuľkách nižšie ukazuje, či každý príkaz vyžaduje takéto silné overenie.

### Dáta CGM

| Príkaz     | Overenie | Funkcia a *odpoveď*                                                                                                                                                                     |
| ---------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BG         | Nie      | Vráti: poslednú glykémiu, rozdiel, IOB (bolus a bazál), COB<br/>*Posledná glykémia: 5.6 pred 4 min, Rozdiel: -0,2 mmol, IOB: 0.20U (Bolus: 0.10U Bazál: 0.10U)*                   |
| CAL 5.6/90 | Áno      | Kalibruje CGM hodnotou 5.6/90<br/>(použite hodnotu podľa vašich jednotiek glykémie)<br/>Funguje, iba ak je to v **AAPS** správne nastavené.<br/>*Kalibrácia odoslaná* |

### Pumpa

| Príkaz               | Overenie | Funkcia a *odpoveď*                                                                                   |
| -------------------- | -------- | ----------------------------------------------------------------------------------------------------- |
| PUMPA                | Nie      | Last conn: 1 min ago<br/>Temp: 0.00U/h @11:38 5/30min<br/>IOB: 0.5U Reserv: 34U Batt: 100 |
| PUMP DISCONNECT *30* | Áno      | Odpojí pumpu na *30* minút                                                                            |
| PUMP CONNECT         | Áno      | Pumpa bola znovu pripojená                                                                            |

### Bazál

| Príkaz            | Overenie | Funkcia a *odpoveď*            |
| ----------------- | -------- | ------------------------------ |
| BASAL 0.3         | Áno      | Spustí bazál 0,3 U/h na 30 min |
| BASAL 0.3 20      | Áno      | Spustí bazál 0,3 U/h na 20 min |
| BASAL 30%         | Áno      | Spustí bazál 30 % na 30 min    |
| BASAL 30% 50      | Áno      | Spustí bazál 30 % na 50 min    |
| BASAL STOP/CANCEL | Áno      | Zastaví dočasný bazál          |

Niektoré pumpy prijímajú dočasný bazál iba v percentách, iné iba v U/h. Ak použijete iný tvar, **AAPS** odpovie *„Táto pumpa prijíma dočasný bazál len v percentách, nie v U/h.“* (alebo naopak) a nič nenastaví. Trvanie musí byť násobkom kroku trvania dočasného bazálu vašej pumpy.


### Okruh

| Príkaz            | Overenie | Funkcia a *odpoveď*                                                                                                                                                                                                                                                                         |
| ----------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LOOP STATUS       | Nie      | Odpoveď závisí od aktuálneho stavu:<br/> - *Uzavretý okruh je deaktivovaný*, ak je okruh deaktivovaný alebo v režime LGS<br/> - *Uzavretý okruh je aktivovaný*, ak je okruh uzavretý alebo otvorený<br/> - *Pozastavený (10 min)*, ak je okruh odpojený alebo pozastavený |
| LOOP STOP/DISABLE | Áno      | Pumpa sa vráti k naprogramovanej bazálnej dávke.<br/>*Uzavretý okruh bol deaktivovaný*                                                                                                                                                                                                |
| LOOP SUSPEND 20   | Áno      | *Uzavretý okruh pozastavený na 20 minút*                                                                                                                                                                                                                                                    |
| LOOP RESUME       | Áno      | *Uzavretý okruh obnovený*                                                                                                                                                                                                                                                                   |
| LOOP CLOSED       | Áno      | *Aktuálny režim okruhu: Uzavretý okruh*                                                                                                                                                                                                                                                     |
| LOOP LGS          | Áno      | *Aktuálny režim okruhu: Ochrana pred nízkou glykémiou*                                                                                                                                                                                                                                      |

### Bolus

Bolus na diaľku nie je povolený do 15 min (túto hodnotu je možné upraviť, iba ak sú pridané 2 telefónne čísla) po poslednom príkaze bolusu alebo príkazoch na diaľku! V takom prípade bude odpoveď *Diaľkovo ovládaný bolus nie je momentálne povolený. Skúste to neskôr.* Táto odpoveď príde aj vtedy, keď pumpa práve podáva bolus.

| Príkaz               | Overenie | Funkcia a *odpoveď*                                                                                                                                               |
| -------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BOLUS 1.2            | Áno      |                                                                                                                                                                   |
| BOLUS 0.60 MEAL      | Áno      | Podá zadaný bolus 0,60 U<br/>**a** nastaví [dočasný cieľ Pred jedlom](#TempTargets-eating-soon-temp-target)                                                 |
| CARBS 5              | Áno      | Zadá 5 g sacharidov bez bolusu                                                                                                                                    |
| CARBS 5 17:35/5:35PM | Áno      | Zadá 5 g o 17:35.<br/>Prijateľný formát času závisí<br/> od nastavenia času (12 h/24 h) v telefóne.                                                   |
| EXTENDED 2 120       | Áno      | Spustí predĺžený bolus 2 U na 120 min.<br/>Iba pre [kompatibilné pumpy](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only). |
| EXTENDED STOP/CANCEL | Áno      | Zastaví predĺžený bolus                                                                                                                                           |

### Profil

| Príkaz         | Overenie | Funkcia a *odpoveď*                                                                                                                                     |
| -------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PROFILE STATUS | Nie      | Aktuálny profil a percento                                                                                                                              |
| PROFILE LIST   | Nie      | Aktuálny zoznam profilov v **AAPS**, napr.:<br/>1. Profile1<br/> 2. Profile2                                                                |
| PROFILE 1      | Áno      | Prepne profil na profil 1 v zozname.<br/>Použite čísla, ktoré vráti príkaz **PROFILE LIST**,<br/>nie názvy, pod ktorými ste profily uložili |
| PROFILE 2 30   | Áno      | Prepne profil na Profile2 s 30 %                                                                                                                        |

Percento musí byť medzi 30 a 250 %, rovnako ako v aplikácii. Hodnota mimo tohto rozsahu sa odmietne ešte predtým, než budete vyzvaní na zadanie overovacieho kódu.

### Dočasné ciele

| Príkaz                    | Overenie | Funkcia a *odpoveď*                     |
| ------------------------- | -------- | --------------------------------------- |
| TARGET MEAL/ACTIVITY/HYPO | Áno      | Nastaví dočasný cieľ MEAL/ACTIVITY/HYPO |
| TARGET STOP/CANCEL        | Áno      | Zruší dočasný cieľ                      |


(SMSCommands-other)=
### Iné

| Príkaz           | Overenie | Funkcia a *odpoveď*                                                                                                                                                                                                                                                |
| ---------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RESTART          | Áno      | Reštartuje AAPS. Užitočné pri problémoch, ktoré sa zvyčajne vyriešia reštartom.                                                                                                                                                                                    |
| SMS DISABLE/STOP | Áno      | Ak chcete vypnúť službu SMS na diaľku, odpovedzte kódom.<br/>Majte na pamäti, že ju budete môcť znova zapnúť<br/>iba priamo v hlavnom telefóne (master) s **AAPS**.                                                                                    |
| HELP             | Nie      | Vráti všetky funkcie, na ktoré sa môžete opýtať:<br/>BG, LOOP, PUMP, BASAL, BOLUS, EXTENDED, CAL, PROFILE, TARGET, SMS, CARBS, HELP, RESTART<br/>Ďalším príkazom ***HELP ***FUNCTION****** zobrazíte<br/>všetky možnosti dostupné v tejto časti. |
| HELP BOLUS       |          | *BOLUS 1.2<br/>BOLUS 1.2 MEAL*                                                                                                                                                                                                                               |

(SMSCommands-troubleshooting)=
## Riešenie problémov a časté otázky

```{contents} List of questions and issues
:depth: 1
:local: true
```

### Čo _nemôžeme_ robiť pomocou SMS príkazov?

1)  **Nemôžete nastaviť _dočasné_ prepnutie profilu** (napríklad nastaviť „profile exercise“ na 60 minút), ale môžete natrvalo prepnúť na „profile exercise“. Dočasné prepnutia profilu môžete namiesto toho nastaviť cez **AAPSClient**.

2)  **Nemôžete zrušiť automatizácie** ani **nastaviť vlastné ciele**, existujú však približné riešenia: Ako príklad si predstavte, že bežný cieľ v profile je 5,5. V AAPS ste nastavili automatizáciu, ktorá kvôli hodine telocviku v škole vždy nastaví vysoký cieľ 7,0 medzi 14:30 a 15:30. Jednou z podmienok automatizácie je, že „neexistuje žiadny dočasný cieľ“. Tento týždeň sa na poslednú chvíľu dozviete, že telocvik je zrušený a namiesto neho bude jedenie pizze, ale vaše dieťa je už v škole s telefónom s **AAPS**. Ak automatizácia spustí vysoký dočasný cieľ 7,0 a vy ho zrušíte (v telefóne s **AAPS** alebo na diaľku), podmienky automatizácie sú stále splnené a **AAPS** o minútu jednoducho nastaví vysoký cieľ znova.

**Ak by ste mali prístup k telefónu s AAPS**, mohli by ste automatizáciu vypnúť/upraviť, alebo ak to nechcete urobiť, jednoducho nastaviť nový dočasný cieľ 5,6 na 60 min ťuknutím na cieľ na hlavnej obrazovke alebo cez **Spravovať** → **Dočasný cieľ**. Tým by ste zabránili tomu, aby automatizácia nastavila vysoký cieľ 7,0.

**Ak nemáte prístup k telefónu s AAPS**, SMS príkazy môžete použiť na približné riešenie: napríklad príkazom „target meal“ nastavíte cieľ 5,0 na 45 minút (ďalšie predvolené ciele sú 8,0 pre aktivitu alebo hypoglykémiu, pozrite tabuľku). Pomocou SMS príkazov však nemôžete zadať _konkrétnu_ hodnotu cieľa (napríklad 5,6 na 60 minút), na to by ste potrebovali **AAPSClient**.

### Čo sa stane, ak si to s práve poslaným príkazom rozmyslím?

**AAPS** vykoná iba posledný príkaz. Ak teda napíšete „bolus 1.5“ a potom bez overenia pošlete nový príkaz „bolus 1“, skorší príkaz 1.5 sa ignoruje. **AAPS** vždy pošle do telefónu opatrovateľa odpoveď, ktorá potvrdí, o aký SMS príkaz ide, ešte predtým, než budete vyzvaní na zadanie overovacieho kódu, a tiež odpoveď po vykonaní akcie.

### Prečo som nedostal(a) odpoveď na SMS príkaz?

Môže to mať jeden z týchto dôvodov:

1)  Správa sa nedostala do telefónu (problémy so sieťou). 2)  **AAPS** ešte spracúva požiadavku (_napr._ bolus, ktorého podanie môže chvíľu trvať podľa rýchlosti podávania bolusu). 3)  Telefón s **AAPS** nemá v čase prijatia príkazu dobré Bluetooth spojenie s pumpou a príkaz zlyhal (to zvyčajne spustí alarm v telefóne s **AAPS**).

### Žiadna odpoveď na SMS príkazy

V telefóne opatrovateľa a/alebo v telefóne s **AAPS** skúste vypnúť tieto možnosti:
* **Send as chat message** ![Vypnutie odosielania SMS ako chatových správ](../images/SMSdisableChat.png)
* Ak používate aplikáciu Android Messages alebo Google Messages (Správy), vypnite správy RCS:
  - otvorte konkrétnu SMS konverzáciu v aplikácii Správy
  - Vyberte ponuku možností (tri bodky) v pravom hornom rohu
  - vyberte „Podrobnosti“ (Details)
  - Zapnite „Only send SMS and MMS messages“ (posielať iba správy SMS a MMS) ![Vypnutie RCS ako chatových správ](../images/SMSdisableRCS.png)

### Chyby pri vykonávaní príkazov

Príkaz nemusí byť úspešný z viacerých dôvodov:

* Nastavenie SMS príkazov nie je dokončené/správne
* Poslali ste príkaz v nesprávnom formáte (napríklad „disconnect pump 45“ namiesto „pump disconnect 45“)
* Použili ste nesprávny alebo neplatný kód z aplikácie Authenticator (zvyčajne je dobré počkať pár sekúnd na nový kód, ak aktuálnemu kódu čoskoro vyprší platnosť)
* Kód + PIN boli v poriadku, ale SMS sa pri odoslaní/doručení oneskorila, takže **AAPS** vyhodnotil, že platnosť kódu z aplikácie Authenticator vypršala
* Telefón s **AAPS** je mimo dosahu pumpy alebo s ňou stratil spojenie
* Systém práve podáva bolus

Časté chyby ukazujú príklady nižšie:

![obrázok](../images/remote-control-17.png)

### Ako môžem zastaviť príkaz, ktorý už bol overený?

Nemôžete. Bolus poslaný cez SMS však môžete zrušiť priamo v telefóne s **AAPS** – ak ste rýchli, jednoducho ho zrušíte v okne s priebehom bolusu. Mnohé SMS príkazy (okrem bolusov a zadania sacharidov) sa dajú ľahko vrátiť späť, alebo sa pri chybe dajú urobiť kroky, ktoré zmiernia nechcené účinky.

Aj pri chybách v bolusoch a zadaní sacharidov môžete niečo urobiť. Napríklad ak ste zadali 20 g sacharidov, ale vaše dieťa zje iba 10 g a vy (ani opatrovateľ na mieste) nemôžete záznam vymazať priamo v telefóne s **AAPS**, môžete nastaviť vysoký dočasný cieľ alebo znížený profil, aby bol **AAPS** menej agresívny.

### Viacnásobné SMS

Ak opakovane dostávate tú istú správu (_napr._ o prepnutí profilu), možno ste omylom vytvorili slučku s inými aplikáciami. Môže to byť napríklad xDrip. Ak áno, uistite sa, že xDrip (ani žiadna iná aplikácia) nenahráva ošetrenia do Nightscoutu.

Ak je iná aplikácia nainštalovaná na viacerých telefónoch, vypnite nahrávanie na všetkých z nich.

(sms-commands-too-many-messages)=
### Dostávam od SMS príkazov až príliš veľa SMS správ. Môžem ich obmedziť alebo vypnúť?

Používanie SMS príkazov môže viesť k mnohým automatickým správam z telefónu s **AAPS** do telefónu opatrovateľa. Ak máte v **AAPS** nastavené automatizácie, budete dostávať aj správy, napríklad „Bazálny profil v pumpe aktualizovaný“. Ak sa bude posielať veľa SMS, môže byť užitočné mať neobmedzené SMS v mobilnom programe telefónu s **AAPS** (aj pre každý používaný telefón opatrovateľa) a vo všetkých telefónoch vypnúť upozornenia, zvuky alebo vibrácie pre SMS. SMS príkazy nie je možné používať bez toho, aby ste dostávali tieto správy. Preto možno budete chcieť na priamu komunikáciu s dieťaťom (ak je dosť staré) používať iný spôsob než SMS. Medzi bežné alternatívne komunikačné aplikácie, ktoré používajú opatrovatelia s **AAPS**, patria Whatsapp, Lime, Telegram a Facebook Messenger.

SMS „Profile changed“ (profil zmenený) môžete vypnúť, ak zmena profilu prišla z Nightscoutu. Na to vytvorte súbor s názvom **presne**  `do_not_send_sms_on_profile_change` v priečinku `extra` vo vašom AAPS priečinku.
