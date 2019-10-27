# SMS-Befehle

## Sicherheitshinweise

- AndroidAPS erlaubt es Dir, das Smartphone eines Kindes über SMS-Nachricht aus der Ferne zu steuern. Wenn Du diesen SMS-Kommunikator aktivierst, denke immer daran, dass das Telefon, das für Remote-Befehle eingerichtet ist, gestohlen werden kann. Schütze dieses mit einem zumindest mit einem sicheren PIN-Code.
- AndroidAPS gibt Rückmeldung per SMS, wenn Deine Remote-Befehle, wie z.B. ein Bolus oder eine Profiländerung, ausgeführt wurden. Es ist ratsam, dies so einzustellen, dass Bestätigungstexte an mindestens zwei verschiedene Telefonnummern gesendet werden, falls eines der Empfangstelefone gestohlen wird.

## Funktionsweise

Gehe zu den Programmen in Ihrem android-Handy-Einstellung > AndroidAPS > Berechtigungen und SMS aktivieren

In AndroidAPS gehst du zu Einstellungen > SMS-Kommunikator und trägst die Telefonnummer(n) ein, die dazu berechtigt werden soll(en), Kommandos an AndroidAPS zu senden, mehrere Nummern werden dabei durch Semikolons ohne weitere Leerzeichen getrennt (z.B. +4912345678;+4912345679). ‘Erlaube externe Befehle per SMS’ muss außerdem aktiviert werden

Senden Sie eine SMS auf das Handy, mit AndroidAPS, die von Ihr zugelassenen Telefonnummern mit einem der Befehle unter **Fett**, das Telefon reagiert bestätigen Erfolg der Befehl oder den Status beantragt.

**Hinweis**: Eine SMS-Flat auf beiden Telefonen kann nützlich sein, da u.U. viele SMS hin und her gesandt werden.

## Kommandos

### BZ

- Letzten BG: 5,6 4 min vor Delta:-0,2 Mmol, IOB: 0.20U (Bolus: 0.10U basale: 0.10U)

### SCHLEIFE BEENDEN/DEAKTIVIEREN

- Loop wurde deaktiviert.

### LOOP STARTEN/AKTIVIEREN

- Lopp wurde aktiviert

### LOOP STATUS

- Loop ist deaktiviert.
- Loop ist aktiviert.
- Pausiert (%1$d min)

### SCHLEIFE UNTERBRECHEN 20

- Schleife für 20 Minuten unterbrochen

### LOOP-LEBENSLAUF

- Loop wurde fortgesetzt

### BEHANDLUNGEN-REFRESH

- TERATMENTS REFRESH 1 receivers

### NSCLIENT NEUSTART

- NSCLIENT RESTART 1 receivers

### PUMPE

- Letzten conn: 1 Minago Temp: 0.00U / h @11: 38 5/30 min IOB: 0.5U Reserv: 34U Batt: 100

### BASALEN STOP/CANCEL

- Um die Tbr abzubrechen, antworte mit dem Code %s

### BASAL 0.3

- Um für 30 Minuten eine temporäre Basalrate mit 0,3 IE pro Stunde zu starten, antworte mit dem Code Swe

### BASAL 0.3 20

- Um für 20 Minuten eine temporäre Basalrate mit 0,3 IE pro Stunde zu starten, antworte mit dem Code Swe

### BASAL 30%

- Um für 30 Minuten eine temporäre Basalrate mit 30% zu starten, antworte mit dem Code Swe

### BASAL 30% 50

- Um für 50 Minuten eine temporäre Basalrate mit 50% zu starten, antworte mit dem Code Swe

### BOLUS 1.2

- Um einen Bolus von 1,2 IE abzugeben, antworte mit dem Code Rrt
- Entfernten Bolus nicht zugelassen (*Wenn innerhalb von 15 Minuten nach dem letzten Bolus-Befehl oder remote-Befehle nicht erlaubt*)

### EXTENDED STOP/CANCEL

- Um den verzögerten Bolus zu stoppen, antworte mit dem Code EmF

### EXTENDED 2 120

- Um einen verzögertenen Bolus von 2 IE über 120 Minuten zu starten, antworte mit dem Code EmF

### CAL 5.6

- Um einen Kalibrierungswert von 5,6 zu senden, antworte mit Code Rrt
- Kalibrierung gesendet (*wenn xDrip installiert ist. Sdgs</li> </ul> 
    
    ### PROFILE STATUS
    
    - Profile1
    
    ### PROFILE LIST
    
    - 1.`Profile1` 2.`Profile2`
    
    ### PROFILE 1
    
    - To switch profile to Profile1 100% reply with code Any
    
    ### PROFILE 2 30
    
    - To switch profile to Profile2 30% reply with code Any
    
    ## Problembehandlung
    
    There was a report on SMS commands stopping after an update on Galaxy S10 phone. Could be solved by disabeling 'send as chat message'.
    
    ![Disable SMS as chat message](../images/SMSdisableChat.png)