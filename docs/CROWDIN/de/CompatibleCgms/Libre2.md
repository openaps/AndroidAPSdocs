- - -
orphan: true
- - -

# Freestyle Libre 2 und 2+

Der Freestyle Libre 2 Sensor ist mittlerweile (auch mit der offiziellen App) ein echtes CGM. Dennoch kann LibreLink auch weiterhin keine Daten an AAPS senden. Es gibt aber verschiedene Lösungen für den Einsatz mit AAPS.

## 1. Verwende einen Bluetooth-Transmitter und OOP

Bluetooth transmitters can be used with the Libre 2 (EU) or 2+ (EU) and an out of process algorithm app. Glukosewerte können - wie beim [Libre 1](./Libre1.md) - alle 5 Minuten empfangen werden.

Prüfe im Vorfeld, ob der Bluetooth-Transmitter und die notwendige App, sowohl mit Deinem Sensor als auch mit xDrip+ kompatibel ist (ältere und auch aktuelle Blucons sind nicht kompatibel, Miaomiao 1 benötigt Firmwareversion 39 und Miaomiao 2 Firmwareversion 7).

Die Libre2 OOP gibt die gleichen BZ-Messwerte aus wie das Lesegerät oder die LibreLink-App über einen NFC-Scan. AAPS glättet Libre2 Daten über 10-25 Minuten, um Sprünge zu vermeiden. Mehr Details findest Du im Abschnitt [Glättung der Werte & Rohdaten](#libre2-value-smoothing-raw-values).  OOP übergibt alle fünf Minuten einen Wert. Dieser entspricht dem Durchschnitt der letzten fünf Minuten. Daher sind die BZ-Werte nicht so glatt, stimmen aber mit dem Lesegerät überein und folgen den "echten" BZ-Entwicklungen schneller. Wenn Du mit OOP loppen möchtest, aktiviere alle Glättungseinstellungen in xDrip+.

Es psricht viel dafür einen Bluetooth-Transmitter zu nutzen:

-   Du kannst verschiedene OOP2-Kalibrierungsstrategien wählen (1): den Wert "No calibration", oder kalibriere den Sensor wie einen Libre 1 mit "Calibrate based on raw" oder kalibriere den Wert mit "Calibrate based on glucose".  
  Stelle sicher, dass OOP1 deaktiviert ist (2).

    → Hamburger Menü → Einstellungen → Erweiterte Einstellungen → Andere verschiedene Einstellungen

![OOP2 Calibration](../images/Libre2_OOP2Calibration.png)

-   Wie auch schon der Libre 1 zuvor, kann auch der Libre 2 14,5 Tage genutzt werden
-   Das nachträgliche Auffüllen der Werte (backfilling) der letzten acht Stunden wird vollständig unterstützt

Bemerkung: Der Transmitter kann parallel zur LibreLink-App verwendet werden.

## 2. Nutzen der Direktverbindung zu xDrip+

```{admonition} Libre 2 EU only
:class: warning
xDrip+ unterstützt keine direkte Verbindung zum Libre 2 US und AUS.
Nur Libre 2 und 2+ **EU** Modelle.
```

- Follow [these instructions](https://www.minimallooper.com/post/how-to-setup-freestyle-libre-2-and-oop2-to-use-a-native-bluetooth-connection-in-xdrip) to setup xDrip+ but make sure to download [the latest OOP2](https://drive.google.com/file/d/1f1VHW2I8w7Xe3kSQqdaY3kihPLs47ILS/view) as the one in the document is obsolete.
- Folge den Anweisungen zum Einrichten auf der [xDrip+-Einstellungen Seite](../CompatibleCgms/xDrip.md).

-   Wähle xDrip+ in der [KONFIGURATION, BZ-Quelle](#Config-Builder-bg-source) aus.

## 3. Diabox nutzen

- Installiere [Diabox](https://www.bubblesmartreader.com/_files/ugd/6afd37_f183eabd4fbd44fcac4b1926a79b094f.pdf). In den Einstellungen, Integration, aktiviere Sie Datenfreigabe für andere Apps.

![Diabox](../images/Diabox.png)

- Wähle xDrip+ in der [KONFIGURATION, BZ-Quelle](#Config-Builder-bg-source) aus.

## 4. Juggluco nutzen

- Lade die Juggluco-App [hier](https://www.juggluco.nl/Juggluco/download.html) herunter und installiere sie.
- Folge [dieser](https://www.juggluco.nl/Juggluco/index.html) Anleitung
- Aktiviere in den Einstellungen den xDrip+ Broadcast (der Daten an AAPS, aber nicht an xDrip+ sendet).

![Juggluco broadcast to AAPS](../images/Juggluco_AAPS.png)

- Wähle xDrip+ in der [KONFIGURATION, BZ-Quelle](#Config-Builder-bg-source) aus.

```{admonition} Use with xDrip+
:class: note
Du kannst Juggluco so einstellen, dass Werte direkt an xDrip+ übertragen (broadcast) werden. In diesem Fall sollte der xDrip+ Broadcast ausgeschaltet werden. Auf diese Weise kannst Du kalibrieren (siehe hier) und vermeiden, dass minütlich Werte an AAPS gesendet werden.  
![Juggluco Broadcast an xDrip+](../images/Juggluco_xDrip.png)  
Um Daten von Juggluco empfangen zu können, muss in xDrip+ die Datenquelle auf 'Libre (patched App)' umgestellt werden.  
```

(libre2-patched-librelink-app-with-xdrip)=
## 5. Nutze xDrip+ mit der gepatchten LibreLink-App

```{admonition} Libre 2 EU only
:class: warning
Die gepatchte App ist eine alte Version (22.4.2019) und ist möglicherweise nicht mit den neuesten Android Releases kompatibel.  
```

### Schritt 1: Erstelle die gepatchte App

Aus rechtlichen Gründen muss das sogenannte "Patchen" von Dir selbst erledigt werden. Verwende Suchmaschinen, um die entsprechenden Links zu finden. Es gibt im Wesentlichen zwei Varianten: Die empfohlene originale gepatchte App blockiert sämtlichen Internet-Traffic, um Tracking zu verhindern. Die andere Variante unterstützt LibreView.

Die gepatchte App muss anstelle der ursprünglichen App installiert werden. Der nächste Sensor wird die aktuellen BG-Werte an die xDrip+ App übermitteln, die über Bluetooth auf Deinem Smartphone läuft.

Wichtig: Um mögliche Probleme zu vermeiden, kann es hilfreich sein, zuerst die original LibreLink App auf einem Smartphone, das NFC beherrscht, zu installieren und dann wieder zu deinstallieren. NFC muss eingeschaltet sein. Das verbraucht keine zusätzliche Energie. Erst dann die gepatchte App installieren.

Die gepatchte App kann durch die Vordergrund-Autorisierung Benachrichtigung identifiziert werden. Die Vordergrund-Berechtigung verbessert die Verbindungsstabilität gegenüber der Original-App, die diese Berechtigung nicht nutzt, deutlich.

![LibreLink Foreground Service](../images/Libre2_ForegroundServiceNotification.png)

Weitere Hinweise könnten das Linux Pinguin Logo im Drei-Punkte-Menü -> Info oder die Schriftart der gepatchten App sein (2), die sich von der originalen App (1) unterscheidet. Diese Kriterien sind optional und abhängig von der gewünschten App-Quelle.

![LibreLink Font Check](../images/LibreLinkPatchedCheck.png)

Stelle sicher, dass NFC aktiviert ist, erlaube den Zugriff auf Speicher und Standort für die gepatchte App, aktiviere die automatische Zeiteinstellung und den automatischen Zeitzonenwechsel und stelle mindestens einen Alarm in der gepatchten App ein.

### Schritt 2: Starte den Sensor mit der gepatchten App

Starte nun den Libre2 Sensor, in dem Du ihn einfach mit der gepatchten App scannst. Stelle sicher, dass alle Einstellungen festgelegt wurden.

Zwingend erforderliche Einstellungen für den erfolgreichen Sensorstart:

-   NFC und Bluetooth aktiviert
-   Speicherberechtigung und Standortfreigabe
-   Standortdienst aktiviert
-   automatische Zeiteinstellung und Zeitzonenwechsel
-   mind. ein Alarm in der gepatchten App eingestellt

Beachte bitte, dass der Standortdienst ein zentraler Baustein ist. Dies ist nicht die Berechtigung zum Standort der App, die ebenfalls gesetzt werden muss!

![LibreLink permissions memory & location](../images/Libre2_AppPermissionsAndLocation.png)

![automatic time and time zone + alarm settings](../images/Libre2_DateTimeAlarms.png)

Sobald der Sensor mit der gepatchten App gestartet wurde, kann er nicht mit einer anderen App/einem anderen Smartphone verbunden werden. Wenn Du die gepatchte App deinstallierst, verlierst Du Alarme und die kontinuierliche Messung der Glukosewerte.

Der erste Verbindungsaufbau ist wichtig. Die LibreLink App versucht alle 30 Sekunden eine drahtlose Verbindung zum Sensor aufzubauen. Falls eine oder mehrere der erforderlichen Einstellungen falsch gesetzt sind, müssen diese angepasst werden. Dafür gibt es keine Zeitbeschränkung. Der Sensor versucht ständig, die Verbindung aufzubauen. Auch falls es einige Stunden dauert. Sei geduldig und probiere verschiedene Einstellungen aus, bevor Du auch nur daran denkst, den Sensor zu wechseln.

Solange du ein rotes Ausrufezeichen siehst ("!") Solange Du ein rotes Ausrufezeichen („!“) in der oberen linken Ecke des LibreLink-Startbildschirms siehst, besteht keine Verbindung oder eine andere Einstellung blockiert LibreLink, um Alarme zu melden. Überprüfe, ob der Ton eingeschaltet ist und die Blockierung aller Arten von Benachrichtigungen von Apps deaktiviert sind. Erst wenn das Ausrufezeichen weg ist, steht die Verbindung und Blutzuckerwerte werden an das Smartphone gesendet. Das sollte nach maximal 5 Minuten passiert sein.

![LibreLink no connection](../images/Libre2_ExclamationMark.png)

Wenn das Ausrufezeichen bleibt oder Du eine Fehlermeldung erhältst, kann dies mehrere Gründe haben:

-   Die Android-Standortfreigabe ist nicht erteilt - bitte in den Systemeinstellungen erteilen
-   Automatische Zeitzone und Uhrzeit nicht gesetzt - bitte entsprechend die Einstellungen ändern
-   Alarme einschalten - mindestens einer der drei Alarme muss aktiviert sein
-   Bluetooth ist ausgeschaltet - bitte einschalten
-   Töne sind blockiert
-   App-Benachrichtigungen werden blockiert
-   Benachrichtigung inaktiver Bildschirm ist blockiert

Ein Handyneustart kann helfen, muss ggf. mehrmals gemacht werden. Sobald die Verbindung steht, verschwindet das rote Ausrufezeichen und der wichtigste Schritt ist geschafft. Abhängig von den Systemeinstellungen kann es passieren, dass das Ausrufezeichen stehen bleibt, obwohl Du schon Werte erhältst. In beiden Fällen funktioniert es. Sensor und Smartphone sind nun verbunden, alle Minute wird ein Blutzuckerwert übertragen.

![LibreLink Verbindung hergestellt](../images/Libre2_Connected.png)

In seltenen Fällen kann es helfen den Bluetooth-Cache zu leeren und/oder alle Netzwerkverbindungen über das Systemmenü zurückzusetzen. Dadurch werden alle verbundenen Bluetooth-Geräte entfernt und dies kann helfen die Bluetooth-Verbindung zum Libre sauber herzustellen. Das ist ein sicheres Vorgehen, da der gestartete Sensor von der gepatchten LibreLink-App gespeichert und wiedererkannt wird. Hier muss nichts mehr zusätzlich getan werden. Warte bis sich die gepatchte App mit dem Sensor verbindet.

Nachdem die Verbindung erfolgreich gestartet wurde, kannst Du die Einstellungen des Smartphones bei Bedarf wieder ändern. Dies wird zwar nicht empfohlen, aber ggf. möchtest Du Akkuleistung sparen. Standortfreigabe (GPS) kann ausgeschaltet werden, Lautstärke kann auf Null gesetzt werden oder auch die Alarme können wieder abgeschaltet werden. Die Blutzuckerwerte werden trotzdem übertragen.

Beim Start des nächsten Sensors müssen jedoch alle Einstellungen wieder gesetzt sein!

Hinweis: Die gepatchte App erfordert, dass alle verpflichtenden Einstellungen während des WarmUps aktiviert sind, um erfolgreich eine Verbindung herstellen zu können. Für die 14 Tage des Betriebs sind sie nicht erforderlich. Bei Problemen mit dem Sensor-Start dürfte in den meisten Fällen der Standortdienst deaktiviert sein. Bei Android ist ein ordnungsgemäßer Bluetooth-Betrieb erforderlich, um eine Verbindung herstellen zu können. Siehe dazu auch Googles Android-Dokumentation.

Während der 14 Tage kannst Du parallel ein oder mehrere NFC-fähige Smartphones (nicht jedoch das Lesegerät!) mit der originalen LibreLink App verwenden, um den Libre mittels NFC zu scannen. Es gibt keine zeitliche Begrenzung, um damit zu beginnen. Du könntest ein zweites Smartphone zum Beispiel auch erst am fünften Tag oder so nutzen. Mit den Zusatzsmartphones können die Werte in die Abbott Cloud (LibreView) hochgeladen werden. LibreView kann Berichte für Dein Diabetes-Team erzeugen.

Beachte bitte, dass die originale gepatchte App **keine Internet-Verbindung** hat, um Tracking zu verhindern.

Es gibt jedoch eine Variante der gepatchten App, die LibreView mit aktivierter Internetverbindung unterstützt. In diesem Fall werden Deine Daten in die Abbott Cloud übertragen. Das ermöglicht, dass Dein Diabetes-Team auf die Daten und Berichte zugreifen kann. Mit dieser Variante ist es auch möglich, die Alarme eines bereits laufenden Sensors auf ein anderes Endgerät, mit dem der Sensor nicht gestartet wurde, zu übertragen. Anleitungen findest Du in deutschen Diabetes-Foren.

### Schritt 3: Installieren und konfigurieren der xDrip+ App

Die Blutzuckerwerte werden von der xDrip + App auf dem Smartphone empfangen.

-   Du kannst die [latest APK (stable)](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk) einfach herunterladen, es sei denn, Du benötigst aktuelle Funktionen, in diesem Fall solltest Du den neuesten [Nightly Snapshot](https://github.com/NightscoutFoundation/xDrip/releases) verwenden.
-   Wähle in xDrip+ [Libre (patched app) als Datenquelle](#xdrip-libre2-patched-app) aus.
-   Folge den Anweisungen zum Einrichten auf der [xDrip+-Einstellungen Seite](../CompatibleCgms/xDrip.md).

### Schritt 4: Sensor starten

- → Hamburger-Menü (1) → Sensor starten (2) → Sensor starten (3) → Antwort "Nicht heute" (4).

![xDrip+ Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)

Damit wird der Libre2 Sensor nicht gestartet und wird auch kein Datenaustausch möglich. Damit soll xDrip+ einfach nur mitgeteilt werden, dass ein neuer Sensor Blutzuckerwerte liefert. Wenn verfügbar, gib zwei blutige Messwerte für die Anfangskalibrierung ein. Nun sollten die Blutzuckerwerte alle 5 Minuten in xDrip+ angezeigt werden. Übersprungene Werte, weil Du zum Beispiel zu weit von Deinem Telefon entfernt warst, werden nicht nachgefüllt.

Nach einem Sensorwechsel erkennt xDrip+ den neuen Sensor automatisch und löscht alle Kalibrierungsdaten. Du kannst nach der Aktivierung blutig messen und eine neue erste Kalibrierung hinzufügen.

### Schritt 5: AAPS konfigurieren

-   Öffne in AAPS die KONFIGURATION > BZ-Quelle und aktiviere "xDrip+ BZ".

![xDrip+ BZ Quelle](../images/ConfBuild_BG_xDrip.png)

-   Falls AAPS im Flugmodus keine Glukosewerte bekommt, nutze "Identify receiver" wie auf der [Seite xDrip+ Einstellungen](#xdrip-identify-receiver) beschrieben.

(Libre2-experiences-and-troubleshooting)=
### Erfahrungen und Troubleshooting

#### Verbindung

Die Konnektivität ist für die meisten Smartphones (mit Ausnahme von Huawei) gut. Die Verbindung kann durchaus einmal abreißen, wenn sich der Sensor auf der einen Körperseite, das Handy auf der anderen in der Hosentasche befindet oder wenn man im Freien unterwegs ist. Trage Dein Smartphone auf der Sensorseite Deines Körpers. In Räumen, wo sich Bluetooth über Reflektionen ausbreitet, sollten keine Probleme auftreten. Bei Verbindungsproblemen bitte ein anderes Telefon testen. Es kann auch helfen, den Sensor so zu setzen, dass die interne Bluetooth-Antenne nach unten zeigt. Der Schlitz auf dem Applikator muss beim Setzen des Sensors nach unten zeigen.

(libre2-value-smoothing-raw-values)=
#### Glättung der Werte & Rohdaten

Technisch wird alle Minute der aktuelle Blutzucker-Wert an xDrip+ übertragen. Daraus wird standardmäßig mit einem gewichteten Mittel über die letzten 25 Minuten ein geglätteter Wert errechnet. Du kannst die Zeitspanne im NFC-Scan-Funktionen-Menü ändern.

→ Hamburger-Menü → Einstellungen → NFC-Scan-Funktionen → Libre3-Daten glätten, wenn Methode xxx verwendet wird

![xDrip+ advanced settings Libre 2 & Rohdaten](../images/xDrip_Libre3_Smooth.png)

Dies ist zwingend erforderlich um damit zu loopen. Die Kurven sehen glatt aus und die Loopergebnisse sind prima. Die Rohwerte, die den Alarmen zugrunde liegen, schwanken ein wenig mehr, entsprechen aber den Werten, die auch der Reader anzeigt. Man kann zusätzlich die Rohwerte im xDrip+ Graph anzeigen lassen, um bei schnellen Veränderungen rechtzeitig reagieren zu können. Dazu bitte Less Common Settings->Advanced Settings for Libre2->show Raw values anschalten". Dann werden zusätzlich Rohwerte als kleine weiße Punkte angezeigt und zusätzliche Sensorinformationen sind im Systemmenü verfügbar.

Die Rohwerte sind sehr hilfreich, wenn sich der Blutzuckerwert schnell ändert. Auch wenn die einzelnen Punkte viel mehr springen, wirst Du die Tendenz deutlich besser erkennen als bei der geglätteten Linie und kannst so bessere Therapieentscheidungen treffen.

→ Hamburger-Menü → Einstellungen → Erweiterte Einstellungen → Erweiterte Einstellungen für Libre 2

![xDrip+ advanced settings Libre 2 & Rohdaten](../images/Libre2_RawValues.png)

#### Sensorlaufzeit

Die Sensorlaufzeit ist fix 14 Tage. Die 12 extra Stunden des Libre1 existieren nicht mehr. Aktiviert man in den Erweiterten Einstellungen für Libre 2 → Sensorinformationen im Status anzeigen, werden zusätzliche Informationen (u. a. die Sensorstartzeit) angezeigt. Die verbleibende Zeit des Sensors ist auch in der gepatchten LibreLink-App zu sehen. Das wird entweder auf dem Startbildschirm als verbleibende Tage angezeigt oder als Sensor-Startzeit im Drei-Punkt-Menü → Hilfe → Event Log unter "Neuer Sensor gefunden" angezeigt.

![Libre 2 Startzeit](../images/Libre2_Starttime.png)

#### Neuer Sensor

Ein Sensortausch erfolgt danach dann immer on-the-fly: Neuen Sensor kurz vor Aktivierung setzen. Sobald xDrip+ keine Daten mehr vom alten Sensor erhält, starte den neuen Sensor mit der gepatchten App. Nach einer Stunde sollten neue Werte automatisch in xDrip+ erscheinen.

Wenn nicht, dann die Smartphone-Einstellungen prüfen und vorgehen wie beim ersten Start. Es gibt keine zeitliche Einschränkung. Versuche, die richtigen Einstellungen herauszufinden. Es ist nicht erforderlich, den Sensor sofort zu ersetzen, bevor Du verschiedene Kombinationen ausprobiert hast. Die Sensoren sind robust und versuchen permanent, eine Verbindung herzustellen. Lasse Dir Zeit. In den meisten Fällen hast Du eine Einstellung verändert, die nun zu Problemen führt.

Nach erfolgreicher Verbindung musst Du in xDrip "Sensor Stop" und "Delete calibration only" wählen. Dadurch erkennt xDrip+, dass die Werte von einem neuen Sensor kommen und die alten Kalibrationen nicht mehr verwendet werden dürfen und daher gelöscht werden müssen. Dabei findet keine Kommunikation mit dem Libre2 Sensor statt. Du musst den Sensor in xDrip nicht starten+.

![xDrip+ fehlende Daten beim Libre 2 Sensorwechsel](../images/Libre2_GapNewSensor.png)

#### Kalibrierung

Der Libre2-Sensor kann **im Bereich von -40 mg/dl bis +20 mg/dl\[-2,2 mmol/l bis +1,1 mmol/l\]** (intercept) kalibriert werden. Die Neigung (slope) kann nicht geändert. Bitte überprüfe die Werte mit einem Fingerpiks nach dem Setzen eines neuen Sensors. Bitte berücksichtige, dass die Werte in den ersten 12 Stunden nach dem Setzen möglicherweise noch nicht genau sind. Da es große Unterschiede bei den blutigen Messungen geben kann, prüfe den Wert alle 24 Stunden und kalibriere bei Bedarf. Wenn der Sensor nach ein paar Tagen völlig daneben liegt, sollte er ersetzt werden.

### Plausibilitätsprüfungen

Die Libre2 Sensoren enthalten Plausibilitätsprüfungen, um schlechte Sensorwerte zu erkennen. Sobald sich der Sensor am Arm bewegt oder leicht angehoben wird, können die Werte anfangen zu schwanken. Der Libre2 Sensor schaltet sich dann aus Sicherheitsgründen ab. Leider erfolgen beim Scannen mit der App weitere Prüfungen. Die App kann ebenfalls den Sensor deaktivieren, was zu einem frühen Ausfall führen kann, obwohl der Sensor in Ordnung ist. Derzeit ist der interne Test zu streng. Vermeide es den Sensor mit einem anderen Smartphone zu scannen, um so das Risiko eines unerwarteten Sensor-Shutdowns zu reduzieren.

(Libre2-best-practices-for-calibrating-a-libre-2-sensor)=
# Best Practices für die Kalibrierung eines Libre 2 Sensors

Um die besten Ergebnisse bei der Kalibrierung des Libre 2 zu erzielen, gibt es einige „Regeln“, denen Du folgen solltest. Sie gelten unabhängig von der Kombination von Software (z.B. gepatchte Libre-app, oop2, …), die verwendet wird, um die Libre 2 Werte zu handhaben.

1.  Die wichtigste Regel ist es, den Sensor nur zu kalibrieren, wenn Du für mindestens 15 Minuten einen flachen BZ-Verlauf hast. Das Delta zwischen den letzten drei Messungen sollte 10 mg/dl nicht überschreiten (nicht mehr als 15 Minuten zwischen jeder Messung). Da der Libre 2 nicht den Blutzuckerspiegel im Blut, sondern den Blutzuckerspiegel im Gewebe misst, gibt es eine gewisse Zeitverzögerung, insbesondere wenn der Blutzuckerspiegel steigt oder fällt. Diese Zeitverzögerung kann in ungünstigen Situationen zu viel zu großen Kalibrierungsabweichungen führen, selbst wenn der Anstieg/Abfall des Blutzuckers nicht so stark ist. Vermeide daher nach Möglichkeit eine Kalibrierung in steigenden oder fallenden Momenten. -> Wenn Du eine Kalibrierung hinzufügen musst, während der Blutzucker nicht stabil ist (z. beim Starten eines neuen Sensors), wird empfohlen, diese Kalibration(en) so schnell wie möglich zu entfernen und eine neue hinzuzufügen, wenn der Blutzucker wieder stabiler ist.
2.  Eigentlich wird dies automatisch berücksichtigt, wenn Du Regel 1 befolgst, aber um auf Nummer sicher zu gehen: Wenn Du Vergleichsmessungen durchführst, sollte Dein Blutzuckerspiegel auch für etwa 15 Minuten flach sein. Vergleiche nicht, wenn der Wert steigt oder fällt. Vergleichen Sie nicht, wenn der Blutzucker steigt oder fällt. Wichtig: Du sollst weiterhin Blutzuckermessungen durchführen, wann immer Du möchtest. Verwende die Ergebnisse jedoch nicht zur Kalibrierung, wenn sie steigen oder fallen!
3.  Da die Kalibrierung des Sensors in flachen Bereichen ein sehr guter Ausgangspunkt ist, wird auch dringend empfohlen, den Sensor nur in dem von Dir gewünschten Zielbereich zu kalibrieren, z. B. 70 mg/dl bis 160 mg/dl. Der Libre 2 ist nicht dafür optimiert, über einen großen Bereich wie 50 mg/dl bis 350 mg/dl zu arbeiten (zumindest nicht auf geradlinige Weise). Versuche also nur innerhalb des gewünschten Bereichs zu kalibrieren. -> Akzeptiere einfach, dass die Werte außerhalb deines Kalibrierungsbereichs nicht perfekt mit den Blutzuckerwerten übereinstimmen werden.
4.  Kalibriere nicht zu häufig. Eine sehr häufige Kalibrierung des Sensors führt meist zu schlechteren Ergebnissen. Wenn der Sensor unter flachen Bedingungen gute Ergebnisse liefert, füge einfach keine neue Kalibrierung hinzu, da sie keine nützliche Wirkung hat. Es sollte ausreichen, den Status alle 3-5 Tage zu überprüfen (natürlich auch in niedrigen BZ-Bereichen).
5.  Vermeide die Kalibrierung, wenn sie nicht erforderlich ist. Es mag dumm klingen, aber eine Kalbrierung wird nicht empfohlenm wenn der Blutzuckerspiegel gemessen im Blut nur ±10 mg/dl abweicht (z.B. Blutzucker: 95, Libre Sensor 100 -> kalibriere NICHT 95, Blutzucker: 95, Libre Sensor 115 -> kalibriere mit 95)

Nach der Aktivierung eines neuen Sensors und am Ende der Lebensdauer des Sensors ist es sinnvoll, Vergleichsmessungen häufiger als nach 3-5 Tagen durchzuführen, wie in Regel Nr. 4 angegeben. Bei neuen und alten Sensoren ist es wahrscheinlicher, dass sich die Rohwerte ändern und eine Neukalibrierung erforderlich ist. Von Zeit zu Zeit kommt es vor, dass ein Sensor keine gültigen Werte liefert. Wahrscheinlich ist der Sensorwert im Vergleich zum aktuellen Blutzuckerspiegel (z. B. Sensor: 50 mg/dl, BG: 130 mg/dl) viel zu niedrig auch nach der Kalibrierung. Wenn dies der Fall ist, kann der Sensor nicht kalibriert werden, um brauchbare Ergebnisse zu liefern. z.B. bei Verwendung der gepatchten Libre-App kann man einen Korrekturwert von maximal +20 mg/dl hinzufügen. Wenn es Dir passiert, dass der Sensor viel zu niedrige Werte liefert, zögere nicht, ihn auszutauschen, da er nicht besser werden wird. Auch wenn es sich um einen defekten Sensor handeln könnte, solltest Du bei Sensoren, die sehr oft viel zu niedrige Werte liefern, versuchen, verschiedene Stellen für die Platzierung des Sensors verwenden. Selbst im offiziellen Bereich (Oberarm) kann es einige Stellen geben, an denen die Sensoren einfach keine gültigen Werte liefern. Hier musst Du schlichtweg verschiedene Bereiche ausprobieren, bis es wie gewünscht funktioniert.
