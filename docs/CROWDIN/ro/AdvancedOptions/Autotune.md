# Cum să utilizați modulul Autotune

Modulul Autotune este o implementare a algoritmului autotune OpenAPS în AAPS. It analyzes your recent AAPS history to suggest adjustments to your basal rates, ISF and carb ratio.

Autotune Plugin is available in AAPS releases since [3.4](#version3400) but is hidden by default.

(autotune-how-autotune-calculates-adjustments)=
## How Autotune calculates adjustments

Autotune looks back over your recent AAPS history — CGM readings, boluses, carbs and temporary basal rates — and works out where your **Profile** (basal rates, ISF, carb ratio) doesn't quite match what actually happened to your BG.

For each 5-minute data point, it compares your **actual BG change** to the change your Profile predicted, and sorts the resulting deviation into one of three buckets:

* deviations that happened with no carbs on board and no insulin activity (used to tune **basal rates**, hour by hour),
* deviations that happened after a bolus/correction with no carbs (used to tune **ISF**), or
* deviations that happened while carbs were absorbing (used to tune **carb ratio**).

It then looks at the pattern of deviations in each bucket (using percentiles rather than a simple average, so a few noisy data points don't skew the result) and proposes a new value for that hour/parameter.

To keep any single run from overcorrecting, each Autotune run only ever moves a value a fraction of the way towards what the data suggests: up to 10% for ISF and carb ratio, and up to 20% for each basal segment. Overall drift is further capped by the **Max autosens ratio** / **Min autosens ratio** settings (see [Other settings](#autotune-other-settings) below) — the same bounds that limit Autosens. This is why Autotune is meant to be run repeatedly (day after day, or nightly) rather than trusted after a single run: results should converge gradually, and a big jump on one run is a sign to double check your data (missed carbs, a bad sensor day, _etc._) rather than to trust it blindly.

Autotune can be run three ways: manually as a one-off from within the plugin (as described below), automatically every night via an [automation rule](#autotune-run-autotune-with-an-automation-rule), or — outside of AAPS entirely — as a standalone command-line tool against exported data, which is how some community guides describe using it without a phone actively running AAPS.

*For the underlying oref0 algorithm in full mathematical detail, see [OpenAPS's Autotune documentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html).*

## Arătați modulul Autotune

Creați un fișier gol numit `enable_autotune` în subdosarul `extra` din [dosarul AAPS](#preferences-maintenance-settings) al telefonului dumneavoastră.

***NOTĂ: Asigurați-vă că verificați în setările **AAPS** unde este dosarul AAPS, și că ați plasat fișierul în cel corect, un număr de mai multe persoane au fost depistate punând fișierul în dosarul greșit.***

![Activați Autotune](../images/Autotune/Autotune_0.png)

Restart **AAPS**. Then open the **menu** (☰), select **Configuration**, then the **General** category, and tick **Autotune**. The card then shows **Settings** and **Open plugin**:

![Autotune ticked in Configuration > General](../images/v4/Configuration/configuration_general_autotune.png)

## Interfața utilizatorului pentru Autotune

Tap **Open plugin** on the **Autotune** card to open the Autotune screen:

![Autotune screen with the profile, the number of days of data and a warning about the selected profile](../images/Autotune/Autotune_1b.png)

- Puteți selecta în meniul derulant profilul de intrare pe care doriți să-l ajustați (în mod implicit profilul dvs. activ în prezent va fi selectat)
  - Note: each time you select a new profile, previous results will be removed and the **Number of days of data** will be set to its default value
- Then **Number of days of data** (called **Tune days** in older versions) is to select the number of days used in calculation to tune your profile. Valoarea minimă este de 1 zi, iar valoarea maximă este de 30 de zile. Acest număr nu ar trebui să fie prea mic astfel încât să se obțină rezultate iterative și omogene (peste 7 zile pentru fiecare calcul)
  - Note: each time you change the **Number of days of data**, previous results will be removed
- Ultima Rulare reprezintă o legătură care recuperează ultimul calcul valid. Dacă nu ați lansat Autotune în ziua curentă sau dacă rezultatele anterioare au fost șterse cu o modificare a parametrului de calcul de mai sus, atunci puteți recupera parametrii și rezultatele ultimei rulări reușite.
- Atenționare vă arată, de exemplu, unele informații despre profilul selectat (dacă aveți mai multe valori ICI sau mai multe valori ISF)
  - Notă: Calcularea automată funcționează cu o singură valoare IC și o singură valoare ISF. În prezent nu există niciun algoritm Autotune care să regleze un IC circadian sau un ISF circadian. Dacă profilul tău de intrare are mai multe valori, poți vedea în secțiunea de avertizări valoarea medie luată în considerare pentru a-ți regla profilul.
- Check Input Profile button open the Profile Viewer to allow you a quick verification of your profile (Units, IC, ISF, basal and target)
  - Notă: Autotune va regla doar IC (o valoare unică), ISF (o valoare unică) și bazala (cu variația circadiană). Units and target will remain unchanged in output profile.

- "Run Autotune" will launch Autotune calculation with selected profile and the selected number of days of data
  - Notă: Calculația Autotune poate dura destul de mult. Odată lansat, puteți comuta la altă parte a interfeței (vederea de ansamblu, șamd) și să reveniți mai târziu în modulul Autotune pentru a vedea rezultatele

  ![Porniți rulare Autotune](../images/Autotune/Autotune_2b.png)

- Apoi în timpul rulării veți vedea rezultatele intermediare mai jos

  - Notă: În timpul rulării, setările sunt blocate, astfel încât să nu mai poți modifica profilul de intrare sau numărul de zile. Va trebui să așteptați sfârșitul calcului curent dacă doriți să porniți o altă execuție cu alți parametri.

  ![Autotune în timpul rulării](../images/Autotune/Autotune_3b.png)

- Când calculul Autotune este finalizat, veți vedea rezultatul (profilul reglat) și patru butoane mai jos.

  ![Rezultat Autotune](../images/Autotune/Autotune_4b.png)

- Este important să se compare întotdeauna profilul de intrare (coloana "Profil"), profilul de ieșire (coloana "Reglat") și procentajul variației pentru fiecare valoare (coloana "%").

- Pentru ratele bazale, aveți și numărul de "zile lipsă". Aveți zile lipsă atunci când Autotune nu are suficiente date clasificate ca "Bazală" pentru a regla rata bazală pentru această perioadă (spre exemplu după fiecare masă când ai absorbție de carbohidrați). Acest număr ar trebui să fie cât mai scăzut posibil, în special atunci când bazala este importantă (spre exemplu, în timpul nopții sau la sfârșitul după-amiezii)

- Butonul "Comparați profilele" deschide interfața de comparare a profilelor. Profilul de intrare este în albastru, și profilul de ieșire (denumit "Reglat") este în roșu.

  - Notă: în exemplul de mai jos, profilul de intrare are variații circadiene pentru IC și ISF, dar profilul de ieșire calculat are o singură valoare. Dacă este important pentru dumneavoastră să obțineți un profil de ieșire circadian vedeți [Profilul Circadian ICR sau ISF](#autotune-circadian-ic-or-isf-profile) mai jos.

  ![Autotune compararea profilelor](../images/Autotune/Autotune_5.png)

- Dacă aveți încredere în rezultate (un procentaj scăzut de variație între profilul de intrare și profilul de ieșire), atunci puteți apăsa pe butonul "Activați profil" și apoi dați pe OK pentru a valida.

  - Activate Tuned profile will automatically create a new profile "Tuned" in your profile list (**Manage → Profile**).
  - If you already have a profile named "Tuned" in **Manage → Profile**, then this profile will be updated with calculated Autotune profile before the activation

  ![Autotune activarea profilului](../images/Autotune/Autotune_6.png)

- Dacă credeți că profilul ajustat mai trebuie reglat (spre exemplu, dacă credeți că anumite variații sunt prea importante), atunci puteți apăsa pe butonul "Copiați la profilul local"

  - A new profile with the prefix "Tuned" and the date and time of the run will be created in **Manage → Profile**

  ![Autotune copiere în profilul local](../images/Autotune/Autotune_7.png)

- You can then edit the Tuned profile: open **Manage** > **Profile**, swipe to the card named "Tuned" with the date and time of the run, and tap the **Edit** (pencil) button

  - the values in the profile will be rounded in the user interface to your pump capabilities

  ![Autotune actualizare profil local](../images/Autotune/Autotune_8.png)

- Dacă doriți să înlocuiți profilul de intrare cu rezultatul Autotune, apasăți pe butonul "Actualizați profilul de intrare" și validați notificarea prin apăsarea pe OK

  - Notă: dacă apăsați pe "Activare profil" după "Actualizați profilul de intrare", atunci veți activa profilul actualizat și nu profilul implicit "Ajustat"?

  ![Autotune actualizare profilului de intrare](../images/Autotune/Autotune_9.png)

- Dacă ați actualizat profilul de intrare, atunci butonul "Actualizați profilul de intrare" este înlocuit de butonul "Reveniți la profilul de intrare" (a se vedea captura de ecran de mai jos). You can that way immediately see if your current input profile in **Manage → Profile** already includes the result of last run or not. De asemenea, aveți posibilitatea de a vă recupera profilul de intrare fără rezultatul Autotune cu acest buton

  ![Autotune actualizare profilului de intrare](../images/Autotune/Autotune_10.png)



## Setări Autotune

(autotune-plugin-settings)=

### Setări modul Autotune

  ![Autotune settings in AAPS 4](../images/preferences/settings_autotune.png)

```{admonition} Only DEV
:class: note
The **Auto switch profile** feature is only available in Dev/Engineering mode.
```

- **Auto switch profile** (default Off): see [Run Autotune with an automation rule](#autotune-run-autotune-with-an-automation-rule) below. Dacă schimbați această setare pe Pornit, profilul de intrare va fi actualizat automat de către profilul Ajustat și va fi activat.
  - **Fiți atenți, trebuie să aveți încredere și să verificați în următoarele zile, că după o actualizare și o activare a profilului ajustat fără modificare, se îmbunătățește sistemul de buclă**

- **Categorize UAM as basal** (default Off): This setting is for the users using AndroidAPS without any carbs entered (Full UAM). Va opri (când este oprit) să catalogheze UAM ca bazală.
  - Notă: dacă aveți cel puțin o oră detectată de absorbție a carbohidraților în timpul unei zile, apoi toate datele clasificate ca "UAM" vor fi clasificate ca bazală, indiferent de această setare (pornită sau oprită)
- **Default tune days** (default 5): You can define the default value with this setting. Each time you select a new profile in the Autotune plugin, the **Number of days of data** will be replaced by this default value
- **Use circadian IC/ISF** (default Off): see [Circadian IC or ISF profile](#autotune-circadian-ic-or-isf-profile) below.

(autotune-other-settings)=
### Alte setări

- Autotune folosește și raportul Max autosens și raportul Min autosens pentru a limita variația. You can see and adjust these values in [**Settings** > **Absorption settings** > **Advanced Settings**](../SettingUpAaps/Preferences.md) (**Autosens max** and **Autosens min**).

  ![Autosens max and Autosens min in the advanced absorption settings](../images/preferences/settings_absorption_advanced.png)



## Caracteristici avansate

(autotune-circadian-ic-or-isf-profile)=

### Profil Circadian IC sau ISF

- If you have important variation of IC and/or you ISF in your profile, and you fully trust in your circadian time and variation, then you can enable **Use circadian IC/ISF** (called "Apply average result in circadian IC/ISF" in older versions)

  - Țineți cont că calculul Autotune se va face întotdeauna cu o singură valoare, iar variația circadiană nu va fi reglată de Autotune.

- Vedeți în captura de ecran de mai jos profilul ajustat cu Aplică variația medie, oprită (pe partea stângă) și pornită (pe partea dreaptă)

  ![Autotune ecran implicit](../images/Autotune/Autotune_13.png)



### Ajustați anumite zile ale săptămânii

- If you tap the **eye** icon on the right of the **Number of days of data** field, you will see the day selection. Puteți specifica care zi a săptămânii ar trebui inclusă în calculul Autotune (în captura de ecran de mai jos puteți vedea un exemplu pentru "zile lucrătoare" cu sâmbătă și duminică eliminate din calculul Autotune)
  - If the number of days included in Autotune calculation is lower than the **Number of days of data**, then you will see how many days will be included on the right of the days selector (10 days in the example below)
  - This setting gives good results only if the number of remaining days is not to small (for example if you Tune a specific profile for week end days with only Sunday and Saturday selected, you should set **Number of days of data** to at least 21 or 28 to have 6 or 8 days included in Autotune calculation)

  ![Autotune ecran implicit](../images/Autotune/Autotune_14b.png)

- During Autotune calculation, you can see the progress of the calculations ("Partial result day 1 / 4 tuned" in the example below, with Saturday and Sunday excluded)

  ![Autotune ecran implicit](../images/Autotune/Autotune_15b.png)



(autotune-run-autotune-with-an-automation-rule)=

## Execuția Autotune cu o condiție de automatizare

```{admonition} Only DEV
:class: note
The **Auto switch profile** feature is only available in Dev/Engineering mode.
```

Primul pas este definirea unui declanșator corect pentru o regulă de automatizare cu Autotune:

Notă: pentru mai multe informații despre cum să setați o condiție de automatizare, vedeți [aici](../DailyLifeWithAaps/Automations.md).

- Ar trebui să selectați declanșatorul pentru execuții programate: executați Autotune doar o dată pe zi, Autotune este proiectat să fie executat zilnic (pentru fiecare nouă execuție schimbați ziua și modificarea profilului ar trebui să fie minusculă)

  ![Autotune ecran implicit](../images/Autotune/Autotune_16.png)

- Este mai bine la început să executați Autotune în timpul zilei pentru a putea verifica rezultatele. Dacă doriți să rulați Autotune în timpul nopții, trebuie să selectați în declanșator ora 4 dimineața sau mai târziu pentru a include ziua curentă în următorul calcul Autotune.

  ![Autotune ecran implicit](../images/Autotune/Autotune_17.png)

- Then you can select the **Autotune profile** action (in the **Loop & insulin** group)

  ![Autotune ecran implicit](../images/Autotune/Autotune_18.png)

- You can then adjust the parameters of the action for your run. In a new action, **Select profile to tune** shows the first profile of your local profile list, the **Tune days** field is empty and all days are selected. Choose the profile to tune and enter the number of **Tune days** (1 to 30).

  ![Autotune ecran implicit](../images/Autotune/Autotune_19b.png)

- After a few days, if you fully trust Autotune results and percentage of modification is low, you can modify [Autotune settings](#autotune-plugin-settings) "**Auto switch profile**" to enabled to automatically update and activate profile tuned after calculation.

Notă: dacă doriți să reglați automat profiluri pentru anumite zile ale săptămânii (de exemplu, un profil pentru "Zilele săptămânii" și altul pentru "Zile lucrătoare"), apoi creați o regulă pentru fiecare profil, selectează aceleași zile în declanșator și în acțiunea Autotune, zilele de reglare trebuie să fie suficient de multe pentru a fi sigur că se va face reglarea cu cel puțin 6 sau 8 zile, și nu uitați să selectați timpul după 4 dimineața în declanșator...

- See below an example of rule that runs every working day (Monday to Friday) at 04:00 and tunes the profile "Normal" with 14 **Tune days**, working days only (so only 10 days are included in the Autotune calculation).

  ![Autotune ecran implicit](../images/Autotune/Autotune_20b.png)



## Sfaturi și trucuri

Autotune funcționează cu informații existente în baza de date, deci dacă tocmai ați instalat AAPS pe un telefon nou, va trebui să așteptați câteva zile înainte de a putea lansa Autotune cu suficiente zile pentru a obține rezultate relevante.

Autotune este doar un ajutor, este important să verificați periodic dacă sunteți de acord cu profilul calculat. Dacă aveți îndoieli, schimbați setările de autoreglare (de exemplu numărul de zile) sau copiați rezultatele în profilul local și ajustați profilul înainte de a-l folosi.

Utilizați întotdeauna Autotune câteva zile manual pentru a verifica rezultatele înainte de a le aplica. și doar când aveți încredere deplină în rezultatele Autotune, și atunci când variația devine mică între profilul anterior și profilul calculat apoi începeți să utilizați Automatizarea (niciodată înainte)

- Autotune poate funcționa foarte bine pentru unii utilizatori și pentru alții nu, așa că **Dacă nu aveți încredere în rezultatul Autotunei, nu îl folosiți**

It's also important to analyze Autotune results to understand (or try to understand) why Autotune proposes these modifications

- puteți avea o creștere sau o scădere totală a intensității profilului dumneavoastră (de exemplu o creștere a valorii bazalei totale asociată scăderii valorilor ISF și IC). ar putea urma câteva zile următoare cu corecție autosens peste 100% (este nevoie de mai mult agresivitate) sau sub 100% (sunteți mai sensibil)
- Uneori Autotune propune un echilibru diferit între ratele bazale și IC/FSI (de exemplu bazale mai mici și IC/FSI mai agresive)

Recomandăm să nu se folosească Autotune în următoarele cazuri:

- Nu introduceți toți carbohidrații
  - Dacă nu introduceți corecția carbohidraților pentru hipoglicemie, Autotune va vedea o creștere neașteptată a valorii glicemiei și va crește ratele bazalelor cu 4 ore mai devreme, ar putea fi opusul a ceea ce trebuie pentru a evita o hipoglicemie, mai ales dacă este la miezul nopții. De aceea e important să introduceți toți carbohidrații, mai ales când corectați pentru hipoglicemie.
- Aveți o mulțime de cicluri cu UAM detectate în timpul zilei.
  - Ați introdus toți carbohidrații și ați estimat corect carbohidrații?
  - Toate perioadele UAM (cu excepția cazului în care nu introduceți niciun carbohidrat într-o zi și clasificarea UAM ca bazală este dezactivată), toate perioadele dumneavoastră UAM vor fi clasificate ca bazale, acest lucru poate crește mult bazala dumneavoastră (mai mult decât este necesar)

- Absorbția dumneavoastră de carbohidrați este foarte lentă: dacă cea mai mare parte a absorbției de carbohidrați este calculată cu parametrul min_5m_carbimpact (poți vedea aceste perioade cu un punct portocaliu mic în partea superioară a curbei COB), calcularea COB ar putea fi greșită și ar putea duce la rezultate greșite.
  - Atunci când practicați sport, în general sunteți mai sensibili și glicemia dumneavoastră nu crește mult, așa că, în timpul sau după un exercițiu fizic, se obișnuiește să vedeți unele perioade cu carbohidrați lenți. Dar dacă aveți prea des absorbție lentă neașteptată a carbohidraților, atunci este posibil să aveți nevoie de o ajustare de profil (valoare mai mare de IC) sau un min_5m_carbimpact un pic prea mare.
- Aveți "zile foarte proaste", de exemplu sunteți blocați câteva ore în hiperglicemie cu o cantitate imensă de insulină pentru a putea coborî în interiorul intervalului țintă sau după schimbarea senzorului aveți perioade lungi de valori eronate ale glicemiei. Dacă în ultimele săptămâni aveți doar una sau două "zile rele", puteți dezactiva manual aceste zile în calculul Auotutne pentru a le exclude din calcul, și din nou **verificați cu atenție dacă puteți avea încredere în rezultate**
- Dacă procentajul modificării este prea important
  - Puteți încerca să creșteți numărul de zile pentru a obține rezultate mai omogene
