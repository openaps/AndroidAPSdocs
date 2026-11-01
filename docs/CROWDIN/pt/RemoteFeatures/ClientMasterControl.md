(client-master-control)=
# Controlo principal ↔ cliente (controlo remoto assinado)

A partir da versão 4 do **AAPS**, um telefone de seguidor com o **AAPSClient** pode fazer muito mais do que *anunciar* tratamentos através do Nightscout: depois de **emparelhado** com o telefone principal, pode enviar **comandos assinados** que o telefone principal (o **master**) verifica, confirma e executa — incluindo administrar um **bólus de insulina** na bomba do telefone principal.

Esta página explica como funciona, como o configurar e como o usar.

```{contents} Table of contents
:depth: 2
:local: true
```

```{admonition} Wording used on this page
:class: note
- **Telefone principal** (master) = o telefone **AAPS** principal, que tem a bomba e faz funcionar o loop (a app `full`).
- **Cliente** = um telefone com o **AAPSClient**, sem bomba, que segue o telefone principal e agora também o *controla*.
- Os dois telefones têm de estar ligados ao **mesmo site Nightscout**. Toda a comunicação continua a passar pelo Nightscout — não é preciso nenhuma ligação direta entre os telefones.
```

---

## Como funciona

```{admonition} Coming from AAPS v3?
:class: note
No **AAPS** v3, o **AAPSClient** só podia escrever tratamentos do careportal não assinados no Nightscout e não podia administrar um bólus. O controlo remoto precisa agora de um [emparelhamento](#client_master_master_setup) único. Veja também [O que mudou no AAPS v4](#v4changes-remote-control).
```

O **AAPS** v4 usa um canal próprio de **controlo pelos clientes** (Client-Control). Este canal continua a passar pelo seu site Nightscout (na coleção `settings`), mas cada mensagem é **assinada criptograficamente** com um segredo que só os dois telefones conhecem. O segredo é entregue uma única vez, durante o **emparelhamento**, e substituído por um novo logo a seguir, por isso nunca circula em texto simples.

O princípio base é: **quem manda é o telefone principal**:

1. O cliente envia uma *intenção* («bólus de 2 U», «iniciar a cena Exercício», «definir este alvo temporário»…).
2. O **telefone principal** volta a calcular e **limita** a ação com base nos seus **próprios** dados atuais (perfil, IA, HCA, alvo temporário atual, bomba) e **escreve a confirmação exata** que o utilizador vai ver.
3. O cliente (ou o relógio) mostra o texto de confirmação do **telefone principal** — nunca cria o seu próprio.
4. Depois da confirmação, o telefone principal **executa uma única vez** e envia o resultado de volta ao cliente.

O que isto significa para si:

