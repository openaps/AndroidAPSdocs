# Konfigurations-Generator

Abhängig von Deinen Einstellungen kannst Du den Konfigurationsgenerator über eine Registerkarte am oberen Bildschirmrand oder über das Hamburger-Menü öffnen.

![Konfigurations-Generator öffnen](../images/ConfBuild_Open_AAPS30.png)

Im Reiter “Konfigurations-Generator” (KONF) kannst du fast alle AAPS-Funktionen konfigurieren. Die Auswahlfelder links (A) aktivieren die gewählte Funktion, die Auswahlfelder rechts (C) legen fest, ob die Funktion als Tab (E) angezeigt wird oder nicht. Falls die rechte Box nicht aktiviert ist, sind die Funktionen über das Hamburger-Menü (D) oben links am Bildschirm erreichbar.

Falls zusätzliche Einstellungen innerhalb der Funktion möglich sind, können sie über das Zahnrad (B) aufgerufen werden.

**Erste Konfiguration:** Seit AAPS 2.0 führt dich ein Einrichtungsassistent durch die Einrichtung von AndroidAPS. Drücke das 3-Punkte-Menü (F) oben rechts am Bildschirm und wähle "Einrichtungsassistent", um diesen zu starten.

![Konfigurations-Generator - Checkboxen und Zahnrad](../images/ConfBuild_ConfigBuilder_AAPS30.png)

(Config-Builder-tab-or-hamburger-menu)=

## Registerkarte (Tab) oder Hamburger-Menü

Mit der Checkbox unter dem Augensymbol entscheidest Du, wie Du den entsprechenden Programmabschnitt öffnest.

![Registerkarte (Tab) oder Hamburger-Menü](../images/ConfBuild_TabOrHH_AAPS30.png)

(Config-Builder-profile)=

## Profile

* Wähle das Basal-Profil aus, das du benutzen möchtest. Siehe Seite [Profile](../Usage/Profiles.md) für weitere Informationen zu den Einstellungen.
* Ab AAPS 3.0 können nur lokale Profile verwendet werden.

Es ist jedoch möglich, ein Nightscout-Profil mit einem lokalen Profil zu synchronisieren. Um dies zu tun, ist es jedoch wichtig, den gesamten Datenbank-Datensatz mit mehreren Profilen im Nightscout-Editor zu klonen. Bitte beachte die unten stehenden Informationen. Dies kann hilfreich sein, wenn größere Änderungen an einem umfassenderen Profil einfacher über das Web-Interface eingegeben werden können, z.B. um die Daten manuell aus einer Tabelle zu kopieren.

(Config-Builder-local-profile)=

### Lokales Profil

Das lokale Profil nutzt das Profil, das in der Pumpe manuell erfasst wurde. Sobald "Lokales Profil" ausgewählt ist, erscheint ein weiterer Tab, in dem die aus der Pumpe ausgelesenen Profildaten bei Bedarf angepasst werden können. Beim nächsten Profil Wechsel werden sie an die Pumpe übertragen und in deren Profil 1 gespeichert. Diese Einstellung wird empfohlen, da keine Internetverbindung erforderlich ist.

Deine lokalen Profile werden mit den [Einstellungen exportiert](../Usage/ExportImportSettings.md). Stelle also sicher, dass Du immer ein Backup an einem sicheren Ort hast.

![Einstellungen lokales Profil](../images/LocalProfile_Settings.png)

Schaltflächen:

* grünes Plus: hinzufügen
* rotes X: löschen
* blauer Pfeil: duplizieren

Achte darauf, dass Du das richtige Profil anpasst, wenn Du Änderungen vornimmst. Beim Wechsel zum Profil-Tab wird nicht immer das aktuell genutzte Profil angezeigt. Wenn Du z.B. einen Profilwechsel über den Startbildschirm durchgeführt hast, wird ggf. im Profil-Tab ein anderes Profil angezeigt.

#### Profilwechsel klonen

Aus einem Profilwechsel kannst Du ganz einfach ein neues lokales Profil erstellen. Zeitverschiebung und Prozentsatz des Profilwechsels werden in das neue lokale Profil übernommen.

