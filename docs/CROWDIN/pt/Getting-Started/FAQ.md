# FAQ para loopers

Como adicionar perguntas para a FAQ: Siga estas [instruções](../make-a-PR.md)

# Geral

## Posso apenas fazer o download do arquivo de instalação da AndroidAPS?

Não. Não há nenhum arquivo apk para download para AndroidAPS. Você mesmo tem que [compilar](../Installing-AndroidAPS/Building-APK.md). Aqui está a razão pela qual:

A AndroidAPS é usada para controlar a sua bomba e administrar insulina. Sob os regulamentos atuais, na Europa, toda a classe de sistemas como IIa ou IIb são dispositivos médicos que requerem aprovação regulatória (uma marca CE) e que precisa de vários estudos e assinaturas. Distribuir um dispositivo não regulamentado é ilegal. Regulamentações semelhantes existem noutras partes do mundo.

Este regulamento não se restringe às vendas (no sentido de conseguir dinheiro para alguma coisa) mas aplica-se a qualquer forma de distribuição (mesmo doando-se gratuitamente). Construir um dispositivo médico para si mesmo é a única forma de não ser afetado por esses regulamentos.

É por isso que os apks não estão disponíveis.

## Como começar?

Em primeiro lugar, você tem que **obter componentes de hardware capazes de construir o loop**:

