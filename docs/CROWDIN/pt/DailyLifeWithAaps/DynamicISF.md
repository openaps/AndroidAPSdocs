(Open-APS-features-DynamicISF)=
# FSI Dinâmico (DynISF)

Até agora, com o **AMA** e o **SMB**, o **FSI** era definido no **Perfil** e era fixo para cada período definido do dia. Mas, na realidade, o **FSI** de uma pessoa não é assim tão fixo e varia conforme o seu nível de **glicose**: com a glicose alta, o utilizador precisa de mais insulina para baixar a **glicose** 50 mg/dl / 3 mmol/l do que com uma **glicose** mais baixa. O [Autosens](#Open-APS-features-autosens) foi o primeiro algoritmo a tentar resolver este problema, ajustando o **FSI** fora das horas das refeições.

O **FSI Dinâmico** (também chamado **DynISF**) tem o mesmo objetivo, mas é mais avançado, porque pode ser usado sempre. Só é recomendado a utilizadores avançados que dominam bem o controlo e a monitorização do seu **AAPS**. Leia a secção [O que ter em conta ao ativar o FSI Dinâmico](#dyn-isf-things-to-consider-when-activating-dynamicisf) abaixo antes de o experimentar.

```{admonition} CAUTION - Automations or Profile Percentage change
:class: warning

As **Automatizações** devem ser sempre usadas com cuidado. Isto é ainda mais importante com o **FSI Dinâmico**.

Ao usar o **FSI Dinâmico**, desative qualquer regra de **Automatização** que altere temporariamente o **Perfil**, porque isso tornaria o **FSI Dinâmico** demasiado agressivo nos bólus de correção e causaria hipoglicemia. É exatamente para isto que serve o **FSI Dinâmico**, por isso não é preciso dizer ao **AAPS**, através da Automatização, para dar insulina adicional quando a **glicose** está alta.

```

Para usar o **FSI Dinâmico**, a base de dados do **AAPS** precisa de pelo menos 7 dias de dados do **AAPS** do utilizador.

## What does Dynamic ISF do?

O **FSI Dinâmico** adapta o fator de sensibilidade à insulina (**FSI**) de forma dinâmica, com base nos seguintes dados do utilizador:

- Dose diária total de insulina (**TID**); e
- valores atuais e previstos da glicose.

When using **Dynamic ISF**, the **ISF** values entered in the **Profile** are not used at all anymore, except as a fallback if there is not enough TDD data in **AAPS** database (*i.e.* fresh reinstallation of the app).

**SMB/AMA** - um exemplo de um **Perfil** com **FSI** fixo, definido pelo utilizador e usado pelo **SMB** e pelo **AMA**.

![FSI estático](../images/DynamicISF/profile_viewer_isf.png)

**FSI Dinâmico** - um exemplo de um **FSI** que muda conforme determinado pelo **FSI Dinâmico**.

![FSI dinâmico](../images/DynamicISF/DynISF2.png)

A secção marcada a vermelho mostra: `profile ISF` -> `ISF as calculated by DynISF`. <br/> Tocar nesta secção mostra uma janela com informação adicional, como o **FSI** usado na calculadora e na absorção dos hidratos de carbono (ver [Outras utilizações do FSI](#dynisf-other-usages-of-isf) abaixo).

O valor do **DynISF** também pode ser mostrado num gráfico: toque em **Adicionar gráfico** por baixo dos gráficos no ecrã principal e selecione **VSENS** (sensibilidade variável). Aparece como uma linha branca (parte de baixo da imagem acima).

## How is Dynamic ISF calculated?

O **FSI Dinâmico** usa o modelo de Chris Wilson para determinar o **FSI**, em vez do valor de **FSI** fixo definido pelo utilizador no **Perfil**. Pode encontrar uma explicação detalhada aqui: [Chris Wilson on Insulin Sensitivity (Correction Factor) with Loop and Learn, 2/6/2022](https://www.youtube.com/watch?v=oL49FhOts3c) (em inglês).

A equação do **FSI Dinâmico** implementada é: `ISF = 1800 / ((TDD * DynISF Adjust Factor) * Ln (( current BG / insulin divisor) + 1 ))`

As variáveis usadas nesta equação são descritas abaixo.<br/> Nota: `Ln` significa logaritmo natural, uma função matemática.

A implementação usa a equação acima para calcular o **FSI** atual e nas [previsões do oref1 para **IA**, **ZT** (basal temporária de zero) e **RNA**](#aaps-screens-prediction-lines). Também é usada para os **HCA** e no assistente de bólus (ver [Outras utilizações do FSI](#dynisf-other-usages-of-isf) abaixo).

### TID (Dose diária total)
A TID usa uma combinação dos seguintes valores:
1.  **TID** média dos últimos 7 dias;
2.  a **TID** do dia anterior; e
3.  uma média ponderada das últimas oito (8) horas de uso de insulina, extrapolada para 24 horas.

A **TID** usada na equação acima é ponderada em um terço por cada um dos valores acima.

### Fator de ajuste do FSI Dinâmico

É definido nas **Definições** do utilizador e serve para tornar o **FSI Dinâmico** mais ou menos agressivo. Veja a secção [Preferências](#dyn-isf-preferences) abaixo.

### Divisor de insulina
O divisor de insulina depende do pico da insulina usada e é inversamente proporcional ao tempo até ao pico. Para a Lyumjev este valor é 75, para a Fiasp 65 e para a insulina rápida comum 55.

### FSI baseado na glicose prevista para as decisões de dosagem

A sensibilidade dinâmica é calculada com o valor da **glicose atual** e é mostrada como o seu FSI atual no **AAPS**. Mas, ao fazer os cálculos da dose, o algoritmo oref1 calcula e usa antes o **FSI futuro**.

Isto é feito para evitar administrar demasiada insulina quando a **glicose** está baixa ou se prevê que fique baixa.

O **FSI futuro** usa a mesma fórmula descrita acima, mas pode usar a **glicose mínima prevista** em vez da **glicose atual**. A **glicose mínima prevista**, [calculada pelo oref1](#aaps-screens-how-predictions-become-a-dosing-decision), é o valor mínimo que se prevê que a sua glicose atinja durante todo o período das previsões.

* If the current **BG** is above target<br/> **and** if **BG** levels are flat, within +/- 3 mg/dL:<br/>BG is used in the formula as follows: `average(minimum predicted BG, current BG)`.
* If eventual **BG** is above target and glucose levels are increasing,<br/> **or** eventual **BG** is above current **BG**:<br/>BG is used in the formula as follows: `current BG`.
* Caso contrário:<br/>a glicose é usada na fórmula assim: `minimum predicted BG`.

Para uma explicação simplificada, veja a captura de ecrã abaixo, que ilustra a situação acima. Os pontos cor de laranja usam a **glicose prevista**, os pontos roxos usam a **média(glicose prevista, glicose atual)** e os pontos azuis usam a **glicose atual**.

![DynISF_BGValue.png](../images/DynamicISF/DynISF_BGValue.png)

(dynisf-other-usages-of-isf)=
## Outras utilizações do FSI

### FSI e absorção dos HCA

Como descrito na página [Cálculo de HCA](../DailyLifeWithAaps/CobCalculation.md), normalmente a absorção dos HCA é calculada com esta fórmula:   
`absorbed_carbs = deviation * ic / isf`  
Ao usar o **FSI Dinâmico**, o **FSI** usado aqui é a média dos valores do FSI Dinâmico das últimas 24 h.

### FSI no Assistente de Bólus

Ao usar o [Assistente de Bólus](#aaps-screens-bolus-wizard), o **FSI** é usado para adicionar uma correção se a **glicose** estiver acima do alvo.

Ao usar o **FSI Dinâmico**, o **FSI** usado aqui é a média dos valores do FSI Dinâmico das últimas 24 h.

(dyn-isf-preferences)=
## Definições

Marque **Usar sensibilidade dinâmica** em [Definições > OpenAPS SMB](#Preferences-openaps-smb-settings) para ativar. Depois de selecionar, ficam disponíveis novas definições.

![Definições do FSI Dinâmico](../images/preferences/settings_dynamic_isf.png)

(dyn-isf-adjustment-factor)=
### Fator de ajuste do DynamicISF
O **FSI Dinâmico** funciona com base numa única regra que deve valer para todos, o que implica que pessoas com a mesma **TID** teriam a mesma sensibilidade. Como cada utilizador tem a sua própria sensibilidade, o **Fator de ajuste** permite ao utilizador definir se é mais ou menos sensível à insulina do que a pessoa «padrão».

O **Fator de ajuste** é um valor entre 1 % e 300 %. Funciona como um multiplicador do valor da **TID**.

* Aumentar este valor acima de 100 % torna o **DynISF** mais agressivo: os valores de **FSI** ficam *menores* (_ou seja,_ é precisa mais insulina para baixar um pouco os níveis de **glicose**)
* Baixar este valor abaixo de 100 % torna o **DynISF** menos agressivo: os valores de **FSI** ficam maiores (_ou seja,_ é precisa menos insulina para baixar um pouco os níveis de **glicose**).

O **Fator de ajuste** também é alterado quando ativa uma [**Troca de Perfil** com percentagem](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md). Uma **Percentagem do Perfil** mais baixa baixa o **Fator de ajuste**, e uma **Percentagem do Perfil** mais alta aumenta-o.

For example, if your **Adjustment Factor** is 80%, and **Profile Switch** to 80% is actioned, the resulting **Adjustment Factor** will be `0.8*0.8=0.64`.

Isto significa que, ao usar o **DynISF**, pode usar a **Percentagem do Perfil** para afinar manualmente e de forma temporária a sua sensibilidade. Isto pode ser útil para atividade física (percentagem mais baixa), doença (percentagem mais alta), etc.

### Limite SGB

Valor de **glicose** abaixo do qual a insulina é suspensa (suspensão por glicose baixa). O valor predefinido usa o modelo de alvo padrão. O utilizador pode definir este valor entre 60 mg/dl (3,3 mmol/l) e 100 mg/dl (5,5 mmol/l). Valores abaixo de 65/3,6 levam ao uso do modelo predefinido.

### DynamicISF ajusta a sensibilidade

Esta definição (*«Ajustar os cálculos da sensibilidade ao usar o DynamicISF.»*) substitui o Autosens e usa a **TID** das últimas 24 h / **TID** de 7 dias como base para aumentar e diminuir a taxa basal, tal como faz o Autosens normal. Este valor calculado também é usado para ajustar o alvo, se as opções para ajustar o alvo com a sensibilidade estiverem ativas. Ao contrário do Autosens, esta opção não ajusta os valores de **FSI**.

(dyn-isf-things-to-consider-when-activating-dynamicisf)=
## O que ter em conta ao ativar o FSI Dinâmico

* O **FSI Dinâmico** só é recomendado a utilizadores avançados que dominam bem o controlo e a monitorização do seu **AAPS**. O ideal é que os utilizadores já tenham conseguido um bom controlo com o **SMB** antes de passarem para o **FSI Dinâmico**.
* Como foi dito acima, desative todas as [**Automatizações**](../DailyLifeWithAaps/Automations.md) que ativam uma **Percentagem do Perfil** em função da **glicose**, porque isso será demasiado agressivo e pode administrar insulina a mais! Isto já faz parte do algoritmo do **FSI Dinâmico**.
* A [Percentagem do Perfil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) é tida em conta no cálculo do FSI Dinâmico (ver [Fator de ajuste do FSI Dinâmico](#dyn-isf-adjustment-factor) acima). Não é boa prática usar durante muito tempo uma **Percentagem do Perfil** diferente de 100 %. Se concluir que o seu **Perfil** mudou, crie um novo **Perfil** com os valores revistos, em vez de usar o **Perfil** com uma percentagem específica.
* O **FSI Dinâmico** pode não funcionar para todos. Em especial, pode ver resultados inesperados se uma destas situações se aplicar a si:
  * Estilo de vida variável (padrões irregulares de alimentação ou de atividade física)
  * TID ou sensibilidade irregulares de dia para dia.
* Não há um guia preciso para definir o valor inicial do **Fator de ajuste**. No entanto, como ponto de partida: se os valores do seu **Perfil** estiverem corretos, quando estiver no alvo e os níveis de **glicose** estiverem estáveis, o valor do **DynISF** deve ser mais ou menos igual ao que tinha antes no seu **Perfil**.<br/>Se achar que o **FSI Dinâmico** é demasiado agressivo, baixe o **Fator de ajuste**, e vice-versa.
* Mesmo que o **DynISF** não use o **FSI do Perfil**, se notar que a sua sensibilidade é muito diferente da que estava guardada no seu **Perfil**, deve pensar em mantê-lo atualizado. Isto pode ser útil caso perca os dados do **AAPS** (_por exemplo,_ telefone novo, nova versão do **AAPS**…), porque o **FSI do Perfil** será usado como recurso nos 7 dias seguintes.