# Ajustar o perfil do AAPS

```{admonition} This is NOT a medical advice
:class: warning
Trabalhe com a sua equipa de saúde para ter apoio e conselhos sobre a gestão da sua diabetes.</br>
Use este guia só depois de [configurar corretamente o seu **Perfil**](https://androidaps.readthedocs.io/en/latest/SettingUpAaps/YourAapsProfile.md) e de cumprir todos os objetivos do **AAPS**.
```

Este guia explica a lógica dos resultados do algoritmo OpenAPS com um determinado __Perfil__ e indica que valores do **AAPS** podem ser ajustados quando observa certas situações ou padrões. As sugestões abaixo sobre testes da basal podem ser diferentes do que a sua equipa de saúde aconselha.

Usar o **loop fechado** pode tornar os testes da basal mais fáceis e pode reduzir muito o risco de hipoglicemia se a basal do seu __Perfil__ for demasiado forte.

## Alterar as definições do perfil: como proceder

1. Leia e compreenda as definições e os conselhos recomendados do __AAPS__ abaixo. Se não seguir estes conselhos, o processo de ajuste pode tornar-se difícil e é menos provável que consiga um __Perfil__ bem ajustado
2. Observe e compare com cuidado, **durante vários dias**, o que acontece com a sua __glicose__ e a sua __IA__.
3. Esteja atento a padrões no **AAPS** que acontecem (quase) todos os dias à mesma hora.
4. É importante fazer isto durante vários dias. Usar dados observados num único dia para decidir ajustes ao __Perfil__ costuma dar maus resultados.
5. Só depois de observar um padrão que se repete, por exemplo, às 13h vê um pico de __glicose__ ou um valor negativo de __IA__, comece a fazer pequenas alterações ao seu __Perfil__.
6. É importante alterar só uma coisa de cada vez. Por exemplo, aumente a sua basal em 10 % por volta das 13h.
7. Depois de cada alteração, é importante acompanhar o efeito na sua __glicose__ e na sua __IA__ nos dias seguintes.
8. Repita este processo: observe, decida e ajuste outra vez se for preciso

Não se apresse, vá devagar!

## Definições e conselhos recomendados enquanto ajusta a basal

