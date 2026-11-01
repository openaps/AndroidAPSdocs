(quicklaunch)=
# Acesso rápido (barra de ações rápidas da visão geral)

O **acesso rápido** é a pequena **barra de ações rápidas** que fica na parte de baixo da tela de visão geral do **AAPS**, logo acima da navegação inferior. É uma linha de botões de um toque que você pode personalizar: você decide quais ações ficam ali e em que ordem, assim o que você faz com mais frequência está sempre a um toque na tela principal.

```{contents} Table of contents
:depth: 2
:local: true
```

![A barra de acesso rápido na visão geral](../images/v4/QuickLaunch/quicklaunch_toolbar.png)

---

## Usar a barra

A barra fica na **visão geral**, entre os gráficos e a navegação inferior:

![A barra de acesso rápido no seu lugar na visão geral](../images/v4/QuickLaunch/quicklaunch_overview.png)

- **Toque** em um ícone para executar a ação, exatamente como se você a tivesse aberto na tela normal dela (um bólus ou tratamento continua mostrando a confirmação de sempre antes).
- **Toque e segure** um ícone para ver uma **dica** com o nome da ação e uma descrição curta.
- Se você adicionar **mais botões do que cabem** na tela, os que sobram vão para um **menu extra** (o botão **⋮** no fim da barra).
- Cada ícone mantém a **cor** da sua ação (por exemplo insulina, carboidratos, alvo temporário), assim você o reconhece logo.

```{admonition} The toolbar is always there
:class: note
O último botão é sempre **Configurar acesso rápido** (a engrenagem **⚙️**). Ele não pode ser removido, assim você sempre chega à tela de configuração direto pela barra. Por padrão, a barra tem só dois botões: o **Assistente de Bólus** e esta engrenagem.
```

---

## Configurar o acesso rápido

Toque na engrenagem **⚙️** da barra (ou abra **[Configuração](../SettingUpAaps/ConfigBuilder.md) → … → Configurar acesso rápido**) para abrir a tela **Configurar acesso rápido** (*"Personalizar botões de ações rápidas na visão geral"*).

![Configurar acesso rápido: Ações selecionadas e, abaixo, o catálogo de ações para adicionar](../images/v4/QuickLaunch/quicklaunch_config.png)

A tela tem duas partes:

- **Ações selecionadas** (no topo): os botões que estão agora na sua barra, na ordem da barra.
- Um **catálogo** abaixo: todas as ações que você pode adicionar, agrupadas por categoria. Cada entrada do catálogo tem um botão **➕** para adicioná-la.

### Ações selecionadas: reordenar, editar, remover

Cada ação selecionada tem:

