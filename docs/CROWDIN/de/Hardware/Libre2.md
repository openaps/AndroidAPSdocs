# Freestyle Libre 2

Das Freestyle Libre 2 System kann gefährliche Blutzuckerwerte automatisch melden. Dazu sendet der Libre2 Sensor minütlich die aktuellen Blutzuckerwerte an einen Empfänger (Reader oder Smartphone). Der Empfänger löst dann bei Bedarf einen Alarm aus. Mit der selbst-modifizierten LibreLink App und xDrip+ kannst Du mit Deinem Smartphone kontinuierlich CGM Werte empfangen und anzeigen.

Der Sensor kann im Bereich von -40 mg/dl bis +20 mg/dl (-2,2 mmol/l bis +1,1 mmol/l) kalibriert werden, um die Differenz zwischen blutiger Messung und den Sensorwerten anzupassen.

BZ-Werte können wie beim Libre1 auch mit einem Bluetooth-Transmitter übermittelt werden.

Wichtiger Hinweis: Das funktioniert nicht mit der US-Version des Freestyle 2 Sensors! Die US-Version verbindet sich nur mit einem Lesegerät, nicht mit einem Smartphone.

## Schritt 1: Erstelle Deine eigene gepatchte LibreLink-App

Aus rechtlichen Gründen muss das sogenannte Patchen von Dir selbst erledigt werden. Verwende Suchmaschinen, um die entsprechenden Links zu finden. Es gibt im Wesentlichen zwei Varianten: Die empfohlene originale gepatchte App blockiert sämtlichen Internet-Traffic, um Tracking zu vermeiden. Die andere Variante unterstützt LibreView, das möglicherweise von Deinem Arzt benötigt wird.

Die gepatchte App muss anstelle der ursprünglichen App installiert werden. Der nächste Sensor wird die aktuellen BG-Werte an die xDrip+ App übermitteln, die über Bluetooth auf Deinem Smartphone läuft.

Wichtig: Um mögliche Probleme zu vermeiden, kann es hilfreich sein, zuerst die original LibreLink App auf einem Smartphone, das NFC beherrscht, zu installieren und dann wieder zu deinstallieren. NFC muss eingeschaltet sein. Das verbraucht keine zusätzliche Energie. Erst dann die gepatchte App installieren.

Die gepatchte App kann durch die Vordergrund-Autorisierung Benachrichtigung identifiziert werden. Die Vordergrund-Berechtigung verbessert die Verbindungsstabilität gegenüber der Original-App, die diese Berechtigung nicht nutzt, deutlich.

![LibreLink Foreground Service](../images/Libre2_ForegroundServiceNotification.png)

Weitere Hinweise könnten das Linux Pinguin Logo drei Punkte Menü -> Info oder die Schriftart der gepatchten App sein. Diese Kriterien sind optional und abhängig von der gewünschten App-Quelle.

![LibreLink Font Check](../images/LibreLinkPatchedCheck.png)

Stelle sicher, dass NFC aktiviert ist, erlaube den Zugriff auf Speicher und Standort für die gepatchte App, aktiviere die automatische Zeiteinstellung und den automatischen Zeitzonenwechsel und stelle mindestens einen Alarm in der gepatchten App ein.

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

Der Sensor merkt sich das Gerät, mit dem er gestartet wurde. Nur dieses Gerät kann zukünftig Alarme empfangen.

Der erste Verbindungsaufbau ist wichtig. Die LibreLink App versucht alle 30 Sekunden eine drahtlose Verbindung zum Sensor aufzubauen. Falls eine oder mehrere der erforderlichen Einstellungen falsch gesetzt sind, müssen diese angepasst werden. Dafür gibt es keine Zeitbeschränkung. Der Sensor versucht ständig, die Verbindung aufzubauen. Auch falls es einige Stunden dauert. Sei geduldig und probiere verschiedene Einstellungen, bevor Du auch nur daran denkst, den Sensor zu wechseln.

Solange du ein rotes Ausrufezeichen siehst ("!") an der linken oberen Ecke des Hyperlink-Startbildschirms gibt es keine Verbindung oder andere Einstellungen blockieren Alarme von LibreLink. Überprüfe, ob der Ton eingeschaltet ist und die Blockierung aller Arten von Benachrichtigungen von Apps deaktiviert sind. Erst wenn das Ausrufezeichen weg ist, steht die Verbindung und Blutzuckerwerte werden an das Smartphone gesendet. Das sollte nach maximal 5 Minuten passiert sein.

