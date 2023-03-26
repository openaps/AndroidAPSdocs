# Automatisierung

## Was ist Automatisierung

Für gleichbleibende, mehrfach auftretende Ereignisse, kann es sein, dass man immer dieselben Einstellungen ändern muss. Um zusätzliche Arbeit zu vermeiden, kann man versuchen das Ganze zu automatisieren (sofern man es genau genug spezifizieren kann).

Zum Beispiel kann man ein automatisiertes Hypo-Temp-Target erstellen, das bei einem niedrigen Blutzucker automatisch aktiviert wird. Oder wenn man sich in seinem Sportstudio befindet, könnte automatisch ein temporäres Ziel aktiviert werden.

Bevor Du Automatisierung nutzt, solltest Du Dich mit [Temporären Zielen](./temptarget.html) und/oder Profil Wechseln auseinander gesetzt haben.

Stelle sicher, dass Du wirklich verstehst, wie Automation funktioniert bevor Du Deine erste einfache Regel erstellst. **Verwende zunächst eine Benachrichtigung statt der tatsächlichen Aktion.** Wenn Du sicher bist, dass die Automatisierung zum richtigen Zeitpunkt auslöst, kannst Du die Benachrichtigung durch die von Dir gewünschte Aktion ersetzen.

```{image} ../images/Automation_ConditionAction_RC3.png
:alt: Automation Bedingung und Aktion
```

## Wie erstellt man eine Automatisierung

Um eine Automatisierung zu erstellen, gibt man dieser einen Namen, mindestens eine Bedingung und mindestens eine auszuführende Aktion.

(Automation-important-note)=
### Wichtiger Hinweis

**Automation bleibt aktiv, wenn Du den Loop deaktivierst!**

Schalte daher ggf. die Automation-Regeln aus während Du den Loop deaktiviert hast. Entferne dazu das Häkchen in der Box links vom Namen der Automation-Regel.

```{image} ../images/Automation_ActivateDeactivate.png
:alt: Automation Regeln ein- und ausschalten
```

### Automatisierung aufrufen

