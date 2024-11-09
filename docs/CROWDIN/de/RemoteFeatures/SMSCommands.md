# SMS-Befehle

```{admonition} Documentation
:class: note

This section may contain outdated content. Please also see the page [SMS Commands](#RemoteControl-sms-commands)).

```

## Sicherheitshinweise
.
- AAPS (z.B. auf dem Smartphone eines Kindes) kann über SMS-Befehle 'remote' gesteuert werden. Wenn Du diesen SMS-Kommunikator aktivierst, denke immer daran, dass das Telefon, das für Remote-Befehle eingerichtet ist, gestohlen werden kann. Schütze dieses mit einem zumindest mit einem sicheren PIN-Code. Es wird ein starkes Passwort oder biometrischer Schutz empfohlen.
- Additionally it is recommended to allow a [second phone number](#SMSCommands-authorized-phone-numbers) for SMS commands. So you can use second number to [temporary disable](#SMSCommands-other) SMS communicator in case your main remote phone gets lost or stolen.
- Wenn das Remote-Kommando (z.B. Bolusabgabe oder Profilwechsel) abgeschlossen ist, wird dies mit einer entsprechenden SMS von AAPS bestätigt. Es ist ratsam, dies so einzustellen, dass Bestätigungstexte an mindestens zwei verschiedene Telefonnummern gesendet werden, falls eines der Empfangstelefone gestohlen wird.
- **Wenn Du einen Bolus über SMS-Kommandos abgibst, musst Du die Kohlenhydrate über Nightscout (NSClient, Webseite...) eingeben!** Wenn Du das unterlässt, ist zwar das aktive Insulin (IOB) korrekt, aber die COB sind zu gering. Dies kann dazu führen, dass notwendige Korrekturboli nicht abgegeben werden, da AAPS davon ausgeht, dass Du zu viel aktives Insulin hast.
- Seit AAPS Version 2.7 muss eine Authentifizierungs-App mit einem zeitbasierten Einmalpasswort verwendet werden, um die Sicherheit bei der Verwendung von SMS-Kommandos zu erhöhen.

## SMS-Kommandos einrichten

![SMS Commands Setup](../images/SMSCommandsSetup.png)

- Most of the adjustments of temp targets, following AAPS etc. can be done on [AAPSClient app](../RemoteFeatures/RemoteMonitoring.md) on an Android phone with an internet connection.
- Boli können nicht über Nightscout abgegeben werden, aber Du kannst dafür SMS-Kommandos verwenden.
- Falls Du als Follower ein iPhone verwendest und daher die AAPSClient-App nicht nutzen kannst, gibt es weitere SMS-Kommandos.
- Gehe dazu in den Systemeinstellungen deines Android-Telefons zu Apps > AndroidAPS > Berechtigungen und aktiviere dort SMS.

(SMSCommands-authorized-phone-numbers)=
### Erlaubte Telefonnummern

- In AAPS gehst Du zu **Einstellungen > SMS-Kommunikator** und trägst die Telefonnummer(n) ein, die dazu berechtigt werden soll(en), Kommandos an AAPS zu senden. Mehrere Nummern werden dabei durch Semikolon ohne Leerzeichen getrennt (z.B. +6412345678;+6412345679)

- Bitte beachte, dass je nach Deinem Standort ein vorangestelltes "+" erforderlich sein kann. Um das herauszufinden kannst Du eine Testnachricht senden und auf dem SMS-Kommunikator-Tab nachschauen, welches Format die Telefonnummer hat.

- Aktiviere 'Erlaube Fernsteuerung per SMS zulassen'.

- Wenn Du mehr als eine Nummer verwenden möchtest:

  - Gib nur eine der Telefonnummern ein.

  - Führe ein SMS-Kommando aus um sicher zu stellen, dass die Kommandos mit dieser Telefonnummer funktionieren.

  - Gib die zusätzliche(n) Telefonnummer(n) getrennt durch Semikolon ohne Leerzeichen ein.

    ![SMS-Kommandos Setup mehrerer Nummern](../images/SMSCommandsSetupSpace2.png)

### Minuten zwischen Bolus-Kommandos

- Du kannst den minimalen Zeitabstand zwischen zwei über SMS durchgeführte Boli definieren.
- Aus Sicherheitsgründen musst Du mindestens zwei erlaubte Telefonnummern hinzufügen, um diesen Wert zu bearbeiten.

### Zusätzliche obligatorische PIN am Token-Ende

- Aus Sicherheitsgründen muss dem Antwortcode eine PIN folgen.

- PIN-Regeln:

  - 3 bis 6 Ziffern
  - nicht dieselben Ziffern (z.B. 1111)
  - keine Ziffernfolge (z.B. 1234)

### Konfiguration der Authenticator App

- Zwei-Faktor-Authentifizierung wird zur Verbesserung der Sicherheit verwendet.

- Du kannst jede Authentifizierungs-App, die RFC 6238 TOTP-Token unterstützt, verwenden. Beliebte kostenlose Apps sind:

  - [Authy](https://authy.com/download/)
  - Google Authenticator - [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) / [iOS](https://apps.apple.com/de/app/google-authenticator/id388497605)
  - [LastPass Authenticator](https://lastpass.com/auth/)
  - [FreeOTP Authenticator](https://freeotp.github.io/)

- Installiere die Authentifizierungs-App Deiner Wahl auf Deinem Follower-Smartphone und scanne den in AAPS angezeigten QR-Code.

- Teste das Einmal-Passwort, indem Du den in Deiner Authentifizierungs-App angezeigte Token und die PIN, die Du gerade in AAPS eingerichtet hast, eingibst. Beispiel:

  - Deine zwingend erforderliche PIN ist 2020
  - TOTP Token von der Authentifizierungs-App ist 457051
  - Trage 4570512020 ein

- Der rote Text "WRONG PIN" ändert sich **automatisch** in den grünen Text "OK", wenn das Einmal-Passwort korrekt ist. **Es gibt keine Taste, die Du drücken kannst!**

- Die Zeit auf beiden Telefonen muss synchron sein. Am einfachsten erfolgt dies direkt über das Mobilfunknetz. Zeitunterschiede können zu Authentifizierungsproblemen führen.

- Verwende die Schaltfläche "AUTHENTIKATORS ZURÜCKSETZEN", wenn Du bereits eingerichtete Berechtigungen entfernen möchten.  (Durch das Zurücksetzen des Authentikators werden ALLE erteilten Berechtigungen ungültig. Du musst sie alle neu einrichten.)

## SMS-Kommandos verwenden

- Send a SMS to the phone with AAPS running from your approved phone number(s) using any of the [commands](#commands) below.

- Das AAPS-Smartphone wird antworten, um sich die Durchführung des übermittelten Kommandos bestätigen zu lassen oder um den angeforderten Status zu übermitteln.

- Bestätige falls erforderlich die Durchführung des übermittelten Kommandos, indem Du den angegebenen Code zurücksendest. Beispiel:

  - Deine zwingend erforderliche PIN ist 2020
  - TOTP Token von der Authentifizierungs-App ist 457051
  - Trage 4570512020 ein

**Hinweis**: Eine SMS-Flat auf beiden Telefonen kann nützlich sein, da u.U. viele SMS hin und her gesandt werden.

(SMSCommands-commands)=
## Kommandos

Commands must be sent in English, the response will be in your local language if the response string is already [translated](#translations-translate-strings-for-AAPS-app).

![SMS Commands Example](../images/SMSCommands.png)

### Loop

- LOOP STOP/DISABLE \* Antwort: Loop wurde deaktiviert.

- LOOP START/ENABLE \* Antwort: Loop wurde aktiviert

- LOOP-STATUS

  - Antwort hängt vom aktuellen Status ab

    - Loop ist deaktiviert.
    - Loop ist aktiviert.
    - Pausiert (%1$d min)

- LOOP SUSPEND 20 \* Antwort: Loop unterbrochen für 20 Minuten

- LOOP RESUME \* Antwort: Loop wurde fortgesetzt

- LOOP CLOSED \* Antwort: Aktueller Loop-Modus: Closed Loop

- LOOP LGS \* Antwort: Aktueller Loop-Modus: Unterbrechung bei niedrigem BZ (LGS)

### CGM-Daten

- BG \* Antwort: Letzter BZ: 5.6 4min her, Delta: -0,2 mmol, IOB: 0.20U (Bolus: 0.10U Basal: 0.10U)
- CAL 5.6 \* Antwort: Um die Kalibrierung 5.6 zu senden, antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN. \* Antwort, nachdem der korrekte Code von AAPS empfangen wurde: Kalibrierung gesendet (**Falls xDrip installiert ist. In xDrip+ muss "Kalibrierungen akzeptieren" aktiviert sein.**)

### Basal

- BASAL STOP/CANCEL \* Antwort: Antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN, um die temporäre Basalrate zu beenden.
- BASAL 0.3 \* Antwort: Um eine Basalrate von 0.3IE/h für 30 Minuten zu setzen, antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN.
- BASAL 0.3 20 Antwort: Um eine Basalrate von 0.3IE/h für 20 Minuten zu setzen, antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN.
- BASAL 30% \* Antwort: Um die Basalrate von 30% für 30 Minuten zu setzen, antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN.
- BASAL 30% 50 \* Antwort: Um die Basalrate von 30% für 50 Minuten zu setzen, antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN.

### Bolus

Ein Bolus via SMS ist innerhalb von 15 Minuten nach der letzten Bolusgabe in AAPS oder nach dem letzten SMS-Kommando nicht möglich. Den Wert kannst Du nur anpassen, wenn mind. zwei Rufnummern eingetragen sind. Die Antwort hängt daher davon ab, wann der letzte Bolus abgegeben wurde.

- BOLUS 1.2 \* Antwort A: Um einen Bolus von 1,2 IE abzugeben, antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN. \* Antwort B: Bolusabgabe aus der Ferne nicht verfügbar. Versuch es später nochmal.
- BOLUS 0.60 MEAL \* Mit dem optionalen Parameter MEAL wird ein Mahlzeiten TT gesetzt (Standardwerte sind 90 mg/dL / 5.0 mmol/L für 45 Minuten). \* Antwort A: Um einen Bolus von 0,6 IE abzugeben, antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN.
- CARBS 5 \* Antwort: Um 5g Kohlenhydrate um 12:45 einzugeben, antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN.
- CARBS 5 17:35/5:35PM \* Antwort: Um 5g Kohlenhydrate um 17:35 einzugeben, antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN.
- EXTENDED STOP/CANCEL \* Antwort: Antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN, um den erweiterten Bolus zu beenden.
- EXTENDED 2 120 \* Antwort: Um den erweiterten Bolus 2 IE für 120 Minuten abzugeben, antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN.

### Profile

- PROFILE STATUS \* Antwort: Profil1
- PROFILE LIST \* Antwort: 1. \` Profil1 \` 2. \` Profil2 \`
- PROFILE 1 \* Antwort: Um zum Profil 1 mit 100% zu wechseln, antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN.
- PROFILE 2 30 \* Antwort: Um zum Profil 2 mit 30% zu wechseln, antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN.

(SMSCommands-other)=
### Andere

- TREATMENTS REFRESH \* Antwort: Behandlungen von NS aktualisieren
- NSCLIENT RESTART \* Antwort: NSCLIENT RESTART SENT
- PUMP \* Antwort: Letzte Verbindung: vor 1 Min. Temp: 0.00E/h @11:38 5/30min IOB: 0.5E Reserv: 34E Batt: 100
- PUMP CONNECT \* Antwort: Pumpe erneut verbunden
- PUMP DISCONNECT *30* \* Um die Pumpe für *30* Minuten zu trennen, antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN.
- SMS DISABLE/STOP \* Antwort: Um den SMS Remote Service zu deaktivieren, antworte mit dem Code Any. Beachte, dass Du die Fernsteuerung nur am AAPS Master-Smartphone wieder aktivieren kannst.
- TARGET MEAL/ACTIVITY/HYPO \* Antwort: Um ein MEAL/ACTIVITY/HYPO TT zu setzen, antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN.
- TARGET STOP/CANCEL \* Antwort: Um das temporäre Ziel zu stoppen, antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN.
- HELP \* Antwort: BG, LOOP, TREATMENTS, .....
- HELP BOLUS \* Antwort: BOLUS 1.2 BOLUS 1.2 MEAL

(SMSCommands-troubleshooting)=
## Troubleshooting

### Mehrfach-SMS

Wenn Du die gleiche SMS immer und immer wieder empfängst (z.B. Profilwechsel), hast Du wahrscheinlich eine Endlosschleife mit einer anderen App eingerichtet. Das könnte zum Beispiel xDrip+ sein. Falls dies der Fall ist, stelle sicher, dass xDrip+ (oder eine andere App, die mit Nightscout verbunden ist), keine Behandlungsdaten hochlädt.

Wenn die andere App auf mehreren Smartphones installiert ist, musst Du den Upload auf allen deaktivieren.

### SMS-Kommandos funktionieren nicht auf Samsung-Smartphones

Es gab einen Hinweis, dass nach einem Update die SMS Kommandos auf einem Galaxy S10 nicht mehr funktioniert haben. Dies konnte durch Abschalten der Option 'als Chat Message senden' behoben werden.

![SMS als Chatnachricht deaktivieren](../images/SMSdisableChat.png)
### Android Nachrichten App

Wenn Du Probleme beim Senden oder Empfangen der SMS mit der Android Nachrichten App haben solltest, deaktiviere die Ende-zu-Ende-Verschlüsselung sowohl auf dem Smartphone des Kindes, als auch auf dem 'Follower'-Smartphone.
 - Öffne den entsprechenden SMS-Nachrichtenverlauf
 - Klicke auf die drei Punkte in der oberen rechten Ecke
 - Wähle DETAILS aus
 - Aktiviere NUR ALS SMS/MMS SENDEN
