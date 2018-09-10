# Beschränkungen (objectives) verstehen

AndroidAPS hat eine Reihe von Zielen (objectives), die erreicht werden müssen, damit du an die Funktionen und Einstellungen von sicherem Looping herangeführt wirst. Sie stellen sicher, dass du alles, was in den Abschnitten weiter oben beschrieben wurde, korrekt installiert hast und dass du verstehst, was das System tut und warum du ihm vertrauen kannst.

Für den Fall, dass du dir ein neues Smartphone zulegst, kannst du die Einstellungen exportieren, um deinen Fortschritt bei den Beschränkungen zu übernehmen; wähle im Drei-Punkte-Menü in der oberen rechten Ecke *Einstellungen exportieren*. Es wird dir dann angezeigt, in welches Verzeichnis die Datei gespeichert wurde. Kopiere auf deinem neuen Smartphone die Datei in das gleiche Verzeichnis und wähle *Einstellungen importieren*. Neben dem Fortschritt bei den Zielen werden auch deine Sicherheitseinstellungen wie der maximale Bolus usw. gespeichert. Wenn du die Einstellungen nicht exportierst und wieder importierst, musst du die Ziele von Anfang an neu erreichen. Es ist ratsam, die Einstellungen zur Sicherheit häufiger zu speichern.  

* **Ziel 1:** Einrichten der Darstellung und Überwachung sowie analysieren der Basalraten und Faktoren 
  * Wähle die zu deinen Geräten passende Quelle für den Blutzuckerwert. See [BG Source](../Configration/BG-Source.md) for more information.
  * Wähle die richtige Pumpe im Konfigurations-Generator (wähle virtuelle Pumpe wenn du ein Pumpenmodell benutzt, für das es keinen AndroidAPS-Treiber gibt oder für Offenes Looping) um sicherzustellen, dass die Pumpe ihren Status mit AndroidAPS teilen kann. If using DanaR pump then ensure you have followed [DanaR Insulin Pump](../Confguration/DanaR-Insulin-Pump.md) instructions to ensure the link between pump and AndroidAPS.
  * Follow instructions in [Nightscout](../Installing-AndroidAPS/Nightscout.md) page to ensure Nightscout can receive and display this data. <br />  
    _Es kann sein, dass du auf das Auslesen des nächsten Zuckerwertes warten musst, bevor AndroidAPS es erkennt._
* **Ziel 2:** Den Open Loop Modus starten 
  * Wähle Open Loop entweder in den Einstellungen oder indem du lange auf den Loop Button in der linken oberen Ecke des Hauptbildschirms drückst.
  * Work through the [Preferences](../Configuration/Preferences.md) to set up for you.
  * Bestätige in einem Zeitraum von 7 Tagen mindestens 20 der temporären Basalratenanpassungen; gib sie jeweils von Hand in der Pumpe ein und bestätige in AndroidAPS, dass du sie akzeptiert hast. Überprüfe, ob diese Daten in AndroidAPS und Nightscout angezeigt werden.  

* **Ziel 3:** Open Loop inklusive der temporären Basalratenvorschläge verstehen
  
  * Lerne das Konzept hinter den Basalratenvorschlägen kennen, indem du dir [Basalraten verstehen](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html) durchliest sowie die Vorhersagelinie auf dem AndroidAPS Hauptbildschirm und die Zusammenfassung der Ausgaben von den Berechnungen in deinem OpenAPS Tab anschaust.   
      
    _Es ist möglicherweise sinnvoll, wenn du das Ziel höher als üblich ansetzt, bis du den Berechnungen und Einstellungen vertraust. Das System erlaubt für den unteren Zielwert Werte zwischen 4 mmol/l und 10 mmol/l (= 72 mg/dl bis 180 mg/dl) und für den oberen Zielwert Werte zwischen 5 mmol/l und 15 mmol/l (= 90 mg/dl und 270 mg/dl). Ein temporärer Zielwert ist ein einzelner Wert, der irgendwo zwischen 4 mmol/l und 15 mmol/l (= 72 mg/dl bis 180 mg/dl) liegen kann. Der Zielwert ist der Wert, auf dem die Berechnungen basieren und nicht der gleiche wie der, den du als Zuckerwert anstrebst. Wenn dein Zielwert sehr weitgefasst ist (sagen wir eine Spanne von 3 mmol/l bzw. 54 mg/dl oder mehr) wirst du nicht viele Vorschläge für temporäre Basalraten erhalten, da die Vorhersage für den Zuckerwert oft innerhalb dieser hohen Toleranz liegt. Vielleicht möchtest du mit der Anpassung der Werte für einen engeren Zielbereich experimentieren (sagen wir 1 mmol/l bzw. 18 mg/dl oder weniger) und beobachten, wie sich das Verhalten des Systems daraufhin ändert. Du kannst einen größeren Umfang für die grafische Anzeige des Bereichs der Glukosewerte (grüne Linien) festlegen, indem du unter "Einstellungen > Zielbereich für die Grafikanzeige" andere Werte eingibst._   
      
    _Höre hier auf, wenn du Open Loop mit einer virtuellen Pumpe betreibst - klicke nicht auf Bestätigen am Ende dieses Ziels._

