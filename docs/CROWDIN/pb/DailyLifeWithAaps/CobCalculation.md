# Cálculo de COB

## Como o AAPS calcula o valor de COB?

Quando o usuário insere carboidratos como parte de uma refeição ou de uma correção de carboidratos, o **AAPS** soma esse valor aos carboidratos ativos atuais (**COB**). Depois, o **AAPS** calcula a absorção dos carboidratos do usuário com base nos desvios observados nos valores de **BG** do usuário. A velocidade de absorção depende do fator de sensibilidade aos carboidratos (**CSF**). Isto não é uma configuração do **Perfil** do usuário, mas é calculado pelo **AAPS** a partir dos valores de **ISF/I:C**. Ele indica quantos mg/dl 1 g de carboidratos aumenta a **BG** do usuário.

## Fator de sensibilidade aos carboidratos

A fórmula usada pelo **AAPS** é:

- absorbed_carbs = deviation * ic / isf.

O efeito no **Perfil** do usuário será:

- _increase_ **IC** - by increasing the carbs absorbed every 5 minutes thus shorten total time of absorption;

- _aumentar_ o **ISF** - diminui os carboidratos absorvidos a cada 5 minutos e assim prolonga o tempo total de absorção; e

- _change_ **Profile Percentage** - increase/decrease both values thus has no impact on carbs absorption time.

For example, if the user’s **Profile** **ISF** is 100 and the **I:C** is 5, the user’s Carb Sensitivity Factor would be 20. A cada 20 mg/dl que a **BG** do usuário sobe, o **AAPS** calcula 1 g de carboidratos como absorvido. Um **IOB** positivo também afeta o cálculo do **COB**. Então, se o **AAPS** prevê que a **BG** do usuário vai cair 20 mg/dl por causa do **IOB**, mas ela fica estável, o **AAPS** também calcula 1 g de carboidratos como absorvido.

Os carboidratos também são absorvidos pelos métodos descritos abaixo, conforme o algoritmo de sensibilidade selecionado no **AAPS** do usuário.

## Sensibilidade aos carboidratos - Oref1

Os carboidratos não absorvidos são descartados após o tempo especificado:

![Oref1](../images/cob_oref0_orange_II.png)

![Gráfico de COB com corte do Oref1](../images/cob_oref0_orange_I.png)

```{admonition} Older screenshot
:class: note
A captura de tela acima é de uma versão anterior do **AAPS** — no **AAPS** 4 os gráficos são um pouco diferentes, mas o gráfico de **COB** mostra as mesmas informações.
```


## Sensibilidade aos carboidratos - WeightedAverage

A absorção é calculada para ter COB = 0 após o tempo especificado:

![AAPS, WeightedAverage](../images/cob_aaps2_orange_II.png)

Se a absorção mínima de carboidratos (min_5m_carbimpact) for usada em vez do valor calculado a partir dos desvios de **BG**, aparece um ponto laranja no gráfico de **COB**.

(CobCalculation-detection-of-wrong-cob-values)=
## Detecção de valores de COB errados

**AAPS** will warn the user if they are about to bolus with **COB** from a previous meal if the algorithm detects current **COB** calculation as incorrect. Nesse caso, ele mostra ao usuário uma dica adicional na tela de confirmação depois do uso do assistente de bólus.

### Como o AAPS detecta valores de COB errados?

Normalmente, o __AAPS__ detecta a absorção de carboidratos pelos desvios de **BG**. Se o usuário inseriu carboidratos, mas o **AAPS** não consegue detectar a absorção estimada pelos desvios de **BG**, ele usa o método [min_5m_carbimpact](#Preferences-min_5m_carbimpact) para calcular a absorção (o chamado ‘fallback’). Como este método calcula apenas a absorção mínima de carboidratos, sem considerar os desvios de **BG**, ele pode levar a valores de COB incorretos.

![Dica sobre valor de COB errado](../images/Calculator_SlowCarbAbsorption.png)

Na captura de tela acima, em 66% do tempo a absorção de carboidratos foi calculada pelo min_5m_carbimpact em vez do valor detectado pelos desvios. Isto indica que o usuário pode ter tido menos **COB** do que o calculado pelo algoritmo.

### O que fazer com este aviso?

- Considere cancelar o tratamento - toque em ‘Cancelar’ em vez de OK.
- Calcule sua próxima refeição de novo com o assistente de bólus, deixando o **COB** desmarcado.
- Se você precisar de um bólus de correção, insira-o manualmente.
- Be careful not to overdose or stack insulin!


### Por que o algoritmo não detecta o COB corretamente?

Isso pode acontecer porque:
- Talvez o usuário tenha superestimado os carboidratos ao inseri-los.
- Atividade / exercício depois da refeição anterior.
- O I:C precisa de ajuste.
- O valor de min_5m_carbimpact está errado (o recomendado é 8 com SMB, 3 com AMA).


## Correção manual dos carboidratos inseridos

Se os carboidratos foram superestimados ou subestimados, isso pode ser corrigido na tela **Histórico de tratamentos**, como descrito [aqui](#screens-bolus-carbs).


## Correção de carboidratos - como excluir um registro de carboidratos dos Tratamentos


A tela **Histórico de tratamentos** pode ser usada para corrigir um registro de carboidratos errado, excluindo-o. Isso pode acontecer porque o usuário superestimou ou subestimou os carboidratos inseridos:

![Excluir um registro de carboidratos do Histórico de tratamentos](../images/e123d85d-907e-4545-bf1b-09fee4d42555.png)

1. Verifique e anote o **COB** e o **IOB** atuais na tela principal do **AAPS**.
2. Abra o **Histórico de tratamentos** (menu lateral → *Histórico de tratamentos*), aba **Carboidratos e bólus**. Dependendo da bomba, os carboidratos podem aparecer junto com a insulina em uma linha ou como um registro separado (por exemplo, com a Dana RS).
3. **Toque e segure** o registro de carboidratos errado — a lista muda para o **modo de seleção**, com uma caixa de seleção em cada linha, e o registro fica marcado (marcado com **1** acima). Marque também outros registros que você quer remover.
4. Toque no ícone **🗑 Excluir** na barra superior (marcado com **2**) e confirme — o diálogo de confirmação mostra exatamente o que será removido.
5. Verifique se os carboidratos foram removidos, olhando de novo o **COB** na tela principal do **AAPS**.
6. Faça o mesmo com o **IOB** se houver apenas uma linha com carboidratos e insulina.
7. Se os carboidratos não forem removidos como planejado e outros carboidratos forem adicionados como explicado nesta seção, o valor de **COB** ficará alto demais e isso pode levar o **AAPS** a administrar insulina demais.
8. Insira a quantidade correta de carboidratos pelo diálogo **Carboidratos** (**Tratamentos** → **Carboidratos**) e defina o horário correto do evento.
9. Se havia apenas uma linha com carboidratos e insulina, o usuário também deve inserir de novo a quantidade de insulina. Defina o horário correto do evento e verifique o **IOB** na tela principal depois de confirmar o novo registro.

