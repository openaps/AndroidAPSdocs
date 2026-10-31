# Introdução ao APS e AAPS

```{contents} In this page
:backlinks: entry
:depth: 2
```

## O que é um “Sistema de Pâncreas Artificial”?

O pâncreas humano faz muitas coisas além de regular o açúcar no sangue. No entanto, o termo **“Sistema de Pâncreas Artificial” (APS)** geralmente se refere a um sistema que trabalha para manter os níveis de açúcar no sangue automaticamente dentro de limites saudáveis.

A maneira mais básica de fazer isso é detectar os **níveis de glicose**, usar esses valores para fazer **cálculos** e, em seguida, administrar a quantidade certa (prevista) de **insulina** para o corpo. Ele repete o cálculo a cada poucos minutos, 24 horas por dia, 7 dias por semana. **Alerta** e **alarmes** são utilizados para informar ao usuário a necessidade de intervenção ou atenção. Esse sistema normalmente é formado por um **sensor de glicose**, uma **bomba de insulina** e um **controlador** que faz os cálculos. No **AAPS** e em outros sistemas de código aberto, o controlador é um app em um telefone. Na maioria dos sistemas comerciais, é um software dentro da própria bomba, com um app de telefone usado principalmente para exibição e controle.

Para conhecer a história de como os sistemas de loop fechado se desenvolveram e como funcionam, este artigo de revisão de 2022 é um bom ponto de partida. Lembre-se de que ele é anterior à maioria dos sistemas disponíveis hoje, então não é um guia do que existe atualmente no mercado:

![Frontiers](../images/FRONTIERS_Logo_Grey_RGB.png) [Closed-Loop Insulin Delivery Systems: Past, Present, and Future Directions](https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2022.919942/full) (Templer, _Frontiers in Endocrinology_, 2022).

Os chamados sistemas “bi-hormonais” infundem glucagon junto com a insulina, com o objetivo de evitar hipoglicemias graves e permitir um controle da glicose ainda mais rigoroso. Um primeiro sistema desse tipo foi aprovado na Europa, mas ele é fornecido apenas por meio de estudos e projetos, e outros ainda estão em desenvolvimento. Nenhum está à venda para o público em geral ainda.

