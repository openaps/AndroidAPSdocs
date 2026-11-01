(generaltroubleshooting)=

# Resolução de Problemas

**Comece aqui quando algo não funciona.** As informações para resolver problemas estão em muitas páginas da documentação. Esta página junta-as: é uma única lista de links, ordenada por tema, para o ajudar a resolver os problemas mais comuns.

Se não encontrar a sua resposta abaixo, consulte também:

* as [FAQ](../UsefulLinks/FAQ.md), com respostas a perguntas frequentes, e
* o [guia de ajuste do perfil](ProfileTuning.md), se o seu loop funciona mas o controlo da glicose precisa de melhorar.

```{admonition} Still stuck?
:class: tip
Se nenhum dos links resolver o seu problema, consulte [Onde posso obter ajuda?](WhereCanIGetHelp.md) para perguntar à comunidade (Facebook, Discord), ou envie os seus [ficheiros de registo](AccessingLogFiles.md) aos programadores.
```

---

(generaltroubleshooting-aaps-app)=

## App AAPS

### Compilar e atualizar

* Se a compilação falhar, consulte [Se a compilação falhar](#building-aaps-troubleshooting): aí encontra a secção de resolução de problemas de cada método de compilação:
  * [AAPS Builder](#aaps-builder-troubleshooting)
  * [Compilação no navegador](#aaps-ci-troubleshooting)
  * [Android Studio](TroubleshootingAndroidStudio.md)
* Keystore perdida ou nova keystore: [Reinstalar o AAPS](#reinstall-aaps)
* Atualizar o **AAPS**: [com o AAPS Builder](#aaps-builder-updates), [com uma compilação no navegador (fork)](#update-browser-build-troubleshooting), [com o Android Studio](#update-computer-build-troubleshooting)

### Instalação

* [Aviso do Google Play Protect](#transferring-installing-play-protect-warning): a app é indicada como não segura.
* Instalação **bloqueada** com uma mensagem sobre um programador não verificado: consulte [Verificação de programadores Android](#android-developer-verification) para os métodos de instalação gratuitos.

### Definições

* [Perfil: «Basal rate is not compatible with the current pump» (a taxa basal não é compatível com a bomba atual)](#your-aaps-profile-basal-not-compatible)
* [Bomba: «Os dados vêm de uma bomba diferente»](#config-builder-wrong-pump-data)
* [Cliente Nightscout](TroubleshootingNsClient.md)

### Utilização

* [Valores de hidratos de carbono errados (absorção lenta dos hidratos de carbono)](#CobCalculation-detection-of-wrong-cob-values)
* [Automatização](#automations-troubleshooting)
* [Loop totalmente fechado](#full-closed-loop-troubleshooting)

---

(generaltroubleshooting-bluetooth-related-issues)=


## Problemas relacionados com o Bluetooth

Para problemas conhecidos com ligações Bluetooth, perdas de ligação a bombas/Pods, ou problemas de ativação e de ligação, veja [Problemas relacionados com o Bluetooth](../GettingHelp/BluetoothTroubleshooting.md)

---

(generaltroubleshooting-android-related-issues)=

## Problemas relacionados com o Android

### Otimização da bateria

O **AAPS** pode ajudar a encontrar as definições certas para o seu telefone: abra o **menu** (☰) > **Sobre** e toque em **Don't kill my app?**. Isto abre as instruções para a marca do seu telefone no site [Don't kill my app](https://dontkillmyapp.com/). O [assistente de configuração](#setup-wizard-bluetooth-battery-optimisation) também pede para desligar a otimização da bateria para o **AAPS** e para o Bluetooth.

O Android tem definições para poupar bateria que estão ativas por predefinição. Estas definições suspendem ou pausam automaticamente as aplicações que o sistema não precisa para funcionar. Assim poupam a energia da bateria usada por aplicações que não precisam de estar sempre a funcionar.

Quando esta otimização está ativa, é muito provável que cause problemas ao **AAPS** e a outras aplicações de apoio, como o **xDrip**.

É importante desativar a otimização da bateria para que o **AAPS** e as outras aplicações de apoio fiquem sempre ativos.

Conforme a marca e o modelo do seu telefone, pode haver mais do que um local e mais do que uma definição a desativar.

***NOTA:** Siga os passos abaixo para desativar a otimização da bateria para o serviço Bluetooth, se o seu telefone tiver esta opção. Pode usar os mesmos passos para o **AAPS** e outras aplicações, mas as capturas de ecrã mostram apenas como o fazer para o serviço Bluetooth.*

#### Telefones Pixel (Android original)

* Vá às definições do Android e selecione «Apps» (Aplicações).

  ![Definições do Android¦Aplicações](../images/troubleshooting/pixel/01_androidsettings.png)

* Selecione «See all apps» (Ver todas as aplicações)

  ![Ver todas as aplicações](../images/troubleshooting/pixel/02_apps.png)

* No menu à direita, selecione as aplicações «Show system» (Mostrar sistema).

  ![Mostrar as aplicações do sistema](../images/troubleshooting/pixel/03_allapps.png)

* Agora procure e selecione a aplicação «Bluetooth».

  ![Aplicação Bluetooth](../images/troubleshooting/pixel/03_bluetooth.png)

* Toque em «App battery usage» (Utilização da bateria da app) e selecione «Unrestricted» (Sem restrições) (nalgumas versões mais antigas do Android chama-se «Not optimized» (Não otimizada)).

  ![Otimização da bateria do Bluetooth](../images/troubleshooting/pixel/04_btunrestricted.png)


#### Telefones Samsung

* Vá às definições do Android e selecione «Apps» (Aplicações)

* No ícone que, em princípio, muda a ordenação (1), selecione «Show system apps» (Mostrar aplicações do sistema) (2).

  ![Filtro de aplicações](../images/troubleshooting/samsung/Samsung01_Apps.png)

  ![Mostrar as aplicações do sistema](../images/troubleshooting/samsung/Samsung02_ShowSystemApps.png)

* Agora procure a aplicação Bluetooth e selecione-a para ver as suas definições.

  ![Aplicação Bluetooth](../images/troubleshooting/samsung/Samsung03_BtApp.png)

* Selecione «battery» (bateria).

  ![Bateria](../images/troubleshooting/samsung/Samsung04_Battery.png)

* Defina-a como «Unrestricted» (Sem restrições) (nalgumas versões mais antigas do Android chama-se «Not optimized» (Não otimizada)).

  ![Sem restrições](../images/troubleshooting/samsung/Samsung05_NotOptimized.png)

#### Telefones Huawei

Consulte este guia para a [otimização do Bluetooth e da bateria em telefones Huawei](../CompatiblePhones/Huawei.md)

---

(generaltroubleshooting-cgm)=

## Monitor contínuo de glicose (CGM)

Links úteis sobre problemas conhecidos dos CGM e passos para os resolver.

* [Geral](#general-cgm-troubleshooting)
* [Dexcom G6](#DexcomG6-troubleshooting-g6)
* [Libre 2 com Minimal Looper](#minimallooper-troubleshooting)
* [Libre 3](#libre3-experiences-and-troubleshooting)
* [xDrip – sem dados do CGM](#xdrip-identify-receiver)
* [xDrip – resolução de problemas com o Dexcom](#xdrip-troubleshooting-dexcom-g5-g6-and-xdrip)

---

(generaltroubleshooting-pumps)=

## Bombas

Links úteis sobre problemas conhecidos das bombas e passos para os resolver

* [Accu-Chek Combo](#combov2-tips-for-basic-usage)
* [Accu-Chek Insight](#Accu-Chek-Insight-Pump-insight-specific-errors)
* [CareLevo](#carelevo-alarms-and-notifications)
* [DanaRS](#DanaRS-Insulin-Pump-dana-rs-specific-errors)
* [Diaconn G8](#diaconn-g8-bluetooth-troubleshooting)
* [EOPatch2](#eopatch2-alarms-and-warnings)
* [Medtronic + RileyLink](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)
* [Medtrum Nano](#medtrum-nano-troubleshooting)
* [Omnipod DASH](#omnipod-dash-troubleshooting)
* [Omnipod Eros](#OmnipodEros-troubleshooting)

---

(generaltroubleshooting-phones)=

## Telefones

Links úteis sobre problemas conhecidos dos telefones e passos para os resolver

* [Lista de telefones e configurações de dispositivos testados](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true)
* [Jelly](../CompatiblePhones/Jelly.md)
* [Otimização do Bluetooth e da bateria em telefones Huawei](../CompatiblePhones/Huawei.md)

---

(generaltroubleshooting-remote-control)=

## Controlo remoto

* [AAPSClient e controlo remoto (emparelhamento, comandos não recebidos)](#client-master-control-troubleshooting)
* [Problemas com o «Token de acesso do Nightscout»](#remotecontrol-nightscout-access-token)
* [Comandos SMS](#SMSCommands-troubleshooting)
* [Android Auto](#android-auto-troubleshooting)

---

(generaltroubleshooting-smartwatches)=

## Smartwatches

Links úteis sobre problemas conhecidos dos smartwatches e passos para os resolver

* [Resolução de problemas da app Wear](#Watchfaces-troubleshooting-the-wear-app)
* [O relógio e o telefone não comunicam](#wear-os-watch-phone-communication)
* [Wear OS 5](#wear-os-5-troubleshooting)
* [Compilar a app Wear](#building-aaps-wear-os-troubleshooting)
