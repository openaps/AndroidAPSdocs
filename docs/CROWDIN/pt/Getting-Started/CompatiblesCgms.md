# CGM compatíveis

Esta secção dá uma breve visão geral de todos os **CGM/FGM** compatíveis com o **AAPS**.

*Dica*: Se consegue ver os seus dados de glicose na aplicação xDrip, pode escolher o xDrip como fonte da **glicose** no **AAPS**.

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
* [Suavização dos dados](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [Definições do xDrip](../CompatibleCgms/xDrip.md)
* [Nightscout como Fonte da Glicose](../CompatibleCgms/CgmNightscoutUpload.md): É possível usar o Nightscout como fonte da glicose para a administração de insulina em loop fechado, mas **este método não é recomendado**, porque depende de uma ligação estável de dados móveis ou Wi-Fi. Isto significa que o **AAPS** só recebe os dados do seu **CGM** quando tem ligação à internet com o seu site Nightscout. Para uma configuração mais fiável, é muito melhor usar um CGM com envio local (broadcast) a partir do recetor (como na lista abaixo) para o **AAPS**.

| CGM                                                                                                              | [Fontes da Glicose](#Config-Builder-bg-source) disponíveis                                                                                       |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                                       | BYODA, [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) ou [Leitor de notificações](#DexcomG7-notification-reader) |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                                     | [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) ou [Leitor de notificações](#DexcomG7-notification-reader)        |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                                    | [xDrip](../CompatibleCgms/xDrip.md) ou [Leitor de notificações](#DexcomG7-notification-reader)                                                   |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                                       | BYODA, [xDrip](../CompatibleCgms/xDrip.md) ou [Leitor de notificações](#DexcomG6-notification-reader)                                            |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                                      | [xDrip](../CompatibleCgms/xDrip.md) ou [Leitor de notificações](#DexcomG6-notification-reader)                                                   |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                                        | [Juggluco](../CompatibleCgms/Juggluco.md) (com ou sem xDrip)                                                                                     |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                                        | [xDrip](../CompatibleCgms/xDrip.md) (só na UE) ou [Juggluco](../CompatibleCgms/Juggluco.md) (com ou sem xDrip)                                   |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                                           | [xDrip](../CompatibleCgms/xDrip.md) (o Diabox envia as leituras através da fonte xDrip), Glimp ou Tomato (MiaoMiao). Precisa de transmissor      |
| [Eversense](../CompatibleCgms/Eversense.md)                                                                      | [xDrip](../CompatibleCgms/xDrip.md), aplicação ESEL/Eversense modificada ou Leitor de notificações                                               |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                                            | [xDrip](../CompatibleCgms/xDrip.md) ou MM640g + aplicação 600SeriesAndroidUploader                                                               |
| [PocTech](../CompatibleCgms/PocTech.md)                                                                          | Aplicação PocTech                                                                                                                                |
| Glunovo                                                                                                          | Aplicação Glunovo                                                                                                                                |
| Intelligo                                                                                                        | Aplicação Intelligo                                                                                                                              |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                                    | Syai/Ottai (com a aplicação Ottai ou Syai Tag)                                                                                                   |
| Sibionics CGM                                                                                                    | [Juggluco](../CompatibleCgms/Juggluco.md) ou SI App (com a SI App modificada ou a aplicação Sibionics)                                           |
| Sinocare                                                                                                         | Sino App (com a Sino App modificada)                                                                                                             |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                               | Aplicação MicroTech CGM                                                                                                                          |
| Instara                                                                                                          | Instara (com a aplicação Instara)                                                                                                                |
| [Caresens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                                      | Aplicação xDrip Companion ou [Juggluco](../CompatibleCgms/Juggluco.md)                                                                           |
| Qualquer CGM cuja aplicação oficial mostre o valor da glicose numa notificação (Dexcom, Medtronic, Eversense, …) | Leitor de notificações                                                                                                                           |

(GettingStarted-TrustedBGSource)=

## Fontes de dados de glicose fiáveis

Os **CGM** aprovados pelas autoridades reguladoras para sistemas comerciais de loop fechado híbrido são considerados fontes de dados de **glicose** fiáveis.

Para que o **AAPS** os identifique corretamente, a aplicação que envia as leituras de **glicose** tem de conseguir enviar a informação do sensor.

As fontes de dados fiáveis permitem a administração de **SMB** em qualquer momento.

O **AAPS** verifica o sensor indicado na última leitura de **glicose** que recebeu, seja qual for a fonte de **glicose** que a enviou. Depois de mudar a sua fonte de **glicose**, as definições «sempre» do **SMB** só aparecem quando chegar a primeira leitura da nova fonte.

| Sensor          |                                                                            Aplicação do CGM                                                                             |
| --------------- |:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6       |                           BYODA, xDrip (**Direct, Native**), <br/>app Dexcom ([Leitor de notificações](#DexcomG6-notification-reader))                            |
| Dexcom G7       | BYODA, xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** sem xDrip), <br/>app Dexcom ([Leitor de notificações](#DexcomG7-notification-reader)) |
| Dexcom ONE+     |    xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** sem xDrip), <br/>app Dexcom ([Leitor de notificações](#DexcomG7-notification-reader))     |
| Dexcom ONE      |                               xDrip (**Direct, Native**), <br/>app Dexcom ([Leitor de notificações](#DexcomG6-notification-reader))                               |
| Dexcom Stelo    |                               xDrip (**Direct, Native**), <br/>app Dexcom ([Leitor de notificações](#DexcomG7-notification-reader))                               |
| Libre 2/2+ (UE) |                                    xDrip (OOP2), <br/>Juggluco (**xDrip broadcast** sem xDrip, ou **Patched Libre** com xDrip)                                    |
| Libre 2/2+/3/3+ |                                                Juggluco (**xDrip broadcast** sem xDrip, ou **Patched Libre** com xDrip)                                                 |
| Syai, Ottai     |                       App Syai ou Ottai (fonte **Syai/Ottai** ou **Leitor de notificações**), <br/>Juggluco (**xDrip broadcast** sem xDrip)                       |

**Nota: as apps xDrip Companion, Medtronic, Eversense e todos os outros sensores não são fontes de dados fiáveis.**

```{admonition} Online BG sources are not recommended for closed looping
:class: warning
Algumas fontes que precisam de ligação à Internet também podem ser fiáveis:
- xDrip **Dexcom Share follower** (qualquer sensor Dexcom)
- a fonte da glicose **Nightscout** (**AAPSClient**, ou o **AAPS** a seguir o seu site Nightscout), quando o uploader indica um dos sensores acima

Estas fontes **não são recomendadas** para um loop fechado. Quando o seu telefone ou o uploader do CGM perde a ligação, o **AAPS** não recebe leituras de **glicose** e não pode fazer o loop. As leituras também chegam atrasadas, com o atraso do serviço na nuvem. Sempre que possível, use uma app de CGM que envie as leituras diretamente para o **AAPS** no telefone (como na tabela acima).

Os outros modos de seguidor (xDrip Nightscout ou Web follower, CareLink follower, Juggluco Nightscout) nunca são fiáveis.
```
