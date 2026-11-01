(Insulin-Concentration)=
# Concentração da insulina

```{warning}
Todas as bombas comerciais foram feitas para usar **APENAS** insulina U100. Usar outra concentração de insulina numa bomba pode ser perigoso. Embora cada vez mais utilizadores usem o AAPS com outras concentrações, a conversão tem sempre de ser gerida e leva muitas vezes a erros (mesmo em utilizadores muito experientes!).
```

## Lembrete do básico sobre a insulina

Este capítulo explica os conceitos essenciais da medição e da administração de insulina.

### A unidade de insulina: uma medida de ação

A insulina é medida em **Unidades Internacionais (UI)**, que quantificam a sua atividade biológica (capacidade de baixar o açúcar no sangue) e não apenas a sua massa física.

- **Definição:** 1 UI corresponde à atividade de uma quantidade específica de insulina, normalizada para **cerca de 0,04167 mg**.
- **Ponto-chave:** Uma «unidade» significa o mesmo efeito biológico em todos os tipos de insulina, o que garante uma dosagem coerente.

### Concentrações de insulina

A insulina existe em várias concentrações, definidas pelo número de unidades por mililitro (ml).

- **U100:** O padrão mundial, com **100 UI/ml**.
- **U200–U500:** Insulinas mais concentradas (por exemplo, a U200 tem 200 UI/ml) para volumes de injeção menores.
- **U40/U50:** Concentrações menos comuns, históricas (40 UI/ml e 50 UI/ml). **A U40 exige seringas próprias para U40.**
- **Diluição manual:** Uma prática clínica para criar insulina muito diluída (por exemplo, U50, U10) em casos raros, como o uso em recém-nascidos ou uma sensibilidade extrema. Isto exige uma preparação farmacêutica muito cuidadosa.

```{admonition} Critical Warning
:class: danger
Usar uma concentração com um dispositivo que não lhe corresponde é extremamente perigoso e pode causar uma sobredosagem ou subdosagem grave. **Verifique sempre três vezes se a concentração da insulina corresponde às especificações da seringa, da caneta ou da bomba.**
```

## Quando usar uma concentração não padrão?

Embora as bombas de insulina sejam feitas para insulina U100, certas situações médicas específicas exigem concentrações não padrão. Estes casos exigem extremo cuidado e uma gestão muito rigorosa.

### Caso 1: insulina diluída para doses muito baixas

- **Situação:** Tratar a diabetes tipo 1 em bebés e crianças muito pequenas.
- **Problema:** As suas necessidades de insulina são tão baixas que a dose mínima que a bomba consegue administrar (por exemplo, 0,05 U) pode ainda ser demasiado grande. Isto torna difícil um controlo glicémico preciso e traz um risco alto de hipoglicemia.
- **Solução:** Usar insulina muito diluída (por exemplo, U10, ou seja, 10 UI/ml).
- **Efeito:** Isto aumenta o volume de líquido administrado por cada unidade de insulina. Ao tornar os «pacotes» de insulina maiores em volume mas mais fracos em concentração, permite ajustes muito mais finos e maior precisão de dose com as definições existentes da bomba.

```{admonition} Critical Safety Note on Dilution
:class: danger
A diluição de insulina é um procedimento de alto risco que nunca deve ser tentado em casa sem formação específica e supervisão médica. Tem de ser feita por um profissional de saúde ou por um cuidador com formação, usando um diluente estéril feito especificamente para esse tipo de insulina. **Nunca use água da torneira, soro fisiológico nem qualquer outro líquido**, porque isso pode desativar a insulina, alterar a sua ação e introduzir contaminantes perigosos.
```

### Caso 2: insulina concentrada para grandes necessidades de insulina ou resistência à insulina significativa

- **Situação:** Tratar adultos ou adolescentes com resistência à insulina significativa, ou pessoas que sentem dor local por causa dos aditivos da insulina padrão.
- **Problema:**
  1. **Grandes necessidades:** Necessidades diárias de insulina muito altas podem ultrapassar o bólus máximo da bomba ou os seus limites de administração diária.
  1. **Dor:** Os conservantes da insulina podem causar ardor ou irritação durante a infusão.
