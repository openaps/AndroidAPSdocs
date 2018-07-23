# Konfigurations-Generator
Im Reiter "Konfigurations-Generator" kannst du fast alle AAPS-Funktionen konfigurieren. 

Die **Auswahlfelder links** aktivieren die gewählte Funktion, die **Auswahlfelder rechts** (Augen-Symbol) machen den dazugehörigen Reiter im AAPS-Menü sichtbar oder unsichtbar.

Erscheint bei einzelnen Optionen ein **Zahnrädchen**, kannst du weitere Einstellungen vornehmen.

## Profil
Hier kannst du auswählen, von welcher Quelle AAPS dein Therapie-Profil mit den Basalraten, ISF und IC abrufen soll.

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

* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* Nightscout-Client BZ
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de)
* [DexcomG5 app (patched)](https://github.com/dexcomapp/dexcomapp/)
* [Poctech](http://www.poctechcorp.com/en/contents/268/5682.html)

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

#### min_5m_carbimpact
Diese Einstellung legt fest, wie schnell die eingegebenen Kohlenhydrate standardmäßig in 5 Minuten absorbiert werden. Dies beeinflusst auch, wie schnell der errechnete COB-Wert vfällt, wenn sich eine Kohlenhydrat-Absporption nicht an den BZ-Abweichungen zeigt.

Standardwert: 3mg/dL/5min (nur beim AMA! SMB-Standardwert: 8). 

#### Maximale Essens-Resorptionszeit [h]
Die Einstellung legt fest, nach wie vielen Stunden die Kohlenhydrate spätestens absorbiert sein müssen. Ggf. verbliebene Kohlenhydrate werden abgeschnitten.

Standardwert: 6 Std.

#### Erweiterte Einstellungen

**Max autosens ratio**

Hier stellst du ein, bis zu welchem Faktor Autosens dein aktuelles Profil erhöhen darf. Faktor 1.2 bedeutet 20% höher. Stellt Autosens eine noch niedrigere Insulinempfindlichkeit fest, werden die Anpassungen bei +20% gedeckelt. 

Standardwert: 1.2

**Min autosens ratio**

Hier stellst du ein, bis zu welchem Faktor Autosens dein aktuelles Profil absenken darf. Faktor 0.7 bedeutet 30% weniger. Stellt Autosens eine noch höhere Insulinempfindlichkeit fest, werden die Anpassungen bei -30% gedeckelt.

Standardwert: 0.7

### Sensitivität AAPS
Der AAPS-Algorythmus basiert auf Oref0. Du kannst jedoch **selbst festlegen, auf Basis wie vieler Stunden** in der Vergangenheit die Insulinempfindlichkeit berechnet werden soll. Die minimale Kohlenhydrat-Resporptionszeit wird ausgehend von der eingestellten maximalen Kohlenhydrat-Resorptionszeit (max carbs absorption) berechnet.

![COB from AAPS](../images/cob_aaps.png)

Die grünen Punkte in der COB-Graphik bedeuten: Die minimale Kohlenhydrat-Resorption wurde verwendet anstatt der Berechnung anhand der Abweichungen (diviations) zwischen berechneten und erkannten Werten

### Durchschnittliche Sensitivität
Der Algorythmus "Durchschnittliche Sensitivität" berechnet die Insulinempfindlichkeit aus einem **gewichteten Durchschnitt der Abweichungen (deviations)**. Aktuellere Abweichungen haben ein höheres Gewicht. Die minimale Kohlenhydrat-Resporptionszeit wird ausgehend von der eingestellten maximalen Kohlenhydrat-Resorptionszeit (max carbs absorption) berechnet. Dieser Algorythmus kann am schnellsten auf Veränderungen in der Insulinempfindlichkeit reagieren.

Der Algorythmus rechnet so, dass nach der eingestellten Zeit `COB == 0` gesetzt wird.

#### Maximale Essens-Resorptionszeit [h]
Die Einstellung legt fest, nach wie vielen Stunden die Kohlenhydrate spätestens absorbiert sein müssen. Ggf. verbliebene Kohlenhydrate werden abgeschnitten.

Standardwert: 6 Std.

#### Intervall für Autosens [h]
Hier kannst du angeben, wie viele vergangene Stunden für die Autosens-Berechnungen einbezogen werden sollen. Je kürzer der Zeitraum (z.B. 4 Std.), desto schneller passt AAPS die Insulinempfindlichkeit an. 

#### Erweiterte Einstellungen

**Max autosens ratio**

Hier stellst du ein, bis zu welchem Faktor Autosens dein aktuelles Profil erhöhen darf. Faktor 1.2 bedeutet 20% höher. Stellt Autosens eine noch niedrigere Insulinempfindlichkeit fest, werden die Anpassungen bei +20% gedeckelt. 

Standardwert: 1.2

**Min autosens ratio**

Hier stellst du ein, bis zu welchem Faktor Autosens dein aktuelles Profil absenken darf. Faktor 0.7 bedeutet 30% weniger. Stellt Autosens eine noch höhere Insulinempfindlichkeit fest, werden die Anpassungen bei -30% gedeckelt.

Standardwert: 0.7

#### Maximale Essens-Resorptionszeit [h]
Die Einstellung legt fest, nach wie vielen Stunden die Kohlenhydrate spätestens absorbiert sein müssen. Ggf. verbliebene Kohlenhydrate werden abgeschnitten.

Standardwert: 6 Std.

#### Intervall für Autosens [h]
Hier kannst du angeben, wie viele vergangene Stunden für die Autosens-Berechnungen einbezogen werden sollen. Je kürzer der Zeitraum (z.B. 4 Std.), desto schneller passt AAPS die Insulinempfindlichkeit an. 

#### Erweiterte Einstellungen

**Max autosens ratio**

Hier stellst du ein, bis zu welchem Faktor Autosens dein aktuelles Profil erhöhen darf. Faktor 1.2 bedeutet 20% höher. Stellt Autosens eine noch niedrigere Insulinempfindlichkeit fest, werden die Anpassungen bei +20% gedeckelt. 

Standardwert: 1.2

**Min autosens ratio**

Hier stellst du ein, bis zu welchem Faktor Autosens dein aktuelles Profil absenken darf. Faktor 0.7 bedeutet 30% weniger. Stellt Autosens eine noch höhere Insulinempfindlichkeit fest, werden die Anpassungen bei -30% gedeckelt.

Standardwert: 0.7

### Sensitivität Oref1
Der Algorythmus "Oref1" ist die neueste Version der OpenAPS-Empfindlichkeitserkennung. Sie rechnet immer anhand der Daten der vergangenen 8 Stunden. Dieser Algorythmus erkennt nicht eingegebene Kohlenhydrate ("unattended meals" = UAM) und fängt sie ab. 

Eine Einführung zu Oref1 findest du hier: https://diyps.org/2017/04/30/introducing-oref1-and-super-microboluses-smb-and-what-it-means-compared-to-oref0-the-original-openaps-algorithm/ (englisch)

**Der neue Algorythmus Oref1 ist nur für erfahrene Nutzer geeignet!** Zu Beginn des Loopens sollten mit Oref0 / AMA Erfahrungen gesammelt werden.

#### min_5m_carbimpact
Diese Einstellung legt fest, wie schnell die eingegebenen Kohlenhydrate standardmäßig in 5 Minuten absorbiert werden. Dies beeinflusst auch, wie schnell der errechnete COB-Wert vfällt, wenn sich eine Kohlenhydrat-Absporption nicht an den BZ-Abweichungen zeigt. Der Standardwert von 8 mg/dL/5min korrespondiert mit einer minimalen Kohlenhydrat-Absorptionsrate von 24g/Std bei einem CSF von 4 mg/dL/g.

Standardwert: 8mg/dL/5min (nur beim SMB! AMA-Standardwert: 3). 

#### Maximale Essens-Resorptionszeit [h]
Die Einstellung legt fest, nach wie vielen Stunden die Kohlenhydrate spätestens absorbiert sein müssen. Ggf. verbliebene Kohlenhydrate werden abgeschnitten.

Standardwert: 6 Std.

#### Erweiterte Einstellungen

**Max autosens ratio**

Hier stellst du ein, bis zu welchem Faktor Autosens dein aktuelles Profil erhöhen darf. Faktor 1.2 bedeutet 20% höher. Stellt Autosens eine noch niedrigere Insulinempfindlichkeit fest, werden die Anpassungen bei +20% gedeckelt. 

Standardwert: 1.2

**Min autosens ratio**

Hier stellst du ein, bis zu welchem Faktor Autosens dein aktuelles Profil absenken darf. Faktor 0.7 bedeutet 30% weniger. Stellt Autosens eine noch höhere Insulinempfindlichkeit fest, werden die Anpassungen bei -30% gedeckelt.

Standardwert: 0.7

## OpenAPS

### MA
MA steht für "Meal Assist" und ist eine der ältesten OpenAPS-Funktionen (aus 2016) im Rahmen des Oref0-Algorythmus. In die Berechnungen können die Vorzüge der Insulin-Empfindlichkeitserkennung (autosens) nicht einbezogen werden.

#### Max IE/h, die als TBR gesetzt werden können (OpenAPS "max-basal")
Diese Sicherheitseinstellung legt fest, welche maximale temporäre Basalrate die Insulinpumpe abgeben darf. Der Wert sollte in der Pumpe und in AAPS übereinstimmen und mindestens beim 3-fachen der höchsten eingestellten einzelnen Basalrate liegen. 

Beispiel: Im Basalprofil ist im Laufe des Tages die Basalrate 1.00 U/h die höchste. Dann empfiehlt sich ein max-basal Wert von mindestens 3 U/h.

Du kannst aber keinen beliebigen Wert wählen. AAPS begrenzt als "hard limit" den Wert danach, welches Patientenalter du unter Einstellungen gewählt hast. Bei Kindern ist der zulässige Wert am niedrigsten, bei insulinresistenten Erwachsenen am höcyhsten.

AndroidAPS beschränkt den Wert wie folgt:

* Kind: 2
* Jugendliche: 5
* Erwachsene: 10
* Insulinresistente Erwachsene: 12

#### Maximales Basal-IOB, das OpenAPS abgeben darf (OpenAPS "max-iob")
Dieser Wert bestimmt, bis zu welchem IOB-Wert AAPS im Closed Loop Modus regeln darf. Liegt das aktuelle IOB (z.B nach einem Mahlzeit-Bolus) über dem festgelegten Wert, dann macht der Loop zunächst nichts, bis die IOB-Grenze wieder unterschritten ist. 

Standardmäßig wird zu Beginn eine Einstellung auf 2 vorgeschlagen, aber du solltest dich langsam rauf arbeiten bis du weißt, welcher Wert für dich in Ordnung ist. Das ist sehr individuell und hängt stark vom durchschnittlichen Insulinbedarf ab. Du kannst aber keinen beliebigen Wert wählen. AAPS begrenzt als "hard limit" den Wert danach, welches Patientenalter du unter Einstellungen gewählt hast. Bei Kindern ist der zulässige Wert am niedrigsten, bei insulinresistenten Erwachsenen am höcyhsten.

AndroidAPS beschränkt bei AMA den Wert wie folgt:

* Kind: 3
* Jugendliche: 5
* Erwachsene: 7
* Insulinresistente Erwachsene: 12

#### Erweiterte Einstellungen

**Verwende immer das kurze durchschnittliche Delta**

**Bolus snooze dia divisor**
Die Funktion "Bolus snooze" wird dann aktiviert, wenn du einen Essensbolus gegeben hast. Der Loop reagiert dadurch nach dem Essen nicht gleich mit niedrigen temporären Basalraten. Der Standardwert ist 2. Dies bedeutet: Bei einem DIA (Dauer der Insulinaktivität) von 5 wird der "Bolus snooze" über 5 : 2 = 2,5 Stunden geradlinig auslaufen.

Standardwert: 2

### AMA
AMA steht für "advanced meal assist" und ist eine Funktion OpenAPS-Funktion aus 2017 (Oref0). Nachdem du dir einen Bolus gegeben hast, kann das System eine höhere temporäre Basalrate wählen, vorausgesetzt du gibst die Kohlenhydrate verlässlich ein. 

**Du musst das Objective 7 abgeschlossen haben, um AMA verwenden zu können.**

Siehe auch: [OpenAPS-Dokumentation zu AMA (englisch)](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama)

#### Max IE/h, die als TBR gesetzt werden können (OpenAPS "max-basal")
Diese Sicherheitseinstellung legt fest, welche maximale temporäre Basalrate die Insulinpumpe abgeben darf. Der Wert sollte in der Pumpe und in AAPS übereinstimmen und mindestens beim 3-fachen der höchsten eingestellten einzelnen Basalrate liegen. 

Beispiel: Im Basalprofil ist im Laufe des Tages die Basalrate 1.00 U/h die höchste. Dann empfiehlt sich ein max-basal Wert von mindestens 3 U/h.

Du kannst aber keinen beliebigen Wert wählen. AAPS begrenzt als "hard limit" den Wert danach, welches Patientenalter du unter Einstellungen gewählt hast. Bei Kindern ist der zulässige Wert am niedrigsten, bei insulinresistenten Erwachsenen am höcyhsten.

AndroidAPS beschränkt den Wert wie folgt:

* Kind: 2
* Jugendliche: 5
* Erwachsene: 10
* Insulinresistente Erwachsene: 12

#### Maximales Basal-IOB, das OpenAPS abgeben darf (OpenAPS "max-iob")
Dieser Wert bestimmt, bis zu welchem IOB-Wert AAPS im Closed Loop Modus regeln darf. Liegt das aktuelle IOB (z.B nach einem Mahlzeit-Bolus) über dem festgelegten Wert, dann macht der Loop zunächst nichts, bis die IOB-Grenze wieder unterschritten ist. 

Standardmäßig wird zu Beginn eine Einstellung auf 2 vorgeschlagen, aber du solltest dich langsam rauf arbeiten bis du weißt, welcher Wert für dich in Ordnung ist. Das ist sehr individuell und hängt stark vom durchschnittlichen Insulinbedarf ab. Du kannst aber keinen beliebigen Wert wählen. AAPS begrenzt als "hard limit" den Wert danach, welches Patientenalter du unter Einstellungen gewählt hast. Bei Kindern ist der zulässige Wert am niedrigsten, bei insulinresistenten Erwachsenen am höcyhsten.

AndroidAPS beschränkt bei AMA den Wert wie folgt:

* Kind: 3
* Jugendliche: 5
* Erwachsene: 7
* Insulinresistente Erwachsene: 12

#### Verwende AMA Autosense
Hier kannst du aswählen, ob die [Empfindlichkeitserkennung](http://androidaps.readthedocs.io/en/latest/DE/konfigurations-generator.html#empfindlichkeitserkennung) Autosens verwendet werden soll oder nicht.

#### Autosense passt Zielwerte an
Wenn du diese Option aktivierst, dann kann Autosens bei Bedarf (neben ISF und IC) auch den Zielbereich anpassen, damit der Loop aggressiver oder weniger aggressiv läuft. Dadurch kann der eigentliche Zielbereich ggf. schneller wieder erreicht werden.

#### Erweiterte Einstellungen

**Verwende immer das kurze durchschnittliche Delta**
Wenn du dies aktivierst, dann verwendet AndroidAPS für die Berechnungen statt des aktuellen BZ-Wertes den durchschnittlichen BZ-Wert der letzten 15 Minuten (= kurzes durchschnittliches Delta). Dieser Durchschnittswert lässt den Loop bei ungefilterten Quellen mit Signalrauschen (also wenn vom CGM/FGM keine glatte Kurve ausgegeben wird) ruhiger laufen.

**Max daily safety multiplier**
Dies ist eine wichtige Sicherheitseinstellung. Sie begrenzt das maximale Basal-IOB auf die x-fache Menge deiner höchsten Basalrate. Beispiel: höchste Basalrate = 1.0 U/h, max daily safety multiplier = 3 > AndroidAPS kann höchstens bis zu einem Basal-IOB von 3.0 IE regeln. 

Standardwert: 3 (sollte nur in Ausnahmefällen verändert werden)

**Current Basal safety multiplier**
Dies ist eine wichtige Sicherheitseinstellung. Sie begrenzt das Basal-IOB auf die x-fache Menge der aktuell laufenden Basalrate. Dies ist wichtig, um Nutzer davor zu bewahren, zu viel Basal-Insulin zu verabreichen.   

Standardwert: 4 (sollte nur in Ausnahmefällen verändert werden)

**Bolus snooze dia divisor**
Die Funktion "Bolus snooze" wird dann aktiviert, wenn du einen Essensbolus gegeben hast. Der Loop reagiert dadurch nach dem Essen nicht gleich mit niedrigen temporären Basalraten. Der Standardwert ist 2. Dies bedeutet: Bei einem DIA (Dauer der Insulinaktivität) von 5 wird der "Bolus snooze" über 5 : 2 = 2,5 Stunden geradlinig auslaufen.

Standardwert: 2

### SMB
SMB steht für "super micro bolus" und ist die neueste OpenAPS-Funktion (aus 2018) im Rahmen des Oref1-Algorythmus. Im Gegensatz zu AMA arbeitet SMB nicht so stark mit temporären Basalraten, sondern hauptsächlich mit **kleinen Supermicroboluses**. In Situationen, in denen AMA 1.0 IE Insulin über eine temporäre Basalrate zugeben würde, gibt SMB im **5-Minutentakt** mehrere Supermicroboluses in kleinen Schritten ab, z.B. 0.4 IE, 0.3 IE, 0.2 IE und 0.1 IE. Gleichzeitig wird die laufende Basalrate aus Sicherheitsgründen für eine bestimmte Dauer auf 0 IE/h gesetzt, damit keine Überdosierung erfolgt (**"zero-temping"**). So kann das System, vor allem mit FIASP, den BZ schneller abfangen als mit der temporären Basalratenerhöhung bei AMA.

Grundsätzlich kann es dank SMB bei kohlenhydratarmen Mahlzeiten ausreichen, dem System die geplante Kohlenhydratmenge mitzuteilen und den Rest AAPS zu überlassen. Dies führt aber womöglich zu höheren postprandialen Peaks, weil kein Spritz-Ess-Abstand (SEA) eingehalten werden kann. Oder du gibst, ggf. mit SEA, einen **Anfangsbolus**, der **nur zum Teil** die Kohlenhydrate abdeckt (z.B. 2/3 der geschätzten Menge) und lässt den Rest vom SMB auffüllen. 

Um SMB verwenden zu können, musst du Objective 8 erreicht haben.

#### Max IE/h, die als TBR gesetzt werden können (OpenAPS "max-basal")
Diese Sicherheitseinstellung legt fest, welche maximale temporäre Basalrate die Insulinpumpe abgeben darf. Der Wert sollte in der Pumpe und in AAPS übereinstimmen und mindestens beim 3-fachen der höchsten eingestellten einzelnen Basalrate liegen. 

Beispiel: Im Basalprofil ist im Laufe des Tages die Basalrate 1.00 U/h die höchste. Dann empfiehlt sich ein max-basal Wert von mindestens 3 U/h.

Du kannst aber keinen beliebigen Wert wählen. AAPS begrenzt als "hard limit" den Wert danach, welches Patientenalter du unter Einstellungen gewählt hast. Bei Kindern ist der zulässige Wert am niedrigsten, bei insulinresistenten Erwachsenen am höcyhsten.

AndroidAPS beschränkt den Wert wie folgt:

* Kind: 2
* Jugendliche: 5
* Erwachsene: 10
* Insulinresistente Erwachsene: 12

#### Maximales Basal-IOB, das OpenAPS abgeben darf (OpenAPS "max-iob")
Dieser Wert bestimmt, bis zu welchem IOB-Wert AAPS im Closed Loop Modus regeln darf. Liegt das aktuelle IOB (z.B nach einem Mahlzeit-Bolus) über dem festgelegten Wert, dann macht der Loop zunächst nichts, bis die IOB-Grenze wieder unterschritten ist. 

Da mit SMB der max-iob nicht mehr durch die vom APS gegebenen Dosen berechnet wird, sondern alles IOB (auch deinen selbst gegebenen Essensbolus), ist der Wert für max-iob höher, als du das von MA und AMA gewohnt bist. Ein guter Wert für den Anfang ist: 

    max-iob = mindestens 1 normaler Essensbolus + 3x höchste tägl. Basalrate 

Sei jedoch dabei vorsichtig und passe deine Einstellungen in kleinen Schritten an. Das ist sehr individuell und hängt stark vom durchschnittlichen Insulinbedarf ab. Du kannst aber keinen beliebigen Wert wählen. AAPS begrenzt als "hard limit" den Wert danach, welches Patientenalter du unter Einstellungen gewählt hast. Bei Kindern ist der zulässige Wert am niedrigsten, bei insulinresistenten Erwachsenen am höcyhsten.

AndroidAPS beschränkt beim SMB (höher als bei AMA) den Wert wie folgt:

* Kind: 3
* Jugendliche: 7
* Erwachsene: 12
* Insulinresistente Erwachsene: 25

Siehe auch [OpenAPS-Dokumentation zu SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-smb).

#### Verwende AMA Autosense
Hier kannst du aswählen, ob die [Empfindlichkeitserkennung](http://androidaps.readthedocs.io/en/latest/DE/konfigurations-generator.html#empfindlichkeitserkennung) Autosens verwendet werden soll oder nicht.

#### Aktiviere SMB
Hier kannst du die SMB-Funktion komplett aktivieren oder deaktivieren.

#### Aktiviere SMB während COB
Der SMB arbeitet, wenn COB aktiv sind (COB > 0)

#### Aktiviere SMB während temporären Zielen
Der SMB arbeitet sowohl wenn ein niedriges, als auch wenn ein hohes temporäres Ziel gesetzt ist (bald essen, Aktivität)

#### Aktiviere SMB während hohen temporären Zielen
Der SMB arbeitet, wenn ein hohes temporäres Ziel gesetzt ist (Aktivität)

#### Aktiviere SMB immer
Der SMB arbeitet immer (unabhängig von COB oder temporären Zielen). Diese Option besteht nur, wenn die BZ-Quelle gut gefilterte (nicht rauschende) Werte ausgibt. Derzeit ist das nur möglich mit dem Dexcom G5, wenn es mit der gepatchten Dexcom App oder mit xDrip+ im "native Modus" ausgelesen wird. Falls ein gemessener Wert zu weit abweicht, gibt der G5 einfach gar keinen Wert ab und wartet die nächste Messung in 5 Minuten ab.

Andere CGM/FGM wie das Freestyle Libre sind momentan für die SMB-always-Option deaktiviert, bis xDrip+ ein Glättungs-Plugin beinhaltet, das verrauschte Werte filtert.

#### Aktiviere SMB nach Mahlzeiten
Der SMB arbeitet bis 6 Stunden nach Mahleiten, auch wenn COB vorher bei 0 ist.  

Diese Option besteht nur, wenn die BZ-Quelle gut gefilterte (nicht rauschende) Werte ausgibt. Derzeit ist das nur möglich mit dem Dexcom G5, wenn es mit der gepatchten Dexcom App oder mit xDrip+ im "native Modus" ausgelesen wird. Falls ein gemessener Wert zu weit abweicht, gibt der G5 einfach gar keinen Wert ab und wartet die nächste Messung in 5 Minuten ab.

Andere CGM/FGM wie das Freestyle Libre sind momentan für die SMB-nach-Mahlzeiten-Option deaktiviert, bis xDrip+ ein Glättungs-Plugin beinhaltet, das verrauschte Werte filtert.

#### Max minutes of basal to limit SMB to
Dies ist eine wichtige Sicherheitseinstellung. Der Wert legt fest, für wie viele Minuten benötigtes Basal-Insulin der SMB zugeben darf, obwohl es nicht von COB gedeckt ist. Dadurch kann der SMB aggressiver sein. Zu Beginn solltest du den Standardwert von 30 Minuten wählen. Mit etwas SMB-Erfahrung kannst du den Wert dann in 15-Minuten-Schritten erhöhen. Dabei solltest du immer genau beobachten, wie sich diese Veränderung auswirkt. Es wird davon abgeraten, den Wert auf über 90 Minuten zu stellen. Denn das würde dazu führen , dass der Algorythmus mit einer temporären 0 IE/h-Basalrate ("zero-temp") einen BZ-Abfall nicht mehr sicher abfangen könnte. Außerdem solltest du (gerade beim Testen) unbedingt Alarme verwenden, um vor BZ-Entgleisungen gewarnt zu werden.

Standardwert zu Beginn: 30 Min.

#### Aktiviere UAM
Wenn du diese Option aktivierst, dann kann der SMB unangekündigte Mahlzeiten erkennen. Beispielsweise, wenn du vergisst sie in  AndroidAPS einzugeben, dich verschätzt und eine zu geringe KH-Menge eingegeben hast oder wenn eine fett-eiweißlastige Mahlzeit länger wirkt als gedacht.

#### High temptarget raises sensitivity
Wenn du diese Option aktivierst, dann wird die Insulinempfindlichkeit erhöht, wenn du ein temporäres Ziel über 100 mg/dl bzw. 5,6 mmol/l setzt

#### Low temptarget lowers sensitivity
Wenn du diese Option aktivierst, dann wird die Insulinempfindlichkeit verringert, wenn du ein temporäres Ziel unter 100 mg/dl bzw. 5,6 mmol/l setzt

#### Erweriterte Einstellungen

**Verwende immer das kurze durchschnittliche Delta**
Wenn du dies aktivierst, dann verwendet AndroidAPS für die Berechnungen statt des aktuellen BZ-Wertes den durchschnittlichen BZ-Wert der letzten 15 Minuten (= kurzes durchschnittliches Delta). Dieser Durchschnittswert lässt den Loop bei ungefilterten Quellen mit Signalrauschen (also wenn vom CGM/FGM keine glatte Kurve ausgegeben wird) ruhiger laufen.

**Max daily safety multiplier**
Dies ist eine wichtige Sicherheitseinstellung. Sie begrenzt das maximale Basal-IOB auf die x-fache Menge deiner höchsten Basalrate. Beispiel: höchste Basalrate = 1.0 U/h, max daily safety multiplier = 3 > AndroidAPS kann höchstens bis zu einem Basal-IOB von 3.0 IE regeln. 

Standardwert: 3 (sollte nur in Ausnahmefällen verändert werden)

**Current Basal safety multiplier**
Dies ist eine wichtige Sicherheitseinstellung. Sie begrenzt das Basal-IOB auf die x-fache Menge der aktuell laufenden Basalrate. Dies ist wichtig, um Nutzer davor zu bewahren, zu viel Basal-Insulin zu verabreichen.   

Standardwert: 4 (sollte nur in Ausnahmefällen verändert werden)

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
 
**7. Objective: Aktiviere AMA**

  * Nun solltest du dich mit AAPS sicher fühlen und wissen, welche Einstellungen für deinen Diabetes am besten passen. 
  * Über einen Zeitraum von 14 Tagen kannst du den Advanced Meal Assist - AMA ausprobieren. Gehe dazu in den Konfigurations-Generator > APS und aktiviere OpenAPS AMA.

**8. Objective: Probiere den SMB aus**

  * Nun sollte AMA stabil laufen. Deine Blutzuckerwerte sollten auf Grund der feingetunten Faktoren und Sicherheitsvariablen gut eingestellt sein. 
  * Über einen Zeitraum von 14 Tagen kannst du den Advanced Meal Assist - AMA ausprobieren. Gehe dazu in den Konfigurations-Generator > APS und aktiviere OpenAPS SMB.

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

Gehe dazu in den Systemeinstellungen deines Android-Telefones zu Apps > AndroidAPS > Berechtigungen und aktiviere dort SMS.

In AndroidAPS gehe zu Konfigurations-Generator > Generell > SMS-Kommunikator  und trage unter Einstellungen (Zahnrädchen) die Telefonnummer(n) ein, die dazu berechtigt werden soll(en), Kommandos an AndroidAPS zu senden. 'Erlaube externe Befehle per SMS' muss außerdem aktiviert werden.

Sende von einem der berechtigten Telefone eine SMS an das Android-Handy, auf dem AndroidAPS installiert ist. Sende dazu eines der folgenden **fettgedruckten** Kommandos und das Handy wird mit einer Erfolgsmitteilung oder dem angeforderten Status antworten. 

* **BG**: Letzter Blutzucker 125 vor 4min, Delta: -12mg/dl, IOB: 0.20E (Bolus: 0.10E Basal: 0.10E)
* **LOOP STOP/DISABLE**: Das „Loopen“ wurde deaktiviert
* **LOOP START/ENABLE**: Das „Loopen“ wurde aktiviert.
* **LOOP STATUS**: Das „Loopen“ ist deaktiviert / Das „Loopen“ ist aktiviert / Pausiert (10 min)
* **LOOP SUSPEND 20**: Das „Loopen“ wird für 20 Minuten unterbrochen. 
* **LOOP RESUME**: Das „Loopen“ fortsetzen
* **TREATMENTS REFRESH**: Geräte aktualisieren 1 Empfänger
* **NSCLIENT RESTART**: NSCLIENT restarten 1 Empfänger
* **DANAR**: Letzte Verbindung: vor 1 Min. Temp: 0.00E/h @11:38 5/30min IOB: 0.5E Reserv: 34E Batt: 100
* **BASAL STOP/CANCEL**: Um die temporäre Basalrate zu stoppen, antworte mit dem Code EmF
* **BASAL 0.3**: Um eine Basalrate von 0.3E/h zu starten, antworte mit Code Swe, Ferngesteuerte Basalraten-Einstellungen sind nicht erlaubt (wenn ferngesteuerte Kommandos nicht erlaubt sind)
* **BOLUS 1.2**: Um einen Bolus vo 1.2E abzugeben, antworte mit Code Rrt, Ferngesteuerte Boli sind nicht erlaubt (wenn ferngesteuerte Kommandos nicht erlaubt sind)
* **CAL 126**: Um Kalibrierungswert von 126 zu senden, antworte mit Code Rrt, Kalibrierung gesendet (wenn xSrip installiert ist. Kallibrierungen zu akzeptieren, muss in xDrip+ aktiviert sein)

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
