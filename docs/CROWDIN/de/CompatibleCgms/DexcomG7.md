- - -
orphan: true
- - -

# Dexcom G7 und ONE+


## Grundlegendes im Voraus

Der G7 und ONE+ glätten die Glukosewerte weder in der (Dexcom-) App noch im Lesegerät. Dies ist anders als es beim G6 war. Mehr Details dazu findest Du [hier](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

![G7 english](../images/6fe30b84-227a-4bae-a9a5-527cee341dbf.png)

```{admonition} [Smoothing method](../CompatibleCgms/SmoothingBloodGlucoseData.md)
:class: warning
**Durchschnittliche Glättung oder exponentielle Glättung** **MÜSSEN** aktiviert sein, um die Werte des G7 / ONE+ sinnvoll verwenden zu können.  
```

## 1. xDrip+ (direkte Verbindung zum G7 oder ONE+)

- Folge den Anweisungen: [xDrip+ G7](https://navid200.github.io/xDrip/docs/Dexcom/G7.html)
- Wähle xDrip+ in der [KONFIGURATION, BZ-Quelle](#Config-Builder-bg-source) aus

- Passe die Einstellungen in xDrip+ so an, wie es unter  [xDrip+ Einstellungen](../CompatibleCgms/xDrip.md) beschrieben ist

## 2.  Gepatchte Dexcom G7 App (DiaKEM)

**Hinweis: AAPS 3.2.0.0 oder höher ist erforderlich! Nicht für ONE+ verfügbar.**

### Installiere eine neue gepatchte (!) G7-App und starte den Sensor

This is not the BYODA app as this app can not receive G7 data at the moment. A patched Dexcom G7 app (DiaKEM) gives access to the Dexcom G7 data.

- Uninstall the original Dexcom app if you used it before (A running sensor session can be continued - note the sensor code before removal of the app!)

- Download and install the patched.apk [here](https://github.com/authorgambel/g7/releases) or [here](https://github.com/emmatovar27/dexcom-g7-apk-patcher/releases).

- Enter sensor code in the patched app.

- Follow the general recommendations for CGM hygiene and sensor placement found [here](../CompatibleCgms/GeneralCGMRecommendation.md).

- After the warm-up phase, the values are displayed as usual in the G7 app.

### Konfiguration in AAPS

- Select 'BYODA' in in [ConfigBuilder, BG Source](#Config-Builder-bg-source) - even if it is not the BYODA app!

- Sollte AAPS keine Werte empfangen, wechsel auf eine andere BZ-Quelle und dann wieder zurück auf 'BYODA'. Damit löst Du Berechtigungsabfrage zum Datenaustausch zwischen AAPS und BYODA aus.

## 3. xDrip+ (Companion Mode)

-   Lade xDrip+ herunter und installiere es: [xDrip](https://github.com/NightscoutFoundation/xDrip)
- Wähle in xDrip+ "Companion App" als Datenquelle aus. Zusätzlich muss in den Bluetootheinstellungen (Einstellungen > Erweiterte Einstellungen > Bluetootheinstellungen) "Companion Bluetooth" aktiviert werden.
-   Select  xDrip+ in in [ConfigBuilder, BG Source](#Config-Builder-bg-source).

-   Passe die Einstellungen in xDrip+ so an, wie es unter  [xDrip+ Einstellungen](../CompatibleCgms/xDrip.md) beschrieben ist 