- Faça todos os testes com o [loop fechado ativo](#AapsScreens-loop-status).
- **<u>DESLIGUE</u> todas as [automatizações](../DailyLifeWithAaps/Automations.md)**
- **<u>DESLIGUE</u> o [DynISF](#Open-APS-features-DynamicISF), o [AutoISF](#Open-APS-features-auto-isf) e o [AutoSens](#Open-APS-features-autosens)** para que não tentem adaptar o seu perfil.
- Não faça ações manuais (bólus manual, alvos temporários, etc.) durante os testes: deixe o sistema usar apenas as definições do **Perfil**.
- Para os [gráficos adicionais](#AapsScreens-section-g-additional-graphs): no gráfico 1, use Insulina ativa, Hidratos de carbono ativos (e Alteração da sensibilidade). No gráfico 2, use Desvios e Impacto na glicose. Quando pedir conselhos, inclua sempre estes gráficos nas suas capturas de ecrã.
- HCA=0[*](#profiletuning-cob-zero)

Outras situações que, idealmente, deve evitar, porque influenciam os dados e podem levar a más conclusões:
- Sem atividade física.
- Sem stress.
- Sem doença.
- Sem tempo extremo, como temperaturas muito altas ou muito baixas.
- Sem falhas da bomba ou de sessões do CGM.
- Sem hidratos de carbono não anunciados.

Note também:
- Se o seu [perfil de taxas basais](#your-aaps-profile-basal-rates) estiver correto, quando estiver no alvo com HCA=0[*](#profiletuning-cob-zero) e IA=0, vai ficar sempre no alvo, seja qual for o seu **FSI** (o **FSI** só é usado quando está acima do seu alvo da **glicose**).
- Precisa de verificar a **IA** atual, mas também o gráfico da **IA**, para ver como a **IA** evoluiu nas últimas horas.

(profiletuning-cob-zero)=

***HCA = 0**

Quer dizer que a refeição foi digerida e já não há hidratos de carbono no seu corpo.

O **AAPS** pode indicar [HCA=0 quando ainda tem hidratos de carbono ativos](../DailyLifeWithAaps/CobCalculation.md).

## Definições do [Perfil](../SettingUpAaps/YourAapsProfile.md)

Um **Perfil demasiado forte** indica uma combinação das seguintes situações:

- O número do [FSI](#your-aaps-profile-insulin-sensitivity-factor) é demasiado pequeno.
- O número da [basal](#your-aaps-profile-basal-rates) é demasiado grande.
- O número do [IHC](#your-aaps-profile-insulin-to-carbs-ratio) é demasiado pequeno.

## Observações da IA

*Nota: também pode usar o gráfico de IA do Loopalyzer nos relatórios do Nightscout para ver a IA de vários dias.*

Se observar os seguintes padrões ao fim de alguns dias, pense nas seguintes alterações:

### IA positiva

- A basal do **Perfil** pode não ser forte o suficiente (isto também pode ter outras causas, como comida não anunciada, doença, má absorção no local, etc.)

![IA positiva](../images/troubleshooting/profiletuning/PositiveInsulin.png)

### IA negativa

- Basal padrão demasiado forte.
- Pode ser o efeito de exercício ou atividade física anterior.

![IA negativa](../images/troubleshooting/profiletuning/NegativeInsulin.png)

- Refeição anterior: bólus a mais (que resultou numa basal temporária zero muito longa)

![IA negativa](../images/troubleshooting/profiletuning/NegativeInsulin2.png)

## Observações do alvo da glicose

### Presa em valores altos

- O número do __FSI__ é alto e não é forte o suficiente (a insulina calculada é fraca demais)

![Presa em valores altos](../images/troubleshooting/profiletuning/StuckHigh.png)

- A basal do __Perfil__ pode não ser forte o suficiente (os **SMB** não têm «reserva de basal» suficiente para usar)
- Uma segurança ([IA máx.](#Open-APS-features-maximum-total-iob-openaps-cant-go-over)?) pode ter sido ativada e estar a limitar a administração de insulina. Verifique no ecrã do plugin **APS** (**Configuração → APS → Abrir plugin**); consulte [SMB](#Open-APS-features-super-micro-bolus-smb).
- Problema técnico: absorção no local, conjunto de infusão, ...

### Presa em valores baixos

- __FSI__ demasiado forte: o número tem de ser aumentado
- Basal do __Perfil__ demasiado forte (se a IA também for negativa)

### Montanha-russa (subidas e descidas)

- **FSI** demasiado forte? Consulte o seu [Perfil do AAPS](#your-aaps-profile-insulin-sensitivity-factor)

![Montanha-russa](../images/troubleshooting/profiletuning/StrongISF.png)

## Observações da glicose depois das refeições

### Subida rápida e glicose a ficar alta

- A comida tem hidratos de carbono rápidos (como sumo de fruta).
- Pense em fazer um pré-bólus ou um pré-bólus um pouco mais cedo.
- Bólus (IHC ou % injetada) não é forte o suficiente.

![Subida alta](../images/troubleshooting/profiletuning/FastRise.png)

### Subida rápida e depois glicose a ficar baixa

- Pense em fazer um pré-bólus; o seu **Perfil** pode ser demasiado agressivo (correção excessiva da subida)
- Bólus demasiado forte.



## [Como calcular o seu IHC](#your-aaps-profile-insulin-to-carbs-ratio)

1. Primeiro, precisa de ter as definições corretas da basal padrão no seu **Perfil**.
2. Comece no alvo, de preferência sem IA negativa.
3. Registe a insulina total administrada em **Gerir → Bomba** (ou no histórico da bomba) e chame-lhe insulina inicial. Meça com muita precisão uma porção conhecida de hidratos de carbono e registe a hora de início e a IA inicial. Depois introduza a informação dos hidratos de carbono e do bólus no **AAPS** com o assistente (com o IHC atualmente configurado). Não se esqueça de comer os hidratos de carbono ;)
4. Algumas horas depois, quando HCA=0[*](#profiletuning-cob-zero) e estiver de novo no alvo, registe a hora de fim e anote a IA final. Verifique a insulina total administrada como antes e chame-lhe insulina final. *NOTA: O intervalo de tempo NÃO é importante, desde que seja mais longo do que a sua digestão*
5. À diferença entre a insulina inicial e a insulina final, subtraia/some a diferença IA final - IA inicial. Depois subtraia a insulina basal calculada a partir das definições do seu **Perfil**.
6. Se a __glicose__ estiver no alvo, terá a insulina total usada para «digerir» os seus hidratos de carbono. Calcule o seu **IHC**.

### Explicações para o cálculo do IHC

- Com um **Perfil** com a taxa basal padrão correta, em qualquer intervalo de tempo deve ficar no alvo e ter uma IA perto de 0. Recebe apenas a basal do seu **Perfil**.
- Junta hidratos de carbono e bólus a esta mistura. Espere até o seu corpo digerir todos os hidratos de carbono e voltar ao alvo da **glicose**. A insulina que usar será a soma da sua basal + a insulina necessária para os hidratos de carbono. Calcula a insulina usada para a sua basal (com o seu **Perfil**) e o resto será a insulina usada para digerir os hidratos de carbono.
- Se o intervalo de tempo for curto demais, ficarão hidratos de carbono por digerir e, por isso, a sua «insulina necessária para os hidratos de carbono» estará errada.
- Se o intervalo de tempo for longo demais, não acontece nada de mal. Vai usar todos os seus hidratos de carbono e vai receber mais basal. No fim, vai subtrair a basal da insulina total usada, por isso o intervalo de tempo mais longo (com mais basal) não afeta o resultado.

Escrito originalmente por @Robby (Discord), com dicas e truques para ajudar a ajustar o seu **Perfil do AAPS**; revisto e editado pela comunidade (obrigado!).
