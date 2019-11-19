# Hodinky

AndroidAPS je navržený, aby ho bylo možné *ovládat* hodinkami Android Wear. Pokud chcete poslat například bolus z hodinek, potřebujete v „Nastavení hodinek“ aktivovat volbu „Ovládání z hodinek“.

Z hodinek lze ovládat následující funkce:

* nastavovat dočasné cíle
* podávat bolusy
* administer eCarbs
* use the bolus calculator (calculation variables can be defined in [settings](../Configuration/Config-Builder#wear) on the phone)
* check the status of loop and pump
* show TDD (Total daily dose = bolus + basal per day)

Aby bylo možné tyto funkce ovládat z hodinek, musíte při [sestavování APK](../Installing-AndroidAPS/Building-APK.md) zvolit možnost „fullRelease“ (nebo „pumpRelease“, která vám umožní vzdálené ovládání pumpy bez smyčky). V aplikaci AndroidAPS musíte na kartě „Konfigurace“ [povolit plugin Wear](../Configuration/Config-Builder#wear).

Lze si vybrat z několika ciferníků (watchfaces), které zobrazují průměrnou hodnotu delta, IOB, aktuálně aktivní bazál a bazální profil + graf hodnot glykémie z CGM.

![Ciferník AndroidAPSv2](../images/AAPSv2_Watchface.png)

Ujistěte se, že nemáte zakázané oznámení AndroidAPS na hodinkách. Potvrzování akcí (např. bolusu, dočasného cíle) se objeví jako notifikace, které je nutné odsunout a potvrdit klepnutím.

Chcete-li se rychleji dostat do nabídky AAPS, dvakrát klepněte na hodnotu glykémie. Dvojitým klepnutím na graf glykémie změníte časový rozsah grafu.

## Řešení problémů s aplikací na hodinkách:

* Na Android Wear 2.0 (hodinky) se ciferník (watchface) neinstaluje automaticky. Nyní je nutné přejít do Google Play na hodinkách (jedná se o jiný Google Play než na telefonu) a najít kategorii aplikací nainstalovaných v telefonu, ze které pak můžete ciferník aktivovat. Také povolte automatické aktualizace. 
* Někdy pomůže znovu synchronizovat aplikace do hodinek, i když to ručně může být poněkud zdlouhavé: Wear OS > Rozšířená nastavení (Ikona ozubeného kola) > Znovu synchronizovat aplikace.
* Povolte ADB ladění ve vývojářských možnostech (na hodinkách), připojte hodinky k počítači přes USB a spusťte Wear aplikaci, až budete mít na počítači otevřené Android Studio.

## Popis ciferníku AndroidAPSv2

![Popis ciferníku AndroidAPSv2](../images/AAPSv2_Watchface_legend.png)

A - čas od posledního spuštění smyčky

B - hodnota glykémie

C - minuty od posledního čtení hodnoty glykémie

D - porovnání změny od posledního čtení (v mmol nebo mg/dl)

E - průměrná změna hodnoty glykémie za posledních 15 minut

F - stav baterie telefonu

G - hodnota bazální dávky (zobrazená v U/h, pokud je zvolena standardní hodnota, nebo v %, pokud je aktivní dočasný bazál)

G - ukazatel BGI (blood glucose interaction), neboli jak moc „by měla“ glykémie růst nebo klesat pouze na základě aktivity inzulínu.

I - sacharidy (zbývající sacharidy I rozložené sacharidy v budoucnosti)

J - zbývající inzulín (z bolusu I bazálu)

## Nastavení

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

If you are using another looping system and want to *view* your looping detail on an Android Wear watch, or want to watch your child's looping, then you can build/download just the NSClient APK. To do this follow the [build APK instructions](../Installing-AndroidAPS/Building-APK.md) selecting the build variant "NSClientRelease". Lze si vybrat z několika ciferníků (watchfaces), které zobrazují průměrnou hodnotu delta, IOB, aktuálně aktivní bazál a bazální profil + graf hodnot glykémie z CGM.

## Pebble

Pebble users can use the [Urchin watchface](https://github.com/mddub/urchin-cgm) to *view* looping data (if uploaded to nightscout), but you will not be able to interact with AndroidAPS through the watch. You can choose fields to display such as IOB and currently active temp basal rate and predictions. If open looping you can use [IFTTT](https://ifttt.com/) to create an applet that says if Notification received from AndroidAPS then send either SMS or pushover notification.