(Open-APS-features-DynamicISF)=
# ISF dinâmico (DynISF)

Até agora, com o **AMA** e o **SMB**, o **ISF** era definido no **Perfil** e era estático para cada período definido do dia. Mas, na realidade, o **ISF** de uma pessoa não é tão estático e varia conforme o nível de **glicose (BG)**: com a glicose alta, o usuário precisa de mais insulina para baixar a **glicose (BG)** em 50 mg/dl / 3 mmol/l do que precisaria com uma **glicose (BG)** mais baixa. O [Autosens](#Open-APS-features-autosens) foi o primeiro algoritmo a tentar resolver este problema, ajustando o **ISF** fora dos horários das refeições.

O **ISF dinâmico** (também chamado **DynISF**) tem o mesmo objetivo, mas é mais avançado, porque pode ser usado o tempo todo. Ele é recomendado apenas para usuários avançados que dominam bem o controle e o monitoramento do **AAPS**. Leia [O que considerar ao ativar o ISF dinâmico](#dyn-isf-things-to-consider-when-activating-dynamicisf) abaixo antes de experimentá-lo.

```{admonition} CAUTION - Automations or Profile Percentage change
:class: warning

As **Automações** devem sempre ser usadas com cuidado. Isso vale principalmente com o **ISF dinâmico**.

Ao usar o **ISF dinâmico**, desative qualquer mudança temporária de **Perfil** feita por uma regra de **Automação**, porque ela deixaria o **ISF dinâmico** agressivo demais nos bólus de correção e causaria hipoglicemia. Esse é exatamente o objetivo do **ISF dinâmico**, por isso não é preciso pedir ao **AAPS**, por meio da Automação, que dê mais insulina quando a **glicose (BG)** estiver alta.

```

Para usar o **ISF dinâmico**, o banco de dados do **AAPS** precisa de no mínimo 7 dias de dados do **AAPS** do usuário.

## What does Dynamic ISF do?

O **ISF dinâmico** adapta o fator de sensibilidade à insulina (**ISF**) de forma dinâmica, com base em:

- Dose diária total de insulina (**TDD**); e
- valores de glicose atuais e previstos.

When using **Dynamic ISF**, the **ISF** values entered in the **Profile** are not used at all anymore, except as a fallback if there is not enough TDD data in **AAPS** database (*i.e.* fresh reinstallation of the app).

**SMB/AMA** - um exemplo de **Perfil** de um usuário com **ISF** estático, definido pelo usuário e usado pelo **SMB** e pelo **AMA**.

![ISF estático](../images/DynamicISF/profile_viewer_isf.png)

**ISF dinâmico** - um exemplo de **ISF** de um usuário que muda conforme o cálculo do **ISF dinâmico**.

![ISF dinâmico](../images/DynamicISF/DynISF2.png)

A parte circulada em vermelho mostra: `profile ISF` -> `ISF as calculated by DynISF`. <br/> Tocar nesta seção abre um diálogo com mais informações, como o **ISF** usado para a calculadora e para a absorção de carboidratos (veja [Outros usos do ISF](#dynisf-other-usages-of-isf) abaixo).

O valor do **DynISF** também pode ser mostrado em um gráfico: toque em **Adicionar gráfico** abaixo dos gráficos na tela principal e selecione **VSENS** (sensibilidade variável). Ele aparece como uma linha branca (parte de baixo da imagem acima).

## How is Dynamic ISF calculated?

O **ISF dinâmico** usa o modelo de Chris Wilson para determinar o **ISF**, em vez do valor de **ISF** estático definido pelo usuário no **Perfil**. Uma explicação detalhada pode ser vista aqui: [Chris Wilson on Insulin Sensitivity (Correction Factor) with Loop and Learn, 2/6/2022](https://www.youtube.com/watch?v=oL49FhOts3c).

A equação do **ISF dinâmico** implementada é: `ISF = 1800 / ((TDD * DynISF Adjust Factor) * Ln (( current BG / insulin divisor) + 1 ))`

As variáveis usadas nesta equação são explicadas abaixo.<br/> Nota: `Ln` significa logaritmo natural, uma função matemática.

A implementação usa a equação acima para calcular o **ISF** atual e nas [previsões de **IOB**, **ZT** (basal temporária zero) e **UAM**](#aaps-screens-prediction-lines) do oref1. Ela também é usada para o **COB** e no assistente de bólus (veja [Outros usos do ISF](#dynisf-other-usages-of-isf) abaixo).

### TDD (dose diária total)
O TDD usa uma combinação dos seguintes valores:
1.  média de **TDD** de 7 dias;
2.  o **TDD** do dia anterior; e
3.  uma média ponderada das últimas oito (8) horas de uso de insulina, extrapolada para 24 horas.

O **TDD** usado na equação acima tem um terço de peso de cada um dos valores acima.

### Fator de ajuste do ISF dinâmico

Isto é definido nas **Configurações** do usuário e é usado para deixar o **ISF dinâmico** mais ou menos agressivo. Veja a seção [Preferências](#dyn-isf-preferences) abaixo.

### Divisor de insulina
O divisor de insulina depende do pico da insulina usada e é inversamente proporcional ao tempo do pico. Para a Lyumjev este valor é 75, para a Fiasp 65 e para a insulina rápida comum 55.

### ISF baseado na glicose prevista para as decisões de dose

A sensibilidade dinâmica é calculada com o valor de **glicose atual** e é mostrada como seu ISF atual no **AAPS**. Mas, para calcular as doses, o algoritmo oref1 calcula e usa o **ISF futuro**.

Isso é feito para evitar dar insulina demais quando a **glicose (BG)** está baixa ou deve ficar baixa.

O **ISF futuro** usa a mesma fórmula descrita acima, mas pode usar a **glicose mínima prevista** em vez da **glicose atual**. A **glicose mínima prevista**, [como calculada no oref1](#aaps-screens-how-predictions-become-a-dosing-decision), é o valor mais baixo que a sua glicose deve atingir durante todo o período das previsões.

* If the current **BG** is above target<br/> **and** if **BG** levels are flat, within +/- 3 mg/dL:<br/>BG is used in the formula as follows: `average(minimum predicted BG, current BG)`.
* If eventual **BG** is above target and glucose levels are increasing,<br/> **or** eventual **BG** is above current **BG**:<br/>BG is used in the formula as follows: `current BG`.
* Caso contrário:<br/>a glicose é usada na fórmula assim: `minimum predicted BG`.

Para uma explicação simplificada, veja a captura de tela abaixo, que mostra a situação acima. Os pontos laranja usam a **glicose prevista**, os pontos roxos usam a **média(glicose prevista, glicose atual)** e os pontos azuis usam a **glicose atual**.

![DynISF_BGValue.png](../images/DynamicISF/DynISF_BGValue.png)

(dynisf-other-usages-of-isf)=
## Outros usos do ISF

### ISF e absorção do COB

Como descrito na página [Cálculo de COB](../DailyLifeWithAaps/CobCalculation.md), normalmente a absorção do COB é calculada com esta fórmula:   
`absorbed_carbs = deviation * ic / isf`  
Ao usar o **ISF dinâmico**, o **ISF** usado aqui é a média dos valores do ISF dinâmico das últimas 24 h.

### ISF no assistente de bólus

Ao usar o [Assistente de Bólus](#aaps-screens-bolus-wizard), o **ISF** é usado para adicionar uma correção se a **glicose (BG)** estiver acima do alvo.

Ao usar o **ISF dinâmico**, o **ISF** usado aqui é a média dos valores do ISF dinâmico das últimas 24 h.

(dyn-isf-preferences)=
## Configurações

Para ativar, marque **Usar sensibilidade dinâmica** em [Configurações > SMB OpenAPS](#Preferences-openaps-smb-settings). Novas configurações ficam disponíveis depois de selecioná-lo.

![Configurações do ISF dinâmico](../images/preferences/settings_dynamic_isf.png)

(dyn-isf-adjustment-factor)=
### Fator de ajuste do DynamicISF
O **ISF dinâmico** funciona com base em uma única regra que deveria valer para todos, o que significa que pessoas com o mesmo **TDD** teriam a mesma sensibilidade. Como cada usuário tem sua própria sensibilidade, o **Fator de ajuste** permite ao usuário definir se é mais ou menos sensível à insulina do que a pessoa "padrão".

O **Fator de ajuste** é um valor entre 1% e 300%. Ele funciona como um multiplicador do valor de **TDD**.

* Aumentar este valor acima de 100% torna o **DynISF** mais agressivo: os valores de **ISF** ficam *menores* (_ou seja_, é preciso mais insulina para baixar um pouco a **glicose (BG)**)
* Baixar este valor abaixo de 100% torna o **DynISF** menos agressivo: os valores de **ISF** ficam maiores (_ou seja_, é preciso menos insulina para baixar um pouco a **glicose (BG)**).

O **Fator de ajuste** também muda quando você ativa uma [**Troca de Perfil** com porcentagem](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md). Uma **Porcentagem do perfil** menor diminui o **Fator de ajuste**, e uma **Porcentagem do perfil** maior o aumenta.

For example, if your **Adjustment Factor** is 80%, and **Profile Switch** to 80% is actioned, the resulting **Adjustment Factor** will be `0.8*0.8=0.64`.

Isso significa que, ao usar o **DynISF**, você pode usar a **Porcentagem do perfil** para ajustar sua sensibilidade manualmente por algum tempo. Isso pode ser útil para atividade física (porcentagem menor), doença (porcentagem maior) etc.

### Limite do LGS

Valor de **glicose (BG)** abaixo do qual a insulina é suspensa (suspensão por glicose baixa). O valor padrão usa o modelo de alvo padrão. O usuário pode definir este valor entre 60 mg/dl (3,3 mmol/l) e 100 mg/dl (5,5 mmol/l). Valores abaixo de 65/3,6 fazem com que o modelo padrão seja usado.

### DynamicISF ajusta a sensibilidade

Esta configuração (*"Ajustar os cálculos de sensibilidade ao usar o DynamicISF."*) substitui o Autosens e usa o **TDD** das últimas 24 h / **TDD** de 7 dias como base para aumentar e diminuir a taxa basal, da mesma forma que o Autosens padrão. Este valor calculado também é usado para ajustar o alvo, se as opções para ajustar o alvo com a sensibilidade estiverem ativadas. Ao contrário do Autosens, esta opção não ajusta os valores de **ISF**.

(dyn-isf-things-to-consider-when-activating-dynamicisf)=
## O que considerar ao ativar o ISF dinâmico

* O **ISF dinâmico** é recomendado apenas para usuários avançados que dominam bem o controle e o monitoramento do **AAPS**. O ideal é que os usuários tenham alcançado um bom controle com o **SMB** antes de passar para o **ISF dinâmico**.
* Como dito acima, desligue todas as [**Automações**](../DailyLifeWithAaps/Automations.md) que ativam uma **Porcentagem do perfil** com base na **glicose (BG)**, porque isso será agressivo demais e pode administrar insulina demais! Isso já faz parte do algoritmo do **ISF dinâmico**.
* A [Porcentagem do perfil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) é levada em conta no cálculo do ISF dinâmico (veja [Fator de ajuste do ISF dinâmico](#dyn-isf-adjustment-factor) acima). Não é uma boa prática usar uma **Porcentagem do perfil** diferente de 100% por muito tempo. Se você perceber que o seu **Perfil** mudou, crie um novo **Perfil** com os valores revisados, em vez de reproduzir o **Perfil** com uma porcentagem específica.
* O **ISF dinâmico** pode não funcionar para todos. Em especial, você pode ver resultados inesperados se uma destas situações se aplicar a você:
  * Estilo de vida variável (padrões irregulares de alimentação ou de atividade física)
  * TDD ou sensibilidade irregulares de um dia para outro.
* Não há um guia preciso para definir o valor inicial do **Fator de ajuste**. Mas, como ponto de partida: se os valores do seu **Perfil** estão corretos, quando você está na faixa-alvo e os níveis de **glicose (BG)** estão estáveis, o valor do **DynISF** deve ser mais ou menos o mesmo que você tinha antes no seu **Perfil**.<br/>Se você perceber que o **ISF dinâmico** está agressivo demais, diminua o **Fator de ajuste**, e vice-versa.
* Mesmo que o **DynISF** não use o **ISF do Perfil**, se você perceber que a sua sensibilidade está muito diferente da que estava no seu **Perfil**, considere mantê-lo atualizado. Isso pode ser útil se você perder os dados do **AAPS** (_por exemplo_, telefone novo, nova versão do **AAPS**…), pois o **ISF do Perfil** será usado como reserva nos próximos 7 dias.