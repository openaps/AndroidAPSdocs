# Konfigurations-Generator

Im Reiter “Konfigurations-Generator” (KONF) kannst du fast alle AAPS-Funktionen konfigurieren. Die Auswahlfelder links aktivieren die gewählte Funktion, die Auswahlfelder rechts (Augen-Symbol) machen den dazugehörigen Reiter im AAPS-Menü sichtbar oder unsichtbar. Erscheint bei einzelnen Optionen ein Zahnrädchen, kannst du weitere Einstellungen vornehmen.

**Erste Konfiguration:** Seit AAPS 2.0 führt dich ein Einrichtungsassistent durch die Einrichtung von AndroidAPS. Push 3-dots-menu on the upper right hand side of the screen and select 'Setup Wizard' to use it.

## Profil

Select the basal profile you wish to use:

* **Nightscout-Profil** Verwendet das von dir auf deiner Nightscout Seite gespeicherte Profil (https://[yournightscoutsiteaddress]/profile). Benutze den Profil Switch (im Reiter PROFIL das gewünschte Profil auswählen und Button "Aktiviere Profil" klicken) um das aktive Profil zu wechseln, falls du in Nightscout mehrere Profile angelegt hast. Das Profil wird dann an die Pumpe übertragen, damit die Basalzufuhr bei einem AAPS-Problem sicher gestellt ist.
* **Einfaches Profil** Profil mit nur einem Zeitblock (d. h. keine Basalratenänderung innerhalb eines Tages)
* **Lokales Profil** nutzt das Profil, das in der Pumpe manuell eingegeben wurde. Mehr dazu findest du in diesem Wiki unter [[Profile]].

## Insulin

Select the type of insulin curve you are using. Grundlegende Optionen von AndroidAPS sind bilinear: "Schnell wirkendes Insulin" für ein Insulin mit einer DIA (Duration of Insulin Action) von weniger als 5 Stunden und "Schnell wirkendes verlängertes Insulin" mit einer DIA von mehr als 5 Stunden. These curves will only vary based on the duration of the DIA. The Oref options 'Rapid-Acting Oref', Ultra-Rapid Oref' and 'Free-Peak Oref' are exponential and more information is listed in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves), the curves will vary based on the DIA and the time to peak. Du musst für diese Optionen zusätzliche Einstellungen vornehmen. Du kannst die Darstellung der Insulinkurve im Reiter Insulin (INS) anschauen, um zu verstehen, welche Kurve zu dir passt.

## BZ-Quelle

Wähle die Quelle für den Zuckerwert, die du verwendest - weitere Informationen zu den Einstellungen findest du unter [[BZ Quelle]].

## Pumpe

Select the pump you are using. Wenn den Open Loop verwenden willst, musst du hier "Virtuelle Pumpe" wählen. See [[DanaR Insulin Pump]], [[DanaRS Insulin Pump]] or [[Accu Chek Combo Pump]] pages for more setup information.

## Empfindlichkeitserkennung

Select the type of sensitivity detection. This will analyse historical data on the go and make adjustments if it recognizes that you are reacting more sensitively (or conversely, more resistant) to insulin than usual. Details über den Empfindlichkeitsalgorithmus von Oref0 findest Du in der [OpenAPS Dokumentation](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode). Du kannst die berechnete Insulinempfindlichkeit sehen, wenn du auf dem Homescreen “Sensitivität” auswählst und dann die weiße Linie anschaust. Du musst [Ziel 6](../Usage/Objectives) erreicht haben, um die Empfindlichkeitserkennung und Autosens verwenden zu können.

## APS

Select either OpenAPS MA (meal assist) or OpenAPS AMA (advanced meal assist). Weitere Details zu OpenAPS AMA findest du in der [OpenAPS Dokumentation](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). Einfach ausgedrückt profitierst du davon, dass das System nach einem Mahlzeiten-Bolus schneller mit hohen temporären Basalraten reagieren kann, wenn du die Kohlenhydrate zuverlässig eingibst. You can view the active detail of the chosen algorithm in the OpenAPS(OAPS) tab. Note you need to be in [Objective 7](../Usage/Objectives) in order to use OpenAPS AMA.

## Loop

If you wish to use open or closed looping you will need to enable this here. You can see the active request and success of enactment in the Loop tab.

## Beschränkungen

If you view the Objectives (Obj) tab, you can see more information about how far you have progressed and what actions you still need to complete. See [[Objectives]] page for more information.

## Behandlungen

If you view the Treatments (Treat) tab, you can see the treatments that have been uploaded to nightscout. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the Careportal (CP) tab.

## Allgemein

* **Actions** Reiter: Ermöglicht den Profil Switch (siehe [[Profiles]] für weitere Setup Infos) und die Einrichtung von Temp Targets. Nutzer der DanaR/RS oder Combo können außerdem eine manuelle temporären Basalrate (TBR) setzen oder die Kanüle füllen.
* **Careportal** Erfassung spezifischer Behandlungseinträge einschließlich Notizen und Anzeige des aktuellen Alters von CGM-Sensor, Insulinreservoir, Kanüle und Pumpenbatterie.
* **SMS-Kommunikator** Erlaubt Betreuern die Fernsteuerung einiger AndroidAPS Funktionen via SMS. Weitere Informationen zum Setup findest Du auf der Seite [[SMS-Befehle]].
* **Essen** Anzeige und Nutzung der Nightscout Nahrungsmittel-Datenbank. Siehe [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) für weitere Setup Informationen oder rufe deine Datenbank über http://[yournightscoutsiteaddress]/food auf.
* **Wear** Anzeige der AndroidAPS Informationen auf und Steuerung von AAPS über eine Android Wear Smartwatch. Weitere Informationen zum Setup findest Du unter [[Smartwatch-Integration]].
* **xDrip Statusline (Smartwatch)** Loop-Informationen im xDrip+ Ziffernblatt anzeigen
* **Laufende Benachrichtigungen** Zeigt im Dropdown- und Sperrbildschirm deines Smartphones eine Dauer-Benachrichtigung an mit einer kurzen Übersicht darüber, was der Loop derzeit tut.
* **NS-Client** Synchronisierung Ihrer AndroidAPS-Daten mit Nightscout einrichten