(quicklaunch)=
# Rychlé spuštění (panel rychlých akcí v přehledu)

**Rychlé spuštění** (QuickLaunch) je malý **panel rychlých akcí**, který je umístěn dole na přehledu **AAPS**, těsně nad spodní navigací. Je to řada tlačítek na jedno klepnutí, kterou si můžete přizpůsobit: sami rozhodnete, které akce tam budou a v jakém pořadí. Věci, které děláte nejčastěji, tak máte na hlavní obrazovce vždy na jedno klepnutí.

```{contents} Table of contents
:depth: 2
:local: true
```

![Panel Rychlé spuštění na přehledu](../images/v4/QuickLaunch/quicklaunch_toolbar.png)

---

## Použití panelu

Panel je na **přehledu**, mezi grafy a spodní navigací:

![Panel Rychlé spuštění na svém místě na přehledu](../images/v4/QuickLaunch/quicklaunch_overview.png)

- **Klepnutím** na ikonu spustíte její akci – přesně tak, jako byste ji otevřeli z její běžné obrazovky (bolus nebo ošetření stále nejdříve zobrazí obvyklé potvrzení).
- **Dlouhým stiskem** ikony zobrazíte **popisek** s názvem akce a krátkým popisem.
- Pokud přidáte **více tlačítek, než se vejde** na obrazovku, další se přesunou do **rozbalovací nabídky** (tlačítko **⋮** na konci panelu).
- Každá ikona má **barvu** své akce (např. inzulín, sacharidy, dočasný cíl), takže ji poznáte na první pohled.

```{admonition} The toolbar is always there
:class: note
Poslední tlačítko je vždy **Konfigurace Rychlého spuštění** (ozubené kolo **⚙️**). Nelze ho odstranit, takže se na obrazovku konfigurace dostanete vždy přímo z panelu. Ve výchozím stavu panel obsahuje jen dvě tlačítka – **Bolusová kalkulačka** a toto ozubené kolo.
```

---

## Konfigurace Rychlého spuštění

Klepněte na ozubené kolo **⚙️** na panelu (nebo otevřete **[Konfigurace](../SettingUpAaps/ConfigBuilder.md) → … → Konfigurace Rychlého spuštění**) a otevře se obrazovka **Konfigurace Rychlého spuštění** (*„Přizpůsobit tlačítka rychlých akcí v přehledu“*).

![Konfigurace Rychlého spuštění – Vybrané akce a pod nimi katalog akcí k přidání](../images/v4/QuickLaunch/quicklaunch_config.png)

Obrazovka má dvě části:

- **Vybrané akce** (nahoře) – tlačítka, která jsou právě na vašem panelu, v pořadí jako na panelu.
- Pod nimi **katalog** – všechny akce, které můžete přidat, seskupené podle kategorií. Každá položka katalogu má tlačítko **➕** pro přidání.

### Vybrané akce – změna pořadí, úprava, odstranění

Každá vybraná akce má:

