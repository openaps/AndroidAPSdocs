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
- Du kan også bruke xDrip som hjelpeapp (companion app) for den offisielle Dexcom-appen, men da kan BS-målingene bli forsinket. Bruk [Varslingsleser](#DexcomG6-notification-reader) hvis du vil lese varslingene fra Dexcom-appen uten xDrip og ha en pålitelig datakilde.
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

(DexcomG6-notification-reader)=
## Hvis du bruker G6 eller ONE med Varslingsleser

Den offisielle Dexcom G6- eller ONE-appen forblir koblet til senderen. **AAPS** leser glukoseverdien direkte fra varslingen til Dexcom-appen, uten noen annen app imellom.

```{admonition} Trusted data source
:class: note
Målinger fra Dexcom G6- og ONE-appene er en [pålitelig BS-datakilde](#GettingStarted-TrustedBGSource): SMB-er kan tillates hele tiden.
```

Sammenlignet med BYODA eller xDrip har Varslingsleser noen begrensninger:

- **Ingen trendpil** og **ingen utfylling av hull (backfill)**: målinger som ble tapt mens telefonen var av eller utenfor rekkevidde, er borte.
- Hver måling får tidspunktet da varslingen kom, ikke det nøyaktige tidspunktet for sensormålingen.
- Bare verdier mellom 40 og 405 mg/dL (2,2 og 22,5 mmol/L) blir lest. «LOW» og «HIGH» blir ikke lest.

### Sett opp Dexcom-appen

-   Behold Dexcom-appen installert og koblet til senderen.
-   Sørg for at Dexcom-appen viser den aktuelle glukoseverdien i varslingen sin. Varslingene fra appen må være synlige: Ikke demp eller skjul dem.
-   Bruk de samme glukoseenhetene (mg/dL eller mmol/L) i Dexcom-appen som i **AAPS**. Ellers kan ikke **AAPS** lese verdien.

### Konfigurasjon i AAPS

-   Velg **Varslingsleser** i [**Konfigurasjon → BS-kilde**](#Config-Builder-bg-source) og bekreft byttet.

    ![BS-kilde: Varslingsleser valgt](../images/NotificationReader_BgSource.png)

-   Når du er tilbake på hovedskjermen, viser **AAPS** meldingen **Tillatelser kreves**. Ved siden av **Tilgang til varsler** trykker du på **Tillat**.

    ![Tillatelser kreves: Tilgang til varsler](../images/NotificationReader_Permissions.png)

-   Android åpner listen over varslingstilgang (navnet avhenger av Android-versjonen, for eksempel *Notification read, reply & control* på engelsk). Velg **AAPS**, slå på **Tillat tilgang til varsler** og bekreft med **Tillat**.

    ![Android ber om å tillate varslingstilgang for AAPS](../images/NotificationReader_AllowDialog.png)

    Android advarer om at **AAPS** kan lese alle varslingene dine. **AAPS** leser bare varslingene fra støttede CGM-apper og ignorerer alle andre.

    ![Varslingstilgang tillatt for AAPS](../images/NotificationReader_AccessOn.png)

-   Hvis **Tillat tilgang til varsler** er nedtonet (*Styrt av begrenset innstilling*), blokkerer Android det fordi **AAPS** ikke ble installert fra Play Store. Åpne appinfo for **AAPS** (trykk og hold på **AAPS**-ikonet > **Appinfo**), trykk på menyen med tre prikker øverst til høyre og velg **Tillat begrensede innstillinger**. Gå så tilbake til skjermen for varslingstilgang og tillat den.
-   Målingene vises i **AAPS** når Dexcom-appen viser en ny verdi.

```{warning}
Hvis varslingen fra Dexcom-appen viser mer enn ett glukosetall, eller ingen, hopper **AAPS** over den varslingen.
```


(DexcomG6-troubleshooting-g6)=
## Feilsøking for G6 og ONE

### Feilsøking spesielt for Dexcom G6/ONE

-   Bla ned til **Troubleshooting** (feilsøking) [her](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Generell feilsøking

Generell feilsøking for CGM-er finner du [her](#general-cgm-troubleshooting).

### Ny sender med en sensor som allerede er i gang

Hvis du må bytte sender mens en sensorøkt er i gang, kan du prøve å ta av senderen uten å skade sensorfestet. Du finner en video [her](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Hvis du heller velger [denne løsningen](https://youtu.be/tx-kTsrkNUM), må du være forsiktig så du ikke [skader sensorkontaktene](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html) med stripen.