- **Solução:** Usar uma insulina mais concentrada, como a U200 (200 UI/ml).
- **Efeito:** Isto administra a dose de insulina necessária em metade do volume. Para o utilizador, as definições internas da bomba têm de ser ajustadas (por exemplo, basais e bólus reduzidos para metade) para ter em conta a concentração dupla, de forma a que seja administrado o número correto de unidades. Isto também reduz o volume de líquido, possivelmente irritante, administrado por via subcutânea.

## Como gerir a concentração da insulina com o AAPS (AAPS 3 e anteriores)?

Usar insulina que não é U100 num loop AAPS exige uma configuração muito cuidadosa, para que os cálculos do software correspondam à insulina realmente administrada. Um método comum é «Usar um perfil modificado».

### Usar um perfil modificado

Este método consiste em fazer o AAPS acreditar que as necessidades de insulina do doente são menores do que são, para compensar o facto de a bomba administrar insulina mais concentrada do que aquela para que foi feita. O caso abaixo é para insulina U200 colocada numa bomba feita para U100.

- **O problema principal:** Uma bomba feita para U100 está calibrada para administrar **10 µL** por **1 unidade**. Se a encher com U200 (1 unidade de U200 corresponde a **5 µL** de insulina), quando seleciona **1 unidade** na bomba, ela administra **10 µL** de insulina, mas esse volume contém agora **2 unidades de insulina U200**. Isto leva a uma sobredosagem de 100 %.
- **A solução «Troca de Perfil 50 %»:** Para corrigir isto, todo o perfil de terapia do doente é ajustado dentro do AAPS para ficar «duas vezes mais fraco».
  1. O utilizador cria um novo perfil a partir do seu perfil U100 padrão, usando a função «Troca de Perfil **50 %**».
  1. Isto cria um novo perfil em que:
     - As **basais** são reduzidas para metade.
     - O **rácio insulina/hidratos de carbono (IHC)** é duplicado (por exemplo, 1:10g passa a 1:20g).
     - O **fator de sensibilidade à insulina (FSI)** é duplicado (por exemplo, 1 unidade baixa a glicose 50 mg/dl (2,8 mmol/l) passa a 1 unidade baixa-a 100 mg/dl (5,6 mmol/l)).
- **O resultado corrigido:** O AAPS acredita agora que o doente só precisa de metade da insulina. Quando calcula e ordena um bólus de **1 unidade**, a bomba (feita para U100 mas cheia com U200) administra os **10 µL**, que contêm **2 unidades reais de insulina U200**. Como o AAPS calculou esta dose com base num perfil «de meia força», esta administração de **2 unidades reais** é a dose correta e pretendida. A matemática «de meia força» do loop corresponde à administração «de força dupla» da bomba.

