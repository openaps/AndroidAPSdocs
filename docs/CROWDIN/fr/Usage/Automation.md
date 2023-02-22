# Automatisation

## Qu'est-ce que l'Automatisation

Pour des évènements identiques et fréquents, vous devrez peut-être toujours changer les mêmes paramètres. Pour éviter ce travail supplémentaires, vous pouvez essayer d'automatiser l'événement si vous pouvez le spécifier suffisamment bien et le laisser AndroidAPS le faire pour vous automatiquement.

Par ex. lorsque votre Gly est trop faible, vous pouvez décider d'avoir automatiquement une cible temporaire haute. Ou si vous êtes à votre centre de fitness, vous activez automatiquement une cible temp.

Before using Automation, you should be confident with manual [temp targets](./temptarget.html) or profile switches.

Assurez-vous de bien comprendre comment l'automatisation fonctionne avant de configurer votre première règle simple. **Instead of action, let AAPS first display only a notification.** When you are sure automation is triggered at the right time, replace notification by real action.

```{image} ../images/Automation_ConditionAction_RC3.png
:alt: Condition d'Automation + action
```

## Comment l’utiliser 

Pour mettre en place une automatisation, vous devez lui donner un titre, sélectionner au moins une condition et une action.

(important-note)=
### Remarque importante

**Automation is still active when you disable loop!**

Veillez donc à désactiver les règles d'automatisation pendant ces moments si nécessaire. Vous pouvez le faire en décochant la case à gauche du nom de votre règle d'automatisation.

```{image} ../images/Automation_ActivateDeactivate.png
:alt: Activer et désactiver une règle d'automatisation
```

### Où trouver l'automatisation

Depending on your [settings in config builder](../Configuration/Config-Builder.md#tab-or-hamburger-menu) you will either find [Automation](../Configuration/Config-Builder#automation) in hamburger menu or as a tab.

### Généralités

Il y a des limites :

- The glucose value has to be between 72 and 270 mg/dl or 4 and 15 mmol/l.
- The profile percentage has to be between 70 % and 130%.
- There is a 5 min. time limit between executions (and first execution).

**Please be careful:**

- **less than -2 means: -3 and lower (-4,-10, etc)**
- **more than -2 means: -1 and higher (-1, 0, +10, etc)**

### Condition

Vous pouvez choisir entre plusieurs conditions. Voici quelques explications, mais la plupart d'entre elles devraient être faciles à comprendre et elles ne sont pas toutes décrites ici :

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
  - Use GPS location (Attention! Peut entrainer une consommation excessive de la batterie !)

### Action

Vous pouvez choisir une ou plusieurs actions :

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
### Tri des règles d'automatisation

Pour trier les règles d'automatisation, cliquez et maintenez l'icone sur la droite d'une règle (4 lignes) et déplacez-la vers le haut ou vers le bas.

```{image} ../images/Automation_Sort.png
:alt: Tri des règles d'automatisation
```

### Suppression des règles d'automatisation

Pour supprimer une règle d'automatisation, cliquez sur l'icône Corbeille.

```{image} ../images/Automation_Delete.png
:alt: Suppression des règles d'automatisation
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

## Exemples

Ce ne sont que des exemplesde configuration, pas des conseils. Ne les reproduisez pas sans savoir ce que vous faites réellement ou pourquoi vous en avez besoin.

- Switching profiles for your daily activities (like school, gym, weekend, workday...) using geolocation, wifi, time etc.
- Setting temp target for activities based on time, location, connection to a bluetooth device...
- Setting eating soon temp targets based on time, location...

### Cible temp. Glycémie basse

```{image} ../images/Automation2.png
:alt: Automatisation2
```

Ceci est pour quelqu'un qui veut avoir automatiquement une cible temporaire d'hypo lorsque sa glycémie est basse.

### Cible Temp. heure du repas

```{image} ../images/Automation3.png
:alt: Automatisation3
```

Cet exemple est pour quelqu'un qui déjeune au travail tous les jours à la même heure. Si il ou elle est localisé(e) à une certaine heure sur son lieu de repas, l'automatisation mettra une cible temporaire basse (repas imminent) en attendant le déjeuner. En raison de la connexion "Et", cela ne se produit que pendant une certaine heure et si il ou elle est au bon emplacement. Donc cela ne fonctionne pas à cet endroit à tous les autres moments, ou à ce moment là si la personne reste à la maison, ou encore si elle reste plus longtemps à son travail.

### Utilisation incorrecte de l'automatisation

Veuillez noter que si vous n'utilisez pas correctement l'automatisation, cela pourrait entraîner des difficultés et même être dangereux pour votre santé. Des exemples d'utilisation incorrecte sont :

- Trying to override algorithm at all instead of help only (i.e. by changing profile instead of tunning basal, IC etc.)
- Setting profile to compensate food
- Setting profile without duration
- Creating one way rules (i.e. do something but don't undo it by another rule)
- Creating long term rules

## Alternatives

Pour les utilisateurs avancés, il existe d'autres possibilités pour automatiser les tâches à l'aide de IFTTT ou d'une application Android tierce appelée Automate. Some examples can be found [here](./automationwithapp.html).
