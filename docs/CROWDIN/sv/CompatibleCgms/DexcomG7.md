# Dexcom G7, ONE+ och Stelo


## Viktigt att veta i förväg

Observera att systemen G7, ONE+ och Stelo, till skillnad från G6, inte utjämnar värdena, varken i appen eller i mottagaren. Mer information om detta finns [här](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

```{admonition} Smoothing method 
Läs förslagen om [utjämningsmetod](../CompatibleCgms/SmoothingBloodGlucoseData.md) för Dexcom G7/ONE+/Stelo
```

## 1. xDrip (direkt anslutning till G7, ONE+ eller Stelo)

- xDrip ansluter själv till sensorn: avinstallera Dexcom-appen, eftersom bara en app kan vara ansluten till sensorn. Om du vill behålla Dexcom-appen använder du i stället [xDrip som följeslagarapp (Companion App)](#DexcomG7-xdrip-companion-app).
- Följ instruktionerna här: [xDrip G7, ONE+ och Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7.html). Du behöver en ny version av xDrip – se den länkade sidan för lägsta version.
- Välj xDrip i [**Konfiguration → BG-källa**](#Config-Builder-bg-source).

- Ställ in xDrip enligt förklaringarna på sidan om xDrip-inställningar [xDrip-inställningar](../CompatibleCgms/xDrip.md).

## 2. Build Your Own Dexcom App (bara G7)

```{admonition} Old app version
:class: warning
Dexcom BYODA är nu en mycket gammal version av appen och kan inte uppdateras. Finns inte för ONE+ eller Stelo.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) kan skicka data lokalt (local broadcast) till AAPS

-   Med den här appen kan du använda din Dexcom G7 med vilken Android-telefon som helst.
-   Avinstallera den ursprungliga Dexcom-appen
-   Installera den nedladdade apk-filen
-   Ange sensorkoden i den patchade appen
-   Efter en kort stund bör BYODA fånga upp signalen från sensorn.

(DexcomG7-xdrip-companion-app)=

## 3. xDrip som följeslagarapp (Companion App) (G7, ONE+ och Stelo)

Den officiella Dexcom-appen förblir ansluten till sensorn. xDrip läser glukosvärdena från Dexcom-appens aviseringar och skickar dem till **AAPS**.

```{admonition} Not a trusted data source
:class: note
**AAPS** räknar inte xDrip i läget Companion App som en [pålitlig BG-källa](#GettingStarted-TrustedBGSource): SMB är inte tillåtna hela tiden.
```

### Läs Dexcom-appens aviseringar

- Behåll Dexcom-appen installerad och ansluten till sensorn. Dess aviseringar måste fortsätta att synas: stäng inte av ljudet för dem och dölj dem inte.
- Ladda ned och installera [xDrip](https://github.com/NightscoutFoundation/xDrip). Använd samma glukosenhet i xDrip som i Dexcom-appen.
- I xDrip går du till **Settings** > **Hardware Data Source** och väljer **Companion App**.

  ![xDrip Hardware Data Source: Companion App](../images/xDrip_Companion_DataSource.png)

- xDrip ber om behörighet att läsa aviseringar. Tryck på **OK**, välj sedan **xDrip** i listan och slå på **Tillåt åtkomst till aviseringar**.

  ![Lista över åtkomst till aviseringar](../images/xDrip_Companion_NotificationAccess1.png)

- Om **Tillåt åtkomst till aviseringar** är gråmarkerat (*Styrs av begränsad inställning*) blockerar Android det, eftersom xDrip inte installerades från Play Butik:

  ![Åtkomst till aviseringar styrs av begränsad inställning](../images/xDrip_Companion_Restricted.png)

  Öppna appinformationen för xDrip (tryck länge på xDrip-ikonen > **Appinfo**), tryck på menyn med tre punkter uppe till höger och välj **Tillåt begränsade inställningar**. Gå sedan tillbaka till skärmen för åtkomst till aviseringar och tillåt den.

  ![Appinfo: Tillåt begränsade inställningar](../images/xDrip_Companion_AllowRestricted.png)

  ![Åtkomst till aviseringar tillåten för xDrip](../images/xDrip_Companion_NotificationAccess2.png)

- Värdena visas i xDrip när Dexcom-appen visar ett nytt värde. Om inget visas kan du behöva starta en sensor i xDrip: det påverkar inte den riktiga sensorn. Stelo ger ett värde var 15:e minut i det här läget.

### Companion Bluetooth (G7)

När Dexcom-appen är ansluten till en G7-sensor kan xDrip också lyssna på de värden som sensorn skickar till Dexcom-appen via Bluetooth. xDrip parkopplas inte med sensorn och du behöver inte ange sensorkoden: Dexcom-appen behåller kontrollen.

Med **Companion Bluetooth** får xDrip den exakta tiden och trenden för varje värde från sensorn, i stället för tiden då aviseringen visades. xDrip fyller också i luckor från när telefonen var utom räckvidd (backfill).

- I xDrip går du till **Settings** > **Less common settings** > **Bluetooth Settings** och slår på **Companion Bluetooth**.

  ![xDrip Bluetooth Settings: Companion Bluetooth](../images/xDrip_Companion_Bluetooth.png)

- Detta fungerar inte på alla telefoner och Android-versioner. Stäng av det om du ser problem.
- Om en gammal Dexcom-sensor fortfarande finns i telefonens Bluetooth-lista kan xDrip lyssna på fel sensor: i Androids **Inställningar** > **Anslutna enheter** glömmer du sensorer som du inte använder längre.
- Companion Bluetooth är gjort för G7. Med ONE+ och Stelo: använd aviseringarna.

### Inställningar i AAPS

- Välj xDrip i [**Konfiguration → BG-källa**](#Config-Builder-bg-source).
- Ställ in xDrip enligt förklaringarna på sidan om xDrip-inställningar [xDrip-inställningar](../CompatibleCgms/xDrip.md).

## 4. Juggluco (G7 och ONE+)

Version 9.0 eller senare krävs

- Stäng av appen som tidigare var ansluten till sensorn: avinstallera appen eller använd "Tvinga stopp" (Force stop). Stäng av behörigheten "Enheter i närheten" i appens inställningar. Begränsa appens batterianvändning.

- Glöm sensorn i Bluetooth-inställningarna: leta upp sensorn bland de kopplade enheterna i Androids inställningar och välj "Glöm". Namnen på Dexcom G7-sensorer börjar med DXCM.

- Undvik störningar från andra sensorer: håll gamla Dexcom-sensorer utanför Bluetooth-räckvidd.

- Anslut G7-sensorn till Juggluco: öppna Juggluco → vänstra menyn → Photo. Skanna datamatriskoden på G7-sensorns applikator. Vänta upp till 5 minuter tills Juggluco hittar sensorn.

- Krav för parkoppling: godkänn att sensorn parkopplas med Juggluco. Se till att skärmen inte är låst under parkopplingen. Om parkopplingen misslyckas: vänta 5 minuter innan du försöker igen.

- Undantag: Wear OS-klockor kan koppla utan att du trycker på en knapp för att godkänna.
