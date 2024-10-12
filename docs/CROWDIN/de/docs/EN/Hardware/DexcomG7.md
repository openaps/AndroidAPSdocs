# Dexcom G7 and ONE+


## Grundlegendes im Voraus

Noteworthy is the fact that the G7 and ONE+ systems, compared to the G6, do not smooth the values, neither in the app, nor in the reader. Mehr Details dazu findest Du [hier](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

![G7 english](../images/6fe30b84-227a-4bae-a9a5-527cee341dbf.png)

```{admonition} [Smoothing method](../Usage/Smoothing-Blood-Glucose-Data)
:class: warning
**Exponential Smoothing** **MUST** be enabled for meaningful use of the G7 / ONE+ values.  
```

## 1.  Gepatchte Dexcom G7 App (DiAKEM)

**Note: AAPS 3.2.0.0 or higher is required! Not available for ONE+.**

### Installiere eine neue gepatchte (!) G7-App und starte den Sensor

A patched Dexcom G7 app (DiAKEM) gives access to the Dexcom G7 data. This is not the BYODA app as this app can not receive G7 data at the moment.

Uninstall the original Dexcom app if you used it before (A running sensor session can be continued - note the sensor code before removal of the app!)

Download and install the patched.apk [here](https://github.com/authorgambel/g7/releases).

Enter sensor code in the patched app.

Follow the general recommendations for CGM hygiene and sensor placement found [here](../Hardware/GeneralCGMRecommendation.md).

After the warm-up phase, the values are displayed as usual in the G7 app.

### Konfiguration in AAPS

For the configuration in AAPS
- Wähle 'BYODA' in der [Konfiguration als BZ-Quelle](../Configuration/Config-Builder.md#bg-source) (auch wenn es nicht die gepatchte G7-App ist!)

- Sollte AAPS keine Werte empfangen, wechsel auf eine andere BZ-Quelle und dann wieder zurück auf 'BYODA'. Damit löst Du Berechtigungsabfrage zum Datenaustausch zwischen AAPS und BYODA aus.

## 2. xDrip+ (direct connection to G7 or ONE+)

- Folge den Anweisungen: [xDrip+ G7](https://navid200.github.io/xDrip/docs/Dexcom/G7.html)
- Wähle xDrip+ in der [KONFIGURATION, BZ-Quelle](../Configuration/Config-Builder.md#bg-source) aus

- Passe die Einstellungen in xDrip+ so an, wie es unter  [xDrip+ Einstellungen](../Configuration/xdrip.md) beschrieben ist

## 3. xDrip+ (Companion Mode)

-   Lade xDrip+ herunter und installiere es: [xDrip](https://github.com/NightscoutFoundation/xDrip)
- Wähle in xDrip+ "Companion App" als Datenquelle aus. Zusätzlich muss in den Bluetootheinstellungen (Einstellungen > Erweiterte Einstellungen > Bluetootheinstellungen) "Companion Bluetooth" aktiviert werden.
-   Wähle xDrip+ in der [KONFIGURATION, BZ-Quelle](../Configuration/Config-Builder.md#bg-source) aus.

-   Passe die Einstellungen in xDrip+ so an, wie es unter  [xDrip+ Einstellungen](../Configuration/xdrip.md) beschrieben ist 
