(aapsclient-app)=
# Aplikácia AAPSClient

**AAPSClient** je doplnková aplikácia k **AAPS**: sprievodná aplikácia pre druhý telefón — zvyčajne telefón opatrovateľa — ktorá **sleduje** človeka, ktorý používa **AAPS**. Od verzie 4 **AAPS** môže opatrovateľ okruh aj na diaľku **ovládať** pomocou podpísaných príkazov. Oba telefóny komunikujú cez vašu stránku **Nightscout**; priame spojenie medzi telefónmi nie je potrebné.

```{admonition} Wording used on this page
:class: note
- **Client** = telefón s aplikáciou **AAPSClient**.
- **Master** = hlavný telefón s **AAPS**, ktorý ovláda pumpu a riadi okruh.
```

```{admonition} iPhone version in development
:class: note
**AAPSClient** zatiaľ funguje na telefónoch s Androidom. Verzia **AAPSClient** pre iPhone sa vyvíja a je v ranej fáze testovania. Zatiaľ nie je vydaná: v App Store nie je a nedá sa nič stiahnuť. Táto stránka sa aktualizuje, keď bude dostupná.
```

```{contents} Table of contents
:depth: 2
:local: true
```

## Čo AAPSClient je (a čo nie je)

**AAPSClient** vyzerá a ovláda sa ako **AAPS**, ale **nemá vlastný okruh**:

- Neobsahuje **žiadny algoritmus APS**, žiadne **Ciele** a **žiadne ovládače púmp** — nikdy sám nepodáva inzulín.
- Nie sú v ňom ani pluginy, ktoré používa iba hlavná aplikácia (**SMS komunikátor**, **Tidepool**, **Open Humans**).
- Čo *obsahuje*: synchronizáciu **NSClientV3**, pluginy zdroja glykémie, vysielanie pre **xDrip+** a konektory pre **Wear OS** / **Garmin** — všetko, čo je potrebné na sledovanie a odovzdávanie príkazov. Hodinky **Garmin** pripojené ku klientovi môžu zobrazovať dáta, ale sacharidy, ktoré pošlú, sa nezaznamenajú a hodinky nemôžu pripojiť ani odpojiť pumpu: klient zobrazí správu a vy ich namiesto toho zadáte v **AAPS**.

Všetko, čo spustíte z **AAPSClient**, skontroluje, obmedzí, potvrdí a **vykoná hlavné zariadenie** (telefón s pumpou). Samostatná stránka [Ovládanie Master ↔ Client](ClientMasterControl.md) vysvetľuje, ako to funguje: ako spárovať oba telefóny, ako hlavné zariadenie napíše text potvrdenia, ktorý vidíte, ako sa podá bolus spustený na klientovi a čo sa stane, keď je hlavné zariadenie offline.

## Verzie: AAPSClient, AAPSClient2 a AAPSClient3

