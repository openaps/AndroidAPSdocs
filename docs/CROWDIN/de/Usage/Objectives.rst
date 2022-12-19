Objectives (Ziele)
**************************************************

AndroidAPS hat eine Reihe von Zielen (objectives), die erreicht werden müssen, damit du an die Funktionen und Einstellungen von sicherem Looping herangeführt wirst.  Sie stellen sicher, dass du alles, was in den Abschnitten weiter oben beschrieben wurde, korrekt installiert hast und dass du verstehst, was das System tut und warum du ihm vertrauen kannst.

Wenn Du Dein **Smartphone wechselst**  kannst Du Deine `Einstellungen exportieren <../Usage/ExportImportSettings.html>`_ um die Objectives nicht von vorn beginnen zu müssen. Neben dem Fortschritt bei den Zielen werden auch deine Sicherheitseinstellungen wie der maximale Bolus usw. gespeichert.  Wenn du die Einstellungen nicht exportierst und wieder importierst, musst du die Ziele von Anfang an neu erreichen.  Denke daran, regelmäßig ein `Backup Deiner Einstellungen <../Usage/ExportImportSettings.html>`_ zu machen, um auf der sicheren Seite zu sein.

Wenn Du eines der Objectives (Ziele) neu starten willst, folge der `Anleitung weiter unten <../Usage/Objectives.html#objective-ziel-neu-starten>`_.
 
