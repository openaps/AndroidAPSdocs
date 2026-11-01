# O seu perfil AAPS

O seu **Perfil do AAPS** é um conjunto de quatro parâmetros principais que definem como o **AAPS** deve administrar insulina em resposta aos seus valores de glicose do sensor. Estes são os parâmetros principais em que o **AAPS** se baseia. À medida que avança nos **Objetivos**, vai desbloquear mais parâmetros que pode alterar (como as definições de SMB), mas o bom funcionamento destas funções depende de o seu **Perfil** base estar correto. O **Perfil** inclui:
* [alvos de glicose](#profile-glucose-targets),
* [taxas basais](#your-aaps-profile-basal-rates) (BR),
* [fatores de sensibilidade à insulina](#your-aaps-profile-insulin-sensitivity-factor) (FSI) e
* [rácios insulina/hidratos de carbono](#your-aaps-profile-insulin-to-carbs-ratio) (IHC).

```{admonition} Where did DIA go?
:class: note
A **duração da ação da insulina (DAI)** já não faz parte do seu **Perfil**. Agora é definida para cada insulina — veja [Gerir → Definições de insulina](#Config-Builder-insulin-dia).
```

Como parte da gestão do **AAPS**, os utilizadores devem avaliar e verificar continuamente se as definições do seu **Perfil** estão corretas. Recomenda-se ajustar as definições pela ordem em que são apresentadas aqui. Tente acertar uma definição antes de mudar outra. Faça pequenos passos em vez de grandes mudanças de uma só vez. Não se esqueça de ativar o novo perfil depois de cada alteração. Faça regularmente uma [cópia de segurança das definições do seu **Perfil**](#YourAapsProfile_Profile-backup), exportando as suas definições.

As definições do seu **Perfil** influenciam-se umas às outras: pode ter definições 'erradas' que funcionam bem juntas em certas situações, mas não noutras. Por exemplo, se uma basal demasiado alta coincidir com um **IHC** demasiado alto. Isto significa que precisa de avaliar cada definição em separado e verificar se funcionam bem em conjunto em várias situações.

Pode usar o [Autotune](https://autotuneweb.azurewebsites.net/) para orientar o seu raciocínio, mas não o deve seguir cegamente: pode não funcionar bem para si ou em todas as situações.

```{admonition} Your diabetes may vary
:class: note
Os **Perfis** variam muito de pessoa para pessoa.

Nas taxas basais (BR), nos fatores de sensibilidade à insulina (FSI) e nos rácios insulina/hidratos de carbono (IHC), os valores absolutos e as tendências das necessidades de insulina variam muito de pessoa para pessoa, conforme a sua biologia, sexo, idade, condição física, etc., e também com fatores de curto prazo, como doença ou exercício recente. Para mais orientação sobre isto, o livro [“Bright Spots and Landmines”](https://diatribe.org/bright-spots-and-landmines/) de Adam Brown é uma excelente leitura.

```

Os quatro últimos parâmetros (alvos de glicose, taxas basais, fatores de sensibilidade à insulina e rácios insulina/hidratos de carbono) podem ter valores diferentes ao longo das 24 horas, mudando de hora a hora se necessário.

![Mudança horária da basal](../images/MaxDailyBasal2.png)

Abaixo mostram-se capturas de ecrã do **AAPS** de um perfil de _exemplo_. Note que o exemplo de perfil abaixo mostra muitos pontos horários. Quando começa a usar o **AAPS**, o seu perfil vai ser provavelmente muito mais simples.

![Exemplo de perfil ativo](../images/Profile-Example-Active.png)

(profile-glucose-targets)=
## Glucose targets

### Descrição

O seu **alvo de glicose** é um valor central e todos os cálculos do **AAPS** se baseiam nele. É diferente do intervalo alvo em que normalmente tenta manter os seus valores de glicose. O alvo é usado nos cálculos do **AAPS**: se o **AAPS** prevê que a sua **glicose** vai ficar fora do intervalo alvo, atua para o trazer de volta a esse intervalo.

The targets can be defined within those boundaries :

|        | Alvo _Baixo_           | Alvo _Alto_              |
| ------ | ---------------------- | ------------------------ |
| Mínimo | 4,4 mmol/l ou 80 mg/dl | 5 mmol/l ou 90 mg/dl     |
| Máximo | 10 mmol/l ou 180 mg/dl | 11,1 mmol/l ou 200 mg/dl |

### Impacto

Se o alvo do seu **Perfil** for muito largo (por exemplo, 3 mmol/l ou mais [50 mg/dl ou mais] de largura), vai ver muitas vezes pouca ação do **AAPS**. Isto acontece porque o nível de **glicose** previsto fica algures nesse intervalo largo e, por isso, é pouco provável que o **AAPS** ative basais temporárias.

### Como definir

A **figura abaixo** mostra um exemplo de como o alvo pode ser definido num perfil do **AAPS**.

![Alvo](../images/Profile_Target.png)

Os alvos de **glicose** são definidos de acordo com as suas preferências e necessidades pessoais. Por exemplo, se tem medo de hipoglicemias durante a noite, pode definir o alvo um pouco mais alto, 117 mg/dl (6,5 mmol/l), das 21h às 7h. If you want to make sure you have plenty of insulin on board (IOB) in the morning before bolusing for breakfast, you may set a lower target of 81 mg/dL (4.5 mmol/L) from 7 am - 8 am.

Em [Loop Aberto](#KeyAapsFeatures-OpenLoop), sobretudo enquanto avança pelos [primeiros objetivos](../SettingUpAaps/CompletingTheObjectives.md), usar um alvo com um intervalo largo pode ser uma boa opção enquanto aprende como o **AAPS** se comporta e ajusta o seu **Perfil**.<br/> Em [Loop Fechado](#KeyAapsFeatures-ClosedLoop) (a partir do **[Objetivo 6](#objectives-objective6)**), recomenda-se reduzir o intervalo até ter um único alvo para cada hora do dia (alvo _Baixo_ = alvo _Alto_), para que o **AAPS** reaja depressa às variações da **glicose**.

(your-aaps-profile-basal-rates)=

## Basal rates

### Descrição

Your basal rate of insulin (Units/hour) provides background insulin, keeping your glucose levels stable in the absence of food or exercise.

The insulin pump delivers small amounts of rapid acting insulin every few minutes, to keep the liver from releasing too much glucose, and to move glucose into body cells. Basal insulin usually makes up between 40 - 50% of your total daily dose (TDD), depending on your diet, and typically follows a circadian rhythm, with one peak and one valley in insulin requirements over 24 hours. Para mais informação, o capítulo 6 do livro [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) de Gary Scheiner é muito útil.

A maioria dos educadores em diabetes tipo 1 (e das pessoas com diabetes tipo 1!) concorda que deve acertar primeiro as suas taxas basais, antes de tentar otimizar o FSI e o IHC.

### Impacto

Accurate basal rates enable you to wake up in range, and to skip meals - or eat - earlier or later in the day, without going high or low.

Uma taxa basal demasiado alta pode causar glicoses baixas. E vice-versa.

O **AAPS** usa a taxa basal predefinida como 'linha de base'. Se a taxa basal for demasiado alta, uma 'basal temporária a zero' conta como uma IA negativa maior do que devia. Isto leva o **AAPS** a dar depois mais correções do que devia, para levar a IA de volta a zero.

Assim, uma taxa basal demasiado alta causa **glicoses** baixas com a taxa predefinida, mas também algumas horas depois, quando o **AAPS** corrige para o alvo.

Pelo contrário, uma taxa basal demasiado baixa pode causar glicoses altas e impedir que os valores desçam até ao alvo.

### Como definir

A **figura abaixo** mostra um exemplo de como as taxas basais podem ser definidas num perfil do **AAPS**.

![Basal rates](../images/Profile_BasalRates.png)

Acertar as suas taxas basais faz-se por tentativa e erro, e deve ser feito em conjunto com a sua equipa de diabetes.

Há métodos de teste da basal que costumam consistir em observar as suas taxas basais e necessidades de insulina durante um jejum <u>intermitente</u> ao longo de 24 horas. Embora precise de testar as suas taxas basais para o dia todo, não se recomenda fazer jejum durante 24 horas seguidas. Isto porque o corpo ativa mecanismos, como hormonas, para compensar. Uma forma recomendada é fazer jejum em 3 dias diferentes, durante 8 horas.

O método recomendado é suspender o loop (por segurança, pode pôr o AAPS em [**SGB**](#KeyAapsFeatures-LGS) para evitar hipoglicemias, como no [objetivo 6](#objectives-objective6)), o que faz voltar à sua taxa basal predefinida. Observe como a sua **glicose** muda: se estiver a descer, a taxa basal é demasiado alta. E vice-versa.<br/> Um método alternativo (pode ser mais difícil) é manter o loop a funcionar e ver como a **IA** muda. Se a **IA** for negativa, a sua taxa basal é demasiado alta. E vice-versa. Atenção: este método depende do **FSI** para corrigir a **glicose** e, por isso, só funciona bem se as outras variáveis estiverem razoavelmente bem definidas.<br/> Outra forma de ajustar as suas taxas basais é observar o que o loop faz durante a noite, quando já não há HCA. Este método é útil sobretudo para crianças, quando o jejum é difícil ou as necessidades de insulina mudam muitas vezes. O [Dr. Saleh Adi, do Tidepool](https://www.youtube.com/watch?v=-fpWnGRhLSo), mostra formas úteis de analisar as linhas de glicose da noite para otimizar as suas taxas basais.

Veja [aqui](../GettingHelp/ProfileTuning.md) como ajustar o seu perfil basal, analisando padrões em loop fechado.

Quando agir com base no resultado do seu teste da basal, as alterações no **Perfil** devem ser feitas 1 a 2 horas (conforme o seu tipo de insulina) antes da subida/descida. Repita o teste as vezes necessárias até estar seguro das definições das suas **taxas basais**.

(your-aaps-profile-basal-not-compatible)=
#### Mensagem: "A taxa basal não é compatível com a bomba atual"

Cada bomba tem limites: uma taxa basal mínima e uma máxima que consegue administrar e, em algumas bombas (por exemplo Dana, Accu-Chek Combo, Medtronic e Diaconn G8), taxas basais que só podem mudar à hora certa. O **AAPS** verifica o seu perfil em relação à bomba que usa, **depois** de aplicar a percentagem que escolheu.

Se uma taxa basal estiver fora destes limites, o ecrã **Ativar** mostra esta mensagem e o botão **Ativar** fica cinzento:

![Ecrã Ativar com a mensagem "A taxa basal não é compatível com a bomba atual"](../images/v4/Profiles/profile_activate_pump_incompatible.png)

Por exemplo, com uma taxa basal de 0,10 U/h durante a noite e uma percentagem do perfil de 35 %, o **AAPS** teria de administrar 0,035 U/h. Isto é menos do que uma bomba Dana consegue administrar (0,04 U/h).

Para resolver, pode:

* escolher outra percentagem: uma **mais alta** se uma taxa basal ficar demasiado baixa, uma **mais baixa** se uma taxa basal ficar demasiado alta, ou
* [editar o perfil](#your-aaps-profile-create-and-edit-profiles) e mudar a taxa basal.

O editor de perfis só permite começar taxas basais à hora certa. Uma taxa basal que começa, por exemplo, às 06:30 só pode vir de um perfil mais antigo, por exemplo depois de mudar para uma bomba que não a suporta.

(your-aaps-profile-insulin-sensitivity-factor)=

## Insulin sensitivity factor (ISF)

### Descrição

The insulin sensitivity factor (sometimes called correction factor) is a measure of how much your blood glucose level will be reduced by 1 unit of insulin.

**Em mg/dl:** Se tiver um **FSI** de 40, cada unidade de insulina baixa a sua glicose cerca de 40 mg/dl (por exemplo, a sua glicose desce de 140 mg/dl para 100 mg/dl).

**Em mmol/l:** Se tiver um **FSI** de 1,5, cada unidade de insulina baixa a sua glicose cerca de 1,5 mmol/l (por exemplo, de 8 mmol/l para 6,5 mmol/l).

Por estes exemplos, pode ver que quanto _menor_ for o valor do **FSI**, menos sensível é à insulina. Assim, se baixar o seu FSI de 40 para 35 (mg/dl) ou de 1,5 para 1,3 (mmol/l), diz-se muitas vezes que está a reforçar o seu **FSI**. Pelo contrário, aumentar o valor do **FSI** de 40 para 45 (mg/dl) ou de 1,5 para 1,8 (mmol/l) é enfraquecer o seu **FSI**.

### Impacto

A **lower / stronger ISF** (e.g. 40 instead of 50) means insulin drops your **BG** less per unit. Isto leva a uma correção mais agressiva / mais forte do loop, com **mais insulina**. Se o seu **FSI** for demasiado forte (valor pequeno), pode causar **glicose** baixa.

A **higher / weaker ISF** (e.g. 45 instead of 35) means insulin drops your **BG** more per unit. Isto leva a uma correção menos agressiva / mais fraca do loop, com **menos insulina**. Se o seu **FSI** for demasiado fraco (valor grande), pode causar **glicose** alta.

**Exemplo:**
* A **glicose** está em 190 mg/dl (10,5 mmol/l) e o alvo é 100 mg/dl (5,6 mmol/l).
* Assim, quer uma correção de `190 - 100 = 90 mg/dL` ou `10.5 - 5.6 = 4.9 mmol/L`
* Se `ISF = 30` -> `90 / 30 = 3` ou `ISF = 1.63` -> `4.9 / 1.63 = 3`: 3 unidades de insulina
* Se `ISF = 45` -> `90 / 45 = 2` ou `ISF = 2.45` -> `4.9 / 2.45 = 2`: 2 unidades de insulina

Um **FSI** demasiado baixo (e por isso mais agressivo, o que não é raro) pode causar 'correções em excesso', porque o **AAPS** calcula que o utilizador precisa de mais insulina para corrigir uma **glicose** alta do que a realmente necessária. Isto pode causar valores de glicose em 'montanha-russa' (sobretudo em jejum), como mostra a imagem abaixo. Neste caso, deve aumentar o valor do **FSI** para tornar o **AAPS** menos agressivo. Assim, o **AAPS** dá doses de correção mais pequenas e evita corrigir em excesso uma **glicose** alta, o que levaria a uma **glicose** baixa.

![FSI demasiado baixo](../images/isf.jpg)

Pelo contrário, um **FSI** demasiado alto pode causar correções insuficientes, ou seja, a sua **glicose** fica acima do alvo – o que se nota sobretudo durante a noite.

### Como definir

Veja na **figura abaixo** um exemplo de como os valores do FSI podem ser definidos num perfil do **AAPS**.

![FSI do perfil](../images/Profile_ISF.png)

A basic starting point for determining your daytime ISF is to base it on your total daily dose (TDD) using the 1,700 (94) rule. Há mais detalhes no capítulo 7 do livro [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) de Gary Scheiner.

| 1700 (em mg/dl) ou 94 (em mmol/l) / TID = FSI aproximado.<br/><br/>Exemplo: TID = 40 U<br/>FSI aproximado (mg/dl) = 1700/40 = 43<br/>FSI aproximado (mmol/l) = 94/40 = 2,4 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                                                    |

Se as suas taxas basais estiverem corretas, pode testar isto ao suspender o loop, verificar que a **IA** é zero e tomar algumas pastilhas de glicose para chegar a um nível 'alto' estável.

Depois, tome uma quantidade estimada de insulina (conforme o 1/FSI atual) para chegar à sua glicose alvo.

Tenha cuidado, porque este valor é muitas vezes definido demasiado baixo. Demasiado baixo significa que 1 U vai baixar a glicose mais depressa do que o esperado.

(your-aaps-profile-insulin-to-carbs-ratio)=

## Insulin to Carb ratio (ICR)

### Descrição

O **IHC** indica quantos gramas de hidratos de carbono são cobertos por uma unidade de insulina.

Algumas pessoas usam também a abreviatura **I:C** em vez de **ICR** (no AAPS: IHC), ou falam de rácio de hidratos de carbono (em inglês «carb ratio»): **CR**.

For example, a 1-to-10 (1:10) insulin-to-carb ratio means that you take 1U of insulin for every 10 grams of carbs eaten. A meal of 25g carbs would need 2.5U of insulin.

Se o seu **IHC** for mais fraco (valor mais alto), por exemplo 1:20, só precisa de 0,5 U de insulina para cobrir 10 g de hidratos de carbono. A meal of 25g of carbs would need 25/20 = 1.25U of insulin.

É comum ter **IHC** diferentes a horas diferentes do dia, por causa dos níveis hormonais e da atividade física. Muitas pessoas têm o **IHC** mais baixo/mais forte à hora do pequeno-almoço, porque nessa altura costumam ser mais resistentes à insulina. Assim, por exemplo, o **IHC** de um adulto pode ser 1:8 ao pequeno-almoço, 1:10 ao almoço e 1:10 ao jantar, mas estes padrões não são iguais para todos: algumas pessoas são mais resistentes à insulina ao jantar e precisam de um **IHC** mais forte/mais pequeno nessa altura.

> **NOTA:**
> 
> Em alguns países europeus, usavam-se unidades de pão para determinar quanta insulina é necessária para a comida. No início, 1 unidade de pão era igual a 12 g de hidratos de carbono; mais tarde, alguns passaram para 10 g de hidratos de carbono.
> 
> Neste modelo, a quantidade de hidratos de carbono era fixa e a quantidade de insulina era variável. ("Quanta insulina é necessária para cobrir uma unidade de pão?")
> 
> Com o **IHC**, a quantidade de insulina é fixa e a quantidade de hidratos de carbono é variável. ("Quantos g de hidratos de carbono podem ser cobertos por uma unidade de insulina?")
> 
> Exemplo:
> 
> Fator de unidade de pão (UP = 12 g de hidratos de carbono): 2,4 U/UP -> Precisa de 2,4 unidades de insulina quando come uma unidade de pão.
> 
> **IHC** correspondente: 12 g / 2,4 U = 5,0 g/U -> 5,0 g de hidratos de carbono podem ser cobertos com uma unidade de insulina.
> 
> Fator UP 2,4 U / 12 g   ===>   IHC = 12 g / 2,4 U = 5,0 g/U
> 
> Conversion tables are available online, e.g. [here](https://www.mylife-diabetescare.com/files/media/03_Documents/11_Software/FAS/SOF_FAS_App_KI-Verha%CC%88ltnis_MSTR-DE-AT-CH.pdf).

### Impacto

Um **IHC mais baixo / mais forte** significa menos comida por unidade, ou seja, recebe mais insulina para uma quantidade fixa de hidratos de carbono. Também se pode dizer 'mais agressivo'. Se o seu IHC for demasiado forte, recebe insulina a mais, o que pode causar **glicoses** baixas.

Um **IHC mais alto / mais fraco** = mais comida por unidade, ou seja, recebe menos insulina para uma quantidade fixa de hidratos de carbono. Também se pode dizer 'menos agressivo'. Se o seu IHC for demasiado fraco, recebe menos insulina do que precisa, o que pode causar **glicoses** altas.

### Como definir

A **figura abaixo** mostra um exemplo do **IHC** de um utilizador e de como pode ser definido num **Perfil do AAPS**. Ao introduzir estes valores, introduzimos a parte final do rácio, por isso um rácio insulina/hidratos de carbono de 1:3,5 é introduzido apenas como “3.5”.

![IHC do perfil](../images/Profile_ICR.png)

Se, depois de uma refeição ter sido digerida e a **IA** ter voltado a zero, a sua **glicose** continuar mais alta do que antes de comer, é provável que o seu **IHC** seja demasiado fraco (_ou seja_, o número é demasiado alto e deve ser baixado aos poucos). Pelo contrário, se a sua **glicose** ficar mais baixa do que antes de comer, o **IHC** é demasiado forte (_ou seja_, o número é demasiado pequeno e deve ser aumentado aos poucos).

Se as suas taxas basais estiverem corretas, pode testar ao verificar que a **IA** é zero e que está dentro do intervalo, comer uma quantidade exatamente conhecida de hidratos de carbono e tomar uma quantidade estimada de insulina com base no rácio insulina/hidratos de carbono atual. O melhor é comer a comida que come normalmente a essa hora do dia e contar os hidratos de carbono com precisão.

## Perguntas frequentes sobre o perfil

```{contents} Common questions related to the Profile
:depth: 1
:local: true
```

### About the importance of getting your profile right

**Porque devo tentar acertar as definições do meu perfil? O loop não pode tratar disso sozinho?**

Um loop fechado híbrido _pode_ tentar ajustar a administração de insulina para reduzir o mau controlo glicémico causado por valores errados no **Perfil**. It can do this, for example, by withholding insulin delivery if you are going to hypo. No entanto, pode ter um controlo glicémico muito melhor se as definições do seu **Perfil** já estiverem o mais perto possível do que o seu corpo precisa. Esta é uma das razões pelas quais o **AAPS** usa objetivos por etapas para passar do uso da bomba em loop aberto para o loop fechado híbrido. Além disso, haverá momentos em que precisa de abrir o loop (aquecimento do sensor, falha do sensor _etc._), às vezes a meio da noite, e vai querer ter as definições certas para essas situações.

Se começa a usar o **AAPS** depois de ter usado outro sistema de bomba em loop aberto ou fechado, já terá uma ideia razoável dos valores a usar para as taxas basais (**BR**), os fatores de sensibilidade à insulina (**FSI**) e os rácios insulina/hidratos de carbono (**IHC**).

Se está a passar de injeções (MDI) para o **AAPS**, é boa ideia ler primeiro sobre como fazer a passagem de MDI para bomba, e planear e fazer a mudança com cuidado, em conjunto com a sua equipa de diabetes. Os livros ["Pumping insulin"](https://amzn.eu/d/iaCsFa2) de John Walsh e Ruth Roberts e [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) de Gary Scheiner são muito úteis.

### O que causa picos altos depois das refeições em loop fechado?
Primeiro, verifique a sua taxa basal e faça um teste de taxa basal sem hidratos de carbono. Se estiver correto e a sua **glicose** descer até ao alvo depois de os hidratos de carbono serem totalmente absorvidos, experimente definir no **AAPS** um alvo temporário 'refeição em breve' algum tempo antes da refeição, ou pense com o seu endocrinologista num tempo de pré-bólus adequado. <br/> Se a sua **glicose** estiver demasiado alta depois da refeição e continuar demasiado alta depois de os hidratos de carbono serem totalmente absorvidos, pense com o seu endocrinologista em baixar o seu **IHC**. Se a sua **glicose** estiver demasiado alta enquanto há **HCA** e demasiado baixa depois de os hidratos de carbono serem totalmente absorvidos, pense com o seu endocrinologista em aumentar o seu **IHC** e num tempo de pré-bólus adequado.

### A minha glicose fica alta e o loop não a faz descer
As razões possíveis para o **AAPS** não dar insulina suficiente são:
* O **FSI** não é forte o suficiente
* A taxa basal pode não ser forte o suficiente
* Uma definição de segurança pode estar a atuar, como a **maxIOB**. Ou o **SMB** está desativado neste momento, conforme as suas definições.
* Uma automatização foi configurada e está a sobrepor-se ao **AAPS**.

Veja também [Ajustar o perfil do AAPS](../GettingHelp/ProfileTuning.md).

### Tenho IA negativa, isto é um problema?
**IA** negativa significa que a quantidade absoluta de insulina (basal + bólus) no seu corpo é menor do que a basal. Isto faz com que o **AAPS** envie mais insulina assim que a **glicose** começa a subir, porque considera que falta insulina, o que pode causar **glicose** baixa mais tarde.

Eis algumas razões para ter IA negativa e o que fazer:
* uma basal demasiado forte: ajuste o seu **Perfil**
* demasiado bólus na refeição anterior: ajuste o seu **Perfil** ou verifique se está a dar o bólus na altura certa.
* DAI demasiado curta no seu tipo de insulina, o que leva à acumulação de insulina: ajuste-a em [Gerir → Definições de insulina](#Config-Builder-insulin-dia)
* atividade física: da próxima vez, pense em usar uma [Percentagem do Perfil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) mais baixa durante a atividade, para ter em conta a maior sensibilidade.

## Gerir os seus perfis

```{contents} Operations that you can perform on your **Profiles** in **AAPS**
:depth: 1
:local: true
```
(your-aaps-profile-create-and-edit-profiles)=
### Criar e editar perfis

No **AAPS** v4, os seus perfis estão no ecrã **Gerir** (navegação inferior) → **Perfil**, mostrados como um carrossel de cartões que se deslizam, com uma barra de ações (**➕ Adicionar**, **✏️ Editar**, **⧉ Clonar**, **🗑️ Eliminar**, **▶ Ativar**). Para gerir e ativar um perfil, veja [Gerir e ativar perfis](#ProfileSwitch-manage-v4). Vem do **AAPS** v3, onde os perfis tinham o seu próprio separador? Veja [O que mudou no AAPS v4](#v4changes-manage).

Tocar em **✏️ Editar** abre o editor. Defina o **nome** e as **unidades** do perfil e depois preencha os quatro horários nos separadores:

- **IHC** — rácio insulina/hidratos de carbono (g/U)
- **FSI** — fator de sensibilidade à insulina
- **BAS** — taxas basais
- **ALV** — intervalo alvo

![O editor de perfis — separadores IHC / FSI / BAS / ALV](../images/setup-wizard/Wizard-Profile-IC.png)

Cada horário é uma lista de **blocos de tempo**: adicione um bloco, defina a hora de início e o valor e depois toque em **Guardar**.

Se fizer alterações ao seu **Perfil**, verifique se está a editar o **Perfil** certo: o cartão do perfil em uso tem a marca **ATIVO**, mas o cartão selecionado no ecrã pode ser outro.

(your-aaps-profile-profile-from-scratch-for-a-kid)=
### Criar um perfil do zero para uma criança

O [Assistente de Perfil](#aaps-screens-profile-helper) (menu ☰ → **Assistente de Perfil**) pode ajudar a criar um perfil para uma criança (até aos 18 anos).

**Nota importante:**

**O Assistente de Perfil serve para o ajudar a encontrar o perfil inicial para a sua criança. Embora se baseie em dados de dois hospitais diferentes, fale sempre com a sua equipa médica antes de usar um novo perfil!**

O Assistente de Perfil oferece dados de dois hospitais diferentes para crianças, para encontrar um perfil inicial para a sua criança até aos 18 anos.

![Assistente de Perfil para crianças 1](../images/ProfileHelperKids1.png)

1. Verifique se está no separador **Perfil 1**.
2. Em **Tipo de Perfil**, verifique se tem "Perfil Padrão" selecionado.
3. Ajuste o Perfil Padrão (baseado nos dados de um hospital) ao introduzir a idade da criança e o TID Total **ou** o peso.
4. Mude para o separador **Perfil 2**.
5. Toque em **Tipo de Perfil** e selecione "Perfil Padrão DPV".
6. Ajuste o Perfil Padrão DPV (baseado nos dados de outro hospital) ao introduzir a idade da criança, o TID Total e a percentagem de basal. Note que os dados DPV só fornecem **taxas basais**, por isso o IHC e o FSI aparecem como zero neste perfil.
7. Open the **Comparison** tab. Vai aparecer a comparação dos dois perfis ajustados (veja a captura de ecrã abaixo).
8. Se quiser começar a ajustar o seu perfil com base numa destas sugestões, use o botão **Clonar** na parte de baixo da comparação.

![Assistente de Perfil para crianças 2](../images/ProfileHelperKids2.png)

### Trocar de perfil

Veja [Troca de Perfil e Percentagem do Perfil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md).

(your-aaps-profile-clone-profile-switch)=
### Clonar uma Troca de Perfil para um novo perfil

![Troca de Perfil](../images/TreatmentsView4.png)

O [Histórico de tratamentos](#aaps-screens-treatments) mostra todas as **Trocas de Perfil** passadas. No separador **Troca de Perfil**, pode usar uma **Troca de Perfil** passada como base para criar um novo **Perfil**. Neste caso, o deslocamento temporal e a percentagem são aplicados ao novo perfil local. Use o botão **Clonar** mostrado na linha **2**.

Pode agora ir ao [ecrã Perfil](#your-aaps-profile-create-and-edit-profiles) (**Gerir → Perfil**) para editar o perfil acabado de criar.

(YourAapsProfile_Profile-backup)=
### Cópia de segurança do perfil

Como são uma definição central do seu sistema de loop, os seus **Perfis** são muito importantes e algo que não quer mesmo perder.

* Os seus **Perfis** são guardados na base de dados do **AAPS**.
* Quando o **NSClientV3** está configurado (veja [Sincronização](#SetupWizard-synchronization-with-the-reporting-server-and-more)), os seus **Perfis** também são enviados automaticamente para o Nightscout.
* Também fazem parte das [definições exportadas](../Maintenance/ExportImportSettings.md). Por isso, guarde uma cópia de segurança num lugar seguro.

### Editar perfis a partir do Nightscout

Se ativado, as alterações ao **Perfil** feitas diretamente no Nightscout podem ser recebidas no **AAPS**. A definição chama-se "**Receber o conjunto de perfis do NS**" e faz parte das opções de **Aceitação de dados do Nightscout** (aceitar dados do Nightscout está desligado por defeito, veja o [passo Controlo pelo cliente do Assistente de Configuração](../SettingUpAaps/SetupWizard.md)); pode encontrá-la depressa com a **barra de pesquisa** no ecrã principal. Enquanto o controlo pelo cliente estiver ligado, a definição fica oculta e o **AAPS** não aceita alterações de perfil do Nightscout ([modo reforçado](#client-master-control-hardened-mode)); em vez disso, edite o perfil num cliente emparelhado, ou carregue-o uma vez com a **Sincronização completa**.

Isto pode ser útil antes de fazer grandes alterações num **Perfil** mais extenso. Podem ser introduzidos mais facilmente através da interface web, _por exemplo_ para copiar dados à mão a partir de uma folha de cálculo.

Mas, para isso, é importante clonar todo o **registo da base de dados**, que contém vários perfis, no editor do Nightscout (seta azul na captura de ecrã abaixo). Os novos registos da base de dados ficam então com a data atual. Depois de guardar, o **Perfil** alterado/novo pode ser ativado no **AAPS** com uma [Troca de Perfil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) normal.

![Clonar registos da base de dados](../images/Nightscout_Profile_Editor.PNG)

(your-aaps-profile-compare-profiles)=
### Comparar dois perfis

Também pode usar o [Assistente de Perfil](#aaps-screens-profile-helper) (menu ☰ → **Assistente de Perfil**) para comparar dois perfis diferentes ou trocas de perfil (percentagem de um dos seus perfis usada antes numa [troca de perfil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)).

![Assistente de Perfil 1](../images/ProfileHelper1.png)

1. Verifique se está no separador **Perfil 1**.
2. Em **Tipo de Perfil**, selecione "Perfil Disponível" para escolher entre todos os **Perfis** guardados.
3. Escolha o **Perfil** a partir do qual quer comparar.
4. Mude para o separador **Perfil 2**.
5. Em **Tipo de Perfil**, selecione "Troca de Perfil" para escolher no histórico de todas as suas **Trocas de Perfil**.
6. Escolha a **Troca de Perfil** com a qual quer comparar.
7. Open the **Comparison** tab. Vai aparecer a comparação dos dois perfis (veja a captura de ecrã abaixo).

![Assistente de Perfil 2](../images/ProfileHelper2.png)
