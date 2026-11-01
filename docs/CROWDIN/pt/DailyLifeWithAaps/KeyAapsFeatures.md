# Principais funcionalidades do AAPS

## Modo do loop

O estado do loop é mostrado no ecrã principal com um dos ícones abaixo.

O **AAPS** tem vários modos do loop, como Loop Fechado (1), Suspensão Glicose Baixa (SGB - 2) e Loop Aberto (3).

Veja [Ecrãs do AAPS > Ecrã principal > Estado do loop](#AapsScreens-loop-status) para saber como selecionar o modo do loop e o que significam os outros ícones da imagem (4 a 6).

![Estado do loop](../images/Home2020_LoopStatus.png)

(KeyAapsFeatures-OpenLoop)=

### Loop Aberto

O **AAPS** avalia continuamente todos os dados disponíveis (IA, HCA, glicose...) e faz sugestões de tratamento (basais temporárias) sobre como ajustar a sua terapia, se necessário.

As sugestões não são executadas automaticamente (como no loop fechado). As sugestões têm de ser aplicadas manualmente pelo utilizador na bomba (se usar a bomba virtual) ou com um botão, se o **AAPS** estiver ligado a uma bomba real.

Quando o **AAPS** tem uma sugestão, aparece uma entrada **Loop** com um distintivo na navegação inferior do ecrã principal. Prima-a para ler a sugestão («Aceitar nova basal temporária:») com a taxa, a duração e o motivo, e depois prima **Executar** para a aplicar:

![Sugestão do loop aberto com o botão Executar](../images/screens/loop_tab.png)

Uma sugestão só é válida durante alguns minutos. Se tiver mais de cerca de 9 minutos, ou se entretanto o loop tiver sido suspenso ou a bomba desligada, o **AAPS** recusa-a e nada é enviado para a bomba (*«Esta sugestão é demasiado antiga. Nada foi enviado para a bomba. Aguarde pela próxima.»*). Aguarde pela próxima sugestão.

Esta opção serve para conhecer o funcionamento do **AAPS** ou para quem usa uma bomba não suportada. Fica em Loop Aberto, seja qual for a escolha que fizer aqui, até ao fim do **[Objetivo 5](#objectives-objective5)**.

(KeyAapsFeatures-LGS)=

### Suspensão Glicose Baixa (SGB)

Neste modo, a [maxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over) é definida como zero.

Isto significa que, se a glicose estiver a descer, o **AAPS** pode reduzir a basal por si. Mas se a glicose estiver a subir, não é feita nenhuma correção automática. As suas taxas basais mantêm-se como definidas no seu **Perfil** atual. Só é dada insulina adicional para baixar a **glicose** se a IA for negativa (por causa de uma Suspensão Glicose Baixa anterior).

Este modo está disponível a partir do **[Objetivo 6](#objectives-objective6)**.

Além de o selecionar por si, o **AAPS** também pode mudar sozinho para este modo: enquanto está a trabalhar no **[Objetivo 6](#objectives-objective6)** e sempre que deteta valores de glicose duplicados (veja [Sinal de aviso da glicose](#aaps-screens-bg-warning-sign)).

(KeyAapsFeatures-ClosedLoop)=

### Loop Fechado

O **AAPS** avalia continuamente todos os dados disponíveis (IA, HCA, glicose...) e ajusta automaticamente o tratamento, se necessário (*ou seja,* sem mais intervenção sua), para atingir o [intervalo ou valor alvo](#profile-glucose-targets) definido (administração de bólus, basal temporária, paragem da insulina para evitar uma hipoglicemia, etc.).

O Loop Fechado funciona dentro de muitos limites de segurança, que podem ser definidos individualmente.

O Loop Fechado só é possível se estiver no **[Objetivo 7](#objectives-objective7)** ou acima e usar uma bomba suportada.

(autosens)= (Open-APS-features-autosens)=

## Autosens

- O Autosens é um algoritmo que analisa os desvios da glicose (positivos/negativos/neutros).
- Tenta descobrir quão sensível/resistente está com base nestes desvios.
- A implementação oref no **OpenAPS** usa uma combinação de dados de 24 e de 8 horas. Usa aquele que for mais sensível.
- Quem vem do oref1 vai provavelmente notar que o sistema pode reagir menos às mudanças, porque a sensibilidade varia entre 24 e 8 horas.
- Mudar a cânula ou mudar o perfil repõe o rácio do Autosens em 100% (uma troca de perfil com percentagem e com duração não repõe o Autosens).
- O Autosens ajusta a sua basal e o FSI (ou seja, faz o mesmo que uma alteração do perfil).
- Se comer hidratos de carbono sem parar durante um período longo, o Autosens será menos eficaz nesse período, porque os hidratos de carbono são excluídos dos cálculos da variação da **glicose**.
- Os desvios são convertidos num **rácio de sensibilidade** (uma percentagem): um rácio abaixo de 100% significa que o AAPS considera que está mais sensível à insulina do que o seu **Perfil** pressupõe (por isso baixa a basal efetiva e sobe o valor do FSI), e um rácio acima de 100% significa que está mais resistente (por isso sobe a basal e baixa o valor do FSI).
- Por predefinição, este rácio fica entre 0,7 (70%, mais sensível) e 1,2 (120%, mais resistente), para que uma série de dados invulgares não possa afastar demasiado a sua dosagem do seu **Perfil**. Estes limites podem ser ajustados nas definições avançadas da Deteção de sensibilidade.
- O Autosens e o [Autoajuste](../AdvancedOptions/Autotune.md) tratam o mesmo problema de base em escalas de tempo diferentes: o Autosens ajusta a sua dosagem *em tempo real*, minuto a minuto, com base nas últimas 8–24 h, enquanto o Autoajuste reescreve lentamente o próprio *Perfil* com base em semanas de histórico. É normal e esperado usar os dois: completam-se em vez de se repetirem.

*Para a descrição técnica completa do algoritmo Autosens, veja a [documentação do Autosens do OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).*

(Open-APS-features-super-micro-bolus-smb)=

## Super Micro Bólus (SMB)

O **SMB**, abreviatura de **Super Micro Bólus**, é uma funcionalidade do OpenAPS introduzida a partir de 2018, no algoritmo Oref1. Ao contrário do **AMA**, o **SMB** não usa basais temporárias para controlar a glicose, mas sobretudo **pequenos super micro bólus**. Em situações em que o **AMA** adicionaria 1,0 U de insulina com uma basal temporária, o **SMB** administra vários super micro bólus em pequenos passos, em **intervalos de 5 minutos**, por exemplo 0,4 U, 0,3 U, 0,2 U e 0,1 U. Ao mesmo tempo (por razões de segurança), a taxa basal atual é posta a 0 U/h durante algum tempo para evitar uma sobredosagem (**«basal temporária de zero»**). Assim, o sistema consegue ajustar a glicose mais depressa do que com o aumento da basal temporária no **AMA**.

Graças ao SMB, para refeições com hidratos de carbono apenas «lentos», pode bastar indicar ao sistema a quantidade de hidratos de carbono prevista e deixar o resto ao **AAPS**. No entanto, isto pode causar picos mais altos depois das refeições (pós-prandiais), porque não é possível dar o bólus antes da refeição. Ou pode dar, se necessário com antecedência, um **bólus inicial** que cobre os hidratos de carbono **só em parte** (por exemplo 2/3 da quantidade estimada) e deixar o **SMB** administrar o resto da insulina.

![SMBs on the IOB graph](../images/SMBs.png)

Os SMB são mostrados no [gráfico da IA](#aaps-screens-iob) com triângulos azuis. [Prima e mantenha o dedo](#aaps-screens-graph-press-and-hold) no gráfico sobre um triângulo para ver quanta insulina foi administrada, ou use o [Histórico de tratamentos](#aaps-screens-treatments).

As funcionalidades do **SMB** incluem alguns mecanismos de segurança:

1. **Maior dose única de SMB**  
  A maior dose única de SMB só pode ser o menor destes valores:
  
        * valor correspondente à taxa basal atual (ajustada pelo Autosens) durante o tempo definido em «Máx. de minutos de basal para limitar SMB», por exemplo a quantidade de basal dos próximos 30 minutos, ou
        * metade da quantidade de insulina necessária neste momento, ou
        * a parte que resta do seu valor de maxIOB nas definições.
      

2. **Basais temporárias baixas**  
  Basais temporárias baixas («low temps») ou basais temporárias de 0 U/h («zero-temps») são ativadas com mais frequência com **SMB**. Isto é intencional, por razões de segurança, e não tem efeitos negativos se o **Perfil** estiver bem definido. No gráfico principal, a curva da IA (linha amarela fina) diz mais do que o percurso das basais temporárias.

3. **Refeições não anunciadas**  
  Cálculos adicionais para prever a evolução da glicose, por exemplo pela **RNA** (refeições não anunciadas). Mesmo sem o utilizador introduzir hidratos de carbono, a **RNA** consegue detetar automaticamente uma subida importante da glicose causada por refeições, adrenalina ou outros fatores, e tenta corrigi-la com **SMB**. Por segurança, isto também funciona no sentido inverso e pode parar os SMB mais cedo se a glicose descer de forma inesperadamente rápida. Por isso, a RNA deve estar sempre ativa com SMB.

O SMB não decide sozinho que é preciso insulina — baseia-se nas mesmas previsões combinadas da glicose (glicose final, basal temporária zero, HCA, RNA) descritas em [como o AAPS transforma as previsões numa decisão de dosagem](#aaps-screens-how-predictions-become-a-dosing-decision). O SMB e a basal temporária de zero são simplesmente as duas ferramentas que o AAPS usa para pôr essa decisão em prática.

**Para usar SMB, tem de ter iniciado o [objetivo 9](#objectives-objective9).**

Veja também a [documentação oref1/SMB do OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb) para a descrição técnica completa, ou [a informação do Tim sobre o SMB](https://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/), um texto da comunidade.

As definições do OpenAPS SMB são descritas abaixo.

(Open-APS-features-max-u-h-a-temp-basal-can-be-set-to)=

### Taxa basal máxima

Esta definição de segurança determina a taxa basal temporária máxima que a bomba de insulina pode administrar. Também é conhecida como **max-basal**.

O valor é medido em unidades por hora (U/h). Recomenda-se definir este valor com sensatez. Uma boa recomendação para definir este parâmetro é:

**MAX-BASAL = MAIOR TAXA BASAL x 4**

Por exemplo, se a taxa basal mais alta do seu perfil for 0,5 U/h, pode multiplicá-la por 4 e obter um valor de 2 U/h.

O **AAPS** limita este valor com um «limite rígido» conforme [Definições > Segurança > Idade do paciente](#preferences-patient-type). Os limites rígidos são os seguintes:

- Criança: 2
- Adolescente: 5
- Adulto: 10
- Adulto resistente à insulina: 12
- Gravidez: 25

*Veja também a [visão geral dos limites fixos](#Open-APS-features-overview-of-hard-coded-limits).*

(Open-APS-features-maximum-total-iob-openaps-cant-go-over)=

### Max IOB for SMB

Este valor determina a **insulina ativa** (IA da basal e do bólus) máxima abaixo da qual o **AAPS** se mantém quando funciona em loop fechado. Também é conhecida como **maxIOB**.

Se a IA atual (por exemplo depois de um bólus de refeição) estiver acima do valor definido, o loop deixa de administrar insulina até a IA descer abaixo desse limite.

Um bom ponto de partida para definir este parâmetro é:

      maxIOB = bólus médio de refeição + 3x a basal diária máxima
    

Tenha cuidado e paciência ao ajustar a sua **IA máxima**. É diferente para cada pessoa e pode também depender da dose diária total média (TID).

O **AAPS** limita este valor com um «limite rígido» conforme [Definições > Segurança > Idade do paciente](#preferences-patient-type). Os limites rígidos são os seguintes:

- Criança: 7
- Adolescente: 13
- Adulto: 22
- Adulto resistente à insulina: 30
- Gravidez: 70

*Veja também a [visão geral dos limites fixos](#Open-APS-features-overview-of-hard-coded-limits).*

Nota: com **SMB**, a **IA máxima** é calculada de forma diferente do AMA. No **AMA**, a maxIOB é um parâmetro de segurança para a **IA** da basal, enquanto no modo SMB inclui também a IA do bólus.

### Usar sensibilidade dinâmica

Esta é a funcionalidade [FSI Dinâmico](../DailyLifeWithAaps/DynamicISF.md). Quando está ativada, ficam disponíveis novas definições. As definições são explicadas na página [FSI Dinâmico](#dyn-isf-preferences).

### Usar Autosens

Esta é a funcionalidade [Autosens](#Open-APS-features-autosens). Com o FSI Dinâmico não é possível usar o Autosens, porque são dois algoritmos diferentes que alteram a mesma variável (a sensibilidade).

O Autosens analisa os desvios da glicose (positivos/negativos/neutros). Tenta descobrir quão sensível/resistente está com base nestes desvios e ajusta a taxa basal e o FSI em função deles.

Quando está ativada, ficam disponíveis novas definições.

#### Sensibilidade sobe o alvo

Se esta opção estiver ativada, a deteção de sensibilidade (Autosens) pode subir o alvo quando deteta sensibilidade (abaixo de 100%). Neste caso, o seu alvo sobe na percentagem da sensibilidade detetada.

Se o alvo for modificado pela deteção de sensibilidade, é mostrado com fundo verde no ecrã principal.

![Alvo modificado pelo Autosens](../images/Home2020_DynamicTargetAdjustment.png)

Esta definição está disponível quando «Usar sensibilidade dinâmica» ou «Usar Autosens» está ativada.

#### Resistência baixa o alvo

Se esta opção estiver ativada, a deteção de sensibilidade (Autosens) pode baixar o alvo quando deteta resistência (acima de 100%). Neste caso, o seu alvo desce na percentagem da resistência detetada.

Esta definição está disponível quando «Usar sensibilidade dinâmica» ou «Usar Autosens» está ativada.

### Ativar SMB

Ative esta opção para usar a funcionalidade SMB. Se estiver desativada, não são dados **SMB**.

Quando está ativada, ficam disponíveis novas definições.

(Open-APS-features-enable-smb-with-high-temp-targets)=

#### Ativar SMB com alvo temporário alto

Se esta definição estiver ativada, os **SMB** continuam a ser administrados mesmo que o utilizador tenha escolhido um **Alvo temporário** alto (definido como 100 mg/dl ou 5,6 mmol/l e acima, seja qual for o alvo do **Perfil**). Tenha cuidado ao ativá-la: os **SMB** podem tornar-se demasiado agressivos se as suas definições não estiverem bem afinadas ou se o seu **Perfil** mudar com frequência (por exemplo, em crianças).

Quando esta definição está desativada, um **Alvo temporário** alto desliga os **SMB**. Por exemplo, se esta opção estiver desativada, os **SMB** podem ser desativados definindo um **Alvo temporário** de 100 mg/dl ou 5,6 mmol/l e acima. Esta opção também desativa os **SMB**, seja qual for a outra condição que tente ativar o SMB — exceto um **Alvo temporário** baixo, como **Comer Brevemente** (ou qualquer **Alvo temporário** de 98 mg/dl ou 5,4 mmol/l e abaixo), que ainda pode administrar **SMB** para levar a **glicose** até ao alvo.

Esta definição não liga o **SMB** por si só. Com um alvo temporário alto, o **SMB** só é dado se uma das outras definições abaixo (por exemplo **Ativar SMB sempre** ou **Ativar SMB com HCA**) também o permitir.

(Open-APS-features-enable-smb-always)=

#### Ativar SMB sempre

Se esta definição estiver ativada, o SMB está sempre ativo (independentemente dos HCA, dos alvos temporários ou dos bólus). Se esta definição estiver ativada, as restantes definições de ativação abaixo não têm efeito. No entanto, se **Ativar SMB com alvo temporário alto** estiver desativada e for definido um alvo temporário alto, os SMB ficam desativados.

Esta definição só está disponível se o **AAPS** detetar que está a usar uma [fonte de glicose fiável](#GettingStarted-TrustedBGSource), com filtragem avançada. O FreeStyle Libre 1 não é considerado uma fonte fiável, porque, se o sensor falhar, pode repetir sem fim valores de glicose antigos.

Dados com ruído podem levar o **AAPS** a pensar que a glicose está a subir muito depressa, e assim a administrar SMB desnecessários. Para mais informações sobre ruído e suavização dos dados, veja [aqui](../CompatibleCgms/SmoothingBloodGlucoseData.md).

#### Ativar SMB com HCA

Se esta definição estiver ativada, o SMB fica ativo quando os HCA são maiores do que 0.

Esta definição não é visível se «Ativar SMB sempre» estiver ligada.

#### Ativar SMB com alvo temporário baixo

Se esta definição estiver ativada, o SMB fica ativo quando é definido um alvo temporário (comer brevemente, atividade, hipo, personalizado). Se esta definição estiver ativada mas **Ativar SMB com alvo temporário alto** estiver desativada, o SMB fica ativo quando é definido um alvo temporário baixo (98 mg/dl ou 5,4 mmol/l e abaixo), mas desativado quando é definido um alvo temporário alto.

Esta definição não é visível se «Ativar SMB sempre» estiver ligada.

#### Ativar SMB depois de hidratos

Se estiver ativada, o SMB fica ativo durante 6 h depois de anunciar hidratos de carbono, mesmo que os HCA já tenham chegado a 0.

Por razões de segurança, esta definição só está disponível se o **AAPS** detetar que está a usar uma fonte de glicose fiável. Não é visível se «Ativar SMB sempre» estiver ligada.

Esta definição só está disponível se o **AAPS** detetar que está a usar uma [fonte de glicose fiável,](#GettingStarted-TrustedBGSource) com filtragem avançada. O FreeStyle Libre 1 não é considerado uma fonte fiável, porque, se o sensor falhar, pode repetir sem fim valores de glicose antigos.

Dados com ruído podem levar o **AAPS** a pensar que a glicose está a subir muito depressa, e assim a administrar SMB desnecessários. Para mais informações sobre ruído e suavização dos dados, veja [aqui](../CompatibleCgms/SmoothingBloodGlucoseData.md).  
Esta definição não é visível se «Ativar SMB sempre» estiver ligada.

#### Intervalo de SMB

Esta funcionalidade limita a frequência dos SMB. Este valor determina o tempo mínimo entre SMB. Note que o loop corre sempre que chega um valor de glicose (normalmente a cada 5 minutos). Subtract 2 minutes to give loop additional time to complete. Por exemplo, se quiser que seja dado um SMB em cada execução do loop, defina 3 minutos.

Valor predefinido: 3 min.

(Open-APS-features-max-minutes-of-basal-to-limit-smb-to)=

#### Máx. de minutos de basal para limitar SMB

Esta é uma definição de segurança importante. Este valor determina quanto SMB pode ser dado com base na quantidade de insulina basal num certo tempo, quando está coberto por HCA.

Um valor maior torna o SMB mais agressivo. Deve começar com o valor predefinido de 30 minutos. Com alguma experiência, aumente o valor em passos de 15 minutos e observe os efeitos ao longo de várias refeições.

Recomenda-se não definir um valor acima de 90 minutos, porque assim o algoritmo pode deixar de conseguir compensar uma glicose a descer com uma basal de 0 U/h («zero-temp»). Deve também definir alarmes, sobretudo enquanto ainda está a testar novas definições, que o avisem bem antes de uma hipoglicemia.

Valor predefinido: 30 min.

#### RNA: máx. de minutos de basal para limitar SMB

Esta definição permite ajustar a força do SMB durante a RNA, quando já não há hidratos de carbono.

Valor predefinido: o mesmo que **Máx. de minutos de basal para limitar SMB**.

This setting is only visible if "Enable SMB" and "Enable UAM" are switched on.

(enable-uam)=

### Ativar RNA

Com esta opção ativada, o algoritmo SMB consegue reconhecer refeições não anunciadas. Isto ajuda se se esquecer de indicar os hidratos de carbono ao **AAPS**, se os estimar mal e a quantidade introduzida estiver errada, ou se uma refeição com muita gordura e proteína durar mais do que o previsto. Sem nenhum registo de hidratos de carbono, a RNA consegue reconhecer uma subida rápida da glicose causada por hidratos de carbono, adrenalina, etc., e tenta corrigi-la com SMB. Também funciona no sentido inverso: se a glicose descer depressa, pode parar os SMB mais cedo.

**Por isso, a RNA deve estar sempre ativada quando usa SMB.**

(key-aaps-features-minimal-carbs-required-for-suggestion)=

### Limite de hidratos necessários

Quantidade mínima de hidratos de carbono (em gramas) para mostrar um alerta de sugestão de hidratos. Será sugerido comer mais hidratos de carbono quando o algoritmo de referência detetar que são necessários. Neste caso, recebe uma notificação que pode ser silenciada por 5, 15 ou 30 minutos.

Se quiser, as notificações de hidratos de carbono necessários podem ser enviadas para o Nightscout. Nesse caso, é mostrado e difundido um anúncio.

Em qualquer caso, os hidratos de carbono necessários são mostrados na secção dos HCA no ecrã principal.

![Mostrar hidratos necessários no ecrã principal](../images/main/main_screen_carbs_required.png)

### Definições avançadas

Para a referência completa dos parâmetros (incluindo definições não explicadas aqui), veja a [documentação do OpenAPS sobre preferências e definições de segurança](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Always use short average delta instead of simple delta** If you enable this feature, **AAPS** uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. Isto ajuda o **AAPS** a ser mais estável com fontes de dados com ruído, como o xDrip e o Libre.

**Multiplicador de segurança diário máx.** Este é um limite de segurança importante. O valor predefinido (que muito provavelmente não precisa de ser alterado) é 3. Isto significa que o **AAPS** nunca pode definir uma basal temporária mais de 3x maior do que a taxa basal horária mais alta programada na bomba e/ou no perfil do utilizador. Exemplo: se a sua taxa basal mais alta for 1,0 U/h e o multiplicador de segurança diário máx. for 3, o **AAPS** pode definir uma basal temporária máxima de 3,0 U/h (= 3 x 1,0 U/h).

Valor predefinido: 3 (só deve ser alterado se for mesmo necessário e se souber o que está a fazer)

**Multiplicador de segurança da basal atual** Este é outro limite de segurança importante. O valor predefinido (que também muito provavelmente não precisa de ser alterado) é 4. Isto significa que o **AAPS** nunca pode definir uma basal temporária mais de 4x maior do que a taxa basal horária atual programada na bomba e/ou no perfil do utilizador.

Valor predefinido: 4 (só deve ser alterado se for mesmo necessário e se souber o que está a fazer)

* * *

(Open-APS-features-auto-isf)=

## Auto ISF

O **Auto ISF** é um algoritmo **experimental** para utilizadores avançados. Baseia-se no OpenAPS SMB e acrescenta regras que tornam o fator de sensibilidade à insulina (FSI) mais forte ou mais fraco, conforme o comportamento da sua glicose.

É uma funcionalidade de desenvolvimento: só pode ser ligada numa [compilação de desenvolvimento](../AdvancedOptions/DevBranch.md) com o **Modo engenheiro** ativado. Numa versão normal (release), fica sempre desligado e por isso não aparece em **Configuração → APS**. Concluir os [Objetivos](../SettingUpAaps/CompletingTheObjectives.md) não o desbloqueia.

Depois de o selecionar, as suas **Definições** contêm as definições do OpenAPS SMB e ainda um grupo **Definições AutoISF**:

- **Ativar AutoISF**: liga os ajustes do FSI. Sem esta opção, o algoritmo funciona como o OpenAPS SMB.
- **AutoISF mín.** e **AutoISF máx.**: quão fraco e quão forte o FSI pode ficar, da mesma forma que os limites do Autosens. Com o valor predefinido 1,0, o efeito está desligado.
- **Pesos**: cada um controla uma regra, e o valor predefinido 0,0 desliga essa regra. 
  - enquanto a glicose **acelera**, o FSI fica mais forte (mais insulina);
  - enquanto a glicose **abranda**, o FSI fica mais fraco (menos insulina);
  - enquanto a glicose está **abaixo do alvo**, o FSI fica mais fraco;
  - enquanto a glicose está **acima do alvo**, o FSI fica mais forte;
  - um peso **pós-prandial** e um peso de **duração** atuam depois das refeições e quando a glicose fica alta durante muito tempo.
- **Rácio de administração SMB** (com um mínimo, um máximo e um intervalo de glicose): que parte da insulina necessária pode ser administrada como SMB.
- **SMB max range extension**: by what factor the usual SMB size limit ([max minutes of basal](#Open-APS-features-max-minutes-of-basal-to-limit-smb-to), 30 minutes by default) may be exceeded. O valor predefinido 1 não altera nada; é possível até 5. Aumente este valor experimental devagar e com cuidado.
- **Percentagem limite da IA**: a percentagem da IA máxima acima da qual os SMB são desativados.

    {admonition} Só para utilizadores experientes
    :class: danger
    Com os valores predefinidos, o Auto ISF não altera nada. Cada valor que aumentar torna o **AAPS** mais agressivo. Altere um valor de cada vez, em pequenos passos, e observe o resultado durante vários dias. Tenha muito cuidado com um **AutoISF máx.** acima de 2,5.

(Open-APS-features-advanced-meal-assist-ama)=

## Advanced Meal Assist (AMA)

O AMA, abreviatura de «advanced meal assist» (assistência avançada às refeições), é uma funcionalidade do OpenAPS de 2017 (oref0). O OpenAPS Advanced Meal Assist (AMA) permite ao sistema subir a basal temporária mais depressa depois de um bólus de refeição, se introduzir os hidratos de carbono de forma fiável.

Pode encontrar mais informações na [documentação do OpenAPS](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### Taxa basal máxima (OpenAPS "max-basal")

Esta definição de segurança impede que o **AAPS** alguma vez possa dar uma taxa basal perigosamente alta e limita a basal temporária a x U/h. Recomenda-se definir este valor com sensatez. Uma boa recomendação é pegar na taxa basal mais alta do seu perfil e multiplicá-la por 4, e no mínimo por 3. Por exemplo, se a taxa basal mais alta do seu perfil for 1,0 U/h, pode multiplicá-la por 4 e obter um valor de 4 U/h, e definir 4 como o seu parâmetro de segurança.

Não pode escolher qualquer valor: por razões de segurança, existe um «limite rígido» que depende da idade do paciente. O «limite rígido» da maxIOB é mais baixo no AMA do que no SMB. Para crianças o valor é o mais baixo, e para adultos resistentes à insulina é o mais alto.

Os parâmetros fixos no **AAPS** são:

- Criança: 2
- Adolescente: 5
- Adulto: 10
- Adulto resistente à insulina: 12
- Gravidez: 25

*Veja também a [visão geral dos limites fixos](#Open-APS-features-overview-of-hard-coded-limits).*

### Max IOB for AMA

This parameter limits the maximum of basal IOB where **AAPS** still works. Se a IA for mais alta, deixa de dar insulina basal adicional até a IA basal ficar abaixo do limite.

The default value is 2, but you should raise this parameter slowly to see how much it affects you and which value fits best. It is different for everyone and also depends on the average total daily dose (TDD). For safety reason, there is a limit, which depends on the patient age. O «limite rígido» da maxIOB é mais baixo no AMA do que no SMB.

- Criança: 3
- Adolescente: 5
- Adulto: 7
- Adulto resistente à insulina: 12
- Gravidez: 25

*Veja também a [visão geral dos limites fixos](#Open-APS-features-overview-of-hard-coded-limits).*

### Usar Autosens (AMA)

Aqui pode escolher se quer usar ou não a [deteção de sensibilidade](../DailyLifeWithAaps/SensitivityDetectionAndCob.md) Autosens.

### Autosens ajusta os alvos

Se tiver esta opção ativada, o Autosens também pode ajustar os alvos (além da basal e do FSI). Assim, o **AAPS** funciona de forma mais ou menos «agressiva». O alvo real pode assim ser atingido mais depressa.

### Definições avançadas

- Normalmente não precisa de alterar as definições desta janela!
- Se mesmo assim quiser alterá-las, certifique-se de que entende o que está a fazer — veja a referência completa dos parâmetros na [documentação do OpenAPS sobre preferências e definições de segurança](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Always use short average delta instead of simple delta** If you enable this feature, **AAPS** uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. Isto ajuda o **AAPS** a funcionar de forma mais estável com fontes de dados com ruído, como o xDrip e o Libre.

**Multiplicador de segurança diário máx.** Este é um limite de segurança importante. O valor predefinido (que muito provavelmente não precisa de ser alterado) é 3. Isto significa que o **AAPS** nunca pode definir uma basal temporária mais de 3x maior do que a taxa basal horária mais alta programada na bomba do utilizador. Exemplo: se a sua taxa basal mais alta for 1,0 U/h e o multiplicador de segurança diário máx. for 3, o **AAPS** pode definir uma basal temporária máxima de 3,0 U/h (= 3 x 1,0 U/h).

Valor predefinido: 3 (só deve ser alterado se for mesmo necessário e se souber o que está a fazer)

**Multiplicador de segurança da basal atual** Este é outro limite de segurança importante. O valor predefinido (que também muito provavelmente não precisa de ser alterado) é 4. Isto significa que o **AAPS** nunca pode definir uma basal temporária mais de 4x maior do que a taxa basal horária atual programada na bomba do utilizador.

Valor predefinido: 4 (só deve ser alterado se for mesmo necessário e se souber o que está a fazer)

**Divisor da DAI para silenciar o bólus** A função «silenciar o bólus» (bolus snooze) atua depois de um bólus de refeição. O **AAPS** não define basais temporárias baixas depois de uma refeição durante o tempo da DAI dividida pelo parâmetro «silenciar o bólus». O valor predefinido é 2. Isto significa que, com uma DAI de 5 h, o «silenciar o bólus» dura 5 h : 2 = 2,5 h.

Valor predefinido: 2

* * *

(Open-APS-features-overview-of-hard-coded-limits)=

## Visão geral dos limites fixos

|            | Criança | Adolescente | Adulto | Adulto resistente à insulina | Gravidez |
| ---------- | ------- | ----------- | ------ | ---------------------------- | -------- |
| MAXBOLUS   | 5       | 10          | 17     | 25                           | 60       |
| MINDIA     | 5       | 5           | 5      | 5                            | 5        |
| MAXDIA     | 9       | 9           | 9      | 9                            | 10       |
| MINIC      | 2       | 2           | 2      | 2                            | 0,3      |
| MAXIC      | 100     | 100         | 100    | 100                          | 100      |
| MAXIOB_AMA | 3       | 5           | 7      | 12                           | 25       |
| MAXIOB_SMB | 7       | 13          | 22     | 30                           | 70       |
| MAXBASAL   | 2       | 5           | 10     | 12                           | 25       |