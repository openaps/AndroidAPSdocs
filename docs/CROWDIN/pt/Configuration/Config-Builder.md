# Configurador

Dependendo de suas configurações pode-se abrir o Configurador através de um separador na parte superior do ecrã ou através do menu hambúrguer.

![Open config builder](../images/ConfBuild_Open.png)

O Configurador (Conf) é o separador onde ativa e desativa os módulos de configurações. As caixas do lado esquerdo (A) permitem selecionar qual usar, as caixas do lado direito (C) permitem que as veja como um separador (E) no AndroidAPS. Caso a caixa direita não esteja ativada, pode chegar à função utilizando o menu hamburger (D) no topo esquerdo do ecrã.

Onde existem configurações adicionais disponíveis dentro do módulo, pode clicar na roda dentada (B) que o levará para as configurações específicas dentro das preferências.

**Primeira configuração:** Desde AAPS 2.0 um assistente de instalação guia através do processo de configuração do AndroidAPS. Carregue no menu de 3 pontos no lado superior direito do ecrã (F) e selecione 'Assistente de instalação' para usá-lo.

![Config Builder boxes and cog wheel](../images/ConfBuild_ConfigBuilder.png)

## Separador ou menu Hambúrguer

Com a caixa de seleção sob o símbolo de olho, você pode decidir como abrir a seção de programa correspondente.

![Separador ou menu Hambúrguer](../images/ConfBuild_TabOrHH.png)

## Perfil

Selecione o perfil basal que prefere usar. Ver a página [Perfis](../Usage/Profiles.md) para mais informações de configuração.

### Perfil local (recomendado)

O perfil local usa o perfil basal inserido manualmente no telefone. Assim que é selecionado, aparece um novo separador em AAPS, onde é possivel alterar os dados do perfil lidos da bomba se necessário. Com o próximo interruptor de perfil eles são então escritos na bomba em perfil 1. Este perfil é recomendado pois não depende de ligação à internet.

Vantagens:

* nenhuma conexão de internet necessária para alterar configurações de perfil
* mudanças de perfil podem ser feitas diretamente no telefone

Desvantagens:

* apenas um perfil

### Perfil NS

