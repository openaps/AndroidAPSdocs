# Abschließen der Ziele (Objectives)

**AAPS** hat eine Reihe von **Zielen** (Objectives), die erreicht und abgeschlossen werden müssen, damit Du von den Basisfunktionen des Loopens, über den hybriden Closed Loop zur vollen **AAPS**-Funktionalität gelangst. Das Abschließen der **Ziele** zeigt, dass

- Du Dein **AAPS** richtig konfiguriert hast
- Du die grundlegenden **AAPS**-Funktionalitäten kennengelernt hast
- Du ein grundlegendes Verständnis dafür hast, was Dein System tut und damit warum Du ihm vertrauen kannst.

```{admonition} Note
:class: note

Regularly export your **AAPS** settings after completing each **objective**!
```

Unsere ausdrückliche Empfehlung ist, nach jedem Abschluss eines **Ziel**s Deine [Einstellungen zu exportieren}(../Usage/ExportImportSettings.md). Beim Exportieren wird ein Datei mit den Einstellungen (.json) erstellt, die Du an einem oder mehreren sicheren Ort als Backup speichern solltest (_z.B._ Google Drive, Festplatte, Email-Anhang _etc._). Das hilft, den Fortschritt beim Durchlaufen der **Ziele** abzusichern, sodass Du z. B. beim versehentlichen Löschen Deines Fortschritts, diesen über einen Import der gespeicherten Datei wieder herstellen kannst. Ein Backup Deiner **Einstellungen** ist auch notwendig, wenn Du Dein **AAPS** Smartphone, aus welchem Grund auch immer, wechseln möchtest (Upgrade/Verlust/Defekt _etc._)

Die **Einstellungen**-Datei speichert nicht nur Deinen Fortschritt durch die Ziele, sondern auch Deine eigenen angepassten **AAPS** Einstellungen wie _zum Beispiel_ **max bolus**.

Wenn etwas mit Deinem **AAPS**-Smartphone passieren sollte und Du keine Sicherungskopie Deiner **Einstellungen** hast, musst Du mit den **Ziele**n von vorne beginnen.