- **Comandos assinados**: só os clientes que emparelhou podem enviar comandos (segredo de emparelhamento e assinatura próprios de cada cliente). Comandos antigos ou repetidos são rejeitados.
- **Uma função para cada cliente**: decide o que cada cliente pode fazer, de *Só leitura* a *Admin* — veja [Funções dos clientes](#client-master-control-roles).
- **Bólus de insulina a partir de um cliente**: o telefone principal administra-o na sua bomba e o cliente mostra o progresso da administração.
- **Quem decide é o telefone principal**: limita cada ação de acordo com as suas próprias restrições e escreve a confirmação mostrada no cliente.
- **Só os clientes emparelhados alteram a terapia**: enquanto o controlo pelos clientes estiver ligado, o telefone principal deixa de aceitar tratamentos ou alterações introduzidos diretamente no Nightscout — veja [Modo reforçado](#client-master-control-hardened-mode).
- **Cada cliente recebe o seu próprio token do Nightscout**, só com os direitos de que um cliente precisa — veja [O token do Nightscout próprio do cliente](#client-master-control-own-token).
- **Telefone principal offline**: as ações são bloqueadas com uma mensagem clara.
- **Revogar um cliente** exige um só toque (por cliente); também pode usar o interruptor do telefone principal para parar todos os clientes.

Ações que podem ser iniciadas a partir de um cliente: **bólus**, **hidratos de carbono / eCarbs**, **alvo temporário** (definir e cancelar), **troca de perfil**, mudança do **loop / modo de funcionamento**, **basal temporária** (definir e cancelar), **bólus prolongado** (definir e cancelar), **seleção da insulina** e **[cenas](../DailyLifeWithAaps/Scenes.md)**. Uma parte das **preferências** bidirecionais também é mantida sincronizada entre o telefone principal e os clientes.

---

## Funções e pré-requisitos

```{admonition} Before you start
:class: important
- O **telefone principal** usa a compilação `full` normal do **AAPS** e está ligado à sua bomba.
- O **telefone principal** usa o **NSClientV3** com o seu Nightscout e mostra *Ligado*. Dê-lhe um **token de administrador** do seu Nightscout: com ele, o telefone principal pode criar um token próprio para cada cliente e mostrá-lo ao cliente como código QR.
- O **cliente** usa o **[AAPSClient](AapsClient.md)** (ou o **AAPSClient2** / **AAPSClient3** para outros doentes — veja [Sobre o AAPSClient, o AAPSClient2 e o AAPSClient3](#remotecontrol-aapsclient-versions)). Tem de usar o **mesmo** Nightscout. Se o configurar com o código QR do telefone principal, o cliente recebe o endereço e o token do Nightscout do telefone principal; caso contrário, configure primeiro o **NSClientV3** no cliente.
- Os **websockets** são necessários nos dois telefones: os comandos só chegam ao telefone principal pela ligação websocket. Enquanto o controlo pelos clientes estiver ligado, o **AAPS** mantém os websockets ligados, no telefone principal e nos clientes emparelhados.
```

Emparelhamento e sincronização são duas coisas diferentes:

- A **sincronização** (dados: glicose, tratamentos, perfil) é configurada como antes — veja [Sincronização](#RemoteControl_aapsclient). O código QR do telefone principal pode fazê-la por si no cliente.
- O **emparelhamento** (controlo: o canal de comandos assinados descrito aqui) é o novo passo abaixo.

---

## Configuração

(client_master_master_setup)=
### 1. No telefone principal — ativar o controlo e adicionar um cliente

No telefone principal, abra o ecrã **Gerir** e escolha **Clientes autorizados**.

Ligue **Permitir controlo pelos clientes** (está **desligado** por predefinição). Este é o interruptor geral: desligado, nenhum cliente pode enviar comandos, mas os seus clientes emparelhados são mantidos, para que o possa voltar a ligar mais tarde. Ligá-lo também liga o [Modo reforçado](#client-master-control-hardened-mode), mostrado como "*Modo reforçado ligado*", com um **(i)** que o explica. No [Modo simples](#preferences-simple-mode), o controlo pelos clientes está sempre ligado, por isso o interruptor não é mostrado.

![Ecrã Clientes autorizados no telefone principal](../images/v4/ClientMaster/authorized_clients_master.png)

Toque no botão **+** (em baixo, à direita) para adicionar um cliente. Na caixa de diálogo **Novo cliente**:

1. Introduza um **Nome do dispositivo**, para o reconhecer na lista.
2. Escolha **Como é configurado o telefone?** (veja a tabela abaixo).
3. Escolha a sua **[função](#client-master-control-roles)**. Nada é selecionado por si: a função certa depende de quem usa o telefone.

![Caixa de diálogo Novo cliente no telefone principal: nome do dispositivo, como é configurado o telefone e a sua função](../images/v4/ClientMaster/new_client_master.png)

| Forma                                      | O que o novo telefone recebe                                                                    | Use quando                                                                                                      |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Código QR: Nightscout e emparelhamento** | o endereço do Nightscout, o seu próprio token do Nightscout e o emparelhamento, numa só leitura | o novo telefone tem câmara: a forma mais rápida, sem nada para escrever                                         |
| **Código QR: só Nightscout**               | o endereço do Nightscout e o seu próprio token do Nightscout, sem emparelhamento                | o telefone deve apenas **mostrar** dados e nunca enviar comandos                                                |
| **PIN**                                    | só o emparelhamento; mantém as definições do Nightscout que já tem                              | o telefone não tem câmara (ou o telefone principal não pode criar tokens); tem de já estar ligado ao Nightscout |

As duas formas com código QR precisam de um **token de administrador** nas definições do **NSClientV3** do telefone principal, porque é o telefone principal que cria o token do cliente no Nightscout. Sem ele, as opções de código QR aparecem, mas não podem ser escolhidas, e a caixa de diálogo explica porquê; o **PIN** funciona sempre.

#### Com um código QR

Toque em **OK**: o telefone principal cria o token do Nightscout do cliente e mostra um **código QR**. Um código que também emparelha funciona durante cerca de **dois minutos**; o ecrã faz a contagem decrescente e fecha-se sozinho quando o cliente tiver emparelhado. Leia-o no novo telefone, como descrito em [No cliente](#client_master_client_setup).

```{admonition} The QR code is a secret
:class: warning
Qualquer pessoa que veja o código QR pode ler o seu Nightscout, e um código que emparelha também contém o emparelhamento. Mostre-o apenas ao novo telefone. O **AAPS** bloqueia as capturas de ecrã enquanto o código está no ecrã.
```

![O ecrã do código QR do telefone principal com a contagem decrescente (código desfocado)](../images/v4/ClientMaster/qr_code_master.png)

#### Com um PIN

Toque em **OK**: o telefone principal mostra um **PIN de emparelhamento** de 8 dígitos, em dois grupos de quatro (por exemplo `1234 5678`). Este PIN é de **utilização única** e **expira após cerca de dois minutos**.

![Ecrã de emparelhamento do telefone principal com o PIN de utilização única (o PIN mostrado aqui já expirou)](../images/v4/ClientMaster/pairing_pin_master.png)

```{admonition} The pairing PIN is a secret
:class: warning
O PIN protege o segredo de emparelhamento que é trocado através do Nightscout. Partilhe-o apenas com o dispositivo que está a emparelhar, não o publique e deixe-o expirar se não o usar. Pode sempre gerar um novo PIN tocando outra vez em **+**.
```

(client_master_client_setup)=
### 2. No cliente — emparelhar com o telefone principal

#### Ler o código QR

Pode ler o código QR do telefone principal em dois sítios:

- no **Assistente de Configuração** do cliente, no passo "**Configurar a partir do telefone principal**", que vem antes do passo do Nightscout. Uma só leitura configura então o Nightscout e, com um código que emparelha, também o emparelhamento, e a configuração fica concluída: o assistente fecha-se e abre-se o ecrã principal;
- a qualquer momento mais tarde, em **Gerir → Emparelhar com o telefone principal → Ler código QR**.

Na primeira vez, o **AAPSClient** pede a permissão da **câmara**. Se a recusar, o ecrã diz que a câmara é necessária, e pode permiti-la com **Tentar novamente** ou emparelhar com o PIN.

Aponte a câmara para o código. O cliente mostra o que o código faz — o endereço do Nightscout e, num código que emparelha, o telefone principal com que emparelha — e pergunta "**Usar este código?**". Toque em **Usar**: o cliente liga o **NSClientV3**, substitui o seu endereço e token do Nightscout pelos do código e liga os websockets. Um código que emparelha também emparelha o telefone; este cumprimenta o telefone principal logo que se liga ao Nightscout.

![O passo Configurar a partir do telefone principal no assistente do cliente](../images/v4/AapsClient/aapsclient_wizard_from_master.png)

```{admonition} Scanning is available on Android
:class: note
O leitor ainda não está disponível no iOS, e um computador de secretária não tem câmara: aí, use o PIN.
```

#### Introduzir o PIN

No cliente, abra **Gerir → Emparelhar com o telefone principal** (ou o passo do assistente **Emparelhar com o telefone principal**, depois do passo do Nightscout), **introduza o PIN de 8 dígitos** mostrado no telefone principal e toque em **Emparelhar**. O cliente usa o PIN para obter de forma segura a oferta de emparelhamento através do Nightscout, depois pergunta "**Emparelhar com este telefone principal?**" e mostra o identificador do telefone principal. Toque em **Emparelhar** para confirmar (veja [Emparelhar com o telefone principal](#aapsclient-pairing-with-the-master) para uma captura de ecrã).

![Ecrã Emparelhar com o telefone principal no cliente antes do emparelhamento — introduza aqui o PIN](../images/v4/ClientMaster/pair_with_master_unpaired.png)

#### Depois do emparelhamento

Depois de emparelhado, o cliente envia um **Hello** (cumprimento) ao telefone principal e aparece na lista **Clientes autorizados** do telefone principal como **Ativo**, com a hora em que foi *«Visto pela última vez»*. O cliente sabe a sua [função](#client-master-control-roles) a partir do emparelhamento, por isso mostra logo os botões certos. Um emparelhamento feito no Assistente de Configuração termina o assistente. No mesmo passo, os dois telefones substituem o segredo de emparelhamento por um novo que nunca circulou (veja [Notas de segurança](#client-master-control-security)), e um cliente configurado com o PIN recebe o seu próprio token do Nightscout (veja [O token do Nightscout próprio do cliente](#client-master-control-own-token)). Um cliente só pode estar emparelhado com **um** telefone principal de cada vez; para emparelhar com outro telefone principal, toque primeiro em **Desemparelhar**.

![Ecrã Emparelhar com o telefone principal no cliente (já emparelhado)](../images/v4/ClientMaster/pair_with_master_client.png)

### 3. Gerir os clientes

No ecrã **Clientes autorizados** do telefone principal pode, a qualquer momento:

- **Mudar a função** de um cliente com a fila de quatro botões por baixo do seu nome. A nova função tem efeito imediato, sem emparelhar outra vez.
- **Ver com que token do Nightscout** um cliente escreve: "*Token do Nightscout próprio*" é o que quer ver. Uma linha vermelha "*Usa o token do Nightscout …, que tem mais direitos do que um cliente precisa*" significa que o cliente ainda usa um token com mais direitos, normalmente o seu token de administrador — veja [O token do Nightscout próprio do cliente](#client-master-control-own-token).
- **Revogar** um único cliente — toque no ícone do **caixote do lixo** ao lado dele. O cliente deixa de poder enviar comandos até ser emparelhado outra vez. O seu token do Nightscout também é apagado, por isso deixa também de poder ler o seu Nightscout.
- **Parar todo o controlo** sem perder os emparelhamentos — desligue **Permitir controlo pelos clientes**.

Os telefones configurados com **Código QR: só Nightscout** aparecem abaixo dos clientes, em "**Só leitura do Nightscout**". Para cada um deles, pode mostrar outra vez o código QR (para configurar de novo o mesmo telefone) ou apagar o seu token, o que termina o acesso dele ao seu Nightscout.

![Clientes autorizados com um cliente emparelhado (botões de função, token do Nightscout próprio) e um telefone em Só leitura do Nightscout](../images/v4/ClientMaster/authorized_clients_roles.png)

---

(client-master-control-roles)=
## Funções dos clientes

Cada cliente emparelhado tem uma **função**. O telefone principal verifica-a em cada comando, e o cliente mostra apenas o que a sua função permite. Uma nova função tem efeito imediato, sem emparelhar outra vez. As funções acumulam-se: cada uma pode fazer tudo o que a anterior pode.

| Função         | O cliente pode                                                                                                                                                                                                                                                       |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Só leitura** | apenas mostrar dados. Continua emparelhado, por isso está pronto quando lhe der uma função superior.                                                                                                                                                                 |
| **Refeições**  | dar um bólus, usar o assistente de bólus e o Assistente Rápido, introduzir hidratos de carbono e parar um bólus em curso. Os hidratos de carbono introduzidos aqui podem fazer o loop dar mais insulina.                                                             |
| **Cuidador**   | fazer tudo o que um utilizador faz no **AAPS**: alvos temporários, trocas de perfil e de insulina, modo do loop, basal temporária, bólus prolongado, cenas, eventos do careportal, calibrações e remoção de registos. Não pode alterar definições nem predefinições. |
| **Admin**      | fazer tudo, incluindo definições e predefinições (Assistente Rápido, predefinições de alvos temporários, cenas, perfis, automatização, insulina).                                                                                                                    |

O **(i)** no topo do ecrã **Clientes autorizados** mostra a mesma explicação. No cliente, **Gerir → Emparelhar com o telefone principal** mostra a função do próprio telefone.

---

(client-master-control-hardened-mode)=
## Modo reforçado

Quando **Permitir controlo pelos clientes** está ligado, o telefone principal está em **modo reforçado**: só aceita alterações de clientes emparelhados. **Não** aceita tratamentos, alvos temporários, alterações de perfil, mudanças do modo de funcionamento nem eliminações feitos diretamente no Nightscout, por exemplo no site do Nightscout ou noutras apps.

- As definições para aceitar dados do Nightscout (**NSClientV3 → Sincronização**) ficam escondidas enquanto o modo reforçado está ligado; o **AAPS** trata-as como se estivessem desligadas.
- O telefone principal continua a **enviar** todos os seus dados para o Nightscout, incluindo a glicose, e mantém os **websockets** ligados.
- Se o telefone principal recebe a **glicose do Nightscout**, continua a recebê-la de lá.
- Para carregar o histórico num telefone principal **novo**, use **Sincronização completa** no **NSClientV3**: recebe tudo o que está no Nightscout, incluindo os perfis.
- Os [comandos SMS](SMSCommands.md) não são afetados.

Um cliente emparelhado segue o modo reforçado do telefone principal: mantém os websockets ligados e as mesmas definições do Nightscout ficam escondidas nele. Um cliente não emparelhado mantém as suas próprias definições.

O [Modo simples](#preferences-simple-mode) liga sempre o modo reforçado. Para o desligar, saia do Modo simples e desligue **Permitir controlo pelos clientes** no telefone principal.

```{admonition} Why hardened mode
:class: note
Tudo o que um cliente emparelhado envia é assinado, verificado e confirmado pelo telefone principal. Um tratamento escrito no site do Nightscout não é: qualquer pessoa com acesso de escrita ao seu Nightscout o pode adicionar. No modo reforçado, só os comandos assinados podem alterar o que o telefone principal faz.
```

---

(client-master-control-own-token)=
## O token do Nightscout próprio do cliente

Um cliente não precisa de um token de administrador. Só lê o seu Nightscout e envia os seus comandos ao telefone principal através dele; não envia nada por si próprio. Por isso, o telefone principal dá a cada cliente um token do Nightscout próprio, só com estes direitos:

- ler tudo,
- escrever na coleção `settings`, o canal para o telefone principal,
- silenciar os alarmes do Nightscout.

O token pertence a uma função (role) do Nightscout chamada **`aaps-client`**, que o telefone principal cria na primeira vez que precisa dela. Pode ver a função e os tokens (com o nome `aaps-` seguido do nome do cliente) nas **Admin tools** do seu site Nightscout. Se a função for alterada lá, o telefone principal repõe-na da próxima vez que criar um token ou que abrir **Clientes autorizados**.

Como um cliente recebe o seu token:

- **Configurado com um código QR**: o token está no código.
- **Emparelhado com o PIN** (ou emparelhado antes de isto existir): depois do emparelhamento, o telefone principal envia ao cliente o seu próprio token pelo canal emparelhado, encriptado. O cliente verifica primeiro se consegue iniciar sessão com ele e depois usa-o em vez do token que tinha. Isto precisa de um token de administrador no telefone principal; sem ele, o cliente mantém o seu token, e o seu cartão no telefone principal mostra a linha vermelha.

**Um cliente mantém o seu próprio token.** Depois de o telefone principal ver um cliente escrever com o seu próprio token, só aceita os comandos desse cliente com esse token. Um comando escrito com outro token (por exemplo, um token de administrador introduzido mais tarde no cliente, ou o token de outro cliente) é recusado, mesmo que o cliente esteja emparelhado, e o cliente diz "*O telefone principal recusou-o: este telefone escreve no Nightscout com um token que não é o seu*". O seu cartão no telefone principal mostra isto a vermelho. O cliente continua a aparecer como online, para que possa ver o que está errado. Para resolver, remova o cliente no telefone principal e adicione-o outra vez.

O telefone principal nunca apaga nem altera um token do Nightscout que não tenha criado (um com outras funções além de `aaps-client`): esses são seus. Apaga o token próprio de um cliente quando remove o cliente.

---

## Usar o controlo remoto

### Iniciar uma ação a partir do cliente

Use o cliente exatamente como usaria o próprio telefone: abra **Hidratos**, **Insulina**, **Alvo temporário**, **Perfil**, **Cenas**, o painel **Gerir**, etc., e preencha os valores.

Quando confirma, o cliente mostra por instantes **«A contactar o telefone principal…»**, o **telefone principal** calcula e limita a ação, e o cliente mostra depois a **confirmação do próprio telefone principal** — exatamente as linhas, valores e cores que o telefone principal mostraria no seu ecrã. Reveja-as e toque em **OK** para continuar.

![Confirmação de uma cena escrita pelo telefone principal e mostrada no cliente](../images/v4/ClientMaster/confirmation_master_authored.png)

O mesmo se aplica a um simples registo de hidratos de carbono — a quantidade mostrada para confirmação é a que o telefone principal calculou:

![Confirmação de hidratos de carbono escrita pelo telefone principal](../images/v4/ClientMaster/carbs_confirmation_client.png)

Depois de confirmar, o telefone principal executa a ação uma única vez e o resultado aparece no cliente.

### Bólus de insulina a partir de um cliente

Esta é a principal capacidade nova da v4. Um bólus iniciado num cliente é **administrado pelo telefone principal na sua bomba**; o telefone principal limita-o de acordo com as suas próprias restrições, e o cliente mostra o **progresso da administração em tempo real** enquanto decorre (e um alarme se a bomba comunicar uma falha).

```{admonition} Boluses are always confirmed and capped on the master
:class: note
Um cliente nunca decide sozinho a quantidade administrada. O telefone principal volta a calculá-la e limita-a, o utilizador confirma a quantidade escrita pelo telefone principal e só então é administrada.
```

(clientmastercontrol-when-the-master-is-offline)=
### Quando o telefone principal está offline

Se o telefone principal não estiver acessível (o telefone está desligado/em suspensão, não está ligado ao Nightscout ou os websockets estão em baixo), as ações de controlo no cliente são **bloqueadas antes de qualquer envio** e recebe uma mensagem clara. Nada fica aplicado só a meio.

![Mensagem do cliente quando o telefone principal está offline](../images/v4/ClientMaster/master_offline_error.png)

O cliente volta a verificar automaticamente se o telefone principal está acessível e reativa o controlo logo que este volte a estar online.

(clientmastercontrol-wear-os-on-a-client)=

### Wear OS (relógio) num cliente

Um relógio emparelhado com um telefone **cliente** reencaminha as suas ações através do cliente para o telefone principal (relógio → cliente → telefone principal). O relógio mostra as linhas de confirmação do **telefone principal** e o resultado real, tal como o telefone. A configuração do relógio não mudou — veja [Wear OS](../WearOS/WearOsSmartwatch.md).


<!-- 📷 SCREENSHOT NEEDED (optional): watch confirmation screen relayed from the master,
     and/or the "Contacting master" state on the watch. Requires a paired Wear OS device. -->

---

(client-master-config-prefs)=
## Alterar a configuração e as preferências

O emparelhamento faz mais do que reencaminhar ações isoladas — também mantém a **configuração** e muitas **preferências** iguais entre o telefone principal e os seus clientes.

### Configuração (que plugins estão ativos)

Os **plugins** ativos (algoritmo APS, sensibilidade, suavização, …) são escolhidos no **telefone principal** e **copiados** para cada cliente emparelhado. Num cliente, estas seleções estão marcadas com um pequeno **ícone de telemóvel** no ecrã [Configuração](#configuration_sync_icon) — altere-as no telefone principal e os clientes seguem automaticamente, e vice-versa.

Num cliente, o ícone de telemóvel aparece em *Suavização*, *Calibração*, *Deteção de sensibilidade* e *APS* (sincronizados a partir do telefone principal), mas não em *Comunicação*:

![Lista Configuração num cliente — o ícone de telemóvel marca as categorias sincronizadas com o telefone principal](../images/v4/ClientMaster/configuration_client.png)

Os dados de ligação próprios de cada dispositivo — sobretudo o **URL do Nightscout / token de acesso do NSClient** — *não* são sincronizados. Cada telefone tem os seus; num cliente, vêm do código QR do telefone principal ou são definidos por si.

### Perfis

A sua **lista de perfis** também é mantida sincronizada entre o telefone principal e os seus clientes emparelhados. Num cliente emparelhado, **Gerir → Perfil** mostra os mesmos perfis que o telefone principal; pode **editar** um perfil ou **ativar** um, e — como qualquer outro comando — a alteração é enviada para o **telefone principal**, aplicada lá e sincronizada de volta.

Na primeira vez que ativa um perfil num cliente acabado de instalar, o cliente pode mostrar "*Ainda não há nenhuma insulina em uso*" e pedir-lhe para **selecionar a insulina**. Escolha a insulina que está ativa no telefone principal (**Gerir → Definições de insulina** no telefone principal mostra-a).

Num cliente **não emparelhado**, o ecrã Perfil continua disponível, mas **só para consulta**: o cliente mostra os perfis que recebe através do Nightscout (precisa deles para os seus próprios cálculos), mas não há botão para editar ou ativar — não há nenhum telefone principal para onde enviar a alteração.

### Preferências

Uma parte das **preferências** é **bidirecional**: pode alterá-las no **telefone principal ou num cliente emparelhado**, e a alteração é sincronizada para o outro lado. Quando altera uma destas preferências num cliente, ela é enviada para o telefone principal pelo canal assinado, aplicada lá, e o valor que vale é enviado de volta — por isso o que vê no cliente é sempre o que o telefone principal guardou. Se a mesma preferência for alterada em dois dispositivos quase ao mesmo tempo, **ganha a alteração mais recente**. Numa definição com controlo deslizante, o novo valor é enviado quando levanta o dedo.

Dentro das definições, o mesmo pequeno **ícone de telemóvel** marca cada uma das preferências que são sincronizadas. No exemplo abaixo, *Corte da absorção* é sincronizado (ícone de telemóvel), enquanto as definições sem o ícone são locais do dispositivo:

![As definições de um plugin — o ícone de telemóvel marca as preferências sincronizadas](../images/v4/ClientMaster/preferences_synced_icon.png)

```{admonition} The master must be online to change synced settings from a client
:class: note
Como o telefone principal é quem decide o valor guardado, alterar a partir de um cliente um item de configuração controlado pelo telefone principal ou uma preferência bidirecional exige que o telefone principal esteja **acessível**. Quando o telefone principal está offline, esses controlos são desativados no cliente (veja [Quando o telefone principal está offline](#clientmastercontrol-when-the-master-is-offline)).
```

---

(client-master-control-security)=
## Notas de segurança

```{admonition} How the channel is protected
:class: tip
- **Segredo de emparelhamento**: o telefone principal entrega-o ao cliente uma única vez — protegido pelo PIN num documento do Nightscout, ou dentro do código QR — e ambos o guardam encriptado.
- **Um novo segredo logo após o emparelhamento**: a primeira mensagem do cliente depois do emparelhamento inicia uma troca de chaves e, a partir daí, os dois telefones usam um segredo que nunca circulou. Um segredo que alguém possa ter visto (um código QR fotografado, uma oferta com PIN lida do Nightscout) deixa de ter utilidade. Os telefones emparelhados antes de isto existir fazem o mesmo uma vez depois da atualização.
- **Cada comando é assinado** (HMAC). O telefone principal rejeita tudo aquilo cuja assinatura não corresponda a um cliente emparelhado.
- **A repetição é impedida** por um contador crescente próprio de cada cliente, e cada comando **expira** após um curto tempo de vida.
- **Direitos mínimos no Nightscout**: cada cliente tem o seu [próprio token do Nightscout](#client-master-control-own-token), que só pode ler e escrever no canal de controlo pelos clientes. Depois de o cliente o ter usado, o telefone principal só aceita os seus comandos com esse token. Remover o cliente apaga o token.
- **Só alterações assinadas**: no [modo reforçado](#client-master-control-hardened-mode), o telefone principal ignora alterações da terapia escritas diretamente no Nightscout.
- **O telefone principal assina o que partilha**: as definições, a lista de clientes e o sinal «o telefone principal está ativo» que o telefone principal coloca no Nightscout para os seus clientes levam a assinatura do telefone principal. Um cliente só os aceita quando a assinatura é a do telefone principal, por isso o token de outro cliente não os pode alterar. O cliente fica a conhecer a chave do telefone principal quando emparelha, ou pelo código QR, no caso de um telefone que só lê o Nightscout. Um documento recusado aparece no registo do NSClient como "*✕ SETTINGS … refused*".
- **O controlo continua a ser seu**: dê a cada cliente a [função](#client-master-control-roles) de que precisa, revogue um cliente com um toque ou desative tudo com **Permitir controlo pelos clientes**.
```

```{admonition} After restoring a backup
:class: warning
Se um cliente for restaurado a partir de uma cópia de segurança que faz recuar o seu contador de comandos, o telefone principal rejeita os seus comandos seguintes como repetições. Para resolver, basta **desemparelhar e emparelhar outra vez**.
```

---

(client-master-control-troubleshooting)=

## Resolução de Problemas

| Sintoma                                                                                                                     | O que verificar                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| O cliente diz que o **telefone principal está offline**                                                                     | O telefone principal está ativo e com o **AAPS** a funcionar; os dois telefones estão ligados no **NSClientV3**; os **websockets** estão ativados nos dois; é o mesmo site Nightscout.                                                                                                                                                                                                                                  |
| O cliente diz que **não está emparelhado**                                                                                  | Emparelhe outra vez em **Gerir → Emparelhar com o telefone principal**. Confirme que o cliente está **Ativo** na lista **Clientes autorizados** do telefone principal.                                                                                                                                                                                                                                                  |
| Comando **rejeitado** pelo telefone principal                                                                               | O telefone principal volta a validar com base no seu estado atual — por ex., o perfil escolhido já não existe, ou o tipo de bomba não corresponde. Verifique outra vez no telefone principal.                                                                                                                                                                                                                           |
| Os comandos funcionam, mas são **lentos**                                                                                   | Ative os **websockets** nos dois telefones (caso contrário, as apps usam uma consulta periódica mais lenta).                                                                                                                                                                                                                                                                                                            |
| O emparelhamento é cancelado com *«Não foi possível guardar o segredo de emparelhamento»*                                   | Nada foi alterado. Inicie novamente o emparelhamento; se continuar a falhar, reinicie o **AAPSClient** e tente mais uma vez.                                                                                                                                                                                                                                                                                            |
| Não acontece nada depois do emparelhamento                                                                                  | Verifique se **Permitir controlo pelos clientes** está LIGADO no telefone principal e se o telefone principal está ligado ao Nightscout.                                                                                                                                                                                                                                                                                |
| As opções de código QR não podem ser escolhidas na caixa de diálogo **Novo cliente**                                        | A caixa de diálogo explica porquê. *Não é um token de administrador*: dê ao telefone principal um token de administrador do seu Nightscout ou adicione o cliente com o **PIN**. *Não ligado*: espere até o telefone principal mostrar *Ligado* no **NSClientV3**.                                                                                                                                                       |
| *«O Nightscout tem um token com este nome e com outros direitos»*                                                           | Um dos seus próprios tokens do Nightscout chama-se `aaps-` seguido deste nome. Escolha outro nome para o cliente.                                                                                                                                                                                                                                                                                                       |
| *«Já existe na lista um cliente com este nome»*                                                                             | Escolha outro nome ou remova primeiro esse cliente.                                                                                                                                                                                                                                                                                                                                                                     |
| O cliente diz *«Este código é de outra versão do AAPS»*                                                                     | O telefone principal e o cliente têm de usar a **mesma** versão do **AAPS**. Atualize o mais antigo.                                                                                                                                                                                                                                                                                                                    |
| O cliente diz *«Este código expirou»*                                                                                       | Um código que emparelha funciona durante cerca de dois minutos. Adicione outra vez o cliente no telefone principal para obter um novo código.                                                                                                                                                                                                                                                                           |
| O cliente diz *«Este telefone já está emparelhado»*                                                                         | Desemparelhe-o primeiro (**Gerir → Emparelhar com o telefone principal → Desemparelhar**) e depois leia o código outra vez. Um código **só Nightscout** também funciona num telefone emparelhado.                                                                                                                                                                                                                       |
| O cliente diz *«O telefone principal recusou-o: este telefone escreve no Nightscout com um token que não é o seu»*          | O cliente usava antes o seu próprio token do Nightscout e agora escreve com outro, por exemplo depois de ter sido introduzido um token nas definições do Nightscout do cliente. Remova o cliente no telefone principal e adicione-o outra vez (veja [O token do Nightscout próprio do cliente](#client-master-control-own-token)).                                                                                      |
| O registo do NSClient no cliente mostra *"✕ SETTINGS … refused"* e as suas definições deixam de seguir o telefone principal | Outra pessoa escreveu o documento de definições do telefone principal, ou o telefone principal tem uma nova chave (por exemplo, depois de os seus dados terem sido apagados). Um cliente emparelhado recebe sozinho a nova chave da próxima vez que se ligar ao Nightscout. Um telefone que só lê o Nightscout precisa outra vez do código QR do telefone principal (**Só leitura do Nightscout → Mostrar código QR**). |
| O cartão do cliente mostra *«Usa o token do Nightscout …»* a vermelho                                                       | O cliente ainda escreve com um token que tem mais direitos do que precisa. O telefone principal envia-lhe o seu próprio token depois do emparelhamento, mas só se o telefone principal tiver um token de administrador. Verifique o token do telefone principal ou configure outra vez o cliente com um código QR.                                                                                                      |
| Um cliente deixou de poder ler o Nightscout                                                                                 | O seu token foi apagado, por exemplo porque o cliente foi removido no telefone principal. Adicione-o outra vez.                                                                                                                                                                                                                                                                                                         |
| Os tratamentos introduzidos no site do Nightscout não são aplicados                                                         | É o esperado no [modo reforçado](#client-master-control-hardened-mode): introduza-os antes num cliente emparelhado.                                                                                                                                                                                                                                                                                                     |

Para problemas do Nightscout / sincronização, veja primeiro [Resolução de problemas do NSClient](../GettingHelp/TroubleshootingNsClient.md).

---


<!-- =====================================================================
     SCREENSHOTS STILL TO ADD:
       1. (optional) Wear OS confirmation relayed from the master
     Already included:
       - authorized_clients_master.png       (master: Allow client control, hardened mode, client card, + button)
       - authorized_clients_roles.png        (master: client card with roles, Read Nightscout only section)
       - new_client_master.png               (master: New client dialog, three ways and role row)
       - qr_code_master.png                  (master: pairing QR code with countdown, code blurred; console screenshot)
       - aapsclient_wizard_from_master.png   (client: Set up from the master wizard step)
       - pair_with_master_unpaired.png       (client: pairing screen, unpaired PIN entry)
       - pairing_pin_master.png              (master: one-time pairing PIN — expired demo PIN)
       - pair_with_master_client.png         (client: pairing screen, paired state)
       - confirmation_master_authored.png    (client: master-authored scene confirmation)
       - carbs_confirmation_client.png       (client: master-authored carbs confirmation)
       - master_offline_error.png            (client: master-offline message)
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
