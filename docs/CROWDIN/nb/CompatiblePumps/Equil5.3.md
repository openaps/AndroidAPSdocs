# Equil

Disse instruksjonene gjelder oppsett av insulinpumpen Equil.

```{contents} Table of contents
:depth: 1
:local: true
```

## Pumpefunksjoner med AAPS

* Slangeløs patch-pumpe som kommuniserer med **AAPS** over telefonens innebygde Bluetooth, uten en ekstra kommunikasjonsenhet.
* **AAPS** behandler Equil som en patch-pumpe med et reservoar på 200 E: hovedskjermen viser statuslysene for patch-pumpe, og **Prime/fylling** og **Bytte pumpebatteri** tilbys ikke. Fylling, priming og batteribytte gjøres i pumpeveiviserne.
* Mens pumpen er pauset eller stoppet, registrerer **AAPS** en midlertidig basal på 0 E/t, så ingen basalinsulin telles med i IOB.
* Sommertid (DST) og tidssonebytte må håndteres manuelt.

## Krav til maskinvare og programvare
* **Kompatibel Equil-maskinvare**

  For øyeblikket støttes Equil 5.3 og 5.4.

* **AAPS** bygget og installert etter instruksjonene i [Bygge AAPS](../SettingUpAaps/BuildingAaps.md)

## Setup

### Velg Equil-pumpe

