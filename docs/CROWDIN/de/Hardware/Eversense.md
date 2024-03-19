# Für Eversense Nutzer

The easiest way to use Eversense with AAPS is to install the EU or US modified [Eversense app](https://cr4ck3d3v3r53n53.club/) (and uninstall the original one first).

**Warnung: Durch die Deinstallation der alten App, werden Deine lokalen historischen Daten (älter als eine Woche) verloren gehen!**

- To get your data to AAPS, you need to install [ESEL](https://github.com/BernhardRo/Esel/blob/master/apk/debug/app-debug.apk) and enable "Send to AAPS and xDrip", disable "Send to NightScout".

![ESEL Broadcast](../images/ESEL.png)

Da die Glukose-Daten von Eversense manchmal schwankend ("noisy") sein können, sollte in ESEL "Smooth Data" aktiviert werden. Das ist besser als die Option  "Always use short average delta instead of simple delta" zu wählen.

- Set "MM640g" as BG source in in [ConfigBuilder, BG Source](../Configuration/Config-Builder.md#bg-source).

Alle APKs inkl. der US-Version und weitere Hinweise zur Nutzung von xDrip mit Eversense findest Du [hier](https://github.com/BernhardRo/Esel/tree/master/apk).
