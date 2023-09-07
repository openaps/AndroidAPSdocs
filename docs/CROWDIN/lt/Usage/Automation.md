# Automatizavimas

## Kas yra Automatizavimas

Dėl nuolatinių, pasikartojančių įvykių gali būti, kad visada turite pakeisti tuos pačius parametrus. Norėdami išvengti papildomo darbo, galite pabandyti automatizuoti visą reikalą (jei galite jį pakankamai tiksliai nurodyti).

pvz.,  galite sukurti aukšto tikslo veiksmų rinkinį, kuris automatiškai suaktyvinamas, kai gliukozės kiekis kraujyje yra mažas. Arba, jei esate savo sporto klube, laikinas tikslas gali būti suaktyvintas automatiškai.

Before using Automation, you should be confident with manual [temp targets](./temptarget.html) or profile switches.

Įsitikinkite, kad jūs tikrai suprantate, kaip automatizavimas veikia prieš nustatant savo pirmąjį paprastą taisyklę. **Instead of action, let AAPS first display only a notification.** When you are sure automation is triggered at the right time, replace notification by real action.

```{image} ../images/Automation_ConditionAction_RC3.png
:alt: Automatizavimo būsena + veiksmai
```

## Kaip naudoti

Norėdami nustatyti automatizavimą, jūs turite suteikti jam pavadinimą, bent vieną sąlygą ir bent vieną atliktiną veiksmą.

(Automation-important-note)=
### Svarbios pastabos

**Automation is still active when you disable loop!**

So make sure to deactivate automation rules during these occasions if necessary. Norėdami tai padaryti, pašalinkite varnelę laukelyje, esančiame automatizavimo taisyklės pavadinimo kairėje.

```{image} ../images/Automation_ActivateDeactivate.png
:alt: Įjungti ir išjungti automatizavimo taisyklę
```

### Where to find Automation

Depending on your [settings in config builder](Config-Builder-tab-or-hamburger-menu) you will either find [Automation](Config-Builder#automation) in hamburger menu or as a tab.

### Bendrieji

Yra kai kurie apribojimai:

- The glucose value has to be between 72 and 270 mg/dl or 4 and 15 mmol/l.
- The profile percentage has to be between 70 % and 130%.
- There is a 5 min. time limit between executions (and first execution).

**Please be careful:**

- **less than -2 means: -3 and lower (-4,-10, etc)**
- **more than -2 means: -1 and higher (-1, 0, +10, etc)**

### Sąlyga

Jūs galite pasirinkti tarp kelių sąlygų. Čia minimos tik kelios, tačiau dauguma jų yra savaime suprantamos, todėl čia nėra aprašytos:

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
  - Use GPS location (Attention! Gali sukelti pernelyg didelį akumuliatoriaus sunaudojimą!)

### Veiksmas

Galite pasirinkti vieną ar daugiau veiksmų:

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
### Rūšiuoti automatizavimo taisykles

Norint rūšiuoti automatizavimo taisykles, paspauskite ir palaikykite keturių linijų mygtuką ekrano dešinėje pusėje ir tempkite žemyn ar aukštyn.

```{image} ../images/Automation_Sort.png
:alt: Rūšiuoti automatizavimo taisykles
```

### Ištrinti automatizavimo taisykles

To delete an automation rule click on trash icon.

```{image} ../images/Automation_Delete.png
:alt: Ištrinti automatizavimo taisyklę
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

## Pavyzdžiai

Tai yra tiesiog pavyzdžiai, ne patarimai. Jūs neturėtumėte tiesiog jų kopijuoti, nebūdami tikri, ką tiksiai darote, ir nežinodami, kodėl jums jų reikia.

- Switching profiles for your daily activities (like school, gym, weekend, workday...) using geolocation, wifi, time etc.
- Setting temp target for activities based on time, location, connection to a bluetooth device...
- Setting eating soon temp targets based on time, location...

### Žemos glikemijos laikinas tikslas

```{image} ../images/Automation2.png
:alt: Automation2
```

Tai tiems, kurie nori automatiškai nustatyti laikiną žemos glikemijos tikslą, kai jų cukraus kiekis kraujyje yra mažas.

### Pietų laiko laikinas tikslas

```{image} ../images/Automation3.png
:alt: Automation3
```

Šis pavyzdys skirtas tiems, kurie pietus darbe valgo kiekvieną dieną tuo pačiu metu. Jei jis ar ji tam tikru laiku yra jų valgymo vietoje, automatizavimas, laukdamas pietų, uždės laikiną žemą tikslą (netrukus valgysiu). Dėl ryšio „Ir“ tai vyksta tik tam tikrą valandą ir jei jis ar ji yra tinkamoje vietoje. Taigi automatizavimas neveiks visai kitu metu, arba tuo metu, jei žmogus lieka namuose, ar ilgiau būna darbe.

### Neteisingai naudojamas Automatizavimas

Atkreipkite dėmesį, jei netinkamai naudojate automatizavimo funkciją. Tai gali sukelti sunkumų ir net kelti pavojų jūsų sveikatai. Neteisingo naudojimo pavyzdžiai:

- Trying to override algorithm at all instead of help only (i.e. by changing profile instead of tunning basal, IC etc.)
- Setting profile to compensate food
- Setting profile without duration
- Creating one way rules (i.e. do something but don't undo it by another rule)
- Creating long term rules

## Alternatyvos

For advanced users, there are other possibilities to automate tasks using IFTTT or a third party Android app called Automate. Some examples can be found [here](./automationwithapp.html).
