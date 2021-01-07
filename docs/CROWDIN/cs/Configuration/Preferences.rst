Nastavení
***********************************************************
* **Otevřete nastavení** klepnutím na tři tečky v pravém horním rohu hlavní obrazovky.

  .. image:: ../images/Pref2020_Open2.png
    :alt: Otevřít nastavení

* Do nastavení příslušného pluginu (např. záložka pumpa) se dostanete klepnutím na Nastavení plugginu.

  .. image:: ../images/Pref2020_OpenPlugin2.png
    :alt: Otevřít nastavení pluginu

* **Podmenu** může být otevřeno kliknutím na trojúhelník pod nadpisem menu.

  .. image:: ../images/Pref2020_Submenu2.png
    :alt: Otevřít submenu

* With the **filter** on top of the preferences screen you can quickly access certain preferences. Just start typing part of the text you are looking for.

  .. image:: ../images/Pref2021_Filter.png
    :alt: Předvolby > Filtry


Obecné
===========================================================

**Jednotky**

* V závislosti na vašich preferencích nastavte jednotky na mmol/l nebo mg/dl.

**Jazyk**

* Nová možnost je používat výchozí jazyk telefonu (doporučeno). 
* V případě, že chcete mít AAPS v jiném jazyce než je standardní jazyk telefonu si můžete vybrat z široké nabídky dalších jazyků.
* Pokud používáte různé jazyky, můžete se někdy setkat s jazykovým mixem. To je způsobeno chybou androida, kdy v některých případech nefunguje přepsání výchozího jazyka.

  .. image:: ../images/Pref2020_General.png
    :alt: Nastavení > Obecné

**Jméno pacienta**

* Hodí se v případě, že používáte víc nastavení (např. u rodin se 2 diabetickými dětmi).

Ochrana
-----------------------------------------------------------
Hlavní heslo
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Abyste mohli `exportovat nastavení <../Usage/ExportImportSettings.html>`_, je nutné nastavit hlavní heslo. Od verze 2.7 jsou totiž exporty šifrované.

   ** Biometrická ochrana nefunguje na telefonech OnePlus. Jde o známý problém OnePlus.**

* Klepnutím na tři tečky v pravém horním rohu hlavní obrazovky otevřete Nastavení
* Klepněte na trojúhelník pod "Obecné"
* Klepněte na položku "Hlavní heslo"
* Zadejte heslo, potvrďte ho, a klepněte na tlačítko Ok.

  .. image:: ../images/MasterPW.png
    :alt: Nastavení hlavního hesla
  
Ochrana nastavení
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Chraňte své nastavení pomocí hesla nebo biometrického ověření telefonu (t.j. `AndroidAPS pro děti <../Children/Children.html>`_).
* Pokud chcete použít hlavní heslo pouze pro zabezpečení `exportovaného nastavení <../Usage/ExportImportSettings.html> ` _, můžete si vytvořit Vlastní heslo.
* Pokud používáte vlastní heslo, klepněte na řádek "Nastavení hesla", a nastavte heslo tak, jak je popsáno výše, `nad <../Configuration/Preferences.html#master-password>`_.

  .. image:: ../images/Pref2020_Protection.png
    :alt: Ochrana

Ochrana aplikace
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Je-li aplikace chráněna, musíte k otevření AAPS zadat heslo nebo použít biometrické ověření telefonu.
* Je-li zadáno chybné heslo, aplikace se okamžitě vypne. Pokud byla předtím úspěšně spuštěna, zůstává stále běžet na pozadí.

Ochrana bolusu
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Ochrana bolusu je užitečná, pokud AAPS používá malé dítě, a vy podáváte `bolus prostřednictvím SMS <../Children/SMS-Commands.html>`_.
* V níže uvedeném příkladu vidíte výzvu k biometrické ochraně. Pokud biometrické ověření nefunguje, klepněte na místo nad bílou výzvou k zadání, a zadejte hlavní heslo.

  .. image:: ../images/Pref2020_PW.png
    :alt: Výzva pro biometrickou ochranu

