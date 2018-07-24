# Was ist AndroidAPS?
AndroidAPS steht für "Android Artificial Pancreas System", ist also eine App für Android Smartphones, die als künstliche  Bauchspeicheldrüse fungiert. Sie kann mit bestimmten bluetoothfähigen Insulinpumpen und Blutzucker-Mess-Systemen kommunizieren. Mit Hilfe der OpenAPS-Algorithmen "Oref0"/"Oref1" ist die App in der Lage, den Blutzuckerspiegel bei insulinpflichtigem Diabetes automatisch zu regeln, sofern alle gegessenen Kohlenhydrate eingegeben werden (sog. Hybrid closed loop).

Das Programm steht nicht als fertige App und auch nicht im Google Play Store zur Verfügung. Es gibt auch keinen kommerziellen Support. Dafür gibt es aber eine sehr rege Community, die Dir helfen kann. Informationen wie Du sie kontaktieren kannst, findest Du [hier](http://androidaps.readthedocs.io/en/latest/DE/community.html). Der Quellcode ist jedoch kostenlos und frei verfügbar. Daraus können Interessierte sich im "Eigenbau" selbst und auf eigene Verantwortung die App erstellen (strictly do it yourself - DIY). 

Ein konkretes Beispiel, wie du dir ein Closed loop System selbst bauen kannst, findest du unter [http://androidaps.readthedocs.io/en/latest/DE/Galaxy-S7-DanaR-Dexcom-G5-und-SWR50.html](http://androidaps.readthedocs.io/en/latest/DE/Galaxy-S7-DanaR-Dexcom-G5-und-SWR50.html)

**Ziele**
Die Ziele, die zur Entstehung führten:

- App mit „modularer Basis“, es soll leicht sein, neue Module hinzuzufügen
- Eine App, bei der es bei der Erstellung möglich ist zu entscheiden, welche Funktionen die App später hat (Wear Control, NsClient)
- Eine App, die es ermöglicht, einen Open- oder Closed-Loop-Modus zu wählen
- Eine App, die die Funktionen eines APS (Automatic Pancreas System) visualisiert (Parameter, Ergebnis und Umsetzung)
- Die Möglichkeit, andere Algorithmen zu verwenden
- Eine „Virtuelle Pumpe“, mit der man „herumspielen“ kann, bevor man startet
- Eine App mit enger Nightscout-Integration
- Die Möglichkeit zum Hinzufügen/Entfernen von Beschränkungen
- Eine App, die alles enthält, um mit dem Diabetes klar zu kommen (APS+Nightscout)

**Was man benötigt**
Um AndroidAPS nutzen zu können, solltest du insulinpflichtiger Diabetiker sein ;-) und brauchst außerdem folgende Komponenten:

- **Android Smartphone** (5.1 oder neuer). 
- **loopfähige Insulinpumpe** (für Closed Loop), z.B. DanaR, DanaRS, Akku-Chek Combo, Akku-Chek Inside (in der Entwicklung) oder - **andere Insulinpumpe/ICT** (für Open Loop mit virtueller Pumpe)
- **Analog-Insulin**
- **kontinuierliches Blutzuckermess-System** (CGM/FGM), z.B. Dexcom G4/G5/G6, Freestyle Libre mit Bluetooth-Aufsatz, Eversense oder Medtronic Guardian
- **AndroidAPS** zur Auswertung aller Daten und Steuerung deines Diabetesmanagements
- **App zur Weitergabe der BZ-Daten an AndroidAPS**, z.B. xDrip/xDrip+, Dexcom G5 App (patched), Glimp, PoctechApp, 600SeriesAndroidUploader
- **Smartwatch (optional)** zur Überwachung und Steuerung von AndroidAPS
- **Nightscout-Website** zum Auswerten der Daten und Erstellen von Profilen (Nightscout 0.10.2 oder aktueller)
- **PC-Software "Android Studio"** zum Erstellen von AndroidAPS aus dem Quellcode
- **Gute Diabetes-Therapieeinstellungen**

## Sicherheitshinweise

* AndroidAPS ist nur ein Programm zur Unterstützung deiner Diabetestherapie, nicht um den Diabetes zu vergessen!
* Vertraue niemals blind auf ein Gerät bei der Anpassung der Dosierung. Kontrolliere die Ergebnisse und verstehe, wie der Algorithmus auf diese kommt.
* Dein Smartphone, welches die Pumpe kontrolliert, sollte ausschließlich für diese Aufgabe verwendet werden, installiere keine Apps, um die Gefahr von Trojanern zu minimieren.
* Installiere regelmäßig alle Sicherheitsupdates, damit du vor Angriffen bestmöglich geschützt bist!
* Wenn du die SMS-Steuerung verwendest, behalte im Hinterkopf, was passieren könnte, falls das Handy, welches zur Fernsteuerung verwendet wird, gestohlen wird. Schütze dieses mit einem sicheren Code. Seit AndroidAPS 1.1 wirst du über wichtige ferngesteuerte Aktionen (z.B. Bolus, Profiländerung) eine SMS erhalten. Deswegen solltest du mindestens 2 Telefonnummern hinzufügen (für den Fall, dass ein Handy gestohlen wird).

## Screenshots

![AndroidAPS Home-Screen Screenshot](https://img1.picload.org/image/dgdgcorw/aaps-overview-small.jpg.png)

## Android Smartphone
Du benötigst ein Smartphone, auf dem das Google-Betriebssystem Android 5.1 oder neuer installiert ist. Manche Smartphones können schon im Lieferzustand loopen, auf andere muss man erst von Hand eine neue Android-Version (LineageOS) aufspielen, z.B. fast immer, wenn man mit der Akku-Chek Combo loopen will.

Eine Liste mit geeigneten Android-Smartphones befindet sich hier: [https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435)

Du kannst Filter verwenden, um in der Datei einzelne Pumpen oder Smartphones anzuzeigen. Bitte setze dies aber am Ende wieder zurück, damit der nächste Leser wieder alle Angaben findet.

## Insulinpumpe
AndroidAPS kann derzeit mit folgenden Insulinpumpen im Closed Loop Modus genutzt werden:

* DanaR
* DanaRS
* Akku-Chek Combo
* Akku-Chek Insight (demnächst)
* Omnipod (`in der Entwicklung <http://www.openomni.org/>`_)

In Deutschland sind alle genannten "loopbaren" Insulinpumpen auf dem Markt erhältlich. Unter https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0 finden sich Bezugsquellen. Die Liste darf jederzeit ergänzt werden. Informationen über weitere in Zukunft ggf. loopbare Insulinpumpen: http://androidaps.readthedocs.io/en/latest/Getting-Started/Future-possible-Pump-Drivers.html (englisch)

Wenn du eine **nicht unterstützte Pumpe** hast oder mit **Intensivierter konventioneller Therape (ICT)** eingestellt bist, dann kannst du AndoridAPS (in Verbindung mit einem CGM/FGM) zumindest im  `Open Loop <http://androidaps.readthedocs.io/en/latest/DE/konfigurations-generator.html#open-loop>`_ Modus verwenden. In diesem Fall musst du aber alle Therapievorschläge der App von Hand umsetzen.

**Dana oder Combo?**

Die **Akku-Chek Combo** ist zwar eine solide Pumpe. Und loopbar. Sie hat auch den Vorteil, dass die Auswahl an Kathetern wegen des Standard Luer-Lock-Anschlusses groß ist. Und sie verwendet Standard-Batterien, die rund um die Uhr an jeder Tankstelle erhältlich sind. Im Notfall kannst du sie sogar aus der Fernbedienung in deinem Hotelzimmer "ausleihen" ;-)

Die **DanaR und die DanaRS** haben beim Loopen jedoch einige Vorteile:

* Der Hersteller Sooil hat geäußert, dass die Steuerung der Pumpe mit einem Smartphone (ohne explizit das Loopen zu erwähnen) nicht die gegen die Garantiebedingungen verstößt. 
* IME-DC äußerte, sie würden im Garantiefall eine Ersatzpumpe zur Verfügung stellen und die defekte Pumpe direkt zu Sooil schicken. So würden sie gar nicht wissen, ob du Looper bist oder nicht. Roche schließt dagegen jegliche Nutzung der Pumpen aus, die nicht in der Bedienungsanleitung beschrieben ist.
* Die DanaR/RS kann sich mit fast jedem Smartphone verbinden, auf dem das Betriebssystem Google Android >= 5.1 installiert ist. Ein Austausch der werksseitigen Smartphone-Software (z.B. durch das Lineage Betriebssystem) ist nicht nötig. Wenn dein Smartphone kaputt geht oder gestohlen wird, kannst du auf einem anderen / neuen Smartphone sehr schnell die Pumpe wieder steuern. Mit der Combo ist das nicht so einfach, jedenfalls nicht solange Android 8.1 nur auf wenigen Smartphones installiert ist.
* Das erste Einrichten der Verbindung zwischen der DanaR/RS und dem Smartphone ist einfacher. Allerdings ist dieser Schritt normalerweise nur bei der Ersteinrichtung erforderlich.
* Bislang arbeitet die Combo mit screen parsing. Grundsätzlich funktioniert das gut, aber es ist leider langsam. Beim Loopen ist das nicht so schlimm, denn das läuft alles im Hintergrund ab. Das führt aber dazu, dass eine bestehende Bluetooth-Verbindung leichter abgebrochen wird. Das kann unpraktisch sein, wenn du dich während eines Bolus-Prozesses zu weit vom Smartphone entfernst (z.B. beim Kochen).
* Die Combo virbiert am Ende jeder TBR, die DanaR vibriert (oder piept) bei Abgabe eines SMB. In der Nacht wird der Loop meistens eher TBR setzen statt SMB. Die DanaRS kann so eingestellt werden, dass sie weder bei TBR, noch bei SMB vibriert oder piept.
* Die History kann auf der DanaRS in wenigen Sekunden mit COB ausgelesen werden-. Deshalb können die Smartphones offline leicht ausgewechselt werden. Sobald einige CGM-Daten verfügbar sind, kann das Loopen fortgesetzt werden.
* Alle Pumpen, die AndroidAPS unterstützt, sind (jedenfalls bei Auslieferung) wasserdicht. Nur die DanaR/RS garantiert auch während der Nutzung Wasserdichtigkeit durch das abgedichtete Batteriefach und das Reservoir-System.

## Analog-Insulin
-----------
Du solltest ein Analog-Insulin verwenden. Die Wirkprofile folgender Insulinarten sind hinterlegt:

* Humalog 
* Novorapid
* Novolog
* FIASP

Für andere Insuline oder Mischungen verschiedener Insuline kannst du in AndroidAPS auch manuell das Wirkmaximum angeben (Wirkprofil "free-peak Oref").

## BZ-Quelle (CGM/FGM)
AndroidAPS benötigt alle 5 Minuten einen aktuellen BZ-Wert. Dieser kann vom Mess-System (ggf. über zusätzliche Apps wie xDrip+ oder LibreReader) entweder direkt an AndroidAPS geliefert werden (Offline-Loop) oder zunächst zur Nightscout-Website hochgeladen werden, damit AndroidAPS sich die Werte von dort wieder zieht (Online-Loop). Es empfiehlt sich wegen der Instabilität mobiler Internetverbindungen grundsätzlich, einen Offline-Loop zu bevorzugen.

## Android Smartwatch (optional)
Nicht zwingend nötig, aber für den Alltag sehr hilfreich ist eine Smartwatch. Mit Uhren, die **Android WearOS** als Betriebssystem haben, ist es nämlich möglich, den Status des Loop zu überwachen und auch Bolus abzugeben. Für die Smartwatch gibt es verschiedene Ziffernblätter, die folgende Informationen anzeigen können:

* aktueller BZ-Wert mit 15' Trend und Delta
* Vorhersage des BZ-Verlaufs
* Bolus-IOB
* Basal-IOB
* COB
* BGl
* Aktive temporäre Basalrate
* Status von Loop und Pumpe

Außedem kannst Du über die Uhr folgende Aktionen auslösen:

* Temp. Target setzen
* Extended Carbs eingeben
* Bolus abgeben
* Bolus-Rechner verwenden
* Infusionset füllen 

Um diese Möglichkeit zu nutzen, musst du beim Kompilieren des Quellcodes in der PC-Software "Android Studio" die Build Variante "full" wählen. In AndroidAPS musst du dann im Konfigurations-Generator > Generell noch "Wear" aktivieren. Stelle sicher, dass AndroidAPS die Erlaubnis hat, um Benachrichtigungen auf der Uhr anzuzeigen (sonst kann man die Eingaben nicht bestätigen). Die Eingaben werden aktiviert, indem man die Benachrichtigung auf der Uhr öffnet, einmal wischt und bestätigt. Um schneller zu AndroidAPS zu kommen, kannst du den angezeigten BZ doppelt anklicken. Wenn man zwei mal auf die BZ-Kurve tippt, ändert sich der angezeigte Zeitraum.

In Android Wear 2.0 installiert sich das Watchface nicht von alleine. Du musst in den Playstore der Uhr gehen und unter der Kategorie "installierte Apps auf dem Handy" AAPS aktivieren. Aktiviere ebenalls Auto Update.

Falls du ein anderes System zum loopen verwendest und deine Daten oder die deines Kindes/Verwandten auf der Uhr sehen möchtest, kannst du auch einfach nur die Watch APK kompilieren. Wähle dazu in Android Studio die Build Variante "nsclient".

**Pebble** Nutzer können das [Urchin Watchface](https://github.com/mddub/urchin-cgm/) benutzen, um ihre Loop Daten (vorausgesetzt sie sind auf Nightscout) zu sehen, aber mit dieser Methode ist es nicht möglich die Pumpe und AndroidAPS zu steuern. Du kannst Felder wählen um z.B. IOB, aktiver temp. Basalrate und Vorhersage anzeigen zu lassen. Falls du open loopst, kannst du [IFTTT](https://ifttt.com/) benutzen um ein kleines Programm zu erstellen, welches (wenn eine Benachrichtigung von AndroidAPS kommt) eine SMS oder Benachrichtigung anzeigt.

## Nightscout-Website
Du musst eine Nightscout-Webiste haben. Dies ist eine Datenbank im Internet, auf die sämtliche BZ- und Behandlungsdaten hochgeladen werden. Dort kannst du auch verschiedene Profile (Basalschemen, Korrekturfaktoren etc.) anlegen und ändern, die dann automatisch in AndroidAPS erscheinen. Die Website dieser Datenbank erlaubt dir zahlreiche statistische Auswertungen zur Optimierung deiner Diabetestherapie, Freigabe der Daten für Freunde oder Familienmitglieder (Follower) und Vorlage beim Diabetologen.

Es gibt folgende Möglichkeiten, solch eine Seite zu erstellen und zu betreiben:

### ns.10be.de
Dieser Server steht in Deutschland und wird von Looper Martin Schiftan derzeit kostenlos angeboten. Sämtliche Einstellungen lassen sich auf der Administrations-Website komfortabel vornehmen. Die Basalraten werden dort automatisch mit Autotune ausgewertet.

http://ns.10be.de/de/index.html 

### Heroku
Über Heroku kannst du von Hand selbst eine Nightscout-Website mit Datenbank hosten. Die kostenlosen Server stehen im Ausland und müssen von Hand konfiguriert werden.

#### Heroku-Seite einrichten
http://www.heroku.com
http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku
  
Tipp: Alle Zugangsdaten auf einem Zettel oder in einer Textdatei notieren!

#### Heroku-Variablen einrichten

* Auf https://herokuapp.com/ einloggen
* App-Namen auswählen
* Settings > Schaltfläche "Reveal Config Vars" anklicken
* Variablen hinzufügen oder wie folgt ändern:

  * ENABLE = `careportal food cage sage iage iob cob basal rawbg pushover bgi pump openaps openapsbasal loop`
  * DEVICESTATUS_ADVANCED = `true`
  * PUMP_FIELDS = `reservoir battery clock`

Ein Alarm bei niedrigem Pumpen-Batteriestand in % kann wie folgt aktiviert werden:

* PUMP_WARN_BATT_P = `51`
* PUMP_URGENT_BATT_P = `26`

## PC-Software
Der Quellcode von AndroidAPS, der in Github verfügbar ist, muss selbst in eine lauffähige Smartphone-App umgewandelt werden (do-it-yourself). Um die AndroidAPS-App aus dem Quellcode zu erstellen (kompilieren), benötigst du auf dem Computer die Software Android Studio:

https://developer.android.com/studio/install

## Diabetes-Therapiedaten
AndroidAPS kann nur dann gut laufen, wenn deine Diabetes-Therapiedaten optimal eingstellt sind. Du musst folgende Variablen ermitteln (ggf. stündlich anders, so dass du ggf. 3x24 Faktoren pro Tag hast):

### Basalraten
Die Basalraten müssen so fein abgestimmt sein, dass sie über den ganzen Tag verteilt den BZ-Wert konstant im unteren Zielbereich halten. Sowohl Hypos, als auf hohe Werte dürfen nicht vorkommen, sonst läuft der Loop nicht richtig. Am besten ist es, mehrere Basalratentests durchzuführen und das Schema mit dem Diabetologen oder der Diafee zu besprechen.

### ISF
Der Insulinsensitivitätsfaktor (ISF) gibt an, um wie viele mg/dl oder mmol/l der BZ-Wert durch 1 IE Insulin gesenkt wird.  

### IC
Der IC (Insulin-Carb-Ratio - Insulin-Kohlenhydrat-Faktor) bestimmt, wieviel Gramm Kohlenhydrate durch 1 IE Insulin abgedeckt werden.

### DIA (oder auch "Insulin-End-Time")
DIA steht für "duration of insulin action", gibt also an,  wie lange das Insulin im Körper aktiv ist. Bei vielen ist zwar nach 3-4 Stunden die Hauptwirkung vorbei und die Restemenge eher gering. Deswegen wird in der Praxis oder bei Bolusrechnern mit linearer Insulinwirkkurve häufig ein solcher Wert verwendet. Diese Restmenge kann sich dann z.B. beim Sport doch noch bemerkbar machen. AndroidAPS verwendet physiologischere Kurven und kann auch diese Restmengen gut berechnen. Besonders bei der Überlagerung vieler einzelner Aktionen ist dies wichtig. Daher verwendet AndroidAPS minimum 5 Stunden als DIA.
Wichtiger als die exakte Länge des DIA ist das Wirkmaximum das durch Auswahl des korrekten Wirk-Profils festgelegt wird, solange der DIA genügend groß ist.

Standardwert: 5 Stunden


## Glossar
Für das meiste "Looper Vokabular": https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html (auf englisch)



.. note:: 
      **Disclaimer und Warnung**

      * Sämtliche Informationen, Gedanken und der Quellcode sind nur für informatorische und wissenschaftliche Zwecke. Nightscout erfüllt keinerlei Anforderungen des Datenschutzes im Gesundheitswesen. Verwenden Sie Nightscout und AndroidAPS auf eigenes Risiko und setzen Sie es nicht ein, um Behandlungsentscheidungen zu treffen.

      * Bei Nutzung des Quellcodes von github.com bestehen keinerlei Gewährleistungs- und Garantieansprüche. Es gibt keinen Support. Im Übrigen wird auf die Lizenz verwiesen, die im Repository abgerufen werden kann.

      * Sämtliche Produkt- und Herstellernamen, Handelsmarken, Servicemarken, geschützte Handelsmarken und geschützte Servicemarken werden nur zu Informationszwecken genutzt und nicht für Werbung oder Marketing.

      * Bitte beachten: Dieses Projekt steht in keinerlei Verbindung mit: SOOIL (http://www.sooil.com/eng/), Dexcom (http://www.dexcom.com/), Accu-Chek Roche Diabetes Care (http://www.accu-chek.com/).