Um alle **Ziele** abzuschliessen wirst Du ungefähr 6 Wochen benötigen (vgl. [Wie lange wird das dauern?](preparing-how-long-will-it-take?) beginnend von der ersten **AAPS**-Einrichtung auf Deinem Smartphone bis zum "einfachen" hybriden closed looping (von Ziel 1 bis zu Ziel 8). Auch wenn wenn es **möglich** ist bis zum **Ziel 5** eine **virtuelle Pumpe** im System zu verwenden (und Dir während dieser Zeit Insulin auf einem anderen Weg zu geben), ist das erneute Durchlaufen müssen der **Ziele**, weil Du z. B. Dein Smartphone verloren hast, etwas was Du wirklich vermeiden möchtest.

Neben dem Vorangehen durch die **Ziele**, kannst Du - bei Bedarf - auch einzelne, bereits abgeschlossene, Ziele zurücksetzen und damit erneut durchlaufen [zurück zu einem früheren Ziel](Objectives-go-back-in-objeces).

## Ziel 1: Einrichten der Darstellung und Überwachung sowie analysieren der Basalraten und Faktoren

- **AAPS** prüft, ob Deine technischen Basiseinstellungen funktionieren.

Die technischen **AAPS**-Einstellungen, müssen so lange angepasst werden, bis die Prüfung ein fehlerfreies Ergebnis zeigt.

- Wähle das richtige CGM/FGM im [Konfigurations-Generator](../Configuration/Config-Builder.md) aus.  Weitere Informationen finden Sie unter [BG Source](../Configuration/BG-Source.md).
- Wähle die richtige Pumpe im [Konfigurations-Generator](../Configuration/Config-Builder.md) aus, damit Deine Pumpe mit AAPS kommunizieren kann. Wähle eine **virtuelle Pumpe** aus, wenn Du ein Pumpenmodell für das Loopen nutzt, das keine **AAPS** Unterstützung hat oder wenn Du Dich durch die ersten **Ziele** arbeiten möchtest ohne Dein aktuelles Setup nutzen zu wollen. Mehr Details findest Du unter [Pumpenauswahl](../Getting-Started/Pump-Choices.md).
- Befolge die [Nightscout-Anleitung](../Installing-AndroidAPS/Nightscout.md), damit Nightscout diese Daten empfangen und anzeigen kann.
- Die URL im NSClient muss **OHNE /api/v1/** am Ende eingegeben werden - siehe [Nightscout-Client](Preferences-nsclient).

Es kann sein, dass Du auf das Auslesen des nächsten Glukosewertes warten musst, bevor **AAPS** es erkennt.\*

## Ziel 2: Lerne, wie AAPS bedient wird

- Führe in AAPS die Aktionen aus, die im **Ziel** beschrieben sind.
- Klicke auf den orangenen Text "Noch nicht abgeschlossen", um zu den einzelnen Aufgaben zu kommen.
- In der Beschreibung des Ziels sind auch Links zur Dokumentation enthalten, die Dir helfen können, falls Du Dich an der einen oder anderen Stelle mit den Inhalten noch nicht so sicher fühlen solltest.

  ![Screenshot objective 2](../images/Objective2_V2_5.png)
- Aufgaben zum Abschließen des **Ziel 2** notwendig sind, sind:
  - Setze Dein Profil für 10 Minuten auf 90% (_Tipp_: Drücke und halte Deinen Profilnamen auf der ÜBERSICHT) (_Hinweis_: AAPS akzeptiert keine Basalraten, die unter 0.05IE/h liegen. Sollte Dein aktuelles Profil eine Basalrate, die 0,06 IE/h oder kleiner ist enthalten, erstelle ein Profil mit höheren Basalraten, bevor Du das Ziel abschließt. Nach Abschluss des Ziels, wechsele auf Dein reguläres Profil zurück.)
  - Simuliere "duschen gehen" in dem Du Deine Pumpe für 1h in **AAPS** trennst (_Tipp_: Drücke auf das Loop-Symbol auf der ÜBERSICHT, um den Loop-Dialog zu öffnen).
  - Beende "duschen gehen" indem Du Deine Pumpe wieder verbindest (_Tipp_: drücke auf das Symbol "getrennt", um den Loop-Dialog zu öffnen)
  - Setze ein temporäres Ziel mit einer Dauer von 10 Minuten (_Hinweis_: Drücke und halte den Zielwert in der ÜBERSICHT, um den Eingabe-Dialog für das temporäre Ziel anzuzeigen)
  - Aktiviere das **AKTIONEN**-Modul in der **KONFIGURATION**, damit es bei den oberen scrollbaren Reitern erscheint (_Hinweis_: Scrolle in der **KONFIGURATION** bis zum Abschnitt "Allgemein")
  - Zeige den Inhalt des LOOP Reiters (Plugin) an
  - Skaliere das Glukose-Diagramm, um größere oder kleinere Zeitabschnitte anschauen zu können: umschalten zwischen 6h, 12h, 18h und 24h historischer Daten (_Hint_: Tippe auf das Diagramm)

(Objectives-objective-3-prove-your-knowledge)=

## Ziel 3: Belege Dein Wissen

- Belege Dein **AAPS**-Wissen, in dem Du einen Multiple-Choice-Test bestehst.

Der Abschluss dieses **Ziel 3** wird von manchem Menschen als eine der schwierigsten Aufgaben empfunden. Bitte lies die zu den gestellten Fragen gehörenden Abschnitte in der **AAPS**-Dokumentation. If you are genuinely stuck after researching the **AAPS** documents, please search the [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) group for "Objective 3" (because it is likely that your question has been asked- and answered - before). If you are still stuck, ask in a post on either the [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) or [Discord](https://discord.gg/4fQUWHZ4Mw) group. Diese Gruppen können Dir kleine Hinweise geben oder Dir die relevanten Stellen der **AAPS**-Dokumente nennen.

Um mit **Ziel 3** zu starten und die zu lösenden Fragen sehen zu können, klicke auf den orangenen Text "**Noch nicht abgeschlossen**". Bitte lies jede einzelne Frage und wähle dann Deine Antwort(en) aus.

- Um die Anzahl der zu bestätigenden Vorschläge im Open Loop zu reduzieren, setze einen breiteren Zielbereich (z.B. 90-150 mg/dl oder 5.0-8.5 mmol/l).

- Ggf. kannst Du nachts auch das obere Limit höher setzen oder den Open Loop ganz pausieren.

Bei jeder Frage kann es mehr als eine richtige Antwort geben! Wenn eine Frage falsch beantwortet wurde, ist diese für eine erneute Beantwortung für 60 Minuten gesperrt. Erst nach Ablauf der Zeit kannst Du Dich erneut an der Beantwortung versuchen. Wenn Du einen neuen Anlauf unternimmst, die Fragen zu beantworten kann es möglicherweise sein, dass sich die Reihenfolge der Antworten geändert hat. Das soll dazuführen, dass Du sie sorgfältig liest und wirklich verstehst warum sie richtig (oder falsch) sind.

Wenn **AAPS** das erste Mal installiert wird, muss das **Ziel 3** vollständig abgeschlossen worden sein, bevor Du mit dem **Ziel 4** beginnen kannst. Jedes Ziel muss in sequenzieller Reihenfolge abgeschlossen werden. Neue Funktionalitäten werden nach und nach freigeschaltet, so wie Du in den Zielen weiter vorankommst.

```{admonition} __What happens if new question(s) are added to an Objective when I update to a newer version of AAPS?__
:class: Note
From time to time, new features are added to **AAPS** which may require a new question to be added to the Objectives, particularly Objective 3. As a result, any new question added to **Objective 3** will be marked as “incomplete” because **AAPS** will require you to action this. Do not worry, as each **Objective** is independent, you will **not lose the existing functionality of AAPS**, providing the other Objectives remain completed.
```

## Ziel 4: Starte den Open Loop

Das Ziel in diesem Ziel ist es wahrzunehmen, wie oft **AAPS** die Auswirkungen der Basalrate auf den Glukosespiegel bewertet und daraus eine temporäre Basalrate empfiehlt. Als Teil dieses Ziels wirst Du zum ersten Mal der Open Loop aktivieren und 20 vorgeschlagene temporäre Basalraten manuell auf Deiner Pumpe setzen. Darüber hinaus wirst Du die Auswirkungen temporärer Ziele (Temp Target) und der Standard-Temp-Targets (z.B. für Aktivitäten oder zur Hypo-Behandlungen) in der Praxis erleben. Wenn Du Dich noch nicht sicher mit dem Setzen einer temporären Basalrate in **AAPS** fühlst, schaue bitte auf [AKTIONEN-Reiter](Screenshots#Screenshots-action-tab).

Geschätzte Zeit, um dieses Ziel abzuschließen: **7 Tage**. Das ist eine Pflichtwartezeit. Auch wenn Du alle Basalratenänderungen bereits durchgeführt hast, kannst Du das Ziel erst nach Ablauf der Zeitspanne abschließen und zum nächsten Ziel weitergehen.

- Wähle Open Loop entweder in den Einstellungen oder indem Du lange auf das Loop-Symbol in der rechten oberen Ecke des Startbildschirms drückst.
- Gehe durch die [Einstellungen](../Configuration/Preferences.md) und richte den Open Loop ein (scrolle bis "Loop/APS Mode" herunter und wähle "Open Loop" aus.
- Bestätige in einem Zeitraum von 7 Tagen mindestens 20 der vorgeschlagenen temporären Basalratenanpassungen; gib diese (physisch) in der Pumpe ein und bestätige in AAPS, dass Du den Vorschlag akzeptierst hast. Überprüfe, dass diese Basalratenanpassungen in AAPS und Nightscout angezeigt werden.
- Aktiviere [temporäre Ziele](../Usage/temptarget.md) falls notwendig. Nutze das temporäre Ziel für Hypos nach der Hypo-Behandlung, um zu verhindern, dass das System aufgrund des Glukosewertanstiegs (sog. bounce back) zu stark korrigiert.

### Anzahl der Benachrichtigungen reduzieren

- Um die Anzahl der zu bestätigenden Vorschläge im Open Loop zu reduzieren, setze einen größeren Zielbereich wie z. B. 90-150 mg/dl oder 5.0-8.5 mmol/l.
- Ggf. kannst Du nachts auch das obere Limit höher setzen oder den Open Loop ganz pausieren.
- Du kannst einen minimalen Prozentwert für vorgeschlagene Basalratenänderungen setzen, der erreicht werden muss, bevor eine Änderung der Basalrate vorgeschlagen wird.

  ![Open Loop minimal request change](../images/OpenLoop_MinimalRequestChange2.png)

```{admonition} You don't need to action each and every system recommendation!
:class: Note
```

(Objectives-objective-5-Understanding-your-open-loop-including-its-temp-basal-recommendations)=

## Ziel 5: Open Loop inklusive der temporären Basalratenvorschläge verstehen

Als Teil des **Ziel 5**, wirst Du verstehen, wie temporäre Basalempfehlungen abgeleitet werden. Dies beinhaltet die [Bestimmung der Basallogik](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html), die Auswirkungen durch Beobachten der [Vorhersagelinien in der AAPS ÜBERSICHT](Screenshots-prediction-lines)/Nightscout zu analysieren und die detaillierten Berechnungen auf deinem OPENAPS-Tab zu verfolgen.

Geschätzte Zeit, um dieses Ziel abzuschließen: 7 Tage.

Dieses Ziel erfordert, dass Du Deinen „Maximale IE/h, die als TBR gesetzt werden können“ (max-basale) Wert wie es in [OpenAPS-features] beschrieben ist (Open-APS-Features#Open-APS-features-max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal). Dieser Wert kann in Einstellungen > OpenAPS festgelegt werden.
Stelle sicher, dass diese Sicherheitseinstellung sowohl in **AAPS** als auch in Deiner Insulinpumpe eingestellt ist.

Für die Zeit bis Du mit den Berechnungen und Einstellungen vertraut bist, ist es sinnvoll, den Zielwert höher als üblich anzusetzen.

**AAPS** erlaubt:

- einen niedrigen Zielwert von mindestens 4 mmol/l (72 mg/dl) oder höchstens 10 mmol/l (180 mg/dl)
- einen hohen Zielwert von mindestens 5 mmol/l (90 mg/dl) und höchstens 15 mmol/l (225 mg/dl)
- ein temporäres Ziel als Einzelwert kann im Bereich zwischen 4 mmol/l und 15 mmol/l (72 mg/dl bis 225 mg/dl) liegen

Der Zielwert ist der wichtigste Wert. Alle Berechnungen basieren darauf. Er ist nicht der Zielbereich, in dem Du normalerweise versuchst Deine Glukosewerte zu halten. Wenn Du einen sehr weiten Zielbereich (z. B. 3 mmol/l [50 mg/dl oder weiter] wählst, wirst Du nur wenige **AAPS**-Eingriffe feststellen. Das kommt daher, dass der vorhergesagte Glukosewert mit hoher Wahrscheinlichkeit innerhalb Deines Zielbereichs liegen wird, und daher nur selten temporäre Änderungen der Basalrate vorgeschlagen werden.

Vielleicht möchtest Du mit der Weite des Zielbereichs experimentieren, ihn verengen (z. B. 1 mmol/l bzw. 20 mg/dl oder weniger) und beobachten, wie sich das Systemverhalten daraufhin ändert.

You can adjust (widen or tighten) the graph’s green area, representing your target range, by entering different values in [Preferences](../Configuration/Preferences.md) > Overview > Range for Visualisation.

![Stop sign](../images/sign_stop.png)

```{admonition} If you have been using a virtual pump, change to a real insulin pump now!
:class: note

If you are open looping with a virtual pump stop here. Only click verify at the end of this Objective once you have changed to using a "real" physical pump.
```

![blank](../images/blank.png)

(Objectives-objective-6-starting-to-close-the-loop-with-low-glucose-suspend)=

## Ziel 6: Closed Loop mit Abschaltung bei niedrigen Glukose-Werten

![Warning sign](../images/sign_warning.png)

```{admonition} Closed loop will not correct high BG values in objective 6 as it is limited to low glucose suspend only!
:class: Note
Du musst hohe Glukosewerte weiterhin selbst korrigieren (manuell mit Korrektur über die Pumpe oder per Pen)!
```

Im Laufe des **Ziel 6** wirst Du den Lopp schließen (closed loop) und die Abschaltung bei niedrigen Glukosewerten (Low Glucose Suspend - LGS) einschalten. Das [max IOB](Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob) wird dabei den Wert Null haben. Du kannst das Ziel abschließen, wenn Du 5 Tage im LGS-Modus gewesen bist. Du solltest diese Zeit nutzen, um Deine Profileinstellungen so auf Herz und Nieren zu prüfen, dass nur wenige LGS-Situationen (niedrige Werte) eintreten.

Geschätzte Zeit, um dieses Ziel abzuschließen: 5 Tage.

Es ist wirklich wichtig, dass Dein Profil (Basalrate, Korrektur- und Essensfaktoren) gut ausgetestet ist, bevor Du den Loop im Modus "Abschaltung bei niedrigen Glukosewerten" schließt. Falsche Profileinstellungen können Dich in Hypo-Situationen bringen, die Du selbst manuell auflösen musst. Ein funktionierendes und verlässliches Profil hilft Dir, Hypos während des 5-tägigen Zeitraums zu vermeiden.

**Wenn Du nach wie vor häufige oder schwere Hypos hast, dann solltest Du DIA, Basalraten, Korrekturfaktoren (ISF) oder Kohlenhydrat-Faktoren anpassen.**

Während Du Dich im Ziel 6 befindest, wird **AAPS** maxIOB automatisch auf Null setzen. **Wenn Du zum Ziel 7 weitergehst, wird dies automatisch wieder deaktiviert.**

Das heißt während Du Dich im Ziel 6 befindest, wird **AAPS** bei fallenden Glukosewerten Deine Basalrate für Dich reduzieren oder aussetzen. Sollten die Glukosewerte steigen, wird **AAPS** das Basal über den hinterlegten Profilwert nur dann erhöhen, wenn Dein IOB negativ ist (z.B. nach dem Aussetzen der Basalrate wg. vorangegangener niedriger Werte). In anderen Situationen wird **AAPS** das Basal nicht - auch nicht bei steigenden Glukosewerten - über den Profilwert hinaus anheben. Diese Vorsichtsmaßnahme soll insbesondere während der **AAPS**-Lernphase Hypos vermeiden.

**Hohe Werte müssen deshalb von Dir manuell mit einem Korrekturbolus korrigiert werden.**

- Wenn Dein Basal-IOB negativ ist (siehe Screenshot unten), kann auch in Ziel 6 eine temporäre Basalrate (TBR) > 100% gesetzt werden.

![Example negative IOB](../images/Objective6_negIOB.png)

- Nutze einen zusätzlichen Sicherheitspuffer, in dem Du Deinen Zielbereich etwas höher setzt, als Du es normalerweise tun würdest.
- Aktiviere den Modus 'Low Glucose Suspend' (Abschaltung bei niedrigen Glukosewerten), indem Du lange auf das Loop-Symbol in der oberen rechten Bildschirmecke drückst (und festhälst) und dann den LGS-Modus auswählst.
- Aktive temporäre Basalraten erkennst Du an der hellblauen Textfarbe auf dem Startbildschirm und an der hellblauen Basallinie in der Grafik.
- Wenn du eine Hypo mit Kohlenhydraten korrigierst, kann es vorkommen, dass danach Spitzen auftreten, die Du nicht durch das Erhöhen der Basalrate abfangen kannst.

(Objectives-objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets)=

## Ziel 7: Justiere den Closed Loop, erhöhe maxIOB über 0 und setze den Zielbereich langsam herunter

Um **Ziel 7** abzuschließen, musst Du Deinen Loop schließen und Deinen [maxIOB](Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob)-Wert erhöhen. maxIOB wurde in **Ziel 6** automatisch auf Null gesetzt. Dies wird nun rückgängig gemacht. **AAPS** wird ab jetzt Deinen hinterlegten maxIOB-Wert nutzen, um hohe Glukosewerte zu korrigieren.

Geschätzte Zeit, um dieses Ziel abzuschließen: 1 Tag.

- Wähle 'Closed Loop' entweder in den [Einstellungen](../Configuration/Preferences.md) oder indem Du lange auf das Loop-Symbol in der oberen rechten Bildschirmecke der ÜBERSICHT und halte ihn für einen Tag aktiv.

- Setze den Wert 'Maximales Gesamt-IOB, das nicht überschritten werden darf' (in OpenAPS: 'max-iob') auf über Null. Der empfohlene Standardwert ist bei Nutzung des SMB-Algorithmus "ein durchschnittlicher Mahlzeitenbolus + das Dreifache Deiner größten täglichen Basalrate" (größte stündliche Basalrate = maximaler Basalwert pro Stunde innerhalb des 24-Stunden-Rasters eines Tages) und bei Nutzung des AMA-Algorithmus: das Dreifache Deiner höchsten täglichen Basalrate. Du solltest Dich diesen Werten langsam annähern, bis Du weißt, dass die Einstellung für Dich funktionieren.

Betrachte diese Empfehlung als Ausgangspunkt. Wenn Du den Faktor '3x' verwendest und feststellst, dass AAPS bei steigenden Glukosewerten zu viel Insulin abgibt, dann verringere den Wert für "Maximales Gesamt-IOB, das nicht überschritten werden darf [IE]". Für den Fall, dass Du sehr insulinresistent bist, erhöhe den Wert vorsichtig.

![max daily basal](../images/MaxDailyBasal2.png)

- Wenn Du zuverlässig weißt, welcher IOB Deinem Looping Muster entspricht, senke die Werte auf den endgültigen Zielbereich.

(Objectives-objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens)=

## Ziel 8: Passe, falls notwendig, Basalraten und Faktoren an und aktiviere dann die Autosens-Funktion

Als Teil dieses Ziels wirst Du die Performanz Deines Profils überprüfen und dazu die Autosens-Funktionalität als einen Indikator zum Aufdecken falscher Einstellungen kennenlernen.

Geschätzte Zeit, um dieses Ziel abzuschließen: 7 Tage.

- Um zu prüfen, ob Deine Basalrate weiterhin passend ist, kannst Du einmalig [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) verwenden oder einen herkömmlichen Basalratentest machen.
- Schalte [Autosens](../Usage/Open-APS-features.md) für einen Zeitraum von 7 Tagen ein und beobachte die weiße Linie auf der ÜBERSICHTs-Grafik, die zeigt, wie Deine Insulinempfindlichkeit durch Aktivitäten oder Hormone steigt oder fällt. Schaue auf dem OpenAPS-Tab nach, wie **AAPS** die Basalraten und/oder Zielwerte entsprechend anpasst.

(Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)=

## Ziel 9: Aktiviere zusätzliche oref1 Funktionen zum täglichen Gebrauch, wie z. B. den super micro bolus (SMB)

In diesem Ziel wirst Du "Super Micro Bolus (SMB)" als eine der wichtigsten Funktionalität kennenlernen und nutzen. Nachdem Du die Pflichtlektüre durchgearbeitet hast, wirst Du bereits ein gutes Verständnis für SMBs haben und wissen was SMBs sind und wie sie funktionieren. Du wirst verstehen warum, nach einem SMB, eine Basalrate vorübergehend auf Null gesetzt wird (sog. "zero-temping"). Geschätzte Zeit, um dieses Ziel abzuschließen: 28 Tage.

- Als Pflichtlektüre musst Du das [SMB-Kapitel dieser Dokumentation](Open-APS-features-super-micro-bolus-smb) und das [oref1-Kapitel in der openAPS-Dokumentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) gelesen haben, um zu verstehen wie SMB arbeiten und insbesondere was Sinn und Zweck des "zero-temping" ist.
- Damit SMBs korrekt funktionieren können, wirst Du danach [maxIOB erhöhen](Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob). maxIOB enthält nun das gesamte IOB und nicht nur das hinzugefügte Basalinsulin. Dieser Schwellwert pausiert SMBs solange bis das IOB unter diesen Wert fällt (_z.B._ maxIOB ist auf 7 IE eingestellt und es wird eine Mahlzeiten-Bolus von 8 IE abgegeben: SMBs werden dann solange pausiert und nicht abgegeben, bis das IOB unter 7 IE fällt). Beginne mit maxIOB = durchschnittlicher Mahlzeiten-Bolus + 3x die größte stündliche Basalrate (größte stündliche Basalrate = maximaler Basalwert pro Stunde innerhalb des 24-Stunden-Rasters eines Tages - in [Ziel 7](Objectives-objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets) ist das genauer beschrieben.
- Wenn Du vom AMA-Algorithmus zu OpenAPS SMB wechselst, muss der Standardwert des "min_5m_carbimpact"-Wertes (Einstellungen > Resorptions-Einstellungen) auf 8 gesetzt werden. Für AMAs ist der Standardwert 3. Mehr zu dieser Einstellung kannst Du [hier](../Configuration/Preferences.html#min-5m-carbimpact) nachlesen.

(Objectives-objective-10-automation)=

## Ziel 10: Automatisierung

Du musst **Ziel 10** starten, um Automatisierungen nutzen zu können.

1. Lies zuerst die Dokumentation zu [Automatisierungen](../Usage/Automation.md).
2. Erstelle die einfachste Automatisierungsregel;
   zum Beispiel das Auslösen einer Android-Benachrichtigung in wenigen Minuten:

- Gehe auf den Reiter AUTOMATISIERUNG
- Wähle aus dem Drei-Punkte-Menü oben rechts "Regel hinzufügen" aus
- Vergebe einen Namen für diese Aufgabe/Regel "Meine erste Automatisierung - Benachrichtigung"
- "Bedingung" "Bearbeiten"
  - Klicke auf das "+"-Symbol, um den ersten Auslöser hinzuzufügen
  - Wähle "Zeit" & "OK" aus, es wird damit ein Standard-Eintrag HEUTE STUNDE:MINUTE erstellt
  - Tippe auf den MINUTEN-Teil, um die Zeit so zu ändern, dass in wenigen Minuten ausgelöst werden wird. Tippe dann auf OK um zu schließen
  - Klicke auf "OK", um den Auslöser-Dialog zu schließen
- "HINZUFÜGEN" einer "Aktion"
  - Wähle "Benachrichtigung", "OK"
  - Tippe auf "Benachrichtigung", um den Benachrichtigungstext zu bearbeiten, gib soetwas wie "Meine erste Automatisierung" ein
- Warte bis die Benachrichtigung durch Erreichen der Uhrzeit ausgelöst (beachte, dass es je nach Smartphone einige Minuten dauern kann)

4. Experimentiere ein wenig, in dem Du eine etwas sinnvollere Automatisierung erstellst.

- The documentation page gives a few examples, and you can search for "automation" screenshots on the [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) group. Da die meisten Menschen jeden Morgen vor der Schule/Arbeit zur gleichen Zeit dasselbe zum Frühstück essen, kann ein ziemlich häufiger Anwendungsfall sein, ein "Vor-Frühstücks-Ziel" festzulegen, um 30 Minuten vor dem Frühstück ein leicht niedrigeres temporäres Ziel zu setzen. In einem solchen Fall besteht Deine Bedingung wahrscheinlich aus der Auswahl bestimmter Wochentage (Montag, Dienstag, Mittwoch, Donnerstag, Freitag) und einer bestimmten Uhrzeit (06:30 Uhr). Die Aktion wird aus "Temporäres Ziel (TT) starten" mit einem bestimmten Zielwert und einer Dauer von 30 Minuten bestehen.

## Ziel 11: Aktiviere zusätzliche Funktionen für den alltäglichen Gebrauch, wie z. B. das Dynamic Sensitivity Plugin (DynISF).

- Stelle sicher, dass SMBs wie gedacht funktionieren.
- Lies [hier](../Usage/DynamicISF.md) die Dokumentation zu Dynamic ISF.
- Search the Facbook and [Discord](https://discord.gg/4fQUWHZ4Mw) groups for discussions around Dynamic ISF and read about other users experiences and recommendations.
- Aktiviere das **DynamicISF-Plugin** und passe es auf den individuellen Bedarf Deines Körpers an. Aus Sicherheitsgründen ist es ratsam, mit einem Wert unter 100% zu beginnen.

(Objectives-go-back-in-objectives)=

## Objective (Ziel) neu starten

Wenn Du, aus welchem Grund auch immer, ein **Ziel** neu starten willst, klicke auf "Ziel neu starten".

![Go back in objectives](../images/Objective_ClearFinished.png)

## Objectives (Ziele) in Android APS-Versionen vor 3.0

Mit dem **AAPS** Release 3.0 wurde ein Ziel entfernt.  Diejenigen, die eine Android APS version 2.8.2.1 verwenden, weil sie eine ältere Android-Software nutzen (d.h. Android-Version vor Version 9), finden [hier](../Usage/Objectives_old.md) die dafür abzuschließenden Ziele.
