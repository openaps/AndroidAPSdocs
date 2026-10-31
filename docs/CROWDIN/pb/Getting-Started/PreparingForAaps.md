# Preparação para começar com o AAPS

Bem-vindo(a). Esta documentação quer orientar usuários que estão se preparando para configurar e começar a usar o Android Artificial Pancreas System (**AAPS**).

## Como se orientar na documentação

Um **índice** e uma explicação da estrutura da documentação estão [aqui](../index.md); você também pode chegar lá clicando no símbolo do **AAPS** no canto superior esquerdo da documentação. Lá você encontra uma visão geral do objetivo das diferentes seções da documentação. Você também pode usar os títulos à esquerda desta página para navegar pela documentação. Por fim, há uma função de pesquisa prática logo abaixo do símbolo do **AAPS**.

Queremos deixar fácil entender tanto as capacidades quanto as limitações do **AAPS**. Pode ser decepcionante descobrir, depois de dedicar tempo à leitura da documentação, que você talvez não tenha uma bomba de insulina ou um CGM compatível, ou que o **AAPS** oferece funções diferentes das esperadas.

Muitos detalhes ligados à experiência na documentação do **AAPS** fazem mais sentido quando você já está usando o **AAPS** em tempo real. Assim como é difícil aprender um esporte só lendo as regras, é preciso combinar o aprendizado das regras básicas para operar o **AAPS** com segurança e, depois, aprender a melhor forma de aplicar essas regras quando você começa a usar o **AAPS**.

(preparing-safety-first)=

## Segurança em primeiro lugar
“Com grandes poderes vêm grandes responsabilidades…”

### Segurança técnica
O **AAPS** tem um conjunto amplo de recursos de segurança. Eles impõem limitações que são removidas aos poucos, à medida que você conclui em etapas uma série de [Objetivos](../SettingUpAaps/CompletingTheObjectives.md), que incluem testar parâmetros específicos e responder a perguntas de múltipla escolha. Os recursos do **AAPS** são liberados à medida que os Objetivos são concluídos com sucesso. Esse processo permite que o usuário passe com segurança, em etapas, do Loop Aberto para o Loop Fechado, enquanto aprende sobre os diferentes recursos do **AAPS**.

Os [Objetivos](../SettingUpAaps/CompletingTheObjectives.md) foram criados para dar a melhor introdução possível ao **AAPS**, levando em conta os erros típicos e as tendências gerais que os desenvolvedores do **AAPS** observaram em novos usuários. Erros podem acontecer porque o iniciante não tem experiência e está com muita pressa de começar a usar o **AAPS**, ou porque não prestou atenção a pontos importantes. Os [Objetivos](../SettingUpAaps/CompletingTheObjectives.md) buscam diminuir esses problemas.

### Segurança médica
```{admonition} Avoid permanent and painful damage to your eyes and nerves
:class: danger
Cuidado com melhorias rápidas no controle da glicose e com a redução da HbA1c 
```

Um ponto importante de segurança é que uma **redução rápida da HbA1c e a melhora do controle da glicose em quem teve glicose alta por bastante tempo podem causar danos permanentes**. Muitas pessoas com diabetes não sabem disso, e nem todos os médicos avisam seus pacientes sobre esse problema.

Esses danos podem incluir **perda de visão e neuropatia permanente (dor)**. É possível evitar esses danos reduzindo a glicose média mais devagar. Se a sua HbA1c está alta no momento e você está passando para o **AAPS** (ou para qualquer outro sistema de loop fechado), _por favor_ converse sobre esse possível risco com sua equipe médica antes de começar e combine com ela um prazo com alvos de glicose seguros que diminuem aos poucos. No começo, você pode definir facilmente alvos de glicose mais altos no **AAPS** (hoje, o alvo mais alto que você pode escolher é 11,1 mmol/l, mas você também pode manter de propósito um perfil fraco, se necessário) e depois reduzir o alvo com o passar dos meses.

#### Com que rapidez posso reduzir minha HbA1c sem risco de danos permanentes?