* Uma [bomba de insulina suportada](./Pump-Choices.md), 
* um [smartphone Android](Phones.md) (O Apple iOS não é suportado pelo AndroidAPS - pode verificar [iOS Loop](https://loopkit.github.io/loopdocs/)) e 
* um [sistema de monitorização contínua de glicose ](../Configuration/BG-Source.rst). 

Em segundo lugar, tem que **configurar o seu hardware**. Veja [o exemplo de configuração com tutorial passo a passo](Sample-Setup.md).

Em terceiro lugar, tem que **configurar os seus componentes de software**: AndroidAPS e fonte MCG/MFG.

Em quarto lugar, deve aprender e **compreender o design de referência da OpenAPS para verificar os seus fatores de tratamento**. O princípio principal do loop fechado é que a sua dose basal e a proporção de hidratos de carbono estão corretas (bem afinadas). Todas as recomendações presumem que suas necessidades basais são atendidas e quaisquer picos ou descidas que veja são resultado de outros fatores que, portanto, requerem alguns ajustes únicos (exercício, stress, etc.). Os ajustes que o loop fechado pode fazer para a segurança foram limitados (ver máximo de dose basal temporária permitida em [OpenAPS Reference Design](https://openaps.org/reference-design/)), o que significa que você não quer desperdiçar a dosagem permitida corrigindo uma basal subjacente incorreta. Se, por exemplo, você está frequentemente com baixa glicemia ao se aproximar de uma refeição, então é provável que as suas necessidades básicas precisem de ajustes. Pode usar o [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) para considerar um grande conjunto de dados para sugerir se, e como, as basais e/ou FSI precisam ser ajustados e também se a razão dos hidratos de carbono precisa ser alterada. Ou você pode testar e definir a seu basal à [maneira antiga](https://integrateddiabetes.com/basal-testing/).

## Que aspectos práticos de looping eu tenho?

### Proteção por senha

Se não deseja que as suas preferências sejam facilmente alteradas, então pode proteger o menu de preferências, selecionando no menu preferências "senha para configurações" e digite a senha escolhida. Da próxima vez que você aceder ao menu de preferências, ele solicitará a senha antes de prosseguir. Se mais tarde quiser remover a opção de senha, vá em “senha para configurações” e exclua o texto.

### Android Wear Smartwatches

Se planeia usar o aplicativo android wear para bólus ou alterar as configurações, precisa garantir que as notificações da AndroidAPS não são bloqueadas. A confirmação da ação vem por meio de notificação.

### Desconetar a bomba

Se tirar a bomba para tomar banho/nadar/praticar desporto, etc. deve informar a AndroidAPS que nenhuma insulina é fornecida para manter a IOB correta.

* Pressione e segure o botão 'Loop fechado' (será chamado de 'Loop aberto' quando ainda não tiver um loop fechado) na parte superior da tela inicial. 
* Selecione **'Desconectar bomba por XY min'**
* Isto definirá a sua basal a zero durante esse período de tempo.
* O período mínimo de tempo para uma desconexão está relacionado com o tempo minimo das DBTs que podem ser configuradas na bomba. Portanto, se desejar desconectar por um período mais curto de tempo, deve usar o menor tempo de desconexão disponível para a sua bomba e reconectar manualmente conforme descrito abaixo.
* O botão 'Loop fechado' (ou 'Loop aberto') ficará vermelho e será nomeado como 'Desconectado (xx m)' exibindo o tempo de desconexão restante.
* A AAPS irá reconecta-ser à bomba automaticamente após o tempo escolhido terminar e o seu loop fechado começará a funcionar novamente.
    
    ![Desconetar a bomba](../images/PumpDisconnect.png)

* Se o tempo selecionado tiver sido muito longo, pode reconectar manualmente.

* Mantenha pressionado o botão vermelho 'Desconectado (xx m)'.
* Selecione 'Reconectar bomba'.
    
    ![Reconnect pump](../images/PumpReconnect.png)

### As recomendações não são baseadas numa única leitura do MCG

Para a sua segurança, as recomendações feitas baseiam-se não apenas numa leitura da MCG mas no delta médio. Por isso, se perder algumas leituras pode demorar um pouco até voltar a obter dados de volta antes da AndroidAPS voltar a estar em looping novamente.

### Mais leituras

Há vários blogs com boas dicas para ajudá-lo a entender as práticas de looping:

* [Configurações de ajuste fino](https://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM
* [Por que o DIA importa](https://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM
* [Limitando os picos pós refeições](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
* [Hormonas e autosens](https://seemycgm.com/2017/06/06/hormones-2/) See my CGM

## Que equipamento de emergência é recomendado para transportar comigo?

Antes de mais nada, é preciso levar o mesmo equipamento de emergência com como todos os outros T1D com terapia de bomba de insulina. Em looping com a AndroidAPS, é altamente recomendável ter os seguintes equipamentos com, ou perto, de si:

* Carregador de baterias para a energia do seu smartphone (uma powerbank dá sempre jeito), wear (relógio) e (talvez) leitor BT
* Backup na nuvem (Dropbox, Google Drive ...) das apps que usa como: a sua versão mais recente da AndroidAPS-APK e a sua senha de armazenamento de passwords, arquivo de configurações da AndroidAPS, arquivo de configurações da xDrip, app patched Dexcom, ...
* Baterias da Bomba

## Como conectar com segurança o MCG/MFG?

Pode colocar uma fita sobre o mesmo. Encontram-se à venda pela net imensas opções para garantir que o sensor não descola. Alguns utilizadores utilizam a fita de kinesia padrão mais barata ou a rocktape.

Pode fixá-lo: Existem à venda braceletes que fixam o MCG/MFG com uma banda de borracha (pesquise no Google ou ebay).

# Definições AndroidAPS

A lista seguinte tem como objetivo ajudar a otimizar as configurações. It may be best to start at the top and work to the bottom. Aim to get one setting right before changing another. Work in small steps rather than making large changes at once. You can use [Autotune](https://autotuneweb.azurewebsites.net/) to guide your thinking, although it should not be followed blindly: it may not work well for you or in all circumstances. Note that settings interact with one another - you can have 'wrong' settings that work well together in some circumstances (e.g. if a too-high basal happens to be at the same time as a too-high CR) but do not in others. This means that you need to consider all the settings and check they work together in a variety of circumstances.

## Duration of insulin activity (DIA)

### Description & testing

The length of time that insulin decays to zero.

This is quite often set too short. Most people will want at least 5 hours, potentially 6 or 7.

### Impact

Too short DIA can lead to low BGs. And vice-versa.

If DIA is too short, AAPS thinks too early that your previous bolus is all consumed, and, at still elevated glucose, will give you more. (Actually, it does not wait that long, but predicts what would happen, and keeps adding insulin). This essentially creates ‘insulin stacking’ that AAPS is unaware of.

Example of a too-short DIA is a high BG followed by AAPS over-correcting and giving a low BG.

## Basal rate schedule (U/h)

### Description & testing

The amount of insulin in a given hour time block to maintain BG at a stable level.

Test your basal rates by suspending loop, fasting, waiting for say 5 hours after food, and seeing how BG changes. Repeat a few times.

If BG is dropping, basal rate is too high. And vice-versa.

### Impact

Too high basal rate can lead to low BGs. And vice-versa.

AAPS ‘baselines’ against the default basal rate. If basal rate is too high, a ‘zero temp’ will count as a bigger negative IOB than it should. This will lead to AAPS giving more subsequent corrections than it should to bring IOB ultimately to zero.

So, a basal rate too high will create low BGs both with the default rate, but also some hours hence as AAPS corrects to target.

Conversely a basal rate too low can lead to high BGs, and a failure to bring levels down to target.

## Insulin sensitivity factor (ISF) (mmol/l/U or mg/dl/U)

### Description & testing

The drop in BG expected from dosing 1U of insulin.

Assuming correct basal, you can test this by suspending loop, checking IOB is zero, and taking a few glucose tablets to get to a stable ‘high’ level.

Then take an estimated amount of insulin (as per current 1/ISF) to get to your target BG.

Be careful as this is quite often set too low. Too low means 1 U will drop BG faster than expected.

### Impact

**Lower ISF** (i.e. 40 instead of 50) = more aggressive / stronger leading to a bigger drop in BGs for each unit of insulin. If too low, this can lead to low BGs.

**Higher ISF** (i.e. 45 instead of 35) = less aggressive / weaker leading to a smaller drop in BGs for each unit of insulin. If too high, this can lead to high BGs.

**Example:**

* BG is 190 mg/dl (10,5 mmol) and target is 100 mg/dl (5,6 mmol). 
* So, you want correction of 90 mg/dl (= 190 - 110).
* ISF = 30 -> 90 / 30 = 3 units of insulin
* ISF = 45 -> 90 / 45 = 2 units of insulin

An ISF that is too low (not uncommon) can result in ‘over corrections’, because AAPS thinks it needs more insulin to correct a high BG than it actually does. This can lead to ‘roller coaster’ BGs (esp. when fasting). In this circumstance you need to increase your ISF. This will mean AAPS gives smaller correction doses, and this will avoid over-correcting a high BG resulting in a low BG.

Conversely, an ISF set too high can result in under-corrections, meaning your BG remains above target – particularly noticeable overnight.

## Insulin to carb ratio (IC) (g/U)

### Description & testing

The grams of carbohydrate for each unit of insulin.

Some people also use I:C as abbreviation instead of IC or talk about carb ratio (CR).

Assuming correct basal, you can test by checking IOB is zero and that you are in-range, eating exactly known carbs, and take an estimated amount of insulin based on current insulin to carb ratio. Best is to eat food your normally eat at that time of day and count its carbs precisely.

> **NOTE:**
> 
> In some European countries bread units were used for determination of how much insulin is needed for food. At the beginning 1 bread unit equaled 12g of carbs, later some changed to 10g of carbs.
> 
> In this model the amount of carbs was fixed and the amount of insulin was variable. ("How much insulin is needed to cover one bread unit?")
> 
> When using IC the amount of insulin is fixed and the amount of carbs is variable. ("How many g of carbs can be covered by one unit of insulin?")
> 
> Example:
> 
> Bread unit fatcor (BU = 12g carbs): 2,4 U/BU -> You need 2,4 units of insulin when you eat one bread unit.
> 
> Corresponding IC: 12g / 2,4 U = 5,0 g/U -> 5,0g carbs can be covered with one unit of insulin.
> 
> BU factor 2,4 U / 12g ===> IC = 12g / 2,4 U = 5,0 g/U
> 
> Conversion tables are available online i.e. [here](https://www.mylife-diabetescare.com/files/media/03_Documents/11_Software/FAS/SOF_FAS_App_KI-Verha%CC%88ltnis_MSTR-DE-AT-CH.pdf).

### Impact

**Lower IC** = less food per unit, i.e. you are getting more insulin for a fixed amount of carbs. Can also be called ‘more aggressive’.

**Higher IC** = more food per unit, i.e. you are getting less insulin for a fixed amount of carbs. Can also be called ‘less aggressive’.

If after meal has digested and IOB has returned to zero, your BG remains higher than before food, chances are IC is too large. Conversely if your BG is lower than before food, IC is too small.

# Algoritmo APS

## Why does it show "dia:3" in the "OPENAPS AMA"-tab even though I have a different DIA in my profile?

![AMA 3h](../images/Screenshot_AMA3h.png)

In AMA, DIA actually doesn't mean the 'duration of insulin acting'. It is a parameter, which used to be connected to the DIA. Now, it means, 'in which time should the correction be finished'. It has nothing to do with the calculation of the IOB. In OpenAPS SMB, there is no need for this parameter anymore.

## Perfil

### Why using min. 5h DIA (insulin end time) instead of 2-3h?

Well explained in [this article](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/). Don't forget to `ACTIVATE PROFILE` after changing your DIA.

### What causes the loop to frequently lower my BG to hypoglycemic values without COB?

First of all, check your basal rate and make a no-carb basal rate test. If it is correct, this behavior is typically caused by a too low ISF. A too low ISF looks typically like this:

![ISF too low](../images/isf.jpg)

### What causes high postprandial peaks in closed loop?

First of all, check your basal rate and make a no-carb basal rate test. If it is correct and your BG is falling to your target after carbs are fully absorbed, try to set an 'eating soon' temp target in AndroidAPS some time before the meal or think about an appropriate prebolus time with your endocrinologist. If your BG is too high after the meal and still too high after carbs are fully absorbed, think about decreasing your IC with your endocrinologist. If your BG is too high while COB and too low after carbs are fully absorbed, think about increasing your IC and an appropriate prebolus time with your endocrinologist.

# Outras configurações

## Configurações do Nightscout

### AndroidAPS NSClient says 'not allowed' and does not upload data. O que posso fazer?

In NSClient check 'Connection settings'. Maybe you actually are not in an allowed WLAN or you have activated 'Only if charging' and your charging cable is not attached.

## Configurações CGM

### Why does AndroidAPS say 'BG source doesn't support advanced filtering'?

If you do use another CGM/FGM than Dexcom G5 or G6 in xDrip native mode, you'll get this alert in AndroidAPS OpenAPS-tab. See [Smoothing blood glucose data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) for more details.

## Bomba

### Onde colocar a bomba?

There are innumerable possibilities to place the pump. It does not matter if you are looping or not.

### Batterias

Looping can reduce the pump battery faster than normal use because the system interacts through bluetooth far more than a manual user does. It is best to change battery at 25% as communication becomes challenging then. You can set warning alarms for pump battery by using the PUMP_WARN_BATT_P variable in your Nightscout site. Tricks to increase battery life include:

* reduce the length of time the LCD stays on (within pump settings menu)
* reduce the length of time the backlight stays on (within pump settings menu)
* select notification settings to a beep rather than vibrate (within pump settings menu)
* only press the buttons on the pump to reload, use AndroidAPS to view all history, battery level and reservoir volume.
* AndroidAPS app may often be closed to save energy or free RAM on some phones. When AndroidAPS is reinitialized at each startup it establishes a Bluetooth connection to the pump, and re-reads the current basal rate and bolus history. Isto consome bateria. To see if this is happening, go to Preferences > NSClient and enable 'Log app start to NS'. Nightscout will receive an event at every restart of AndroidAPS, which makes it easy to track the issue. To reduce this happening, whitelist AndroidAPS app in the phone battery settings to stop the app power monitor closing it down.
    
    For example, to whitelist on a Samsung phone running Android Pie:
    
    * Go to Settings -> Device Care -> Battery 
    * Scroll until you find AndroidAPS and select it 
    * De-select "Put app to sleep"
    * ALSO go to Settings -> Apps -> (Three circle symbol in the top-right of the screen) select "special access" -> Optimize battery usage
    * Scroll to AndroidAPS and make sure it is de-selected.

* clean battery terminals with alcohol wipe to ensure no manufacturing wax/grease remains.

* for [Dana R/RS pumps](../Configuration/DanaRS-Insulin-Pump.md) the startup procedure draws a high current across the battery to purposefully break the passivation film (prevents loss of energy whilst in storage) but it doesn't always work to break it 100%. Either remove and reinsert battery 2-3 times until it does show 100% on screen, or use battery key to briefly short circuit battery before insertion by applying to both terminals for a split second.
* see also more tips for [particular types of battery](../Usage/Accu-Chek-Combo-Tips-for-Basic-usage#battery-type-and-causes-of-short-battery-life)

### Changing reservoirs and cannulas

The change of cartridge cannot be done via AndroidAPS but must be carried out as before directly via the pump.

* Long press on "Open Loop"/"Closed Loop" on the Home tab of AndroidAPS and select 'Suspend Loop for 1h'
* Now disconnect the pump and change the reservoir as per pump instructions.
* Also piming and filling tube and canula can be done directly on the pump. In this case use [PRIME/FILL button](../Usage/CPbefore26#pump) in the actions tab just to record the change.
* Once reconnected to the pump continue the loop by long pressing on 'Suspended (X m)'.

The change of a canula however does not use the "prime infusion set" function of the pump, but fills the infusion set and/or canula using a bolus which does not appear in the bolus history. This means it does not interrupt a currently running temporary basal rate. On the Actions (Act) tab, use the [PRIME/FILL button](../Usage/CPbefore26#pump) to set the amount of insulin needed to fill the infusion set and start the priming. If the amount is not enough, repeat filling. You can set default amount buttons in the Preferences > Other > Fill/Prime standard insulin amounts. See the instruction booklet in your canula box for how many units should be primed depending on needle length and tubing length.

## Wallpaper

You can find the AndroidAPS wallpaper for your phone on the [phones page](../Getting-Started/Phones#phone-background).

## Daily usage

### Higiene

#### What to do when taking a shower or bath?

You can remove the pump while taking a shower or bath. For this short period of time you'll usually won't need it. But you should tell it to AAPS so that the IOB calculations are right.

See [description above](../Getting-Started/FAQ#disconnect-pump).

### Work

Depending on the kind of your job, maybe you use different treatment factors on workdays. As a looper you should think of a [profile switch](../Usage/Profiles.md) for your estimated working day (e.g. more than 100% for 8h when sitting around or less than 100% when you are active), a high or low temporary target or a [time shift of your profile](../Usage/Profiles#time-shift) when standing up much earlier or later than regular. If you are using [Nightscout profiles](../Configuration/Config-Builder#ns-profile), you can also create a second profile (e.g. 'home' and 'workday') and do a daily profile switch to the profile you actually need.

## Leisure activities

### Desporto

You have to rework your old sports habits from pre-loop times. If you simply consume one or more sports carbs as before, the closed loop system will recognize them and correct them accordingly.

So, you would have more carbohydrates on board, but at the same time the loop would counteract and release insulin.

When looping you should try these steps:

* Make a [profile switch](../Usage/Profiles.md) < 100%.
* Set an [activity temp target](../Usage/temptarget#activity-temp-target) above your standard target.
* If you are using SMB make sure ["Enable SMB with high temp targets"](../Usage/Open-APS-features#enable-smb-with-high-temp-targets) and ["Enable SMB always"](../Usage/Open-APS-features#enable-smb-always) are disabled.

Pre- and postprocessing of these settings is important. Make the changes in time before sport and consider the effect of muscle filling.

If you do sports regularly at the same time (i.e. sports class in your gym) you can consider using [automation](../Usage/Automation.rst) for profile switch and TT. Location based automation might also be an idea but makes preprocessing more difficult.

The percentage of the profile switch, the value for your activity temp target and best time for the changes are individual. Start on the safe side if you are looking for the right value for you (start with lower percentage and higher TT).

### Sexo

You can remove the pump to be 'free', but you should tell it to AAPS so that the IOB calculations are right.

See [description above](../Getting-Started/FAQ#disconnect-pump).

### Beber álcool

Drinking alcohol is risky in closed loop mode as the algorithm cannot predict the alcohol influenced BG correctly. You have to check out your own method for treating this using the following functions in AndroidAPS:

* Deactivating closed loop mode and treating the diabetes manually or
* setting high temp targets and deactivating UAM to avoid the loop increasing IOB due to an unattended meal or
* do a profile switch to noticeably less than 100% 

When drinking alcohol, you always have to have an eye on your CGM to manually avoid a hypoglycemia by eating carbs.

### A dormir

#### How can I loop during the night without mobile and WIFI radiation?

Many users turn the phone into airplane mode at night. If you want the loop to support you when you are sleeping, proceed as follows (this will only work with a local BG-source such as xDrip+ or patched Dexcom app, it will NOT work if you get the BG-readings via Nightscout):

1. Active o modo avião no seu telemóvel.
2. Wait until the airplane mode is active.
3. Ligar o Bluetooth.

You are not receiving calls now, nor are you connected to the internet. Mas o loop ainda está em execução.

Some people have discovered problems with local broadcast (AAPS not receiving BG values from xDrip+) when phone is in airplane mode. Go to Settings > Inter-app settings > Identify receiver and enter `info.nightscout.androidaps`.

![xDrip+ Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

### Viagem

#### How to deal with time zone changes?

With Dana R and Dana R Korean you don't have to do anything. For other pumps see [time zone travelling](../Usage/Timezone-traveling.md) page for more details.

## Medical topics

### Hospitalização

If you want to share some information about AndroidAPS and DIY looping with your clinicians, you can print out the [guide to AndroidAPS for clinicians](../Resources/clinician-guide-to-AndroidAPS.md).

### Medical appointment with your endocrinologist

#### A reportar

You can either show your Nightscout reports (https://YOUR-NS-SITE.com/report) or check [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).