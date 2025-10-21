# Für Eversense Nutzer

Es gibt drei verschiedene Methoden, um auf die Messwerte des Eversense zuzugreifen:

- ESEL Companion Mode
- ESEL Patched Mode
- xDrip+ Companion App

## ESEL

Lade Dir die [ESEL App](https://github.com/BernhardRo/Esel/tree/master/apk) herunter und installiere sie, so wie es in der [Anleitung](https://github.com/BernhardRo/Esel?tab=readme-ov-file#esel) beschrieben ist.

- Aktiviere "Send to AAPS and xDrip+"
- **Deaktiviere** "Send to Nightscout"
- Da die vom Eversense gelieferten Glukosewerte "verrauscht" sein können, sollte zur Glättung dieser Werte "Smooth Data" in ESEL aktiviert werden.

![ESEL Broadcast](../images/ESEL.png)

### Companion Mode

Liest die Daten aus den Benachrichtigungen der Eversense-App (funktioniert mit der Standard-Eversense-App, verfügbar seit ESEL-Version 3.0.1).

1. Verwende die offizielle Eversense-App aus dem Google Play Store
   - Optional, aber für Backfilling notwendig: Logge Dich in Dein Eversense-Konto ein
   - Im Punkt 'Sync', aktiviere die automatische Synchronisierung (auto synchronization)
2. ESEL-Konfiguration:
   - Deaktiviere die Einstellung "Get data from patched Eversense App"
   - Für das Backfilling: Aktiviere "Fill missing data from eversensedms.com"
   - Gib als Email-Adresse und Passwort Deine Eversense Login-Daten ein
3. Wähle "MM640g" als BZ-Quelle in der [KONFIGURATION > BZ-Quelle](#Config-Builder-bg-source).

### Gepatchte Eversense App

 Benötigt eine gepatchte Version der Eversense App (funktioniert komplett offline einschließlich des Backfillings).

1. Deinstalliere die Eversense App (Warnung: Du wirst Deine lokalen historischen Daten (älter als eine Woche) verlieren!)

2. Installiere die [gepatchte Eversense-App](https://cr4ck3d3v3r53n53.club) und nutze sie wie vom Hersteller beschrieben

   - Starte die Eversense-App, logge Dich ein, verbinde Dich mit Deinem Transmitter und nutze sie wie die normale App.

3. ESEL-Konfiguration:

   - Aktiviere die Einstellung "Get data from patched Eversense App"



![ESEL Broadcast](../images/ESELpatch.png)

​       Wenn Du ESEL nach einer frischen Neuinstallation des Eversense erstmalig startest, kann es bis zu 15 Minuten dauern, bis die ersten Werte in xDrip+ angezeigt werden!

4. Wähle "MM640g" als BZ-Quelle in der [KONFIGURATION > BZ-Quelle](#Config-Builder-bg-source).

## xDrip+

xDrip+ kann, genau wie es ESEL macht, die Benachrichtigungen der Hersteller-App auslesen. Backfilling ist nicht möglich.

- Lade xDrip+ herunter und installiere es: [xDrip](https://github.com/NightscoutFoundation/xDrip)
- Wähle in xDrip+ als Datenquelle „Companion App“ aus.
- Wähle xDrip+ in der [KONFIGURATION, BZ-Quelle](#Config-Builder-bg-source) aus.
- Passe die Einstellungen in xDrip+ so an, wie es unter [xDrip+ Einstellungen](../CompatibleCgms/xDrip.md) auf der xDrip+ Konfigurationsseite beschrieben ist.
- Aktiviere [Exponentielle Glättung](../CompatibleCgms/SmoothingBloodGlucoseData.md) in AAPS.

```{warning}
Da die Glukosewerte nicht immer alle 5 Minuten ausgelesen werden, kann es zu doppelten Werten (Duplikaten) kommen.
```