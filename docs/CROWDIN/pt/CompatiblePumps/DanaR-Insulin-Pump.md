# DanaR

*Estas instruções servem para configurar a app e a bomba, se tiver uma DanaR. Se tiver a DanaRS lançada em 2017, veja antes [Bomba de insulina DanaRS](./DanaRS-Insulin-Pump.md).*

## Funções da bomba com o AAPS

* Comunica com o **AAPS** pelo Bluetooth do próprio telefone, sem um dispositivo de comunicação adicional.
* As mudanças de fuso horário e da hora de verão não precisam de nenhuma ação especial, porque a bomba não usa o seu próprio histórico.

## Instalação

* Na bomba, vá a Main Menu > Setting > User Option
* Ative "8. Extended Bolus"

![Bomba DanaR](../images/danar1.png)

* Vá a Main Menu > Setting > Discovery
* Nas definições do telefone, vá a Bluetooth, procure dispositivos próximos, selecione o número de série da sua DanaR e introduza a senha (a senha de emparelhamento é 0000). Se a DanaR não aparecer na pesquisa, reinicie o telefone, tire a pilha da DanaR, volte a colocá-la e repita estes dois passos.

* No **AAPS**, abra o **menu** (☰) no canto superior esquerdo, vá a **Configuração** > **Bomba** e selecione o tipo de DanaR que tem (**DanaR**, **DanaR Coreana** ou **DanaRv2**).
  
  ![Configuração > Bomba com os plugins DanaR](../images/v4/Configuration/configuration_pump_list_1.png)

* Abra o ecrã da bomba: toque em **Abrir plugin** no cartão DanaR (ou vá a **Gerir** > **Bomba**).

* Toque em **Emparelhamento**. No ecrã de emparelhamento: 
  * Introduza a senha da bomba em **Senha da bomba** (a senha predefinida é 1234).
  * Em **Selecionar dispositivo emparelhado**, toque no número de série da sua DanaR. Se a lista estiver vazia, toque em **Abrir definições de Bluetooth** e emparelhe primeiro a bomba com o telefone (veja o passo acima). Quando voltar ao **AAPS**, a bomba aparece na lista. Se não aparecer, toque no ícone de atualizar.
  * Toque em **Emparelhamento**. O **AAPS** liga-se à bomba e verifica a senha.
* Para alterar as definições do controlador, toque em **Definições** no cartão DanaR em **Configuração** > **Bomba**: 
  * **Velocidade do bólus** (DanaR e DanaRv2): altera a velocidade predefinida do bólus (12 s/U, 30 s/U ou 60 s/U).
  * **Usar bólus prolongado para >200%** (DanaR e DanaR Coreana): ative esta opção se quiser que o **AAPS** permita uma taxa basal acima de 200%. Tenha em conta que isto significa que não pode fazer loop com basais temporárias altas enquanto usa bólus prolongados para a comida.
* Defina o passo da basal na bomba para 0,01 U/h
* Defina o passo do bólus na bomba para 0,1 U. O **AAPS** lê o passo do bólus da bomba e usa-o em todos os bólus.
* Ativar bólus prolongado na bomba

## Viajar entre fusos horários com a bomba Dana R

Para informações sobre viagens entre fusos horários, veja a secção [Viajar entre fusos horários com bombas](#timezone-traveling-danarv2-danars).

## Onde obter ajuda

O controlador da DanaR é desenvolvido pela comunidade em regime de **voluntariado**. Antes de pedir ajuda:

1. **Leia** a secção relevante desta documentação para confirmar como a funcionalidade deve funcionar.
2. **Pergunte** no canal *#AAPS* do [Discord](https://discord.gg/4fQUWHZ4Mw) ou num dos outros [canais da comunidade](../GettingHelp/WhereCanIGetHelp.md).
3. **Comunique um erro**: procure primeiro nos [problemas existentes](https://github.com/nightscout/AndroidAPS/issues); se o seu não estiver na lista, abra um [novo problema](https://github.com/nightscout/AndroidAPS/issues) e anexe os seus [ficheiros de registo](../GettingHelp/AccessingLogFiles.md).

Ao pedir ajuda, indique a marca e o modelo do telefone, a versão do Android, a versão do **AAPS** e uma descrição clara do problema (o que mudou, quando funcionou pela última vez).