# CGMs compatíveis

Esta seção dá uma visão geral rápida de todos os **CGMs/FGMs** compatíveis com o **AAPS**.

*Dica*: se você consegue mostrar os seus dados de glicose no app xDrip, você pode escolher o xDrip como fonte de **BG** no **AAPS**.

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

* [Recomendações gerais](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Suavização de dados](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [Configurações do xDrip](../CompatibleCgms/xDrip.md)
* [Nightscout como fonte de BG](../CompatibleCgms/CgmNightscoutUpload.md): é possível usar o Nightscout como fonte de BG para a administração de insulina em loop fechado, mas **este método não é recomendado**, porque ele depende de uma conexão estável de dados móveis ou Wi-Fi. Isso significa que o **AAPS** só vai receber os dados do seu **CGM** quando você tiver uma conexão online com o seu site do Nightscout. Para uma configuração mais confiável, é muito melhor usar um CGM com transmissão local (local broadcast) do receptor (veja a lista abaixo) para o **AAPS**.

| CGM                                                                                                          | [Fontes de BG](#Config-Builder-bg-source) disponíveis                                                                                    |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                                   | BYODA, [xDrip](../CompatibleCgms/xDrip.md) ou [Juggluco](../CompatibleCgms/Juggluco.md)                                                  |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                                 | [xDrip](../CompatibleCgms/xDrip.md) ou [Juggluco](../CompatibleCgms/Juggluco.md)                                                         |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                                | [xDrip](../CompatibleCgms/xDrip.md)                                                                                                      |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                                   | BYODA ou [xDrip](../CompatibleCgms/xDrip.md)                                                                                             |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                                  | [xDrip](../CompatibleCgms/xDrip.md)                                                                                                      |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                                    | [Juggluco](../CompatibleCgms/Juggluco.md) (com ou sem xDrip)                                                                             |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                                    | [xDrip](../CompatibleCgms/xDrip.md) (somente UE) ou [Juggluco](../CompatibleCgms/Juggluco.md) (com ou sem xDrip)                         |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                                       | [xDrip](../CompatibleCgms/xDrip.md) (o Diabox envia as leituras pela fonte xDrip), Glimp ou Tomato (MiaoMiao). Precisa de um transmissor |
| [Eversense](../CompatibleCgms/Eversense.md)                                                                  | [xDrip](../CompatibleCgms/xDrip.md), app ESEL/Eversense modificado (patched) ou Leitor de notificações                                   |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                                        | [xDrip](../CompatibleCgms/xDrip.md) ou MM640g + app 600SeriesAndroidUploader                                                             |
| [PocTech](../CompatibleCgms/PocTech.md)                                                                      | App PocTech                                                                                                                              |
| Glunovo                                                                                                      | App Glunovo                                                                                                                              |
| Intelligo                                                                                                    | App Intelligo                                                                                                                            |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                                | Syai/Ottai (com o app Ottai ou Syai Tag)                                                                                                 |
| CGM Sibionics                                                                                                | [Juggluco](../CompatibleCgms/Juggluco.md) ou App SI (com o App SI modificado ou o app Sibionics)                                         |
| Sinocare                                                                                                     | App Sino (com o App Sino modificado)                                                                                                     |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                           | App CGM MicroTech                                                                                                                        |
| Instara                                                                                                      | Instara (com o app Instara)                                                                                                              |
| [Caresens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                                  | App companheiro do xDrip (companion app) ou [Juggluco](../CompatibleCgms/Juggluco.md)                                                    |
| Qualquer CGM cujo app oficial mostra o valor da glicose em uma notificação (Dexcom, Medtronic, Eversense, …) | Leitor de notificações                                                                                                                   |

(GettingStarted-TrustedBGSource)=

## Fontes de dados de BG confiáveis

Os **CGM**s aprovados por órgãos reguladores para sistemas comerciais de loop fechado híbrido são considerados fontes de dados de **BG** confiáveis.

Para que o **AAPS** possa identificá-los corretamente, o app que envia as leituras de **BG** precisa fornecer informações sobre o sensor.

Fontes de dados confiáveis permitem a administração de **SMB** o tempo todo.

| Sensor           |                                                   App do CGM                                                   |
| ---------------- |:--------------------------------------------------------------------------------------------------------------:|
| Dexcom G6        |                                       BYODA, xDrip (**Direct, Native**)                                        |
| Dexcom G7        |                BYODA, xDrip (**Direct, Native**), </br>Juggluco (**xDrip broadcast** sem xDrip)                |
| Dexcom ONE+      |                   xDrip (**Direct, Native**), </br>Juggluco (**xDrip broadcast** sem xDrip)                    |
| Dexcom ONE/Stelo |                                           xDrip (**Direct, Native**)                                           |
| Libre 2/2+ (UE)  | xDrip (OOP2 **no calibration**), </br>Juggluco (**xDrip broadcast** sem xDrip, ou **Patched Libre** com xDrip) |
| Libre 2/2+/3/3+  |                    Juggluco (**xDrip broadcast** sem xDrip, ou **Patched Libre** com xDrip)                    |
| Syai             |                                                    App Syai                                                    |

**Observação: os apps companheiros do xDrip (companion apps) e os modos seguidor (Follower, incluindo 640G/Eversense) não são fontes de dados confiáveis.**