Ziel 1: Einrichten der Darstellung und Überwachung sowie analysieren der Basalraten und Faktoren
====================================================================================================
* Wähle die zu deinen Geräten passende Quelle für den Blutzuckerwert.  Weitere Informationen findest Du unter `BZ-Quelle <../Configuration/BG-Source.html>`_.
* Wähle die richtige Pumpe im Konfigurations-Generator (wähle virtuelle Pumpe, wenn du ein Pumpenmodell benutzt, für das es keinen AndroidAPS-Treiber gibt) um sicherzustellen, dass die Pumpe ihren Status mit AndroidAPS teilen kann.  
* Wenn du eine DanaR Pumpe verwendest, dann stelle sicher, dass Du die `DanaR Insulinpumpen-Anleitung <../Configuration/DanaR-Insulin-Pump.html>`_ befolgt hast, damit eine gute Verbindung zwischen der Pumpe und AndroidAPS gewährleistet ist.
* Befolge die  `Nightscout-Anleitung <../Installing-AndroidAPS/Nightscout.html>`_, um zu gewährleisten, dass Nightscout diese Daten empfangen und anzeigen kann.
Die URL im NSClient muss **OHNE /api/v1/** am Ende eingegeben werden - siehe `NSClient Einstellungen <../Configuration/Preferences.html#nightscout-client>`__.

*Es kann sein, dass du auf das Auslesen des nächsten Zuckerwertes warten musst, bevor AndroidAPS es erkennt.*

Ziel 2: Lerne, wie AndroidAPS bedient wird
==================================================
* Führe verschiedene Aktionen in AndroidAPS aus, die in dieser Zielaufgabe beschrieben werden.
* Klicke auf den orangenen Text "Noch nicht abgeschlossen", um zu den einzelnen Aufgaben zu kommen.
* Links zum Wiki helfen Dir weiter, falls Du an der einen oder anderen Stelle noch nicht so sicher sein solltest.

  .. image:: ../images/Objective2_V2_5.png
    :alt: Screenshot Ziel 2

Ziel 3: Belege Dein Wissen
==================================================
* Beantworte Multiple-Choice-Fragen zu verschiedenen AndroidAPS- und Closed-Loop-Themen.
* Klicke auf den orangenen Text "Noch nicht abgeschlossen", um zur Seite mit den Fragen und Antwortmöglichkeiten zu kommen.

  .. image:: ../images/Objective3_V2_5.png
    :alt: Screenshot Ziel 3

* Links zum Wiki helfen Dir weiter, falls Du an der einen oder anderen Stelle noch nicht so sicher sein solltest.
* Für Version 2.8 wurde Objective 3 komplett von Muttersprachlern überarbeitet. Die neuen Fragen decken die bisherigen ab und fügen ein paar neue hinzu.
* Diese neuen Fragen führen dazu, dass einige Fragen unbeantwortet sind, obwohl du Ziel (objective) 3 in der Vergangenheit bereits erfolgreich abgeschlossen hast.
* Diese unbeantworteten Fragen betreffen dich nur, wenn du ein neues Ziel (objective) starten möchtest. Anders gesagt: Wenn du alle Ziele (objectives) bereits erfolgreich abgeschlossen hast, verlierst du keine Funktionen in AAPS, wenn du die neuen Fragen nicht beantwortest.

Ziel 4: Starte den Open Loop
==================================================
* Wähle Open Loop entweder in den Einstellungen oder indem du lange auf den Loop Button in der linken oberen Ecke des Hauptbildschirms drückst.
* Arbeite Dich durch die  `Einstellungen <../Configuration/Preferences.html>`__, um AndroidAPS an Deine Anforderungen anzupassen.
* Bestätige in einem Zeitraum von 7 Tagen mindestens 20 der temporären Basalratenanpassungen; gib sie jeweils von Hand in der Pumpe ein und bestätige in AndroidAPS, dass du sie akzeptiert hast.  Überprüfe, ob diese Daten in AndroidAPS und Nightscout angezeigt werden.
* Aktiviere falls notwendig `temporäre Ziele <../Usage/temptarget.html>`_. Nutze das Hypo Temp Target um zu verhindern, dass AAPS aufgrund des Blutzuckeranstiegs nach einer Hypo zu stark korrigiert. 

Anzahl der Benachrichtigungen reduzieren
--------------------------------------------------
* Um die Anzahl der zu bestätigenden Vorschläge im Open Loop zu reduzieren, setze einen weiteren Zielbereich (z.B. 90-150 mg/dl oder 5,0-8,5 mmol/l).
* Ggf. kannst Du nachts auch das obere Limit höher setzen oder den Open Loop ganz pausieren. 
* In den Einstellungen kannst Du einen minimalen Prozentwert setzen, der erreicht werden muss, bevor eine Änderung der Basalrate vorgeschlagen wird.

  .. image:: ../images/OpenLoop_MinimalRequestChange2.png
    :alt: Open Loop Mindeständerung
     
* Auch musst Du nicht alle fünf Minuten auf jeden einzelnen Vorschlag reagieren...

Ziel 5: Open Loop inklusive der temporären Basalratenvorschläge verstehen
====================================================================================================
* Lerne das Konzept hinter den Basalratenvorschlägen kennen, indem Du Dir  `Basalraten verstehen <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html>`_ durchliest sowie die `Vorhersagelinie auf dem AndroidAPS Hauptbildschirm <../Getting-Started/Screenshots.html#vorhersage-kurven>`_ und die Zusammenfassung der Ausgaben von den Berechnungen in deinem OpenAPS Tab anschaust.
 
Es ist möglicherweise sinnvoll, wenn du das Ziel höher als üblich ansetzt, bis du den Berechnungen und Einstellungen vertraust.  Das System erlaubt:

* einen niedrigen Zielwert von mindestens 4 mmol (72 mg/dl) oder höchstens 10 mmol (180 mg/dl) 
* einen hohen Zielwert von mindestens 5 mmol (90 mg/dl) und höchstens 15 mmol (225 mg/dl)
* ein temporäres Ziel als Einzelwert kann im Bereich von 4 mmol bis 15 mmol (72 mg/dl bis 225 mg/dl) liegen

Der Zielwert ist der Wert, auf dem die Berechnungen basieren und nicht der gleiche wie der, den du als Zuckerwert anstrebst.  Wenn Du einen sehr großen Zielbereich (z.B. 3 mmol / 50 mg/dl oder mehr) wirst Du kaum Aktivitäten von AndroidAPS feststellen. Der vorhergesagte Glukosewert wird mit hoher Wahrscheinlichkeit innerhalb Deines Zielbereichs liegen und daher nicht viele temporäre Änderungen an der Basalrate vorgeschlagen werden. 

Vielleicht möchtest Du mit der Anpassung der Werte für einen engeren Zielbereich experimentieren (z.B. 1 mmol/l bzw. 20 mg/dl oder weniger) und beobachten, wie sich das Verhalten des Systems daraufhin ändert.  

Auf dem Startbildschirm wird Dein Zielbereich mit grünen Linien im Diagramm dargestellt. Diesen kannst Du in den `Einstellungen <../Configuration/Preferences.html>`__ > unter 'Zielbereich für die Grafikanzeige' (scrolle weit nach unten) einstellen.
 
.. image:: ../images/sign_stop.png
  :alt: Stoppzeichen

Falls Du eine virtuelle Pumpe verwendest darfst Du nicht zum 6. Ziel wechseln. Klicke nicht auf 'Bestätigen/Verify' am Ende des 5. Ziels.
------------------------------------------------------------------------------------------------------------------------------------------------------

.. image:: ../images/blank.png
  :alt: leer

Ziel 6: Closed Loop mit Abschaltung bei niedrigen Glukose-Werten
====================================================================================================
.. image:: ../images/sign_warning.png
  :alt: Warnzeichen
  
Closed loop will not correct high BG values in objective 6 as it is limited to low glucose suspend. High BG values have to be corrected manually by you!
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
* Prerequisite: You need a good profile (basal, ISF, IC) already working in AndroidAPS to start with Loop in Low Glucose Suspend mode. Otherwise you can run in a hypo which you have to manually correct. This will help you a lot to avoid having to treat a low glucose over a period of 5 days. **If you are still having frequent or severe low glucose episodes then consider refining your DIA, basal, ISF and carb ratios and do NOT start objective 6 at this time.**
* You don't have to change your settings now. During objective 6, the maxIOB setting is internally set to zero automatically. **This override will be reversed when moving to objective 7.**
* The system will override your maxIOB settings to zero, which means if blood glucose is dropping it can reduce basal for you, but if blood glucose is rising then it will only increase basal if the basal IOB is negative from a previous Low Glucose Suspend, otherwise basal rates will remain the same as your selected profile. **That means that you have to manually handle high values with insulin corrections.** 
* Wenn Dein Basal-IOB negativ ist (siehe Bildschirmausschnitt oben), kann auch in Objective 6 eine TBR > 100% abgegeben werden.

.. image:: ../images/Objective6_negIOB.png
    :alt: Beispiel negatives IOB

* Set your target range slightly higher than you usually aim for, just to be safe and have a bit more scurity buffer.
* Enable 'Low Glucose Suspend' mode either by by pressing and holding the Loop icon at the top right corner of the home screen and selecting the Loop - LGS mode icon or selecting from `Preferences <../Configuration/Preferences.html>`__.
* Watch how temporary basals are active by viewing the blue basal text on the homescreen or the blue basal render on the homescreen graph.
* Wenn du eine Hypo korrigierst, kann es vorkommen, dass danach Spitzen auftreten, die du nicht durch Erhöhung der Basalrate korrigieren kannst.


Objective 7: Tuning the closed loop, raising maxIOB above 0 and gradually lowering BG targets
====================================================================================================
* Select 'Closed Loop' either from `Preferences <../Configuration/Preferences.html>`__ or by pressing and holding the Loop icon at the top right corner of the home screen, over a period of 1 day.
* Raise your 'Maximum total IOB OpenAPS can’t go over' (in OpenAPS called 'max-iob') above 0. The default recommendation is "average mealbolus + 3x max daily basal" (for the SMB algorithm) or "3x max daily basal" (for the older AMA algorithm) but you should slowly work up to this until you know your settings work for you (max daily basal = the maximum hourly value in any time segment of the day).

  Betrachte diese Empfehlung als Ausgangspunkt. If you set to the 3x and you are seeing moves that push you too hard and fast then lower that number. If you are very resistant, raise it very little at a time.

  .. image:: ../images/MaxDailyBasal2.png
    :alt: max daily basal

* Once confident on how much IOB suits your looping patterns, then reduce your targets to your desired level.



Ziel 8: Passe, falls notwendig, Basalraten und Faktoren an und aktiviere dann die Autosens-Funktion
====================================================================================================
* Du kannst  `Autotune <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html>`_ verwenden, um dafür zu sorgen, dass Deine Basalraten korrekt bleiben oder einen traditionellen Basalratentest durchführen.
* Schalte `Autosens <../Usage/Open-APS-features.html>`_ für einen Zeitraum von 7 Tagen ein und beobachte die weiße Linie auf der Grafik auf dem Hauptbildschirm, die anzeigt, dass deine Sensibilität gegenüber Insulin auf Grund von Aktivitäten oder Hormonen steigt oder fällt. Schaue auf dem OpenAPS-Tab nach, wie AndroidAPS die Basalraten und/oder Zielwerte entsprechend anpasst.

*Vergiss nicht, dich als Looper in* `diesem Formular <https://bit.ly/nowlooping>`_ *zu registrieren, wenn du das bisher noch nicht getan hast. Gib AndroidAPS als Art deiner DIY Loop-Software an.**


Ziel 9: Aktiviere zusätzliche oref1 Funktionen zum täglichen Gebrauch, wie z. B. den super micro bolus (SMB)
====================================================================================================
* Du musst das `SMB-Kapitel in diesem Wiki <../Usage/Open-APS-features.html#super-micro-bolus-smb>`_ und das `Kapitel oref1 in der OpenAPS Dokumentation <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html>`_ lesen, um zu verstehen wie der SMB arbeitet, insbesondere was Sinn und Zweck des "zero-temping" ist.
* Danach solltest Du `maxIOB erhöhen <../Usage/Open-APS-features.html#maximales-basal-iob-das-openaps-abgeben-darf-ie-openaps-max-iob>`_, damit SMB korrekt funktioniert. maxIOB enthält nun das gesamte IOB, nicht nur das hinzugefügte Basalinsulin. Das bedeutet, wenn Du einen Mahlzeiten-Bolus von 8 IE abgegeben willst und in den Einstellungen ein maxIOB von 7 IE hinterlegt hast, wird kein SMB abgegeben, bis das IOB wieder unter 7 IE gefallen ist. Beginne mit maxIOB = durchschnittlicher Mahlzeiten-Bolus + 3x die größte stündliche Basalrate (größte stündliche Basalrate = maximaler Basalwert pro Stunde innerhalb des 24-Stunden-Rasters eines Tages - bei  `Ziel 7 <../Usage/Objectives.html#ziel-7-stelle-den-closed-loop-fein-ein-erhohe-max-iob-uber-0-und-setze-den-zielbereich-langsam-herunter>`_  findest Du eine Grafik zu Erklärung).
* Der Standardwert von min_5m_carbimpact in den Absorptions-Einstellungen muss von 3 auf 8 erhöht werden, wenn du von AMA zum SMB wechselst. Wenn du also von AMA auf SMB umstellst, dann musst du den Wert manuell auf 8 erhöhen.


Ziel 10: Automatisierung
====================================================================================================
* Du musst Ziel 10 starten, um `Automatisierungen <../Usage/Automation.html>`_ nutzen zu können.
* Stelle sicher, dass Du alle vorangegangenen Ziele inkl. des `Wissenstest  <../Usage/Objectives.html#ziel-3-belege-dein-wissen>`_ abgeschlossen hast.
* Der Abschluss vorangegangenen Ziele (objectives) beeinflusst nicht die Ziele, die Du bereits abgeschlossen hast. Du behälst alle Objectives, die Du bereits abgeschlossen hast!


Objective (Ziel) neu starten
====================================================================================================
Wenn Du aus welchem Grund auch immer ein Objective (Ziel) neu starten willst, klicke auf "Ziel neu starten".

.. image:: ../images/Objective_ClearFinished.png
  :alt: Objective (Ziel) neu starten


Objectives in Android APS before version 3.0
====================================================================================================
One objective was removed when Android APS 3.0 was released.  Users of Android APS version 2.8.2.1 who are on older Android software (i.e. earlier than version 9) will be using an older set of objectives which can be found `here <../Usage/Objectives_old.html>`_.
