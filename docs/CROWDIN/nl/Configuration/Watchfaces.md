# AAPS op Wear OS smartwatch

Je kunt de AndroidAPS app installeren op je **Wear OS based** smartwatch. Met de watch versie van AAPS kun je:

* **AAPS gegevens bekijken**: door een [specifieke watchface](#aaps-watchfaces) of standaard watchface te gebruiken d.m.v. watchface [complications](#complications)
* **AAPS aansturen**: stel een tijdelijk streefdoel in, bolus, etc. Je moet uiteraard wel jouw telefoon steeds in de buurt hebben, zowel voor het bekijken van gegevens als voor het aansturen. 

### Voor je een horloge aanschaft...

* Sommige functies zoals *complications* vereisen Wear OS versie 2.0 of recenter om te functioneren
* Google heeft *Android Wear 1.x* omgedoopt naar *Wear OS* vanaf versie 2.x. Indien een smartwatch met *Android Wear* wordt aangeduid, kan het goed zijn dat het de oudere 1.x versie heeft
* Als in een beschrijving van smartwatch alleen compatibiliteit met *Android* en *iOS* aangegeven wordt, betekent het **niet** dat deze draait op *Wear OS* - het kan net zo goed een ander soort fabrikant specifieke OS zijn **die niet compatibel is met AAPS wear!**.
* Controleer de [lijst van geteste telefoons en horloges](../Getting-Started/Phones.md) en [ vraag de community](../Where-To-Go-For-Help/Connect-with-other-users.md) om advies als je twijfelt of het horloge wordt ondersteund

### Wear OS-versie van AAPS bouwen

Om een Wear OS versie van AAPS te maken, heb je de build variant "fullRelease" nodig deze is te selecteren wanneer [de APK](../Installing-AndroidAPS/Building-APK.md) bouwt (met de versie "pumpRelease" kun je de pomp wel op afstand bedienen, maar je hebt geen "closed loop").

Zorg ervoor dat zowel de telefoon als de wear versies van AAPS zijn ondertekend met dezelfde "key"!

Om de APK te installeren op Android Wear smartwatch, volg je de volgende stappen:

1. Schakel de ontwikkelaarsmodus in op het horloge. Druk op de knop op het horloge en klik op `instellingen` dan `systeem` dan `over` en klik herhaaldelijk op het `build-nummer`, minstens 7 keer totdat een melding verschijnt dat je een ontwikkelaar bent.
2. ADB inschakelen op horloge. Druk op de knop op het horloge en klik op `instellingen` dan `ontwikkelaar opties` dan `adb debugging` en `debug over wifi`. Noteer het IP-adres dat u hiernaast staat, dit zal in de vorm zijn van een IP-adres gevolgd door :5555.
3. Op PC, noteer de bestandslocatie van `wear-full-release. pk` (zal in dezelfde map zitten als `app-full-release.apk` die je op je telefoon hebt geïnstalleerd).
4. Op PC, open de opdrachtprompt (typ `commando` in het zoekvak). 
5. In opdrachtprompt: `cd c:\Program Files (x86)\Android\android-sdk\platform-tools`.
6. In opdrachtprompt: `adb connect [geef het IP-adres op van stap 2, inclusief de: 5555]`.
7. In opdrachtprompt: `adb install -r [geef het pad op van stap 3]\wear-full-release.apk`.
8. Dit zal AAPS op het horloge installeren en dan zal AAPS watchfaces beschikbaar zijn om te selecteren.

Wanneer je de wear versie van AAPS gebruikt, update deze altijd gelijktijdig met de telefoonversie van de app - houd hun versies gesynchroniseerd. Om dit te doen moet je de bovenstaande stappen opnieuw volgen, maar je hoeft de ontwikkelaarsmodus niet opnieuw aan te zetten.

### Instellen op de telefoon

Schakel in de AndroidAPS Configurator [de Wear plugin in](../Configuration/Config-Builder#wear).

## AAPS aansturen vanaf het horloge

AndroidAPS is ontworpen om *te worden bediend* vanaf Android Wear horloges. Als je wilt bolussen etc. vanaf je horloge, dan moet je bij "Wear instellingen" de optie "Bedieningen via horloge" geactiveerd hebben.

De volgende functies kunnen vanaf het horloge worden geactiveerd:

* een tijdelijk BG doel (TT) instellen
* de bolus calculator gebruiken (in [instellingen](../Configuration/Config-Builder#wear) op de telefoon is geconfigureerd welke variabelen in de berekening worden meegenomen)
* invoeren van vertraagde koolhydraten (eCarbs)
* dien een bolus (insuline + koolhydraten) toe
* watch instellingen
* status 
    * bekijk pomp status
    * bekijk loop status
    * profiel controleren en wijzigen, CPP (Circadiaans percentage profiel = tijdverschuiving + percentage)
    * weergeven van de TDD (Totale Dagelijkse Dosis = bolus + basale insuline per dag)

## AAPS wijzerplaaten

Er zijn verschillende watchfaces om uit te kiezen die de gemiddelde delta, IOB, momenteel actieve tijdelijke basaal en basale profielen + een CGM grafiek kunnen weergeven.

Zorg er voor dat meldingen van AndroidAPS niet geblokkeerd zijn op het horloge. Een actie (bijv. bolus, tijdelijk BG doel) moet door middel van een notificatie worden bevestigd. Pas na swipen en herbevestiging wordt deze uitgevoerd.

Voer een double-tap uit op je BG om sneller naar het AAPS-menu te gaan. Voer een double-tap uit op de BG grafiek om de tijdschaal ervan te wijzigen.

## Beschikbare watchfaces

![Beschikbare wijzerplaten](../images/Watchface_Types.png)

### New watchface as of AndroidAPS 2.8

![Watchface Digital Style](../images/Watchface_DigitalStyle.png)

* Color, lines and circle are configurable in setting menu on cog-sign of watchface chooser menu.

## AAPSv2 wijzerplaat - Legend

![Legend AndroidAPSv2 watchface](../images/Watchface_Legend.png)

A - time since last loop run

B - CGM reading

C - minutes since last CGM reading

D - change compared to last CGM reading (in mmol or mg/dl)

E - average change CGM reading last 15 minutes

F - phone battery

G - basal rate (shown in U/h during standard rate and in % during TBR)

H - BGI (blood glucose interaction) -> the degree to which BG “should” be rising or falling based on insulin activity alone.

I - carbs (carbs on board | e-carbs in the future)

J - insulin on board (from bolus | from basal)

## Toegang tot het hoofdmenu van AAPS

To access main menu of AAPS you can use on of following options:

* double tap on your BG value
* select AAPS icon in watch applications menu
* tap on AAPS complication (if configured for menu)

## Instellingen (in Android Wear horloge)

To access to the watchface settings, enter AAPS main menu, slide up and select "Settings".

Filled star is for enabled state (**On**), and hollow star icon indicates that setting is disabled (**Off**):

![Settings on/off](../images/Watchface_Settings_On_Off.png)

### AAPS companion parameters

* **Vibrate on Bolus** (default `On`):
* **Units for Actions** (default `mg/dl`): if **On** units for actions is `mg/dl`, if **Off** unit is `mmol/l`. Used when setting a TT from watch.

### Watchface settings

* **Show Date** (default `Off`): note, date is not available on all watchfaces
* **Show IOB** (default `On`): Display or not IOB value (setting for detailed value is in AAPS wear parameters)
* **Show COB** (default `On`): Display or not COB value
* **Show Delta** (default `On`): Display or not the BG variation of the last 5 minutes
* **Show AvgDelta** (default `On`): Display or not the average BG variation of the last 15 minutes
* **Show Phone Battery** (default `On`): Phone battery in %. Red if below 30% .
* **Show Rig Battery** (default `Off`): Rig battery is a synthesis of Phone battery, pump battery and sensor battery (generally the lowest of the 3 values)
* **Show Basal Rate** (default `On`): Display or not current basal rate (in U/h or in % if TBR)
* **Show Loop Status** (default `On`): show how many minutes since last loop run (arrows around value turn red if above 15').
* **Show BG** (default `On`): Display or not last BG value
* **Show Direction Arrow** (default `On`): Display or not BG trend arrow
* **Show Ago** (default `On`): show how many minutes since last reading.
* **Dark** (default `On`): You can switch from black background to white background (except for Cockpit and Steampunk watch face)
* **Highlight Basals** (default `Off`): Improve the visibility of basal rate and temp basals
* **Matching divider** (default `Off`): For AAPS, AAPSv2 and AAPS(Large) watchfaces, show contrast background for divider (**Off**) or match divider with the background color (**On**)
* **Chart Timeframe** (default `3 hours`): you can select in the sub menu the max time frame of your chart between 1 hour and 5 hours.

### User Interface setting

* **Input Design**: with this parameter, you can select the position of "+" and "-" buttons when you enter commands for AAPS (TT, Insulin, Carbs...)

![Input design options](../images/Watchface_InputDesign.png)

### Specific watchface parameters

#### Steampunk watchface

* **Delta Granularity** (default `Medium`)

![Steampunk_gauge](../images/Watchface_Steampunk_Gauge.png)

#### Cirkel Watchface

* **Big Numbers** (default `Off`): Increase text size to improve visibility
* **Ring History** (default `Off`): View graphically BG history with gray rings inside the hour's green ring
* **Light Ring History** (default `On`): Ring history more discreet with a darker gray
* **Animations** (default `On`): When enabled, on supported by watch and not in power saving low-res mode, watchface circle will be animated

### Commands settings

* **Wizard in Menu** (default `On`): Allow wizard interface in main menu to input Carbs and set Bolus from watch
* **Prime in Menu** (default `Off`): Allow Prime / Fill action from watch
* **Single Target** (default `On`):
    
    * `On`: you set a single value for TT
    * `Off`: you set Low target and high target for TT

* **Wizard Percentage** (default `Off`): Allow bolus correction from wizard (value entered in percentage before confirmation notification)

## Complications

*Complication* is a term from traditional watchmaking, where it describes addition to the main watchface - as another small window or sub-dial (with date, day of the week, moon phase, etc.). Wear OS 2.0 brings that metaphor to allow custom data providers, like weather, notifications, fitness counters and more - to be added to any watchfaces that support complications.

AndroidAPS Wear OS app supports complications since build `2.6`, and allow any third party watchface that supports complications to be configured to display AAPS related data (BG with the trend, IOB, COB, etc.).

Complications also serve as **shortcut** to AAPS functions. By tapping them you can open AAPS related menus and dialogs (depending on complication type and configuration).

![Complications_On_Watchfaces](../images/Watchface_Complications_On_Watchfaces.png)

### Complication Types

AAPS Wear OS app provides only raw data, according to predefined formats. It is up to third-party watchface to decide where and how to render complications, including its layout, border, color, and font. From many Wear OS complication types available, AAPS uses:

* `SHORT TEXT` - Contains two lines of text, 7 characters each, sometimes referred to as value and label. Usually rendered inside a circle or small pill - one below another, or side by side. It is a very space-limited complication. AAPS tries to remove unnecessary characters to fit-in: by rounding values, removing leading and trailing zeroes from values, etc.
* `LONG TEXT` - Contains two lines of text, about 20 characters each. Usually rendered inside a rectangle or long pill - one below another. It is used for more details and textual status.
* `RANGED VALUE` - Used for values from predefined range, like a percentage. It contains icon, label and is usually rendered as circle progress dial.
* `LARGE IMAGE` - Custom background image that can be used (when supported by watchface) as background.

### Complication Setup

To add complication to watchface, configure it by long press and clicking the gear icon below. Depending on how specific watchface configures them - either click on placeholders or enter the watchface setup menu for complications. AAPS complications are grouped under the AAPS menu entry.

When configuring complications on watchface, Wear OS will present and filter the list of complications that can be fit into selected complication place on watchface. If specific complications cannot be found on the list, it is probably due to its type that cannot be used for the given place.

### Complications provided by AAPS

AndroidAPS provides following complications:

![AAPS_Complications_List](../images/Watchface_Complications_List.png)

* **BR, CoB & IoB** (`SHORT TEXT`, opens *Menu*): Displays *Basal Rate* on the first line and *Carbs on Board* and *Insulin on Board* on the second line.
* **Blood Glucose** (`SHORT TEXT`, opens *Menu*): Displays *Blood Glucose* value and *trend* arrow on the first line and *measurement age* and *BG delta* on the second line.
* **CoB & IoB** (`SHORT TEXT`, opens *Menu*): Displays *Carbs on Board* on the first line and *Insulin on Board* on the second line.
* **CoB Detailed** (`SHORT TEXT`, opens *Wizard*): Displays current active *Carbs on Board* on the first line and planned (future, eCarbs) Carbs on the second line.
* **CoB Icon** (`SHORT TEXT`, opens *Wizard*): Displays *Carbs on Board* value with a static icon.
* **Full Status** (`LONG TEXT`, opens *Menu*): Shows most of the data at once: *Blood Glucose* value and *trend* arrow, *BG delta* and *measurement age* on the first line. On the second line *Carbs on Board*, *Insulin on Board* and *Basal Rate*.
* **Full Status (flipped)** (`LONG TEXT`, opens *Menu*): Same data as for standard *Full Status*, but lines are flipped. Can be used in watchfaces which ignores one of two lines in `LONG TEXT`
* **IoB Detailed** (`SHORT TEXT`, opens *Bolus*): Displays total *Insulin on Board* on the first line and split of *IoB* for *Bolus* and *Basal* part on the second line.
* **IoB Icon** (`SHORT TEXT`, opens *Bolus*): Displays *Insulin on Board* value with a static icon.
* **Uploader/Phone Battery** (`RANGED VALUE`, opens *Status*): Displays battery percentage of AAPS phone (uploader), as reported by AAPS. Displayed as percentage gauge with a battery icon that reflects reported value. It may be not updated in real-time, but when other important AAPS data changes (usually: every ~5 minutes with new *Blood Glucose* measurement).

Additionally, there are three complications of `LARGE IMAGE` kind: **Dark Wallpaper**, **Gray Wallpaper** and **Light Wallpaper**, displaying static AAPS wallpaper.

### Complication related settings

* **Complication Tap Action** (default `Default`): Decides which dialog is opened when user taps complication: 
    * *Default*: action specific to complication type *(see list above)*
    * *Menu*: AAPS main menu
    * *Wizard*: bolus wizard - bolus calculator
    * *Bolus*: direct bolus value entry
    * *eCarb*: eCarb configuration dialog
    * *Status*: status sub-menu
    * *None*: Disables tap action on AAPS complications
* **Unicode in Complications** (default `On`): When `On`, the complication will use Unicode characters for symbols like `Δ` Delta, `⁞` vertical dot separator or `⎍` Basal Rate symbol. Rendering of them depends on the font, and that can be very watchface-specific. This option allows switching Unicode symbols `Off` when needed - if the font used by custom watchface does not support those symbols - to avoid graphical glitches.

## Prestaties en levensduur van de batterij

Wear OS watches are very power-constrained devices. The size of the watch case limits the capacity of the included battery. Even with recent advancements both on hardware and software side, Wear OS watches still require daily charging.

If an experienced battery span is shorter than a day (from dusk to dawn), here are some tips to troubleshoot the issues.

Main battery-demanding areas are:

* Active display with a backlight on (for LED) or in full intensity mode (for OLED)
* Rendering on screen
* Radio communication over Bluetooth

Since we cannot compromise on communication (we need up-to-date data) and want to have the most recent data rendered, most of the optimizations can be done in *display time* area:

* Stock watchfaces are usually better optimized than custom one, downloaded from the store.
* It is better to use watchfaces that limit the amount of rendered data in inactive / dimmed mode.
* Be aware when mixing other Complications, like third party weather widgets, or other - utilizing data from external sources.
* Start with simpler watchfaces. Add one complication at the time and observe how they affect battery life.
* Try to use **Dark** theme for AAPS watchfaces, and [**Matching divider**](#watchface-settings). On OLED devices it will limit the amount of pixels lit and limit burnout.
* Check what performs better on your watch: AAPS stock watchfaces or other watchfaces with AAPS Complications.
* Observe over a few days, with different activity profiles. Most watches activate the display on glancing, movement and other usage-related triggers.
* Check your global system settings that affect performance: notifications, backlight/active display timeout, when GPS is activated.
* Check [list of tested phones and watches](../Getting-Started/Phones#list-of-tested-phones) and [ask community](../Where-To-Go-For-Help/Connect-with-other-users.md) for other users experiences and reported battery lifetime.
* **We cannot guarantee that data displayed on watchface or complication is up-to-date**. In the end, it is up to Wear OS to decide when to update a watchface or a complication. Even when the AAPS app requests update, the System may decide to postpone or ignore updates to conserve battery. When in doubt and low on battery on watch - always double-check with main AAPS app on phone.

## Probleemoplossing van de wear app:

* On Android Wear 2.0 the watch screen does not install by itself anymore. You need to go into the playstore on the watch (not the same as the phone playstore) and find it in the category apps installed on your phone, from there you can activate it. Also enable auto update. 
* Sometimes it helps to re-sync the apps to the watch as it can be a bit slow to do so itself: Android Wear > Cog icon > Watch name > Resync apps.
* Enable ADB debugging in Developer Options (on watch), connect the watch via USB and start the Wear app once in Android Studio.
* If Complications does not update data - check first if AAPS watchfaces work at all.

### Sony Smartwatch 3

* The Sony Smartwach 3 is one of the most popular watches to be used with AAPS. 
* Unfortunately Google dropped support for wear OS 1.5 devices in fall 2020. This leads to problems when using Sony SW3 with AndroidAPS and above.
* A possible workaround can be found on this [troubleshooting page](../Usage/SonySW3.rst).

## Bekijken van gegevens in Nightscout

If you are using another looping system and want to *view* your looping detail on an Android Wear watch, or want to watch your child's looping, then you can build/download just the NSClient APK. To do this follow the [build APK instructions](../Installing-AndroidAPS/Building-APK.md) selecting the build variant "NSClientRelease". Er zijn verschillende watchfaces om uit te kiezen die de gemiddelde delta, IOB, momenteel actieve tijdelijke basaal en basale profielen + een CGM grafiek kunnen weergeven.

# Pebble

Pebble users can use the [Urchin watchface](https://github.com/mddub/urchin-cgm) to *view* looping data (if uploaded to Nightscout), but you will not be able to interact with AndroidAPS through the watch. You can choose fields to display such as IOB and currently active temp basal rate and predictions. If open looping you can use [IFTTT](https://ifttt.com/) to create an applet that says if Notification received from AndroidAPS then send either SMS or pushover notification.