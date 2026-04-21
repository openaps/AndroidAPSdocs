# Freestyle Libre 2 și 2+

Senzorul Libre 2 Freestyle Libre este acum un adevărat CGM chiar și cu aplicația oficială. Totuși, LibreLink nu poate trimite date către AAPS. Există mai multe soluții pentru a-l utiliza cu AAPS.

## 1. Utilizați o punte Bluetooth și OOP

Transmițătoarele prin Bluetooth pot fi utilizate împreună cu Libre 2 (UE) sau 2 + (UE) și cu o aplicație algoritm în afara procesului. Poți primi valori ale glicemiei la fiecare 5 minute, ca în cazul [Libre 1](./Libre1.md).

Verificați dacă puntea și aplicația pe care doriți să le utilizați sunt compatibile cu senzorul și xDrip+.

OOP pentru Libre2 (găsiți-l [aici](#Libre2_OOP2)) creează aceleași citiri de glicemie ca și în cazul cititorului original. AAPS cu Libre 2 face o uniformizare de 10 până la 25 de minute pentru a evita anumite salturi. Vedeți mai jos [Valoare uniformizată& valori brute](#libre2-value-smoothing-raw-values). OOP generează citiri la fiecare 5 minute, în medie cu o medie de 5 minute. Prin urmare, valorile glicemiei nu sunt atât de uniformizate, ci se potrivesc cu cele ale dispozitivului de citire original și urmează mai degrabă valorile "reale" ale glicemiei. Dacă încercați să faceți bucla cu OOP, vă rugăm să activați toate setările de uniformizare din xDrip+.

Există motive întemeiate pentru a utiliza un transmițător Bluetooth:

-   Puteți alege diferite strategii de calibrare OOP2 (1): cu valorile cititorului folosind "Fără calibrare", sau prin calibrarea senzorului ca un Libre 1 folosind "calibrare bazată pe valori brute" sau, în cele din urmă, să calibreze valorile cititorului cu "calibrare bazată pe glicemie".  
  Asigurați-vă că lăsați OOP1 dezactivat (2).

    → Hamburger Menu → Settings → Less common settings → Other misc. options

![OOP2 Calibration](../images/Libre2_OOP2Calibration.png)

-   The Libre 2 sensor can be used 14.5 days as the Libre 1
-   8 hours backfilling is fully supported

Remark: The transmitter can be used in parallel to the LibreLink app without interfering with it.

### Start sensor

- → Hamburger Menu (1) → Start sensor (2) → Start sensor (3) → Answer "Not Today" (4).

![xDrip+ Start transmițător Libre & Senzor 3](../images/xDrip_Libre_Transmitter03.png)

This will not physically start any Libre2 sensor or interact with them in any case. This is simply to indicate xDrip+ that a new sensor is delivering blood sugar levels. If available, enter two bloody measured values for the initial calibration. Now the blood glucose values should be displayed in xDrip+ every 5 minutes. Skipped values, e.g. because you were too far away from your phone, will not be backfilled.

After a sensor change xDrip+ will automatically detect the new sensor and will delete all calibration data. You may check you blood glucose after activation and make a new initial calibration.

### Configure AAPS (for looping only)

-   In AAPS go to Config Builder > BG Source and check 'xDrip+'

![xDrip+ BG Source](../images/ConfBuild_BG_xDrip.png)

-   If AAPS does not receive BG values when phone is in airplane mode, use 'Identify receiver' as describe on [xDrip+ settings page](#xdrip-identify-receiver).

## 2. Use xDrip+ direct connection

```{admonition} Libre 2 EU only
:class: warning
xDrip+ doesn't support direct connection to Libre 2 US and AUS.
Only Libre 2 and 2+ **EU** models.
```

- Follow [these instructions](./Libre2MinimalL00per.md) to setup xDrip+ as the original documentation links to an obsolete OOP2  version.
- Urmăriți instrucțiunile de configurare pe pagina [xDrip+ de setări](../CompatibleCgms/xDrip.md).

-   Selectați xDrip+ în [Configurator, Sursă glicemie](#Config-Builder-bg-source).

(libre2-value-smoothing-raw-values)=

### Value smoothing & raw values

Technically, the current blood sugar value is transmitted to xDrip+ every minute. A weighted average filter calculates a smoothed value over the last 25 minutes by default. You can change the period in the NFC Scan features menu.

→ Hamburger menu → Settings → NFC Scan features → Smooth libre 3 data when using xxx method

![xDrip+ advanced settings Libre 2 & raw values](../images/xDrip_Libre3_Smooth.png)

This is mandatory for looping. The curves look smooth and the loop results are great. The raw values on which the alarms are based jitter a little more, but correspond to the values that the reader also displays. In addition, the raw values can be displayed in the xDrip+ graph in order to be able to react in time to rapid changes. Please switch on Less Common Settings \> Advanced Settings for Libre2 \> "show Raw values" and "show Sensors Infos". Then the raw values are additionally displayed as small white dots and additional sensor info is available in the system menu.

The raw values are very helpful when the blood sugar is moving fast. Even if the dots are jumpier you would detect the tendency much better as using the smoothed line to make proper therapy decisions.

→ Hamburger menu → Settings → Less common settings → Advanced settings for Libre 2

![xDrip+ advanced settings Libre 2 & raw values](../images/Libre2_RawValues.png)



#### Calibrare

You can calibrate the Libre2 **with an offset of -40 mg/dl to +20 mg/dL \[-2,2 mmol/l to +1,1 mmol/l\]** (intercept). The slope isn't changeable. Please check by fingerpricking after setting a new sensor, keeping in mind it might not be accurate in the first 12 hours after insertion. Since there can be large differences to the blood measurements, verify every 24 hours and calibrate if necessary. If the sensor is completely off after a few days, it should then be replaced.

## 3. Use Diabox

- Install [Diabox](https://www.bubblesmartreader.com/_files/ugd/6afd37_f183eabd4fbd44fcac4b1926a79b094f.pdf). În Setări, Integrare, activați Partajarea datelor cu alte aplicații.

![Diabox](../images/Diabox.png)

- Selectați xDrip+ în [Configurator, Sursă glicemie](#Config-Builder-bg-source).

## 4. Use Juggluco

See [here](./Juggluco.md).