1. Klicke auf das 3-Punkte-Menü in der oberen rechten Ecke.
2. Wähle "Behandlungen" aus.
3. Drücke das Sternsymbol um auf die Seite des Profilwechsels zuzugreifen.
4. Wähle den gewünschten Profilwechsel und drücke "Clone".
5. Das neue lokale Profil kannst Du im Tab "Lokales Profil" (LP) oder über das Hamburger-Menü bearbeiten.

![Profilwechsel klonen](../images/LocalProfile_ClonePS_AAPS30.png)

(Config-Builder-upload-local-profiles-to-nightscout)=

#### Lokale Profile zu Nightscout hochladen

Lokale Profile können auch zu Nightscout hochgeladen werden. The settings can be found in [NSClient preferences](Preferences-nsclient).

![Lokales Profil zu NS hochladen](../images/LocalProfile_UploadNS_AASP30.png)

#### Profil im Nighscout Profil-Editor ändern

Du kannst Änderungen am Profil im Nighscout Profil-Editor mit lokalen Profilen synchronisieren. The settings can be found in [NSClient preferences](Preferences-nsclient).

Es ist erforderlich, alle aktiven Datensätze der gesamten Nightscout Datenbank für die Profile zu klonen und nicht nur ein Profil mit dem blauen Pfeil! Die neuen Datensätze tragen dann das aktuelle Datum und können über die Registerkarte "lokales Profil" aktiviert werden.

![Datensätze klonen](../images/Nightscout_Profile_Editor.PNG)

### Profil-Helfer

Der Profil-Helfer ermöglicht zwei Funktionen:

1. Finden eines Profils für Kinder
2. Vergleichen von zwei Profilen oder von Profilwechseln, um ein neues Profil zu klonen.

Details werden auf der separaten [Profil-Helfer-Seite](../Configuration/profilehelper.md) erläutert.

(Config-Builder-insulin)=

## Insulin

![Insulintyp](../images/ConfBuild_Insulin_AAPS30.png)

* Hier musst du auswählen, welchen Insulintyp du verwendest.
* Die Oref Optionen 'Rapid-Acting Oref', Ultra-Rapid Oref', 'Lyumjev' und 'Free-Peak Oref' haben einen exponentiellen Verlauf. Mehr Informationen dazu finden sich in den [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves). 
* Diese Kurven variieren basierend auf der DIA (Insulinwirkdauer) und dem zeitlichen Abstand zum Wirkmaximum.
    
    * Die LILA Line zeigt, wie viel **Insulin nach einer Injektion verbleibt** und wie es im Zeitverlauf abgebaut wird.
    * Die BLAUE Line zeigt, **wie aktiv** das Insulin ist.

### DIA

* Die Insulinwirkdauer (DIA) ist nicht für jeden gleich. Daher musst Du es selbst für Dich austesten. 
* Unter fünf Stunden darf der Wert aber nicht liegen.
* Für viele Menschen mit Diabetes, die ultra-schnell wirkende Insuline wie Fiasp nutzen, gibt es 3 - 4 Stunden nach der Insulingabe nahezu keinen spürbaren Effekt mehr, auch wenn dann rechnerisch noch 0.0xx Einheiten vorhanden sind. Die verbleibende Menge kann aber bei Sport und anderen Aktivitäten doch noch einen Einfluss haben. Daher nutzt AAPS eine minimale Wirkdauer von 5 Stunden.
* You can read more about that in the Insulin Profile section of [this](Screenshots-insulin-profile) page.

### Unterschiede der Insulintypen

* Bei den Profilen 'Rapid-Acting', 'Ultra-Rapid' und 'Lyumjev' kannst du nur die Insulinwirkdauer (DIA) anpassen. Der Zeitpunkt der maximalen Insulinwirkung ist fest vorgegeben. 
* Das Profil Free-Peak erlaubt, nicht nur die Insulinwirkdauer (DIA), sondern auch den Zeitpunkt der maximalen Insulinwirkung individuell festzulegen. Es sollte nur von erfahrenen Anwendern genutzt werden, die die Auswirkungen dieser Einstellungen kennen. 
* The [insulin curve graph](Screenshots-insulin-profile) helps you to understand the different curves.
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

(Config-Builder-lyumjev)=

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

(Config-Builder-bg-source)=

## BZ-Quelle

Hier kannst du auswählen, aus welcher Quelle AAPS die BZ-Werte empfangen soll. Weitere Informationen findest du auf der Seite [BZ-Quelle](BG-Source.md).

