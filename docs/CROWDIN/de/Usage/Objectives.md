# Objectives (Ziele)

AndroidAPS hat eine Reihe von Zielen (objectives), die erreicht werden müssen, damit du an die Funktionen und Einstellungen von sicherem Looping herangeführt wirst. Sie stellen sicher, dass du alles, was in den Abschnitten weiter oben beschrieben wurde, korrekt installiert hast und dass du verstehst, was das System tut und warum du ihm vertrauen kannst.

Wenn Du Dein **Smartphone wechselst** kannst Du Deine [Einstellungen exportieren](../Usage/Objectives#export-import-settings) um die Objectives nicht von vorn beginnen zu müssen. Neben dem Fortschritt bei den Zielen werden auch deine Sicherheitseinstellungen wie der maximale Bolus usw. gespeichert. Wenn du die Einstellungen nicht exportierst und wieder importierst, musst du mit den Zielen erneut von Anfang an beginnen. Es ist ratsam, die Einstellungen zur Sicherheit regelmäßig zu speichern. Details zum Export findest du weiter unten auf dieser Seite.  

### Ziel 1: Einrichten der Darstellung und Überwachung sowie analysieren der Basalraten und Faktoren

* Wähle die zu deinen Geräten passende Quelle für den Blutzuckerwert. Weitere Informationen findest du unter [BZ-Quelle](../Configuration/BG-Source.md).
* Wähle die richtige Pumpe im Konfigurations-Generator (wähle virtuelle Pumpe wenn du ein Pumpenmodell benutzt, für das es keinen AndroidAPS-Treiber gibt) um sicherzustellen, dass die Pumpe ihren Status mit AndroidAPS teilen kann. Wenn du eine DanaR Pumpe verwendest, dann stelle sicher, dass du die [DanaR Insulin Pumpen Anleitung](../Configuration/DanaR-Insulin-Pump.md) befolgt hast, damit eine stabile Verbindung zwischen der Pumpe und AndroidAPS gewährleistet ist.
* Befolge die [Nightscout-Anleitung](../Installing-AndroidAPS/Nightscout.md), um zu gewährleisten, dass Nightscout diese Daten empfangen und anzeigen kann.

*Es kann sein, dass du auf das Auslesen des nächsten Zuckerwertes warten musst, bevor AndroidAPS es erkennt.*

### Ziel 2: Starte den Open Loop

* Wähle Open Loop entweder in den Einstellungen oder indem du lange auf den Loop Button in der linken oberen Ecke des Hauptbildschirms drückst.
* Arbeite dich zur Einrichtung durch die [Voreinstellungen](../Configuration/Preferences.md).
* Bestätige in einem Zeitraum von 7 Tagen mindestens 20 der temporären Basalratenanpassungen; gib sie jeweils von Hand in der Pumpe ein und bestätige in AndroidAPS, dass du sie akzeptiert hast. Überprüfe, ob diese Daten in AndroidAPS und Nightscout angezeigt werden.
* Aktiviere falls notwendig[temp targets](../Usage/temptarget.md) (temporäre Ziele). Nutze das Hypo Temp Target um zu verhindern, dass AAPS aufgrund des Blutzuckeranstiegs nach einer Hypo zu stark korrigiert. 

### Ziel 3: Open Loop inklusive der temporären Basalratenvorschläge verstehen

* Lerne das Konzept hinter den Basalratenvorschlägen kennen, indem du dir [Basalraten verstehen](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html) durchliest sowie die Vorhersagelinie auf dem AndroidAPS Hauptbildschirm und die Zusammenfassung der Ausgaben von den Berechnungen in deinem OpenAPS Tab anschaust.

*Es ist möglicherweise sinnvoll, wenn du das Ziel höher als üblich ansetzt, bis du den Berechnungen und Einstellungen vertraust. Das System erlaubt für den unteren Zielwert Werte zwischen 4 mmol/l und 10 mmol/l (= 72 mg/dl bis 180 mg/dl) und für den oberen Zielwert Werte zwischen 5 mmol/l und 15 mmol/l (= 90 mg/dl und 270 mg/dl). Ein temporärer Zielwert ist ein einzelner Wert, der irgendwo zwischen 4 mmol/l und 15 mmol/l (= 72 mg/dl bis 180 mg/dl) liegen kann. Der Zielwert ist der Wert, auf dem die Berechnungen basieren und nicht der gleiche wie der, den du als Zuckerwert anstrebst. Wenn dein Zielwert sehr weitgefasst ist (sagen wir eine Spanne von 3 mmol/l bzw. 54 mg/dl oder mehr) wirst du nicht viele Vorschläge für temporäre Basalraten erhalten, da die Vorhersage für den Zuckerwert oft innerhalb dieser hohen Toleranz liegt. Vielleicht möchtest du mit der Anpassung der Werte für einen engeren Zielbereich experimentieren (sagen wir 1 mmol/l bzw. 18 mg/dl oder weniger) und beobachten, wie sich das Verhalten des Systems daraufhin ändert. Auf dem Startbildschirm wird Dein Zielbereich mit grünen Linien im Diagramm dargestellt. Diesen kannst Du in den Einstellungen unter 'Zielbereich für die Grafikanzeige' (scrolle weit nach unten) einstellen.*

**Falls Du eine virtuelle Pumpe verwendest darfst Du nicht zum 4. Ziel wechseln. Klicke nicht auf 'Bestätigen/Verify' am Ende des 3. Ziels.**

### Ziel 4: Closed Loop mit Abschaltung bei niedrigen Glukose-Werten

* Wähle Closed Loop entweder in den Einstellungen oder indem du lange auf den Loop Button in der linken oberen Ecke des Hauptbildschirms drückst.
* Stelle deinen Zielbereich etwas höher ein, als du es normalerweise tun würdest, um auf der sicheren Seite zu sein.
* Die Aktivität der temporären Basalraten kannst du anhand des blauen Textes auf dem Hauptbildschirm oder des blauen Bereichs in der Grafik beobachten.
* Stelle sicher, dass deine Einstellungen für AndroidAPS korrekt sind. Beobachte das Verhalten über einen Zeitraum von 5 Tagen. Wenn Du nicht eingreifen musst, um niedrige Zuckerwerte zu korrigieren, sind die Einstellungen korrekt. Wenn du nach wie vor häufige oder schwere Unterzuckerungen hast, dann solltest du DIA, Basalraten, ISF oder Kohlenhydrat-Faktoren anpassen.

*Das System wird deine maxIOB Einstellungen auf 0 setzen, was bedeutet, dass es bei fallenden Zuckerwerten die Basalrate herabsetzen kann, aber wenn die Zuckerwerte steigen, werden sie nur dann korrigiert, wenn der IOB negativ ist (von einer vorangegangenen niedrigen Zuckerwert Abschaltung). Anderenfalls bleibt die Basalrate die gleiche wie in deinem ausgewählten Profil. Wenn du eine Hypo korrigierst, kann es vorkommen, dass danach Spitzen auftreten, die du nicht durch Erhöhung der Basalrate korrigieren kannst.*

### Ziel 5: Stelle den Closed Loop fein ein, erhöhe max IOB über 0 und setze den Zielbereich langsam herunter.

* Setze dein "Maximales Gesamt-IOB, das nicht überschritten werden darf [IE]" (in OpenAPS als "max-iob" bekannt) für einen Tag auf einen Wert größer als 0. Der empfohlene Standardwert ist "ein durchschnittlicher Mahlzeitenbolus + das Dreifache Deiner größten täglichen Basalrate" (größte stündliche Basalrate = maximaler Basalwert pro Stunde innerhalb des 24-Stunden-Rasters eines Tages) (für den SMB Algoyrithmus), oder das Dreifache Deiner höchsten täglichen Basalrate (für den älteren AMA Algorithmus), aber du solltest dich diesem Wert langsam annähern, bis du weißt, dass die Einstellung für Dich funktioniert).
  
      ![max daily basal in Deiner Basalratenkurve](../images/MaxDailyBasal.png)
      

