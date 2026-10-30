# Freestyle Libre 2 and 2+

The Freestyle Libre 2 sensor is now a real CGM even with the official app. Still, LibreLink cannot send data to AAPS. There are several solutions to use it with AAPS.

## 1. Use a Bluetooth bridge and OOP

Bluetooth transmitters can be used with the Libre 2 (EU) or 2+ (EU) and an out of process algorithm app. You can receive blood sugar readings every 5 minutes like with the [Libre 1](./Libre1.md).

Check the bridge and app you want to use are compatible with your sensor and xDrip.

The Libre2 OOP (find it [here](#Libre2_OOP2)) is creating the same BG readings as with the original reader. AAPS with Libre 2 do a 10 to 25 minutes smoothing to avoid certain jumps. See below [Value smoothing & raw values](#libre2-value-smoothing-raw-values). OOP generates readings every 5 minutes with the average of the last 5 minutes. Therefore the BG readings are not that smooth but match the original reader device and faster follow the "real" BG readings. If you try to loop with OOP please enable all smoothing settings in xDrip.

There are some good reasons to use a Bluetooth transmitter:

-   You can choose various OOP2 calibration strategies (1): have the reader values using "no calibration", or calibrate the sensor like a Libre 1 using "calibrate based on raw" or ultimately calibrate the the readers like values with "calibrate based on glucose".  
  Make sure to leave OOP1 disabled (2).

    → Hamburger Menu → Settings → Less common settings → Other misc. options

![OOP2 Calibration](../images/Libre2_OOP2Calibration.png)

-   The Libre 2 sensor can be used 14.5 days as the Libre 1
-   8 hours backfilling is fully supported

Remark: The transmitter can be used in parallel to the LibreLink app without interfering with it.

### Démarrer le capteur

- → Hamburger Menu (1) → Start sensor (2) → Start sensor (3) → Answer "Not Today" (4).

![xDrip Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)

This will not physically start any Libre2 sensor or interact with them in any case. This is simply to indicate xDrip that a new sensor is delivering blood sugar levels. Si possible, entrez deux valeurs de glycémie capillaire pour l'étalonnage initial. Now the blood glucose values should be displayed in xDrip every 5 minutes. Les valeur manquées, par ex. si vous étiez trop loin de votre téléphone, ne seront pas actualisées à postériori.

After a sensor change xDrip will automatically detect the new sensor and will delete all calibration data. You may check you blood glucose after activation and make a new initial calibration.

### Configure AAPS (for looping only)

-   In **AAPS**, open the **menu** (☰) in the top-left corner, go to **Configuration** > **BG Source** and select **xDrip+**

![Configuration > BG Source with xDrip+ BG selected](../images/v4/Configuration/configuration_bg_source.png)

-   If AAPS does not receive BG values when phone is in airplane mode, use 'Identify receiver' as describe on [xDrip settings page](#xdrip-identify-receiver).

## 2. Use xDrip direct connection

```{admonition} Libre 2 EU only
:class: warning
xDrip doesn't support direct connection to Libre 2 US and AUS.
Only Libre 2 and 2+ **EU** models.
```

- Follow [these instructions](./Libre2MinimalL00per.md) to setup xDrip as the original documentation links to an obsolete OOP2  version.
- Follow setup instructions on [xDrip settings page](../CompatibleCgms/xDrip.md).

-   Select xDrip+ in [Configuration > BG Source](#Config-Builder-bg-source).

(libre2-value-smoothing-raw-values)=

### Lissage de valeur & valeurs brutes

Technically, the current blood sugar value is transmitted to xDrip every minute. A weighted average filter calculates a smoothed value over the last 25 minutes by default. You can change the period in the NFC Scan features menu.

→ Hamburger menu → Settings → NFC Scan features → Smooth libre 3 data when using xxx method

![xDrip advanced settings Libre 2 & raw values](../images/xDrip_Libre3_Smooth.png)

Ceci est obligatoire pour la boucle. The curves look smooth and the loop results are great. Les valeurs brutes sur lesquelles les alarmes sont basées sont un peu plus instables, mais correspondent également aux valeurs que le lecteur affiche. In addition, the raw values can be displayed in the xDrip graph in order to be able to react in time to rapid changes. Veuillez activer Paramètres moins courants \> Paramètres Avancés pour Libre2 \> "show Raw values in Graph" et "show Sensors Infos in Status". Ainsi les valeurs brutes sont affichées sous forme de petits points blancs et des informations supplémentaires sur les capteurs sont disponibles dans le menu Système.

Les valeurs brutes sont très utiles lorsque les glycémies changent rapidement. Même si les points sont moins stables, vous détecterez beaucoup mieux la tendance qu'avec l'utilisation de la ligne lissée pour prendre les bonnes décisions de traitement.

→ Hamburger menu → Settings → Less common settings → Advanced settings for Libre 2

![xDrip advanced settings Libre 2 & raw values](../images/Libre2_RawValues.png)



#### Étalonnage

You can calibrate the Libre2 **with an offset of -40 mg/dL to +20 mg/dL \[-2,2 mmol/L to +1,1 mmol/L\]** (intercept). The slope isn't changeable. Please check by fingerpricking after setting a new sensor, keeping in mind it might not be accurate in the first 12 hours after insertion. Since there can be large differences to the blood measurements, verify every 24 hours and calibrate if necessary. If the sensor is completely off after a few days, it should then be replaced.

## 3. Use Diabox

- Install [Diabox](https://www.bubblesmartreader.com/_files/ugd/6afd37_f183eabd4fbd44fcac4b1926a79b094f.pdf). In Settings, Integration, enable Share data with other apps.

![Diabox](../images/Diabox.png)

- Select xDrip+ in [Configuration > BG Source](#Config-Builder-bg-source).

## 4. Use Juggluco

See [here](./Juggluco.md).
