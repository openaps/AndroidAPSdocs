# Troca de perfil e porcentagem do perfil

Esta seção explica o que é uma **Troca de Perfil** e uma **Porcentagem do perfil**. Você pode aprender a criar um **Perfil** em [Seu perfil do AAPS](#your-aaps-profile-create-and-edit-profiles).

Ao começar a usar o **AAPS**, você precisa criar um **Perfil**, entender como fazer uma **Troca de Perfil** e aprender o efeito de uma **Porcentagem do perfil** no **AAPS**. As funções de **Troca de Perfil** ou **Porcentagem do perfil** podem ser muito úteis para:

- o ciclo menstrual - um ajuste de porcentagem do **Perfil** pode ser configurado em **Automação** para que o **AAPS** se adapte às diferentes fases do ciclo hormonal e à resistência à insulina prevista.

- exercício - um ajuste de porcentagem do **Perfil** pode ser configurado em **Automação** para o exercício, para reduzir a basal.

- trabalho noturno ou em turnos - um deslocamento de tempo no **Perfil** pode ser configurado para quem trabalha em turnos. O número de horas no **Perfil** é alterado para o quanto mais tarde/mais cedo a pessoa vai dormir ou acorda.

Por que usar uma **Porcentagem do perfil** em vez de um ajuste temporário da basal? Para ser mais eficaz, uma **Porcentagem do perfil** aplica uma redução ou um aumento proporcional em: basal, ISF e I:C. Assim o **AAPS** calcula de forma equilibrada a insulina administrada ao usuário. Reduzir só a basal no **Perfil** do **AAPS** ajuda pouco se o algoritmo continua usando as mesmas relações de ISF e I:C.

(ProfileSwitch-change-percentage)=

## Alterar a porcentagem do perfil na tela principal

Você precisa ter pelo menos um **Perfil** salvo. Uma **Porcentagem do perfil** é sempre aplicada por uma **Troca de Perfil**: você ativa um **Perfil** de novo, desta vez com uma porcentagem.

```{admonition} Vindo do AAPS 3? :class: note Um toque longo no nome do perfil não abre mais o diálogo de troca de perfil. **Toque** no nome do perfil e depois no botão redondo **▶** no canto inferior direito: ele abre as mesmas configurações (porcentagem, duração, alvo temporário de atividade).

    <br />1. Na tela principal, **toque no nome do perfil** (ao lado do ícone de estrela). A [tela Perfil](#ProfileSwitch-manage-v4) abre no cartão do **Perfil** em uso, marcado como **ATIVO**.
    
       ![Toque no nome do perfil na tela principal para abrir a tela Perfil](../images/ProfileSwitch2.png)
    
    2. Para manter o mesmo **Perfil**, deixe o cartão **ATIVO** selecionado. Para trocar de **Perfil** ao mesmo tempo, deslize para outro cartão.
    3. Toque no botão redondo **▶** (**Ativar**) no canto inferior direito. A tela **Ativar** abre.
    4. Defina a **Porcentagem** com **−** / **+** (passos de 5%), ou digite o valor (30 a 250%). O campo sempre começa em **100%**: ele não mostra a porcentagem que está em uso agora. Por exemplo, digite **80** para 20% menos insulina, ou **120** para 20% mais.
    5. Defina a **Duração** em minutos:
       * **0** mantém a nova porcentagem até você fazer outra **Troca de Perfil**;
       * qualquer outro valor termina a troca depois desse tempo, e o **AAPS** volta ao **Perfil** que estava em uso antes.
    
       ![A tela Ativar com 80% por 60 minutos](../images/v4/Profiles/profile_activate_percentage.png)
    
    6. Toque em **▶ Ativar** na parte de baixo da tela. Confira o resumo no diálogo **Troca de Perfil** e toque em **OK**.
    
       ![O diálogo de confirmação: perfil, porcentagem e duração](../images/v4/Profiles/profile_activate_confirm.png)
    
    De volta à tela principal, o nome do perfil mostra a porcentagem e o tempo restante, por exemplo *Normal (80%) (59')*, e fica amarelo enquanto uma troca com duração está em andamento. Uma estrela marca a troca no gráfico de glicose. Veja [a tela principal](#aaps-screens-profile--target).
    
    ![A tela principal durante uma troca de perfil de 80%](../images/v4/Profiles/profile_switch_running.png)
    
    Para **voltar a 100%** antes do fim, repita os passos e deixe a **Porcentagem** em 100 e a **Duração** em 0.
    
    ```{admonition} Porcentagens com um toque
    :class: tip
    Se você usa muitas vezes a mesma porcentagem (esporte, doença), adicione um [atalho de perfil](#profile-shortcuts) à barra de acesso rápido, ou crie um [cenário](Scenes.md). Os dois aplicam um perfil com porcentagem e duração predefinidas com um toque.
    

(ProfileSwitch-manage-v4)=

## Gerenciar e ativar perfis (Gerenciar → Perfil)

No **AAPS** v4, os perfis são gerenciados e ativados na tela **Gerenciar** (navegação inferior) → **Perfil** (*"Gerenciar e ativar perfis"*).

A tela Perfil mostra seus perfis como um **carrossel de cartões** que você desliza. O cartão do perfil em uso está marcado como **ATIVO** e mostra a basal diária total (por exemplo, *∑ 30,15 U*). Abaixo do cartão selecionado, você vê os detalhes desse perfil: **Unidades**, tipo de **Insulina** e os horários de **IC**, **ISF**, **basal** e **alvo**, com gráficos.

![A tela Perfil: carrossel de perfis, detalhes e barra de ações](../images/v4/Profiles/profile_manage.png)

Os botões na parte de baixo agem sobre o perfil **selecionado**: **➕ Adicionar**, **✏️ Editar**, **⧉ Clonar** e **‘️ Excluir**, e o botão redondo **▶ Ativar** à direita. Para saber como preencher os quatro horários no editor (IC / ISF / BAS / ALV), veja [Criar e editar perfis](#your-aaps-profile-create-and-edit-profiles).

**⧉ Clonar** usa o ícone de dois quadrados, muitas vezes usado para *copiar*, mas não há nada para colar: ele cria a cópia em um passo. Confirme *Clonar perfil "Normal"?* e um novo perfil chamado *Cópia de Normal* é adicionado no fim do carrossel e selecionado, pronto para **✏️ Editar** (onde você também pode mudar o nome). Isto não é o mesmo que clonar uma **Troca de Perfil** antiga no Histórico de tratamentos, que cria um novo perfil *com a porcentagem e o deslocamento de tempo aplicados*. Veja [Guardar uma troca de perfil para usar depois](#ProfileSwitch-keep-for-later).

(ProfileSwitch-read-only-mode)= **Só aparece o botão ▶ Ativar?** Suas configurações estão protegidas, por isso a tela abre em modo somente leitura. Toque no **✏️ lápis** na barra superior e digite sua senha das configurações. Veja [A proteção das configurações agora também bloqueia as telas de gerenciamento](#v4changes-read-only-management).

### Reordenar perfis

Se você tem mais de um perfil, pode escolher a ordem deles no carrossel: toque no ícone **Reordenar** (⇅, duas setas para cima e para baixo) na barra superior. O indicador de página é trocado por **◀ / ▶ botões de mover** com a indicação *posição / total*. Mova o cartão do centro para antes ou para depois e confirme com **✓** (ou descarte com **✕**). A nova ordem é salva uma vez, quando você confirma.

![Modo de reordenar: botões de mover e indicação da posição](../images/v4/Profiles/profile_reorder.png)

### Ativar um perfil

Selecione um perfil e toque em **▶ Ativar**. A tela **Ativar** permite ajustar como a **Troca de Perfil** é aplicada:

![A tela Ativar: porcentagem, duração, deslocamento de tempo, hora](../images/v4/Profiles/profile_activate.png)

- **Porcentagem** (30–250%, começa sempre em 100%): muda a escala de todo o perfil. 100% usa o perfil sem mudanças; por exemplo, 70% reduz em 30% a basal e a dose de insulina calculada (bólus de refeição e correções). Não muda os seus alvos de glicose nem a absorção de carboidratos. Veja [Porcentagem do perfil](#profile-percentage) para o efeito completo.
- **Duração** (0–10080 minutos, ou seja, até 7 dias): quanto tempo a troca dura. **0 = sem limite** (até você trocar de novo); um valor diferente de zero volta ao perfil anterior quando termina.
- **Alvo Temporário / Atividades**: aparece só quando você define uma **Duração** e uma **Porcentagem** abaixo de 100%. Ative para iniciar também um [alvo temporário de atividade](#TempTargets-activity-temp-target) com a mesma duração, como você faria antes de exercícios.
- **Deslocamento de tempo**: mostra *0h*; toque em **Alterar** para mover os horários para frente ou para trás em até 23 horas (útil para trabalho em turnos ou viagens). Veja [Deslocamento de tempo](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile).
- **Reutilizar**: aparece quando a troca em uso tem uma porcentagem diferente de 100% ou um deslocamento de tempo, por exemplo **Reutilizar 80% 0h**. Toque nele para preencher a mesma porcentagem e o mesmo deslocamento de tempo, por exemplo para prolongar uma troca que está para terminar.
    
    ![O botão Reutilizar durante uma troca de 80%](../images/v4/Profiles/profile_activate_reuse.png)

- **Hora**: *Agora* por padrão. Você pode escolher outra hora, até 24 horas antes ou depois de agora. Uma troca definida para o futuro começa nessa hora; um alvo temporário de atividade definido com ela também começa nessa hora.
    
    ![Escolher a hora de uma troca de perfil](../images/v4/Profiles/profile_activate_time_picker.png)

- **Notas**: só aparece se [Mostrar notas nos diálogos](#Preferences-show-notes-field-in-treatments-dialogs) estiver ativado.

Se as taxas basais com a porcentagem escolhida não forem compatíveis com a sua bomba, um aviso aparece no topo e **▶ Ativar** fica desativado: escolha outra porcentagem.

Toque em **▶ Ativar** e depois em **OK** no diálogo de confirmação. O perfil em uso passa a ter o selo **ATIVO** no seu cartão.

```{admonition} Sua bomba pode arredondar as taxas basais :class: note Cada bomba só pode dar taxas basais nos seus próprios passos (por exemplo, 0,05 U/h), por isso ela arredonda as taxas do seu **Perfil**. O **AAPS** então usa a basal que a bomba realmente dá, assim o IOB e o TDD continuam corretos. Se a bomba der um pouco mais ou menos insulina por dia do que o seu **Perfil**, o aviso *"Perfil Basal atualizado na bomba"* informa quanto, por exemplo *"ela dá 10,00 U por dia em vez de 10,12 U"*.

Se a bomba informar uma basal muito diferente do seu **Perfil**, o **AAPS** mantém a basal do **Perfil** e pede para você verificar as taxas basais na bomba.

    <br />```{admonition} Com porcentagem e deslocamento de tempo, um perfil serve para muitos casos
    :class: note
    Em vez de criar muitos perfis parecidos, mantenha um perfil base e aplique-o com outra **porcentagem** ou outro **deslocamento de tempo** em situações que se repetem (doença, exercício, viagem). É exatamente isso que os [cenários](Scenes.md) automatizam.
    

Uma troca de perfil não é feita só nesta tela. A mesma troca também pode ser iniciada por um **relógio Wear OS**, um **cliente** pareado (veja [Controle dispositivo principal ↔ cliente](../RemoteFeatures/ClientMasterControl.md)), um **[cenário](Scenes.md)** ou uma regra de **Automação**.

## Porcentagem do perfil

É importante que o usuário entenda as principais características de uma **Porcentagem do perfil**. Um aumento ou uma redução em porcentagem aplicado a uma **Troca de Perfil** aumenta ou diminui na mesma porcentagem os parâmetros definidos no **Perfil** do usuário.

Por exemplo: uma **Troca de Perfil** para 130% (o usuário está 30% mais resistente à insulina) faz o **AAPS**

- **aumentar** a taxa basal em 30%; 
- **baixar** o **ISF**: dividindo por 1,3;
- **baixar** o **I:C** dividindo por 1,3.

Lembre-se: baixar o **ISF** ou o **I:C** significa uma relação mais forte e mais insulina administrada. Usuários novos do **AAPS** podem esquecer isso facilmente.

Depois da seleção, o **AAPS** ajusta a taxa basal padrão, e o **AAPS** (aberto ou fechado) continua trabalhando com base no **Perfil** com a porcentagem selecionada.

O efeito de uma porcentagem do **Perfil** está resumido na tabela abaixo:

| Troca de Perfil  
Porcentagem |   Efeito   |     I:C  
g/U     | exemplo  
15g |          ISF  
mmol/l/U  
mg/dl/U          | U para baixar  
2 mmol/l  
40 mg/dl |
|:-----------------------------:|:----------:|:-----------------:|:-------------:|:------------------------------------------:|:-----------------------------------:|
|              90%              | Mais fraco | 5/0,9  
=**5,55** |     2,7 U     | 2,2/0,9  
=**2,4**  
  
40/0,9  
=**44,4** |                0,8 U                |
|           **100%**            | **Padrão** |       **5**       |    **3 U**    |                **2,2  
40**                |              **0,9** U              |
|             130%              | Mais forte | 5/1,3  
=**3,85** |     3,9 U     | 2,2/1,3  
=**1,7**  
  
40/1,3  
=**30,8** |                1,2 U                |

(ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile)=

## Deslocamento de tempo do perfil circadiano com porcentagem

Um "deslocamento de tempo" no **Perfil** do usuário move as configurações do **Perfil** ao longo do relógio diário ("circadiano") pelo número de horas informado. Isso pode ajudar:

- **quem trabalha à noite ou em turnos**: para turnos noturnos, altere o número de horas no **Perfil** para o quanto mais tarde/mais cedo a pessoa vai dormir ou acorda; 
- **usuários que mudam de fuso horário em viagens**; ou
- **crianças com diabetes tipo 1**: que têm uma rotina fixa para dormir e a resistência à insulina já considerada no seu **Perfil**. Se por algum motivo a criança for dormir mais tarde, o cuidador pode aplicar um "deslocamento de tempo" ao **Perfil** da criança, para que o **AAPS** reaja à resistência à insulina no período desejado.

A questão é sempre: as configurações do **Perfil** de qual hora devem substituir as configurações da hora atual. Este horário deve ser deslocado em x horas. Por isso, preste atenção às direções, como mostra o exemplo a seguir:

- Hora atual: 12:00
- **Positivo** deslocamento de tempo 
    - 2:00 **+10 h** -> 12:00
    - Por causa do deslocamento de tempo positivo, as configurações das 2:00 são usadas no lugar das configurações normais das 12:00.
- **Negativo** deslocamento de tempo 
    - 22:00 **-10 h** -> 12:00
    - Por causa do deslocamento de tempo negativo, as configurações das 22:00 são usadas no lugar das configurações normais das 12:00.

![Direções do deslocamento de tempo na troca de perfil](../images/ProfileSwitch_PlusMinus2.png)

Este mecanismo de guardar "fotos" do **Perfil** permite um cálculo muito mais preciso do passado e a possibilidade de acompanhar as mudanças do **Perfil**.

(ProfileSwitch-keep-for-later)=

## Guardar uma troca de perfil para usar depois

Depois de fazer uma troca de perfil com porcentagem e/ou deslocamento de tempo, você pode copiar este perfil temporário para um novo perfil.

Para isso, abra o menu (☰) → **Tratamentos** e vá para a aba **Troca de Perfil**, veja [Clonar uma troca de perfil para um novo perfil](#your-aaps-profile-clone-profile-switch).