* **Ziel 4:** Den Loop mit Abschaltung bei niedrigen Zuckerwerten schliessen
  
  * Wähle Closed Loop entweder in den Einstellungen oder indem du lange auf den Loop Button in der linken oberen Ecke des Hauptbildschirms drückst.
  * Stelle deinen Zielbereich etwas höher ein, als du es normalerweise tun würdest, um auf der sicheren Seite zu sein.
  * Die Aktivität der temporären Basalraten kannst du anhand des blauen Textes auf dem Hauptbildschirm oder des blauen Bereichs in der Grafik beobachten.
  * Stelle sicher, dass deine Einstellungen für AndroidAPS korrekt sind. Beobachte das Verhalten über einen Zeitraum von 5 Tagen. Wenn Du nicht eingreifen musst, um niedrige Zuckerwerte zu korrigieren, sind die Einstellungen korrekt. Wenn du nach wie vor häufige oder schwere Unterzuckerungen hast, dann solltest du DIA, Basalraten, ISF oder Kohlenhydrat-Faktoren anpassen. <br />  
    _Das System wird deine maxIOB Einstellungen auf 0 setzen, was bedeutet, dass es bei fallenden Zuckerwerten die Basalrate herabsetzen kann, aber wenn die Zuckerwerte steigen, werden sie nur dann korrigiert, wenn der IOB negativ ist (von einer vorangegangenen niedrigen Zuckerwert Abschaltung). Anderenfalls bleibt die Basalrate die gleiche wie in deinem ausgewählten Profil. Wenn du eine Hypo korrigierst, kann es vorkommen, dass danach Spitzen auftreten, die du nicht durch Erhöhung der Basalrate korrigieren kannst._
* **Ziel 5:** Die Closed Loop anpassen, max IOB über 0 setzen und BG Zielbereiche allmählich einengen 
  * Raise your 'Maximum total IOB OpenAPS can’t go over' (in OpenAPS called 'max-iob') above 0 over a period of 1 day, the default is recommended to be 2 but you should slowly work up to this until you know your settings work for you.
  * Wenn du zuverlässig weißt, welcher IOB deinem Looping Muster entspricht, dann senke deinen Zielbereich auf den gewünschten Wert.  
* **Ziel 6:** Passe, falls notwendig, Basalraten und Faktoren an und aktiviere dann die Autosens-Funktion 
  * Du kannst [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) verwenden, um dafür zu sorgen, dass deine Basalraten korrekt bleiben oder einen traditionellen Basalratentest durchführen.
  * Enable [autosens](../Usage/Open-APS-features.md) over a period of 7 days and watch the white line on the homescreen graph show how your sensitivity to insulin may be rising or falling as a result of exercise or hormones etc, and keep an eye in the OpenAPS report tab how AndroidAPS is adjusting the basals and/or targets accordingly. <br />  
    _Vergiss nicht, dich als Looper in [diesem Formular](http://bit.ly/nowlooping) zu registrieren, wenn du das bisher noch nicht getan hast. Gib AndroidAPS als Art deiner DIY Loop-Software an._

* **Objective 7:** Aktiviere zusätzliche oref0 Funktionen zum täglichen Gebrauch, wie z. B. den advanced meal assist (AMA)
  
  * Now you should feel confident with how AndroidAPS works and what settings reflect your diabetes best
  * Then over a period of 28 days you can try additional features that automate even more of the work for you such as the [advanced meal assist](../Usage/Open-APS-features.md#advanced-meal-assist-ama)

* **Objective 8:** Aktiviere zusätzliche oref1 Funktionen zum täglichen Gebrauch, wie z. B. den super micro bolus (SMB)
  
  * You must read the [SMB chapter in this wiki](../Usage/Open-APS-features.md#super-micro-bolus-smb) and [chapter oref1 in openAPSdocs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) to understand how SMB works, especially what's the idea behind zero-temping.
  * Then you ought to [rise maxIOB](../Usage/Open-APS-features.md#maximum-total-iob-openaps-cant-go-over-openaps-max-iob) to get SMBs working fine. maxIOB enthält nun das gesamte IOB, nicht nur das hinzugefügte Basalinsulin. Das bedeutet, wenn ein Mahlzeiten-Bolus von 8 IE gegeben wird und maxIB ist 7 IE, dann werden keine SMB abgegeben, bis IOB wieder unter 7 IE gefallen ist. Ein guter Startwert für maxIOB = durchschnittliche Bolusmenge für eine Mahlzeit + 3x höchste tägliche Basalrate
  * min_5m_carbimpact default in absorption settings has changed from 3 to 8 going from AMA to SMB. Wenn du also von AMA auf SMB umstellst, dann musst du den Wert manuell auf 8 erhöhen.