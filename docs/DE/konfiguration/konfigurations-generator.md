# Konfigurations-Generator
Im Reiter "Konfigurations-Generator" kannst du fast alle AAPS-Funktionen konfigurieren. 

Die **Auswahlfelder links** aktivieren die gewählte Funktion, die **Auswahlfelder rechts** (Augen-Symbol) machen den dazugehörigen Reiter im AAPS-Menü sichtbar oder unsichtbar.

Erscheint bei einzelnen Optionen ein **Zahnrädchen**, kannst du weitere Einstellungen vornehmen.

## Profil
Hier kannst du auswählen, von welcher Quelle AAPS dein Therapie-Profil mit den Basalraten, ISF und IC abrufen soll. 

### Therapie-Variablen für das Profil
AndroidAPS kann nur dann gut laufen, wenn deine Diabetes-Therapievariablen im Profil optimal eingstellt sind. Du musst folgende Variablen ermitteln (ggf. stündlich anders, so dass du ggf. 3x24 Faktoren pro Tag hast):

**Basalraten**
Die Basalraten müssen so fein abgestimmt sein, dass sie über den ganzen Tag verteilt den BZ-Wert konstant im unteren Zielbereich halten. Sowohl Hypos, als auf hohe Werte dürfen nicht vorkommen, sonst läuft der Loop nicht richtig. Am besten ist es, mehrere Basalratentests durchzuführen und das Schema mit dem Diabetologen oder der Diafee zu besprechen.

**ISF**
Der Insulinsensitivitätsfaktor (ISF) gibt an, um wie viele mg/dl oder mmol/l der BZ-Wert durch 1 IE Insulin gesenkt wird.  

**IC**
Der IC (Insulin-Carb-Ratio - Insulin-Kohlenhydrat-Faktor) bestimmt, wieviel Gramm Kohlenhydrate durch 1 IE Insulin abgedeckt werden.

**DIA (oder auch "Insulin-End-Time")**
DIA steht für "duration of insulin action", gibt also an,  wie lange das Insulin im Körper aktiv ist. Bei vielen ist zwar nach 3-4 Stunden die Hauptwirkung vorbei und die Restemenge eher gering. Deswegen wird in der Praxis oder bei Bolusrechnern mit linearer Insulinwirkkurve häufig ein solcher Wert verwendet. Diese Restmenge kann sich dann z.B. beim Sport doch noch bemerkbar machen. AndroidAPS verwendet physiologischere Kurven und kann auch diese Restmengen gut berechnen. Besonders bei der Überlagerung vieler einzelner Aktionen ist dies wichtig. Daher verwendet AndroidAPS minimum 5 Stunden als DIA.
Wichtiger als die exakte Länge des DIA ist das Wirkmaximum das durch Auswahl des korrekten Wirk-Profils festgelegt wird, solange der DIA genügend groß ist.

Standardwert: 5 Stunden

### DanaR
Das aktuelle Profil wird in die **DanaR/DanaRS** geschrieben. **Achtung: Die in der Pumpe hinterlegten Basalraten etc. werden überschrieben!** 

### Nightscout-Profil (empfohlen)
Die auf deiner **Nightscout-Website** unter https://[deine-nightscout-adresse]/profile hinterlegten Profile werden synchronisiert. So kannst du komfortabel in Nightscout mehrere Profile (z.B. Arbeit, Daheim, Sport, Urlaub usw.) **anlegen**. Kurz nach dem Klick auf "Speichern" werden sie bei bestehender Internetverbindung des Smartphones zu AAPS übertragen. Nach der Erstübertragung Auch ohne Internetverbindung bzw. ohne Verbindung zu Nightscout sind die Nightscout-Profile in AAPS verfügbar, wenn sie einmalig synchronisiert worden sind. 

Um ein Profil aus Nightscout zu **aktivieren**, musst du einen **Profilwechsel** durchführen. Dazu im Homescreen von AAPS oben lange auf das derzeitige Profil drücken (graues Feld zwischen dem hellblauen "Open/Closed Loop"-Feld und dem dunkelblauen Zielbereich-Feld) > Profilwechsel > Profil auswählen > OK. AAPS schreibt nach dem Profilwechsel das gewählte Profil auch in die Pumpe, so dass es im Notfall ohne AAPS verfügbar ist und weiterläuft.

### Einfaches Profil
Dieses Profil ermöglicht nur ein ganz simples Behandlungsschema mit **ganztägig jeweils nur einem Wert** für DIA, IC, ISF, Basalrate und Zielbereich. Eher zu Testzwecken zu verwenden, außer du hast über 24 Stunden dieselben Faktoren. Sobald "Einfaches Profil" ausgewählt ist, erscheint in AAPS ein neuer Reiter, wo du dann die Profildaten eingeben kannst.