Abhängig von Deinen [Einstellungen in der KONFIGURATION](Config-Builder-tab-or-hamburger-menu) findest Du [Automatisierungen](Config-Builder#automation) entweder im Hamburger-Menü oder im Tab.

### Allgemein

Es gibt ein paar Einschränkungen:

- Der Glukosewert muss zwischen 72 und 270 md/dl (4 und 15 mmol/l) liegen.
- Der Prozentsatz des Profils muss zwischen 70% und 130% liegen.
- Es gibt ein 5 Minuten  Zeitlimit zwischen den einzelnen Ausführungen (und vor der ersten Ausführung).

**Achtung:**

- **weniger als -2 bedeutet: -3 und geringer (-4, -10, etc)**
- **mehr als -2 bedeutet: -1 und größer (-1, 0, +10)**

### Bedingung

Man kann zwischen verschiedenen Bedingungen wählen. Hier sind nur ein paar erwähnt, aber die meisten sind selbsterklärend und werden daher hier nicht beschrieben:

- Verbundene Bedingungen: Du kannst mehrere Bedingungen verwenden und diese wie folgt verbinden:

  - "Und"
  - "Oder"
  - Entweder oder (d.h. eine (und nur eine) der Bedingungen muss zutreffen, damit die Aktion ausgeführt wird)

- Zeit vs. Wiederkehrende Zeit

  - Zeit = einmaliges Ereignis
  - Wiederkehrende Zeit = etwas, das regelmäßig passiert (z.B.  einmal pro Woche, jeden Werktag etc.)

- Standort: in "Konfiguration" (Automation) kann man auswählen, welchen Standort Service man möchte:

  - Passiver Standort: AAPS nutzt nur die Standort, die von andere Apps angefordert werden.
  - Netzwerkstandort: Standort Deines Wi-Fi
  - GPS-Standort (Achtung! Kann zu übermäßigen Akkuverbrauch führen!)

### Aktion

Du kannst eine oder mehrere Aktionen wählen:

- temporäres Ziel (TT) starten

  - muss zwischen 72 mg/dl und 270 mg/dl (4 mmol/l und 15 mmol/l) liegen
  - funktioniert nur, wenn aktuell kein temporäres Ziel eingestellt ist

- Temporäres Ziel (TT) stoppen

- Benachrichtigung/Notiz

- prozentuale Änderung des Profils

  - muss zwischen 70% und 130% liegen
  - funktioniert nur, wenn das Profil zu dem Zeitpunkt mit 100% läuft

Nachdem du deine Aktionen hinzugefügt hast, **vergesse nicht die Standard-Werte zu ändern** indem du auf die Standard-Werte klickst.

```{image} ../images/Automation_Default_V2_5.png
:alt: Automation Standard-Werte vs.  eigene Werte
```

(Automation-sort-automation-rules)=
### Automation-Regeln sortieren

Zum Sortieren von Automation-Regeln klicke und halte die Schaltfläche mit den vier Linien auf der rechten Seite des Bildschirms und bewege sie nach oben oder unten.

```{image} ../images/Automation_Sort.png
:alt: Automation-Regeln sortieren
```

### Automation-Regeln löschen

Klicke auf das Papierkorbsymbol, um eine Automatisierungsregel zu löschen.

```{image} ../images/Automation_Delete.png
:alt: Automation-Regeln löschen
```

(Automation-good-practice-caveats)=
## Empfehlungen und Beschränkungen

- Wenn Du Automation zum ersten Mal nutzt oder eine neue Regel erstellst, solltest Du zusätzlich eine Benachrichtigung erstellen bis Du sicher bist, dass die Regel so funktioniert, wie beabsichtigt.

- Beobachte die Resultate Deiner Regel.

- Verwende keine zu einfachen Bedingungen (z.B. WENN BZ > 80 mg/dl UND BZ \< 180 mg/dl).

  **Doppelt wichtig, wenn die Aktion ein Profilwechsel ist!**

- Verwende temporäre Ziele statt Profilwechseln. Temporäre Ziele setzen [Autosens](Open-APS-features-autosens) nicht auf 0 zurück.

- Setze Profilwechsel sparsam und nur als letzte Möglichkeit ein.

  - Ein Profilwechsel macht [Autosens](Open-APS-features-autosens) für mindestens 6 Stunden unbrauchbar.

- Profilwechsel setzen Dein Profil nicht automatisch auf das Standardprofil zurück.

  - Dafür musst Du eine weitere Regel erstellen, um zum Standardprofil zurück zu wechseln, oder es manuell tun!
  - Erhöhtes Hypo-Risiko, wenn der Profilwechsel zeitlich unbegrenzt läuft und nicht auf das Standardprofil zurückgesetzt wird.

## Beispiele

Dies sind nur Beispiele, keine Ratschläge. Du sollte diese nicht einfach kopieren ohne sicher zu sein, was Du wirklich tust und ohne zu wissen, warum man diese braucht.

- Profilwechsel für Deine täglichen Aktivitäten (z. B. Schule, Sport, Wochenende vs. Arbeitstag) mit Standort, WLAN SSID, Zeit etc.
- Setting temp target for activities based on time, location, connection to a bluetooth device...
- Setting eating soon temp targets based on time, location...

### Temporäres Ziel bei niedrigem Blutzucker

```{image} ../images/Automation2.png
:alt: Automation2
```

Dies wurde von jemandem erstellt, der bei niedrigen Glukosewerten automatisch ein Hypo-Temp-Target setzen will.

### Mittagsessen Temporäres Ziel

```{image} ../images/Automation3.png
:alt: Automation3
```

In diesem Beispiel isst der Benutzer bei der Arbeit unter der Woche jeden Tag zur selben Zeit zu Mittag. Wenn er sich zu einer bestimmten Zeit in der Kantine aufhält, setzt die Automatisierung ein niedriges temporäres Ziel (Bald essen) während er auf das Mittagessen wartet. Wegen der 'Und'-Verbindung wird das TT nur gesetzt, wenn er zur gewählten Zeit am gewählten Ort ist. Es funktioniert also nicht zu einer anderen Zeit am selben Standort oder zu derselben Zeit an einem anderem Standort (z.B. falls die Person zuhause bleibt oder länger am Arbeitsplatz bleibt).

### Fehlerhafte Nutzung

Achte darauf, Automatisierungen nicht falsch einzusetzen. Dies könnte zu Schwierigkeiten und sogar zu einer Gefahr für Deine Gesundheit führen. Beispiele für eine fehlerhafte Verwendung sind z. B.:

- Trying to override algorithm at all instead of help only (i.e. by changing profile instead of tunning basal, IC etc.)
- Setting profile to compensate food
- Setting profile without duration
- Creating one way rules (i.e. do something but don't undo it by another rule)
- Creating long term rules

## Alternativen

Für fortgeschrittene Benutzer gibt es andere Möglichkeiten, Aufgaben mit IFTTT oder einer Drittanbieter-Android-App namens Automate zu automatisieren. Some examples can be found [here](./automationwithapp.html).
