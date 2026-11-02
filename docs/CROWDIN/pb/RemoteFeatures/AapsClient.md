(aapsclient-app)=
# O app AAPSClient

O **AAPSClient** é o app acessório do **AAPS**: um app companheiro para um segundo telefone — normalmente o de um cuidador — que **acompanha** a pessoa que usa o **AAPS**. A partir da versão 4 do **AAPS**, o cuidador também pode **controlar** o loop à distância por meio de comandos assinados. Os dois telefones se comunicam pelo seu site do **Nightscout**; não é preciso uma conexão direta entre os telefones.

```{admonition} Wording used on this page
:class: note
- **Cliente** = um telefone com o **AAPSClient**.
- **Dispositivo principal** = o telefone principal do **AAPS**, que controla a bomba e executa o loop.
```

```{admonition} Which devices can run AAPSClient?
:class: note
From **AAPS** version 4, **AAPSClient** runs on Android phones and tablets, on Wear OS watches and on computers (Windows, Mac and Linux). On an iPhone there is no ready-made download: you build the app yourself. See the [table of downloads by device](#aapsclient-platforms).
```

```{contents} Table of contents
:depth: 2
:local: true
```

## O que o AAPSClient é (e o que não é)

O **AAPSClient** tem a aparência e o funcionamento do **AAPS**, mas **não tem loop próprio**:

- Ele **não tem algoritmo APS**, nem **Objetivos**, e **não tem drivers de bomba** — ele nunca administra insulina sozinho.
- Os plugins usados apenas pelo app principal (**Comunicador SMS**, **Tidepool**, **Open Humans**) também não estão incluídos.
- O que ele *tem*: sincronização pelo **NSClientV3**, os plugins de fonte de BG, transmissão para o **xDrip+** e os conectores para **Wear OS** / **Garmin** — tudo o que é preciso para acompanhar e repassar comandos. Um relógio **Garmin** conectado a um cliente pode mostrar os dados, mas os carboidratos que ele envia não são registrados e ele não pode conectar nem desconectar a bomba: o cliente mostra uma mensagem, e você deve inseri-los no **AAPS**.

Tudo o que você inicia no **AAPSClient** é verificado, limitado, confirmado e **executado pelo dispositivo principal** (o telefone com a bomba). A página [Controle dispositivo principal ↔ cliente](ClientMasterControl.md) explica como isso funciona: como parear os dois telefones, como o dispositivo principal escreve o texto de confirmação que você vê, como um bólus iniciado no cliente é administrado e o que acontece quando o dispositivo principal está offline.

## Versões: AAPSClient, AAPSClient2 e AAPSClient3

