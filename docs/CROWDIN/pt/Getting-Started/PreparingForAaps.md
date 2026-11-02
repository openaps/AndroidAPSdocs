# Preparar-se para começar com o AAPS

Bem-vindo. Esta documentação pretende orientar os utilizadores que se preparam para configurar e começar a usar o sistema de pâncreas artificial Android (**AAPS**).

## Como se orientar na documentação

Um **índice** e uma explicação da estrutura da documentação estão [aqui](../index.md); também pode chegar lá clicando no símbolo do **AAPS** no canto superior esquerdo da documentação. Aí encontra uma visão geral do objetivo das diferentes secções da documentação. Também pode usar os títulos à esquerda desta página para navegar na documentação. Por fim, existe uma prática função de pesquisa, logo abaixo do símbolo do **AAPS**.

Queremos tornar fácil perceber tanto as capacidades como as limitações do **AAPS**. Pode ser desanimador descobrir, depois de investir tempo a ler a documentação, que não tem uma bomba de insulina ou um CGM compatível, ou que o **AAPS** oferece funcionalidades diferentes das que esperava.

Muitos detalhes ligados à experiência na documentação do **AAPS** fazem mais sentido quando já está a usar o **AAPS** em tempo real. Tal como é difícil aprender um desporto apenas lendo as regras, é preciso primeiro aprender as regras básicas para usar o **AAPS** em segurança e depois aprender a melhor forma de as aplicar quando começa a usar o **AAPS**.

(preparing-safety-first)=

## Segurança em primeiro lugar
«Com grande poder vem grande responsabilidade…»

### Segurança técnica
O **AAPS** tem um vasto conjunto de funções de segurança. Estes impõem restrições que são retiradas aos poucos, à medida que conclui por etapas uma série de [Objetivos](../SettingUpAaps/CompletingTheObjectives.md), que incluem testar parâmetros específicos e responder a perguntas de escolha múltipla. As funcionalidades do **AAPS** são desbloqueadas à medida que os Objetivos são concluídos com sucesso. Este processo permite ao utilizador passar em segurança, por etapas, do Loop Aberto para o Loop Fechado, enquanto aprende as diferentes funcionalidades do **AAPS**.

Os [Objetivos](../SettingUpAaps/CompletingTheObjectives.md) foram concebidos para dar a melhor introdução possível ao **AAPS**, tendo em conta os erros típicos e as tendências gerais que os programadores do **AAPS** observaram nos novos utilizadores. Podem acontecer erros porque o principiante tem pouca experiência e está demasiado ansioso por começar com o **AAPS**, ou porque não reparou em pontos importantes. Os [Objetivos](../SettingUpAaps/CompletingTheObjectives.md) pretendem reduzir estes problemas ao mínimo.

### Segurança médica
```{admonition} Avoid permanent and painful damage to your eyes and nerves
:class: danger
Cuidado com melhorias rápidas no controlo da glicose e com a descida da HbA1c 
```

Uma questão de segurança importante: **uma descida rápida da HbA1c e um melhor controlo da glicose em pessoas que tiveram glicose elevada durante algum tempo podem causar danos permanentes**. Muitas pessoas com diabetes não sabem isto, e nem todos os médicos alertam os seus doentes para este problema.

Estes danos podem incluir **perda de visão e neuropatia permanente (dor)**. É possível evitar estes danos baixando a glicose média mais devagar. Se tem atualmente uma HbA1c elevada e vai passar para o **AAPS** (ou qualquer outro sistema de loop fechado), _por favor_ fale deste risco com a sua equipa clínica antes de começar e combine com ela um calendário com alvos de glicose seguros que descem gradualmente. No início, pode facilmente definir alvos de glicose mais altos no **AAPS** (atualmente, o alvo mais alto que pode escolher é 11,1 mmol/l, mas também pode manter de propósito um perfil fraco, se necessário) e depois baixar o alvo com o passar dos meses.

#### Com que rapidez posso baixar a minha HbA1c sem risco de danos permanentes?