### Lokales Profil
Hier wird zunächst das in der **Pumpe hinterlegte Profil 1** ausgelesen (weitere Pumpen-Profile werden ignoriert). Sobald "Lokales Profil" ausgewählt ist, erscheint in AAPS ein neuer Reiter, wo du dann die aus der Pumpe ausgelesenen Profildaten ggf. verändern kannst. Mit dem nächsten Profilwechsel werden sie dann auf die Pumpe ins Profil 1 geschrieben.

## Insulin
Hier musst du auswählen, welchen **Insulintyp** du verwendest. AAPS muss für die Berechnungen des Algorythmus wissen, wie es in deinem Körper wirkt. Dabei spielt es eine große Rolle, zu welchem Zeitpunkt das Wirkmaximum (= max peak) erreicht wird und wie lange das Insulin im Körper aktiv ist (= DIA - duration of insulin action). Für die gängigen Analog-Insuline sind die Wirkprofile zum Wirkmaximum hinterlegt. 

* Humalog 
* Novorapid
* Novolog
* FIASP

Für andere Insuline oder Mischungen verschiedener Insuline kannst du in AndroidAPS auch manuell das Wirkmaximum angeben (Wirkprofil "free-peak Oref").

Die **Dauer der Insulinwirkung (DIA)** kannst du in deinen Profileinstellungen manuell ändern, allerdings muss sie mindestens 5h betragen.

