# MGC compatibles

Cette section donne un bref aperçu de tous les **MGC/MGF** compatibles avec **AAPS**.

*Astuce* : si vous pouvez afficher vos données de glycémie dans l'application xDrip, vous pouvez choisir xDrip comme source de **glycémie** dans **AAPS**.

<!-- List of hidden pages to avoid overcrowding the table of contents -->

```{toctree}
:hidden:

../CompatibleCgms/GeneralCGMRecommendation.md
../CompatibleCgms/SmoothingBloodGlucoseData.md
../CompatibleCgms/xDrip.md
../CompatibleCgms/CgmNightscoutUpload.md
../CompatibleCgms/DexcomG6.md
../CompatibleCgms/DexcomG7.md
../CompatibleCgms/Juggluco.md
../CompatibleCgms/Libre1.md
../CompatibleCgms/Libre2.md
../CompatibleCgms/Libre2MinimalL00per.md
../CompatibleCgms/Libre3.md
../CompatibleCgms/Eversense.md
../CompatibleCgms/MM640g.md
../CompatibleCgms/PocTech.md
../CompatibleCgms/OttaiM8.md
../CompatibleCgms/SyaiTagX1.md
../CompatibleCgms/Caresens.md
```

* [Recommandations générales](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Lissage des données](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [Paramètres xDrip](../CompatibleCgms/xDrip.md)
* [Nightscout comme Source GLY](../CompatibleCgms/CgmNightscoutUpload.md) : il est possible d'utiliser Nightscout comme source de glycémie pour l'administration d'insuline en boucle fermée, mais **cette méthode n'est pas recommandée**, car elle dépend d'une connexion stable aux données mobiles ou au Wi-Fi. Cela signifie que les données de votre **MGC** ne seront reçues par **AAPS** que si vous avez une connexion en ligne à votre site Nightscout. Pour une configuration plus fiable, il vaut beaucoup mieux utiliser un MGC dont le récepteur diffuse les données localement vers **AAPS** (voir la liste ci-dessous).

| MGC                                                                                                                | [Sources GLY](#Config-Builder-bg-source) disponibles                                                                                          |
| ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                                         | BYODA, [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) or [Notification Reader](#DexcomG7-notification-reader) |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                                       | [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) or [Notification Reader](#DexcomG7-notification-reader)        |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                                      | [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG7-notification-reader)                                                   |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                                         | BYODA, [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG6-notification-reader)                                            |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                                        | [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG6-notification-reader)                                                   |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                                          | [Juggluco](../CompatibleCgms/Juggluco.md) (avec ou sans xDrip)                                                                                |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                                          | [xDrip](../CompatibleCgms/xDrip.md) (UE uniquement) ou [Juggluco](../CompatibleCgms/Juggluco.md) (avec ou sans xDrip)                         |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                                             | [xDrip](../CompatibleCgms/xDrip.md) (Diabox envoie ses valeurs via la source xDrip), Glimp ou Tomato (MiaoMiao). Nécessite un transmetteur    |
| [Eversense](../CompatibleCgms/Eversense.md)                                                                        | [xDrip](../CompatibleCgms/xDrip.md), application ESEL/Eversense patchée ou Lecteur de notifications                                           |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                                              | [xDrip](../CompatibleCgms/xDrip.md) ou application MM640g + 600SeriesAndroidUploader                                                          |
| [PocTech](../CompatibleCgms/PocTech.md)                                                                            | Application PocTech                                                                                                                           |
| Glunovo                                                                                                            | Application Glunovo                                                                                                                           |
| Intelligo                                                                                                          | Application Intelligo                                                                                                                         |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                                      | Syai/Ottai (avec l'application Ottai ou Syai Tag)                                                                                             |
| MGC Sibionics                                                                                                      | [Juggluco](../CompatibleCgms/Juggluco.md) ou Application SI (avec l'application SI patchée ou l'application Sibionics)                        |
| Sinocare                                                                                                           | Application Sino (avec l'application Sino patchée)                                                                                            |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                                 | Application MGC MicroTech                                                                                                                     |
| Instara                                                                                                            | Instara (avec l'application Instara)                                                                                                          |
| [Caresens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                                        | Application xDrip Companion ou [Juggluco](../CompatibleCgms/Juggluco.md)                                                                      |
| Tout MGC dont l'application officielle affiche la glycémie dans une notification (Dexcom, Medtronic, Eversense, …) | Lecteur de notifications                                                                                                                      |

(GettingStarted-TrustedBGSource)=

## Sources de données de glycémie fiables

Les **MGC** approuvés par les autorités pour les systèmes commerciaux de boucle fermée hybride sont considérés comme des sources de données de **glycémie** fiables.

Pour qu'**AAPS** les identifie correctement, l'application qui envoie les valeurs de **glycémie** doit pouvoir fournir les informations du capteur.

Les sources de données fiables permettent l'administration de **SMB** à tout moment.

**AAPS** checks the sensor named in the latest **BG** reading it received, whichever **BG** source delivered it. After you change your **BG** source, the **SMB** "always" settings appear only once the first reading from the new source has arrived.

| Capteur         |                                                                             Application MGC                                                                              |
| --------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6       |                             BYODA, xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG6-notification-reader))                              |
| Dexcom G7       | BYODA, xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** without xDrip), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader)) |
| Dexcom ONE+     |    xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** without xDrip), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader))     |
| Dexcom ONE      |                                 xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG6-notification-reader))                                 |
| Dexcom Stelo    |                                 xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader))                                 |
| Libre 2/2+ (UE) |                                  xDrip (OOP2), <br/>Juggluco (**xDrip broadcast** without xDrip, or **Patched Libre** with xDrip)                                  |
| Libre 2/2+/3/3+ |                                                Juggluco (**xDrip broadcast** sans xDrip, ou **Patched Libre** avec xDrip)                                                |
| Syai, Ottai     |                      Syai or Ottai app (**Syai/Ottai** source or **Notification Reader**), <br/>Juggluco (**xDrip broadcast** without xDrip)                       |

**Note: xDrip Companion apps, Medtronic, Eversense and all other sensors are not trusted data sources.**

```{admonition} Online BG sources are not recommended for closed looping
:class: warning
Some sources that need an internet connection can also be trusted:
- xDrip **Dexcom Share follower** (any Dexcom sensor)
- the **Nightscout** BG source (**AAPSClient**, or **AAPS** following your Nightscout site), when the uploader names one of the sensors above

These sources are **not recommended** for a closed loop. When your phone or the CGM uploader loses its connection, **AAPS** receives no **BG** readings and cannot loop. Readings also arrive late, after the delay of the cloud service. Use a CGM app that sends its readings to **AAPS** directly on the phone (as listed in the table above) whenever possible.

Other follower modes (xDrip Nightscout or Web follower, CareLink follower, Juggluco Nightscout) are never trusted.
```
