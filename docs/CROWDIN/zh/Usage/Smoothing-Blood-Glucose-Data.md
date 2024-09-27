(Smoothing-Blood-Glucose-Data)=

# Smoothing blood glucose data

If **BG** data is jumpy/noisy, **AAPS** may dose insulin incorrectly resulting in highs or lows. If you observe errors in your CGM data it is important to disable the loop until the problem is resolved. Depending on your CGM, such issues may be due to the CGM configuration in **AAPS** (as explained further below); or a CGM sensor site issue (which may require replacing the CGM sensor).

Some CGM systems have internal algorithms to detect the noise level in the readings, and **AAPS** can use this information to avoid giving SMBs if the BG data is too unreliable. However, some CGMs do not transmit this data and for these BG sources 'Enable SMB always' and 'Enable SMB after carbs' are disabled for safety reasons.

Additionally, as of **AAPS** version 3.2, **AAPS** offers the option to smooth the data within **AAPS** rather than within the CGM app. There are three options available in the [Config Builder](../Configuration/Config-Builder.md).

![Smoothing](../images/ConfBuild_Smoothing.png)

## Exponential smoothing

This is the recommended option to start with, as it is most aggressive in resolving noise and rewrites the most recent value.

## Average smoothing

This option works similar to back smoothing that was previously implemented on certain CGM platforms. It is more reactive to recent changes in BG value and therefore more prone to responding incorrectly to noisy CGM data.

## No Smoothing

Use this option only if your CGM data is being properly smoothed by your collector app before being transmitted to **AAPS**.

## Suggestions to use smoothing

|                           | Exponential |  Average |     None    |
| ------------------------- | :---------: | :------: | :---------: |
| G5 and G6                 |             | If noisy | Recommended |
| G7                        | Recommended |          |             |
| Libre 1 or Juggluco       | Recommended |          |             |
| Libre 2 and 3 from xDrip+ |             |          | Recommended |
