# Vzdialené ovládanie AAPS

```{contents} In this page
:backlinks: entry
:depth: 2
```

Na ovládanie **AAPS** na diaľku existujú štyri veľmi účinné nástroje:

1) [SMS príkazy](#RemoteControl_SMS-Commands) (telefón sledujúceho môže mať Android alebo iOS), 2) [AAPSClient](#RemoteControl_aapsclient) (telefón sledujúceho má Android; verzia pre iPhone sa vyvíja) 3) [Nightscout](#RemoteControl_nightscout) (Android, iOS alebo iný počítač/zariadenie), hlavne na sledovanie: pozrite poznámku o [ovládaní z klienta](#client-master-control) v tejto časti.  
4) [Inteligentné hodinky](#RemoteControl_smartwatches) (Android)

Prvé tri sú vhodné najmä pre opatrovateľov/rodičov, ale inteligentné hodinky sú veľmi užitočné pre opatrovateľov/rodičov **aj** pre samotných dospelých s diabetom.

![obrázok](../images/remote_control_and_following/AAPS_overview_remote_control_01.png)

(RemoteControl_SMS-Commands)=

## 1) SMS príkazy

Pozrite samostatnú stránku [SMS príkazy](../RemoteFeatures/SMSCommands.md).

(RemoteControl_aapsclient)=
## 2) AAPSClient

**AAPSClient** vyzerá veľmi podobne ako samotný **AAPS** a ponúka opatrovateľovi rovnaké obrazovky a tlačidlá na posielanie príkazov do **AAPS** na diaľku:

![Domovská obrazovka AAPSClient](../images/v4/AapsClient/aapsclient_home.png)

(remotecontrol-aapsclient-versions)=
### O AAPSClient, AAPSClient2 a AAPSClient3

Klientska aplikácia má 3 verzie: **AAPSClient**, **AAPSClient2** a **AAPSClient3**. Fungujú rovnako. Jediný rozdiel je v tom, že ich môžete nainštalovať vedľa seba do toho istého telefónu sledujúceho.

Opatrovateľ, ktorý sleduje jednu osobu, potrebuje iba **AAPSClient**. Ak chcete sledovať a na diaľku ovládať druhú osobu (s vlastnou stránkou **Nightscout** a vlastným telefónom s **AAPS**), nainštalujte aj **AAPSClient2** a pre tretiu osobu **AAPSClient3**. Každá aplikácia sa nastavuje a [páruje](#aapsclient-pairing-with-the-master) samostatne, so stránkou **Nightscout** a telefónom s **AAPS** osoby, ktorú sleduje.

Aby ste aplikácie rozlíšili, niektoré prvky majú inú farbu: žltú pre **AAPSClient**, modrú pre **AAPSClient2** a zelenú pre **AAPSClient3**. Sú to ikona aplikácie, pozadie widgetu a časť so stavom **AAPS** na domovskej obrazovke aplikácie. <br/> Poznámka: priehľadnosť pozadia widgetu môžete nastaviť v konfigurácii widgetu. Pri nízkej nepriehľadnosti je farba ťažko viditeľná.

![Farby widgetu a časti so stavom v AAPSClient, AAPSClient2 a AAPSClient3](../images/remote_control_and_following/AAPSClient_and_AAPSClient2.png)

### Stiahnutie a inštalácia

**AAPSClient** môžete nainštalovať do jedného alebo viacerých telefónov sledujúcich (t. j. telefón sledujúceho rodiča 1 a telefón sledujúceho rodiča 2), aby obaja opatrovatelia mali prístup k telefónu pacienta s **AAPS** a mohli ho ovládať na diaľku.

Ak chcete stiahnuť **AAPSClient**, prejdite do [GitHub repozitára](https://github.com/nightscout/AndroidAPS/releases/) a kliknite na súbor **„app-AAPSClient-release_x.x.x.x“** (môže to byť novšia verzia, než je na snímke obrazovky nižšie):

![obrázok](../images/remote_control_and_following/AAPSClient_download_02.png)

Potom v počítači prejdite do _stiahnutých súborov_. On Windows, _downloads_ will show in the right hand ribbon:

![obrázok](../images/remote_control_and_following/AAPSClient_download_folder_03.png)

Po stiahnutí kliknite na _show in folder_ (zobraziť v priečinku), aby ste súbor našli.

Apk **AAPSClient** teraz môžete buď:

preniesť do telefónu sledujúceho cez kábel USB; alebo presunúť do priečinka na Disku Google a potom pridať do telefónu sledujúceho kliknutím na súbor „app-AAPSClient-release“.

Ak potrebujete **AAPS** pre seba a **AAPSClient** na sledovanie niekoho iného, musíte si **AAPSClient** zostaviť sami namiesto stiahnutia z GitHub repozitára, ako je popísané vyššie. Dôvodom je, že do jedného telefónu nemôžete nainštalovať **AAPS** aj **AAPSClient** podpísané iným kľúčom. <br/> Ak si chcete **AAPSClient** zostaviť sami, postupujte rovnako ako pri [bežnom zostavení AAPS](../SettingUpAaps/BuildingAaps.md). Na stránke **Generate signed App Bundle or APK** vyberte **aapsclientRelease** namiesto **fullRelease**.

To isté pravidlo platí, keď do jedného telefónu sledujúceho inštalujete viac klientskych aplikácií (**AAPSClient**, **AAPSClient2**, **AAPSClient3**): všetky musia byť podpísané **rovnakým kľúčom**. Inak Android odmietne nainštalovať druhú z nich (chyba `INSTALL_FAILED_DUPLICATE_PERMISSION`).

### Synchronizácia: nastavenie AAPSClient a AAPS

Once the __AAPSClient__ apk is installed on the follower phone, make sure **NSClientV3** is set up the same way on both phones for Nightscout 15 (see the [update notes](../Maintenance/UpdateToNewVersion.md)). Príklad nižšie ukazuje nastavenie synchronizácie s NSClientV3 a Nightscoutom 15; v __AAPS__ sú dostupné aj iné zdroje dát (napr. xDrip).

V **Konfigurácia** > **Komunikácia** používateľ synchronizuje svoje dáta s Nightscoutom cez __NSClientV3__ (pomocou API v3), nastavený rovnako v __AAPS__ aj v telefóne sledujúceho.

![Konfigurácia > Komunikácia s vybraným NSClientV3](../images/v4/Configuration/configuration_communication.png)

Používateľ musí zabezpečiť, aby boli telefóny s AAPS a AAPS Client __oba__ navzájom synchronizované nastavením NSClientV3 v každom z nich. V telefóne sledujúceho to môžete urobiť aj naskenovaním QR kódu, ktorý zobrazí **AAPS**, pozrite [Párovanie AAPSClient s AAPS](#remotecontrol-pairing) nižšie:

- V **Nastaveniach** NSClientV3 zadajte **Adresa Nightscoutu**

- V tých istých nastaveniach zadajte **Nightscout prístupový token**. Postupujte prosím podľa pokynov [tu](https://nightscout.github.io/nightscout/security/#create-a-token). V telefóne s **AAPS** použite **token s rolou Admin**: s ním **AAPS** vytvorí vlastný token pre každý telefón sledujúceho.

- Na **oboch** telefónoch zapnite **Použiť websockety**. V telefóne s **AAPS** sú websockety pre vzdialené ovládanie **nevyhnutné**: bez nich **AAPS** nemôže prijímať príkazy z **AAPSClient**. Na oboch telefónoch tiež zrýchľujú synchronizáciu za cenu o niečo vyššej spotreby batérie.

![Nastavenia > NSClientV3 s adresou Nightscoutu, prístupovým tokenom Nightscout a voľbou Použiť websockety](../images/preferences/settings_nsclient.png)


Používateľ by sa mal uistiť, že __AAPSClient__ aj __AAPS__ ukazujú na obrazovke **NSClientV3** v každom telefóne stav  „Pripojené“. V tomto bode **AAPSClient** sleduje **AAPS** (glykémiu, ošetrenia, profil), ale ešte ho nemôže ovládať: spárujte oba telefóny, ako je popísané nižšie.

(remotecontrol-pairing)=
### Párovanie AAPSClient s AAPS (vzdialené ovládanie)

Od verzie **AAPS** 4 ovláda **AAPSClient** systém **AAPS** cez zabezpečené **spárované** spojenie. Samotná synchronizácia nestačí: kým nie sú telefóny spárované, **AAPSClient** zobrazuje iba **Spravovať** s **Profilom** iba na čítanie a **Spárovanie s hlavným zariadením**.

1. V telefóne s **AAPS** otvorte **Spravovať → Autorizovaní klienti** a zapnite **Povoliť ovládanie klientom** (predvolene je vypnuté, v Jednoduchom móde je vždy zapnuté).
2. Ťuknite na **+**, zadajte názov telefónu sledujúceho, zvoľte spôsob nastavenia a jeho **rolu**:
   - **QR kód: Nightscout a párovanie** — **AAPS** zobrazí QR kód, ktorý jedným naskenovaním nastaví Nightscout v telefóne sledujúceho a spáruje ho. Vyžaduje to token s rolou Admin v nastaveniach NSClientV3 v telefóne s **AAPS**.
   - **PIN** — pre telefón sledujúceho bez fotoaparátu, ktorý je už pripojený k Nightscoutu: poznačte si jednorazový **PIN** (platí asi dve minúty).
3. V telefóne s **AAPSClient** naskenujte kód (v Sprievodcovi nastavením alebo cez **Spravovať → Spárovanie s hlavným zariadením → Naskenovať QR kód**), alebo otvorte **Spravovať → Spárovanie s hlavným zariadením** a zadajte PIN. Potvrďte.

Telefón sledujúceho sa potom zobrazí ako **Aktívny** v zozname **Autorizovaní klienti** a **AAPSClient** zobrazí **Ošetrenia**, **Scény** a **Spravovať**. Telefón sledujúceho dostane vlastný token Nightscout iba s právami, ktoré potrebuje. Celý postup so snímkami obrazovky a riešením problémov nájdete na stránke [Ovládanie Master ↔ Client](#client_master_master_setup).

Overte, či nastavenie funguje: zadajte sacharidy v **AAPSClient**, potvrďte zobrazené množstvo a skontrolujte, či sa záznam zobrazí v **Ošetreniach** na oboch telefónoch.

(remotecontrol-nightscout-access-token)=

### Riešenie problémov s nastavením „Nightscout prístupový token“

Presné nastavenie „Nightscout prístupový token“ sa môže líšiť podľa toho, či je váš Nightscout platená hosťovaná stránka alebo nie.

Ak máte problém s tým, aby **AAPS** prijal „Nightscout prístupový token“, a používate platenú hosťovanú stránku Nightscout, môžete sa najprv obrátiť na svojho poskytovateľa Nightscoutu, ako problém s „Nightscout prístupový token“ vyriešiť. Inak sa obráťte na skupinu **AAPS**, ale predtým si prosím ešte raz overte, že ste správne postupovali podľa pokynov [tu](https://nightscout.github.io/nightscout/security/#create-a-token).

### Čo ponúka AAPSClient

Po spárovaní ponúka **AAPSClient** opatrovateľovi takmer rovnaké obrazovky ako samotný **AAPS**:

- **Ošetrenia**: bolus inzulínu, sacharidy a bolusová kalkulačka.
- **Scény**: spustenie a zastavenie [scén](../DailyLifeWithAaps/Scenes.md).
- **Spravovať**: profily, nastavenia inzulínu, dočasné ciele, Rýchly sprievodca, automatizácia, jedlo, striedanie miest, párovanie a bežiaci dočasný bazál.
- **Hlavná ponuka**: história ošetrení, prehliadač histórie, štatistiky, údržba, konfigurácia.

V **AAPSClient** nie je pumpa ani ciele. Podrobný popis nájdete na stránke [Aplikácia AAPSClient](AapsClient.md).

**AAPSClient** umožňuje opatrovateľovi na diaľku cez mobilnú sieť alebo internet urobiť väčšinu úprav, ktoré sú povolené priamo v **AAPS**, **vrátane bolusov inzulínu**. Každý príkaz je podpísaný a poslaný cez Nightscout do telefónu s **AAPS**, ktorý ho overí podľa vlastných dát, obmedzí ho, zobrazí vám vlastné potvrdenie a až potom ho vykoná. **AAPSClient** _môže_ byť oveľa rýchlejší než [SMS príkazy](../RemoteFeatures/SMSCommands.md), najmä pri príkazoch, ktoré by vyžadovali overenie.

Ošetrenia zadané do Nightscoutu iným spôsobom (napríklad cez webovú stránku Nightscout) sa nepoužijú, kým je zapnuté ovládanie z klienta: **AAPS** je vtedy v [režime zvýšeného zabezpečenia](#client-master-control-hardened-mode) a prijíma zmeny iba zo spárovaných klientov. Keď je ovládanie z klienta vypnuté, použijú sa, iba ak sú zapnuté zodpovedajúce možnosti **Prijímať** v [časti Synchronizácia v nastaveniach NSClient](#Preferences-nsclient-synchronization).

Vzdialené ovládanie cez **AAPSClient** odporúčame, iba ak vaša synchronizácia funguje dobre (_t. j._ nevidíte nechcené zmeny dát, napr. samovoľné zmeny DC, TBR atď.).

### AAPSClient s možnosťami pre inteligentné hodinky

Inteligentné hodinky môžu byť veľmi užitočným nástrojom, ktorý pomáha zvládať **AAPS** u detí. Je možných niekoľko rôznych konfigurácií. Ak je **AAPSClient** nainštalovaný v telefóne opatrovateľa, môžete si aplikáciu [**AAPSClient WearOS**](https://github.com/nightscout/AndroidAPS/releases/) stiahnuť a nainštalovať do kompatibilných inteligentných hodiniek pripojených k telefónu rodiča. Zobrazí aktuálnu glykémiu a stav okruhu. Keď je **AAPSClient** spárovaný s **AAPS**, akcie z hodiniek (vrátane bolusov, sacharidov, dočasných cieľov a zmien profilu) sa prenášajú cez **AAPSClient** do **AAPS**, ktorý ich potvrdí a vykoná: pozrite [Wear OS na klientovi](#clientmastercontrol-wear-os-on-a-client). Viac o inteligentných hodinkách si môžete prečítať [tu](#remotecontrol-smartwatches).

(RemoteControl_nightscout)=
## 3) Nightscout

Okrem toho, že Nightscout je server „v cloude“, existuje aj samostatná aplikácia **Nightscout**, ktorú si môžete stiahnuť priamo z App Store do svojho iPhonu. Ak máte ako telefón sledujúceho Android, neexistuje samostatná aplikácia Nightscout a je lepšie použiť [**AAPSClient**](#2-aapsclient). Ak chcete iba sledovať a neposielať ošetrenia, môžete si z Obchodu Play stiahnuť a nainštalovať aplikáciu [Nightwatch](https://play.google.com/store/apps/details?id=se.cornixit.nightwatch).

Keď do iPhonu nainštalujete aplikáciu **Nightscout**, otvorte ju, postupujte podľa pokynov na nastavenie a zadajte adresu svojho Nightscoutu (pozrite nižšie vľavo). Jej tvar sa môže líšiť podľa toho, kde je váš Nightscout hosťovaný. (_napr._ http://youraddresshere.herokuapp.com). Potom zadajte svoj Nightscout API secret (pozrite nižšie vpravo). Ak vás aplikácia nevyzve na zadanie hesla API, musíte ho zadať kliknutím na zámok v hornej časti aplikácie:

![obrázok](../images/remote-control-24.png)

Viac informácií o nastavení nájdete priamo na stránke [Nightscout](https://nightscout.github.io/nightscout/discover/)

Po prvom prihlásení uvidíte veľmi jednoduché zobrazenie. Možnosti zobrazenia si prispôsobte výberom ponuky „hamburger“ vpravo hore a posunutím nadol:

![obrázok](../images/remote-control-25.png)

Posuňte sa nadol na „Settings“ (Nastavenia). Môžete zmeniť „scale“ (mierka) na „linear“ (lineárna), pretože predvolené zobrazenie glykémie je logaritmické, a pod „render basal“ (zobrazenie bazálu) vyberte „default“ (predvolené), aby sa zobrazoval bazál pumpy.

![obrázok](../images/remote-control-25b.png)

Vyberte požadované možnosti. Ak na alarmy používate inú aplikáciu, zrušte zaškrtnutie alarmov.

![obrázok](../images/remote-control-26.png)

Pokračujte v posúvaní nadol, kým sa nedostanete k „show plugins“ (zobraziť pluginy).

Uistite sa, že je zaškrtnuté „careportal“. Môžete vybrať aj rôzne ďalšie údaje (najužitočnejšie sú: IOB, care portal, pump, cannula age, insulin age, basal profile a OpenAPS).

Dôležité: aby sa tieto zmeny prejavili, musíte teraz kliknúť dole na „save“ (uložiť).

![obrázok](../images/remote-control-27.png)

Po stlačení „save“ sa aplikácia vráti na hlavnú obrazovku Nightscoutu, ktorá bude vyzerať približne takto:

1. Aktuálna hodnota glykémie
2. Informácie o stave systému AAPS – ťuknutím na jednotlivé karty na obrazovke zobrazíte viac podrobností. Tieto možnosti zobrazenia pridáte alebo odstránite cez ponuku hamburger.
3. Nedávny priebeh glykémie so zobrazenými ošetreniami (sacharidy, bolusy)
4. Dlhodobejší priebeh glykémie
5. Ponuka „hamburger“ na nastavenie možností zobrazenia, vytváranie reportov, úpravu profilov a nástroje správcu Nightscoutu
6. Ponuka „**+**“ na zadávanie ošetrení (kedy ich **AAPS** použije, pozrite [nižšie](#RemoteControl_nightscout-treatments)).
7. Výber iného zobrazeného časového obdobia
8. Profil bazálneho inzulínu
9. Zelená čiara = glykémia v minulosti Modré čiary = predpovedaná glykémia

![obrázok](../images/remote-control-28.png)

Podrobnejší pohľad na ponuku vľavo hore v aplikácii Nightscout:

1. Spätná úprava v Careportal
2. Zapnutie/vypnutie alarmov
3. Hamburger – nastavenie predvolieb
4. Careportal – zaznamenanie ošetrenia (kedy ich **AAPS** použije, pozrite [nižšie](#RemoteControl_nightscout-treatments))

![Horná lišta Nightscoutu](../images/remote-control-29.png)

V sivých kartách na tejto obrazovke je obrovské množstvo informácií o stave systému **AAPS** (a ešte viac informácií sa zobrazí, keď na kartu ťuknete):

1. 5-minútový trend glykémie
2. Náhľad bolusovej kalkulačky (Bolus wizard preview)
3. Stlačením Basal zobrazíte aktuálny profil a informácie o bazáli
4. Čas od posledného merania CGM v AAPS
5. **Pump** (pumpa): inzulín, batéria v % a kedy sa k nej AAPS naposledy pripojil
6. Kedy sa AAPS naposledy obnovil – ak je to dlhšie ako 5 min, môže to znamenať problém so spojením medzi telefónom s AAPS a pumpou/CGM
7. Stlačením IOB zobrazíte rozdelenie na bazálny a bolusový inzulín
8. Vek inzulínu v zásobníku
9. Vek kanyly
10. Stav batérie telefónu s AAPS
11. Veľkosť vašej databázy. Ak je príliš plná (iba pri vlastnom (DIY) Nightscoute – pri hosťovaných službách to ignorujte), môžu nastať problémy s pripojením. Na zmenšenie tohto čísla môžete zmazať dáta v ponuke Admin tools (cez hamburger).

![obrázok](../images/remote-control-30.png)

![obrázok](../images/remote-control-31.png)

Vyskakovacie okno zatvoríte stlačením „refresh“ v dolnej časti stránky.

(RemoteControl_nightscout-treatments)=
### Posielanie ošetrení do AAPS cez aplikáciu Nightscout

V **AAPS** 4 je podporovaným spôsobom vzdialeného ovládania **AAPS** **spárovaný AAPSClient**, pozrite [Ovládanie Master ↔ Client](#client-master-control): každý klient má [rolu](#client-master-control-roles), ktorá obmedzuje, čo smie robiť, a každý príkaz je podpísaný, overený a potvrdený telefónom s **AAPS**. Kým je zapnuté ovládanie z klienta, telefón s **AAPS** je v [režime zvýšeného zabezpečenia](#client-master-control-hardened-mode): ošetrenia, dočasné ciele a prepnutia profilu zadané na webovej stránke Nightscout alebo v aplikácii Nightscout sa **nepoužijú**. Aplikácia Nightscout je potom nástrojom iba na sledovanie.

```{admonition} Only when client control is off
:class: warning
Ak je **Povoliť ovládanie klientom** v **Spravovať → Autorizovaní klienti** vypnuté (a Jednoduchý mód je vypnutý), **AAPS** použije záznamy Starostlivosti z Nightscoutu iba pre typy dát, ktoré ste zapli v časti **Prijímať** v [časti Synchronizácia v nastaveniach NSClientV3](#Preferences-nsclient-synchronization): sacharidy, dočasné ciele, prepnutia profilu a ostatné záznamy Starostlivosti. Inzulín sa takto nikdy nepodá: „Korekčný bolus“ zadaný v Nightscoute je iba *oznámený* a **AAPS** ho započíta ako aktívny inzulín bez toho, aby ho podal. Toto nastavenie sa na vzdialené ovládanie neodporúča; namiesto neho použite spárovaný **AAPSClient**.
```

Viac o možnostiach **Nightscoutu** si prečítajte [tu](https://nightscout.github.io/)

### Tipy, ako čo najlepšie využiť aplikáciu Nightscout

1). Ak sa na niektorej stránke „zaseknete“ a chcete sa vrátiť na hlavnú obrazovku, jednoducho kliknite na „refresh“ (obnoviť, dole v strede). Tým sa vrátite na domovskú stránku **Nightscoutu** s grafom glykémie.

Ak chcete vidieť aktuálny profil, ktorý beží v telefóne, stláčajte rôzne ikony na obrazovke nad grafom. Ďalšie informácie (aktuálny sacharidový pomer, citlivosť, časové pásmo atď.) uvidíte po stlačení „basal“. „OpenAPS“ zobrazí informácie o profile, aktuálnom cieli atď. Sledovať môžete aj stav batérie telefónu v % aj stav batérie pumpy v %. BWP ukazuje, čo podľa algoritmu nastane v budúcnosti vzhľadom na IOB a COB.

#### Ďalšie ikony v ponuke: čo znamená ceruzka (úpravy)?

Ceruzkou na úpravy môžete (technicky) presúvať alebo mazať bolusy alebo korekčné ošetrenia za posledných 48 h.

Viac o tom [tu](https://nightscout.github.io/nightscout/discover/#edit-mode-edit)

Hoci by to mohlo byť užitočné na zmazanie zadaných sacharidov (bez podaného bolusu), v praxi to s **AAPS** zatiaľ dobre nefunguje a odporúčame robiť takéto zmeny priamo v aplikácii **AAPS**.

(RemoteControl_smartwatches)= (remotecontrol-smartwatches)=

## 4) Inteligentné hodinky

### Možnosť 1) Ovládanie AAPS z hodiniek s Wear OS

![Wear Remote 1](../images/Wear_Remote1.png)

Keď [nastavíte **AAPS** na hodinkách](../WearOS/BuildingAapsWearOS.md), podrobný popis ciferníkov a ich funkcií nájdete v časti [Nastavenie AAPS na hodinkách s Wear OS](../WearOS/WearOsSmartwatch.md).

V stručnom prehľade: z inteligentných hodiniek môžete spustiť tieto funkcie:

* nastaviť dočasný cieľ

* použiť bolusovú kalkulačku (premenné výpočtu môžete nastaviť v nastaveniach v telefóne)

* podať eSacharidy

* podať bolus (inzulín + sacharidy)

* nastavenia hodiniek

* stav

* skontrolovať stav pumpy

* skontrolovať stav okruhu

* skontrolovať a zmeniť profil, CPP (Circadian Percentage Profile = posun času + percento)

* zobraziť CDD (celková denná dávka = bolus + bazál za deň)

* Bolus na diaľku, keď sú opatrovateľ a dieťa s diabetom 1. typu na rôznych miestach (s hodinkami **AAPS** a telefónom s **AAPS** je to možné, ak sú obe zariadenia pripojené do siete)

#### Komunikácia opatrovateľov s hodinkami pomocou iných aplikácií (napr. WhatsApp)

Do hodiniek je možné pridať ďalšie aplikácie, napr. WhatsApp, na posielanie správ (napríklad) medzi opatrovateľmi a deťmi. Je dôležité, aby bol s telefónom spojený iba JEDEN účet Google, inak hodinky tieto dáta neprenesú. Na účet Samsung musíte mať aspoň 13 rokov a musí byť nastavený na rovnakú e-mailovú adresu, ktorá sa používa v telefóne s Androidom.

Video, ktoré vysvetľuje nastavenie WhatsAppu na posielanie správ na hodinkách Galaxy 4 (nedostanete všetky funkcie WhatsAppu), nájdete [tu](https://gorilla-fitnesswatches.com/how-to-get-whatsapp-on-galaxy-watch-4/)

Úpravy v aplikácii **Galaxy wearable** v telefóne s **AAPS** aj v hodinkách umožnia, aby správy WhatsApp upozornili jemnou vibráciou a aby sa správa WhatsApp zobrazila cez aktuálny ciferník.

### Možnosť 2) **AAPS** na hodinkách na vzdialené ovládanie **AAPS** v telefóne

Podobne ako telefón sledujúceho s **AAPSClient** alebo SMS príkazmi (pozrite časti vyššie) môžete na vzdialené ovládanie **AAPS** a zobrazenie úplných údajov profilu použiť inteligentné hodinky. Hlavný rozdiel oproti telefónu sledujúceho je, že hodinky sú s telefónom s **AAPS** spojené cez Bluetooth a nepotrebujú Nightscout ani overovací kód. Ak sú hodinky aj telefón s **AAPS** spojené cez Bluetooth a zároveň pripojené k sieti Wi-Fi/mobilných dát, hodinky budú s telefónom s **AAPS** komunikovať aj cez ňu, čo dáva väčší dosah komunikácie. To zahŕňa aj podanie bolusu na diaľku, keď sú opatrovateľ s hodinkami **AAPS** a dieťa s diabetom 1. typu (s telefónom s **AAPS**) na rôznych miestach, čo môže byť užitočné, keď je dieťa v škole.

Hodinky na vzdialené ovládanie sú preto často užitočné v každej situácii, keď:

a)  **AAPSClient** alebo **SMS** príkazy nemôžu fungovať; alebo

b)  Používateľ nechce písať overovací kód (ako to vyžadujú SMS príkazy).

Aby mohli inteligentné hodinky ovládať **AAPS**, potrebujú **Wear OS 3 alebo novší**. Skontrolujte technické parametre hodiniek a pozrite stránku [Inteligentné hodinky a AAPS](../Getting-Started/Watches.md). Ak si nie ste istí, vyhľadajte to alebo sa opýtajte v skupinách **AAPS**  na Facebooku/Discorde.

Specific How-to guides for setting up **AAPS** on the popular Samsung Galaxy Watch 4 (40mm) are given below. Obľúbenou voľbou sú aj hodinky [Garmin](https://apps.garmin.com/en-US/apps/a2eebcac-d18a-4227-a143-cd333cf89b55?fbclid=IwAR0k3w3oes-OHgFdPO-cGCuTSIpqFJejHG-klBTm_rmyEJo6gdArw8Nl4Zc#0). Ak máte skúsenosti s nastavením iných hodiniek, ktoré by mohli byť užitočné pre ostatných, pridajte ich prosím na tieto stránky ([upravte dokumentáciu](../SupportingAaps/HowToEditTheDocs.md)) a podeľte sa o svoje poznatky so širšou komunitou **AAPS**.

### Možnosť 3) AAPSClient na hodinkách na vzdialené ovládanie **AAPS** v telefóne

![Wear Remote 2](../images/Wear_Remote2.png)

Softvér pre hodinky, **AAPSClient** Wear apk, si môžete stiahnuť priamo z [GitHubu](https://github.com/nightscout/AndroidAPS/releases/).

Na stiahnutie softvéru kliknite na aplikáciu pre hodinky, ktorá zodpovedá klientskej aplikácii v telefóne: **wear-aapsclient-release_**_verzia_ patrí k **AAPSClient**, **wear-aapsclient2-release_**_verzia_ patrí k **AAPSClient2** (pozrite [O AAPSClient, AAPSClient2 a AAPSClient3](#remotecontrol-aapsclient-versions)):

![obrázok](../images/2308c075-f41c-45bc-9c0f-3938beeaaafb.png)


Potom zvoľte „save as“ (uložiť ako) a uložte súbor na vhodné miesto v počítači:


![obrázok](../images/bcf63cbc-9028-41d5-8416-fa2a31fd6f7d.png)






Wear apk **AAPSClient** môžete preniesť do telefónu a nainštalovať do hodiniek rovnakým spôsobom ako aplikáciu **AAPS** Wear, ako je popísané v časti [Prenos aplikácie Wear do telefónu s AAPS](#remote-control-transferring-the-aaps-wear-app-onto-your-aaps-phone)  









