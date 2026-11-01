# Visão geral dos componentes

O **AAPS** não é só um aplicativo (que você mesmo compila); ele é um de vários módulos do seu sistema de loop fechado. Antes de escolher os componentes, é uma boa ideia ler a documentação dos componentes.

![Visão geral dos componentes](../images/modules.png)

```{admonition} IMPORTANT SAFETY NOTICE
:class: important

A base dos recursos de segurança do **AAPS** discutidos nesta documentação são os recursos de segurança do hardware usado para montar o seu sistema. Para fechar um loop de dosagem automática de insulina, é extremamente importante usar somente uma bomba de insulina e um CGM testados, que funcionam totalmente e são aprovados pelos órgãos oficiais do seu país. Modificações de hardware ou de software nesses componentes podem causar doses de insulina inesperadas e um risco grave para o usuário. Se você encontrar ou receber oferta de bombas de insulina ou receptores de CGM quebrados, modificados ou feitos em casa, **não use** esses aparelhos para criar um sistema **AAPS**.

Além disso, é igualmente importante usar somente materiais originais, como aplicadores, cânulas e reservatórios de insulina aprovados pelo fabricante para uso com a sua bomba ou o seu CGM. Usar materiais não testados ou modificados pode causar leituras erradas do CGM e erros na dose de insulina. A insulina é muito perigosa quando a dose está errada - por favor, não brinque com a sua vida modificando os seus materiais.

Por último, mas não menos importante, você não deve tomar inibidores de SGLT-2 (gliflozinas), porque eles baixam o nível de glicose no sangue de forma imprevisível. A combinação com um sistema que reduz as taxas basais para aumentar a glicose é especialmente perigosa, porque, por causa da gliflozina, essa subida da glicose pode não acontecer, e pode surgir um estado perigoso de falta de insulina. [Mais informações aqui](#PreparingForAaps-no-sglt-2-inhibitors).
```

## Módulos necessários

### Um bom algoritmo de dosagem individual para o seu tratamento do diabetes

Mesmo não sendo algo para criar ou comprar, este é provavelmente o 'módulo' mais subestimado — mas ele é essencial. Quando você deixa um algoritmo ajudar a tratar o seu diabetes, ele precisa saber as configurações certas para não cometer erros graves. Mesmo que ainda faltem outros módulos, você já pode verificar e ajustar o seu **Perfil** junto com a sua equipe de diabetes.

O **Perfil** inclui:

- BR (taxas basais): fornece a insulina de fundo;
- ISF (fator de sensibilidade à insulina): quanto o seu nível de glicose no sangue vai baixar com 1 unidade de insulina;
- CR (relação de carboidratos): quantos gramas de carboidrato são cobertos por uma unidade de insulina.

A maioria dos loopers usa BR, ISF e CR circadianos, que se adaptam à sensibilidade hormonal à insulina durante o dia.

Além do seu **Perfil**, você também precisa configurar a sua **insulina** em **Gerenciar → Configurações de insulina**, incluindo a DIA (duração da ação da insulina) — veja [Configurações de insulina](#Config-Builder-insulin-dia).

Mais informações sobre o seu **Perfil** [na página dedicada](../SettingUpAaps/YourAapsProfile.md).

### Telefone

Veja a página dedicada [Telefones](../Getting-Started/Phones.md).

### Bomba de insulina

Veja a página dedicada [Bombas compatíveis](../Getting-Started/CompatiblePumps.md).

**Vantagens e desvantagens de alguns modelos de bomba**

A Combo, a Insight e as Medtronic mais antigas são bombas robustas e compatíveis com loop. A Combo tem a vantagem de oferecer muito mais tipos de conjuntos de infusão para escolher, porque ela tem um conector Luer-Lock padrão. E a pilha é um modelo padrão que você pode comprar em qualquer posto de gasolina ou loja de conveniência 24 horas e, se você realmente precisar de uma, pode roubar/pegar emprestada a do controle remoto no quarto do hotel ;-).

Mas as vantagens da DanaR/RS e da Dana-i em comparação com a Combo como bomba de escolha são:

