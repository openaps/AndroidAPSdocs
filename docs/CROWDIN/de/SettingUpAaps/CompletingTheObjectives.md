# Abschließen der Ziele (Objectives)

**AAPS** hat eine Reihe von **Zielen** (Objectives), die erreicht und abgeschlossen werden müssen, damit Du von den Basisfunktionen des Loopens, über den hybriden Closed Loop zur vollen **AAPS**-Funktionalität gelangst. Das Abschließen der **Ziele** zeigt, dass

- Du Dein **AAPS** richtig konfiguriert hast
- Du die grundlegenden **AAPS**-Funktionalitäten kennengelernt hast
- Du ein grundlegendes Verständnis dafür hast, was Dein System tut und damit warum Du ihm vertrauen kannst.

```{admonition} Note
:class: note

Exportiere Deine **AAPS**-Einstellungen regelmäßig nach dem Abschluss eines jeden **Ziels** (Objective)!
```

We strongly recommend that you  [export your settings](../Maintenance/ExportImportSettings.md) after completing each **objective**. Beim Exportieren wird ein Datei mit den Einstellungen (.json) erstellt, die Du an einem oder mehreren sicheren Ort als Backup speichern solltest (_z.B._ Google Drive, Festplatte, Email-Anhang _etc._). Das hilft, den Fortschritt beim Durchlaufen der **Ziele** abzusichern, sodass Du z. B. beim versehentlichen Löschen Deines Fortschritts, diesen über einen Import der gespeicherten Datei wieder herstellen kannst. Ein Backup Deiner **Einstellungen** ist auch notwendig, wenn Du Dein **AAPS**-Smartphone, aus welchem Grund auch immer, wechseln möchtest (Upgrade/Verlust/Defekt _etc._)

Die **Einstellungen**-Datei speichert nicht nur Deinen Fortschritt durch die Ziele, sondern auch Deine eigenen angepassten **AAPS** Einstellungen wie _zum Beispiel_ **max bolus**.

Wenn etwas mit Deinem **AAPS**-Smartphone passieren sollte und Du keine Sicherungskopie Deiner **Einstellungen** hast, musst Du mit den **Ziele**n von vorne beginnen.