![DIA Erklärung von diabettech.com](https://i1.wp.com/www.diabettech.com/wp-content/uploads/2017/07/DIA-Clamp.jpg?w=400)

(Quelle: diabettech.com)

Näheres ist auch in der englischen [OpenAPS-Dokumentation](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves) nachzulesen.

### Rapid-Acting Oref
* Humalog
* Novolog
* Novorapid

DIA = mindestens 5.0h

Max. peak = 75 Minuten nach Injektion

### Ultra-Rapid Oref
* FIASP

DIA = mindestens 5.0h

Max. peak = 55 Minuten nach Injektion

Bei vielen ist nach 3-4 Stunden praktisch keine merkbare Wirkung von Fiasp mehr da, auch wenn in der Regel dann noch 0,0xx Einheiten vorhanden sind. Diese Restmenge kann sich dann z.B. beim Sport doch noch bemerkbar machen. Daher verwendet AndroidAPS minimum 5h als DIA.

### Free-Peak Oref
Bei dem Profil "Free Peak 0ref" kann individuell eingegeben werden, wann die höchste Wirkdauer erreicht wird. Der DIA wird dabei automatisch auf 5 Stunden gestellt, wenn er selbst nicht höher angegeben wurde im Profil. 

Dieses Wirkprofil empfiehlt sich, wenn ein nicht hinterlegtes Insulin oder die Mischung verschiedener Insuline verwendet wird.

## BZ-Quelle
Hier kannst du auswählen, aus welcher Quelle AAPS die BZ-Werte empfangen soll. Es stehen folgende Quellen zur Verfügung:

* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* Nightscout-Client BZ
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de)
* [DexcomG5 app (patched)](https://github.com/dexcomapp/dexcomapp/)
* [Poctech](http://www.poctechcorp.com/en/contents/268/5682.html)

Näheres zur Einrichtung der BZ-Quellen findest du unter [AndroidAPS einrichten > BZ-Quelle](https://androidaps.readthedocs.io/en/latest/DE/konfiguration/bz-quelle.html)
    
## Pumpe
Hier kannst du auswählen, welche Pumpe du verwendest. Folgende Modelle werden derzeit unterstützt:

* DanaR (empfohlen für die deutsche DanaR)
* DanaR Korean (koreanische Version der DanaR)
* DanaRv2 (nur für Entwickler, da die Firmware-Version 2 an Endkunden nie ausgeliefert wurde)
* DanaRS
* Insight Pump (in der Entwicklung)
* Accu-Chek Combo
* ICT (für OpenLoop mit ICT, AAPS macht nur Behandlungsvorschläge, die du dann selbst mit dem Pen umsetzen musst)
* Virtuelle Pumpe (für OpenLoop mit nicht unterstützten Pumpen, AAPS macht nur Behandlungsvorschläge, die du dann selbst in deiner Pumpe umsetzen musst)

Beim erstmaligen Einrichten der Pumpe musst du einige Einstellungen vornehmen. Siehe [Einstellungen > Pumpen-Einstellungen](http://androidaps.readthedocs.io/en/latest/DE/einstellungen.html#pumpen-einstellungen)

## Empfindlichkeitserkennung
Hier kannst du auswählen, nach welchem Algorythmus AAPS die Insulinempfindlichkeit berechnen soll. Die automatische Sensibilitätserkennung (Autosens) ist das Herzstück des Closed Loop. Verschiedene Algorythmen analysieren laufend alle verfügbaren Daten (BZ, IOB, COB) und korrigieren im Closed Loop bei Bedarf, wenn du besser oder schlechter auf Insulin reagierst als eingestellt. Autosens wertet aber nur Daten aus, wenn keine Kohlenhydrate an Bord (COB) sind. Zeiten mit COB werden ausgespart.

Die berechnete Insulinempfindlichkeit kannst du verfolgen, indem du auf dem Home-Screen im Auswahlmenü der angezeigten Kurven "Sensitivität" auswählst. Die weiße Linie zeigt dir das graphisch an. 

**Die Empfindlichkeitserkennung ist erst freigeschaltet, wenn du Objective 6 erreicht hast.**

Nähere Informationen findest du unter [AndroidAPS einrichten > Empfindlichkeitserkennung und COB](https://androidaps.readthedocs.io/en/latest/DE/konfiguration/empfindlichkeitserkennung-und-cob.html)

## OpenAPS
Hier kannst du einstellen, mit welchem Algorythmus deine künstliche Bauchspeicheldrüse rechnen soll. 

Weitere Informationen findest du unter [AndroidAPS nutzen > OpenAPS-Funktionen](https://androidaps.readthedocs.io/en/latest/DE/benutzung/openaps.html)

## Loop
Hier kannst du einstellen, ob du AAPS automatische Regelungen erlauben willst oder nicht.

### Open Loop
AAPS wertet laufend alle verfügbaren Daten (IOB, COB, BZ-Wert) aus und macht dir bei Bedarf **Behandlungsvorschläge**, wie du deine Therapie anpassen solltest. Diese Option ist zum Kennenlernen der Funktionsweise gedacht oder falls du eine nicht unterstützte Pumpe verwendest.

### Closed Loop
AAPS wertet laufend alle verfügbaren Daten (IOB, COB, BZ-Wert) aus und passt die Behandlung bei Bedarf **automatisch** (also ohne weiteren Eingriff durch dich) an, um den eingestellten Zielbereich oder Zielwert zu erreichen (Bolusabgabe, temporäre Basalrate, Insulinabschaltung zur Hypovermeidung etc.). Der Closed Loop arbeitet im Rahmen zahlreicher Sicherheitsgrenzen, die du individuell einstellen kannst. 

**Closed Loop ist nur möglich, wenn du Objective 4 erreicht hast und eine unterstützte Pumpe verwendest.**
    
## Beschränkungen
AndroidAPS hat eine Reihe an Aufgaben (objectives), die du **nach und nach erfüllen musst**. Dies soll dich sicher durch die Einrichtung eines Closed Loop Systems führen. Es garantiert, dass du alles korrekt eingestellt hast und auch verstehst, was das System genau macht. Nur so kannst du ihm vertrauen.

Für den Fall, dass du später dein Smartphone austauschen musst (Neuanschaffung, Displayschaden etc.) solltest du unbedingt von Zeit zu Zeit deine Einstellungen und den Fortschritt der Objectives [exportieren](http://androidaps.readthedocs.io/en/latest/docs/DE/einstellungen.md#einstellungen-exportieren).

Weitere Informationen findest du unter [AndroidAPS nutzen > Beschränkungen (objectives)](https://androidaps.readthedocs.io/en/latest/DE/benutzung/beschraenkungen.html)

## Behandlungen
Wenn du Behandlungen als sichtbar markiert hast, kannst du im "Behandlungen"-Reiter in AAPS alle einzelnen **Behandlungsdaten sehen** (Bolus, verlängerter Bolus, temporäre Basalraten, temporäres Ziel, Profilwechsel, Careportal-Einträge). All diese Daten werden grundsätzlich zu deiner Nightscout-Website hochgeladen. 

Du kannst einzelne Einträge durch Antippen von "Löschen" **entfernen**. Sie werden dann in AAPS nicht mehr berücksichtigt und bei Nightscout gelöscht (**Bitte vorsichtig verwenden!**).

## Generell

### Übersicht

#### Keep screen on 
Wenn du diese Option aktivierst, dann wird Android gezwungen, den Bildschirm immer an zu lassen. Dies ist z.B. zu Präsentationszwecken hilfreich, es verbraucht aber sehr viel Batterie. Deshalb wird empfohlen, das Smartphone an ein Ladekabel anzuschließen.

#### Buttons
Hier kannst du auswählen, welche Buttons auf deinem Home-Screen erscheinen sollen.

* Behandlungen
* Rechner
* Insulin
* Kohlenhydrate

#### QuickWizard-Einstellungen
Hier kannst du einen Button für eine bestimmte Standardmahlzeit erstellen (KH und Berechnungsmethode für den Bolus), der dir dann auf dem Home-Screen angezeigt wird. Dies ist sehr hilfreich, wenn du z.B. morgens häufig dasselbe isst (Button "1 Vollkornbrot"). Wenn du mehrere Standardmahlzeiten anlegst und für sie verschiedene Uhrzeiten angibst, dann hast du je nach Tageszeit auf dem Home-Screen immer den passenden Standardmahlzeit-Button.

#### Erweiterte Einstellungen

**Aktiviere den SuperBolus im Wizard**

Wenn du diese Option auswählst, dann wird im Rechner die Superbolus-Option freigeschaltet. Ein Superbolus hat erstmal nichts mit dem Loopen an sich zu tun. Er ist eine Behandlungsmethode, bei der dem errechneten Mahlzeiten-Bolus zusätzlich noch die Basalrate der nächsten zwei Stunden als Bolus hinzugefügt wird. Gleichzeitig wird die Basalrate für zwei Stunden auf 0 gesetzt. So erreicht der Körper gerade bei schnellen Kohlenhydraten unter Umständen in kürzerer Zeit einen höheren Insulinspiegel. Dadurch kann der postprandiale Peak ggf. niedriger sein.

Weiterführende Informationen findest du im Netz:

* [https://alfa-woman.com/super-bolus-method-for-combating-blood-glucose-spikes-420 (deutsch)](https://alfa-woman.com/super-bolus-method-for-combating-blood-glucose-spikes-420)
* [https://thisiscaleb.com/2010/04/21/super-bolus/ (englisch)](https://thisiscaleb.com/2010/04/21/super-bolus/)

### Aktionen
Wenn du diese Option aktivierst (linker Haken) und sichtbar machst (rechter Haken), dann erscheint in AAPS ein Reiter, der folgende häufig genutzte Aktionen ermöglicht:

* Profilwechsel
* Temporäres Ziel setzen
* Temporäre Basalrate abbrechen
* Vorfüllen/füllen des Schlauches
* History
* Statistik über die tägliche Gesamtdosis an Insulin (TDD)

### Careportal
Wenn du diese Option aktivierst (linker Haken) und sichtbar machst (rechter Haken), dann erscheint in AAPS ein **Reiter zum Careportal**. Dort kannst du zu verschiedensten Ereignissen deiner Diabetestherapie ein Tagebuch führen, z.B. sehen, wie viele Stunden der letzte Katheterwechsel her ist und wie alt CGM-Sensor, Insulinreservoir und Pumpenbatterie sind.

Die Einträge werden automatisch zu deiner **Nightscout-Website hochgeladen** und dort angezeigt, wenn du die Variable 'careportal' eingestellt hast (siehe [http://androidaps.readthedocs.io/en/latest/DE/voraussetzungen.html#nightscout-website](http://androidaps.readthedocs.io/en/latest/DE/voraussetzungen.html#nightscout-website) ).

Wenn du an dieser Stelle **Kohlenhydrate** eingibst (z.B. zur Korrektur), dann werden diese von AAPS seit Version 1.58 offline (also ohne Umweg über Nightscout) erkannt und beim Loop berücksichtigt.

### SMS-Kommunikator
Wenn du diese Option aktivierst (linker Haken), dann kann AAPS bestimmte Befehle per SMS erhalten. Dies ist sinnvoll z.B. bei Kindern, die von ihren Eltern überwacht und behandelt werden.

Weitere Informationen findest du unter [AndroidAPS nutzen > SMS-Befehle](https://androidaps.readthedocs.io/en/latest/DE/benutzung/sms-befehle.html)

**Sicherheitshinweise zur SMS-Steuerung**

* Wenn du diese Option verwendest, dann behalte im Hinterkopf was passieren könnte, falls das Handy, welches zur Fernsteuerung verwendet wird, gestohlen wird. Schütze es deshalb mit einem sicheren Bildschirm-Code.
* Seit AndroidAPS 1.1 wirst du über wichtige ferngesteuerte Aktionen (z.B. Bolus, Profiländerung) eine SMS erhalten. Deswegen solltest du mindestens 2 Telefonnummern hinzufügen (für den Fall, dass ein Handy gestohlen wird).

### Essen
Wenn du diese Option aktivierst (linker Haken) und sichtbar machst (rechter Haken), dann erscheint in AAPS ein neuer Reiter "Essen". Dort werden alle Mahlzeiten angezeigt, die du in deiner Nightscout-Website unter "Nahrungsmittel Editor" angelegt hast. Ein Anlegen von Mahlzeiten in AAPS ist derzeit nicht möglich.

Diese Funktion ist praktisch, um die KH-Menge von häufig gegessenen Standardmahlzeiten festzuhalten ("Pizza Diavolo von Luigi um die Ecke", "Himbeer-Sorbet vom Kramerwirt" etc.).

### Wear
Wenn du diese Option aktivierst (linker Haken), dann kann sich AndroidAPS mit einer geeigneten Android Wear Smartwatch verbinden. Unter Einstellungen (Zahnrädchen) kannst du festlegen, ob du AndroidAPS auch von der Uhr aus steuern willst ("Nasenbolus") und welche Daten du auf der Smartwatch sehen willst:

* BZ
* TZ
* 15'-Trend
* COB
* Bolus-IOB
* Basal-IOB
* detailliertes IOB
* detailliertes Delta
* BGl
* Vorhersagen des BZ-Verlaufs
* Benachrichtigung bei SMB-Abgabe

Wenn du diese Option sichtbar machst (rechter Haken), dann erscheint ein neuer Reiter in AAPS namens "Wear". Dort hast du folgende Möglichkeiten:

**Alle Daten erneut senden**

AAPS sendet alle aktuellen Daten erneut an die Smartwatch. Dies kann hilfreich sein, wenn die Uhr längere Zeit außer Reichweite war und dadurch dein BZ-Verlauf Lücken aufweist. Oder wenn du nach dem Einschalten der Uhr nicht ein paar Minuten warten willst, bis AAPS die ersten Informationen übertragen hat.

**Öffne Einstellungen auf der Uhr**

Dies öffnet über das Smartphone die Einstellungen auf der Uhr.

Weitere Informationen findest du unter [AndroidAPS einrichten > Smartwatch-Integration](https://androidaps.readthedocs.io/en/latest/DE/konfiguration/smartwatch.html)

### xDrip+ Statuszeile (Uhr)
Falls du auf deiner Smartwatch nicht das AAPS/AAPSv2-Ziffernblatt verwendest, sondern das Ziffernblatt von xDrip+, dann kannst du hier auswählen, dass auf den xDrip+ Ziffernblatt Informationen von AAPS erscheinen sollen.

Über Einstellungen (Zahnrädchen) kannst du regeln, welche Infos angezeigt werden sollen.

### Laufende Benachrichtigungen
Wenn du diese Option aktivierst, dann ist zeigt AndroidAPS dauerhaft eine Systemmeldung im Android-Smartphone. Dort kannst du sehen, was der BZ und der Loop gerade machen.

### Nightscout-Client
Hier kannst du die Synchronisation mit deiner Nightscout-Website aktivieren. Über die Einstellungen (Zahnrädchen) kannst du deine Nightscout-URL und deinen API-Key eingeben.

Wenn **Logge App-Start in Nightscout** aktiviert ist, dann wird jeder Start von AndroidAPS in Nightscout angezeigt.

Unter **Alarm-Optionen** kannst du verschiedene Alarme einstellen, die auch in Nightscout als Alarme auftauchen sollen.

Unter **Verbindungs-Einstellungen** hast du verschiedene Optionen, über welche Netzwerkverbindung AndroidAPS Daten zu Nightscout hochladen soll (nur WLAN, nur in bestimmtem WLAN, nur bei angeschlossenem Ladekabel etc.). Willst du, dass nur über eine bestimmte SSID Daten an Nightscout hochgeladen werden, dann musst du die SSID in Anführungszeichen setzen (z.B. "MY-WLAN"). Mehrere SSIDs werden durch Komme getrennt (z.B. "MY-WLAN", "NEIGHBOURS-WLAN").

**Um eine bereits gespeicherte SSID wieder zu löschen, musst du ein Leerzeichen als SSID eintragen und abspeichern!** Es handelt sich dabei um einen bekannten [Bug](https://github.com/MilosKozak/AndroidAPS/issues/1187)

### Konfigurations-Generator
Hier kannst du auswählen, ob der Konfigurations-Generator als Reiter angezeigt werden soll oder nicht.