Um pâncreas artificial pode ser visto como um [“piloto automático para o seu diabetes”](https://www.artificialpancreasbook.com/). O que isso significa?

Em um avião, o piloto automático não faz todo o trabalho do piloto humano; o piloto não pode dormir durante o voo inteiro. O piloto automático ajuda o trabalho do piloto. Ele alivia o piloto do peso de ter que controlar o avião o tempo todo, permitindo que ele se concentre em um monitoramento mais amplo. O piloto automático recebe sinais de vários sensores, um computador avalia os dados junto com as especificações do piloto e depois faz os ajustes necessários, avisando o piloto sobre qualquer problema. O piloto não precisa mais se preocupar em tomar decisões o tempo todo, e essa comparação pode ser aplicada ao **AAPS**.

![imagem](../images/autopilot.png)

(Introduction-what-does-hybrid-closed-loop-mean)=
## O que significa loop fechado híbrido?

A melhor solução para o diabetes tipo 1 seria uma “cura funcional” (provavelmente um implante de células do pâncreas protegidas do sistema imunológico). Enquanto a comunidade de pessoas com diabetes tipo 1 (T1D) espera por isso, um pâncreas artificial de “loop fechado completo” é provavelmente a segunda melhor opção. Trata-se de um sistema tecnológico que não precisa de nenhuma ação do usuário (como dar bólus de insulina para as refeições ou informar exercícios) e que mantém uma boa regulação dos níveis de glicose no sangue. Quase todos os sistemas em uso no dia a dia são de loop fechado “híbrido”, porque usam uma combinação de tecnologia automatizada e ações do usuário. Os primeiros sistemas de loop fechado completo foram aprovados na Europa em 2026, mas nenhum está amplamente disponível ainda.

## Como e por que o loop começou?

O desenvolvimento de tecnologia comercial para pessoas com diabetes tipo 1 (T1D) é muito lento. Em 2013, a comunidade T1D fundou o movimento #WeAreNotWaiting. Eles mesmos desenvolveram sistemas usando tecnologia já aprovada (bombas de insulina e sensores) para melhorar o controle da glicose, a segurança e a qualidade de vida. Eles são conhecidos como sistemas OS-AID (Open-Source Automated Insulin Delivery, administração automatizada de insulina de código aberto), antes chamados de sistemas DIY (faça você mesmo), porque não são aprovados formalmente por órgãos de saúde (FDA, NHS etc). Existem quatro sistemas OS-AID principais disponíveis: [OpenAPS](https://openaps.org/what-is-openaps/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) e [Trio](https://triodocs.org).

Uma ótima forma de entender os fundamentos do loop OS-AID é ler o livro de Dana Lewis “Automated Insulin Delivery”. Você pode acessá-lo [aqui](https://www.artificialpancreasbook.com/) gratuitamente (ou comprar o livro impresso). Se você quiser entender mais sobre o [OpenAPS](https://openaps.org/what-is-openaps/), a partir do qual o **AAPS** foi desenvolvido, o [site do OpenAPS](https://openaps.org/what-is-openaps/) é uma ótima fonte.

Vários sistemas comerciais de loop fechado híbrido também foram lançados. Eles são muito diferentes dos sistemas OS-AID, principalmente porque muitos deles incluem um “algoritmo de aprendizado”, que ajusta quanta insulina é administrada de acordo com a sua necessidade de insulina nos dias anteriores. Muitas pessoas da comunidade OS-AID já experimentaram sistemas comerciais e os compararam com o seu sistema OS-AID. Você pode saber mais sobre como os diferentes sistemas se comparam perguntando nos grupos do Facebook dedicados a esses sistemas, no [grupo do AAPS no Facebook](https://www.facebook.com/groups/AndroidAPSUsers/) ou no [Discord](https://discord.com/invite/4fQUWHZ4Mw).

## O que é o Android APS (AAPS)?

![imagem](../images/basic-outline-of-AAPS.png)

**Figura 1**. Esquema básico do Android APS (Sistema de Pâncreas Artificial), AAPS.

O Android APS (**AAPS**) é um sistema de loop fechado híbrido, ou Sistema de Pâncreas Artificial (APS). Ele faz os cálculos das doses de insulina usando os algoritmos já estabelecidos do [OpenAPS](https://openaps.org/) (um conjunto de regras), desenvolvidos pela comunidade T1D #WeAreNotWaiting.

Como o OpenAPS só é compatível com algumas bombas de insulina mais antigas, o **AAPS** (que pode ser usado com mais modelos de bombas de insulina) foi desenvolvido pela primeira vez em 2016 para um membro da família com diabetes tipo 1. Desde esses primeiros dias, o **AAPS** vem sendo desenvolvido e melhorado continuamente por uma equipe de programadores voluntários e outros entusiastas que têm ligação com o mundo do diabetes tipo 1. Hoje, o **AAPS** é usado por muitos milhares de pessoas no mundo todo. É um sistema altamente personalizável e versátil e, por ser de código aberto, também é facilmente compatível com muitos outros softwares e plataformas de código aberto para diabetes. Os componentes fundamentais do sistema **AAPS** atual estão mostrados na **Figura 1** acima.



## Quais são os componentes básicos do AAPS?

O “cérebro” do AAPS é um **app** que você mesmo compila. Existem instruções detalhadas, passo a passo, para isso. Depois, você instala o **app AAPS** em um **smartphone Android** [compatível](../Getting-Started/Phones.md) (**1**). Muitos usuários preferem ter o loop em um telefone separado do seu telefone principal. Assim, você não precisa necessariamente usar um telefone Android para todo o resto da sua vida, apenas para executar o seu loop do AAPS.

O **smartphone Android** também precisará ter outro app instalado, além do **AAPS**. Esse [app adicional](../Getting-Started/CompatiblesCgms.md) recebe os dados de glicose de um sensor (**2**) por Bluetooth e depois envia os dados internamente no telefone para o **app AAPS**.

O **app AAPS** usa um processo de tomada de decisão (**algoritmo**) do OpenAPS. Iniciantes começam usando o algoritmo básico **oref0**, mas é possível mudar para o algoritmo mais novo **oref1** à medida que você avança com o AAPS. Qual algoritmo você usa (oref0 ou oref1) depende de qual se adapta melhor à sua situação.  Nos dois casos, o algoritmo leva em conta vários fatores e faz cálculos rápidos sempre que chega uma nova leitura do sensor. O algoritmo então envia por Bluetooth instruções para a bomba de insulina (**3**) sobre quanta insulina administrar. Todas as informações podem ser enviadas por dados móveis ou Wi-Fi para a internet (**4**). Esses dados também podem ser compartilhados com seguidores, se você quiser, e/ou coletados para análise. Opcionalmente, você também pode parear um [smartwatch](../Getting-Started/Watches.md) (**5**) com o telefone para ver os seus dados rapidamente e, com alguns relógios, enviar comandos básicos para o **AAPS**.

## Quais são as vantagens do sistema AAPS?

O algoritmo do OpenAPS usado pelo **AAPS** controla os níveis de açúcar no sangue sem ação do usuário, de acordo com os parâmetros definidos pelo usuário (os mais importantes são as taxas basais, os fatores de sensibilidade à insulina, as relações insulina/carboidratos, a duração da ação da insulina etc.), reagindo a cada 5 minutos aos novos dados do sensor.

Algumas das vantagens relatadas do uso do **AAPS** são as muitas opções de ajuste fino, as **Automações** e uma maior transparência do sistema para o paciente/cuidador. Isso pode levar a um melhor controle do seu diabetes (ou do diabetes de alguém de quem você cuida), o que por sua vez pode trazer melhor qualidade de vida e mais tranquilidade.

Com o investimento do seu tempo, o **AAPS** pode levar a:

- diminuir o estresse e o peso de tratar o diabetes tipo 1;

- reduzir as muitas decisões do dia a dia que surgem com o diabetes tipo 1;

- doses de insulina personalizadas e dinâmicas, baseadas em dados em tempo real, que podem diminuir a necessidade de tratar hipoglicemias e reduzir episódios de hiperglicemia;

- maior conhecimento sobre o manejo da insulina e mais confiança para ajustar melhor as suas configurações;

- a possibilidade de criar configurações automáticas (**automações**) adaptadas ao seu estilo de vida;

- melhor qualidade do sono e menos intervenções durante a noite em geral;

- monitoramento remoto e administração de insulina à distância para cuidadores de pessoas com diabetes tipo 1; e

- simplificação de todo o seu equipamento portátil para diabetes (receptor do monitor contínuo de glicose e dispositivos de controle da insulina) usando um telefone Android controlado pelo **AAPS**.


No fim, o **AAPS** pode dar às pessoas mais autonomia para cuidar melhor do seu diabetes, resultando em glicose estável e melhores resultados de saúde a longo prazo.

### Vantagens específicas incluem:

#### 1) Segurança integrada
Para ler sobre os recursos de segurança dos algoritmos, conhecidos como oref0 e oref1, [clique aqui](https://openaps.org/reference-design/). O usuário controla os seus próprios limites de segurança.

#### 2) Flexibilidade de hardware

O **AAPS** funciona com uma grande variedade de bombas de insulina e sensores e oferece flexibilidade quando a vida muda. Por exemplo, se você desenvolver alergia à cola do adesivo do sensor Dexcom, pode mudar para um sensor Libre. Os usuários não precisam compilar nem reinstalar o app **AAPS** de novo; basta selecionar outra bomba ou outra fonte de BG em **Configuração** para trocar o hardware. O **AAPS** não depende de drivers de bomba específicos e também contém uma "bomba virtual", para que os usuários possam experimentar com segurança antes de usá-lo em si mesmos.

#### 3) Altamente personalizável, com parâmetros amplos

Os usuários podem adicionar ou remover módulos ou funções facilmente, e o **AAPS** pode ser usado tanto em modo de loop aberto quanto de loop fechado. Aqui estão alguns exemplos das possibilidades do sistema **AAPS**:

 a) A possibilidade de definir um alvo de **glicose** mais baixo 30 min antes de comer; você pode definir o alvo tão baixo quanto 72 mg/dl (4,0 mmol/l).

 b) Se você tem resistência à insulina, que resulta em açúcar alto no sangue, o **AAPS** permite definir uma regra de **automação** que é ativada quando a glicose sobe acima de 8 mmol/l (144 mg/dl) e muda (por exemplo) para um perfil de 120% (o que resulta em um aumento de 20% na basal e também no reforço de outros fatores, comparado com a configuração normal do seu **perfil**). A automação vai durar de acordo com o tempo programado que você definir. Essa automação pode ser definida para ficar ativa somente em certos dias da semana, em certos horários do dia e até em certos locais.

 c) Se o seu filho está pulando em uma cama elástica sem aviso prévio, o **AAPS** permite suspender a insulina por um período definido, diretamente pelo telefone.

 d) Depois de reconectar uma bomba com tubo que foi desconectada para nadar, o **AAPS** calcula a insulina basal que você perdeu enquanto estava desconectado e a administra com cuidado, de acordo com a sua glicose atual. Qualquer insulina que não for necessária pode ser anulada simplesmente “cancelando” a basal perdida.

 e) O **AAPS** permite definir perfis diferentes para situações diferentes e alternar entre eles facilmente. Por exemplo, recursos que fazem o algoritmo baixar mais rápido a glicose elevada (como super micro bólus (“**SMB**”), refeições não anunciadas (“**UAM**”)) podem ser definidos para funcionar somente durante o dia, se você tem medo de hipoglicemias noturnas.

Estes são apenas exemplos; o conjunto completo de recursos dá uma enorme flexibilidade para a vida diária, incluindo esporte, doença, ciclos hormonais _etc_. No fim, cabe ao usuário decidir como usar essa flexibilidade, e não existe uma automação única que sirva para todos.

