# Construtor de Configuração

Depending on your settings you can open Config Builder through a tab at the top of the screen or through hamburger menu.

![Open config builder](../images/ConfBuild_Open.png)

O Construtor de Configuração (Conf) é o separador onde ativa e desativa as configurações modulares. As caixas do lado esquerdo (A) permitem selecionar qual usar, as caixas do lado direito (C) permitem que as veja como um separador (E) no AndroidAPS. Caso a caixa direita não esteja ativada, pode chegar à função utilizando o menu hamburger (D) no topo esquerdo do ecrã.

Onde existem configurações adicionais disponíveis dentro do módulo, pode clicar na roda dentada (B) que o levará para as configurações específicas dentro das preferências.

**Primeira configuração:** Desde AAPS 2.0 um assistente de instalação guia através do processo de configuração do AndroidAPS. Carregue no menu de 3 pontos no lado superior direito do ecrã (F) e selecione 'Assistente de instalação' para usá-lo.

![Config Builder boxes and cog wheel](../images/ConfBuild_ConfigBuilder.png)

## Tab or hamburger menu

Com a caixa de seleção sob o símbolo de olho, você pode decidir como abrir a seção de programa correspondente.

![Tab or hamburger menu](../images/ConfBuild_TabOrHH.png)

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

The DIA is not the same for each person. That's why you have to test it for yourself. But it must always be at least 5 hours. You can read more about that in the Insulin Profile section of [this](../Getting-Started/Screenshots#insulin-profile) page.

Para ação rápida e ultra-rápida, o DIA é a única variável que pode ajustar por si mesmo, a hora de pico é fixa. O Pico Livre permite que ajustar tanto o DIA como o tempo para pico, e deve ser usado apenas por utilizadores avançados que conhecem os efeitos destas configurações.

