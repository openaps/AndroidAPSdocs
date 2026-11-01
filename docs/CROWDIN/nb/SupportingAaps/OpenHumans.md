# Opplasting til Open Humans

## Doner dataene dine til forskning

Du kan hjelpe fellesskapet ved å donere dataene dine til forskningsprosjekter! Det hjelper forskere med å gi noe tilbake, utvikle nye vitenskapelige ideer og øke åpenheten rundt lukkede loop-systemer med åpen kildekode. AAPS kan synkronisere dataene dine med [Open Humans](https://www.openhumans.org), en plattform der du kan laste opp, koble sammen og lagre personlige data – som genetikk, aktivitet og helsedata.

Du beholder full kontroll over hva som skjer med dataene dine, og hvilke prosjekter du vil støtte ved å gi dem tilgang til dataene dine. Avhengig av hvilket prosjekt du har blitt med i, blir dataene vurdert og brukt av dem på ulike måter og i ulikt omfang.

Disse dataene lastes opp til Open Humans-kontoen din:

- Blodsukkerverdier
- Helseportal-hendelser (unntatt notater)
- Forlenget bolus
- Profilbytter
- Totale daglige doser
- Midlertidige basaldoser
- Midlertidige mål
- Innstillinger
- Programversjon
- Enhetsmodell
- Skjermstørrelse

Hemmelig eller privat informasjon, som Nightscout-URL-en eller API-nøkkelen din, lastes ikke opp.

## Oppsett

1. Opprett en konto på [Open Humans](https://www.openhumans.org) hvis du ikke allerede har gjort det. Du kan bruke Google- eller Facebook-kontoen du har fra før, hvis du vil.
2. Aktiver **Open Humans**-pluginen i [**Konfigurasjon** > **Kommunikasjon**](../SettingUpAaps/ConfigBuilder.md).

![Open Humans aktivert i Konfigurasjon > Kommunikasjon](../images/OHUploader1.png)

3. Trykk på **Innstillinger** på **Open Humans**-kortet. Du kan begrense opplastinger til når telefonen bruker Wi-Fi (**Kun WiFi**) og/eller lader (**Kun under lading**).

![Open Humans-innstillinger med Kun WiFi og Kun under lading](../images/OHUploader_settings.png)

4. Trykk på **Åpne plugin** på **Open Humans**-kortet, og trykk deretter på **Oppsett**.

![Open Humans-pluginskjermen med Oppsett-knappen](../images/OHUploader_setup.png)

5. På skjermen **Velkommen til Open Humans** trykker du på **Neste**. Les skjermen **Samtykke** nøye: den viser vilkårene for bruk og hvilke data som lastes opp og ikke lastes opp.
6. Slå på **Jeg forstår og godkjenner.** (1) og trykk på **Logg inn på Open Humans** (2).

![Skjermene Velkommen og Samtykke for Open Humans i AAPS](../images/OHUploader2.png)

7. Nettsiden til Open Humans åpnes. Logg inn med brukernavn og passord.
8. Velg om du vil skjule medlemskapet ditt i AAPS Uploader i den offentlige Open Humans-profilen din (1).
9. Klikk på **Authorize project** (godkjenn prosjekt) (2).

![Innlogging og godkjenning av prosjektet på nettsiden til Open Humans](../images/OHUploader_web.png)

```{admonition} Older screenshot
:class: note
Skjermbildene ovenfor viser en eldre versjon av Open Humans-nettsiden og bruker fortsatt det gamle prosjektnavnet **AndroidAPS Uploader**. Stegene er de samme.
```

10. Tilbake i **AAPS** spør skjermen **Avsluttende detaljer** om du vil fortsette. Trykk på **Fortsett**.
11. Vent til **Vi er ferdig!** vises, og trykk deretter på **Lukk**. Fra nå av laster telefonen din opp data i bakgrunnen fra tid til annen.
12. **Open Humans**-pluginskjermen viser nå din **Prosjektmedlems-ID**. Trykk på **Last opp nå** hvis du vil starte en opplasting med en gang.
13. Trykk på **Logg ut** hvis du vil slutte å laste opp data til Open Humans.
14. Et Android-varsel forteller deg når en opplasting pågår.

![Open Humans fullfør oppsett](../images/OHUploader3.png)

```{admonition} Older screenshot
:class: note
Skjermbildet ovenfor er fra en tidligere **AAPS**-versjon. I **AAPS** 4 heter bekreftelsesskjermene **Avsluttende detaljer** og **Vi er ferdig!**, det finnes ingen køstørrelse, og knappene heter **Last opp nå** og **Logg ut**.
```

15. Du kan administrere dataene dine ved å logge inn på [nettsiden til Open Humans](https://www.openhumans.org).

![Open Humans administrer data](../images/OHWeb.png)

## Muligheter for deling

### [«OPEN»-prosjektet](https://www.open-diabetes.eu/)

«OPEN»-prosjektet samler et internasjonalt og tverrsektorielt konsortium av pasientinnovatører, behandlere, samfunnsvitere, informatikere og pasientorganisasjoner for å undersøke ulike sider ved gjør-det-selv-systemer for kunstig bukspyttkjertel (DIY APS), som brukes av stadig flere personer med diabetes. Se [nettsiden](https://www.open-diabetes.eu/) deres for flere detaljer.

I september 2020 lanserte «OPEN»-prosjektet en [spørreundersøkelse](https://survey.open-diabetes.eu/) der du også kan donere dataene du har lastet opp til Open Humans. En [veiledning](https://open-diabetes.eu/en/open-survey/survey-tutorials/) for hvordan du donerer dataene dine til «OPEN»-prosjektet finnes på nettsiden deres og i selve undersøkelsen.

### [OpenAPS Data Commons](https://www.openhumans.org/activity/openaps-data-commons/)

OpenAPS Data Commons ble laget for å gi en enkel måte å dele datasett fra DIYAPS-fellesskapet til forskning. Dataene deles både med tradisjonelle forskere som lager tradisjonelle forskningsstudier, og med grupper eller enkeltpersoner i fellesskapet som vil gå gjennom data som en del av egne forskningsprosjekter. OpenAPS Data Commons bruker plattformen Open Humans for å gjøre det enkelt å laste opp og dele data fra DIYAPS, inkludert AAPS, Loop og OpenAPS.

Du kan få dataene dine inn i Open Humans på én av tre måter:

1. bruk opplastingsfunksjonen i AAPS for å få dataene dine inn i Open Humans
2. bruk Nightscout Data Transfer for å få dataene dine inn i Open Humans
3. last opp datafiler manuelt til Open Humans.

Når du har opprettet en konto og fått dataene dine til å flyte inn i Open Humans, sørg for også å bli med i OpenAPS Data Commons, slik at du kan donere dataene dine til forskning hvis du ønsker det.

## Vilkår for bruk

Dette er et verktøy med åpen kildekode som kopierer dataene dine til [Open Humans](https://www.openhumans.org). Vi har ingen rett til å dele dataene dine med tredjeparter uten din uttrykkelige tillatelse. Dataene som prosjektet og appen mottar, identifiseres med en tilfeldig bruker-ID og overføres bare sikkert til en Open Humans-konto etter at du har godkjent det. Du kan når som helst stoppe opplastingen og slette de opplastede dataene dine via [www.openhumans.org](https://www.openhumans.org). Vær oppmerksom på at noen prosjekter som mottar data, kanskje ikke støtter dette.

Se også [Open Humans Terms of Use](https://www.openhumans.org/terms/) (vilkår for bruk).

## Personvern

Open Humans beskytter personvernet ditt ved å gi deg en numerisk ID for hvert prosjekt. Dermed kan prosjektene kjenne deg igjen, men ikke identifisere deg. Applikasjons-ID-en som AAPS laster opp, er lignende og hjelper bare med å administrere dataene. Mer informasjon finner du her:

- [Open Humans Data Use Policy (retningslinjer for bruk av data)](https://www.openhumans.org/data-use/)
- [Open Humans GDPR](https://www.openhumans.org/gdpr/)
