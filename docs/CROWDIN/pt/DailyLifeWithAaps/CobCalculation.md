# Cálculo de HCA

## Como é que o AAPS calcula o valor de HCA?

Quando o utilizador introduz hidratos de carbono numa refeição ou numa correção de hidratos, o **AAPS** soma-os aos hidratos de carbono ativos atuais (**HCA**). Depois, o **AAPS** calcula a absorção dos hidratos de carbono do utilizador com base nos desvios observados nos valores de **glicose** do utilizador. A velocidade de absorção depende do fator de sensibilidade aos hidratos de carbono (**CSF**). Isto não é uma definição do **Perfil** do utilizador, mas é calculado pelo **AAPS** a partir das definições de **FSI/IHC**, e indica quantos mg/dl 1 g de hidratos de carbono faz subir a **glicose** do utilizador.

## Fator de sensibilidade aos hidratos de carbono

A fórmula usada pelo **AAPS** é:

- absorbed_carbs = deviation * ic / isf.

O efeito do **Perfil** do utilizador será:

- _aumentar_ o **IHC** - aumenta os hidratos de carbono absorvidos a cada 5 minutos e assim encurta o tempo total de absorção;

- _aumentar_ o **FSI** - diminui os hidratos de carbono absorvidos a cada 5 minutos e assim prolonga o tempo total de absorção; e

- _alterar_ a **Percentagem do Perfil** - aumenta/diminui os dois valores e assim não tem efeito no tempo de absorção dos hidratos de carbono.

Por exemplo, se no **Perfil** do utilizador o **FSI** for 100 e o **IHC** for 5, o fator de sensibilidade aos hidratos de carbono do utilizador será 20. Por cada 20 mg/dl que a **glicose** do utilizador sobe, o **AAPS** calcula 1 g de hidratos de carbono como absorvido. A **IA** positiva também afeta o cálculo dos **HCA**. Assim, se o **AAPS** previr que a **glicose** do utilizador desça 20 mg/dl por causa da **IA** e, em vez disso, ela ficar estável, o **AAPS** também calcula 1 g de hidratos de carbono como absorvido.

Os hidratos de carbono também serão absorvidos pelos métodos descritos abaixo, conforme o algoritmo de sensibilidade selecionado no **AAPS** do utilizador.

## Sensibilidade aos hidratos de carbono - Oref1

Os hidratos de carbono não absorvidos são cortados após o tempo definido:

![Oref1](../images/cob_oref0_orange_II.png)

![Gráfico de HCA com corte do Oref1](../images/cob_oref0_orange_I.png)

```{admonition} Older screenshot
:class: note
A captura de ecrã acima é de uma versão anterior do **AAPS** — no **AAPS** 4 os gráficos têm um aspeto um pouco diferente, mas o gráfico de **HCA** mostra a mesma informação.
```


## Sensibilidade aos hidratos de carbono - WeightedAverage

A absorção é calculada para ter HCA = 0 após o tempo definido:

![AAPS, WeightedAverage](../images/cob_aaps2_orange_II.png)

Se for usada a absorção mínima de hidratos de carbono (min_5m_carbimpact) em vez do valor calculado a partir dos desvios da **glicose**, aparece um ponto cor de laranja no gráfico de **HCA**.

(CobCalculation-detection-of-wrong-cob-values)=
## Deteção de valores de HCA errados

O **AAPS** avisa o utilizador se este estiver prestes a dar um bólus com **HCA** de uma refeição anterior e o algoritmo detetar que o cálculo atual dos **HCA** está incorreto. Neste caso, mostra ao utilizador uma dica adicional no ecrã de confirmação, depois de usar o assistente de bólus.

### Como é que o AAPS deteta valores de HCA errados?