Até três apps cliente podem ser instalados lado a lado no mesmo telefone seguidor, cada um acompanhando uma pessoa **diferente**: **AAPSClient** (ícone de coruja amarela), **AAPSClient2** (coruja azul) e — novo na versão 4 do **AAPS** — **AAPSClient3** (coruja verde). Eles funcionam exatamente da mesma forma. Só o nome e a cor mudam (ícone do app, fundo do widget e a seção de status na tela inicial), para que você possa diferenciá-los. Cada app é pareado com o seu próprio dispositivo principal. Veja [Sobre o AAPSClient, AAPSClient2 e AAPSClient3](#remotecontrol-aapsclient-versions) para mais detalhes.

(aapsclient-platforms)=
## Como obter o app

All the ready-made files are in the *Assets* list of the latest release on [GitHub](https://github.com/nightscout/AndroidAPS/releases/) (click *Assets* at the bottom of the release to expand it). In the table, *x.y.z* stands for the version number. Choose the file that matches your device:

| Device                  | File to download                    | Notas                                                                                                                                                                                        |
| ----------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Android phone or tablet | `app-aapsclient-release_x.y.z.apk`  | Install it like the main app: see [Download and installation of AAPSClient](#RemoteControl_aapsclient) and [Transferring and installing](../SettingUpAaps/TransferringAndInstallingAaps.md). |
| Wear OS watch           | `wear-aapsclient-release_x.y.z.apk` | Goes with the AAPSClient app on the phone. See [Wear OS smartwatch](../WearOS/WearOsSmartwatch.md).                                                                                          |
| Windows computer        | `AAPSClient-x.y.z.msi`              | Open the file to install.                                                                                                                                                                    |
| Mac                     | `AAPSClient-x.y.z.dmg`              | See the note on macOS below the table.                                                                                                                                                       |
| Linux (Debian, Ubuntu)  | `aapsclient_x.y.z_amd64.deb`        | Install it with your package manager.                                                                                                                                                        |
| iPhone                  | nenhum                              | There is no App Store version and no download. You build the app yourself, see [AAPSClient on an iPhone](#aapsclient-iphone).                                                                |

**Following two people?** Each file above also exists as *aapsclient2* / *AAPSClient2*. It is a second client app that installs next to the first one, so one device can follow two people (see [About AAPSClient, AAPSClient2 and AAPSClient3](#remotecontrol-aapsclient-versions)). **AAPSClient3** is not in the release assets: build it yourself ([build variants](#browserbuild-variant)).

**Files to ignore:** the *pumpcontrol* files (`app-pumpcontrol-release_…`, `wear-pumpcontrol-release_…`) are not a client. Leave them out.

**Mac: the first start.** The app is not notarized by Apple, so macOS blocks it the first time you open it. Click *Done*, then open *System Settings → Privacy & Security*, scroll down and click *Open Anyway*.

**Computer: how to connect.** A computer has no camera, so the QR code cannot be scanned. Set up **Nightscout** in the client, then on the master add the client with a **PIN** and type the 8-digit PIN in the client (**Pair with master**). See [Pairing with the master](#aapsclient-pairing-with-the-master).

**Same version everywhere.** The master and all its clients must run the same **AAPS** version. When you update the master, update the clients too.

(aapsclient-iphone)=
### AAPSClient on an iPhone

There is no **AAPSClient** in the App Store and no ready-made file to download, so you build the app yourself:

- You need a Mac with **Xcode** and an Apple developer account.
- The project is the `ios` folder of the [AndroidAPS repository on GitHub](https://github.com/nightscout/AndroidAPS/tree/master/ios).
- A build for a real iPhone is signed with your own Apple developer team. A build for the iPhone simulator does not need one.
- There is no step-by-step guide yet. This page will be updated when there is one.

The iPhone version pairs with the master like the others. Unlike the computer versions, the iPhone can scan the master's QR code with its camera.

## Primeira inicialização: um Assistente de Configuração mais curto

Na primeira inicialização, o **AAPSClient** executa o mesmo **Assistente de Configuração** que você conhece do **AAPS**, mas com muito menos passos — em um seguidor não há configuração de perfil, insulina, bomba, APS ou objetivos:

1. **Bem-vindo(a)**, **contrato de licença**, **permissões** e **senha mestra** — iguais ao app principal, veja o [Assistente de configuração do AAPS](../SettingUpAaps/SetupWizard.md).
2. O cliente **não** pergunta as **unidades** nem as **marcas baixa/alta**: ele as recebe do telefone principal assim que se conecta ao Nightscout. Você pode vê-las depois em **Configurações**, onde um pequeno **ícone de telefone** mostra que elas estão [sincronizadas com o telefone principal](#client-master-config-prefs). Elas só podem ser editadas enquanto o dispositivo principal estiver acessível.
3. **Configurar a partir do dispositivo principal** — no dispositivo principal, abra **Gerenciar → Clientes autorizados**, adicione este telefone com um **código QR** e toque aqui em **Escaneie o código QR**. Uma única leitura configura o Nightscout com um token próprio deste telefone e, com um código que pareia, também pareia o telefone. O telefone também usa como nome da instância o nome com que foi adicionado no dispositivo principal (letras com acento viram letras simples, "Miloš" vira "Milos"). **Depois da leitura, a configuração está concluída**: o assistente fecha, porque os próximos passos só mostrariam o que o código já fez. Sem um código QR, pule este passo. (Not on a computer: it has no camera, see [Getting the app](#aapsclient-platforms).)

   ![O passo Configurar a partir do dispositivo principal com o botão Escaneie o código QR](../images/v4/AapsClient/aapsclient_wizard_from_master.png)

4. **Comunicação** — a lista de plugins oferece apenas o que um seguidor precisa (NSClientV3, xDrip+, Wear, Apps companheiros externos, Garmin). Se você não leu um código QR, ative o **NSClientV3** e digite a **mesma URL do Nightscout** do telefone principal e um token de acesso, com os **websockets** ativados — exatamente como descrito em [Sincronização](#RemoteControl_aapsclient).

   ![Passo Comunicação no cliente](../images/v4/AapsClient/aapsclient_wizard_communication.png)

5. **Parear com o dispositivo principal** — este passo existe **apenas** no cliente. Ele conecta este dispositivo ao dispositivo principal pelo canal seguro de comandos, com o PIN, e usa o nome com que o telefone foi adicionado no dispositivo principal, como o código QR. **Depois do pareamento, a configuração está concluída.** Você também pode pular este passo e parear a qualquer momento depois, em **Gerenciar → Parear com o dispositivo principal**.

   ![Passo Parear com o dispositivo principal no assistente do cliente](../images/v4/AapsClient/aapsclient_wizard_pair_step.png)

6. **Quem está usando este telefone?** — só quando você não pareou no assistente: o nome da pessoa que usa este telefone. Ele serve para distinguir esta instância nos relatórios e na sincronização.

(aapsclient-pairing-with-the-master)=

## Pareamento com o dispositivo principal

No **dispositivo principal**, abra **Gerenciar → Clientes autorizados** e adicione um cliente. Há duas formas de parear:

- **Com um código QR** (a mais rápida, se o telefone tiver câmera): escaneie o código no passo do assistente "**Configurar a partir do dispositivo principal**" ou em **Gerenciar → Parear com o dispositivo principal → Escanear código QR** e confirme com "**Usar**". Ele também configura o Nightscout.
- **Com o PIN**: no **cliente**, abra o passo do assistente acima (ou **Gerenciar → Parear com o dispositivo principal**), digite o PIN de uso único mostrado no dispositivo principal e toque em "**Parear**". O cliente então mostra em quem ele vai confiar — confirme com "**Parear**":

![Confirmação no cliente antes de concluir o pareamento](../images/v4/AapsClient/aapsclient_pair_confirm.png)

A partir do assistente, um pareamento bem-sucedido conclui a configuração e abre a tela inicial. No dispositivo principal, o cliente aparece como **Ativo** na lista de [Clientes autorizados](#client_master_master_setup). Depois disso, **Gerenciar → Parear com o dispositivo principal** mostra "*Já pareado*", a função do telefone e se o modo reforçado está ativado:

![Gerenciar → Parear com o dispositivo principal em um cliente pareado: Já pareado, Função: Cuidador, Modo reforçado ativado](../images/v4/ClientMaster/pair_with_master_client.png) O procedimento completo de pareamento, os detalhes de segurança e a resolução de problemas estão em [Controle dispositivo principal ↔ cliente](#client_master_client_setup).

Depois do pareamento, o cliente recebe do dispositivo principal um token próprio do Nightscout (se o dispositivo principal tiver um token de administrador), apenas com os direitos de que um cliente precisa, e para de usar o token que você talvez tenha digitado. O **AAPSClient** nunca grava tratamentos ou glicose no Nightscout por conta própria: tudo o que ele faz é enviado ao dispositivo principal, que grava os dados. Veja [O token próprio do Nightscout do cliente](#client-master-control-own-token).

O dispositivo principal decide o que este telefone pode fazer por meio da sua **[função](#client-master-control-roles)** (Somente leitura, Refeições, Cuidador ou Admin). **Gerenciar → Parear com o dispositivo principal** mostra a função do telefone.

## A tela inicial

A tela inicial do cliente espelha o loop acompanhado:

![Tela inicial do AAPSClient](../images/v4/AapsClient/aapsclient_home.png)

- **Glicose, gráficos, IOB/COB e perfil** vêm do Nightscout, exatamente como o dispositivo principal os enviou.
- O **status do loop** mostrado é o do **dispositivo principal** (um cliente não tem loop próprio). Até o cliente receber do Nightscout o modo de operação do dispositivo principal, o chip do modo de operação mostra um **ponto de interrogação** (desconhecido).
- O **cartão de status** mostra o reservatório e a bateria da **bomba acompanhada** e a bateria do uploader, obtidos do status do dispositivo no Nightscout — um cliente não tem bomba, por isso não há status local da bomba nem gerenciamento da bomba em nenhum lugar do app.
- A barra inferior oferece **Tratamentos**, **Cenários** e **Gerenciar** depois que o cliente é pareado (antes do pareamento, apenas **Gerenciar**) — não há abas de bomba nem de objetivos.

## Tratamentos e ações

Tudo em **Gerenciar** funciona como no app principal, com uma diferença importante: em um cliente, as ações que mudariam a terapia (bólus, carboidratos, alvos temporários, cenários…) ficam **ocultas até o dispositivo ser pareado** e, depois do pareamento, são **repassadas ao dispositivo principal** para confirmação e execução — veja [Usar o controle remoto](#client-master-control).

O item **Perfil** é a exceção: ele aparece mesmo em um cliente **não pareado**, mas abre **somente para visualização** — o cliente mostra os perfis que recebe pelo Nightscout (ele precisa deles para os seus próprios cálculos), sem botões de editar ou ativar. Depois que o cliente é **pareado**, a lista de perfis é sincronizada com o dispositivo principal, e você pode editar e ativar perfis no cliente como qualquer outra ação remota.

Em um cliente **não pareado**, **Gerenciar** oferece apenas **Perfil** e **Parear com o dispositivo principal**:

![A tela Gerenciar em um cliente não pareado: apenas Perfil e Parear com o dispositivo principal](../images/v4/AapsClient/aapsclient_manage_unpaired.png)

O banner vermelho "*Dispositivo principal inacessível. A edição fica desativada até que a conexão seja restaurada.*" também aparece em um cliente não pareado. Isso é esperado: ainda não há dispositivo principal para alcançar. O banner desaparece quando o cliente está pareado e o dispositivo principal está online.

Depois que o cliente é pareado, as ações de terapia aparecem:

![A tela Gerenciar em um cliente pareado, incluindo o item Parear com o dispositivo principal](../images/v4/AapsClient/aapsclient_manage.png)

**Não há item Bomba** — um cliente não tem bomba.

Se o dispositivo principal não estiver acessível, o mesmo banner aparece em um cliente pareado: as ações de terapia ficam cinza, e tudo o que você tentar é bloqueado antes de ser enviado. O cliente percebe que o dispositivo principal está offline quando você tenta uma ação, e reativa as ações quando o dispositivo principal volta a ficar online.

![A tela Gerenciar em um cliente pareado com o dispositivo principal offline: ações em cinza abaixo do banner](../images/v4/AapsClient/aapsclient_manage_master_offline.png)

## Configurações sincronizadas com o dispositivo principal

A **configuração** dos plugins ativos e muitas **preferências** são mantidas sincronizadas entre o dispositivo principal e os seus clientes pareados; os itens sincronizados são marcados com um pequeno **ícone de telefone** e ficam desativados (com o banner "*Dispositivo principal inacessível*") enquanto o dispositivo principal não puder ser alcançado. Isso está descrito em [Alterar a configuração e as preferências](#client-master-config-prefs).

## AAPSClient em um smartwatch

Um relógio Wear OS pode ser pareado com o telefone **cliente**; as ações dele são repassadas pelo cliente ao dispositivo principal. Veja [Wear OS](../WearOS/WearOsSmartwatch.md) e as [opções de smartwatch no Controle remoto](#RemoteControl_smartwatches).
