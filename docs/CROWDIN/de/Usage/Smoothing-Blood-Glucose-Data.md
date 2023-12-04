(Smoothing-Blood-Glucose-Data)=

# Glättung der Blut-Glukose-Daten

If BG data is jumpy/noisy AAPS may dose insulin incorrectly resulting in high or low BG. If you observe errors in your CGM data it is important to disable the loop until the problem is resolved. Depending on your CGM such issues may be due to the CGM configuration or sensor problems/site issues. Ggf. musst Du einen neuen Sensor setzen, um den Fehler zu beheben.

Some CGM systems have internal algorithms to detect the noise level in the readings and AAPS can use this information to avoid giving SMBs if the BG data is too unreliable. Für die CGMs, die diese Informationen nicht übermitteln, werden die Funktionen 'Aktiviere SMB immer' und 'Aktiviere SMB nach Mahlzeiten' aus Sicherheitsgründen deaktiviert.

Additionally, as of version 3.2, AAPS offers the option to smooth the data within AAPS. There are three options:

\##Exponential smoothing

This is the recommended option to start with as it is most aggressive in resolving noise and rewrites the most recent value.

\##Average smoothing

This option works similar to back smoothing that was previously implemented on certain CGM platforms. It is more reactive to recent changes in BG value and therefore more prone to responding incorrectly to noisy CGM data.

\##No Smoothing

Use this option only if your CGM data is being properly smoothed by your collector app beore being transmitted to AAPS.
