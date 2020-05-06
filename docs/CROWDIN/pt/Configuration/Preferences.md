# Preferências

Open preferences by clicking three-dot-menu on top right side of homescreen:

![Como abrir as Preferências](../images/PreferencesOpen.png)

## Password para definições

Isso permite que você defina uma paswword para evitar alterações acidentais ou não autorizadas de preferências. Depois de definir uma password aqui, será solicitado que a introduza para aceder às Preferências. Para remover a opção de password, quando estiver dentro das Preferências, apague o texto nesse campo.

## Idade do Paciente

There are safety limits in place based on age you selected in this setting. Se começar a atingir esses limites rígidos (como o bolus máximo), é hora de dar um passo em frente. É uma má ideia selecionar uma idade superior à real, pois pode levar a uma sobre-dosagem inserindo o valor errado de insulina (ignorando a casa decimal, por exemplo). If you want to know the actual numbers for these hard coded safety limits, scroll to the algorithm feature you are using on [this page](../Usage/Open-APS-features.md).

## Geral

* Seleccione o seu Idioma. Se seu idioma não está disponível, ou nem todas as palavras são traduzidas, então sinta-se à vontade para fazer algumas sugestões em [Crowdin](https://crowdin.com/project/androidaps) ou pergunte na [gitter chatroom](https://gitter.im/MilosKozak/AndroidAPS).

## Visão Geral

* Manter o ecrã ligado é útil enquanto você está fazendo uma apresentação. Vai consumir muita energia, portanto é sensato ter seu telefone conectado a um carregador.
* Botões permitem que você escolha quais botões são visíveis no ecrã inicial. Também lhe dá algumas opções para a ecrã popup que você verá depois de pressionar um botão.
* Quick Wizard settings allows you to add a quick button for a frequent snack or meal, enter your decided carb details and on the homescreen if you select the quick wizard button it will calculate and bolus for those carbs based on your current ratios (taking into account blood glucose value or insulin on board if set up).

### Configurações Avançadas

![Preferences - Overview - Advanced Settings](../images/PreferencesOverviewAdvanced_V2_5.png)

* General setting to deliver only part of bolus wizard result. Only the set percentage (must be between 10 and 100) of the calculated bolus is delivered when using bolus wizard. The percentage is shown in bolus wizard.
    
    ![Bolus Wizard 80%](../images/BolusWizardPartDelivery.png)

* Option to enable [superbolus](../Getting-Started/Screenshots#section-a) in bolus wizard.

### Luzes de Estado

* Status lights give a visual warning for low reservoir and battery level as well as overdue site change. Extended version shows elapsed time / battery percentage.
    
    ![Luzes de estado - detalhe](../images/StatusLights_V2_5.png)
    
    Settings for status lights must be made in Nightscout settings. Set the following variables:
    
    * Cannula age: CAGE_WARN and CAGE_URGENT (standard 48 and 72 hours)
    * Insulin age (reservoir): IAGE_WARN and IAGE_URGENT (standard 72 and 96 hours)
    * Sensor age: SAGE_WARN and SAGE_URGENT (standard 164 and 166 hours)
    * Battery age: BAGE_WARN and BAGE_URGENT (standard 240 and 360 hours)

* Treshold for warning reservoir level and critical reservoir level.

* Treshold for warning battery level and critical battery level.

## Segurança de tratamentos

### Max bolus permitido [U]

This is the maximum amount of bolus insulin that AAPS is allowed to deliver. This setting exists as a safety limit to prevent the delivery of a massive bolus due to accidental input or user error. It is recommended to set this to a sensible amount that corresponds roughly to the maximum amount of bolus insulin that you are ever likely to need for a meal or correction dose. This restriction is also applied to the results of the Bolus Calculator.

### Max hidratos permitidos [g]

This is the maximum amount of carbs that AAPS bolus calculator is allowed to dose for. This setting exists as a safety limit to prevent the delivery of a massive bolus due to accidental input or user error. It is recommended to set this to a sensible amount that corresponds roughly to the maximum amount of carbs that you are ever likely to need for a meal.

## Loop

You can toggle between open and closed looping here.

**Open looping** means TBR suggestions are made based on your data and appear as a notification, but you must manually choose to accept them and manually enter them into your pump.

**Closed looping** means TBR suggestions are automatically sent to your pump without confirmation or input from you.

The homescreen will display in the top left corner whether you are open or closed looping, and pressing and holding this homescreen button will also allow you to toggle between the two.

### Minimal Request Rate

When using open loop you will receive notifications every time AAPS recommends to adjust basal rate. To reduce number of notifications you can either use a wider bg target range or increase percentage of the minimal request rate. This defines the relative change required to trigger a notification.

![Minimal request rate](../images/MinRequestChange.png)

Please note: In closed loop mode a single target instead of target range (i.e. 5,5 mmol instead of 5,0 - 7,0 mmol) is recommended.

## OpenAPS AMA

OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus IF you enter carbs reliably. Turn it on in the Config tab to view the safety settings here, you will need to have completed [Objective 9](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama) to use this feature. You can read more about the settings and [Autosens in the OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

### Max U/hr a Temp Basal can be set to

This setting exists as a safety limit to prevent AAPS from ever being capable of giving a dangerously high basal rate. The value is measured in units per hour (u/hr). It is advised to set this to something sensible. A good recommendation is to take the **highest basal rate** in your profile and **multiply it by 4**. For example, if the highest basal rate in your profile was 0.5u/hr you could multiply that by 4 to get a value of 2u/hr.

### Maximum basal IOB OpenAPS can deliver [U]

Amount of additional basal insulin (in units) allowed to accumulate in your body, on top of your normal basal profile. Once this value is reached, AAPS will stop giving additional basal insulin until your basal Insulin on Board (IOB) has decayed to within this range again.

* Este valor não considera o IOB bolus, apenas basal.
* This value is calculated and monitored independently of your normal basal rate. It is only the additional basal insulin on top of that normal rate that is considered.
* Este valor é medido em unidades de insulina (u).

When you begin looping, **it is advised to set Max Basal IOB to 0** for a period of time, while you are getting used to the system. This prevents AAPS from giving any additional basal insulin at all. During this time AAPS will still be able to limit or turn off your basal insulin to help prevent hypoglycaemia.

This is an important step in order to:

* Have a period of time to safely get used to the AAPS system and monitor how it works.
* Take the opportunity to perfect your basal profile and Insulin Sensitivity Factor (ISF).
* See how AAPS limits your basal insulin to prevent hypoglycaemia.

When you feel comfortable, you can allow the system to start giving you additional basal insulin, by raising the Max Basal IOB value. The recommended guideline for this is to take the **highest basal rate** in your profile and **multiply it by 3**. For example, if the highest basal rate in your profile was 0.5u/hr you could multiply that by 3 to get a value of 1.5u.

* You can start conservatively with this value and increase it slowly over time. 
* These are guidelines only; everyone's body is different. You may find you need more or less than what is recommended here, but always start conservatively and adjust slowly.

*Note: As a safety feature, Max Basal IOB is hard-limited to 7u.*

## Configurações de Absorção

If you have selected to use AMA Autosens then you will be able to enter your maximum meal absorption time and how frequently you want autosense to refresh. If you often eat high fat or protein meals you will need to increase your meal absorption time.

## Definições da Bomba

The options here will vary depending on which pump driver you have selected in 'Config Builder'. Pair and set your pump up according to the pump related instructions:

* [Bomba de Insulina DanaR](../Configuration/DanaR-Insulin-Pump.md) 
* [Bomba de Insulina DanaRS](../Configuration/DanaRS-Insulin-Pump.md) 
* [Bomba de Insulina Accu Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md) 
* [Accu Chek Insight Pump](../Configuration/Accu-Chek-Insight-Pump.md) 
* [Medtronic Pump](..//Configuration/MedtronicPump.md)

If using AndroidAPS to open loop then make sure you have selected Virtual Pump in config builder.

## Cliente NS

* Set your 'nightscout URL' here (https://yourwebsitename.herokuapp.com or https://yourwebsitename.azurewebsites.net), and the 'API secret' (a 12 character password recorded in your heroku or azure variables). This enables data to be read and written between both the nightscout website and AndroidAPS. Double check for typos here if you are stuck in Objective 1.
* **Make sure that the URL is WITHOUT /api/v1/ at the end.**
    
    ![URL NSCliente](../images/NSClientURL.png)

* 'Log app start to nightscout' will record a note in your careportal entries every time the app is started. The app should not be needing to start more than once a day; more frequently than this suggests a problem.

* 'Alarm options' allows you to select which default nightscout alarms to use through the app. For the alarms to sound you need to set the Urgent High, High, Low and Urgent Low alarm values in your [heroku or azure variables](http://www.nightscout.info/wiki/welcome/website-features#customalarms). They will only work whilst you have a connection to nightscout and are intended for parent/carers, if you have the CGM source on your phone then use those alarms instead (e.g. xdrip+).
* 'Enable local broadcasts' will share your careportal data to other apps on the phone such as xdrip.
* 'Always use basal absolute values' must be activated if you want to use Autotune properly.
    
    **Do not activate this when using [Insight pump](https://androidaps.readthedocs.io/en/latest/EN/Configuration/Accu-Chek-Insight-Pump#settings-in-aaps)!** It would lead to false TBR settings in Insight pump.

## Comunicador SMS

This setting allows remote control of the app by texting instructions to the patients phone which the app will follow such as suspending loop, or bolusing. Further information is described in [SMS Commands](../Children/SMS-Commands.rst) but it will only display in Preferences if you have selected this option in the Config Builder.

## Outro

* You can set defaults for your temp targets here for the different types of temp target (eating soon and activity). When you select a temp target and then choose, for example, "Eating Soon" from the drop down box, it will automatically populate the duration and value for you based on the figures you provided here. For more information on use of Temp Targets see [OpenAPS features](../Usage/Open-APS-features.md). 
* You can set default prime amounts - this will prime the pump the value specified and this insulin is counted as used from the reservoir but not counted in IOB calculations. See the instruction booklet in your cannula box for how many units should be primed depending on needle length and tubing length.
* You can change the display on the homescreen and watch for the values that are in range. Note that this is just how the graphs look and doesn't impact on your target or calculations.
* 'Shorten tab titles' allows you to see more tab titles on screen, for example the 'Open APS' tab becomes 'OAPS', 'Objectives' becomes 'Obj' etc.
* 'Local Alerts' lets you decide if you receive a warning and after how long for not receiving blood glucose values (stale data) or the pump being unreachable. If you frequently get pump unreachable alerts then enable BT Watchdog in the Advanced Settings.

## Escolha de Dados

* 'Fabric Upload' will send crash reporting and feature usage data to the developers.