```{admonition} Critical Risks and Common Errors
:class: caution

Este método traz riscos importantes, porque cria uma diferença permanente entre os dados da app e a realidade física.

**O erro principal: a discrepância do «bólus externo»**

O erro mais comum acontece quando se administra e regista insulina **fora** do sistema AAPS-bomba.

- **A situação:** O AAPS, com o perfil modificado, calcula um bólus de **5 unidades** para uma refeição. O utilizador injeta-o com uma caneta U200.
- **O erro duplo:**
  1. **Escolha errada da dose:** O utilizador pensa «o AAPS calcula 5 unidades» e, por causa da caneta U200, espera administrar **5 unidades reais de U200** sem qualquer conversão. No entanto, como o perfil está reduzido para metade, o corpo precisa de facto de **10 unidades reais**. Isto é uma **subdosagem de 50 %**, que pode levar a hiperglicemia.
  1. **Cálculo errado da insulina ativa (IA) (IA sobrestimada):** Quando o utilizador regista este bólus externo no AAPS, regista **5 unidades**. Isto está errado. Como o perfil do AAPS é para U200, **1 unidade no AAPS é igual a 2 unidades reais**. Por isso, as 5 unidades reais administradas pela caneta devem ser registadas na app como **2,5 unidades**. Ao registar 5 unidades, o utilizador sobrestima a IA em 100 %. O AAPS pensa agora que há 5 «unidades concentradas» ativas (equivalentes a 10 unidades reais), quando só estão ativas 5 unidades reais. Isto pode levar o loop a suspender a insulina basal ou a reduzir os bólus seguintes, o que agrava o risco de hiperglicemia causado pela subdosagem inicial.

**Outros riscos:**

- **Dados e relatórios enganadores:** Todos os dados no AAPS ou no Nightscout - incluindo a IA, a dose diária total (TID) e os relatórios do histórico - estão em «unidades concentradas». Isto dá uma imagem distorcida ao utilizador e à sua equipa médica. Um médico que analisa um relatório pode ver uma TID de 30 unidades sem perceber que o doente recebeu de facto 60 unidades reais, o que leva a avaliações erradas da terapia.
- **Modelo mental alterado:** Depois de muito tempo de uso, o utilizador começa a «pensar» nos valores reduzidos para metade da app. Interioriza que o seu FSI é 100 mg/dl (5,6 mmol/l) ou que a sua basal é 0,5 U/h, esquecendo que estes valores são «concentrados». Isto cria uma dependência perigosa do sistema e uma perda de noção das suas reais necessidades de insulina, o que é crítico para a segurança em caso de falha da bomba ou de problemas da app.

**Conclusão:** Este método exige vigilância absoluta e obriga o utilizador a converter constantemente entre um «mundo concentrado» na app e o mundo físico. Qualquer administração externa de insulina ou análise de dados quebra este modelo mental e traz um risco grave. Muda profundamente o significado de cada número no sistema.
```

## Usar o parâmetro de concentração (nova função no AAPS 4.0)

Para reduzir os riscos de usar um perfil modificado, uma nova função gere a concentração da insulina diretamente no AAPS. Esta função faz as conversões automaticamente, o que permite que a aplicação principal trabalhe sempre em **Unidades Internacionais (UI) reais**.

### Como funciona: conversão automática

O princípio base é uma separação clara entre a lógica da app e a comunicação com a bomba:

- **O AAPS usa Unidades Internacionais:** A base de dados principal do AAPS, os algoritmos, os relatórios e os registos **usam sempre UI reais**. Isto significa que a sua IA, a TID e as definições de terapia (basal, FSI, IHC) refletem as unidades de insulina biológicas reais.
- **O controlador da bomba usa unidades concentradas:** Todos os valores enviados para o controlador da bomba ou recebidos dele são convertidos automaticamente para «unidades concentradas» dentro do controlador da bomba, com base na concentração selecionada.
  - **Exemplo com U200:** Quando o utilizador pede um **bólus de 1 unidade**, o controlador da bomba recebe **0,5 CU (unidades concentradas)** antes de o enviar para a bomba. A bomba (definida para U100) administra então **5 µL**, que contêm **1 UI de insulina U200**.

### Vantagens e riscos que permanecem

**Vantagens:**

- Elimina a necessidade de um perfil modificado e os erros de conversão mental que lhe estão ligados.
- Os utilizadores podem «pensar» sempre em UI reais.
- Para um bólus externo com caneta, basta selecionar na caneta a quantidade de insulina pretendida (seja qual for a caneta e a concentração de insulina usada). Não é precisa nenhuma conversão, porque as canetas U100 e U200 usam sempre UI para selecionar as unidades.
- Todos os relatórios e dados do AAPS (TID, IA) estão em UI reais, o que dá clareza ao utilizador e à sua equipa médica.
- Elimina o risco de calcular mal os bólus externos, porque são registados em UI reais.

**Riscos que permanecem:**