![LibreLink no connection](../images/Libre2_ExclamationMark.png)

Wenn das Ausrufezeichen bleibt oder Du eine Fehlermeldung erhältst, kann dies mehrere Gründe haben:

-   die Standortfreigabe von Android ist nicht erteilt - bitte in den Systemeinstellungen freigeben
-   automatische Zeitzone und Uhrzeit nicht gesetzt - bitte entsprechend die Einstellungen ändern
-   Aktiviere Alarme - mindestens einer der drei Alarme muss aktiviert sein in LibreLink
-   Bluetooth ist ausgeschaltet - bitte einschalten
-   Töne sind blockiert
-   App-Benachrichtigungen werden blockiert
-   Benachrichtigung inaktiver Bildschirm ist blockiert
-   Du hast einen fehlerhaften Libre 2 Sensor mit einer Produktions-LOT-Nummer, die mit einem 'K' beginnt und bei der dann 8 Ziffern folgen. Diese ist auf einer gelben Packungsbeilage aufgedruckt. Diese Sensoren müssen ausgetauscht werden, da sie nicht mit Bluetooth funktionieren.

Ein Handyneustart kann helfen, muss ggf. mehrmals gemacht werden. Sobald die Verbindung steht, verschwindet das rote Ausrufezeichen und der wichtigste Schritt ist geschafft. Abhängig von den Systemeinstellungen kann es passieren, dass das Ausrufezeichen stehen bleibt, obwohl Du schon Werte erhältst. In beiden Fällen funktioniert es. Sensor und Smartphone sind nun verbunden, alle Minute wird ein Blutzuckerwert übertragen.

![LibreLink Verbindung hergestellt](../images/Libre2_Connected.png)

In seltenen Fällen kann es helfen den Bluetooth-Cache zu leeren und/oder alle Netzwerkverbindungen über das Systemmenü zurückzusetzen. Dadurch werden alle verbundenen Bluetooth-Geräte entfernt und dies kann helfen die Bluetooth-Verbindung zum Libre sauber herzustellen. Diese Prozedur wird gespeichert, da der gestartete Sensor von der gepatchten LibreLink-App gespeichert wird. Hier muss nichts mehr zusätzlich getan werden. Warte bis sich die gepatchte App mit dem Sensor verbindet.

Nachdem die Verbindung erfolgreich gestartet wurde, kannst Du die Einstellungen des Smartphones bei Bedarf wieder ändern. Dies wird zwar nicht empfohlen, aber ggf. möchtest Du Akkuleistung sparen. Standortfreigabe (GPS) kann ausgeschaltet werden, Lautstärke kann auf Null gesetzt werden oder auch die Alarme können wieder abgeschaltet werden. Die Blutzuckerwerte werden trotzdem übertragen.

Beim Start des nächsten Sensors müssen jedoch alle Einstellungen wieder gesetzt sein!

Hinweis: Die gepatchte App erfordert, dass alle verpflichtenden Einstellungen während des WarmUps aktiviert sind, um erfolgreich eine Verbindung herstellen zu können. Für die 14 Tage des Betriebs sind sie nicht erforderlich. Bei Problemen mit dem Sensor-Start dürfte in den meisten Fällen der Standortdienst deaktiviert sein. Bei Android ist ein ordnungsgemäßer Bluetooth-Betrieb erforderlich, um eine Verbindung herstellen zu können. Siehe dazu auch Googles Android-Dokumentation.

Während der 14 Tage kannst Du parallel ein oder mehrere NFC-fähige Smartphones (nicht jedoch das Lesegerät!) mit der originalen LibreLink App verwenden, um den Libre mittels NFC zu scannen. Es gibt keine zeitliche Begrenzung, um damit zu beginnen. Du könntest ein zweites Smartphone zum Beispiel auch erst am fünften Tag oder so nutzen. Mit den Zusatzsmartphones können die Werte in die Abbott Cloud (LibreView) hochgeladen werden. LibreView kann Berichte für Dein Diabetes-Team erzeugen. Es gibt viele Eltern, die das unbedingt brauchen.

