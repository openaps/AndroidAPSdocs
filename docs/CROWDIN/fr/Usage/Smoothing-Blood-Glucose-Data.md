(Smoothing-Blood-Glucose-Data)=

# Lissage des données de glycémie

If **BG** data is jumpy/noisy, AAPS may dose insulin incorrectly resulting in highs or lows. If you observe errors in your CGM data it is important to disable the loop until the problem is resolved. Depending on your CGM, such issues may be due to the CGM configuration in **AAPS** (as explained further below); or CGM sensor site issue (which may require replacing the CGM sensor)

Some CGM systems have internal algorithms to detect the noise level in the readings and AAPS can use this information to avoid giving SMBs if the BG data is too unreliable. Cependant, certaines MGC ne transmettent pas ces données et, pour ces sources de glycémie, 'Activer le SMB toujours' et 'Activer le SMB après les glucides' sont désactivés pour des raisons de sécurité.

Additionally, as of version 3.2, AAPS offers the option to smooth the data within AAPS. There are three options available in the [Config Builder](../Configuration/Config-Builder.md).

![Smoothing](../images/ConfBuild_Smoothing.png)

## Exponential smoothing

This is the recommended option to start with as it is most aggressive in resolving noise and rewrites the most recent value.

## Average smoothing

This option works similar to back smoothing that was previously implemented on certain CGM platforms. It is more reactive to recent changes in BG value and therefore more prone to responding incorrectly to noisy CGM data.

## No Smoothing

Use this option only if your CGM data is being properly smoothed by your collector app before being transmitted to AAPS.

## Suggestions to use smoothing

|                                                                                                                        | Exponential |   Average   |     None    |
| ---------------------------------------------------------------------------------------------------------------------- | :---------: | :---------: | :---------: |
| G5 and G6 with BYODA  <br />or xDrip+ **[native](https://navid200.github.io/xDrip/docs/Native-Algorithm.html)**        |             |   If noisy  | Recommended |
| Refurbished G5 and G6  <br />with xDrip+ **[non-native](https://navid200.github.io/xDrip/docs/Native-Algorithm.html)** |   If noisy  | Recommended |             |
| G7                                                                                                                     | Recommended |             |             |
| Libre 1 or Juggluco                                                                                                    | Recommended |             |             |
| Libre 2 and 3 from xDrip+                                                                                              |             |             | Recommended |