Um [estudo](https://pubmed.ncbi.nlm.nih.gov/1464975/) retrospetivo de 76 doentes indicou que o risco de progressão da retinopatia aumentava 1,6 vezes, 2,4 vezes e 3,8 vezes se a HbA1c baixasse 1 %, 2 % ou 3 %, respetivamente, num período de 6 meses. Sugeriram que a **«descida do valor da HbA1c em qualquer período de 6 meses deve ser limitada a menos de 2 % para evitar a progressão da retinopatia.... Uma descida demasiado rápida no início do controlo glicémico pode causar um agravamento grave ou transitório da progressão da retinopatia.»**

N.B. Se usa outras unidades de HbA1c (mmol/mol em vez de %), clique [aqui](https://www.diabetes.co.uk/hba1c-units-converter.html) para uma calculadora de HbA1c.

Noutra [avaliação](https://academic.oup.com/brain/article/138/1/43/337923) retrospetiva de 954 doentes, os investigadores observaram que:

**«Com uma descida da HbA1c de 2–3 pontos percentuais em 3 meses, houve um risco absoluto de 20 % de desenvolver neuropatia induzida pelo tratamento na diabetes; com uma descida da HbA1c de >4 pontos percentuais em 3 meses, o risco absoluto de desenvolver neuropatia induzida pelo tratamento na diabetes ultrapassou 80 %.»**

Um [comentário](https://academic.oup.com/brain/article/138/1/2/340563) a este trabalho concordou que, para evitar complicações, **o objetivo deve ser baixar a A1c em <2 % em 3 meses.** Pode ler outras revisões sobre o tema [aqui](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6587545/pdf/DOM-21-454.pdf) e [aqui](https://www.mdpi.com/1999-4923/15/7/1791).

É geralmente aceite que as pessoas com diabetes tipo 1 _recém_-diagnosticadas (que muitas vezes têm uma HbA1c muito alta no diagnóstico, antes de começar a insulina) parecem conseguir baixar rapidamente a HbA1c logo após o diagnóstico sem correr estes riscos na mesma medida, porque não tiveram glicose elevada durante um período tão longo. Mesmo assim, é uma questão que deve discutir com o seu médico.

(PreparingForAaps-no-sglt-2-inhibitors)=
### Não usar inibidores SGLT-2

```{admonition} NO SGLT-2 inhibitors
:class: danger
Os inibidores SGLT-2, também chamados gliflozinas, inibem a reabsorção da glicose no rim. As gliflozinas baixam a glicose de forma impossível de calcular, por isso NÃO PODE tomá-las enquanto usa um sistema de loop fechado como o AAPS! Haveria um risco significativo de cetoacidose e/ou hipoglicemia! A combinação deste medicamento com um sistema que baixa as taxas basais para subir a glicose é especialmente perigosa. 

In a nutshell:
- **Example 1: risk of Hypo**
>During lunch, you use **AAPS** to bolus based on consuming 45 g of carbs. O problema é que, sem o AAPS saber, os inibidores fazem o corpo eliminar parte dos hidratos de carbono. Isto deixa o seu corpo com demasiada insulina em relação aos hidratos absorvidos, o que provoca hipoglicemia.

- **Exemplo 2: risco de cetoacidose**
>Os inibidores eliminam parte dos hidratos de carbono em segundo plano, o que faz descer a sua glicose. O **AAPS** vai dar automaticamente instruções à bomba para reduzir a insulina, incluindo a basal. Com o tempo, a sua glicose pode ficar abaixo do valor alvo, ao ponto de o corpo não ter insulina de fundo suficiente para absorver os hidratos de carbono, o que provoca cetoacidose. Normalmente, a cetoacidose surge em doentes com DT1 porque a bomba falha, o que faria disparar alertas no telefone e seria notado por causa de um valor de glicose alto. No entanto, o perigo das gliflozinas é que não haveria alertas do AAPS, porque a bomba continua a funcionar e a glicose pode manter-se dentro do alvo.

Os nomes comerciais comuns dos inibidores SGLT-2 incluem: Invokana, Farxiga, Jardiance, Glyxambi, Synjardy, Steglatro e Xigduo XR, entre outros.
```


### Princípios básicos do loop com o AAPS

Os princípios e conceitos básicos do loop devem ser compreendidos antes de usar o **AAPS**. Para isso, invista o seu tempo pessoal a ler a documentação do **AAPS** e conclua os Objetivos, que pretendem dar-lhe uma base sólida para usar o **AAPS** de forma segura e eficaz. A quantidade de documentação do **AAPS** pode parecer esmagadora no início, mas tenha paciência e confie no processo: com a abordagem certa, vai conseguir!

A velocidade de progressão depende de cada pessoa, mas saiba que concluir todos os objetivos demora normalmente 6–9 semanas. Muitas pessoas começam a compilar, instalar e configurar o **AAPS** muito antes de começarem a usá-lo. Para ajudar, o sistema tem uma «bomba virtual» que pode ser usada durante os primeiros objetivos, para que se possa familiarizar com o **AAPS** sem o usar realmente para administrar insulina. Abaixo encontra uma divisão detalhada do calendário; saiba que no objetivo 7 do **AAPS** já está em loop fechado; os objetivos seguintes acrescentam funções extra, como **SMB** e **automatizações**, úteis para alguns utilizadores, mas não essenciais para a função principal do **AAPS**.

O sucesso com o **AAPS** exige uma atitude proativa, vontade de refletir sobre os dados da glicose e flexibilidade para fazer os ajustes necessários ao **AAPS** para melhorar os seus resultados. Tal como é quase impossível aprender a praticar um desporto apenas lendo as regras, o mesmo se pode dizer do **AAPS**.

#### Conte com atrasos e pequenos problemas até ter tudo configurado e a funcionar

Nas primeiras etapas com o **AAPS**, pode ter dificuldades em pôr todos os componentes do loop a comunicar bem entre si (e com eventuais seguidores), e ao afinar as suas definições. Alguns problemas só podem ser resolvidos quando o **AAPS** é usado no dia a dia, mas há muita ajuda disponível no grupo do Facebook e no Discord. Planeie em conformidade e escolha momentos «bons», como uma manhã calma de fim de semana (ou seja, não tarde à noite nem quando está cansado, nem antes de uma reunião importante ou de uma viagem) para resolver problemas.

#### Compatibilidade da tecnologia

O **AAPS** só é compatível com certos tipos de bombas de insulina, CGM e telefones, e alguma tecnologia pode não estar disponível em vários países. Para evitar desilusões ou frustrações, leia as secções sobre [CGM](../Getting-Started/CompatiblesCgms.md), [bombas](../Getting-Started/CompatiblePumps.md) e [telefones](../Getting-Started/Phones.md).

#### Tempo para compilar a app e progredir até ao loop completo

The time to build the **AAPS** app depends on your level of expertise and technical ability. Normalmente, para utilizadores sem experiência, pode demorar até meio dia ou um dia inteiro (com ajuda da comunidade) a compilar o **AAPS**. O processo fica muito mais rápido nas versões mais novas do **AAPS**, à medida que ganha experiência.

Várias partes desta documentação ajudam-no no processo de compilação:

- [Compilar o AAPS](../SettingUpAaps/BuildingAaps.md) guia-o passo a passo na compilação da app e na instalação no seu telefone;

- as [FAQ](../UsefulLinks/FAQ.md) respondem às perguntas comuns e explicam os erros mais prováveis; e

- a central de [Resolução de problemas](../GettingHelp/GeneralTroubleshooting.md) reúne soluções para os problemas mais frequentes, organizadas por tema.

O tempo até chegar ao loop fechado depende de cada pessoa; [abaixo](#preparing-how-long-will-it-take) encontra um calendário aproximado para chegar ao loop completo com o **AAPS**.


#### Keystore e ficheiro de exportação das definições de configuração

Uma «keystore» (ficheiro .jks) é um ficheiro encriptado com senha, único para a sua cópia do **AAPS**. O seu telefone Android usa-a para garantir que ninguém mais pode atualizar a sua cópia sem a keystore. Em resumo, como parte da compilação do **AAPS**, deve:

1.  Guardar o seu ficheiro keystore (ficheiro .jks usado para assinar a app) num local seguro;

2.  Anotar a senha do seu ficheiro keystore.

A forma de guardar a keystore depende do seu método de compilação:

- **Compilação no Android Studio (computador)**: a keystore é criada durante a compilação; veja em [Gerar o APK assinado](#Building-APK-generate-signed-apk) onde a deve guardar.
- **AAPS Builder**: guarde o ficheiro de cópia de segurança `aaps-keystore.jks` que a página de configuração lhe ofereceu quando criou a sua chave, com a respetiva senha e alias. Se enviou a sua própria keystore, guarde esse ficheiro.
- **Compilação no navegador com um fork**: use o workflow próprio [Export keystore](#ci-keystore-export) para transferir uma cópia para o seu Google Drive.

Assim, pode usar exatamente o mesmo ficheiro keystore sempre que é criada uma versão atualizada do **AAPS**. Em média, são necessárias 2 atualizações do **AAPS** por ano.

Além disso, o **AAPS** permite [exportar todas as suas definições de configuração](../Maintenance/ExportImportSettings.md). Assim, pode recuperar o seu sistema em segurança ao trocar de telefone ou ao atualizar/reinstalar a aplicação, com o mínimo de perturbação. 

#### Resolução de Problemas

Não hesite em contactar a comunidade AAPS se tiver alguma dúvida: não existem perguntas tolas! Todos os utilizadores, com qualquer nível de experiência, são incentivados a fazer perguntas. As respostas às perguntas costumam ser rápidas, graças ao número de utilizadores do **AAPS**.

##### [pergunte no grupo do AAPS no Facebook](https://www.facebook.com/groups/AndroidAPSUsers/)

##### [pergunte no canal do AAPS no Discord](https://discord.gg/4fQUWHZ4Mw)





#### [Onde obter ajuda](../GettingHelp/WhereCanIGetHelp.md)?

Esta secção dá aos novos utilizadores ligações para recursos onde podem obter ajuda, incluindo o apoio da comunidade, formada por utilizadores novos e experientes, que podem esclarecer dúvidas e resolver os problemas habituais do AAPS.

#### [Secção para médicos](../UsefulLinks/ClinicianGuideToAaps.md)

Esta é uma [secção especificamente para médicos](../UsefulLinks/ClinicianGuideToAaps.md) que querem saber mais sobre o AAPS e a tecnologia de pâncreas artificial de código aberto. Na Introdução também há orientações sobre [como falar com a sua equipa clínica](#introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team).

## O que vamos compilar e instalar?

Este diagrama dá uma visão geral dos principais componentes (hardware e software) do sistema **AAPS**:

![preparing_overview](../images/preparing_images/AAPS_preparing_overview_01.png)


Além dos três componentes básicos de hardware (telefone, bomba, sensor de glicose), também precisamos de: 1) A app **AAPS** 2) Um servidor de relatórios e 3) Uma app para o monitor contínuo de glicose (CGM)

### 1) Uma aplicação para telefone Android: **AAPS**

O **AAPS** é uma app que funciona em smartphones e dispositivos Android. Vai compilar a app **AAPS** (um ficheiro apk) por si mesmo, seguindo um guia passo a passo: transfere o código-fonte do **AAPS** do GitHub, instala os programas necessários (Android Studio, GitHub Desktop) no seu computador e compila a sua própria cópia da app **AAPS**. Depois, vai transferir a app **AAPS** para o seu smartphone (por e-mail, cabo USB, _etc._) e instalá-la.

### 2) Um servidor de relatórios: Nightscout (Tidepool*)

Para tirar todo o partido do **AAPS**, precisa de configurar um servidor Nightscout. Pode [fazê-lo por si mesmo](https://nightscout.github.io/nightscout/new_user/#free-diy) ou, em alternativa, pagar um pequeno valor para que lhe configurem um [serviço Nightscout gerido](https://nightscout.github.io/#nightscout-as-a-service). O Nightscout é usado para recolher os dados do **AAPS** ao longo do tempo e pode gerar relatórios detalhados que relacionam os padrões do CGM e da insulina. Os cuidadores também podem usar o Nightscout para comunicar à distância com a aplicação **AAPS** e acompanhar a gestão da diabetes da sua criança. Estas funções de comunicação remota incluem a monitorização em tempo real da glicose e da insulina, bólus de insulina à distância (por SMS) e anúncios de refeições. Tentar analisar o controlo da sua diabetes olhando para os dados do CGM separados dos dados da bomba é como conduzir um carro em que o condutor é cego e o passageiro descreve o que vê. O Tidepool também está disponível como alternativa ao Nightscout.

### 3) App do sensor CGM

Conforme o seu sensor de glicose/CGM, vai precisar de uma app compatível para receber as leituras de glicose e enviá-las para o **AAPS**. As diferentes opções são mostradas abaixo e há mais informações na secção [CGM compatíveis](../Getting-Started/CompatiblesCgms.md):

![dexcom_options](../images/preparing_images/AAPS_connectivity_Dex_02.png) ![libre_options](../images/preparing_images/AAPSconnectivity_libre.png) ![eversense_options](../images/preparing_images/AAPS_connectivity_eversense.png)

### Manutenção do sistema **AAPS**

Tanto o **Nightscout** como o **AAPS** devem ser atualizados cerca de uma vez por ano, quando são lançadas versões melhoradas. Em alguns casos, a atualização pode ser adiada; noutros, é fortemente recomendada ou considerada essencial para a segurança. Estas atualizações são anunciadas nos grupos do Facebook e nos servidores do Discord. As notas das versões explicam claramente qual é a situação. Na altura das atualizações, é provável que muitas pessoas façam perguntas semelhantes às suas, e terá apoio para fazer as atualizações.

(preparing-how-long-will-it-take)=
## Quanto tempo demora a configurar tudo?

Como já foi dito, usar o **AAPS** é mais uma «viagem» que exige investir o seu tempo pessoal. Não é uma configuração única. As estimativas atuais para compilar o **AAPS**, instalar e configurar o software do **AAPS** e do **CGM** e passar do loop aberto ao loop fechado híbrido com o **AAPS** são de cerca de 4 a 6 meses no total. Por isso, sugerimos que dê prioridade a compilar a app **AAPS** e a fazer os primeiros objetivos o mais cedo possível, mesmo que ainda use outro sistema de administração de insulina (pode usar uma bomba virtual até ao objetivo 5).

Alguns objetivos exigem que passe um certo número de dias, para garantir que compreende a nova funcionalidade. Não é possível saltar este tempo de espera; estes tempos mínimos de espera foram definidos para a sua própria segurança.

Eis um calendário aproximado:

| Tarefas                                                       |         Tempo aprox.          |
| ------------------------------------------------------------- |:-----------------------------:|
| Primeira leitura da documentação                              |           1–2 dias            |
| Configurar o GitHub para a compilação no navegador            |           1–4 horas           |
| Configurar um servidor de relatórios                          |            1 hora             |
| Instalar uma app de CGM (xDrip, BYODA, …)                     |            1 hora             |
| Configuração inicial CGM → xDrip → AAPS                       |            1 hora             |
| Configuração inicial AAPS → bomba                             |            1 hora             |
| Configurar AAPS → Nightscout/Tidepool (só relatórios)         |            1 hora             |
| Opcional: configurar Nightscout ↔ **AAPS** e NSFollowers      |            1 hora             |
| Objetivo 1: Configurar a visualização e a monitorização       |            1 hora             |
| Objetivo 2: Aprender a controlar o AAPS                       |            2 horas            |
| Objetivo 3: Prove o seu conhecimento                          |          Até 14 dias          |
| Objetivo 4: A iniciar em loop aberto                          |       Mínimo de 7 dias        |
| Objetivo 5: Compreender o seu loop aberto                     |            7 dias             |
| Objetivo 6: Começar a fechar o loop (Suspensão Glicose Baixa) |   Mínimo de 5, até 14 dias    |
| Objetivo 7: Afinar o loop fechado                             |  Mínimo de 1 dia, até 7 dias  |
| Objetivo 8: Ajustar as basais e os rácios, ativar o Autosens  | Mínimo de 7 dias, até 14 dias |
| Objetivo 9: Ativar o Super Micro Bólus (SMB)                  |       Mínimo de 28 dias       |
| Objetivo 10: Automatização                                    |       Mínimo de 28 dias       |

Quando o **AAPS** estiver totalmente a funcionar, ainda vai precisar de afinar regularmente as suas definições para melhorar a gestão global da sua diabetes.

## Requisitos

### Considerações médicas

Além dos avisos médicos na [secção de segurança](#preparing-safety-first), há também parâmetros diferentes conforme a insulina que usa na bomba.

#### Escolha da insulina

Os cálculos do **AAPS** baseiam-se em insulina com concentração de 100 U/ml (o padrão das bombas). Configure a sua insulina em **Gerir → Definições de insulina**: defina o **Pico** e a **DAI**, ou use **Carregar pico de** para preencher o tempo de pico padrão de uma das predefinições:

- **Novorapid** (também para Humalog e NovoLog)
- **Fiasp**
- **Lyumjev**

Os utilizadores avançados podem introduzir diretamente qualquer tempo de pico (35 a 120 minutos), por exemplo para uma mistura de insulinas. Consulte [Definições de insulina](#Config-Builder-insulin).


### Aspetos técnicos

Esta documentação pretende reduzir ao mínimo absoluto os conhecimentos técnicos necessários. Para compilar a app **AAPS**, tem várias opções; veja uma visão geral em [Compilar o AAPS](../SettingUpAaps/BuildingAaps.md):

- **Compilação no navegador** (recomendada): compile a app diretamente no seu smartphone com o GitHub Actions, sem precisar de computador nem do Android Studio. Com o [AAPS Builder](../SettingUpAaps/BrowserBuildAapsBuilder.md) só precisa de uma conta GitHub: transfere a app diretamente do GitHub. O método com fork também precisa de uma conta Google para guardar a app no seu Google Drive.
- **Compilação no Android Studio**: compile a app no seu computador com o Android Studio. É usada sobretudo por programadores que pretendem alterar o código.
- **Compilação na linha de comandos**: para utilizadores que preferem compilar localmente sem instalar o Android Studio.

Além de compilar a app, também precisa de configurar um servidor de relatórios, configurar várias apps no telefone Android e ganhar experiência na gestão da diabetes. Isto consegue-se avançando passo a passo, com paciência e com a ajuda da comunidade **AAPS**. Se já sabe navegar na internet e gerir o seu próprio e-mail Gmail, compilar o **AAPS** é uma tarefa ao seu alcance. Não tenha pressa.

### Smartphones

#### AAPS e versões do Android

A versão atual do **AAPS** (4.0) precisa de um smartphone Android com **Android 12.0 ou superior** da Google. Se pensa comprar um telefone novo (em janeiro de 2026), o Android 16 é o preferido.<br/> Por razões de segurança, recomendamos vivamente que os utilizadores mantenham a sua compilação do **AAPS** atualizada. No entanto, para utilizadores que não podem usar um dispositivo com Android 12.0 ou mais recente, continuam disponíveis versões anteriores do **AAPS** compatíveis com versões antigas do Android, consulte: [Notas das Versões](#maintenance-android-version-aaps-version).

#### Escolha do modelo de smartphone
O modelo exato que comprar depende da(s) função(ões) que pretende. Na [página Telefones](../Getting-Started/Phones.md) encontra recomendações e a experiência dos utilizadores com configurações que funcionam.

Os utilizadores são incentivados a manter atualizada a versão do Android do telefone, incluindo as atualizações de segurança. No entanto, se é novo no **AAPS** ou não é especialista em tecnologia, talvez prefira adiar a atualização do telefone até que outros a tenham feito e confirmado nos nossos fóruns que é segura.

```{admonition} Delaying Samsung phone updates
:class: warning
A Samsung tem o mau hábito de forçar atualizações nos seus telefones, o que pode causar problemas de ligação Bluetooth. Para desativar estas atualizações forçadas, tem de pôr o telefone em «modo de programador»:

1. Vá a **Settings** (Definições) > **About phone** (Acerca do telefone) > **Software information** (Informações do software) e toque em **Build number** (Número de compilação) até aparecer a confirmação de que desbloqueou o modo de programador.
2. Volte ao menu principal **Settings** (Definições), onde deve ver uma nova opção de menu **Developer options** (Opções de programador).
3. Abra **Developer options** (Opções de programador), procure **Auto system update** (Atualização automática do sistema) e desative-a.
```

```{admonition} Google Play Protect potential issue
:class: warning
Houve vários relatos de o **AAPS** ser fechado arbitrariamente pelo Google Play Protect todas as manhãs. Se isto acontecer, terá de ir às opções do Google Play e desativar o **Google Play Protect**. Nem todos os modelos de telefone nem todas as versões do Android são afetados.
```

```{admonition} Android developer verification
:class: note
A partir de setembro de 2026, a Google vai introduzir aos poucos a [verificação de programador do Android](#android-developer-verification), que muda a forma como uma app compilada por si é instalada no telefone. A compilação do **AAPS** não é afetada, e continuam disponíveis métodos de instalação gratuitos; veja os detalhes na página indicada.
```