Beachte bitte, dass die originale gepatchte App **keine Internet-Verbindung** hat, um Tracking zu verhindern.

Es gibt jedoch eine Variante der gepatchten App, die LibreView mit aktivierter Internetverbindung unterstützt. In diesem Fall werden Deine Daten in die Abbott Cloud übertragen. Das ermöglicht, dass Dein Diabetes-Team auf die Daten und Berichte zugreifen kann. Mit dieser Variante ist es auch möglich, die Alarme eines bereits laufenden Sensors auf ein anderes Endgerät, mit dem der Sensor nicht gestartet wurde, zu übertragen. Anleitungen findest Du in deutschen Diabetes-Foren.

## Schritt 2: Installieren und konfigurieren der xDrip+ App

Die Blutzuckerwerte werden von der xDrip + App auf dem Smartphone empfangen.

-   Falls noch nicht geschehen lade die xDrip+ App  [hier](https://github.com/NightscoutFoundation/xDrip/releases)  herunter und installiere eine der neuesten Nightly Builts auf Deinem Smartphone.
-   In xDrip+ als Datenquelle „Libre2 (patched App)“ auswählen
-   Ggf. unter Less Common Settings->Extra Logging Settings->Extra tags for logging „BgReading:d,xdrip libre_receiver:v“ eintragen. Damit werden evtl. Fehlermeldungen protokolliert.
-   In xDrip+ gehe zu Einstellungen > Inter-App Einstellungen > Lokaler Broadcast und wähle AN.
-   In xDrip+ gehe zu Einstellungen > Inter-App Einstellungen > Behandlungen annehmen und wähle AUS.
-   Um in AndroidAPS (ab Version 2.5) CGM-Werte von xDrip+ empfangen zu können, identifiziere den Empfänger in xDrip [(Einstellungen > Inter-App Einstellungen > Identifiziere Empfänger und gib info.nightscout.androidaps ein)](xdrip-identify-receiver)
-   Falls du mit AndroidAPS kalibrieren willst, dann gehe in xDrip+ zu Einstellungen > Inter-App Einstellungen > Akzeptiere Kalibrierungen und wähle AN. Du solltest auch die Optionen in Einstellungen > Erweiterte Einstellungen > Erweiterte Kalibrierung kontrollieren.

![xDrip+ LibreLink logging](../images/Libre2_Tags.png)

## Schritt 3: Sensor starten

In xDrip+ den Sensor dann mit „Start Sensor“ und „nicht heute“ starten.

Das wird aber weder den Libre2 Sensor starten noch in irgendeiner Weise mit ihm Daten austauschen. Damit soll xDrip+ einfach nur mitgeteilt werden, dass ein neuer Sensor Blutzuckerwerte liefert. Wenn verfügbar, gib zwei blutige Messwerte für die Anfangskalibrierung ein. Nun sollten die Blutzuckerwerte alle 5 Minuten in xDrip+ angezeigt werden. Übersprungene Werte, weil Du zum Beispiel zu weit von Deinem Telefon entfernt warst, werden nicht nachgefüllt.

Nach einem Sensorwechsel erkennt xDrip+ den neuen Sensor automatisch und löscht alle Kalibrierungsdaten. Du kannst nach der Aktivierung blutig messen und eine neue erste Kalibrierung hinzufügen.

## Schritt 4: AndroidAPS konfigurieren

-   Wähle in AndroidAPS Konfiguration (Hamburger-Menü links oben auf dem Startbildschirm), wähle BZ-Quelle und dann xDrip.
-   Falls AAPS im Flugmodus keine BZ-Werte von xdrip+ bekommt, nutze 'identify receiver' wie auf der Seite [xDrip+ settings page](xdrip-identify-receiver) beschrieben.

Wenn Du den Libre 2 als BZ-Quelle nutzt, stehen die Funktionen 'Enable SMB always' und 'Enable SMB after carbs' mit dem SMB Algorithmus nicht zur Verfügung. Die BZ-Werte des Libre 2 sind für einen sicheren Einsatz dieser Funktionen nicht glatt genug. Näheres hierzu findest du unter [Glättung der Blut-Glukose-Daten](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

(Libre2-experiences-and-troubleshooting)=
## Erfahrungen und Troubleshooting

### Verbindung

Die Verbindungsqualität ist außerordentlich gut. Bis auf Huawei Handys scheinen alle aktuellen Smartphones gut zu funktionieren. Das Wiederverbinden nach Verbindungsverlust ist phänomenal. Die Verbindung kann durchaus einmal abreißen, wenn sich der Sensor auf der einen Körperseite, das Handy auf der anderen in der Hosentasche befindet oder wenn man im Freien unterwegs ist. Bei der Gartenarbeit habe ich mir angewöhnt, das Handy auf der Sensorseite am Körper zu tragen. In Räumen, wo sich Bluetooth über Reflektionen ausbreitet, sollten keine Probleme auftreten. Bei Verbindungsproblemen bitte ein anderes Telefon testen. Es kann auch helfen, den Sensor so zu setzen, dass die interne Bluetooth-Antenne nach unten zeigt. Der Schlitz auf dem Applikator muss beim Setzen des Sensors nach unten zeigen.

### Glättung der Werte & Rohdaten

Technisch wird alle Minute der aktuelle Blutzucker-Wert an xDrip+ übertragen. Daraus wird mit einem weighted average Filter über die letzten 25 Minuten ein geglätteter Wert errechnet,  Dies ist zwingend erforderlich um damit zu loopen. Die Kurven sehen glatt aus und die Loopergebnisse sind prima. Die Rohwerte, die den Alarmen zugrunde liegen, schwanken ein wenig mehr, entsprechen aber den Werten, die auch der Reader anzeigt. Man kann zusätzlich die Rohwerte im xDrip+ Graph anzeigen lassen, um bei schnellen Veränderungen rechtzeitig reagieren zu können. Dazu bitte Less Common Settings->Advanced Settings for Libre2->show Raw values anschalten". Dann werden zusätzlich Rohwerte als kleine weiße Punkte angezeigt und zusätzliche Sensorinformationen sind im Systemmenü verfügbar.

Die Rohwerte sind sehr hilfreich, wenn sich der Blutzuckerwert schnell ändert. Auch wenn die einzelnen Punkte viel mehr springen, wirst Du die Tendenz deutlich besser erkennen als bei der geglätteten Linie und kannst so bessere Therapieentscheidungen treffen.

![xDrip+ advanced settings Libre 2 & Rohdaten](../images/Libre2_RawValues.png)

### Sensorlaufzeit

Die Sensorlaufzeit ist fix 14 Tage. Die 12 extra Stunden des Libre1 existieren nicht mehr. Aktiviert man unter Advanced settings for Libre2->show Sensor Infos, werden im Systemstatus die Sensor Startzeit sowie weitere Infos angezeigt. Die verbleibende Zeit des Sensors ist auch in der gepatchten LibreLink-App zu sehen. Entweder im Hauptbildschirm als verbleibende Tage Anzeige oder als Startzeit des Sensors im Drei-Punkt-Menü>Hilfe->Event Log unter "Neuer Sensor gefunden".

![Libre 2 Startzeit](../images/Libre2_Starttime.png)

### Neuer Sensor

Ein Sensortausch erfolgt danach dann immer on-the-fly: Neuen Sensor kurz vor Aktivierung setzen. Sobald xDrip+ keine Daten mehr vom alten Sensor erhält, starte den neuen Sensor mit der gepatchten App. Nach einer Stunde sollten neue Werte automatisch in xDrip+ erscheinen.

Wenn nicht, dann die Smartphone-Einstellungen prüfen und vorgehen wie beim ersten Start. Es gibt keine zeitliche Einschränkung. Versuche, die richtigen Einstellungen herauszufinden. Es ist nicht erforderlich, den Sensor sofort zu ersetzen, bevor Du verschiedene Kombinationen ausprobiert hast. Die Sensoren sind robust und versuchen permanent, eine Verbindung herzustellen. Lasse Dir Zeit. In den meisten Fällen hast Du eine Einstellung verändert, die nun zu Problemen führt.

Nach erfolgreicher Verbindung musst Du in xDrip "Sensor Stop" und "Delete calibration only" wählen. Dadurch erkennt xDrip+, dass die Werte von einem neuen Sensor kommen und die alten Kalibrationen nicht mehr verwendet werden dürfen und daher gelöscht werden müssen. Dabei findet keine Kommunikation mit dem Libre2 Sensor statt. Du musst den Sensor in xDrip nicht starten+.

![xDrip+ fehlende Daten beim Libre 2 Sensorwechsel](../images/Libre2_GapNewSensor.png)

### Kalibrierung

Der Sensor kann im Bereich von -40 mg/dl bis +20 mg/dl (-2,2 mmol/l bis +1,1 mmol/l) kalibriert werden. Die Steigung lässt sich nicht ändern, da der Libre2 deutlich genauer ist als der Libre1. Prüfe zeitnah nach dem Setzen eines neuen Sensors mit einer blutigen Messung. Es ist bekannt, dass es deutliche Abweichungen zu den blutigen Messungen geben kann. Zur Sicherheit sollte alle 24 - 48 Stunden kalibriert werden. Die Werte sind bis zum Sensorende genau und „leiern“ nicht aus wie beim Libre1.  Sind die Sensorwerte allerdings völlig daneben, dann wird sich das nicht ändern. Der Sensor sollte dann umgehend getauscht werden.

### Plausibilitätsprüfungen

Die Libre2 Sensoren enthalten Plausibilitätsprüfungen, um schlechte Sensorwerte zu erkennen. Sobald sich der Sensor am Arm bewegt oder leicht angehoben wird, können die Werte anfangen zu schwanken. Der Libre2 Sensor schaltet sich dann aus Sicherheitsgründen ab. Leider erfolgen beim Scannen mit der App weitere Prüfungen. Die App kann ebenfalls den Sensor deaktivieren, was zu einem frühen Ausfall führen kann, obwohl der Sensor in Ordnung ist. Derzeit ist der interne Test zu streng. Ich verzichte mittlerweile vollständig auf das Scannen und habe seitdem keinen Ausfall mehr gehabt.

### Reisen über Zeitzonen hinweg

In anderen [Zeitzonen](../Usage/Timezone-traveling.md) gibt es zwei Strategien zum Loopen:

Entweder

1.  die Smartphone-Zeit unverändert lassen und das Basal-Profil verschieben (Smartphone im Flugmodus) oder
2.  lösche den Pumpenverlauf und ändere die Smartphone-Zeit auf lokale Zeit.

Methode 1. ist prima, solange man vor Ort keinen neuen Libre2 Sensor setzen muss. Im Zweifel Methode 2 wählen, insbesondere wenn die Reise länger dauert. Setzt man einen neuen Sensor muss leider die automatische Zeitzone gesetzt sein, also Methode 1. Methode 1 gestört würde. Bitte prüfen bevor man unterwegs ist, sonst kann man schnell Probleme bekommen.

### Erfahrungen

Insgesamt eines der kleinsten CGM System am Markt. Klein, kein Transmitter notwendig und sehr genaue Werte ohne Schwankungen. Nach rd. 12 Stunden Einlaufphase mit Abweichungen von bis zu 30 mg/dl (1,7 mmol/l) sind die Abweichungen bei mir kleiner als 10 md/dl (0,6 mmol/l). Beste Ergebnisse am hinteren Oberarm, andere Setzstellen mit Vorsicht! Den Sensor einen Tag vorher zu setzen ist hier unnötig. Das würde den Einpendelmechanismus stören.

Es scheint ab und an schlechte Sensoren zu geben, die weit neben den Blutwerten liegen. Das bleibt dann so. Diese sollten umgehend reklamiert und getauscht werden.

Falls der Sensor auf der Haut ein wenig bewegt oder irgendwie angehoben wird, kann dies zu fehlerhaften Ergebnissen führen. Das Filament, das im Gewebe sitzt, wurde in diesem Fall ein wenig aus dem Gewebe gezogen und liefert deshalb falsche Messergebnisse. Meistens springen dann die Werte in xDrip+. Oder es kommt zu Abweichungen zu blutig gemessenen Werten. Bitte ersetze den Sensor sofort! Die Ergebnisse sind ab diesem Zeitpunkt ungenau.

## Einsatz von Bluetooth-Transmittern und OOP

Bluetooth-Transmitter können mit dem Libre2 mit den neuesten xDrip + nightlys und der Libre2 OOP app verwendet werden. Du kannst Blutzuckermessungen alle 5 Minuten wie mit dem Libre1 erhalten. Auf der miaomiao Webseite findest Du eine Beschreibung dazu. Diese funktioniert auch mit Bubble und künftig evtl. erhältlichen anderen Transmittern. Auch der Bluecon sollte funktionieren, wurde bisher aber noch nicht getestet.

Alte Libre1-Transmitter können nicht mit der Libre2 OOP verwendet werden. Sie müssen durch eine neuere Version ersetzt werden oder benötigen ein Firmware-Upgrade für den ordnungsgemäßen Betrieb mit dem Libre 2. MM1 mit neuester Firmware funktioniert leider noch nicht - die Suche nach der grundsätzlichen Ursache läuft derzeit noch.

Die Libre2 OOP gibt die gleichen BZ-Messwerte aus wie das Lesegerät oder die LibreLink-App über einen NFC-Scan. AAPS glättet Libre2 Daten über 25 Minuten, um Sprünge zu vermeiden.  OOP übergibt alle fünf Minuten einen Wert. Dieser entspricht dem Durchschnitt der letzten fünf Minuten. Daher sind die BZ-Werte nicht so glatt, stimmen aber mit dem Lesegerät überein und folgen den "echten" BZ-Entwicklungen schneller. Wenn Du mit OOP loopen möchtest, aktiviere alle Glättungseinstellungen in xDrip+.

Der Droplet-Transmitter funktioniert auch mit dem Libre2, benötigt dafür aber eine Internetverbindung. Weitere Informationen findest Du bei Facebook oder über eine Suchmaschine Deiner Wahl. MM2 mit Tomato-App scheint auch eine Internetverbindung zu nutzen. Bei beiden Geräten musst Du auf eine stabile Internetverbindung achten, um permanent BZ-Werte zu erhalten.

Auch wenn der Ansatz der gepatchten LibreLink App sehr smart ist, kann es Gründe geben, statt dessen einen Bluetooth-Transmitter zu nutzen:

-   Werte sind identisch mit denen des Lesegeräts
-   Der Libre2 Sensor kann 14,5 Tage genutzt werden wie zuvor schon der Libre1
-   Das nachträgliche Auffüllen der Werte der letzten acht Stunden wird vollständig unterstützt.
-   Bereits während des einstündigen WarmUps können Werte empfangen werden

Bemerkung: Der Sender kann parallel zur LibreLink-App verwendet werden. Es stört nicht die gepatchte LibreLink App Operation.

Hinweis 2: Der OOP Algorithmus kann bisher noch nicht kalibriert werden. Das wird sich in Zukunft ändern.

# Best Practices für die Kalibrierung eines Libre 2 Sensors

Um die besten Ergebnisse bei der Kalibrierung des Libre 2 zu erzielen, gibt es einige „Regeln“, denen Du folgen solltest. Sie gelten unabhängig von der Kombination von Software (z.B. gepatchte Libre-app, oop2, …), die verwendet wird, um die Libre 2 Werte zu handhaben.

1.  Die wichtigste Regel ist es, den Sensor nur zu kalibrieren, wenn Du für mindestens 15 Minuten einen flachen BZ-Verlauf hast. Das Delta zwischen den letzten drei Messungen sollte 10 mg/dl nicht überschreiten (nicht mehr als 15 Minuten zwischen jeder Messung). Da der Libre 2 nicht den Blutzuckerspiegel im Blut, sondern den Blutzuckerspiegel im Gewebe misst, gibt es eine gewisse Zeitverzögerung, insbesondere wenn der Blutzuckerspiegel steigt oder fällt. Diese Zeitverzögerung kann in ungünstigen Situationen zu viel zu großen Kalibrierungsabweichungen führen, selbst wenn der Anstieg/Abfall des Blutzuckers nicht so stark ist. Vermeide daher nach Möglichkeit eine Kalibrierung in steigenden oder fallenden Momenten. -> Wenn Du eine Kalibrierung hinzufügen musst, während der Blutzucker nicht stabil ist (z. beim Starten eines neuen Sensors), wird empfohlen, diese Kalibration(en) so schnell wie möglich zu entfernen und eine neue hinzuzufügen, wenn der Blutzucker wieder stabiler ist.
2.  Eigentlich wird dies automatisch berücksichtigt, wenn Du Regel 1 befolgst, aber um auf Nummer sicher zu gehen: Wenn Du Vergleichsmessungen durchführst, sollte Dein Blutzuckerspiegel auch für etwa 15 Minuten flach sein. Vergleiche nicht, wenn der Wert steigt oder fällt. Vergleichen Sie nicht, wenn der Blutzucker steigt oder fällt. Wichtig: Du sollst weiterhin Blutzuckermessungen durchführen, wann immer Du möchtest. Verwende die Ergebnisse jedoch nicht zur Kalibrierung, wenn sie steigen oder fallen!
3.  Da die Kalibrierung des Sensors in flachen Bereichen ein sehr guter Ausgangspunkt ist, wird auch dringend empfohlen, den Sensor nur in dem von Dir gewünschten Zielbereich zu kalibrieren, z. B. 70 mg/dl bis 160 mg/dl. Der Libre 2 ist nicht dafür optimiert, über einen großen Bereich wie 50 mg/dl bis 350 mg/dl zu arbeiten (zumindest nicht auf geradlinige Weise). Versuche also nur innerhalb des gewünschten Bereichs zu kalibrieren. -> Akzeptiere einfach, dass die Werte außerhalb deines Kalibrierungsbereichs nicht perfekt mit den Blutzuckerwerten übereinstimmen werden.
4.  Kalibriere nicht zu häufig. Eine sehr häufige Kalibrierung des Sensors führt meist zu schlechteren Ergebnissen. Wenn der Sensor unter flachen Bedingungen gute Ergebnisse liefert, füge einfach keine neue Kalibrierung hinzu, da sie keine nützliche Wirkung hat. Es sollte ausreichen, den Status alle 3-5 Tage zu überprüfen (natürlich auch in niedrigen BZ-Bereichen).
5.  Vermeide die Kalibrierung, wenn sie nicht erforderlich ist. Das klingt vielleicht dumm, aber es wird nicht empfohlen eine neue Kalibrierung hinzuzufügen, wenn der Blutzuckerspiegel gemessen im Blut nur ±10 mg/dl abweicht (z.B. Blutglukose Level: 95, Libre Sensor 100 -> kalibrieren Sie NICHT 95, Blutzucker Level: 95, Libre Sensor 115 -> fügen Sie die 95 hinzu, die berücksichtigt werden sollte für die Kalibrierung)

Nach der Aktivierung eines neuen Sensors und am Ende der Lebensdauer des Sensors ist es sinnvoll, Vergleichsmessungen häufiger als nach 3-5 Tagen durchzuführen, wie in Regel Nr. 4 angegeben. Bei neuen und alten Sensoren ist es wahrscheinlicher, dass sich die Rohwerte ändern und eine Neukalibrierung erforderlich ist. Von Zeit zu Zeit kommt es vor, dass ein Sensor keine gültigen Werte liefert. Wahrscheinlich ist der Sensorwert im Vergleich zum aktuellen Blutzuckerspiegel (z. B. Sensor: 50 mg/dl, BG: 130 mg/dl) viel zu niedrig auch nach der Kalibrierung. Wenn dies der Fall ist, kann der Sensor nicht kalibriert werden, um brauchbare Ergebnisse zu liefern. z.B. bei Verwendung der gepatchten Libre-App kann man einen Korrekturwert von maximal +20 mg/dl hinzufügen. Wenn es Dir passiert, dass der Sensor viel zu niedrige Werte liefert, zögere nicht, ihn auszutauschen, da er nicht besser werden wird. Auch wenn es sich um einen defekten Sensor handeln könnte, solltest Du bei Sensoren, die sehr oft viel zu niedrige Werte liefern, versuchen, verschiedene Stellen für die Platzierung des Sensors verwenden. Selbst im offiziellen Bereich (Oberarm) kann es einige Stellen geben, an denen die Sensoren einfach keine gültigen Werte liefern. Hier musst Du schlichtweg verschiedene Bereiche ausprobieren, bis es wie gewünscht funktioniert.
