# DanaR

*Estas instruções são para configurar o aplicativo e a sua bomba se você tiver um DanaR. Se você tem o DanaRS, lançado em 2017, veja [Bomba de insulina DanaRS](./DanaRS-Insulin-Pump.md).*

## Pump capabilities with AAPS

* Comunica-se com o **AAPS** pelo Bluetooth do próprio telefone, sem um dispositivo de comunicação extra.
* Mudanças de fuso horário e de horário de verão não precisam de nenhuma ação especial, pois a bomba não usa o seu próprio histórico.

## Setup

* Na bomba, vá para Main Menu > Setting > User Option
* Ative "8. Extended Bolus"

![Bomba DanaR](../images/danar1.png)

* Na bomba, vá para Main Menu > Setting > Discovery
* Nas configurações do telefone, vá para Bluetooth, procure dispositivos próximos, selecione o número de série do seu DanaR e digite a sua senha (a senha de pareamento é 0000). Se o DanaR não aparecer na busca, reinicie o telefone, retire a bateria do DanaR, coloque-a de volta e repita estes dois passos.

* No **AAPS**, abra o **menu** (☰) no canto superior esquerdo, vá para **Configuração** > **Bomba** e selecione o tipo de DanaR que você tem (**DanaR**, **DanaR Coreana** ou **DanaRv2**).
  
  ![Configuração > Bomba com os plugins DanaR](../images/v4/Configuration/configuration_pump_list_1.png)

* Abra a tela da bomba: toque em **Abrir plugin** no cartão do DanaR (ou vá para **Gerenciar** > **Bomba**).

* Toque em **Pareando**. Na tela de pareamento: 
  * Digite a senha da bomba em **Senha da bomba** (a senha padrão é 1234).
  * Em **Selecione o dispositivo pareado**, toque no número de série do seu DanaR. Se a lista estiver vazia, toque em **Abrir configurações de Bluetooth** e primeiro pareie a bomba com o seu telefone (veja o passo acima). Quando você voltar ao **AAPS**, a bomba aparece na lista. Se ela não aparecer, toque no ícone de atualizar.
  * Toque em **Pareando**. O **AAPS** conecta-se à bomba e verifica a senha.
* Para mudar as configurações do driver, toque em **Configurações** no cartão do DanaR em **Configuração** > **Bomba**: 
  * **Velocidade do bólus** (DanaR e DanaRv2): muda a velocidade padrão do bólus (12 s/U, 30 s/U ou 60 s/U).
  * **Usar bólus estendidos para >200%** (DanaR e DanaR Coreana): ative esta opção se você quiser que o **AAPS** permita uma taxa basal acima de 200%. Observe que isso significa que você não pode fazer loop com TBRs altas enquanto usa bólus estendidos para refeições.
* Defina o incremento da basal na bomba como 0,01 U/h
* Defina o incremento do bólus na bomba como 0,1 U. O **AAPS** lê o incremento do bólus da bomba e usa-o em todos os bólus.
* Habilitar bólus estendido na bomba

## Viagens entre fusos horários com a bomba Dana R

Para informações sobre viagens entre fusos horários, veja a seção [Viagens entre fusos horários com bombas](#timezone-traveling-danarv2-danars).

## Where to get help

O desenvolvimento do driver DanaR é feito pela comunidade de forma **voluntária**. Before requesting help, please:

1. **Read** the relevant section of this documentation to confirm how the feature is meant to work.
2. **Ask** on the *#AAPS* channel on [Discord](https://discord.gg/4fQUWHZ4Mw), or in one of the other [community channels](../GettingHelp/WhereCanIGetHelp.md).
3. **Report a bug** by searching the [existing issues](https://github.com/nightscout/AndroidAPS/issues); if yours is not listed, open a [new issue](https://github.com/nightscout/AndroidAPS/issues) and attach your [log files](../GettingHelp/AccessingLogFiles.md).

When asking for help, include your phone make and model, Android version, **AAPS** version, and a plain-English description of the problem (what changed, when it last worked).