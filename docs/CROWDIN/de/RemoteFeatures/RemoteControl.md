# AAPS remote steuern
Es gibt vier sehr wirkungsvolle Wege, **AAPS** remote zu steuern:

1) [SMS commands](#1-sms-commands) (follower phone can be either Android or iOS), 2) [AAPSClient](#2-aapsclient) (follower phone is Android) 3) [Nightscout](#3-nightscout) (Android, iOS or other computer/device).  
4) [Smartwatches](#4-smartwatches) (Android)

Die ersten drei sind meist für Pflegende/Eltern geeignet, und Smartwatches sind **zusätzlich** für Erwachsene mit Diabetes sehr hilfreich.

![grafik](../images/remote_control_and_following/AAPS_overview_remote_control_01.png)

#### Dinge, die bei der Einrichtung eines **AAPS** für Kinder, das remote gesteuert werden soll, bedacht werden müssen

1.  Überlege, wie das Kinder-Smartphone permanent in der Nähe der Insulinpumpe und des Glukose-Sensors bleibt. Besonders bei sehr kleinen/jungen Kindern, die noch nicht eigenverantwortlich genug sind, kann das mitunter schwierig sein. Es hilft, wenn ein Smartphone mit einer guten Bluetooth-Reichweite benutzt wird und das Kind - wenn es alt genug für ein eigenes Smartphone ist - Pumpe und Smartphones komfortabel bei sich tragen kann. Das Tragen eines Bauchgurts (_z.B._ [SPI Belt](https://spibelt.com/collections/kids-belts)) kann in solchen Fällen eine Lösung sein.
2.  Nimm' Dir Zeit bei der Einrichtung und teste die Befehle in aller Ruhe mit Deinem Kind in der Nähe, bevor Du mit dem Remote-Monitoring und den Remote-Behandlungen beginnst. Viele Eltern nutzen Wochenenden oder Schulferien dazu.
3.  Stelle sicher, dass Lehrer und Erzieher über den Behandlungsplan Deines Kindes Bescheid wissen und überlege Dir wie die Fernsteuerung mit dem bestehenden Therapieplan zusammenpasst bzw. ihn erweitert.
4.  Viele Eltern finden es hilfreich, einen separaten Kommunikationsweg (z.B. über ein kleines günstiges Lehrer-Follower-Smartphone) mit der KiTa oder Schule zu haben.
5.  Beispiele für schulische Therapiepläne für Kinder unterschiedlicher Altersstufen sind unter ["Dateien“](https://www.facebook.com/groups/AndroidAPSUsers/files/) auf der **AAPS** Facebook-Seite hinterlegt.
6.  Wie sieht der Notfallplan aus, wenn die Fernsteuerung nicht funktionieren sollte (_d.h._ Netzwerkprobleme auftreten oder die Bluetooth-Verbindung verloren geht)?  Denke immer daran, was mit **AAPS** passieren wird, wenn Du plötzlich keine neuen Befehle senden kannst. **AAPS** überschreibt die Basalrate, den ISF und das ICR mit den aktuellen Profilwerten. Falls Deine Remote-Verbindung unterbrochen wird, ist es ist besser temporäre Profilwechsel (_d.h._ mit einer beschränkten Dauer) genutzt zu haben, als auf ein dauerhaftes stärkeres Insulinprofil geschwechselt zu sein. Wenn Die eingegebene Zeitspanne abgelaufen ist, wird die Pumpe auf das Original-Profil zurückfallen.

## 1) SMS-Befehle

```{admonition} Documentation
:class: note

This section may contain outdated content. Please also see the page [SMS Commands](../RemoteFeatures/SMSCommands.md).

```

**AAPS** kann über die Funktion der **SMS-Befehle** 'remote' gesteuert werden. SMS-Befehle können durch _jedes_ Smartphone (iPhone/Android) an **AAPS** gesendet werden.

**SMS-Befehle sind wirklich hilfreich:**
1. Für die tägliche Remote-Steuerung

2. Wenn Du einen Bolus remote abgeben möchtest

3. In einer Gegend mit schwachem Internet-Empfang, in der Textnachrichten durchkommen, aber der übrige Empfang eingeschränkt ist. Dies hilft besonders in entlegenen Gebieten (z.B. beim Camping oder dem Skifahren.

4. Wenn die anderen Methoden der Remote-Steuerung (Nightscout/AAPSClient) vorübergehend nicht funktionieren

### Sicherheit der SMS-Befehle
Wenn Du **SMS-Befehle** in **AAPS**freischaltest, behalte im Kopf, dass das Smartphone, dass SMS-Befehle versenden soll auch gestohlen werden kann und/oder von jemand anderem verwendet werden kann. Sichere Dein Smartphone mindestens mit einer PIN. Ein starkes Passwort und/oder eine biometrische Sicherung werden dringend empfohlen. Wichtig ist, dass das Smartphone-Passwort sich vom APK Master-Passwort (das Passwort, das benötigt wird, um die **AAPS** Einstellungen zu ändern) unterscheidet. Eine zweite Rufnummer muss für SMS-Befehle aktiviert sein, auch wenn es nur einen Follower/Betreuenden gibt. Wenn das Smartphone des hauptsächlich Betreuenden/Elternteils kompromitiert wurde, kann die zweite Rufnummer (mit dem Befehl **SMS STOP**) dazu genutzt werden, die SMS-Kommunikation vorübergehend zu deaktivieren. Versions of **AAPS** 2.7 and newer also use an [Authenticator app](#authentication-or-not)).

### Unterschiedliche SMS-Befehle
Die **Tabelle der SMS-Befehle** unten zeigt alle möglichen SMS-Befehle. Um die Nutzung noch verständlicher zu machen, sind auch _Beispiele_ enthalten. Die Gültigkeitsbereiche der Befehle (Zielwerte, Prozentsätze der Profile etc.) sind mit denen der AAPS-App identisch. Die Befehle sind nach Nutzungshäufigkeit sortiert aufgelistet, wobei die ersten beiden Tabellen das Gros der fürs Loopen benötigten SMS-Befehle enthalten.

### Tabelle der SMS-Befehle

![SMS_command_table_1](../images/remote-control-02.png)

![](../images/remote-control-03.png)

![SMS_command_table_3](../images/remote_control_and_following/SMS_command_table_3_Loop_03.png)

![SMS_command_table_4](../images/remote-control-05.png)

(authentication-or-not)=
### Authentifizieren oder nicht?

Du wirst in der oberen Tabelle bemerkt haben, dass einige SMS-Befehle eine sofortige Antwort haben und andere eine **Authentifizierung** mit einem Sicherheitscode aus einer weiteren App und einer PIN brauchen. (Details dazu findest Du hinter dem Link unten). Eine einfache Abfrage wie “**BG**”, die den aktuellen Glukosewert abfragt, ist schnell eingetippt und braucht nicht authentifiziert zu werden. Sie gibt die unten gezeigte **AAPS**-Statusinformation zurück:

![grafik](../images/remote-control-06.png)

Befehle, die kritischer sind und daher zusätzlich abgesichert werden, benötigen einen weiteren einzugebenden Code, wie zum Beispiel:

![](../images/remote-control-07.png)

### Wie man SMS-Befehle einrichtet

Der Gesamtprozess sieht wie folgt aus:

**1) Lade eine Authentifikator-App herunter (Eltern- oder Betreuenden-Smartphone)**

**2)    Überprüfe die Smartphone-Einstellungen (AAPS Smartphone)**

**3) Datum und Uhrzeit synchronisieren (Eltern- und AAPS-Smartphone)**

**4) AAPS-Einstellungen (AAPS-Smartphone)**

**5) Testen, ob SMS-Befehlen funktionieren (Eltern- und AAPS-Smartphone)**

### Los gehts!

1) **Lade eine Authentifikator-App** herunter: Lade (aus dem App Store oder Google Play) auf das Eltern-Smartphone eine Authentifikator App Deiner Wahl aus der Liste herunter und installiere diese:

[**Authy**](https://authy.com/download/)

[**Google Authenticator - Android / iOS**](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&pli=1)

[**LastPass Authenticator**](https://www.lastpass.com/solutions/authentication)

[**FreeOTP Authenticator**](https://freeotp.github.io/)

Diese Authenticator-Apps erzeugen einen zeitlich begrenzten, 6-stelligen Code als Einmalkennwort, ähnlich dem des mobilen Bankings oder Online-Shoppings. Du kannst jede Authentifizierungs-App, die RFC 6238 TOTP-Token unterstützt, verwenden. Der Microsoft Authenticator funktioniert nicht.

2) **Überprüfe die Smartphone-Einstellungen:** Öffne auf dem **AAPS**-Smartphone Einstellungen > Apps > AAPS > Berechtigungen > SMS  > Zulassen

![grafik](../images/remote-control-08.png)

3) **Datum und Uhrzeit synchronisieren:** Überprüfe sowohl auf dem **AAPS**-, als auch auf dem Eltern-Smartphone, dass das Datum und die Uhrzeit synchron sind. Wie Du das genau machen kannst, hängt vom jeweiligen Smartphone ab. Du musst möglicherweise verschiedene Einstellungen ausprobieren.

Beispiel (Samsung S23): Einstellungen - Allgemeine Verwaltung - Datum und Uhrzeit - Datum und Uhrzeit automatisch stellen

Einige Optionen können ausgegraut sein, wenn das Smartphone als Kinder-Smartphone aufgesetzt ist, und daher einen Administrator des Familienkontos benötigt. Diese Datums- und Zeiteinstellung wird auf einem (Eltern-) iPhone „automatisch“ gesetzt. Wenn Du Dir nicht sicher bist, ob beide Smartphones synchronisiert sind, ist das nicht schlimm. Wenn es deswegen zu Problemen kommen sollte, kannst Du das auch nach dem Einrichten der SMS-Befehle lösen (Bitte um Hilfe, wenn Du sie benötigen solltest). Sie sich nicht sicher sind, ob Sie die Telefone synchronisiert haben, machen Sie sich keine Sorgen, Sie können die SMS-Befehle einrichten und danach beheben, falls es zu Problemen zu führen scheint (fragen Sie bei Bedarf um Hilfe).

4) **AAPS-Einstellungen:**