Overall the **objectives** take around 6 weeks to complete (see [how long will it take?](../Getting-Started/PreparingForAaps.md#how-long-will-it-take-to-set-everything-up) for a detailed breakdown) from configuring **AAPS** on your smartphone to "basic" hybrid closed looping (from objective 1 to objective 8), so, although you _can_ proceed up to **objective 5** using a **virtual pump** (and using some other method of insulin delivery in the meantime), having to re-complete all the **objectives** because for example, you lost your smartphone, is still something you really want to avoid.

As well as progressing through the **objectives**, if you want, you can also remove your progress and [go back to an earlier objective](#go-back-in-objectives).

## Ziel 1: Einrichten der Darstellung und Überwachung sowie analysieren der Basalraten und Faktoren

- **AAPS** prüft, ob Deine technischen Basiseinstellungen funktionieren.

Die technischen **AAPS**-Einstellungen, müssen so lange angepasst werden, bis die Prüfung ein fehlerfreies Ergebnis zeigt.

- Select the correct CGMS/FGMS in [Config Builder](../SettingUpAaps/ConfigBuilder.md).  See [BG Source](../Getting-Started/CompatiblesCgms.md) for more information.
- Select the correct Pump in [Config Builder](../SettingUpAaps/ConfigBuilder.md) to ensure your pump can communicate with AAPS. Wähle eine **virtuelle Pumpe** aus, wenn Du ein Pumpenmodell für das Loopen nutzt, das keine **AAPS** Unterstützung hat oder wenn Du Dich durch die ersten **Ziele** arbeiten möchtest ohne Dein aktuelles Setup nutzen zu wollen. See [insulin pump](../Getting-Started/CompatiblePumps.md) for more information.
- Follow instructions in [Nightscout](../SettingUpAaps/Nightscout.md) page to ensure **Nightscout** can receive and display this data.
- Note that URL in **NSClient** must be **_without_ "/api/v1/"** at the end - see [NSClient settings in Preferences](../SettingUpAaps/Preferences.md#NSClient).

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

Der Abschluss dieses **Ziel 3** wird von manchem Menschen als eine der schwierigsten Aufgaben empfunden. Bitte lies die zu den gestellten Fragen gehörenden Abschnitte in der **AAPS**-Dokumentation. Wenn Du trotz genauen Lesens der **AAPS**-Dokumente feststeckst, suche bitte in der [Facebook](https://www.facebook. om/groups/AndroidAPSUsers)-Gruppe nach "Objective 3" (es ist sehr wahrscheinlich, dass Deine Frage dort bereits gestellt und beantwortet wurde). Wenn Du dennoch nicht weiterkommen solltest, frag in einem Post/Beitrag entweder in der [Facebook](https://www.facebook.com/groups/AndroidAPSUsers)-Gruppe oder im [Discord](https://discord.gg/4fQUWHZ4Mw)-Channel. Diese Gruppen können Dir kleine Hinweise geben oder Dir die relevanten Stellen der **AAPS**-Dokumente nennen.

Um mit **Ziel 3** zu starten und die zu lösenden Fragen sehen zu können, klicke auf den orangenen Text "**Noch nicht abgeschlossen**". Bitte lies jede einzelne Frage und wähle dann Deine Antwort(en) aus.

- Um die Anzahl der zu bestätigenden Vorschläge im Open Loop zu reduzieren, setze einen breiteren Zielbereich (z.B. 90-150 mg/dl oder 5.0-8.5 mmol/l).

- Ggf. kannst Du nachts auch das obere Limit höher setzen oder den Open Loop ganz pausieren.

Bei jeder Frage kann es mehr als eine richtige Antwort geben! Wenn eine Frage falsch beantwortet wurde, ist diese für eine erneute Beantwortung für 60 Minuten gesperrt. Erst nach Ablauf der Zeit kannst Du Dich erneut an der Beantwortung versuchen. Wenn Du einen neuen Anlauf unternimmst, die Fragen zu beantworten kann es möglicherweise sein, dass sich die Reihenfolge der Antworten geändert hat. Das soll dazuführen, dass Du sie sorgfältig liest und wirklich verstehst warum sie richtig (oder falsch) sind.

Wenn **AAPS** das erste Mal installiert wird, muss das **Ziel 3** vollständig abgeschlossen worden sein, bevor Du mit dem **Ziel 4** beginnen kannst. Jedes Ziel muss in sequenzieller Reihenfolge abgeschlossen werden. Neue Funktionalitäten werden nach und nach freigeschaltet, so wie Du in den Zielen weiter vorankommst.

```{admonition} __What happens if new question(s) are added to an Objective when I update to a newer version of AAPS?__
:class: Note
Über die Zeit wird **AAPS** mit neuen Funktionalitäten erweitert, so dass es notwendig werden kann zusätzliche Fragen - speziell im Ziel 3 - zu beantworten. In diesem Fall werden alle zu **Ziel 3** neu hinzugefügte Fragen als "noch nicht abgeschlossen" angezeigt, da **AAPS** möchtest, dass Du diese bearbeitest. Keine Angst, jedes **Ziel** ist unabhängig vom anderen und **Du wirst keine der bestehenden AAPS-Funktionalitäten verlieren**, sofern die übrigen Ziele weiterhin abgeschlossen sind.
```

## Ziel 4: Starte den Open Loop

Das Ziel in diesem Ziel ist es wahrzunehmen, wie oft **AAPS** die Auswirkungen der Basalrate auf den Glukosespiegel bewertet und daraus eine temporäre Basalrate empfiehlt. Als Teil dieses Ziels wirst Du zum ersten Mal der Open Loop aktivieren und 20 vorgeschlagene temporäre Basalraten manuell auf Deiner Pumpe setzen. Darüber hinaus wirst Du die Auswirkungen temporärer Ziele (Temp Target) und der Standard-Temp-Targets (z.B. für Aktivitäten oder zur Hypo-Behandlungen) in der Praxis erleben. If you are not familiar with setting a temporay basal rate change in **AAPS** yet, please refer to the [ACTIONS tab](../DailyLifeWithAaps/AapsScreens.md#action-tab).

Geschätzte Zeit, um dieses Ziel abzuschließen: **7 Tage**. Das ist eine Pflichtwartezeit. Auch wenn Du alle Basalratenänderungen bereits durchgeführt hast, kannst Du das Ziel erst nach Ablauf der Zeitspanne abschließen und zum nächsten Ziel weitergehen.

- Wähle Open Loop entweder in den Einstellungen oder indem Du lange auf das Loop-Symbol in der rechten oberen Ecke des Startbildschirms drückst.
- Walk through the [Preferences](../SettingUpAaps/Preferences.md) to set it up for you (scroll down to "Loop/APS Mode" and select "Open Loop".
- Bestätige in einem Zeitraum von 7 Tagen mindestens 20 der vorgeschlagenen temporären Basalratenanpassungen; gib diese (physisch) in der Pumpe ein und bestätige in AAPS, dass Du den Vorschlag akzeptierst hast. Überprüfe, dass diese Basalratenanpassungen in AAPS und Nightscout angezeigt werden.
- Enable [temp targets](../DailyLifeWithAaps/TempTargets.md) if necessary. Nutze das temporäre Ziel für Hypos nach der Hypo-Behandlung, um zu verhindern, dass das System aufgrund des Glukosewertanstiegs (sog. bounce back) zu stark korrigiert.

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

Als Teil des **Ziel 5**, wirst Du verstehen, wie temporäre Basalempfehlungen abgeleitet werden. This includes the [determination of basal logic](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html), analyzing the impact by observing [prediction lines in AAPS OVERVIEW](../DailyLifeWithAaps/AapsScreens.md#prediction-lines)/Nightscout and looking at detailed calculations shown on your OPENAPS tab.

Geschätzte Zeit, um dieses Ziel abzuschließen: 7 Tage.

This Objective requires you to determine and set your “Max U/h a temp basal can be set to” (max-basal) value as described in [OpenAPS-features](../DailyLifeWithAaps/KeyAapsFeatures.md#max-uh-a-temp-basal-can-be-set-to-openaps-max-basal). Dieser Wert kann in Einstellungen > OpenAPS festgelegt werden.
Stelle sicher, dass diese Sicherheitseinstellung sowohl in **AAPS** als auch in Deiner Insulinpumpe eingestellt ist.

Für die Zeit bis Du mit den Berechnungen und Einstellungen vertraut bist, ist es sinnvoll, den Zielwert höher als üblich anzusetzen.

**AAPS** erlaubt:

- einen niedrigen Zielwert von mindestens 4 mmol/l (72 mg/dl) oder höchstens 10 mmol/l (180 mg/dl)
- einen hohen Zielwert von mindestens 5 mmol/l (90 mg/dl) und höchstens 15 mmol/l (225 mg/dl)
- ein temporäres Ziel als Einzelwert kann im Bereich zwischen 4 mmol/l und 15 mmol/l (72 mg/dl bis 225 mg/dl) liegen

Der Zielwert ist der wichtigste Wert. Alle Berechnungen basieren darauf. Er ist nicht der Zielbereich, in dem Du normalerweise versuchst Deine Glukosewerte zu halten. Wenn Du einen sehr weiten Zielbereich (z. B. 3 mmol/l [50 mg/dl oder weiter] wählst, wirst Du nur wenige **AAPS**-Eingriffe feststellen. Das kommt daher, dass der vorhergesagte Glukosewert mit hoher Wahrscheinlichkeit innerhalb Deines Zielbereichs liegen wird, und daher nur selten temporäre Änderungen der Basalrate vorgeschlagen werden.

Vielleicht möchtest Du mit der Weite des Zielbereichs experimentieren, ihn verengen (z. B. 1 mmol/l bzw. 20 mg/dl oder weniger) und beobachten, wie sich das Systemverhalten daraufhin ändert.

You can adjust (widen or tighten) the graph’s green area, representing your target range, by entering different values in [Preferences](../SettingUpAaps/Preferences.md) > Overview > Range for Visualisation.

![Stop sign](../images/sign_stop.png)

```{admonition} If you have been using a virtual pump, change to a real insulin pump now!
:class: note

Wenn Du eine virtuelle Pumpe für den "Open Loop" nutzt, stoppe hier und gehe nicht weiter. Bestätige nur dann am Ende dieses Ziels (Objectives), wenn Du von der virtuellen Pumpe auf eine "echte" physische Pumpe umgestellt hast.
```

![blank](../images/blank.png)

(Objectives-objective-6-starting-to-close-the-loop-with-low-glucose-suspend)=

## Ziel 6: Closed Loop mit Abschaltung bei niedrigen Glukose-Werten

![Warning sign](../images/sign_warning.png)

```{admonition} Closed loop will not correct high BG values in objective 6 as it is limited to low glucose suspend only!
:class: Note
Du musst hohe Glukosewerte weiterhin selbst korrigieren (manuell mit Korrektur über die Pumpe oder per Pen)!
```

As part of **Objective 6** you will close the loop and activate its Low Glucose Suspend (LGS) mode while [max IOB](../DailyLifeWithAaps/KeyAapsFeatures.md#maximum-total-iob-openaps-cant-go-over-openaps-max-iob) is set to zero. Du kannst das Ziel abschließen, wenn Du 5 Tage im LGS-Modus gewesen bist. Du solltest diese Zeit nutzen, um Deine Profileinstellungen so auf Herz und Nieren zu prüfen, dass nur wenige LGS-Situationen (niedrige Werte) eintreten.

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

To complete **Objective 7** you have to close your loop and raise your [maxIOB](../DailyLifeWithAaps/KeyAapsFeatures.md#maximum-total-iob-openaps-cant-go-over-openaps-max-iob). maxIOB wurde in **Ziel 6** automatisch auf Null gesetzt. Dies wird nun rückgängig gemacht. **AAPS** wird ab jetzt Deinen hinterlegten maxIOB-Wert nutzen, um hohe Glukosewerte zu korrigieren.

Geschätzte Zeit, um dieses Ziel abzuschließen: 1 Tag.

- Select 'Closed Loop' either from [Preferences](../SettingUpAaps/Preferences.md) or by pressing and holding the Loop icon at the top right corner of the OVERVIEW screen, over a period of 1 day.

- Setze den Wert 'Maximales Gesamt-IOB, das nicht überschritten werden darf' (in OpenAPS: 'max-iob') auf über Null. Der empfohlene Standardwert ist bei Nutzung des SMB-Algorithmus "ein durchschnittlicher Mahlzeitenbolus + das Dreifache Deiner größten täglichen Basalrate" (größte stündliche Basalrate = maximaler Basalwert pro Stunde innerhalb des 24-Stunden-Rasters eines Tages) und bei Nutzung des AMA-Algorithmus: das Dreifache Deiner höchsten täglichen Basalrate. Du solltest Dich diesen Werten langsam annähern, bis Du weißt, dass die Einstellung für Dich funktionieren.

Betrachte diese Empfehlung als Ausgangspunkt. Wenn Du den Faktor '3x' verwendest und feststellst, dass AAPS bei steigenden Glukosewerten zu viel Insulin abgibt, dann verringere den Wert für "Maximales Gesamt-IOB, das nicht überschritten werden darf [IE]". Für den Fall, dass Du sehr insulinresistent bist, erhöhe den Wert vorsichtig.

![max daily basal](../images/MaxDailyBasal2.png)

- Wenn Du zuverlässig weißt, welcher IOB Deinem Looping Muster entspricht, senke die Werte auf den endgültigen Zielbereich.

(Objectives-objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens)=

## Ziel 8: Passe, falls notwendig, Basalraten und Faktoren an und aktiviere dann die Autosens-Funktion

Als Teil dieses Ziels wirst Du die Performanz Deines Profils überprüfen und dazu die Autosens-Funktionalität als einen Indikator zum Aufdecken falscher Einstellungen kennenlernen.

Geschätzte Zeit, um dieses Ziel abzuschließen: 7 Tage.

- Um zu prüfen, ob Deine Basalrate weiterhin passend ist, kannst Du einmalig [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) verwenden oder einen herkömmlichen Basalratentest machen.
- Enable [autosens](../DailyLifeWithAaps/KeyAapsFeatures.md) over a period of 7 days and watch OVERVIEW's graph white line showing your insulin sensitivity rising or falling due to exercise or hormones etc. and keep an eye on the OpenAPS report tab which shows **AAPS** adjusting the basals and/or targets accordingly.

(Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)=

## Ziel 9: Aktiviere zusätzliche oref1 Funktionen zum täglichen Gebrauch, wie z. B. den super micro bolus (SMB)

In diesem Ziel wirst Du "Super Micro Bolus (SMB)" als eine der wichtigsten Funktionalität kennenlernen und nutzen. Nachdem Du die Pflichtlektüre durchgearbeitet hast, wirst Du bereits ein gutes Verständnis für SMBs haben und wissen was SMBs sind und wie sie funktionieren. Du wirst verstehen warum, nach einem SMB, eine Basalrate vorübergehend auf Null gesetzt wird (sog. "zero-temping"). Geschätzte Zeit, um dieses Ziel abzuschließen: 28 Tage.

- The [SMB section in this documentation](../DailyLifeWithAaps/KeyAapsFeatures.md#super-micro-bolus-smb) and [oref1 coverage in the openAPSdocs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) are must-reads to understand SMB and the concept of zero-temping.
- Once done, you [raise maxIOB](../DailyLifeWithAaps/KeyAapsFeatures.md#maximum-total-iob-openaps-cant-go-over-openaps-max-iob) to get SMBs working well. maxIOB enthält nun das gesamte IOB und nicht nur das hinzugefügte Basalinsulin. Dieser Schwellwert pausiert SMBs solange bis das IOB unter diesen Wert fällt (_z.B._ maxIOB ist auf 7 IE eingestellt und es wird eine Mahlzeiten-Bolus von 8 IE abgegeben: SMBs werden dann solange pausiert und nicht abgegeben, bis das IOB unter 7 IE fällt). A good start is setting maxIOB = average mealbolus + 3x max daily basal (max daily basal = the maximum hourly value in any time segment of the day - see [objective 7](#objective-7-tuning-the-closed-loop-raising-maxiob-above-0-and-gradually-lowering-bg-targets) as reference)
- Wenn Du vom AMA-Algorithmus zu OpenAPS SMB wechselst, muss der Standardwert des "min_5m_carbimpact"-Wertes (Einstellungen > Resorptions-Einstellungen) auf 8 gesetzt werden. Für AMAs ist der Standardwert 3. Read more about this setting [here](../SettingUpAaps/Preferences.md#min_5m_carbimpact)

(Objectives-objective-10-automation)=

## Ziel 10: Automatisierung

Du musst **Ziel 10** starten, um Automatisierungen nutzen zu können.

1. Read the documentation page  [Automation](../DailyLifeWithAaps/Automations.md) first.
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

- Die Dokumentationsseite gibt einige Beispiele und Du kannst nach "Automatisierungs"-Screenshots in der [Facebook](https://www.facebook.com/groups/AndroidAPSUsers)-Gruppe suchen. Da die meisten Menschen jeden Morgen vor der Schule/Arbeit zur gleichen Zeit dasselbe zum Frühstück essen, kann ein ziemlich häufiger Anwendungsfall sein, ein "Vor-Frühstücks-Ziel" festzulegen, um 30 Minuten vor dem Frühstück ein leicht niedrigeres temporäres Ziel zu setzen. In einem solchen Fall besteht Deine Bedingung wahrscheinlich aus der Auswahl bestimmter Wochentage (Montag, Dienstag, Mittwoch, Donnerstag, Freitag) und einer bestimmten Uhrzeit (06:30 Uhr). Die Aktion wird aus "Temporäres Ziel (TT) starten" mit einem bestimmten Zielwert und einer Dauer von 30 Minuten bestehen.

## Ziel 11: Aktiviere zusätzliche Funktionen für den alltäglichen Gebrauch, wie z. B. das Dynamic Sensitivity Plugin (DynISF).

- Stelle sicher, dass SMBs wie gedacht funktionieren.
- Read the documentation concerning Dynamic ISF [here](../DailyLifeWithAaps/DynamicISF.md)
- Suche in den Facebook-Gruppen und dem [Discord](https://discord.gg/4fQUWHZ4Mw)-Channel nach Diskussionen rund um "Dynamic ISF" und profitiere von den Erfahrungen und Empfehlungen anderer Nutzer.
- Aktiviere das **DynamicISF-Plugin** und passe es auf den individuellen Bedarf Deines Körpers an. Aus Sicherheitsgründen ist es ratsam, mit einem Wert unter 100% zu beginnen.

(Objectives-go-back-in-objectives)=

## Objective (Ziel) neu starten

Wenn Du, aus welchem Grund auch immer, ein **Ziel** neu starten willst, klicke auf "Ziel neu starten".

![Go back in objectives](../images/Objective_ClearFinished.png)

## Objectives (Ziele) in Android APS-Versionen vor 3.0

Mit dem **AAPS** Release 3.0 wurde ein Ziel entfernt.  Users of Android APS version 2.8.2.1 who are on older Android software (_i.e._ earlier than version 9) will be using an older set of Objectives which can be found [here].