- **Transição do modelo mental:** Os utilizadores que mudam do método do «perfil modificado» têm de voltar a usar o perfil real correto (ou seja, duas vezes mais forte se vêm de U200) e precisam de tempo para ajustar o seu **modelo mental**. Depois de se habituarem a valores «concentrados» na app, têm de reaprender a confiar nos **valores reais de UI, sem conversão escondida,** mostrados em todo o lado. Este período de adaptação traz um risco de má interpretação.
- **Bólus manual na bomba:** Usar a função de bólus da própria bomba (sem passar pelo AAPS) causa uma sobredosagem de 100 %, porque a bomba administra insulina U200 com cálculos de volume para U100.
- **Aviso geral:** Usar concentrações não padrão continua a ser um procedimento avançado, com riscos, e não é oficialmente recomendado.

```{admonition} Never use the pump's own interface (tube pump users) to deliver a bolus manually
:class: danger
Cole na sua bomba uma etiqueta permanente **«Insulina U200»** como lembrete, para nunca se esquecer!
```

### Apresentação na interface

Para dar clareza, a interface mostra as unidades reais e as unidades concentradas quando é relevante. Note que a interface não muda se a insulina atual for U100.

**Exemplos de apresentação:**

- **Diálogo de progresso do bólus:**
  - O diálogo Progresso do Bólus faz parte da aplicação principal do AAPS, por isso só mostra a informação em UI (coerente com a escolha do utilizador): **`2.50 U / 10.00 U delivered`**
- **Interface do controlador da bomba (estado atual):**
  - Na visão geral da bomba, a quantidade administrada é mostrada nas duas unidades; por exemplo, se `U200` estiver selecionada: **`Last Bolus: 10 U (5 CU) (10')`**

**Nota:** As duas unidades (U e CU) só são visíveis na visão geral principal da bomba. Conforme a sua bomba, pode haver outros ecrãs onde só aparecem as unidades concentradas. Os dados do histórico dentro dos controladores das bombas ficam normalmente em «unidades concentradas».

### Ativar a função

Por causa dos riscos de segurança que traz, este parâmetro não está ativado por predefinição. Para o ativar, conclua o Objetivo 3 e ative **Suporte de concentração de insulina** nas Definições Gerais.

### Criar uma nova insulina com outra concentração

Para criar uma insulina com outra concentração, abra primeiro **Gerir → Definições de insulina**.

- Clique no ícone «+» na parte de baixo do ecrã.
- Selecione no menu suspenso a nova concentração pretendida (estão disponíveis U10, U20, U50, U100 e U200).
  - Concentrações diluídas como U10, U20 ou U50 são para crianças com basais muito baixas.
  - A U200 é sobretudo para adultos com grandes necessidades de insulina.

  ![O menu suspenso da concentração nas Definições de insulina](../images/v4/Insulin/insulin_concentration_dropdown.png)

- Ajuste o tempo de pico, a Duração da Ação da Insulina (DAI) e, se quiser, personalize a alcunha da insulina.
- Use o botão de guardar no canto superior direito do ecrã.

Neste passo, a insulina já está criada, mas não pode ser selecionada diretamente em **Definições de insulina**.

### Mudar a concentração de U100 para Uxxx (AAPS 4)

```{admonition} Switching concentration is only allowed during a reservoir or patch/pod change
:class: warning
Por razões de segurança, o AAPS só regista uma mudança de concentração durante uma mudança de reservatório ou uma mudança de patch/pod.
```

Quando parte de insulina U100, todo o seu perfil, os dados do histórico e os relatórios são coerentes com o padrão das Unidades Internacionais, por isso a mudança é muito «fácil»:

- Numa bomba patch/pod, há um passo próprio quando muda a bomba, para selecionar a insulina que colocou nela.
- Numa bomba com tubo, clique no botão Purgar/Preencher (para a Mudança de Insulina) na Visão geral (vista expandida da barra de estado) e depois clique no botão «Trocar».

1. Selecione no menu suspenso a concentração pretendida (por exemplo, `U200`).
1. Depois selecione a insulina certa mais abaixo. Até confirmar, a legenda por cima do nome diz **Será ativada** (em vez de **Atualmente ativa**).

   ![Uma insulina escolhida mas ainda não confirmada: Será ativada](../images/v4/Insulin/insulin_will_be_activated.png)

