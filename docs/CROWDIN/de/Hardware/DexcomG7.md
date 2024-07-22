# Dexcom G7


## Grundlegendes im Voraus

Seit Ende Oktober 2022 ist der Dexcom G7, nachdem er die CE-Zertifizierung im Frühjahr 2022 erhalten hatte, verfügbar.

Der G7 glättet weder in der (Dexcom) App noch im Lesegerät die Glukosewerte. Dies ist anders als es beim G6 war. Mehr Details dazu findest Du [hier](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

![G7 english](../images/6fe30b84-227a-4bae-a9a5-527cee341dbf.png)

:::{admonition} [Glättung](../Usage/Smoothing-Blood-Glucose-Data)
:class: warning **Exponentielle Glättung** **MUSS** aktiviert werden, um die G7-Werte sinnvoll nutzen zu können.  
:::

## 1.  Gepatchte Dexcom G7 App (DiAKEM)

**Hinweis: AAPS 3.2.0.0 oder höher ist erforderlich!**

### Installiere eine neue gepatchte (!) G7-App und starte den Sensor

Eine gepatchte Dexcom G7 App (DiAKEM) ermöglicht den Zugriff auf die Dexcom G7 Daten. Dies ist nicht die BYODA-App. BYODA kann derzeit keine Daten direkt vom G7 empfangen.

Wenn Du bisher die originale Dexcom-App genutzt hast, musst Du diese im ersten Schritt nun deinstallieren. Wenn Du den Sensor-Kopplungscode noch kennst, kannst Du eine laufende Sensorsitzung weiterführen. Bitte merke ihn Dir daher, bevor Du die originale G7-App deinstallierst.

Lade die gepatchte APK [hier](https://github.com/authorgambel/g7/releases) herunter und installiere sie.

Gebe den Sensor Code (Kopplungscode) in der gepatchten App ein.

Beachte die allgemeinen Empfehlungen zur CGM-Hygiene und den empfohlenen Sensor-Tragestellen [hier](../Hardware/GeneralCGMRecommendation.md).

Nach der Aufwärmphase werden die Glukosewerte wie üblich in der G7-App angezeigt.

### Konfiguration in AAPS

Zur Konfiguration von AAPS
- Wähle 'BYODA' in der [Konfiguration als BZ-Quelle](../Configuration/Config-Builder.md#bg-source) (auch wenn es nicht die gepatchte G7-App ist!)

- Sollte AAPS keine Werte empfangen, wechsel auf eine andere BZ-Quelle und dann wieder zurück auf 'BYODA'. Damit löst Du Berechtigungsabfrage zum Datenaustausch zwischen AAPS und BYODA aus.

## 2. xDrip+ (direkte Verbindung zum G7)

- Folge den Anweisungen: [xDrip+ G7](https://navid200.github.io/xDrip/docs/Dexcom/G7.html)
- Wähle xDrip+ in der [KONFIGURATION, BZ-Quelle](../Configuration/Config-Builder.md#bg-source) aus

- Passe die Einstellungen in xDrip+ so an, wie es unter  [xDrip+ Einstellungen](../Configuration/xdrip.md) beschrieben ist

## 3. xDrip+ (Companion Mode)

-   Lade xDrip+ herunter und installiere es: [xDrip](https://github.com/NightscoutFoundation/xDrip)
- Wähle in xDrip+ "Companion App" als Datenquelle aus. Zusätzlich muss in den Bluetootheinstellungen (Einstellungen > Erweiterte Einstellungen > Bluetootheinstellungen) "Companion Bluetooth" aktiviert werden.
-   Wähle xDrip+ in der [KONFIGURATION, BZ-Quelle](../Configuration/Config-Builder.md#bg-source) aus.

-   Passe die Einstellungen in xDrip+ so an, wie es unter  [xDrip+ Einstellungen](../Configuration/xdrip.md) beschrieben ist 
