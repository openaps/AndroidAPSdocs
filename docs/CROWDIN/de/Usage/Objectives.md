# Objectives (Ziele)

AndroidAPS hat eine Reihe von Zielen (objectives), die erreicht werden müssen, damit du an die Funktionen und Einstellungen von sicherem Looping herangeführt wirst.  Sie stellen sicher, dass du alles, was in den Abschnitten weiter oben beschrieben wurde, korrekt installiert hast und dass du verstehst, was das System tut und warum du ihm vertrauen kannst.

Wenn Du Dein **Smartphone wechselst**  kannst Du Deine [Einstellungen exportieren](../Usage/ExportImportSettings.md) , um Deinen Fortschritt bei der Bearbeitung der  Objectives zu behalten. Neben dem Fortschritt bei den Zielen werden auch deine Sicherheitseinstellungen wie der maximale Bolus usw. gespeichert. Wenn Du die Einstellungen nicht exportierst und wieder importierst, musst Du die Ziele von Anfang an neu erreichen.  Denke daran, regelmäßig ein [Backup Deiner Einstellungen](../Usage/ExportImportSettings.html) zu machen, um auf der sicheren Seite zu sein.

Wenn Du eines der Objectives (Ziele) neu starten willst, folge der [Anleitung weiter unten](Objectives-go-back-in-objectives).

## Ziel 1: Einrichten der Darstellung und Überwachung sowie analysieren der Basalraten und Faktoren