1. **Importante:** a mudança de concentração só é registada no AAPS depois de a Troca de Perfil ser aplicada na bomba.
   - Este passo é obrigatório em todas as bombas patch/pod.
   - Nas bombas com tubo, espere que a Troca de Perfil seja aplicada na bomba, ou faça-a em **Gerir → Perfil** ou **Definições de insulina**.

É tudo!

Se estiver a decorrer uma **Troca de Perfil** temporária (com duração) quando muda a insulina, a nova insulina também é dada ao perfil que volta quando a troca temporária termina. A insulina antiga não volta.

### Mudar a concentração para utilizadores com insulina U200 associada a um perfil a 50 % (AAPS 4)

Se já usa U200 na bomba, mas associada a um perfil a 50 %, tem de fazer passos adicionais em comparação com a mudança padrão a partir de insulina U100.

Tenha em conta que a parte mais difícil provavelmente não será gerir a mudança corretamente no AAPS, mas sim treinar de novo o seu cérebro para pensar em «UI» em vez de «CU». Todos os valores habituais dos bólus (pequeno-almoço, almoço, jantar...) vão ser duas vezes maiores, e o mesmo acontece com as suas TID, basais, etc. Tem de ter muito cuidado para não cometer erros durante as primeiras semanas, até voltar a «pensar» em Unidades Internacionais.

- Primeiro, prepare um novo perfil com todos os valores coerentes com as Unidades Internacionais:
  - Faça uma Troca de Perfil temporária a 200 % do seu perfil padrão em uso.
  - Abra o menu (☰) → **Tratamentos**, vá ao separador **Troca de Perfil** e clone o novo perfil a 200 % (veja [Clonar uma Troca de Perfil](#your-aaps-profile-clone-profile-switch)).
  - Volte ao seu perfil padrão até à próxima mudança de reservatório ou de patch.
  - Vá a **Gerir → Perfil** e dê a este novo perfil um nome claro (será o seu futuro perfil associado à insulina U200 definida no AAPS 4).
- Se usa a função FSI Dinâmico (DynISF), tem de a desativar durante pelo menos uma semana:
  - Todo o histórico registado no AAPS ou no Nightscout está nas unidades erradas (CU), metade do valor real em Unidades Internacionais. Espere pelo menos uma semana com a insulina U200 em uso antes de a voltar a ativar.
- Está agora pronto para mudar de insulina (com uma nova U200 definida em **Definições de insulina**) na próxima Mudança de Insulina ou mudança de pod.
- Quando a nova insulina U200 estiver corretamente aplicada, não se esqueça de aplicar o novo perfil padrão definido no primeiro passo.

## Como gerir bólus externos com diferentes canetas?

### Com insulina U200 associada a um perfil a 50 % (AAPS 3)

Tenha em conta que todas as graduações das canetas estão em Unidades Internacionais. Por isso, seja qual for a caneta usada (U100, U200), se usar uma caneta para um bólus externo tem de fazer a conversão nos dois sentidos:

- Do AAPS para a caneta: se a Calculadora propõe um bólus, ou se tem em mente uma quantidade específica, multiplique por 2 quando selecionar a quantidade na caneta, em comparação com o mesmo bólus dado pelo AAPS.
- Da caneta para o AAPS: se selecionou uma quantidade na caneta para dar um bólus externo, divida essa quantidade por 2 para registar a quantidade certa no AAPS (botão Insulina, bólus externo), de forma a obter o cálculo correto da IA em CU (unidades concentradas).

### Com insulina U200 usando a gestão da concentração incluída no AAPS 4

Tudo fica muito mais simples com a gestão interna da concentração no AAPS: basta selecionar na caneta a quantidade pretendida (seja qual for a caneta e a insulina correspondente usada) e registá-la no AAPS.

- No botão Insulina, se selecionar um bólus externo, pode escolher qualquer tipo de insulina definido em **Definições de insulina** (sobretudo U100 e U200 para canetas). Assim obtém um cálculo de IA muito preciso, mesmo que o pico/DAI da insulina usada na caneta seja muito diferente do pico/DAI usado na bomba.
