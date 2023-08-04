# Automatisering

## Wat is automatisering

Voor bepaalde veelvoorkomende gebeurtenissen moet je wellicht altijd dezelfde instellingen wijzigen. Om extra werk te voorkomen, kun je proberen om dit te automatiseren, en het dus automatisch voor je te laten doen.

Bijv. wanneer jouw BG te laag is, kun je besluiten om automatisch een hoger tijdelijk streefdoel in te stellen. Of als je in het sportcentrum bent, wordt er automatisch een tijdelijk streefdoel voor je ingesteld.

Before using Automation, you should be confident with manual [temp targets](./temptarget.html) or profile switches.

Zorg ervoor dat je goed begrijpt hoe automatisering werkt voordat je jouw eerste eenvoudige regel aanmaakt. **Instead of action, let AAPS first display only a notification.** When you are sure automation is triggered at the right time, replace notification by real action.

```{image} ../images/Automation_ConditionAction_RC3.png
:alt: Automatiseringsvoorwaarde + actie
```

## Zo stel je het in

Als je een automatisering wilt instellen, moet je deze een titel geven, en ten minste één voorwaarde en één actie selecteren.

(Automation-important-note)=
### Belangrijke opmerking

**Automation is still active when you disable loop!**

So make sure to deactivate automation rules during these occasions if necessary. Je kunt dit doen door het vinkje in het vakje bij de naam van jouw automatiseringsregel weg te halen.

```{image} ../images/Automation_ActivateDeactivate.png
:alt: Automatiseringsregel activeren en deactiveren
```

### Waar vind je Automatisering

Depending on your [settings in config builder](Config-Builder-tab-or-hamburger-menu) you will either find [Automation](Config-Builder#automation) in hamburger menu or as a tab.

### General

Er zijn een aantal beperkingen:

- The glucose value has to be between 72 and 270 mg/dl or 4 and 15 mmol/l.
- The profile percentage has to be between 70 % and 130%.
- There is a 5 min. time limit between executions (and first execution).

**Please be careful:**

- **less than -2 means: -3 and lower (-4,-10, etc)**
- **more than -2 means: -1 and higher (-1, 0, +10, etc)**

### Voorwaarde

Je kunt kiezen tussen verschillende voorwaarden. Hieronder worden enkele voorbeelden uitwerkt, maar de meeste voorwaarden zijn gemakkelijk te begrijpen en daarom wordt niet alles hier beschreven:

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
  - Use GPS location (Attention! Dit kan veel batterijverbruik geven!)

### Actie

Je kunt één of meer acties kiezen:

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

(Automation-sort-automation-rules)=
### Automatiseringsregels sorteren

Om jouw automatiseringsregels te sorteren, houd je de vier-streepjes-knop aan de rechterkant van het scherm ingedrukt en sleep je de regel omhoog of omlaag.

```{image} ../images/Automation_Sort.png
:alt: Automatiseringsregels sorteren
```

### Automatiseringsregels verwijderen

Om een automatiseringsregel te verwijderen, klik op het prullenbak-icoon.

```{image} ../images/Automation_Delete.png
:alt: Automatiseringsregels verwijderen
```

(Automation-good-practice-caveats)=
## Good practice & caveats

- When you start using automation or create a new rule, first add a notification only until you are sure the rule is working well.

- Watch the rule results.

- Don't try to make conditions too easy (i.e.: IF bg > 80 mg/dl AND bg \< 180 mg/dl)

  **Doubly important if action is a profile switch!**

- Try to use Temp Targets instead of Profile Switches. Temp Targets do not reset [Autosens](Open-APS-features-autosens) back to 0.

- Make sure Profile switches are made sparingly and preferably at a last resort.

  - Profile switching renders [Autosens](Open-APS-features-autosens) useless for a min of 6 hours.

- Profile switching will not reset the profile back to your base profile

  - You have to make another rule to set this back or do it manually!
  - Increased risk of hypoglycemia if profile switch does not expire or reset back to base profile.

## Voorbeelden

Dit zijn slechts voorbeelden, geen advies. Doe het niet blind na zonder je bewust te zijn van wat je eigenlijk doet of waarom je deze regels nodig zou hebben.

- Switching profiles for your daily activities (like school, gym, weekend, workday...) using geolocation, wifi, time etc.
- Setting temp target for activities based on time, location, connection to a bluetooth device...
- Setting eating soon temp targets based on time, location...

### Lage glucose tijdelijk doel

```{image} ../images/Automation2.png
:alt: Automation2
```

Dit is gemaakt door iemand die automatisch een tijdelijk hypo streefdoel wil instellen bij een lage glucose.

### Lunchtijd tijdelijk doel

```{image} ../images/Automation3.png
:alt: Automation3
```

Deze regel is gemaakt door iemand, die doordeweeks luncht op hetzelfde tijdstip. Als deze persoon op een bepaald tijdstip op de lunchlocatie is, dan wordt er een lager tijdelijk doel (eet binnenkort) ingesteld terwijl h/zij wacht op de lunch. Door de "en" combinatie wordt de regel alleen uitgevoerd als diegene op dat tijdstip op die locatie is. De regel wordt dus niet actief wanneer diegene op een ander tijdstip op deze locatie is, en ook niet wanneer het wel dat tijdstip is maar diegene thuis is gebleven of langer op de werkplek is gebleven.

### Onjuist gebruik van automatisering

Behoed jezelf voor onjuist gebruik van automatisering. Dit kan leiden tot problemen en zelfs gevaar voor jouw gezondheid. Voorbeelden van onjuist gebruik zijn bijvoorbeeld:

- Trying to override algorithm at all instead of help only (i.e. by changing profile instead of tunning basal, IC etc.)
- Setting profile to compensate food
- Setting profile without duration
- Creating one way rules (i.e. do something but don't undo it by another rule)
- Creating long term rules

## Alternatieven

For advanced users, there are other possibilities to automate tasks using IFTTT or a third party Android app called Automate. Some examples can be found [here](./automationwithapp.html).
