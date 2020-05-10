# AAPS op Wear OS smartwatch

Je kunt de AndroidAPS app installeren op je **Wear OS based** smartwatch. Watch versie van AAPS laat je:

* **Toon de gegevens op uw horloge**: door een[specifieke wijzerplaat ](#aaps-watchfaces) of standaard wijzerplaat te gebruiken d.m.v. watchface [complications](#complications)
* **beheer AAPS met telefoon**: stel een tijdelijk streefdoel in, bolus, etc. 

### Voor je een horloge aanschaft...

* Sommige functies zoals *complications* vereisen Wear OS versie 2.0 of recenter om te functioneren
* Google heeft*Android Wear 1.x* als *Wear OS* omgedoopt vanaf versie 2.x. Indien het betreffende horloge met *Android Wear* aangeduid wordt kan het op de oudere 1.x versie van het systeem kan duiden
* Als in een beschrijving van smartwatch alleen compatibiliteit met *Android* en *iOS* aangegeven wordt, betekent het **niet** dat deze draait op *Wear OS* - het kan net zo goed een ander soort fabrikant specifieke OS zijn **die niet compatibel is met AAPS wear!</ 1></li> 
    
    * Controleer de [lijst van geteste telefoons en horloges](../Getting-Started/Phones#list-of-tested-phones) en [ vraag de community](../Where-To-Go-For-Help/Connect-with-other-users.md) om advies als je twijfelt of het horloge wordt ondersteund</ul> 
    
    ### Wear OS-versie van AAPS bouwen
    
    Om een Wear OS versie van AAPS te maken, heb je de build variant "fullRelease" nodig deze is te selecteren wanneer [de APK](../Installing-AndroidAPS/Building-APK.md) bouwt (de versie "pumpRelease" zal je in staat stellen om de pomp zonder loop te gebruiken op afstand te kunnen bedienen).
    
    Zorg ervoor dat zowel de telefoon als de wear versies van AAPS zijn ondertekend met dezelfde "key"!
    
    De Wear APK moet op dezelfde manier op het horloge geïnstalleerd worden als de AAPS APK op de telefoon. Het inschakelen van *developer mode* is mogelijk noodzakelijk voor het bekijken, uploaden en installeren van de APK op het horloge met: `adb install wear-full-release.apk`
    
    Wanneer u de wear versie van AAPS gebruikt, update deze altijd gelijktijdig met de telefoonversie van de app houd hun versies gesynchroniseerd.
    
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
    
    ## AAPSv2 wijzerplaat - Legend
    
    ![Legenda AndroidAPSv2 watchface](../images/Watchface_Legend.png)
    
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
    
    ## Toegang tot het hoofdmenu van AAPS
    
    Om het AAPS hoofdmenu te openen kunt u gebruik maken van de volgende opties:
    
    * dubbel tik op je BG-waarde
    * selecteer het AAPS icoon in het applicatie menu van het horloge
    * tik op de het AAPS deel van de wijzerplaat (indien geconfigureerd voor menu)
    
    ## Instellingen (in Android Wear horloge)
    
    Om naar de wijzerplaat instellingen te gaan, ga naar het AAPS hoofdmenu swipe omhoog en selecteer "Instellingen".
    
    Een gevulde ster geeft aan ingeschakeld (**Aan**), een lege ster geeft aan dat instelling is uitgeschakeld (**Uit**):
    
    ![Instellingen aan/uit](../images/Watchface_Settings_On_Off.png)
    
    ### AAPS-parameters
    
    * **Trillen bij Bolus** (standaard `Aan`):
    * **Eenheden voor acties ** (standaard `mg/dl`): als **On** eenheden voor acties `mg/dl` is, als **Off** eenheid `mmol/l`. Wordt gebruikt bij het instellen van een tijdelijs streefdoel vanaf het horloge.
    
    ### Watchface instellingen
    
    * **Toon Datum** (standaard `Uit`): let wel: datum is niet beschikbaar op alle watchfaces
    * **Toon IOB** (standaard `Aan`): De IOB waarde weergeven of niet (gedetailleerde instellingen voor de waarde staan in AAPS wear instellingen)
    * **Toon COB** (standaard `On`): Toon wel of geen COB waarde
    * **Toon Delta** (standaard `Aan`): Toon wel of geen BG variatie van de laatste 5 minuten
    * **Toon AvgDelta** (standaard `Aan`): De gemiddelde BG variatie van de afgelopen 15 minuten wel of niet weergeven
    * **Toon Telefoon Batterij** (standaard `Aan`): Telefoon batterij in %. Is rood beneden de 30%.
    * **Rig Batterij tonen** (standaard `Uit`): Rig batterij is een samenvoeging van Telefoon batterij, pompbatterij en sensor accu (over het algemeen de laagste van de 3 waarden)
    * **Toon Basaal hoeveelheid** (standaard `Aan`): Huidige basaalstand weergeven (in E/uur of in % bij TBR)
    * **Toon Loop Status** (standaard `Aan`): laat aantal minuten zien sinds de laatst uitgevoerde loop (pijlen bij de waarde worden rood indien boven de 15').
    * **Toon BG** (standaard `On`): Wel of geen laatste BG waarde weergeven
    * **Toon richting pijl ** (standaard `Aan`): Wel of geen BG trend pijl weergeven
    * **Toon historie** (standaard `On`): toon aantal minuten sinds de laatste uitlezing.
    * **Donker** (standaard `On`): Je kunt overschakelen van zwarte naar witte achtergrond (behalve voor Cockpit en Steampunk wijzerplaaten)
    * **Markeer basaal** (standaard `Uit`): verbeter de zichtbaarheid van basaalstanden en tijdelijke basaalstanden
    * **Overeenkomst verdeler** (standaard `Uit`): Voor AAPS, AAPSv2 en AAPS(groot) wijzerplaten, toon contrast op de achtergrond voor verdeler (**Uit**) of match met de achtergrondkleur (**Aan**)
    * **Grafiek Tijdschaal** (standaard `3 uur`): in het submenu kan je de maximale tijdschaal van de grafiek tussen 1 uur en 5 uur selecteren.
    
    ### Gebruikersinterface instellingen
    
    * **Invoer uiterlijk**: met deze parameter kun je de positie van "+" en "- knoppen selecteren voor wanneer je opdrachten in AAPS (TT, Insuline, khd...) invoert
    
    ![Opties voor invoerontwerp](../images/Watchface_InputDesign.png)
    
    ### Specifieke watchface parameters
    
    #### Steampunk watchface
    
    * **Delta Korrelgrootte** (default `Medium`)
    
    ![Steampunk_meter](../images/Watchface_Steampunk_Gauge.png)
    
    #### Cirkel Watchface
    
    * **Grote Getallen** (standaard `Uit`): Verhoog tekstgrootte om de zichtbaarheid te verbeteren
    * **Geschiedenis Ring** (standaard `Uit`): Bekijk BG geschiedenis met grijze ringen binnen de groene uur ring
    * **Lichte Geschiedenis Ring** (standaard `Aan`): Geschiedenis wordt meer discreet weergeven met een donkergrijs
    * **Animaties ** (standaard `Aan`): Als dit is ingeschakeld, wordt ondersteund door het horloge en niet in de energiebesparing low-res modus dan zal de watchface cirkel worden geanimeerd
    
    ### Opdracht Instellingen
    
    * **Wizard in Menu** (standaard `Aan`): Sta toe dat de wizard interface in het hoofdmenu gebruikt wordt voor het invoeren van koolhydraten en geef een bolus vanaf het horloge
    * **Voorvullen in Menu** (standaard `Uit`): Voorvullen / Vullen vanaf horloge toestaan
    * **Enkel doel** (standaard `Aan`):
        
        * `On`: je stelt een enkele waarde als TT in
        * `Uit`: Laag en hoog doel gelijktijdig als TT ingesteld
    
    * **Wizard Percentage** (standaard `Uit`): Bolus correctie vanuit de wizard toestaan (waarde ingevoerd in percentage voor bevestiging melding)
    
    ## Complications
    
    *Complication* is een term afkomstig van traditionele horloges, waarbij een toevoeging aan de wijzerplaat wordt beschreven als extra klein venster of een subwijzerplaat (met datum, dag van de week, maanfase, enz.). Wear OS 2.0 biedt deze optie om extra invoering mogelijk te maken voor meldingen zoals weer, notificaties, fitnesstellers etc. Deze zijn toe te voegen aan alle wijzerplaten die "Complication" ondersteunen.
    
    De AndroidAPS Wear OS-app ondersteunt complicaties sinds build nummer `2.6`, dit maakt het mogelijk om alle watchfaces die complicaties ondersteunen, AAPS gerelateerde gegevens te laten weergeven (BG met trend, IOB, COB, enz.).
    
    Complicaties kunnen ook dienen als **snelkoppeling** naar AAPS functies. Door te tikken op een complicatie kun je AAPS menu's en dialoogvensters openen (afhankelijk van type complicatie en configuratie).
    
    ![Complications_On_Watchfaces](../images/Watchface_Complications_On_Watchfaces.png)
    
    ### Complicatie types
    
    De AAPS Wear OS-app geeft alleen ruwe gegevens door, in een vooraf gedefinieerde standaard-opmaak. Het is aan het watchface om te bepalen waar en hoe deze complicaties worden weergegeven, denk daarbij aan de lay-out, de rand, kleur en het lettertype. Van de vele beschikbare Wear OS-complicatietypes, gebruikt AAPS:
    
    * `SHORT TEXT` - Bevat twee regels tekst, 7 tekens elk, soms aangeduid als waarde en label. Meestal weergegeven in een cirkel of kleine 'pill' - de één onder de ander, of naast elkaar. It is a very space-limited complication. AAPS tries to remove unnecessary characters to fit-in: by rounding values, removing leading and trailing zeroes from values, etc.
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
    
    ## Performance and battery life tips
    
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
    
    ## Troubleshooting the wear app:
    
    * On Android Wear 2.0 the watch screen does not install by itself anymore. You need to go into the playstore on the watch (not the same as the phone playstore) and find it in the category apps installed on your phone, from there you can activate it. Also enable auto update. 
    * Sometimes it helps to re-sync the apps to the watch as it can be a bit slow to do so itself: Android Wear > Cog icon > Watch name > Resync apps.
    * Enable ADB debugging in Developer Options (on watch), connect the watch via USB and start the Wear app once in Android Studio.
    * If Complications does not update data - check first if AAPS watchfaces work at all.
    
    ## View Nightscout data
    
    If you are using another looping system and want to *view* your looping detail on an Android Wear watch, or want to watch your child's looping, then you can build/download just the NSClient APK. To do this follow the [build APK instructions](../Installing-AndroidAPS/Building-APK.md) selecting the build variant "NSClientRelease". Er zijn verschillende watchfaces om uit te kiezen die de gemiddelde delta, IOB, momenteel actieve tijdelijke basaal en basale profielen + een CGM grafiek kunnen weergeven.
    
    # Pebble
    
    Pebble users can use the [Urchin watchface](https://github.com/mddub/urchin-cgm) to *view* looping data (if uploaded to Nightscout), but you will not be able to interact with AndroidAPS through the watch. You can choose fields to display such as IOB and currently active temp basal rate and predictions. If open looping you can use [IFTTT](https://ifttt.com/) to create an applet that says if Notification received from AndroidAPS then send either SMS or pushover notification.