- Wähle die zu deinen Geräten passende Quelle für den Blutzuckerwert.  Weitere Informationen findest Du unter [BZ-Quelle](../Configuration/BG-Source.md).
- Wähle die richtige Pumpe im Konfigurations-Generator (wähle virtuelle Pumpe, wenn du ein Pumpenmodell benutzt, für das es keinen AndroidAPS-Treiber gibt) um sicherzustellen, dass die Pumpe ihren Status mit AndroidAPS teilen kann.
- Wenn Du eine DanaR Pumpe verwendest, dann stelle sicher, dass Du die [DanaR Insulinpumpen-Anleitung](../Configuration/DanaR-Insulin-Pump.md) befolgt hast, damit eine gute Verbindung zwischen der Pumpe und AndroidAPS gewährleistet ist.
- Befolge die  [Nightscout-Anleitung](../Installing-AndroidAPS/Nightscout.md), um zu gewährleisten, dass Nightscout diese Daten empfangen und anzeigen kann.
- Die URL im NSClient muss **OHNE /api/v1/** am Ende eingegeben werden - siehe [NSClient Einstellungen](Preferences-nsclient).

*Es kann sein, dass Du auf das Auslesen des nächsten Zuckerwertes warten musst, bevor AndroidAPS es erkennt.*

## Ziel 2: Lerne, wie AndroidAPS bedient wird

- Führe verschiedene Aktionen in AndroidAPS aus, die in dieser Zielaufgabe beschrieben werden.

- Klicke auf den orangenen Text "Noch nicht abgeschlossen", um zu den einzelnen Aufgaben zu kommen.

- Links zum Wiki helfen Dir weiter, falls Du an der einen oder anderen Stelle noch nicht so sicher sein solltest.

  ```{image} ../images/Objective2_V2_5.png
  :alt: Screenshot Ziel 2
  ```

(Objectives-objective-3-prove-your-knowledge)=
## Ziel 3: Belege Dein Wissen

- Beantworte Multiple-Choice-Fragen zu verschiedenen AndroidAPS- und Closed-Loop-Themen.

- Klicke auf den orangenen Text "Noch nicht abgeschlossen", um zur Seite mit den Fragen und Antwortmöglichkeiten zu kommen.

  ```{image} ../images/Objective3_V2_5.png
  :alt: Screenshot Ziel 3
  ```

- Links zum Wiki helfen Dir weiter, falls Du an der einen oder anderen Stelle noch nicht so sicher sein solltest.

- Für Version 2.8 wurde Objective 3 komplett von Muttersprachlern überarbeitet. Die neuen Fragen decken die bisherigen ab und fügen ein paar neue hinzu.

- Diese neuen Fragen führen dazu, dass einige Fragen unbeantwortet sind, obwohl Du Ziel (objective) 3 in der Vergangenheit bereits erfolgreich abgeschlossen hast.

- Diese unbeantworteten Fragen betreffen Dich nur, wenn Du ein neues Ziel (objective) starten möchtest. Anders gesagt: Wenn du alle Ziele (objectives) bereits erfolgreich abgeschlossen hast, verlierst du keine Funktionen in AAPS, wenn du die neuen Fragen nicht beantwortest.

## Ziel 4: Starte den Open Loop

- Wähle Open Loop entweder in den Einstellungen oder indem Du lange auf den Loop Button in der linken oberen Ecke des Hauptbildschirms drückst.
- Arbeite Dich durch die  [Einstellungen](../Configuration/Preferences.md), um AndroidAPS an Deine Anforderungen anzupassen.
- Bestätige in einem Zeitraum von 7 Tagen mindestens 20 der temporären Basalratenanpassungen; gib sie jeweils von Hand in der Pumpe ein und bestätige in AndroidAPS, dass du sie akzeptiert hast.  Überprüfe, ob diese Daten in AndroidAPS und Nightscout angezeigt werden.
- Aktiviere falls notwendig [temporäre Ziele](../Usage/temptarget.md). Nutze das Hypo Temp Target um zu verhindern, dass AAPS aufgrund des Blutzuckeranstiegs nach einer Hypo zu stark korrigiert.

### Anzahl der Benachrichtigungen reduzieren

- Um die Anzahl der zu bestätigenden Vorschläge im Open Loop zu reduzieren, setze einen weiteren Zielbereich (z.B. 90-150 mg/dl oder 5,0-8,5 mmol/l).

- Ggf. kannst Du nachts auch das obere Limit höher setzen oder den Open Loop ganz pausieren.

- In den Einstellungen kannst Du einen minimalen Prozentwert setzen, der erreicht werden muss, bevor eine Änderung der Basalrate vorgeschlagen wird.

  ```{image} ../images/OpenLoop_MinimalRequestChange2.png
  :alt: Open Loop Mindeständerung
  ```

- Auch musst Du nicht alle fünf Minuten auf jeden einzelnen Vorschlag reagieren...

## Ziel 5: Open Loop inklusive der temporären Basalratenvorschläge verstehen

- Versuche zu verstehen wie die Empfehlungen für die temporäre Basalraten zustandekommen, indem Du [determine basal logic](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html) liest und Dich sowohl mit den [Vorhersagelinien auf dem Android APS Startbildschirm](Screenshots-prediction-lines)/Nightscout als auch mit den Ergebnissen der Berechnungen auf dem OpenAPS-Reiter beschäftigst.

Es ist möglicherweise sinnvoll, wenn du das Ziel höher als üblich ansetzt, bis du den Berechnungen und Einstellungen vertraust.  Das System erlaubt:

- einen niedrigen Zielwert von mindestens 4 mmol (72 mg/dl) oder höchstens 10 mmol (180 mg/dl)
- einen hohen Zielwert von mindestens 5 mmol (90 mg/dl) und höchstens 15 mmol (225 mg/dl)
- ein temporäres Ziel als Einzelwert kann im Bereich von 4 mmol bis 15 mmol (72 mg/dl bis 225 mg/dl) liegen

Der Zielwert ist der Wert, auf dem die Berechnungen basieren und nicht der gleiche wie der, den du als Zuckerwert anstrebst.  Wenn Du einen sehr großen Zielbereich (z.B. 3 mmol / 50 mg/dl oder mehr) wirst Du kaum Aktivitäten von AndroidAPS feststellen. Der vorhergesagte Glukosewert wird mit hoher Wahrscheinlichkeit innerhalb Deines Zielbereichs liegen und daher nicht viele temporäre Änderungen an der Basalrate vorgeschlagen werden.

Vielleicht möchtest Du mit der Anpassung der Werte für einen engeren Zielbereich experimentieren (z.B. 1 mmol/l bzw. 20 mg/dl oder weniger) und beobachten, wie sich das Verhalten des Systems daraufhin ändert.

Du kannst die Anzeige Deines Zielbereichs (grüne Linien) durch die Änderung der Werte für die Niedrig-/ und Hoch-Markierungen in den [Einstellungen](../Configuration/Preferences.md) > Zielbereich für die Grafikanzeige anpassen.

```{image} ../images/sign_stop.png
:alt: Stoppzeichen
```

### Falls Du eine virtuelle Pumpe verwendest darfst Du nicht zum 6. Ziel wechseln. Klicke nicht auf 'Bestätigen/Verify' am Ende des 5. Ziels.

```{image} ../images/blank.png
:alt: leer
```

(Objectives-objective-6-starting-to-close-the-loop-with-low-glucose-suspend)=
## Ziel 6: Closed Loop mit Abschaltung bei niedrigen Glukose-Werten

```{image} ../images/sign_warning.png
:alt: Warnzeichen
```

### Im Ziel 6 wird die Basalrate bei zu erwartenden niedrigen Glukose-Werten abgeschaltet werden. Der 'closed loop' wird im Ziel 6 keinen Korrekturbolus bei hohen Werten abgeben. Hohe Glukose-Werte müssen von Dir manuell korrigiert werden!

- Voraussetzung: Wenn Du den Loop mit der Abschaltung bei niedrigen Glukose-Werten nutzen willst, muss ein getestetes Profil (Basalrate, Korrektur- und Essensfaktoren) in AAPS gespeichert sein. Du kannst sonst in eine Hypo geraten, die Du manuell behandeln musst. Ein gut getestetes Profil wird Dir helfen, dass Du in den fünf Tagen seltener in eine Hypo kommst, die Du behandeln musst. **Starte das Ziel 6 NICHT, wenn Du immer noch häufig Situationen mit niedrigen oder sehr niedrigen Glukosewerten hast. Passe zuerst DIA, Basalrate, Korrekturfaktoren (ISF) und Essenfaktoren an und teste diese, bevor Du das Ziel 6 startest.**
- Du musst Deine Einstellungen noch nicht verändern. Während Du Dich im Ziel 6 befindest, wird maxIOB intern automatisch auf Null gesetzt. **Wenn Du zu Ziel 7 übergehst, wird es diesen 'override' nicht mehr geben.**
- Das System wird Deinen maxIOB Wert auf Null setzen (und Deinen Wert damit überschreiben). Wenn Deine Glukosewerte dann fallen, kann AAPS damit Deine Basalrate reduzieren oder aussetzen. Sollten die Glukosewerte steigen, wird das Basal nur dann erhöht, wenn Dein IOB negativ ist (z.B. nach dem Aussetzen der Basalrate wg. vorangegangener niedriger Werte). In allen anderen Fällen wird die Standard-Basalrate Deines aktuellen Profils verwendet. **Hohe Werte müssen deshalb von Dir manuell mit Insulin korrigiert werden.**
- Wenn Dein Basal-IOB negativ ist (siehe Bildschirmausschnitt unten), kann auch im Ziel 6 eine TBR > 100% gesetzt werden.

```{image} ../images/Objective6_negIOB.png
:alt: Beispiel negatives IOB
```

- Nutze einen zusätzlichen Sicherheitspuffer, in dem Du Deinen Zielbereich etwas höher setzt, als Du es normalerweise tun würdest.
- Aktiviere den Modus 'Low Glucose Suspend' (Abschaltung bei niedrigen Glukosewerten), indem Du lange auf das Loop-Symbol in der oberen rechten Bildschirmecke drückst (und festhälst) und dann den LGS-Modus auswählst.
- Aktive temporäre Basalraten erkennst Du an der hellblauen Textfarbe auf dem Startbildschirm und an der hellblauen Basallinie in der Grafik.
- Wenn du eine Hypo korrigierst, kann es vorkommen, dass danach Spitzen auftreten, die du nicht durch Erhöhung der Basalrate korrigieren kannst.

(Objectives-objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets)=
## Ziel 7: Justiere den Closed Loop, erhöhe maxIOB über 0 und setze den Zielbereich langsam herunter

- Wähle 'Closed Loop' entweder in den [Einstellungen](../Configuration/Preferences.md) oder indem Du lange auf das Loop-Symbol in der oberen rechten Bildschirmecke drückst und halte ihn für einen Tag aktiv.

- Setze den Wert 'Maximales Gesamt-IOB, das nicht überschritten werden darf' (in OpenAPS: 'max-iob') auf über Null. Der empfohlene Standardwert ist bei Nutzung des SMB-Algorithmus: "ein durchschnittlicher Mahlzeitenbolus + das Dreifache Deiner größten täglichen Basalrate" (größte stündliche Basalrate = maximaler Basalwert pro Stunde innerhalb des 24-Stunden-Rasters eines Tages) und bei Nutzung des AMA-Algorithmus: das Dreifache Deiner höchsten täglichen Basalrate. Du solltestDich diesen Werten langsam annähern, bis Du weißt, dass die Einstellung für Dich funktionieren.

  Betrachte diese Empfehlung als Ausgangspunkt. Wenn Du den Faktor '3x' verwendest und feststellst, dass AAPS Deinen BZ zu stark senkt, reduziere diesen Faktor (z.B. auf '2x'). Wenn Du Insulinresistenzen feststellst, kannst Du diesen Faktor vorsichtig Schritt für Schritt erhöhen.

  ```{image} ../images/MaxDailyBasal2.png
  :alt: max daily basal
  ```

- Wenn Du zuverlässig weißt, welcher IOB Deinem Looping-Muster entspricht, dann senke Deinen Zielbereich auf den gewünschten Wert.

(Objectives-objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens)=
## Ziel 8: Passe, falls notwendig, Basalraten und Faktoren an und aktiviere dann die Autosens-Funktion

- Du kannst  [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) verwenden, um dafür zu sorgen, dass Deine Basalraten korrekt bleiben oder einen traditionellen Basalratentest durchführen.
- Schalte [Autosens](../Usage/Open-APS-features.md) für einen Zeitraum von 7 Tagen ein und beobachte die weiße Linie auf der Grafik auf dem Hauptbildschirm, die anzeigt, dass deine Sensibilität gegenüber Insulin auf Grund von Aktivitäten oder Hormonen steigt oder fällt. Schaue auf dem OpenAPS-Tab nach, wie AndroidAPS die Basalraten und/oder Zielwerte entsprechend anpasst.

*Vergiss nicht, dich als Looper in* [diesem Formular](https://bit.ly/nowlooping) *zu registrieren, wenn du das bisher noch nicht getan hast. Gib AndroidAPS als Art deiner DIY Loop-Software an.\**

(Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)=
## Ziel 9: Aktiviere zusätzliche oref1 Funktionen zum täglichen Gebrauch, wie z. B. den super micro bolus (SMB)

- Du musst das [SMB-Kapitel in diesem Wiki](Open-APS-features-super-micro-bolus-smb) und das [Kapitel oref1 in der openAPS Dokumentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) lesen, um zu verstehen wie der SMB arbeitet, insbesondere was Sinn und Zweck des "zero-temping" ist.
- Danach solltest du [maxIOB erhöhen](Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob), damit SMB korrekt funktioniert. maxIOB enthält nun das gesamte IOB, nicht nur das hinzugefügte Basalinsulin. Das bedeutet, wenn Du einen Mahlzeiten-Bolus von 8 IE abgegeben willst und in den Einstellungen ein maxIOB von 7 IE hinterlegt hast, wird solange kein SMB abgegeben, bis das IOB wieder unter 7 IE gefallen ist. Beginne mit maxIOB = durchschnittlicher Mahlzeiten-Bolus + 3x die größe stündliche Basalrate (größte stündliche Basalrate = maximaler Basalwert pro Stunde innerhalb des 24-Stunden-Rasters eines Tages - in [Ziel 7](Objectives-objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets) findest Du eine Grafik zur Erklärung.
- Wenn Du von AMA zu SMB wechselst, muss der Standardwert von 'min_5m_carbimpact' in den Absorptions-Einstellungen von 3 auf 8 erhöht werden. Wenn du also von AMA auf SMB umstellst, dann musst du den Wert manuell auf 8 erhöhen.

(Objectives-objective-10-automation)=
## Ziel 10: Automatisierung

- Du musst Ziel 10 starten, um [Automatisierungen](../Usage/Automation.md) nutzen zu können.
- Stelle sicher, dass Du alle vorausgegangenen Ziele inkl. des [Wissenstest](Objectives#objective-3-prove-your-knowledge) abgeschlossen hast.
- Andere, von Dir bereits abgeschlossene Ziele, werden dadurch nicht verändert. Du behälst alle Objectives, die Du bereits abgeschlossen hast!

(Objectives-go-back-in-objectives)=
## Objective (Ziel) neu starten

Wenn Du aus welchem Grund auch immer ein Objective (Ziel) neu starten willst, klicke auf "Ziel neu starten".

```{image} ../images/Objective_ClearFinished.png
:alt: Objective (Ziel) neu starten

```

## Objectives (Ziele) in Android APS-Versionen vor 3.0

Mit dem AndroidAPS Release 3.0 wurde ein Objective (Ziel) entfernt.  Diejenigen, die eine Android APS version 2.8.2.1 verwenden, weil sie eine Android-Version vor Version 9 nutzen, finden [hier](../Usage/Objectives_old.md) die dort verwendeten Ziele.
