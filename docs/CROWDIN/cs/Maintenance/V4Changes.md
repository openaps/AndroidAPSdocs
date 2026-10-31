(v4-changes)=
# Co se změnilo v AAPS v4

Tato stránka shrnuje důležité **změny v chování** mezi **AAPS** v3 a v4 – věci, které fungují jinak, byly přesunuty nebo odstraněny – aby stávající uživatelé věděli, co čekat po aktualizaci. Viz také [Poznámky k vydání](ReleaseNotes.md) a [návod k aktualizaci](UpdateToNewVersion.md).

```{contents} Table of contents
:depth: 2
:local: true
```

---

## NSClient v1 byl odstraněn

**AAPS** v3 obsahoval **dva** pluginy pro synchronizaci s Nightscoutem:

- **NSClient** – starší klient (staré Nightscout REST / socket.io API, nazývané také *„v1“*) a
- **NSClientV3** – klient pro novější Nightscout **API v3**.

V **AAPS** v4 byl starší plugin **NSClient (v1)** **odstraněn**. Pro synchronizaci s Nightscoutem zůstává jen **NSClientV3**.

```{admonition} What you need to do
:class: important
Pokud jste vy (nebo váš sledující v **AAPSClient**) stále synchronizovali přes starý plugin **NSClient (v1)**, přepněte před aktualizací nebo po ní na **NSClientV3**:

- Otevřete **[Konfigurace](../SettingUpAaps/ConfigBuilder.md) → Komunikace → NSClientV3**.
- Zadejte **URL Nightscoutu** a **přístupový token** (NSClientV3 používá přístupový token, *ne* starý API secret – viz [vytvoření tokenu](https://nightscout.github.io/nightscout/security/#create-a-token)).
- Vaše stránka Nightscout musí podporovat **API v3** (Nightscout 15 nebo novější).
- Pokud používáte **websockety**, zapněte nebo vypněte je na **obou** zařízeních, hlavním i sledujícím – nikdy jen na jednom.
```

Týká se to jen toho, jak aplikace komunikuje s Nightscoutem; vaše data v Nightscoutu se nemění.

---

## Spodní navigace: Ošetření, Scény a Spravovat

V **AAPS** v3 jste se v aplikaci pohybovali pomocí řady **karet** (Přehled, Akce, Ošetření, …) a několik funkcí byly **pluginy**, které jste zapínali v Konfiguraci (**Akce**, **Automatizace**, **Potraviny**, …).

V **AAPS** v4 karty zmizely a s nimi i zaškrtávací políčko s okem v Konfiguraci, které zobrazovalo plugin jako kartu. Hlavní obrazovka je **Přehled** a **spodní navigace** vám nabízí tři panely. **Akce, Automatizace a Potraviny už nejsou pluginy** – v [Konfiguraci](../SettingUpAaps/ConfigBuilder.md) (přejmenovaný Config Builder) není co zapínat; jejich funkce jsou nyní v těchto panelech.

(v4changes-treatments)=
### Ošetření – zadání a podání

Panel **Ošetření** slouží k zaznamenání nebo podání ošetření: **Bolusová kalkulačka**, **Inzulín** (ruční bolus), **Sacharidy**, **Ošetření** (inzulín + sacharidy najednou), **Kalibrace**, **CGM** (otevře vaši aplikaci CGM, pokud je nastavena) a vaše **[Rychlé bolusy](../DailyLifeWithAaps/QuickWizards.md)**.

![Spodní panel Ošetření](../images/v4/BehavioralChanges/treatments_sheet.png)

Na **hodinkách s Wear OS** se stejná ošetření zadávají z **nabídky AAPS** na hodinkách (Bolusová kalkulačka / Kalkulačka, eSacharidy, Ošetření, …):

![Akce ošetření v nabídce AAPS na hodinkách](../images/v4/BehavioralChanges/treatments_watch.png)

### Scény

Vaše předvolby pro různé situace – viz [Scény](../DailyLifeWithAaps/Scenes.md).

(v4changes-manage)=
### Spravovat – správa a aktivace

Panel **Spravovat** slouží ke správě a aktivaci všeho ostatního: **[Profil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)**, **Nastavení inzulínu** (vaše konfigurace inzulínů), **[Dočasný cíl](../DailyLifeWithAaps/TempTargets.md)**, předvolby **[Rychlý bolus](../DailyLifeWithAaps/QuickWizards.md)**, **[Scény](../DailyLifeWithAaps/Scenes.md)**, **Automatizace**, **Potraviny**, **Rotace míst aplikace**, **Pumpa**, **[Autorizovaní klienti](../RemoteFeatures/ClientMasterControl.md)** – a navíc akce pumpy, které byly dříve na kartě *Akce* (**Prodloužený bolus**, **Zrušit dočasný bazál**, **Plnění/doplňování**, **Výměna senzoru**, **Výměna baterie pumpy**).

