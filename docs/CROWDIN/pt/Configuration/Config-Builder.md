# Configurador

Dependendo de suas configurações pode-se abrir o Configurador através de um separador na parte superior do ecrã ou através do menu hambúrguer.

![Abrir configurador](../images/ConfBuild_Open.png)

O Configurador (Conf) é o separador onde ativa e desativa os módulos de configurações. As caixas do lado esquerdo (A) permitem selecionar qual usar, as caixas do lado direito (C) permitem que as veja como um separador (E) no AndroidAPS. Caso a caixa direita não esteja ativada, pode chegar à função utilizando o menu hamburger (D) no topo esquerdo do ecrã.

Onde existem configurações adicionais disponíveis dentro do módulo, pode clicar na roda dentada (B) que o levará para as configurações específicas dentro das preferências.

**Primeira configuração:** Desde AAPS 2.0 um assistente de instalação guia através do processo de configuração do AndroidAPS. Carregue no menu de 3 pontos no lado superior direito do ecrã (F) e selecione 'Assistente de instalação' para usá-lo.

![Config Builder boxes and cog wheel](../images/ConfBuild_ConfigBuilder.png)

## Aba ou menu Hambúrguer

Com a caixa de seleção sob o símbolo de olho, pode decidir como abrir a seção de programa correspondente.

![Aba ou menu Hambúrguer](../images/ConfBuild_TabOrHH.png)

## Perfil

Selecione o perfil basal que prefere usar. Ver a página [Perfis](../Usage/Profiles.md) para mais informações de configuração.

### Perfil local (recomendado)

O perfil local usa o perfil basal inserido manualmente no telefone. Assim que é selecionado, aparece um novo separador em AAPS, onde é possivel alterar os dados do perfil lidos da bomba se necessário. Com o próximo interruptor de perfil eles são então escritos na bomba em perfil 1. Este perfil é recomendado pois não depende de ligação à internet.

Os seus perfis locais são parte das [configurações exportadas](../Usage/ExportImportSettings.rst). Portanto, certifique-se de ter um backup num lugar seguro.

![Definições de Perfil Local](../images/LocalProfile_Settings.png)

Botões:

* verde (+): adicionar
* vermelho (X): excluir
* seta azul (↷): duplicar

Se você fizer alguma alteração no seu perfil, certifique-se que está a editar o perfil correto. Na aba perfil nem sempre há a visualização do perfil a ser utilizado atualmente-por exemplo, se fez uma troca de perfil usando a guia do perfil no ecrã inicial, este pode ser diferente do perfil realmente mostrado na guia de perfil, já que não há conexão entre estes.

#### Fazer Mudança De Perfil

Pode facilmente criar um novo perfil local a partir da mudança de perfil. Neste caso o deslocamento temporal e percentagem serão aplicados ao novo perfil local.

1. Vá para aba "tratamentos".
2. Selecione Troca de Perfil.
3. Pressione "Clone".
4. Pode editar o novo perfil local na guia Perfil Local (PF) ou no menu do lado esquerdo

![Fazer Mudança De Perfil](../images/LocalProfile_ClonePS.png)

Se deseja mudar de perfil do Nightscout para o perfil local basta fazer uma troca de perfil no seu perfil NS e clone a troca de perfil conforme descrito acima.

#### Enviar perfis locais para o Nightscout

