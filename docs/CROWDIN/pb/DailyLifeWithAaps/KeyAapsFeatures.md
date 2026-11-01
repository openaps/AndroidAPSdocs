# Principais recursos do AAPS

## Modo do loop

O status do loop é mostrado na tela principal com um dos ícones abaixo.

O **AAPS** oferece vários modos do loop, como Loop fechado (1), Suspensão por glicose baixa (LGS - 2) e Loop aberto (3).

Veja [Telas do AAPS > A tela principal > Status do loop](#AapsScreens-loop-status) para saber como selecionar o modo do loop e o que significam os outros ícones da imagem (4 a 6).

![Status do loop](../images/Home2020_LoopStatus.png)

(KeyAapsFeatures-OpenLoop)=

### Loop Aberto

O **AAPS** avalia continuamente todos os dados disponíveis (IOB, COB, glicose...) e faz sugestões de tratamento (taxas basais temporárias) sobre como ajustar sua terapia, se necessário.

As sugestões não são executadas automaticamente (como no loop fechado). As sugestões precisam ser aplicadas pelo usuário manualmente na bomba (se usar a bomba virtual) ou com um botão, se o **AAPS** estiver conectado a uma bomba real.

Quando o **AAPS** tem uma sugestão, aparece um item **Loop** com um selo na navegação inferior da tela principal. Toque nele para ler a sugestão ("Aceitar nova basal temporária") com a taxa, a duração e o motivo, e depois toque em **Executar** para aplicá-la:

![Sugestão do loop aberto com o botão Executar](../images/screens/loop_tab.png)

Uma sugestão só vale por alguns minutos. Se ela tiver mais de cerca de 9 minutos, ou se o loop tiver sido suspenso ou a bomba desconectada nesse meio-tempo, o **AAPS** recusa a sugestão e nada é enviado para a bomba (*"Esta sugestão é antiga demais. Nada foi enviado para a bomba. Aguarde a próxima."*). Aguarde a próxima sugestão.

Esta opção serve para conhecer como o **AAPS** funciona ou para quem usa uma bomba não suportada. Você vai ficar em Loop Aberto, não importa a escolha que fizer aqui, até o fim do **[Objetivo 5](#objectives-objective5)**.

(KeyAapsFeatures-LGS)=

### Suspensão por glicose baixa (LGS)

Neste modo, o [maxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over) é definido como zero.

Isso significa que, se a glicose estiver caindo, o **AAPS** pode reduzir a basal para você. Mas, se a glicose estiver subindo, nenhuma correção automática será feita. Suas taxas basais vão continuar as mesmas definidas no seu **Perfil** atual. Só se o IOB for negativo (por causa de uma Suspensão por glicose baixa anterior) será dada insulina adicional para baixar a **glicose**.

Este modo está disponível a partir do **[Objetivo 6](#objectives-objective6)**.

Além de você mesmo selecionar este modo, o **AAPS** também pode mudar para ele sozinho: enquanto você estiver no **[Objetivo 6](#objectives-objective6)** e sempre que detectar leituras de glicose duplicadas (veja [Sinal de aviso de glicose](#aaps-screens-bg-warning-sign)).

(KeyAapsFeatures-ClosedLoop)=

### Loop Fechado

O **AAPS** avalia continuamente todos os dados disponíveis (IOB, COB, glicose...) e ajusta automaticamente o tratamento, se necessário (*ou seja*, sem mais nenhuma ação sua), para alcançar a [faixa ou valor alvo](#profile-glucose-targets) definido (administração de bólus, taxa basal temporária, corte de insulina para evitar hipoglicemia etc.).

O Loop Fechado funciona dentro de vários limites de segurança, que podem ser definidos individualmente.

O Loop Fechado só é possível se você estiver no **[Objetivo 7](#objectives-objective7)** ou acima e usar uma bomba suportada.

(autosens)= (Open-APS-features-autosens)=

## Autosens

- O Autosens é um algoritmo que analisa os desvios da glicose (positivos/negativos/neutros).
- Ele tenta descobrir o quanto você está sensível/resistente com base nesses desvios.
- A implementação do oref no **OpenAPS** usa uma combinação de dados de 24 e de 8 horas. Ele usa aquele que for mais sensível.
- Quem vem do oref1 provavelmente vai notar que o sistema pode reagir menos às mudanças, porque a sensibilidade varia entre 24 e 8 horas.
- A troca de cânula ou a troca de perfil volta a razão do Autosens para 100% (uma troca de perfil percentual com duração não reinicia o autosens).
- O Autosens ajusta sua basal e seu ISF (ou seja, imita o que uma mudança de perfil faz).
- Se você comer carboidratos continuamente por um período longo, o Autosens será menos eficaz nesse período, porque os carboidratos são excluídos dos cálculos de delta da **glicose**.
- Os desvios são convertidos em uma **razão de sensibilidade** (uma porcentagem): uma razão abaixo de 100% significa que o AAPS acha que você está mais sensível à insulina do que o seu **Perfil** supõe (então ele reduz a basal efetiva e aumenta o valor do ISF), enquanto uma razão acima de 100% significa que você está mais resistente (então ele aumenta a basal e reduz o valor do ISF).
- Por padrão, esta razão fica entre 0,7 (70%, mais sensível) e 1,2 (120%, mais resistente), para que uma sequência de dados incomuns não afaste demais a sua dosagem do seu **Perfil**. Estes limites podem ser ajustados nas configurações avançadas da Detecção de sensibilidade.
- O Autosens e o [Autotune](../AdvancedOptions/Autotune.md) tratam o mesmo problema em escalas de tempo diferentes: o Autosens ajusta um pouco a sua dosagem *atual* minuto a minuto com base nas últimas 8–24 h, enquanto o Autotune reescreve devagar o próprio *Perfil* com base em semanas de histórico. Usar os dois é normal e esperado — eles se complementam, em vez de repetir o mesmo trabalho.

*Para a explicação técnica completa do algoritmo autosens, veja a [documentação do Autosens do OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).*

(Open-APS-features-super-micro-bolus-smb)=

## Super Micro Bólus (SMB)

**SMB**, abreviação de **Super micro bolus** (super microbólus), é um recurso do OpenAPS lançado a partir de 2018, dentro do algoritmo Oref1. Ao contrário do **AMA**, o **SMB** não usa taxas basais temporárias para controlar a glicose, e sim principalmente **pequenos super microbólus**. Em situações em que o **AMA** adicionaria 1,0 U de insulina com uma taxa basal temporária, o **SMB** administra vários super microbólus em pequenos passos, em **intervalos de 5 minutos**, por exemplo 0,4 U, 0,3 U, 0,2 U e 0,1 U. Ao mesmo tempo (por segurança), a taxa basal real é definida como 0 U/h por um certo período para evitar uma superdosagem (**'basal temporária zero'**). Isso permite que o sistema ajuste a glicose mais rápido do que com o aumento da taxa basal temporária no **AMA**.

Graças ao SMB, para refeições só com carboidratos "lentos", pode ser suficiente informar ao sistema a quantidade de carboidratos planejada e deixar o resto com o **AAPS**. Mas isso pode levar a picos maiores depois das refeições (pós-prandiais), porque não é possível fazer um pré-bólus. Ou você pode dar, se necessário com pré-bólus, um **bólus inicial** que cobre **só uma parte** dos carboidratos (por exemplo, 2/3 da quantidade estimada) e deixar o **SMB** administrar o resto da insulina.

![SMBs on the IOB graph](../images/SMBs.png)

Os SMBs são mostrados no [gráfico de IOB](#aaps-screens-iob) com triângulos azuis. [Toque e segure](#aaps-screens-graph-press-and-hold) o gráfico em um triângulo para ver quanta insulina foi administrada, ou use o [Histórico de tratamentos](#aaps-screens-treatments).

Os recursos do **SMB** têm alguns mecanismos de segurança:

1. **Maior dose única de SMB**  
  A maior dose única de SMB só pode ser o menor destes valores:
  
        * valor correspondente à taxa basal atual (ajustada pelo autosens) durante o tempo definido em "Máximo de minutos de basal para limitar o SMB", por exemplo a quantidade de basal dos próximos 30 minutos, ou
        * metade da quantidade de insulina necessária no momento, ou
        * a parte restante do seu valor de maxIOB nas configurações.
      

2. **Taxas basais temporárias baixas**  
  Taxas basais temporárias baixas (chamadas 'low temps') ou taxas basais temporárias de 0 U/h (chamadas 'zero-temps') são ativadas com mais frequência no **SMB**. Isso é intencional, por segurança, e não tem efeitos negativos se o **Perfil** estiver configurado corretamente. No gráfico principal, a curva de IOB (linha fina amarela) diz mais do que o curso das taxas basais temporárias.

3. **Refeições não anunciadas**  
  Cálculos adicionais para prever o curso da glicose, por exemplo pelo **UAM** (refeições não anunciadas). Mesmo sem o usuário inserir carboidratos manualmente, o **UAM** pode detectar automaticamente um aumento importante da glicose causado por refeições, adrenalina ou outras influências e tentar corrigi-lo com **SMB**. Por segurança, isso também funciona no sentido contrário e pode parar o SMB mais cedo se a glicose cair de forma rápida e inesperada. Por isso, o UAM deve estar sempre ativo com o SMB.

O SMB não decide sozinho que é preciso insulina — ele usa as mesmas previsões combinadas de glicose (glicose final, zero-temp, COB, UAM) descritas em [como o AAPS transforma previsões em uma decisão de dosagem](#aaps-screens-how-predictions-become-a-dosing-decision). O SMB e a basal temporária zero são simplesmente as duas ferramentas que o AAPS usa para agir de acordo com essa decisão.

**Você precisa ter iniciado o [objetivo 9](#objectives-objective9) para usar o SMB.**

Veja também a [documentação oref1/SMB do OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb) para a explicação técnica completa, ou as [informações do Tim sobre o SMB](https://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/), um texto da comunidade.

As configurações do OpenAPS SMB são descritas abaixo.

(Open-APS-features-max-u-h-a-temp-basal-can-be-set-to)=

### Taxa basal máxima

Esta configuração de segurança determina a taxa basal temporária máxima que a bomba de insulina pode administrar. Ela também é conhecida como **max-basal**.

O valor é medido em unidades por hora (U/h). Recomendamos definir um valor sensato. Uma boa recomendação para definir este parâmetro é:

**MAX-BASAL = MAIOR TAXA BASAL x 4**

Por exemplo, se a maior taxa basal no seu perfil for 0,5 U/h, você pode multiplicá-la por 4 e obter um valor de 2 U/h.

O **AAPS** limita este valor com um 'limite rígido' de acordo com [Configurações > Segurança > Idade do paciente](#preferences-patient-type). Os limites rígidos são:

- Criança: 2
- Adolescente: 5
- Adulto: 10
- Adulto resistente à insulina: 12
- Grávida: 25

*Veja também a [visão geral dos limites fixos no código](#Open-APS-features-overview-of-hard-coded-limits).*

(Open-APS-features-maximum-total-iob-openaps-cant-go-over)=

### IOB total máximo que o OpenAPS não pode ultrapassar

Este valor determina a **Insulina ativa (IOB)** máxima (IOB de basal e de bólus) abaixo da qual o **AAPS** vai ficar enquanto funciona no modo loop fechado. Ele também é conhecido como **maxIOB**.

Se o IOB atual (por exemplo, depois de um bólus de refeição) estiver acima do valor definido, o loop para de administrar insulina até que o IOB fique abaixo do limite.

Um bom começo para definir este parâmetro é:

      maxIOB = bólus médio de refeição + 3x a basal diária máxima
    

Tenha cuidado e paciência ao ajustar seu **max-IOB**. Ele é diferente para cada pessoa e também pode depender da dose diária total média (TDD).

O **AAPS** limita este valor com um 'limite rígido' de acordo com [Configurações > Segurança > Idade do paciente](#preferences-patient-type). Os limites rígidos são:

- Criança: 7
- Adolescente: 13
- Adulto: 22
- Adulto resistente à insulina: 30
- Grávida: 70

*Veja também a [visão geral dos limites fixos no código](#Open-APS-features-overview-of-hard-coded-limits).*

Observação: ao usar o **SMB**, o **max-IOB** é calculado de forma diferente do AMA. No **AMA**, o maxIOB é um parâmetro de segurança para o **IOB** de basal, enquanto no modo SMB ele também inclui o IOB de bólus.

### Usar sensibilidade dinâmica

Este é o recurso [ISF dinâmico](../DailyLifeWithAaps/DynamicISF.md). Quando ele está ativado, novas configurações ficam disponíveis. As configurações são explicadas na página [ISF dinâmico](#dyn-isf-preferences).

### Usar Autosens

Este é o recurso [Autosens](#Open-APS-features-autosens). Ao usar o ISF dinâmico, o Autosens não pode ser usado, porque são dois algoritmos diferentes que alteram a mesma variável (a sensibilidade).

O Autosens analisa os desvios da glicose (positivos/negativos/neutros). Ele tenta descobrir o quanto você está sensível/resistente com base nesses desvios e ajusta a taxa basal e o ISF de acordo com eles.

Quando ele está ativado, novas configurações ficam disponíveis.

#### Sensibilidade aumenta o alvo

Se esta opção estiver ativada, a detecção de sensibilidade (autosens) pode aumentar o alvo quando detectar sensibilidade (abaixo de 100%). Nesse caso, seu alvo será aumentado pela porcentagem da sensibilidade detectada.

Se o alvo for modificado por causa da detecção de sensibilidade, ele será mostrado com fundo verde na tela principal.

![Alvo modificado pelo autosens](../images/Home2020_DynamicTargetAdjustment.png)

Esta configuração está disponível quando "Usar sensibilidade dinâmica" ou "Usar Autosens" estiver ativado.

#### Resistência reduz o alvo

Se esta opção estiver ativada, a detecção de sensibilidade (autosens) pode reduzir o alvo quando detectar resistência (acima de 100%). Nesse caso, seu alvo será reduzido pela porcentagem da resistência detectada.

Esta configuração está disponível quando "Usar sensibilidade dinâmica" ou "Usar Autosens" estiver ativado.

### Ativar SMB

Ative esta opção para usar a função SMB. Se ela estiver desativada, nenhum **SMB** será dado.

Quando ele está ativado, novas configurações ficam disponíveis.

(Open-APS-features-enable-smb-with-high-temp-targets)=

#### Ativar SMB com alvo temporário alto

Se esta configuração estiver ativada, os **SMBs** ainda serão administrados mesmo que o usuário tenha selecionado um **Alvo temporário** alto (definido como 100 mg/dl ou 5,6 mmol/l ou mais, independentemente do alvo do **Perfil**). Tenha cuidado ao ativar esta opção: os **SMBs** podem ficar agressivos demais se suas configurações não estiverem bem ajustadas ou se o seu **Perfil** mudar com frequência (por exemplo, em crianças).

Quando esta configuração está desativada, um **Alvo temporário** alto desliga os **SMBs**. Por exemplo, se esta opção estiver desativada, os **SMBs** podem ser desativados definindo um **Alvo temporário** de 100 mg/dl ou 5,6 mmol/l ou mais. Esta opção também desativa os **SMBs**, não importa qual outra condição tente ativar o SMB — exceto um **Alvo temporário** baixo, como **Comer em breve** (ou qualquer **Alvo temporário** de 98 mg/dl ou 5,4 mmol/l ou menos), que ainda pode administrar **SMBs** para levar a **glicose** em direção ao alvo.

Esta configuração não liga o **SMB** sozinha. Com um alvo temporário alto, o **SMB** só é dado se uma das outras configurações abaixo (por exemplo **Ativar SMB sempre** ou **Ativar SMB com COB**) também permitir.

(Open-APS-features-enable-smb-always)=

#### Ativar SMB sempre

Se esta configuração estiver ativada, o SMB fica sempre ativo (independentemente do COB, de alvos temporários ou de bólus). Se esta configuração estiver ativada, as outras configurações de ativação abaixo não terão efeito. Mas se **Ativar SMB com alvo temporário alto** estiver desativado e um alvo temporário alto estiver definido, os SMBs serão desativados.

Esta configuração só está disponível se o **AAPS** detectar que você usa uma [fonte de glicose confiável](#GettingStarted-TrustedBGSource), com filtragem avançada. O FreeStyle Libre 1 não é considerado uma fonte confiável, por causa do risco de repetir sem fim dados antigos de glicose se o sensor falhar.

Dados com ruído podem fazer o **AAPS** acreditar que a glicose está subindo muito rápido, e isso leva à administração de SMBs desnecessários. Para mais informações sobre ruído e suavização de dados, veja [aqui](../CompatibleCgms/SmoothingBloodGlucoseData.md).

#### Ativar SMB com COB

Se esta configuração estiver ativada, o SMB fica ativo quando o COB for maior que 0.

Esta configuração não aparece se "Ativar SMB sempre" estiver ligado.

#### Ativar SMB com alvo temporário baixo

Se esta configuração estiver ativada, o SMB fica ativo quando um alvo temporário estiver definido (comer em breve, atividade, hipo, personalizado). Se esta configuração estiver ativada, mas **Ativar SMB com alvo temporário alto** estiver desativado, o SMB fica ativo quando um alvo temporário baixo estiver definido (98 mg/dl ou 5,4 mmol/l ou menos), mas desativado quando um alvo temporário alto estiver definido.

Esta configuração não aparece se "Ativar SMB sempre" estiver ligado.

#### Ativar SMB após carboidratos

Se ativada, o SMB fica ativo por 6 h depois que carboidratos forem anunciados, mesmo que o COB já tenha chegado a 0.

Por segurança, esta configuração só está disponível se o **AAPS** detectar que você usa uma fonte de glicose confiável. Ela não aparece se "Ativar SMB sempre" estiver ligado.

Esta configuração só está disponível se o **AAPS** detectar que você usa uma [fonte de glicose confiável,](#GettingStarted-TrustedBGSource) com filtragem avançada. O FreeStyle Libre 1 não é considerado uma fonte confiável, por causa do risco de repetir sem fim dados antigos de glicose se o sensor falhar.

Dados com ruído podem fazer o **AAPS** acreditar que a glicose está subindo muito rápido, e isso leva à administração de SMBs desnecessários. Para mais informações sobre ruído e suavização de dados, veja [aqui](../CompatibleCgms/SmoothingBloodGlucoseData.md).  
Esta configuração não aparece se "Ativar SMB sempre" estiver ligado.

#### Intervalo do SMB

Este recurso limita a frequência dos SMBs. Este valor determina o tempo mínimo entre SMBs. Observe que o loop roda toda vez que chega um valor de glicose (geralmente a cada 5 minutos). Subtraia 2 minutos para dar ao loop um tempo extra para terminar. Por exemplo, se você quer que o SMB seja dado a cada execução do loop, defina 3 minutos.

Valor padrão: 3 min.

(Open-APS-features-max-minutes-of-basal-to-limit-smb-to)=

#### Máximo de minutos de basal para limitar o SMB

Esta é uma configuração de segurança importante. Este valor determina quanto SMB pode ser dado com base na quantidade de insulina basal em um determinado tempo, quando ele é coberto por COB.

Um valor maior permite que o SMB seja mais agressivo. Comece com o valor padrão de 30 minutos. Depois de ganhar experiência, aumente o valor em passos de 15 minutos e observe os efeitos em várias refeições.

Recomendamos não definir um valor acima de 90 minutos, porque isso levaria a um ponto em que o algoritmo talvez não consiga compensar uma glicose em queda com basal de 0 U/h ('zero-temp'). Você também deve configurar alarmes, principalmente enquanto ainda testa novas configurações, para receber um aviso bem antes de uma hipoglicemia.

Valor padrão: 30 min.

#### Máximo de minutos de basal do UAM para limitar o SMB

Esta configuração permite ajustar a força do SMB durante o UAM, quando não há mais carboidratos.

Valor padrão: o mesmo de **Máximo de minutos de basal para limitar o SMB**.

Esta configuração só aparece se "Ativar SMB" e "Ativar UAM" estiverem ligados.

(enable-uam)=

### Ativar UAM

Com esta opção ativada, o algoritmo SMB pode reconhecer refeições não anunciadas. Isso ajuda se você esquecer de informar seus carboidratos ao **AAPS**, se estimar errado e a quantidade de carboidratos inserida estiver errada, ou se uma refeição com muita gordura e proteína durar mais do que o esperado. Sem nenhum registro de carboidratos, o UAM pode reconhecer um aumento rápido da glicose causado por carboidratos, adrenalina etc. e tenta corrigi-lo com SMBs. Isso também funciona no sentido contrário: se a glicose cair rápido, ele pode parar os SMBs mais cedo.

**Por isso, o UAM deve estar sempre ativado ao usar o SMB.**

(key-aaps-features-minimal-carbs-required-for-suggestion)=

### Limite para solicitar carboidratos

Quantidade mínima de carboidratos, em gramas, para mostrar um alerta de sugestão de carboidratos. O consumo de carboidratos adicionais será sugerido quando o algoritmo de referência detectar que você precisa de carboidratos. Nesse caso, você vai receber uma notificação que pode ser adiada por 5, 15 ou 30 minutos.

As notificações de carboidratos necessários podem ser enviadas ao Nightscout, se você quiser. Nesse caso, um anúncio será mostrado e transmitido.

Em todo caso, os carboidratos necessários serão mostrados na seção de COB da tela principal.

![Carboidratos necessários mostrados na tela principal](../images/main/main_screen_carbs_required.png)

### Configurações Avançadas

Para a referência completa dos parâmetros (incluindo configurações não tratadas aqui), veja a [documentação de preferências e configurações de segurança do OpenAPS](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Sempre usar a média curta do delta** (em vez de dados simples): se você ativar este recurso, o **AAPS** usa a média curta do delta/glicose dos últimos 15 minutos, que geralmente é a média dos três últimos valores. Isso ajuda o **AAPS** a ser mais estável com fontes de dados com ruído, como xDrip e Libre.

**Multiplicador máximo de segurança diária** Este é um limite de segurança importante. A configuração padrão (que provavelmente não precisa ser ajustada) é 3. Isso significa que o **AAPS** nunca poderá definir uma taxa basal temporária maior que 3x a maior taxa basal por hora programada na bomba e/ou no perfil do usuário. Exemplo: se sua maior taxa basal for 1,0 U/h e o multiplicador máximo de segurança diária for 3, o **AAPS** pode definir uma taxa basal temporária máxima de 3,0 U/h (= 3 x 1,0 U/h).

Valor padrão: 3 (não deve ser alterado, a não ser que você realmente precise e saiba o que está fazendo)

**Multiplicador de segurança da basal atual** Este é outro limite de segurança importante. A configuração padrão (que também provavelmente não precisa ser ajustada) é 4. Isso significa que o **AAPS** nunca poderá definir uma taxa basal temporária maior que 4x a taxa basal por hora atual programada na bomba e/ou no perfil do usuário.

Valor padrão: 4 (não deve ser alterado, a não ser que você realmente precise e saiba o que está fazendo)

* * *

(Open-APS-features-auto-isf)=

## Auto ISF

O **Auto ISF** é um algoritmo **experimental** para usuários avançados. Ele é baseado no OpenAPS SMB e adiciona regras que deixam o fator de sensibilidade à insulina (ISF) mais forte ou mais fraco, dependendo de como sua glicose se comporta.

É um recurso de desenvolvimento: ele só pode ser ligado em uma [compilação dev](../AdvancedOptions/DevBranch.md) com o **Modo engenheiro** ativado. Em uma compilação normal (release), ele fica sempre desligado e por isso não aparece em **Configuração → APS**. Concluir os [Objetivos](../SettingUpAaps/CompletingTheObjectives.md) não o libera.

Depois de selecioná-lo, as suas **Configurações** contêm as configurações do OpenAPS SMB e mais um grupo **Configurações do AutoISF**:

- **Ativar AutoISF**: liga os ajustes do ISF. Sem ele, o algoritmo se comporta como o OpenAPS SMB.
- **Mínimo do AutoISF** e **Máximo do AutoISF**: o quanto o ISF pode ficar fraco e forte, da mesma forma que os limites do Autosens. Com o valor padrão 1,0, o efeito fica desligado.
- **Pesos**: cada um controla uma regra, e o valor padrão 0,0 desliga a regra. 
  - enquanto a glicose **acelera**, o ISF fica mais forte (mais insulina);
  - enquanto a glicose **desacelera**, o ISF fica mais fraco (menos insulina);
  - enquanto a glicose está **abaixo do alvo**, o ISF fica mais fraco;
  - enquanto a glicose está **acima do alvo**, o ISF fica mais forte;
  - um peso **pós-prandial** e um peso de **duração** agem depois das refeições e quando a glicose fica alta por muito tempo.
- **Proporção de administração de SMB** (com um mínimo, um máximo e uma faixa de glicose): que parte da insulina necessária pode ser administrada como SMB.
- **Extensão máxima da faixa de SMB**: por qual fator o limite normal do tamanho do SMB ([máximo de minutos de basal](#Open-APS-features-max-minutes-of-basal-to-limit-smb-to), normalmente 120 minutos) pode ser ultrapassado. O valor padrão 1 não muda nada; é possível usar até 5. Aumente este valor experimental devagar e com cuidado.
- **Porcentagem do limite de IOB**: a porcentagem do max IOB acima da qual os SMBs são desativados.

    {admonition} Somente para usuários experientes
    :class: danger
    Com os valores padrão, o Auto ISF não muda nada. Cada valor que você aumenta deixa o **AAPS** mais agressivo. Altere um valor de cada vez, em passos pequenos, e observe o resultado por vários dias. Tenha muito cuidado com um **Máximo do AutoISF** acima de 2,5.

(Open-APS-features-advanced-meal-assist-ama)=

## Assistente avançado de refeição (AMA)

AMA, abreviação de "advanced meal assist" (assistente avançado de refeição), é um recurso do OpenAPS de 2017 (oref0). O Advanced Meal Assist (AMA) do OpenAPS permite que o sistema aumente a basal temporária mais rápido depois de um bólus de refeição, se você inserir os carboidratos de forma confiável.

Você encontra mais informações na [documentação do OpenAPS](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### Taxa basal máxima (OpenAPS "max-basal")

Esta configuração de segurança impede que o **AAPS** possa dar uma taxa basal perigosamente alta e limita a taxa basal temporária a x U/h. Recomendamos definir um valor sensato. Uma boa recomendação é pegar a maior taxa basal do seu perfil e multiplicá-la por 4, e no mínimo por 3. Por exemplo, se a maior taxa basal do seu perfil for 1,0 U/h, você pode multiplicá-la por 4 para obter um valor de 4 U/h e definir 4 como seu parâmetro de segurança.

Você não pode escolher qualquer valor: por segurança, existe um 'limite rígido', que depende da idade do paciente. O 'limite rígido' do maxIOB é menor no AMA do que no SMB. Para crianças o valor é o menor, e para adultos resistentes à insulina é o maior.

Os parâmetros fixos no código do **AAPS** são:

- Criança: 2
- Adolescente: 5
- Adulto: 10
- Adulto resistente à insulina: 12
- Grávida: 25

*Veja também a [visão geral dos limites fixos no código](#Open-APS-features-overview-of-hard-coded-limits).*

### IOB basal máximo que o OpenAPS pode administrar \[U\] (OpenAPS "max-iob")

Este parâmetro limita o máximo de IOB basal com o qual o **AAPS** ainda funciona. Se o IOB for maior, ele para de dar insulina basal adicional até que o IOB basal fique abaixo do limite.

O valor padrão é 2, mas você deve aumentar este parâmetro devagar, para ver o quanto ele afeta você e qual valor funciona melhor. Ele é diferente para cada pessoa e também depende da dose diária total média (TDD). Por segurança, existe um limite, que depende da idade do paciente. O 'limite rígido' do maxIOB é menor no AMA do que no SMB.

- Criança: 3
- Adolescente: 5
- Adulto: 7
- Adulto resistente à insulina: 12
- Grávida: 25

*Veja também a [visão geral dos limites fixos no código](#Open-APS-features-overview-of-hard-coded-limits).*

### Usar Autosens (AMA)

Aqui você pode escolher se quer usar ou não a [detecção de sensibilidade](../DailyLifeWithAaps/SensitivityDetectionAndCob.md) autosens.

### Autosens ajusta os alvos

Se esta opção estiver ativada, o autosens também pode ajustar os alvos (além da basal e do ISF). Isso faz o **AAPS** trabalhar de forma mais 'agressiva' ou não. Com isso, o alvo real pode ser alcançado mais rápido.

### Configurações Avançadas

- Normalmente você não precisa alterar as configurações nesta janela!
- Se quiser alterá-las mesmo assim, tenha certeza de que entende o que está fazendo — veja a referência completa dos parâmetros na [documentação de preferências e configurações de segurança do OpenAPS](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Sempre usar a média curta do delta** (em vez de dados simples): se você ativar este recurso, o **AAPS** usa a média curta do delta/glicose dos últimos 15 minutos, que geralmente é a média dos três últimos valores. Isso ajuda o **AAPS** a trabalhar de forma mais estável com fontes de dados com ruído, como xDrip e Libre.

**Multiplicador máximo de segurança diária** Este é um limite de segurança importante. A configuração padrão (que provavelmente não precisa ser ajustada) é 3. Isso significa que o **AAPS** nunca poderá definir uma taxa basal temporária maior que 3x a maior taxa basal por hora programada na bomba do usuário. Exemplo: se sua maior taxa basal for 1,0 U/h e o multiplicador máximo de segurança diária for 3, o **AAPS** pode definir uma taxa basal temporária máxima de 3,0 U/h (= 3 x 1,0 U/h).

Valor padrão: 3 (não deve ser alterado, a não ser que você realmente precise e saiba o que está fazendo)

**Multiplicador de segurança da basal atual** Este é outro limite de segurança importante. A configuração padrão (que também provavelmente não precisa ser ajustada) é 4. Isso significa que o **AAPS** nunca poderá definir uma taxa basal temporária maior que 4x a taxa basal por hora atual programada na bomba do usuário.

Valor padrão: 4 (não deve ser alterado, a não ser que você realmente precise e saiba o que está fazendo)

**Divisor de DIA do Bolus Snooze** O recurso “bolus snooze” (pausa após bólus) funciona depois de um bólus de refeição. O **AAPS** não define taxas basais temporárias baixas depois de uma refeição durante o período da DIA dividida pelo parâmetro “bolus snooze”. O valor padrão é 2. Isso significa que, com uma DIA de 5 h, o “bolus snooze” teria 5 h : 2 = 2,5 h de duração.

Valor padrão: 2

* * *

(Open-APS-features-overview-of-hard-coded-limits)=

## Visão geral dos limites fixos no código

|            | Criança | Adolescente | Adulto | Adulto resistente à insulina | Grávida |
| ---------- | ------- | ----------- | ------ | ---------------------------- | ------- |
| MAXBOLUS   | 5       | 10          | 17     | 25                           | 60      |
| MINDIA     | 5       | 5           | 5      | 5                            | 5       |
| MAXDIA     | 9       | 9           | 9      | 9                            | 10      |
| MINIC      | 2       | 2           | 2      | 2                            | 0.3     |
| MAXIC      | 100     | 100         | 100    | 100                          | 100     |
| MAXIOB_AMA | 3       | 5           | 7      | 12                           | 25      |
| MAXIOB_SMB | 7       | 13          | 22     | 30                           | 70      |
| MAXBASAL   | 2       | 5           | 10     | 12                           | 25      |