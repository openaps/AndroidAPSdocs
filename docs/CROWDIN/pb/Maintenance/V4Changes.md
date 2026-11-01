(v4-changes)=
# O que mudou no AAPS v4

Esta página reúne as principais **mudanças de comportamento** entre o **AAPS** v3 e o v4 — coisas que funcionam de outro jeito, mudaram de lugar ou foram removidas — para que os usuários atuais saibam o que esperar ao atualizar. Veja também as [Notas de versão](ReleaseNotes.md) e o [manual de atualização](UpdateToNewVersion.md).

```{contents} Table of contents
:depth: 2
:local: true
```

---

## O NSClient v1 foi removido

O **AAPS** v3 tinha **dois** plugins de sincronização com o Nightscout:

- **NSClient** — o cliente antigo (a API REST / socket.io antiga do Nightscout, também chamada de *“v1”*), e
- **NSClientV3** — o cliente para a **API v3** mais nova do Nightscout.

No **AAPS** v4, o plugin antigo **NSClient (v1)** foi **removido**. Para sincronizar com o Nightscout, resta apenas o **NSClientV3**.

```{admonition} What you need to do
:class: important
Se você (ou o seu seguidor **AAPSClient**) ainda sincronizava com o plugin antigo **NSClient (v1)**, mude para o **NSClientV3** antes ou depois de atualizar:

- Abra **[Configuração](../SettingUpAaps/ConfigBuilder.md) → Comunicação → NSClientV3**.
- Digite a sua **URL do Nightscout** e um **token de acesso** (o NSClientV3 usa um token de acesso, *não* o antigo API secret — veja [como criar um token](https://nightscout.github.io/nightscout/security/#create-a-token)).
- O seu site do Nightscout precisa ser compatível com a **API v3** (Nightscout 15 ou mais novo).
- Se você usa **websockets**, ative ou desative em **ambos**, no dispositivo principal e no seguidor — nunca em apenas um.
```

Isso afeta apenas a forma como o app se comunica com o Nightscout; os seus dados no Nightscout não mudam.

---

## A navegação inferior: Tratamentos, Cenários e Gerenciar

No **AAPS** v3 você navegava pelo app com uma fileira de **abas** (Visão geral, Ações, Tratamentos, …), e vários recursos eram **plugins** que você ativava no Config Builder (**Ações**, **Automação**, **Alimentos**, …).

No **AAPS** v4 as abas não existem mais, nem a caixa de seleção com o olho no Config Builder, que mostrava um plugin como aba. A tela principal é a **Visão geral**, e uma **navegação inferior** oferece três painéis. **Ações, Automação e Alimentos não são mais plugins** — não há nada para ativar em [Configuração](../SettingUpAaps/ConfigBuilder.md) (o antigo Config Builder, com novo nome); as funções deles agora ficam nesses painéis.

(v4changes-treatments)=
### Tratamentos — inserir e administrar

O painel **Tratamentos** é onde você registra ou administra um tratamento: **Assistente de Bólus**, **Insulina** (bólus manual), **Carboidratos**, **Tratamento** (insulina + carboidratos juntos), **Calibração**, **CGM** (abre o seu app do CGM, quando houver um configurado) e os seus **[Assistentes rápidos](../DailyLifeWithAaps/QuickWizards.md)**.

![O painel inferior Tratamentos](../images/v4/BehavioralChanges/treatments_sheet.png)

Em um **relógio Wear OS**, os mesmos tratamentos são inseridos pelo **menu do AAPS** no relógio (Assistente de Bólus / Calculadora, eCarbs, Tratamento, …):

![As ações de tratamento no menu do AAPS no relógio](../images/v4/BehavioralChanges/treatments_watch.png)

### Cenários

As suas predefinições de situação — veja [Cenários](../DailyLifeWithAaps/Scenes.md).

(v4changes-manage)=
### Gerenciar — gerenciar e ativar

