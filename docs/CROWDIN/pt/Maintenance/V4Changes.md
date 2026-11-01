(v4-changes)=
# O que mudou no AAPS v4

Esta página reúne as principais **mudanças de comportamento** entre o **AAPS** v3 e o v4 — o que funciona de outra forma, o que mudou de lugar ou foi removido — para que os utilizadores atuais saibam o que esperar ao atualizar. Consulte também as [Notas das Versões](ReleaseNotes.md) e o [manual de atualização](UpdateToNewVersion.md).

```{contents} Table of contents
:depth: 2
:local: true
```

---

## O NSClient v1 foi removido

O **AAPS** v3 tinha **dois** plugins de sincronização com o Nightscout:

- **NSClient** — o cliente antigo (a antiga API REST / socket.io do Nightscout, também chamada *«v1»*), e
- **NSClientV3** — o cliente para a nova **API v3** do Nightscout.

No **AAPS** v4, o plugin antigo **NSClient (v1)** foi **removido**. Para sincronizar com o Nightscout, existe agora apenas o **NSClientV3**.

```{admonition} What you need to do
:class: important
Se o seu AAPS (ou o seu seguidor **AAPSClient**) ainda sincronizava com o antigo plugin **NSClient (v1)**, mude para o **NSClientV3** antes/depois de atualizar:

- Abra **[Configuração](../SettingUpAaps/ConfigBuilder.md) → Comunicação → NSClientV3**.
- Introduza o **URL do Nightscout** e um **token de acesso** (o NSClientV3 usa um token de acesso, *não* o antigo API secret — consulte [criar um token](https://nightscout.github.io/nightscout/security/#create-a-token)).
- O seu site Nightscout tem de suportar a **API v3** (Nightscout 15 ou mais recente).
- Se usar **websockets**, ative-os ou desative-os em **ambos** os telefones, o principal e o seguidor — nunca só num deles.
```

Isto muda apenas a forma como a aplicação comunica com o Nightscout; os seus dados no Nightscout não são alterados.

---

## A navegação inferior: Tratamentos, Cenas e Gerir

No **AAPS** v3, navegava na aplicação através de uma linha de **separadores** (Visão geral, Ações, Tratamentos, …), e várias funções eram **plugins** que se ativavam na Configuração (**Ações**, **Automatização**, **Alimentos**, …).

No **AAPS** v4, os separadores deixaram de existir, tal como a caixa de seleção com o olho na Configuração, que mostrava um plugin como separador. O ecrã principal é a **Visão geral**, e uma **barra de navegação inferior** dá acesso a três painéis. **Ações, Automatização e Alimentos já não são plugins** — não há nada a ativar na [Configuração](../SettingUpAaps/ConfigBuilder.md) (o novo nome do Config Builder); as suas funções estão agora nestes painéis.

(v4changes-treatments)=
### Tratamentos — introduzir e administrar

O painel **Tratamentos** serve para registar ou administrar um tratamento: **Assistente de Bólus**, **Insulina** (bólus manual), **Hidratos**, **Tratamento** (insulina e hidratos juntos), **Calibração**, **CGM** (abre a sua aplicação de CGM, se houver uma configurada) e as suas entradas do **[Assistente Rápido](../DailyLifeWithAaps/QuickWizards.md)**.

![O painel inferior Tratamentos](../images/v4/BehavioralChanges/treatments_sheet.png)

Num **relógio Wear OS**, os mesmos tratamentos são introduzidos a partir do **menu AAPS** do relógio (Assistente de Bólus / Calculadora, eCarbs, Tratamento, …):

![As ações de tratamento no menu AAPS do relógio](../images/v4/BehavioralChanges/treatments_watch.png)

### Cenas

As suas predefinições para situações — consulte [Cenas](../DailyLifeWithAaps/Scenes.md).

(v4changes-manage)=
### Gerir — gerir e ativar