Normalmente, o __AAPS__ deteta a absorção dos hidratos de carbono através dos desvios da **glicose**. Se o utilizador introduziu hidratos de carbono mas o **AAPS** não consegue detetar a sua absorção estimada através dos desvios da **glicose**, usa o método [min_5m_carbimpact](#Preferences-min_5m_carbimpact) para calcular a absorção (o chamado «fallback»). Como este método calcula apenas a absorção mínima de hidratos de carbono, sem ter em conta os desvios da **glicose**, pode levar a valores de HCA incorretos.

![Dica sobre um valor de HCA errado](../images/Calculator_SlowCarbAbsorption.png)

Na captura de ecrã acima, em 66 % do tempo a absorção dos hidratos de carbono foi calculada pelo min_5m_carbimpact em vez do valor detetado a partir dos desvios. Isto indica que o utilizador pode ter tido menos **HCA** do que o calculado pelo algoritmo.

### Como lidar com este aviso?

- Pondere cancelar o tratamento - prima «Cancelar» em vez de OK.
- Calcule novamente a próxima refeição com o assistente de bólus, sem marcar **HCA**.
- Se precisar de um bólus de correção, introduza-o manualmente.
- Tenha cuidado para não causar uma sobredosagem ou acumulação de insulina!


### Porque é que o algoritmo não deteta corretamente os HCA?

Isto pode acontecer porque:
- Talvez o utilizador tenha sobrestimado os hidratos de carbono ao introduzi-los.
- Atividade / exercício depois da refeição anterior.
- O IHC precisa de ser ajustado.
- O valor de min_5m_carbimpact está errado (o recomendado é 8 com SMB e 3 com AMA).


## Correção manual dos hidratos de carbono introduzidos

Se os hidratos de carbono foram sobrestimados ou subestimados, isto pode ser corrigido no ecrã **Histórico de tratamentos**, como descrito [aqui](#screens-bolus-carbs).


## Correção de hidratos de carbono - como eliminar um registo de hidratos de carbono dos Tratamentos


O ecrã **Histórico de tratamentos** pode ser usado para corrigir um registo de hidratos de carbono errado, eliminando-o. Isto pode acontecer porque o utilizador sobrestimou ou subestimou os hidratos de carbono introduzidos:

![Eliminar um registo de hidratos de carbono do Histórico de tratamentos](../images/e123d85d-907e-4545-bf1b-09fee4d42555.png)

1. Verifique e memorize os valores atuais de **HCA** e **IA** no ecrã principal do **AAPS**.
2. Abra o **Histórico de tratamentos** (menu lateral → *Histórico de tratamentos*), separador **Hidratos e bólus**. Dependendo da bomba, os hidratos de carbono podem aparecer junto com a insulina numa só linha ou como um registo separado (por exemplo, com a Dana RS).
3. **Prima longamente** o registo de hidratos de carbono errado — a lista muda para o **modo de seleção**, com uma caixa de verificação em cada linha, e o registo fica marcado (assinalado com **1** acima). Marque também os outros registos que quer remover.
4. Toque no ícone **🗑 Eliminar** na barra superior (assinalado com **2**) e confirme — a janela de confirmação mostra exatamente o que vai ser removido.
5. Confirme que os hidratos de carbono foram removidos, verificando de novo os **HCA** no ecrã principal do **AAPS**.
6. Faça o mesmo para a **IA** se houver apenas uma linha com hidratos de carbono e insulina.
7. Se os hidratos de carbono não forem removidos como previsto e forem adicionados mais hidratos de carbono como explicado nesta secção, o valor de **HCA** ficará demasiado alto e isso pode levar o **AAPS** a administrar insulina a mais.
8. Introduza a quantidade correta de hidratos de carbono na janela **Hidratos** (**Tratamentos** → **Hidratos**) e defina a hora correta do evento.
9. Se havia apenas uma linha com hidratos de carbono e insulina, o utilizador deve também adicionar de novo a quantidade de insulina. Defina a hora correta do evento e verifique a **IA** no ecrã principal depois de confirmar o novo registo.

