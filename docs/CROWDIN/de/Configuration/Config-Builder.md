# Konfigurations-Generator

Abhängig von Deinen Einstellungen kannst Du den Konfigurationsgenerator über eine Registerkarte am oberen Bildschirmrand oder über das Hamburger-Menü öffnen.

![Konfigurations-Generator öffnen](../images/ConfBuild_Open_AAPS30.png)

Im Reiter “Konfigurations-Generator” (KONF) kannst du fast alle AAPS-Funktionen konfigurieren. Die Auswahlfelder links (A) aktivieren die gewählte Funktion, die Auswahlfelder rechts (C) legen fest, ob die Funktion als Tab (E) angezeigt wird oder nicht. Falls die rechte Box nicht aktiviert ist, sind die Funktionen über das Hamburger-Menü (D) oben links am Bildschirm erreichbar.

Falls zusätzliche Einstellungen innerhalb der Funktion möglich sind, können sie über das Zahnrad (B) aufgerufen werden.

**Erste Konfiguration:** Seit AAPS 2.0 führt dich ein Einrichtungsassistent durch die Einrichtung von AndroidAPS. Drücke das 3-Punkte-Menü (F) oben rechts am Bildschirm und wähle "Einrichtungsassistent", um diesen zu starten.

![Konfigurations-Generator - Checkboxen und Zahnrad](../images/ConfBuild_ConfigBuilder_AAPS30.png)

## Registerkarte (Tab) oder Hamburger-Menü

Mit der Checkbox unter dem Augensymbol entscheidest Du, wie Du den entsprechenden Programmabschnitt öffnest.

![Registerkarte (Tab) oder Hamburger-Menü](../images/ConfBuild_TabOrHH_AAPS30.png)

## Profile

* Wähle das Basal-Profil aus, das du benutzen möchtest. Siehe Seite [Profile](../Usage/Profiles.md) für weitere Informationen zu den Einstellungen.
* As of AAPS 3.0, only the local profile is available.

Es ist jedoch möglich, ein Nightscout-Profil mit einem lokalen Profil zu synchronisieren. Um dies zu tun, ist es jedoch wichtig, den gesamten Datenbank-Datensatz mit mehreren Profilen im Nightscout-Editor zu klonen. Please see the instructions below. This can be helpful if major changes to a more extensive profile can be entered more easily via the web interface, e.g. to manually copy data from a spreadsheet.

### Lokales Profil

Local profile uses the basal profile manually entered in phone. As soon as it is selected, a new tab appears in AAPS, where you can change the profile data read out from the pump if necessary. With the next profile switch they are then written to the pump in profile 1. This profile is recommended as it does not rely on internet connectivity.

Your local profiles are part of [exported settings](../Usage/ExportImportSettings.rst). So make sure to have a backup in a safe place.

![Local Profile settings](../images/LocalProfile_Settings.png)

Buttons:

* grünes Plus: hinzufügen
* rotes X: löschen
* blauer Pfeil: duplizieren

If you make any changes to your profile, make sure, you are editing the correct profile. Beim Wechsel zum Profil-Tab wird nicht immer das aktuell genutzte Profil angezeigt. Wenn Du z.B. einen Profilwechsel über den Startbildschirm durchgeführt hast, wird ggf. im Profil-Tab ein anderes Profil angezeigt.

#### Profilwechsel klonen

Aus einem Profilwechsel kannst Du ganz einfach ein neues lokales Profil erstellen. In this case timeshift and percentage will be applied to the new local profile.

1. Klicke auf das 3-Punkte-Menü in der oberen rechten Ecke.
2. Wähle "Behandlungen" aus.
3. Drücke das Sternsymbol um auf die Seite des Profilwechsels zuzugreifen.
4. Wähle den gewünschten Profilwechsel und drücke "Clone".
5. Das neue lokale Profil kannst Du im Tab "Lokales Profil" (LP) oder über das Hamburger-Menü bearbeiten.

![Profilwechsel klonen](../images/LocalProfile_ClonePS_AAPS30.png)

