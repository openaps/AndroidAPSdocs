# Dexcom G6 og ONE

## Grunnleggende først

-   Følg de generelle anbefalingene for CGM-hygiene og plassering av sensoren [her](../CompatibleCgms/GeneralCGMRecommendation.md).

## Generelle tips for looping med G6 og ONE

- Nyere sendere kalles Firefly. Sensorer kan ikke startes på nytt uten å ta av senderen, senderen selv kan ikke nullstilles, og de lager heller ikke rådata.

- Hvis du starter sensorer på nytt, må du være klar til å kalibrere og følge med på variasjoner.

- Forhåndsbløtlegging (pre-soak) av G6/ONE med fabrikkalibrering gir trolig variasjon i resultatene. Hvis du bruker forhåndsbløtlegging (pre-soak), må du trolig kalibrere sensoren for å få best resultat.

Les mer i [artikkelen](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) som Tim Street har publisert på [www.diabettech.com](https://www.diabettech.com).

## Hvis du bruker G6 eller ONE med xDrip

- Hvis det ikke allerede er satt opp, last ned [xDrip](https://github.com/NightscoutFoundation/xDrip) og juster innstillingene etter [siden med xDrip-innstillinger](../CompatibleCgms/xDrip.md).
- Velg xDrip i [**Konfigurasjon → BS-kilde**](#Config-Builder-bg-source).
- Senderne til Dexcom G6 og ONE kan være koblet til Dexcom-mottakeren (eller alternativt t:slim-pumpen) og én app på telefonen din samtidig.
- Når du bruker xDrip som mottaker, må du avinstallere Dexcom-appen først. **Du kan ikke koble både xDrip og Dexcom-appen til senderen samtidig!**
- Hvis du trenger Clarity og vil ha nytte av alarmene i xDrip, bruk [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (bare G6) med lokal kringkasting til xDrip.
- Du kan også bruke xDrip som hjelpeapp (companion app) for den offisielle Dexcom-appen, men da kan BS-målingene bli forsinket.
- xDrip bruker alltid senderens [innebygde algoritme](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) med nyere sendere; det er ingen grunn til å slå den av. [Forebyggende omstart](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) (preemptive restart) fungerer bare på gamle sendere (fastvare 1.6.5.25 eller eldre), der den trengs for å hindre at sensoren stopper etter 10 dager; nyere sendere (Firefly) ignorerer den. Les [Restart a sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html) (start en sensor på nytt) før du prøver noen omstart.
- Alt som gjelder selve sensoren og senderen er beskrevet på [xDrip sin Dexcom-side](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## Hvis du bruker G6 med Build Your Own Dexcom App

```{admonition} Old app version
:class: warning
Dexcom BYODA er nå en svært gammel versjon av appen og kan ikke oppdateres.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) støtter lokal kringkasting til AAPS og/eller xDrip

-   Denne appen lar deg bruke Dexcom G6 med en hvilken som helst Android-smarttelefon.
-   Avinstaller den opprinnelige Dexcom-appen eller den modifiserte Dexcom-appen hvis du har brukt en av dem tidligere (**ikke stopp** sensoren som er i gang)
-   Installer den nedlastede apk-filen
-   Skriv inn sensorkoden og serienummeret til senderen i den modifiserte appen.
-   I telefonens innstillinger går du til apper > Dexcom G6 > tillatelser > flere tillatelser og trykker på «Access Dexcom app» (tilgang til Dexcom-appen).
-   Etter kort tid bør BYODA fange opp signalet fra senderen.

### Innstillinger for AAPS

-   Velg **BYODA** i [**Konfigurasjon → BS-kilde**](#Config-Builder-bg-source).

-   Hvis du ikke får noen verdier, velg en annen datakilde og velg så **BYODA** på nytt. Da ber appen om tillatelsene som trengs for å opprette forbindelsen mellom AAPS og BYODA-kringkastingen.

### Innstillinger for xDrip

-   Velg «640G/Eversense» som datakilde.
-   Kommandoen «start sensor» må utføres i xDrip for at du skal få verdier. Dette påvirker ikke sensoren din som nå styres av Build Your Own Dexcom App.


(DexcomG6-troubleshooting-g6)=
## Feilsøking for G6 og ONE

### Feilsøking spesielt for Dexcom G6/ONE

-   Bla ned til **Troubleshooting** (feilsøking) [her](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Generell feilsøking

Generell feilsøking for CGM-er finner du [her](#general-cgm-troubleshooting).

### Ny sender med en sensor som allerede er i gang

Hvis du må bytte sender mens en sensorøkt er i gang, kan du prøve å ta av senderen uten å skade sensorfestet. Du finner en video [her](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Hvis du heller velger [denne løsningen](https://youtu.be/tx-kTsrkNUM), må du være forsiktig så du ikke [skader sensorkontaktene](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html) med stripen.
