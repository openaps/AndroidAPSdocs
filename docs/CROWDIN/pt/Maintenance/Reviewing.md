# Rever os seus dados

## Navegador do histórico do AAPS

O **AAPS** guarda todo o seu histórico (**glicose**, tratamentos, basal, alvos, **Troca de Perfil**, …) numa base de dados local no telefone. Esta base de dados não faz parte da [exportação de definições](../Maintenance/ExportImportSettings.md). Pode revê-la no próprio **AAPS** com o **Navegador do histórico** e o ecrã **Estatísticas** descritos abaixo. Para análises e relatórios a longo prazo, envie os seus dados para o [Nightscout](../SettingUpAaps/Nightscout.md) ou para o [Tidepool](../SettingUpAaps/Tidepool.md).

O histórico do **AAPS** pode ser revisto no **Navegador do histórico**: abra o **menu** (☰) e selecione **Navegador do histórico**.

![Navegador do histórico](../images/v4/Screens/history_browser.png)

- Toque no **cartão da data** para escolher o dia que quer rever.
- Os gráficos abrem com o zoom afastado, para mostrar **todo o dia selecionado**. Afaste ou aproxime dois dedos para ampliar uma parte.
- Use as setas **<** e **>** para recuar ou avançar um dia, e **Agora** para voltar ao dia atual.
- Os gráficos mostram os mesmos dados que os gráficos do ecrã principal (glicose, tratamentos, basal, IA, HCA, atividade, desvios...).

(reviewing-statistics)=
## Estatísticas do AAPS

O **AAPS** fornece estatísticas básicas de monitorização.

