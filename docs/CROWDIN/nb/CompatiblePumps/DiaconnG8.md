# Diaconn G8

```{contents} Table of contents
:depth: 1
:local: true
```

## Pumpefunksjoner med AAPS

* Kommuniserer med **AAPS** over telefonens innebygde Bluetooth, uten en ekstra kommunikasjonsenhet.
* Sommertid (DST) og tidssonebytte må håndteres manuelt.

## Bluetooth-sammenkobling med insulinpumpen

- Trykk på **menyen** (☰) øverst til venstre.

![Menyen med oppføringen Konfigurasjon](../images/v4/Configuration/configuration_menu.png)

- Trykk på **Konfigurasjon** > **Pumpe** og velg **Diaconn G8**.

![Konfigurasjon > Pumpe med pluginen Diaconn G8](../images/v4/Configuration/configuration_pump_list_3.png)

Når den er valgt, viser **Diaconn G8**-kortet to knapper, **Innstillinger** og **Åpne plugin**:

![Pluginen Diaconn G8 valgt i Konfigurasjon > Pumpe](../images/v4/Pumps/diaconn_g8_enabled.png)

**Innstillinger** åpner innstillingene for Diaconn G8-driveren (se [Innstillinger for Diaconn G8-insulinpumpen](#diaconn-g8-insulin-pump-option-setting) nedenfor).

**Åpne plugin** (eller **Administrer** > **Pumpe**) åpner pumpeskjermen for Diaconn G8. Før en pumpe er sammenkoblet, ser den slik ut:

![Pumpeskjermen for Diaconn G8 før sammenkobling](../images/v4/Pumps/diaconn_g8_pump_screen.png)

![bilde](../images/DiaconnG8/DiaconnG8_04.jpg)

```{admonition} Older screenshot
:class: note
Skjermbildet ovenfor er fra en tidligere **AAPS**-versjon. I **AAPS** 4 starter sammenkoblingen fra knappen **Koble sammen** på pumpeskjermen; det finnes ingen innstilling **Valgt pumpe**.
```

- På pumpeskjermen trykker du på **Koble sammen**. Skjermen **Diaconn-pumpesammenkobling** åpnes, og **AAPS** søker etter pumper i nærheten.
- Trykk på modellnummeret til insulinpumpen din når det vises i listen (for eksempel **DIACONN-65010**).

![Skjermen Diaconn-pumpesammenkobling som søker etter pumper](../images/DiaconnG8/DiaconnG8_05.png)

- Det er to måter å finne modellnummeret ditt på:

1. De siste 5 sifrene i SN-nummeret på baksiden av pumpen.
2. Trykk på O-knappen > Information > BLE > Last 5 digits (de siste 5 sifrene).

![bilde](../images/DiaconnG8/DiaconnG8_06.jpg)

- Når du har valgt pumpen din, vises et vindu som ber om en PIN-kode. Skriv inn PIN-koden som vises på pumpen for å fullføre tilkoblingen.

 ![bilde](../images/DiaconnG8/DiaconnG8_07.jpg)

- Når **Sammenkoblingen er vellykket!** vises, trykker du på **OK** for å gå tilbake til pumpeskjermen.

## Kontroll av pumpestatus og synkronisering av logger

- Når pumpen er tilkoblet, åpner du pumpeskjermen (**Administrer** > **Pumpe**). Den viser pumpestatusen (batteri, reservoar, siste tilkobling, siste bolus, basaldose og mer).
- Trykk på **Oppdater** for å koble til pumpen, oppdatere statusen og synkronisere loggene.
- Trykk på **Pumpehistorikk** for å se historikken som er lest fra pumpen.

![bilde](../images/DiaconnG8/DiaconnG8_08.jpg)

```{admonition} Older screenshot
:class: note
Skjermbildet ovenfor er fra en tidligere **AAPS**-versjon. I **AAPS** 4 vises pumpestatusen på pumpeskjermen (**Administrer** > **Pumpe**) og synkroniseres med knappen **Oppdater**.
```

(diaconn-g8-bluetooth-troubleshooting)=

## Feilsøking av Bluetooth

**Hva du gjør ved ustabil Bluetooth-forbindelse med pumpen.**

### Metode 1) Start AAPS på nytt, og sjekk så pumpen igjen

- Trykk på **menyen** (☰) øverst til venstre.
- Trykk på **Avslutt** nederst i menyen.

![Menyen med oppføringen Avslutt nederst](../images/v4/Configuration/configuration_menu.png)

- Start **AAPS** igjen og sjekk forbindelsen til pumpen.

### Metode 2) Hvis den første metoden ikke virker, koble fra Bluetooth og koble til igjen.

- Trykk og hold Bluetooth-knappen øverst i omtrent 3 sekunder.

![bilde](../images/DiaconnG8/DiaconnG8_11.jpg)

- Trykk på Setting-knappen på den sammenkoblede Diaconn G8-insulinpumpen.

![bilde](../images/DiaconnG8/DiaconnG8_12.jpg)

- Unpair (opphev sammenkoblingen).

![bilde](../images/DiaconnG8/DiaconnG8_13.jpg)

- I **AAPS** åpner du pumpeskjermen (**Administrer** > **Pumpe**), trykker på **Opphev sammenkobling** og bekrefter **Tilbakestill sammenkoblingsinformasjon?**.
- Gjenta Bluetooth-sammenkoblingen for pumpen (se ovenfor).

## Mer informasjon

(diaconn-g8-insulin-pump-option-setting)=

### Innstillinger for Diaconn G8-insulinpumpen

- **Konfigurasjon** > **Pumpe** > **Diaconn G8** > **Innstillinger**
- Eller, på pumpeskjermen (**Administrer** > **Pumpe**), trykk på innstillingsikonet (tannhjulet) øverst til høyre.

![Innstillinger for Diaconn G8-driveren](../images/v4/Pumps/diaconn_g8_settings.png)

- **Bolushastighet** bestemmer hvor raskt pumpen gir en bolus.
- Hvis valget **Logg reservoarbytte** er aktivert, lastes de aktuelle detaljene automatisk opp til helseportalen når en hendelse av typen «Insulin Change» (insulinbytte) skjer.
- Hvis valget **Logg bytte av kanyle** er aktivert, lastes de aktuelle detaljene automatisk opp til helseportalen når en hendelse av typen «Site Change» (bytte av sted) skjer.
- Hvis valget **Logg bytte av slangesett** er aktivert, legges de aktuelle detaljene automatisk til som en merknad når en hendelse av typen «Tube Change» (slangebytte) skjer.
- Hvis valget **Logg batteribytte** er aktivert, lastes de aktuelle detaljene automatisk opp til helseportalen når en hendelse av typen «Battery Change» (batteribytte) skjer. Du kan også registrere et batteribytte selv med **Administrer** > **Bytte pumpebatteri**. (Merk: Før du bytter batteri, må du stoppe alle pågående injeksjonsfunksjoner.)
- **Diaconn Cloud Sync** sender pumpeloggene til Diaconn Cloud.

![Diaconn G8 handlingsmeny](../images/DiaconnG8/DiaconnG8_15.jpg)

```{admonition} Older screenshot
:class: note
Skjermbildet ovenfor er fra en tidligere **AAPS**-versjon. I **AAPS** 4 registreres et batteribytte med **Administrer** > **Bytte pumpebatteri**; det finnes ingen **Handlinger**-fane.
```

### Funksjonen forlenget bolus

- Hvis du bruker forlenget bolus, blir lukket loop deaktivert.
- Se [denne siden](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) for detaljer om hvorfor forlenget bolus ikke fungerer i lukket loop.

## Hvor du kan få hjelp

Utviklingen av Diaconn G8-driveren gjøres av fellesskapet på **frivillig** basis. Før du ber om hjelp, bør du:

1. **Lese** det aktuelle avsnittet i denne dokumentasjonen for å se hvordan funksjonen skal fungere.
2. **Spørre** på kanalen *#AAPS* på [Discord](https://discord.gg/4fQUWHZ4Mw), eller i en av de andre [fellesskapskanalene](../GettingHelp/WhereCanIGetHelp.md).
3. **Rapportere en feil** ved å søke i [eksisterende saker](https://github.com/nightscout/AndroidAPS/issues); hvis din ikke er der, åpner du en [ny sak](https://github.com/nightscout/AndroidAPS/issues) og legger ved [loggfilene](../GettingHelp/AccessingLogFiles.md) dine.

Når du ber om hjelp, oppgi telefonens merke og modell, Android-versjon, **AAPS**-versjon og en enkel beskrivelse av problemet (hva som ble endret, når det sist virket).
