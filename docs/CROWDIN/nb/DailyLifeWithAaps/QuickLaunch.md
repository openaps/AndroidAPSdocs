(quicklaunch)=
# Hurtigstart (QuickLaunch, verktøylinjen med hurtigstartsknapper i oversikten)

**Hurtigstart** (QuickLaunch) er den lille **verktøylinjen med hurtigstartsknapper** som ligger nederst i **AAPS**-oversikten, rett over navigasjonslinjen nederst. Det er en rad med knapper som du selv setter sammen: du bestemmer hvilke handlinger som skal ligge der, og i hvilken rekkefølge, slik at det du gjør oftest alltid er ett trykk unna på hovedskjermen.

```{contents} Table of contents
:depth: 2
:local: true
```

![Hurtigstart-verktøylinjen i oversikten](../images/v4/QuickLaunch/quicklaunch_toolbar.png)

---

## Bruke verktøylinjen

Verktøylinjen ligger i **oversikten**, mellom grafene og navigasjonslinjen nederst:

![Hurtigstart-verktøylinjen på plass i oversikten](../images/v4/QuickLaunch/quicklaunch_overview.png)

- **Trykk** på et ikon for å kjøre handlingen — akkurat som om du hadde åpnet den fra det vanlige skjermbildet (en bolus eller behandling viser fortsatt den vanlige bekreftelsen først).
- **Trykk og hold** på et ikon for å se et **verktøytips** med navnet på handlingen og en kort beskrivelse.
- Hvis du legger til **flere knapper enn det er plass til** på skjermen, flyttes de ekstra knappene til en **meny for flere knapper** (**⋮**-knappen i enden av verktøylinjen).
- Hvert ikon beholder **fargen** til handlingen sin (for eksempel insulin, karbohydrater, midlertidig mål), så du kjenner det igjen med ett blikk.

```{admonition} The toolbar is always there
:class: note
Den siste knappen er alltid **Konfigurer Hurtigstart** (tannhjulet **⚙️**). Den kan ikke fjernes, så du kan alltid nå konfigurasjonsskjermen rett fra verktøylinjen. Som standard har verktøylinjen bare to knapper — **Boluskalkulator** og dette tannhjulet.
```

---

## Konfigurere Hurtigstart

Trykk på tannhjulet **⚙️** på verktøylinjen (eller åpne **[Konfigurasjon](../SettingUpAaps/ConfigBuilder.md) → … → Konfigurer Hurtigstart**) for å åpne skjermen **Konfigurer Hurtigstart** (*«Tilpass hurtigstartsknapper i oversikten»*).

![Konfigurer Hurtigstart — Valgte handlinger, deretter katalogen over handlinger du kan legge til](../images/v4/QuickLaunch/quicklaunch_config.png)

Skjermen har to deler:

- **Valgte handlinger** (øverst) — knappene som nå ligger på verktøylinjen din, i samme rekkefølge som på verktøylinjen.
- En **katalog** under — alle handlinger du kan legge til, gruppert etter kategori. Hver oppføring i katalogen har en **➕**-knapp for å legge den til.

### Valgte handlinger — endre rekkefølge, redigere, fjerne

Hver valgt handling har:

