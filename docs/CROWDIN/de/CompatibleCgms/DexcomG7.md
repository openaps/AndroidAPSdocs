# Dexcom G7 und ONE+


## Grundlegendes im Voraus

Der G7 und ONE+ glätten die Glukosewerte weder in der (Dexcom-) App noch im Lesegerät. Dies ist anders als es beim G6 war. Mehr Details dazu findest Du [hier](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

![G7 Englisch](../images/6fe30b84-227a-4bae-a9a5-527cee341dbf.png)

```{admonition} Smoothing method 
Im Abschnitt [Glättung der Blut-Glukose-Daten](../CompatibleCgms/SmoothingBloodGlucoseData.md) findest Du Vorschläge für den Dexcom G7/ONE+/Stelo
```

## 1. xDrip+ (direkte Verbindung zum G7 oder ONE+)

- Folge dieser Anleitung: [xDrip+ G7](https://navid200.github.io/xDrip/docs/Dexcom/G7.html)
- Wähle xDrip+ in der [KONFIGURATION, BZ-Quelle](#Config-Builder-bg-source) aus

- Passe die Einstellungen in xDrip+ so an, wie es unter  [xDrip+ Einstellungen](../CompatibleCgms/xDrip.md) beschrieben ist

## 2.  Gepatchte Dexcom G7 App (DiaKEM)

**Hinweis: AAPS 3.2.0.0 oder höher ist erforderlich! Nicht für ONE+ verfügbar.**

### Installiere eine neue gepatchte (!) G7-App und starte den Sensor

This is not the BYODA app as this app can not receive G7 data at the moment. A patched Dexcom G7 app (DiaKEM) gives access to the Dexcom G7 data.

- Wenn Du bisher die originale Dexcom-App genutzt hast, musst Du diese im ersten Schritt nun deinstallieren. Wenn Du den Sensor-Kopplungscode noch kennst, kannst Du eine laufende Sensorsitzung weiterführen. Bitte merke ihn Dir daher, bevor Du die originale G7-App deinstallierst.

- Lade die gepatchte APK [hier](https://github.com/authorgambel/g7/releases) herunter und installiere sie.

- Gebe den Sensor Code (Kopplungscode) in der gepatchten App ein.

- Beachte die allgemeinen Empfehlungen zur CGM-Hygiene und den empfohlenen Sensor-Tragestellen [hier](../CompatibleCgms/GeneralCGMRecommendation.md).

- Nach der Aufwärmphase werden die Glukosewerte wie üblich in der G7-App angezeigt.

### Konfiguration in AAPS

- Wähle 'BYODA' in der [Konfiguration als BZ-Quelle](#Config-Builder-bg-source) (auch wenn es nicht die gepatchte G7-App ist!)

- Sollte AAPS keine Werte empfangen, wechsel auf eine andere BZ-Quelle und dann wieder zurück auf 'BYODA'. Damit löst Du Berechtigungsabfrage zum Datenaustausch zwischen AAPS und BYODA aus.

## 3. xDrip+ (Companion Mode)

-   Lade xDrip+ herunter und installiere es: [xDrip](https://github.com/NightscoutFoundation/xDrip)
- Wähle in xDrip+ "Companion App" als Datenquelle aus. Zusätzlich muss in den Bluetootheinstellungen (Einstellungen > Erweiterte Einstellungen > Bluetootheinstellungen) "Companion Bluetooth" aktiviert werden.
-   Wähle xDrip+ in der [KONFIGURATION, BZ-Quelle](#Config-Builder-bg-source) aus.

-   Passe die Einstellungen in xDrip+ so an, wie es unter  [xDrip+ Einstellungen](../CompatibleCgms/xDrip.md) beschrieben ist

## 4. Juggluco

Version 9.0+ ist erforderlich

- Deaktiviere die App, die zuvor mit dem Sensor verbunden war: Deinstalliere die App oder nutze „Stopp erzwingen“ Deaktiviere in den App-Einstellungen die Berechtigung „Geräte in der Nähe“. Schränke den Akkuverbrauch der App ein.

- Entkoppele den Sensor in den Bluetooth-Einstellungen: In den Android-Einstellungen findest Du den Sensor in den gekoppelten Geräten und wähle „Entkoppeln“ aus. Dexcom G7 Sensornamen beginnen mit DXCM.

- Vermeide Beeinträchtigungen durch andere Sensoren: Halte alte Dexcom-Sensoren aus dem Bluetooth-Bereich fern.

- Verbinde den G7-Sensor mit Juggluco: Öffne Juggluco → Linkes Menü → Photo. Scanne die Datenmatrix auf Sensorapplikator des G7. Gib Juggluco bis zu 5 Minuten Zeit den Sensor zu finden.

- Koppelungs-Voraussetzungen: Zulassen, dass sich der Sensor mit Juggluco koppelt. Stelle sicher, dass der Bildschirm während des Koppelns nicht gesperrt ist. Wenn die Verbindung fehlschlägt, warte 5 Minuten, bevor Du es erneut versuchst.

- Ausnahme: Wear OS Smartwatches können sich auch ohne ein explizites „zulassen“ koppeln.