O painel **Gerenciar** é onde você gerencia e ativa todo o resto: **[Perfil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)**, **Configurações de insulina** (as suas configurações de insulina), predefinições do **[Alvo temporário](../DailyLifeWithAaps/TempTargets.md)** e do **[Assistente rápido](../DailyLifeWithAaps/QuickWizards.md)**, **[Cenários](../DailyLifeWithAaps/Scenes.md)**, **Automação**, **Alimentos**, **Rotação do local**, **Bomba**, **[Clientes autorizados](../RemoteFeatures/ClientMasterControl.md)** — e também as ações da bomba que ficavam na aba *Ações* (**Bólus estendido**, **Cancelar basal temporária**, **Purgar/Preencher**, **Inserção do sensor**, **Troca de Bateria da Bomba**).

![O painel inferior Gerenciar](../images/v4/BehavioralChanges/manage_sheet.png)

Todas as suas regras de automação e todos os alimentos cadastrados são mantidos; só mudou a forma de chegar a esses recursos.

(screens-action-tab)=
#### Para onde foi a aba Ações?

O **AAPS** 3.x tinha uma aba "Ações". No **AAPS** 4, as funções dela ficam em outros lugares:

* **Troca de Perfil** e **Porcentagem do perfil**: toque no [nome do perfil](#aaps-screens-profile--target) na tela principal, ou em **Gerenciar → Perfil**. Veja [Alterar a porcentagem do perfil](#ProfileSwitch-change-percentage).
* **Alvo Temporário**: toque no [alvo](#aaps-screens-profile--target) na tela principal, ou em **Gerenciar → Alvo temporário**.
* **Purgar/Preencher**, **Inserção do sensor**, **Verificação BG** e os outros registros do careportal: no [painel de status](#aaps-screens-careportal) expandido, em **Gerenciar** ou como botões do [Acesso rápido](../DailyLifeWithAaps/QuickLaunch.md).
* **Navegador do histórico**, **Estatísticas** (TDD): no **menu** (☰).

```{admonition} Profile switch and profile percentage
:class: note
No **AAPS** v3, um toque longo no nome do perfil abria o diálogo de troca de perfil (porcentagem, duração, alvo temporário de Atividade). No **AAPS** v4, **toque** no nome do perfil (ou em **Gerenciar → Perfil**) e depois toque no botão redondo **▶** no canto inferior direito para abrir as mesmas configurações. Veja [Alterar a porcentagem do perfil](#ProfileSwitch-change-percentage).
```

---

(v4changes-read-only-management)=
## A Proteção das configurações agora também bloqueia as telas de gerenciamento

No **AAPS** v3, a [Proteção das configurações](#Preferences-settings-protection) pedia a sua senha apenas quando você abria as configurações. Mesmo assim, você podia adicionar ou editar perfis na aba **Perfil local** sem a senha.

No **AAPS** v4, a Proteção das configurações também cobre a edição nas telas de gerenciamento: **Perfil**, **Configurações de insulina**, **Alvo temporário** e **Assistente rápido**. Se as suas configurações estiverem bloqueadas, essas telas abrem em modo **somente leitura**:

- Você pode ver os itens e ativá-los com **▶ Ativar** ou usá-los.
- Os botões **Adicionar / Editar / Clonar / Excluir** ficam **ocultos**. Apenas o **✏️ lápis** na barra superior mostra que você pode desbloquear a edição.

![A tela Perfil em modo somente leitura — apenas Ativar embaixo, o lápis na barra superior](../images/v4/Profiles/profile_manage_readonly.png)

```{admonition} What you need to do
:class: important
Para adicionar, editar, clonar ou excluir um item, toque no **✏️ lápis** na barra superior e digite a senha das configurações (ou use a biometria). Os botões aparecem.

Se você não precisa proteger as suas configurações, pode desligar a Proteção das configurações em **Configurações → Proteção**.
```

---

(v4changes-active-insulin)=
## A insulina em uso não pode ser editada

No **AAPS** v3, você podia mudar a DIA da insulina em uso a qualquer momento.

No **AAPS** v4, a insulina marcada como **ATIVO** em **Gerenciar → Configurações de insulina** fica cinza: você não pode editá-la nem excluí-la.

Ao atualizar, o **AAPS** mantém a insulina e a DIA que as suas trocas de perfil do v3 já tinham salvo. Se encontrar registros antigos com a insulina conhecida, mas sem a DIA, ele usa uma DIA padrão para eles e mostra uma mensagem uma vez, por exemplo *Registros antigos não tinham duração da insulina, por isso foi usado 9,0 horas para Lyumjev. Verifique suas configurações de insulina — os registros já migrados não são atualizados depois.* Quando vir essa mensagem, verifique as suas configurações de insulina.

```{admonition} What you need to do
:class: important
Para mudar a DIA ou o pico, adicione uma nova insulina com **+**, ajuste, salve e use **▶ Ativar**. Veja [Trocar a insulina em uso](#Config-Builder-insulin-change-active).
```

---

(v4changes-remote-control)=
## O controle remoto pelo AAPSClient precisa de pareamento

No **AAPS** v3, o **AAPSClient** controlava o **AAPS** gravando tratamentos do careportal no Nightscout, e não podia administrar um bólus.

No **AAPS** v4, o cliente e o telefone principal são **pareados** uma vez, e cada comando é assinado. O telefone principal verifica e confirma cada comando, e agora um cliente também pode administrar um bólus.

- Cada cliente tem uma **[função](#client-master-control-roles)** que limita o que ele pode fazer.
- Enquanto o controle do cliente está ligado, o telefone principal fica no **[modo reforçado](#client-master-control-hardened-mode)**: tratamentos e alterações digitados diretamente no Nightscout (no site, em outros apps) não são mais aplicados.
- Cada cliente recebe um **[token do Nightscout próprio](#client-master-control-own-token)**, apenas com os direitos de que precisa.

```{admonition} What you need to do
:class: important
Pareie cada **AAPSClient** com o telefone principal: veja [Controle dispositivo principal ↔ cliente](#client-master-control). Com um token de administrador no telefone principal, o telefone principal mostra um código QR que configura e pareia o cliente com uma única leitura. Se você costumava inserir tratamentos no site do Nightscout, insira-os agora em um cliente pareado.
```

---

## Dados de glicose duplicados agora mudam o loop para Suspensão por glicose baixa

Quando o **AAPS** recebe a mesma leitura de glicose duas vezes (um sinal de aviso vermelho no atalho da fonte de BG na barra inferior), ele não consegue calcular a sua tendência de forma confiável e por isso para de dar insulina de correção.

No **AAPS** v3, isso acontecia em silêncio, em segundo plano: o seu loop continuava aparecendo como **Loop Fechado**, mesmo sem poder mais corrigir.

No **AAPS** v4, a mudança é visível. Um loop fechado muda para o modo **Suspensão por glicose baixa**, e o diálogo do loop diz o motivo: *"Modo LGS devido a valores duplicados na fonte de glicemia"*. O **AAPS** ainda pode reduzir ou suspender a sua basal para proteger você contra hipoglicemias.

```{admonition} What you need to do
:class: important
Encontre e remova as leituras duplicadas — veja [Sinal de aviso da glicose](#aaps-screens-bg-warning-sign).

Depois que elas forem removidas, o **AAPS** continua em **Suspensão por glicose baixa**. Ele não volta sozinho para **Loop Fechado**: toque e segure o ícone do loop e selecione **Loop Fechado** de novo.
```

---

(v4changes-tidepool)=
## Tidepool: os dados agora aparecem com o nome de dispositivo AAPS

No **AAPS** v3, os dados enviados ao [Tidepool](../SettingUpAaps/Tidepool.md) apareciam no Tidepool com outro nome de dispositivo.

No **AAPS** v4, os dados aparecem com o nome de dispositivo **AAPS**. Depois da atualização, o **AAPS** começa um novo conjunto de dados no Tidepool. Os seus dados antigos continuam no Tidepool com o nome de dispositivo antigo.

```{admonition} What you need to do
:class: important
Normalmente não é preciso fazer nada: os novos dados simplesmente aparecem em **AAPS**.

**Não** use "**Sincronização completa**" enquanto os dados antigos ainda estiverem no Tidepool: os mesmos dados ficariam lá duas vezes. Se você quiser todos os seus dados com o novo nome, use primeiro o botão "**Apagar todos os dados**" na [tela do Tidepool](#tidepool-menu) (ele também apaga os dados antigos enviados pelo **AAPS**) e depois use "**Sincronização completa**". Apenas os dados que ainda estão salvos no **AAPS** no seu telefone podem ser enviados de novo.
```

---


<!-- =====================================================================
     This page is a growing list of v4 behavioral changes.
     Add new changes as their own "## " section, newest grouping as agreed.
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