#### Lokale Profile zu Nightscout hochladen

Lokale Profile können auch zu Nightscout hochgeladen werden. Die Einstellungen sind in den [NSClient Einstellungen](../Configuration/Preferences#nightscout-client) zu finden.

![Upload local profile to NS](../images/LocalProfile_UploadNS_AASP30.png)

#### Profil im Nighscout Profil-Editor ändern

Du kannst Änderungen am Profil im Nighscout Profil-Editor mit lokalen Profilen synchronisieren. Die Einstellungen sind in den [NSClient Einstellungen](../Configuration/Preferences#nightscout-client) zu finden.

Es ist erforderlich, alle aktiven Datensätze der gesamten Nightscout Datenbank für die Profile zu klonen und nicht nur ein Profil mit dem blauen Pfeil! The new database records then carries the current date and can be activated via the tab "local profile".

![Clone database records](../images/Nightscout_Profile_Editor.PNG)

### Profil-Helfer

Der Profil-Helfer ermöglicht zwei Funktionen:

1. Finden eines Profils für Kinder
2. Vergleichen von zwei Profilen oder von Profilwechseln, um ein neues Profil zu klonen.

Details are explained on the separate [profile helper page](../Configuration/profilehelper.rst).

## Insulin

![Insulin type](../images/ConfBuild_Insulin_AAPS30.png)

* Hier musst du auswählen, welchen Insulintyp du verwendest.
* Die Oref Optionen 'Rapid-Acting Oref', Ultra-Rapid Oref', 'Lyumjev' und 'Free-Peak Oref' haben einen exponentiellen Verlauf. Mehr Informationen dazu finden sich in den [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves). 
* Diese Kurven variieren basierend auf der DIA (Insulinwirkdauer) und dem zeitlichen Abstand zum Wirkmaximum.
    
    * Die LILA Line zeigt, wie viel **Insulin nach einer Injektion verbleibt** und wie es im Zeitverlauf abgebaut wird.
    * Die BLAUE Line zeigt, **wie aktiv** das Insulin ist.

### DIA

* Die Insulinwirkdauer (DIA) ist nicht für jeden gleich. Daher musst Du es selbst für Dich austesten. 
* Unter fünf Stunden darf der Wert aber nicht liegen.
* Für viele Menschen mit Diabetes, die ultra-schnell wirkende Insuline wie Fiasp nutzen, gibt es 3 - 4 Stunden nach der Insulingabe nahezu keinen spürbaren Effekt mehr, auch wenn dann rechnerisch noch 0.0xx Einheiten vorhanden sind. Die verbleibende Menge kann aber bei Sport und anderen Aktivitäten doch noch einen Einfluss haben. Daher nutzt AAPS eine minimale Wirkdauer von 5 Stunden.
* Im Abschnitt zu den Insulinprofilen auf [dieser Seite](../Getting-Started/Screenshots#insulin-profile) findest Du weitere Informationen dazu. 

### Unterschiede der Insulintypen

* Bei den Profilen 'Rapid-Acting', 'Ultra-Rapid' und 'Lyumjev' kannst du nur die Insulinwirkdauer (DIA) anpassen. Der Zeitpunkt der maximalen Insulinwirkung ist fest vorgegeben. 
* Das Profil Free-Peak erlaubt, nicht nur die Insulinwirkdauer (DIA), sondern auch den Zeitpunkt der maximalen Insulinwirkung individuell festzulegen. Es sollte nur von erfahrenen Anwendern genutzt werden, die die Auswirkungen dieser Einstellungen kennen. 
* Das [Kurvendiagramm](../Getting-Started/Screenshots#insulin-profile) unterstützt Dich dabei, die verschiedenen Kurven zu verstehen. 
* Wenn Du die Checkbox akivierst, wird das Diagramm als eigener Tab angezeigt, sonst ist es über das Hamburger-Menü links oben erreichbar.

#### Rapid-Acting Oref

![Insulintyp Rapid-Acting Oref](../images/ConfBuild_Insulin_RAO.png)

* empfohlen für Humalog, Novolog und Novorapid
* DIA = mindestens 5 Stunden
* Wirkmaximum = 75 Minuten nach Insulingabe (fest eingestellt, nicht anpassbar)

#### Ultra-Rapid Oref

![Insulintyp Ultra-Rapid Oref](../images/ConfBuild_Insulin_URO.png)

* empfohlen für FIASP
* DIA = mindestens 5 Stunden
* Wirkmaximum = 55 Minuten nach Insulingabe (fest eingestellt, nicht anpassbar)

#### Lyumjev

![Insulintyp Lyumjev](../images/ConfBuild_Insulin_L.png)

* Spezielles Insulinprofil für Lyumjev
* DIA = mindestens 5 Stunden
* Wirkmaximum = 45 Minuten nach Insulingabe (fest eingestellt, nicht anpassbar)

#### Free Peak Oref

![Insulintyp Free Peak Oref](../images/ConfBuild_Insulin_FPO.png)

* Erlaubt das Wirkmaximum der Insulinaktivität individuell zu definieren. Klicke dazu auf das Zahnrad um erweiterte Einstellungen einzugeben.
* DIA wird automatisch auf 5 Stunden gesetzt, sofern von dir im Profil nichts anderes definiert wird.
* Dieses Profil wird dann empfohlen, wenn dein Insulintyp von den anderen Profilen nicht abgedeckt werden kann oder wenn eine Mischung verschiedener Insuline verwendet wird.

## BZ-Quelle

Hier kannst du auswählen, aus welcher Quelle AAPS die BZ-Werte empfangen soll. Weitere Informationen findest du auf der Seite [BZ-Quelle](BG-Source.rst).

![Konfigurations-Generator - BZ-Quelle](../images/ConfBuild_BGSource_AAPS30.png)

* [Build Your Own Dexcom App (BYODA)](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0) - Wähle zusätzlich in den Einstellungen “Sende BZ-Werte zu xDrip+”, wenn du die xDrip+ Alarme nutzen willst.
* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk) - Kann nicht als Empfänger für Dexcom G6 ab AAPS 3.0 verwendet werden (siehe [Versionshinweise](../Installing-AndroidAPS/Releasenotes#important-hints) für Details.
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de) - nur Version 4.15.57 und neuer werden unterstützt
* [Poctech](https://www.poctechcorp.com/en/contents/268/5682.html)
* [Tomato App](http://tomato.cool/) für MiaoMiao Geräte
* [Glunovo App](https://infinovo.com/) für Glunovo CGM System
* NSClient BG - nicht empfohlen, da der Closed Loop in diesem Fall von der Verfügbarkeit mobiler Daten bzw. eines WLAN abhängt. CGM-Daten werden nur dann empfangen, wenn eine Online-Verbindung zu Deiner Nightscout-Website besteht. Nutze lieber lokale Broadcasts aus einer der anderen CGM-Datenquellen.
* Zufalls-BZ: Generiert zufällige Blutzuckerdaten (nur im Demo-Modus)

## Pumpe

Select the pump you are using.

![Config Builder Pump selection](../images/ConfBuild_Pump_AAPS30.png)

* [Dana R](DanaR-Insulin-Pump.md)
* DanaR Korean (koreanische Version der DanaR)
* Dana Rv2 (DanaR mit inoffiziellem Firmware Upgrade)
* [Dana-i/RS](DanaRS-Insulin-Pump.md)
    
    * Wenn Du eine Dana-Pumpe nutzt, kannst Du in den **erweiterten Einstellungen** den Bluetooth Watchdog aktivieren, falls dies notwendig sein sollte. Er deaktiviert Bluetooth für eine Sekunde, falls keine Verbindung zur Pumpe möglich ist. Dies kann helfen, falls bei deinem Smartphone Probleme mit der Bluetooth-Verbindung auftreten.
    * Das [Passwort für die Dana RS Pumpe](../Configuration/DanaRS-Insulin-Pump.md) muss korrekt eingegeben werden. Das Passwort wurde in früheren Versionen nicht überprüft.

* [Accu Chek Insight](Accu-Chek-Insight-Pump.md)

* [Accu Chek Combo ](Accu-Chek-Combo-Pump.md) (erfordert Installation von Ruffy)
* [Omnipod Eros](OmnipodEros.rst)
* [Omnipod DASH](OmnipodDASH.md)
* [Medtronic](MedtronicPump.md)
* [Diaconn G8](DiaconnG8.rst)
* ICT (für OpenLoop mit ICT, AAPS macht nur Behandlungsvorschläge, die du dann selbst mit dem Pen umsetzen musst)
* Virtuelle Pumpe (für OpenLoop mit nicht unterstützten Pumpen, AAPS macht nur Behandlungsvorschläge, die du dann selbst in deiner Pumpe umsetzen musst)

## Empfindlichkeitserkennung

Hier kannst du auswählen, nach welchem Algorithmus AAPS die Insulinempfindlichkeit berechnen soll. For more details of different designs please [read on here](../Configuration/Sensitivity-detection-and-COB.md). Bei der Empfindlichkeitserkennung werden historische Daten "on the go" analysiert und Anpassungen vorgenommen, falls der Algorithmus feststellt, dass du sensibler oder weniger empfindlich auf das Insulin reagierst als üblich. Mehr Details zum Sensitivitäts Algorithmus findest du in den [OpenAPS Docs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

You can view your sensitivity on the homescreen by selecting SEN and watching the white line. Die [Empfindlichkeitserkennung Autosens](../Usage/Open-APS-features#autosens) ist erst freigeschaltet, wenn du [Ziel (objective) 8](../Usage/Objectives#ziel-8-passe-falls-notwendig-basalraten-und-faktoren-an-und-aktiviere-dann-die-autosens-funktion) erreicht hast. So lange Du dieses Ziel (objective) noch nicht erreicht hast, wird der Autosens-Prozentsatz bzw. die Autosens-Kurve nur zu Deiner Information angezeigt. AAPS nimmt keine Änderungen vor.

### Resorptions-Einstellungen

If you use Oref1 with SMB you must change **min_5m_carbimpact** to 8. Dieser Wert wird nur dann verwendet, wenn keine CGM-Werte empfangen werden oder körperliche Aktivitäten den Blutzuckeranstieg kompensieren, den AAPS normalerweise zur Berechnung des Kohlenhydratabbaus verwendet. So lange der [Kohlenhydratabbau](../Usage/COB-calculation.rst) nicht dynamisch aus den Veränderungen des BZ ermittelt werden kann, wird ein Standardwert für den Abbau angesetzt. Im Prinzip ist es eine Notlauffunktion.

## APS

Wähle den gewünschten APS-Algorithmus für Therapie-Anpassungen. Die Details zum ausgewählten Algorithmus findest du im Reiter OpenAPS (OPAS).

* OpenAPS AMA (advanced meal assist [fortgeschrittener Mahlzeitenassistent], Stand des Algorithmus 2017) In einfachen Worten: Wenn Du die Kohlenhydrate verlässlich eingibst, kann das System nach einem Mahlzeitenbolus schneller auf BZ-Anstiege reagieren und z.B. eine höhere Basalrate abgeben.
* [OpenAPS SMB](../Usage/Open-APS-features.md) (super micro bolus, aktuellster Algorithmus für erfahrene Anwender  
    Hinweis: OpenAPS SMB steht ab dem [9. Ziel](../Usage/Objectives#objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) (objective 10) zur Verfügung und min_5m_carbimpact muss auf 8 eingestellt werden (Konfigurations-Generator > Sensitivitätserkennung > Sensitivität Oref1 Einstellungen).

## Loop

* Wechsel zwischen Open Loop, Closed Loop und Unterbrechung bei niedrigen BZ (LGS).

![Konfigurations-Generator - Loop Modus](../images/ConfigBuilder_LoopLGS.png)

### Open Loop

* AAPS wertet laufend alle verfügbaren Daten (IOB, COB, BZ-Wert) aus und macht dir bei Bedarf Behandlungsvorschläge, wie du deine Therapie anpassen solltest. 
* Die Vorschläge werden nicht automatisch (wie im Closed Loop) ausgeführt, sondern müssen manuell in die Pumpe eingegeben werden. Wenn Du eine kompatible Pumpe (Dana R/RS oder Accu Chek Combo) verwendest, kann dies auch über eine Schaltfläche in AndroidAPS geschehen. 
* Diese Option ist zum Kennenlernen der Funktionsweise gedacht oder falls du eine nicht unterstützte Pumpe verwendest.

### Closed Loop

* AAPS wertet laufend alle verfügbaren Daten (IOB, COB, BZ-Wert) aus und passt die Behandlung bei Bedarf automatisch (also ohne weiteren Eingriff durch dich) an, um den eingestellten Zielbereich oder Zielwert zu erreichen (Bolusabgabe, temporäre Basalrate, Insulinabschaltung zur Hypovermeidung etc.). 
* Der Closed Loop arbeitet im Rahmen zahlreicher Sicherheitsgrenzen, die du individuell einstellen kannst.
* Hinweis: Der Closed Loop steht ab dem [6. Ziel](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend) (objective 6) zur Verfügung und setzt eine unterstütze Pumpe voraus.
* Hinweis: Im Closed Loop wird ein Zielwert statt einem Zielbereich empfohlen (also z.B. 100 mg/dl statt 90 - 130 mg/dl bzw. 5,5 mmol statt 5,0 - 7,0 mmol).

### Abschalten des Basalrate bei niedrigen Werten (Low Glucose Suspend - LGS)

* maxIOB wird auf null gesetzt
* Das bedeutet, wenn der Blutzuckerspiegel sinkt, kann AAPS die Basalrate automatisch reduzieren.
* Aber wenn der Blutzuckerspiegel steigt, wird keine automatische Korrektur vorgenommen. Deine Basalrate bleibt die gleiche wie in Deinem ausgewählten Profil.
* Nur wenn das Basal-IOB negativ ist (wegen einer vorangegangenen Abschaltung der Basalrate bei niedrigen Werten) wird zusätzliches Insulin abgegeben, um den BZ zu senken.

### Minimaler Wert zur Anfrage einer Änderung

* Im Open Loop erhälst Du jedes Mal eine Benachrichtigung, wenn AAPS empfiehlt, die Basalrate anzupassen. 
* Um die Anzahl der Benachrichtigungen zu reduzieren, kannst Du entweder einen breiteren BZ-Zielbereich verwenden oder den Prozentsatz des minimalen Werts zur Anfrage einer Änderung erhöhen.
* Diese definiert, wie hoch die relative Änderung sein muss, damit eine Benachrichtigung erscheint.

## Ziele (objectives - Lernprogramm)

AndroidAPS hat eine Reihe an Zielen (objectives), die du nach und nach erfüllen musst. Dies soll dich sicher durch die Einrichtung eines Closed Loop Systems führen. It guarantees that you have set everything up correctly and understand what the system does exactly. This is the only way you can trust the system.

Du solltest regelmäßig deine Einstellungen (inklusive deiner Fortschritte in den objectives) [exportieren](../Usage/ExportImportSettings.rst). In case you have to replace your smartphone later (new purchase, display damage etc.) you can simply import those settings.

Weitere Informationen findest du auf der Seite [Objectives (Ziele)](../Usage/Objectives.rst).

## Behandlungen

Der Reiter Behandlungen (BEH) zeigt dir die Behandlungen an, die zu Nightscout hochgeladen wurden. Falls du einen Eintrag editieren oder löschen willst (z.B. weil du weniger Kohlenhydrate gegessen hast, als erwartet) - wähle "Löschen" und trage den neuen Wert über den [Button Kohlenhydrate auf dem Startbildschirm](../Getting-Started/Screenshots#kohlenhydrat-korrektur) ein. Denke daran, ggf. die Zeit anzupassen.

## Allgemein

### Übersicht

Zeigt den aktuellen Status deines Loops und Schaltflächen für die häufigsten Aktionen an (Details dazu findest du im Bereich [Die Startseite](../Getting-Started/Screenshots.md)). Settings can be accessed by clicking the cog wheel.

#### Bildschirm aktiv lassen

Die Option "Bildschirm aktiv lassen" hindert Android daran, den Bildschirm abzuschalten. Dies ist z.B. zu Präsentationszwecken hilfreich, Es verbraucht aber sehr viel Batterie. Therefore, it is recommended to connect the smartphone to a charger cable.

#### Schaltflächen

Define which Buttons are shown on the home screen.

* Behandlungen
* Bolus-Rechner
* Insulin
* Kohlenhydrate
* CGM (öffnet xDrip+)
* Kalibrierung

Außerdem kannst du feste Werte für die Erhöhung der Insulin- und Kohlenhydratmengen festlegen und entscheiden, ob ein Notizfeld im Behandlungsdialog angezeigt werden soll.

#### QuickWizard-Einstellungen

Hier kannst du eine Schaltfläche für eine bestimmte Standardmahlzeit erstellen (KH und Berechnungsmethode für den Bolus), die dir dann auf dem Startbildschirm angezeigt wird. Dies ist sehr hilfreich, wenn du z.B. morgens häufig dasselbe isst (Button “1 Vollkornbrot”). If different times are specified for the different meals you will always have the appropriate standard meal button on the home screen, depending on the time of day.

Hinweis: Die Schaltfläche wird außerhalb der eingestellten Zeiträume nicht angezeigt. Gleiches gilt, wenn genug Insulin (IOB) zur Verfügung steht, um die in den Schaltflächeneinstellungen definierte Kohlenhydratmenge abzudecken.

![QuickWizard Schaltfläche](../images/ConfBuild_QuickWizard.png)

#### Default Temp-Targets

Choose default temp-targets (duration and target). Preset values are:

* Bald essen: Zielwert 72 mg/dl / 4.0 mmol/l, Dauer 45 min
* Aktivität: Zielwert 140 mg/dl / 7.8 mmol/l, Dauer 90 min
* Hypo: Zielwert 125 mg/dl / 6.9 mmol/l, Dauer 45 min

#### Füll-/Vorfüll-Standardmengen

Stelle die Werte für die drei Buttons im Dialog 'Katheterwechsel' (Aktionen Tab / Menü) abhängig von der Länge Deines Katheters ein.

#### Range of visualization

Wähle die Ober- und Untergrenze des grün hinterlegten Zielbereichs im Diagramm auf der Startseite und auf der Smartwatch. Dies dient nur der Anzeige und ist nicht der Zielwert für Deinen Blutzucker. Example: 70 - 180 mg/dl or 3.9 - 10 mmol/l

#### Kurze Tab-Überschriften

Wähle, ob die Titel der Tabs lang (z.B. Aktionen, Lokales Profil, Behandlungen) oder kurz (z.B. AKT, LP, BEH) angezeigt werden sollen.

#### Show notes field in treatment dialogs

Hier kannst Du das Notizfeld für die Behandlungsdialoge (Bolus-Rechner, Insulin, Kohlenhydrate) ein- oder ausschalten.

#### Statusanzeige

Aktiviere wenn gewünscht die [Statusanzeige](../Configuration/Preferences#statusanzeige) für eine Übersicht zu Batterie-, Kanülen-, Insulin- und Sensoralter sowie Batterie- und Reservoirstand. When warning level is reached, the color of the status light will switch to yellow. Ab der kritischen Warnschwelle werden die Werte rot angezeigt.

#### Advanced settings

**Abgabe nur eines Teils der vom Bolus-Rechner ermittelten Insulinmenge**: Viele Anwender geben bei der Nutzung von SMB nicht mehr 100% der vom Bolus-Rechner ermittelten Insulinmenge ab. Stattdessen geben Sie nur einen Teil (z.B. 75%) ab und lassen SMB und UAM ("nicht angemeldete Mahlzeiten") den Rest erledigen. In dieser Einstellung kannst Du einen Standard-Prozentsatz festlegen, mit dem der Bolus-Rechner arbeiten soll. Wenn Du z.B. 75% einstellst und eigentlich 10 IE bolen solltest, wird der Bolus-Rechner nur einen Mahlzeitenbolus von 7,5 IE vorschlagen.

**Aktivierung des Superbolus im Bolus-Rechner.** (Das ist etwas anderes als ein *Super Micro Bolus*!): Verwende den Superbolus mit Vorsicht und vor allem nicht, bevor Du wirklich verstanden hast, wie er funktioniert. Im Wesentlichen wird das Basalinsulin der nächsten zwei Stunden zum Bolus hinzugefügt und die Basalrate für zwei Stunden auf null gesetzt. **AAPS Loop-Funktionen werden deaktiviert - also mit Vorsicht verwenden! Wenn Du SMB nutzt, werden die AAPS Loop-Funktionen entsprechend Deiner Einstellungen in ["SMB Basal-Limit in Minuten"](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to) deaktiviert. Wenn Du SMB nicht nutzt, wird für zwei Stunden deaktiviert.** Details zum Superbolus findest Du [hier](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### Aktionen

* Einige Schaltflächen, um auf häufig verwendete Funktionen zugreifen zu können.
* Details findest Du auf der Seite [AndroidAPS Bildschirme](../Getting-Started/Screenshots#aktionen-tab).

### Automatisierung

User defined automation tasks ('if-then-else'). Please [read on here](../Usage/Automation.rst).

### SMS Kommunikator

Der SMS-Kommunikator erlaubt die Fernsteuerung einiger AndroidAPS Funktionen via SMS. Weitere Informationen zum Setup findest Du auf der Seite [SMS-Befehle](../Children/SMS-Commands.rst).

### Essen

Zeigt die im Nahrungsmittel-Editor erfassten Einträge an. Weitere Informationen zur Einrichtung der Nahrungsmitteldatenbank findest Du im [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods).

Hinweis: Die Einträge können nicht im AndroidAPS-Rechner verwendet werden. (View only)

### Wear

Auf einer Android Wear Smartwatch können die Daten von AAPS angezeigt und einige Funktionen gesteuert werden (siehe [Seite Watchfaces](../Configuration/Watchfaces.md)). In den Einstellungen (Zahnradsymbol) kannst du die Variablen festlegen, die bei der Berechnung eines über die Uhr gegebenen Bolus berücksichtigt werden sollen (z.B. 15'-Trend, COB...).

Wenn Du Deinen Loop von der Uhr aus steuern willst (z.B. Bolus abgeben), aktiviere "Steuerung durch die Uhr".

![Wear-Einstellungen](../images/ConfBuild_Wear.png)

Über den Wear Tab oder das Hamburger Menü (oben links, falls der Wear Tab nicht angezeigt wird) kannst du

* Alle Daten erneut senden. Dies kann hilfreich sein, wenn die Uhr längere Zeit außer Reichweite war und du die Informationen an die Uhr pushen willst.
* Über das Smartphone die Einstellungen auf der Uhr öffnen.

### xDrip+ Statuszeile (Uhr)

Zeigt Loop Information in deinem xDrip+ Watchface (falls du nicht das AAPS/[AAPS v2 Watchface](../Configuration/Watchfaces.md) nutzt.)

### Nightscout-Client

* Ns-Client Synchronisierung deiner AndroidAPS-Daten mit Nightscout einrichten.
* Mit einem Klick auf das [Zahnrad](../Configuration/Preferences#nsclient) kannst Du direkt in die Einstellungen springen und diese anpassen.

### Wartung

Email and number of logs to be send. Normally no change necessary.

### Konfigurations-Generator

Use tab for config builder instead of hamburger menu.