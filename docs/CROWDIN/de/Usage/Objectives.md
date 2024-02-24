# Objectives (Ziele)

AAPS has a series of Objectives that need to be completed to walk you through the features and settings of safe looping.  Sie stellen sicher, dass du alles, was in den Abschnitten weiter oben beschrieben wurde, korrekt installiert hast und dass du verstehst, was das System tut und warum du ihm vertrauen kannst.

Wenn Du Dein **Smartphone wechselst**  kannst Du Deine [Einstellungen exportieren](../Usage/ExportImportSettings.md) , um Deinen Fortschritt bei der Bearbeitung der  Objectives zu behalten. Neben dem Fortschritt bei den Zielen werden auch deine Sicherheitseinstellungen wie der maximale Bolus usw. gespeichert. Wenn Du die Einstellungen nicht exportierst und wieder importierst, musst Du die Ziele von Anfang an neu erreichen.  Denke daran, regelmäßig ein [Backup Deiner Einstellungen](../Usage/ExportImportSettings.html) zu machen, um auf der sicheren Seite zu sein.

Wenn Du eines der Objectives (Ziele) neu starten willst, folge der [Anleitung weiter unten](Objectives-go-back-in-objectives).

## Ziel 1: Einrichten der Darstellung und Überwachung sowie analysieren der Basalraten und Faktoren

