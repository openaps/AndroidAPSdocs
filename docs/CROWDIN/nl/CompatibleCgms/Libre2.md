# Freestyle Libre 2 en 2+

De Freestyle Libre 2 sensor is nu een echte CGM, zelfs met de officiële app. Maar LibreLink kan nog steeds geen data sturen naar AAPS. Er zijn verschillende manieren om de sensor met AAPS te gebruiken.

## 1. Een Bluetooth-bridge en OOP gebruiken

Bluetooth-zenders kunnen gebruikt worden met de Libre 2 (EU) of 2+ (EU) en een app met een out-of-process-algoritme (OOP). Je kunt elke 5 minuten bloedglucosewaarden ontvangen, net als met de [Libre 1](./Libre1.md).

Controleer of de bridge en de app die je wilt gebruiken geschikt zijn voor jouw sensor en voor xDrip.

De Libre2 OOP (vind je [hier](#Libre2_OOP2)) maakt dezelfde BG-waarden als de originele reader. AAPS met de Libre 2 vlakt de waarden af over 10 tot 25 minuten om bepaalde sprongen te voorkomen. Zie hieronder [Afvlakken van waarden & ruwe waarden](#libre2-value-smoothing-raw-values). OOP genereert elke 5 minuten een waarde, met het gemiddelde van de laatste 5 minuten. Daarom zijn de BG-waarden minder vloeiend, maar ze komen overeen met de originele reader en volgen de "echte" BG-waarden sneller. Als je met OOP wilt loopen, zet dan alle instellingen voor afvlakken (smoothing) in xDrip aan.

Er zijn een paar goede redenen om een Bluetooth-zender te gebruiken:

-   Je kunt verschillende OOP2-kalibratiestrategieën kiezen (1): de waarden van de reader houden met "no calibration", de sensor kalibreren zoals een Libre 1 met "calibrate based on raw", of de reader-achtige waarden kalibreren met "calibrate based on glucose".  
  Laat OOP1 uitgeschakeld (2).

    → Hamburgermenu → Settings → Less common settings → Other misc. options

![OOP2-kalibratie](../images/Libre2_OOP2Calibration.png)

-   De Libre 2 sensor kan 14,5 dagen gebruikt worden, net als de Libre 1
-   8 uur aanvullen van ontbrekende waarden wordt volledig ondersteund

Opmerking: de zender kan tegelijk met de LibreLink-app gebruikt worden, zonder die te storen.

### Start sensor

- → Hamburgermenu (1) → Start sensor (2) → Start sensor (3) → Antwoord "Not Today" (4).

![xDrip Libre-zender & sensor starten 3](../images/xDrip_Libre_Transmitter03.png)

Dit start geen echte Libre2 sensor en heeft in geen geval invloed op de sensor. Dit is alleen om xDrip te laten weten dat een nieuwe sensor bloedglucosewaarden levert. Voer, als dat kan, twee waarden uit bloedmetingen in voor de eerste kalibratie. Nu zouden de bloedglucose- waarden elke 5 minuten in xDrip getoond moeten worden. Overgeslagen waarden, bijvoorbeeld omdat je te ver van je telefoon was, worden niet achteraf aangevuld.

Na een sensorwissel herkent xDrip de nieuwe sensor automatisch en wist alle kalibratiegegevens. Je kunt je bloedglucose controleren na het activeren en een nieuwe eerste kalibratie doen.

### AAPS instellen (alleen voor loopen)

-   Open in **AAPS** het **menu** (☰) linksboven, ga naar **Configuratie** > **BG bron** en selecteer **xDrip+**

![Configuratie > BG bron met xDrip+ BG geselecteerd](../images/v4/Configuration/configuration_bg_source.png)

-   Krijgt AAPS geen BG-waarden als de telefoon in de vliegtuigmodus staat, gebruik dan 'Identify receiver' zoals beschreven op de [pagina met xDrip-instellingen](#xdrip-identify-receiver).

## 2. Directe verbinding met xDrip gebruiken

```{admonition} Libre 2 EU only
:class: warning
xDrip ondersteunt geen directe verbinding met de Libre 2 US en AUS.
Alleen de Libre 2 en 2+ modellen uit de **EU**.
```

- Volg [deze instructies](./Libre2MinimalL00per.md) om xDrip in te stellen, want de originele documentatie verwijst naar een verouderde OOP2-versie.
- Volg de instructies op de [pagina met xDrip-instellingen](../CompatibleCgms/xDrip.md).

-   Selecteer xDrip+ in [Configuratie > BG bron](#Config-Builder-bg-source).

(libre2-value-smoothing-raw-values)=

### Afvlakken van waarden & ruwe waarden

Technisch gezien wordt de actuele bloedglucosewaarde elke minuut naar xDrip gestuurd. Een filter met gewogen gemiddelde berekent standaard een afgevlakte waarde over de laatste 25 minuten. Je kunt deze periode wijzigen in het menu NFC Scan features.

→ Hamburgermenu → Settings → NFC Scan features → Smooth libre 3 data when using xxx method

![xDrip geavanceerde instellingen Libre 2 & ruwe waarden](../images/xDrip_Libre3_Smooth.png)

Dit is verplicht om te loopen. De grafieken zien er vloeiend uit en de loop-resultaten zijn goed. De ruwe waarden waarop de alarmen zijn gebaseerd schommelen iets meer, maar komen overeen met de waarden die de reader ook toont. Daarnaast kunnen de ruwe waarden getoond worden in de grafiek van xDrip, zodat je op tijd kunt reageren op snelle veranderingen. Zet in xDrip Less Common Settings \> Advanced Settings for Libre2 \> "show Raw values" en "show Sensors Infos" aan. Dan worden de ruwe waarden ook getoond als kleine witte stippen en is extra sensorinformatie beschikbaar in het systeemmenu.

De ruwe waarden zijn erg nuttig als de bloedglucose snel verandert. Ook als de stippen meer springen, zie je de trend veel beter dan met de afgevlakte lijn. Zo kun je goede beslissingen nemen over je behandeling.

→ Hamburgermenu → Settings → Less common settings → Advanced settings for Libre 2

![xDrip geavanceerde instellingen Libre 2 & ruwe waarden](../images/Libre2_RawValues.png)



#### Kalibratie

Je kunt de Libre2 kalibreren **met een offset van -40 mg/dl tot +20 mg/dl \[-2,2 mmol/l tot +1,1 mmol/l\]** (intercept). De helling (slope) kun je niet wijzigen. Controleer dit met een vingerprik na het plaatsen van een nieuwe sensor. Let op: de sensor kan de eerste 12 uur na het plaatsen onnauwkeurig zijn. Er kunnen grote verschillen zijn met de bloedmetingen. Controleer daarom elke 24 uur en kalibreer als dat nodig is. Als de sensor na een paar dagen helemaal niet klopt, moet je hem vervangen.

## 3. Diabox gebruiken

- Installeer [Diabox](https://www.bubblesmartreader.com/_files/ugd/6afd37_f183eabd4fbd44fcac4b1926a79b094f.pdf). Ga in Diabox naar Settings, Integration en zet Share data with other apps aan.

![Diabox](../images/Diabox.png)

- Selecteer xDrip+ in [Configuratie > BG bron](#Config-Builder-bg-source).

## 4. Juggluco gebruiken

Zie [hier](./Juggluco.md).