Vzhled
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Můžete si vybrat ze čtyř typů vzhledů:

  .. image:: ../images/Pref2021_SkinWExample.png
    :alt: Výběr vzhledu + příklady

* 'Low resolution skin' comes with shorter label and age/level removed to have more available space on very low resolution screen.
* Rozdíly mezi ostatními vzhledy závisí na orientaci telefonu.

Na výšku
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
* ** Původní vzhled** a **Tlačítka jsou vždy zobrazena na spodní části obrazovky** jsou stejné
* **Velký displej** v porovnání s ostatními vzhledy má větší velikost grafů

Na šířku
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
* Při použití **Původní vzhled** a **Velký displej**, musíte posouvat dolů, abyste zobrazili tlačítka v dolní části obrazovky
* **Velký displej** v porovnání s ostatními vzhledy má větší velikost grafů

  .. image:: ../images/Screenshots_Skins.png
    :alt: Vzhledy v závislosti na orientaci telefonu

Přehled
===========================================================

* V sekci Přehled můžete nastavit preference pro domácí obrazovku.

  .. image:: ../images/Pref2020_OverviewII.png
    :alt: Předvolby > Přehled

Nechat obrazovku zapnutou
-----------------------------------------------------------
* Užitečné při předvádění. 
* Tento režim spotřebovává velké množství energie, takže je nutné připojit mobil do nabíječky.

Tlačítka
-----------------------------------------------------------
* Určete, která tlačítka se zobrazí ve spodní části domovské obrazovky.
* Podle vyznačených souvislostí na obrázcích můžete nadefinovat hodnoty trlačítek sacharidů a inzulínu pro snadnější zadávání v dialogových oknech.

  .. image:: ../images/Pref2020_OV_Buttons.png
    :alt: Nastavení > Tlačítka

Quick Wizard
-----------------------------------------------------------
* Pokud máte často svačinu nebo jídlo, můžete použít Rychlý bolus pro snadnější vkládání hodnot sacharidů a nastavení základních výpočtů.
* V nastavení si určíte, v jakém časovém období se má tlačítko zobrazit na domácí obrazovce - právě jedno tlačítko na jedno období.
* Když kliknete na tlačítko Rychlý bolus, AAPS provede výpočty a navrhne bolus pro zadané množství sacharidů s ohledem na aktuální hodnoty (glykémie nebo aktivního inzulínu, pokud je nastaven). 
* Navržený bolus musí být potvrzen, aby byl následně vydán.

  .. image:: ../images/Pref2020_OV_QuickWizard.png
    :alt: Předvolby > Tlačítko průvodce
  
Výchozí nastavení dočasných cílů
-----------------------------------------------------------
* `Dočasné cíle (DC) <../Usage/temptarget.html#temp-targets>`_ vám umožní nastavit na určitou dobu změněnou cílovou hodnotu glykémie.
* S nastavením základních hodnot DC můžete jednodušeji měnit své cílové hodnoty glykémie pro aktivity, blížící se jídlo atd.
* Dlouze stiskněte cíl v pravém horním rohu domácí obrazovky nebo použijte zaškrtávací políčka v dialogu Sacharidy po kliknutí na oranžové tlačítko Sacharidy na domovské obrazovce.

  .. image:: ../images/Pref2020_OV_DefaultTT.png
    :alt: Nastavení > Výchozí dočasné cíle
  
Standardní množství inzulinu pro Plnění/Doplňování
-----------------------------------------------------------
* If you want to fill tube or prime canula through AAPS you can do this through `actions tab <../Getting-Started/Screenshots.html#action-tab>`_.
* Přednastavené hodnoty se dají měnit v tomto dialogu.