Åpne **menyen** (☰) øverst til venstre, velg **[Konfigurasjon](#Config-Builder-pump)**, og under **Pumpe** velger du **Equil**.

Når den er valgt, viser **Equil**-kortet to knapper, **Innstillinger** og **Åpne plugin**:

![Pluginen Equil valgt i Konfigurasjon > Pumpe](../images/v4/Pumps/equil_enabled.png)

**Åpne plugin** (eller **Administrer** → **Pumpe**) åpner pumpeskjermen for Equil. Før en pumpe er sammenkoblet, ser den slik ut:

![Pumpeskjermen for Equil før sammenkobling](../images/v4/Pumps/equil_pump_screen.png)

### Innstillinger

Åpne Equil-innstillingene med **Innstillinger** på **Equil**-kortet, eller med tannhjulikonet øverst til høyre på pumpeskjermen.

![Innstillinger for Equil-driveren](../images/v4/Pumps/equil_settings.png)

* **Alarm for lavt batteri**: varsler deg når pumpebatteriet er lavt.
* **Alarm for lavt legemiddellager**: varsler deg når det er lite insulin igjen i reservoaret.
* **Varseltone**: hvordan pumpen varsler deg: **Demp lyd**, **Kun vibrering**, **Kun lyd** eller **Vibrering og lyd**.
* **Bolushastighet**: hvor raskt en bolus gis: **1,5 E/min (standard)**, **3 E/min**, **6 E/min** eller **12 E/min**. En raskere bolus kan gi flere okklusjonsalarmer.

![Valgene for bolushastighet i Equil-innstillingene](../images/v4/Pumps/equil_bolus_speed.png)

```{admonition} Max basal and max bolus on the patch
:class: note
Selve patchen avviser enhver basaldose over et maksimum som **AAPS** programmerer inn i den. **AAPS** bruker den høyeste av [innstillingen](../SettingUpAaps/Preferences.md) **maks basal** og den høyeste basaldosen per time i din **Profil**, så patchen godtar alltid profilen din og de midlertidige basalene som loopen ber om. **AAPS** sender også din maksimalt tillatte bolus til patchen.

Når du endrer **maks basal** eller **maks bolus**, sender **AAPS** de nye verdiene til patchen automatisk. De sendes også ved hvert profilbytte. Det er ingenting å stille inn på selve patchen.
```

### Koble sammen pumpen

På pumpeskjermen trykker du på **Koble sammen**. En veiviser leder deg gjennom hvert steg. Raden med prikker øverst viser hvor langt du har kommet.

Hvis Android spør om **AAPS** kan finne og koble til enheter i nærheten, trykker du på **Tillat**. **AAPS** trenger dette for å finne pumpen.

![Android ber om tillatelse til å finne enheter i nærheten](../images/Equil/activate1.png)

Veiviseren har disse stegene. Trykk på **Neste** for å gå videre, eller **Avbryt** for å avslutte veiviseren.

1. **Profil kreves**: vises bare hvis du aldri har aktivert en **Profil** i **AAPS**. Velg profilen du vil bruke, og trykk på **Aktiver profil**.
1. **Monter pumpen**: sett sammen pumpen, det fylte reservoaret og det ladede batteriet.

   ![Steget Monter pumpen](../images/Equil/activate2.png)

1. **Finn pumpe**: **AAPS** søker etter Equil-pumper i nærheten. Velg pumpen din fra listen.

   ![Steget Finn pumpe med en Equil-pumpe i listen](../images/Equil/find_pump.png)
1. **Koble sammen enheten**: du kan skrive inn et sammenkoblingspassord i **Sett sammenkoblingspassord**. Det må være 4 tegn langt, valgt fra `ABCDEF0123456789`. Trykk på **Koble sammen**.

   ![Steget Koble sammen enheten med sammenkoblingspassordet](../images/Equil/activate3.png)

1. **Velg insulin**: vises bare hvis du har satt opp mer enn ett insulin. Velg insulinet som er i reservoaret.
1. **Prime / fylling**: pumpen må **ikke** sitte på baseplaten. Trykk på **Prime/fylling** og prime reservoaret til det kommer en dråpe insulin på nålespissen. Trykk på **Neste**.

   ![Steget Prime / fylling](../images/Equil/prime_fill.png)
1. **Rotasjon av sted**: vises bare hvis **Administrer pumpe-stedsrotasjon** er slått på i innstillingene for rotasjon av sted. Trykk der du vil feste pumpen, eller trykk på **Hopp over**.
1. **Koble til pumpen**: fest pumpen på baseplaten.

   ![Steget Koble til pumpen](../images/Equil/attach_pump.png)
1. **Prime kanylen**: når pumpen sitter på baseplaten, trykker du på **Tøm luft** for å fjerne luft fra kanylen. Trykk på **Neste**.

   ![Steget Prime kanylen med knappen Tøm luft](../images/Equil/prime_cannula.png)

1. **Bekreft**: sett pumpen på kroppen og trykk på **Fullfør**.

   ![Steget Bekreft med knappen Fullfør](../images/Equil/confirm.png)

```{warning}
Hvis du setter ditt eget sammenkoblingspassord (anbefalt for din sikkerhet), oppbevar det på et trygt sted. Passordet lagres i pumpen. Pumpen spør etter det ved hver ny sammenkobling til du opphever sammenkoblingen på riktig måte i **AAPS**. Før det kan pumpen heller ikke brukes med den opprinnelige håndholdte kontrolleren (PDA).
```

### Pumpeskjermen etter sammenkobling

Når pumpen er sammenkoblet, viser pumpeskjermen disse knappene:

* **Oppdater**: leser pumpens tilstand og historikk nå.
* **Pause** / **Gjenoppta tilførselen**: stopp eller start insulintilførselen igjen.
* **Bytt reservoar**: leder deg gjennom å ta av pumpen, sette inn et nytt reservoar (og, om nødvendig, et nytt batteri), prime og feste den igjen. Det første steget spør *Vil du også sette på et nytt infusjonssett (baseplate og kanyle)?*
  * **Ja, nytt infusjonssett**: du velger stedet, kanylen primes, og **AAPS** registrerer et insulinbytte og et kanylebytte.
  * **Nei, bare reservoar eller batteri**: kanylen primes ikke, og **AAPS** registrerer bare et insulinbytte.

  Etter et reservoarbytte viser batterinivået **-** til **AAPS** leser det igjen fra pumpen.

  ![Det første steget i Bytt reservoar spør om et nytt infusjonssett](../images/Equil/change_reservoir_question.png)

* **Historikk**: viser hendelsene som pumpen har registrert.
* **Koble fra enhet**: leder deg gjennom å ta av pumpen og oppheve sammenkoblingen med **AAPS**. Dette stopper insulintilførselen, flytter pumpestempelet tilbake til bunnen og sletter sammenkoblingen.

### Alarmer

* Alarmen for lite insulin lyder én gang på hvert nivå (10 E, 5 E og 2 E) og når reservoaret er tomt. Alarmen for lavt batteri lyder én gang ved 10 % og én gang ved 5 %. Hvert nivå varsler bare én gang fram til neste reservoarbytte.
* Pumpealarmer og stopp registreres også som meldinger i behandlingene, på tidspunktet pumpen logget dem, så du kan se senere når og hvorfor pumpen stoppet.
* Hvis reservoaret går tomt under en bolus, registrerer **AAPS** bare insulinet som ble gitt fram til da, og forteller deg begge mengdene.

## Hvor du kan få hjelp

Utviklingen av Equil-driveren gjøres av fellesskapet på **frivillig** basis. Før du ber om hjelp, bør du:

1. **Lese** det aktuelle avsnittet i denne dokumentasjonen for å se hvordan funksjonen skal fungere.
2. **Spørre** på kanalen *#AAPS* på [Discord](https://discord.gg/4fQUWHZ4Mw), eller i en av de andre [fellesskapskanalene](../GettingHelp/WhereCanIGetHelp.md).
3. **Rapportere en feil** ved å søke i [eksisterende saker](https://github.com/nightscout/AndroidAPS/issues); hvis din ikke er der, åpner du en [ny sak](https://github.com/nightscout/AndroidAPS/issues) og legger ved [loggfilene](../GettingHelp/AccessingLogFiles.md) dine.

Når du ber om hjelp, oppgi telefonens merke og modell, Android-versjon, **AAPS**-versjon og en enkel beskrivelse av problemet (hva som ble endret, når det sist virket).
