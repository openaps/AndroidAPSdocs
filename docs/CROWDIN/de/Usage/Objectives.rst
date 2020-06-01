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
Die URL im NSClient muss **OHNE /api/v1/** am Ende eingegeben werden - siehe `NSClient Einstellungen <../Configuration/Preferences.html#nightscout-client>`_.

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

Objectives (Ziele) überspringen
--------------------------------------------------
* Nur falls Du bereits mit einem anderen System (z.B. OpenAPS, iOS Loop) geloopt hast und dies belegen kannst (z.B.  mind. drei Monate Loop-Daten in Nightscout), kannst Du eine E-Mail an `objectives@androidaps.org <mailto:objectives@androidaps.org>`_ senden, um einen Code zu erhalten, um die restlichen Ziele (Objectives) zu überspringen. Füge dieser Mail Deine Nightscout-URL und den Code, der Dir in AAPS angezeigt wird, bei.
* Bitte beachte, dass über diese Mail-Adresse kein Support geleistet werden kann. Nutze bitte die in dieser Dokumentation beschriebenen `Support-Angebote <../Where-To-Go-For-Help/Connect-with-other-users.html>`_.

Ziel 4: Starte den Open Loop
==================================================
* Wähle Open Loop entweder in den Einstellungen oder indem du lange auf den Loop Button in der linken oberen Ecke des Hauptbildschirms drückst.
* Arbeite Dich durch die  `Einstellungen <../Configuration/Preferences.html>`_, um AndroidAPS an Deine Anforderungen anzupassen.
* Bestätige in einem Zeitraum von 7 Tagen mindestens 20 der temporären Basalratenanpassungen; gib sie jeweils von Hand in der Pumpe ein und bestätige in AndroidAPS, dass du sie akzeptiert hast.  Überprüfe, ob diese Daten in AndroidAPS und Nightscout angezeigt werden.
* Aktiviere falls notwendig `temporäre Ziele <../Usage/temptarget.html>`_. Nutze das Hypo Temp Target um zu verhindern, dass AAPS aufgrund des Blutzuckeranstiegs nach einer Hypo zu stark korrigiert. 

Anzahl der Benachrichtigungen reduzieren
--------------------------------------------------
* Um die Anzahl der zu bestätigenden Vorschläge im Open Loop zu reduzieren, setze einen weiteren Zielbereich (z.B. 90-150 mg/dl oder 5,0-8,5 mmol/l). * Ggf. kannst Du nachts auch das obere Limit höher setzen oder den Open Loop ganz pausieren. 
* In den Einstellungen kannst Du einen minimalen Prozentwert setzen, der erreicht werden muss, bevor eine Änderung der Basalrate vorgeschlagen wird.

   .. image:: ../images/OpenLoop_MinimalRequestChange2.png
     :alt: Open Loop Mindeständerung
     
* Auch musst Du nicht alle fünf Minuten auf jeden einzelnen Vorschlag reagieren...

Ziel 5: Open Loop inklusive der temporären Basalratenvorschläge verstehen
====================================================================================================
* Lerne das Konzept hinter den Basalratenvorschlägen kennen, indem Du Dir  `Basalraten verstehen <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html>`_ durchliest sowie die Vorhersagelinie auf dem AndroidAPS Hauptbildschirm und die Zusammenfassung der Ausgaben von den Berechnungen in deinem OpenAPS Tab anschaust.
 
Es ist möglicherweise sinnvoll, wenn du das Ziel höher als üblich ansetzt, bis du den Berechnungen und Einstellungen vertraust.  Das System erlaubt:

* einen niedrigen Zielwert von mindestens 4 mmol (72 mg/dl) oder höchstens 10 mmol (180 mg/dl) 
* einen hohen Zielwert von mindestens 5 mmol (90 mg/dl) und höchstens 15 mmol (225 mg/dl)
* ein temporäres Ziel als Einzelwert kann im Bereich von 4 mmol bis 15 mmol (72 mg/dl bis 225 mg/dl) liegen

Der Zielwert ist der Wert, auf dem die Berechnungen basieren und nicht der gleiche wie der, den du als Zuckerwert anstrebst.  Wenn Du einen sehr großen Zielbereich (z.B. 3 mmol / 50 mg/dl oder mehr) wirst Du kaum Aktivitäten von AndroidAPS feststellen. Der vorhergesagte Glukosewert wird mit hoher Wahrscheinlichkeit innerhalb Deines Zielbereichs liegen und daher nicht viele temporäre Änderungen an der Basalrate vorgeschlagen werden. 

Vielleicht möchtest Du mit der Anpassung der Werte für einen engeren Zielbereich experimentieren (z.B. 1 mmol/l bzw. 20 mg/dl oder weniger) und beobachten, wie sich das Verhalten des Systems daraufhin ändert.  

Auf dem Startbildschirm wird Dein Zielbereich mit grünen Linien im Diagramm dargestellt. Diesen kannst Du in den `Einstellungen <../Configuration/Preferences.html>`_ > unter 'Zielbereich für die Grafikanzeige' (scrolle weit nach unten) einstellen.
 
.. image:: ../images/sign_stop.png
  :alt: Stoppzeichen

Falls Du eine virtuelle Pumpe verwendest darfst Du nicht zum 6. Ziel wechseln. Klicke nicht auf 'Bestätigen/Verify' am Ende des 5. Ziels.
------------------------------------------------------------------------------------------------------------------------------------------------------

.. image:: ./images/blank.png
  :alt: leer

Ziel 6: Closed Loop mit Abschaltung bei niedrigen Glukose-Werten
====================================================================================================
.. image:: ../images/sign_warning.png
  :alt: Warnzeichen
  
Der Closed Loop korrigiert im Objective 6 keine hohen BZ-Werte, da nur low glucose suspend zum Einsatz kommt. Hohe BZ-Werte müssen daher von Dir manuell korrigiert werden!
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
* Wähle Closed Loop entweder in den `Einstellungen <../Configuration/Preferences.html>`_ oder indem du lange auf den Loop Button in der linken oberen Ecke des Hauptbildschirms drückst.
* Stelle deinen Zielbereich etwas höher ein, als du es normalerweise tun würdest, um auf der sicheren Seite zu sein.
* Die Aktivität der temporären Basalraten kannst du anhand des blauen Textes auf dem Hauptbildschirm oder des blauen Bereichs in der Grafik beobachten.
* Stelle sicher, dass deine Einstellungen für AndroidAPS korrekt sind. Beobachte das Verhalten über einen Zeitraum von 5 Tagen. Wenn Du nicht eingreifen musst, um niedrige Zuckerwerte zu korrigieren, sind die Einstellungen korrekt.  Wenn du nach wie vor häufige oder schwere Unterzuckerungen hast, dann solltest du DIA, Basalraten, ISF oder Kohlenhydrat-Faktoren anpassen.
* Du musst Deine Einstellungen nicht verändern. Während Du Dich im Ziel 6 befindest, wird maxIOB intern automatisch auf Null gesetzt. Wenn Du zum Ziel 7 weitergehst, wird dies automatisch wieder deaktiviert.
* Das System wird Deine maxIOB Einstellungen auf 0 setzen. Dies bedeutet, dass AAPS bei fallenden BZ-Werte die Basalrate herabsetzen kann. Wenn aber die BZ-Werte steigen, werden diese nur korrigiert, wenn Dein Basal-IOB negativ ist (z.B. von einer vorangegangenen Abschaltung wegen niedriger BZ-Werte). Ohne negatives IOB wird keine temporäre Basalrate oberhalb Deiner Profileinstellungen abgegeben.  

   .. image:: ../images/Objective6_negIOB.png
     :alt: Beispiel negatives IOB

* Wenn Dein Basal-IOB negativ ist (siehe Bildschirmausschnitt oben), kann auch in Objective 6 eine TBR > 100% abgegeben werden.
* Wenn du eine Hypo korrigierst, kann es vorkommen, dass danach Spitzen auftreten, die du nicht durch Erhöhung der Basalrate korrigieren kannst.

Ziel 7: Stelle den Closed Loop fein ein, erhöhe maxIOB über 0 und setze den Zielbereich langsam herunter
====================================================================================================
* Setze dein "Maximales Gesamt-IOB, das nicht überschritten werden darf [IE]" (in OpenAPS als "max-iob" bekannt) für einen Tag auf einen Wert größer als 0. Der empfohlene Standardwert ist "ein durchschnittlicher Mahlzeitenbolus + das Dreifache Deiner größten täglichen Basalrate" (größte stündliche Basalrate = maximaler Basalwert pro Stunde innerhalb des 24-Stunden-Rasters eines Tages) (für den SMB Algorithmus), oder das Dreifache Deiner höchsten täglichen Basalrate (für den älteren AMA Algorithmus), aber du solltest dich diesem Wert langsam annähern, bis du weißt, dass die Einstellung für Dich funktioniert).

  Betrachte diese Empfehlung als Ausgangspunkt. Wenn Du den Faktor 3x verwendest und feststellst, dass AAPS Deinen BZ zu stark senkt, reduziere diesen Faktor (z.B. 2,..). Wenn Du Resistenzen feststellst, kannst Du diesen Faktor vorsichtig Schritt für Schritt erhöhen.

   .. image:: ../images/MaxDailyBasal2.png
     :alt: max daily basal

* Wenn du zuverlässig weißt, welcher IOB deinem Looping Muster entspricht, dann senke deinen Zielbereich auf den gewünschten Wert.


Ziel 8: Passe, falls notwendig, Basalraten und Faktoren an und aktiviere dann die Autosens-Funktion
====================================================================================================
* Du kannst  `Autotune <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html>`_ verwenden, um dafür zu sorgen, dass Deine Basalraten korrekt bleiben oder einen traditionellen Basalratentest durchführen.
* Schalte `Autosens <../Usage/Open-APS-features.html>`_ für einen Zeitraum von 7 Tagen ein und beobachte die weiße Linie auf der Grafik auf dem Hauptbildschirm, die anzeigt, dass deine Sensibilität gegenüber Insulin auf Grund von Aktivitäten oder Hormonen steigt oder fällt. Schaue auf dem OpenAPS-Tab nach, wie AndroidAPS die Basalraten und/oder Zielwerte entsprechend anpasst.

*Vergiss nicht, dich als Looper in `diesem Formular <http://bit.ly/nowlooping>`_ zu registrieren, wenn du das bisher noch nicht getan hast. Gib AndroidAPS als Art deiner DIY Loop-Software an.*


Ziel 9: Aktiviere zusätzliche oref0 Funktionen zum täglichen Gebrauch, wie z. B. den advanced meal assist (AMA)
====================================================================================================
* Jetzt solltest du damit vertraut sein, wie AndroidAPS arbeitet und welche Einstellungen dich bei deiner Diabetesbehandlung am besten unterstützen
* Für einen Zeitraum von 28 Tagen kannst Du zusätzliche Funktionen ausprobieren, die Dir noch mehr Arbeit abnehmen, so wie der  `erweiterte Mahlzeitenassistent <../Usage/Open-APS-features.html#advanced-meal-assist-ama>`_.


Ziel 10: Aktiviere zusätzliche oref1 Funktionen zum täglichen Gebrauch, wie z. B. den super micro bolus (SMB)
====================================================================================================
* Du musst das `SMB-Kapitel in diesem Wiki <../Usage/Open-APS-features.html#super-micro-bolus-smb>`_ und das `Kapitel oref1 in der OpenAPS Dokumentation <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html>`_ lesen, um zu verstehen wie der SMB arbeitet, insbesondere was Sinn und Zweck des "zero-temping" ist.
* Danach solltest Du `maxIOB erhöhen <../Usage/Open-APS-features.html#maximales-basal-iob-das-openaps-abgeben-darf-ie-openaps-max-iob>`_, damit SMB korrekt funktioniert. maxIOB enthält nun das gesamte IOB, nicht nur das hinzugefügte Basalinsulin. Das bedeutet, wenn Du einen Mahlzeiten-Bolus von 8 IE abgegeben willst und in den Einstellungen ein maxIOB von 7 IE hinterlegt hast, wird kein SMB abgegeben, bis das IOB wieder unter 7 IE gefallen ist. Beginne mit maxIOB = durchschnittlicher Mahlzeiten-Bolus + 3x die größte stündliche Basalrate (größte stündliche Basalrate = maximaler Basalwert pro Stunde innerhalb des 24-Stunden-Rasters eines Tages - bei  `Ziel 7 <../Usage/Objectives.html#ziel-7-stelle-den-closed-loop-fein-ein-erhohe-max-iob-uber-0-und-setze-den-zielbereich-langsam-herunter>`_  findest Du eine Grafik zu Erklärung).
* Der Standardwert von min_5m_carbimpact in den Absorptions-Einstellungen muss von 3 auf 8 erhöht werden, wenn du von AMA zum SMB wechselst. Wenn du also von AMA auf SMB umstellst, dann musst du den Wert manuell auf 8 erhöhen.

Objective (Ziel) neu starten
====================================================================================================
Wenn Du aus welchem Grund auch immer ein Objective (Ziel) neu starten willst, klicke auf "Ziel neu starten".

   .. image:: ../images/Objective_ClearFinished.png
     :alt: Objective (Ziel) neu starten

