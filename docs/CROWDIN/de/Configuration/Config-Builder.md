# Konfigurations-Generator

Im Reiter “Konfigurations-Generator” (KONF) kannst du fast alle AAPS-Funktionen konfigurieren. Die Auswahlfelder links aktivieren die gewählte Funktion, die Auswahlfelder rechts (Augen-Symbol) machen den dazugehörigen Reiter im AAPS-Menü sichtbar oder unsichtbar. Erscheint bei einzelnen Optionen ein Zahnrädchen, kannst du weitere Einstellungen vornehmen.

## Profil

Hier kannst du auswählen, von welcher Quelle AAPS dein Therapie-Profil mit den Basalraten, ISF und IC abrufen soll.

* **Nightscout-Profil** Verwendet das von dir auf deiner Nightscout Seite gespeicherte Profil (https://[yournightscoutsiteaddress]/profile). Benutze den Profil Switch (im Reiter PROFIL das gewünschte Profil auswählen und Button "Aktiviere Profil" klicken) um das aktive Profil zu wechseln, falls du in Nightscout mehrere Profile angelegt hast. Das Profil wird dann an die Pumpe übertragen, damit die Basalzufuhr bei einem AAPS-Problem sicher gestellt ist.
* **Simple Profile** profile with just one time block (i.e. no basal rate changes during the day)
* **Lokales Profil** Nutzt das Profil, das in der Pumpe manuell erfasst wurde. For both DanaR/RS and Combo pumps this only works with the pump Profile A respectively 1.
* **Circadian Prozentsatz Profil** Dieses Feature ist nun im Profile Switch enthalten und wurde ersetzt. D musst dieses nicht mehr auswählen. Mehr dazu findest du in diesem Wiki unter Profile.

## Insulin

Hier musst du auswählen, welchen Insulintyp du verwendest. AndroidAPS unterstützt bilinear "schnell wirkende Insuline" mit DIA (Insulinwirkdauer) von weniger als 5 Stunden und "schnell wirkende Insuline verlängert" mit DIA von mehr als 5 Stunden. Diese Kurven unterscheiden sich nur in der Dauer des DIA. Die Oref Optionen 'Rapid-Acting Oref', Ultra-Rapid Oref' und 'Free-Peak Oref' sind exponentiell. Mehr Informationen dazu finden sich in den [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves). Diese Kurven variieren basierend auf der DIA und dem zeitlichen Abstand zum Wirkmaximum. Du musst für diese Profile weitere Informationen eingeben. Schaue dir die Graphen der Insulinkurven auf dem Reiter Insulin (INS) an um besser zu verstehen, welche zu dir passt.

## BZ-Quelle

Hier kannst du auswählen, aus welcher Quelle AAPS die BZ-Werte empfangen soll. Weitere Infroamtionen findest du auf der Seite [[BZ-Quelle]].

## Pumpe

Wähle die von dir genutzte Pumpe. Wenn du im Open Loop arbeiten willst, wähle "Virtuelle Pumpe." Auf den pumpenspezifischen Seiten [[DanaR]], [[DanaRS]] und [[Accu Chek Combo]] findest du weitere Informationen zur Einrichtung.

## Empfindlichkeitserkennung

Hier kannst du auswählen, nach welchem Algorythmus AAPS die Insulinempfindlichkeit berechnen soll. Bei der Empfindlichkeitserkennung werden historische Daten "on the go" analysiert und Anpassungen vorgenommen, falls der Algorithmus feststellt, dass du sensibler oder weniger empfindlich auf das Insulin reagierst als üblich. Details zum Sensitivity Oref0 Algorithmus findest du in den [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode). Die berechnete Insulinempfindlichkeit kannst du verfolgen, indem du auf der Startseite im Auswahlmenü der angezeigten Kurven “Sensitivität” auswählst. Die weiße Linie zeigt dir das graphisch an. Die Empfindlichkeitserkennung ist erst freigeschaltet, wenn du [Ziel (objective) 6](../Usage/Objectives) erreicht hast.

## APS

Wähle entweder OpenAPS MA (meal assist - Mahlzeiten-Assistent) oder OpenAPS AMA (advanced meal assist - erweiterter Mahlzeiten Assistent). Weitere Details zu OpenAPS AMA findest du in den [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). Einfach ausgedrückt profitierst du davon, dass das System nach einem Mahlzeiten-Bolus schneller reagieren kann wenn du die Kohlenhydrate zuverlässig eingibst. Die Details zum ausgewählten Algorithmus findest du im Reiter OpenAPS (OPAS). Du musst im [Ziel (objective) 7](../Usage/Objectives) sein um OpenAPS AMA nutzen zu können.

## Loop

Hier kannst du einstellen, ob du AAPS automatische Regelungen erlauben willst oder nicht. Im Reiter LOOP werden die Aktivitäten und Erfolge des Loops angezeigt.

## Beschränkungen

Auf dem Reiter Ziele (ZIEL) kannst du deinen Fortschritt verfolgen und sehen, welche Meilensteine noch vor dir liegen. Weitere Informationen findest Du auf der Seite [[Beschränkungen (objectives)]].

## Behandlungen

Der Reiter Behandlungen (BEH) zeigt dir die zu Nightscout hochgeladenen Behandlungen. Falls du einen Eintrag editieren oder löschen willst - z.B. weil du weniger Kohlenhydrate gegessen hast als erwartet) - wähle 'Löschen' und trage den neuen Wert über das Careportal (CP) ein. Denke daran, ggf. die Zeit anzupassen.

## Allgemein

* **Actions** Reiter: Ermöglicht den Profil Switch (siehe [[Profiles]] für weitere Setup Infos) und die Einrichtung von Temp Targets. Nutzer der DanaR/RS oder Combo können außerdem eine manuelle temporären Basalrate (TBR) setzen oder die Kanüle füllen.
* **Careportal** Erfassung spezifischer Behandlungseinträge einschließlich Notizen und Anzeige des aktuellen Alters von CGM-Sensor, Insulinreservoir, Kanüle und Pumpenbatterie.
* **SMS-Kommunikator** Erlaubt Betreuern die Fernsteuerung einiger AndroidAPS Funktionen via SMS. Weitere Informationen zum Setup findest Du auf der Seite [[SMS-Befehle]].
* **Essen** Anzeige und Nutzung der Nightscout Nahrungsmittel-Datenbank. Siehe [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) für weitere Setup Informationen oder rufe deine Datenbank über http://[yournightscoutsiteaddress]/food auf.
* **Wear** Anzeige der AndroidAPS Informationen auf und Steuerung von AAPS über eine Android Wear Smartwatch. Weitere Informationen zum Setup findest Du unter [[Smartwatch-Integration]].
* **xDrip Statusline (watch)** Display loop information on your xDrip+ watchface
* **Laufende Benachrichtigungen** Zeigt im Dropdown- und Sperrbildschirm deines Smartphones eine Dauer-Benachrichtigung an mit einer kurzen Übersicht darüber, was der Loop derzeit tut.
* **NS Client** Setup sync of your AndroidAPS data with Nightscout