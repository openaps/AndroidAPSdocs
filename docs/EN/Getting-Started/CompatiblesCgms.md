# CGMS/FGMS Configuration

This is just a short overview of all compatible CGMs/FGMs with **AAPS**.
Just a short hint: if you can display your glucose data in xDrip+ app or Nightscout website, you can choose xDrip+ (or Nightscout with web connection) as BG source in **AAPS**.

* [General recommendations](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Data Smoothing](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [xDrip+Settings](../CompatibleCgms/xDrip.md)
* [Nightscout as BG Source](../CompatibleCgms/CgmNightscoutUpload.md): not recommended as closed loop relies on mobile data / Wi-Fi coverage in this case. CGM data will only be received if there is an online connection to your NS site. Better use local broadcast from one of the other CGM data sources.

| CGM                                                   | Available [BG Sources](../SettingUpAaps/ConfigBuilder.md#bg-source)          |
|-------------------------------------------------------|------------------------------------------------------------------------------|
| [Dexcom G7 and ONE+](../CompatibleCgms/DexcomG7.md)   | xDrip+ or DiaKEM app (select BYODA)                                          |
| [Dexcom G6 and ONE](../CompatibleCgms/DexcomG6.md)    | xDrip+ or BYODA                                                              |
| [Dexcom G5](../CompatibleCgms/DexcomG5.md)            | xDrip+                                                                       |
| [Libre 3](../CompatibleCgms/Libre3.md)                | xDrip+ (no transmitter needed)                                               |
| [Libre 2](../CompatibleCgms/Libre2.md)                | xDrip+ (no transmitter needed)                                               |
| [Libre 1](../CompatibleCgms/Libre1.md)                | xDrip+, Glimp, Tomato or Diabox. Need a transmitter like Bluecon or MiaoMiao |
| [Eversense](../CompatibleCgms/Eversense.md)           | xDrip+ or ESEL/Eversense patched App + MM640g                                |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md) | xDrip+ or MM640g + 600SeriesAndroidUploader App                              |
| [PocTech](../CompatibleCgms/PocTech.md)               | PocTech                                                                      |