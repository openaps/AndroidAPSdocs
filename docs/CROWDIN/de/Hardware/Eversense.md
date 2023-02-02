# Für Eversense Nutzer

Am einfachsten kann man Eversense mit AndroidAPS nutzen, indem man die modifizierte non-US [Eversense App](https://cr4ck3d3v3r53n53.club/) installiert (zunächst muss die Original-App deinstalliert werden).

**Warnung: Durch die Deinstallation der alten App, werden Deine lokalen historischen Daten (älter als eine Woche) verloren gehen!**

Um die Eversense-Daten in AndroidAPS nutzen zu können, musst Du die App [ESEL](https://github.com/BernhardRo/Esel/releases) installieren und "Send to AAPS and xDrip" in ESEL und "MM640g" als BZ-Quelle im [Konfigurations-Generator](../Configuration/Config-Builder.md) von AndroidAPS auswählen. Da die Glukose-Daten von Eversense manchmal schwankend ("noisy") sein können, sollte in ESEL "Smooth Data" aktiviert werden. Das ist besser als die Option  "Always use short average delta instead of simple delta" zu wählen.

Alle APKs inkl. der US-Version und weitere Hinweise zur Nutzung von xDrip mit Eversense findest Du [hier](https://github.com/BernhardRo/Esel/tree/master/apk).
