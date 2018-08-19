# Beschränkungen (objectives) verstehen

AndroidAPS hat eine Reihe von Zielen (objectives), die erreicht werden müssen, damit du an die Funktionen und Einstellungen von sicherem Looping herangeführt wirst. Sie stellen sicher, dass du alles, was in den Abschnitten weiter oben beschrieben wurde, korrekt installiert hast und dass du verstehst, was das System tut und warum du ihm vertrauen kannst.

Für den Fall, dass du dir ein neues Smartphone zulegst, kannst du die Einstellungen exportieren, um deinen Fortschritt bei den Beschränkungen zu übernehmen; wähle im Drei-Punkte-Menü in der oberen rechten Ecke *Einstellungen exportieren*. Es wird dir dann angezeigt, in welches Verzeichnis die Datei gespeichert wurde. Kopiere auf deinem neuen Smartphone die Datei in das gleiche Verzeichnis und wähle *Einstellungen importieren*. Neben dem Fortschritt bei den Zielen werden auch deine Sicherheitseinstellungen wie der maximale Bolus usw. gespeichert. Wenn du die Einstellungen nicht exportierst und wieder importierst, musst du die Ziele von Anfang an neu erreichen. Es ist ratsam, die Einstellungen zur Sicherheit häufiger zu speichern.  

* **Ziel 1:** Einrichten der Darstellung und Überwachung sowie analysieren der Basalraten und Faktoren 
  * Wähle die zu deinen Geräten passende Quelle für den Blutzuckerwert. Weitere Informationen findest du unter [BZ-Quelle](../Configration/BG-Source.html).
  * Wähle die richtige Pumpe im Konfigurations-Generator (wähle virtuelle Pumpe wenn du ein Pumpenmodell benutzt, für das es keinen AndroidAPS-Treiber gibt oder für Offenes Looping) um sicherzustellen, dass die Pumpe ihren Status mit AndroidAPS teilen kann. Wenn du eine DanaR Pumpe verwendest, dann stelle sicher, dass Du die [DanaR Insulin Pumpen Anleitung](../Confguration/DanaR-Insulin-Pump.html) befolgt hast, damit eine gute Verbindung zwischen der Pumpe und AndroidAPS gewährleistet ist.
  * Befolge [Nightscout-Anleitung](../Installin-AndroidAPS/Nightscout.html), um zu gewährleisten, dass Nightscout diese Daten empfangen und anzeigen kann. <br />  
    _Es kann sein, dass du auf das Auslesen des nächsten Zuckerwertes warten musst, bevor AndroidAPS es erkennt._
* **Ziel 2:** Den Open Loop Modus starten 
  * Wähle Open Loop entweder in den Einstellungen oder indem du lange auf den Loop Button in der linken oberen Ecke des Hauptbildschirms drückst.
  * Arbeite dich durch die [[Einstellungen]], um es einzurichten.
  * Bestätige in einem Zeitraum von 7 Tagen mindestens 20 der temporären Basalratenanpassungen; gib sie jeweils von Hand in der Pumpe ein und bestätige in AndroidAPS, dass du sie akzeptiert hast. Überprüfe, ob diese Daten in AndroidAPS und Nightscout angezeigt werden.  

