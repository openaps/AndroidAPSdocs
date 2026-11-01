# Troca de Perfil e Percentagem do Perfil

Esta secção explica o que é uma **Troca de Perfil** e uma **Percentagem do Perfil**. Pode aprender a criar um **Perfil** em [O seu perfil AAPS](#your-aaps-profile-create-and-edit-profiles).

Quando começar a usar o **AAPS**, vai precisar de criar um **Perfil**, perceber como fazer uma **Troca de Perfil** e conhecer o efeito de uma **Percentagem do Perfil** no **AAPS**. As funções de **Troca de Perfil** ou de **Percentagem do Perfil** podem ser especialmente úteis para:

- o ciclo menstrual - pode configurar uma alteração da percentagem de um **Perfil** em **Automatizações**, para que o **AAPS** se adapte às diferentes fases do ciclo hormonal e à resistência à insulina prevista.

- Exercício - pode configurar uma alteração da percentagem de um **Perfil** em **Automatizações** para o exercício, para reduzir a insulina basal.

- Trabalhadores noturnos ou por turnos - pode configurar um deslocamento temporal no **Perfil** para trabalhadores por turnos, alterando o número de horas no **Perfil** conforme o utilizador se deita ou acorda mais tarde/mais cedo.

Why use a **Profile Percentage** rather than a temporary basal adjustment? To be more effective in its application a **Profile Percentage** applies a proportionate reduction or increase across: basal, ISF and I:C. Assim, o **AAPS** faz um cálculo equilibrado ao administrar a insulina do utilizador. Uma redução da basal no **Perfil** do utilizador no **AAPS** traz pouco benefício se o algoritmo continuar a usar os mesmos valores de FSI e IHC.

(ProfileSwitch-change-percentage)=

## Alterar a Percentagem do Perfil a partir do ecrã principal

Precisa de ter pelo menos um **Perfil** guardado. Uma **Percentagem do Perfil** é sempre aplicada através de uma **Troca de Perfil**: ativa novamente um **Perfil**, desta vez com uma percentagem.

```{admonition} Vem do AAPS 3? :class: note Um toque longo no nome do perfil já não abre a janela da troca de perfil. **Toque** no nome do perfil e depois toque no botão redondo **▶** no canto inferior direito: abre as mesmas definições (percentagem, duração, alvo temporário de Atividade).

    <br />1. No ecrã principal, **toque no nome do perfil** (ao lado do ícone da estrela). O [ecrã Perfil](#ProfileSwitch-manage-v4) abre no cartão do **Perfil** ativo, marcado como **ATIVO**.
    
       ![Toque no nome do perfil no ecrã principal para abrir o ecrã Perfil](../images/ProfileSwitch2.png)
    
    2. Para manter o mesmo **Perfil**, deixe o cartão **ATIVO** selecionado. Para mudar também de **Perfil**, deslize para outro cartão.
    3. Toque no botão redondo **▶** (**Ativar**) no canto inferior direito. Abre-se o ecrã **Ativar**.
    4. Defina a **Percentagem** com **−** / **+** (passos de 5 %) ou escreva o valor (30 a 250 %). O campo começa sempre em **100 %**: não mostra a percentagem que está ativa agora. Por exemplo, introduza **80** para 20 % menos insulina ou **120** para 20 % mais.
    5. Defina a **Duração** em minutos:
       * **0** mantém a nova percentagem até fazer outra **Troca de Perfil**;
       * qualquer outro valor termina a troca depois desse tempo, e o **AAPS** volta ao **Perfil** que estava ativo antes.
    
       ![O ecrã Ativar definido para 80 % durante 60 minutos](../images/v4/Profiles/profile_activate_percentage.png)
    
    6. Toque em **▶ Ativar** na parte inferior do ecrã. Verifique o resumo na janela **Troca de Perfil** e toque em **OK**.
    
       ![A janela de confirmação — perfil, percentagem e duração](../images/v4/Profiles/profile_activate_confirm.png)
    
    De volta ao ecrã principal, o nome do perfil mostra a percentagem e o tempo restante, por exemplo *Normal (80%) (59')*, e fica amarelo enquanto está ativa uma troca com duração. Uma estrela marca a troca no gráfico da glicose. Ver [o ecrã principal](#aaps-screens-profile--target).
    
    ![O ecrã principal enquanto está ativa uma troca de perfil de 80 %](../images/v4/Profiles/profile_switch_running.png)
    
    Para **voltar a 100 %** antes do fim, repita os passos e mantenha a **Percentagem** em 100 e a **Duração** em 0.
    
    ```{admonition} Percentagens com um toque
    :class: tip
    Se usa muitas vezes a mesma percentagem (desporto, doença), adicione um [atalho de perfil](#profile-shortcuts) à barra QuickLaunch ou crie uma [cena](Scenes.md). Ambos aplicam um perfil com uma percentagem e uma duração predefinidas num só toque.
    

(ProfileSwitch-manage-v4)=

## Gerir e ativar perfis (Gerir → Perfil)

No **AAPS** v4, os perfis são geridos e ativados a partir do ecrã **Gerir** (navegação inferior) → **Perfil** (*«Gerir e ativar perfis»*).

O ecrã Perfil mostra os seus perfis num **carrossel de cartões deslizantes**. O cartão do perfil ativo está marcado como **ATIVO** e mostra a sua basal diária total (p. ex. *∑ 30,15 U*). Below the selected card you see that profile's details — the **Insulin** type, and the **IC**, **ISF**, **basal** and **target** schedules with graphs.

When a temporary switch is running, the **ACTIVE** card shows its percentage and time shift with the time left, for example *110% +2 h · 2 h 40 min*, above a progress bar. Both are refreshed every 30 seconds. The details below then have two columns: the values of the profile in blue, and the values in use with the percentage in red.

![O ecrã Perfil — carrossel de perfis, detalhes e barra de ações](../images/v4/Profiles/profile_manage.png)

Os botões na parte inferior atuam no perfil **selecionado**: **➕ Adicionar**, **✏️ Editar**, **⧉ Clonar** e **‘️ Eliminar**, e o botão redondo **▶ Ativar** à direita. Para saber como preencher os quatro horários no editor (IHC / FSI / BAS / ALV), consulte [Criar e editar perfis](#your-aaps-profile-create-and-edit-profiles).

**⧉ Clonar** usa o ícone de dois quadrados, muitas vezes usado para *copiar*, mas não há nada para colar: cria a cópia num só passo. Confirme *Clonar o perfil "Normal"?* e é adicionado um novo perfil chamado *Cópia de Normal* no fim do carrossel, já selecionado e pronto para **✏️ Editar** (onde também o pode renomear). Isto não é o mesmo que clonar uma **Troca de Perfil** anterior a partir do histórico de Tratamentos, que cria um novo perfil *com a percentagem e o deslocamento temporal aplicados*. Ver [Guardar uma troca de perfil para usar mais tarde](#ProfileSwitch-keep-for-later).

(ProfileSwitch-read-only-mode)= **Só aparece o botão ▶ Ativar?** As suas definições estão protegidas, por isso o ecrã abre só para leitura. Toque no **✏️ lápis** na barra superior e introduza a senha das definições. Veja [A proteção das definições agora também bloqueia os ecrãs de gestão](#v4changes-read-only-management).

### Reordenar perfis

Se tiver mais do que um perfil, pode escolher a ordem no carrossel: toque no ícone **Reordenar** (⇅, duas setas, para cima e para baixo) na barra superior. O indicador de página é substituído por **botões de mover ◀ / ▶** com a indicação *posição / total* — mova o cartão central para antes ou para depois e confirme com **✓** (ou descarte com **✕**). A nova ordem é guardada uma vez, quando confirma.

![Modo de reordenar — botões de mover e indicação da posição](../images/v4/Profiles/profile_reorder.png)

### Ativar um perfil

Selecione um perfil e toque em **▶ Ativar**. O ecrã **Ativar** permite ajustar a forma como a **Troca de Perfil** é aplicada:

![O ecrã Ativar — percentagem, duração, deslocamento temporal, hora](../images/v4/Profiles/profile_activate.png)

- **Percentagem** (30–250 %, começa sempre em 100 %) — ajusta todo o perfil. 100 % usa o perfil tal como está; por exemplo, 70 % reduz a basal e a dose de insulina calculada (bólus das refeições e correções) em 30 %. Não altera os seus alvos de glicose nem a absorção dos hidratos de carbono. See [Profile Percentage](#ProfileSwitch-profile-percentage) for the full effect.
- **Duração** (0–10080 minutos, ou seja, até 7 dias) — quanto tempo dura a troca. **0 = sem fim** (até fazer outra troca); um valor diferente de zero volta ao perfil anterior quando termina.
- **Alvo Temporário / Atividade** — só aparece quando define uma **Duração** e uma **Percentagem** abaixo de 100 %. Ative-o para iniciar também um [alvo temporário de Atividade](#TempTargets-activity-temp-target) com a mesma duração, como faria antes do exercício.
- **Deslocamento temporal** — mostra *0h*; toque em **Alterar** para mover o horário para a frente ou para trás até 23 horas (útil para trabalho por turnos ou viagens). Ver [Deslocamento temporal](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile).
- **Reutilizar** — aparece quando a troca ativa tem uma percentagem diferente de 100 % ou um deslocamento temporal, por exemplo **Reutilizar 80% 0h**. Toque nele para preencher a mesma percentagem e o mesmo deslocamento temporal, por exemplo para prolongar uma troca que está quase a terminar.
    
    ![O botão Reutilizar enquanto está ativa uma troca de 80 %](../images/v4/Profiles/profile_activate_reuse.png)

- **Hora** — *Agora* por predefinição. Pode escolher outra hora, até 24 horas antes ou depois de agora. Uma troca definida no futuro começa a essa hora; um alvo temporário de Atividade definido com ela também começa a essa hora.
    
    ![Escolher a hora de uma troca de perfil](../images/v4/Profiles/profile_activate_time_picker.png)

- **Notas** — só aparece se a opção [Mostrar notas nas caixas de diálogo](#Preferences-show-notes-field-in-treatments-dialogs) estiver ativada.

Se as taxas basais com a percentagem escolhida não forem compatíveis com a sua bomba, aparece um aviso no topo e o botão **▶ Ativar** fica desativado: escolha outra percentagem.

Toque em **▶ Ativar** e depois em **OK** na janela de confirmação. O perfil ativo passa a ter o distintivo **ATIVO** no seu cartão.

```{admonition} A sua bomba pode arredondar as taxas basais :class: note Cada bomba só consegue administrar taxas basais nos seus próprios passos (por exemplo 0,05 U/h), por isso arredonda as taxas do seu **Perfil**. O **AAPS** usa então a basal que a bomba administra realmente, para que a IA e a TID continuem corretas. Se a bomba administrar um pouco mais ou menos insulina por dia do que o seu **Perfil**, o aviso *"Perfil Basal atualizado na bomba"* indica a diferença, por exemplo *"administra 10,00 U por dia em vez de 10,12 U"*.

Se a bomba indicar uma basal muito diferente do seu **Perfil**, o **AAPS** mantém a basal do **Perfil** e pede-lhe que verifique as taxas basais na bomba.

    <br />```{admonition} Com a percentagem e o deslocamento temporal, um só perfil serve para muitas situações
    :class: note
    Em vez de criar muitos perfis parecidos, mantenha um perfil base e aplique-o com outra **percentagem** ou outro **deslocamento temporal** em situações que se repetem (doença, exercício, viagens). É exatamente isto que as [cenas](Scenes.md) automatizam.
    

Uma troca de perfil não está limitada a este ecrã. A mesma troca também pode ser feita a partir de um **relógio Wear OS**, de um **cliente** emparelhado (ver [Controlo principal ↔ cliente](../RemoteFeatures/ClientMasterControl.md)), de uma **[cena](Scenes.md)** ou de uma regra de **Automatização**.

(ProfileSwitch-profile-percentage)=

## Percentagem do Perfil

É importante que o utilizador compreenda as características essenciais de uma **Percentagem do Perfil**. Um aumento ou uma redução da percentagem numa **Troca de Perfil** sobe ou desce, na mesma percentagem, os parâmetros definidos no **Perfil** do utilizador.

Por exemplo: uma **Troca de Perfil** para 130 % (significa que o utilizador está 30 % mais resistente à insulina) faz com que o **AAPS**

- **aumente** a taxa basal em 30 %; 
- **baixe** o **FSI**: dividindo-o por 1,3;
- **baixe** o **IHC**, dividindo-o por 1,3.

Lembre-se: baixar o **FSI** ou o **IHC** significa um rácio mais forte e mais insulina administrada. Os novos utilizadores do **AAPS** podem facilmente esquecer este facto.

Depois da seleção, o **AAPS** reajusta a taxa basal predefinida, e o **AAPS** (aberto ou fechado) continua a funcionar com base no **Perfil** com a percentagem selecionada.

O efeito de uma Percentagem do **Perfil** está resumido na tabela abaixo:

| Percentagem da  
Troca de Perfil |   Efeito   |     IHC  
g/U     | Example  
15 g |          FSI  
mmol/l/U  
mg/dl/U          | U para baixar  
2 mmol/l  
40 mg/dl |
|:--------------------------------:|:----------:|:-----------------:|:--------------:|:------------------------------------------:|:-----------------------------------:|
|               90 %               | Mais fraco | 5/0,9  
=**5,55** |     2,7 U      | 2,2/0,9  
=**2,4**  
  
40/0,9  
=**44,4** |                0,8 U                |
|            **100 %**             | **Padrão** |       **5**       |    **3 U**     |                **2,2  
40**                |              **0,9** U              |
|              130 %               | Mais forte | 5/1,3  
=**3,85** |     3,9 U      | 2,2/1,3  
=**1,7**  
  
40/1,3  
=**30,8** |                1,2 U                |

(ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile)=

## Deslocamento temporal do perfil circadiano com percentagem

Um «deslocamento temporal» no **Perfil** do utilizador move as definições do **Perfil** ao longo do relógio diário («circadiano») pelo número de horas introduzido. Isto pode ser útil para:

- **night shift or pattern workers**: work night shifts by altering the number of hours to how much later/earlier in the **Profile** the user will go to bed or wake up; 
- **utilizadores que mudam de fuso horário em viagem**; ou
- **crianças com diabetes tipo 1**: que têm uma rotina fixa para a hora de dormir e a resistência à insulina prevista no seu **Perfil**. Se, por qualquer razão, a criança for dormir mais tarde do que o habitual, o cuidador pode aplicar um «deslocamento temporal» ao **Perfil** da criança, para que o **AAPS** reaja à resistência à insulina no período de tempo pretendido.

A questão é sempre esta: as definições de que hora do **Perfil** devem substituir as definições da hora atual? Esta hora tem de ser deslocada x horas. Por isso, tenha atenção às direções descritas no exemplo seguinte:

- Hora atual: 12:00
- **Positivo** deslocamento temporal 
    - 2:00 **+10 h** -> 12:00
    - As definições das 2:00 serão usadas em vez das definições normalmente usadas às 12:00, por causa do deslocamento temporal positivo.
- **Negativo** deslocamento temporal 
    - 22:00 **-10 h** -> 12:00
    - As definições das 22:00 (10 da noite) serão usadas em vez das definições normalmente usadas às 12:00, por causa do deslocamento temporal negativo.

![Direções do deslocamento temporal na troca de perfil](../images/ProfileSwitch_PlusMinus2.png)

This mechanism of taking snapshots of the **Profile** allows a much more precise calculation of the past and the possibility to track **Profile** changes.

(ProfileSwitch-keep-for-later)=

## Guardar uma troca de perfil para usar mais tarde

Depois de fazer uma troca de perfil com percentagem e/ou deslocamento temporal, pode copiar este perfil temporário para um novo perfil.

Para isso, abra o menu (☰) → **Tratamentos** e vá ao separador **Troca de Perfil**; ver [Clonar uma troca de perfil para um novo perfil](#your-aaps-profile-clone-profile-switch).