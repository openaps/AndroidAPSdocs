# Einstellungen

- **Öffne die Einstellungen** durch einen Klick auf das 3-Punkte-Menü rechts oben auf dem Startbildschirm.

![Einstellungen öffnen](../images/Pref2020_Open2.png)

- Du kannst direkt zu den Einstellungen für einen bestimmten Tab (z.B. Pumpen-Tab) springen, indem Du diesen Tab öffnest und auf Plugin-Einstellungen klickst.

![Plugin-Einstellungen öffnen](../images/Pref2020_OpenPlugin2.png)

- **Untermenüs** können geöffnet werden, indem Du auf das Dreieck unter dem Untermenü-Titel klicken.

![Untermenü öffnen](../images/Pref2020_Submenu2.png)

- Mit der **Filter-Funktion** ganz oben auf dieser Seite kannst Du schnell die gesuchten Einstellungen finden. Beginne einfach mit der Eingabe eines Teils des Textes, nach dem du suchst.

![Filter in Einstellungen](../images/Pref2021_Filter.png)

```{contents}
:backlinks: entry
:depth: 2
```

(Preferences-general)=
## Allgemein

![Einstellungen > Allgemein](../images/Pref2020_General.png)

**Einheiten**

- Stelle die Einheiten auf mmol/l oder mg/dl je nach deiner Vorliebe ein.

**Sprache**

- Neue Option, um die Standardsprache des Smartphones zu verwenden (empfohlen).

- Falls Du **AAPS** in einer anderen Sprache als der Standardsprache Deines Smartphones nutzen möchtest, kannst Du zwischen vielen verschiedenen Sprachen wählen.