Na rovnakom telefóne sledujúceho môžu byť vedľa seba nainštalované až tri klientske aplikácie, každá sleduje **iného** človeka: **AAPSClient** (ikona žltej sovy), **AAPSClient2** (modrá sova) a — novinka vo verzii 4 **AAPS** — **AAPSClient3** (zelená sova). Funkčne sú rovnaké. Líšia sa iba názvom a farbou (ikona aplikácie, pozadie widgetu a časť stavu na hlavnej obrazovke), aby ste ich rozlíšili. Každá aplikácia je spárovaná s vlastným hlavným zariadením. Podrobnosti nájdete v časti [O AAPSClient, AAPSClient2 a AAPSClient3](#remotecontrol-aapsclient-versions).

## Získanie aplikácie

**AAPSClient** získate rovnako ako **AAPS** — pozrite [Stiahnutie a inštalácia AAPSClient](#RemoteControl_aapsclient) — a nainštalujete ho ako hlavnú aplikáciu ([Prenos a inštalácia AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md)).

## Prvé spustenie: kratší Sprievodca nastavením

Pri prvom spustení **AAPSClient** spustí rovnakého **Sprievodcu nastavením**, akého poznáte z **AAPS**, ale s oveľa menej krokmi — na telefóne sledujúceho sa nenastavuje profil, inzulín, pumpa, APS ani ciele:

1. **Vitajte**, **licenčná zmluva**, **povolenia** a **hlavné heslo** — rovnaké ako v hlavnej aplikácii, pozrite [Sprievodca nastavením AAPS](../SettingUpAaps/SetupWizard.md).
2. Klient sa **nepýta** na **jednotky** ani na **dolnú/hornú značku**: prevezme ich z hlavného telefónu, hneď ako sa pripojí k Nightscoutu. Neskôr ich uvidíte v **Nastaveniach**, kde malá **ikona telefónu** ukazuje, že sú [synchronizované s hlavným telefónom](#client-master-config-prefs). Upravovať sa dajú iba vtedy, keď je hlavné zariadenie dostupné.
3. **Nastavenie z hlavného zariadenia** — na hlavnom zariadení otvorte **Spravovať → Autorizovaní klienti**, pridajte tento telefón pomocou **QR kódu** a tu ťuknite na **Oskenovať QR kód**. Jedno naskenovanie nastaví Nightscout s vlastným tokenom tohto telefónu a pri kóde, ktorý páruje, telefón aj spáruje. Telefón tiež prevezme názov, s ktorým ho pridali na hlavnom zariadení, ako názov svojej inštancie (písmená s diakritikou sa zmenia na písmená bez diakritiky, „Miloš“ sa zmení na „Milos“). **Po naskenovaní je nastavenie hotové**: sprievodca sa zavrie, pretože ďalšie kroky by iba ukazovali, čo urobil kód. Bez QR kódu tento krok preskočte. (Iba Android: skener zatiaľ nie je dostupný v iOS.)

   ![Krok Nastavenie z hlavného zariadenia s tlačidlom Oskenovať QR kód](../images/v4/AapsClient/aapsclient_wizard_from_master.png)

4. **Komunikácia** — zoznam pluginov ponúka iba to, čo potrebuje sledujúci (NSClientV3, xDrip+, Wear, Externé sprievodné (Companion) aplikácie, Garmin). Ak ste nenaskenovali QR kód, zapnite **NSClientV3** a zadajte **rovnakú adresu URL Nightscoutu** ako na hlavnom telefóne a prístupový token, so zapnutými **websocketmi** — presne tak, ako je opísané v časti [Synchronizácia](#RemoteControl_aapsclient).

   ![Krok Komunikácia na klientovi](../images/v4/AapsClient/aapsclient_wizard_communication.png)

5. **Spárovanie s hlavným zariadením** — tento krok existuje **iba** na klientovi. Pomocou PIN kódu pripojí toto zariadenie k hlavnému zariadeniu cez zabezpečený kanál príkazov a prevezme názov, s ktorým bol telefón pridaný na hlavnom zariadení, rovnako ako pri QR kóde. **Po spárovaní je nastavenie hotové.** Krok môžete aj preskočiť a spárovať kedykoľvek neskôr cez **Spravovať → Spárovanie s hlavným zariadením**.

   ![Krok Spárovanie s hlavným zariadením v sprievodcovi klienta](../images/v4/AapsClient/aapsclient_wizard_pair_step.png)

6. **Kto používa tento telefón?** — iba ak ste v sprievodcovi nespárovali: meno človeka, ktorý tento telefón používa. Podľa neho sa táto inštancia rozlišuje v reportoch a pri synchronizácii.

(aapsclient-pairing-with-the-master)=

## Spárovanie s hlavným zariadením

Na **hlavnom zariadení** otvorte **Spravovať → Autorizovaní klienti** a pridajte klienta. Spárovať sa dá dvoma spôsobmi:

- **Pomocou QR kódu** (najrýchlejšie, ak má telefón kameru): naskenujte kód v kroku sprievodcu „**Nastavenie z hlavného zariadenia**“ alebo cez **Spravovať → Spárovanie s hlavným zariadením → Naskenovať QR kód** a potvrďte tlačidlom „**Použiť**“. Nastaví tým aj Nightscout.
- **Pomocou PIN kódu**: na **klientovi** otvorte vyššie uvedený krok sprievodcu (alebo **Spravovať → Spárovanie s hlavným zariadením**), zadajte jednorazový PIN kód zobrazený na hlavnom zariadení a stlačte „**Spárovať**“. Klient potom ukáže, komu sa chystá dôverovať — potvrďte tlačidlom „**Spárovať**“:

![Potvrdenie na klientovi pred dokončením spárovania](../images/v4/AapsClient/aapsclient_pair_confirm.png)

V sprievodcovi úspešné spárovanie dokončí nastavenie a otvorí hlavnú obrazovku. Na hlavnom zariadení sa klient zobrazí ako **Aktívny** v zozname [Autorizovaní klienti](#client_master_master_setup). Potom **Spravovať → Spárovanie s hlavným zariadením** ukazuje „*Už spárované*“, rolu telefónu a to, či je zapnutý režim zvýšeného zabezpečenia:

![Spravovať → Spárovanie s hlavným zariadením na spárovanom klientovi: Už spárované, Rola: Opatrovateľ, Režim zvýšeného zabezpečenia je zapnutý](../images/v4/ClientMaster/pair_with_master_client.png) Celý postup párovania, podrobnosti o bezpečnosti a riešenie problémov nájdete na stránke [Ovládanie Master ↔ Client](#client_master_client_setup).

Po spárovaní dostane klient od hlavného zariadenia vlastný Nightscout token (ak má hlavné zariadenie token s rolou Admin) iba s oprávneniami, ktoré klient potrebuje, a prestane používať token, ktorý ste prípadne zadali. **AAPSClient** nikdy sám nezapisuje ošetrenia ani glykémiu do Nightscoutu: všetko, čo robí, sa pošle hlavnému zariadeniu, ktoré to zapíše. Pozrite si [Vlastný Nightscout token klienta](#client-master-control-own-token).

Hlavné zariadenie rozhoduje, čo môže tento telefón robiť, podľa jeho **[roly](#client-master-control-roles)** (Len na čítanie, Jedlá, Opatrovateľ alebo Správca). **Spravovať → Spárovanie s hlavným zariadením** ukazuje rolu telefónu.

## Hlavná obrazovka

Hlavná obrazovka klienta zrkadlí sledovaný okruh:

![Domovská obrazovka AAPSClient](../images/v4/AapsClient/aapsclient_home.png)

- **Glykémia, grafy, IOB/COB a profil** pochádzajú z Nightscoutu, presne tak, ako ich nahralo hlavné zariadenie.
- Zobrazený **stav okruhu** je stav **hlavného zariadenia** (klient nemá vlastný okruh). Kým klient nedostane z Nightscoutu režim prevádzky hlavného zariadenia, rámček režimu prevádzky ukazuje **otáznik** (neznámy).
- **Karta stavu** ukazuje zásobník a batériu **sledovanej pumpy** a batériu nahrávacieho zariadenia, prevzaté zo stavu zariadenia v Nightscoute — klient nemá pumpu, preto v aplikácii nie je žiadny miestny stav pumpy ani správa pumpy.
- Dolná lišta ponúka **Ošetrenia**, **Scény** a **Spravovať**, keď je klient spárovaný (pred spárovaním iba **Spravovať**) — nie sú tu karty pumpy ani cieľov.

## Ošetrenia a akcie

Všetko v časti **Spravovať** funguje ako v hlavnej aplikácii, s jedným dôležitým rozdielom: na klientovi sú akcie, ktoré by zmenili liečbu (bolus, sacharidy, dočasné ciele, scény…), **skryté, kým zariadenie nie je spárované**, a po spárovaní sa **posielajú hlavnému zariadeniu** na potvrdenie a vykonanie — pozrite [Používanie vzdialeného ovládania](#client-master-control).

Výnimkou je položka **Profil**: zobrazuje sa aj na **nespárovanom** klientovi, ale otvorí sa **iba na zobrazenie** — klient ukazuje profily, ktoré dostáva cez Nightscout (potrebuje ich na vlastné výpočty), bez tlačidiel na úpravu alebo aktiváciu. Keď je klient **spárovaný**, zoznam profilov sa synchronizuje s hlavným zariadením a profily môžete z klienta upravovať a aktivovať ako každú inú vzdialenú akciu.

Na **nespárovanom** klientovi ponúka **Spravovať** iba **Profil** a **Spárovanie s hlavným zariadením**:

![Obrazovka Spravovať na nespárovanom klientovi: iba Profil a Spárovanie s hlavným zariadením](../images/v4/AapsClient/aapsclient_manage_unpaired.png)

Červený pruh „*Hlavné zariadenie je nedostupné. Úpravy sú zakázané, kým sa pripojenie neobnoví.*“ sa zobrazuje aj na nespárovanom klientovi. Je to očakávané: zatiaľ neexistuje hlavné zariadenie, ku ktorému by sa dalo pripojiť. Pruh zmizne, keď je klient spárovaný a hlavné zariadenie je online.

Keď je klient spárovaný, zobrazia sa akcie liečby:

![Obrazovka Spravovať na spárovanom klientovi vrátane položky Spárovanie s hlavným zariadením](../images/v4/AapsClient/aapsclient_manage.png)

**Položka Pumpa tu nie je** — klient nemá pumpu.

Ak hlavné zariadenie nie je dostupné, rovnaký pruh sa zobrazí aj na spárovanom klientovi: akcie liečby sú sivé a všetko, čo skúsite, sa zablokuje skôr, než sa to odošle. Klient zistí, že hlavné zariadenie je offline, keď skúsite nejakú akciu, a keď je hlavné zariadenie opäť online, akcie znova povolí.

![Obrazovka Spravovať na spárovanom klientovi, keď je hlavné zariadenie offline: akcie pod pruhom sú sivé](../images/v4/AapsClient/aapsclient_manage_master_offline.png)

## Nastavenia synchronizované s hlavným zariadením

Aktívna **konfigurácia** pluginov a mnohé **nastavenia** sa synchronizujú medzi hlavným zariadením a jeho spárovanými klientmi; synchronizované položky sú označené malou **ikonou telefónu** a kým hlavné zariadenie nie je dostupné, sú vypnuté (s pruhom „*Hlavné zariadenie je nedostupné*“). Je to opísané v časti [Zmena konfigurácie a nastavení](#client-master-config-prefs).

## AAPSClient na inteligentných hodinkách

Hodinky s Wear OS môžu byť spárované s telefónom **klienta**; ich akcie idú cez klienta na hlavné zariadenie. Pozrite [Wear OS](../WearOS/WearOsSmartwatch.md) a [možnosti s inteligentnými hodinkami vo Vzdialenom ovládaní](#RemoteControl_smartwatches).
