# Compatible CGMs

Dieser Abschnitt gibt einen kurzen Überblick über alle mit **AAPS** kompatiblen Sensoren (**CGMs/FGMs**).

*Tipp*: Wenn Du Deine Glukosewerte in der xDrip+-App anzeigen kannst, kannst Du in **AAPS** xDip+ als **BZ**-Quelle auswählen.

* [Allgemeine CGM-Empfehlungen](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Datenglättung](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [xDrip+Einstellungen](../CompatibleCgms/xDrip.md)
* [Nightscout als BZ-Quelle](../CompatibleCgms/CgmNightscoutUpload.md): Auch wenn Nightscout als BZ-Quelle für die Insulinabgabe im Closed-Loop genutzt werden kann, **wird diese Methode nicht empfohlen**, da sie zwingend auf eine stabile (mobile) Datenverbindung oder eine WLAN-Verbindung angewiesen ist. Das bedeutet, dass Deine **CGM**-Daten nur dann von **AAPS** empfangen werden, wenn Du eine Online-Verbindung zu Deiner Nightscout-Website hast. Für ein zuverlässigeres Setup ist der einsatz eines CGM mit lokaler Übertragung vom Receiver an **AAPS** die bessere Option.

| CGM                                                   | Verfügbare [BZ-Quellen](../SettingUpAaps/ConfigBuilder.md#bg-source) |
| ----------------------------------------------------- | -------------------------------------------------------------------- |
| [Dexcom G7 und ONE+](../CompatibleCgms/DexcomG7.md)   | xDrip+, DiaKEM app or Juggluco                                       |
| [Dexcom G6 und ONE](../CompatibleCgms/DexcomG6.md)    | xDrip+ or BYODA (only G6)                                            |
| [Dexcom G5](../CompatibleCgms/DexcomG5.md)            | xDrip+                                                               |
| [Libre 3](../CompatibleCgms/Libre3.md)                | xDrip+ (no transmitter) or Juggluco                                  |
| [Libre 2](../CompatibleCgms/Libre2.md)                | xDrip+ (no transmitter) or Juggluco                                  |
| [Libre 1](../CompatibleCgms/Libre1.md)                | xDrip+, Glimp, Tomato oder Diabox. Need a transmitter                |
| [Eversense](../CompatibleCgms/Eversense.md)           | xDrip+ or ESEL/Eversense patched App                                 |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md) | xDrip+ oder MM640g + 600SeriesAndroidUploader-App                    |
| [PocTech](../CompatibleCgms/PocTech.md)               | PocTech                                                              |
| [Ottai](../CompatibleCgms/OttaiM8.md)                 | Ottai                                                                |
| [Syai Tag](../CompatibleCgms/SyaiTagX1.md)            | Syai Tag                                                             |
| Sibionics CGM                                         | Juggluco                                                             |