#### 4) Monitoramento remoto
Existem vários canais possíveis de monitoramento (Sugarmate, Dexcom Follow, xDrip, Android Auto _etc._), que são úteis para pais/cuidadores e para adultos em certas situações (dormindo/dirigindo) que precisam de alertas personalizáveis. Em alguns apps (xDrip), você também pode desligar os alarmes totalmente, o que é ótimo se você tem um sensor novo em “imersão” (soaking) ou se estabilizando, com o qual ainda não quer fazer o loop.

#### 5) Controle remoto
Uma vantagem importante do **AAPS** em relação aos sistemas comerciais é que os seguidores podem enviar uma grande variedade de comandos de volta ao sistema **AAPS**, usando comandos de texto (SMS) autenticados ou um app **AAPSClient** pareado. Esse recurso é muito usado por pais de crianças com diabetes tipo 1 que usam o **AAPS**.

Os recursos de controle remoto podem ser muito úteis: por exemplo, no parquinho, se você quer dar um pré-bólus para um lanche pelo seu próprio telefone enquanto a criança está ocupada brincando. Também é possível monitorar o sistema por um smartwatch (_p. ex._ Garmin) ou enviar comandos básicos por ele (_p. ex._ um relógio Wear OS, como o Samsung Galaxy Watch).

