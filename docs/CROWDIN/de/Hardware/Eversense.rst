Für Eversense Nutzer
**************************************************
The easiest way to use Eversense with AndroidAPS is to install the non-US modified `Eversense app <https://github.com/BernhardRo/Esel/blob/master/apk/Eversense_CGM_v1.0.410-patched.apk>`_ (and uninstall the original one first).

**Warnung: Durch die Deinstallation der alten App, werden Deine lokalen historischen Daten (älter als eine Woche) verloren gehen!**

Um die Eversense-Daten in AndroidAPS nutzen zu können, musst Du die App `ESEL <https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk>`_ installieren und "Send to AAPS and xDrip" in ESEL und "MM640g" als BZ-Quelle im `Konfigurations-Generator <../Configuration/Config-Builder.html>`_ von AndroidAPS auswählen. Da die Glukose-Daten von Eversense manchmal schwankend ("noisy") sein können, sollte in ESEL "Smooth Data" aktiviert werden. Das ist besser als die Option  "Always use short average delta instead of simple delta" zu wählen.

Alle APKs inkl. der US-Version und weitere Hinweise zur Nutzung von xDrip mit Eversense findest Du `hier <https://github.com/BernhardRo/Esel/tree/master/apk>`_.
