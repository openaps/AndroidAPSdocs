# Visão geral dos componentes

O **AAPS** não é apenas uma aplicação (compilada por si); é um de vários módulos do seu sistema de loop fechado. Antes de escolher os componentes, é boa ideia ler a documentação dos componentes.

![Visão geral dos componentes](../images/modules.png)

```{admonition} IMPORTANT SAFETY NOTICE
:class: important

A base das funcionalidades de segurança do **AAPS** descritas nesta documentação assenta nas funcionalidades de segurança do hardware usado para montar o seu sistema. Para fechar um loop automático de administração de insulina, é muito importante usar apenas uma bomba de insulina e um CGM testados, a funcionar bem e aprovados pelas autoridades oficiais do seu país. Modificações de hardware ou de software nestes componentes podem causar doses de insulina inesperadas, com um risco significativo para o utilizador. Se encontrar ou lhe oferecerem bombas de insulina ou recetores de CGM avariados, modificados ou feitos em casa, **não os use** para criar um sistema **AAPS**.

Além disso, é igualmente importante usar apenas acessórios originais, como insersores, cânulas e reservatórios de insulina aprovados pelo fabricante para uso com a sua bomba ou o seu CGM. O uso de acessórios não testados ou modificados pode causar valores imprecisos do CGM e erros na dose de insulina. A insulina é muito perigosa quando a dose está errada - por favor, não brinque com a sua vida ao modificar os seus acessórios.

Por fim, mas não menos importante, não pode tomar inibidores SGLT-2 (gliflozinas), porque baixam a glicose no sangue de forma imprevisível. A combinação com um sistema que reduz as taxas basais para fazer subir a glicose é especialmente perigosa, porque, devido às gliflozinas, essa subida da glicose pode não acontecer e pode surgir um estado perigoso de falta de insulina. [Mais informações aqui](#PreparingForAaps-no-sglt-2-inhibitors).
```

## Módulos Necessários

### Um bom algoritmo de dosagem individual para a sua terapia da diabetes

Embora não seja algo para criar ou comprar, é provavelmente o «módulo» mais subestimado — mas é essencial. Quando deixa um algoritmo ajudar a gerir a sua diabetes, ele precisa de conhecer as definições certas para não cometer erros graves. Mesmo que ainda lhe faltem outros módulos, já pode verificar e ajustar o seu **Perfil** em conjunto com a sua equipa de diabetes.

O **Perfil** inclui:

- BR (taxas basais): fornecem a insulina de fundo;
- FSI (fator de sensibilidade à insulina): quanto o seu nível de glicose no sangue desce com 1 unidade de insulina;
- IHC (rácio de hidratos de carbono): quantos gramas de hidratos de carbono são cobertos por uma unidade de insulina.

A maioria dos loopers usa taxas basais (BR), FSI e IHC circadianos, que se adaptam à sensibilidade hormonal à insulina ao longo do dia.

Além do seu **Perfil**, também precisa de configurar a sua **insulina** em **Gerir → Definições de insulina**, incluindo a sua DAI (duração da ação da insulina) — veja [Definições de insulina](#Config-Builder-insulin-dia).

Mais informações sobre o seu **Perfil** [na página dedicada](../SettingUpAaps/YourAapsProfile.md).

### Telefone

Veja a página dedicada [Telefones](../Getting-Started/Phones.md).

### Bomba de Insulina

Veja a página dedicada [Bombas compatíveis](../Getting-Started/CompatiblePumps.md).

**Vantagens e desvantagens de alguns modelos de bombas**

A Combo, a Insight e as Medtronic mais antigas são bombas sólidas e podem ser usadas em loop. A Combo tem a vantagem de permitir escolher entre muitos mais tipos de conjuntos de infusão, porque tem um Luer-Lock padrão. E a pilha é uma pilha comum que pode comprar em qualquer bomba de gasolina ou loja aberta 24 horas e, se precisar mesmo, pode roubá-la/pedi-la emprestada ao comando da televisão no quarto do hotel ;-).

No entanto, as vantagens da DanaR/RS e da Dana-i em relação à Combo como bomba de escolha são:

- O emparelhamento inicial é mais simples com a Dana-i/RS. Mas normalmente só o faz uma vez, por isso só tem impacto se quiser testar uma nova funcionalidade com bombas diferentes.
- Até agora, a Combo funciona através da leitura do ecrã. Em geral, funciona muito bem, mas é lento. Para o loop, isto não importa muito, porque tudo funciona em segundo plano. Mesmo assim, precisa de estar ligado durante muito mais tempo, por isso há mais tempo em que a ligação BT pode falhar, o que não é tão simples se se afastar do telefone enquanto dá um bólus e cozinha.
- A Combo vibra no fim das basais temporárias, a DanaR vibra (ou apita) nos SMB. Durante a noite, é provável que use mais as basais temporárias do que os SMB.  A Dana-i/RS pode ser configurada para não apitar nem vibrar.
- Ler o histórico da Dana-i/RS em poucos segundos, com os hidratos de carbono, permite trocar de telefone facilmente sem ligação à internet e continuar o loop assim que chegarem alguns valores do CGM.
- Todas as bombas com que o **AAPS** consegue comunicar são à prova de água quando são entregues. Só as bombas Dana são também «à prova de água com garantia», graças ao compartimento da pilha e ao sistema de enchimento do reservatório selados.

### Fonte da Glicose

Veja a página dedicada [CGM compatíveis](../Getting-Started/CompatiblesCgms.md).

### Ficheiro .apk do **AAPS**

O componente principal do sistema. Para instalar a aplicação, primeiro tem de compilar o ficheiro apk. As instruções estão [aqui](../SettingUpAaps/BuildingAaps.md).

### Servidor de relatórios

Um servidor de relatórios mostra os seus dados de glicose e de tratamentos e cria relatórios para uma análise detalhada. Neste momento, há dois servidores de relatórios disponíveis para usar com o AAPS: [Nightscout](#SettingUpTheReportingServer-nightscout) e [Tidepool](#SettingUpTheReportingServer-tidepool). Ambos permitem visualizar os seus dados da diabetes ao longo do tempo e dão estatísticas sobre o **tempo no alvo** (TIR) e outras medidas.

O servidor de relatórios é independente dos outros módulos. Se não quiser usar um servidor de relatórios, saiba que não é obrigatório para usar o **AAPS** a longo prazo. Mas mesmo assim tem de configurar um, porque é necessário para cumprir o [**Objetivo 1**](#objectives-objective1).

Pode encontrar mais informações sobre como configurar o seu servidor de relatórios [aqui](../SettingUpAaps/SettingUpTheReportingServer.md).

## Módulos Opcionais

### Smartwatch

Pode escolher qualquer smartwatch com **Wear OS 3** ou mais recente. Veja [Smartwatches e o AAPS](../Getting-Started/Watches.md) para mais detalhes.

Os utilizadores estão a criar uma [lista de telefones e relógios testados](#Phones-list-of-tested-phones). Há várias watchfaces para usar com o **AAPS**, que pode encontrar [aqui](../WearOS/WearOsSmartwatch.md).

### xDrip

Mesmo que não precise da aplicação xDrip como **Fonte da Glicose**, pode usá-la na mesma, por exemplo para alarmes ou para outra forma de ver a glicose. Pode ter tantos alarmes quantos quiser, definir a hora em que cada alarme deve estar ativo, escolher se pode ignorar o modo silencioso, etc. Pode encontrar algumas informações sobre o xDrip [aqui](../CompatibleCgms/xDrip.md). Tenha em atenção que a documentação desta aplicação nem sempre está atualizada, porque a aplicação muda depressa.

## O que fazer enquanto espera pelos módulos

Às vezes, demora algum tempo até ter todos os módulos para fechar o loop. Mas não se preocupe, há muitas coisas que pode fazer enquanto espera. É **necessário** verificar e (quando for preciso) ajustar as taxas basais (BR), o rácio insulina-hidratos (IHC), os fatores de sensibilidade à insulina (FSI), etc. E talvez o loop aberto seja uma boa forma de testar o sistema e de se familiarizar com o **AAPS**. Neste modo, o **AAPS** dá recomendações de tratamento que pode executar manualmente.

Pode continuar a ler a documentação aqui, falar com outros loopers online ou pessoalmente, [ler](../UsefulLinks/BackgroundReading.md) documentação ou o que outros loopers escrevem (mas tenha cuidado: nem tudo está correto ou é bom para si reproduzir).

**Terminou?** Se já tem todos os componentes do **AAPS** (parabéns!) ou pelo menos os suficientes para começar em modo de loop aberto, deve primeiro ler a [descrição dos Objetivos](../SettingUpAaps/CompletingTheObjectives.md) antes de cada novo Objetivo e configurar o seu hardware.