#### 6) Sem restrições comerciais, graças a interfaces de aplicação abertas
Além do uso de uma abordagem de código aberto, que permite ver o código-fonte do **AAPS** a qualquer momento, o princípio geral de oferecer interfaces de programação abertas também dá a outros desenvolvedores a oportunidade de contribuir com novas ideias. O **AAPS** é muito integrado ao Nightscout. Isso acelera o desenvolvimento e permite que os usuários acrescentem recursos para tornar a vida com diabetes ainda mais prática. Bons exemplos dessas integrações são [Nightscout](https://nightscout.github.io/), [Nightscout Reporter](https://nightscout-reporter.zreptil.de/), xDrip, [M5 stack](https://github.com/mlukasek/M5_NightscoutMon/wiki) etc. Há um diálogo contínuo entre os desenvolvedores de código aberto e quem desenvolve sistemas comerciais. Muitas das inovações OS-AID são adotadas aos poucos pelos sistemas comerciais, onde o desenvolvimento é compreensivelmente mais lento, em parte porque as interfaces entre sistemas de empresas diferentes (bombas, apps, sensores _etc_) precisam ser negociadas e licenciadas com cuidado. Isso também pode atrasar inovações que são práticas para o paciente (ou para um pequeno grupo de pacientes com uma necessidade muito específica), mas que não geram um lucro significativo.

#### 7) Interface do app detalhada
Com o **AAPS** é fácil acompanhar coisas como: nível de insulina na bomba, idade da cânula, idade do sensor, idade da bateria da bomba, insulina ativa _etc_. Muitas ações podem ser feitas pelo app **AAPS** (preencher a bomba, desconectar a bomba _etc_.) em vez de na própria bomba, o que significa que a bomba pode ficar no seu bolso ou cinto (ou no de alguém de quem você cuida).

#### 8) Acessibilidade e preço acessível
O **AAPS** dá às pessoas que hoje não podem pagar por conta própria, ou que não têm financiamento/plano de saúde, acesso a um sistema de loop fechado híbrido que, em termos de desenvolvimento, está conceitualmente anos à frente dos sistemas comerciais. Atualmente, você precisa de um servidor de relatórios (Nightscout ou Tidepool) para configurar o **AAPS**, embora ele não seja necessário para o funcionamento diário do loop do **AAPS**. Muitas pessoas continuam usando o Nightscout para coletar os seus dados e para o monitoramento remoto. Embora o **AAPS** em si seja gratuito, configurar o Nightscout em uma das várias plataformas pode ter um custo (€0 - €12), dependendo do nível de suporte que você quer (veja a tabela de comparação) e se você quer continuar usando o Nightscout depois da configuração ou não. O **AAPS** funciona com uma grande variedade de [telefones Android](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true) de preço acessível (a partir de aprox. €150). Existem versões diferentes para regiões e idiomas específicos, e o AAPS também pode ser usado por pessoas [cegas](#accessibility-for-users-aaps-who-are-partially-or-completely-blind).

#### 9) Suporte
Nenhum sistema automatizado de administração de insulina é perfeito. Sistemas comerciais e de código aberto têm muitas falhas em comum, tanto na comunicação quanto em falhas temporárias de hardware. Existe suporte da comunidade de usuários do AAPS no Facebook, Discord e GitHub, que projetaram, desenvolveram e usam o **AAPS** atualmente, no mundo todo. Também existem grupos de apoio no Facebook e ajuda de clínicas/empresas comerciais para os sistemas APS comerciais - vale a pena conversar com usuários ou ex-usuários desses sistemas para saber sobre as falhas comuns, a qualidade do programa de treinamento e o nível de suporte contínuo oferecido.

#### 10) Previsibilidade, transparência e segurança
O **AAPS** é transparente, lógico e previsível, o que pode facilitar saber quando uma configuração está errada e ajustá-la corretamente. Você pode ver exatamente o que o sistema está fazendo, por que está fazendo isso, e definir os seus limites de operação, o que coloca o controle (e a responsabilidade) nas suas mãos. Isso pode dar ao usuário confiança e um sono mais tranquilo.

#### 11) Acesso a recursos avançados por meio das versões de desenvolvimento (dev), incluindo o loop fechado completo
Esta documentação do **AAPS** foca na branch principal **“master”** do **AAPS**. No entanto, pesquisa e desenvolvimento acontecem o tempo todo. Usuários mais experientes podem querer explorar os recursos experimentais da branch de **desenvolvimento**. As inovações em desenvolvimento focam em estratégias para o loop fechado completo (não precisar dar bólus para refeições _etc._) e, de modo geral, em tornar a vida com diabetes tipo 1 o mais prática possível.

#### 12) Possibilidade de você mesmo contribuir com novas melhorias
O diabetes tipo 1 pode ser muito frustrante e causar isolamento. Ter controle sobre a sua própria tecnologia para diabetes, com a possibilidade de “retribuir” ajudando outras pessoas no caminho delas assim que você fizer progresso, pode ser muito gratificante. Você pode aprender por conta própria, descobrir os obstáculos e procurar novos desenvolvimentos, e até contribuir com eles e com a documentação. Haverá outras pessoas na comunidade com o mesmo objetivo, com quem você pode trocar ideias e trabalhar junto. Essa é a essência do #WeAreNotWaiting.

## Como o AAPS se compara a múltiplas injeções diárias (MDI) e ao loop aberto?

Múltiplas injeções diárias (MDI, (a) na **Figura 2** abaixo) normalmente envolvem uma injeção de insulina de ação longa (_p. ex._ Tresiba) uma vez por dia, com injeções de insulina de ação mais rápida (_p. ex._ Novorapid, Fiasp) nas refeições ou para correções. O uso da bomba em modo aberto (b) consiste em usar uma bomba para administrar a basal de insulina de ação rápida em taxas pré-programadas e depois dar bólus pela bomba nas refeições ou para correções. O princípio básico de um sistema de loop é que o app do loop usa os dados de glicose do sensor para mandar a bomba parar a administração de insulina quando prevê que você vai ter uma hipoglicemia, e para dar insulina extra se a sua glicose estiver subindo e a previsão for de que vai ficar alta demais (c). Embora esta figura seja muito simplificada em comparação com a vida real, ela mostra as principais diferenças entre as abordagens. É possível conseguir um controle da glicose excepcionalmente bom com qualquer uma dessas três abordagens.

![21-06-23 AAPS glucose MDI etc](../images/basic-overview-mdi-open-and-closed-loop.png)


**Figura 2**. Visão geral básica de (a) MDI, (b) bomba em loop aberto e (c) bomba em loop fechado híbrido.

## Como o AAPS se compara a outros sistemas de loop?

Em 25 de junho de 2023, existem quatro grandes sistemas de loop fechado de código aberto disponíveis: [OpenAPS](https://openaps.readthedocs.io/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) e [Trio](https://triodocs.org) (antigo FreeAPS X). Os recursos dos diferentes sistemas estão mostrados na tabela abaixo:


| Tipo de dispositivo | Nome                                                                    | [AAPS](https://wiki.aaps.app)              | [Loop](https://loopkit.github.io/loopdocs/) | [Open APS](https://openaps.readthedocs.io/en/latest/) | [Trio](https://triodocs.org)               |
| ------------------- | ----------------------------------------------------------------------- | ------------------------------------------ | ------------------------------------------- | ----------------------------------------------------- | ------------------------------------------ |
| Telefone            | Android                                                                 | ![disponível](../images/available.png)     | ![indisponível](../images/unavailable.png)  | ![indisponível](../images/unavailable.png)            | ![indisponível](../images/unavailable.png) |
| Telefone            | iPhone                                                                  | ![indisponível](../images/unavailable.png) | ![disponível](../images/available.png)      | ![indisponível](../images/unavailable.png)            | ![disponível](../images/available.png)     |
| Rig                 | minicomputador (1)                                                      | ![indisponível](../images/unavailable.png) | ![indisponível](../images/unavailable.png)  | ![disponível](../images/available.png)                | ![indisponível](../images/unavailable.png) |
| BOMBA               | [Dana I](../CompatiblePumps/DanaRS-Insulin-Pump.md)                     | ![disponível](../images/available.png)     | ![disponível](../images/available.png)      | ![indisponível](../images/unavailable.png)            | ![disponível](../images/available.png)     |
| BOMBA               | [Dana RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)                    | ![disponível](../images/available.png)     | ![disponível](../images/available.png)      | ![indisponível](../images/unavailable.png)            | ![disponível](../images/available.png)     |
| BOMBA               | [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)                      | ![disponível](../images/available.png)     | ![indisponível](../images/unavailable.png)  | ![indisponível](../images/unavailable.png)            | ![indisponível](../images/unavailable.png) |
| BOMBA               | [Omnipod (Dash)](../CompatiblePumps/OmnipodDASH.md)                     | ![disponível](../images/available.png)     | ![disponível](../images/available.png)      | ![indisponível](../images/unavailable.png)            | ![disponível](../images/available.png)     |
| BOMBA               | [Omnipod (Eros)](../CompatiblePumps/OmnipodEros.md)                     | ![disponível](../images/available.png)     | ![disponível](../images/available.png)      | ![indisponível](../images/unavailable.png)            | ![disponível](../images/available.png)     |
| BOMBA               | [Diaconn G8](../CompatiblePumps/DiaconnG8.md)                           | ![disponível](../images/available.png)     | ![indisponível](../images/unavailable.png)  | ![indisponível](../images/unavailable.png)            | ![indisponível](../images/unavailable.png) |
| BOMBA               | [EOPatch 2](../CompatiblePumps/EOPatch2.md)                             | ![disponível](../images/available.png)     | ![indisponível](../images/unavailable.png)  | ![indisponível](../images/unavailable.png)            | ![indisponível](../images/unavailable.png) |
| BOMBA               | [Medtrum TouchCare Nano 200U](../CompatiblePumps/MedtrumNano.md)        | ![disponível](../images/available.png)     | ![disponível](../images/available.png)      | ![indisponível](../images/unavailable.png)            | ![disponível](../images/available.png)     |
| BOMBA               | [Medtrum TouchCare 300U](../CompatiblePumps/MedtrumNano.md)             | ![disponível](../images/available.png)     | ![disponível](../images/available.png)      | ![indisponível](../images/unavailable.png)            | ![disponível](../images/available.png)     |
| BOMBA               | [Roche Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)            | ![disponível](../images/available.png)     | ![indisponível](../images/unavailable.png)  | ![indisponível](../images/unavailable.png)            | ![indisponível](../images/unavailable.png) |
| BOMBA               | [Roche Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)           | ![disponível](../images/available.png)     | ![indisponível](../images/unavailable.png)  | ![indisponível](../images/unavailable.png)            | ![indisponível](../images/unavailable.png) |
| BOMBA               | [Medtronic antigas](../CompatiblePumps/MedtronicPump.md)                | ![disponível](../images/available.png)     | ![disponível](../images/available.png)      | ![disponível](../images/available.png)                | ![disponível](../images/available.png)     |
| BOMBA               | [Equil 5.3](../CompatiblePumps/Equil5.3.md)                             | ![disponível](../images/available.png)     | ![indisponível](../images/unavailable.png)  | ![indisponível](../images/unavailable.png)            | ![indisponível](../images/unavailable.png) |
| BOMBA               | [CareLevo](../CompatiblePumps/CareLevo.md)                              | ![disponível](../images/available.png)     | ![indisponível](../images/unavailable.png)  | ![indisponível](../images/unavailable.png)            | ![indisponível](../images/unavailable.png) |
| CGM                 | [Dexcom G7/One+/Stelo](../CompatibleCgms/DexcomG7.md)                   | ![disponível](../images/available.png)     | ![disponível](../images/available.png)      | ![indisponível](../images/unavailable.png)            | ![disponível](../images/available.png)     |
| CGM                 | [Dexcom One](../CompatibleCgms/DexcomG6.md)                             | ![disponível](../images/available.png)     | ![disponível](../images/available.png)      | ![indisponível](../images/unavailable.png)            | ![disponível](../images/available.png)     |
| CGM                 | [Dexcom G6](../CompatibleCgms/DexcomG6.md)                              | ![disponível](../images/available.png)     | ![disponível](../images/available.png)      | ![disponível](../images/available.png)                | ![disponível](../images/available.png)     |
| CGM                 | [Libre 3/3+](../CompatibleCgms/Libre3.md)                               | ![disponível](../images/available.png)     | ![disponível](../images/available.png)      | ![indisponível](../images/unavailable.png)            | ![disponível](../images/available.png)     |
| CGM                 | [Libre 2/2+](../CompatibleCgms/Libre2.md)                               | ![disponível](../images/available.png)     | ![disponível](../images/available.png)      | ![indisponível](../images/unavailable.png)            | ![disponível](../images/available.png)     |
| CGM                 | [Libre 1](../CompatibleCgms/Libre1.md)                                  | ![disponível](../images/available.png)     | ![disponível](../images/available.png)      | ![indisponível](../images/unavailable.png)            | ![disponível](../images/available.png)     |
| CGM                 | [Eversense](../CompatibleCgms/Eversense.md)                             | ![disponível](../images/available.png)     | ![disponível](../images/available.png)      | ![indisponível](../images/unavailable.png)            | ![disponível](../images/available.png)     |
| CGM                 | [MM640g/MM630g](../CompatibleCgms/MM640g.md)                            | ![disponível](../images/available.png)     | ![indisponível](../images/unavailable.png)  | ![indisponível](../images/unavailable.png)            | ![indisponível](../images/unavailable.png) |
| CGM                 | [PocTech](../CompatibleCgms/PocTech.md)                                 | ![disponível](../images/available.png)     | ![indisponível](../images/unavailable.png)  | ![indisponível](../images/unavailable.png)            | ![indisponível](../images/unavailable.png) |
| CGM                 | [Ottai](../CompatibleCgms/OttaiM8.md)                                   | ![disponível](../images/available.png)     | ![indisponível](../images/unavailable.png)  | ![indisponível](../images/unavailable.png)            | ![indisponível](../images/unavailable.png) |
| CGM                 | [Syai Tag](../CompatibleCgms/SyaiTagX1.md)                              | ![disponível](../images/available.png)     | ![indisponível](../images/unavailable.png)  | ![indisponível](../images/unavailable.png)            | ![indisponível](../images/unavailable.png) |
| CGM                 | [Nightscout como Fonte de BG](../CompatibleCgms/CgmNightscoutUpload.md) | ![disponível](../images/available.png)     | ![disponível](../images/available.png)      | ![disponível](../images/available.png)                | ![disponível](../images/available.png)     |

_Notas da tabela:_
1. Um **rig** é um pequeno computador sem tela que você leva com você. Um tipo de dispositivo suportado é Intel Edison + Explorer Board, e o outro é Raspberry Pi + Explorer HAT ou Adafruit RFM69HCW Bonnet. Os primeiros sistemas APS eram baseados nessa configuração, porque os celulares não eram capazes de executar os algoritmos necessários. O uso desses sistemas diminuiu, porque a configuração em celulares ficou mais fácil e os celulares já têm tela. A Intel também parou de vender o Intel Edison. Os excelentes algoritmos do OpenAPS, **oref0** e **oref1**, agora estão incorporados no AAPS e no Trio.


Uma declaração de consenso internacional, revisada por pares, com orientações práticas sobre loop de código aberto foi escrita por e para profissionais de saúde e publicada em uma importante revista médica em 2022: [_Lancet Diabetes Endocrinol_, 2022; 10: 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_). Vale muito a pena ler (inclusive para a sua clínica de diabetes); ele resume as principais diferenças técnicas entre os diferentes sistemas de loop fechado híbrido de código aberto.

É difícil ter uma “noção” de qualquer sistema sem usá-lo ou sem conversar com outras pessoas que o usam, então procure outras pessoas no Facebook/Discord e pergunte. A maioria das pessoas acha que o **AAPS** é extremamente sofisticado em comparação com outros sistemas de loop fechado híbrido (principalmente os sistemas comerciais), com um enorme número de configurações e recursos personalizáveis, descritos acima. Algumas pessoas podem achar isso um pouco demais no começo, mas não há pressa para explorar todas as possibilidades de uma vez. Você pode avançar tão devagar ou tão rápido quanto quiser, e há ajuda disponível em cada etapa do caminho.


## O AAPS usa inteligência artificial ou algum algoritmo de aprendizado?

A versão atual do **AAPS** (4.0) não tem nenhum algoritmo de aprendizado de máquina, modelos de resposta à insulina com vários parâmetros nem inteligência artificial. Assim, o sistema é aberto e transparente na forma como funciona, e pode ser entendido não só por especialistas, mas também por médicos e pacientes. Isso também significa que, se você tem uma rotina que muda muito (por exemplo, passando de uma semana estressante no trabalho para férias tranquilas) e provavelmente vai precisar de uma quantidade de insulina bem diferente, você pode mudar o **AAPS** imediatamente para usar um perfil personalizado mais fraco/mais forte. Um “sistema de aprendizado” faz esse ajuste para você automaticamente, mas provavelmente vai levar mais tempo para ajustar a administração de insulina.

(which-system-is-right-for-me-or-my-dependent)=
## Qual sistema é o certo para mim ou para alguém de quem eu cuido?

Na prática, a sua escolha de sistema muitas vezes é limitada pela bomba que você já tem ou pode conseguir do seu plano de saúde ou serviço médico, e pela sua escolha de telefone (Apple ou Android). Se você ainda não tem uma bomba, você tem a maior escolha de sistemas. A tecnologia está sempre evoluindo: bombas deixam de ser fabricadas e novas bombas e sensores são lançados. A maioria dos sistemas de código aberto funciona com os principais sensores (Libre e Dexcom) ou é adaptada rapidamente para funcionar com novos sensores cerca de um ano depois do lançamento (com um pequeno atraso para testes de segurança e estabilidade).

A maioria dos usuários do **AAPS** relata mais tempo no alvo, redução da HbA1c e também melhora na qualidade de vida por ter um sistema que ajusta as taxas basais automaticamente durante a noite, enquanto dorme, e isso vale para a maioria dos sistemas de loop fechado híbrido. Algumas pessoas preferem um sistema muito simples e pouco personalizável (o que significa que você pode preferir um sistema comercial), e outras acham essa falta de controle muito frustrante (você pode preferir um sistema de código aberto). Se você (ou alguém de quem você cuida) recebeu o diagnóstico recentemente, um caminho comum é primeiro se acostumar com MDI mais um sensor de glicose, depois passar para uma bomba que possa ser usada em loop e depois passar para o **AAPS**, mas algumas pessoas (principalmente crianças pequenas) podem ir direto para uma bomba.

É importante notar que o usuário do **AAPS** precisa ser proativo para identificar e resolver problemas por conta própria, com a ajuda da comunidade. Essa é uma mentalidade muito diferente da que se tem ao usar um sistema comercial. Com o **AAPS**, o usuário tem mais controle, mas também a responsabilidade, e precisa se sentir confortável com isso.

## É seguro usar sistemas de código aberto como o AAPS?

### Segurança do sistema AAPS
Uma pergunta mais precisa provavelmente é “ele é seguro **em comparação** com o meu sistema atual de administração de insulina?”, já que nenhum método de administração de insulina é livre de riscos. Existem muitos controles e mecanismos de segurança no **AAPS**. Um [artigo](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375) recente estudou o uso do **AAPS** em uma simulação por computador, uma forma eficaz de testar de modo objetivo o quanto o sistema é seguro e eficaz. De modo mais geral, muitos milhares de pessoas no mundo todo usam sistemas de código aberto de administração automatizada de insulina, e o uso continua aumentando no mundo.

Qualquer dispositivo que usa comunicação por rádio pode ser hackeado, e isso também vale para uma bomba de insulina sem loop. Atualmente, não sabemos de ninguém que tenha tentado prejudicar pessoas hackeando seus equipamentos médicos para diabetes. No entanto, existem várias formas de se proteger contra esses riscos:

1.  Nas configurações da bomba, limite o bólus máximo permitido e a basal temporária máxima a valores que você acredita serem os mais seguros. Esses são limites rígidos que não acreditamos que um hacker mal-intencionado consiga contornar.

2.  Ative os alarmes do seu CGM para glicose alta e baixa.

3.  Monitore a sua administração de insulina online. Usuários do Nightscout podem definir alarmes adicionais para avisar sobre muitas situações diferentes, incluindo situações que são muito mais prováveis de acontecer do que um ataque mal-intencionado. Além de glicose alta e baixa, o Nightscout pode mostrar dados de diagnóstico úteis para verificar se a bomba está funcionando como esperado, incluindo IOB atual, histórico de basais temporárias da bomba e histórico de bólus da bomba. Ele também pode ser configurado para avisar os usuários de forma proativa sobre situações indesejadas, como previsão de glicose alta e baixa, reservatório de insulina baixo e bateria da bomba baixa.

Se um ataque mal-intencionado fosse feito à sua bomba de insulina, essas estratégias reduziriam muito o risco. Todo possível usuário do **AAPS** precisa pesar os riscos de usar o **AAPS** em comparação com os riscos de usar outro sistema.

#### Cuidados de segurança ao melhorar o controle da glicose rápido demais

Uma redução rápida da HbA1c e um melhor controle da glicose parecem atraentes. No entanto, reduzir os níveis médios de glicose _rápido demais_ ao começar qualquer sistema de loop fechado pode causar danos permanentes, inclusive nos olhos, e neuropatia dolorosa que nunca desaparece. Esses danos podem ser evitados simplesmente reduzindo os níveis mais devagar. Se você tem uma HbA1c elevada atualmente e está mudando para o AAPS (ou qualquer outro sistema de loop fechado), converse sobre esse risco possível com a sua equipe médica antes de começar e combine um plano de tempo com ela. Mais informações gerais sobre como reduzir a sua glicose com segurança, incluindo links para a literatura médica, estão na seção de segurança [aqui](#preparing-safety-first).

#### Segurança médica relacionada a dispositivos, materiais de consumo e outros medicamentos

Use uma bomba de insulina e um CGM testados, funcionando completamente e aprovados pela FDA ou com marcação CE para um loop de pâncreas artificial. Modificações de hardware ou de software nesses componentes podem causar doses de insulina inesperadas e um risco grave para o usuário. Se você encontrar ou receber oferta de bombas de insulina ou receptores de CGM quebrados, modificados ou feitos em casa, não os use para criar um sistema AAPS.

Use materiais originais, como aplicadores, cânulas e reservatórios de insulina aprovados pelo fabricante da sua bomba e do seu CGM. Usar materiais não testados ou modificados pode causar leituras erradas do CGM e erros na dose de insulina. A insulina é muito perigosa quando a dose está errada - por favor, não brinque com a sua vida modificando os seus materiais.

Não tome inibidores de SGLT-2 (gliflozinas) ao usar o **AAPS**, porque eles baixam o açúcar no sangue de forma imprevisível. Combinar esse efeito com um sistema que reduz as taxas basais para aumentar a glicose é perigoso; há mais detalhes sobre isso na [seção principal de segurança](#preparing-safety-first).

(introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team)=
## Como posso conversar sobre o AAPS com a minha equipe médica?

Recomendamos que os usuários conversem com seus médicos sobre a intenção de usar o **AAPS**. Não tenha medo de ter uma conversa sincera com a sua equipe de diabetes se você pretende usar o **AAPS** (ou qualquer outro loop OS-AID). Transparência e confiança entre paciente e médico são fundamentais.

### Sugestão de abordagem:
Comece uma conversa com o seu médico para saber o quanto ele conhece e o que pensa sobre tecnologias para diabetes, como CGMs, bombas, loops híbridos e loops comerciais. O seu médico/endocrinologista deve conhecer a tecnologia básica e estar disposto a conversar com você sobre os avanços recentes dos produtos comerciais de loop disponíveis na região dele.

#### Precedente local

Peça a opinião dos seus médicos/endocrinologistas sobre o loop OS-AID _vs_ o loop comercial e avalie o conhecimento deles nessa área. Eles conhecem o **AAPS** e podem compartilhar com você alguma experiência útil com pacientes que usam loop OS-AID?

Pergunte se a sua equipe tem pacientes sob seus cuidados que já usam loop OS-AID. Por causa do sigilo médico, os médicos não podem passar dados de outros pacientes para você sem o consentimento dessa pessoa. No entanto, se você quiser, você **pode** pedir que eles passem os **seus** dados de contato para um paciente que já usa loop OS-AID, se houver algum com quem o médico ache que você vai "se dar bem”, dizendo que você ficaria feliz se o paciente entrasse em contato para conversar sobre o loop OS-AID. Os médicos não são obrigados a fazer isso, mas alguns fazem com prazer, porque entendem a importância do apoio entre pacientes no tratamento do diabetes tipo 1. Também pode ser útil conhecer pessoas da sua região que usam loop OS-AID. Isso, claro, depende de você e não é totalmente necessário.

#### Precedente nacional e internacional

Se você sentir que a sua equipe não apoia o seu uso do loop com o **AAPS**, os seguintes pontos de discussão podem ajudar:

a) O sistema **AAPS** foi projetado POR pacientes e seus cuidadores. Ele foi projetado acima de tudo para a segurança, mas também com base em uma profunda experiência de pacientes. Existem muitos milhares de usuários do **AAPS** no mundo todo. Por isso, é provável que existam outros pacientes usando loop OS-AID entre os pacientes da sua clínica (quer eles saibam disso ou não).

b) Orientações recentes, revisadas por pares e publicadas na importante revista médica internacional [The Lancet](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/pdf/nihms-1765784.pdf)(_1_), confirmaram que os loops OS-AID são **seguros** e **eficazes para melhorar o controle do diabetes**, incluindo o tempo no alvo. Há artigos regulares em revistas importantes como a [Nature](https://doi.org/10.1038/d41586-023-02648-9)(_3_), que destacam o progresso da comunidade de loop OS-AID.

c) Começar com o **AAPS** envolve uma migração _gradual_ do uso da bomba em loop “aberto”, passando pela suspensão por glicose baixa, até o loop “fechado” híbrido, completando uma série de objetivos. Por isso existe um programa estruturado, que exige que o usuário mostre um nível de competência em cada etapa e ajuste as suas configurações básicas (basal, ISF e ICR) antes de poder fechar o loop.

d) Suporte técnico está disponível para você na comunidade OS-AID pelo GitHub, Discord e grupos fechados do Facebook.

e) Você poderá apresentar **informações tanto do CGM quanto do loop/bomba de insulina** em relatórios combinados nas consultas (pelo Nightscout ou Tidepool), impressos ou na tela (se você levar um notebook/tablet). Ter os dados do CGM e da insulina juntos permite usar melhor o tempo do seu médico para revisar os seus relatórios e ajuda nas conversas para avaliar o seu progresso.

f) Se ainda houver forte oposição da sua equipe, entregue ao seu médico cópias impressas dos artigos de referência citados aqui no texto e passe para ele o link da seção do **AAPS** para médicos: [Para médicos – Introdução geral e guia do **AAPS**](../UsefulLinks/ClinicianGuideToAaps.md)

#### Apoio de outros médicos ao loop OS-AID

O artigo publicado na [Lancet Diabetes Endocrinology](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_) (coliderado pelo King’s e pelo Guy’s and St Thomas’ NHS Foundation Trust, e coliderado pelo Dr. Sufyan Hussain, endocrinologista consultor e professor sênior honorário do King’s, em Londres) oferece:

a) **Garantia** para os profissionais de que os sistemas de pâncreas artificial OS-AID/de código aberto são uma opção de “tratamento seguro e eficaz” para o diabetes tipo 1, e fornece orientação sobre recomendações, discussões, apoio e documentação;

