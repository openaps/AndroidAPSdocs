(aapsclient-app)=
# A aplicação AAPSClient

O **AAPSClient** é a aplicação complementar do **AAPS**: uma aplicação para um segundo telefone — normalmente o de um cuidador — que **segue** a pessoa que usa o **AAPS**. A partir da versão 4 do **AAPS**, o cuidador também pode **controlar** o loop à distância, através de comandos assinados. Os dois telefones comunicam através do seu site **Nightscout**; não é necessária uma ligação direta entre os telefones.

```{admonition} Wording used on this page
:class: note
- **Cliente** = um telefone com o **AAPSClient**.
- **Telefone principal** = o telefone com o **AAPS** principal, que controla a bomba e executa o loop.
```

```{admonition} Which devices can run AAPSClient?
:class: note
From **AAPS** version 4, **AAPSClient** runs on Android phones and tablets, on Wear OS watches and on computers (Windows, Mac and Linux). On an iPhone there is no ready-made download: you build the app yourself. See the [table of downloads by device](#aapsclient-platforms).
```

```{contents} Table of contents
:depth: 2
:local: true
```

## O que o AAPSClient é (e não é)

O **AAPSClient** tem o aspeto e o funcionamento do **AAPS**, mas **não tem loop próprio**:

- Não contém **nenhum algoritmo APS**, nem **Objetivos**, nem **controladores de bombas** — nunca administra insulina por si só.
- Os plugins usados apenas pela aplicação principal (**Comunicador SMS**, **Tidepool**, **Open Humans**) também não estão incluídos.
- O que *contém*: a sincronização **NSClientV3**, os plugins de fonte da glicose, a difusão para o **xDrip+** e as ligações a **Wear OS** / **Garmin** — tudo o que é necessário para seguir e para reencaminhar comandos. Um relógio **Garmin** ligado a um cliente pode mostrar os dados, mas os hidratos que envia não são introduzidos e não pode ligar nem desligar a bomba: o cliente mostra uma mensagem e deve introduzi-los no **AAPS**.

Tudo o que iniciar no **AAPSClient** é verificado, limitado, confirmado e **executado pelo telefone principal** (o telefone com a bomba). A página [Controlo principal ↔ cliente](ClientMasterControl.md) explica como isto funciona: como emparelhar os dois telefones, como o telefone principal escreve o texto de confirmação que vê, como é administrado um bólus iniciado no cliente e o que acontece quando o telefone principal está offline.

## Versões: AAPSClient, AAPSClient2 e AAPSClient3

