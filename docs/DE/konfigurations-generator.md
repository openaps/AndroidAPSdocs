# Konfigurations-Generator
Im Reiter "Konfigurations-Generator" kannst du fast alle AAPS-Funktionen konfigurieren. 

Die **Auswahlfelder links** aktivieren die gewählte Funktion, die **Auswahlfelder rechts** (Augen-Symbol) machen den dazugehörigen Reiter im AAPS-Menü sichtbar oder unsichtbar.

Erscheint bei einzelnen Optionen ein **Zahnrädchen**, kannst du weitere Einstellungen vornehmen.

## Profil
Hier kannst du auswählen, von welcher Quelle AAPS dein Therapie-Profil mit den Basalraten, ISF und IC abrufen soll.

### DanaR
Das in der **DanaR/DanaRS hinterlegte Profil** wird verwendet. Diese Auswahl dürfte selten sinnvoll sein, weil das Eingeben der Daten direkt in der Pumpe ein "Gefummel" ist. 

### Nightscout-Profil (empfohlen)
Die auf deiner **Nightscout-Website unter https://[deine-nightscout-adresse]/profile hinterlegten Profile** werden synchronisiert. So kannst du komfortabel in Nightscout Profile (z.B. Arbeit, Daheim, Sport, Urlaub usw.) **anlegen**. Kurz nach dem Klick auf "Speichern" werden sie bei bestehender Internetverbindung des Smartphones zu AAPS übertragen. Nach der Erstübertragung Auch ohne Internetverbindung bzw. ohne Verbindung zu Nightscout sind die Nightscout-Profile in AAPS verfügbar, wenn sie einmalig synchronisiert worden sind. 

Um ein Profil aus Nightscout zu **aktivieren**, musst du einen **Profilwechsel** durchführen. Dazu im Homescreen von AAPS oben lange auf das derzeitige Profil drücken (graues Feld zwischen dem hellblauen "Open/Closed Loop"-Feld und dem dunkelblauen Zielbereich-Feld) > Profilwechsel > Profil auswählen > OK. AAPS schreibt nach dem Profilwechsel das gewählte Profil auch in die Pumpe, so dass es im Notfall ohne AAPS verfügbar ist und weiterläuft.

### Einfaches Profil
Dieses Profil ermöglicht nur ein ganz simples Behandlungsschema mit **ganztägig jeweils nur einem Wert** für DIA, IC, ISF, Basalrate und Zielbereich. Eher zu Testzwecken zu verwenden, außer du hast über 24 Stunden dieselben Faktoren. Sobald "Einfaches Profil" ausgewählt ist, erscheint in AAPS ein neuer Reiter, wo du dann die Profildaten eingeben kannst.

### Lokales Profil
Hier wird zunächst das in der **Pumpe hinterlegte Profil 1** ausgelesen (weitere Pumpen-Profile werden ignoriert). Sobald "Lokales Profil" ausgewählt ist, erscheint in AAPS ein neuer Reiter, wo du dann die aus der Pumpe ausgelesenen Profildaten ggf. verändern kannst. Mit dem nächsten Profilwechsel werden sie dann auf die Pumpe ins Profil 1 geschrieben.

## Insulin
Hier musst du auswählen, welchen **Insulintyp** du verwendest. AAPS muss für die Berechnungen des Algorythmus wissen, wie es in deinem Körper wirkt. Dabei spielt es eine große Rolle, zu welchem Zeitpunkt das Wirkmaximum (= max peak) erreicht wird und wie lange das Insulin im Körper aktiv ist (= DIA - duration of insulin action). Für die gängigen Analog-Insuline sind die Wirkprofile zum Wirkmaximum hinterlegt. Die Dauer der Insulinwirkung (DIA) kannst du in deinen Profileinstellungen manuell ändern, allerdings muss sie mindestens 5h betragen.

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

* xDrip+
* Nightscout-Client BZ
* MM640g
* Glimp
* DexcomG5 app (patched)