b) **Reconhecimento** de que os sistemas de código aberto de administração automatizada de insulina (“AID”) podem aumentar o tempo no alvo (TIR) e, ao mesmo tempo, reduzir a variabilidade da glicose no sangue e a quantidade de episódios de hipoglicemia e hiperglicemia em várias faixas etárias, gêneros e comunidades;

c) **Recomendação** de que os profissionais de saúde devem **apoiar** os pacientes com diabetes tipo 1 ou seus cuidadores que escolhem tratar o diabetes com um sistema AID de código aberto;

d) Recomendação de que os profissionais de saúde devem tentar aprender sobre todas as opções de tratamento que podem beneficiar os pacientes, incluindo os sistemas AID de código aberto disponíveis.  Se os profissionais de saúde não tiverem recursos para se informar, ou tiverem preocupações legais ou regulatórias, eles devem considerar **cooperar ou se unir a outros profissionais de saúde** que tenham;

e) Ênfase em que todos os usuários de CGMs devem ter acesso aberto e em tempo real aos **seus próprios dados de saúde** o tempo todo

f) Ênfase em que esses sistemas de código aberto não passaram pelas mesmas avaliações regulatórias que as tecnologias médicas comerciais, e não existe suporte técnico comercial. No entanto, **existe um amplo suporte da comunidade**; e