- **⠿ úchyt** – stiskněte a táhněte, abyste **změnili pořadí** tlačítek (pořadí zde je pořadí na panelu),
- tlačítko **−** – **odstraní** akci z panelu,
- a jen u zkratky **Profil** tlačítko **✏️** pro úpravu procenta/trvání (viz [Zkratky profilů](#profile-shortcuts)).

Změny se projeví **okamžitě** – žádné samostatné *Uložit* není. Přidaná akce se umístí na konec panelu; odtud ji můžete přesunout.

---

## Kategorie akcí

Katalog seskupuje vše, co můžete přidat, do následujících kategorií, v tomto pořadí. Kategorie, které nemají co nabídnout (např. nemáte žádné scény), se jednoduše nezobrazí.

### Ošetření

Běžné dialogy pro ošetření a CGM:

- **Inzulín** – ručně vydá bolus.
- **Sacharidy** – zaznamená sacharidy bez inzulínu.
- **Bolusová kalkulačka** – otevře bolusovou kalkulačku.
- **Ošetření** – zaznamená inzulín a sacharidy společně.
- **CGM** – otevře vaši aplikaci CGM (např. xDrip).
- **Kalibrace** – zkalibruje senzor CGM.

### Péče

Události péče a záznamy o údržbě zařízení:

- **Kontrola glykémie**, **Poznámka**, **Cvičení**, **Otázka**, **Oznámení**,
- **Výměna senzoru**, **Výměna baterie pumpy**, **Výměna setu**, **Plnění/doplňování**, **Rotace míst aplikace**.

**Plnění/doplňování** a **Výměna baterie pumpy** se nabízí jen tehdy, když je vaše pumpa používá. Například patch pumpy se plní a mění baterii ve svých vlastních krocích aktivace, takže se u nich tyto položky nezobrazují (stejně jako v panelu **Spravovat**).

![Kategorie Péče v katalogu](../images/v4/QuickLaunch/quicklaunch_categories_2.png)

Jsou to stejné položky, ke kterým se jinak dostanete přes panely **[Ošetření](#v4changes-treatments)** a **[Spravovat](#v4changes-manage)** – Rychlé spuštění jen umístí ty, které používáte, na přehled.

### Spravovat

Obrazovky panelu **[Spravovat](#v4changes-manage)** ve stejném pořadí, takže tu, kterou používáte nejvíc, můžete otevřít z panelu:

- **Profil**, **Nastavení inzulínu** (správa a aktivace konfigurací inzulínu – záměrně se jmenuje jinak než **Inzulín**, protože to tlačítko vydává bolus), **Dočasný cíl**, **Rychlý bolus**, **Scény**, **Automatizace**, **Potraviny**,
- **Režim smyčky** – uzavře nebo otevře smyčku, pozastaví ji nebo odpojí pumpu,
- **Autorizovaní klienti** – jen na hlavním zařízení nebo spárovaném klientovi.

Tato tlačítka otevřou obrazovku; sama nic nespouštějí. Chcete-li spustit scénu nebo rychlý bolus jedním klepnutím, přidejte je z kategorie **Scény** nebo **Rychlé bolusy** níže.

![Kategorie Spravovat v katalogu](../images/v4/QuickLaunch/quicklaunch_categories_manage.png) ![Kategorie Spravovat, pokračování](../images/v4/QuickLaunch/quicklaunch_categories_manage_2.png)

### Rychlý bolus

Každé vaše přednastavení **[Rychlého bolusu](QuickWizards.md)** můžete přidat jako tlačítko, takže opakované jídlo máte na přehledu na jedno klepnutí. Tlačítko nese název přednastavení a ukazuje množství sacharidů/inzulínu; klepnutím se spustí Rychlý bolus s obvyklým potvrzením.

Rychlé bolusy nastavené jen pro zobrazení na hodinkách se nenabízí. Tlačítko Rychlého bolusu na panelu se řídí stejnými pravidly jako v panelu **Ošetření**: mimo svůj [platný časový rozsah](#quickwizard_validity) a krátce po použití je skryté. V konfiguraci panelu zůstává a znovu se objeví, jakmile lze Rychlý bolus znovu použít.

### Scény

Každou zapnutou **[scénu](Scenes.md)** můžete přidat jako tlačítko. Po klepnutí se zobrazí žádost o potvrzení a pak se scéna aktivuje (stejná sada akcí, jakou byste dostali z obrazovky Scény). Tato kategorie se zobrazí, jen pokud máte alespoň jednu scénu.

Popisek i katalog ukazují stejné shrnutí jako **Spravovat → Scény**, například *„3 akce, 2 h → Zklidnění“*, kde název za šipkou je navazující scéna.

### Automatizace

Vaše **uživatelská** automatizační pravidla (ta, která spouštíte ručně) můžete přidat jako tlačítka. Po klepnutí se zobrazí žádost o potvrzení a pak se provedou akce daného pravidla.

```{admonition} Automation buttons run on the master
:class: note
Automatizace se provádí na **hlavním zařízení**, takže zkratky automatizace se nabízí a spouští jen na hlavním zařízení. Na spárovaném **[klientovi](../RemoteFeatures/ClientMasterControl.md)** nejsou k dispozici.
```

### Přednastavení dočasných cílů

Každé vaše přednastavení **[Dočasného cíle](TempTargets.md)** můžete přidat jako tlačítko (zobrazí se jeho název, cíl a trvání, například *„Před jídlem – 5,0 mmol/l, 45 min“*). Po klepnutí se zobrazí žádost o potvrzení a pak se tento dočasný cíl spustí.

![Dynamické kategorie – Rychlé bolusy a Přednastavení dočasných cílů (Scény a Automatizace se zobrazí, když nějaké máte)](../images/v4/QuickLaunch/quicklaunch_dynamic.png)

(profile-shortcuts)=
### Profil

Každý **[profil](ProfileSwitch-ProfilePercentage.md)** můžete přidat jako **zkratku**, která jedním klepnutím provede **přepnutí profilu**. Na rozdíl od většiny zkratek má zkratka profilu vlastní **procento** a **trvání**, které nastavíte po přidání tlačítkem **✏️**:

- **Procento** (30–250 %, po krocích 5 %) – při použití profil upraví v tomto poměru. 100 % použije profil beze změny.
- **Trvání** (0–10080 min, tedy až 7 dní, po krocích 10 min) – jak dlouho přepnutí trvá. **0 = Trvalé** (dokud znovu nepřepnete).

![Zkratky profilů a kategorie pluginů v katalogu](../images/v4/QuickLaunch/quicklaunch_categories.png)

Díky tomu můžete mít několik tlačítek pro **stejný** profil s různou silou – například *„Profil 100 %“* a *„Profil 70 % na 2 h“* – a kterékoli z nich použít jedním klepnutím. (Stejný profil můžete přidat víckrát s různým nastavením.)

### Pluginy

![Zkratky pluginů v katalogu](../images/v4/QuickLaunch/quicklaunch_categories_6.png)

Nakonec můžete jako zkratku pro přímé otevření přidat jakýkoli **zapnutý plugin**, který má vlastní obrazovku. Jsou seskupené podle typu pluginu – **Pumpa**, **Zdroj glykémie**, **APS**, **Smyčka**, **Detekce citlivosti**, **Vyhlazování**, **Kalibrace**, **Omezení**, **Komunikace** a **Obecné** – takže se například z přehledu dostanete přímo na obrazovku pumpy nebo smyčky.

---

## Rychlé spuštění a hlavní zařízení/klient

Na rozdíl od většiny nastavení se **panel Rychlé spuštění nastavuje pro každé zařízení zvlášť** – je uložen **místně a nesynchronizuje se** mezi hlavním zařízením a spárovanými klienty, takže každé zařízení má svou vlastní sadu tlačítek. (Je *ale* součástí **zálohy/exportu** nastavení, takže obnovení ho na stejném zařízení vrátí.)

Co může zařízení umístit na svůj panel, stále záleží na tom, co má: rychlé bolusy, scény, přednastavení dočasných cílů i profily se synchronizují, takže katalog klienta nabízí stejné položky – jen si je vyberete pro každé zařízení zvlášť. Několik podrobností, které je dobré znát:

- Tlačítka, jejichž cíl už neexistuje (smazaný rychlý bolus, scéna nebo přednastavení, vypnuté pravidlo), se **automaticky přeskočí**.
- Zkratky **Automatizace** se nabízí a spouští jen na **hlavním zařízení** (automatizace se provádí na hlavním zařízení). Tlačítka scén, rychlých bolusů, dočasných cílů a profilů jsou na klientovi k dispozici.
- Když na klientovi klepnete na tlačítko, které musí běžet na hlavním zařízení (bolus, dočasný cíl, přepnutí profilu nebo scéna), provede ho **hlavní zařízení** a vystaví potvrzení. Viz [Ovládání master ↔ klient](../RemoteFeatures/ClientMasterControl.md).

---


<!-- =====================================================================
     Screenshots captured from a real master device:
       - quicklaunch_toolbar.png    (cropped close-up of the overview toolbar pill)
       - quicklaunch_overview.png   (full overview showing the toolbar in place)
       - quicklaunch_config.png     (Configure QuickLaunch: Selected actions + Treatment + start of Manage)
       - quicklaunch_dynamic.png    (catalog: Quick Wizard / Scenes / Automation / Temp Target Presets)
       - quicklaunch_categories.png (catalog: Profile shortcuts + plugin categories)
     No QuickLaunch action was actually run (nothing delivered; only scrolled).
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
