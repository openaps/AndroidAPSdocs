Einstellungen
***********************************************************
* Öffne die Einstellungen durch einen Klick auf das 3-Punkte-Menü rechts oben auf dem Startbildschirm.

  .. image:: ../images/Pref2020_Open.png
    :alt: Einstellungen öffnen

* Du kannst direkt zu den Einstellungen für einen bestimmten Tab (z.B. Pumpen-Tab) springen, indem Du diesen Tab öffnest und auf Plugin-Einstellungen klickst.

  .. image:: ../images/Pref2020_OpenPlugin.png
    :alt: Plugin-Einstellungen öffnen
    
* Untermenüs können geöffnet werden, indem Du auf das Dreieck unter dem Untermenü-Titel klicken.

  .. image:: ../images/Pref2020_Submenu.png
    :alt: Untermenü öffnen

Allgemein
===========================================================

**Einheiten**

* Stelle die Einheiten auf mmol/l oder mg/dl je nach deiner Vorliebe ein.

**Sprache**

* Neue Option, um die Standardsprache des Smartphones zu verwenden (empfohlen). 
* Falls Du AAPS in einer anderen Sprache als der Standardsprache deines Smartphones nutzen möchtest, kannst Du zwischen vielen verschiedenen Sprachen wählen.
* Falls sich die Systemsprache deines Smartphones und die ausgewählte Sprache für AAPS unterscheiden, kann dies manchmal zu einem Sprachmix führen. Dies ist auf ein Android-Problem zurückzuführen, sodass das Überschreiben der Standardsprache einer App manchmal nicht korrekt funktioniert.

  .. image:: ../images/Pref2020_General.png
    :alt: Einstellungen > Allgemein

**Name des Patienten**

Kann verwendet werden, wenn Du zwischen verschiedenen Installationen unterscheiden musst (z.B. zwei Kinder mit Typ 1 in Deiner Familie).

Schutz
-----------------------------------------------------------
Master-Passwort
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Die `exportierten Einstellungen <../Usage/ExportImportSettings.html>`_ sind ab Version 2.7 verschlüsselt.

   **Biometric protection does not work on OnePlus phones. This is a know issue of OnePlus.**

* Öffne die Einstellungen (Drei-Punkte-Menü oben rechts)
* Klicke das Dreieck neben "Allgemein".
* Klicke auf "Master-Passwort".
* Gib ein Passwort ein, bestätige es und klicke auf OK.

  .. image:: ../images/MasterPW.png
    :alt: Master-Password festlegen
  
Schutz der Einstellungen
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Protect your settings with a password or phone's biometric authentication (i.e. `child is using AAPS <../Children/Children.html>`_).
* Custom password should be used if you want to use master password just for securing `exported settings <../Usage/ExportImportSettings.html>`_.
* If you are using a custom password click on line "Settings password" to set password as described `above <../Configuration/Preferences2020.html#master-password>`_.

  .. image:: ../images/Pref2020_Protection.png
    :alt: Protection

Schutz der App
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* If app is protected you must enter password or use phone's biometric authentication to open AAPS.
* App will shut down immediately if wrong password is entered - but still run in the background if it was previously opened successfully.

Bolus-Schutz
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Bolus protection might be useful if AAPS is used by a small child and you `bolus via SMS <../Children/SMS-Commands.html>`_.
* In the example below you see the prompt for biometric protection. If biometric authentication does not work, click in the space above the white prompt and enter master password.

  .. image:: ../images/Pref2020_PW.png
    :alt: Prompt biometric protection

Erscheinungsbild
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* You can choose from three types of skins:

  .. image:: ../images/Pref2020_Skin.png
    :alt: Select skin

* Difference depend of phone's display orientation

Portrait orientation
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
* **Original Skin** and **Buttons are always displayed on bottom of screen** are identical
* **Large Display** has an increased size of all graphs compare to other skins

Landscape orientation
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
* Using **Original Skin** and **Large Display**, you have to scroll down to see buttons at the bottom of the screen
* **Large Display** has an increased size of all graphs compare to other skins

  .. image:: ../images/Screenshots_Skins.png
    :alt: Skins depending on phone's display orientation

Übersicht
===========================================================

* In overview section you can define preferences for home screen.

  .. image:: ../images/Pref2020_OverviewII.png
    :alt: Preferences > Overview