* **Ziel 3:** Open Loop inklusive der temporären Basalratenvorschläge verstehen
  
  * Lerne das Konzept hinter den Basalratenvorschlägen kennen, indem du dir [Basalraten verstehen](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html) durchliest sowie die Vorhersagelinie auf dem AndroidAPS Hauptbildschirm und die Zusammenfassung der Ausgaben von den Berechnungen in deinem OpenAPS Tab anschaust.   
      
    _Es ist möglicherweise sinnvoll, wenn du das Ziel höher als üblich ansetzt, bis du den Berechnungen und Einstellungen vertraust. Das System erlaubt für den unteren Zielwert Werte zwischen 4 mmol/l und 10 mmol/l (= 72 mg/dl bis 180 mg/dl) und für den oberen Zielwert Werte zwischen 5 mmol/l und 15 mmol/l (= 90 mg/dl und 270 mg/dl). Ein temporärer Zielwert ist ein einzelner Wert, der irgendwo zwischen 4 mmol/l und 15 mmol/l (= 72 mg/dl bis 180 mg/dl) liegen kann. Der Zielwert ist der Wert, auf dem die Berechnungen basieren und nicht der gleiche wie der, den du als Zuckerwert anstrebst. Wenn dein Zielwert sehr weitgefasst ist (sagen wir eine Spanne von 3 mmol/l bzw. 54 mg/dl oder mehr) wirst du nicht viele Vorschläge für temporäre Basalraten erhalten, da die Vorhersage für den Zuckerwert oft innerhalb dieser hohen Toleranz liegt. Vielleicht möchtest du mit der Anpassung der Werte für einen engeren Zielbereich experimentieren (sagen wir 1 mmol/l bzw. 18 mg/dl oder weniger) und beobachten, wie sich das Verhalten des Systems daraufhin ändert. Du kannst einen größeren Umfang für die grafische Anzeige des Bereichs der Glukosewerte (grüne Linien) festlegen, indem du unter "Einstellungen > Zielbereich für die Grafikanzeige" andere Werte eingibst. _   
      
    _Höre hier auf, wenn du Open Loop mit einer virtuellen Pumpe betreibst - klicke nicht auf Bestätigen am Ende dieses Ziels._

* **Ziel 4:** Den Loop mit Abschaltung bei niedrigen Zuckerwerten schliessen
  
  * Wähle Closed Loop entweder in den Einstellungen oder indem du lange auf den Loop Button in der linken oberen Ecke des Hauptbildschirms drückst.
  * Stelle deinen Zielbereich etwas höher ein, als du es normalerweise tun würdest, um auf der sicheren Seite zu sein.
  * Die Aktivität der temporären Basalraten kannst du anhand des blauen Textes auf dem Hauptbildschirm oder des blauen Bereichs in der Grafik beobachten.
  * Stelle sicher, dass deine Einstellungen für AndroidAPS korrekt sind. Beobachte das Verhalten über einen Zeitraum von 5 Tagen. Wenn Du nicht eingreifen musst, um niedrige Zuckerwerte zu korrigieren, sind die Einstellungen korrekt. If you are still having frequent or severe low glucose episodes then consider refining your DIA, basal, ISF and carb ratios. <br />  
    _The system will override your maxIOB settings to zero, which means if blood glucose is dropping it can reduce basal for you, but if blood glucose is rising then it will only increase basal if the IOB is negative (from a previous Low Glucose Suspend), otherwise basal rates will remain the same as your selected profile. You may temporarily experience spikes following treated hypos without the ability to increase basal on the rebound._  
* **Objective 5:** Tuning the closed loop, raising max IOB above 0 and gradually lowering BG targets 
  * Raise your maxIOB above 0 over a period of 1 day, the default is recommended to be 2 but you should slowly work up to this until you know your settings work for you.
  * Once confident on how much IOB suits your looping patterns then reduce your targets to your desired level.  
* **Objective 6:** Adjust basals and ratios if needed, and then enable auto-sens 
  * You can use [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) as a one off to check your basals remain accurate, or do a traditional basal test.
  * Enable [auto-sens](../Usage/Open-APS-features.html) over a period of 7 days and watch the white line on the homescreen graph show how your sensitivity to insulin may be rising or falling as a result of exercise or hormones etc, and keep an eye in the OpenAPS report tab how AndroidAPS is adjusting the basals and/or targets accordingly. <br />  
    _Don’t forget to record your looping in [this form](http://bit.ly/nowlooping) logging AndroidAPS as your type of DIY loop software, if you have not already done so._  
* **Objective 7:** Enabling additional features for daytime use, such as advanced meal assist 
  * Now you should feel confident with how AndroidAPS works and what settings reflect your diabetes best, then over a period of 28 days you can try additional features that automate even more of the work for you.