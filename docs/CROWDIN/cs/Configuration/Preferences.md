# Nastavení

## Heslo do nastavení

Tato volba Vám umožňuje nastavit heslo, abyste předešli náhodným nebo neoprávněným změnám v nastavení. Pokud zde zadáte heslo, budete požádáni, abyste ho zadali pro vstup do Nastavení. Chcete-li odstranit heslo, tak vymažte text v nastavení u této volby.

## Stáří pacienta

V tomto nastavení jsou stanoveny bezpečnostní limity v závislosti na Vámi zvoleném věku. Pokud začnete narážet na limit (jako maximální bolus), je čas posunout se o stupeň výš. Není správné zvolit vyšší věk než je skutečný, jelikož to může vést k předávkování zadáním nesprávné hodnoty v dialogovém okně pro inzulín (např. vynecháním desetinné čárky).

## Obecné

* Vyberte svůj jazyk. Pokud není Váš jazyk dostupný, nebo nejsou všechna slova přeložena, je možnost tyto slova přeložit nebo dát návrh na [Crowdin](https://crowdin.com/project/androidaps) nebo se zeptat na [gitter chatroom](https://gitter.im/MilosKozak/AndroidAPS).
* Průvodce rychlým nastavením Vám dovoluje přidat rychlé tlačítko pro často používaná jídla na hlavní obrazovku. Zadejte v nastavení počet sacharidů a on Vám spočítá bolus pro tyto sacharidy na základě aktuálních poměrů (dle aktuální hodnoty glykémie a aktivního inzulínu atd.).

## Portál nastavení péče

‘Vloženo kým’ je text, který se ukazuje v poli/okně ‘vloženo kým’ ve Vašem Nightscoutovém portálu péče. Nastavte si tohle tak, aby Vám to dávalo smysl. Je na Vás, zda to bude název apky, jméno člověka či název telefonu (např. pokud používáte AndroidAPS jako klient NS na telefonu, který nepatří pacientovi, pak si zde tímto můžete odlišit vlastníky telefonu). 

## Bezpečnost zadání ošetřeni

### Maximální povolený bolus [U]

To je maximální výše bolusu, který má AAPS povoleno poslat. Toto nastavení slouží jako bezpečnostní limit aby nemohlo dojít k poslaní enormní dávky bolusu nebo jako chyba uživatele. Je doporučeno nastavit toto na rozumnou hodnotu, která nahrubo odpovídá množství, které jste kdy potřebovali k jídlu nebo korekčnímu bolusu. Toto omezení platí také pro výsledky kalkulačky bolusu.

### Maximální povolené sacharidy [g]

To je maximální množství sacharidů, které AAPS kalkulačka bolusu dovolí započítat. Toto nastavení slouží jako bezpečnostní limit aby nemohlo dojít k poslaní enormní dávky bolusu nebo jako chyba uživatele. Je doporučeno nastavit toto na rozumnou hodnotu, která nahrubo odpovídá největšímu množství, které jste kdy potřebovali k jídlu.

## Smyčka

Zde můžete přepínat mezi otevřenou a uzavřenou smyčkou. Otevřené smyčka znamená, že návrhy dočasného bazálu jsou provedeny na základě skutečných dat a zobrazí se jako upozornění, ale musíte je ručně přijmout a ručně zadat do své pumpy. Uzavřená smyčka znamená, že návrhy dočasného bazálu budou automaticky odeslány do pumpy bez Vašeho potvrzení nebo Vašeho zadání. Na úvodní obrazovce se zobrazí v levém horním rohu, zda používáte otevřenou smyčku nebo uzavřenou. Stisknutím a podržením tohoto tlačítka je možno přepínat mezi smyčkami.

## Pokročilý asistent jídla v OpenAPS (AMA)

OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus IF you enter carbs reliably. Zapněte si ho na kartě Konfigurace. Abyste viděli bezpečnostní nastavení zde nastavená, musíte mít splněn Cíl 7. O tomto nastavení a [ o Autosens si můžete přečíst více v dokumentech OpenAPS ](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

### Max U/hr a Temp Basal can be set to

This setting exists as a safety limit to prevent AAPS from ever being capable of giving a dangerously high basal rate. The value is measured in units per hour (u/hr). It is advised to set this to something sensible. A good recommendation is to take the **highest basal rate** in your profile and **multiply it by 4**. For example, if the highest basal rate in your profile was 0.5u/hr you could multiply that by 4 to get a value of 2u/hr.

### Maximum basal IOB OpenAPS can deliver [U]

Amount of additional basal insulin (in units) allowed to accumulate in your body, on top of your normal basal profile. Once this value is reached, AAPS will stop giving additional basal insulin until your basal Insulin on Board (IOB) has decayed to within this range again. * This value does not consider bolus IOB, only basal. * This value is calculated and monitored indepentandlty of your normal basal rate. It is only the additional basal insulin on top of that normal rate that is considered. * This value is measured in insulin units (u).

When you begin looping, **it is advised to set Max Basal IOB to 0** for a period of time, while you are getting used to the system. This prevents AAPS from giving any additional basal insulin at all. During this time AAPS will still be able to limit or turn off your basal insulin to help prevent hypoglycaemia.

This is an important step in order to:

* Have a period of time to safely get used to the AAPS system and monitor how it works.
* Take the opportunity to perfect your basal profile and Insulin Sensitivity Factor (ISF).
* See how AAPS limits your basal insulin to prevent hypoglycaemia.

When you feel comfortable, you can allow the system to start giving you additional basal insulin, by raising the Max Basal IOB value. The recommended guideline for this is to take the **highest basal rate** in your profile and **multiply it by 3**. For example, if the highest basal rate in your profile was 0.5u/hr you could multiply that by 3 to get a value of 1.5u.

> You can start conservatively with this value and increase it slowly over time.
> 
> These are guidelines only; everyone's body is different. You may find you need more or less than what is recommended here, but always start conservatively and adjust slowly.

*Note: As a safety feature, Max Basal IOB is hard-limited to 7u.*

## Absorption Settings

If you have selected to use AMA Autosens then you will be able to enter your maximum meal absorption time and how frequently you want autosense to refresh. If you often eat high fat or protein meals you will need to increase your meal absorption time.

## Pump settings

The options here will vary depending on which pump driver you have selected in 'Config Builder'. Pair and set your pump up according to the [DanaR Insulin Pump](../Configuration/DanaR-Insulin-Pump) or [DanaRS Insulin Pump](../Configuration/DanaRS-Insulin-Pump) or [Accu Chek Combo Pump](../Configuration/Accu-Chek-Combo-Pump) instructions where relevant. If using AndroidAPS to open loop then make sure you have selected Virtual Pump in config builder.

## NS Client

* Set your 'nightscout URL' here (https://yourwebsitename.herokuapp.com or https://yourwebsitename.azurewebsites.net), and the 'API secret' (a 12 character password recorded in your heroku or azure variables). This enables data to be read and written between both the nightscout website and AndroidAPS. Double check for typos here if you are stuck in Objective 1.
* 'Log app start to nightscout' will record a note in your careportal entries every time the app is started. The app should not be needing to start more than once a day, more frequently than this suggests a problem. 
* 'Enable local broadcasts' will share your careportal data to other apps on the phone such as xdrip. 
* 'Alarm options' allows you to select which default nightscout alarms to use through the app. For the alarms to sound you need to set the Urgent High, High, Low and Urgent Low alarm values in your [heroku or azure variables](http://www.nightscout.info/wiki/welcome/website-features#customalarms). They will only work whilst you have a connection to nightscout and are intended for parent/carers, if you have the CGM source on your phone then use those alarms instead (e.g. xdrip+)

## SMS Communicator

This setting allows remote control of the app by texting instructions to the patients phone which the app will follow such as suspending loop, or bolusing. Further information is described in [SMS Commands](../Usage/SMS-Commands) but it will only display in Preferences if you have selected this option in the Config Builder.

## Other

* You can set defaults for your temp targets here, for the different types of temp target (eating soon and activity). When you select a temp target then if you choose for example "Eating Soon" from the drop down box, it will automatically populate the duration and value for you based on the figures you provided here. For more information on use of Temp Targets see [[Open APS features]]. 
* You can set default prime amounts - this will prime the pump the value specified and this insulin is counted as used from the reservoir but not counted in IOB calculations. See the instruction booklet in your cannula box for how many units should be primed depending on needle length and tubing length.
* You can change the display on the homescreen and watch for the values that are in range. Note that this is just how the graphs look and doesn't impact on your target or calculations.
* 'Shorten tab titles' allows you to see more tab titles on screen, for example the 'Open APS' tab becomes 'OAPS', 'Objectives' becomes 'Obj' etc.
* 'Local Alerts' lets you decide if you receive a warning and after how long for not receiving blood glucose values (stale data) or the pump being unreachable. If you frequently get pump unreachable alerts then enable BT Watchdog in the Advanced Settings.

## Advanced Settings ``requires more work

* OpenAPS MA 
  * Always use short average delta instead of... Enabling this setting is useful when you are using data from unfiltered sources such as xDrip+, as opposed to filtered sources such as an official Dexcom Receiver. Filtered data appears to be smooth, whereas unfiltered data can appear to be jumpy. This unfiltered data could cause AndroidAPS to apply Temporary Basal Rate changes more frequently than are really needed, as the OpenAPS algorithm reacts to the jumpy data. With this setting enabled, the OpenAPS algorithm will use the Short Average Delta (the average change in blood glucose over the past 15 minutes) instead of the last blood glucose reading received. This effectively has a "smoothing" effect on the data and attempts to compensate for any jumpy readings. Users of Abbot Freestyle Libre sensors collecting their glucose data via devices such as LimiTTers may find this setting provides better results with AAPS.

For further tips regarding data smoothing when using xDrip+ as the data source, see [Smoothing Blood Glucose Data in xDrip+](../Usage/Smoothing-blood-glucose-data-in-xDrip).

* OpenAPS preferences.json - before changing any of these settings, please view the descriptions of the safety values used and why in the [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).
* 'Ignore profile switch events' will not send your current AndroidAPS profile to the pump. It is encouraged not to select this unless you are testing code, as for safety sending profile switch events to the pump's basal profile 1 means than should AndroidAPS stop working or loose connection with the pump then your pump will revert to the same profile as default rather than you having to manually enter it into the pump. For more information on profiles see [Profiles](/docs/Usage/Profiles).
* 'BT Watchdog' select this option if you keep loosing connection with your pump. When the pump looses connection it will toggle bluetooth off and on for you to improve the connection.

## Wear Settings

For more information on the wear watchface settings see [Watchfaces](./Watchfaces).