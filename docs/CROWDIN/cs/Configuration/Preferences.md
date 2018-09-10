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

OpenAPS Advanced Meal Assist (AMA) umožňuje systému rychleji reagovat po bolusu na jídlo, pokud zadáte sacharidy správně. Zapněte si ho na kartě Konfigurace. Abyste viděli bezpečnostní nastavení zde nastavená, musíte mít splněn Cíl 7. O tomto nastavení a [ o Autosens si můžete přečíst více v dokumentech OpenAPS ](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

### Maximální povolený bazál [U/h]

Toto nastavení existuje jako bezpečnostní limit, aby se zabránilo AndroidAPS v nastavení nebezpečně vysokého bazálu. Hodnota je měřena v jednotkách za hodinu [U/hod]. Doporučuje se nastavit to na rozumnou hodnotu. Doporučuje se vzít nejvyšší hodnotu bazálu ve Vašem profilu a vynásobit ji čtyřmi. Například, když je nejvyšší nastavení bazálu ve Vašem profilu 0,5 jednotky za hodinu, můžete to vynásobit 4 a dostanete hodnotu 2 jednotky za hodinu.

### Maximální bazální IOB [U]

Množství dodatečného bazálního inzulínu (v jednotkách), který je povolený, aby se nahromadil v těle, navíc oproti Vašemu normálnímu bazálu. Jakmile je dosaženo této hodnoty, AAPS přestane posílat další inzulín, a to až do té doby, kdy Váš inzulín v těle (IOB) klesne zpět do stanoveného rozsahu.

* This value does not consider bolus IOB, only basal.
* This value is calculated and monitored indepentandlty of your normal basal rate. It is only the additional basal insulin on top of that normal rate that is considered.
* This value is measured in insulin units (u).

Když začínáte se smyčkou, ** je doporučováno nastavit si na nějaký čas maximální bazální IOB na 0**, než si na systém zvyknete. Toto zabrání AndroidAPS v tom, aby přidal jakýkoliv bazální inzulín. Během této doby bude AndoidAPS pořád schopná omezit či vypnout Váš bazální inzulín, aby se pomohlo předejít hypoglykémii.

Toto je důležitý krok, kvůli:

* Have a period of time to safely get used to the AAPS system and monitor how it works.
* Take the opportunity to perfect your basal profile and Insulin Sensitivity Factor (ISF).
* See how AAPS limits your basal insulin to prevent hypoglycaemia.

Když se na to už budete cítit, můžete dovolit systému, aby Vám začal posílat další bazální inzulín, a to navýšením hodnoty maximálního množství bazálního inzulínu v těle. Doporučuje se vzít **nejvyšší hodnotu bazálu **ve Vašem profilu a ** vynásobit ji třema**. Například, když je nejvyšší nastavení bazálu ve Vašem profilu 0,5 jednotky za hodinu, můžete to vynásobit 3 a dostanete hodnotu 1.5 jednotky za hodinu.

* You can start conservatively with this value and increase it slowly over time. 
* These are guidelines only; everyone's body is different. You may find you need more or less than what is recommended here, but always start conservatively and adjust slowly.

*Poznámka: Jako bezpečnostní prvek je maximální bazální IOB natvrdo nastaveno na maximálně 7 jednotek.*

## Nastavení absorpce sacharidů

Pokud jste si zvolili použití AMA Autosense, pak si budete moct zadat maximální čas absorpce jídla a také jak často chcete, aby se Autosense aktualizoval. Pokud často jíte jídla s vysokým obsahem tuků nebo bílkovin, budete si muset nastavit delší čas absorpce jídla.

## Nastavení pumpy

Možnosti zde se budou lišit v závislosti na tom, který ovladač pumpy jste zvolili v Konfiguraci. Pair and set your pump up according to the [DanaR Insulin Pump](../Configuration/DanaR-Insulin-Pump.md) or [DanaRS Insulin Pump](../Configuration/DanaRS-Insulin-Pump.md) or [Accu Chek Combo Pump](../Configuration/Accu-Chek-Combo-Pump.md) instructions where relevant. Pokud používáte AndroidAPS pro otevřenou smyčku, ujistěte se, že jste v konfiguraci zvolili virtuální pumpu.

## NS Client

* Set your 'nightscout URL' here (https://yourwebsitename.herokuapp.com or https://yourwebsitename.azurewebsites.net), and the 'API secret' (a 12 character password recorded in your heroku or azure variables). This enables data to be read and written between both the nightscout website and AndroidAPS. Double check for typos here if you are stuck in Objective 1.
* 'Log app start to nightscout' will record a note in your careportal entries every time the app is started. The app should not be needing to start more than once a day; more frequently than this suggests a problem. 
* 'Enable local broadcasts' will share your careportal data to other apps on the phone such as xdrip. 
* 'Alarm options' allows you to select which default nightscout alarms to use through the app. For the alarms to sound you need to set the Urgent High, High, Low and Urgent Low alarm values in your [heroku or azure variables](http://www.nightscout.info/wiki/welcome/website-features#customalarms). They will only work whilst you have a connection to nightscout and are intended for parent/carers, if you have the CGM source on your phone then use those alarms instead (e.g. xdrip+)

## SMS komunikátor

Toto nastavení dovoluje vzdálené ovládání telefonu s Aaps posláním sms s textem, jako je zastavení smyčky, nebo poslání bolusu. Further information is described in [SMS Commands](../Usage/SMS-Commands.md) but it will only display in Preferences if you have selected this option in the Config Builder.

## Jiné

* You can set defaults for your temp targets here for the different types of temp target (eating soon and activity). When you select a temp target and then choose, for example, "Eating Soon" from the drop down box, it will automatically populate the duration and value for you based on the figures you provided here. For more information on use of Temp Targets see [OpenAPS features](../Usage/Open-APS-features.md). 
* You can set default prime amounts - this will prime the pump the value specified and this insulin is counted as used from the reservoir but not counted in IOB calculations. See the instruction booklet in your cannula box for how many units should be primed depending on needle length and tubing length.
* You can change the display on the homescreen and watch for the values that are in range. Note that this is just how the graphs look and doesn't impact on your target or calculations.
* 'Shorten tab titles' allows you to see more tab titles on screen, for example the 'Open APS' tab becomes 'OAPS', 'Objectives' becomes 'Obj' etc.
* 'Local Alerts' lets you decide if you receive a warning and after how long for not receiving blood glucose values (stale data) or the pump being unreachable. If you frequently get pump unreachable alerts then enable BT Watchdog in the Advanced Settings.

## Advanced Settings ``requires more work

* OpenAPS MA
* Always use short average delta instead of... Enabling this setting is useful when you are using data from unfiltered sources such as xDrip+, as opposed to filtered sources such as an official Dexcom Receiver. Filtered data appears to be smooth, whereas unfiltered data can appear to be jumpy. This unfiltered data could cause AndroidAPS to apply Temporary Basal Rate changes more frequently than are really needed, as the OpenAPS algorithm reacts to the jumpy data. With this setting enabled, the OpenAPS algorithm will use the Short Average Delta (the average change in blood glucose over the past 15 minutes) instead of the last blood glucose reading received. This effectively has a "smoothing" effect on the data and attempts to compensate for any jumpy readings. Users of Abbot Freestyle Libre sensors collecting their glucose data via devices such as LimiTTers may find this setting provides better results with AAPS.

For further tips regarding data smoothing when using xDrip+ as the data source, see [Smoothing Blood Glucose Data in xDrip+](../Usage/Smoothing-blood-glucose-data-in-xDrip.md).

* OpenAPS preferences.json - before changing any of these settings, please view the descriptions of the safety values used and why in the [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).
* 'Ignore profile switch events' will not send your current AndroidAPS profile to the pump. It is encouraged not to select this unless you are testing code, as for safety sending profile switch events to the pump's basal profile 1 means than should AndroidAPS stop working or loose connection with the pump then your pump will revert to the same profile as default rather than you having to manually enter it into the pump. For more information on profiles see [Profiles](/docs/Usage/Profiles).
* 'BT Watchdog' select this option if you keep loosing connection with your pump. When the pump looses connection it will toggle bluetooth off and on for you to improve the connection.

## Nastavení hodinek

For more information on the wear watchface settings see [Watchfaces](../Configuration/Watchfaces.md).