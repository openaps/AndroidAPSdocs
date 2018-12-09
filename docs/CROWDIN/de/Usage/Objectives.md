# Objectives (Ziele)

AndroidAPS hat eine Reihe von Zielen (objectives), die erreicht werden müssen, damit du an die Funktionen und Einstellungen von sicherem Looping herangeführt wirst. Sie stellen sicher, dass du alles, was in den Abschnitten weiter oben beschrieben wurde, korrekt installiert hast und dass du verstehst, was das System tut und warum du ihm vertrauen kannst.

Wenn du das **Smartphone wechselst** kannst du die Einstellungen exportieren, um deinen Fortschritt bei den Objectives beibehalten zu können. Neben dem Fortschritt bei den Zielen werden auch deine Sicherheitseinstellungen wie der maximale Bolus usw. gespeichert. Wenn du die Einstellungen nicht exportierst und wieder importierst, musst du mit den Zielen erneut von Anfang an beginnen. Es ist ratsam, die Einstellungen zur Sicherheit regelmäßig zu speichern. Details zum Export findest du weiter unten auf dieser Seite.  

* **Ziel 1:** Einrichten der Darstellung und Überwachung sowie analysieren der Basalraten und Faktoren 
  * Wähle die zu deinen Geräten passende Quelle für den Blutzuckerwert. See [BG Source](../Configuration/BG-Source.md) for more information.
  * Wähle die richtige Pumpe im Konfigurations-Generator (wähle virtuelle Pumpe wenn du ein Pumpenmodell benutzt, für das es keinen AndroidAPS-Treiber gibt) um sicherzustellen, dass die Pumpe ihren Status mit AndroidAPS teilen kann. If using DanaR pump then ensure you have followed [DanaR Insulin Pump](../Configuration/DanaR-Insulin-Pump.md) instructions to ensure the link between pump and AndroidAPS.
  * Befolge die [Nightscout-Anleitung](../Installing-AndroidAPS/Nightscout.md), um zu gewährleisten, dass Nightscout diese Daten empfangen und anzeigen kann. <br />  
    _Es kann sein, dass du auf das Auslesen des nächsten Zuckerwertes warten musst, bevor AndroidAPS es erkennt._
* **Ziel 2:** Den Open Loop Modus starten 
  * Wähle Open Loop entweder in den Einstellungen oder indem du lange auf den Loop Button in der linken oberen Ecke des Hauptbildschirms drückst.
  * Arbeite dich zur Einrichtung durch die [Voreinstellungen](../Configuration/Preferences.md).
  * Bestätige in einem Zeitraum von 7 Tagen mindestens 20 der temporären Basalratenanpassungen; gib sie jeweils von Hand in der Pumpe ein und bestätige in AndroidAPS, dass du sie akzeptiert hast. Überprüfe, ob diese Daten in AndroidAPS und Nightscout angezeigt werden.
  * Enable [temp targets](../Usage/temptarget.html) if necessary. Use hypo temp targets to prevent that the system will correct too strong because of a raising blood glucose after a hypo.  

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
  * Setze dein "Maximales Gesamt-IOB, das nicht überschritten werden darf [IE]" (in OpenAPS als "max-iob" bekannt) für einen Tag auf einen Wert größer als 0. Der empfohlene Standardwert ist 2, aber du solltest dich diesem Wert langsam annähern, bis du weißt, dass diese Einstellung für dich funktioniert.
  * Wenn du zuverlässig weißt, welcher IOB deinem Looping Muster entspricht, dann senke deinen Zielbereich auf den gewünschten Wert.  
* **Ziel 6:** Passe, falls notwendig, Basalraten und Faktoren an und aktiviere dann die Autosens-Funktion 
  * Du kannst [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) verwenden, um dafür zu sorgen, dass deine Basalraten korrekt bleiben oder einen traditionellen Basalratentest durchführen.
  * Schalte [Autosense](../Usage/Open-APS-features.md) für einen Zeitraum von 7 Tagen ein und beobachte die weiße Linie auf der Grafik auf dem Hauptbildschirm, die anzeigt, dass deine Sensibilität gegenüber Insulin auf Grund von Aktivitäten oder Hormonen steigt oder fällt. Schaue auf dem OpenAPS-Tab nach, wie AndroidAPS die Basalraten und/oder Zielwerte entsprechend anpasst. <br />  
    _Vergiss nicht, dich als Looper in [diesem Formular](http://bit.ly/nowlooping) zu registrieren, wenn du das bisher noch nicht getan hast. Gib AndroidAPS als Art deiner DIY Loop-Software an._

* **Objective 7:** Aktiviere zusätzliche oref0 Funktionen zum täglichen Gebrauch, wie z. B. den advanced meal assist (AMA)
  
  * Jetzt solltest du damit vertraut sein, wie AndroidAPS arbeitet und welche Einstellungen dich bei deiner Diabetesbehandlung am besten unterstützen
  * Then over a period of 28 days you can try additional features that automate even more of the work for you such as the [SMB chapter in this wiki](../Usage/Open-APS-features.html#advanced-meal-assist-ama>advanced meal assist</a></li>
</ul></li>
<li><p><strong>Objective 8:</strong> Enabling additional oref1 features for daytime use, such as super micro bolus (SMB)</p>

<ul>
<li>You must read the <a href=) and [chapter oref1 in openAPSdocs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) to understand how SMB works, especially what's the idea behind zero-temping.
  * Then you ought to  </ul></li> </ul>