* Wenn du zuverlässig weißt, welcher IOB deinem Looping Muster entspricht, dann senke deinen Zielbereich auf den gewünschten Wert.

### Ziel 6: Passe, falls notwendig, Basalraten und Faktoren an und aktiviere dann die Autosens-Funktion

* Du kannst [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) verwenden, um dafür zu sorgen, dass deine Basalraten korrekt bleiben oder einen traditionellen Basalratentest durchführen.
* Schalte [Autosense](../Usage/Open-APS-features.md) für einen Zeitraum von 7 Tagen ein und beobachte die weiße Linie auf der Grafik auf dem Hauptbildschirm, die anzeigt, dass deine Sensibilität gegenüber Insulin auf Grund von Aktivitäten oder Hormonen steigt oder fällt. Schaue auf dem OpenAPS-Tab nach, wie AndroidAPS die Basalraten und/oder Zielwerte entsprechend anpasst.

*Vergiss nicht, dich als Looper in [diesem Formular](http://bit.ly/nowlooping) zu registrieren, wenn du das bisher noch nicht getan hast. Gib AndroidAPS als Art deiner DIY Loop-Software an.*

### Ziel 7: Aktiviere zusätzliche oref0 Funktionen zum täglichen Gebrauch, wie z. B. den advanced meal assist (AMA)

* Jetzt solltest du damit vertraut sein, wie AndroidAPS arbeitet und welche Einstellungen dich bei deiner Diabetesbehandlung am besten unterstützen
* Für einen Zeitraum von 28 Tagen kannst du zusätzliche Funktionen ausprobieren, die dir noch mehr Arbeit abnehmen, so wie der [erweiterte Mahlzeitenassistent](../Usage/Open-APS-features#advanced-meal-assist-ama)

### Ziel 8: Aktiviere zusätzliche oref1 Funktionen zum täglichen Gebrauch, wie z. B. den super micro bolus (SMB)

* Du musst das [SMB-Kapitel in diesem Wiki](../Usage/Open-APS-features#super-micro-bolus-smb) und das [Kapitel oref1 in der openAPS Dokumentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) lesen, um zu verstehen wie der SMB arbeitet, insbesondere was Sinn und Zweck des "zero-temping" ist.
* Danach solltest du [maxIOB erhöhen](../Usage/Open-APS-features#maximum-total-iob-openaps-cant-go-over-openaps-max-iob), damit SMB korrekt funktioniert. maxIOB enthält nun das gesamte IOB, nicht nur das hinzugefügte Basalinsulin. Das bedeutet, wenn Du einen Mahlzeiten-Bolus von 8 IE abgegeben willst und in den Einstellungen ein maxIOB von 7 IE hinterlegt hast, wird kein SMB abgegeben, bis das IOB wieder unter 7 IE gefallen ist. Beginne mit maxIOB = durchschnittlicher Mahlzeiten-Bolus + 3x die größe stündliche Basalrate (größte stündliche Basalrate = maximaler Basalwert pro Stunde innerhalb des 24-Stunden-Rasters eines Tages - bei \[Objective 5\](.../Usage/Objectives#objective-5-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets) findest Du eine Grafik zu Erklärung). * min_5_carbimpact, die Standardeinstellung für den Abbau der Kohlenhydrate im Köper, muss in den Einstellungen von 3 (AMA) auf 8 (SMB) geändert werden. Wenn du also von AMA auf SMB umstellst, dann musst du den Wert manuell auf 8 erhöhen.
* Der Standardwert von min_5m_carbimpact in den Apsorptions-Einstellungen muss von 3 auf 8 erhöht werden, wenn du von AMA zum SMB wechselst. Wenn du also von AMA auf SMB umstellst, dann musst du den Wert manuell auf 8 erhöhen.

## Einstellungen exportieren & importieren

* **Exportiere die Einstellungen** auf Deinem alten Smartphone
  
  * Hamburger Menü (drei Striche oben links am Bildschirm)
  * Wartung
  * Exportiere die Einstellungen
  * Der Speicherort der Datei wird angezeigt.
    
    ![AAPS Einstellungen exportieren](../images/AAPS_ExportSettings.png)

* **Übertrage** die exportierten Einstellungen vom alten auf das neue Smartphone

* **Installiere AndroidAPS** auf dem neuen Smartphone.
* **Importiere die Einstellungen** auf Deinem neuen Smartphone 
  * Hamburger Menü (drei Striche oben links am Bildschirm)
  * Wartung
  * Importiere die Einstellungen
* **Hinweis für Dana RS Nutzer:** 
  * Da die Verbindungseinstellungen zusammen mit den anderen Einstellungen in AAPS importiert werden, "kennt" AAPS deine Pumpe bereits und startet daher keinen Bluetooth-Scan. Bitte stelle die Bluetooth-Verbindung zwischen Smartphone und Pumpe manuell her.