Bildschirm aktiv lassen
-----------------------------------------------------------
* Useful while giving a presentation. 
* Dies wird ziemlich viel Energie verbrauchen, daher ist es ratsam, Dein Telefon an ein Ladekabel anzuschließen.

Schaltflächen
-----------------------------------------------------------
* Define which buttons are visible on the bottom of your home screen.
* With the increment figure you can define amount for the three buttons in carb and insulin dialogue for easy entry.

  .. image:: ../images/Pref2020_OV_Buttons.png
    :alt: Preferences > Buttons

Quick Wizard
-----------------------------------------------------------
* If you have a frequent snack or meal, you can use the quick wizard button to easily enter amount of carbs and set calculation basics.
* In setup you define during which time period the button will be visible on your home screen - just one button per period.
* If you click the quick wizard button AAPS will calculate and propose a bolus for those carbs based on your current ratios (considering blood glucose value or insulin on board if set up). 
* The proposal has to be confirmed before insulin is delivered.

  .. image:: ../images/Pref2020_OV_QuickWizard.png
    :alt: Preferences > Quick Wizard Button
  
Default temp targets
-----------------------------------------------------------
* `Temp targets (TT) <../Usage/temptarget.html#temp-targets>`_ allow you to define change your blood glucose target for a certain time period.
* With setting of default TT you can easily change your target for activity, eating soon etc.
* Press long on your target in the top right corner on the home screen or use the shortcuts in the orange “Carbs” button at the bottom.

  .. image:: ../images/Pref2020_OV_DefaultTT.png
    :alt: Preferences > Default temp targets
  
Füll-/Vorfüll-Standardmengen
-----------------------------------------------------------
* If you want to fill tube or prime canula through AAPS you can do this through `actions tab <../Usage/CPbefore26.html#pump>`_.
* Pre-set values can be defined in this dialogue.

Range for visualization
-----------------------------------------------------------
* Define which part of the graph on the home screen shall be you target range and be filled with green background.

  .. image:: ../images/Pref2020_OV_Range2.png
    :alt: Preferences > Range for visualization

Kurze Tab-Überschriften
-----------------------------------------------------------
* See more tab titles on screen. 
* For example the 'OpenAPS AMA' tab becomes 'OAPS', 'OBJECTIVES' becomes 'OBJ' etc.

  .. image:: ../images/Pref2020_OV_Tabs.png
    :alt: Preferences > Tabs

Show notes field in treatments dialogs
-----------------------------------------------------------
* Gives you the option to add short text notes to your treatments (bolus wizard, carbs, insulin...) 

  .. image:: ../images/Pref2020_OV_Notes.png
    :alt: Preferences > Notes in treatment dialogs
  
Statusanzeige
-----------------------------------------------------------
* Status lights give a visual warning for 
      
   * Cannula age
   * Insulin age (days reservoir is used)
   * Reservoir level (units)
   * Sensor age
   * Battery age
   * Battery level (%)

* If threshold warning is exceeded, values will be shown in yellow.
* If threshold critical is exceeded, values will be shown in red.
* In versions prior to AAPS 2.7 settings for status lights had to be made in Nightscout settings.

  .. image:: ../images/Pref2020_OV_StatusLights2.png
    :alt: Preferences > Status Lights

Erweiterte Einstellungen
-----------------------------------------------------------
Deliver this part of bolus wizard result
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Systemweite Einstellung, dass nur ein Teil des im Bolus Kalkulator berechneten Insulins abgegeben wird. 
* Nur der eingestellte prozentuale Anteil (muss zwischen 10 und 100 liegen) wird abgegeben. 
* Der Prozentsatz wird auch im Bolus Kalkulator angezeigt.

Superbolus
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Option to enable superbolus in bolus wizard.
* `Superbolus <https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/>`_ is a concept to "borrow" some insulin from basal rate in the next two hours to prevent spikes.

Treatment safety
===========================================================
Alter des Patienten
-----------------------------------------------------------
* Safety limits are set based on the age you select in this setting. 
* If you start hitting these hard limits (like max bolus) it's time to move one step up. 
* It's a bad idea to select higher then real age because it can lead to overdosing by entering the wrong value in insulin dialog (by skipping the decimal dot, for example). 
* If you want to know the actual numbers for these hard-coded safety limits, scroll to the algorithm feature you are using on `this page <../Usage/Open-APS-features.html>`_.

