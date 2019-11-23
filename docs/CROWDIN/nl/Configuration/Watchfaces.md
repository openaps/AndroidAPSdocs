# Smartwatch instellingen

AndroidAPS is ontworpen om *te worden bediend* vanaf Android Wear horloges. Om te kunnen bolussen enz vanaf je horloge moet je bij "Wear instellingen" de optie "Bedieningen via horloge" geactiveerd hebben.

De volgende functies kunnen vanaf het horloge worden geactiveerd:

* een tijdelijk BG doel (TT) instellen
* een bolus toedienen
* administer eCarbs
* use the bolus calculator (calculation variables can be defined in [settings](../Configuration/Config-Builder#wear) on the phone)
* check the status of loop and pump
* show TDD (Total daily dose = bolus + basal per day)

Om dit te bereiken moet je de build variant "fullRelease" selecteren wanneer je [de APK bouwt](../Installing-AndroidAPS/Building-APK.md) (terwijl "pumpRelease" je in staat stelt om ook zonder loop de pomp te bedienen). Hierna kunt u binnen AndroidAPS vervolgens binnen de Configurator [Wear inschakelen](../Configuration/Config-Builder#wear).

Er zijn verschillende watchfaces om uit te kiezen die de gemiddelde delta, IOB, momenteel actieve tijdelijke basaal en basale profielen + een CGM grafiek kunnen weergeven.

![AndroidAPSv2-watchface](../images/AAPSv2_Watchface.png)

Zorg er voor dat meldingen van AndroidAPS niet geblokkeerd zijn op het horloge. Een actie (bijv. bolus, tijdelijk BG doel) moet door middel van een notificatie worden bevestigd. Pas na swipen en herbevestiging wordt deze uitgevoerd.

Voer een double-tap uit op je BG om sneller naar het AAPS-menu te gaan. Voer een double-tap uit op de BG grafiek om de tijdschaal ervan te wijzigen.

## Probleemoplossing van de wear app:

* Onder Android Wear 2.0 zal AndroidAPS niet meer vanzelf op je horloge worden geïnstalleerd. Om AndroidAPS op je wear horloge te installeren moet je nu naar de playstore op het horloge gaan (let op dit is niet hetzelfde als de playstore op de telefoon). Onder de categorie 'apps geinstalleerd op je telefoon' vind je een item AndroidAPS waarmee de installatie op je telefoon kan worden uitgevoerd. Schakel ook 'Automatisch bijwerken' in. 
* Soms helpt het om de apps opnieuw te synchroniseren naar het horloge, omdat het een beetje langzaam kan zijn om dit zelf te doen: Android Wear > Tandwiel icoon > Horlogenaam > Synchroniseren apps.
* Schakel ADB-foutopsporing in onder Ontwikkelaars Opties (op het horloge), verbind het horloge via USB en start de Wear app eenmaal in Android Studio.

## Legenda AndroidAPSv2 watchface

![Legenda AndroidAPSv2 watchface](../images/AAPSv2_Watchface_legend.png)

A - tijd sinds laatste uitvoering loop

B - CGM-uitlezing

C - minuten sinds laatste CGM-uitlezing

D - wijziging in vergelijking met de laatste CGM-uitlezing (in mmol of mg/dl)

Gemiddelde wijziging in de CGM-uitlezing in de laatste 15 minuten

F - telefoon batterij

G - basaal (getoond in E/uur tijdens standaard patroon en in % tijdens TBR)

H - BGI (bloed glucose interactie) -> de mate waarin BG zou moeten stijgen of dalen uitgaande van enkel de insuline activiteit.

I - koolhydraten (koolhydraten aan boord | e-carbs in de toekomst)

J - insuline aan boord (van bolus | van basaal)

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

If you are using another looping system and want to *view* your looping detail on an Android Wear watch, or want to watch your child's looping, then you can build/download just the NSClient APK. To do this follow the [build APK instructions](../Installing-AndroidAPS/Building-APK.md) selecting the build variant "NSClientRelease". Er zijn verschillende watchfaces om uit te kiezen die de gemiddelde delta, IOB, momenteel actieve tijdelijke basaal en basale profielen + een CGM grafiek kunnen weergeven.

## Pebble

Pebble users can use the [Urchin watchface](https://github.com/mddub/urchin-cgm) to *view* looping data (if uploaded to nightscout), but you will not be able to interact with AndroidAPS through the watch. You can choose fields to display such as IOB and currently active temp basal rate and predictions. If open looping you can use [IFTTT](https://ifttt.com/) to create an applet that says if Notification received from AndroidAPS then send either SMS or pushover notification.