Podem ser instaladas até três aplicações cliente lado a lado no mesmo telefone de seguidor, cada uma a seguir uma pessoa **diferente**: **AAPSClient** (ícone de coruja amarela), **AAPSClient2** (coruja azul) e — novidade na versão 4 do **AAPS** — **AAPSClient3** (coruja verde). Funcionam exatamente da mesma forma. Só o nome e a cor são diferentes (ícone da aplicação, fundo do widget e secção de estado no ecrã principal), para que as possa distinguir. Cada aplicação é emparelhada com o seu próprio telefone principal. Consulte [Sobre o AAPSClient, AAPSClient2 e AAPSClient3](#remotecontrol-aapsclient-versions) para mais detalhes.

(aapsclient-platforms)=
## Obter a aplicação

All the ready-made files are in the *Assets* list of the latest release on [GitHub](https://github.com/nightscout/AndroidAPS/releases/) (click *Assets* at the bottom of the release to expand it). In the table, *x.y.z* stands for the version number. Choose the file that matches your device:

| Device                  | File to download                    | Notas                                                                                                                                                                                        |
| ----------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Android phone or tablet | `app-aapsclient-release_x.y.z.apk`  | Install it like the main app: see [Download and installation of AAPSClient](#RemoteControl_aapsclient) and [Transferring and installing](../SettingUpAaps/TransferringAndInstallingAaps.md). |
| Wear OS watch           | `wear-aapsclient-release_x.y.z.apk` | Goes with the AAPSClient app on the phone. See [Wear OS smartwatch](../WearOS/WearOsSmartwatch.md).                                                                                          |
| Windows computer        | `AAPSClient-x.y.z.msi`              | Open the file to install.                                                                                                                                                                    |
| Mac                     | `AAPSClient-x.y.z.dmg`              | See the note on macOS below the table.                                                                                                                                                       |
| Linux (Debian, Ubuntu)  | `aapsclient_x.y.z_amd64.deb`        | Install it with your package manager.                                                                                                                                                        |
| iPhone                  | nenhuma                             | There is no App Store version and no download. You build the app yourself, see [AAPSClient on an iPhone](#aapsclient-iphone).                                                                |

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

## Primeiro arranque: um Assistente de Configuração mais curto

No primeiro arranque, o **AAPSClient** executa o mesmo **Assistente de Configuração** que conhece do **AAPS**, mas com muito menos passos — num seguidor não há configuração de perfil, insulina, bomba, APS ou objetivos:

1. **Bem-vindo**, **Condições de Utilização**, **Permissões** e **Senha Mestre** — iguais aos da aplicação principal, consulte o [Assistente de Configuração do AAPS](../SettingUpAaps/SetupWizard.md).
2. O cliente **não** pede as **Unidades** nem as **marcas baixa/alta**: recebe-os do telefone principal assim que estiver ligado ao Nightscout. Pode vê-los mais tarde nas **Definições**, onde um pequeno **ícone de telefone** mostra que estão [sincronizados com o telefone principal](#client-master-config-prefs). Só podem ser editados enquanto o telefone principal estiver acessível.
3. **Configurar a partir do telefone principal** — no telefone principal, abra **Gerir → Clientes autorizados**, adicione este telefone com um **código QR** e toque aqui em **Ler o código QR**. Uma única leitura configura o Nightscout com um token próprio deste telefone e, se o código incluir o emparelhamento, também emparelha o telefone. O telefone também usa como nome da instância o nome com que foi adicionado no telefone principal (as letras com acentos passam a letras simples: «Miloš» fica «Milos»). **Depois da leitura, a configuração fica concluída**: o assistente fecha, porque os passos seguintes só mostrariam o que o código já fez. Sem código QR, salte este passo. (Not on a computer: it has no camera, see [Getting the app](#aapsclient-platforms).)

   ![O passo Configurar a partir do telefone principal com o botão Ler o código QR](../images/v4/AapsClient/aapsclient_wizard_from_master.png)

4. **Comunicação** — a lista de plugins só oferece o que um seguidor precisa (NSClientV3, xDrip+, Wear, Aplicações externas complementares, Garmin). Se não leu um código QR, ative o **NSClientV3** e introduza o **mesmo URL do Nightscout** que no telefone principal e um token de acesso, com os **websockets** ativados — exatamente como descrito em [Sincronização](#RemoteControl_aapsclient). Websockets are **mandatory** for remote control from **AAPSClient**, on both phones.

   ![O passo Comunicação no cliente](../images/v4/AapsClient/aapsclient_wizard_communication.png)

5. **Emparelhar com o telefone principal** — este passo existe **apenas** no cliente. Liga este dispositivo ao telefone principal através do canal seguro de comandos, com o PIN, e usa o nome com que o telefone foi adicionado no telefone principal, tal como o código QR. **Depois do emparelhamento, a configuração fica concluída.** Também pode saltar este passo e emparelhar mais tarde, a qualquer momento, em **Gerir → Emparelhar com o telefone principal**.

   ![O passo Emparelhar com o telefone principal no assistente do cliente](../images/v4/AapsClient/aapsclient_wizard_pair_step.png)

6. **Quem está a usar este telefone?** — só se não emparelhou no assistente: o nome da pessoa que usa este telefone. Serve para distinguir esta instância nos relatórios e na sincronização.

(aapsclient-pairing-with-the-master)=

## Emparelhar com o telefone principal

No **telefone principal**, abra **Gerir → Clientes autorizados** e adicione um cliente. Há duas formas de emparelhar:

- **Com um código QR** (a mais rápida, se o telefone tiver câmara): leia o código no passo do assistente «**Configurar a partir do telefone principal**» ou em **Gerir → Emparelhar com o telefone principal → Ler código QR** e confirme com «**Usar**». Também configura o Nightscout.
- **Com o PIN**: no **cliente**, abra o passo do assistente acima (ou **Gerir → Emparelhar com o telefone principal**), escreva o PIN de utilização única mostrado no telefone principal e prima «**Emparelhar**». O cliente mostra então em quem vai confiar — confirme com «**Emparelhar**»:

![Confirmação no cliente antes de concluir o emparelhamento](../images/v4/AapsClient/aapsclient_pair_confirm.png)

A partir do assistente, um emparelhamento bem-sucedido conclui a configuração e abre o ecrã principal. No telefone principal, o cliente aparece como **Ativo** na lista [Clientes autorizados](#client_master_master_setup). Depois disso, **Gerir → Emparelhar com o telefone principal** mostra «*Já emparelhado*», a função do telefone e se o modo reforçado está ligado:

![Gerir → Emparelhar com o telefone principal num cliente emparelhado: Já emparelhado, Função: Cuidador, Modo reforçado ligado](../images/v4/ClientMaster/pair_with_master_client.png) O procedimento completo de emparelhamento, os detalhes de segurança e a resolução de problemas estão em [Controlo principal ↔ cliente](#client_master_client_setup).

Depois do emparelhamento, o cliente recebe do telefone principal um token do Nightscout próprio (se o telefone principal tiver um token de administrador), só com os direitos de que um cliente precisa, e deixa de usar o token que possa ter introduzido. O **AAPSClient** nunca escreve tratamentos nem valores de glicose no Nightscout: tudo o que faz é enviado para o telefone principal, que o escreve. Veja [O token próprio do cliente no Nightscout](#client-master-control-own-token).

O telefone principal decide o que este telefone pode fazer através da sua **[função](#client-master-control-roles)** (Só leitura, Refeições, Cuidador ou Admin). **Gerir → Emparelhar com o telefone principal** mostra a função do telefone.

## O ecrã principal

O ecrã principal do cliente reflete o loop seguido:

![Ecrã principal do AAPSClient](../images/v4/AapsClient/aapsclient_home.png)

- **A glicose, os gráficos, a IA/HCA e o perfil** vêm do Nightscout, tal como o telefone principal os enviou.
- O **estado do loop** mostrado é o **do telefone principal** (um cliente não tem loop próprio). Até o cliente receber do Nightscout o modo de funcionamento do telefone principal, o botão do modo de funcionamento mostra um **ponto de interrogação** (desconhecido).
- O **cartão de estado** mostra o reservatório e a bateria da **bomba seguida** e a bateria do telefone que envia os dados, retirados do estado do dispositivo no Nightscout — um cliente não tem bomba, por isso não há estado local da bomba nem gestão da bomba em parte nenhuma da aplicação.
- A barra inferior oferece **Tratamentos**, **Cenas** e **Gerir** depois de o cliente estar emparelhado (antes do emparelhamento, só **Gerir**) — não há separadores de bomba nem de objetivos.

## Tratamentos e ações

Tudo em **Gerir** funciona como na aplicação principal, com uma diferença importante: num cliente, as ações que alteram a terapia (bólus, hidratos, alvos temporários, cenas…) ficam **ocultas até o dispositivo estar emparelhado** e, depois do emparelhamento, são **reencaminhadas para o telefone principal** para confirmação e execução — consulte [Usar o controlo remoto](#client-master-control).

A entrada **Perfil** é a exceção: aparece mesmo num cliente **não emparelhado**, mas abre **só para consulta** — o cliente mostra os perfis que recebe através do Nightscout (precisa deles para os seus próprios cálculos), sem botões para editar ou ativar. Depois de o cliente estar **emparelhado**, a lista de perfis é sincronizada com o telefone principal e pode editar e ativar perfis a partir do cliente, como qualquer outra ação remota.

Num cliente **não emparelhado**, **Gerir** oferece apenas **Perfil** e **Emparelhar com o telefone principal**:

![O ecrã Gerir num cliente não emparelhado: apenas Perfil e Emparelhar com o telefone principal](../images/v4/AapsClient/aapsclient_manage_unpaired.png)

A faixa vermelha «*Telefone principal inacessível. A edição está desativada até a ligação ser restabelecida.*» também aparece num cliente não emparelhado. Isto é normal: ainda não há telefone principal para contactar. A faixa desaparece quando o cliente estiver emparelhado e o telefone principal estiver online.

Depois de o cliente estar emparelhado, aparecem as ações de terapia:

![O ecrã Gerir num cliente emparelhado, incluindo a entrada Emparelhar com o telefone principal](../images/v4/AapsClient/aapsclient_manage.png)

**Não há entrada Bomba** — um cliente não tem bomba.

Se o telefone principal não estiver acessível, a mesma faixa aparece num cliente emparelhado: as ações de terapia ficam a cinzento e tudo o que tentar é bloqueado antes de ser enviado. O cliente deteta que o telefone principal está offline quando tenta uma ação, e volta a ativar as ações quando o telefone principal estiver de novo online.

![O ecrã Gerir num cliente emparelhado com o telefone principal offline: ações a cinzento por baixo da faixa](../images/v4/AapsClient/aapsclient_manage_master_offline.png)

## Definições sincronizadas com o telefone principal

A **configuração** dos plugins ativos e muitas **preferências** são mantidas sincronizadas entre o telefone principal e os seus clientes emparelhados; os itens sincronizados estão marcados com um pequeno **ícone de telefone** e ficam desativados (com a faixa «*Telefone principal inacessível*») enquanto o telefone principal não estiver acessível. Isto está descrito em [Alterar a configuração e as preferências](#client-master-config-prefs).

## AAPSClient num smartwatch

Um relógio Wear OS pode ser emparelhado com o telefone **cliente**; as suas ações são reencaminhadas pelo cliente para o telefone principal. Consulte [Wear OS](../WearOS/WearOsSmartwatch.md) e as [opções de smartwatch em Controlo remoto](#RemoteControl_smartwatches).