i) Jetzt, wo Deine Smartphone-Einstellungen geprüft sind, gehe in der **AAPS**-App auf das linke Hamburger Menü und tippe auf KONFIGURATION:

![grafik](../images/remote-control-09.png)

ii) Aktiviere den "SMS-Kommunikator“ durch Markieren des Kästchens, und tippe dann auf das "Zahnrad", um zu den SMS-Kommunikator-Einstellungen zu gelangen:

![grafik](../images/remote-control-10.png)

_Hinweis - Ein anderer Weg zu den SMS-Kommunikator-Einstellungen führt über das 3-Punkte-Menü oben rechts._

iii) Aktivieren in den Einstellungen die Option "Erlaube Fernsteuerung per SMS":

![grafik](../images/remote-control-11.png)

iv) Gebe die Rufnummer des/der Eltern-Smartphone(s) ein. Stelle die Landesvorwahl wie im Beispiel unten gezeigt und entferne die erste „0“ der Vorwahl (internationales Format):

UK Telefonnummer: +447976304596

US-Telefonnummer: +11234567890

DE Telefonnummer: +491721234567

_etc._

Bitte beachte, dass je nach Deinem Standort ein vorangestelltes "+" erforderlich sein kann. Um das herauszufinden kannst Du eine Testnachricht senden und auf dem SMS-Kommunikator-Tab nachschauen, welches Format die Telefonnummer hat.

Möchtest Du mehr als eine Rufnummer hinterlegen, müssen diese durch ein Semikolon und OHNE Leerzeichen (das ist wichtig!) getrennt werden. Wähle "OK":


![grafik](../images/remote-control-12.png)

v) Wähle eine PIN aus, die Du (und alle Betreuenden) beim Senden eines SMS-Befehls am Ende des Authentifizierungscodes anhängst.

Anforderungen an die PIN sind:

•3 bis 6 Ziffern

•unterschiedliche Ziffern (_d.h._ 1111 oder 1224)

•keine aufsteigenden Reihen (_d.h._ 1234)

![grafik](../images/remote-control-13.png)

vi) Wähle "Konfiguration der Authenticator App" in den SMS-Kommunikator-Einstellungen aus

● Folge den Anweisungen auf dem Bildschirm.

● Öffne die auf dem _Eltern-/Betreuenden-Smartphone_ installierte Authenticator App und füge ein neues Konto bzw. eine neue Verbindung hinzu

●   Scanne den von **AAPS** angezeigten QR-Code mit dem Eltern-/Betreuenden-Smartphone, wenn Du dazu aufgefordert wirst.

●   Teste das Einmal-Passcode (Deine PIN am Ende ergänzen) der Authenticator App auf dem Eltern-/Betreuenden-Smartphone:

Beispiel:

Der von der Authenticator angezeigte Einmal-Passcode ist 457051

Deine zwingend erforderliche PIN ist 2401

Der zu testende Code ist damit: 4570512401

Wenn der Eingabe richtig ist, ändert sich der rote Text „FALSCHE PIN“ automatisch in ein grünes „OK“. Der Prozess ist damit abgeschlossen, es gibt keine "OK"-Taste, der nach der Eingabe des Codes gedrückt werden muss:


![grafik](../images/remote-control-14.png)

Es ist nun alles für die Nutzung der SMS-Befehle eingerichtet.

### Erste Schritte bei der Nutzung der SMS-Befehle

1) Um zu überprüfen, ob alles richtig eingerichtet ist, teste die Verbindung, indem Du „bg“ als SMS-Nachricht vom Eltern-Smartphone an das AAPS-Smartphone schickst. Die Rückmeldung sollte in etwa so aussehen:

![grafik](../images/remote-control-15.png)

2) Probiere nun einen SMS-Befehl aus, der den Authentifikator erfordert. Sende dazu eine SMS vom Eltern-Smartphone an das **AAPS**-Smartphone (_z. B._ „target hypo“). Du wirst auf dem Eltern-Smartphonen nun dazu aufgefordert den **6-stelligen Authenticator Code** aus der Authenticator App ergänzt um die geheime **PIN**, die nur den Eltern/Followern bekannt sein darf, einzugeben (10 Stellen insgesamt, davon 6 Stellen Passcode und 4 Stellen PIN, bei einer vierstelligen PIN).

Das Beispiel unten zeigt den SMS-Befehl "target hypo", um ein temporäres Ziel HYPO zu setzen:

● In diesem Beispiel ist Deine PIN 1289

Der von der Authenticator angezeigte Einmal-Passcode ist 274127

●   Sende 2741271289, wenn Du dazu aufgefordert wirst

Die Befehle müssen in Englisch gesendet werden. Die Antwort sollte in Deiner Landessprache erfolgen. Wenn Du das allererste Mal einen SMS-Befehl schicken möchtest, schaue, dass das AAPS-Smartphone neben Dir liegt, sodass Du auf beiden Geräten nachverfolgen kannst was passiert:

![grafik](../images/remote-control-16.png)

Das Eltern-/Betreuenden-Smartphone wird eine SMS von **AAPS** erhalten, die bestätigt, dass der SMS-Befehl erfolgreich remote ausgeführt wurde. Es gibt verschiedene Gründe, warum der Befehl möglicherweise nicht erfolgreich war:

● Die Einrichtung der SMS-Befehle ist nicht vollständig/korrekt

● Der Befehl wurde im falschen Format geschickt (z. B. „disconnect pump 45" anstelle von "pump disconnect 45")

●   Du hast eine falschen oder abgelaufenen Authenticator Code genutzt (es hat sich bewährt einige Sekunden auf einen neuen Code zu warten, wenn der andere nur noch kurz gültig sein sollte)

●   Der Code + PIN waren richtig, aber die SMS-Kommunikation ist verzögert, sodass AAPS angenommen hat, dass der Code abgelaufen ist

● Das AAPS-Smartphone hat keine Verbindung zur Pumpe

● Es läuft zeitgleich eine Bolusabgabe

Wenn Dein SMS-Befehl erfolgreich ausgeführt ist, wird Dir das durch eine Antwort-SMS bestätigt. Du wirst eine Fehlermeldung erhalten, wenn ein Problem aufgetreten sein sollte.

Die Beispiele zeigen häufiger auftretende Fehler:

![grafik](../images/remote-control-17.png)

### Zusätzliche Sicherheitshinweise zu SMS-Befehlen

Der voreingestellte Mindestabstand zwischen zwei Bolus-Befehlen beträgt 15 Minuten. Aus Sicherheitsgründen musst Du mindestens zwei berechtigte Rufnummern hinterlegt haben, um diesen Wert verändern zu können. Wenn Du versuchst innerhalb von 15 Minuten einen weiteren Bolus remote abzugeben, erhältst Du die Fehlermeldung "Bolusabgabe aus der Ferne nicht möglich. Versuch es später erneut.”

Wenn Du einem Betreuenden-Smartphone die Berechtigung zum Senden von SMS-Befehlen entziehen möchtest, sende den SMS-Befehl "SMS stop" oder tippe auf "AUTHENTIFIKATOREN ZURÜCKSETZEN" (s. Screenshot der SMS-Kommunikator-Einstellungen oben, LINK). Durch das Zurücksetzen der Authentifikatoren werden ALLE Eltern-/Betreuenden-Smartphones ungültig. Diese müssen anschließend neu eingerichtet werden.

### Mahlzeitenbolus über SMS-Befehle abgegeben

Ein Remote-Bolus kann _ausschließlich_ durch **SMS-Befehle** abgegeben werden. Er kann nicht über Nightscout oder den AAPSClient ausgelöst werden. Kohlenhydrate jedoch, können auf allen drei Wegen angekündigt werden. Bolus-Befehle und Kohlenhydrate können nicht in einer gemeinsamen SMS gesendet werden. Diese Befehle müssen wie folgt gesendet werden:

1)  Den Bolus über einen SMS-Befehl (_z. B. _“bolus 2” für einen Bolus von 2 IE) auszulösen verhält sich genauso, als ob das "Spritze"-Symbol in **AAPS** genutzt werden würde. 2) Sende die Kohlenhydrate (_z. B._ “carbs 20” wird 20g Kohlenhydrate ankündigen). Das verhält sich genauso, als ob das "Kohlenhydrate"-Symbol in **AAPS** genutzt werden würde.

Um Hypos zu vermeiden, solltest Du zu Beginn **weniger Insulin** bolen, als es Dein Mahlzeitenfaktor vorgeben würde. Das wird gemacht, da in der Regel weder der aktuelle Glukosewert noch der aktuelle Glukosetrend berücksichtigt sind.

**Die Reihenfolge, in der Du die SMS sendest, ist wichtig**. Wenn Du eine große Kohlenhydratmenge (egal auf welchem Weg) ankündigst und SMB aktiviert sind, wird **AAPS** sofort darauf mit einem (Teil)-Bolus reagieren. Wenn Du _nach_ der Ankündigung der Kohlenhydrate, dann versuchst einen Bolus abzugeben, wirst Du eine frustrierende Verzögerung erfahren und eine "Bolusabgabe läuft"-Meldung erhalten. Du wirst dann überprüfen müssen, wie viel Insulin bereits als SMB abgegeben wurde. Oder wenn Dir gar nicht auffällt, dass SMBs abgegeben wurden und Dein eigener Bolus ebenfalls durchgelaufen ist und damit insgesamt zu viel Insulin für die Mahlzeit gebolt wurde. Deshalb schicke, beim remote bolen einer Mahlzeit, den Bolus immer _vor_ der Kohlenhydratankündigung. Wenn Du magst, kannst Du Nightscout, AAPSClient und SMS-Befehle miteinander kombinieren. Kohlenhydrate können ohne Authentifizierung über Nightscout angekündigt werden (siehe Anleitung weiter unten) und sind daher schneller als SMS-Befehle.

### Problembehandlung von SMS-Befehlen und FAQ

