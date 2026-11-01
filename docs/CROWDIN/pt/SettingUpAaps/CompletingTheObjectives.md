# Concluir os objetivos

O **AAPS** tem uma série de **Objetivos** que têm de ser concluídos, para ajudar o utilizador a avançar do loop aberto básico até ao loop fechado híbrido e a todas as funções do **AAPS**. Concluir os **Objetivos** serve para garantir que:

* Configurou tudo corretamente no seu **AAPS**;
* Aprendeu as funções essenciais do **AAPS**; e
* Tem uma compreensão básica do que o seu sistema consegue fazer, para ganhar confiança ao usar o **AAPS**.

Quando o **AAPS** é instalado pela primeira vez, cada objetivo tem de ser concluído antes de passar ao seguinte. Novas funções vão sendo desbloqueadas à medida que avança em cada **Objetivo**.

Os **Objetivos 1 a 8** guiam-no desde a configuração do **AAPS** no seu smartphone até ao loop fechado híbrido «básico». This will take about 6 weeks to complete. Pode avançar até ao **Objetivo 5** com uma bomba virtual (e, entretanto, usar outro método para administrar a insulina). Os **Objetivos 9 e 10** foram feitos para testar funções mais avançadas do **AAPS**, com o objetivo de controlar melhor a sua diabetes, e vão levar até 3 meses a concluir, talvez mais. Encontra mais detalhes sobre uma estimativa do tempo necessário aqui: [Quanto tempo vai demorar?](#preparing-how-long-will-it-take)

Além de avançar nos **Objetivos**, se for preciso, também pode apagar o seu progresso e [voltar a um objetivo anterior](#go-back-in-objectives).

## Backup your settings

```{admonition} Note
:class: note

Exporting your **AAPS** settings is recommended after completing each **Objective**!
```

Recomenda-se vivamente que [exporte as suas definições](../Maintenance/ExportImportSettings.md) depois de concluir cada objetivo, para não perder nenhum progresso feito no **AAPS**. Esta exportação cria um **ficheiro de definições** (.json), do qual deve guardar uma cópia de segurança em um ou mais locais seguros (por exemplo, Google Drive, disco rígido, anexo de email _etc._). Assim garante que todo o progresso feito no **AAPS** fica guardado. Se perder o telefone ou apagar o seu progresso por engano, pode carregar de novo o ficheiro json no **AAPS**, importando um ficheiro de definições recente. Também precisa de uma cópia de segurança do **ficheiro de definições** se, por qualquer razão, precisar de um novo smartphone para o **AAPS** (telefone novo, perdido ou avariado _etc._)

O ficheiro de **definições** guarda não só o seu progresso nos **Objetivos**, mas também todas as suas definições do **AAPS**, como o **bólus máximo** _etc._

Se não tiver uma cópia de segurança das suas definições e acontecer alguma coisa ao smartphone do **AAPS**, terá de recomeçar os **Objetivos** desde o início. Avançar nos **Objetivos** leva tempo, e ter de os concluir outra vez, por exemplo porque perdeu o smartphone, é uma situação que é melhor evitar.

(objectives-objective1)=
## Objective 1: Setting up visualization and monitoring, analyzing basals and ratios

O **Objetivo 1** pede ao utilizador que faça a configuração técnica básica no **AAPS**. No progress can be made until this step has been completed.

- Selecione o CGM/FGM correto em [Configuração → Fonte da Glicose](#Config-Builder-bg-source). Veja [Fonte da Glicose](../Getting-Started/CompatiblesCgms.md) para mais informações.
- Selecione a bomba correta em [Configuração → Bomba](#Config-Builder-pump) para garantir que a sua bomba consegue comunicar com o **AAPS**. Selecione **bomba virtual** se usa um modelo de bomba sem driver do **AAPS** para o loop, ou se quer fazer os primeiros **Objetivos** enquanto usa outro sistema para administrar a insulina. Veja [bomba de insulina](../Getting-Started/CompatiblePumps.md) para mais informações.
- If using Nightscout:
  - Siga as instruções da página [Nightscout](../SettingUpAaps/Nightscout.md) para garantir que o **Nightscout** consegue receber e mostrar os dados do **AAPS**.
  - Atenção: o URL no **NSClientV3** tem de estar **_sem_ "/api/v1/"** no fim - veja [Definições → NSClientV3](#Preferences-nsclient).
- If using Tidepool:
  - Siga as instruções da página [Tidepool](../SettingUpAaps/Tidepool.md) para garantir que o **Tidepool** consegue receber e mostrar os dados do **AAPS**.

Nota - *Pode ter de esperar pela próxima leitura de glicose do sensor antes de o **AAPS** a reconhecer.*

(objectives-objective2)=
## Objetivo 2: Aprender a controlar o AAPS

O **Objetivo 2** pede que execute várias «tarefas», como mostra a captura de ecrã abaixo. Cada tarefa mostra o seu estado (**1**): o texto laranja «**Não concluído ainda**» muda para «**Concluído, muito bem!**» logo que o **AAPS** regista a ação. Toque em **Dica** (**2**) por baixo de uma tarefa para abrir a documentação relacionada, caso ainda não conheça uma certa ação.

![Captura de ecrã do Objetivo 2](../images/Objective2_V2_5.png)

As tarefas para concluir o **Objetivo 2** são:
- Defina o seu **Perfil** a 90% durante 10 min.
  - _Dica_: toque no nome do seu perfil no ecrã principal para abrir o ecrã **Perfil**, depois use o botão **Ativar** (▶) e defina a percentagem e a duração. Mais informações em [Troca de Perfil e Percentagem do Perfil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md).
  - _Nota_: o **AAPS** não aceita taxas basais abaixo de 0,05 U/h. Se o seu **Perfil** tiver taxas de 0,06 U/h ou menos, terá de criar um **Perfil** temporário com taxas basais mais altas antes de concluir esta tarefa. Volte ao seu **Perfil** normal depois de concluir esta tarefa.
- Simule «tomar um duche» [desligando a sua bomba](#AapsScreens-loop-status) no **AAPS** durante 1 h.
  - _Dica_: toque no ícone do loop no ecrã principal para abrir a janela do Loop e escolha uma duração em **Desligar bomba**.
- End "taking a shower" by reconnecting your pump.
  - _Dica_: toque no ícone «desligada» para abrir outra vez a janela do Loop e escolha **Religar bomba**.
- Defina um [**Alvo temporário**](../DailyLifeWithAaps/TempTargets.md) personalizado com duração de 10 min.
  - _Dica_: toque no intervalo alvo no ecrã principal para abrir o ecrã do alvo temporário.
- Mostre o conteúdo do plugin **Loop**.
  - _Dica_: abra **Configuração → Loop** e toque em «**Abrir plugin**».
- Use o deslocamento ou o zoom no gráfico de glicose para ver períodos de tempo maiores ou menores.


(objectives-objective3)=
## Objetivo 3: Prove o seu conhecimento

O **Objetivo 3** pede ao utilizador que passe um exame de escolha múltipla, feito para testar os seus conhecimentos sobre o **AAPS**.

Alguns utilizadores acham que o **Objetivo 3** é o mais difícil de concluir. Leia a documentação do **AAPS** ao mesmo tempo que responde às perguntas. Se, depois de pesquisar na documentação do **AAPS**, continuar mesmo bloqueado, pesquise «Objective 3» no grupo do [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) ou do [Discord](https://discord.gg/4fQUWHZ4Mw) (é provável que a sua pergunta já tenha sido feita antes - e respondida pelo grupo). Estes grupos podem dar dicas amigáveis ou indicar a parte certa da documentação do **AAPS**.

In the meantime :
- Para reduzir o número de notificações / decisões que lhe são pedidas (taxas basais temporárias) em loop aberto, defina no seu **Perfil** um intervalo alvo largo, _por exemplo,_ 90 - 150 mg/dl ou 5,0 - 8,5 mmol/l.
- You might want to set a wider upper limit, or even disable Open Loop, at night.

Para avançar no **Objetivo 3**, toque numa linha de pergunta para a abrir. Please read each question carefully and select your answer(s).

For each question, there may be more than one answer that is correct! If an incorrect answer is selected, the question will be time-locked for 1 hour before you can go back and answer the question again. Be aware that the order of the answers may have changed when you next try to answer, this is to make sure you read them carefully and really understand the validity (or not) of each response.

```{admonition} __What happens if new question(s) are added to an Objective when I update to a newer version of AAPS?__
:class: note
De tempos a tempos, são adicionadas ao **AAPS** novas funções que podem obrigar a adicionar uma nova pergunta aos **Objetivos**, sobretudo ao **Objetivo 3**. Por isso, qualquer pergunta nova adicionada ao **Objetivo 3** aparece como «não concluída», porque o **AAPS** vai pedir-lhe que a responda. Não se preocupe: como cada **Objetivo** é independente, **não perde as funções do AAPS que já tem**, desde que os outros **Objetivos** continuem concluídos.
```

## Objetivo 4: A iniciar em loop aberto

O **Objetivo 4** serve para perceber com que frequência o **AAPS** avalia a taxa basal do utilizador em relação aos valores de glicose e recomenda ajustes temporários da taxa basal. Neste **Objetivo**, vai ativar o loop aberto pela primeira vez e aceitar 20 alterações propostas da taxa basal temporária e, se for preciso, aplicá-las manualmente na sua bomba. Também vai observar o efeito dos [**Alvos temporários**](../DailyLifeWithAaps/TempTargets.md). Se ainda não sabe definir uma alteração temporária da taxa basal no **AAPS**, veja as ações da bomba no painel **Gerir** ([Para onde foi o separador Ações?](#screens-action-tab)).

Tempo mínimo para concluir este objetivo: **7 dias**. This is a mandatory wait time. Não é possível passar ao **Objetivo** seguinte antes disso, mesmo que todas as alterações da taxa basal já tenham sido executadas.

- Selecione o loop aberto: toque no [ícone do Loop](#AapsScreens-loop-status) no ecrã principal e escolha **Loop aberto** como modo de funcionamento.
- Manually enact at least 20 of the temporary basal rate suggestions over a period of 7 days; key them into your (physical) pump and confirm in AAPS that you have accepted them. Confirme que estes ajustes da taxa basal aparecem no **AAPS** e no **Nightscout**.
- Use [**Alvos temporários**](../DailyLifeWithAaps/TempTargets.md) quando for preciso. After treating a hypo, use the predefined "hypo temp target" to prevent the system from overcorrecting upon the bounce back.
- Se nesta altura ainda estiver no [Modo simples](#preferences-simple-mode), provavelmente é uma boa altura para o desligar.

Para reduzir o número de alterações da taxa basal propostas em loop aberto, também pode usar as dicas descritas no [**Objetivo 3**](#objective-3-prove-your-knowledge). Além disso, pode alterar a percentagem mínima das alterações recomendadas da taxa basal com a definição «**Alteração mínima em modo aberto**» em **Definições → Loop**. The higher the value, the fewer change notifications you will receive.

![Alteração mínima em modo aberto](../images/OpenLoop_MinimalRequestChange2.png)

```{admonition} Note
:class: note

Não precisa de executar todas as recomendações do sistema!
```
(objectives-objective5)=
## Objetivo 5: Compreender o seu loop aberto, incluindo as recomendações de basais temporárias

No **Objetivo 5** vai começar a perceber como são calculadas as recomendações de basal temporária. Isto inclui a [lógica de cálculo da basal](#aaps-screens-how-predictions-become-a-dosing-decision), analisar o efeito observando as [linhas de previsão na **Visão geral do AAPS**](#aaps-screens-prediction-lines) (ou no Nightscout) e ver os cálculos detalhados no ecrã do plugin **OpenAPS SMB** (**Configuração → APS → Abrir plugin**).

Tempo estimado para concluir este objetivo: **7 dias**.

Este **Objetivo** pede que determine e defina o seu valor de «Taxa basal máxima» (max-basal), como descrito em [Funções do OpenAPS](#Open-APS-features-max-u-h-a-temp-basal-can-be-set-to). Este valor pode ser definido em [Definições → OpenAPS SMB](#Preferences-openaps-smb-settings). No [modo simples](#preferences-simple-mode), o **AAPS** define este valor automaticamente e não precisa de o alterar. Se ainda usa uma bomba virtual, confirme que esta definição de segurança está definida no **AAPS** e na sua bomba de insulina.

Pode querer definir o [alvo de glicose do **Perfil**](#profile-glucose-targets) mais alto do que o habitual, até se sentir à vontade com os cálculos e as definições do **AAPS**. Pode experimentar ajustar o **alvo de glicose** do seu **Perfil** para um intervalo mais estreito (por exemplo, com 1 mmol/l [20 mg/dl] de largura ou menos) e observar o comportamento que resulta.

![Sinal de stop](../images/sign_stop.png)

```{admonition} If you have been using a virtual pump, change to a real insulin pump now!
:class: note

Se está em loop aberto com uma bomba virtual, **pare aqui**. Só toque em «Verificar» no fim deste **Objetivo** quando já tiver mudado para uma bomba «real», que administra insulina.

```

![em branco](../images/blank.png)

(objectives-objective6)=
## Objective 6: Starting to close the loop with Low Glucose Suspend

![Sinal de aviso](../images/sign_warning.png)
```{admonition} Closed loop will not correct high **BG** values in **Objective 6** as it is limited to **Low Glucose Suspend** only!
:class: note
Continua a ter de corrigir sozinho os valores altos de glicose (manualmente, com correções pela bomba ou pela caneta)!
```

No **Objetivo 6** vai fechar o loop e ativar o seu modo **Suspensão por glicose baixa** (SGB), com a [IA máxima](#Open-APS-features-maximum-total-iob-openaps-cant-go-over) definida para zero. Tem de ficar no modo SGB durante 5 dias para concluir este **objetivo**. Use este tempo para verificar se as definições do seu **Perfil** estão corretas e se os eventos SGB não acontecem com demasiada frequência.

Tempo mínimo para concluir este objetivo: **5 dias**. This is a mandatory wait time. Não pode passar ao **Objetivo** seguinte antes de este tempo terminar.

É muito importante que o seu **Perfil** atual (basal, FSI, IHC) tenha sido bem testado antes de fechar o loop no modo **SGB**. Definições erradas do **Perfil** podem levá-lo a hipoglicemias que têm de ser tratadas manualmente. Um **Perfil** correto ajuda a reduzir a necessidade de tratar glicoses baixas durante os 5 dias.

**Se ainda tiver hipoglicemias frequentes ou graves, pense em afinar a [DAI do seu tipo de insulina](#Config-Builder-insulin-dia), a basal, o FSI e os rácios de hidratos de carbono.** Consulte o grupo do [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) ou do [Discord](https://discord.gg/4fQUWHZ4Mw), onde há muita discussão sobre isto.


Durante o **Objetivo 6**, o **AAPS** substitui a definição de IA máxima por zero. **Esta substituição termina quando passar ao Objetivo 7.**

Isto significa que, no **Objetivo 6**, se os valores de glicose do sensor estiverem a descer, o **AAPS** reduz por si a administração de insulina basal. Mas, se os valores de glicose do sensor estiverem a subir, o **AAPS** só aumenta a taxa basal acima do valor do seu **Perfil** se a **IA basal** for negativa por causa de uma **SGB** anterior. Caso contrário, o **AAPS** não aumenta a basal acima do valor atual do seu perfil, mesmo que a glicose esteja a subir. Esta precaução serve para evitar hipoglicemias enquanto aprende a usar o **AAPS**.

**Por isso, tem de tratar os valores altos de glicose com bólus de correção manuais.**

- Se a sua IA for negativa (veja a captura de ecrã abaixo), pode ser acionada uma taxa basal temporária (TBR) > 100% no **Objetivo 6**.

![Exemplo de IA negativa](../images/Objective6_negIOB.png)

- Set your target range slightly higher than you usually would aim at, just to be safe and to add a safety buffer.
- Ative o modo «Suspensão por glicose baixa»: toque no ícone do Loop no ecrã principal e escolha **Suspensão por glicose baixa** como modo de funcionamento.
- Watch active temporary basals by looking at the turquoise basal text on the OVERVIEW screen or the turquoise basal render as part of the OVERVIEW graph.
- You may temporarily experience spikes following treated hypos without being able to increase basals on the rebound.

(objectives-objective7)=
## Objective 7: Tuning the closed loop, raising maxIOB above 0 and gradually lowering BG targets

Para concluir o **Objetivo 7**, tem de fechar o loop e aumentar a sua [IA máxima](#Open-APS-features-maximum-total-iob-openaps-cant-go-over). A **IA máxima** foi posta a zero automaticamente no **Objetivo 6**, por causa do modo Suspensão por glicose baixa. Agora já não é assim. O **AAPS** vai começar a usar o valor de IA máxima que definiu para corrigir valores altos de glicose. No [modo simples](#preferences-simple-mode), o **AAPS** define a IA máxima automaticamente e não precisa de a alterar.

Tempo mínimo para concluir este objetivo: **1 dia**. This is a mandatory wait time. Não é possível passar ao **Objetivo** seguinte antes de terminar este período.

- Selecione o **Loop fechado**: toque no [ícone do Loop](#AapsScreens-loop-status) no ecrã principal e escolha **Loop fechado** como modo de funcionamento. Fique em **Loop fechado** durante 1 dia.

- Slowly raise your 'Maximum total IOB OpenAPS can’t go over' (in OpenAPS called 'max-iob') above 0, until you find the settings that work best for you.

A recomendação predefinida para esta definição é «**bólus médio de refeição + 3x a basal diária máxima**», em que a «basal diária máxima» é o valor horário mais alto em qualquer período do dia.

![basal diária máxima](../images/MaxDailyBasal2.png)

This recommendation should be seen as a starting point. If you use this rule but are experiencing AAPS delivering too much insulin as glucose levels rise, you may need to :
* lower the "Maximum total IOB OpenAPS can’t go over" value;
* reveja as definições do seu **Perfil**, fazendo apenas um ajuste de cada vez.

Em alternativa, se for muito resistente à insulina, aumente o valor de **IA máxima** com muito cuidado.

Quando tiver confiança sobre a **IA máxima** que se adequa ao seu loop, baixe os seus **alvos de glicose** até ao nível que deseja.

(objectives-objective8)=
## Objective 8: Adjust basals and ratios if needed, and then enable Autosens

Neste **objetivo**, vai rever o desempenho do seu **Perfil** e usar a função [Autosens](#Open-APS-features-autosens) como indicador de definições erradas.

Tempo mínimo para concluir este objetivo: **7 dias**. This is a mandatory wait time. Não é possível passar ao **Objetivo** seguinte antes de terminar este período.

Ative o [Autosens](../DailyLifeWithAaps/KeyAapsFeatures.md) durante 7 dias (no [modo simples](#preferences-simple-mode) está ativo por predefinição) e observe a [linha branca do gráfico da **Visão geral**](#AapsScreens-section-g-additional-graphs), que mostra a sua sensibilidade à insulina a subir ou a descer por causa do exercício, das hormonas etc. Esteja atento ao ecrã do plugin **OpenAPS SMB** (**Configuração → APS → Abrir plugin**), que mostra o **AAPS** a ajustar a sensibilidade, as basais e os alvos em conformidade.

Esta é uma boa altura para rever as suas definições de [Deteção de sensibilidade](#Config-Builder-sensitivity-detection). Pode ver a sua sensibilidade no ecrã principal num [gráfico adicional](#AapsScreens-section-g-additional-graphs).

Além disso, pode usar o [Autoajuste](#autotune-how-autotune-calculates-adjustments) uma vez para verificar se as suas basais continuam corretas, ou fazer um teste de basal tradicional.

(objectives-objective9)=
## Objective 9: Enabling additional oref1 features for daytime use, such as super micro bolus (SMB)

No **Objetivo 9**, vai experimentar e usar o **«Super Micro Bolus (SMB)»** como uma função principal. After working through the mandatory readings you will have a good understanding of what SMBs are, how these work, and why basal is set to zero temporarily after SMBs are given (zero-temping).

Tempo mínimo para concluir este objetivo: **28 dias**. This is a mandatory wait time. You can’t proceed to the next Objective before this time is up.

- A [secção SMB desta documentação](#Open-APS-features-super-micro-bolus-smb) e a [explicação do oref1 na documentação do OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) são leitura obrigatória para perceber o **SMB** e o conceito de **basal temporária a zero (zero-temping)**.
- Depois disso, pode [aumentar a IA máxima](#Open-APS-features-maximum-total-iob-openaps-cant-go-over) para que os **SMB** funcionem de forma mais eficaz. A IA máxima inclui agora toda a **IA**, não só a basal acumulada. Este limite pausa os **SMB** até a IA descer abaixo deste valor (_por exemplo,_ a **IA máxima** está definida para 7 U e é dado um bólus de 8 U para uma refeição: os SMB ficam em pausa e não são dados até a **IA** descer abaixo de 7 U). Um bom início é definir **IA máxima** = **bólus médio de refeição + 3x a basal diária máxima**, em que a «basal diária máxima» é o valor horário mais alto em qualquer período do dia. Veja o [Objetivo 7](#objective-7-tuning-the-closed-loop-raising-maxiob-above-0-and-gradually-lowering-bg-targets) como referência.
- Avalie a sua taxa de absorção de hidratos de carbono e pense em alterar o parâmetro «min_5m_carbimpact» em [Definições → Definições de absorção → min_5m_carbimpact](#Preferences-min_5m_carbimpact) se a achar demasiado lenta ou demasiado rápida.

(objectives-objective10)=
## Objetivo 10: Automatização

As **Automatizações** ficam disponíveis quando o **Objetivo 10** é iniciado.

Tempo mínimo para concluir este objetivo: **28 dias**. This is a mandatory wait time. You can’t proceed to the next Objective before this time is up.

Leia primeiro a página da documentação [Automatização](../DailyLifeWithAaps/Automations.md).

Crie a regra de automatização mais simples; por exemplo, acionar uma notificação Android daqui a alguns minutos:
- Abra **Gerir → Automatização** e toque no botão **+** (**Adicionar regra**).
- Escreva um **Nome da Tarefa**, por exemplo «A minha primeira notificação de automatização».
- Em **Condição**, toque em «**EDITAR**».
  - Toque em «**Adicionar condição**» e selecione «**Hora**». O **AAPS** cria uma entrada para hoje, à hora atual.
  - Altere a hora para que a regra seja acionada daqui a alguns minutos.
  - Toque no ícone **Guardar** (canto superior direito) para voltar à regra.
- Em **Ação**, toque em «**ADICIONAR**» e selecione «**Notificação**».
  - Escreva uma mensagem no cartão da ação, por exemplo «A minha primeira automatização».
- Toque no ícone **Guardar** (canto superior direito) e confirme que a regra está **Ativada**.
- Wait until the time triggers the notification (note that depending on your phone, it can be a few minutes late)

Depois, pode experimentar criar uma **Automatização** mais útil. A página da documentação dá alguns exemplos, e pode procurar capturas de ecrã de «Automation» no grupo do [Facebook](https://www.facebook.com/groups/AndroidAPSUsers). Também há um canal próprio na comunidade do [Discord](https://discord.gg/4fQUWHZ4Mw).

Por exemplo, se come a mesma coisa ao pequeno-almoço à mesma hora todas as manhãs antes da escola/do trabalho, pode criar uma **Automatização** como «alvo-antes-do-pequeno-almoço» para definir um **Alvo temporário** um pouco mais baixo 30 minutos antes do pequeno-almoço. In such case, your condition is likely to include "recurring time" which consists of selecting specific days of the week (Monday, Tuesday, Wednesday, Thursday, Friday) and a specific time (06:30 am). The action will consist of "Start temp target" with a lower than usual target value and a 30 minutes duration.

## Quando todos os objetivos estiverem concluídos

Depois de concluir todos os **Objetivos**, a lista mostra cada um com um visto e a data em que foi concluído. O item **Objetivos** desaparece da navegação inferior; pode continuar a abrir a lista com **Configuração → Restrições → Objetivos → Abrir plugin**.

![Todos os objetivos concluídos](../images/objectives/objectives_completed.png)

Toque em «**Mais**» por baixo de um objetivo para ver outra vez as suas tarefas:

![Detalhes de um objetivo concluído](../images/objectives/objective_1_details.png)

(CompletingTheObjectives-go-back-in-objectives)=
## Go back in objectives

Se, por qualquer razão, quiser voltar atrás nos **Objetivos**, abra o **Objetivo** concluído com «**Mais**» e toque em «**Repor estado concluído**»:

![Go back in objectives](../images/Objective_ClearFinished.png)

Da mesma forma, o **Objetivo** em que está a trabalhar pode ser reiniciado com «**Repor estado iniciado**».
