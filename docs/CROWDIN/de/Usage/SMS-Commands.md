# SMS-Befehle

## Sicherheitshinweise

- AndroidAPS erlaubt es Dir, das Smartphone eines Kindes über Sms-Befehle aus der Ferne zu steuern. If you enable this SMS Communicator, always remember that the phone set up to give remote commands could be stolen. So always protect it at least by a PIN code.
- AndroidAPS gibt Rückmeldung per SMS, wenn Deine Remote-Befehle, wie z.B. ein Bolus oder eine Profiländerung, ausgeführt wurden. Es ist ratsam, dies so einzustellen, dass Bestätigungstexte an mindestens zwei verschiedene Telefonnummern gesendet werden, falls eines der Empfangstelefone gestohlen wird.

## Funktionsweise

Gehe zu den Programmen in Ihrem android-Handy-Einstellung > AndroidAPS > Berechtigungen und SMS aktivieren

In AndroidAPS gehst du zu Einstellungen > SMS-Kommunikator und trägst die Telefonnummer(n) ein, die dazu berechtigt werden soll(en), Kommandos an AndroidAPS zu senden, mehrere Nummern werden dabei durch Semikolons ohne weitere Leerzeichen getrennt (z.B. +4912345678;+4912345679). ‘Erlaube externe Befehle per SMS’ muss außerdem aktiviert werden

Sende von einer deiner zugelassenen Telefonnummern eine SMS auf das Handy, auf dem AndroidAPS läuft. Du kannst jeden der unten **fett** gedruckten Befehle verwenden. Das AndroidAPS-Handy bestätigt die erfolgreiche Ausführung des Befehls oder gibt den angefragten Status zurück.

**Hinweis**: Eine SMS-Flat auf beiden Telefonen kann nützlich sein, da u.U. viele SMS hin und her gesandt werden.

## Befehle

### BG

- Letzten BG: 5,6 4 min vor Delta:-0,2 Mmol, IOB: 0.20U (Bolus: 0.10U basale: 0.10U)

### LOOP STOP/DISABLE

- Loop wurde deaktiviert.

### LOOP START/ENABLE

- Lopp wurde aktiviert

### LOOP STATUS

- Loop ist deaktiviert.
- Loop ist aktiviert.
- Pausiert (%1$d min)

### LOOP SUSPEND 20

- Schleife für 20 Minuten unterbrochen

### LOOP RESUME

- Loop wurde fortgesetzt

### TREATMENTS REFRESH

- TERATMENTS REFRESH 1 receivers

### NSCLIENT NEUSTART

- NSCLIENT RESTART 1 receivers

### PUMP

- Letzten conn: 1 Minago Temp: 0.00U / h @11: 38 5/30 min IOB: 0.5U Reserv: 34U Batt: 100

### BASAL STOP/CANCEL

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
    
    - Um zum Profil 1 mit 100% zu wechseln, antworte mit Code Any
    
    ### PROFILE 2 30
    
    - Um zum Profil 2 mit 30% zu wechseln, antworte mit Code Any
    
    ## Problembehandlung
    
    Es gab einen Hinweis, dass nach einem Update die SMS Kommandos auf einem Galaxy S10 nicht mehr funktioniert haben. Dies konnte durch Abschalten der Option 'als chat message senden' behoben werden.
    
    ![SMS als Chatnachricht deaktivieren](../images/SMSdisableChat.png)