(generaltroubleshooting)=

# Resolução de problemas

**Comece aqui quando algo não estiver funcionando.** As informações de resolução de problemas estão em muitas páginas da documentação. Esta página reúne tudo: é uma única coleção de links, organizada por tema, para ajudar você a resolver os problemas mais comuns.

Se você não encontrar sua resposta abaixo, veja também:

* o [FAQ](../UsefulLinks/FAQ.md) com respostas para perguntas frequentes, e
* o [guia de ajuste do perfil](ProfileTuning.md), se o seu loop funciona mas o controle da sua glicose precisa melhorar.

```{admonition} Still stuck?
:class: tip
Se nenhum dos links resolver o seu problema, veja [Onde posso obter ajuda?](WhereCanIGetHelp.md) para perguntar à comunidade (Facebook, Discord), ou envie seus [arquivos de log](AccessingLogFiles.md) para os desenvolvedores.
```

---

(generaltroubleshooting-aaps-app)=

## App AAPS

### Compilação e atualização

* Se a compilação falhar, veja [Se a compilação falhar](#building-aaps-troubleshooting): lá está a seção de resolução de problemas para cada método de compilação:
  * [AAPS Builder](#aaps-builder-troubleshooting)
  * [Compilação no navegador](#aaps-ci-troubleshooting)
  * [Android Studio](TroubleshootingAndroidStudio.md)
* Keystore perdida ou nova keystore: [Reinstalar o AAPS](#reinstall-aaps)
* Atualizar o **AAPS**: [com o AAPS Builder](#aaps-builder-updates), [com uma compilação no navegador (fork)](#update-browser-build-troubleshooting), [com o Android Studio](#update-computer-build-troubleshooting)

### Instalação

* [Aviso do Google Play Protect](#transferring-installing-play-protect-warning): o app é indicado como não seguro.
* Instalação **bloqueada** com uma mensagem sobre um desenvolvedor não verificado: veja [Verificação de desenvolvedor do Android](#android-developer-verification) para os métodos gratuitos de instalação.

### Configurações

* [Perfil: "A taxa basal não é compatível com a bomba atual"](#your-aaps-profile-basal-not-compatible)
* [Bomba: "Os dados estão vindo de uma bomba diferente"](#config-builder-wrong-pump-data)
* [Nightscout Client](TroubleshootingNsClient.md)

### Uso

* [Valores de carboidratos errados (absorção lenta de carboidratos)](#CobCalculation-detection-of-wrong-cob-values)
* [Automações](#automations-troubleshooting)
* [Loop fechado completo](#full-closed-loop-troubleshooting)

---

(generaltroubleshooting-bluetooth-related-issues)=


## Problemas relacionados ao Bluetooth

Para problemas conhecidos com conexões Bluetooth, quedas de conexão de bombas/pods, ou problemas de ativação e de conexão, veja [Problemas relacionados ao Bluetooth](../GettingHelp/BluetoothTroubleshooting.md)

---

(generaltroubleshooting-android-related-issues)=

## Problemas relacionados ao Android

### Otimização de bateria

O **AAPS** pode ajudar você a encontrar as configurações certas para o seu telefone: abra o **menu** (☰) > **Sobre** e toque em **Não encerre meu aplicativo?**. Isso abre as instruções para a marca do seu telefone no site [Don't kill my app](https://dontkillmyapp.com/). O [assistente de configuração](#setup-wizard-bluetooth-battery-optimisation) também pede para você desativar a otimização de bateria para o **AAPS** e o Bluetooth.

O Android tem configurações de economia de bateria que vêm ativadas por padrão. Essas configurações suspendem/pausam automaticamente os apps que o sistema não precisa para funcionar, para economizar a bateria usada por apps que nem sempre precisam estar em execução.

Quando ela está ativada, é muito provável que cause problemas para o **AAPS** e outros apps de apoio, como o **xDrip**.

É importante desativar a otimização de bateria para que o **AAPS** e outros apps de apoio fiquem sempre ativos.

Dependendo da marca e do modelo do seu telefone, pode haver mais de um lugar e mais de uma configuração onde isso precisa ser desativado.

***NOTA:** Siga os passos abaixo para desativar a otimização de bateria do serviço Bluetooth, se o seu telefone tiver essa opção. Os mesmos passos servem para o **AAPS** e outros apps, mas as capturas de tela mostram apenas como fazer isso para o serviço Bluetooth.*

#### Telefones Pixel (Android padrão)

* Vá para as configurações do Android e selecione "Apps" (Aplicativos).

  ![Configurações do Android¦Apps](../images/troubleshooting/pixel/01_androidsettings.png)

* Selecione "See all apps" (Ver todos os apps)

  ![See all apps (Ver todos os apps)](../images/troubleshooting/pixel/02_apps.png)

* No menu à direita, selecione os apps "Show system" (Mostrar sistema).

  ![Mostrar apps do sistema](../images/troubleshooting/pixel/03_allapps.png)

* Agora procure e selecione o app "Bluetooth".

  ![App Bluetooth](../images/troubleshooting/pixel/03_bluetooth.png)

* Toque em "App battery usage" (Uso da bateria pelo app) e selecione "Unrestricted" (Sem restrições) (chamado "Not optimized" (Não otimizado) em algumas versões mais antigas do Android).

  ![Otimização de bateria do BT](../images/troubleshooting/pixel/04_btunrestricted.png)


#### Telefones Samsung

* Vá para as configurações do Android e selecione "Apps" (Aplicativos)

* No ícone que supostamente muda a ordenação (1), selecione "Show system apps" (Mostrar apps do sistema) (2).

  ![Filtro de apps](../images/troubleshooting/samsung/Samsung01_Apps.png)

  ![Mostrar apps do sistema](../images/troubleshooting/samsung/Samsung02_ShowSystemApps.png)

* Agora procure o app Bluetooth e selecione-o para ver as configurações dele.

  ![App Bluetooth](../images/troubleshooting/samsung/Samsung03_BtApp.png)

* Selecione "battery" (bateria).

  ![Bateria](../images/troubleshooting/samsung/Samsung04_Battery.png)

* Defina como "Unrestricted" (Sem restrições) (chamado "Not optimized" (Não otimizado) em algumas versões mais antigas do Android).

  ![Unrestricted (Sem restrições)](../images/troubleshooting/samsung/Samsung05_NotOptimized.png)

#### Telefones Huawei

Veja este guia para [Bluetooth e otimização de bateria em telefones Huawei](../CompatiblePhones/Huawei.md)

---

(generaltroubleshooting-cgm)=

## Monitor contínuo de glicose (CGM)

Links úteis para problemas conhecidos de CGMs e os passos para resolvê-los.

* [Geral](#general-cgm-troubleshooting)
* [Dexcom G6](#DexcomG6-troubleshooting-g6)
* [Libre 2 com Minimal Looper](#minimallooper-troubleshooting)
* [Libre 3](#libre3-experiences-and-troubleshooting)
* [xDrip - sem dados do CGM](#xdrip-identify-receiver)
* [xDrip - resolução de problemas do Dexcom](#xdrip-troubleshooting-dexcom-g5-g6-and-xdrip)

---

(generaltroubleshooting-pumps)=

## Bombas

Links úteis para problemas conhecidos de bombas e os passos para resolvê-los

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

Links úteis para problemas conhecidos de telefones e os passos para resolvê-los

* [Lista de telefones e dispositivos testados](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true)
* [Jelly](../CompatiblePhones/Jelly.md)
* [Bluetooth e otimização de bateria em telefones Huawei](../CompatiblePhones/Huawei.md)

---

(generaltroubleshooting-remote-control)=

## Controle remoto

* [AAPSClient e controle remoto (pareamento, comandos não recebidos)](#client-master-control-troubleshooting)
* [Problemas com o 'Token de acesso do Nightscout'](#remotecontrol-nightscout-access-token)
* [Comandos SMS](#SMSCommands-troubleshooting)
* [Android Auto](#android-auto-troubleshooting)

---

(generaltroubleshooting-smartwatches)=

## Smartwatches

Links úteis para problemas conhecidos de smartwatches e os passos para resolvê-los

* [Resolução de problemas do app Wear](#Watchfaces-troubleshooting-the-wear-app)
* [O relógio e o telefone não se comunicam](#wear-os-watch-phone-communication)
* [Wear OS 5](#wear-os-5-troubleshooting)
* [Compilar o app Wear](#building-aaps-wear-os-troubleshooting)