Os perfis locais também podem ser carregados para o Nightscout. As configurações podem ser encontradas em [preferências do NSClient](../Configuration/Preferences#nsclient).

![Upload do Perfil Local para o NS](../images/LocalProfile_UploadNS2.png)

Vantagens:

* nenhuma conexão de internet necessária para alterar configurações de perfil
* mudanças de perfil podem ser feitas diretamente no telefone
* novo perfil pode ser criado a partir da Troca de Perfil
* perfis locais podem ser enviados para o Nightscout

Desvantagens:

* nenhuma

### Assistente de Perfil

Assistentes de perfis oferecem duas funções:

1. Encontre um perfil para crianças
2. Compare dois perfis ou trocas de perfis de modo a clonar um novo perfil

Mais detalhes são explicados na [página Assistente de Perfil ](../Configuration/profilehelper.rst).

### Perfil NS

Perfil NS usa os perfis que guardou na sua página NightScout (https://[yournightscoutsiteaddress]/profile). Pode usar a [Troca de Perfil](../Usage/Profiles.md) para mudar o perfil que está ativo, esta grava o perfil para a bomba em caso de falha da AndroidAPS. Isto permite facilmente criar vários perfis no Nightscout (por exemplo, trabalho, casa, desporto, férias, etc.). Logo após clicar em "Salvar" serão transferidos para a AAPS se o seu smartphone estiver online. Mesmo sem uma ligação à Internet ou sem uma ligação Nightscout, os perfis de Nightscout estão disponíveis na AAPS uma vez sincronizados.

Faça uma [Troca de perfil](../Getting-Started/Screenshots.md#current-profile) para ativar um perfil do Nightscout. A AAPS também escreve o perfil selecionado para a bomba após a mudança de perfil, para que ele esteja disponível sem a AAPS numa emergência e continue a ser executado.

Vantagens:

* múltiplos perfis
* fácil editar via PC ou tablet

Desvantagens:

* nenhuma alteração local para configurações de perfil
* o perfil não pode ser alterado diretamente no telefone

## Insulina

![Tipo de Insulina](../images/ConfBuild_Insulin.png)

* Selecione o tipo de curva de insulina que está a utilizar.
* As opções 'Oref Ação-Rápida','Oref Ultra-Rápida' e 'Oref Pico-Livre' têm todas um gráfico exponencial. Mais informação disponível em [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves). 
* A curva varia baseada com a Duração da Ação da Insulina (DIA) e o tempo de pico.
    
    * PURPLE line shows how much **insulin remains** after it has been injected as it decays with time.
    * BLUE line shows **how active** insulin is.

### DIA

* A Duração de Ação da Insulina (DIA) varia de pessoa para pessoa. É por isso que tem que experimentar e descobrir o seu. 
* Mas deve ser sempre pelo menos 5 horas.
* For a lot of people using ultra-rapid insulins like Fiasp there is practically no noticeable effect after 3-4 hours any more, even if 0.0xx units are available as a rule then. Este valor residual ainda pode ser visível durante o desporto, por exemplo. Por isso o AndroidAPS usa um DIA mínimo de 5h.
* Pode ler mais sobre isto na seção Perfil de Insulina de [nesta página ](../Getting-Started/Screenshots#insulin-profile). 

### Insulin type differences

* Para "ação rápida", "ultra-rápida" e "Lyumjev", o DIA é a única variável que se pode ajustar, o tempo de pico é fixo. 
* O Pico Livre permite ajustar tanto o DIA como o tempo para o pico, e deve ser usado apenas por utilizadores avançados que conhecem os efeitos destas configurações. 
* O gráfico da [curva de insulina](../Getting-Started/Screenshots#insulin-profile) ajuda a entender as diferentes curvas. 
* Pode vê-lo ativando a caixa de seleção para mostrá-la como um separador, caso contrário estará no menu hamburger.

#### Oref Acção Rápida

* recomendado para Humalog, Novolog e Novorapid
* DIA = pelo menos 5.0h
* Máx. pico = 75 minutos após a administração (fixo, não ajustável)

#### Ultra-Rapid Oref

* recomendado para FIASP
* DIA = pelo menos 5.0h
* Máx. pico = 55 minutos após a administração (fixo, não ajustável)

#### Lyumjev

* special insulin profile for Lyumjev
* DIA = pelo menos 5.0h
* Máx. peak = 45 minutes after injection (fixed, not adjustable)

#### Free Peak Oref

* With the "Free Peak 0ref" profile you can individually enter the peak time.
* O DIA é definido automaticamente para 5 horas se estiver especificado mais alto no perfil.
* This effect profile is recommended if an unbacked insulin or a mixture of different insulins is used.

## Fonte de Glic.

Select the blood glucose source you are using - see [BG Source](BG-Source.rst) page for more setup information.

* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* NSClient BG
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de) - only version 4.15.57 and newer are supported
* [Dexcom App (patched)](https://github.com/dexcomapp/dexcomapp/) - Select 'Send BG data to xDrip+' if you want to use xDrip+ alarms.
    
    ![Config Builder BG source](../images/ConfBuild_BGSource.png)

* [Poctech](https://www.poctechcorp.com/en/contents/268/5682.html)

* [Tomato App](http://tomato.cool/) for MiaoMiao device
* Random BG: Generates random BG data (Demo mode only)

## Bomba

Select the pump you are using.

* [Dana R](DanaR-Insulin-Pump.md)
* Dana R Korean (for domestic DanaR pump)
* Dana Rv2 (DanaR pump with unofficial firmware upgrade)
* [Dana RS](DanaRS-Insulin-Pump.md)
* [Accu Chek Insight](Accu-Chek-Insight-Pump.md)
* [Accu Chek Combo](Accu-Chek-Combo-Pump.md) (requires ruffy installation)
* [Medtronic](MedtronicPump.md)
* MDI (receive AAPS suggestions for your multiple daily injections therapy)
* Virtual pump (open loop for pump which don't have any driver yet - AAPS suggestions only)

For dana pumps, use **Advanced settings** to activate BT watchdog if necessary. It switches off bluetooth for one second if no connection to the pump is possible. This may help on some phones where the bluetooth stack freezes.

[Password for Dana RS pump](../Configuration/DanaRS-Insulin-Pump.md) must be entered correctly. Password was not checked in previous versions.

## Detecção de Sensibilidade

Select the type of sensitivity detection. For more details of different designs please [read on here](../Configuration/Sensitivity-detection-and-COB.md). This will analyze historical data on the go and make adjustments if it recognizes that you are reacting more sensitively (or conversely, more resistant) to insulin than usual. More details about the Sensitivity algorithm can be read in the [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

You can view your sensitivity on the homescreen by selecting SEN and watching the white line. Note, you need to be in [Objective 8](../Usage/Objectives#objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens) in order to let Sensitivity Detection/[Autosens](../Usage/Open-APS-features#autosens) automatically adjust the amount of insulin delivered. Before reaching that objective, the Autosens percentage / the line in your graph is displayed for information only.

### Absorption settings

If you use Oref1 with SMB you must change **min_5m_carbimpact** to 8. The value is only used during gaps in CGM readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause AAPS to decay COB. At times when [carb absorption](../Usage/COB-calculation.rst) can't be dynamically worked out based on your bloods reactions it inserts a default decay to your carbs. Basically, it is a failsafe.

## APS

Select the desired APS algorithm for therapy adjustments. You can view the active detail of the chosen algorithm in the OpenAPS(OAPS) tab.

* OpenAPS AMA (advanced meal assist, state of the algorithm in 2017) More detail about OpenAPS AMA can be found in the [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). In simple terms the benefits are after you give yourself a meal bolus the system can high-temp more quickly IF you enter carbs reliably.
* [OpenAPS SMB](../Usage/Open-APS-features.md) (super micro bolus, most recent algorithm for advanced users) Note you need to be in [Objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) in order to use OpenAPS SMB and min_5m_carbimpact must be set to 8 in Config builder > Sensitivity detection > Sensitivity Oref1 settings.

## Loop

* Switch between Open Loop, Closed Loop and Low Glucose Suspend (LGS).

![Config builder - loop mode](../images/ConfigBuilder_LoopLGS.png)

### Loop Aberto

* AAPS continuously evaluates all available data (IOB, COB, BG...) and makes treatment suggestions on how to adjust your therapy if necessary. 
* The suggestions will not be executed automatically (as in closed loop) have to be entered manually into the pump or by using a button in case you are using a compatible pump (Dana R/RS or Accu Chek Combo). 
* This option is for getting to know how AndroidAPS works or if you are using an unsupported pump.

### Loop Fechado

* AAPS continuously evaluates all available data (IOB, COB, BG...) and automatically adjusts the treatment if necessary (i.e. without further intervention by you) to reach the set target range or value (bolus delivery, temporary basal rate, insulin switch-off to avoid hypo etc.). 
* The Closed Loop works within numerous safety limits, which you can be set individually.
* Closed Loop is only possible if you are in [Objective 6](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend) or higher and use a supported pump.
* Please note: In closed loop mode a single target instead of target range (i.e. 5,5 mmol or 100 mg/dl instead of 5,0 - 7,0 mmol or 90 - 125 mg/dl) is recommended.

### Low Glucose Suspend (LGS)

* maxIOB is set to zero
* This means if blood glucose is dropping it can reduce basal for you.
* But if blood glucose is rising no automatic correction will be made. Your basal rates will remain the same as your selected profile.
* Only if basal IOB is negative (from a previous Low Glucose Suspend) additional insulin will be given to lower BG.

### Minimal request change

* When using open loop you will receive notifications every time AAPS recommends to adjust basal rate. 
* To reduce number of notifications you can either use a wider bg target range or increase percentage of the minimal request rate.
* This defines the relative change required to trigger a notification.

## Objectivos (programa de aprendizagem)

AndroidAPS has a leraning program (objectives) that you have to fulfill step by step. This should guide you safely through setting up a closed loop system. It guarantees that you have set everything up correctly and understand what the system does exactly. This is the only way you can trust the system.

You should [export your settings](../Usage/ExportImportSettings.rst) (including progress of the objectives) on a regularly basis. In case you have to replace your smartphone later (new purchase, display damage etc.) you can simply import those settings.

See [Objectives](../Usage/Objectives.rst) page for more information.

## Tratamentos

If you view the Treatments (Treat) tab, you can see the treatments that have been uploaded to nightscout. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the [carbs button on the home screen](../Getting-Started/Screenshots#carb-correction).

## Geral

### Visão Geral

Displays the current state of your loop and buttons for most common actions (see [section The Homescreen](../Getting-Started/Screenshots.md) for details). Settings can be accessed by clicking the cog wheel.

#### Keep screen on

Option 'Keep screen on' will force Android to keep the screen on at all times. This is useful for presentations etc. But it consumes a lot of battery power. Therefore, it is recommended to connect the smartphone to a charger cable.

#### Buttons

Define which Buttons are shown on the home screen.

* Tratamentos
* Calculadora
* Insulina
* Carbs
* CGM (opens xDrip+)
* Calibration

Furthermore, you can set shortcuts for insulin and carb increments and decide whether the notes field should be shown in treatment dialogues.

#### QuickWizard settings

Create a button for a certain standard meal (carbs and calculation method for the bolus) which will be displayed on the home screen. Use for standard meals frequently eaten. If different times are specified for the different meals you will always have the appropriate standard meal button on the home screen, depending on the time of day.

Note: Button will not be visible if outside the specified time range or if you have enough IOB to cover the carbs defined in the QuickWizard button.

![QuickWizard button](../images/ConfBuild_QuickWizard.png)

#### Default Temp-Targets

Choose default temp-targets (duration and target). Preset values are:

* eating soon: target 72 mg/dl / 4.0 mmol/l, duration 45 min
* activity: target 140 mg/dl / 7.8 mmol/l, duration 90 min
* hypo: target 125 mg/dl / 6.9 mmol/l, duration 45 min

#### Fill/Prime standard insulin amounts

Escolha as quantidades padrão usando os três botões para purgar/preencher, dependendo do comprimento do seu cateter/cânula.

#### Range of visualization

Choose the high and low marks for the BG-graph on AndroidAPS overview and smart watch. It is only the visualization, not the target range for your BG. Example: 70 - 180 mg/dl or 3.9 - 10 mmol/l

#### Shorten tab titles

Choose wether the tab titles in AndroidAPS are long (e.g. ACTIONS, LOCAL PROFILE, AUTOMATION) or short (e.g. ACT, LP, AUTO)

#### Mostrar campo de notas na janela de tratamentos

Choose if you want to have a notes field when entering treatments or not.

#### Luzes de Estado

Choose if you want to have [status lights](../Configuration/Preferences#status-lights) on overview for canula age, insulin age, sensor age, battery age, reservoir level or battery level. When warning level is reached, the color of the status light will switch to yellow. Critical age will show up in red.

#### Advanced settings

**Deliver this part of bolus wizard result**: When using SMB, many people do not meal-bolus 100% of needed insulin, but only a part of it (e.g. 75 %) and let the SMB with UAM (unattended meal detection) do the rest. In this setting, you can choose a default value for the percenteage the bolus wizard should calculate with. If this setting is 75 % and you had to bolus 10u, the bolus wizard will propose a meal bolus of only 7.5 units.

**Enable super bolus functionality in wizard** (It is different from *super micro bolus*!): Use with caution and do not enable until you learn what it really does. Basically, the basal for the next two hours is added to the bolus and a two hour zero-temp activated. **AAPS looping functions will be disabled - so use with care! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### Ações

* Some buttons to quickly access common features.
* See [AAPS screenshots](../Getting-Started/Screenshots#action-tab) for details.

### Automatização

User defined automation tasks ('if-then-else'). Please [read on here](../Usage/Automation.rst).

### Comunicador SMS

Allows remote caregivers to control some AndroidAPS features via SMS, see [SMS Commands](../Children/SMS-Commands.rst) for more setup information.

### Food

Displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the AndroidAPS calculator. (View only)

### Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../Configuration/Watchfaces.md)). Use settings (cog wheel) to define which variables should be considered when calculating bolus given though your watch (i.e. 15min trend, COB...).

If you want to bolus etc. from the watch then within "Wear settings" you need to enable "Controls from Watch".

![Wear settings](../images/ConfBuild_Wear.png)

Through Wear tab or hamburger menu (top left of screen, if tab is not displayed) you can

* Resend all data. Might be helpful if watch was not connected for some time and you want to push the information to the watch.
* Open settings on your watch directly from your phone.

### xDrip Statusline (watch)

Display loop information on your xDrip+ watchface (if you are not using AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md)

### NSClient

* Setup sync of your AndroidAPS data with Nightscout.
* Settings in [preferences](../Configuration/Preferences#nsclient) can be opened by clicking the cog wheel.

### Maintenance

Email and number of logs to be send. Normally no change necessary.

### Configurador

Use tab for config builder instead of hamburger menu.