(v4-changes)=
# Čo sa zmenilo v AAPS v4

Táto stránka zhŕňa dôležité **zmeny v správaní** medzi **AAPS** v3 a v4 – veci, ktoré fungujú inak, boli presunuté alebo odstránené –, aby súčasní používatelia vedeli, čo ich po aktualizácii čaká. Pozrite si aj [poznámky k vydaniu](ReleaseNotes.md) a [návod na aktualizáciu](UpdateToNewVersion.md).

```{contents} Table of contents
:depth: 2
:local: true
```

---

## NSClient v1 bol odstránený

**AAPS** v3 obsahoval **dva** pluginy na synchronizáciu s Nightscoutom:

- **NSClient** – starší klient (staré Nightscout REST / socket.io API, nazývané aj *„v1“*) a
- **NSClientV3** – klient pre novšie Nightscout **API v3**.

V **AAPS** v4 bol starší plugin **NSClient (v1)** **odstránený**. Na synchronizáciu s Nightscoutom zostáva iba **NSClientV3**.

```{admonition} What you need to do
:class: important
Ak ste vy (alebo váš sledujúci v **AAPSClient**) ešte synchronizovali so starým pluginom **NSClient (v1)**, prejdite pred aktualizáciou alebo po nej na **NSClientV3**:

- Otvorte **[Konfigurácia](../SettingUpAaps/ConfigBuilder.md) → Komunikácia → NSClientV3**.
- Zadajte **Adresu Nightscoutu** a **prístupový token** (NSClientV3 používa prístupový token, *nie* starý API secret – pozrite [vytvorenie tokenu](https://nightscout.github.io/nightscout/security/#create-a-token)).
- Vaša stránka Nightscout musí podporovať **API v3** (Nightscout 15 alebo novší).
- Ak používate **websockety**, zapnite alebo vypnite ich na **oboch** zariadeniach, na hlavnom aj na sledujúcom – nikdy iba na jednom.
```

Týka sa to iba toho, ako aplikácia komunikuje s Nightscoutom; vaše dáta v Nightscoute sa nemenia.

---

## Dolná navigácia: Ošetrenia, Scény a Spravovať

V **AAPS** v3 ste sa v aplikácii pohybovali pomocou riadka **kariet** (Prehľad, Akcie, Ošetrenia, …) a viaceré funkcie boli **pluginy**, ktoré ste zapínali v Config Builderi (**Akcie**, **Automatizácia**, **Jedlo**, …).

V **AAPS** v4 karty zmizli a s nimi aj zaškrtávacie políčko s okom v Config Builderi, ktoré zobrazovalo plugin ako kartu. Hlavnou obrazovkou je **Prehľad** a **dolná navigácia** vám ponúka tri panely. **Akcie, Automatizácia a Jedlo už nie sú pluginy** – v [Konfigurácii](../SettingUpAaps/ConfigBuilder.md) (premenovaný Config Builder) nie je čo zapínať; ich funkcie sú teraz v týchto paneloch.

(v4changes-treatments)=
### Ošetrenia – zadanie a podanie

Panel **Ošetrenia** slúži na zaznamenanie alebo podanie ošetrenia: **Bolusová kalkulačka**, **Inzulín** (ručný bolus), **Sacharidy**, **Ošetrenie** (inzulín a sacharidy spolu), **Kalibrácia**, **CGM** (otvorí vašu aplikáciu CGM, ak je nastavená) a vaše predvoľby **[Rýchleho sprievodcu](../DailyLifeWithAaps/QuickWizards.md)**.

![Spodný panel Ošetrenia](../images/v4/BehavioralChanges/treatments_sheet.png)

Na **hodinkách s Wear OS** sa tie isté ošetrenia zadávajú z **ponuky AAPS** na hodinkách (Kalkulačka, eSacharidy, Ošetrenie, …):

![Akcie ošetrení v ponuke AAPS na hodinkách](../images/v4/BehavioralChanges/treatments_watch.png)

### Scény

Vaše predvoľby pre situácie – pozrite [Scény](../DailyLifeWithAaps/Scenes.md).

(v4changes-manage)=
### Spravovať – správa a aktivácia

Panel **Spravovať** slúži na správu a aktiváciu všetkého ostatného: **[Profil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)**, **Nastavenia inzulínu** (vaše konfigurácie inzulínu), **[Dočasný cieľ](../DailyLifeWithAaps/TempTargets.md)**, predvoľby **[Rýchleho sprievodcu](../DailyLifeWithAaps/QuickWizards.md)**, **[Scény](../DailyLifeWithAaps/Scenes.md)**, **Automatizácia**, **Jedlo**, **Striedanie miest**, **Pumpa**, **[Autorizovaní klienti](../RemoteFeatures/ClientMasterControl.md)** – a navyše akcie pumpy, ktoré boli predtým na karte *Akcie* (**Predĺžený bolus**, **Zrušiť dočasný bazál**, **Plnenie/doplňovanie**, **Zavedenie senzora**, **Výmena batérie v pumpe**).