Um [estudo](https://pubmed.ncbi.nlm.nih.gov/1464975/) retrospectivo com 76 pacientes relatou que o risco de progressão da retinopatia aumentou 1,6 vez, 2,4 vezes e 3,8 vezes se a HbA1c caísse 1%, 2% ou 3%, respectivamente, em um período de 6 meses. Eles sugeriram que a **"redução do valor da HbA1c em qualquer período de 6 meses deve ser limitada a menos de 2%, para prevenir a progressão da retinopatia.... Uma redução rápida demais no início do controle glicêmico pode causar uma piora grave ou temporária na progressão da retinopatia."**

Obs.: Se você usa outra unidade de HbA1c (mmol/mol em vez de %), clique [aqui](https://www.diabetes.co.uk/hba1c-units-converter.html) para uma calculadora de HbA1c.

Em outra [avaliação](https://academic.oup.com/brain/article/138/1/43/337923) retrospectiva de 954 pacientes, os pesquisadores observaram que:

**"Com uma redução da HbA1c de 2–3 pontos percentuais em 3 meses, houve um risco absoluto de 20% de desenvolver neuropatia induzida pelo tratamento no diabetes; com uma redução da HbA1c de >4 pontos percentuais em 3 meses, o risco absoluto de desenvolver neuropatia induzida pelo tratamento no diabetes passou de 80%."**

Um [comentário](https://academic.oup.com/brain/article/138/1/2/340563) sobre esse trabalho concordou que, para evitar complicações, **a meta deve ser reduzir a A1c em <2% em 3 meses.** Você pode ler outras revisões sobre o assunto [aqui](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6587545/pdf/DOM-21-454.pdf) e [aqui](https://www.mdpi.com/1999-4923/15/7/1791).

Em geral, aceita-se que pessoas com diabetes tipo 1 _recém_-diagnosticadas (que muitas vezes têm HbA1c muito alta no diagnóstico, antes de começar a insulinoterapia) parecem conseguir reduzir a HbA1c rapidamente logo após o diagnóstico sem correr esses riscos na mesma medida, porque não tiveram glicose alta por um período tão longo. Mesmo assim, é um ponto que você deve discutir com seu médico.

(PreparingForAaps-no-sglt-2-inhibitors)=
### Nada de inibidores de SGLT-2

```{admonition} NO SGLT-2 inhibitors
:class: danger
Os inibidores de SGLT-2, também chamados de gliflozinas, inibem a reabsorção de glicose nos rins. As gliflozinas baixam a glicose de forma imprevisível, e por isso você NÃO DEVE tomá-las enquanto usa um sistema de loop fechado como o AAPS! Haveria um risco significativo de cetoacidose e/ou hipoglicemia! A combinação desse medicamento com um sistema que reduz as taxas basais para aumentar a glicose é especialmente perigosa. 

Resumindo:
- **Exemplo 1: risco de hipoglicemia**
>No almoço, você usa o **AAPS** para dar um bólus para 45 g de glicose ingeridos. O problema é que, sem o AAPS saber, os inibidores fazem o corpo eliminar parte dos carboidratos. Isso deixa seu corpo com insulina demais em relação aos carboidratos absorvidos, o que causa hipoglicemia.

- **Exemplo 2: risco de cetoacidose**
>Os inibidores eliminam parte dos carboidratos em segundo plano, o que faz sua glicose baixar. O **AAPS** vai instruir a bomba automaticamente a reduzir a insulina, incluindo a basal. Com o tempo, sua glicose pode ficar abaixo do alvo, a ponto de o corpo não ter insulina de fundo suficiente para absorver os carboidratos, o que causa cetoacidose. Normalmente, a cetoacidose aparece em pessoas com DM1 porque a bomba falha, o que geraria alertas no telefone e seria percebido por causa da glicose alta. O perigo das gliflozinas, porém, é que não haveria alertas do AAPS, porque a bomba continua funcionando e a glicose pode continuar dentro do alvo.

Nomes comerciais comuns de inibidores de SGLT-2 incluem: Invokana, Farxiga, Jardiance, Glyxambi, Synjardy, Steglatro e Xigduo XR, entre outros.
```


### Princípios básicos do loop com o AAPS

Os princípios e conceitos básicos do loop devem ser entendidos antes de usar o **AAPS**. Para isso, você precisa dedicar seu tempo pessoal à leitura da documentação do **AAPS** e concluir os Objetivos, que têm a meta de dar a você uma base sólida para o uso seguro e eficaz do **AAPS**. A quantidade de documentação do **AAPS** pode parecer grande demais no começo, mas tenha paciência e confie no processo - com a abordagem certa, você vai conseguir!

A velocidade do progresso depende de cada pessoa, mas saiba que concluir todos os objetivos normalmente leva de 6 a 9 semanas. Muitas pessoas começam a compilar, instalar e configurar o **AAPS** bem antes de começar a usá-lo. Para ajudar nisso, o sistema tem uma "bomba virtual", que pode ser usada durante os primeiros objetivos, para que você se familiarize com o **AAPS** sem realmente usá-lo para administrar insulina. Abaixo há uma divisão detalhada do cronograma. Saiba que no objetivo 7 do **AAPS** você já está em loop fechado; os objetivos seguintes adicionam recursos extras como **SMB** e **automações**, que são úteis para alguns usuários, mas não são essenciais para a função principal do **AAPS**.

O sucesso com o **AAPS** exige uma atitude ativa, disposição para refletir sobre os dados de glicose e flexibilidade para fazer os ajustes necessários no **AAPS** para melhorar seus resultados. Assim como é quase impossível aprender um esporte só lendo as regras, o mesmo vale para o **AAPS**.

#### Planeje atrasos e pequenos problemas para deixar tudo configurado e funcionando

Nas primeiras etapas com o **AAPS**, você pode ter dificuldades para fazer todos os componentes do loop se comunicarem bem entre si (e com possíveis seguidores) e para fazer o ajuste fino das suas configurações. Alguns problemas só podem ser resolvidos quando o **AAPS** já está sendo usado no dia a dia, mas há muita ajuda disponível no grupo do Facebook e no Discord. Planeje-se e escolha momentos "bons", como uma manhã tranquila de fim de semana (ou seja, não tarde da noite, quando você está cansado, ou antes de uma reunião importante ou de uma viagem), para investigar e resolver problemas.

#### Compatibilidade da tecnologia

O **AAPS** só é compatível com alguns tipos de bombas de insulina, CGMs e telefones, e algumas tecnologias podem não estar disponíveis em todos os países. Para evitar decepções ou frustrações, leia as seções sobre [CGM](../Getting-Started/CompatiblesCgms.md), [bomba](../Getting-Started/CompatiblePumps.md) e [telefone](../Getting-Started/Phones.md).

#### Tempo para compilar o app e avançar até o loop completo

O tempo para compilar o app **AAPS** depende do seu nível de experiência e da sua habilidade técnica. Normalmente, para usuários sem experiência, pode levar de meio dia a um dia inteiro (com ajuda da comunidade) para compilar o **AAPS**. O processo fica muito mais rápido nas versões mais novas do **AAPS**, à medida que você ganha experiência.

Várias partes desta documentação ajudam você no processo de compilação:

- [Compilar o AAPS](../SettingUpAaps/BuildingAaps.md) guia você passo a passo na compilação do app e na instalação no seu telefone;

- o [FAQ](../UsefulLinks/FAQ.md) responde às perguntas comuns e explica os erros que mais acontecem; e

- a central de [Resolução de problemas](../GettingHelp/GeneralTroubleshooting.md) reúne soluções para os problemas mais frequentes, organizadas por assunto.

O tempo até chegar ao loop fechado depende de cada pessoa; um cronograma aproximado para chegar ao loop completo com o **AAPS** está [abaixo](#preparing-how-long-will-it-take).


#### Keystore e arquivo de exportação das configurações

Uma “keystore” (arquivo .jks) é um arquivo criptografado com senha, único para a sua própria cópia do **AAPS**. Seu telefone Android a usa para garantir que ninguém mais possa atualizar a sua cópia sem a keystore. Resumindo, como parte da compilação do **AAPS**, você deve:

1.  Guardar seu arquivo de keystore (arquivo .jks usado para assinar seu app) em um lugar seguro;

2.  Anotar a senha do seu arquivo de keystore.

A forma de guardar a keystore depende do seu método de compilação:

- **Compilação no Android Studio (computador)**: a keystore é criada durante a compilação — veja em [Gerar APK assinado](#Building-APK-generate-signed-apk) onde guardá-la.
- **AAPS Builder**: guarde o arquivo de backup `aaps-keystore.jks` que a página de configuração ofereceu quando você criou sua chave, junto com a senha e o alias. Se você enviou a sua própria keystore, guarde esse arquivo.
- **Compilação no navegador com um fork**: use o workflow [Export keystore](#ci-keystore-export) para baixar uma cópia para o seu Google Drive.

Assim você poderá usar exatamente o mesmo arquivo de keystore sempre que uma versão atualizada do **AAPS** for criada. Em média, serão necessárias 2 atualizações do **AAPS** por ano.

Além disso, o **AAPS** permite [exportar todas as suas configurações](../Maintenance/ExportImportSettings.md). Assim você pode recuperar seu sistema com segurança ao trocar de telefone ou ao atualizar/reinstalar o aplicativo, com o mínimo de transtorno. 

#### Resolução de problemas

Fique à vontade para procurar a comunidade do AAPS se tiver qualquer dúvida - não existe pergunta boba! Todos os usuários, com qualquer nível de experiência, são incentivados a fazer perguntas. As respostas às perguntas costumam ser rápidas, por causa do grande número de usuários do **AAPS**.

##### [pergunte no grupo do AAPS no Facebook](https://www.facebook.com/groups/AndroidAPSUsers/)

##### [pergunte no canal do AAPS no Discord](https://discord.gg/4fQUWHZ4Mw)





#### [Onde posso obter ajuda](../GettingHelp/WhereCanIGetHelp.md)?

Esta seção quer dar aos novos usuários links para recursos de ajuda, incluindo o suporte da comunidade, formada por usuários novos e experientes, que podem esclarecer dúvidas e resolver os problemas comuns que aparecem com o AAPS.

#### [Seção para médicos](../UsefulLinks/ClinicianGuideToAaps.md)

Esta é uma [seção especialmente para médicos](../UsefulLinks/ClinicianGuideToAaps.md) que querem saber mais sobre o AAPS e sobre a tecnologia de pâncreas artificial de código aberto. Também há orientações sobre [como conversar com sua equipe médica](#introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team) na Introdução.

## O que vamos compilar e instalar?

Este diagrama mostra uma visão geral dos principais componentes (hardware e software) do sistema **AAPS**:

![preparing_overview](../images/preparing_images/AAPS_preparing_overview_01.png)


Além dos três componentes básicos de hardware (telefone, bomba, sensor de glicose), também precisamos de: 1) O app **AAPS** 2) Um servidor de relatórios e 3) Um app de monitor contínuo de glicose (CGM)

### 1) Um aplicativo para telefone Android: **AAPS**

O **AAPS** é um app que roda em smartphones e aparelhos Android. Você mesmo vai compilar o app **AAPS** (um arquivo apk), seguindo um guia passo a passo: vai baixar o código-fonte do **AAPS** do GitHub, instalar os programas necessários (Android Studio, GitHub desktop) no seu computador e compilar a sua própria cópia do app **AAPS**. Depois, você vai transferir o app **AAPS** para o seu smartphone (por e-mail, cabo USB _etc._) e instalá-lo.

### 2) Um servidor de relatórios: Nightscout (Tidepool*)

Para aproveitar o **AAPS** por completo, você precisa configurar um servidor Nightscout. Você pode [fazer isso sozinho](https://nightscout.github.io/nightscout/new_user/#free-diy) ou, como alternativa, pagar uma pequena taxa para que um [serviço de Nightscout gerenciado](https://nightscout.github.io/#nightscout-as-a-service) seja configurado para você. O Nightscout é usado para coletar os dados do **AAPS** ao longo do tempo e pode gerar relatórios detalhados que relacionam os padrões do CGM e da insulina. Os cuidadores também podem usar o Nightscout para se comunicar a distância com o aplicativo **AAPS** e acompanhar o tratamento do diabetes do filho. Esses recursos de comunicação remota incluem monitoramento em tempo real dos níveis de glicose e de insulina, bólus de insulina a distância (por mensagem de texto) e anúncio de refeições. Tentar analisar o controle do seu diabetes olhando os dados do CGM separados dos dados da bomba é como dirigir um carro em que o motorista está de olhos vendados e o passageiro descreve o caminho. O Tidepool também está disponível como alternativa ao Nightscout.

### 3) App do sensor CGM

Dependendo do seu sensor de glicose/CGM, você vai precisar de um app compatível para receber as leituras de glicose e enviá-las para o **AAPS**. As diferentes opções são mostradas abaixo, e há mais informações na [seção CGMs compatíveis](../Getting-Started/CompatiblesCgms.md):

![dexcom_options](../images/preparing_images/AAPS_connectivity_Dex_02.png) ![libre_options](../images/preparing_images/AAPSconnectivity_libre.png) ![eversense_options](../images/preparing_images/AAPS_connectivity_eversense.png)

### Manutenção do sistema **AAPS**

Tanto o **Nightscout** quanto o **AAPS** precisam ser atualizados mais ou menos uma vez por ano, quando versões melhoradas são lançadas. Em alguns casos, a atualização pode esperar; em outros, ela é muito recomendada ou considerada essencial para a segurança. O aviso dessas atualizações será dado nos grupos do Facebook e nos servidores do Discord. As notas de versão vão deixar claro qual é a situação. Provavelmente muitas pessoas vão fazer perguntas parecidas com as suas na hora da atualização, e você terá ajuda para fazer as atualizações.

(preparing-how-long-will-it-take)=
## Quanto tempo vai levar para configurar tudo?

Como dito antes, usar o **AAPS** é mais uma “jornada” que exige dedicar seu tempo pessoal. Não é uma configuração feita uma única vez. As estimativas atuais para compilar o **AAPS**, instalar e configurar o **AAPS** e o software do **CGM** e passar do loop aberto para o loop fechado híbrido com o **AAPS** são de cerca de 4 a 6 meses no total. Por isso, sugerimos que você dê prioridade a compilar o app **AAPS** e a fazer os primeiros objetivos o quanto antes, mesmo que ainda use outro sistema de administração de insulina (você pode usar uma bomba virtual até o objetivo 5).

Alguns objetivos exigem que passe um certo número de dias, para garantir que você entende a nova função. Não é possível pular esse tempo de espera; esses tempos mínimos foram definidos para a sua própria segurança.

Aqui está um prazo aproximado:

| Tarefas                                                           |       Tempo aproximado        |
| ----------------------------------------------------------------- |:-----------------------------:|
| Primeira leitura da documentação                                  |           1–2 dias            |
| Configurar o GitHub para a compilação no navegador                |           1–4 horas           |
| Configurar um servidor de relatórios                              |            1 hora             |
| Instalar um app de CGM (xDrip, BYODA, …)                          |            1 hora             |
| Configuração inicial CGM → xDrip → AAPS                           |            1 hora             |
| Configuração inicial AAPS → bomba                                 |            1 hora             |
| Configurar AAPS → Nightscout/Tidepool (só relatórios)             |            1 hora             |
| Opcional: configurar Nightscout ↔ **AAPS** e NSFollowers          |            1 hora             |
| Objetivo 1: Configurar a visualização e o monitoramento           |            1 hora             |
| Objetivo 2: Aprenda como controlar o AAPS                         |            2 horas            |
| Objetivo 3: Prove seu conhecimento                                |          Até 14 dias          |
| Objetivo 4: Iniciando em um loop aberto                           |       No mínimo 7 dias        |
| Objetivo 5: Entender seu loop aberto                              |            7 dias             |
| Objetivo 6: Começar a fechar o loop (Suspensão por glicose baixa) |   No mínimo 5, até 14 dias    |
| Objetivo 7: Ajustar o loop fechado                                |  No mínimo 1 dia, até 7 dias  |
| Objetivo 8: Ajustar basais e relações, ativar o Autosens          | No mínimo 7 dias, até 14 dias |
| Objetivo 9: Ativar o Super Micro Bólus (SMB)                      |       No mínimo 28 dias       |
| Objetivo 10: Automação                                            |       No mínimo 28 dias       |

Mesmo quando o **AAPS** já estiver funcionando por completo, você ainda vai precisar ajustar suas configurações com regularidade para melhorar o controle geral do seu diabetes.

## Requisitos

### Considerações médicas

Além dos avisos médicos na [seção de segurança](#preparing-safety-first), também há parâmetros diferentes conforme a insulina que você usa na bomba.

#### Escolha da insulina

Os cálculos do **AAPS** são baseados em insulinas com concentração de 100 U/ml (o padrão das bombas). Você configura sua insulina em **Gerenciar → Configurações de insulina**: defina o **Pico** e a **DIA**, ou use **Carregar pico de** para preencher o tempo de pico padrão de uma das predefinições:

- **Novorapid** (também para Humalog e NovoLog)
- **Fiasp**
- **Lyumjev**

Usuários avançados podem digitar qualquer tempo de pico (35 a 120 minutos) diretamente, por exemplo para uma mistura de insulinas. Veja [Configurações de insulina](#Config-Builder-insulin).


### Técnico

Esta documentação quer reduzir ao mínimo absoluto o conhecimento técnico necessário. Para compilar o app **AAPS**, você tem várias opções — veja [Compilar o AAPS](../SettingUpAaps/BuildingAaps.md) para uma visão geral:

- **Compilação no navegador** (recomendada): compile o app direto do seu smartphone usando o GitHub Actions, sem precisar de computador nem do Android Studio. Com o [AAPS Builder](../SettingUpAaps/BrowserBuildAapsBuilder.md) você só precisa de uma conta no GitHub: você baixa o app direto do GitHub. O método com fork também precisa de uma conta Google para guardar o app no seu Google Drive.
- **Compilação no Android Studio**: compile o app no seu computador usando o Android Studio. Ela é usada principalmente por desenvolvedores que pretendem alterar o código.
- **Compilação pela linha de comando**: para usuários que preferem compilar localmente sem instalar o Android Studio.

Além de compilar o app, você também precisa configurar um servidor de relatórios, configurar vários apps no telefone Android e ganhar experiência no controle do diabetes. Isso é possível avançando passo a passo, com paciência e com a ajuda da comunidade do **AAPS**. Se você já sabe navegar na internet e gerenciar seus próprios e-mails do Gmail, compilar o **AAPS** é uma tarefa possível. Vá com calma.

### Smartphones

#### AAPS e versões do Android

A versão atual do **AAPS** (4.0) requer um smartphone Android com Google **Android 12.0 ou superior**. Se você está pensando em comprar um telefone novo (em janeiro de 2026), o Android 16 é o preferido.<br/> Por motivos de segurança, recomendamos muito que os usuários mantenham sua compilação do **AAPS** atualizada. No entanto, para usuários que não podem usar um aparelho com Android 12.0 ou mais recente, versões anteriores do **AAPS** compatíveis com versões antigas do Android continuam disponíveis, veja: [Notas de versão](#maintenance-android-version-aaps-version).

#### Escolha do modelo de smartphone
O modelo exato que você vai comprar depende da(s) função(ões) desejada(s). Na [página Telefones](../Getting-Started/Phones.md) você encontra recomendações e relatos de usuários sobre combinações que funcionam.

Os usuários são incentivados a manter a versão do Android do telefone atualizada, incluindo as atualizações de segurança. No entanto, se você é novo no **AAPS** ou não é especialista em tecnologia, talvez seja melhor esperar para atualizar o telefone até que outras pessoas tenham feito isso e confirmado nos nossos fóruns que é seguro.

```{admonition} Delaying Samsung phone updates
:class: warning
Infelizmente, a Samsung tem um histórico de forçar atualizações nos seus telefones, o que pode causar problemas de conexão Bluetooth. Para desativar essas atualizações forçadas, você precisa colocar o telefone no "modo de desenvolvedor":

1. Vá em **Settings** (Configurações) > **About phone** (Sobre o telefone) > **Software information** (Informações do software) e toque em **Build number** (Número da versão) até aparecer a confirmação de que o modo de desenvolvedor foi liberado.
2. Volte ao menu principal **Settings** (Configurações), onde deve aparecer um novo item de menu **Developer options** (Opções do desenvolvedor).
3. Abra **Developer options** (Opções do desenvolvedor), role até encontrar **Auto system update** (Atualização automática do sistema) e desative.
```

```{admonition} Google Play Protect potential issue
:class: warning
Houve vários relatos de que o **AAPS** é fechado sem motivo pelo Google Play Protect todas as manhãs. Se isso acontecer, você vai precisar ir às opções do Google Play e desativar o **Google Play Protect**. Nem todos os modelos de telefone ou versões do Android são afetados.
```

```{admonition} Android developer verification
:class: note
A partir de setembro de 2026, o Google está introduzindo aos poucos a [verificação de desenvolvedor do Android](#android-developer-verification), que muda a forma como um app compilado por você é instalado no telefone. A compilação do **AAPS** não é afetada, e continuam disponíveis métodos de instalação gratuitos — veja a página do link para mais detalhes.
```

