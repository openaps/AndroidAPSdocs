# Dexcom G5

## Dexcom G5 mit xDrip+

-   Du kannst einfach die [latest APK (stable)](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)-Version herunterladen, es sei denn Du benötigst eine spezifische neue Funktionalität.
-   Richte xDrip+ mit dem G5 nach [diesen Anweisungen](https://navid200.github.io/xDrip/docs/G5-Recommended-Settings.html) ein.
-   Richte xDrip+ nach den Vorgaben auf der [xDrip+ Einstellungsseite](../CompatibleCgms/xDrip.md) ein.
-   Wähle xDrip+ unter [KONFIGURATION, BZ-Quelle](#Config-Builder-bg-source) aus.

## G5 mit der gepatchten Dexcom App

```{admonition} Legacy apps
:class: warning
Diese Apps sind nicht mit den aktuellen Android-Versionen kompatibel.  
```

-   Lade die APK von <https://github.com/dexcomapp/dexcomapp> herunter und wähle die benötigte Version (entweder mg/dl oder mmol/l, G5) aus.

    -   Ordner 2.4 war für Benutzer von AAPS 2.5 und höher.
    -   Öffne <https://play.google.com/store/search?q=dexcom%20g5> auf Deinem Computer. Die Region wird in der URL angezeigt.

    ![Region in Dexcom G5 URL](../images/DexcomG5regionURL.PNG)

-   Stoppe und deinstalliere die originale Dexcom App, falls noch nicht geschehen.

-   Installiere die heruntergeladene APK

-   Starte den Sensor

- Wähle 'Dexcom App (patched)' in der [KONFIGURATION, BZ-Quelle](#Config-Builder-bg-source) aus.

-   xDrip+ Alarme kannst Du über den lokalen Broadcast nutzen: In xDrip+ Hamburger Menü > Einstellungen > Datenquelle > 640G / EverSense.
