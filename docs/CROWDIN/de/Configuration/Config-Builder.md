# Konfigurations-Generator

Im Reiter “Konfigurations-Generator” (KONF) kannst du fast alle AAPS-Funktionen konfigurieren. Die Auswahlfelder links aktivieren die gewählte Funktion, die Auswahlfelder rechts (Augen-Symbol) machen den dazugehörigen Reiter im AAPS-Menü sichtbar oder unsichtbar. Erscheint bei einzelnen Optionen ein Zahnrädchen, kannst du weitere Einstellungen vornehmen.

**Erste Konfiguration:** Seit AAPS 2.0 führt dich ein Einrichtungsassistent durch die Einrichtung von AndroidAPS. Drücke das 3-Punkte-Menü in der rechten oberen Ecke des Bildschirms und wähle "Einrichtungsassistent", um ihn zu benutzen.

## Profil

Wähle das Basal-Profil aus, das du benutzen möchtest:

* **Nightscout-Profil** Verwendet das von dir auf deiner Nightscout Seite gespeicherte Profil (https://[yournightscoutsiteaddress]/profile). Benutze den Profil Switch (im Reiter PROFIL das gewünschte Profil auswählen und Button "Aktiviere Profil" klicken) um das aktive Profil zu wechseln, falls du in Nightscout mehrere Profile angelegt hast. Das Profil wird dann an die Pumpe übertragen, damit die Basalzufuhr bei einem AAPS-Problem sicher gestellt ist.
* **Einfaches Profil** Profil mit nur einem Zeitblock (d. h. keine Basalratenänderung innerhalb eines Tages)
* **Lokales Profil** nutzt das Profil, das in der Pumpe manuell eingegeben wurde. See [Profiles](../Usage/Profiles.md) page for more setup information.

## Insulin

Wähle die Art der Insulinkurve, die du verwendest. Grundlegende Optionen von AndroidAPS sind bilinear: "Schnell wirkendes Insulin" für ein Insulin mit einer DIA (Duration of Insulin Action) von weniger als 5 Stunden und "Schnell wirkendes verlängertes Insulin" mit einer DIA von mehr als 5 Stunden. Diese Kurven unterscheiden sich nur in der Dauer des DIA. Die Oref-Optionen "Rapid-Acting Oref", "Ultra-Rapid Oref" und "Free-Peak Oref" sind exponentiell und weitere Informationen sind in den [OpenAPS Dokumenten](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves) aufgeführt, die Kurven variieren basierend auf der DIA and der Zeit bis zur Spitze. Du musst für diese Optionen zusätzliche Einstellungen vornehmen. Du kannst die Darstellung der Insulinkurve im Reiter Insulin (INS) anschauen, um zu verstehen, welche Kurve zu dir passt.

## BZ-Quelle

Select the blood glucose source you are using - see [BG Source](BG-Source.md) page for more setup information.

## Pumpe

Wähle die Pumpe, die du verwendest. Wenn den Open Loop verwenden willst, musst du hier "Virtuelle Pumpe" wählen. See [DanaR Insulin Pump](DanaR-Insulin-Pump.md), [DanaRS Insulin Pump](DanaRS-Insulin-Pump.md) or [Accu Chek Combo Pump](Accu-Chek-Combo-Pump.md) pages for more setup information.

## Empfindlichkeitserkennung

Wähle die Art der Empfindlichkeitserkennung. Bei der Empfindlichkeitserkennung werden fortlaufend historische Daten analysiert und Anpassungen vorgenommen, wenn erkannt wird, dass du sensibler (oder umgekehrt mit einer höheren Insulinresistenz) auf das Insulin reagierst als üblich. Details über den Empfindlichkeitsalgorithmus von Oref0 findest Du in der [OpenAPS Dokumentation](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode). Du kannst die berechnete Insulinempfindlichkeit sehen, wenn du auf dem Homescreen “Sensitivität” auswählst und dann die weiße Linie anschaust. Du musst [Ziel 6](../Usage/Objectives) erreicht haben, um die Empfindlichkeitserkennung und Autosens verwenden zu können.

## APS

Wähle entweder OpenAPS MA (Mahlzeiten-Assistent) oder OpenAPS AMA (advanced meal assist - erweiterter Mahlzeiten-Assistent). Weitere Details zu OpenAPS AMA findest du in der [OpenAPS Dokumentation](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). Einfach ausgedrückt profitierst du davon, dass das System nach einem Mahlzeiten-Bolus schneller mit hohen temporären Basalraten reagieren kann, wenn du die Kohlenhydrate zuverlässig eingibst. Die Details zum ausgewählten Algorithmus findest du im Reiter OpenAPS (OAPS). Note you need to be in [Objective 7](../Usage/Objectives.md) in order to use OpenAPS AMA.

## Loop

Wenn du Open oder Closed Loop verwenden willst, musst du dies hier einstellen. Im Reiter LOOP werden die Aktivitäten und Erfolge des Loops angezeigt.

## Beschränkungen

Auf dem Reiter Ziele (ZIEL) kannst du deinen Fortschritt mitverfolgen und sehen, welche Meilensteine noch vor dir liegen. See [Objectives](../Usage/Objectives.md) page for more information.

## Behandlungen

Der Reiter Behandlungen (BEH) zeigt dir die Behandlungen an, die zu Nightscout hochgeladen wurden. Falls du einen Eintrag editieren oder löschen willst (z.B. weil du weniger Kohlenhydrate gegessen hast, als erwartet) - wähle "Löschen" und trage den neuen Wert über den Reiter Careportal (CP) ein. Denke daran, ggf. die Zeit anzupassen.

## Allgemein

* **Actions** allows you to make Profiles Switches (see [Profiles page](../Usage/Profiles.md) for more setup information), Temporary Targets, and for those using DanaR/RS or Combo pump to set a manual TBR or prime the canula.
* **Careportal** Erfassung spezifischer Behandlungseinträge einschließlich Notizen und Anzeige des aktuellen Alters von CGM-Sensor, Insulinreservoir, Kanüle und Pumpenbatterie.
* **SMS Communicator** allows remote caregivers to control some AndroidAPS features via SMS, see [SMS Commands](../Usage/SMS-Commands.md) for more setup information.
* **Essen** Anzeige und Nutzung der Nightscout Nahrungsmittel-Datenbank. Siehe [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) für weitere Setup Informationen oder rufe deine Datenbank über http://[yournightscoutsiteaddress]/food auf.
* **Wear** allows you to view and control AndroidAPS from the Android Wear watch, see [watchfaces](Watchfaces.md) for more setup information.
* **xDrip Statusline (Smartwatch)** Loop-Informationen im xDrip+ Ziffernblatt anzeigen
* **Laufende Benachrichtigungen** Zeigt im Dropdown- und Sperrbildschirm deines Smartphones eine Dauer-Benachrichtigung an mit einer kurzen Übersicht darüber, was der Loop derzeit tut.
* **NS-Client** Synchronisierung Ihrer AndroidAPS-Daten mit Nightscout einrichten