A maior parte dos valores baseia-se nas [recomendações](https://diabetesjournals.org/care/article/46/Supplement_1/S97/148053/6-Glycemic-Targets-Standards-of-Care-in-Diabetes) da ADA de 2023.

Para as abrir, abra o **menu** (☰) e selecione **Estatísticas**.

![Menu com Estatísticas](../images/Maintenance/statistics.png)

O ecrã **Estatísticas** tem quatro separadores: **Insulina**, **Tempo no alvo**, **Glicose** e **Ciclo**. Toque num separador ou deslize para a esquerda ou para a direita para mudar entre eles.

(reviewing-tdd)=
### Separador Insulina: Dose diária total

O cartão **Dose diária total** mostra uma linha por dia para os dias anteriores (até uma semana) em que o **AAPS** tem dados de insulina, depois a **Média** desses dias e por fim **Hoje** até ao momento. Logo depois de instalar o **AAPS**, só aparece **Hoje**. As colunas são:

- **Basal**: apenas a basal.
- **Bólus**: a soma dos tratamentos de bólus e dos SMB.
- **TID Total**: a dose diária total de insulina (**TID**), a soma da insulina de bólus e de basal administrada durante o dia.
- **Hidratos**: os tratamentos de hidratos de carbono declarados e de eCarbs.

A secção **TID** é calculada quando abre a página e demora alguns segundos a calcular. Toque em **Recalcular** para a calcular de novo.

![Estatísticas: o separador Insulina com a Dose diária total](../images/Maintenance/statistics2.png)

A **TID** é a sua insulina de bólus mais a basal por dia. Alguns médicos usam - sobretudo para quem começa com a bomba - um rácio basal-bólus de 50:50: a basal base total (**TBB**, a soma das suas taxas basais em 24 horas) deve então ser cerca de metade da TID. Outros preferem uma TBB de 32 % a 37 % da TID.

Como a maioria das regras práticas, a sua validade real é limitada. A sua diabetes pode ser diferente!

### Separador Tempo no alvo

Tempo no alvo (**TIR**): 70–180 mg/dl ou 3,9–10 mmol/l.

A informação de **TIR** está disponível para 7 e 30 dias, conforme a quantidade de dados disponível na base de dados do **AAPS**.

As estatísticas do tempo no alvo apertado (TITR), 70–140 mg/dl ou 3,9–7,8 mmol/l, estão disponíveis abaixo (o ecrã mostra este intervalo como 70–141).

**Fale sobre os alvos com o seu endocrinologista**

A sua diabetes pode ser diferente. Qualquer alvo sugerido deve ser discutido com o seu endocrinologista ou com a sua equipa médica. If used correctly, AAPS’ statistics can be an effective tool to follow __BG__ trends and monitor progress.

![Estatísticas](../images/Maintenance/statistics3.png)

Abaixo, o cartão **Dexcom TIR** mostra estatísticas detalhadas de **TIR** dos últimos 14 dias.

**DP**: desvio padrão, um [indicador](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3125941/) da variabilidade da glicose (quanto mais alto, pior).

HbA1c: a estimativa da hemoglobina glicada resultante, com base na média das medições do CGM. É um valor indicativo, que pode não coincidir com as análises de HbA1c ao sangue.

![Estatísticas](../images/Maintenance/statistics4.png)

(reviewing-statistics-agp)=
### Separador Glicose: Perfil de glicose ambulatório (AGP)

O **Perfil de glicose ambulatório** (**AGP**) mostra como a sua glicose costuma variar ao longo do dia. Escolha o período com os botões no topo: **Hoje**, **24h**, **7d**, **30d** ou **90d**.

- **O gráfico**: um dia, da meia-noite à meia-noite. A linha é a **Mediana** (metade das suas leituras a essa hora foram mais baixas, metade foram mais altas). À volta dela, uma faixa contém a metade central das suas leituras (**25–75%**) e uma faixa mais larga contém a maior parte delas (**10–90%**). Uma faixa estreita significa que a sua glicose é parecida de dia para dia a essa hora. Linhas tracejadas marcam a sua **Marca BAIXA**, 140 mg/dl (7,8 mmol/l) e a sua **Marca ALTA**.
- **Visão geral glicémica**: o tempo passado no seu intervalo, no intervalo apertado (70–140 mg/dl ou 3,9–7,8 mmol/l), acima e abaixo do seu intervalo, e depois a sua glicose **Média** e **Mediana**. O seu intervalo é definido pela **Marca BAIXA** e pela **Marca ALTA** em [Intervalo para visualização](#Preferences-range-for-visualization).
- **eA1c** e **GMI**: duas estimativas da HbA1c calculadas a partir das suas leituras do CGM. Tal como a HbA1c acima, podem não coincidir com as suas análises de HbA1c ao sangue.
- **DP** (desvio padrão) e **CV** (coeficiente de variação): quanto a sua glicose varia. Um valor mais baixo significa uma glicose mais estável.
- **Dias**: quantos dias de dados do CGM foram usados.

![Estatísticas: o separador Glicose com o gráfico AGP](../images/Maintenance/statistics_agp.png) ![Estatísticas: Visão geral glicémica e métricas da glicose](../images/Maintenance/statistics_agp2.png)

Abaixo do AGP, o cartão **Pentágono da glicose (CGP)** desenha cinco medidas da sua glicose dos últimos 14 dias como um pentágono. Um pentágono mais pequeno significa um melhor controlo da glicose.

![Estatísticas: o Pentágono da glicose](../images/Maintenance/statistics_cgp.png)

### Separador Ciclo: Padrão cíclico da TID

O **Padrão cíclico da TID** sobrepõe os seus totais diários de insulina em ciclos de 28 dias, para ajudar a encontrar padrões que se repetem. Cada ciclo é desenhado como uma linha (**Ciclos individuais**), junto com a média deles.

- **TID bruta** / **TID limpa**: escolha a dose diária total tal como foi administrada, ou a TID sem a insulina para os hidratos de carbono.
- **Desvio do ciclo**: muda o início do ciclo (de 0 a 27 dias).

São precisos pelo menos 56 dias de dados (2 ciclos). Com menos dados, o cartão mostra **Dados insuficientes (são necessários pelo menos 56 dias para 2 ciclos)**. O padrão só é calculado quando abre o separador **Ciclo**, porque lê 168 dias de dados.

(aaps-screens-treatments)=
## Histórico de tratamentos

Abra o **menu** (☰) no canto superior esquerdo do ecrã principal e selecione **Histórico de tratamentos**. Nesta vista pode ver e alterar o histórico dos seguintes tratamentos, cada um no seu separador (deslize a linha de separadores para ver todos):

* Hidratos e bólus
* [Bólus prolongado](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
* Basal temporária
* [Alvo Temporário](../DailyLifeWithAaps/TempTargets.md)
* [Troca de Perfil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
* Careportal: notas e registos do careportal
* Modo de funcionamento: histórico do estado do loop
* Entrada de Utilizador: outras notas que não são enviadas para o Nightscout

No fim de cada linha, pequenos ícones mostram de onde vêm os dados ou para onde foram enviados:
* Ícone do **Nightscout** (o logótipo do Nightscout): os dados vêm do Nightscout ou foram gravados no Nightscout
* Ícone da **bomba**: os dados vêm do histórico da bomba (foram processados pela bomba)
* Ícone do **caixote do lixo**: o registo foi apagado (só aparece quando mostra os registos apagados com o ícone do **olho** no canto superior direito)

(screens-bolus-carbs)=
### Hidratos e bólus

![Hidratos e bólus](../images/TreatmentsView1.png)

Neste separador pode ver o registo de bólus e de hidratos de carbono. Cada bólus (linha **1**) mostra a IA associada que ainda resta ao lado da quantidade de insulina. A origem do bólus pode ser:
* Meal (manually entered through the Insulin, Quick Wizard or Bolus Wizard buttons)
* SMB, quando usa a funcionalidade SMB

Os registos de hidratos de carbono (linha **2**) aparecem com a quantidade em gramas.

Se usou o [Assistente de Bólus](#aaps-screens-bolus-wizard) para calcular a dose de insulina, pode tocar no texto «Calc» na linha do bólus para ver os detalhes de como o bólus foi calculado.

Conforme a bomba usada, a insulina e os hidratos de carbono podem aparecer numa só linha ou em várias linhas: uma para o detalhe do cálculo, uma para os hidratos de carbono e uma para o próprio bólus.

O Histórico de tratamentos pode ser usado para corrigir registos de hidratos de carbono errados (_por exemplo_, se sobrestimou ou subestimou os hidratos de carbono). Não é possível editar um registo existente; tem de seguir este processo:

1. Verifique e memorize a HCA e a IA atuais no ecrã principal.
2. Conforme a bomba, os hidratos de carbono podem aparecer junto com a insulina numa só linha ou como um registo separado (por exemplo, com a Dana RS).
3. Remova o registo com a quantidade errada de hidratos de carbono: toque no ícone do caixote do lixo, selecione as linhas a remover e depois toque de novo no ícone do caixote do lixo para concluir.
4. Confirme que os hidratos de carbono foram removidos verificando de novo a HCA no ecrã principal.
5. Faça o mesmo para a IA se houver só uma linha com hidratos de carbono e insulina.

   → Se os hidratos de carbono não forem removidos como pretendido e adicionar mais hidratos de carbono como explicado aqui (6.), a HCA fica demasiado alta e isso pode levar a uma administração de insulina demasiado alta.

6. Introduza de novo a quantidade correta de hidratos de carbono (**Tratamentos → Hidratos** na navegação inferior, ou um botão **Hidratos** do [QuickLaunch](#quicklaunch)) e não se esqueça de definir a hora correta do evento.
7. Se houver só uma linha com hidratos de carbono e insulina, tem de adicionar também a quantidade de insulina. Não se esqueça de definir a hora correta do evento e de verificar a IA no ecrã principal depois de confirmar o novo registo.

### Basal temporária

![Basal temporária](../images/TreatmentsView2.png)

As **basais temporárias** aplicadas pelo loop aparecem aqui. Quando um registo ainda tem impacto na IA, essa informação aparece ao lado da taxa (linha **1**). Pode ser:
* IA positiva, se a basal temporária foi mais alta do que a definida no Perfil
* IA negativa, para uma basal temporária de zero (como na linha **1**) ou se a basal temporária foi mais baixa do que a definida no Perfil

Deleting the entries only affects your reports in Nightscout and will probably distort your real IOB - it is not recommended.

On the left of a line, a red S means “Suspend”: it happens when basal is not currently delivered. É uma situação normal, por exemplo, durante a mudança de um Pod.

### Alvo Temporário

![Alvo Temporário](../images/TreatmentsView3.png)

O histórico dos alvos temporários pode ser visto aqui.

### Troca de Perfil

![Troca de Perfil](../images/TreatmentsView4.png)

O histórico das trocas de perfil pode ser visto aqui. Pode ver vários registos de cada vez que troca de perfil: a linha **1**, guardada no NS e no histórico da bomba, corresponde à troca real. A linha **2**, guardada no Nightscout mas não no histórico da bomba, corresponde ao pedido de troca de perfil feito pelo utilizador.

Apagar os registos só afeta os seus relatórios no Nightscout e nunca muda realmente o perfil atual.

Pode usar o botão **Clonar** na linha **2** para fazer uma cópia de uma **Troca de Perfil**. Veja [O seu perfil AAPS > Gerir os seus perfis](#your-aaps-profile-clone-profile-switch) para mais informações.

### Careportal

![Careportal](../images/TreatmentsView5.png)

Este separador mostra todas as notas e registos do careportal gravados no Nightscout.

(AapsScreens-running-mode)= (aaps-screens-running-mode)=
### Modo de funcionamento

![Modo de funcionamento](../images/TreatmentsView6.png)

This tab shows the history of [loop status](#AapsScreens-loop-status) changes: open, closed, LGS, suspend, disconnect.

### Entrada de Utilizador

![Entrada de Utilizador](../images/screens/treatments_user_entry.png)

Este separador lista as ações feitas no **AAPS** pelo utilizador ou por uma **Automatização** (mudanças do modo do loop, trocas de perfil, tratamentos, exportações de definições...). Estes registos não são enviados para o Nightscout.

------

## Qual é a diferença entre o Nightscout e o Tidepool?

O Nightscout pode facilitar o armazenamento dos dados do **AAPS** e oferece uma grande variedade de [ferramentas de relatórios](https://nightscout.github.io/nightscout/reports/).

Já o Tidepool permite ao utilizador [rever os seus dados](https://www.tidepool.org/viewing-your-data) e oferece uma [partilha simples com a sua equipa de endocrinologia](https://www.tidepool.org/providers/how-it-works#tidepool-data-platform).