![Spodný panel Spravovať](../images/v4/BehavioralChanges/manage_sheet.png)

Všetky vaše existujúce pravidlá automatizácie a záznamy jedál zostávajú zachované; zmenil sa iba spôsob, ako sa k týmto funkciám dostanete.

(screens-action-tab)=
#### Kam zmizla karta Akcie?

**AAPS** 3.x mal kartu „Akcie“. V **AAPS** 4 sú jej funkcie na iných miestach:

* **Prepnutie profilu** a **Percento profilu**: ťuknite na [názov profilu](#aaps-screens-profile--target) na hlavnej obrazovke alebo použite **Spravovať → Profil**. Pozrite [Zmena percenta profilu](#ProfileSwitch-change-percentage).
* **Dočasný cieľ**: stlačte [cieľ](#aaps-screens-profile--target) na hlavnej obrazovke alebo použite **Spravovať → Dočasný cieľ**.
* **Plnenie/doplňovanie**, **Zavedenie senzora**, **Kontrola glykémie** a ostatné záznamy v Starostlivosti: v rozbalenom [paneli stavu](#aaps-screens-careportal), v paneli **Spravovať** alebo ako tlačidlá [Rýchleho spustenia](../DailyLifeWithAaps/QuickLaunch.md).
* **Prehliadač histórie**, **Štatistiky** (CDD): v **ponuke** (☰).

```{admonition} Profile switch and profile percentage
:class: note
V **AAPS** v3 sa dlhým stlačením názvu profilu otvoril dialóg prepnutia profilu (percento, trvanie, dočasný cieľ Aktivita). V **AAPS** v4 **ťuknite** na názov profilu (alebo **Spravovať → Profil**) a potom ťuknite na okrúhle tlačidlo **▶** vpravo dole – otvoria sa rovnaké nastavenia. Pozrite [Zmena percenta profilu](#ProfileSwitch-change-percentage).
```

---

(v4changes-read-only-management)=
## Ochrana nastavení teraz zamyká aj obrazovky správy

V **AAPS** v3 si [Ochrana nastavení](#Preferences-settings-protection) pýtala heslo iba pri otvorení nastavení. Profily ste mohli pridávať alebo upravovať na karte **Lokálny profil** aj bez neho.

V **AAPS** v4 sa Ochrana nastavení vzťahuje aj na úpravy na obrazovkách správy: **Profil**, **Nastavenia inzulínu**, **Dočasný cieľ** a **Rýchly sprievodca**. Ak sú vaše nastavenia zamknuté, tieto obrazovky sa otvoria **iba na čítanie**:

- Záznamy môžete prezerať a tlačidlom **▶ Aktivovať** ich aktivovať alebo použiť.
- Tlačidlá **Pridať / Upraviť / Klonovať / Vymazať** sú **skryté**. Iba **✏️ ceruzka** v hornej lište ukazuje, že úpravy môžete odomknúť.

![Obrazovka Profil iba na čítanie – dole iba Aktivovať, v hornej lište ceruzka](../images/v4/Profiles/profile_manage_readonly.png)

```{admonition} What you need to do
:class: important
Ak chcete záznam pridať, upraviť, klonovať alebo vymazať, ťuknite na **✏️ ceruzku** v hornej lište a zadajte heslo k nastaveniam (alebo použite biometriu). Tlačidlá sa zobrazia.

Ak nastavenia chrániť nepotrebujete, Ochranu nastavení môžete vypnúť v **Nastavenia → Ochrana**.
```

---

(v4changes-active-insulin)=
## Používaný inzulín sa nedá upraviť

V **AAPS** v3 ste mohli DIA používaného inzulínu kedykoľvek zmeniť.

V **AAPS** v4 je inzulín označený ako **AKTÍVNY** v **Spravovať → Nastavenia inzulínu** sivý: nemôžete ho upraviť ani vymazať.

Pri aktualizácii **AAPS** ponechá inzulín a DIA, ktoré už boli uložené v prepnutiach profilu z v3. Ak nájde staršie záznamy, pri ktorých je inzulín známy, ale DIA nie, použije pre ne predvolenú DIA a raz zobrazí správu, napríklad *Staršie záznamy neobsahovali dobu účinku inzulínu, preto sa pre inzulín Lyumjev použila hodnota 9,0 hodín. Skontrolujte nastavenia inzulínu — už migrované záznamy sa dodatočne neaktualizujú.* Keď túto správu uvidíte, skontrolujte nastavenia inzulínu.

```{admonition} What you need to do
:class: important
Ak chcete zmeniť DIA alebo vrchol, pridajte nový inzulín tlačidlom **+**, upravte ho, uložte ho a **▶ Aktivujte** ho. Pozrite [Zmena používaného inzulínu](#Config-Builder-insulin-change-active).
```

---

(v4changes-remote-control)=
## Vzdialené ovládanie z AAPSClient vyžaduje spárovanie

V **AAPS** v3 **AAPSClient** ovládal **AAPS** zápisom ošetrení zo Starostlivosti do Nightscoutu a nemohol podať bolus.

V **AAPS** v4 sa klient a hlavný telefón raz **spárujú** a každý príkaz je podpísaný. Hlavný telefón každý príkaz skontroluje a potvrdí a klient teraz môže podať aj bolus.

- Každý klient má **[rolu](#client-master-control-roles)**, ktorá obmedzuje, čo môže robiť.
- Keď je zapnuté ovládanie z klienta, hlavný telefón je v **[režime zvýšeného zabezpečenia](#client-master-control-hardened-mode)**: ošetrenia a zmeny zadané priamo do Nightscoutu (na webovej stránke, v iných aplikáciách) sa už nepoužijú.
- Každý klient dostane **[vlastný token pre Nightscout](#client-master-control-own-token)** iba s oprávneniami, ktoré potrebuje.

```{admonition} What you need to do
:class: important
Spárujte každý **AAPSClient** s hlavným telefónom: pozrite [Ovládanie Master ↔ Client](#client-master-control). Ak má hlavný telefón token s rolou Admin, zobrazí QR kód, ktorý klienta nastaví a spáruje jedným naskenovaním. Ak ste predtým zadávali ošetrenia na webovej stránke Nightscoutu, zadávajte ich namiesto toho na spárovanom klientovi.
```

---

## Duplicitné údaje glykémie teraz prepnú okruh do režimu Ochrana pred nízkou glykémiou

Keď **AAPS** dostane tú istú hodnotu glykémie dvakrát (červený varovný odznak na skratke zdroja glykémie v dolnej lište), nedokáže spoľahlivo vypočítať trend, a preto prestane podávať korekčný inzulín.

V **AAPS** v3 sa to dialo potichu na pozadí: okruh sa stále zobrazoval ako **Uzavretý okruh**, hoci už nemohol korigovať.

V **AAPS** v4 je táto zmena viditeľná. Uzavretý okruh sa prepne do režimu **Ochrana pred nízkou glykémiou (LGS)** a dialóg okruhu vám povie prečo: *„Režim LGS v dôsledku duplicitných hodnôt v zdroji glykémie“*. **AAPS** môže stále znížiť alebo pozastaviť váš bazál, aby vás chránil pred hypoglykémiou.

```{admonition} What you need to do
:class: important
Nájdite a odstráňte duplicitné hodnoty – pozrite [Varovný znak glykémie](#aaps-screens-bg-warning-sign).

Keď zmiznú, **AAPS** zostane v režime **Ochrana pred nízkou glykémiou (LGS)**. Do režimu **Uzavretý okruh** sa sám nevráti: stlačte a podržte ikonu okruhu a znova vyberte **Uzavretý okruh**.
```

---

(v4changes-tidepool)=
## Tidepool: dáta sa teraz zobrazujú pod názvom zariadenia AAPS

V **AAPS** v3 sa dáta nahraté do [Tidepoolu](../SettingUpAaps/Tidepool.md) zobrazovali v Tidepoole pod iným názvom zariadenia.

V **AAPS** v4 sa dáta zobrazujú pod názvom zariadenia **AAPS**. Po aktualizácii **AAPS** začne v Tidepoole novú sadu dát. Vaše staršie dáta zostanú v Tidepoole pod starým názvom zariadenia.

```{admonition} What you need to do
:class: important
Zvyčajne nič: nové dáta sa jednoducho zobrazia pod **AAPS**.

**Nespúšťajte** „**Úplná synchronizácia**“, kým sú staré dáta ešte v Tidepoole: tie isté dáta by tam potom boli dvakrát. Ak chcete mať všetky dáta pod novým názvom, najprv použite tlačidlo „**Zmazať všetky dáta**“ na [obrazovke Tidepool](#tidepool-menu) (vymaže aj staré dáta nahraté z **AAPS**) a potom spustite „**Úplná synchronizácia**“. Znova sa dajú nahrať iba dáta, ktoré sú ešte uložené v **AAPS** vo vašom telefóne.
```

---


<!-- =====================================================================
     This page is a growing list of v4 behavioral changes.
     Add new changes as their own "## " section, newest grouping as agreed.
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
