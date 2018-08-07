# Beschränkungen (objectives)

**1. Objective: Nimm die Grundeinstellungen vor**

  * Wähle im Konfigurations-Generator > BZ-Quelle die richtige Blutzuckerquelle. Siehe dazu [BZ-Quelle](http://androidaps.readthedocs.io/en/latest/DE/voraussetzungen.html#bz-quelle-cgm-fgm)
  * Wähle im Konfigurations-Generator > Pumpe deine Pumpe (oder wähle "Virtuelle Pume", wenn du eine nicht loopbare Pumpe hast und Handeingaben machst). Wenn du eine loopbare Pumpe verwendest, dann versichere dich, dass du [die Pumpe richtig eingestellt](http://androidaps.readthedocs.io/en/latest/DE/einstellungen.html#pumpen-einstellungen) und die [AAPS-Dokumentation](http://wiki.androidaps.org) gelesen hast.
  * [Richte Nightscout ein](http://androidaps.readthedocs.io/en/latest/DE/einstellungen.html#nightscout-client)
  
    _Es könnte sein, dass du für den nächsten BZ ca. 5 Minuten warten musst, damit ihn AAPS erhält und akzeptiert._
 
**2. Objective: Beginne im Open Loop Modus**

  * Wähle [Open Loop](http://androidaps.readthedocs.io/en/latest/DE/konfigurations-generator.html#open-loop)
  * Aktiviere mindesten 20 vorgeschlagene temp. Basalraten manuell über einen Zeitraum von 7 Tagen (Falls du eine andere Pumpe verwendest, gebe die Vorschläge in der Pumpe ein und bestätige es in AAPS). Versichere dich, dass die Daten in AAPS und Nightscout angezeigt werden.
 
**3. Objective: Verstehe den Open Loop Modus mit seinen temporären Basal-Empfehlungen**
  * Versuche die Logik hinter den Empfehlungen zu verstehen, indem du dir [die OpenAPS-Dokumentation dazu](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html), die Vorhersagelinie in AAPS/Nightscout und die Ergebnisse im OpenAPS-Reiter ansiehst.
  
    _Stoppe hier, wenn du den Open Loop mit der virtuellen Pumpe verwendest._

**4. Objective: Starte den Closed Loop Modus mit Hypoabschaltung**

  * Wähle [Closed Loop](http://androidaps.readthedocs.io/en/latest/DE/konfigurations-generator.html#closed-loop)
  * Setze deinen Zielbereich, um sicher zu gehen, ein wenig höher als üblich.
  * Sehe dir an wie die temp. Basalraten aktiv sind, indem du die blaue Linie auf der Homescreen Grafik, oder in Zahlen darüber kontrollierst.
  * Gehe sicher, dass deine Einstellungen korrekt sind, wenn du über 5 Tage keinen Unterzucker mehr behandeln musstest, sollten die Einstellungen in Ordnung sein. Im anderen Falle solltest du deine Faktoren noch einmal kontrollieren.
<br><br>_Das System ist auf einen maxIOB von 0 begrenzt, d.h. dass der Loop eine Hypo abfangen kann, aber keine Steigungen, das System kann die BR nur erhöhen wenn der IOB unter 0 liegt und dadurch auf 0 bringen.._
 
**5. Objective: Starte den Closed Loop Modus mit automatischer Korrektur bei Werten außerhalb des Zielbereichs**

  * Erhöhe die Sicherheitseinstellung: Konfigurations-Generator > APS > AMA oder SMB > "MaximalesBasal-IOB, das OpenAPS abgeben darf" (in OpenAPS "maxIOB" genannt) auf über 0 über einen Zeitraum von einem Tag. Dieser Wert bestimmt, bis zu welchem IOB-Wert AAPS im Closed Loop Modus regeln darf. Liegt das aktuelle IOB (z.B nach einem Mahlzeit-Bolus) über dem festgelegten Wert, dann macht der Loop zunächst nichts, bis die IOB-Grenze wieder unterschritten ist. Standardmäßig wird zu Beginn eine Einstellung auf 2 vorgeschlagen, aber du solltest dich langsam rauf arbeiten bis du weißt, welcher Wert für dich in Ordnung ist. Das ist sehr individuell und hängt stark vom durchschnittlichen Insulinbedarf ab. Du kannst aber keinen beliebigen Wert wählen. AAPS begrenzt als "hard limit" den Wert danach, welches Patientenalter du unter Einstellungen gewählt hast. Bei Kindern ist der zulässige Wert am niedrigsten, bei insulinresistenten Erwachsenen am höchsten.
  * Wenn du dir mit deiner Einstellung sicher bist, verringere deinen Ziel-BZ-Wert schrittweise auf deinen gewünschten Zeilbereich/Zielwert.
  * Das System erlaubt dir den Zielbereich im Bereich von 60-180 zu setzen.
 
**6. Objective: Justiere die Basalraten und Faktoren nach und aktiviere die Empfindlichkeitserkennung**

  * Du kannst [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) verwenden, um deine Basalrate und Faktoren zu kontrollieren oder einen altmodischen Basalratentest machen. Siehe auch [Diabetes-Therapie fürs Loopen tunen](http://androidaps.readthedocs.io/en/latest/DE/tippstricks.html#diabetes-therapie-furs-loopen-tunen)
  * Aktiviere die Empfindlichkeitserkennung [Autosens](http://androidaps.readthedocs.io/en/latest/DE/konfigurations-generator.html#empfindlichkeitserkennung) über einen Zeitraum von 7 Tagen und kontrolliere die weiße Linie im Homescreen (Sen-Kästchen aktiviert), um zu sehen wie sich deine Sensitivität ändert, und kontrolliere regelmäßig im OpenAPS Tab wie AAPS deine Basalraten und Faktoren ändert. Autosens beginnt erst einige Stunden nach der Aktivierung zu wirken (je nachdem, welchen Zeitraum du ausgewählt hast), damit genügend Daten vorhanden sind. Wundere dich also nicht, wenn nach der Aktivierung im OpenAPS-Reiter erstmal "Autosens deactivated" erscheint.

    _Trage dich bitte in diese [Liste](http://bit.ly/nowlooping) ein und wähle AAPS als deine DIY Software aus._
 
**7. Objective: Aktiviere AMA**

  * Nun solltest du dich mit AAPS sicher fühlen und wissen, welche Einstellungen für deinen Diabetes am besten passen. 
  * Über einen Zeitraum von 14 Tagen kannst du den Advanced Meal Assist - AMA ausprobieren. Gehe dazu in den Konfigurations-Generator > APS und aktiviere OpenAPS AMA.

**8. Objective: Probiere den SMB aus**

  * Nun sollte AMA stabil laufen. Deine Blutzuckerwerte sollten auf Grund der feingetunten Faktoren und Sicherheitsvariablen gut eingestellt sein. 
  * Über einen Zeitraum von 14 Tagen kannst du den Advanced Meal Assist - AMA ausprobieren. Gehe dazu in den Konfigurations-Generator > APS und aktiviere OpenAPS SMB.
