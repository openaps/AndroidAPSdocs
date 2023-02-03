# Automatisierung

## Was ist Automatisierung

Für gleichbleibende, mehrfach auftretende Ereignisse, kann es sein, dass man immer dieselben Einstellungen ändern muss. Um zusätzliche Arbeit zu vermeiden, kann man versuchen das Ganze zu automatisieren (sofern man es genau genug spezifizieren kann).

Zum Beispiel kann man ein automatisiertes Hypo-Temp-Target erstellen, das bei einem niedrigen Blutzucker automatisch aktiviert wird. Oder wenn man sich in seinem Sportstudio befindet, könnte automatisch ein temporäres Ziel aktiviert werden.

Before using Automation, you should be confident with manual [temp targets](./temptarget.html) or profile switches.

Stelle sicher, dass Du wirklich verstehst, wie Automation funktioniert bevor Du Deine erste einfache Regel erstellst. **Instead of action, let AAPS first display only a notification.** When you are sure automation is triggered at the right time, replace notification by real action.

```{image} ../images/Automation_ConditionAction_RC3.png
:alt: Automation Bedingung und Aktion
```

## Wie erstellt man eine Automatisierung

Um eine Automatisierung zu erstellen, gibt man dieser einen Namen, mindestens eine Bedingung und mindestens eine auszuführende Aktion.

(important-note)=
### Wichtiger Hinweis

**Automation is still active when you disable loop!**

Schalte daher ggf. die Automation-Regeln aus während Du den Loop deaktiviert hast. Entferne dazu das Häkchen in der Box links vom Namen der Automation-Regel.

```{image} ../images/Automation_ActivateDeactivate.png
:alt: Automation Regeln ein- und ausschalten
```

### Automatisierung aufrufen

Depending on your [settings in config builder](../Configuration/Config-Builder.md#tab-or-hamburger-menu) you will either find [Automation](../Configuration/Config-Builder#automation) in hamburger menu or as a tab.

### Allgemein

Es gibt ein paar Einschränkungen:

- The glucose value has to be between 72 and 270 mg/dl or 4 and 15 mmol/l.
- The profile percentage has to be between 70 % and 130%.
- There is a 5 min. time limit between executions (and first execution).

**Please be careful:**

- **less than -2 means: -3 and lower (-4,-10, etc)**
- **more than -2 means: -1 and higher (-1, 0, +10, etc)**

### Bedingung

Man kann zwischen verschiedenen Bedingungen wählen. Hier sind nur ein paar erwähnt, aber die meisten sind selbsterklärend und werden daher hier nicht beschrieben:

- connect conditions: you can have several conditions and can link them with

  - "And"
  - "Or"
  - "Exclusive or" (which means that if one - and only one of the - conditions applies, the action(s) will happen)

- Time vs. recurring time

  - time =  single time event
  - recurring time = something that happens regularly (i.e. once a week, every working day etc.)

- location: in the config builder (Automation), you can select which location service you want to use:

  - Use passive location: AAPS only takes locations when other apps are requesting it
  - Use network location: Location of your Wifi
  - GPS-Standort (Achtung! Kann zu übermäßigen Akkuverbrauch führen!)

### Aktion

Du kannst eine oder mehrere Aktionen wählen:

- start temp target

  - must be between 72 mg/dl and 270 mg/dl (4 mmol/l and 15 mmol/l)
  - works only if there is no previous temp target

- stop temp target

- notification

- profile percentage

  - must be between 70% and 130%
  - works only if the previous percentage is 100%

After adding your action, **don't forget to change the default values** to what you need by clicking in the default values.

```{image} ../images/Automation_Default_V2_5.png
:alt: Automation default vs. set values
```

(sort-automation-rules)=
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

(good-practice-caveats)=
## Good practice & caveats

- When you start using automation or create a new rule, first add a notification only until you are sure the rule is working well.

- Watch the rule results.

- Don't try to make conditions too easy (i.e.: IF bg > 80 mg/dl AND bg \< 180 mg/dl)

  **Doubly important if action is a profile switch!**

- Try to use Temp Targets instead of Profile Switches. Temp Targets do not reset [Autosens](../Usage/Open-APS-features.md#autosens) back to 0.

- Make sure Profile switches are made sparingly and preferably at a last resort.

  - Profile switching renders [Autosens](../Usage/Open-APS-features.md#autosens) useless for a min of 6 hours.

- Profile switching will not reset the profile back to your base profile

  - You have to make another rule to set this back or do it manually!
  - Increased risk of hypoglycemia if profile switch does not expire or reset back to base profile.

## Beispiele

Dies sind nur Beispiele, keine Ratschläge. Du sollte diese nicht einfach kopieren ohne sicher zu sein, was Du wirklich tust und ohne zu wissen, warum man diese braucht.

- Switching profiles for your daily activities (like school, gym, weekend, workday...) using geolocation, wifi, time etc.
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
