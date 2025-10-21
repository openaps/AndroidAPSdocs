# SMS-Befehle

```{contents} Table of contents
:depth: 2
```

Die meisten Anpassungen der temporären Ziele, **AAPS** folgen etc. können über die [**AAPSClient**-App](../RemoteFeatures/RemoteMonitoring.md) auf einem mit dem Internet verbundenen Android-Smartphone durchgeführt werden. Boli können allerdings nicht über den **AAPSClient** ausgelöst werden. Dafür werden SMS-Befehle eingesetzt. Falls Du als Follower ein iPhone verwendest und daher die **AAPSClient**-App nicht nutzen kannst, gibt es weitere SMS-Kommandos.

**SMS-Befehle sind wirklich hilfreich:**
1. Für die tägliche Remote-Steuerung

2. Wenn Du einen Bolus remote abgeben möchtest

3. In einer Gegend mit schwachem Internet-Empfang, in der Textnachrichten durchkommen, aber der übrige Empfang eingeschränkt ist. Dies hilft besonders in entlegenen Gebieten (z.B. beim Camping oder dem Skifahren.

4. Wenn die anderen Methoden der Remote-Steuerung (Nightscout/AAPSClient) vorübergehend nicht funktionieren

## Sicherheitshinweise

Wenn Du **SMS-Befehle** in **AAPS** freischaltest, behalte im Kopf, dass das Smartphone, dass SMS-Befehle versenden soll auch gestohlen werden kann und/oder von jemand anderem verwendet werden kann. Sichere Dein Smartphone mindestens mit einer PIN. Ein starkes Passwort und/oder eine biometrische Sicherung werden dringend empfohlen. Wichtig ist, dass das Smartphone-Passwort sich vom APK-Master-Passwort (das Passwort, das benötigt wird, um die **AAPS** Einstellungen zu ändern) unterscheidet.

Außerdem ist es empfehlenswert, eine [zweite Telefonnummer](#SMSCommands-authorized-phone-numbers) für SMS-Kommandos einzurichten. Mit der zweiten Rufnummer hast Du, für den Fall, dass Dein eigentliches Remote-Smartphone manipuliert wurde, dann die Möglichkeit die SMS-Kommunikation zu [deaktivieren](#SMSCommands-other).

Der voreingestellte Mindestabstand zwischen zwei Bolus-Befehlen beträgt 15 Minuten. Aus Sicherheitsgründen musst Du mindestens zwei berechtigte Rufnummern hinterlegt haben, um diesen Wert verändern zu können. Wenn Du versuchst innerhalb von 15 Minuten einen weiteren Bolus remote abzugeben, erhältst Du die Fehlermeldung "Bolusabgabe aus der Ferne nicht möglich. Versuch es später erneut.”

Wenn das Remote-Kommando (z.B. Bolusabgabe oder Profilwechsel) abgeschlossen ist, wird dies mit einer entsprechenden SMS von AAPS bestätigt. Es ist ratsam, dies so einzustellen, dass Bestätigungstexte an mindestens zwei verschiedene Telefonnummern gesendet werden, falls eines der Empfangstelefone gestohlen wird.

**Wenn Du einen Bolus über SMS-Kommandos abgibst, musst Du die Kohlenhydrate separat (eine zweite SMS, AAPSClient, Nightscout...) eingeben!** Wenn Du das unterlässt, ist zwar das aktive Insulin (IOB) korrekt, aber die COB sind zu gering. Dies kann dazu führen, dass notwendige Korrekturboli nicht abgegeben werden, da **AAPS** davon ausgeht, dass Du zu viel aktives Insulin hast.

Um die Sicherheit für die sensiblen Befehle zu erhöhen, muss eine Authentifizierungs-App mit einem zeitbasierten Einmalpasswort verwendet werden.

Wenn Du die Möglichkeit SMS-Befehle vom Smartphone der betreuenden Person aus schicken zu können, löschen willst, nutze den Notfall-Knopf „[Authentifikatoren zurücksetzen](#sms-commands-authenticator-setup)” in **AAPS** oder schicke den SMS-Befehl „[SMS STOP](#SMSCommands-other)“. Durch das Zurücksetzen der Authentifikatoren werden ALLE Eltern-/Betreuenden-Smartphones ungültig. Diese müssen anschließend neu eingerichtet werden.

## SMS-Kommandos einrichten

```{contents} The overall process is as follows
:depth: 1
:local: true
```

(sms-commands-authenticator-setup)=
### Konfiguration der Authenticator App

Zwei-Faktor-Authentifizierung wird zur Verbesserung der Sicherheit verwendet.

Lade (aus dem App Store oder von Google Play) eine Authenticator-App herunter und installiere sie auf dem Smartphone der betreuenden Person. Beliebte kostenlose Apps sind:
  - [Authy](https://authy.com/download/)
  - Google Authenticator - [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) / [iOS](https://apps.apple.com/de/app/google-authenticator/id388497605)
  - [LastPass Authenticator](https://lastpass.com/auth/)
  - [FreeOTP Authenticator](https://freeotp.github.io/)

Diese Authenticator-Apps erzeugen einen zeitlich begrenzten, 6-stelligen Code als Einmalkennwort, ähnlich dem des mobilen Bankings oder Online-Shoppings. Du kannst jede Authentifizierungs-App, die RFC 6238 TOTP-Token unterstützt, verwenden. Der Microsoft Authenticator funktioniert nicht.

### Überprüfen der Smartphone-Einstellungen

Gehe auf Deinem Smartphone zu **Apps > AAPS > Berechtigungen**. Stelle sicher, dass **SMS** und **Telefon** zugelassen sind.

![grafik](../images/remote-control-08.png)

### Datum und Uhrzeit synchronisieren

Die Zeit auf beiden Telefonen muss synchron sein. Am einfachsten erfolgt dies direkt über das Mobilfunknetz. Zeitunterschiede können zu Authentifizierungsproblemen führen.

Prüfe sowohl das **AAPS**-Smartphone, als auch das Smartphone der betreuenden Person darauf, dass Datum und die Uhrzeit synchron sind. Wie Du das genau machen kannst, hängt vom jeweiligen Smartphone ab. Du musst möglicherweise verschiedene Einstellungen ausprobieren.

Beispiel (für Samsung S23): **Einstellungen > Allgemeine Verwaltung > Datum und Zeit**: Stelle sicher, dass **Datum und Uhrzeit automatisch stellen** ausgewählt ist.

Einige Optionen können ausgegraut sein, wenn das Smartphone als Kinder-Smartphone aufgesetzt ist und daher einen Administrator des Familienkontos benötigt. Diese Datums- und Zeiteinstellung wird auf einem (Eltern-) iPhone „automatisch“ gesetzt. Wenn Du Dir nicht sicher bist, ob beide Smartphones synchronisiert sind, ist das nicht schlimm. Wenn es deswegen zu Problemen kommen sollte, kannst Du das auch nach dem Einrichten der SMS-Befehle lösen (bitte um Hilfe, wenn Du sie benötigen solltest).

### AAPS-Einstellungen

Jetzt, wo die Smartphone-Einstellungen geprüft sind, aktiviere direkt in der **AAPS**-App in der [Konfiguration > Allgemein](../SettingUpAaps/ConfigBuilder.md), das Modul **SMS-Kommunikator**.

Gehe in die Einstellungen des SMS-Kommunikators.

Aktiviere „Erlaube Fernsteuerung per SMS“:

![grafik](../images/remote-control-11.png)

(SMSCommands-authorized-phone-numbers)=
#### Erlaubte Telefonnummern

Gebe die Rufnummer des/der Eltern-Smartphone(s) bzw. die der betreuenden Person ein. Stelle die Landesvorwahl wie im Beispiel unten gezeigt und entferne die erste „0“ der Vorwahl (internationales Format):
* UK Telefonnummer: +447976304596
* US-Telefonnummer: +11234567890
* DE Telefonnummer: +491721234567
* _etc._

Bitte beachte, dass je nach Deinem Standort ein vorangestelltes "+" erforderlich sein kann. Um das herauszufinden kannst Du eine Testnachricht senden und auf dem SMS-Kommunikator-Tab nachschauen, welches Format die Telefonnummer hat.

Möchtest Du mehr als eine Rufnummer hinterlegen, müssen diese durch ein Semikolon und **OHNE Leerzeichen** (das ist wichtig!) getrennt werden. Wähle "OK":

![grafik](../images/remote-control-12.png)

#### Minuten zwischen Bolus-Kommandos

- Du kannst den minimalen Zeitabstand zwischen zwei über SMS durchgeführte Boli definieren.
- Aus Sicherheitsgründen musst Du mindestens zwei erlaubte Telefonnummern hinzufügen, um diesen Wert zu bearbeiten.

#### Zusätzliche obligatorische PIN am Token-Ende

Aus Sicherheitsgründen muss dem Antwortcode eine PIN folgen. Wähle eine PIN aus, die Du (und alle Betreuenden) beim Senden eines SMS-Befehls am Ende des Authentifizierungscodes anhängst.

Anforderungen an die PIN sind:

* 3 bis 6 Ziffern
* unterschiedliche Ziffern (_d.h._ 1111 oder 1224)
* keine aufsteigenden Reihen (_d.h._ 1234)

![grafik](../images/remote-control-13.png)

#### Konfiguration der Authenticator App

* Folge den Anweisungen auf dem Bildschirm.
* Öffne die auf dem _Eltern-/Betreuenden-Smartphone_ installierte Authenticator-App und füge ein neues Konto bzw. eine neue Verbindung hinzu und
* Scanne den von **AAPS** angezeigten QR-Code mit dem Eltern-/Betreuenden-Smartphone, wenn Du dazu aufgefordert wirst.
* Teste das Einmal-Passcode (Deine PIN am Ende ergänzen) der Authenticator App auf dem Eltern-/Betreuenden-Smartphone:

Beispiel:
* Der von der Authenticator angezeigte Einmal-Passcode ist 457051
* Deine zwingend erforderliche PIN ist 2401
* Der zu testende Code ist damit: 4570512401

Wenn der Eingabe richtig ist, ändert sich der rote Text „FALSCHE PIN“ automatisch in ein grünes „OK“. **Es gibt kein Bestätigungsfeld, auf das Du tippen kannstt!** Der Prozess ist nun abgeschlossen, es gibt keine "OK"-Taste, die Du nach Eingabe des Codes drücken musst:

![grafik](../images/remote-control-14.png)

Es ist nun alles für die Nutzung der SMS-Befehle eingerichtet.

Nutze den Menüeintrag „Konfiguration der Authenticator-App > Authentifikatoren zurücksetzen“, wenn Du die registrierten Authentifikatoren löschen möchtest. (Durch das Zurücksetzen des Authentikators werden ALLE erteilten Berechtigungen ungültig. Diese müssen anschließend neu eingerichtet werden.)

## SMS-Befehle verwenden

### Erste Schritte bei der Nutzung der SMS-Befehle

1) Um zu überprüfen, ob alles richtig eingerichtet ist, teste die Verbindung, indem Du „bg“ als SMS-Nachricht vom Eltern-Smartphone an das **AAPS**-Smartphone schickst. Die Rückmeldung sollte in etwa so aussehen:

![grafik](../images/remote-control-15.png)

Wenn Du keine Rückmeldung bekommst, schaue im Abschnitt [Problembehebung](#SMSCommands-troubleshooting) nach.

2)  Probiere nun einen SMS-Befehl, _z.B._ „target hypo“, der eine Authentifzierung benötigt, aus. Du wirst auf dem Eltern-Smartphonen nun dazu aufgefordert den **6-stelligen Authenticator Code** aus der Authenticator-App ergänzt um die geheime **PIN**, die nur den Eltern/Followern bekannt sein darf, einzugeben (10 Stellen insgesamt, davon 6 Stellen Passcode und 4 Stellen PIN, bei einer vierstelligen PIN).

Wenn Du das allererste Mal einen SMS-Befehl schicken möchtest, schaue, dass das **AAPS**-Smartphone neben Dir liegt, sodass Du auf beiden Geräten nachverfolgen kannst was passiert:

![grafik](../images/remote-control-16.png)

Das Eltern-/Betreuenden-Smartphone wird eine SMS von **AAPS** erhalten, die bestätigt, dass der SMS-Befehl erfolgreich remote ausgeführt wurde.

Wenn Dein SMS-Befehl erfolgreich ausgeführt ist, wird Dir das durch eine Antwort-SMS bestätigt. Du wirst eine Fehlermeldung erhalten, wenn ein Problem aufgetreten sein sollte. Der Abschnitt [Problembehebung und FAQ](#SMSCommands-troubleshooting) unten hilft bei Lösungen zu häufig auftretenden Fehlern weiter.

**Hinweis**: Eine SMS-Flat auf beiden Telefonen kann nützlich sein, da u.U. viele SMS hin und her gesandt werden.

### Mahlzeitenbolus über SMS-Befehle abgegeben

Ein Remote-Bolus kann _ausschließlich_ durch **SMS-Befehle** abgegeben werden. Er kann nicht über Nightscout oder den AAPSClient ausgelöst werden. Kohlenhydrate jedoch, können auf allen drei Wegen angekündigt werden. Bolus-Befehle und Kohlenhydrate können nicht in einer gemeinsamen SMS gesendet werden. Diese Befehle müssen wie folgt gesendet werden:

1)  Den Bolus über einen SMS-Befehl (_z. B. _“bolus 2” für einen Bolus von 2 IE) auszulösen verhält sich genauso, als ob das "Spritze"-Symbol in **AAPS** genutzt werden würde. 2) Sende die Kohlenhydrate (_z. B._ “carbs 20” wird 20g Kohlenhydrate ankündigen). Das verhält sich genauso, als ob das "Kohlenhydrate"-Symbol in **AAPS** genutzt werden würde.

Um Hypos zu vermeiden, solltest Du zu Beginn **weniger Insulin** bolen, als es Dein Mahlzeitenfaktor vorgeben würde. Das wird gemacht, da in der Regel weder der aktuelle Glukosewert noch der aktuelle Glukosetrend berücksichtigt sind.

**Die Reihenfolge, in der Du die SMS sendest, ist wichtig**. Wenn Du eine große Kohlenhydratmenge (egal auf welchem Weg) ankündigst und SMB aktiviert sind, wird **AAPS** sofort darauf mit einem (Teil)-Bolus reagieren. Wenn Du _nach_ der Ankündigung der Kohlenhydrate, dann versuchst einen Bolus abzugeben, wirst Du eine frustrierende Verzögerung erfahren und eine "Bolusabgabe läuft"-Meldung erhalten. Du wirst dann überprüfen müssen, wie viel Insulin bereits als SMB abgegeben wurde. Oder wenn Dir gar nicht auffällt, dass SMBs abgegeben wurden und Dein eigener Bolus ebenfalls durchgelaufen ist und damit insgesamt zu viel Insulin für die Mahlzeit gebolt wurde. Deshalb schicke, beim remote bolen einer Mahlzeit, den Bolus immer _vor_ der Kohlenhydratankündigung. Wenn Du magst, kannst Du Nightscout, **AAPSClient** und SMS-Befehle miteinander kombiniert verwenden. Kohlenhydrate können ohne Authentifizierung über Nightscout angekündigt werden (siehe dazu die Anleitung weiter unten) und sind daher schneller als SMS-Befehle.

(SMSCommands-commands)=
## Kommandos

```{contents} List of command groups
:depth: 1
:local: true
```

Kommandos müssen in Englisch gesendet werden, die Antwort erhältst Du in Deiner lokalen Sprache, wenn die Zeichenfolge bereits [übersetzt ist](#translations-translate-strings-for-AAPS-app). In den Befehlen ist die Groß- oder Kleinschreibung nicht relevant.

![Beispiele für SMS-Kommandos](../images/SMSCommands.png)

Die **Tabellen der SMS-Befehle** unten zeigen alle verfügbaren SMS-Befehle. Um die Nutzung noch verständlicher zu machen, sind auch _Beispiele_ enthalten. Die Gültigkeitsbereiche der Befehle (Zielwerte, Prozentsätze der Profile etc.) sind mit denen der **AAPS**-App identisch.

(authentication-or-not)=
### Authentifizieren oder nicht?

Einige SMS-Befehle führen zu einer sofortigen Reaktion, und einige SMS-Befehle erfordern eine starke **-Authentifizierung** über die Authenticator-App. Eine einfache Abfrage wie „**BG**“, die den aktuellen Glukosewert (engl. Bloodglucose) abfragt, ist schnell eingetippt und braucht nicht authentifiziert zu werden. Sie gibt die unten gezeigte **AAPS**-Statusinformation zurück:

![grafik](../images/remote-control-06.png)

Befehle, die kritischer sind und daher zusätzlich abgesichert werden, benötigen einen weiteren einzugebenden Code, wie zum Beispiel:

![SMS authentifiziert für Markdown-kleiner](../images/remote-control-07.png)

Die Spalte *Auth* in den folgenden Tabellen zeigt, ob eine solch starke Authentifizierung für den jeweiligen Befehl erforderlich ist.

### CGM-Daten

| Befehl     | Auth | Funktion & *Antwort*                                                                                                                                                                                              |
| ---------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BG         | Nein | Antwortet mit: Letzter Glukosewert, Delta, IOB (Bolus und Basal), COB<br/>*BZ: 5.6, Delta: -0.2 mmol, IOB: 0.20U (Bolus: 0.10U Basal: 0.10U), COB: 0g*                                                      |
| CAL 5.6/90 | Ja   | Kalibriert das CGM mit dem Wert von 5.6/90<br/>(nutze den für die Maßeinheiten richtigen Wert)<br/>Funktioniert nur, wenn sie korrekt in **AAPS**eingerichtet sind.<br/>*Kalibrierung gesendet* |

### Pumpe

| Befehl               | Auth | Funktion & *Antwort*                                                                                |
| -------------------- | ---- | --------------------------------------------------------------------------------------------------- |
| PUMPE                | Nein | LastConn: 1 minAgo<br/>Temp: 0.00U/h @11:38 5/30min<br/>IOB: 0.5U Reserv: 34U Batt: 100 |
| PUMP DISCONNECT *30* | Ja   | Um die Pumpe für *30* Minuten zu trennen                                                            |
| PUMP CONNECT         | Ja   | Verbindung zur Pumpe wiederhergestellt                                                              |

### Basal

| Befehl            | Auth | Funktion & *Antwort*                          |
| ----------------- | ---- | --------------------------------------------- |
| BASAL 0.3         | Ja   | Startet ein Basal mit 0.3 IE/h für 30 Minuten |
| BASAL 0.3 20      | Ja   | Startet ein Basal mit 0.3 IE/h für 20 Minuten |
| BASAL 30%         | Ja   | Startet ein Basal mit 30% für 30 Minuten      |
| BASAL 30% 50      | Ja   | Startet ein Basal mit 30% für 50 Minuten      |
| BASAL STOP/CANCEL | Ja   | Stoppt das temporäre Basal                    |


### Loop

| Befehl            | Auth | Funktion & *Antwort*                                                                                                                                                                                                                                                              |
| ----------------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LOOP STATUS       | Nein | Die Antwort hängt vom aktuellen Status ab:<br/> - *Loop ist deaktiviert*, wenn der Loop deaktiviert ist oder LGS<br/> - *Loop ist aktiviert*, wenn der Loop geschlossen oder geöffnet ist<br/> - *Suspended (10 Min)*, wenn der Loop getrennt oder pausiert ist |
| LOOP STOP/DISABLE | Ja   | Die Pumpe schaltet auf die vorprogrammierten Basalrate zurück.<br/>*Loop wurde deaktiviert*                                                                                                                                                                                 |
| LOOP START/ENABLE | Ja   | *Lopp wurde aktiviert.*                                                                                                                                                                                                                                                           |
| LOOP SUSPEND 20   | Ja   | *Das Loopen wird für 20 Minuten unterbrochen*                                                                                                                                                                                                                                     |
| LOOP RESUME       | Ja   | *Loop wurde fortgesetzt*                                                                                                                                                                                                                                                          |
| LOOP CLOSED       | Ja   | *Current loop mode: Closed Loop*                                                                                                                                                                                                                                                  |
| LOOP LGS          | Ja   | *Current loop mode: Low Glucose Suspend*                                                                                                                                                                                                                                          |

### Bolus

Ein Bolus via SMS ist innerhalb von 15 Minuten nach der letzten Bolusgabe in AAPS oder nach dem letzten SMS-Kommando nicht möglich. Den Wert kannst Du nur anpassen, wenn mind. zwei Rufnummern eingetragen sind. In diesem Fall wäre die Antwort *Bolusabgabe aus der Ferne nicht verfügbar.  Versuche es später erneut.* Diese Antwort wird auch gesendet, wenn die Pumpe gerade einen Bolus abgibt.

| Befehl               | Auth | Funktion & *Antwort*                                                                                                                        |
| -------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| BOLUS 1.2            | Ja   |                                                                                                                                             |
| BOLUS 0.60 MEAL      | Ja   | Gibt den 0.60 IE Bolus ab <br/>**und** setzt das [temporäre Ziel „Bald essen“](#TempTargets-eating-soon-temp-target)                  |
| CARBS 5              | Ja   | Trägt 5 Gramm ein, ohne einen Bolus abzugeben                                                                                               |
| CARBS 5 17:35/5:35PM | Ja   | Gibt 5 Gramm um 17:35h ein.<br/>Das akzeptiert Format hängt vom <br/> eingestellten Zeitformat (12h/24h) auf dem Smartphone ab. |
| EXTENDED 2 120       | Ja   | Startet einen erweiterten Bolus von 2 IE für 120 Min.<br/>Nur für [kompatible Pumpen](#screens-action-tab).                           |
| EXTENDED STOP/CANCEL | Ja   | Stoppt den erweiterten Bolus                                                                                                                |

### Profil

| Befehl         | Auth | Funktion & *Antwort*                                                                                                                                                                                           |
| -------------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PROFILE STATUS | Nein | Aktuelles Profil und Prozentsatz                                                                                                                                                                               |
| PROFILE LIST   | Nein | Die aktuelle Liste der Profile in **AAPS**, z.B.:<br/>1. Profil1<br/> 2. Profil2                                                                                                                   |
| PROFILE 1      | Ja   | Um das aktuelle Profil auf Profil 1 aus der Liste zu ändern.<br/>Verwende die Nummern, die vom Befehl **PROFILE LIST**zurückgegeben werden,<br/>nicht die Profilnamen, wie Du sie gespeichert hast |
| PROFILE 2 30   | Ja   | Wechselt vom aktuellen Profil auf Profil2 mit 30%                                                                                                                                                              |

### Temporäre Ziele

| Befehl                    | Auth | Funktion & *Antwort*                                 |
| ------------------------- | ---- | ---------------------------------------------------- |
| TARGET MEAL/ACTIVITY/HYPO | Ja   | Setzt die temporären Ziele BALD ESSEN/AKTIVITÄT/HYPO |
| TARGET STOP/CANCEL        | Ja   | Bricht das aktuelle temporäre Ziel ab                |


(SMSCommands-other)=
### Andere

| Befehl             | Auth | Funktion & *Antwort*                                                                                                                                                                                                        |
| ------------------ | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TREATMENTS REFRESH | Nein | Behandlungen von NS aktualisieren                                                                                                                                                                                           |
| AAPSCLIENT RESTART | Nein | Wird bei Kommunikationsproblemen <br/>mit Nightscout oder dem **AAPSClient** eingesetzt                                                                                                                               |
| SMS DISABLE/STOP   | Nein | Um die SMS-Fernsteuerung zu deaktivieren, antworte mit dem Code Any. <br/>Beachte, dass Du diese Remote-Steuerung nur <br/>am **AAAPS**-Master-Smartphone wieder aktivieren kannst.                             |
| HELP               | Nein | Zeigt alle per SMS verfügbaren Funktionen an:<br/>BG, LOOP, TREATMENTS, ....<br/>Sende einen weiteren ***HELP ***Funktion****** Befehl, um alle <br/>verfügbaren Optionen zu dieser Funktion zu erhalten. |
| HELP BOLUS         |      | *BOLUS 1.2<br/>BOLUS 1.2 MEAL*                                                                                                                                                                                        |

(SMSCommands-troubleshooting)=
## Problembehebung und FAQ

```{contents} List of questions and issues
:depth: 1
:local: true
```

### Was kann mit SMS-Befehlen _nicht_ gemacht werden?

1) Ein **zeitlich begrenzter Profilwechsel_ (z. B. ein „Trainings-Profil“ für 60 Minuten setzen) ist _nicht über SMS-Befehle möglich**. Ein dauerhafter Profilwechsel auf ein „Trainings-Profil“ jedoch schon. Temporäre Profilwechsel können stattdessen über Nightscout oder den AAPSClient erfolgen.

2)  **Automatisierungen** können nicht abgebrochen werden oder **benutzerdefinierte Ziele** können nicht gesetzt werden. Es gibt aber andere Lösungen: Stelle Dir beispielsweise vor, dass in Deinen normalen Profil das Glukoseziel 5.5 bzw. 100 sei. Du hast in AAPS eine Automatisierung erstellt, die in der Nacht zwischen 2:30h und 3:30h wegen des Sportunterrichts ein hohes Ziel von 7.0 bzw. 126 setzt, wenn "temporäres Ziel nicht vorhanden" als Bedingung zutrifft. Dein Kind ist mit dem **AAPS**-Smartphone bereits in der Schule und in dieser Woche wird der Sportunterricht kurzfristig abgesagt und durch eine Pizza-Party ersetzt. Wenn das hohe temporäre Ziel von 7.0 bzw. 126 durch die Automatisierung gesetzt wurde und Du dieses Ziel (am **AAPS**-Smartphone oder remote) abbrichst, ist die Bedingung weiterhin erfüllt und **AAPS** wird einfach in der nächsten Minute das hohe temporäre Ziel erneut setzen.

**Wenn Du Zugriff auf das AAPS Smartphone hättest**, könntest Du die Automatisierung deaktivieren/anpassenoder wenn Du das nicht machen möchtest, kannst Du einfach für 60 Minuten ein neues temporäres Ziel von 5.6 (bzw. 100 mg/dl) im Reiter AKTIONEN oder durch langes Drücken auf den Ziele-Button. Dadurch wird die Automatisierung daran gehindert, ein hohes Ziel von 7.0 (bzw. 126 mg/dl) zu setzen.

**Wenn Du keinen Zugriff auf das AAPS-Telefon hast**, kannst Du mit SMS-Befehlen eine ähnliche Lösung erreichen: Mit dem Befehl "target meal" kannst Du beispielsweise ein Ziel von 5.0 für 45 Minuten setzen (andere voreingestellte Ziele sind Aktivität 8.0 ( bzw. 144 mg/dl) oder Hypo, siehe Tabelle). Mit SMS-Befehlen kannst Du allerdings keinen _selbstdefinierten_ Zielwert angeben (z. B. von 5.6 für 60 Minuten), dazu brauchst Du den **AAPSClient** oder Nightscout.

### Was passiert, wenn ich es mir nach dem Senden eines Befehls anders überlege?

**AAPS** führt nur den letzten (aktuellen) Befehl aus. Wenn Du also "bolus 1.5" eingibst und dann ohne Authentifizierung einen neuen Befehl „bolus 1“ hinterherschickst, wird der vorherige Befehl (bolus 1.5) ignoriert. **AAPS** sendet dem Eltern-/Betreuenden-Smartphone zunächst immer eine Antwort zur Bestätigung des auszuführenden Befehls, bevor Du dazu aufgefordert wirst, den Authentifizierungscode einzugeben. Danach wird eine Antwort zur ausgeführten Aktion geschickt.

### Warum habe ich keine Antwort auf einen SMS-Befehl erhalten?

Es könnte aus einem dieser Gründe sein:

1) Die Nachricht hat es nicht bis zum AAPS-Smartphone geschafft (Netzwerk-Probleme). 2)  **AAPS** verarbeitet noch eine Anfrage (_z. B._ einen Bolus, der je nach Insulinmenge einige Zeit zur Abgabe benötigt). 3) Das **AAPS**-Smartphone hat beim Empfang des Befehls eine schwache Bluetooth-Verbindung zur Pumpe und das Kommando konnte nicht ausgeführt werden (dies löst normalerweise einen Alarm auf dem **AAPS**-Smartphone aus).

### Keinerlei Reaktion auf SMS-Befehle

Versuche auf dem Eltern-/Betreuenden-Smartphone und/oder dem **AAPS**-Smartphone die folgenden Optionen deaktivieren:
* **Als Chat-Nachricht senden** ![SMS als Chatnachricht deaktivieren](../images/SMSdisableChat.png)
* Wenn Du die Android Messages-App oder die Google Messages-App nutzt, deaktiviere RCS-Nachrichten:
  - Öffne den entsprechenden SMS-Nachrichtenverlauf
  - Klicke auf die drei Punkte in der oberen rechten Ecke
  - Wähle DETAILS aus
  - Aktiviere „Nur SMS und MMS senden“ ![Disable RCS as chat message](../images/SMSdisableRCS.png)

### Fehler beim Ausführen der Befehle

Es gibt verschiedene Gründe, warum der Befehl möglicherweise nicht erfolgreich war:

* Die Einrichtung der SMS-Befehle ist nicht vollständig/korrekt
* Der Befehl wurde im falschen Format geschickt (z.B. „disconnect pump 45" anstelle von „pump disconnect 45“)
* Du hast eine falschen oder abgelaufenen Authenticator Code genutzt (es hat sich bewährt einige Sekunden auf einen neuen Code zu warten, wenn der andere nur noch kurz gültig sein sollte)
* Der Code + PIN waren richtig, aber die SMS-Kommunikation ist verzögert, sodass **AAPS** angenommen hat, dass der Code abgelaufen ist
* Das **AAPS**-Smartphone ist nicht in Reichweite der Pumpe bzw. hat keinen Kontakt
* Es läuft zeitgleich eine Bolusabgabe

Die Beispiele zeigen häufiger auftretende Fehler:

![grafik](../images/remote-control-17.png)

### Wie kann ich einen Befehl stoppen, nachdem er bereits authentifiziert wurde?

Er kann nicht gestoppt werden. Du kannst allerdings eine Bolusgabe, die per SMS geschickt wurde direkt auf dem **AAPS**-Smartphone abbrechen, indem Du im Bolus-Popup auf "Abbrechen" tippst. Dazu musst Du aber schnell sein. Viele Befehle (abgesehen von Bolus- und Kohlenhydrat-Ankündigungen) können entweder leicht rückgängig gemacht werden oder deren ungewollte Auswirkungen können abgemildert werden.

Bei Fehlern beim Bolen und Kohlenydrat-Ankündigungen, kannst Du trotzdem handeln. Wenn Du beispielsweise 20 g Kohlenhydrate angekündigt hast, aber Dein Kind isst nur 10 g und Du (oder ein verfügbarer Betreuer) kann die "Behandlung" nicht direkt auf dem **AAPS**-Smartphone löschen, kannst Du ein hohes temporäres Ziel oder ein reduziertes Profil setzen, um **AAPS** weniger aggressiv arbeiten zu lassen.

### Mehrfach-SMS

Wenn Du Antworten mehrfach erhältst (_z. B._ auf einen Profilwechsel), hast Du möglicherweise versehentlich einen Zirkelbezug mit anderen Apps erzeugt. Das könnte zum Beispiel xDrip+ sein. Falls dies der Fall ist, stelle sicher, dass xDrip+ (oder eine andere App) keine Behandlungsdaten zu Nightscout hochlädt.

Wenn die andere App auf mehreren Smartphones installiert ist, musst Du den Upload auf allen deaktivieren.

(sms-commands-too-many-messages)=
### Ich bekomme von SMS-Befehlen zu viele SMS-Nachrichten. Kann ich die Häufigkeit reduzieren oder stoppen?

Die Nutzung der SMS-Befehle kann viele automatisierte Nachrichten vom **AAPS**-Smartphone auf das Smartphone der Eltern/Betreuenden auslösen. Du wirst auch Nachrichten für aktive **AAPS**-Automatisierungen (z. B. “Basal-Profil in der Pumpe aktualisiert”) erhalten. Eine SMS-Flat für den Mobilfunktvertrag des **AAPS**-Smartphones und des Eltern-/Betreuenden-Smartphones wird sehr empfohlen, wenn viele SMS verschickt werden. Es kann auch hilfreich sein, SMS-Benachrichtigungen, Alarme und Vibrationen auf allen Smartphones zu deaktivieren. SMS-Befehle können nur mit den entsprechenden bestätigenden SMS genutzt werden. Falls Du direkt mit Deinem Kind (wenn es alt genug ist) kommunizieren möchtest, solltest Du etwas anderes als SMS dazu nutzen. **AAPS**-Elterrn/Betreuende nutzen daher häufig andere Kommunikations-Apps wie WhatsApp, Lime, Telegram und den Facebook-Messenger.

Es ist möglich, die SMS „Profil erfolgreich gesetzt“ zu deaktivieren, wenn die Profiländerung über Nightscout erfolgt. Um das zu erreichen, erstelle eine Datei mit **genau** dem Namen `do_not_send_sms_on_profile_change` im Verzeichnis `extra` Deines AAPS-Ordners.