- et **⠿ dra-håndtak** — trykk og dra for å **endre rekkefølgen** på knappene (rekkefølgen her er rekkefølgen på verktøylinjen),
- en **−**-knapp — **fjern** den fra verktøylinjen,
- og, bare for en **Profil**-snarvei, en **✏️**-knapp for å redigere prosent og varighet (se [Profilsnarveier](#profile-shortcuts)).

Endringer gjelder **med en gang** — det finnes ingen egen *Lagre*-knapp. Når du legger til en handling, havner den sist på verktøylinjen; flytt den derfra.

---

## Kategoriene av handlinger

Katalogen grupperer alt du kan legge til i kategoriene nedenfor, i denne rekkefølgen. Kategorier som ikke har noe å tilby (for eksempel hvis du ikke har noen scener), vises rett og slett ikke.

### Behandling

De daglige dialogene for behandling og CGM:

- **Insulin** — gi en bolus manuelt.
- **Karbo** — registrer karbohydrater uten insulin.
- **Boluskalkulator** — åpne boluskalkulatoren.
- **Behandling** — registrer insulin og karbohydrater sammen.
- **CGM** — åpne CGM-appen din (for eksempel xDrip).
- **Kalibrering** — kalibrer CGM-sensoren.

### Helseportal

Hendelsene i helseportalen og registreringer av vedlikehold på utstyret:

- **BS-kontroll**, **Merknad**, **Trening**, **Spørsmål**, **Melding**,
- **Sensorbytte**, **Bytte pumpebatteri**, **Bytte av pumpested**, **Prime/fylling**, **Rotasjon av sted**.

**Prime/fylling** og **Bytte pumpebatteri** tilbys bare når pumpen din bruker dem. Patch-pumper, for eksempel, fyller og bytter batteri i sine egne aktiveringssteg, så disse oppføringene vises ikke for dem (som i arket **Administrer**).

![Kategorien Helseportal i katalogen](../images/v4/QuickLaunch/quicklaunch_categories_2.png)

Dette er de samme oppføringene som du ellers når via arkene **[Behandlinger](#v4changes-treatments)** og **[Administrer](#v4changes-manage)** — Hurtigstart legger bare dem du bruker i oversikten.

### Administrer

Skjermene i arket **[Administrer](#v4changes-manage)**, i samme rekkefølge, slik at du kan åpne den du bruker mest fra verktøylinjen:

- **Profil**, **Insulininnstillinger** (administrer og aktiver insulinoppsett — med vilje kalt noe annet enn **Insulin**, fordi den knappen gir en bolus), **Midlertidig mål**, **Hurtigknapp**, **Scener**, **Automasjon**, **Mat**,
- **Kjøremodus** — lukk eller åpne loopen, sett den på pause, eller koble fra pumpen,
- **Autoriserte klienter** — bare på en hovedenhet eller en paret klient.

Disse knappene åpner skjermen; de starter ikke noe selv. For å starte en scene eller en hurtigknapp med ett trykk, legg den til fra kategorien **Scener** eller **Hurtigknapp** nedenfor.

![Kategorien Administrer i katalogen](../images/v4/QuickLaunch/quicklaunch_categories_manage.png) ![Kategorien Administrer, fortsettelse](../images/v4/QuickLaunch/quicklaunch_categories_manage_2.png)

### Hurtigknapp

Hver av dine forhåndsinnstilte **[hurtigknapper](QuickWizards.md)** kan legges til som en knapp, slik at et måltid du spiser ofte er ett trykk unna i oversikten. Knappen viser navnet på forhåndsinnstillingen og mengden karbohydrater/insulin; når du trykker på den, kjøres hurtigknappen med den vanlige bekreftelsen.

Hurtigknapper som er satt til å vises bare på klokken, tilbys ikke. En hurtigknapp på verktøylinjen følger de samme reglene som i arket **Behandlinger**: den skjules utenfor sitt [gyldige tidsrom](#quickwizard_validity) og en kort stund etter bruk. Den blir værende i verktøylinje-oppsettet ditt og kommer tilbake når hurtigknappen kan brukes igjen.

### Scenes

Hver aktiverte **[scene](Scenes.md)** kan legges til som en knapp. Når du trykker på den, ber den om bekreftelse og aktiverer så scenen (den samme pakken med handlinger som du får fra skjermen Scener). Denne kategorien vises bare hvis du har minst én scene.

Verktøytipset og katalogen viser det samme sammendraget som **Administrer → Scener**, for eksempel *«3 handlinger, 2 t → Nedkjøling»*, der navnet etter pilen er oppfølgingsscenen.

### Automasjon

Automasjonsreglene dine av typen **brukerhandling** (de du utløser manuelt) kan legges til som knapper. Når du trykker på en, ber den om bekreftelse og kjører så handlingene i regelen.

```{admonition} Automation buttons run on the master
:class: note
Automasjon kjører på **hovedenheten**, så automasjonssnarveier tilbys og kjøres bare på hovedenheten. De er ikke tilgjengelige på en paret **[klient](../RemoteFeatures/ClientMasterControl.md)**.
```

### Forhåndsinnstilte midlertidig mål

Hver av dine forhåndsinnstilte **[midlertidige mål](TempTargets.md)** kan legges til som en knapp (navnet, målet og varigheten vises, for eksempel *«Spise snart — 5,0 mmol/L, 45 min»*). Når du trykker på den, ber den om bekreftelse og starter så det midlertidige målet.

![De dynamiske kategoriene — Hurtigknapp og Forhåndsinnstilte midlertidig mål (Scener og Automasjon vises når du har noen)](../images/v4/QuickLaunch/quicklaunch_dynamic.png)

(profile-shortcuts)=
### Profil

Hver **[profil](ProfileSwitch-ProfilePercentage.md)** kan legges til som en **snarvei** som gjør et **profilbytte** med ett trykk. I motsetning til de fleste snarveier har en profilsnarvei sin egen **prosent** og **varighet**, som du setter etter at du har lagt den til, med **✏️**-knappen:

- **Prosent** (30–250 %, i steg på 5 %) — skalerer profilen når den brukes. 100 % bruker den som den er.
- **Varighet** (0–10080 min, det vil si opptil 7 dager, i steg på 10 min) — hvor lenge byttet varer. **0 = Permanent** (til du bytter igjen).

![Profilsnarveier og plugin-kategorier i katalogen](../images/v4/QuickLaunch/quicklaunch_categories.png)

Slik kan du ha flere knapper for den **samme** profilen med ulik styrke — for eksempel *«Profil 100 %»* og *«Profil 70 % i 2 t»* — og bruke hver av dem med ett enkelt trykk. (Du kan legge til den samme profilen flere ganger med ulike innstillinger.)

### Plugins

![Plugin-snarveier i katalogen](../images/v4/QuickLaunch/quicklaunch_categories_6.png)

Til slutt kan alle **aktiverte plugins** som har sin egen skjerm, legges til som en snarvei som åpner den direkte. De er gruppert etter plugin-type — **Pumpe**, **BS-kilde**, **APS**, **Loop**, **Sensitivitetsdeteksjon**, **Utjevning**, **Kalibrering**, **Begrensninger**, **Kommunikasjon** og **Generelt** — så du kan for eksempel hoppe rett til pumpe- eller loop-skjermen fra oversikten.

---

## Hurtigstart og hovedenhet/klient

I motsetning til de fleste andre innstillinger er **Hurtigstart-verktøylinjen satt opp per enhet** — den lagres **lokalt og synkroniseres ikke** mellom hovedenheten og parede klienter, så hver enhet har sitt eget sett med knapper. (Den *er* med i en **sikkerhetskopi/eksport** av innstillingene, så en gjenoppretting henter den tilbake på den samme enheten.)

Hva hver enhet kan legge på verktøylinjen sin, avhenger fortsatt av hva den har: hurtigknapper, scener, forhåndsinnstilte midlertidige mål og profiler synkroniseres alle, så katalogen på en klient tilbyr de samme elementene — du velger dem bare per enhet. Noen detaljer det er greit å vite:

- Knapper der målet ikke finnes lenger (en slettet hurtigknapp, scene eller forhåndsinnstilling, en deaktivert regel) **hoppes over automatisk**.
- **Automasjon**-snarveier tilbys og kjøres bare på **hovedenheten** (automasjon kjører på hovedenheten). Knapper for scene, hurtigknapp, midlertidig mål og profil er tilgjengelige på en klient.
- Når du trykker på en knapp på en klient som må kjøres på hovedenheten (en bolus, et midlertidig mål, et profilbytte eller en scene), utfører **hovedenheten** den og lager bekreftelsen. Se [Hovedenhet ↔ klientstyring](../RemoteFeatures/ClientMasterControl.md).

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
