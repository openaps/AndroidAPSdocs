# Seu perfil do AAPS

O seu **Perfil do AAPS** é um conjunto de quatro parâmetros principais que definem como o **AAPS** deve aplicar insulina de acordo com os níveis de glicose do seu sensor. Estes são os principais parâmetros sobre os quais o **AAPS** é construído. À medida que você avança nos **Objetivos**, você desbloqueia mais parâmetros que podem ser alterados (como as configurações de SMB), mas o bom funcionamento desses recursos depende de o seu **Perfil** básico estar correto. O **Perfil** inclui:
* [alvos de glicose](#profile-glucose-targets),
* [taxas basais](#your-aaps-profile-basal-rates) (BR),
* [fatores de sensibilidade à insulina](#your-aaps-profile-insulin-sensitivity-factor) (ISF) e
* [razões insulina-carboidrato](#your-aaps-profile-insulin-to-carbs-ratio) (IC ou ICR).

```{admonition} Where did DIA go?
:class: note
A **duração da ação da insulina (DIA)** não faz mais parte do seu **Perfil**. Agora ela é definida para cada insulina — veja [Gerenciar → Configurações de insulina](#Config-Builder-insulin-dia).
```

Como parte do uso do **AAPS**, os usuários devem avaliar e verificar continuamente se as configurações do seu **Perfil** estão corretas. Recomenda-se ajustar as configurações na ordem em que são apresentadas aqui. Tente acertar uma configuração antes de mudar outra. Trabalhe em pequenos passos ao invés de fazer grandes mudanças de uma só vez. Não se esqueça de ativar o novo perfil depois de cada mudança. [Faça backup das configurações do seu **Perfil**](#YourAapsProfile_Profile-backup) regularmente, exportando as suas configurações.

As configurações do seu **Perfil** interagem entre si - você pode ter configurações 'erradas' que funcionam bem juntas em certas situações, mas não em outras. Por exemplo, se uma basal alta demais coincidir com um **CR** alto demais. Isso significa que você precisa avaliar cada configuração separadamente e verificar se elas funcionam bem juntas em várias situações.

Você pode usar [Autotune](https://autotuneweb.azurewebsites.net/) para orientar seu raciocínio, embora não deva ser seguido cegamente: pode não funcionar bem para você ou não funcionar em todas as circunstâncias.

```{admonition} Your diabetes may vary
:class: note
Os **Perfis** variam muito de pessoa para pessoa.

Para taxas basais (BR), fatores de sensibilidade à insulina (ISF) e razões insulina-carboidrato (IC ou ICR), os valores absolutos e as tendências da necessidade de insulina variam muito de pessoa para pessoa, dependendo da sua biologia, sexo, idade, condicionamento físico etc., e também de fatores de curto prazo, como doenças e exercícios recentes. Para mais orientações sobre isso, o livro [“Bright Spots and Landmines”](https://diatribe.org/bright-spots-and-landmines/), de Adam Brown, é uma excelente leitura.

```

Os quatro últimos parâmetros (alvos de glicose, taxas basais, fatores de sensibilidade à insulina e razões insulina-carboidrato) podem ter valores diferentes ao longo de 24 horas, mudando a cada hora, se necessário.

![Mudança da basal a cada hora](../images/MaxDailyBasal2.png)

Abaixo estão capturas de tela do **AAPS** com um perfil de _exemplo_. Observe que o exemplo de perfil abaixo mostra um grande número de horários. Quando você começa com o **AAPS**, o seu perfil provavelmente será bem mais simples.

![Exemplo de perfil ativo](../images/Profile-Example-Active.png)

(profile-glucose-targets)=
## Glucose targets

### Descrição

O seu **alvo de glicose** é um valor central, e todos os cálculos do **AAPS** se baseiam nele. Ele é diferente da faixa-alvo na qual você normalmente tenta manter os seus valores de glicose. O alvo é usado nos cálculos do **AAPS**: se o **AAPS** prevê que a sua **glicose** vai ficar fora da faixa-alvo, ele age para trazer você de volta para essa faixa.

The targets can be defined within those boundaries :

|        | Alvo _baixo_           | Alvo _alto_              |
| ------ | ---------------------- | ------------------------ |
| Mínimo | 4,4 mmol/l ou 80 mg/dl | 5 mmol/l ou 90 mg/dl     |
| Máximo | 10 mmol/l ou 180 mg/dl | 11,1 mmol/l ou 200 mg/dl |

### Impacto

Se o alvo no seu **Perfil** for muito largo (por exemplo, 3 mmol/l ou mais [50 mg/dl ou mais] de largura), você muitas vezes verá pouca ação do **AAPS**. Isso acontece porque se prevê que o nível de **glicose** fique em algum lugar dessa faixa larga, e por isso é pouco provável que o **AAPS** aplique basais temporárias.

### Como configurar

A **figura abaixo** mostra um exemplo de como o alvo pode ser configurado em um perfil do **AAPS**.

![Alvo](../images/Profile_Target.png)

Os alvos de **glicose** são definidos de acordo com as suas preferências e necessidades pessoais. Por exemplo, se você se preocupa com hipoglicemias à noite, pode definir o seu alvo um pouco mais alto, em 117 mg/dl (6,5 mmol/l), das 21h às 7h. If you want to make sure you have plenty of insulin on board (IOB) in the morning before bolusing for breakfast, you may set a lower target of 81 mg/dL (4.5 mmol/L) from 7 am - 8 am.

No [Loop Aberto](#KeyAapsFeatures-OpenLoop), principalmente enquanto você avança nos [primeiros objetivos](../SettingUpAaps/CompletingTheObjectives.md), usar uma faixa-alvo larga pode ser uma boa opção enquanto você aprende como o **AAPS** se comporta e ajusta o seu **Perfil**.<br/> No [Loop Fechado](#KeyAapsFeatures-ClosedLoop) (a partir do **[Objetivo 6](#objectives-objective6)**), recomenda-se reduzir a faixa até ter um único alvo para cada horário do dia (alvo _baixo_ = alvo _alto_), para garantir que o **AAPS** reaja rápido às variações da **glicose**.

(your-aaps-profile-basal-rates)=

## Basal rates

### Descrição

Your basal rate of insulin (Units/hour) provides background insulin, keeping your glucose levels stable in the absence of food or exercise.

The insulin pump delivers small amounts of rapid acting insulin every few minutes, to keep the liver from releasing too much glucose, and to move glucose into body cells. Basal insulin usually makes up between 40 - 50% of your total daily dose (TDD), depending on your diet, and typically follows a circadian rhythm, with one peak and one valley in insulin requirements over 24 hours. Para mais informações, o capítulo 6 de [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe), de Gary Scheiner, é muito útil.

A maioria dos educadores em diabetes tipo 1 (e das pessoas com diabetes tipo 1!) concorda que você deve primeiro acertar as suas taxas basais, antes de tentar otimizar o ISF e o ICR.

### Impacto

Accurate basal rates enable you to wake up in range, and to skip meals - or eat - earlier or later in the day, without going high or low.

Uma taxa basal alta demais pode causar glicose baixa. E vice-versa.

O **AAPS** usa a taxa basal padrão como linha de base. Se a taxa basal for alta demais, uma ‘basal temporária zero’ contará como uma IOB negativa maior do que deveria. Isso fará o **AAPS** dar mais correções do que deveria nas horas seguintes, para levar a IOB finalmente a zero.

Assim, uma taxa basal alta demais vai causar **glicose** baixa tanto com a taxa padrão quanto algumas horas depois, quando o **AAPS** corrige em direção ao alvo.

Ao contrário, uma taxa basal baixa demais pode causar glicose alta e impedir que os níveis desçam até o alvo.

### Como configurar

A **figura abaixo** mostra um exemplo de como as taxas basais podem ser configuradas em um perfil do **AAPS**.

![Basal rates](../images/Profile_BasalRates.png)

Acertar as suas taxas basais é feito por tentativa e erro, e deve ser feito junto com a sua equipe de diabetes.

Existem métodos de teste da basal que normalmente consistem em observar as suas taxas basais e a sua necessidade de insulina durante um jejum <u>intermitente</u> ao longo de 24 horas. Embora você precise testar as suas taxas basais para o dia inteiro, não é recomendado ficar em jejum por 24 h seguidas. Isso porque o corpo ativa mecanismos, como hormônios, para compensar. Uma forma recomendada é ficar em jejum por 8 horas em 3 dias diferentes.

O método recomendado é suspender o loop (por segurança, você pode colocar o AAPS em [**LGS**](#KeyAapsFeatures-LGS) para evitar hipoglicemias, como feito para cumprir o [objetivo 6](#objectives-objective6)), o que faz voltar à sua taxa basal padrão. Observe como a sua **glicose** muda: se ela estiver caindo, a taxa basal está alta demais. E vice-versa.<br/> Um método alternativo (que pode ser mais difícil) é manter o loop funcionando e ver como a **IOB** muda. Se a **IOB** for negativa, a sua taxa basal está alta demais. E vice-versa. Atenção: este método depende do **ISF** para corrigir a **glicose**, por isso as outras variáveis também precisam estar razoavelmente bem configuradas para que ele funcione.<br/> Outra forma de ajustar as suas taxas basais é observar a ação do loop durante a noite, quando todo o COB já foi absorvido. Este método é especialmente útil para crianças, quando o jejum é difícil ou a necessidade de insulina muda com frequência. O [Dr. Saleh Adi, da Tidepool](https://www.youtube.com/watch?v=-fpWnGRhLSo), mostra formas úteis de analisar as curvas de glicose durante a noite para otimizar as suas taxas basais.

Veja [aqui](../GettingHelp/ProfileTuning.md) como ajustar o seu perfil basal analisando os padrões no loop fechado.

Quando você agir com base no resultado do teste da basal, as mudanças no **Perfil** devem ser feitas 1 a 2 horas (depende do seu tipo de insulina) antes da subida/queda. Repita o teste quantas vezes for necessário, até se sentir seguro com as configurações das suas **taxas basais**.

(your-aaps-profile-basal-not-compatible)=
#### Mensagem: "A taxa basal não é compatível com a bomba atual"

Cada bomba tem limites: a menor e a maior taxa basal que ela pode aplicar e, em algumas bombas (por exemplo Dana, Accu-Chek Combo, Medtronic e Diaconn G8), taxas basais que só podem mudar na hora cheia. O **AAPS** verifica o seu perfil em relação à bomba que você usa, **depois** de aplicar a porcentagem que você escolheu.

Se uma taxa basal estiver fora desses limites, a tela **Ativar** mostra esta mensagem e o botão **Ativar** fica cinza:

![Tela Ativar com a mensagem "A taxa basal não é compatível com a bomba atual"](../images/v4/Profiles/profile_activate_pump_incompatible.png)

Por exemplo, com uma taxa basal de 0,10 U/h à noite e uma porcentagem do perfil de 35 %, o **AAPS** teria que aplicar 0,035 U/h. Isso é menos do que uma bomba Dana pode aplicar (0,04 U/h).

Para resolver, faça uma destas coisas:

* escolha outra porcentagem: uma **maior** se uma taxa basal ficar baixa demais, uma **menor** se uma taxa basal ficar alta demais, ou
* [edite o perfil](#your-aaps-profile-create-and-edit-profiles) e mude a taxa basal.

O editor de perfil só permite começar taxas basais em uma hora cheia. Uma taxa basal que começa, por exemplo, às 06:30 só pode vir de um perfil mais antigo, por exemplo depois que você troca para uma bomba que não permite isso.

(your-aaps-profile-insulin-sensitivity-factor)=

## Insulin sensitivity factor (ISF)

### Descrição

The insulin sensitivity factor (sometimes called correction factor) is a measure of how much your blood glucose level will be reduced by 1 unit of insulin.

**Em unidades mg/dl:** Se você tem um **ISF** de 40, cada unidade de insulina vai baixar a sua glicose em aprox. 40 mg/dl (por exemplo, a sua glicose vai cair de 140 mg/dl para 100 mg/dl).

**Em unidades mmol/l:** Se você tem um **ISF** de 1,5, cada unidade de insulina vai baixar a sua glicose em aprox. 1,5 mmol/l (por exemplo, de 8 mmol/l para 6,5 mmol/l).

Por esses exemplos, você vê que quanto _menor_ o valor do **ISF**, menos sensível você é à insulina. Então, se você reduz o seu ISF de 40 para 35 (mg/dl) ou de 1,5 para 1,3 (mmol/l), isso muitas vezes é chamado de fortalecer o seu **ISF**. Ao contrário, aumentar o valor do **ISF** de 40 para 45 (mg/dl) ou de 1,5 para 1,8 (mmol/l) é enfraquecer o seu **ISF**.

### Impacto

Um **ISF menor / mais forte** (por exemplo, 40 em vez de 50) significa que a insulina baixa menos a sua **glicose** por unidade. Isto leva a uma correção mais agressiva / mais forte do loop com **mais insulina**. Se o seu **ISF** for forte demais (valor pequeno), isso pode causar **glicose** baixa.

Um **ISF maior / mais fraco** (por exemplo, 45 em vez de 35) significa que a insulina baixa mais a sua **glicose** por unidade. Isto leva a uma correção menos agressiva / mais fraca do loop com **menos insulina**. Se o seu **ISF** for fraco demais (valor grande), isso pode causar **glicose** alta.

**Exemplo:**
* A **glicose** está em 190 mg/dl (10,5 mmol/l) e o alvo é 100 mg/dl (5,6 mmol/l).
* Então, você quer uma correção de `190 - 100 = 90 mg/dL` ou `10.5 - 5.6 = 4.9 mmol/L`
* Se `ISF = 30` -> `90 / 30 = 3` ou `ISF = 1.63` -> `4.9 / 1.63 = 3`: 3 unidades de insulina
* Se `ISF = 45` -> `90 / 45 = 2` ou `ISF = 2.45` -> `4.9 / 2.45 = 2`: 2 unidades de insulina

Um **ISF** baixo demais (e por isso mais agressivo, o que não é raro) pode causar ‘correções exageradas’, porque o **AAPS** calcula que o usuário precisa de mais insulina para corrigir uma **glicose** alta do que realmente precisa. Isso pode causar níveis de glicose em ‘montanha-russa’ (principalmente em jejum), como mostra a imagem abaixo. Nesse caso, o valor do **ISF** deve ser aumentado para deixar o **AAPS** menos agressivo. Assim o **AAPS** vai dar doses de correção menores e evitar corrigir demais uma **glicose** alta, o que causaria uma **glicose** baixa.

![ISF baixo demais](../images/isf.jpg)

Ao contrário, um **ISF** alto demais pode causar correções insuficientes, ou seja, a sua **glicose** fica acima do alvo – o que se nota principalmente durante a noite.

### Como configurar

Veja a **figura abaixo** para um exemplo de como os valores de ISF podem ser configurados em um perfil do **AAPS**.

![ISF do perfil](../images/Profile_ISF.png)

A basic starting point for determining your daytime ISF is to base it on your total daily dose (TDD) using the 1,700 (94) rule. Mais detalhes estão no capítulo 7 de [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe), de Gary Scheiner.

| 1700 (se você mede em mg/dl) ou 94 (mmol/l) / TDD = ISF aproximado.<br/><br/>Exemplo: TDD = 40 U<br/>ISF aproximado (mg/dl) = 1700/40 = 43<br/>ISF aproximado (mmol/l) = 94/40 = 2,4 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                                                                                                              |

Supondo que as suas basais estejam corretas, você pode testar isso suspendendo o loop, verificando se a **IOB** é zero e tomando alguns tabletes de glicose para chegar a um nível ‘alto’ estável.

Depois, aplique uma quantidade estimada de insulina (conforme o seu 1/ISF atual) para chegar ao seu alvo de glicose.

Tenha cuidado, pois esse valor é muitas vezes definido baixo demais. Baixo demais significa que 1 U vai baixar a glicose mais rápido do que o esperado.

(your-aaps-profile-insulin-to-carbs-ratio)=

## Insulin to Carb ratio (ICR)

### Descrição

O **ICR** mede quantos gramas de carboidrato são cobertos por uma unidade de insulina.

Algumas pessoas também usam **I:C** como abreviação em vez de **ICR**, ou falam em razão de carboidratos: **CR**.

For example, a 1-to-10 (1:10) insulin-to-carb ratio means that you take 1U of insulin for every 10 grams of carbs eaten. A meal of 25g carbs would need 2.5U of insulin.

Se o seu **ICR** for mais fraco (valor maior), talvez 1:20, você precisaria de apenas 0,5 U de insulina para cobrir 10 g de carboidratos. A meal of 25g of carbs would need 25/20 = 1.25U of insulin.

É comum ter **ICR** diferentes em horários diferentes do dia, por causa dos níveis hormonais e da atividade física. Muitas pessoas percebem que têm o **ICR** mais baixo/mais forte perto do café da manhã, porque nesse horário costumam ser mais resistentes à insulina. Assim, por exemplo, o **ICR** de um usuário adulto pode ser 1:8 no café da manhã, 1:10 no almoço e 1:10 no jantar, mas esses padrões não são universais, e algumas pessoas são mais resistentes à insulina no jantar e precisam de um **ICR** mais forte/menor nesse horário.

> **NOTA:**
> 
> Em alguns países europeus, foram utilizadas unidades de pão (bread units) para determinar quanta insulina é necessária para fins alimentares. No começo, 1 unidade de pão correspondia a 12 g de carboidratos; depois, alguns mudaram para 10 g de carboidratos.
> 
> Nesse modelo, a quantidade de carboidratos foi fixada e a quantidade de insulina era variável. ("Quanta insulina é necessária para cobrir uma unidade de pão?")
> 
> Com o **ICR**, a quantidade de insulina é fixa e a quantidade de carboidratos é variável. ("Quantos g de carboidratos são cobertos por uma unidade de insulina?")
> 
> Exemplo:
> 
> Fator de unidade de pão (BU = 12 g de carboidratos): 2,4 U/BU -> Você precisa de 2,4 unidades de insulina quando come uma unidade de pão.
> 
> **ICR** correspondente: 12g / 2,4 U = 5,0 g/U -> 5,0 g de carboidratos podem ser cobertos com uma unidade de insulina.
> 
> Fator BU 2,4 U / 12g   ===>   IC = 12g / 2,4 U = 5,0 g/U
> 
> Tabelas de conversão estão disponíveis on-line [aqui](https://www.mylife-diabetescare.com/files/media/03_Documents/11_Software/FAS/SOF_FAS_App_KI-Verha%CC%88ltnis_MSTR-DE-AT-CH.pdf).

### Impacto

Um **ICR menor / mais forte** significa menos comida por unidade, ou seja, você recebe mais insulina para uma quantidade fixa de carboidratos. Também pode ser chamado "mais agressivo". Se o seu IC for forte demais, você recebe insulina demais, e isso pode causar **glicose** baixa.

Um **ICR maior / mais fraco** = mais comida por unidade, ou seja, você recebe menos insulina para uma quantidade fixa de carboidratos. Também pode ser chamado "menos agressivo". Se o seu IC for fraco demais, você recebe menos insulina do que precisa, e isso pode causar **glicose** alta.

### Como configurar

A **figura abaixo** mostra um exemplo do **ICR** de um usuário e de como ele pode ser configurado em um **Perfil do AAPS**. Ao inserir esses valores, inserimos a parte final da razão, então uma razão insulina-carboidrato de 1:3,5 é inserida simplesmente como “3,5”.

![ICR do perfil](../images/Profile_ICR.png)

Se, depois que uma refeição foi digerida e a **IOB** voltou a zero, a sua **glicose** continuar mais alta do que antes da refeição, provavelmente o seu **ICR** está fraco demais (_ou seja_, o número está alto demais e deve ser reduzido aos poucos). Ao contrário, se a sua **glicose** estiver mais baixa do que antes da refeição, o **ICR** está forte demais (_ou seja_, o número está baixo demais e deve ser aumentado aos poucos).

Supondo que as suas taxas basais estejam corretas, você pode testar verificando se a **IOB** é zero e se você está na faixa-alvo, comendo uma quantidade exata e conhecida de carboidratos e aplicando uma quantidade estimada de insulina com base na sua razão insulina-carboidrato atual. O melhor é comer alimentos que você costuma comer nesse horário do dia e contar os carboidratos com precisão.

## Perguntas comuns sobre o perfil

```{contents} Common questions related to the Profile
:depth: 1
:local: true
```

### About the importance of getting your profile right

**Por que devo tentar acertar as configurações do meu perfil? O loop não pode simplesmente cuidar disso?**

Um loop fechado híbrido _pode_ tentar ajustar a aplicação de insulina para reduzir o mau controle glicêmico causado por valores errados no **Perfil**. It can do this, for example, by withholding insulin delivery if you are going to hypo. Mas você pode conseguir um controle glicêmico muito melhor se as configurações do seu **Perfil** já estiverem o mais perto possível do que o seu corpo precisa. Esse é um dos motivos pelos quais o **AAPS** usa objetivos em etapas para passar do uso da bomba em loop aberto para o loop fechado híbrido. Além disso, haverá momentos em que você precisará abrir o loop (aquecimento do sensor, falha do sensor _etc._), às vezes no meio da noite, e você vai querer ter as configurações certas para essas situações.

Se você está começando com o **AAPS** depois de usar outro sistema de bomba em loop aberto ou fechado, você já terá uma boa ideia de quais valores usar para as taxas basais (**BR**), os fatores de sensibilidade à insulina (**ISF**) e as razões insulina-carboidrato (**ICR**).

Se você está passando de injeções (MDI) para o **AAPS**, é uma boa ideia ler primeiro sobre como fazer a transição de MDI para bomba, e planejar e fazer a mudança com cuidado, junto com a sua equipe de diabetes. ["Pumping insulin"](https://amzn.eu/d/iaCsFa2), de John Walsh e Ruth Roberts, e [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe), de Gary Scheiner, são muito úteis.

### O que causa picos altos pós-prandiais no loop fechado?
Em primeiro lugar, verifique sua taxa basal e faça um teste de taxa de basal sem carboidratos. Se estiver correto e a sua **glicose** cair até o alvo depois que os carboidratos forem totalmente absorvidos, tente definir um alvo temporário 'refeição em breve' no **AAPS** algum tempo antes da refeição, ou pense com o seu endocrinologista em um tempo adequado de pré-bólus. <br/> Se a sua **glicose** estiver alta demais depois da refeição e continuar alta demais depois que os carboidratos forem totalmente absorvidos, considere diminuir o seu **ICR** junto com o seu endocrinologista. Se a sua **glicose** estiver alta demais enquanto há **COB** e baixa demais depois que os carboidratos forem totalmente absorvidos, pense com o seu endocrinologista em aumentar o seu **ICR** e em um tempo adequado de pré-bólus.

### Minha glicose está alta há muito tempo e o loop não a faz baixar
Os possíveis motivos para o **AAPS** não dar insulina suficiente são:
* O **ISF** não está forte o suficiente
* A taxa basal pode não ser forte o suficiente
* Uma configuração de segurança pode estar agindo, como o **maxIOB**. Ou o **SMB** está desativado neste horário, dependendo das suas configurações.
* Uma automação foi configurada e passou por cima do **AAPS**.

Veja também [Ajustar o perfil do AAPS](../GettingHelp/ProfileTuning.md).

### Tenho IOB negativa, isso é um problema?
**IOB** negativa significa que a quantidade absoluta de insulina (basal + bólus) no seu corpo é menor do que a basal. Isso fará o **AAPS** enviar mais insulina assim que a **glicose** começar a subir, porque ele considera que falta insulina, o que pode causar **glicose** baixa mais tarde.

Aqui estão alguns motivos pelos quais você pode ter IOB negativa, e o que fazer:
* basal forte demais: ajuste o seu **Perfil**
* bólus demais na refeição anterior: ajuste o seu **Perfil** ou verifique se você está dando o bólus na hora certa.
* DIA curta demais para o seu tipo de insulina, causando acúmulo de insulina: ajuste em [Gerenciar → Configurações de insulina](#Config-Builder-insulin-dia)
* atividade física: na próxima vez, considere usar uma [porcentagem do perfil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) menor durante a atividade, para compensar o aumento da sensibilidade.

## Gerenciar os seus perfis

```{contents} Operations that you can perform on your **Profiles** in **AAPS**
:depth: 1
:local: true
```
(your-aaps-profile-create-and-edit-profiles)=
### Criar e editar perfis

No **AAPS** v4, os seus perfis ficam na tela **Gerenciar** (navegação inferior) → **Perfil**, mostrados como um carrossel de cartões que você desliza, com uma barra de ações (**➕ Adicionar**, **✏️ Editar**, **⧉ Clonar**, **🗑️ Excluir**, **▶ Ativar**). Para gerenciar e ativar um perfil, veja [Gerenciar e ativar perfis](#ProfileSwitch-manage-v4). Você vem do **AAPS** v3, onde os perfis tinham a sua própria aba? Veja [O que mudou no AAPS v4](#v4changes-manage).

Tocar em **✏️ Editar** abre o editor. Defina o **nome** e as **unidades** do perfil e depois preencha as quatro programações usando as abas:

- **IC** — razão insulina-carboidrato (g/U)
- **ISF** — fator de sensibilidade à insulina
- **BAS** — taxas basais
- **ALV** — faixa-alvo

![O editor de perfil — abas IC / ISF / BAS / ALV](../images/setup-wizard/Wizard-Profile-IC.png)

Cada programação é uma lista de **blocos de horário**: adicione um bloco, defina o horário de início e o valor e depois toque em **Salvar**.

Se você fizer qualquer mudança no seu **Perfil**, verifique se está editando o **Perfil** certo: o cartão do perfil em uso está marcado como **ATIVO**, mas o cartão selecionado na tela pode ser outro.

(your-aaps-profile-profile-from-scratch-for-a-kid)=
### Criar um perfil do zero para uma criança

O [Assistente de perfil](#aaps-screens-profile-helper) (menu ☰ → **Assistente de perfil**) pode ajudar você a criar um perfil para uma criança (até 18 anos).

**Nota importante:**

**O Assistente de perfil serve para ajudar você a encontrar o perfil inicial para a sua criança. Mesmo sendo baseado em conjuntos de dados de dois hospitais diferentes, converse sempre com a sua equipe médica antes de usar um novo perfil!**

O Assistente de perfil oferece conjuntos de dados de dois hospitais diferentes para encontrar o perfil inicial para a sua criança, até 18 anos.

![Assistente de perfil para crianças 1](../images/ProfileHelperKids1.png)

1. Verifique se você está na aba **Perfil 1**.
2. Em **Tipo de perfil**, verifique se "Perfil padrão" está selecionado.
3. Ajuste o Perfil padrão (baseado no conjunto de dados de um hospital) informando a idade da criança e o DDT Total **ou** o peso.
4. Mude para a aba **Perfil 2**.
5. Toque em **Tipo de perfil** e selecione "Perfil padrão DPV".
6. Ajuste o Perfil padrão DPV (baseado no conjunto de dados de outro hospital) informando a idade da criança, o DDT Total e a porcentagem da basal. Observe que o conjunto de dados DPV fornece apenas **taxas basais**, por isso IC e ISF aparecem como zero neste perfil.
7. Abra a aba **Comparação**. A comparação dos dois perfis ajustados será mostrada (veja a captura de tela abaixo).
8. Se você quiser começar a ajustar o seu perfil com base em uma dessas sugestões, use o botão **Clonar** na parte de baixo da comparação.

![Assistente de perfil para crianças 2](../images/ProfileHelperKids2.png)

### Trocar perfil

Veja [Troca de perfil e porcentagem do perfil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md).

(your-aaps-profile-clone-profile-switch)=
### Clonar uma troca de perfil para um novo perfil

![Troca de Perfil](../images/TreatmentsView4.png)

O [Histórico de tratamentos](#aaps-screens-treatments) mostra todas as **Trocas de Perfil** anteriores. Na aba **Troca de Perfil**, você pode usar uma **Troca de Perfil** anterior como base para criar um novo **Perfil**. Nesse caso, o deslocamento de tempo e a porcentagem serão aplicados ao novo perfil local. Use o botão **Clonar** mostrado na linha **2**.

Agora você pode ir para a [tela Perfil](#your-aaps-profile-create-and-edit-profiles) (**Gerenciar → Perfil**) para editar o perfil recém-criado.

(YourAapsProfile_Profile-backup)=
### Backup do perfil

Como são uma configuração central do seu sistema de loop, os seus **Perfis** são muito importantes e algo que você realmente não quer perder.

* Os seus **Perfis** ficam guardados no banco de dados do **AAPS**.
* Quando o **NSClientV3** está configurado (veja [Sincronização](#SetupWizard-synchronization-with-the-reporting-server-and-more)), os seus **Perfis** também são enviados automaticamente ao Nightscout.
* Eles também fazem parte das [configurações exportadas](../Maintenance/ExportImportSettings.md). Portanto, certifique-se de ter um backup em um lugar seguro.

### Editar perfis pelo Nightscout

Se ativado, as mudanças de **Perfil** feitas diretamente no Nightscout podem ser recebidas no **AAPS**. A configuração se chama "**Receber armazenamento de perfis do NS**" e faz parte das opções de **Aceitação de dados do Nightscout** (aceitar dados do Nightscout vem desativado por padrão, veja a [etapa Controle do cliente do Assistente de configuração do AAPS](../SettingUpAaps/SetupWizard.md)); você pode encontrá-la rapidamente com a **barra de pesquisa** na tela principal. Enquanto o controle do cliente está ligado, a configuração fica oculta e o **AAPS** não aceita mudanças de perfil vindas do Nightscout ([modo reforçado](#client-master-control-hardened-mode)); edite o perfil em um cliente pareado, ou carregue-o uma vez com **Sincronização completa**.

Isso pode ser útil antes de fazer grandes mudanças em um **Perfil** mais extenso. Eles podem ser inseridos com mais facilidade pela interface web, _por exemplo_ para copiar dados manualmente de uma planilha.

Para isso, porém, é importante clonar todo o **registro do banco de dados**, que contém vários perfis, no editor do Nightscout (seta azul na captura de tela abaixo). Os novos registros do banco de dados recebem então a data atual. Depois de salvar, o **Perfil** alterado/novo pode ser ativado no **AAPS** com uma [troca de perfil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) normal.

![Clonar registros de banco de dados](../images/Nightscout_Profile_Editor.PNG)

(your-aaps-profile-compare-profiles)=
### Comparar dois perfis

Você também pode usar o [Assistente de perfil](#aaps-screens-profile-helper) (menu ☰ → **Assistente de perfil**) para comparar dois perfis ou trocas de perfil diferentes (porcentagem de um dos seus perfis usada antes em uma [troca de perfil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)).

![Assistente de perfil 1](../images/ProfileHelper1.png)

1. Verifique se você está na aba **Perfil 1**.
2. Em **Tipo de perfil**, selecione "Perfil disponível" para escolher entre todos os **Perfis** guardados.
3. Escolha o **Perfil** que você quer usar como base da comparação.
4. Mude para a aba **Perfil 2**.
5. Em **Tipo de perfil**, selecione "Troca de Perfil" para escolher no histórico de todas as suas **Trocas de Perfil**.
6. Escolha a **Troca de Perfil** com a qual você quer comparar.
7. Abra a aba **Comparação**. A comparação dos dois perfis será mostrada (veja a captura de tela abaixo).

![Assistente de perfil 2](../images/ProfileHelper2.png)