- Falls sich die Systemsprache Deines Smartphones und die ausgewählte Sprache für AAPS unterscheiden, kann dies manchmal zu einem Sprachmix führen. Dies ist auf ein Android-Problem zurückzuführen, bei dem das Überschreiben der App-Standardsprache manchmal nicht korrekt funktioniert.
- Einstellung ist im [einfachen Modus](#preferences-simple-mode) versteckt.

(preferences-simple-mode)= **Einfacher Modus**

Wenn Du **AAPS** zum ersten Mal installierst, wird standardmäßig der **Einfache Modus** aktiviert. Im **einfachen Modus** werden viele Einstellungen versteckt und die Einstellungen durch vordefinierte Werte ersetzt. [Zusätzliche Diagramme](#AapsScreens-section-g-additional-graphs) auf der Übersicht sind auch für Dich vordefiniert. Sobald Du Dich mit der **AAPS**-Benutzeroberfläche und den Einstellungen vertraut gemacht hast, solltest Du den einfachen Modus deaktivieren.

**Name des Patienten**

- Kann verwendet werden, wenn Du zwischen verschiedenen Installationen unterscheiden musst (z.B. zwei Kinder mit Typ 1 in Deiner Familie).
- Wird auf dem [Dual Watchface](../WearOS/WearOsSmartwatch.md) angezeigt.

(Preferences-skin)=
### Skin

Einstellung ist im [einfachen Modus](#preferences-simple-mode) versteckt.

Du kannst zwischen vier Darstellungsarten wählen:

![Darstellungsart wählen](../images/Pref2021_SkinWExample.png)

Bei der „Darstellung niedrige Auflösungen“ werden die Beschriftungen kürzer dargestellt und im Careportal einige Angaben entfernt, um auf Bildschirmen mit sehr niedriger Auflösung mehr Platz zu gewinnen.

Der Unterschiede in Darstellungsarten hängen von der Anzeigeorientierung des Smartphones ab:

#### Portrait orientation

- **Ursprüngliches Erscheinungsbild** und **Schaltflächen werden immer am unteren Rand des Bildschirms angezeigt** sind identisch.
- **Großer Bildschirm** zeigt alle Diagramme größer an.

#### Landscape orientation

- Bei Verwendung von **Ursprüngliches Erscheinungsbild** und **Großer Bildschirm**, musst Du nach unten scrollen, um Schaltflächen am unteren Rand des Bildschirms zu sehen

- **Großer Bildschirm** zeigt alle Diagramme größer an.

![Darstellungsart abhängig von der Ausrichtung des Smartphones](../images/Screenshots_Skins.png)

(Preferences-protection)=
## Schutz

![Einstellungen > Allgemein - Schutz](../images/Pref2020_General2.png)

(Preferences-master-password)=
### Master password

Da ab Version 2.7 die Einstellungen verschlüsselt sind, wird ein Passwort benötigt, um die [Einstellungen exportieren](../Maintenance/ExportImportSettings.md) zu können.

**Biometrischer Schutz funktioniert unter Umständen nicht auf OnePlus-Smartphones. Dies ist ein bekanntes Problem von OnePlus auf einigen Telefonen.**

![Master-Passwort festlegen](../images/MasterPW.png)

### Settings protection

- Schütze Deine Einstellungen mit einem Passwort oder einer biometrischen Authentifizierung (d. h. [**AAPS**-Nutzung durch Kinder](../RemoteFeatures/RemoteMonitoring.md)). Ist diese Option aktiviert, wirst Du bei jedem Zugriff auf die Einstellungen jedes Mal zur Authentifizierung aufgefordert.

- Ein eigenes Passwort sollte gesetzt werden, wenn Du Dein Master-Passswort nur zur Absicherung der [exportierten Einstellungen](../Maintenance/ExportImportSettings.md), und ein anderes für das Ändern der Einstellungen nutzen möchtest.

- Wenn Du ein „benutzerdefiniertes Kennwort“ verwendest, klicke auf die Zeile „Passwort für Einstellungen“, um das Kennwort wie [oben beschrieben](#Preferences-master-password) festzulegen.

![Schutz](../images/Pref2020_Protection.png)

### Application protection

Wenn die App gesichert ist, musst Du zum Öffnen von **AAPS** ein Passwort eingeben oder die biometrische Authentifizierung Deine Smartphones nutzen.

**AAPS** wird sofort geschlossen, wenn ein falsches Kennwort eingegeben wurde. AAPS wird aber trotzdem im Hintergrund weiter ausgeführt, wenn AAPS zuvor erfolgreich geöffnet worden war.

### Bolus protection

- Bolus-Schutz könnte nützlich sein, wenn **AAPS** von einem kleinen Kind verwendet wird und Du [SMS für Boli](../RemoteFeatures/SMSCommands.md) verwendest.

- Im Beispiel unten siehst du die Aufforderung zur biometrischen Freigabe. Falls die biometrische Authentifizierung nicht funktioniert, klicke in den Bereich oberhalb der weißen Eingabeaufforderung und gib das Master-Passwort ein.

![Freigabe mit biometrischer Authentifizierung](../images/Pref2020_PW.png)

### Password and PIN retention

Lege hier fest, wie viele Sekunden nachdem das Passwort erfolgreich eingegeben wurde, die Einstellungen oder die Bolus-Funktionen freigeschaltet bleiben sollen.

## Übersicht

Im Abschnitt **Übersicht** kannst Du die Einstellungen für den Startbildschirm festlegen.

![Einstellungen > Überblick](../images/Pref2020_OverviewII.png)

### Keep screen on

Die Option "Bildschirm aktiv lassen" hindert Android daran, den Bildschirm abzuschalten. Dies ist z.B. zu Präsentationszwecken hilfreich,  es verbraucht aber sehr viel Batterie.  Deshalb wird empfohlen, das Smartphone an ein Ladekabel anzuschließen.

(Preferences-buttons)=
### Schaltflächen

- Lege fest welche Schaltflächen am unteren Rand des Homescreens sichtbar sind.
- Einstellung ist im [einfachen Modus](#preferences-simple-mode) versteckt.

![Einstellungen > Buttons](../images/Pref2020_OV_Buttons.png)

- Um die Eingaben zu vereinfachen, kannst mit den Optionen **Erhöhung** die Belegung der drei Schaltflächen in den Kohlenhydrat- und Insulindialogen festlegen.

![Einstellungen > Übersicht > Schaltflächen > Insulin](../images/Pref2020_OV_Buttons2.png)

![Einstellungen > Schaltflächen > Kohlenhydrate](../images/Pref2020_OV_Buttons3.png)

(Preferences-quick-wizard)=
### Quick Wizard

Belege die Schaltflächen für bestimmte Standardmahlzeiten oder Snacks, die auf dem Startbildschirm angezeigt werden, selbst. Das macht es einfacher, wenn Du häufig dasselbe isst.

Für jede der Schaltflächen kannst Du die entsprechenden Kohlenhydrate und die Art wie der Bolus berechnet werden soll festlegen. Danach legst Du fest, in welchem Zeitraum die Schaltfläche auf dem Homescreen zu sehen sein soll. Es ist nur eine Schaltfläche pro Zeitraum möglich. Außerhalb der eingestellten Zeiträume wird die Schaltfläche nicht angezeigt. Gleiches gilt, wenn genug aktives Insulin (IOB) zur Verfügung steht, um die in den Schaltflächeneinstellungen definierte Kohlenhydratmenge abzudecken. Wenn Du mehrere Standardmahlzeiten anlegst und für sie verschiedene Uhrzeiten angibst, dann hast Du je nach Tageszeit auf dem Startbildschirm immer den passenden Standardmahlzeit-Button.

![Einstellungen > Quick Wizard Button](../images/Pref2020_OV_QuickWizard.png)

Wenn Du auf den QuickWizard-Button klickst, berechnet **AAPS** basierend auf Deinen aktuellen Faktoren, dem aktuellen Glukosewert und dem aktiven Insulin (wenn entsprechend hinterlegt) für diese Kohlenhydratmenge einen Bolus und schlägt ihn Dir vor.

Der Vorschlag muss bestätigt werden, bevor Insulin abgegeben wird.

![Einstellungen > Quick Wizard Button](../images/Pref2020_OV_QuickWizard2.png)

Es wird nur eine Quick Wizard-Schaltfläche angezeigt. Wenn Du eine andere ausführen möchtest: Drücke lange auf die gerade angezeigte Quick Wizard-Schaltfläche. Damit werden dann alle verfügbaren Quick Wizard-Optionen aufgelistet. Um eine davon auszuführen, drücke lange darauf. Vor der Ausführung musst Du sie bestätigen.

(Preferences-default-temp-targets)=
### Default temp targets

Einstellung ist im [einfachen Modus](#preferences-simple-mode) versteckt.

[Temporäre Ziele](../DailyLifeWithAaps/TempTargets.md) (sog. Temp Targets (TT)) erlauben es Dir, Dein Glukoseziel für einen bestimmten Zeitraum zu ändern. Mit dem Setzen eines Standard-TT kannst Du Dein Ziel für Aktivität, Bald essen usw. einfach verändern.

Das Ziel und die Dauer jedes vordefinierten temporären Ziels (TT) kannst Du hier ändern. Voreingestellte Werte sind:

* Bald essen: Zielwert 72 mg/dl / 4,0 mmol/l, Dauer 45 min
* Aktivität: Zielwert 140 mg/dl / 7,8 mmol/l, Dauer 90 min
* Hypo: Zielwert 125 mg/dl / 6,9 mmol/l, Dauer 45 min

![Einstellungen > Vordefinierte temporäre Ziele](../images/Pref2020_OV_DefaultTT.png)

Lerne [hier, wie Du temporäre Ziele aktivierst](#TempTargets-where-can-i-select-a-temp-target).

### Fill/Prime standard insulin amounts

Einstellung ist im [einfachen Modus](#preferences-simple-mode) versteckt.

Wenn Du den Schlauch oder die Kanüle über **AAPS** füllen möchtest, machst Du das in der Regel über den [**AKTIONEN**-Tab](#screens-action-tab).

Voreinstellungen für Füllmengen können in diesem Dialog definiert werden. Stelle die Werte für die drei Buttons im Dialog 'Katheterwechsel' (Aktionen Tab / Menü) abhängig von der Länge Deines Katheters ein.

(Preferences-range-for-visualization)=
### Range for visualization

Wähle die Ober- und Untergrenze des grün hinterlegten Zielbereichs für das Diagramm auf der **AAPS**-Übersicht und auf der Smartwatch. Dies dient nur der Anzeige und ist nicht der Zielwert für Deinen Blutzucker. Beispiel: 70 - 180 mg/dl oder 3,9 - 10 mmol/l

![Einstellungen > Zielbereich für die Grafikanzeige](../images/Pref2020_OV_Range2.png)

### Shorten tab titles

Einstellung ist im [einfachen Modus](#preferences-simple-mode) versteckt.

Hilft dabei mehr Tab-Titel auf einem Bildschirm zu sehen.

Zum Beispiel wird die 'OpenAPS AMA' -Registerkarte zu 'OAPS', 'Objectives (Ziele)' wird zu 'ZIEL' usw.

![Einstellungen > Tabs](../images/Pref2020_OV_Tabs.png)

(Preferences-show-notes-field-in-treatments-dialogs)=
### Show notes field in treatments dialogs

Einstellung ist im [einfachen Modus](#preferences-simple-mode) versteckt.

Gibt dir die Möglichkeit, kurze Textnotizen zu Deinen Behandlungen hinzuzufügen (z.B. im Bolus-Rechner, den Buttons für Insulin und Kohlenhydrate etc.)

![Einstellungen > Notizen im Behandlungsdialog](../images/Pref2020_OV_Notes.png)

(Preferences-status-lights)=
### Statusanzeige

Einstellung ist im [einfachen Modus](#preferences-simple-mode) versteckt.

Status Anzeigen geben eine optische Warnung für:

- Sensoralter
- Batteriestand des Sensor-Lesegeräts (für bestimmte Geräte). Weitere Details findest Du auf dieser [Seite](#screens-sensor-level-battery).
- Insulinalter (Tage Reservoirverwendung)
- Reservoirstand (Einheiten)
- Kanülenalter
- Alter der Pumpenbatterie
- Stand (%) der Pumpenbatterie

Wenn die Warnschwelle überschritten wird, werden die Werte in Gelb angezeigt. Wenn der kritische Schwellenwert überschritten wird, werden die Werte in Rot angezeigt.

Mit der letzten Option kannst Du diese Einstellungen, wenn Du sie definiert hast, aus Nightscout importieren. Weitere Informationen findest Du in der [Nightscout-Dokumentation](https://nightscout.github.io/nightscout/setup_variables/#age-pills).

![Einstellungen > Status Lights](../images/Pref2020_OV_StatusLights2.png)

(Preferences-deliver-this-part-of-bolus-wizard-result)=
### Deliver this part of bolus wizard result

Lege den [Standard-Prozentsatz](#AapsScreens-section-j) des Bolus fest, den der Bolus-Rechner bei seinen Berechnungen berücksichtigen soll.

Standard ist 100%: ohne Korrektur. Auch wenn Du hier einen anderen Wert setzt, kannst Du das im Bolus-Rechner immer noch anpassen. Wenn Du z.B. 75% einstellst und eigentlich 10 IE bolen solltest, wird der Bolus-Rechner nur einen Mahlzeitenbolus von 7,5 IE vorschlagen.

Bei der Verwendung von [SMB](#objectives-objective9) geben viele Menschen nicht den vollen (100%) Mahlzeitenbolus ab, sondern nur einen Teil davon (d.h. 75 %). Den Rest lassen sie durch SMBs mit UAM-Erkennung (engl. unannounced meal) erledigen. Ein Wert, der unter 100% liegt, kann hier helfen:
* für Menschen mit langsamer Verdauung: Ein voller Vorab-Bolus kann eine Hypo zur Folge haben, da die Insulinwirkung schneller eintritt, als die die Kohlenhydrate verdaut werden.
* um **AAPS** mehr Spielraum für den Umgang mit **Glukosewertanstiegen** zu geben. Sobald es sinnvoll erscheint, wird **AAPS** in beiden Fällen den fehlenden Bolus-Teil mit SMBs ausgleichen.

### Enabled bolus advisor

Einstellung ist im [einfachen Modus](#preferences-simple-mode) versteckt.

![Bolus-Rechner](../images/BolusAdvisor.png)

Wenn der Bolus-Berater aktiviert ist und Du ihn in einer Hyperglykämie aufrufst, erhältst Du eine Warnung, und Du wirst gefragt, ob Du einen Vorab-Bolus abgeben und später, wenn Dein **Glukosewert** wieder im Zielbereich ist, essen möchtest.

### Enabled bolus reminder

Einstellung ist im [einfachen Modus](#preferences-simple-mode) versteckt.

- Abschnitt wird aktuell überarbeitet -

(Preferences-advanced-settings-overview)=
### Advanced Settings (Overview)

![Einstellungen > Erweiterte Einstellungen](../images/Pref2021_OV_Adv.png)

#### Superbolus

Einstellung ist im [einfachen Modus](#preferences-simple-mode) versteckt.

Option zur Aktivierung des Superbolus im Bolus-Rechner.

[Superbolus](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/) ist ein Konzept, um in den nächsten zwei Stunden etwas Insulin aus der Basalrate "vorzuziehen", um Spitzen zu verhindern. Es ist etwas anderes als der *Super-Mikro-Bolus*!

Sei vorsichtig und aktiviere ihn erst dann, wenn Du vollständig verstanden hast, was er wirklich bewirkt. Im Wesentlichen wird das Basalinsulin der nächsten zwei Stunden zum Bolus hinzugefügt und die Basalrate für zwei Stunden auf null gesetzt. **AAPS Loop-Funktionen werden deaktiviert - also mit Vorsicht verwenden! Wenn Du SMB-**AAPS** Loop-Funktionen nutzt, werden diese, wie in der Einstellung [„SMB Basal-Limit in Minuten“](#Open-APS-features-max-minutes-of-basal-to-limit-smb-to) hinterlegt, deaktiviert. Wenn Du keine SMB-Loop-Funktionen verwendest, werden diese für zwei Stunden deaktiviert. Details zum Superbolus findest Du [hier](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

## Sicherheitseinstellungen der Behandlungen

(preferences-patient-type)=
### Patient type

- Sicherheitsgrenzwerte werden auf der Grundlage des Alters festgelegt, das Du in dieser Einstellung auswählst.
- Wenn du an diese festen Grenzen (z.B. Maximal-Bolus) kommst, ist es an der Zeit, einen Schritt weiter zu gehen.
- Es ist keine gute Idee, ein höheres Alter als das echte Alter. Dies kann zu einer Überdosierung aufgrund von Falscheingaben (z.B. das Weglassen des Dezimalpunktes) im Bolus-Dialog führen.
- Wenn Du die Werte für diese fest eingestellten Sicherheitsgrenzen wissen möchtest, scrolle auf [dieser Seite](../DailyLifeWithAaps/KeyAapsFeatures.md) zu der Algorithmenfunktion, die Du verwendest.

### Max allowed bolus

- Legt die maximale Bolusgröße (in IE) fest, die **AAPS** als Einzelbolus abgeben darf.
- Diese Einstellung ist eine Sicherheitsgrenze, um die Abgabe eines massiven Bolus aufgrund einer versehentlichen Eingabe oder eines Benutzerfehlers zu verhinden.
- Es wird empfohlen, das auf eine vernünftige Menge zu setzen, die ungefähr der maximalen Abgabemenge von Bolus Insulin entspricht, das Du für eine Mahlzeitenkorrektur brauchst.
- Diese Einschränkung gilt auch für die Ergebnisse des Bolus-Rechners.

### Max erlaubte KH [g]

- Legt die maximale Kohlenhydratmenge, für die der **AAPS**-Bolus-Rechner einen Bolus abgeben darf, fest.
- Diese Einstellung ist eine Sicherheitsgrenze, um die Abgabe eines massiven Bolus aufgrund einer versehentlichen Eingabe oder eines Benutzerfehlers zu verhinden.
- Es wird empfohlen, das auf eine vernünftige Menge zu setzen, die ungefähr der maximalen Menge an Kohlenhydraten entspricht, die du vermutlich jemals für eine Mahlzeit brauchen wirst.

## Loop

(Preferences-aps-mode)=
### APS-Modus
Wechsel zwischen Open Loop, Closed Loop und Unterbrechung bei niedrigen BZ (LGS).

![Konfigurations-Generator - Loop Modus](../images/ConfigBuilder_LoopLGS.png)

(Preferences-pen-loop)=
#### Open Loop
**AAPS** wertet kontinuierlich alle verfügbaren Daten (IOB, COB, BZ...) aus und erstellt, sofern notwendig, daraus Behandlungsvorschläge (temporäre Basalraten) zur Anpassung Deiner Therapie.

Die Vorschläge werden nicht, wie im Closed Loop, automatisch ausgeführt. Die Vorschläge müssen manuell in die Pumpe (falls eine virtuelle Pumpe verwendet wird) eingegeben oder über einen Tastendruck, wenn **AAPS** mit einer echten Pumpe verbunden ist, ausgeführt werden.

Diese Option ist zum Kennenlernen der **AAPS**-Funktionsweise gedacht. Die Option wird auch für nicht unterstützte Pumpen genutzt. Bis zum Ende des **[Ziel 5](#objectives-objective5)** wirst Du, unabhängig davon, welche Auswahl Du hier triffst, im Open Loop bleiben.

(preferences-closed-loop)=
#### Closed Loop

**AAPS** wertet kontinierlich alle verfügbaren Daten (IOB, COB, BZ-Wert) aus und passt die Behandlung bei Bedarf automatisch (_d.h._ ohne weiteren Eingriff durch Dich) an, um den eingestellten [Zielbereich oder Zielwert](#profile-glucose-targets) zu erreichen (Bolusabgabe, temporäre Basalrate, Insulinabschaltung zur Hypovermeidung etc.).

Der Closed Loop arbeitet im Rahmen zahlreicher Sicherheitsgrenzen, die Du individuell einstellen kannst.

Der Closed Loop steht ab dem **[Ziel 6 ](#objectives-objective6)** (oder darüber) zur Verfügung und setzt eine kompatible Pumpe voraus.

#### Abschalten der Basalrate bei niedrigen Werten (Low Glucose Suspend - LGS)

In diesem Modus ist [maxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over) auf Null gesetzt.

Das bedeutet, dass bei fallenden Glukosewerten, **AAPS** das Basal für Dich reduzieren kann. Wenn aber die Glukosewerte steigen, wird keine automatische Korrektur vorgenommen. Die Basalrate wird genauso so bleiben, wie sie im aktuellen **Profil** hinterlegt ist. Nur wenn das IOB negativ ist (wegen einer vorangegangenen Abschaltung der Basalrate bei niedrigen Werten) wird, um den **Glukosewert** zu senken, zusätzliches Insulin abgegeben.

(Preferences-minimal-request-change)=
### Minimaler Wert zur Anfrage einer Änderung

Wenn Du im **Open Loop** bist, erhältst Du jedes Mal, wenn **AAPS** eine Basalraten-Anpassung empfiehlt, eine Benachrichtigung. Um die Anzahl der Benachrichtigungen zu reduzieren, kannst Du entweder einen [breiteren BZ-Zielbereich](#profile-glucose-targets) verwenden oder den Prozentsatz des minimalen Werts zur Anfrage einer Änderung erhöhen. Diese definiert, wie hoch die relative Änderung sein muss, damit eine Benachrichtigung erscheint.

## Advanced Meal Assist (AMA) oder Super Micro Bolus (SMB)

Abhängig von Deinen Einstellungen in [Konfiguration > APS](../SettingUpAaps/ConfigBuilder.md) kannst Du zwischen zwei Algorithmen wählen:

- [Advanced Meal Assist (OpenAPS AMA)](#Open-APS-features-advanced-meal-assist-ama) - Stand des Algorithmus in 2017
- [Super Micro Bolus (OpenAPS SMB)](#Open-APS-features-super-micro-bolus-smb) - der neueste für Anfänger empfohlene Algorithmus

Ab [**AAPS** Version 3.3](#version3300) wurde [Dynamischer ISF](../DailyLifeWithAaps/DynamicISF.md) in den Abschnitt OpenAPS SMB verschoben.

### OpenAPS AMA

Alle OpenAPS AMA-Einstellungen sind im eigenen Abschnitt in [OpenAPS Funktionen > Erweiterter Mahlzeit-Assistent (AMA)](#Open-APS-features-advanced-meal-assist-ama) beschrieben.

(Preferences-openaps-smb-settings)=
### OpenAPS SMB

Alle OpenAPS AMA-Einstellungen sind im eigenen Abschnitt in [OpenAPS Funktionen > Erweiterter Mahlzeit-Assistent (AMA)](#Open-APS-features-super-micro-bolus-smb) beschrieben.

## Resorptions-Einstellungen

(Preferences-min_5m_carbimpact)=
### min_5m_carbimpact

Einstellung ist im [einfachen Modus](#preferences-simple-mode) versteckt.

Der Algorithmus verwendet die Auswirkungen auf den Blutzuckerspiegel (BGI - blood glucose impact), um zu bestimmen, wann [Kohlenhydrate absorbiert werden](../DailyLifeWithAaps/CobCalculation.md).

So lange der Kohlenhydratabbau nicht dynamisch aus den Veränderungen des Glukosewertes ermittelt werden kann, setzt **AAPS** für den Abbau einen Standardwert an. Im Prinzip ist es eine Notlauffunktion. Dieser Wert wird nur dann verwendet, wenn keine **CGM**-Werte empfangen werden oder körperliche Aktivitäten den Blutzuckeranstieg "kompensieren", den **AAPS** normalerweise zur Berechnung des Kohlenhydratabbaus verwendet.

Einfach gesagt: Der Algorithmus „weiß“, wie sich Deine Glukosewerte unter Berücksichtigung der aktuellen Insulindosis etc. *entwickeln sollten*. Wenn eine positive Abweichung vom erwarteten Verhalten registriert wird, werden einige Kohlenhydrate absorbiert/aufgenommen. Große Abweichung = viele Kohlenhydrate etc.

Das min_5m_carbimpact definiert die Standard-Kohlenhydrat-Resorptionswirkung pro 5 Minuten. Für weitere Details siehe [OpenAPS Docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html?highlight=carbimpact#min-5m-carbimpact).

Der Standardwert für AMA ist 5, für SMB ist es 8.

Im COB-Diagramm auf dem Startbildschirm werden Zeiten, in denen min_5m_impact verwendet wird, mit einem orangenen Punkt auf der Diagrammlinie markiert.

![COB-Diagramm](../images/Pref2020_min_5m_carbimpact.png)

### Maximale Dauer der Essens-Resorption [h]

Wenn du oft Mahlzeiten mit viel Fett oder Eiweiß zu dir nimmst, wirst du die Resorptionszeit für das Essen erhöhen müssen.

### Erweiterte Einstellungen - Autosens-Faktoren

![Resorptions-Einstellungen](../images/Pref2020_Absorption.png)

- Lege das min. und max. [Autosens](#Open-APS-features-autosens)-Verhältnis fest.
- Die Standardwerte (max. 1.2 und min. 0.7) sollten nicht verändert werden.

## Pumpe

### BT Watchdog

Bei Bedarf aktiviere BT Watchdog (z.B. bei Dana Pumpen). Er deaktiviert Bluetooth für eine Sekunde, falls keine Verbindung zur Pumpe möglich ist. Dies kann helfen, falls bei deinem Smartphone Probleme mit der Bluetooth-Verbindung auftreten.

## Pumpen-Einstellungen

Die Einstellungen hier sind je nach Pumpenmodell, das Du in der [Konfiguration > Pumpe](#Config-Builder-pump) gewählt hast, unterschiedlich.  Kopple Deine Pumpe und richte sie entsprechend der [pumpenspezifischen Beschreibung](../Getting-Started/CompatiblePumps.md) ein.

## Tidepool

Mehr Informationen findest Du auf der [Tidepool](../SettingUpAaps/Tidepool.md)-Seite.

(Preferences-nsclient)=
## Nightscout-Client

![Nightscout-Client](../images/Pref2020_NSClient.png)

Ursprüngliches Kommunikations-Protokoll, dass mit älteren Nightscout-Versionen genutzt werden kann.

- Lege Deine *Nightscout URL* (z.B. [https://deineseite.deinprovider.com](https://yoursitename.yourplaform.dom)) fest.
- **Stelle sicher, dass die URL NICHT mit /api/v1/ endet.**
- Das *[API Secret](https://nightscout.github.io/nightscout/setup_variables/#api-secret-nightscout-password)* (ein 12-Zeichen langes Passwort, das in den Nightscout Variablen eingetragen wurde).
- Dadurch kann **AAPS** Daten von Nightscout lesen und auch schreiben.
- Überprüfe die Eingaben auf Tippfehler, wenn du bei Ziel 1 hängen bleibst.

## NSClientV3

![NSClientV3](../images/Pref2024_NSClientV3.png)

Ein [mit AAPS 3.2 neu eingeführtes Kommunikations-Protokoll](#Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS). Sicherer und effizienter als das ursprüngliche Protokoll.

```{admonition} V3 data uploaders
:class: warning

Bei der Verwendung von NSClientV3 müssen alle Uploader die API V3 verwenden. Da die meisten noch nicht kompatibel sind, heißt das, dass Du ****AAPS** erlauben musst alle Daten an Nightscout hochzuladen** (Glukosewerte, Behandlungen, ...). Deaktiviere alle anderen Uploader, solange sie nicht V3 konform sind.
```

- Lege Deine *Nightscout URL* (z.B. [https://deineseite.deinprovider.com](https://yoursitename.yourplaform.dom)) fest.
- **Stelle sicher, dass die URL NICHT mit /api/v1/ endet.**
- Erzeuge in Nightscout ein *[Admin Token](https://nightscout.github.io/nightscout/security/#create-a-token)* (die V3 API setzt [Nightscout 15](https://nightscout.github.io/update/update/) voraus) und gib dieses als **NS Zugangstoken** ein (nicht Dein API Secret!).
- Dadurch kann **AAPS** Daten von Nightscout lesen und auch schreiben.
- Überprüfe die Eingaben auf Tippfehler, wenn du bei Ziel 1 hängen bleibst.
- Lasse "Mit Websockets verbinden" aktiviert (empfohlen).

### Synchronisierung

Die Art der Synchronisierung hängt davon ab, wie Du **AAPS** nutzen möchtest.

Du kannst festlegen welche Informationen [von und zu Nightscout hoch- bzw. heruntergeladen werden sollen](#Nightscout-aaps-settings).

### Alarm-Optionen

![Alarm-Optionen](../images/Pref2024_NSClient_Alarms.png)

- In den Alarm-Optionen legst Du fest, welche Standard-Nightscout-Alarme in AAPS genutzt werden sollen. **AAPS** wird dann alarmieren, wenn Nightscout einen Alarm auslöst.
- Damit die Alarme ausgelöst werden können, musst Du in den [Nightscout-Variablen](https://nightscout.github.io/nightscout/setup_variables/#alarms) Werte für Urgent High, High, Low und Urgent Low Alarme setzen.
- Diese funktionieren nur, wenn Du eine Online-Verbindung zu Nightscout hast und sind vor allem für Eltern und Betreuende gedacht.
- Wenn Du die **CGM**-Quelle auf Deinem Smartphone hast (z.B. xDrip+ oder BYODA) solltest Du deren Alarme anstelle der Nightscout-Alarme nutzen.
- Benachrichtigungen über Nightscout-[Ankündigungen](https://nightscout.github.io/nightscout/discover/#announcement): Nightscout-Ankündigungen werden dann auch in der **AAPS**-Benachrichtigungszeile angezeigt.
- Du kannst die Schwellenwerte für veraltete Daten und stark veraltete Alarme ändern, wenn nach einer bestimmten Zeit keine Daten von Nightscout empfangen werden.

### Verbindungseinstellungen

![NSClient Verbindungseinstellungen](../images/ConfBuild_ConnectionSettings.png)

- Verbindungseinstellungen legen fest auf welchem Weg (z.B. WLAN oder Mobilfunknetz) eine Nightscout-Verbindung aufgebaut werden darf.
- Beschränken den Nightscout-Upload auf WLAN-Verbindungen oder sogar auf bestimmte WLAN-SSIDs.
- Wenn Du nur ein bestimmtes WLAN-Netzwerk verwenden möchtest, kannst Du dessen WLAN SSID eingeben.
- Mehrere SSIDs können durch Semikolon (Strichpunkt) getrennt werden.
- Gib zum Löschen aller SSIDs ein Leerzeichen in das Feld ein.

(Preferences-advanced-settings-nsclient)=
### Erweiterte Einstellungen (Nightscout-Client)

![NS-Client - erweiterte Einstellungen](../images/Pref2024_NSClientAdv.png)

Die Optionen in den erweiterten Einstellungen sind selbsterklärend.

## SMS Kommunikator

Mehr Informationen findest Du auf der Seite [SMS-Befehle](../RemoteFeatures/SMSCommands.md).

## Automatisierung

Wähle aus, welcher Standortdienst verwendet werden soll:

- Passiven Standort verwenden: **AAPS** nutzt den Standort nur dann, wenn er von anderen Apps angefordert wird
- Netzwerkstandort: Standort Ihres Wi-Fi
- GPS-Standort (Achtung! Kann zu übermäßigen Akkuverbrauch führen!)

## Lokale Alarme

![Lokale Alarme](../images/Pref2020_LocalAlerts.png)

Einstellungen sollten selbsterklärend sein.

(preferences-maintenance-settings)=
## Wartungseinstellungen

![Wartungseinstellungen](../images/Pref2020_Maintenance.png)

**E-Mail-Empfänger**: Standardempfänger für Protokolldateien (sog. Logs) ist <logs@aaps.app>.

**Datenübermittlung**

![Datenübermittlung](../images/Pref2020_DataChoice.png)

Du kannst bei der Weiterentwicklung von **AAPS** unterstützen, indem Du Absturzberichte an die Entwickler sendest.

**Automatischer Export der Einstellungen**<br/> Durch Aktivieren dieser Funktion lässt Du zu, dass **AAPS** Deine Einstellungen ohne manuellen Eingriff exportiert. Dazu wird das Master-Passwort beim nächsten manuellen Export sicher auf Deinem Smartphone (und nur dort) gespeichert. Das gespeicherte Passwort wird für bis zu 4 Wochen verwendet. Nach 4 Wochen erhältst Du eine Information, dass das Passwort bald ablaufen wird. Während einer einwöchigen Übergangsfrist kann das Passwort dann aktualisiert werden, indem die Einstellungen manuell über das Wartungsmenü exportiert werden.

Nach Ablauf der einwöchigen Übergangsfrist, läuft das gespeicherte Passwort ab und alle automatisierten Exporte der Einstellungen werden gestoppt. Du wirst darüber informiert und aufgefordert das Passwort erneut einzugeben.  [(**Einstellungen automatisiert exportiert**)](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export) wird in AAPS 'Behandlungen' und 'Benutzereintrag' geloggt.

Nach dem Aktivieren dieser Option exportiere die Einstellungen manuell, sodass Du zur Passworteingabe aufgefordert wirst und **AAPS** es dann speichern kann.

(preferences-maintenance-logdirectory)= Der Abschnitt Einstellungen enthält auch das **AAPS**-Verzeichnis, welches Du direkt auf dem Reiter „Wartung“ findest. Diese Einstellung erlaubt es Dir, ein Verzeichnis auf Deinem Smartphone auszuwählen, in dem **AAPS** Einstellungen, Logs und andere Dateien speichert.

![Pref2020_Maintenance_Directory.png](../images/Pref2020_Maintenance_Directory.png)

## Open Humans

Du kannst die Community unterstützen, indem Du Deine Daten für Forschungsprojekte zur Verfügung stellst. Details sind auf der [Open Humans-Seite](../SupportingAaps/OpenHumans.md) beschrieben.

In den Einstellungen kannst Du festlegen, wann Daten hochgeladen werden sollen
- nur über WLAN-Verbindungen
- nur während des Ladens
