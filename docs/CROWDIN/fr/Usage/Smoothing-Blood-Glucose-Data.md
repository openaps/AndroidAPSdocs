(Smoothing-Blood-Glucose-Data)=

# Lissage des données de glycémie

If BG data is jumpy/noisy AAPS may dose insulin incorrectly resulting in high or low BG. If you observe errors in your CGM data it is important to disable the loop until the problem is resolved. Depending on your CGM such issues may be due to the CGM configuration or sensor problems/site issues. Vous devrez peut-être remplacer votre capteur MGC pour résoudre ce problème.

Some CGM systems have internal algorithms to detect the noise level in the readings and AAPS can use this information to avoid giving SMBs if the BG data is too unreliable. Cependant, certaines MGC ne transmettent pas ces données et, pour ces sources de glycémie, 'Activer le SMB toujours' et 'Activer le SMB après les glucides' sont désactivés pour des raisons de sécurité.

Additionally, as of version 3.2, AAPS offers the option to smooth the data within AAPS. There are three options:

\##Exponential smoothing

This is the recommended option to start with as it is most aggressive in resolving noise and rewrites the most recent value.

\##Average smoothing

This option works similar to back smoothing that was previously implemented on certain CGM platforms. It is more reactive to recent changes in BG value and therefore more prone to responding incorrectly to noisy CGM data.

\##No Smoothing

Use this option only if your CGM data is being properly smoothed by your collector app beore being transmitted to AAPS.
