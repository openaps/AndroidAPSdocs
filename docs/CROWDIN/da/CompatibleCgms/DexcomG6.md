# Dexcom G6 og ONE

## Det grundlæggende først

-   Følg de generelle anbefalinger om CGM-hygiejne og placering af sensoren [her](../CompatibleCgms/GeneralCGMRecommendation.md).

## Generelle tips til at loope med G6 og ONE

- Nyere sendere hedder Firefly. Sensorer kan ikke genstartes uden at fjerne senderen, og senderen kan ikke nulstilles. De giver heller ingen rådata.

- Hvis du genstarter sensorer, skal du være klar til at kalibrere og holde øje med afvigelser.

- Hvis du lader en G6/ONE med fabrikskalibrering trække ind på forhånd (pre-soak), giver det sandsynligvis svingende resultater. Hvis du lader sensoren trække ind på forhånd (pre-soak), skal du sandsynligvis kalibrere sensoren for at få de bedste resultater.

Læs mere i [artiklen](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) af Tim Street på [www.diabettech.com](https://www.diabettech.com).

## Hvis du bruger G6 eller ONE med xDrip

- Hvis du ikke allerede har gjort det, så download [xDrip](https://github.com/NightscoutFoundation/xDrip), og juster indstillingerne som beskrevet på siden [xDrip-indstillinger](../CompatibleCgms/xDrip.md).
- Vælg xDrip i [**Konfiguration → BS-kilde**](#Config-Builder-bg-source).
- Senderne til Dexcom G6 og ONE kan være forbundet til Dexcom-modtageren (eller i stedet t:slim-pumpen) og én app på din telefon på samme tid.
- Når du bruger xDrip som modtager, skal du først afinstallere Dexcom-appen. **Du kan ikke forbinde xDrip og Dexcom-appen til senderen på samme tid!**
- Hvis du har brug for Clarity og vil have glæde af alarmerne i xDrip, så brug [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (kun G6) med lokal broadcast til xDrip.
- Du kan også bruge xDrip som en hjælpeapp til den officielle Dexcom-app, men BS-værdierne kan blive forsinket. Hvis du vil læse notifikationerne fra Dexcom-appen uden xDrip som en betroet datakilde, så brug [Notifikationslæser](#DexcomG6-notification-reader).
- xDrip bruger altid senderens [native algoritme](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) med nuværende sendere; der er ingen grund til at slå den fra. [Forebyggende genstarter](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) virker kun på gamle sendere (firmware 1.6.5.25 eller ældre), hvor de er nødvendige for at undgå, at sensoren stopper efter 10 dage; nyere sendere (Firefly) ignorerer dem. Se [Genstart en sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html), før du prøver at genstarte.
- Alt om selve sensoren og senderen er beskrevet på [xDrips Dexcom-side](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## Hvis du bruger G6 med Build Your Own Dexcom App

```{admonition} Old app version
:class: warning
Dexcom BYODA er nu en meget gammel version af appen og kan ikke opdateres.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) understøtter lokal broadcast til AAPS og/eller xDrip

-   Med denne app kan du bruge din Dexcom G6 med enhver Android-smartphone.
-   Afinstaller den originale Dexcom-app eller den patchede Dexcom-app, hvis du har brugt en af dem før (**stop ikke** den sensor, der kører nu)
-   Installer den downloadede apk
-   Indtast sensorkode og senderens serienummer i den patchede app.
-   Gå i telefonens indstillinger til apps > Dexcom G6 > tilladelser > yderligere tilladelser, og tryk på 'Access Dexcom app'.
-   Efter kort tid bør BYODA fange signalet fra senderen.

### Indstillinger for AAPS

-   Vælg **BYODA** i [**Konfiguration → BS-kilde**](#Config-Builder-bg-source).

-   Hvis du ikke modtager nogen værdier, så vælg en anden datakilde og vælg derefter **BYODA** igen. Så bliver du bedt om de tilladelser, der skal bruges til forbindelsen mellem AAPS og BYODA-broadcast.

### Indstillinger for xDrip

-   Vælg '640G/Eversense' som datakilde.
-   Kommandoen 'start sensor' skal udføres i xDrip for at modtage værdier. Det påvirker ikke din nuværende sensor, som styres af Build Your Own Dexcom App.

(DexcomG6-notification-reader)=
## Hvis du bruger G6 eller ONE med Notifikationslæser

Den officielle Dexcom G6- eller ONE-app forbliver forbundet til senderen. **AAPS** læser glukoseværdien direkte fra notifikationen fra Dexcom-appen, uden nogen anden app imellem.

```{admonition} Trusted data source
:class: note
Værdier fra Dexcom G6- og ONE-apperne er en [pålidelig BS-datakilde](#GettingStarted-TrustedBGSource): SMB'er kan altid tillades.
```

Sammenlignet med BYODA eller xDrip har Notifikationslæser nogle begrænsninger:

- **Ingen trendpil** og **ingen udfyldning af manglende data (backfill)**: værdier, der mangler, mens telefonen var slukket eller uden for rækkevidde, går tabt.
- Hver værdi får det tidspunkt, hvor notifikationen kom, ikke det præcise tidspunkt for sensormålingen.
- Kun værdier mellem 40 og 405 mg/dl (2,2 og 22,5 mmol/l) bliver læst. "LOW" og "HIGH" bliver ikke læst.

### Opsæt Dexcom-appen

-   Behold Dexcom-appen installeret og forbundet til senderen.
-   Sørg for, at Dexcom-appen viser den aktuelle glukoseværdi i sin notifikation. Dens notifikationer skal forblive synlige: slå dem ikke fra, og skjul dem ikke.
-   Brug de samme glukoseenheder (mg/dl eller mmol/l) i Dexcom-appen som i **AAPS**. Ellers kan **AAPS** ikke læse værdien.

### Konfiguration i AAPS

-   Vælg **Notifikationslæser** i [**Konfiguration → BS-kilde**](#Config-Builder-bg-source), og bekræft skiftet.

    ![BS-kilde: Notifikationslæser valgt](../images/NotificationReader_BgSource.png)

-   Tilbage på hovedskærmen viser **AAPS** **Tilladelser påkrævet**. Tryk på **Tillad** ved siden af **Adgang til notifikationer**.

    ![Tilladelser påkrævet: Adgang til notifikationer](../images/NotificationReader_Permissions.png)

-   Android åbner sin liste over adgang til notifikationer (navnet afhænger af din Android-version, f.eks. *Læse, besvare og styre notifikationer* (Notification read, reply & control)). Vælg **AAPS**, slå **Tillad adgang til notifikationer** til, og bekræft med **Tillad**.

    ![Android spørger, om AAPS må få adgang til notifikationer](../images/NotificationReader_AllowDialog.png)

    Android advarer om, at **AAPS** kan læse alle dine notifikationer. **AAPS** læser kun notifikationer fra understøttede CGM-apps og ignorerer alle andre.

    ![Adgang til notifikationer tilladt for AAPS](../images/NotificationReader_AccessOn.png)

-   Hvis **Tillad adgang til notifikationer** er gråtonet (*Styres af begrænset indstilling* (Controlled by Restricted Setting)), blokerer Android det, fordi **AAPS** ikke er installeret fra Play Butik. Åbn appinfo for **AAPS** (tryk længe på ikonet for **AAPS** > **Appinfo**), tryk på menuen med de tre prikker øverst til højre, og vælg **Tillad begrænsede indstillinger**. Gå derefter tilbage til skærmen for adgang til notifikationer, og tillad den.
-   Værdierne vises i **AAPS**, når Dexcom-appen viser en ny værdi.

```{warning}
Hvis notifikationen fra Dexcom-appen viser mere end ét glukosetal eller intet, springer **AAPS** den notifikation over.
```


(DexcomG6-troubleshooting-g6)=
## Fejlfinding for G6 og ONE

### Fejlfinding specielt for Dexcom G6/ONE

-   Rul ned til **Troubleshooting** [her](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Generel fejlfinding

Generel fejlfinding for CGM'er finder du [her](#general-cgm-troubleshooting).

### Ny sender med kørende sensor

Hvis du skifter sender under en kørende sensorsession, kan du prøve at fjerne senderen uden at beskadige sensorholderen. Du kan finde en video [her](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Hvis du i stedet vælger [denne løsning](https://youtu.be/tx-kTsrkNUM), skal du passe på ikke at [beskadige sensorens kontakter](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html) med strimlen.