g) Uma recomendação de que a **regulamentação e as estruturas legais** devem ser atualizadas para deixar claro que é permitido um tratamento ético e eficaz com esses sistemas de código aberto.

Outro artigo na [Medical Law International, 2021](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)(_4_) também destaca que as ‘orientações sobre consentimento’ (consent guidance) do General Medical Council do Reino Unido dão muita ênfase a médico e paciente tomarem decisões juntos. O médico deve explicar os possíveis benefícios, riscos, encargos e efeitos colaterais do APS OS-AID e pode recomendar uma opção específica sem pressionar o paciente.

No fim, cabe ao paciente pesar esses fatores, junto com quaisquer questões não clínicas que sejam importantes para ele, e decidir qual opção de tratamento aceitar, se aceitar alguma.

Se um médico descobrir na consulta que o seu paciente usa loop com um sistema OS-AID, ele não está isento das suas obrigações de acompanhar o paciente só porque não prescreveu a tecnologia específica que o paciente está usando; os médicos devem continuar acompanhando os pacientes.

Os médicos (pelo menos no Reino Unido) não são proibidos de prescrever medicamentos não licenciados e podem usar o seu critério clínico. Por isso, eles devem usar o seu julgamento clínico para decidir se um APS OS-AID é adequado para um paciente específico e conversar com o paciente sobre o que consideram os prós e contras.