Perfil NS usa os perfis que guardou na sua página NightScout (https://[yournightscoutsiteaddress]/profile). Pode usar o [Profile Switch](../Usage/Profiles.md) para mudar qual desses perfis está ativo, este grava o perfil para a bomba em caso de falha de AndroidAPS. Isso permite facilmente criar vários perfis no Nightscout (i.e.. trabalho, casa, desportos, férias, etc.). Logo após clicar em "Save" serão transferidos para AAPS se seu smartphone estiver online. Mesmo sem uma ligação à Internet ou sem uma ligação de Nightscout, os perfis de Nightscout estão disponíveis na AAPS uma vez que tenham sido sincronizados.

Fazer um **interruptor de perfil** para ativar um perfil de Nightscout. Pressione e segure o perfil atual na ecrã principal AAPS no topo (campo cinzento entre o campo de "Open/Closed Loop" azul claro e o campo da área alvo azul escuro) > Alterar perfil > Selecionar perfil > OK. AAPS também escreve o perfil selecionado a bomba após a mudança de perfil, para que ele esteja disponível sem AAPS numa emergência e continue a ser executado.

Vantagens:

* múltiplos perfis
* fácil editar via PC ou tablet

Desvantagens:

* nenhuma alteração local para configurações de perfil
* perfil não pode ser alterado diretamente no telefone

### Perfil simples

Perfil simples apenas com um bloco de tempo para DIA, IC, ISF, taxa basal e intervalo alvo (ou seja, sem mudanças na taxa basal durante o dia). Provavelmente mais usado para eveitos de teste a menos que tenha os mesmos fatores ao longo de 24 horas. Uma vez selecionado "Perfil Simples", aparecerá um novo separador em AAPS onde é possível inserir os dados do perfil.

## Insulina

Selecione o tipo de curva de insulina que está a utilizar. As opções 'Oref Ação-Rápida','Oref Ultra-Rápida' e 'Oref Pico-Livre' têm todas uma forma exponencial. É listada mais informação no [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves), as curvas irão variar com base no DIA e a hora de pico.

A Duração de Ação da Insulina (DIA) varia de pessoa para pessoa. É por isso que você tem que experimentar e descobrir o seu. Mas deve ser sempre pelo menos 5 horas. Pode ler mais sobre isto na seção Perfil de Insulina de [esta página ](../Getting-Started/Screenshots#insulin-profile).

Para ação rápida e ultra-rápida, o DIA é a única variável que pode ajustar por si mesmo, a hora de pico é fixa. O Pico Livre permite que ajustar tanto o DIA como o tempo para pico, e deve ser usado apenas por utilizadores avançados que conhecem os efeitos destas configurações.

O gráfico da [curva de insulina](../Getting-Started/Screenshots#insulin-profile) ajuda a entender as diferentes curvas. Pode vê-lo ativando a caixa de seleção para mostrá-la como um separador, caso contrário estará no menu hamburger.

### Oref Acção Rápida

* recomendado para Humalog, Novolog e Novorapid
* DIA = pelo menos 5.0h
* Máx. pico = 75 minutos após a injeção (fixo, não ajustável)

### Oref Ultra-Rápida

* recomendado para FIASP
* DIA = pelo menos 5.0h
* Máx. pico = 55 minutos após a injeção (fixo, não ajustável)

Para muitas pessoas não há já praticamente nenhum efeito visível do FIASP após 3-4 horas, mesmo que estejam disponíveis 0.0xx unidades como regra então. Este valor residual ainda pode ser visível durante o desporto, por exemplo. Por isso o AndroidAPS usa um DIA mínimo de 5h.

![Config Builder Ultra-Rapid Oref](../images/ConfBuild_UltraRapidOref.png)

### Oref Pico-Livre

Com o perfil "Pico Livre 0ref" pode digitar-se individualmente o tempo do pico. O DIA é definido automaticamente para 5 horas se estiver especificado mais alto no perfil.

Este perfil de efeito é recomendado se é utilizada uma insulina não instalada ou uma mistura de diferentes insulinas.

## Fonte de Glic.

Selecione a fonte de glicose de sangue que utiliza - ver [Fonte de BG](BG-Source.rst) para mais informações de configuração.

* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* Glic NSCliente
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de) - apenas a versão 4.15.57 ou mais recente são suportados
* [App Dexcom (corrigida)](https://github.com/dexcomapp/dexcomapp/) - Selecione 'Enviar dados BG para xDrip+' se quiser usar alarmes xDrip+.
    
    ![Config Builder BG source](../images/ConfBuild_BGSource.png)

* [Poctech](http://www.poctechcorp.com/en/contents/268/5682.html)

## Bomba

Selecione a bomba que está a utilizar.

* [Dana R](DanaR-Insulin-Pump.md)
* DanaR Coreana (para bombas domésticas DanaR)
* Dana Rv2 (Bomba de DanaR com upgrade de firmware)
* [Dana RS](DanaRS-Insulin-Pump.md)
* [Bomba Accu Chek Combo](Accu-Chek-Combo-Pump.md) (requer instalação de ruffy)
* MDI (recebe sugestões AAPS para a terapia de múltiplas injecções diárias)
* Bomba Virtual (loop aberto para uma bomba que nao tenha ainda nenhum driver - apenas sugestões AAPS)

Usar **Configurações avançadas** para ativar o BT watchdog se necessário. Este Desliga o bluetooth por um segundo caso não seja possível uma ligação à bomba. Isto pode ajudar em alguns telefones onde a pilha bluetooth congela.

## Detecção de Sensibilidade

Selecione o tipo de deteção de sensibilidade. Os dados históricos serão analisados frequentemente e serão feitos ajustes se reconhecer se está mais sensível (ou inversamente, mais resistente) à insulina do que o habitual. Detalhes sobre o algoritmo de Oref0 de sensibilidade podem ser lido em [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode).

Pode ver a sua sensibilidade no ecrã inicial selecionando SEN e observando a linha branca. Atenção, precisa estar no [Objective 8](../Usage/Objectives#objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens) para poder usar a Detecção de Sensibilidade/Autosens.

### Configurações de absorção

Se utilizar o Oref1 com SMB, deverá alterar **min_5m_carbimpact** para 8. O valor só é usado durante lacunas nas leituras da CGM ou quando a atividade física "usa" todo o aumento de glicose no sangue que, de outra forma faria com que o AAPS decaísse as COB. Nos momentos em que a absorção dos carbs não pode funcionar dinamicamente com base nas medições de BG o AAPS insere um decaimento padrão dos carbs. Basicamente, é uma proteção de falhas.

## APS

Selecione o algoritmo APS desejado para ajustes de terapia. Você pode exibir o active os detalhes do algoritmo escolhido no OpenAPS(OAPS) tab.

* OpenAPS MA (assistência à refeição - algoritmo de 2016)
* OpenAPS AMA (Assistente Avançado de Refeição - algoritmo de 2017)   
    Mais detalhes sobre o OpenAPS AMA podem ser encontrados em [ OpenAPS docs ](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). Basicamente, os benefícios são depois de dar o bolus referente à refeição. O sistema pode dar temporais mais elevadas mais rapidamente SE os hidratos (carbs) forem corretamente indicados. 0/> Atenção que é necessário estar em [Objective 9](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama) para poder usar o OpenAPS AMA.
* [OpenAPS SMB](../Usage/Open-APS-features.md) (Super Micro Bolus, o algoritmo mais recente para usuários experientes)  
    Atenção que é necessário estar no [Objetivo 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) para usar OpenAPS SMB e min_5m_carbimpact deve ser definido para 8 no Configurador > Sensibilidade de detecção > Configurações Sensibilidade Oref1.

## Loop

Defina se deseja permitir controlos automáticos do AAPS ou não.

### Open Loop

O AAPS avalia continuamente todos os dados disponíveis (IOB, COB, BG ...) e se necessário faz sugestões de tratamento sobre como ajustar a sua terapia. As sugestões não serão executadas automaticamente (como em closed loop), têm que ser introduzidas manualmente na bomba ou usando um botão no caso de estar a usar uma bomba compatível (Dana R/RS ou Accu Chek Combo). Esta opção é para conhecer como funciona o AndroidAPS ou se está a usar uma bomba não suportada.

### Closed Loop

O AAPS avalia continuamente todos os dados disponíveis (IOB, COB, BG...) e, se necessário, ajusta automaticamente o tratamento (ou seja, sem intervenção por si) para alcançar o intervalo ou valor alvo definido (bóus, taxa basal temporária, corte da insulina para evitar hipo etc.). O Loop funciona dentro de inúmeros limites de segurança, que podem ser configurados individualmente. O Loop Fechado só é possível se estiver no [ Objective 6 ](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend) ou superior e use uma bomba suportada.

## Objectivos (programa de aprendizagem)

AndroidAPS tem um conjunto de objectivos que você tem que cumprir passo a passo. Isto deve guiá-lo com segurança, criando um sistema de loop fechado. Assim é garantido que se tenha configurado tudo de forma correcta e que se compreende exactamente o que o sistema faz. É a maneira de poder confiar no sistema.

Deve [exportar suas configurações](../Usage/ExportImportSettings.rst) (incluindo o progresso dos objetivos) regularmente. Caso tenha que substituir seu smartphone depois (novo Telemovel, danos no ecrã, etc.) pode-se simplesmente importar essas configurações (convém também manter uma copia fora do telemóvel).

Consulte a pagina [Objetivos](../Usage/Objectives.rst) para mais informações.

## Tratamentos

Se procurar o separador dos Tratamentos, poderá ver os tratamentos que foram enviados para nightscout. Caso deseje editar ou apagar uma entrada (por exemplo, caso tenha comido menos hidratos do que esperava) e então selecione 'Remover' e digite o novo valor (mude o hora se necessário) através do separador Careportal (CP).

## Geral

### Visão Geral

Exibe o estado atual do seu loop e botões para a maioria das ações mais comuns (ver seção [ Ecrã Inicial ](../Getting-Started/Screenshots.md) para mais detalhes). Chega-se às configurações clicando no ícone de engrenagem.

#### Manter ecrã ligado

Opção 'Manter ecrã ligado' irá forçar o Android a manter o ecrã sempre ligado. Isto é útil para apresentações, etc. , mas consome muita bateria. Portanto, é recomendável conectar o telemóvel ao carregador sempre que este parâmetro esteja selecionado.

#### Botões

Defina quais botões são mostrados no ecrã inicial.

* Tratamentos
* Calculadora
* Insulina
* Hidratos
* CGM (abre xDrip+)
* Calibração

Furthermore, you can set shortcuts for insulin and carb increments and decide whether the notes field should be shown in treatment dialogues.

#### Definições do Assistente Rápido

Create a button for a certain standard meal (carbs and calculation method for the bolus) which will be displayed on the home screen. Use for standard meals frequently eaten. If different times are specified for the different meals you will always have the appropriate standard meal button on the home screen, depending on the time of day.

Note: Button will not be visible if outside the specified time range or if you have enough IOB to cover the carbs defined in the QuickWizard button.

![Botão do Assistente Rápido](../images/ConfBuild_QuickWizard.png)

#### Configurações Avançadas

Enable super bolus functionality in wizard. Use with caution and do not enable until you learn what it really does. Basically, the basal for the next two hours is added to the bolus and a two hour zero-temp activated. **AAPS looping functions will be disabled - so use with care! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### Ações

Alguns botões para aceder rapidamente a funções comuns:

* Profiles Switch (see [Profiles page](../Usage/Profiles.md) for more setup information)
* Temporary targets
* Definir / cancelar temp. taxa basal
* Extended bolus (DanaR/RS or Combo pump only)
* Prime / fill (if supported by pump [DanaR/RS, Combo and Insight])
* Navegador do histórico
* TDD (Total daily dose = bolus + basal per day)

Some doctors use - especially for new pumpers - a basal-bolus-ratio of 50:50. Therefore ratio is calculated as TDD / 2 * TBB (Total base basal = sum of basal rate within 24 hours). Others prefer range of 32% to 37% of TDD for TBB. Like most of these rules-of-thumb it is of limited real validity. Nota: Sua diabetes pode variar!

![Aba Accões](../images/ConfBuild_ConfBuild_Actions.png)

### Careportal

Allows you to record any specific care entries and view the current sensor, insulin, canula and pump battery ages in the Careportal (CP) tab.

Note: **No insulin** will be given if entered via careportal (i.e. meal bolus, correction bolus...)

Carbs entered in the careportal (i.e. correction carbs) will be used for COB calculation.

![Aba Careportal](../images/ConfBuild_CarePortal.png)

### Comunicador SMS

Allows remote caregivers to control some AndroidAPS features via SMS, see [SMS Commands](../Children/SMS-Commands.rst) for more setup information.

### Alimentos

Displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the AndroidAPS calculator. (Ver somente)

### Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../Configuration/Watchfaces.md)). Use settings (cog wheel) to define which variables should be considered when calculating bolus given though your watch (i.e. 15min trend, COB...).

If you want to bolus etc. from the watch then within "Wear settings" you need to enable "Controls from Watch".

![Definições Wear](../images/ConfBuild_Wear.png)

Through Wear tab or hamburger menu (top left of screen, if tab is not displayed) you can

* Reenviar Todos os Dados. Might be helpful if watch was not connected for some time and you want to push the information to the watch.
* Open settings on your watch directly from your phone.

### Linha estado xDrip (relógio)

Display loop information on your xDrip+ watchface (if you are not using AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md)

### Notificação em curso

Displays a summary of current BG, delta, active TBR%, active basal u/h and profile, IOB and split into bolus IOB and basal IOB on the phones's dropdown screen and phone's lock screen.

![Widget AAPS](../images/ConfBuild_Widget.png)

### Cliente NS

Setup sync of your AndroidAPS data with Nightscout.

If **Log app start to NS** is activated each AndroidAPS will be visible in Nightscout. Might be useful to detect problems with the app (i.e. battery optimization not disabled for AAPS) but can flood the Nightscout graph with entries.

#### Opções Alarme

Activar/desactivar alarmes AndroidAPS

![Opções Alarme](../images/ConfBuild_NSClient_Alarms.png)

#### Definições de ligação

Offline looping, disable roaming...

If you want to use only a specific WiFi network you can enter its **WiFi SSID **. Several SSIDs can be separated by semicolon. To delete all SSIDs enter a blank space in the field.

![Configurações ligação do Nightscout](../images/ConfBuild_ConnectionSettings.png)

#### Configurações Avançadas

* Auto backfill missing BGs from Nightscout
* Create announcement from errors Create Nightscout announcement for error dialogs and local alerts (also viewable in careportal in treatments section)
* Enable local broadcast to other apps like xDrip+
* Envio apenas para NS (sincronização desactivada)
* Sem envio para NS
* Always use basal absolute values -> Must be activated if you want to use [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) properly.

![Configurações avançadas do Nightscout](../images/ConfBuild_NSClient_Advanced.png)

### Manutenção

Email and number of logs to be send. Normally no change necessary.

### Configurador

Use tab for config builder instead of hamburger menu.