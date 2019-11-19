# Watchfaces

AndroidAPS está diseñado para ser controlado por relojes Android Wear. If you want to bolus etc from the watch then within "Wear settings" you need to enable "Controls from Watch".

The following functions can be triggered from the watch:

* set a temporary target
* administer a bolus
* administer eCarbs
* use the bolus calculator (calculation variables can be defined in [settings](../Configuration/Config-Builder#wear) on the phone)
* check the status of loop and pump
* show TDD (Total daily dose = bolus + basal per day)

To achieve this you needed to select the build variant "fullRelease" when [building the APK](../Installing-AndroidAPS/Building-APK.md) (or "pumpRelease" will allow you to just remote control the pump without looping). Within AndroidAPS, in the ConfigBuilder you need to [enable Wear](../Configuration/Config-Builder#wear).

There are several watchfaces to choose from that include average delta, IOB, currently active temp basal rate and basal profiles + CGM readings graph.

![AndroidAPSv2 watchface](../images/AAPSv2_Watchface.png)

Ensure notifications from AndroidAPS are not blocked on the watch. Confirmation of action (e.g. bolus, tempt target) comes via notification which you will need to swipe and tick.

To get faster to the AAPS menu, do a double tap on your BG. With a double tap onto the BG curve you can change the time scale..

## Troubleshooting the wear app:

* On Android Wear 2.0 the watch screen does not install by itself anymore. You need to go into the playstore on the watch (not the same as the phone playstore) and find it in the category apps installed on your phone, from there you can activate it. Also enable auto update. 
* Sometimes it helps to re-sync the apps to the watch as it can be a bit slow to do so itself: Android Wear > Cog icon > Watch name > Resync apps.
* Enable ADB debugging in Developer Options (on watch), connect the watch via USB and start the Wear app once in Android Studio.

## Legend AndroidAPSv2 watchface

![Legend AndroidAPSv2 watchface](../images/AAPSv2_Watchface_legend.png)

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

## Settings

There are different settings to modify and to choose from while using AndroidAPS on your smartwatch:

* Vibrate on Bolus (on | off)
* Units for Actions (mg/dl | mmol/l)
* Show Date (on | off)
* Show IOB (on | off)
* Show COB (on | off)
* Show Delta (on | off)
* Show AvgDelta (on | off)
* Show Phone Battery (on | off)
* Show Rig Battery (on | off)
* Show Basal Rate (on | off)
* Show Loop Status (on | off)
* Show BG (on | off)
* Show Direction Arrow (on | off)
* Show Ago (on | off)
* Dark (on | off)
* Highlight Basals (on | off)
* Chart Timeframe (1 | 2 | 3 | 4 | 5 hours)
* Input Design (Default | Quick righty | Quick lefty | Modern Sparse)
* Delta Granularity (Steampunk) (Low | Medium | High)
* Big Numbers (on | off)
* Ring History (on | off)
* Light Ring History (on | off)
* Animations (on | off)
* Wizard in Menu (on | off)
* Prime in Menu (on | off)
* Single Target (on | off)
* Wizard Percentage (on | off)

## View Nightscout data

If you are using another looping system and want to *view* your looping detail on an Android Wear watch, or want to watch your child's looping, then you can build/download just the NSClient APK. To do this follow the [build APK instructions](../Installing-AndroidAPS/Building-APK.md) selecting the build variant "NSClientRelease". There are several watchfaces to choose from that include average delta, IOB, currently active temp basal rate and basal profiles + CGM readings graph.

## Pebble

Pebble users can use the [Urchin watchface](https://github.com/mddub/urchin-cgm) to *view* looping data (if uploaded to nightscout), but you will not be able to interact with AndroidAPS through the watch. You can choose fields to display such as IOB and currently active temp basal rate and predictions. If open looping you can use [IFTTT](https://ifttt.com/) to create an applet that says if Notification received from AndroidAPS then send either SMS or pushover notification.