O painel **Gerir** serve para gerir e ativar tudo o resto: **[Perfil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)**, **Definições de insulina** (as suas configurações de insulina), **[Alvo temporário](../DailyLifeWithAaps/TempTargets.md)**, predefinições do **[Assistente Rápido](../DailyLifeWithAaps/QuickWizards.md)**, **[Cenas](../DailyLifeWithAaps/Scenes.md)**, **Automatização**, **Alimentos**, **Rotação dos locais**, **Bomba**, **[Clientes autorizados](../RemoteFeatures/ClientMasterControl.md)** — e também as ações da bomba que estavam no separador *Ações* (**Bólus Prolongado**, **Cancelar Basal Temporária**, **Purgar/Preencher**, **Inserção do sensor**, **Troca Bateria Bomba**).

![O painel inferior Gerir](../images/v4/BehavioralChanges/manage_sheet.png)

Todas as suas regras de automatização e todos os alimentos registados são mantidos; só mudou a forma de chegar a estas funções.

(screens-action-tab)=
#### Para onde foi o separador Ações?

O **AAPS** 3.x tinha um separador «Ações». No **AAPS** 4, as suas funções estão noutros lugares:

* **Troca de Perfil** e **Percentagem do Perfil**: toque no [nome do perfil](#aaps-screens-profile--target) no ecrã principal, ou em **Gerir → Perfil**. Veja [Alterar a Percentagem do Perfil](#ProfileSwitch-change-percentage).
* **Alvo Temporário**: prima o [alvo](#aaps-screens-profile--target) no ecrã principal, ou **Gerir → Alvo temporário**.
* **Purgar/Preencher**, **Inserção do sensor**, **Verificar Glicose** e os outros registos do Careportal: no [painel de estado](#aaps-screens-careportal) expandido, em **Gerir**, ou como botões do [QuickLaunch](../DailyLifeWithAaps/QuickLaunch.md).
* **Navegador do histórico**, **Estatísticas** (TID): no **menu** (☰).

```{admonition} Profile switch and profile percentage
:class: note
No **AAPS** v3, um toque longo no nome do perfil abria a janela da troca de perfil (percentagem, duração, alvo temporário de Atividade). No **AAPS** v4, **toque** no nome do perfil (ou em **Gerir → Perfil**) e depois toque no botão redondo **▶** no canto inferior direito para abrir as mesmas definições. Consulte [Alterar a Percentagem do Perfil](#ProfileSwitch-change-percentage).
```

---

(v4changes-read-only-management)=
## A proteção das definições agora também bloqueia os ecrãs de gestão

No **AAPS** v3, a [Proteção das definições](#Preferences-settings-protection) pedia a sua senha apenas quando abria as definições. Sem ela, ainda podia adicionar ou editar perfis no separador **Perfil local**.

No **AAPS** v4, a Proteção das definições abrange também a edição nos ecrãs de gestão: **Perfil**, **Definições de insulina**, **Alvo temporário** e **Assistente Rápido**. Se as suas definições estiverem bloqueadas, estes ecrãs abrem em modo **só de leitura**:

- Pode ver as entradas e ativá-las com **▶ Ativar** ou usá-las.
- Os botões **Adicionar / Editar / Clonar / Eliminar** ficam **ocultos**. Apenas o **✏️ lápis** na barra superior mostra que pode desbloquear a edição.

![O ecrã Perfil em modo só de leitura — apenas Ativar em baixo, o lápis na barra superior](../images/v4/Profiles/profile_manage_readonly.png)

```{admonition} What you need to do
:class: important
Para adicionar, editar, clonar ou eliminar uma entrada, toque no **✏️ lápis** na barra superior e introduza a senha das definições (ou use a biometria). Os botões aparecem.

Se não precisar de proteger as suas definições, pode desligar a Proteção das definições em **Definições → Proteção**.
```

---

(v4changes-active-insulin)=
## A insulina em uso não pode ser editada

No **AAPS** v3, podia alterar a DAI da insulina em uso a qualquer momento.

No **AAPS** v4, a insulina marcada como **ATIVO** em **Gerir → Definições de insulina** aparece a cinzento: não a pode editar nem eliminar.

Ao atualizar, o **AAPS** mantém a insulina e a DAI que as suas trocas de perfil do v3 já guardaram. Se encontrar registos antigos em que a insulina é conhecida mas a DAI não, usa uma DAI predefinida para eles e mostra uma mensagem uma vez, por exemplo *Os registos antigos não tinham duração da insulina, por isso foram usadas 9,0 horas para Lyumjev. Verifique as definições da insulina — os registos já migrados não são atualizados depois.* Quando vir esta mensagem, verifique as definições da insulina.

```{admonition} What you need to do
:class: important
Para alterar a DAI ou o pico, adicione uma nova insulina com **+**, ajuste-a, guarde-a e use **▶ Ativar**. Consulte [Alterar a insulina em uso](#Config-Builder-insulin-change-active).
```

---

(v4changes-remote-control)=
## O controlo remoto pelo AAPSClient precisa de emparelhamento

No **AAPS** v3, o **AAPSClient** controlava o **AAPS** escrevendo tratamentos do Careportal no Nightscout, e não podia administrar bólus.

No **AAPS** v4, o cliente e o telefone principal são **emparelhados** uma vez, e cada comando é assinado. O telefone principal verifica e confirma cada comando, e um cliente pode agora também administrar um bólus.

- Cada cliente tem uma **[função](#client-master-control-roles)** que limita o que pode fazer.
- Enquanto o controlo por clientes estiver ligado, o telefone principal está em **[modo reforçado](#client-master-control-hardened-mode)**: os tratamentos e as alterações introduzidos diretamente no Nightscout (no site, noutras aplicações) deixam de ser aplicados.
- Cada cliente recebe um **[token do Nightscout próprio](#client-master-control-own-token)**, só com os direitos de que precisa.

```{admonition} What you need to do
:class: important
Emparelhe cada **AAPSClient** com o telefone principal: consulte [Controlo principal ↔ cliente](#client-master-control). Com um token de administrador no telefone principal, este mostra um código QR que configura e emparelha o cliente com uma única leitura. Se costumava introduzir tratamentos no site do Nightscout, introduza-os agora num cliente emparelhado.
```

---

## Dados de glicose duplicados mudam agora o loop para Suspensão Glicose Baixa

Quando o **AAPS** recebe a mesma leitura de glicose duas vezes (um sinal de aviso vermelho no atalho da fonte da glicose na barra inferior), não consegue calcular a sua tendência de forma fiável e por isso deixa de dar insulina de correção.

No **AAPS** v3, isto acontecia em silêncio: o seu loop continuava a mostrar **Loop Fechado**, embora já não pudesse corrigir.

No **AAPS** v4, a mudança é visível. Um loop fechado muda para o modo **Suspensão Glicose Baixa**, e a janela do loop diz-lhe porquê: *«Modo SGB devido a valores duplicados na fonte da glicose»*. O **AAPS** continua a poder reduzir ou suspender a sua basal para o proteger de hipoglicemias.

```{admonition} What you need to do
:class: important
Encontre e remova as leituras duplicadas — consulte [Sinal de aviso da glicose](#aaps-screens-bg-warning-sign).

Depois de removidas, o **AAPS** continua em **Suspensão Glicose Baixa**. Não volta sozinho a **Loop Fechado**: mantenha premido o ícone do loop e selecione novamente **Loop Fechado**.
```

---

(v4changes-tidepool)=
## Tidepool: os dados aparecem agora com o nome de dispositivo AAPS

No **AAPS** v3, os dados enviados para o [Tidepool](../SettingUpAaps/Tidepool.md) apareciam no Tidepool com outro nome de dispositivo.

No **AAPS** v4, os dados aparecem com o nome de dispositivo **AAPS**. Depois da atualização, o **AAPS** inicia um novo conjunto de dados no Tidepool. Os seus dados antigos ficam no Tidepool com o nome de dispositivo antigo.

```{admonition} What you need to do
:class: important
Normalmente, não precisa de fazer nada: os novos dados aparecem simplesmente em **AAPS**.

**Não** execute «**Sincronização completa**» enquanto os dados antigos ainda estiverem no Tidepool: os mesmos dados ficariam lá duas vezes. Se quiser todos os seus dados com o novo nome, use primeiro o botão «**Apagar todos os dados**» no [ecrã do Tidepool](#tidepool-menu) (também apaga os dados antigos enviados pelo **AAPS**) e depois execute «**Sincronização completa**». Só podem ser enviados de novo os dados que ainda estão guardados no **AAPS** no seu telefone.
```

---


<!-- =====================================================================
     This page is a growing list of v4 behavioral changes.
     Add new changes as their own "## " section, newest grouping as agreed.
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