Näheres zur Einrichtung der BZ-Quellen findest du unter [http://androidaps.readthedocs.io/en/latest/DE/voraussetzungen.html#bz-quelle-cgm-fgm](http://androidaps.readthedocs.io/en/latest/DE/voraussetzungen.html#bz-quelle-cgm-fgm)
    
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
Hier kannst du auswählen, nach welchem Algorythmus AAPS die Insulinempfindlichkeit berechnen soll. Die automatische Sensibilitätserkennung (Autosens) ist das Herzstück des Closed Loop. Verschiedene Algorythmen analysieren laufend alle verfügbaren Daten (BZ, IOB, COB) und korrigieren im Closed Loop bei Bedarf, wenn du besser oder schlechter auf Insulin reagierst als eingestellt. Autosens wertet aber nur Daten aus, wenn eine Kohlenhydrate an Bord (COB) sind. Zeiten mit COB werden ausgespart.

Die berechnete Insulinempfindlichkeit kannst du verfolgen, indem du auf dem Home-Screen im Auswahlmenü der angezeigten Kurven "Sensitivität" auswählst. Die weiße Linie zeigt dir das graphisch an. 

**Die Empfindlichkeitserkennung ist erst freigeschaltet, wenn du Objective 6 erreicht hast.**

### Autosens verstehen

Um zu verstehen, wie Autosens zu den Ergebnissen kommt, kannst du zum Reiter "OpenAPS" wechseln. Dort gibt es den Abschnitt "Autosens-Daten", der dir folgende Informationen liefert:

* **ratio**: Ergebnis der aktuell berechneten Empfindlichkeit im Vergleich zum aktuell eingestellten Profil. "ratio 1.2" bedeutet beispielsweise, dass du Faktor 1,2, also 20% mehr Insulin benötigst, "ratio 0.9", dass du Faktor 0,9, also 10% weniger Insulin benötigst als eingestellt. Wenn du dein Profil schon mit 110% betreibst und Autosens zeigt "ratio 1.1" an, dann solltest du mit einem weiteren Profilwechsel noch einmal 10% draufpacken und das Profil mit 120% fahren.
* **ratioLimit**: Steht dort "Ratio limited from 1.5323325324 to 1.2", dann begrenzt AAPS die Korrekturen aus Sicherheitsgründen auf den (manuell eingestellten) Faktor von 1.2. Begrenzt Autosens nach oben (z.B. 1.5 zu 1.2), dann solltest du zuerst überlegen, ob du dich bei den eingegebenen Kohlenhydraten verschätzt hast und diese nachträglich eintragen. Andernfalls wäre ein Profilwechsel von Hand auf 150% erforderlich. Dazu auf dem Home-Screen lange auf das aktuelle Profil drücken und unter Profilwechsel 150% auswählen.
* **past Sensitivity**: Hier wird dir angezeigt, wie Autosens zu dem angezeigten Ergebnis gekommen ist. Die Historie geht stündlich so weit zurück, wie du zur Berechnung der Daten eingestellt hast.

    * `(1)` Uhrzeit (im Beispiel 1 Uhr)
    * `=` Die erkannte Sensitivität stimmt mit der eingestellten überein
    * `+` Du warst resistenter auf Insulin als eingestellt (brauchtest also mehr Insulin als gedacht)
    * `-` Du warst sensibler auf Insulin als eingestellt (brauchtest also weniger Insulin als gedacht)
    * `C` Du hattest Kohlenhydrate an Bord (COB), diese Zeit wird ausgespart
    * `u` Du hattest nicht eingegebene Kohlenhydrate an Bord (unattended meal - UAM), diese Zeit wird ausgespart
    
* **sensResult**:

    * `sensitivity normal`bedeutet, dass keine Änderungen nötig sind
    * `Excess insulin resistance detected`bedeutet, dass Autosens eine Anpassung am aktiven Profil vornimmt.
    
Daraus folgt: Wenn du fast ausschließlich `===` siehst, dann sind deine Faktoren im Profil perfekt eingestellt. Sind dagegen   viele `++++` oder `----` Abschnitte dabei, solltest du (gemeinsam mit dem Diabetologen oder der Diafee) an einer Verbesserung deiner Einstellung arbeiten. Ansonsten kann der Closed Loop auch nicht korrekt arbeiten.

Siehe auch 

* [Tipps und Tricks > Diabetes-Therapie fürs Loopen tunen](http://androidaps.readthedocs.io/en/latest/DE/tippstricks.html#diabetes-therapie-furs-loopen-tunen)
* [Autosens](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode)
* [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html)

### Sensitivität Oref0
Der Oref0-Algorythmus berechnet die Insulinempflindlichkeit **auf Basis der vorangegangenen 24 Stunden**. Kohlenhydrate (falls noch nicht absorbiert) werden nach einer bestimmten Zeit, die man einstellen kann, einfach abgeschnitten.

Details in der [OpenAPS-Dokumentation](https://openaps.readthedocs.io/en/2017-05-21/docs/walkthrough/phase-4/advanced-features.html)

Oref0 - nicht absorbierte Kohlenhydrate werden nach der eingestellten Zeit abgeschnitten

![COB from oref0](../images/cob_oref0.png)

### Sensitivität AAPS
Der AAPS-Algorythmus basiert auf Oref0. Du kannst jedoch **selbst festlegen, auf Basis wie vieler Stunden** in der Vergangenheit die Insulinempfindlichkeit berechnet werden soll. Die minimale Kohlenhydrat-Resporptionszeit wird ausgehend von der eingestellten maximalen Kohlenhydrat-Resorptionszeit (max carbs absorption) berechnet.

![COB from AAPS](../images/cob_aaps.png)

Die grünen Punkte in der COB-Graphik bedeuten: Die minimale Kohlenhydrat-Resorption wurde verwendet anstatt der Berechnung anhand der Abweichungen (diviations) zwischen berechneten und erkannten Werten

### Durchschnittliche Sensitivität
Der Algorythmus "Durchschnittliche Sensitivität" berechnet die Insulinempfindlichkeit aus einem **gewichteten Durchschnitt der Abweichungen (deviations)**. Aktuellere Abweichungen haben ein höheres Gewicht. Die minimale Kohlenhydrat-Resporptionszeit wird ausgehend von der eingestellten maximalen Kohlenhydrat-Resorptionszeit (max carbs absorption) berechnet. Dieser Algorythmus kann am schnellsten auf Veränderungen in der Insulinempfindlichkeit reagieren.

Der Algorythmus rechnet so, dass nach der eingestellten Zeit `COB == 0` gesetzt wird.

### Sensitivität Oref1
Der Algorythmus "Oref1" ist die neueste Version der OpenAPS-Empfindlichkeitserkennung. Außerdem erkennt dieser Algorythmus nicht eingegebene Kohlenhydrate ("unattended meals" = UAM) und fängt sie ab. Grundsätzlich reicht es dank SMB oft aus, dem System die geplante Kohlenhydratmenge mitzuteilen und den Rest AAPS zu überlassen. Oder du gibst einen Anfangsbolus, der nur zum Teil die Kohlenhydrate abdeckt und lässt den Rest vom SMB auffüllen. 

**Der neue Algorythmus Oref1 ist nur für erfahrene Nutzer geeignet!** Zu Beginn des Loopens sollten mit Oref0 / AMA Erfahrungen gesammelt werden.

Eine Einführung zu Oref1 findest du hier: https://diyps.org/2017/04/30/introducing-oref1-and-super-microboluses-smb-and-what-it-means-compared-to-oref0-the-original-openaps-algorithm/ (englisch)

## OpenAPS

### MA
MA steht für "Meal Assist" und ist eine der ältesten OpenAPS-Funktionen (aus 2016) im Rahmen des Oref0-Algorythmus.

### AMA
AMA steht für "advanced meal assist" und ist eine Funktion OpenAPS-Funktion aus 2017 (Oref0). Nachdem du dir einen Bolus gegeben hast, kann das System eine höhere temporäre Basalrate wählen, vorausgesetzt du gibst die Kohlenhydrate verlässlich ein. 

**Du musst das Objective 7 abgeschlossen haben, um AMA verwenden zu können.**

Siehe auch: [OpenAPS-Dokumentation zu AMA (englisch)](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama)

### SMB
SMB steht für "super micro bolus" und ist die neueste OpenAPS-Funktion (aus 2018) im Rahmen des Oref1-Algorythmus. Im Gegensatz zu AMA arbeitet SMB nicht so stark mit temporären Basalraten, sondern hauptsächlich mit **kleinen Supermicroboluses**. In Situationen, in denen AMA 1.0 IE Insulin über eine temporäre Basalrate zugeben würde, gibt SMB im **5-Minutentakt** mehrere Supermicroboluses in kleinen Schritten ab, z.B. 0.4 IE, 0.3 IE, 0.2 IE und 0.1 IE. Gleichzeitig wird die laufende Basalrate aus Sicherheitsgründen für eine bestimmte Dauer auf 0 IE/h gesetzt, damit keine Überdosierung erfolgt (**"zero-temping"**). So kann das System, vor allem mit FIASP, den BZ schneller abfangen als mit der temporären Basalratenerhöhung bei AMA.

**Um SMB verwenden zu können, musst du zuerst 28 Tage den Closed Loop verwendet haben, und darauf achten, dass dein APS ausfallen könnte.**

Um SMB effektiv arbeiten zu lassen, musst du deine Einstellungen anpassen. Da mit SMB der **maxIOB** nicht mehr durch die vom APS gegebenen Dosen berechnet wird, sondern alles IOB (auch deinen selbst gegebenen Essensbolus), ist der Wert für maxIOB höher, als das, was du von MA und AMA gewohnt bist. Ein guter Wert für den Anfang ist: 1 normaler Essensbolus + 3x höchste tägl. Basalrate. Jedoch sei dabei vorsichtig und adjustiere deine Einstellungen in kleinen Schritten.

Siehe auch [OpenAPS-Dokumentation zu SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-smb).

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
 
**7. Objective: Aktiviere zusätzliche Funktionen für den alltäglichen Gebrauch wie AMA oder SMB**
  * Nun solltest du dich mit AAPS sicher fühlen und wissen, welche Einstellungen für deinen Diabetes am besten passen. 
  * Über einen Zeitraum von 14 Tagen kannst du zusätzliche Funktionen ausprobieren, welche dich noch mehr unterstützen (AMA, SMB).
  
## Behandlungen
Wenn du Behandlungen als sichtbar markiert hast, kannst du im "Behandlungen"-Reiter in AAPS alle einzelnen **Behandlungsdaten sehen** (Bolus, verlängerter Bolus, temporäre Basalraten, temporäres Ziel, Profilwechsel, Careportal-Einträge). All diese Daten werden grundsätzlich zu deiner Nightscout-Website hochgeladen. 

Du kannst einzelne Einträge durch Antippen von "Löschen" **entfernen**. Sie werden dann in AAPS nicht mehr berücksichtigt und bei Nightscout gelöscht (**Bitte vorsichtig verwenden!**).

## Generell

### Übersicht

#### Keep screen on (derzeit nur dev-Branch)
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
Wenn du diese Option auswählst, dann wird im Rechner die Superbolus-Option freigeschaltet. 

Ein Superbolus hat erstmal nichts mit dem Loopen an sich zu tun. Er ist eine Behandlungsmethode, bei der dem errechneten Mahlzeiten-Bolus zusätzlich noch die Basalrate der nächsten zwei Stunden als Bolus hinzugefügt wird. Gleichzeitig wird die Basalrate für zwei Stunden auf 0 gesetzt. So erreicht der Körper gerade bei schnellen Kohlenhydraten unter Umständen in kürzerer Zeit einen höheren Insulinspiegel. Dadurch kann der postprandiale Peak ggf. niedriger sein.

Weiterführende Informationen findest du im Netz:

* [https://alfa-woman.com/super-bolus-method-for-combating-blood-glucose-spikes-420 (deutsch)](https://alfa-woman.com/super-bolus-method-for-combating-blood-glucose-spikes-420)
* [https://thisiscaleb.com/2010/04/21/super-bolus/ (englisch)](https://thisiscaleb.com/2010/04/21/super-bolus/)

### Aktionen
Wenn du diese Option aktivierst (linker Haken) bzw. sichtbar machst (rechter Haken), dann erscheint in AAPS ein Reiter, der folgende häufig genutzte Aktionen ermöglicht:

* Profilwechsel
* Temporäres Ziel setzen
* Temporäre Basalrate abbrechen
* Vorfüllen/füllen des Schlauches
* History
* Statistik über die tägliche Gesamtdosis an Insulin (TDD)

### Careportal


### SMS-Kommunikator
Gehe in deinen Einstellungen im  Android-Telefon zu Apps > AndroidAPS > Berechtigungen und aktiviere dort SMS.

In AndroidAPS gehe zu Preferences > SMS Communicator und trage die Telefonnummer(n) ein, die dazu berechtigt werden soll(en), Kommandos an AndroidAPS senden zu dürfen. ‚Allow remote commands via SMS' muss außerdem aktiviert warden.

Sende von einem der berechtigten Telefone eine SMS an das Android-Handy, auf de AndroidAPS installiert ist. Sende dazu einen der folgenden **fettgedruckten** Kommandos und das Handy wird mit einer Erfolgsmittelung oder dem angeforderten Status antworten. 

* BG: Letzter Blutzucker 125 vor 4min, Delta: -12mg/dl, IOB: 0.20E (Bolus: 0.10E Basal: 0.10E)
* LOOP STOP/DISABLE: Das „Loopen“ wurde deaktiviert
* LOOP START/ENABLE: Das „Loopen“ wurde aktiviert.
* LOOP STATUS: Das „Loopen“ ist deaktiviert / Das „Loopen“ ist aktiviert / Pausiert (10 min)
* LOOP SUSPEND 20: Das „Loopen“ wird für 20 Minuten unterbrochen. 
* LOOP RESUME: Das „Loopen“ fortsetzen
* TREATMENTS REFRESH: Geräte aktualisieren 1 Empfänger
* NSCLIENT RESTART: NSCLIENT restarten 1 Empfänger
* DANAR: Letzte Verbindung: vor 1 Min. Temp: 0.00E/h @11:38 5/30min IOB: 0.5E Reserv: 34E Batt: 100
* BASAL STOP/CANCEL: Um die temporäre Basalrate zu stoppen, antworte mit dem Code EmF
* BASAL 0.3: Um eine Basalrate von 0.3E/h zu starten, antworte mit Code Swe, Ferngesteuerte Basalraten-Einstellungen sind nicht erlaubt (wenn ferngesteuerte Kommandos nicht erlaubt sind)
* BOLUS 1.2: Um einen Bolus vo 1.2E abzugeben, antworte mit Code Rrt, Ferngesteuerte Boli sind nicht erlaubt (wenn ferngesteuerte Kommandos nicht erlaubt sind)
* CAL 126: Um Kalibrierungswert von 126 zu senden, antworte mit Code Rrt, Kalibrierung gesendet (wenn xSrip installiert ist. Kallibrierungen zu akzeptieren, muss in xDrip+ aktiviert sein)

**Sicherheitshinweise zur SMS-Steuerung**
        
* Wenn du diese Option verwendest, behalte im Hinterkopf, was passieren könnte, falls das Handy, welches zur Fernsteuerung verwendet wird, gestohlen wird. Schütze dieses mit einem sicheren Code.
* Seit AndroidAPS 1.1 wirst du über wichtige ferngesteuerte Aktionen (z.B. Bolus, Profiländerung) eine SMS erhalten. Deswegen solltest du mindestens 2 Telefonnummern hinzufügen (für den Fall, dass ein Handy gestohlen wird).

### Essen

### Wear

### xDrip+ Statuszeile (Uhr)

### Laufende Benachrichtigungen

### Nightscout-Client

### Konfigurations-Generator