- uma **⠿ alça de arrastar**: toque, segure e arraste para **reordenar** os botões (a ordem aqui é a ordem na barra),
- um botão **−**: **remove** a ação da barra,
- e, só para um atalho de **Perfil**, um botão **✏️** para editar a porcentagem/duração (veja [Atalhos de perfil](#profile-shortcuts)).

As mudanças valem **imediatamente**: não há um botão *Salvar* separado. Uma ação adicionada vai para o fim da barra; reordene a partir daí.

---

## As categorias de ações

O catálogo agrupa tudo o que você pode adicionar nas categorias a seguir, nesta ordem. Categorias que não têm nada para oferecer (por exemplo, se você não tem cenários) simplesmente não aparecem.

### Tratamento

Os diálogos de tratamento e de CGM do dia a dia:

- **Insulina**: dar um bólus manualmente.
- **Carboidratos**: registrar carboidratos sem insulina.
- **Assistente de Bólus**: abrir a calculadora de bólus.
- **Tratamento**: registrar insulina e carboidratos juntos.
- **CGM**: abrir o seu app de CGM (por exemplo, xDrip).
- **Calibração**: calibrar o sensor do CGM.

### CarePortal

Os eventos do CarePortal e os registros de manutenção do dispositivo:

- **Verificação BG**, **Anotação**, **Exercício**, **Pergunta**, **Anúncio**,
- **Inserção do sensor**, **Troca de Bateria da Bomba**, **Alteração do local do cateter**, **Purgar/Preencher**, **Rotação do local**.

**Purgar/Preencher** e **Troca de Bateria da Bomba** só são oferecidos quando a sua bomba usa essas funções. Bombas de patch, por exemplo, preenchem e trocam a bateria nos seus próprios passos de ativação, por isso essas entradas não aparecem para elas (como no painel **Gerenciar**).

![A categoria CarePortal no catálogo](../images/v4/QuickLaunch/quicklaunch_categories_2.png)

São as mesmas entradas que você abriria pelos painéis **[Tratamentos](#v4changes-treatments)** e **[Gerenciar](#v4changes-manage)**: o acesso rápido só coloca na visão geral as que você usa.

### Gerenciar

As telas do painel **[Gerenciar](#v4changes-manage)**, na mesma ordem, para você abrir pela barra a que mais usa:

- **Perfil**, **Configurações de insulina** (gerenciar e ativar configurações de insulina; o nome é diferente de **Insulina** de propósito, porque aquele botão dá um bólus), **Alvo temporário**, **Assistente rápido**, **Cenários**, **Automação**, **Alimentos**,
- **Modo de operação**: fechar ou abrir o loop, suspendê-lo ou desconectar a bomba,
- **Clientes autorizados**: só no dispositivo principal ou em um cliente pareado.

Estes botões abrem a tela; eles não iniciam nada sozinhos. Para iniciar um cenário ou um Assistente rápido com um toque, adicione-o pela categoria **Cenários** ou **Assistente rápido** abaixo.

![A categoria Gerenciar no catálogo](../images/v4/QuickLaunch/quicklaunch_categories_manage.png) ![A categoria Gerenciar, continuação](../images/v4/QuickLaunch/quicklaunch_categories_manage_2.png)

### Assistente rápido

Cada uma das suas predefinições de **[Assistente rápido](QuickWizards.md)** pode ser adicionada como botão, assim uma refeição que se repete fica a um toque na visão geral. O botão tem o nome da predefinição e mostra a quantidade de carboidratos/insulina; tocar nele executa o Assistente rápido com a confirmação de sempre.

Assistentes rápidos configurados para aparecer só no relógio não são oferecidos. Um botão de Assistente rápido na barra segue as mesmas regras do painel **Tratamentos**: ele fica escondido fora do seu [horário válido](#quickwizard_validity) e por pouco tempo depois do uso. Ele continua na configuração da sua barra e volta quando o Assistente rápido pode ser usado de novo.

### Cenários

Cada **[cenário](Scenes.md)** ativado pode ser adicionado como botão. Tocar nele pede confirmação e depois ativa o cenário (o mesmo conjunto de ações que você teria pela tela Cenários). Esta categoria só aparece se você tem pelo menos um cenário.

A dica e o catálogo mostram o mesmo resumo que **Gerenciar → Cenários**, por exemplo *"3 ações, 2 h → Recuperação"*, onde o nome depois da seta é o cenário seguinte.

### Automação

As suas regras de automação de **ação do usuário** (as que você inicia manualmente) podem ser adicionadas como botões. Tocar em uma delas pede confirmação e depois executa as ações dessa regra.

```{admonition} Automation buttons run on the master
:class: note
A automação é executada no **dispositivo principal**, por isso os atalhos de automação só são oferecidos e executados no dispositivo principal. Eles não estão disponíveis em um **[cliente](../RemoteFeatures/ClientMasterControl.md)** pareado.
```

### Predefinições de alvo temporário

Cada uma das suas predefinições de **[Alvo temporário](TempTargets.md)** pode ser adicionada como botão (aparecem o nome, o alvo e a duração, por exemplo *"Comer em breve — 5,0 mmol/l, 45 min"*). Tocar nele pede confirmação e depois inicia esse alvo temporário.

![As categorias dinâmicas: Assistente rápido e Predefinições de alvo temporário (Cenários e Automação aparecem quando você tem algum)](../images/v4/QuickLaunch/quicklaunch_dynamic.png)

(profile-shortcuts)=
### Perfil

Cada **[perfil](ProfileSwitch-ProfilePercentage.md)** pode ser adicionado como um **atalho** que faz uma **troca de perfil** com um toque. Diferente da maioria dos atalhos, um atalho de perfil tem a sua própria **porcentagem** e **duração**, que você define depois de adicioná-lo, com o botão **✏️**:

- **Porcentagem** (30–250%, em passos de 5%): muda a escala do perfil quando ele é aplicado. 100% usa o perfil sem mudanças.
- **Duração** (0–10080 min, ou seja, até 7 dias, em passos de 10 min): quanto tempo a troca dura. **0 = Permanente** (até você trocar de novo).

![Atalhos de perfil e categorias de plugins no catálogo](../images/v4/QuickLaunch/quicklaunch_categories.png)

Assim você pode ter vários botões para o **mesmo** perfil com forças diferentes, por exemplo *"Perfil 100%"* e *"Perfil 70% por 2 h"*, e aplicar qualquer um com um único toque. (Você pode adicionar o mesmo perfil mais de uma vez, com configurações diferentes.)

### Plugins

![Atalhos de plugins no catálogo](../images/v4/QuickLaunch/quicklaunch_categories_6.png)

Por fim, qualquer **plugin ativado** que tenha a sua própria tela pode ser adicionado como atalho para abri-la diretamente. Eles são agrupados por tipo de plugin: **Bomba**, **Fonte de BG**, **APS**, **Loop**, **Detecção de sensibilidade**, **Suavização**, **Calibração**, **Restrições**, **Comunicação** e **Geral**. Assim você pode, por exemplo, ir direto da visão geral para a tela da sua bomba ou do loop.

---

## Acesso rápido e dispositivo principal/cliente

Diferente da maioria das suas configurações, a **barra de acesso rápido é configurada em cada dispositivo**: ela é guardada **localmente e não é sincronizada** entre o seu dispositivo principal e os clientes pareados, então cada dispositivo tem o seu próprio conjunto de botões. (Ela *é* incluída no **backup/exportação** das configurações, então uma restauração a traz de volta no mesmo dispositivo.)

O que cada dispositivo pode colocar na barra ainda depende do que ele tem: Assistentes rápidos, cenários, predefinições de alvo temporário e perfis são todos sincronizados, então o catálogo de um cliente oferece os mesmos itens; você só escolhe os botões em cada dispositivo. Alguns detalhes importantes:

- Botões cujo destino não existe mais (um Assistente rápido, cenário ou predefinição excluído, uma regra desativada) são **ignorados automaticamente**.
- Atalhos de **Automação** só são oferecidos e executados no **dispositivo principal** (a automação é executada no dispositivo principal). Botões de cenário, Assistente rápido, alvo temporário e perfil estão disponíveis em um cliente.
- Quando você toca em um botão em um cliente que precisa ser executado no dispositivo principal (um bólus, alvo temporário, troca de perfil ou cenário), o **dispositivo principal** faz a ação e assina a confirmação. Veja [Controle dispositivo principal ↔ cliente](../RemoteFeatures/ClientMasterControl.md).

---


<!-- =====================================================================
     Screenshots captured from a real master device:
       - quicklaunch_toolbar.png    (cropped close-up of the overview toolbar pill)
       - quicklaunch_overview.png   (full overview showing the toolbar in place)
       - quicklaunch_config.png     (Configure QuickLaunch: Selected actions + Treatment + start of Manage)
       - quicklaunch_dynamic.png    (catalog: Quick Wizard / Scenes / Automation / Temp Target Presets)
       - quicklaunch_categories.png (catalog: Profile shortcuts + plugin categories)
     No QuickLaunch action was actually run (nothing delivered; only scrolled).
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
