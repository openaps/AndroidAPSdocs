# Profile
Du kannst im Konfigurations-Generator  auswählen, von welcher Quelle AAPS dein Therapie-Profil mit den Basalraten, ISF und IC abrufen soll.

### DanaR
Das aktuelle Profil wird in die **DanaR/DanaRS** geschrieben. **Achtung: Die in der Pumpe hinterlegten Basalraten etc. werden überschrieben!** 

### Nightscout-Profil (empfohlen)
Die auf deiner **Nightscout-Website** unter https://[deine-nightscout-adresse]/profile hinterlegten Profile werden synchronisiert. So kannst du komfortabel in Nightscout mehrere Profile (z.B. Arbeit, Daheim, Sport, Urlaub usw.) **anlegen**. Kurz nach dem Klick auf "Speichern" werden sie bei bestehender Internetverbindung des Smartphones zu AAPS übertragen. Nach der Erstübertragung Auch ohne Internetverbindung bzw. ohne Verbindung zu Nightscout sind die Nightscout-Profile in AAPS verfügbar, wenn sie einmalig synchronisiert worden sind. 

Um ein Profil aus Nightscout zu **aktivieren**, musst du einen **Profilwechsel** durchführen. Dazu im Homescreen von AAPS oben lange auf das derzeitige Profil drücken (graues Feld zwischen dem hellblauen "Open/Closed Loop"-Feld und dem dunkelblauen Zielbereich-Feld) > Profilwechsel > Profil auswählen > OK. AAPS schreibt nach dem Profilwechsel das gewählte Profil auch in die Pumpe, so dass es im Notfall ohne AAPS verfügbar ist und weiterläuft.

### Einfaches Profil
Dieses Profil ermöglicht nur ein ganz simples Behandlungsschema mit **ganztägig jeweils nur einem Wert** für DIA, IC, ISF, Basalrate und Zielbereich. Eher zu Testzwecken zu verwenden, außer du hast über 24 Stunden dieselben Faktoren. Sobald "Einfaches Profil" ausgewählt ist, erscheint in AAPS ein neuer Reiter, wo du dann die Profildaten eingeben kannst.

### Lokales Profil
Hier wird zunächst das in der **Pumpe hinterlegte Profil 1** ausgelesen (weitere Pumpen-Profile werden ignoriert). Sobald "Lokales Profil" ausgewählt ist, erscheint in AAPS ein neuer Reiter, wo du dann die aus der Pumpe ausgelesenen Profildaten ggf. verändern kannst. Mit dem nächsten Profilwechsel werden sie dann auf die Pumpe ins Profil 1 geschrieben.