#### F: Was kann mit SMS-Befehlen _nicht_ gemacht werden?

1) Ein **zeitlich begrenzter Profilwechsel_ (z. B. ein "Trainings-Profil" für 60 Minuten setzen) ist _nicht über SMS-Befehle möglich**. Ein dauerhafter Profilwechsel auf ein "Trainings-Profil" ist allerdings möglich. Temporäre Profilwechsel können stattdessen über Nightscout oder den AAPSClient erfolgen.

2)  **Automatisierungen** abgebrochen werden oder **benutzerdefinierte Ziele** können nicht gesetzt werden. Es gibt aber vergleichbare Lösungen: Stell' Dir beispielsweise vor, dass in Deinen normalen Profil das Glukoseziel 5.5 bzw. 100 sei. Du hast in AAPS eine Automatisierung erstellt, die in der Nacht zwischen 2:30h und 3:30h wegen des Sportunterrichts ein hohes Ziel von 7.0 bzw. 126 setzt, wenn "temporäres Ziel nicht vorhanden" als Bedingung zutrifft. Dein Kind ist mit dem AAPS-Smartphone bereits in der Schule und in dieser Woche wird der Sportunterricht kurzfristig abgesagt und durch eine Pizza-Party ersetzt. Wenn das hohe temporäre Ziel von 7.0 bzw 126 durch die Automatisierung gesetzt wurde und Du dieses Ziel (am AAPS-Smartphone oder remote) abbrichst, ist die Bedingung weiterhin erfüllt und **AAPS** wird einfach in der nächsten Minute das hohe temporäre Ziel erneut setzen.

**Wenn Du Zugriff auf das AAPS Smartphone hättest**, könntest Du die Automatisierung deaktivieren/anpassenoder wenn Du das nicht machen möchtest, kannst Du einfach für 60 Minuten ein neues temporäres Ziel von 5.6 (bzw. 100 mg/dl) im Reiter AKTIONEN oder durch langes Drücken auf den Ziele-Button. Dadurch wird die Automatisierung daran gehindert, ein hohes Ziel von 7.0 (bzw. 126 mg/dl) zu setzen.

**Wenn Du keinen Zugriff auf das AAPS-Telefon hast**, kannst Du mit SMS-Befehlen eine ähnliche Lösung erreichen: Mit dem Befehl "target meal" kannst Du beispielsweise ein Ziel von 5.0 für 45 Minuten setzen (andere voreingestellte Ziele sind Aktivität 8.0 ( bzw. 144 mg/dl) oder Hypo, siehe Tabelle). Mit SMS-Befehlen kannst Du allerdings keinen _selbstdefinierten_ Zielwert angeben (z. B. von 5.6 für 60 Minuten), dazu brauchst Du den **AAPSClient** oder Nightscout.

#### F: Was passiert, wenn ich es mir nach dem Senden eines Befehls anders überlege?

**AAPS** führt nur den letzten (aktuellen) Befehl aus. Wenn Du also "bolus 1.5" eingibst und dann ohne Authentifizierung einen neuen Befehl „bolus 1“ hinterherschickst, wird der vorherige Befehl (bolus 1.5) ignoriert. **AAPS** sendet dem Eltern-/Betreuenden-Smartphone zunächst immer eine Antwort zur Bestätigung des auszuführenden Befehls, bevor Du dazu aufgefordert wirst, den Authentifizierungscode einzugeben. Danach wird eine Antwort zur ausgeführten Aktion geschickt.

#### F: Warum habe ich keine Antwort auf einen SMS-Befehl erhalten?

Es könnte aus einem dieser Gründe sein:

1) Die Nachricht hat es nicht bis zum AAPS-Smartphone geschafft (Netzwerk-Probleme). 2)  **AAPS** verarbeitet noch eine Anfrage (_z. B._ einen Bolus, der je nach Insulinmenge einige Zeit zur Abgabe benötigt). 3) Das AAPS-Smartphone hat beim Empfang des Befehls eine schwache Bluetooth-Verbindung zur Pumpe und das Kommando konnte nicht ausgeführt werden (dies löst normalerweise einen Alarm auf dem AAPS-Smartphone aus).

#### F: Wie kann ich einen Befehl stoppen, nachdem er bereits authentifiziert wurde?

Er kann nicht gestoppt werden. Du kannst allerdings eine Bolusgabe, die per SMS geschickt wurde direkt auf dem **AAPS**-Smartphone abbrechen, indem Du im Bolus-Popup auf "Abbrechen" tippst. Dazu musst Du aber schnell sein. Viele Befehle (abgesehen von Bolus- und Kohlenhydrat-Ankündigungen) können entweder leicht rückgängig gemacht werden oder deren ungewollte Auswirkungen können abgemildert werden.

Bei Fehlern beim Bolen und Kohlenydrat-Ankündigungen, kannst Du trotzdem handeln. Wenn Du beispielsweise 20 g Kohlenhydrate angekündigt hast, aber Dein Kind isst nur 10 g und Du (oder ein verfügbarer Betreuer) kann die "Behandlung" nicht direkt auf dem **AAPS**-Smartphone löschen, kannst Du ein hohes temporäres Ziel oder ein reduziertes Profil setzen, um **AAPS** weniger aggressiv arbeiten zu lassen.

#### F. Warum erhalte ich auf meinen SMS-Befehl mehrere Antwort-Nachrichten?

Wenn Du Antworten mehrfach erhältst (_z. B._ auf einen Profilwechsel), hast Du möglicherweise versehentlich einen Zirkelbezug mit anderen Apps erzeugt. Das könnte zum Beispiel xDrip+ sein. Falls dies der Fall ist, stelle sicher, dass xDrip+ (oder eine andere App) keine Behandlungsdaten zu Nightscout hochlädt.

#### F. Ich habe gerade die SMS-Befehle eingerichtet und bekomme jetzt viel zu viele SMS-Nachrichten. Kann ich die Häufigkeit reduzieren oder stoppen?

Die Nutzung der SMS-Befehle kann viele automatisierte Nachrichten vom AAPS-Smartphone auf das Smartphone der Eltern/Betreuenden auslösen. Du wirst auch Nachrichten für aktive **AAPS**-Automatisierungen (z. B. “Basal-Profil in der Pumpe aktualisiert”) erhalten. Eine SMS-Flat für den Handyvertrag des AAPS-Smartphones und des Eltern-/Betreuenden-Smartphones wird sehr empfohlen, wenn viele SMS verschickt werden. Es kann auch hilfreich sein, SMS-Benachrichtigungen, Alarme und Vibrationen auf allen Smartphones zu deaktivieren. SMS-Befehle können nur mit den entsprechenden bestätigenden SMS genutzt werden. Falls Du direkt mit Deinem Kind (wenn es alt genug ist) kommunizieren möchtest, solltest Du etwas anderes als SMS dazu nutzen. **AAPS**-Elterrn/Betreuende nutzen daher häufig andere Kommunikations-Apps wie WhatsApp, Lime, Telegram und den Facebook-Messenger.

#### F. Warum funktionieren SMS-Befehle auf meinem Samsung-Smartphone nicht?

Es gab Hinweise, dass nach einem Update des Samsung Galaxy S10 die SMS-Befehle nicht mehr funktioniert haben. Dies konnte durch Abschalten der Option 'als Chat Message senden' behoben werden.


![grafik](../images/remote-control-18.png)

#### F. Wie kann ich Probleme mit Android Nachrichten App beheben?

Wenn Du Probleme beim Senden oder Empfangen der SMS mit der Android Nachrichten App haben solltest, deaktiviere die Ende-zu-Ende-Verschlüsselung sowohl auf dem Smartphone des Kindes, als auch auf dem 'Follower'-Smartphone:

●   Öffne den entsprechenden SMS-Nachrichtenverlauf

●   Klicke auf die drei Punkte in der oberen rechten Ecke

Wähle DETAILS aus

Aktiviere NUR ALS SMS/MMS SENDEN

(aapsclient)=
## 2) AAPSClient

_Ab AAPS Version 3.2 (oder höher) ersetzt der **AAPSClient** den **NSClient**. Details findest Du in den Release Notes._

