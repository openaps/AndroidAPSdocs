# Construtor de Configuração

O Construtor de Configuração (Conf) é o separador onde ativa e desativa as configurações modulares. As caixas do lado esquerdo (A) permitem selecionar qual usar, as caixas do lado direito (C) permitem que as veja como um separador (E) no AndroidAPS. Caso a caixa direita não esteja ativada, pode chegar à função utilizando o menu hamburger (D) no topo esquerdo do ecrã.

Onde existem configurações adicionais disponíveis dentro do módulo, pode clicar na roda dentada (B) que o levará para as configurações específicas dentro das preferências.

**Primeira configuração:** Desde AAPS 2.0 um assistente de instalação guia através do processo de configuração do AndroidAPS. Carregue no menu de 3 pontos no lado superior direito do ecrã (F) e selecione 'Assistente de instalação' para usá-lo.

![Config Builder boxes and cog wheel](../images/ConfBuild_ConfigBuilder.png)

## Perfil

Selecione o perfil basal que prefere usar. Ver a página [Perfis](../Usage/Profiles.md) para mais informações de configuração.

### Perfil NS (NightScout)

Perfil NS usa os perfis que guardou na sua página NightScout (https://[yournightscoutsiteaddress]/profile). You can use the [Profile Switch](../Usage/Profiles.md) to change which of those profiles is active, this writes the profile to the pump in case of AndroidAPS failure. Isso permite facilmente criar vários perfis no Nightscout (i.e.. trabalho, casa, desportos, férias, etc.). Logo após clicar em "Save" serão transferidos para AAPS se seu smartphone estiver online. Mesmo sem uma ligação à Internet ou sem uma ligação de Nightscout, os perfis de Nightscout estão disponíveis na AAPS uma vez que tenham sido sincronizados.

Fazer um **interruptor de perfil** para ativar um perfil de Nightscout. Pressione e segure o perfil atual na ecrã principal AAPS no topo (campo cinzento entre o campo de "Open/Closed Loop" azul claro e o campo da área alvo azul escuro) > Alterar perfil > Selecionar perfil > OK. AAPS também escreve o perfil selecionado a bomba após a mudança de perfil, para que ele esteja disponível sem AAPS numa emergência e continue a ser executado.

### Perfil simples

Perfil simples apenas com um bloco de tempo para DIA, IC, ISF, taxa basal e intervalo alvo (ou seja, sem mudanças na taxa basal durante o dia). Provavelmente mais usado para eveitos de teste a menos que tenha os mesmos fatores ao longo de 24 horas. Uma vez selecionado "Perfil Simples", aparecerá um novo separador em AAPS onde é possível inserir os dados do perfil.

### Perfil local (recomendado)

O perfil local usa o perfil basal inserido manualmente no telefone. Assim que é selecionado, aparece um novo separador em AAPS, onde é possivel alterar os dados do perfil lidos da bomba se necessário. Com o próximo interruptor de perfil eles são então escritos na bomba em perfil 1. Este perfil é recomendado pois não depende de ligação à internet.

## Insulina

Selecione o tipo de curva de insulina que está a utilizar. As opções 'Oref Ação-Rápida','Oref Ultra-Rápida' e 'Oref Pico-Livre' têm todas uma forma exponencial. É listada mais informação no [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves), as curvas irão variar com base no DIA e a hora de pico. O DIA deve sempre ter pelo menos 5 horas, pode ler mais sobre isso na seção de Perfil de Insulina [desta página](../Getting-Started/Screenshots.md). Para ação rápida e ultra-rápida, o DIA é a única variável que pode ajustar por si mesmo, a hora de pico é fixa. O Pico Livre permite que ajustar tanto o DIA como o tempo para pico, e deve ser usado apenas por utilizadores avançados que conhecem os efeitos destas configurações. O gráfico da curva de insulina ajuda a entender as diferentes curvas. Pode vê-lo ativando a caixa de seleção para mostrá-la como um separador, caso contrário estará no menu hamburger.

### Oref Acção Rápida

* recomendado para Humalog, Novolog e Novorapid
* DIA = pelo menos 5.0h
* Máx. pico = 75 minutos após injeção

### Oref Ultra-Rápida

* recomendado para FIASP
* DIA = pelo menos 5.0h
* Máx. pico = 55 minutos após injeção

Para muitas pessoas não há já praticamente nenhum efeito visível do FIASP após 3-4 horas, mesmo que estejam disponíveis 0.0xx unidades como regra então. Este valor residual ainda pode ser visível durante o desporto, por exemplo. Portanto, AndroidAPS usa no mínimo 5h como DIA.

![Config Builder Ultra-Rapid Oref](../images/ConfBuild_UltraRapidOref.png)

### Oref Pico-Livre

Com o perfil "Pico Livre 0ref" pode digitar-se individualmente o tempo do pico. O DIA é definido automaticamente para 5 horas se estiver especificado mais alto no perfil.

Este perfil de efeito é recomendado se é utilizada uma insulina não instalada ou uma mistura de diferentes insulinas.

## Fonte de BG

Selecione a fonte de glicose de sangue que utiliza - ver [Fonte de BG](BG-Source.md) para mais informações de configuração.

* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* NSClient BG
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de)
* [Dexcom G5 (atualizado)](https://github.com/dexcomapp/dexcomapp/) - Selecione 'Enviar dados BG para xDrip+' se quiser usar alarmes xDrip+. ![Config Builder BG source](../images/ConfBuild_BGSource.png)
* [Poctech](http://www.poctechcorp.com/en/contents/268/5682.html)

## Bomba

Selecione a bomba que está a utilizar.

* [DanaR](DanaR-Insulin-Pump.md)
* DanaR Coreana (para bombas domésticas DanaR)
* DanaRv2 (Bomba DanaR com atualização de firmware)
* [DanaRS](DanaRS-Insulin-Pump.md)
* [Bomba Accu Chek Combo](Accu-Chek-Combo-Pump.md) (requer instalação de ruffy)
* MDI (recebe sugestões AAPS para a terapia de múltiplas injecções diárias)
* Bomba Virtual (loop aberto para uma bomba que nao tenha ainda nenhum driver - apenas sugestões AAPS)

Usar **Configurações avançadas** para ativar o watchdog BT se necessário. Desliga o bluetooth por um segundo, se nenhuma não for possível nenhuma ligação com a bomba. Isto pode ajudar em alguns telefones onde a pilha bluetooth congela.

## Detecção de Sensibilidade

Selecione o tipo de deteção de sensibilidade. Isto irá analisar os dados históricos em movimento e fazer ajustes se reconhecer que está a reagir de forma mais sensível (ou inversamente, mais resistente) à insulina do que o habitual. Detalhes sobre o algoritmo de Oref0 de sensibilidade podem ser lido em [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode).

Pode ver sua sensibilidade no ecrã inicial selecionando SEN e observando a linha branca. Nota, você precisa estar em [Objectivo 6](../Usage/Objectives) para usar Detecção de Sensibilidade/Autosens.

### Configurações de absorção

Se utilizar o Oref1 com SMB, deverá alterar **min_5m_carbimpact** para 8. The value is only used during gaps in CGM readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause AAPS to decay COB. At times when carb absorption can't be dynamically worked out based on your bloods reactions it inserts a default decay to your carbs. Basically it is a failsafe.

## APS

Select the desired APS algorithm for therapy adjustments. You can view the active detail of the chosen algorithm in the OpenAPS(OAPS) tab.

* OpenAPS MA (meal assist, state of the algorithm in 2016)
* OpenAPS AMA (advanced meal assist, state of the algorithm in 2016)  
    More detail about OpenAPS AMA can be found in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). In simple terms the benefits are after you give yourself a meal bolus the system can high-temp more quickly IF you enter carbs reliably.  
    Note you need to be in [Objective 7](../Usage/Objectives.md) in order to use OpenAPS AMA.
* [OpenAPS SMB](../Usage/Open-APS-features.md) (super micro bolus, most recent algorithm for advanced users)  
    Note you need to be in [Objective 8](../Usage/Objectives.md) in order to use OpenAPS SMB and min_5m_carbimpact must be set to 8 in Config builder > Sensitivity detection > Sensitivity Oref1 settings.

## Loop

Define whether you want to allow AAPS automatic controls or not.

### Open Loop

AAPS continuously evaluates all available data (IOB, COB, BG...) and makes treatment suggestions on how to adjust your therapy if necessary. The suggestions will not be executed automatically (as in closed loop) have to be entered manually into the pump or by using a button in case you are using a compatible pump (Dana R/RS or Accu Chek Combo). This option is for getting to know how AndroidAPS works or if you are using an unsupported pump.

### Closed Loop

AAPS continuously evaluates all available data (IOB, COB, BG...) and automatically adjusts the treatment if necessary (i.e. without further intervention by you) to reach the set target range or value (bolus delivery, temporary basal rate, insulin switch-off to avoid hypoversion, etc.). The Closed Loop works within numerous safety limits, which you can be set individually. Closed Loop is only possible if you are in [Objective 4](../Usage/Objectives.md) or higher and use a supported pump.

## Objectivos (programa de aprendizagem)

AndroidAPS tem um conjunto de objectivos que você tem que cumprir passo a passo. Isto deve guiá-lo com segurança, criando um sistema de loop fechado. It guarantees that you have set everything up correctly and understand what the system does exactly. This is the only way you can trust the system.

You should export your settings (including progress of the objectives) on a regulary basis. In case you have to replace your smartphone later (new purchase, display damage etc.) you can simply import those settings.

See [Objectives](../Usage/Objectives.md) page for more information.

## Tratamentos

If you view the Treatments (Treat) tab, you can see the treatments that have been uploaded to nightscout. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the Careportal (CP) tab.

## Geral

### Visão Geral

Displays the current state of your loop and buttons for most common actions (see [section The Homescreen](../Getting-Started/Screenshots.md) for details). Settings can be accessed by clicking the cog wheel.

#### Manter ecrã ligado

Option 'Keep screen on' will force Android to keep the screen on at all times. This is useful for presentations etc. But it consumes a lot of battery power. Therefore it is recommended to connect the smartphone to a charger cable.

#### Botões

Define which Buttons are shown on the home screen.

* Tratamentos
* Calculadora
* Insulina
* Hidratos
* CGM (abre xDrip+)
* Calibração

Furthermore you can set shortcuts for insulin and carb increments and decide wether the notes field should be shown in treatment dialogues.

#### Definições do Assistente Rápido

Create a button for a certain standard meal (carbs and calculation method for the bolus) which will be displayed on the home screen. Use for standard meals frequently eaten. If different times are specified for the different meals you will always have the appropriate standard meal button on the home screen, depending on the time of day.

Note: Button will not be visible if outside the specified time range or if you have enough IOB to cover the carbs defined in the QuickWizard button.

![Botão do Assistente Rápido](../images/ConfBuild_QuickWizard.png)

#### Configurações Avançadas

Enable super bolus functionality in wizard. Use with caution and do not enable until you learn what it really does. Basically the basal for the next two hours is added to the bolus and a two hour zero-temp activated. Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### Acções

Some buttons to quickly access common features:

* Profiles Switch (see [Profiles page](../Usage/Profiles.md) for more setup information)
* Alvos temporário
* Definir / cancelar temp. taxa basal
* Extended bolus (DanaR/RS or Combo pump only)
* Prime / fill (DanaR/RS or Combo pump only)
* Navegador do histórico
* TDD (Total daily dose = bolus + basal per day)

Some doctors use - especially for new pumpers - a basal-bolus-ratio of 50:50. Therefore ratio is calculated as TDD / 2 * TBB (Total base basal = sum of basal rate within 24 hours). Others prefer range of 32% to 37% of TDD for TBB. Like most of these rules-of-thumb it is of limited real validity. Nota: Sua diabetes pode variar!

![Aba Accões](../images/ConfBuild_ConfBuild_Actions.png)

### Careportal

Allows you to record any specific care entries and view the current sensor, insulin, canula and pump battery ages in the Careportal (CP) tab.

Note: **No insulin** will be given if entered via careportal (i.e. meal bolus, correction bolus...)

Carbs entered in the careportal (i.e. correction carbs) will be used for COB calculation.

![Aba Careportal](../images/ConfBuild_CarePortal.png)

### SMS Communicator

Allows remote caregivers to control some AndroidAPS features via SMS, see [SMS Commands](../Usage/SMS-Commands.md) for more setup information.

### Alimentos

Displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the AndroidAPS calculator. (Ver somente)

### Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../Configuration/Watchfaces.md)). Use settings (cog wheel) to define which variables should be considered when calculating bolus given though your watch (i.e. 15min trend, COB...).

If you want to bolus etc from the watch then within "Wear settings" you need to enable "Controls from Watch".

![Definições Wear](../images/ConfBuild_Wear.png)

Through Wear tab or hamburger menu (top left of screen, if tab is not displayed) you can

* Reenviar Todos os Dados. Might be helpful if watch was not connected for some time and you want to push the information to the watch.
* Open settings on your watch directly from your phone.

### Linha estado xDrip (relógio)

Display loop information on your xDrip+ watchface (if you are not using AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md)

### Notificação em curso

Displays a summary of current BG, delta, active TBR%, active basal u/hr and profile, IOB and split into bolus IOB and basal IOB on the phones dropdown screen and phonelock screen.

![Widget AAPS](../images/ConfBuild_Widget.png)

### Cliente NS

Setup sync of your AndroidAPS data with Nightscout.

If **Log app start to NS** is activated each AndroidAPS will be visible in Nightscout. Might be useful to detect problems with the app (i.e. battery optimisation not disabled for AAPS) but can flood the Nightscout graph with entries.

#### Opções Alarme

Activar/desactivar alarmes AndroidAPS

![Opções Alarme](../images/ConfBuild_NSClient_Alarms.png)

#### Definições de ligação

Offline looping, disable roaming...

If you want to use only a specific WiFi network you can enter its **WiFi SSID **. Several SSIDs can be separated by semicolon. To delete all SSIDs enter a blank space in the field.

![Configurações ligação do Nightscout](../images/ConfBuild_ConnectionSettings.png)

#### Configurações Avançadas

* Auto backfill missing BGs from Nightscout
* Create announcement from errors Create Nightscout announcement fro error dialogs and local alerts (also viewable in careportal in treatments section)
* Enable local broadcast to other apps like xDrip+
* Envio apenas para NS (sincronização desactivada)
* Sem envio para NS
* Always use basal absolute values -> Must be activated if you want to use [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) properly.

![Configurações avançadas do Nightscout](../images/ConfBuild_NSClient_Advanced.png)

### Manutenção

Email and number of logs to be send. Normally no change neccessary.

### Construtor de Configuração

Use tab for config builder instead of hambuger menu.