The [insulin curve graph](../Getting-Started/Screenshots#insulin-profile) helps you to understand the different curves. Pode vê-lo ativando a caixa de seleção para mostrá-la como um separador, caso contrário estará no menu hamburger.

### Oref Acção Rápida

* recomendado para Humalog, Novolog e Novorapid
* DIA = pelo menos 5.0h
* Máx. peak = 75 minutes after injection (fixed, not adjustable)

### Oref Ultra-Rápida

* recomendado para FIASP
* DIA = pelo menos 5.0h
* Máx. peak = 55 minutes after injection (fixed, not adjustable)

Para muitas pessoas não há já praticamente nenhum efeito visível do FIASP após 3-4 horas, mesmo que estejam disponíveis 0.0xx unidades como regra então. Este valor residual ainda pode ser visível durante o desporto, por exemplo. Therefore, AndroidAPS uses minimum 5h as DIA.

![Config Builder Ultra-Rapid Oref](../images/ConfBuild_UltraRapidOref.png)

### Oref Pico-Livre

Com o perfil "Pico Livre 0ref" pode digitar-se individualmente o tempo do pico. O DIA é definido automaticamente para 5 horas se estiver especificado mais alto no perfil.

Este perfil de efeito é recomendado se é utilizada uma insulina não instalada ou uma mistura de diferentes insulinas.

## Fonte de Glic.

Selecione a fonte de glicose de sangue que utiliza - ver [Fonte de BG](BG-Source.rst) para mais informações de configuração.

* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* Glic NSCliente
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de)
* [Dexcom App (patched)](https://github.com/dexcomapp/dexcomapp/) - Select 'Send BG data to xDrip+' if you want to use xDrip+ alarms.
    
    ![Config Builder BG source](../images/ConfBuild_BGSource.png)

* [Poctech](http://www.poctechcorp.com/en/contents/268/5682.html)

## Bomba

Selecione a bomba que está a utilizar.

* [Dana R](DanaR-Insulin-Pump.md)
* Dana R Korean (for domestic DanaR pump)
* Dana Rv2 (DanaR pump with firmware upgrade)
* [Dana RS](DanaRS-Insulin-Pump.md)
* [Bomba Accu Chek Combo](Accu-Chek-Combo-Pump.md) (requer instalação de ruffy)
* MDI (receive AAPS suggestions for your multiple daily injections therapy)
* Bomba Virtual (loop aberto para uma bomba que nao tenha ainda nenhum driver - apenas sugestões AAPS)

Usar **Configurações avançadas** para ativar o watchdog BT se necessário. It switches off bluetooth for one second if no connection to the pump is possible. Isto pode ajudar em alguns telefones onde a pilha bluetooth congela.

## Detecção de Sensibilidade

Selecione o tipo de deteção de sensibilidade. This will analyze historical data on the go and make adjustments if it recognizes that you are reacting more sensitively (or conversely, more resistant) to insulin than usual. Detalhes sobre o algoritmo de Oref0 de sensibilidade podem ser lido em [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode).

You can view your sensitivity on the homescreen by selecting SEN and watching the white line. Note, you need to be in [Objective 8](../Usage/Objectives#objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens) in order to use Sensitivity Detection/autosens.

### Configurações de absorção

Se utilizar o Oref1 com SMB, deverá alterar **min_5m_carbimpact** para 8. The value is only used during gaps in CGM readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause AAPS to decay COB. At times when carb absorption can't be dynamically worked out based on your bloods reactions it inserts a default decay to your carbs. Basically, it is a failsafe.

## APS

Select the desired APS algorithm for therapy adjustments. You can view the active detail of the chosen algorithm in the OpenAPS(OAPS) tab.

* OpenAPS MA (meal assist, state of the algorithm in 2016)
* OpenAPS AMA (advanced meal assist, state of the algorithm in 2016)  
    More detail about OpenAPS AMA can be found in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). In simple terms the benefits are after you give yourself a meal bolus the system can high-temp more quickly IF you enter carbs reliably.  
    Note you need to be in [Objective 9](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama) in order to use OpenAPS AMA.
* [OpenAPS SMB](../Usage/Open-APS-features.md) (super micro bolus, most recent algorithm for advanced users)  
    Note you need to be in [Objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) in order to use OpenAPS SMB and min_5m_carbimpact must be set to 8 in Config builder > Sensitivity detection > Sensitivity Oref1 settings.

## Loop

Define whether you want to allow AAPS automatic controls or not.

### Open Loop

AAPS continuously evaluates all available data (IOB, COB, BG...) and makes treatment suggestions on how to adjust your therapy if necessary. The suggestions will not be executed automatically (as in closed loop) have to be entered manually into the pump or by using a button in case you are using a compatible pump (Dana R/RS or Accu Chek Combo). This option is for getting to know how AndroidAPS works or if you are using an unsupported pump.

### Closed Loop

AAPS continuously evaluates all available data (IOB, COB, BG...) and automatically adjusts the treatment if necessary (i.e. without further intervention by you) to reach the set target range or value (bolus delivery, temporary basal rate, insulin switch-off to avoid hypo etc.). The Closed Loop works within numerous safety limits, which you can be set individually. Closed Loop is only possible if you are in [Objective 6](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend) or higher and use a supported pump.

## Objectivos (programa de aprendizagem)

AndroidAPS tem um conjunto de objectivos que você tem que cumprir passo a passo. Isto deve guiá-lo com segurança, criando um sistema de loop fechado. It guarantees that you have set everything up correctly and understand what the system does exactly. This is the only way you can trust the system.

You should [export your settings](../Usage/ExportImportSettings.rst) (including progress of the objectives) on a regularly basis. In case you have to replace your smartphone later (new purchase, display damage etc.) you can simply import those settings.

See [Objectives](../Usage/Objectives.rst) page for more information.

## Tratamentos

If you view the Treatments (Treat) tab, you can see the treatments that have been uploaded to nightscout. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the Careportal (CP) tab.

## Geral

### Visão Geral

Displays the current state of your loop and buttons for most common actions (see [section The Homescreen](../Getting-Started/Screenshots.md) for details). Settings can be accessed by clicking the cog wheel.

#### Manter ecrã ligado

Option 'Keep screen on' will force Android to keep the screen on at all times. This is useful for presentations etc. But it consumes a lot of battery power. Therefore, it is recommended to connect the smartphone to a charger cable.

#### Botões

Define which Buttons are shown on the home screen.

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

### Acções

Alguns botões para aceder rapidamente a funções comuns:

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

### Construtor de Configuração

Use tab for config builder instead of hamburger menu.