- Wähle die zu deinen Geräten passende Quelle für den Blutzuckerwert.  Weitere Informationen findest Du unter [BZ-Quelle](../Configuration/BG-Source.md).
- Select the right Pump in ConfigBuilder (select Virtual Pump if you are using a pump model with no AAPS driver for looping) to ensure your pump status can communicate with AAPS.
- If using DanaR pump then ensure you have followed [DanaR Insulin Pump](../Configuration/DanaR-Insulin-Pump.md) instructions to ensure the link between pump and AAPS.
- You need to establish a data repository/reporting platform to complete this objective. That can be accomplished with either Nightscout or Tidepool (or both). Follow instructions at the [Nightscout](../Installing-AndroidAPS/Nightscout.md) or [Tidepool](../Installing-AndroidAPS/Tidepool.md) page for instructions.
- Die URL im NSClient muss **OHNE /api/v1/** am Ende eingegeben werden - siehe [NSClient Einstellungen](Preferences-nsclient).

*You may need to wait for the next blood glucose reading to arrive before AAPS will recognise it.*

## Objective 2: Learn how to control AAPS

- Perform several actions in AAPS as described in this objective.

- Klicke auf den orangenen Text "Noch nicht abgeschlossen", um zu den einzelnen Aufgaben zu kommen.

- Links zum Wiki helfen Dir weiter, falls Du an der einen oder anderen Stelle noch nicht so sicher sein solltest.

  ```{image} ../images/Objective2_V2_5.png
  :alt: Screenshot Ziel 2
  ```

(Objectives-objective-3-prove-your-knowledge)=

## Ziel 3: Belege Dein Wissen

Objective 3 is a multiple choice test based on questions designed to test your theoretical knowledge of **AAPS**.

Some users find Objective 3 to be the most difficult objective to complete. Please do read the AAPS documents in conjunction with the questions. If you are genuinely stuck after researching the **AAPS** documents, please search or ask for help on the Facebook or Discord group. These groups can provide friendly hints or redirect you to the relevant part of the **AAPS** documents.

To proceed with Objective 3, click on the orange text “Not completed yet” to access the relevant question. Please read each question and select your answer(s).



Within each question, a hyperlink to the **AAPS** documents will guide you to the relevant section of the document which you should read in order to locate the correct answer.


[Obj3_Screenshot 2023-12-05 223422](https://github.com/openaps/AndroidAPSdocs/assets/137224335/77347516-e24e-459d-98ab-acbb49a3d4e8)![image](https://github.com/openaps/AndroidAPSdocs/assets/137224335/ca756b8e-efbc-4427-b281-ac953ce16718)



For each question, there may be more than one answer that is correct! If an incorrect answer is selected, the question will be time locked for a certain amount of time (60 minutes) before you can go back and answer the question.


After updating to a new version of **AAPS**, new questions may be added to cover a prevalent issue picked up by **AAPS** or alternatively to test your knowledge of a new feature of **AAPS** as released.


When **AAPS** is installed for the first time, you will have to complete Objective 3 entirely in order to move onto Objective 4. Each objective is required to be completed in sequential order. New features will gradually be unlocked as progress is made through the objectives.

__What happens if new questions are added later to Objective 3?__ From time to time, new features are added to **AAPS** which may require a new question to be added to Objective 3. As a result, any new question added to Objective 3 will be marked as “incomplete” because **AAPS** will require you to action this. As each Objective is independent, you will not lose the existing functionality of **AAPS** providing the other objectives remain completed.


## Ziel 4: Starte den Open Loop

- Wähle Open Loop entweder in den Einstellungen oder indem Du lange auf den Loop Button in der linken oberen Ecke des Hauptbildschirms drückst.
- Arbeite Dich durch die  [Einstellungen](../Configuration/Preferences.md), um AndroidAPS an Deine Anforderungen anzupassen.
- Manually enact at least 20 of the temporary basal rate suggestions over a period of 7 days; input them to your pump and confirm in AAPS that you have accepted them.  Ensure this data shows in AAPS and Nightscout.
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

- Start to understand the thinking behind the temp basal recommendations by looking at the [determine basal logic](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html) and both the [forecast line in AAPS homescreen](Screenshots-prediction-lines)/Nightscout and the summary of outputs from the calculations in your OpenAPS tab.

Es ist möglicherweise sinnvoll, wenn du das Ziel höher als üblich ansetzt, bis du den Berechnungen und Einstellungen vertraust.  Das System erlaubt:

- einen niedrigen Zielwert von mindestens 4 mmol (72 mg/dl) oder höchstens 10 mmol (180 mg/dl)
- einen hohen Zielwert von mindestens 5 mmol (90 mg/dl) und höchstens 15 mmol (225 mg/dl)
- ein temporäres Ziel als Einzelwert kann im Bereich von 4 mmol bis 15 mmol (72 mg/dl bis 225 mg/dl) liegen

Der Zielwert ist der Wert, auf dem die Berechnungen basieren und nicht der gleiche wie der, den du als Zuckerwert anstrebst.  Wenn Du einen sehr großen Zielbereich (z.B. 3 mmol / 50 mg/dl oder mehr) wirst Du kaum Aktivitäten von AndroidAPS feststellen. Der vorhergesagte Glukosewert wird mit hoher Wahrscheinlichkeit innerhalb Deines Zielbereichs liegen und daher nicht viele temporäre Änderungen an der Basalrate vorgeschlagen werden.

Vielleicht möchtest Du mit der Anpassung der Werte für einen engeren Zielbereich experimentieren (z.B. 1 mmol/l bzw. 20 mg/dl oder weniger) und beobachten, wie sich das Verhalten des Systems daraufhin ändert.

Du kannst die Anzeige Deines Zielbereichs (grüne Linien) durch die Änderung der Werte für die Niedrig-/ und Hoch-Markierungen in den [Einstellungen](../Configuration/Preferences.md) > Zielbereich für die Grafikanzeige anpassen.

![Stoppzeichen](../images/sign_stop.png)

### Falls Du eine virtuelle Pumpe verwendest darfst Du nicht zum 6. Ziel wechseln. Klicke nicht auf 'Bestätigen/Verify' am Ende des 5. Ziels.

![leer](../images/blank.png)

(Objectives-objective-6-starting-to-close-the-loop-with-low-glucose-suspend)=
## Ziel 6: Closed Loop mit Abschaltung bei niedrigen Glukose-Werten

![Warnzeichen](../images/sign_warning.png)

### Im Ziel 6 wird die Basalrate bei zu erwartenden niedrigen Glukose-Werten abgeschaltet werden. Der 'closed loop' wird im Ziel 6 keinen Korrekturbolus bei hohen Werten abgeben. Hohe Glukose-Werte müssen von Dir manuell korrigiert werden!

- Prerequisite: You need a good profile (basal, ISF, IC) already working in AAPS to start with Loop in Low Glucose Suspend mode. Du kannst sonst in eine Hypo geraten, die Du manuell behandeln musst. Ein gut getestetes Profil wird Dir helfen, dass Du in den fünf Tagen seltener in eine Hypo kommst, die Du behandeln musst. **Starte das Ziel 6 NICHT, wenn Du immer noch häufig Situationen mit niedrigen oder sehr niedrigen Glukosewerten hast. Passe zuerst DIA, Basalrate, Korrekturfaktoren (ISF) und Essenfaktoren an und teste diese, bevor Du das Ziel 6 startest.**
- Du musst Deine Einstellungen noch nicht verändern. Während Du Dich im Ziel 6 befindest, wird maxIOB intern automatisch auf Null gesetzt. **Wenn Du zu Ziel 7 übergehst, wird es diesen 'override' nicht mehr geben.**
- Das System wird Deinen maxIOB Wert auf Null setzen (und Deinen Wert damit überschreiben). Wenn Deine Glukosewerte dann fallen, kann AAPS damit Deine Basalrate reduzieren oder aussetzen. Sollten die Glukosewerte steigen, wird das Basal nur dann erhöht, wenn Dein IOB negativ ist (z.B. nach dem Aussetzen der Basalrate wg. vorangegangener niedriger Werte). In allen anderen Fällen wird die Standard-Basalrate Deines aktuellen Profils verwendet. **Hohe Werte müssen deshalb von Dir manuell mit Insulin korrigiert werden.**
- Wenn Dein Basal-IOB negativ ist (siehe Bildschirmausschnitt unten), kann auch im Ziel 6 eine TBR > 100% gesetzt werden.

![Beispiel negatives IOB](../images/Objective6_negIOB.png)

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
- Enable [autosens](../Usage/Open-APS-features.md) over a period of 7 days and watch the white line on the homescreen graph show how your sensitivity to insulin may be rising or falling as a result of exercise or hormones etc. and keep an eye in the OpenAPS report tab how AAPS is adjusting the basals and/or targets accordingly.

*Don’t forget to record your looping in* [this form](https://bit.ly/nowlooping) *logging AAPS as your type of DIY loop software, if you have not already done so.*

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

(Objectives-objective-11-DynamicISF)=
## Objective 11: Additional Features such as DynamicISF

- You have to start objective 11 to be able to use [DynamicISF](../Usage/Open-APS-features.md)

(Objectives-go-back-in-objectives)=
## Objective (Ziel) neu starten

Wenn Du aus welchem Grund auch immer ein Objective (Ziel) neu starten willst, klicke auf "Ziel neu starten".

![Objective (Ziel) neu starten](../images/Objective_ClearFinished.png)

## Objectives (Ziele) in Android APS-Versionen vor 3.0

Mit dem AndroidAPS Release 3.0 wurde ein Objective (Ziel) entfernt.  Diejenigen, die eine Android APS version 2.8.2.1 verwenden, weil sie eine Android-Version vor Version 9 nutzen, finden [hier](../Usage/Objectives_old.md) die dort verwendeten Ziele.