- O pareamento inicial é mais simples com a Dana-i/RS. Mas normalmente você faz isso só uma vez, então isso só importa se você quiser testar um novo recurso com bombas diferentes.
- Até agora, a Combo funciona lendo a tela da bomba (screen parsing). Em geral isso funciona muito bem, mas é lento. Para o loop, isso não importa muito, porque tudo funciona em segundo plano. Mesmo assim, você precisa ficar conectado por muito mais tempo, então há mais tempo em que a conexão BT pode cair. Isso não é tão fácil se você se afastar do seu telefone enquanto faz um bólus & cozinha.
- A Combo vibra no fim das TBRs, a DanaR vibra (ou apita) com SMB. À noite, é provável que você use mais TBRs do que SMB.  A Dana-i/RS pode ser configurada para não apitar nem vibrar.
- Ler o histórico da Dana-i/RS com carboidratos em poucos segundos permite trocar de telefone com facilidade mesmo offline e continuar o loop assim que chegarem alguns valores do CGM.
- Todas as bombas com as quais o **AAPS** pode se comunicar são à prova d'água na entrega. Somente as bombas Dana também são "à prova d'água com garantia", por causa do compartimento da bateria vedado e do sistema de enchimento do reservatório.

### Fonte de BG

Veja a página dedicada [CGMs compatíveis](../Getting-Started/CompatiblesCgms.md).

### Arquivo .apk do **AAPS**

O componente principal do sistema. Para instalar o app, primeiro você precisa compilar o arquivo apk você mesmo. As instruções estão [aqui](../SettingUpAaps/BuildingAaps.md).

### Servidor de relatórios

Um servidor de relatórios mostra os seus dados de glicose e de tratamentos e cria relatórios para uma análise detalhada. No momento, há dois servidores de relatórios disponíveis para uso com o AAPS: [Nightscout](#SettingUpTheReportingServer-nightscout) e [Tidepool](#SettingUpTheReportingServer-tidepool). Os dois oferecem formas de visualizar os seus dados de diabetes ao longo do tempo e mostram estatísticas sobre o **tempo na faixa-alvo** (TIR) e outras medidas.

O servidor de relatórios é independente dos outros módulos. Se você não quiser usar um servidor de relatórios, saiba que ele não é obrigatório para usar o **AAPS** a longo prazo. Mas você ainda precisa configurar um, porque ele é necessário para cumprir o [**Objetivo 1**](#objectives-objective1).

Mais informações sobre como configurar o seu servidor de relatórios estão [aqui](../SettingUpAaps/SettingUpTheReportingServer.md).

## Módulos opcionais

### Smartwatch

Você pode escolher qualquer smartwatch com **Wear OS 3** ou mais recente. Veja [Smartwatches e o AAPS](../Getting-Started/Watches.md) para mais detalhes.

Os usuários estão criando uma [lista de telefones e relógios testados](#Phones-list-of-tested-phones). Há diferentes mostradores para uso com o **AAPS**, que você encontra [aqui](../WearOS/WearOsSmartwatch.md).

### xDrip

Mesmo que você não precise do app xDrip como sua **Fonte de BG**, você ainda pode usá-lo, por exemplo, para alarmes ou para outra forma de mostrar a glicose. Você pode ter quantos alarmes quiser, definir o horário em que um alarme deve estar ativo, escolher se ele pode ignorar o modo silencioso etc. Algumas informações sobre o xDrip estão [aqui](../CompatibleCgms/xDrip.md). Saiba que a documentação desse app nem sempre está atualizada, porque ele muda rapidamente.

## O que fazer enquanto espera pelos módulos

Às vezes leva um tempo para conseguir todos os módulos para fechar o loop. Mas não se preocupe, há muitas coisas que você pode fazer enquanto espera. É **necessário** verificar e (quando for preciso) ajustar as taxas basais (BR), a relação insulina-carboidratos (IC), os fatores de sensibilidade à insulina (ISF) etc. E talvez o loop aberto seja uma boa forma de testar o sistema e se familiarizar com o **AAPS**. Nesse modo, o **AAPS** dá recomendações de tratamento que você pode executar manualmente.

Você pode continuar lendo a documentação aqui, entrar em contato com outros loopers online ou offline, [ler](../UsefulLinks/BackgroundReading.md) documentação ou o que outros loopers escrevem (mas tenha cuidado: nem tudo está correto ou é bom para você repetir).

**Pronto?** Se você já tem todos os componentes do **AAPS** (parabéns!) ou pelo menos o suficiente para começar no modo loop aberto, primeiro leia a [descrição dos Objetivos](../SettingUpAaps/CompletingTheObjectives.md) antes de cada novo Objetivo e configure o seu hardware.