Maximal erlaubert Bolus [U]
-----------------------------------------------------------
* Defines maximum amount of bolus insulin that AAPS is allowed to deliver at once. 
* Diese Einstellung ist eine Sicherheitsgrenze, um die Abgabe eines massiven Bolus aufgrund einer versehentlichen Eingabe oder eines Benutzerfehlers zu verhinden. 
* Es wird empfohlen, das auf eine vernünftige Menge zu setzen, die ungefähr der maximalen Abgabemenge von Bolus Insulin entspricht, das Du für eine Mahlzeitenkorrektur brauchst. 
* This restriction is also applied to the results of the bolus calculator.

Maximal erlaubte Kohlenhydrate [g]
-----------------------------------------------------------
* Defines the maximum amount of carbs that AAPS bolus calculator is allowed to dose for.
* Diese Einstellung ist eine Sicherheitsgrenze, um die Abgabe eines massiven Bolus aufgrund einer versehentlichen Eingabe oder eines Benutzerfehlers zu verhinden. 
* Es wird empfohlen, das auf eine vernünftige Menge zu setzen, die ungefähr der maximalen Menge an Kohlenhydraten entspricht, die du vermutlich jemals für eine Mahlzeit brauchen wirst.

Loop
===========================================================
APS mode
-----------------------------------------------------------
* Toggle between open and closed looping as well as low glucose suspend (LGS)
* **Open looping** means TBR suggestions are made based on your data and appear as a notification, but you must manually choose to accept them and manually enter them into your pump.  
* **Closed looping** means TBR suggestions are automatically sent to your pump without confirmation or input from you.  
* **Low glucose suspend** gives you the possibility to enter into Low Glucose Suspend without the need for the reverting an objective.

Minimaler Wert zur Anfrage einer Änderung [%]
-----------------------------------------------------------
* Im Open Loop erhälst Du jedes Mal eine Benachrichtigung, wenn AAPS empfiehlt, die Basalrate anzupassen. 
* To reduce number of notifications you can either use a wider BG target range or increase percentage of the minimal request rate.
* Diese definiert, wie hoch die relative Änderung sein muss, damit eine Benachrichtigung erscheint.

Advanced Meal Assist (AMA) or Super Micro Bolus (SMB)
===========================================================
Depending on your settings in `config builder <../Configuration/Config-Builder.html>`_ you can choose between two algorithms:

* `Advanced meal assist (OpenAPS AMA) <../Usage/Open-APS-features.html#advanced-meal-assist-ama>`_ - state of the algorithm in 2017
* `Super Micro Bolus (OpenAPS SMB) <../Usage/Open-APS-features.html#super-micro-bolus-smb>`_ - most recent algorithm for advanced users

OpenAPS AMA settings
-----------------------------------------------------------
* Allows the system to high-temp more quickly after a meal bolus IF you enter carbs reliably. 
* More details about the settings and Autosens can be found in the `OpenAPS docs <http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html>`_.

Maximale IE/h, die als TBR gesetzt werden können
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Exists as a safety limit to prevent AAPS from ever being capable of giving a dangerously high basal rate. 
* The value is measured in units per hour (U/h). 
* Es wird empfohlen, hier etwas vernünftiges einzugeben. A good recommendation is to take the **highest basal rate** in your profile and **multiply it by 4**. 
* For example, if the highest basal rate in your profile was 0.5 U/h you could multiply that by 4 to get a value of 2 U/h.
* See also `detailed feature description <../Usage/Open-APS-features.html#max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal>`_.

Maximales Basal-IOB, das OpenAPS abgeben darf [U]
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Menge an zusätzlichem Basalinsulin (in Einheiten), das deinem Körper zusätzlich zu deiner normalen Basalrate zugeführt werden darf. 
* Wenn dieser Wert erreicht wird, wird AAPS aufhören, zusätzliches Basalinsulin abzugeben, bis dein Basalinsulin On Board (IOB) wieder unterhalb dieses Wertes liegt. 
* This value **does not consider bolus IOB**, only basal.
* Dieser Wert wird unabhängig von deiner normalen Basalrate berechnet und überwacht. Es wird lediglich das zusätzliche Basalinsulin zu der normalen Basalrate berücksichtigt.