Rozsah zobrazování
-----------------------------------------------------------
* Určuje, jaká část grafu na domácí obrazovce bude bude vaším cílovým rozsahem a bude podbarvena zeleně.

  .. image:: ../images/Pref2020_OV_Range2.png
    :alt: Předvolby > Rozsah vizualizace

Krátké názvy modulů
-----------------------------------------------------------
* Umožňuje vidět víc názvů obrazovek na obrazovce najednou. 
* Například název "OpenAPS AMA" bude zobrazen jako "OAPS" a "NS CLIENT" jako "NSCL" atd.

  .. image:: ../images/Pref2020_OV_Tabs.png
    :alt: Předvolby > Karty

Zobrazovat kolonku poznámky v dialozích ošetření
-----------------------------------------------------------
* Přidává možnost doplňovat k záznamům o ošetření krátkou textovou poznámku v dialozích, kde se zadávají (Bolusová kalkulačka, Sacharidy, Inzulín...) 

  .. image:: ../images/Pref2020_OV_Notes.png
    :alt: Předvolby > Poznámky v dialogových oknech ošetření
  
Stavové indikátory
-----------------------------------------------------------
Stavové indikátory zobrazují vizuální varování pro 
      
   * Stáří senzoru
   * Sensor battery level for certain smart readers (see [screenshots page](../Getting-Started/Screenshots#sensor-level-battery) for details).
   * Stáří inzulínu (doba použití aktuálního zásobníku)
   * Stav zásobníku (jednotky)
   * Stáří kanyly
   * Stáří baterie v pumpě
   * Úroveň nabití baterie pumpy (%)

* Pokud dojde k dosažení prahové hodnoty, zobrazí se hodnoty žlutě.
* Pokud dojde k dosažení kritické prahové hodnoty, hodnoty se zobrazí červeně.
* Ve verzích předcházejících AAPS 2.7 muselo být nastavení stavových indikátorů provedeno v nastavení Nightscoutu.

  .. image:: ../images/Pref2020_OV_StatusLights2.png
    :alt: Předvolby > Stavové indikátory

Rozšířená nastavení (přehled)
-----------------------------------------------------------

  .. image:: ../images/Pref2021_OV_Adv.png
    :alt: Předvolby > Stavové indikátory

Podat tuto část z výsledku kalkulace [%]
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Obecné nastavení umožňující zvolit, že bude vydána jen určitá část z vypočteného bolusu. 
* Použijete-li bolusovou kalkulačku, bude vydána pouze procentuální část (musí být mezi 10 a 100) z vypočítaného bolusu. 
* Procentuální hodnota je zobrazena v kalkulačce.

Poradce pro bolus
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* If you run `Bolus wizard <../Getting-Started/Screenshots.html#bolus-wizard>`_ and your glucose value is above 10 mmol (180 mg/dl) a correction bolus will be offered.
* If correction bolus is accepted **no carbs** will recorded.
* An alarm will be started when glucose value is in good level to start eating.
* You have to enter `Bolus wizard <../Getting-Started/Screenshots.html#bolus-wizard>`_ again and enter the amount of carbs you want to eat.

  .. image:: ../images/Home2021_BolusWizard_CorrectionOffer.png
    :alt: Bolus advisor message

Superbolus
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Volba pro povolení superbolusu v bolusové kalkulačce.
* `Superbolus <https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/>`_ se používá jako prevence proti prudkému růstu glykémie po jídle, a spočívá ve "vypůjčení" bazálního inzulínu z následujících 2 hodin.

Bezpečnostní omezení ošetření
===========================================================
Věk pacienta
-----------------------------------------------------------
* Bezpečnostní limity jsou nastaveny na základě věku, který jste zvolili v tomto nastavení. 
* Pokud začnete narážet na pevně nastavené limity (jako například na maximální bolus), je čas posunout se o stupeň výš. 
* Nastavení vyššího věku než je ve skutečnosti může vést k předávkování inzulínem při chybném nastavení množství inzulínu (například vynecháním desetinné čárky v dialogu). 
* Chcete-li zjistit, jaké máte pevně nastavené bezpečnostní limity, podívejte se na popis Vámi používaného algoritmu `na této stránce <../Usage/Open-APS-features.html>`_.

Maximální povolený bolus [U]
-----------------------------------------------------------
* Určuje maximální velikost bolusu, jakou může AAPS poslat najednou. 
* Nastavení slouží jako bezpečnostní limit pro zabránění odeslání příliš velkého bolusu vzhledem k množství zadaných sacharidů, nebo k ohlídání chyby uživatele. 
* Doporučuje se nastavit ho na rozumnou hodnotu zhruba odpovídající maximálnímu bolusu, který jste kdy poslali na jídlo. 
* Toto omezení se vztahuje i na výsledky bolusové kalkulačky.

Maximální povolené sacharidy [g]
-----------------------------------------------------------
* Určuje maximální množství sacharidů, se kterým může bolusový kalkulátor AAPS počítat.
* Nastavení slouží jako bezpečnostní limit pro zabránění odeslání příliš velkého bolusu vzhledem k množství zadaných sacharidů, nebo k ohlídání chyby uživatele. 
* Je doporučeno nastavit limit na nějakou rozumnou hodnotu, která odpovídá maximálnímu množství sacharidů, které jste kdy v jídle snědli.

Smyčka
===========================================================
Typ smyčky
-----------------------------------------------------------
* Přepíná mezi uzavřenou, otevřenou smyčkou i pozastavením při nízké glykémii (LGS)
* **Otevřená smyčka** znamená, že návrhy dočasného bazálu jsou provedeny na základě vašich dat, a zobrazí se jako oznámení. Po manuálním potvrzení bude příkaz pro podání inzulinu odeslán do pumpy. Pouze v případě že máte nastavenou virtuální pumpu je nutné inzulín aplikovat ručně.
* **Uzavřená smyčka** znamená, že dočasné bazály jsou automaticky, bez jakéhokoliv potvrzení z vaší strany, posílány přímo do pumpy.  
* **Low glucose suspend** gives you the possibility to enter into Low Glucose Suspend without the need for the reverting an objective.

Minimální změna pro výzvu [%]
-----------------------------------------------------------
* Při použití otevřené smyčky budete dostávat oznámení pokaždé, když AAPS doporučí úpravu bazální dávky. 
* Ke snížení počtu oznámení můžete zadat buď širší rozsah cílové glykemie, nebo vyšší procento minimální změny pro výzvu.
* Toto definuje relativní změnu, která je požadována pro spuštění oznámení.

Advanced Meal Assist (AMA) or Super Micro Bolus (SMB)
===========================================================
Depending on your settings in `config builder <../Configuration/Config-Builder.html>`_ you can choose between two algorithms:

* `Advanced meal assist (OpenAPS AMA) <../Usage/Open-APS-features.html#advanced-meal-assist-ama>`_ - state of the algorithm in 2017
* `Super Micro Bolus (OpenAPS SMB) <../Usage/Open-APS-features.html#super-micro-bolus-smb>`_ - most recent algorithm for advanced users

OpenAPS AMA settings
-----------------------------------------------------------
* Allows the system to high-temp more quickly after a meal bolus IF you enter carbs reliably. 
* More details about the settings and Autosens can be found in the `OpenAPS docs <http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html>`_.

Max. U/h, které lze nastavit pro dočas. bazál
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Exists as a safety limit to prevent AAPS from ever being capable of giving a dangerously high basal rate. 
* The value is measured in units per hour (U/h). 
* Doporučuje se nastavit toto na rozumnou hodnotu. A good recommendation is to take the **highest basal rate** in your profile and **multiply it by 4**. 
* For example, if the highest basal rate in your profile was 0.5 U/h you could multiply that by 4 to get a value of 2 U/h.
* See also `detailed feature description <../Usage/Open-APS-features.html#max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal>`_.

Maximální bazální IOB [U]
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Maximální hodnota dodatečného bazálního inzulínu (v jednotkách), o který může smyčka navýšit Váš normální bazál. 
* Jakmile je tato hodnota dosažena, AAPS zastaví přidávání dodatečného bazálu, dokud hodnota inzulínu v těle (IOB) opět neklesne pod tuto hodnotu. 
* This value **does not consider bolus IOB**, only basal.
* Tato hodnota je počítána a monitorována nezávisle na vašem normálním bazálu. V úvahu je brán pouze dodatečný bazální inzulín převyšující normální bazál.

When you begin looping, **it is advised to set Max Basal IOB to 0** for a period of time, while you are getting used to the system. Toto zabrání AndroidAPS v tom, aby přidal dodatečný bazální inzulín. Během této doby bude AndoidAPS pořád schopná omezit či vypnout Váš bazální inzulín, aby se pomohlo předejít hypoglykémii. To je důležitý krok pro:

* získání dostatečného času na to, abyste naučili AndroidAPS ovládat a vysledovat, jak funguje.
* perfektní vyladění nastavení Vašeho bazálního profilu a faktoru citlivosti na inzulín (ISF).
* zjištění, jak AndroidAPS omezuje Váš bazální inzulín, aby se předešlo hypoglykémii.

Když se na to už budete cítit, můžete dovolit systému, aby začal přidávat bazální inzulín, a to navýšením hodnoty maximálního množství bazálního inzulínu v těle. The recommended guideline for this is to take the **highest basal rate** in your profile and **multiply it by 3**. For example, if the highest basal rate in your profile was 0.5 U/h you could multiply that by 3 to get a value of 1.5 U/h.

* Začněte tedy s touto hodnotou, a postupem času ji opatrně navyšujte. 
* Toto jsou samozřejmě pouze návrhy; u každého člověka to je jiné. Možná zjistíte, že potřebujete méně nebo více, než je zde doporučeno. Vždy ale začněte opatrně, a přidávejte pomalu.

**Poznámka: Jako bezpečnostní prvek je u dospělého pacienta natvrdo nastaveno maximální bazální IOB na 7U.**

Autosens
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* `Autosens <../Usage/Open-APS-features.html#autosens>`_ looks at blood glucose deviations (positive/negative/neutral).
* It will try and figure out how sensitive/resistant you are based on these deviations and adjust basal rate and ISF based on these deviations.
* If you select "Autosens adjust target, too" the algorithm will also modify your glucose target.

Advanced settings (OpenAPS AMA)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Normally you do not have to change the settings in this dialogue!
* If you want to change them anyway make sure to read about details in `OpenAPS docs <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#>`_ and to understand what you are doing.

OpenAPS SMB settings
-----------------------------------------------------------
* In contrast to AMA, `SMB <../Usage/Open-APS-features.html#super-micro-bolus-smb>`_ does not use temporary basal rates to control glucose levels, but mainly small super micro boluses.
* You must have started `objective 10 <../Usage/Objectives.html#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb>`_ to use SMB.
* The first three settings are explained `above <./Configuration/Preferences.html#max-u-h-a-temp-basal-can-be-set-to>`_.
* Details on the different enable options are described in `OpenAPS feature section <../Usage/Open-APS-features.html#enable-smb>`_.
* *How frequently SMBs will be given in min* is a restriction for SMB to be delivered only every 4 min by default. This value prevents the system from issuing SMB too often (for example in case of a temp target being set). You should not change this setting unless you know exactly about consequences. 
* If 'Sensitivity raises target' or 'Resistance lowers target' is enabled `Autosens <../Usage/Open-APS-features.html#autosens>`_ will modify your glucose target according to your blood glucose deviations.
* If target is modified it will be displayed with a green background on your home screen.

  .. image:: ../images/Home2020_DynamicTargetAdjustment.png
    :alt: Target modified by autosens
  
Carb required notification
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* This feature is only available if SMB algorithm is selected.
* Eating of additional carbs will be suggested when the reference design detects that it requires carbs.
* In this case you will receive a notification which can be snoozed for 5, 15 or 30 minutes.
* Additionally the required carbs will be displayed in the COB section on your home screen.
* A threshold can  be defined - minimum amount of carbs needed to trigger notification. 
* Carb required notifications can be pushed to Nightscout if wished, in which case an announcement will be shown and broadcast.

  .. image:: ../images/Pref2020_CarbsRequired.png
    :alt: Display carbs required on home screen
  
Advanced settings (OpenAPS SMB)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Normally you do not have to change the settings in this dialogue!
* If you want to change them anyway make sure to read about details in `OpenAPS docs <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#>`_ and to understand what you are doing.

Nastavení absorpce sacharidů
===========================================================

  .. image:: ../images/Pref2020_Absorption.png
    :alt: Absorption settings

min_5m_carbimpact
-----------------------------------------------------------
* The algorithm uses BGI (blood glucose impact) to determine when carbs are absorbed. 
* The value is only used during gaps in CGM readings or when physical activity “uses up” all the blood glucose rise that would otherwise cause AAPS to decay COB. 
* At times when carb absorption can’t be dynamically worked out based on your bloods reactions it inserts a default decay to your carbs. V podstatě jde o bezpečnostní pojistku.
* To put it simply: The algorithm "knows" how your BGs *should* behave when affected by the current dose of insulin etc. 
* Whenever there is a positive deviation from the expected behaviour, some carbs are absorbed/decayed. Big change=many carbs etc. 
* The min_5m_carbimpact does define the default carb absorption impact per 5 minutes. For more details see `OpenAPS docs <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html?highlight=carbimpact#min-5m-carbimpact>`_.
* Standard value for AMA is 5, for SMB it's 8.
* The COB graph on the home screen indicates when min_5m_impact is being used by putting an orange circle at the top.

  .. image:: ../images/Pref2020_min_5m_carbimpact.png
    :alt: COB graph
  
Maximum meal absorption time
-----------------------------------------------------------
* Pokud často jíte jídla s vysokým obsahem tuků nebo bílkovin, budete si muset nastavit delší čas absorpce jídla.

Advanced settings - autosens ratio
-----------------------------------------------------------
* Define min. and max. `autosens <../Usage/Open-APS-features.html#autosens>`_ ratio.
* Normally standard values (max. 1.2 and min. 0.7) should not be changed.

Nastavení pumpy
===========================================================
Tyto volby se budou lišit v závislosti na tom, který ovladač inzulínové pumpy jste vybrali v konfiguračním programu ' Konfigurace <../Configuration/Config-Buil-Builder.html#pump> ` _.  Spárujte a nastavte svou pumpu podle pokynů pro jednotlivé pumpy:

* `DanaR <../Configuration/DanaR-Insulin-Pump.html>`_ 
* `DanaRS <../Configuration/DanaRS-Insulin-Pump.html>`_
* `Accu Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_
* `Accu Chek Insight <../Configuration/Accu-Chek-Insight-Pump.html>`_ 
* `Medtronic <../Configuration/MedtronicPump.html>`_

Používáte-li AndroidAPS pouze jako otevřenou smyčku, vyberte v nastavení Virtuální pumpu.

NSClient
===========================================================

  .. image:: ../images/Pref2020_NSClient.png
    :alt: NSClient

* Set your *Nightscout URL* (i.e. https://yourwebsitename.herokuapp.com) and the *API secret* (a 12 character password recorded in your Heroku variables).
* This enables data to be read and written between both the Nightscout website and AndroidAPS.  
* Pokud jste uvízli v cíli 1, prověřte možné překlepy.
* **Make sure that the URL is WITHOUT /api/v1/ at the end.**
* *Log app start to NS* will record a note in your Nightscout careportal entries every time the app is started.  The app should not be needing to start more than once a day; more frequently than this suggests a problem (i.e. battery optimization not disabled for AAPS). 
* If activated changes in `local profile <../Configuration/Config-Builder.html#local-profile-recommended>`_ are uploaded to your Nightscout site.

Nastavení připojení
-----------------------------------------------------------

  .. image:: ../images/ConfBuild_ConnectionSettings.png
    :alt: NSClient connection settings  
  
* Restrict Nightscout upload to Wi-Fi only or even to certain Wi-Fi SSIDs.
* If you want to use only a specific WiFi network you can enter its WiFi SSID. 
* Multiple SSIDs can be separated by semicolon. 
* Chcete-li smazat všechny SSID, nechte políčko prázdné.

Nastavení alarmů
-----------------------------------------------------------
* Alarm options allows you to select which default Nightscout alarms to use through the app.  
* For the alarms to sound you need to set the Urgent High, High, Low and Urgent Low alarm values in your `Heroku variables <http://www.nightscout.info/wiki/welcome/website-features#customalarms>`_. 
* They will only work whilst you have a connection to Nightscout and are intended for parent/carers. 
* If you have the CGM source on your phone (i.e. xDrip+ or Dexcom patched app) then use those alarms instead.

Advanced settings (NSClient)
-----------------------------------------------------------

  .. image:: ../images/Pref2020_NSClientAdv.png
    :alt: NS Client advanced settings

* Most options in advanced settings are self-explanatory.
* *Enable local broadcasts* will share your data to other apps on the phone such as xDrip+. 

  * Dexcom patched app does not broadcast directly to xDrip+. 
  * You need to `go through AAPS <../Configuration/Config-Builder.html#bg-source>`_ and enable local broadcast in AAPS to use xDrip+ alarms.
  
* *Always use basal absolute values* must be activated if you want to use Autotune properly. See `OpenAPS documentation <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/understanding-autotune.html>`_ for more details on Autotune.

SMS komunikátor
===========================================================
* Options will only be displayed if SMS communicator is selected in `Config Builder <../Configuration/Config-Builder.html#sms-communicator>`_.
* This setting allows remote control of the app by texting instructions to the patient's phone which the app will follow such as suspending loop, or bolusing.  
* Further information is described in `SMS Commands <../Children/SMS-Commands.html>`_.
* Additional safety is obtained through use of an authenticator app and additional PIN at token end.

Automatizace
===========================================================
Vyberte, jaká služba určování polohy se použije:

* Používat pasivní polohu: AAPS zjistí polohu pouze v případě, že ji budou požadovat ostatní aplikace
* Používat zjištění polohy podle sítě: Poloha podle vaší Wi-Fi sítě
* Use GPS location (Attention! May cause excessive battery drain!)

Místní výstrahy
===========================================================

  .. image:: ../images/Pref2020_LocalAlerts.png
    :alt: Local alerts

* Settings should be self-explanatory.

Data choices
===========================================================

  .. image:: ../images/Pref2020_DataChoice.png
    :alt: Data choices

* You can help develop AAPS further by sending crash reports to the developers.

Maintenance settings
===========================================================

  .. image:: ../images/Pref2020_Maintenance.png
    :alt: Maintenance settings

* Standard recipient of logs is logs@androidaps.org.
* If you select *Encrypt exported settings* these are encrypted with your `master password <../Configuration/Preferences.html#master-password>`_. In this case master password has to be entered each time settings are exported or imported.

Open Humans
===========================================================
* Můžete pomoci komunitě tím, že daruje vaše data do výzkumných projektů! Details are described on the `Open Humans page <../Configuration/OpenHumans.html>`_.
* In Preferences you can define when data shall be uploaded

   * only if connected to WiFi
   * only if charging
