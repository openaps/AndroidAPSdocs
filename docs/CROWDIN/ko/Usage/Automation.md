# Automation

## What is Automation

For the same frequent events, you might always have to change the same settings. To avoid the extra work, you can just try to automate the event if you can specify it well enough and let it do it for you automatically.

예를 들어, when your BG is too low, you can decide to have automatically a high temp target. Or if you are at your fitness center, you get automatically a temp target.

Before using Automation, you should be confident with manual [temp targets](./temptarget.html) or profile switches.

Make sure you really understand how automation works before setting up your first simple rule. **Instead of action, let AAPS first display only a notification.** When you are sure automation is triggered at the right time, replace notification by real action.

```{image} ../images/Automation_ConditionAction_RC3.png
:alt: Automation condition + action
```

## How to use it

To set up an automation, you have to give it a title, select at least one condition and one action.

(Automation-important-note)=
### Important note

**Automation is still active when you disable loop!**

So make sure to deactivate automation rules during these occasions if necessary. You can do so by unticking the box left of the name of your automation rule.

```{image} ../images/Automation_ActivateDeactivate.png
:alt: Activate and deactivaten automation rule
```

### Where to find Automation

Depending on your [settings in config builder](Config-Builder-tab-or-hamburger-menu) you will either find [Automation](Config-Builder#automation) in hamburger menu or as a tab.

### 포괄적인 정보

There are some limits:

- The glucose value has to be between 72 and 270 mg/dl or 4 and 15 mmol/l.
- The profile percentage has to be between 70 % and 130%.
- There is a 5 min. time limit between executions (and first execution).

**Please be careful:**

- **less than -2 means: -3 and lower (-4,-10, etc)**
- **more than -2 means: -1 and higher (-1, 0, +10, etc)**

### Condition

You can choose between several conditions. Here are some things explained, but most of it should be easy to understand and is not all described here:

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
  - Use GPS location (Attention! May cause excessive battery drain!)

### Action

You can choose one or more actions:

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
### Sort automation rules

To sort automation rules click and hold the four-lines-button on the right side of the screen and move up or down.

```{image} ../images/Automation_Sort.png
:alt: Sort automation rules
```

### Delete automation rules

To delete an automation rule click on trash icon.

```{image} ../images/Automation_Delete.png
:alt: Delete automation rule
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

## Examples

These are just setup examples, no advises. Don't reproduce them without being aware what you are actually doing or why you need them.

- Switching profiles for your daily activities (like school, gym, weekend, workday...) using geolocation, wifi, time etc.
- Setting temp target for activities based on time, location, connection to a bluetooth device...
- Setting eating soon temp targets based on time, location...

### Low Glucose Temp Target

```{image} ../images/Automation2.png
:alt: Automation2
```

This is made by someone who wants to get a hypo temp target automatically when having low glucose.

### Lunch Time Temp Target

```{image} ../images/Automation3.png
:alt: Automation3
```

This example is made by someone who has lunch at work at the same time every day during the week. If he or she stays at a certain time in his or her lunch location, automation will set a low temp target (eating soon) while waiting for the lunch. Because of the "And" connection, it only happens during the chosen time and if he or she is at the chosen location. So it does not work on any other time at this location or on this time when the person stays at home.

### Incorrect use of automation

Please be aware to use automation incorrectly. This might lead to difficulties and even danger for your health. Examples for incorrect use are for instance:

- Trying to override algorithm at all instead of help only (i.e. by changing profile instead of tunning basal, IC etc.)
- Setting profile to compensate food
- Setting profile without duration
- Creating one way rules (i.e. do something but don't undo it by another rule)
- Creating long term rules

## Alternatives

For advanced users, there are other possibilities to automate tasks using IFTTT or a third party Android app called Automate. Some examples can be found [here](./automationwithapp.html).