![Spodní panel Spravovat](../images/v4/BehavioralChanges/manage_sheet.png)

Všechna vaše stávající pravidla automatizace a záznamy potravin zůstávají zachovány; změnil se jen způsob, jak se k těmto funkcím dostanete.

(screens-action-tab)=
#### Kam zmizela karta Akce?

**AAPS** 3.x měl kartu „Akce“. V **AAPS** 4 jsou její funkce na jiných místech:

* **Přepnutí profilu** a **procento profilu**: klepněte na [název profilu](#aaps-screens-profile--target) na hlavní obrazovce, nebo **Spravovat → Profil**. Viz [Změna procenta profilu](#ProfileSwitch-change-percentage).
* **Dočasný cíl**: stiskněte [cíl](#aaps-screens-profile--target) na hlavní obrazovce, nebo **Spravovat → Dočasný cíl**.
* **Plnění/doplňování**, **Výměna senzoru**, **Kontrola glykémie** a další záznamy péče: v rozbaleném [stavovém panelu](#aaps-screens-careportal), v panelu **Spravovat** nebo jako tlačítka [Rychlého spuštění](../DailyLifeWithAaps/QuickLaunch.md).
* **Prohlížeč historie**, **Statistiky** (CDD): v **nabídce** (☰).

```{admonition} Profile switch and profile percentage
:class: note
V **AAPS** v3 se dlouhým stisknutím názvu profilu otevřel dialog přepnutí profilu (procento, trvání, dočasný cíl Aktivita). V **AAPS** v4 **klepněte** na název profilu (nebo **Spravovat → Profil**) a potom klepněte na kulaté tlačítko **▶** vpravo dole, tím otevřete stejná nastavení. Viz [Změna procenta profilu](#ProfileSwitch-change-percentage).
```

---

(v4changes-read-only-management)=
## Ochrana nastavení nyní zamyká i obrazovky správy

V **AAPS** v3 se [Ochrana nastavení](#Preferences-settings-protection) ptala na heslo jen při otevření nastavení. Profily jste mohli přidávat nebo upravovat na kartě **Lokální profil** i bez hesla.

V **AAPS** v4 se Ochrana nastavení vztahuje i na úpravy na obrazovkách správy: **Profil**, **Nastavení inzulínu**, **Dočasný cíl** a **Rychlý bolus**. Pokud jsou vaše nastavení zamčená, otevřou se tyto obrazovky **jen pro čtení**:

- Záznamy můžete procházet a **▶ Aktivovat** nebo použít.
- Tlačítka **Přidat / Upravit / Klonovat / Smazat** jsou **skrytá**. Jen **✏️ tužka** v horní liště ukazuje, že můžete úpravy odemknout.

![Obrazovka Profil jen pro čtení – dole jen Aktivovat, v horní liště tužka](../images/v4/Profiles/profile_manage_readonly.png)

```{admonition} What you need to do
:class: important
Chcete-li záznam přidat, upravit, klonovat nebo smazat, klepněte na **✏️ tužku** v horní liště a zadejte heslo k nastavení (nebo použijte biometrii). Tlačítka se zobrazí.

Pokud nastavení chránit nepotřebujete, můžete Ochranu nastavení vypnout v **Nastavení → Ochrana**.
```

---

(v4changes-active-insulin)=
## Používaný inzulín nelze upravit

V **AAPS** v3 jste mohli kdykoli změnit DIA inzulínu, který jste používali.

V **AAPS** v4 je inzulín označený **AKTIVNÍ** v **Spravovat → Nastavení inzulínu** zašedlý: nemůžete ho upravit ani smazat.

Při aktualizaci **AAPS** zachová inzulín a DIA, které už byly uloženy v přepnutích profilu z v3. Pokud najde starší záznamy, u kterých je inzulín známý, ale DIA ne, použije pro ně výchozí DIA a jednou zobrazí zprávu, například *Starší záznamy nemají žádné trvání inzulínu, proto bylo pro Lyumjev použito 9,0 hodin. Zkontrolujte nastavení inzulínu — již převedené záznamy nebudou dodatečně aktualizovány.* Když ji uvidíte, zkontrolujte nastavení inzulínu.

```{admonition} What you need to do
:class: important
Chcete-li změnit DIA nebo vrchol, přidejte nový inzulín tlačítkem **+**, upravte ho, uložte a **▶ Aktivujte** ho. Viz [Změna používaného inzulínu](#Config-Builder-insulin-change-active).
```

---

(v4changes-remote-control)=
## Vzdálené ovládání z AAPSClient vyžaduje spárování

V **AAPS** v3 **AAPSClient** ovládal **AAPS** zápisem ošetření z Péče do Nightscoutu a nemohl podat bolus.

V **AAPS** v4 se klient a hlavní telefon jednou **spárují** a každý příkaz je podepsaný. Hlavní telefon každý příkaz zkontroluje a potvrdí a klient nyní může podat i bolus.

- Každý klient má **[roli](#client-master-control-roles)**, která omezuje, co smí dělat.
- Když je ovládání z klienta zapnuté, je hlavní telefon v **[zabezpečeném režimu](#client-master-control-hardened-mode)**: ošetření a změny zadané přímo do Nightscoutu (na webu, v jiných aplikacích) se už nepoužijí.
- Každý klient dostane **[vlastní token Nightscoutu](#client-master-control-own-token)** jen s oprávněními, která potřebuje.

```{admonition} What you need to do
:class: important
Spárujte každý **AAPSClient** s hlavním telefonem: viz [Ovládání hlavní zařízení ↔ klient](#client-master-control). S administrátorským tokenem na hlavním telefonu zobrazí hlavní telefon QR kód, který klienta nastaví a spáruje jedním naskenováním. Pokud jste dříve zadávali ošetření na webu Nightscoutu, zadávejte je místo toho na spárovaném klientovi.
```

---

## Duplicitní data glykémie nyní přepnou smyčku do režimu Ochrana před nízkou glykémií

Když **AAPS** dostane stejnou hodnotu glykémie dvakrát (červený varovný odznak na zkratce zdroje glykémie ve spodní liště), nemůže spolehlivě vypočítat váš trend, a proto přestane podávat korekční inzulín.

V **AAPS** v3 se to dělo potichu na pozadí: vaše smyčka se stále zobrazovala jako **Uzavřená smyčka**, i když už nemohla korigovat.

V **AAPS** v4 je tato změna vidět. Uzavřená smyčka se přepne do režimu **Ochrana před nízkou glykémií** a dialog smyčky vám řekne proč: *„Režim LGS v důsledku duplicitních hodnot ve zdroji glykémie“*. **AAPS** může stále snížit nebo pozastavit váš bazál, aby vás chránil před hypoglykémií.

```{admonition} What you need to do
:class: important
Najděte a odstraňte duplicitní hodnoty – viz [Varovná značka glykémie](#aaps-screens-bg-warning-sign).

Když jsou pryč, **AAPS** zůstane v režimu **Ochrana před nízkou glykémií**. Sám se do režimu **Uzavřená smyčka** nevrátí: stiskněte a podržte ikonu smyčky a znovu vyberte **Uzavřená smyčka**.
```

---

(v4changes-tidepool)=
## Tidepool: data se nyní zobrazují pod názvem zařízení AAPS

V **AAPS** v3 se data nahraná do [Tidepoolu](../SettingUpAaps/Tidepool.md) zobrazovala v Tidepoolu pod jiným názvem zařízení.

V **AAPS** v4 se data zobrazují pod názvem zařízení **AAPS**. Po aktualizaci **AAPS** v Tidepoolu založí novou sadu dat. Vaše starší data zůstanou v Tidepoolu pod starým názvem zařízení.

```{admonition} What you need to do
:class: important
Obvykle nic: nová data se prostě objeví pod **AAPS**.

**Nespouštějte** „**Plná synchronizace**“, dokud jsou stará data stále v Tidepoolu: stejná data by tam pak byla dvakrát. Pokud chcete mít všechna data pod novým názvem, použijte nejprve tlačítko „**Smazat všechna data**“ na [obrazovce Tidepool](#tidepool-menu) (smaže také stará data nahraná z **AAPS**) a potom spusťte „**Plná synchronizace**“. Znovu nahrát lze jen data, která jsou stále uložena v **AAPS** ve vašem telefonu.
```

---


<!-- =====================================================================
     This page is a growing list of v4 behavioral changes.
     Add new changes as their own "## " section, newest grouping as agreed.
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