#### Os artigos citados acima e outros links úteis e declarações de posição estão listados abaixo:

1. Open-source automated insulin delivery: international consensus statement and practical guidance for health-care professionals [_Lancet Diabetes Endocrinol_, (2022) _10_, 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)
2. [In Silico Trials of an Open-Source Android-Based Artificial Pancreas: A New Paradigm to Test Safety and Efficacy of Do-It-Yourself Systems, 2020](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375)
3. A DIY ‘bionic pancreas’ is changing diabetes care — what's next? [_Nature_ (2023), _620_, 940-941](https://doi.org/10.1038/d41586-023-02648-9)
4. Prescribing unapproved medical devices? The case of DIY artificial pancreas systems [_Medical law international_, (2021), _21_, 42-68](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)
5. [Declaração de posição do Berlin Institute of Health, 2022](https://www.bihealth.org/en/notices/do-it-yourself-solutions-for-people-with-diabetes-are-safe-and-recommended)
6. Do-It-Yourself Automated Insulin Delivery: A Health-care Practitioner User’s Guide (posicionamento e guia da Diabetes Canada) [_Canadian Journal of Diabetes_, (2023)_47_, E8, 389-397](https://www.canadianjournalofdiabetes.com/article/S1499-2671(23)00138-7/fulltext)
7.  Holanda (EN/NL) - para médicos - [how to help people on open source automated insulin delivery systems](https://www.diabetotech.com/blog/how-to-help-people-on-open-source-automated-insulin-delivery-systems) (como ajudar pessoas que usam sistemas de código aberto de administração automatizada de insulina)
8. First Use of Open-Source Automated Insulin Delivery AndroidAPS in Full Closed-Loop Scenario: Pancreas4ALLRandomized Pilot Study [_Diabetes Technol. Ther._, 25, _5_, 2023](https://www.liebertpub.com/doi/pdf/10.1089/dia.2022.0562?casa_token=D13eFx5vCwwAAAAA:MYvO8hChbViXVJFgov1T11RXBPx2N_wOMThLHwl3TVUxbCuANegPrIFRC5R5VXx_S71FoQYW-qg)
9. Pre-school and school-aged children benefit from the switch from a sensor-augmented pump to an AndroidAPS hybrid closed loop: A retrospective analysis [_Pediatr. Diabetes_ 2021, _22_, 594-604. 2021](https://onlinelibrary.wiley.com/doi/epdf/10.1111/pedi.13190)
10. Resultados do projeto OPEN, um projeto financiado pela UE sobre os Outcomes of Patient’s Evidence with Novel, Do-it-Yourself Artificial Pancreas Technology (resultados das evidências de pacientes com uma nova tecnologia de pâncreas artificial “faça você mesmo”) (https://www.open-diabetes.eu/publications)



## Por que eu não posso simplesmente baixar o AAPS e começar a usar logo?

O app **AAPS** não está disponível no Google Play - por razões legais, você precisa compilá-lo você mesmo a partir do código-fonte. O **AAPS** não é licenciado, ou seja, não tem aprovação de nenhuma autoridade reguladora em nenhum país. O uso do **AAPS** é considerado um experimento médico em si mesmo, e é feito por conta e risco do próprio usuário.

Configurar o sistema exige paciência, determinação e o desenvolvimento gradual de conhecimento técnico. Todas as informações e o suporte podem ser encontrados nesta documentação, em outros lugares na internet ou com outras pessoas que já fizeram isso. Muitos milhares de pessoas no mundo todo já compilaram com sucesso e usam o **AAPS** atualmente.

Os desenvolvedores do **AAPS** levam a segurança muito a sério e querem que outras pessoas tenham uma boa experiência usando o **AAPS**. Por isso é essencial que todo usuário (ou cuidador, se o usuário for uma criança):

- compile o sistema AAPS por conta própria e complete os **objetivos**, para ter configurações pessoais razoavelmente boas e entender o básico de como o **AAPS** funciona quando for “fechar o loop”;

- faça backup do seu sistema, exportando e guardando arquivos importantes (como a keystore e o arquivo .json de configurações) em um lugar seguro, para poder configurar tudo de novo rapidamente se for preciso;

- atualize para as versões master mais novas assim que elas estiverem disponíveis; e

- mantenha e monitore o sistema para garantir que ele está funcionando corretamente.

## Como o sistema AAPS se conecta com outros sistemas?

A **Figura 3 (abaixo)** mostra um exemplo do sistema **AAPS** para um usuário que não precisa de seguidores interagindo com o sistema. Outros softwares e plataformas de código aberto que não aparecem aqui também podem ser integrados.

![21-06-23 AAPS connectivity no followers](../images/AAPS-connectivity-no-followers.png)


A **Figura 4 (abaixo)** mostra todo o potencial do sistema **AAPS** para um usuário que tem seguidores e precisa monitorar e ajustar o sistema remotamente (como uma criança com diabetes tipo 1). Outros softwares e plataformas de código aberto que não aparecem aqui também podem ser integrados.

![21-06-23 AAPS overview with followers](../images/AAPS-overview-with-followers.png)

## Como o AAPS é desenvolvido e melhorado continuamente?

A maioria dos usuários do **AAPS** usa a versão **master** totalmente testada do AAPS, que foi testada quanto a bugs e problemas antes de ser lançada para a comunidade. Nos bastidores, os desenvolvedores experimentam novas melhorias e as testam em versões de “desenvolvimento” (**dev**) do **AAPS** com uma comunidade de usuários que aceita fazer atualizações para corrigir bugs com pouco aviso prévio. Se as melhorias funcionarem bem, elas são lançadas como uma nova versão “master” do **AAPS**. Cada nova versão master é anunciada no grupo do Facebook, para que os usuários do **AAPS** em geral possam ler sobre ela e atualizar para a nova versão master.

Alguns usuários experientes e confiantes do **AAPS** fazem experimentos com tecnologias novas e com versões dev do app **AAPS**, o que pode ser interessante para os usuários menos aventureiros lerem, sem precisar fazer isso eles mesmos! As pessoas costumam compartilhar esses experimentos também no grupo do Facebook.

Você pode ler mais sobre alguns desses experimentos e discussões sobre tecnologias novas aqui:

Tim Street [https://www.diabettech.com/](https://www.diabettech.com/)

David Burren [https://bionicwookie.com/](https://bionicwookie.com/)

## Quem pode se beneficiar do AAPS?

| Tipo de usuário                                          |
| -------------------------------------------------------- |
| ✔️ pessoa com diabetes tipo 1                            |
| ✔️ cuidador ou pai/mãe de uma pessoa com diabetes tipo 1 |
| ✔️ usuários cegos com diabetes tipo 1                    |
| ✔️ *médicos e profissionais de saúde                     |

A tabela acima pressupõe que o usuário tem acesso a um monitor contínuo de glicose e a uma bomba de insulina.

*Todos os dados do **AAPS** podem ser disponibilizados para profissionais de saúde por meio de plataformas de compartilhamento de dados, incluindo o Nightscout, que oferece registro e monitoramento em tempo real dos dados do CGM, administração de insulina, registros de carboidratos, previsões e configurações. Os registros do Nightscout incluem relatórios diários e semanais, que podem ajudar as conversas dos profissionais de saúde com pacientes com diabetes tipo 1, com dados mais precisos sobre o controle glicêmico e quaisquer questões de comportamento.

(accessibility-for-users-aaps-who-are-partially-or-completely-blind)=

### Acessibilidade para usuários do AAPS com cegueira parcial ou total

#### Uso do AAPS no dia a dia:
O AAPS pode ser usado por pessoas cegas. Nos dispositivos Android, o sistema operacional tem um programa chamado TalkBack. Ele permite a orientação na tela por meio de saída de voz, como parte do sistema operacional. Usando o TalkBack, você pode operar o seu smartphone e o AAPS sem precisar enxergar.

#### Compilação do app AAPS:
Como usuário, você vai compilar o app AAPS no Android Studio. Muitas pessoas usam o Microsoft Windows para isso, que tem um leitor de tela parecido com o TalkBack. Como o Android Studio é um aplicativo Java, o componente “Java Access Bridge” precisa estar ativado no Painel de Controle. Caso contrário, o leitor de tela do PC não vai falar no Android Studio.

A forma de fazer isso depende do seu sistema operacional; dois métodos são descritos abaixo:

1) No menu Iniciar do Windows, digite “Painel de Controle” no campo de pesquisa e abra com Enter. Abre-se: “Todos os Itens do Painel de Controle”.

Abra a “Central de Facilidade de Acesso”.

Depois abra “Usar o computador sem um vídeo” com Enter.

Em **Ouvir texto lido em voz alta** (Hear text read aloud), selecione **Ativar o Narrador** (turn on narrator) e **Ativar a descrição de áudio** (turn on audio display) e clique em **Aplicar** (apply).

ou:

2) Pressione a tecla Windows e digite “Painel de Controle” no campo de pesquisa, abra com Enter. Abre-se: “Todos os Itens do Painel de Controle”.

Pressione a letra C para chegar à “Central de Facilidade de Acesso” (Center for Ease of Use), abra com Enter.

Depois abra “Usar o computador sem um vídeo” com Enter.

Lá, na parte de baixo, você vai encontrar a caixa de seleção “Habilitar o Java Access Bridge”; marque-a.

Pronto, é só fechar a janela! O leitor de tela deve funcionar agora.



Quer saber como começar a configurar o AAPS? Dê uma olhada na seção de [preparação](../Getting-Started/PreparingForAaps.md).