When you begin looping, **it is advised to set Max Basal IOB to 0** for a period of time, while you are getting used to the system. Das verhindert, dass AAPS dir generell zusätzliches Basal-Insulin verabreicht. Während dieser Zeit wird AAPS trotzdem in der Lage sein, dein Basalinsulin abzuschalten, um Hypoglykämien zu verhinden. Das ist ein wichtiger Schritt, um:

* Zeit zu haben, sich auf sichere Art mit der Verwendung des AAPS systems vertraut zu machen und zu überwachen, wie es funktioniert.
* Take the opportunity to perfect your basal profile and Insulin Sensitivity Factor (ISF).
* zu sehen, wie AAPS die Basalrate einschränkt, um Hypoglykämien zu verhindern.

Wenn du dich damit gut fühlst, kannst du dem System erlauben, dir zusätzliches Basalinsulin zu geben, indem du den Wert Max-Basal IOB erhöhst. The recommended guideline for this is to take the **highest basal rate** in your profile and **multiply it by 3**. For example, if the highest basal rate in your profile was 0.5 U/h you could multiply that by 3 to get a value of 1.5 U.

* Du kannst konservativ mit diesem Wert starten und ihn im Laufe der Zeit langsam erhöhen. 
* Das sind aber nur Richtlinien; jeder Körper ist anders. Es kann durchaus sein, dass du mehr oder weniger benötigst als hier empfohlen wurde, aber beginne dennoch konservativ und passe es langsam an.

**Hinweis: Aus Sicherheitsgründen ist es nicht möglich, den Wert Max-Basal IOB bei höher als 7 IE festzulegen.**

Autosens
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* `Autosens <../Usage/Open-APS-features.html#autosens>`_ looks at blood glucose deviations (positive/negative/neutral).
* It will try and figure out how sensitive/resistant you are based on these deviations and adjust basal rate and ISF based on these deviations.
* If you select "Autosens adjust target, too" the algorithm will also modify your glucose target.

Erweiterte Einstellungen
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Normally you do not have to change the settings in this dialogue!
* If you want to change them anyway make sure to read about details in `OpenAPS docs <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#>`_ and to understand what you are doing.

OpenAPS SMB settings
-----------------------------------------------------------
* In contrast to AMA, `SMB <../Usage/Open-APS-features.html#super-micro-bolus-smb>`_ does not use temporary basal rates to control glucose levels, but mainly small super micro boluses.
* You must have started `objective 10 <../Usage/Objectives.html#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb>`_ to use SMB.
* The first three settings are explained `above <./Configuration/Preferences2020.html#max-u-h-a-temp-basal-can-be-set-to>`_.
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
  
Erweiterte Einstellungen
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Normally you do not have to change the settings in this dialogue!
* If you want to change them anyway make sure to read about details in `OpenAPS docs <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#>`_ and to understand what you are doing.

Resorptions-Einstellungen
===========================================================

  .. image:: ../images/Pref2020_Absorption.png
    :alt: Absorption settings

min_5m_carbimpact
-----------------------------------------------------------
* The algorithm uses BGI (blood glucose impact) to determine when carbs are absorbed. 
* The value is only used during gaps in CGM readings or when physical activity “uses up” all the blood glucose rise that would otherwise cause AAPS to decay COB. 
* At times when carb absorption can’t be dynamically worked out based on your bloods reactions it inserts a default decay to your carbs. Im Prinzip ist es eine Notlauffunktion.
* To put it simply: The algorithm "knows" how your BGs *should* behave when affected by the current dose of insulin etc. 
* Whenever there is a positive deviation from the expected behaviour, some carbs are absorbed/decayed. Big change=many carbs etc. 
* The min_5m_carbimpact does define the default carb absorption impact per 5 minutes. For more details see `OpenAPS docs <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html?highlight=carbimpact#min-5m-carbimpact>`_.
* Standard value for AMA is 5, for SMB it's 8.
* The COB graph on the home screen indicates when min_5m_impact is being used by putting an orange circle at the top.

  .. image:: ../images/Pref2020_min_5m_carbimpact.png
    :alt: COB graph
  
Maximum meal absorption time
-----------------------------------------------------------
* Wenn du oft Mahlzeiten mit viel Fett oder Eiweiss zu dir nimmst, wirst du die Resorptionszeit für das Essen erhöhen müssen.

Advanced settings - autosens ratio
-----------------------------------------------------------
* Define min. and max. `autosens <../Usage/Open-APS-features.html#autosens>`_ ratio.
* Normally standard values (max. 1.2 and min. 0.7) should not be changed.

