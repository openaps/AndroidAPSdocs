# Freestyle Libre 2 och 2+

Sensorn Freestyle Libre 2 är nu en riktig CGM, även med den officiella appen. Ändå kan LibreLink inte skicka data till AAPS. Det finns flera sätt att använda den med AAPS.

## 1. Använda en Bluetooth-brygga och OOP

Bluetooth-sändare kan användas med Libre 2 (EU) eller 2+ (EU) och en app med OOP-algoritm (out of process). Du kan få blodsockervärden var 5:e minut, som med [Libre 1](./Libre1.md).

Kontrollera att bryggan och appen du vill använda fungerar med din sensor och med xDrip.

Libre2 OOP (finns [här](#Libre2_OOP2)) ger samma BG-värden som den ursprungliga läsaren. AAPS med Libre 2 gör en utjämning på 10 till 25 minuter för att undvika vissa hopp. Se [Utjämning av värden och rådata](#libre2-value-smoothing-raw-values) nedan. OOP ger ett värde var 5:e minut med medelvärdet av de senaste 5 minuterna. Därför är BG-värdena inte lika jämna, men de stämmer med den ursprungliga läsaren och följer de "verkliga" BG-värdena snabbare. Om du vill loopa med OOP ska du slå på alla inställningar för utjämning i xDrip.

Det finns några goda skäl att använda en Bluetooth-sändare:

-   Du kan välja olika strategier för OOP2-kalibrering (1): få läsarens värden med "no calibration", kalibrera sensorn som en Libre 1 med "calibrate based on raw" eller kalibrera de läsarlika värdena med "calibrate based on glucose".  
  Se till att OOP1 är avstängt (2).

    → Hamburger Menu → Settings → Less common settings → Other misc. options

![OOP2-kalibrering](../images/Libre2_OOP2Calibration.png)

-   Sensorn Libre 2 kan användas i 14,5 dagar, som Libre 1
-   8 timmars bakåtfyllning (backfilling) stöds fullt ut

Obs: Sändaren kan användas samtidigt med appen LibreLink utan att störa den.

### Starta sensorn

- → Hamburger Menu (1) → Start sensor (2) → Start sensor (3) → svara "Not Today" (4).

![xDrip Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)

Detta startar inte fysiskt någon Libre2-sensor och påverkar dem inte på något sätt. Detta är bara för att tala om för xDrip att en ny sensor skickar blodsockervärden. Om möjligt, ange två värden från blodmätningar för den första kalibreringen. Nu bör blodsockervärdena visas i xDrip var 5:e minut. Värden som saknas, t.ex. för att du var för långt från din telefon, fylls inte i efteråt.

Efter ett sensorbyte hittar xDrip automatiskt den nya sensorn och raderar alla kalibreringsdata. Du kan kontrollera ditt blodsocker efter aktiveringen och göra en ny första kalibrering.

### Ställ in AAPS (bara för att loopa)

-   Öppna **menyn** (☰) uppe till vänster i **AAPS**, gå till **Konfiguration** > **BG-källa** och välj **xDrip+**

![Konfiguration > BG-källa med xDrip+ BG valt](../images/v4/Configuration/configuration_bg_source.png)

-   Om AAPS inte får BG-värden när telefonen är i flygplansläge, använd 'Identify receiver' som beskrivs på [sidan om xDrip-inställningar](#xdrip-identify-receiver).

## 2. Använda direktanslutning i xDrip

```{admonition} Libre 2 EU only
:class: warning
xDrip stöder inte direktanslutning till Libre 2 US och AUS.
Bara modellerna Libre 2 och 2+ för **EU**.
```

- Följ [de här instruktionerna](./Libre2MinimalL00per.md) för att ställa in xDrip, eftersom den ursprungliga dokumentationen länkar till en föråldrad OOP2-version.
- Följ instruktionerna på [sidan om xDrip-inställningar](../CompatibleCgms/xDrip.md).

-   Välj xDrip+ i [Konfiguration > BG-källa](#Config-Builder-bg-source).

(libre2-value-smoothing-raw-values)=

### Utjämning av värden och rådata

Tekniskt sett skickas det aktuella blodsockervärdet till xDrip varje minut. Ett viktat medelvärdesfilter beräknar som standard ett utjämnat värde över de senaste 25 minuterna. Du kan ändra perioden i menyn NFC Scan features.

→ Hamburger menu → Settings → NFC Scan features → Smooth libre 3 data when using xxx method

![xDrip Advanced Settings Libre 2 och rådata](../images/xDrip_Libre3_Smooth.png)

Detta krävs för att loopa. Kurvorna ser jämna ut och loopen ger mycket bra resultat. Rådata som larmen bygger på varierar lite mer, men stämmer med värdena som läsaren också visar. Dessutom kan rådata visas i xDrips graf, så att du hinner reagera på snabba ändringar. Slå på Less Common Settings \> Advanced Settings for Libre2 \> "show Raw values" och "show Sensors Infos". Då visas rådata också som små vita prickar, och mer sensorinformation finns i systemmenyn.

Rådata är mycket användbara när blodsockret ändras snabbt. Även om prickarna hoppar mer ser du trenden mycket bättre än med den utjämnade linjen, och kan fatta rätt beslut om behandlingen.

→ Hamburger menu → Settings → Less common settings → Advanced settings for Libre 2

![xDrip Advanced Settings Libre 2 och rådata](../images/Libre2_RawValues.png)



#### Kalibrering

Du kan kalibrera Libre2 **med en förskjutning (offset) på -40 mg/dL till +20 mg/dL \[-2,2 mmol/L till +1,1 mmol/L\]** (intercept). Lutningen (slope) går inte att ändra. Kontrollera med ett stick i fingret när du har satt en ny sensor. Tänk på att den kan vara mindre exakt de första 12 timmarna efter insättning. Eftersom det kan finnas stora skillnader mot blodmätningar ska du kontrollera var 24:e timme och kalibrera vid behov. Om sensorn visar helt fel efter några dagar ska den bytas ut.

## 3. Använda Diabox

- Installera [Diabox](https://www.bubblesmartreader.com/_files/ugd/6afd37_f183eabd4fbd44fcac4b1926a79b094f.pdf). Gå till Settings, Integration och slå på Share data with other apps.

![Diabox](../images/Diabox.png)

- Välj xDrip+ i [Konfiguration > BG-källa](#Config-Builder-bg-source).

## 4. Använda Juggluco

Se [här](./Juggluco.md).