Wenn Du ein Eltern-/Betreuenden-Smartphone haben solltest und eine ältere **AAPS**-Version (vor 3.2) benötigst, kannst Du die [**AAPSClient**](https://github.com/nightscout/AndroidAPS/releases/)-App direkt herunterladen und installieren. Der **AAPSClient** sieht **AAPS** sehr ähnlich, und stellt den Eltern/Betreuenden einen Reiter zur Verfügung, auf dem Aktionen remote in **AAPS** ausgeführt werden können:

![NSCLIENT_ 2024-05-17 134512](https://github.com/openaps/AndroidAPSdocs/assets/137224335/6c66a27c-21d7-4c43-ac66-001669c0634f)


Es gibt zwei Versionen der apk, die [heruntergeladen werden können](https://github.com/nightscout/AndroidAPS/releases/):  **AAPSClient** & **AAPSClient2**, die einen kleinen aber feinen Unterschied, der unten erklärt wird, haben.

**AAPSClient** kann auf einem einzigen Smartphone oder mehreren Follower-Smartphones installiert werden (z.B. auf das Follower-Smartphone des ersten Elternteils und des zweiten Elternteils), um so beiden die Möglichkeit zu geben das zugehörige **AAPS**-Master-Smartphone remote zu steuern.

Sollte die Notwendigkeit bestehen, ein weiteres AAPS-Smartphone (eines anderen Patienten mit einem Nightscout-Konto) zu steuern, ist eine weitere Kopie des **AAPSClient** notwendig. Hierzu muss dann der **AAPSClient2** zusätzlich zum **AAPSClient** installiert werden. Durch den **AAPSClient 2** ist es möglich, dass eine betreuende Person die **AAPSClient** apk zweimal auf dem Follower-Smartphone installieren kann und so den Daten von zwei Patienten gleichzeitig folgen kann.

Um den **AAPSClient** herunterzuladen, navigiere [hierhin](https://github.com/nightscout/AndroidAPS/releases/) und klicke auf das Element **“app-AAPSClient-release_x.x.x.x”** (die im Screenshot unten gezeigte Version kann eventuell älter sein):

![grafik](../images/remote_control_and_following/AAPSClient_download_02.png)

Gehe dann in Deinen _Downloads_-Ordner auf Deinem Computer. Unter Windows zeigt -downloads- das rechte Menüband an:

![grafik](../images/remote_control_and_following/AAPSClient_download_folder_03.png)

Nach dem Herunterladen klicke auf _im Ordner anzeigen_, um die Datei dort zu finden.

Die **AAPSClient** apk kann nun entweder:

Mit einem USB-Kabel auf das Follower-Smartphone übertragen werden, oder in einen Google-Drive Ordner gezogen werden und dann auf das Follower-Smartphone durch klicken auf app-"AAPSClient-release-"-Datei gebracht werden.

### Synchronisierung - AAPSClient und AAPS einrichten (für Version 3.2.0.0 und höher)

Once __AAPSClient__ apk is installed on the follower phone, the user must ensure their ‘Preferences’ in Config Builder are correctly set up and aligned with __AAPS__ for Nightscout 15 (see Release Notes [here](../Maintenance/UpdateToNewVersion)). Das folgende Beispiel bietet Hilfestellung bei den Synchronisierungs-Einstellungen für NSClient und NSClientV3 im Zusammenspiel mit Nightscout 15. Es gibt daneben auch noch andere __AAPS__-Optionen (z.B. xDrip+).

Innerhalb des Abschnitts 'Synchronisierung' in der 'KONFIGURATION' kannst Du Dich für verschiedene Synchronisierungsoptionen sowohl für __AAPS__ als auch das Follower-Smartphone entscheiden:

- Option 1: Nightscout-Client (auch unter 'v1' bekannt) - der die Daten des Benutzenden mit Nightscout synchronisiert; oder

- Option 2: NSClientV3 (auch als „v3“ bezeichnet) - das die Daten mithilfe der v3-API mit Nightscout synchronisiert.

![AAPS1_Screenshot 2024-05-17 133502](https://github.com/openaps/AndroidAPSdocs/assets/137224335/4bdfed7e-3b2f-4fe8-b6db-6fcf0e5c7d98)

Du musst sicherstellen, dass __beide__ Smartphones (AAPS und AAPS-Client) die gleiche Synchronisierungs-Option nutzen (v1 oder v3):

Option 1: v1 (Nightscout-Client) für beide Smartphones:

- Gib Deine Nightscout-URL ein

- Gib Dein Nightscout API-Key (API secret) ein

Option 2: v3 für beide Smartphones:

- Gib Deine Nightscout-URL in den NSClientV3-Einstellungen ein

- Gib Dein NS-Zugangstoken in der KONFIGURATION ein. Bitte folge den Hinweisen [hier](https://nightscout.github.io/nightscout/security/#create-a-token)

Wenn Du die optionale Funktion 'Mit Websockets verbinden' auswählst, achte darauf, dass dies sowohl für das __AAPS__-Smartphone als auch für das __AAPSClient__-Smartphone aktiviert bzw. deaktiviert ist. Das Aktivieren der Websockets in __AAPS__ und nicht im __AAPSClient__ (und auch umgekehrt) wird nur dazu führen, dass __AAPS__ nicht richtig funktioniert. Durch das Aktivieren der Websockets wird eine schnellere Synchronisierung mit Nightscout ermöglicht. Das kann zu einem höheren Akkuverbrauch des Smartphones führen.



![WB2_Screenshot 2024-05-17 140548](https://github.com/openaps/AndroidAPSdocs/assets/137224335/8d9a7dc5-b3ea-4bf3-9286-313f329b1966)


Achte darauf, dass sowohl der __AAPSClient__ als auch __AAPS__ auf dem Reiter „NSClient“ für jedes der Smartphones „verbunden“ anzeigt und dass bei Auswahl eines „Profilwechsel“ oder „Temporäres Ziel“ im  __AAPSClient__ dieses auch in __AAPS__ korrekt aktiviert wird.

Achte auch darauf, dass Kohlenhydrat-Eingaben, sowohl im __AAPSClient__ als auch in __AAPS__ unter 'Behandlungen" erscheinen. Passiert das nicht, ist das ein Hinweis darauf, dass die Einstellungen nicht richtig sind.

### Das 'NS access token'-Konfigurationsproblem beheben

Die genaue Konfiguration des 'NS Access Token' kann davon abhängig sein, ob Du einen Nightscout-Anbieter als Bezahldienst (paid service) nutzt oder nicht.

Wenn Du Probleme mit **AAPS** v3 hast ('NS Access Token' wird nicht akzeptiert) und Du für Deine Nightscout-Seite bezahlst, solltest Du zuerst diesen Anbieter um Hilfestellung beim Lösen des NS Access Token Problems bitten. In allen anderen Fällen wende Dich an die **AAPS**-Gruppe. Bitte prüfe im Vorfeld, ob Du die [hier](https://nightscout.github.io/nightscout/security/#create-a-token) beschriebene Anleitung genau durchgegangen bist.

### AAPSClient-Funktionen sind unter anderem:

![Sara's AAPSClient table](../images/remote-control-23.png)

Mit dem **AAPSClient** kann das Elternteil/Betreuende einen Großteil der Anpassungen direkt in **AAPS** (Ausnahme: Bolusabgabe) über das Mobilfunknetz oder Internet remote vornehmen. Die wichtigsten Vorteile des **AAPSClient** sind die Geschwindigkeit und Einfachheit mit der Eltern/Betreuende **AAPS** remote steuern können. Der __AAPSClient__ _kann_ deutlich schneller als die Eingabe von zu authentifizierenden SMS-Befehlen sein. Befehle, die im **AAPSClient** eingegeben werden, werden nach Nightscout hochgeladen.

Remote control through **AAPSClient** is only recommended if your synchronization is working well (_i.e._ you don’t see unwanted data changes like self-modification of TT, TBR etc) see [release notes for Version 2.8.1.1](../Maintenance/ReleaseNotes#version-2811) for further details.

### AAPSClient mit Smartwatch-Optionen

Eine Smartwatch kann sehr nützlich sein, um bei Kindern **AAPS** zu managen. Es sind einige verschiedene Konfigurationen möglich. Auf einer kompatiblen Smartwatch kann die [AAPSClient WearOS App](https://github.com/nightscout/AndroidAPS/releases/) installiert werden, die mit der AAPSClient-App auf dem Eltern-Smartphone verbunden wird. Damit können der aktuelle Glukosewert und der Loop-Status angezeigt werden. Zusätzlich können dann KH-Einträge vorgenommen werden und auch temporäre Ziele und Profiländerungen aktiviert werden. Die Abgabe eines Bolus ist NICHT über die WearOS App möglich. You can read more about Smartwatches [here](#4-smartwatches).

(nightscout)=
## 3) Nightscout

Genauso wie es Nightscout als einen Server "in der Cloud" gibt, gibt es auch eine dedizierte **Nightscout**-App, die über den App Store direkt auf Dein iPhone heruntergeladen werden kann. If you have an Android follower phone, there is not a dedicated Nightscout app and it is better to use [**AAPSClient**](#2-aapsclient), or, if you only want to follow, and not send treatments you can download and install the [Nightwatch](https://play.google.com/store/apps/details?id=se.cornixit.nightwatch) app from the Playstore.

Sobald Du die **Nightscout**-App auf Deinem iPhone installiert hast, öffne die App, folge den Anweisungen für die Einrichtung und gib Deine Nightscout-Adresse (siehe links unten) ein. Je nach Anbieter bei dem Deine Nightscout-Seite läuft, kann es etwas anders aussehen. (_z. B._ http://deineadresse.herokuapp.com). Gib dann Dein Nightscout API secret (Passwort) ein (siehe rechts unten). Wenn Du nicht nach Deinem API-Passwort gefragt wirst, klickst Du oben in der App auf das Schloss-Symbol und gibst es dann ein:

![grafik](../images/remote-control-24.png)

Weitere Informationen zur Einrichtung findest Du direkt bei [Nightscout](https://nightscout.github.io/nightscout/discover/)

Wenn Du Dich das allererste Mal einloggst, siehst Du eine sehr einfache Ansicht (links unten). Passe die Anzeige an, indem Du das "Hamburger"-Menü oben rechts auswählst und nach unten scrollst:

![grafik](../images/remote-control-25.png)

Scrolle bis zu den „Einstellungen“ herunter. Die Darstellung der Glukosewerte erfolgt standardmäßig "logaritmisch". Das kannst Du unter "Skalierung" auf "Linear" ändern. Um das Basal der Pumpe einzublenden, ändere unter dem Abschnitt "Basalraten-Darstellung" den Wert auf "Standard“. Scrolle weiter herunter bis zum Abschnitt "Zeige Plugins". Wichtig ist, dass dort “Behandlungs-Portal” ausgewählt ist. In diesem Abschnitt kannst Du einige andere Metriken zusätzlich auswählen, von denen Aktives Insulin, Behandlungs-Portal, Pumpe, Kanülenalter, Insulin-Alter, Basalraten-Profil, und OpenAPS am nützlichsten sind.

![grafik](../images/remote-control-26.png)

![grafik](../images/remote-control-27.png)

Wichtig ist, dass Du nach Deinen Änderungen unten auf "Speichern“ klickst, damit diese Änderungen wirksam werden.

Nach dem Drücken von „Speichern“ wird die App zum Hauptbildschirm der Nightscout-App zurückkehren. Es sollte ungefähr so aussehen:

![grafik](../images/remote-control-28.png)

Schauen wir uns das obere linke Menü der Nightscout-App etwas genauer an:

![nightscout top bar](../images/remote-control-29.png)

Es gibt auf diesem Bildschirm eine Vielzahl an Statusinformationen des **AAPS**-Systems in den grauen Tabs (und noch mehr Informationen werden angezeigt, wenn Du auf die Tabs tippst):

![grafik](../images/remote-control-30.png)

![grafik](../images/remote-control-31.png)

### Behandlungen über die Nightscout-App an AAPS senden

Um das Senden von Behandlungsdaten aus der **Nightscout**-App an das **AAPS** des Haupt-Smartphones (Master) zu ermöglichen, gehe auf dem **AAPS**-Hauptbildschirm in den Reiter **AAPSClient**. Öffne oben rechts das 3-Punkte-Menü und öffnen dort AAPSClient-Einstellungen – Synchronisierung und wähle die entsprechende Option aus. Aktiviere die Option, damit die verschiedenen Befehle (Temporäre Ziele etc.) empfangen werden können und auch um Profile zwischen Geräten synchronisieren zu können. Wenn es den Anschein haben sollte, dass die Synchronisierung nicht erfolgt, gehe auf den AAPSClient-Reiter und wähle im 3-Punkte-Menü "Vollständige Synchronisation" und warte einige Minuten ab.

Nightscout auf Deinem iPhone hat den vollen Funktionsumfang, wie es auch Nightscout auf Deinem PC hat. Es erlaubt Dir, viele Befehle an **AAPS**zu schicken, aber es erlaubt Dir nicht, einen Bolus abzugeben.

### Negatives Insulin löschen, um wiederholte Hypos zu vermeiden

Auch wenn Du keinen eigentlichen Bolus abgeben kannst, kannst Du eine Insulingabe durch Nightscout als Korrekturbolus "ankündigen". Weil AAPS ab diesem Zeitpunkt diesen Fake-Bolus berücksichtigt, führt die faktisch dazu, dass AAPS _weniger aggressiv_ reagiert. Das kann, wenn Dein Profil (z. B. wg. sportlicher Aktivität) zu stark war, helfen, um negatives Insulin auszugleichen und so niedrige Werte zu verhindern. Falls Dein **Nighscout**-Setup davon abweichen sollte, solltest Du das mit dem **AAPS**-Smartphone in Deiner Nähe genau prüfen.

![24-10-23, cancel negative insulin NS](../images/0af1dbe4-8aca-466b-816f-8e63758208ca.png)


Einige der hilfreichsten **Nightscout**-Befehle sind in der unten stehenden Tabelle beschrieben.

#### Nightscout Befehls-Tabelle

![grafik](../images/remote-control-33.png)

Mehr zu den **Nightscout**-Optionen kannst Du [hier](https://nightscout.github.io/) nachlesen

### Tipps, um das Beste aus der Nightscout-App herauszuholen

1). Wenn Du auf einer Seite "hängenbleibst" und zum Hauptbildschirm zurückkehren möchtest, klicke einfach auf „Aktualisieren“ (unten in der Mitte). Das bringt Dich zurück auf den **Nightscout**-Startbildschirm mit der Anzeige der Glukosewerte.

Wenn Du das aktuell auf dem Smartphone laufende Profil sehen möchtest, drücke auf die verschiedenen Symbole oberhalb des Diagramms. Zusatzinformationen (Mahlzeitenfaktoren, Insulin-Empfindlichkeit und Zeitzone etc.) erhältst Du, indem Du auf "Basal“ drückst und hinter "OpenAPS“ sind Informationen zum Profil und das aktuelle Ziel etc. anzeigbar. Der Ladezustand sowohl des Smartphone-Akkus, als auch der Pumpen-Batterie können ebenfalls angezeigt werden. BWP zeigt die Vorhersage des Algorithmus zur voraussichtlichen Entwicklung des aktiven Insulins (IOB) und der aktiven Kohlenhydrate (COB).

#### Andere Menü-Symbole: Was bedeutet der Stift (bearbeiten)?

Du kannst Bleistift (technisch) verwenden, um Bolus- oder Korrekturbehandlungen der letzten 48 Stunden zu verschieben oder zu löschen.

Mehr Details dazu findest Du [hier](https://nightscout.github.io/nightscout/discover/#edit-mode-edit)

Obwohl dies potenziell nützlich sein könnte, um angekündigte (aber nicht gebolte) Kohlenhydrate zu löschen, funktioniert es in der Praxis derzeit nicht gut mit **AAPS** und wir empfehlen diese Änderungen direkt über die **AAPS**-App vorzunehmen.

(smartwatches)=
## 4) Smartwatches

Smartwatches werden mehr und mehr mit **AAPS**,_sowohl_ für Erwachsene mit Diabetes, als Betreuende/Eltern von Kindern mit Diabetes, eingesetzt.

### Generelle Vorteile Smartwatches mit **AAPS** zu nutzen


Smartwatches können - je nach Modell - auf unterschiedliche Weise mit **AAPS** genutzt werden. Sie können **AAPS**ganz oder teilweise steuern oder einfach verwendet werden, um Glukosewerte, aktives Insulin und andere Parameter remote zu überprüfen.

Die Integration einer Smartwatch mit **AAPS** kann in vielen Situationen nützlich sein. Z.B. beim Auto- oder Motorradfahren oder bei sportlichen Aktivitäten. Für manche Menschen ist ein kurzer Blick (z. B. in Besprechungen, auf einer Party oder beim Abendessen) auf die Smartwatch deutlich diskreter als der Blick auf das Smartphone. Von einem Sicherheitsaspekt ist eine Smartwatch, wenn man unterwegs ist, besonders hilfreich. Das **AAPS**-Smartphone kann (z. b. in der Tasche) verstaut bleiben und AAPS kann über die Smartwatch gesteuert werden.

### Besondere Vorteile für **AAPS**-nutzende Eltern/Betreuende

Ist das **AAPS**-Smartphone in der Nähe des Kindes, kann der Betreuende die Smartwatch zur Kontrolle nutzen und Anpassungen über die Smartwatch vornehmen, ohne dass das **AAPS**-Smartphone berührt werden muss. Das kann besonders komfortabel sein, wenn das **AAPS**-Smartphone in einem Pumpengürtel versteckt getragen wird.

A smartwatch can be used either _in addition_ to, or as an _alternative_ to the PHONE-based options for remote control or [following only](../RemoteFeatures/FollowingOnly.md).

Ein weiterer Vorteil liegt darin, dass die Verbindung mit der Smartwatch per Bluetooth erfolgt (anders ein Follower-Smartphone der Eltern/Betreuenden, dass eine Internetverbindung über Mobilfunk oder WLAN benötigt) und so auch in Situationen ohne Internetverbindung (an abgelegenen Orten, auf einem Boot oder auf halber Höhe eines Berges) auf AAPS zugegriffen werden kann. Wenn sich sowohl das **AAPS**-Smartphone, als auch die Smartwatch im gleichen WLAN befinden, kann auch die WLAN-Verbindung genutzt werden.

### Verschiedene Arten die Smartwatch mit AAPS zu nutzen

Viele der Möglichkeiten, die für **AAPS**-Nutzende bestehen, sind in [Nightscout on your watch](https://nightscout.github.io/nightscout/wearable/#) beschrieben. Dir wird also dringend empfohlen diese Informationen zuerst zu lesen und so einen guten ersten Überblick zu bekommen.

Derzeit gibt es fünf Möglichkeiten, Smartwatches mit **AAPS** zu verwenden. Diese werden in der folgenden Tabelle beschrieben: 


![29-10-23, updated AAPSClient watch option table](../images/bbbe0e84-1a8c-4163-8a0b-dcf91144af14.png)



Diese Tabelle wurde in 2023 erstellt und ist nicht vollständig. Es entstehen permanent neue Funktionalitäten und Möglichkeiten.

### Bevor Du Dir eine Smartwatch kaufst …

Welches genau Modell Du kaufen solltest, hängt von den gewünschten Funktionalitäten ab. Derzeit gibt es (noch) zwei Arbeitsblätter, die kompatible [Smartphones](https://docs.google.com/spreadsheets/d/1zO-Vf3wv0jji5Gflk6pe48oi348ApF5RvMcI6NG5TnY/edit#gid=2097219952) und [Smartphones and Watches](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435) zeigen. Wegen der großen Anzahl an Smartwatches und Smartphones werden diese allerdings nicht mehr aktualisiert. Es ist einfacher kurz über Discord und Facebook-Gruppen die entsprechende Information zu bekommen.

Zu den beliebten Smartwatch-Marken gehören Samsung Galaxy, Garmin, Fossil, Mi Band und Fitbit. Die verschiedenen Einsatzmöglichkeiten, die in der obigen Tabelle zusammengefasst sind, werden im Folgenden näher erläutert. Das soll Dir helfen, die Smartwatch auszuwählen, die am besten zu Deinen Bedürfnissen passt.

Wenn Du eine Smartwatch mit dem Ziel das **AAPS**-Smartphone remote steuern zu wollen anschaffst, solltest Du insbesondere darauf achten, dass beide Geräte kompatibel zueinander sind (besonders dann, wenn Du ein älteres oder ungewöhnliches Smartphone hast).

Wenn Du nur die Glukosewerte sehen möchtest, und darüber hinaus nicht mit **AAPS** interagieren möchtest, steht Dir eine größere Auswahl an einfachen, erschwinglichen Smartwatches zur Verfügung.

Der beste Weg, eine Smartwatch auszusuchen, ist in den entsprechenden **AAPS** Discord- oder Facebook-Gruppen nach Beiträgen mit dem Stichwort "watch" zu suchen. Lies und profitiere von den Erfahrungen anderer. Wenn Deine Frage nicht durch bestehende Beiträge beantwortet wird, stelle spezifische Fragen.

#### Für Smartwatch Optionen 1-3: Was _ist_ Wear OS?

Die ersten drei Smartwatch-Optionen setzen **Wear OS** als Betriebssystem voraus.

**Wear OS** ist das Betriebssystem, das auf einigen modernen Android Smartwatches läuft. In [2018](https://en.wikipedia.org/wiki/Wear_OS) hat Google _Android Wear 1.x in Wear OS_ ab Version 2.x umbenannt. Wenn also ein Gerät mit “_Android Wear_” anstatt mit **Wear OS** gekennzeichnet ist, kann das auf eine ältere Version hinweisen. Wenn die Smartwatch nur als _kompatibel_ mit Android und iOS beschrieben wird, bedeutet das nicht, dass sie Wear OS verwendet. Möglicherweise handelt es sich dann dabei um ein anderes Betriebssystem, das nicht mit **AAPS** kompatibel ist. Eine Smartwatch sollte **WearOS** und idealerweise Android 10 (oder neuer) nutzen, um die verschiedenen Versionen von **AAPS** oder dem **AAPSClient** voll nutzen zu können. Im Oktober 2023 war die aktuelle **WearOS**-Version WearOS 4.0 (mit Android 13 als Basis).

Wenn Du die **AAPS** wear.apk auf Deiner **Wear OS**-Smartwatch installierst, kannst Du aus einer Vielzahl verschiedener **AAPS**-Ziffernblätter auswählen. Alternativ kannst Du auch das Standard-Ziffernblatt Deiner Smartwatch mit **AAPS** Informationen erweitern (sog. "complications"). Complications (im Deutschen: Komplikationen) bezeichnen Zusatzfunktionen einer Smartwatch, die diese neben dem reinen Anzeigen der Zeit zur Verfügung stellt. Komplikationen sind ab Wear OS Version 2.0 oder höher verfügbar.


#### Wie könnte meine Smartwatch zur Remote-Steuerung von AAPS aussehen?

Nach der Installation von **AAPS** auf Deiner Smartwatch kannst Du automatisch Dein Lieblings-Zifferblatt aus den **AAPS**-Watchfaces auswählen. Bei den meisten Smartwatches wählst Du ein anderes Zifferblatt aus, indem Du so lange auf den Startbildschirm drückst, bis sich der Bildschirm verkleinert und Du dann nach rechts wischst:

![grafik](../images/67fd75f3-721c-438d-be01-1a8e03532290.png)

#### Wie würde ich eine Wear OS Smartwatch im Alltag nutzen?

Further details about the watchfaces, and day-to-day use, including how to make (and share) your own customised watchface, can be found in the section [Operation of Wear AAPS on a Smartwatch](../UsefulLinks/WearOsSmartwatch.md).

### Option 1) Standalone Smartwatch mit **AAPS**

Klingt attraktiv, oder? Wie dem auch sei, momentan experimentieren nur wenige Enthusiasten mit **AAPS**  auf einer Standalone Smartwatch. Es gibt nur wenige Smartwatches mit einer vernünftigen Bedienoberfläche, die auch gut mit **AAPS** und Deiner CGM App funktionieren. Beliebte Modelle sind u. a. die LEMFO LEM 14, 15 und 16. Du musst die vollständige **AAPS** APK (die Apk, die normalerweise auf einem Smartphone installiert wird) anstelle der **AAPS** "wear" apk auf die Smartwatch laden.

Auch wenn es derzeit keinen eindeutigen Spezifikationen gibt, die erkennen lassen, ob eine Smartwatch als Standalone **AAPS** nutzbar ist, gibt es einige Parameter, die gute Indikatoren sind:

1) Android 10 oder höher. 2)  Die Möglichkeit zu haben das Zifferblatt aus dem "Square-Modus" zu holen, um Text zum einfacheren Lesen zu vergrößern. 3) Sehr gute Akkulaufzeit. 4) Gute Bluetooth-Reichweite.

Die meisten Frustrationen mit Standalone **AAPS**-Smartwatches entstehen aus der Interaktion mit einem winzigen Bildschirm, und der Tatsache, dass die aktuelle AAPS-Voll-App-Benutzeroberfläche nicht für eine Smartwatch konzipiert wurde. Durch das sehr eingeschränkte Display und kann ein Stift beim Editieren der **AAPS**-Einstellungen helfen. Einige der AAPS-Tasten sind möglicherweise auf dem Zifferblatt nicht sichtbar.

Ein weiteres Problem ist es eine Smartwatch mit langer Akkulaufzeit, die in der Regel klobig und dick sind, zu finden. Typische Probleme mit denen gekämpft werden sind Betriebssystem- und Energiespar-Einstellungen, das Starten von Sensoren über die Smartwatch, geringe Bluethooth-Reichweite (um die Verbindung mit Pumpe und Sensor zu halten) und fraglicher Wasserfestigkeit. Beispiele findest Du in den unten stehenden Fotos (Fotoquelle: Janvier Doyon).

![grafik](../images/6d787373-bc0c-404d-89aa-54d3127c4a6f.png)

![grafik](../images/5d2feecc-3f10-4767-b143-1a72da2b9bd4.png)

Wenn Du eine Standalone Smartwatch aufsetzen möchtest und Zusatzinformationen benötigst, lies' die Beiträge und Kommentare in der **AAPS** -Facebookgruppe (Suchwörter: “standalone” und “Lemfo”) oder auf Discord.

### Option 2) **AAPS** auf der Smartwatch steuert **AAPS** auf dem Smartphone

Ähnlich wie mit einem Follower-Smartphone auf dem der AAPSClient, Nightscout oder SMS-Befehle laufen (Link zu Abschnitten) kann eine Smartwatch genutzt werden, um **AAPS** remote zu steuern und vollständige Profildaten bereitzustellen. Ein entscheidender Unterschied liegt darin, dass die Smartwatch sich mit dem **AAPS**-Smartphone über Bluetooth verbindet und keinen Authentifizierungscode benötigt. Nebenbei bemerkt: Nutzende haben berichtet, dass, wenn sowohl Smartwatch als auch das **AAPS**-Smartphone über Bluetooth verbunden sind, dies auch ein WLAN ist, und so beide Geräte über das WLAN interagieren, sodass das die Empfangsreichweite vergrößert. Hier reden wir von einer Remote-Bolusabgabe in einer Situation in der die betreuende Person mit der **AAPS**-Smartwatch und das Kind (mit dem **AAPS**-Smartphone) an verschiedenen Orten sind. Das hilft z.B., wenn das Kind in der Schule ist.

Eine Smartwatch zur Remote-Steuerung ist verschiedensten Situationen komfortabel:

a)  **AAPSClient**/Nightscout/**SMS**-Befehle funktionieren nicht oder

b) der Nutzende möchte die Eingabe eines Authentifizierungscode vermeiden (wie es bei der Dateneingabe, dem Setzen eines temporären Ziels oder der Kohlenhydrateingabe über das Follower-Smartphone notwendig ist).

Um **AAPS** steuern zu können, muss auf der Smartwatch **Android Wear** Software (idealerweise 10 oder höher) laufen. Please check the technical specifications of the watch, and check the [spreadsheet of compatible watches](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing). Wenn Du Dir nicht sicher sein solltest, frage einfach in den **AAPS**  Facobook/Discord Gruppen nach.

Eine detaillierte Schritt-für-Schritt Anleitung für die **AAPS**-Einrichtung auf der Samsung Galaxy Watch 4 (40mm) findest Du weiter unten. Die [Garmin](https://apps.garmin.com/en-US/apps/a2eebcac-d18a-4227-a143-cd333cf89b55?fbclid=IwAR0k3w3oes-OHgFdPO-cGCuTSIpqFJejHG-klBTm_rmyEJo6gdArw8Nl4Zc#0)-Smartwatch ist ebenfalls gerne gewählt. If you have experience of setting up a different smartwatch which you think would be useful to others, please add it into these pages [edit the documentation](../SupportingAaps/HowToEditTheDocs.md) to share your findings with the wider **AAPS** community.

#### Die AAPS Wear APK

Die Version, die für die Smartwatch benötigt wird (Wear OS apk), wurde aus dem "vollen" **AAPS**-Build für das Android Smartphone herausgelöst. Deswegen musst Du eine zweite Installationsdatei (sog. 'APK') erzeugen, um **AAPS** wear durch "Sideloading" von Deinem Smartphone auf Deine Smartwatch installieren zu können. Es wird dringend empfohlen, die **AAPS** Wear OS apk Datei unmittelbar nach dem ersten Erstellen der vollständigen **AAPS** apk für das Smartphone zu generieren. Nicht nur, weil es schnell gemacht ist, wenn Du ohnehin gerade [**AAPS** zum ersten Mal erstellst] (link to building **AAPS** for the first time), sondern auch weil damit mögliche Kompatibilitätsprobleme bei der Einrichtung der Smartwatch-Smartphone Kommunikation vermieden werden können. Es ist sehr unwahrscheinlich, dass die **AAPS** Wear apk auf der Smartwatch kompatibel mit der **AAPS** Smartphone apk ist, wenn diese mit unterschiedlichen Versionen von Android Studio erstellt/gebaut wurden, oder wenn Monate seit dem ursprünglichen **AAPS** Build vergangen sind.

Wenn Du **AAPS** bereits auf Deinem Smartphone nutzt und bei der Erstellung in der Vergangenheit nicht beide Installationsversionen (Smartphone und -Smartwatch (wear) **AAPS** APKs)) generiert hast, ist es am Besten, beide Dateien neu zu erzeugen. Wenn Du Android Studio bereits installiert hast, ist es gegebenenfalls sinnvoll, es - wie unten beschrieben - zu deinstallieren und neu zu installieren und dann beide AAPS Versionen (Smartphone und Smartwatch) unmittelbar hintereinander mit der gleichen **keystore**-Datei zu erstellen

#### Wie man Android Studio deinstalliert

Stelle sicher, dass Deine Keystore-Datei sicher (außerhalb der Android Studio Ordner) gespeichert ist.

Es sind mehrere Schritte nötig, um Android Studio komplett von einem Computer zu löschen. Dies ist eine [gute Anleitung](https://www.geeksforgeeks.org/how-to-completely-uninstall-android-studio-on-windows/), wenn Du einen Windows-Rechner nutzt. Als letzten Schritt in dieser Anleitung, wirst Du händisch den "StudioProjects"-Ordner löschen.

Installiere jetzt die neueste Android Studio Version.

#### Erstellen der **AAPS** Wear APK
Kurz gesagt: Der Erstellprozess der Wear APK ist dem der "vollen" Smartphone APK sehr ähnlich. Der Unterschied liegt darin, dass im Android Studio “**AndroidAPS.wear**“ im Dropdown-Menü und als Build-Variante “**fullRelease**” ausgewählt werden muss. Damit wird die **AAPS** Wear apk Datei erstellt.  Wenn Du möchtest, kannst Du aus dem Drop-Down-Menü das **“pumpcontrolRelease”** auswählen und erstellen. Mit dieser Version kannst Du die Pumpe (ohne die Loop-Funktion) remote steuern.

Der folgende Leitfaden geht davon aus, dass Du die neueste Version von Android Studio (re-)installiert hast (hier wurde Giraffe 2022.3.1 genutzt).

![grafik](../images/e8e3b7f3-f82e-425a-968c-cc196434a5f8.png)

Um hierher zurückzukommen:

![grafik](../images/37f4589c-6097-49d4-b0b9-087664914198.png)

Folge den weiteren Anweisungen.

Folge den Eingabeaufforderungen durch die verschiedenen Bildschirme, bis zur Option mit einem Dropdown-Menü, die Dir das Erstellen der "AAPS full apk" anbietet. An dieser Stelle wähle "Wear" anstelle von "AndroidAPS.apk" aus dem Auswahlmenü aus, da Du die apk für Deine Smartwatch erstellen möchtest.


Als Nächstes gehe im Menüband auf "Build"

![grafik](../images/b2cccc84-85b6-4ee1-800b-7c6dcb9dd857.png)


Gehe zu Build > Generate Signed Bundle / APK(s)


![grafik](../images/f488fe36-8cb9-4d81-9d94-5f742a1aaaee.png)

Wähle > APK:

![grafik](../images/Installation_Screenshot_39b.PNG)


Wähle unter Module: AndroidAPS.wear

![grafik](../images/cceaa832-70e6-4ad5-95ec-a82e2a6add1e.png)

Gebe Deine Keystore-Datei an der Standardstelle ein. Der Pfad zu Deiner Keystore-Datei hängt davon ab, wo Du diese gespeicherst hast. In diesem Szenario ist der Pfad zur Datei: C:\Programme\Android\Android Studio\jbr\bin


Der nächste Bildschirm sollte folgendermaßen aussehen:

![grafik](../images/87ce7943-256e-449e-8439-8f9fd5bef05e.png)


Und wähle "fullRelease" aus.

Sei geduldig - das Erzeugen der **AAPS** Wear apk wird (je nach Internetgeschwindigkeit) 10-20 Minuten dauern.

### Troubleshooting

Beim Erstellen der 3.2 **AAPS** App Vollversion (und eigentlich bei jeder signierten App), erzeugt Android Studio eine .json-Datei im gleichen Ordner. This then causes errors with [uncommitted changes](../GettingHelp/TroubleshootingAndroidStudio#uncommitted-changes) when you try to build the next signed app, like the **AAPS** wear app. Am schnellsten kann das behoben werden, in dem Du den Ordner, in dem die Vollversion der AAPS App erzeugt wurde, aufrufst. Der Ordner sollte ungefähr so aussehen:

C:\Benutzer\Dein Name\StudioProjects\AndroidAPS\app\aapsclient\release.

Lösche die .json Datei oder verschiebe sie in einen anderen Ordner. Versuche nun die **AAPS** wear App erneut zu erzeugen (build). If that doesn't work, the more detailed [troubleshooting guide](../GettingHelp/TroubleshootingAndroidStudio) will help you to identify the specific file causing the issue, which could also be your keystore file.


#### Wie man eine Samsung Galaxy 4 Smartwatch mit **AAPS** einrichtet

Dieser Abschnitt ist für Neulinge im Umgang mit Smartwatches und gibt zunächst einen ersten Überblick über die beliebte **Galaxy Watch 4** und danach eine Schritt-für-Schritt Anleitung, um **AAPS** auf der Smartwatch einzurichten.

_Diese Anleitung geht von einer Samsung Galaxy Watch mit Wear OS Version 3 oder niedriger aus._ Solltest Du eine Smartwatch mit Wear OS 4/OneUI 5 oder neuer einrichten wollen, wirst Du den neuen ADB pairing Process nutzen müssen, der in der Samsung Software Deines Smartphones erklärt wird (und hier demnächst beschrieben wird). Hier sind die Anleitungen zur Einrichtung der [Galaxy Watch 5](https://www.youtube.com/watch?v=Y5upzOIxwTU) und der [Galaxy Watch 6](https://www.youtube.com/watch?v=D6bq20KzPW0)

##### Mit der Smartwatch vertraut machen

Nach den im Video gezeigten Grundeinstellungen Deiner Smartwatch, gehe in den Play Store Deines Smartphones und lade "Galaxy Wearable", “Samsung” und entweder “Easy Fire Tools” oder "Wear Installer 2" herunter.

Es gibt eine Reihe von YouTube-Videos von Drittanbietern, die Dir helfen werden, Dich mit Deiner neuen Smartwatch vertraut zu machen, zum Beispiel:

https://www.youtube.com/watch?v=tSVkqWNmO2c

Die App „Galaxy Wearable“ enthält auch ein Benutzerhandbuch. Öffne die Galaxy Wearable App auf Deinem Smartphone, suche unter dem Punkt "Neues Gerät hinzufügen" nach Deiner Smartwatch und versuche diese mir dem Smartphone zu koppeln. In Abhängigkeit von der Version, kann es sein, dass Du dazu aufgefordert wirst eine weitere Drittanbieter App "Galaxy Watch 4 Plugin" aus dem Play Store zu installieren. Der Download ein wenig. Installiere diese auf Deinem Smartphone und versuche danach die beiden Geräte in der Galaxy Wearable App zu koppeln. Gehe durch die verschiedenen Menüs und wähle Deine persönlichen Voreinstellungen aus.

##### Samsung-Konto einrichten

Stelle sicher, dass in dem eMail-Konto, das Du zur Einrichtung des Samsung-Kontos verwendest, ein Geburtsdatum älter als 13 Jahre hinterlegt ist, da die notwendigen Samsung Berechtigungen sonst nur schwer genehmigt werden können. Du kannst ein Gmail Konto eines Kindes (unter 13 Jahren) nicht problemlos in das eines Erwachsenen ändern. Ein möglicher Weg, das zu umgehen ist, das Geburtsdatum auf ein Alter von 12 Jahren und 363 Tagen zu ändern. Am folgenden Tag wird das Konto in ein Erwachsenen-Konto umgewandelt, und Du kannst mit der Einrichtung des Samsung-Kontos weiter machen.

##### Übertragen der **AAPS** Wear App auf Deine **AAPS** Smartphone

Die wear.apk kann über mehrere Wege aus dem Android Studio auf Dein Smartphone übertragen werden:

a) Mit einem USB-Kabel, um die **AAPS** wear apk Datei auf das Smartphone zu bringen und sie dann über "Sideloading" auf die Smartwatch zu laden. Übertrage die Wear.apk auf das Smartphone über USB in den "Downloads"-Ordner oder

b) Schneide die Wear.apk aus Android Studio aus und füge sie in Dein Google Drive Laufwerk ein.


Um AAPS per "sideloading" auf die Smartwatch zu bringen, kannst Du entweder Wear Installer 2 oder Easy Fire Tools nutzen. Wir empfehlen den Wear Installer 2 zu nutzen, da die Anleitung und der Prozess im Video klar und verständlich erklärt wird.

##### Wear Installer 2 zum "Sideloading" von AAPS Wear vom Smartphone auf die Smartwatch nutzen

 ![grafik](../images/43577a66-f762-4c11-a3b3-4d6d704d26c7.png)

Wear Installer 2, das von [Malcolm Bryant](https://www.youtube.com/@Freepoc) entwickelt wurde, kann aus dem Play Store auf Dein Smartphone heruntergeladen und zum Sideloading der AAPS Wear App auf die Smartwatch genutzt werden. Die App hat auch ein praktisches „Wie mache ich ein Sideloading“ [Video](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV).

Es zeigt alle notwendigen Einzelschritte. Am besten schaust Du das Video auf einem separaten Gerät an, sodass Du es während der Smartphone-Einrichtung ansehen kannst.

Um die Akkulaufzeit zu verlängern, schalte - wie auch Video gezeigt - auf der Smartwatch das ADB Debugging aus.

Alternativ kannst Du:

```{admonition} Use Easy Fire tools to side-load the **AAPS** wear on the watch
:class: dropdown

1)   Download _Easy Fire Tools_ from playstore onto phone 

![image](../images/81ceb8f3-dfa6-468b-b9d0-c31b885bc104.png)

2)  Make yourself a developer in the watch (once set up and connected to phone): 

Go to settings >about watch (bottom option) >- software info > software version. 

Tippe schnell so lange auf "Softwareversion", bis eine Benachrichtigung erscheint, die besagt, dass die Smartwatch nun im "Entwicklermodus" ist. Kehre zum oberen Teil des Einstellungsmenüs zurück, scrolle nach unten
 zum Punkt „Entwickleroptionen“ unter „Info zur Uhr“. 

In den „Entwickleroptionen“ aktiviere das „ADB Debugging“ und „Über Bluetooth debuggen“. Die letzte Option zeigt dann die IP-Adresse der Smartwatch. Die letzten beiden Ziffern ändern sich jedesmal mit dem Koppelungsvorgang zu einem neuen Smartphone. Es wird in etwa so aussehen: 167.177.0.20. 5555 (ignoriere die letzten 4 Ziffern). Beachte, dass sich die letzten beiden Ziffern (hier, „20“) dieser Adresse mit jedem neuen AAPS Smartphone ändern.  

![24-10-23, watch ADB debug pic](../images/643f4e8b-09f3-4a8d-8277-76b1839a5c3a.png)

STEP 3)     Enter IP address _e.g._ **167.177.0.20** into Easy Fire tools on the phone (go into the left hamburger, settings and enter the IP address). Klicke dann auf das plug socket Icon oben rechts.  

![image](../images/b927041f-cc53-4cde-9f77-11cd517c9be0.png)


![image](../images/00b2fb8b-5996-4b71-894e-516d63469e1b.png)


STEP 4) Follow the instructions [here](https://wearablestouse.com/blog/2022/01/04/install-apps-apk-samsung-galaxy-watch-4/?utm_content=cmp-true) to side-load (i.e. transfer)  Wear.apk onto the smartwatch using Easy Fire tools

Click side "plug-in" socket in the app, in order to upload Wear OS.apk onto the smartwatch: 

![image](../images/d1bc4c9d-d5ef-4402-a9a2-a51ed242eff3.png)


 Next step > accept the authorisation request on the smartwatch


![image](../images/2c398a34-b865-4aa1-9c53-d83dfef052a7.png)

```


##### Die Verbindung zwischen der Smartwatch und Smartphone aus **AAPS** heraus einrichten

Der letzte Schritt ist es, **AAPS** auf dem Smartphone so einzurichten, dass es mit "**AAPS** Wear“ auf der Smartwatch interagiert. Aktiviere dazu das Wear-Plugin in der KONFIGURATION:

●   Gehe zur **AAPS** App auf dem Smartphone

● Wähle > Konfiguration im linken Hamburger Reiter

● Markiere unter dem Punkt Allgemein, Wear für die Auswahl der Wear-Optionen

![grafik](../images/ae6d75a1-1829-4d2e-b0dc-153e31e4a466.png)


Um zu einem anderen **AAPS**-Zifferblatt zu wechseln, drücke lange auf den Startbildschirm der Smartwatch und es wird die Option Anpassen“ erscheinen. Wische dann nach rechts, bis Du die **AAPS**-Zifferblätter erreicht hast.

Wenn das Sideloading der **AAPS** Wear.apk auf die Smartwatch erfolgreich war, sieht es ungefähr so aus:


![24-10-23, successful galaxy watch photo](../images/628e46d8-c7dc-4741-9eba-ae83f396c04c.png)

#### Verbindungsprobleme zwischen **AAPS** Smartwatch und **AAPS** Smartphone beheben
1.  Wenn Easy Fire Tools sich nicht verbindet oder Du die Meldung "authorisation failed" erhälst > Überprüfe, ob die IP-Adresse korrekt eingegeben wurde.
2.  Überprüfe, ob die Smartwatch mit dem Internet (und nicht nur über Bluetooth mit dem Smartphone) verbunden ist.
3.  Überprüfe, ob das **AAPS** Smartphone und die Smartwatch in der Samsung App miteinander gekoppelt bzw. verbunden sind.
4.  Es kann auch helfen, einen harten Neustart von Smartphone und Smartwatch durchzuführen (d.h. Samartphone aus- und wieder einschalten)
5.  Angenommen Du hast die Wear.apk auf Dein Smartphone herunterladen können, bekommst allerdings keine Glukosewerte angezeigt, _überprüfe_, ob Du die richtige **AAPS** apk Version per Sideloading auf die Smartwatch übertragen hast. Wenn Deine AAPS Wear.apk Version in der folgenden Liste enthalten ist a) 'wear-AAPSClient-release’; b) ‘wear-full-release.aab’; oder c) das Wort ‘debug’ ist im Namen enthalten, hast Du die falsche Wear OS apk Version während der Erstellung (build) ausgewählt.
6.  Überprüfe, dass Dein Router die Geräte nicht voneinander isoliert (IP Isolation).

Weitere Tipps zur Fehlerbehebung findest Du [hier](https://freepoc.org/wear-installer-help-page/#:~:text=If%20you%20are%20having%20problems,your%20phone%20and%20your%20watch.)

### AAPS von der Wear-Smartwatch aus steuern

Once you have setup **AAPS** on your watch, extensive details about the smartwatch faces and their functions can be found in [Operation of Wear AAPS on a Smartwatch](../UsefulLinks/WearOsSmartwatch.md).

Als kurze Übersicht: Die folgenden Funktionen können von der Smartwatch aus gestartet werden:

●   temporäres Ziel setzen

Bolusrechner verwenden (welche Variablen bei der Berechnung berücksichtigt werden, lässt sich in den  Einstellungen auf dem Smartphone festlegen)

●   eCarbs (verzögerte Kohlenhydrate) eintragen

●   Bolus (Insulin + Kohlenhydrate) abgeben

●   Smartwatch-Einstellungen

●   Status

●   Pumpenstatus überprüfen

●   Loop-Status überprüfen

●   Profil prüfen und ändern, CPP (Circadian Percentage Profile = Zeitverschiebung + Prozentsatz)

●   TDD (Total Daily Dose = Bolus + Basal pro Tag) anzeigen

● Remote-Bolus, wenn Kind und betreuende Person an verschiedenen Orten sind (dies ist möglich, wenn die **AAPS**-Smartwatch und das **AAPS**-Smartphone  mit einem WLAN verbunden sind)

#### Kommunikation eines Betreuenden zur Smartwatch über andere Apps (wie WhatsApp)

Es können zusätzliche Apps - wie z. B. WhatsApp zum Senden von Nachrichten - zwischen Eltern und Kindern auf der Smartwatch installiert werden. Es ist wichtig, dass dem Smartphone nur EIN Google-Konto zugeordnet ist, da die Smartwatch sonst die Daten nicht rüberbringen kann. Du musst 13 oder älter sein, um ein Samsung-Konto zu haben. Das Geburtsdatum muss in der eMail-Adresse hinterlegt sein, die auf dem Android-Smartphone verwendet wird.

Ein Video, das das WhatsApp Setup für das Senden von Nachrichten auf der Galaxy 4 Smartwatch zeigt, findest Du [here](https://gorilla-fitnesswatches.com/how-to-get-whatsapp-on-galaxy-watch-4/). Über WhatApp kannst Du nicht den vollen Funktionsumfang nutzen.

Durch Anpassungen sowohl in der **Galaxy Wearable** App auf dem **AAPS** Smartphone als auch auf der Smartwatch, können WhatsApp-Nachrichten mit einem leichten Vibrieren signalisiert und auf dem bestehenden Zifferblatt gezeigt werden.

#### Fehlerbehebung für Sony Smartwach 3

Although it was discontinued a few years ago, if you are using a Sony Smartwatch SW 3 please see here for a troubleshooting guide: [Troubleshooting Sony Smartwatch SW 3](../UsefulLinks/SonySW3.md)



### Option 3) **AAPS** auf dem Smartphone wird über AAPS auf der Smartwatch gesteuert

Die notwendige Smartwatch-Software (**AAPSClient** Wear APK) kann direkt von [Github](https://github.com/nightscout/AndroidAPS/releases/) heruntergeladen werden.

Um die Software herunterzuladen, klicke auf die benötigte App (in diesem Screenshot, würden sowohl **wear-aapsclient-release_3.2.0.1** und auch **wear-aapsclient2-release_3.2.0.1** funktionieren; es gibt zwei Versionen, falls eine zweite Kopie für eine zweite Betreuenden-Smartwatch benötigt wird):

![grafik](../images/2308c075-f41c-45bc-9c0f-3938beeaaafb.png)


Dann "Speichern unter" und speichere die Datei an einem Ort Deiner Wahl auf Deinem Computer:


![grafik](../images/bcf63cbc-9028-41d5-8416-fa2a31fd6f7d.png)






The **AAPSClient** wear apk can be transferred to your phone and side-loaded onto the watch in the same way as the **AAPS** Wear app, as detailed in [Transferring the Wear app onto your AAPS phone](#transferring-the-aaps-wear-app-onto-your-aaps-phone)

### Option 4) Reduziertes Nightscout (und andere Optionen) auf einer Smartwatch - Fitbit Smartwatches



![grafik](../images/98620770-2fb3-47af-a13e-28af7db69096.png)



**"Sentinel"** ist ein Zifferblatt für die Fitbit-Smartwatch, das von [Ryan Chen](http://ryanwchen.com/sentinel.html) für seine Familie entwickelt wurde und kostenlos geteilt wird: Sense1/2, Versa 2/3/4. Das Zifferblatt ist nicht mit der Fitbit Luxe (als ein reiner Fitness-Tracker) kompatibel. Sentinel kann aus der [Fitbit-Mobile App](https://gallery.fitbit.com/details/5f75448f-413d-4ece-a53d-b969c6afea7c) heruntergeladen werden.

Damit wird es möglich Glukosewerten von bis zu drei Personen über Dexcom Share, Nightscout oder einer Kombination aus den beiden Datenquellen, zu folgen.

Wenn xDrip+ oder die SpikeApp im lokalen Webserver Modus laufen, können auch diese genutzt werden. Man kann individuelle Alarme einrichten und Ereignisse über die Nightscout-Careportal-Funktionalität direkt von der Smartwatch eintragen und so leichter die Glukosewerte, das aktive Insulin (IOB) und die wirksamen Kohlenhydrate (COB) im Auge behalten und auch Mahlzeit-Informationen (Kohlenhydrate und Bolus) eingeben.

Diese Informationen und Ereignisse erscheinen (inkl. der aktualisierten Werte für IOB und COB) in der Nightscout-Übersicht. Unterstützung aus der Community findest Du in der [Facebook-Gruppe, Sentinel](https://www.facebook.com/groups/3185325128159614).

Für Fitbit-Uhren gibt es noch andere Möglichkeiten, die sich allerdings auf die reine Anzeige beschränken. Dazu gehört auch [Glance](https://glancewatchface.com/). Diese zusätzlichen Optionen sind in den [Nightscout Webseiten](https://nightscout.github.io/nightscout/wearable/#fitbit) beschrieben.

### Option 5) **AAPS Überwachung** (vollständige Profilinformationen oder nur Glukosewerte), wenn **AAPS** auf einem Smartphone läuft.

These options are described in more detail in the ["following only"](../RemoteFeatures/FollowingOnly.md) section of the documentation.

Es gibt eine große Auswahl an erschwinglichen Smartwatches, die Glukosewerte anzeigen können. Nutzt Du Nightscout, findest Du einen guten Überblick über die verschiedenen Möglichkeiten auf den [Nightscout-Seiten](https://nightscout.github.io/nightscout/wearable/#).