![Konfigurations-Generator - BZ-Quelle](../images/ConfBuild_BGSource_AAPS30.png)

* [Build Your Own Dexcom App (BYODA)](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0) - Wähle zusätzlich in den Einstellungen “Sende BZ-Werte zu xDrip+”, wenn du die xDrip+ Alarme nutzen willst.
* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk) - Cannot be used as receiver for Dexcom G6 as of AAPS 3.0 (see [release notes](Releasenotes-important-hints-3-0-0) for details.
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de) - nur Version 4.15.57 und neuer werden unterstützt
* [Poctech](https://www.poctechcorp.com/en/contents/268/5682.html)
* [Tomato App](http://tomato.cool/) für MiaoMiao Geräte
* [Glunovo App](https://infinovo.com/) für Glunovo CGM System
* NSClient BG - nicht empfohlen, da der Closed Loop in diesem Fall von der Verfügbarkeit mobiler Daten bzw. eines WLAN abhängt. CGM-Daten werden nur dann empfangen, wenn eine Online-Verbindung zu Deiner Nightscout-Website besteht. Nutze lieber lokale Broadcasts aus einer der anderen CGM-Datenquellen.
* Zufalls-BZ: Generiert zufällige Blutzuckerdaten (nur im Demo-Modus)

(Config-Builder-pump)=

## Pumpe

Wähle die von dir genutzte Pumpe.

![Konfigurationsgenerator - Pumpe wählen](../images/ConfBuild_Pump_AAPS30.png)

* [Dana R](DanaR-Insulin-Pump.md)
* DanaR Korean (koreanische Version der DanaR)
* Dana Rv2 (DanaR mit inoffiziellem Firmware Upgrade)
* [Dana-i/RS](DanaRS-Insulin-Pump.md)
    
    * Wenn Du eine Dana-Pumpe nutzt, kannst Du in den **erweiterten Einstellungen** den Bluetooth Watchdog aktivieren, falls dies notwendig sein sollte. Er deaktiviert Bluetooth für eine Sekunde, falls keine Verbindung zur Pumpe möglich ist. Dies kann helfen, falls bei deinem Smartphone Probleme mit der Bluetooth-Verbindung auftreten.
    * Das [Passwort für die Dana RS Pumpe](../Configuration/DanaRS-Insulin-Pump.md) muss korrekt eingegeben werden. Das Passwort wurde in früheren Versionen nicht überprüft.

* [Accu Chek Insight](Accu-Chek-Insight-Pump.md)

* [Accu Chek Combo ](Accu-Chek-Combo-Pump.md) (erfordert Installation von Ruffy)
* [Omnipod Eros](OmnipodEros.md)
* [Omnipod DASH](OmnipodDASH.md)
* [Medtronic](MedtronicPump.md)
* [Diaconn G8](DiaconnG8.md)
* ICT (für OpenLoop mit ICT, AAPS macht nur Behandlungsvorschläge, die du dann selbst mit dem Pen umsetzen musst)
* Virtuelle Pumpe (für OpenLoop mit nicht unterstützten Pumpen, AAPS macht nur Behandlungsvorschläge, die du dann selbst in deiner Pumpe umsetzen musst)

## Empfindlichkeitserkennung

Hier kannst du auswählen, nach welchem Algorythmus AAPS die Insulinempfindlichkeit berechnen soll. Die Details der verschiedenen Modelle sind [hier](../Configuration/Sensitivity-detection-and-COB.md) näher beschrieben. Bei der Empfindlichkeitserkennung werden historische Daten "on the go" analysiert und Anpassungen vorgenommen, falls der Algorithmus feststellt, dass du sensibler oder weniger empfindlich auf das Insulin reagierst als üblich. Mehr Details zum Sensitivitäts Algorithmus findest du in den [OpenAPS Docs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

Die berechnete Insulinempfindlichkeit kannst du verfolgen, indem du auf der Startseite im Auswahlmenü der angezeigten Kurven “Sensitivität” auswählst. Die weiße Linie zeigt dir das graphisch an. Note, you need to be in [Objective 8](Objectives-objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens) in order to let Sensitivity Detection/[Autosens](Open-APS-features-autosens) automatically adjust the amount of insulin delivered. So lange Du dieses Ziel (objective) noch nicht erreicht hast, wird der Autosens-Prozentsatz bzw. die Autosens-Kurve nur zu Deiner Information angezeigt. AAPS nimmt keine Änderungen vor.

(Config-Builder-absorption-settings)=

### Resorptions-Einstellungen

Wenn Du Oref1 mit SMB nutzt, musst du **min_5m_carbimpact** auf 8 ändern. Dieser Wert wird nur dann verwendet, wenn keine CGM-Werte empfangen werden oder körperliche Aktivitäten den Blutzuckeranstieg kompensieren, den AAPS normalerweise zur Berechnung des Kohlenhydratabbaus verwendet. So lange der [Kohlenhydratabbau](../Usage/COB-calculation.md) nicht dynamisch aus den Veränderungen des BZ ermittelt werden kann, wird ein Standardwert für den Abbau angesetzt. Im Prinzip ist es eine Notlauffunktion.

(Config-Builder-aps)=

## APS

Wähle den gewünschten APS-Algorithmus für Therapie-Anpassungen. Die Details zum ausgewählten Algorithmus findest du im Reiter OpenAPS (OPAS).

* OpenAPS AMA (advanced meal assist [fortgeschrittener Mahlzeitenassistent], Stand des Algorithmus 2017) In einfachen Worten: Wenn Du die Kohlenhydrate verlässlich eingibst, kann das System nach einem Mahlzeitenbolus schneller auf BZ-Anstiege reagieren und z.B. eine höhere Basalrate abgeben.
* [OpenAPS SMB](../Usage/Open-APS-features.md) (super micro bolus, most recent algorithm for advanced users) Note you need to be in [Objective 9](Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) in order to use OpenAPS SMB and min_5m_carbimpact must be set to 8 in Config builder > Sensitivity detection > Sensitivity Oref1 settings.

## Loop

* Wechsel zwischen Open Loop, Closed Loop und Unterbrechung bei niedrigen BZ (LGS).

![Konfigurations-Generator - Loop Modus](../images/ConfigBuilder_LoopLGS.png)

(Config-Builder-open-loop)=

### Open Loop

* AAPS wertet laufend alle verfügbaren Daten (IOB, COB, BZ-Wert) aus und macht dir bei Bedarf Behandlungsvorschläge, wie du deine Therapie anpassen solltest. 
* Die Vorschläge werden nicht automatisch (wie im Closed Loop) ausgeführt, sondern müssen manuell in die Pumpe eingegeben werden. Wenn Du eine kompatible Pumpe (Dana R/RS oder Accu Chek Combo) verwendest, kann dies auch über eine Schaltfläche in AndroidAPS geschehen. 
* Diese Option ist zum Kennenlernen der Funktionsweise gedacht oder falls du eine nicht unterstützte Pumpe verwendest.

(Config-Builder-closed-loop)=

### Closed Loop

* AAPS wertet laufend alle verfügbaren Daten (IOB, COB, BZ-Wert) aus und passt die Behandlung bei Bedarf automatisch (also ohne weiteren Eingriff durch dich) an, um den eingestellten Zielbereich oder Zielwert zu erreichen (Bolusabgabe, temporäre Basalrate, Insulinabschaltung zur Hypovermeidung etc.). 
* Der Closed Loop arbeitet im Rahmen zahlreicher Sicherheitsgrenzen, die du individuell einstellen kannst.
* Closed Loop is only possible if you are in [Objective 6](Objectives-objective-6-starting-to-close-the-loop-with-low-glucose-suspend) or higher and use a supported pump.
* Hinweis: Im Closed Loop wird ein Zielwert statt einem Zielbereich empfohlen (also z.B. 100 mg/dl statt 90 - 125 mg/dl bzw. 5,5 mmol statt 5,0 - 7,0 mmol).

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

AndroidAPS hat eine Reihe an Zielen (objectives), die Du nach und nach erfüllen musst. Dies soll dich sicher durch die Einrichtung eines Closed Loop Systems führen. Das garantiert, dass du alles korrekt eingestellt hast und auch verstehst, was das System genau macht. Nur so kannst du dem System vertrauen.

Du solltest regelmäßig deine Einstellungen (inklusive deiner Fortschritte in den objectives) [exportieren](../Usage/ExportImportSettings.md). Dann kannst du sie einfach importieren, wenn du später einmal Dein Smartphone austauschen musst (neues Gerät, Displayschaden...).

Siehe Seite [Ziele](../Usage/Objectives.md) für weitere Informationen zu den Einstellungen.

## Behandlungen

Der Reiter Behandlungen (BEH) zeigt Dir die zu Nightscout hochgeladenen Behandlungen. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the [carbs button on the home screen](Screenshots-carb-correction).

## Allgemein

### Übersicht

Zeigt den aktuellen Status deines Loops und Schaltflächen für die häufigsten Aktionen an (Details dazu findest Du im Bereich [Die Startseite](../Getting-Started/Screenshots.md)). Die Einstellungen erreichst Du über das Zahnradsymbol.

#### Bildschirm aktiv lassen

Die Option "Bildschirm aktiv lassen" hindert Android daran, den Bildschirm abzuschalten. Dies ist z.B. zu Präsentationszwecken hilfreich, es verbraucht aber sehr viel Batterie. Deshalb wird empfohlen, das Smartphone an ein Ladekabel anzuschließen.

#### Schaltflächen

Hier kannst Du festlegen, welche Schaltflächen auf der Startseite angezeigt werden.

* Behandlungen
* Bolus-Rechner
* Insulin
* Kohlenhydrate
* CGM (öffnet xDrip+)
* Kalibrierung

Außerdem kannst Du feste Werte für die Erhöhung der Insulin- und Kohlenhydratmengen festlegen und entscheiden, ob ein Notizfeld im Behandlungsdialog angezeigt werden soll.

#### QuickWizard-Einstellungen

Hier kannst Du eine Schaltfläche für eine bestimmte Standardmahlzeit erstellen (KH und Berechnungsmethode für den Bolus), die Dir dann auf dem Startbildschirm angezeigt wird. Dies ist sehr hilfreich, wenn Du z.B. morgens häufig dasselbe isst (Button “1 Vollkornbrot”). Wenn Du mehrere Standardmahlzeiten anlegst und für sie verschiedene Uhrzeiten angibst, dann hast Du je nach Tageszeit auf dem Startbildschirm immer den passenden Standardmahlzeit-Button.

Hinweis: Die Schaltfläche wird außerhalb der eingestellten Zeiträume nicht angezeigt. Gleiches gilt, wenn genug Insulin (IOB) zur Verfügung steht, um die in den Schaltflächeneinstellungen definierte Kohlenhydratmenge abzudecken.

![QuickWizard Schaltfläche](../images/ConfBuild_QuickWizard.png)

#### Vordefinierte temporäre Ziele

Wähle Deine vordefinierten temporären Ziele (Dauer und Zielwert). Voreingestellte Werte sind:

* Bald essen: Zielwert 72 mg/dl / 4.0 mmol/l, Dauer 45 min
* Aktivität: Zielwert 140 mg/dl / 7.8 mmol/l, Dauer 90 min
* Hypo: Zielwert 125 mg/dl / 6.9 mmol/l, Dauer 45 min

#### Füll-/Vorfüll-Standardmengen

Stelle die Werte für die drei Buttons im Dialog 'Katheterwechsel' (Aktionen Tab / Menü) abhängig von der Länge Deines Katheters ein.

#### Zielbereich für die Grafikanzeige

Wähle die Ober- und Untergrenze des grün hinterlegten Zielbereichs im Diagramm auf der Startseite und auf der Smartwatch. Dies dient nur der Anzeige und ist nicht der Zielwert für Deinen Blutzucker. Beispiel: 70 - 180 mg/dl oder 3,9 - 10 mmol/l

#### Kurze Tab-Überschriften

Wähle, ob die Titel der Tabs lang (z.B. Aktionen, Lokales Profil, Behandlungen) oder kurz (z.B. AKT, LP, BEH) angezeigt werden sollen.

#### Zeige Feld für Notizen in den Behandlungsdialogen

Hier kannst Du das Notizfeld für die Behandlungsdialoge (Bolus-Rechner, Insulin, Kohlenhydrate) ein- oder ausschalten.

#### Statusanzeige

Choose if you want to have [status lights](Preferences-status-lights) on overview for cannula age, insulin age, sensor age, battery age, reservoir level or battery level. Bei Überschreiten der Warnschwelle werden die Werte gelb angezeigt. Ab der kritischen Warnschwelle werden die Werte rot angezeigt.

#### Erweiterte Einstellungen

**Abgabe nur eines Teils der vom Bolus-Rechner ermittelten Insulinmenge**: Viele Anwender geben bei der Nutzung von SMB nicht mehr 100% der vom Bolus-Rechner ermittelten Insulinmenge ab. Stattdessen geben Sie nur einen Teil (z.B. 75%) ab und lassen SMB und UAM ("nicht angemeldete Mahlzeiten") den Rest erledigen. In dieser Einstellung kannst Du einen Standard-Prozentsatz festlegen, mit dem der Bolus-Rechner arbeiten soll. Wenn Du z.B. 75% einstellst und eigentlich 10 IE bolen solltest, wird der Bolus-Rechner nur einen Mahlzeitenbolus von 7,5 IE vorschlagen.

**Aktivierung des Superbolus im Bolus-Rechner.** (Das ist etwas anderes als ein *Super Micro Bolus*!): Verwende den Superbolus mit Vorsicht und vor allem nicht, bevor Du wirklich verstanden hast, wie er funktioniert. Im Wesentlichen wird das Basalinsulin der nächsten zwei Stunden zum Bolus hinzugefügt und die Basalrate für zwei Stunden auf null gesetzt. **AAPS Loop-Funktionen werden deaktiviert - also mit Vorsicht verwenden! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](Open-APS-features-max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

(Config-Builder-actions)=

### Aktionen

* Einige Schaltflächen, um auf häufig verwendete Funktionen zugreifen zu können.
* See [AAPS screenshots](Screenshots-action-tab) for details.

### Automatisierung

Benutzerdefinierte Automatisierung von Aufgaben ("wenn - dann - sonst"). Weitere Details findest Du auf der Seite zu [Automatisierungen](../Usage/Automation.md).

(Config-Builder-sms-communicator)=

### SMS Kommunikator

Der SMS-Kommunikator erlaubt die Fernsteuerung einiger AndroidAPS Funktionen via SMS. Weitere Informationen zum Setup findest Du auf der Seite [SMS-Befehle](../Children/SMS-Commands.md).

### Essen

Zeigt die im Nahrungsmittel-Editor erfassten Einträge an. Weitere Informationen zur Einrichtung der Nahrungsmitteldatenbank findest Du im [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods).

Hinweis: Die Einträge können nicht im AndroidAPS-Rechner verwendet werden. (reine Anzeigefunktion)

(Config-Builder-wear)=

### Wear

Auf einer Android Wear Smartwatch können die Daten von AAPS angezeigt und einige Funktionen gesteuert werden (siehe [Seite Watchfaces](../Configuration/Watchfaces.md)). In den Einstellungen (Zahnradsymbol) kannst Du die Variablen festlegen, die bei der Berechnung eines über die Uhr gegebenen Bolus berücksichtigt werden sollen (z.B. 15'-Trend, COB...).

Wenn Du Deinen Loop von der Uhr aus steuern willst (z.B. Bolus abgeben), aktiviere "Steuerung durch die Uhr".

![Wear-Einstellungen](../images/ConfBuild_Wear.png)

Über den Wear Tab oder das Hamburger Menü (oben links, falls der Wear Tab nicht angezeigt wird) kannst Du

* Alle Daten erneut senden. Dies kann hilfreich sein, wenn die Uhr längere Zeit außer Reichweite war und du die Informationen an die Uhr pushen willst.
* Über das Smartphone die Einstellungen auf der Uhr öffnen.

### xDrip+ Statuszeile (Uhr)

Zeigt Loop Information in deinem xDrip+ Watchface (falls du nicht das AAPS/[AAPSv2 Watchface](../Configuration/Watchfaces.md) nutzt.)

### Nightscout-Client

* Ns-Client Synchronisierung deiner AndroidAPS-Daten mit Nightscout einrichten.
* Settings in [preferences](Preferences-nsclient) can be opened by clicking the cog wheel.

### Wartung

E-Mail-Adresse und Anzahl der zu sendenden Protokolle. Normalerweise keine Änderung notwendig.

### Konfigurations-Generator

Verwende einen Tab für den Konfigurations-Generator statt des Zugangs über das Hamburger-Menü.