Pumpen-Einstellungen
===========================================================
The options here will vary depending on which pump driver you have selected in `Config Builder <../Configuration/Config-Builder.html#pump>`_.  Verbinde Deine Pumpe und richte sie entsprechend der pumpenspezifischen Beschreibung ein:

* `DanaR Insulin Pump <../Configuration/DanaR-Insulin-Pump.html>`_ 
* `DanaRS Insulin Pump <../Configuration/DanaRS-Insulin-Pump.html>`_
* `Accu Chek Combo Pump <../Configuration/Accu-Chek-Combo-Pump.html>`_
* `Accu Chek Insight Pump <../Configuration/Accu-Chek-Insight-Pump.html>`_ 
* `Medtronic Pump <../Configuration/MedtronicPump.html>`_

Stelle sicher, dass du die virtuelle Pumpe im Config-Generator ausgewählt hast, wenn du AndroidAPS als Open Loop betreibst.

Nightscout-Client
===========================================================

  .. image:: ../images/Pref2020_NSClient.png
    :alt: NSClient

* Set your *Nightscout URL* (i.e. https://yourwebsitename.herokuapp.com) and the *API secret* (a 12 character password recorded in your Heroku variables).
* This enables data to be read and written between both the Nightscout website and AndroidAPS.  
* Überprüfe die Eingaben auf Tippfehler, wenn du bei Ziel 1 hängen bleibst.
* **Make sure that the URL is WITHOUT /api/v1/ at the end.**
* *Log app start to NS* will record a note in your Nightscout careportal entries every time the app is started.  The app should not be needing to start more than once a day; more frequently than this suggests a problem (i.e. battery optimization not disabled for AAPS). 
* If activated changes in `local profile <../Configuration/Config-Builder.html#local-profile-recommended>`_ are uploaded to your Nightscout site.

Verbindungseinstellungen
-----------------------------------------------------------

  .. image:: ../images/ConfBuild_ConnectionSettings.png
    :alt: NSClient connection settings  
  
* Restrict Nightscout upload to Wi-Fi only or even to certain Wi-Fi SSIDs.
* If you want to use only a specific WiFi network you can enter its WiFi SSID. 
* Multiple SSIDs can be separated by semicolon. 
* Gib zum Löschen aller SSIDs ein Leerzeichen in das Feld ein.

Alarm-Optionen
-----------------------------------------------------------
* Alarm options allows you to select which default Nightscout alarms to use through the app.  
* For the alarms to sound you need to set the Urgent High, High, Low and Urgent Low alarm values in your `Heroku variables <http://www.nightscout.info/wiki/welcome/website-features#customalarms>`_. 
* They will only work whilst you have a connection to Nightscout and are intended for parent/carers. 
* If you have the CGM source on your phone (i.e. xDrip+ or Dexcom patched app) then use those alarms instead.

Erweiterte Einstellungen
-----------------------------------------------------------

  .. image:: ../images/Pref2020_NSClientAdv.png
    :alt: NS Client advanced settings

* Most options in advanced settings are self-explanatory.
* *Enable local broadcasts* will share your data to other apps on the phone such as xDrip+. 

  * Dexcom patched app does not broadcast directly to xDrip+. 
  * You need to `go through AAPS <../Configuration/Config-Builder.html#bg-source>`_ and enable local broadcast in AAPS to use xDrip+ alarms.
  
* *Always use basal absolute values* must be activated if you want to use Autotune properly. See `OpenAPS documentation <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/understanding-autotune.html>`_ for more details on Autotune.

SMS Kommunikator
===========================================================
* Options will only be displayed if SMS communicator is selected in `Config Builder <../Configuration/Config-Builder.html#sms-communicator>`_.
* This setting allows remote control of the app by texting instructions to the patient's phone which the app will follow such as suspending loop, or bolusing.  
* Further information is described in `SMS Commands <../Children/SMS-Commands.html>`_.
* Additional safety is obtained through use of an authenticator app and additional PIN at token end.

Automatisierung
===========================================================
Select which location service shall be used:

* Passiver Standort: AAPS nutzt nur die Standort, die von andere Apps angefordert werden.
* Use network location: Location of your Wi-Fi
* GPS-Standort (Achtung! Kann zu übermäßigen Akkuverbrauch führen!)

Lokale Alarme
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
