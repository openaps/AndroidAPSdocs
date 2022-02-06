# Accu Chek Combo Pomp

**Deze software is onderdeel van een doe-het-zelf oplossing en is niet een product, maar vraagt JOU te lezen, leren en te begrijpen hoe het systeem werkt en hoe je het kunt gebruiken. Het neemt niet je gehele diabetes management van je over, maar stelt je wel in staat om je diabetes beter onder controle te krijgen en je kwaliteit van leven te verhogen, als je bereid bent de benodigde tijd erin te investeren. Haast je niet, maar geef jezelf de tijd om te leren. Jij alleen bent verantwoordelijk voor wat je ermee doet.**

## Hardware vereisten

- Een Roche Accu-Chek Combo pomp (elke firmware is geschikt).
- Een Smartpix of Realtyme apparaatje met bijbehorende 360 Configuratie software om de pomp te configureren. (Op verzoek stuurt Roche de Smartpix met software gratis op aan haar klanten.)
- A compatible phone: An Android phone with a phone running LineageOS 14.1 (formerly CyanogenMod) or at least Android 8.1 (Oreo). As of AndroidAPS 3.0 Android 9 is mandatory. See [release notes](https://androidaps.readthedocs.io/en/latest/Installing-AndroidAPS/Releasenotes.html#android-version-and-aaps-version) for details.
- With LineageOS 14.1 it has to be a recent version from at least June 2017 since the change needed to pair the Combo pump was only introduced at that time. 
- Een lijst met telefoons vind je in dit document: [AAPS Telefoons](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit).
- NB: deze lijst is niet compleet en bevat persoonlijke ervaringen. Je wordt gevraagd om jouw eigen ervaring hier ook aan toe te voegen en zodoende anderen te helpen (deze projecten draaien allemaal om #payitforward mentaliteit).
- Hoewel Android 8.1 het mogelijk maakt om met de Combo te communiceren, kunnen er nog steeds problemen optreden met AAPS op Android 8.1.
- Voor gevorderde gebruikers is het mogelijk om de koppeling op een 'geroote' telefoon uit te voeren en deze over te brengen naar een andere geroote telefoon om te gebruiken met ruffy/AAPS, die ook geroot moet zijn. Hiermee wordt het mogelijk om het geheel over te zetten naar telefoons met Android <8.1, maar dit is niet uitgebreid getest: https://github.com/gregorybel/combo-pairing/blob/master/README.md

## Beperkingen

- Extended bolus en multiwave bolus worden niet ondersteund (Zie [Extended Carbs](../Usage/Extended-Carbs.rst) voor een alternatief).
- Slechts één basaal profiel wordt ondersteund.
- Als je in de pomp meer dan één basaalprofiel instelt of wanneer je extended bolus of multiwave bolus geeft vanaf de pomp dan zal dit ingrijpen op de TBR en zal AAPS de loop dwingen tot een beperkte gebruiksmodus voor de duur van 6 uur, omdat de loop onder deze omstandigheden anders niet veilig kan blijven werken.
- Het is momenteel niet mogelijk om de tijd en datum automatisch in te stellen op de pomp, waardoor [zomer- en wintertijd](../Usage/Timezone-traveling#accu-chek-combo) handmatig moeten worden ingesteld. Je kunt op de telefoon het automatisch bijwerken van de zomer- en winter tijd uitzetten in de avond en in de ochtend weer aanzetten, tegelijk met het handmatig wijzigen van de tijd op de pomp. Zo voorkom je alarmen in de nacht.
- Op dit moment worden alleen basaal standen tussen de 0,05 en 10 E/uur ondersteund. Dit geldt ook voor profielwissels, bijvoorbeeld bij een verhoging tot 200% mag de hoogste basaalstand niet boven de 5 E/uur liggen omdat het nog wordt verdubbeld. Dit geldt ook voor de ondergrens: bij een verlaging tot 50% moet de laagste basaalstand minstens 0,10 E/uur zijn.
- Als de loop een actieve TBR (tijdelijke basaalstand) eigenlijk zou willen cancellen, dan zal de Combo een TBR instellen van 90% of 110% gedurende 15 minuten. Dit is omdat het annuleren van een TBR een trilalarm geeft op de pomp. Op deze manier worden veelvuldige trilalarmen vermeden.
- Zo nu en dan (ruwweg elke paar dagen) gebeurt het dat AAPS het TBR CANCELLED alarm niet automatisch kan onderdrukken. Dan moet jij zelf de Vernieuw-knop in AAPS gebruiken om de waarschuwing in AAPS te krijgen, of je moet het alarm wegdrukken via de knoppen op je pomp.
- De stabiliteit van de Bluetooth verbinding verschilt per telefoon, waardoor "pomp niet bereikbaar" foutmeldingen kunnen ontstaan indien er geen verbinding meer gemaakt kan worden met de pomp. 
- Als deze foutmelding verschijnt, zorg ervoor dat Bluetooth is ingeschakeld, druk op de knop Vernieuwen in het tabblad Combo om te zien of dit is veroorzaakt door een tijdelijk probleem, en als er nog geen verbinding kan worden gemaakt herstart je de telefoon. Meestal is het probleem dan opgelost. 
- Er is een ander probleem wanneer een herstart niet helpt, maar een knop op de pomp moet worden ingedrukt (hierdoor wordt de Bluetooth van de pomp gereset), voordat de pomp opnieuw verbindingen kan maken met de telefoon. 
- Er is heel weinig dat kan worden gedaan om beide problemen op dit moment te verhelpen. Dus als je deze fouten vaak ziet, is je enige optie op dit moment om een andere telefoon te zoeken die goed werkt met AndroidAPS en de Combo (zie hierboven).
- Het toedienen van een bolus vanaf de pomp zal niet altijd optijd gedetecteerd worden (word gecontroleerd als AAPS met de pomp verbindt) dit kan in het ergste geval tot wel 20 minuten duren. 
- Voordat AAPS een commando voor een bolus of hoge TBR geeft, zal hij altijd de bolusgeschiedenis in de pomp controleren. Wanneer hij dan de handmatige bolus opmerkt, zal AAPS geen Bolus/TBR commando geven omdat deze was berekend met verkeerde aannames. (-> Niet bolussen vanaf de pomp! Zie hoofdstuk [Gebruik](#usage))
- Het instellen van een TBR op de pomp moet worden vermeden, aangezien AAPS de controle zou moeten houden over TBRs. Wanneer je dit wel zou doen, dan kan het tot 20 minuten duren voordat AAPS contact maakt met de pomp en de nieuwe TBR detecteert. De TBR zal alleen worden geregistreerd vanaf het moment dat hij wordt gedetecteerd, dus in het ergste geval zou er al twintig minuten lang een TBR zijn afgegeven die niet in de IOB wordt meegerekend. 

## Instellen

- Stel de pomp in met de 360 configuratie software. 
- Als je de software niet hebt, neem dan contact op met de Accu-Chek klantenservice. Ze sturen meestal een CD met de "360° Pump ConfiguratieSoftware" en een SmartPix USB-infrarood verbindingsapparaat (het Realtyme apparaat werkt ook als je dat hebt).
- **Vereiste instellingen** (groen gemarkeerd op het screenshot):
    
    - Zorg dat de menu configuratie op "Standaard" staat, dit zal alleen de ondersteunde menu's/acties op de pomp weergeven en de niet-ondersteunde verbergen (zoals vertraagde/multiwave bolus, meerdere basaalstanden). Wanneer je de niet-ondersteunde opties toch gebruikt, dan zullen bepaalde loop functies worden beperkt omdat het niet mogelijk is om veilig te loopen met deze opties.
    - Controleer of de *Quick Info-Tekst* is ingesteld op "QUICK INFO" (zonder de aanhalingstekens, te vinden onder *Insuline Pomp Opties*).
    - TBR instellen *Maximale aanpassing * tot 500%
    - Uitschakelen *Einde van de tijdelijke Basaal instelling*
    - TBR instellen *tijdsverlenging* tot 15 min
    - Bluetooth inschakelen

- **Aanbevolen instellingen** (blauw gemarkeerd op het screenshot)
    
    - Laag reservoir alarm naar wens instellen
    - Configureer een max. bolus geschikt voor jouw therapie om te beschermen tegen bugs in de software
    - Vergelijkbaar, stel de maximale TBR-duur in als beveiliging. Kies voor tenminste 3 uur, omdat de optie om de pomp te ontkoppelen gedurende 3 uur, een 0% gedurende 3 uur instelt.
    - Toetsblokkering van de pomp inschakelen om ongewenst bolusen vanaf de pomp te voorkomen, vooral wanneer de pomp eerder werd gebruikt en snel bolussen een gewoonte was.
    - Stel de scherm time-out en menu time-out in tot een minimum van 5,5 en 5 respectievelijk. Dit laat AAPS sneller herstellen van foutsituaties en vermindert de hoeveelheid trillingalarmen die je kunt hebben tijdens zulke fouten

![Schermafbeelding van instellingen voor het gebruikersmenu](../images/combo/combo-menu-settings.png)

![Schermafbeelding van TBR instellingen](../images/combo/combo-tbr-settings.png)

![Schermafbeelding van bolusinstellingen](../images/combo/combo-bolus-settings.png)

![Schermafbeelding van instellingen voor insuline reservoir](../images/combo/combo-insulin-settings.png)

- Install AndroidAPS as described in the [AndroidAPS wiki](https://androidaps.readthedocs.io/)
- Make sure to read the wiki to understand how to setup AndroidAPS.
- Select the MDI plugin in AndroidAPS, not the Combo plugin at this point to avoid the Combo plugin from interfering with ruffy during the pairing process.
- Clone ruffy via git from [MilosKozak/ruffy](https://github.com/MilosKozak/ruffy). At the moment, the primary branch is the `combo` branch, in case of problems you might also try the 'pairing' branch (see below).
- Build and install ruffy and use it to pair the pump. If it doesn't work after multiple attempts, switch to the `pairing` branch, pair the pump and then switch back the original branch. If the pump is already paired and can be controlled via ruffy, installing the `combo` branch is sufficient. Note that the pairing processing is somewhat fragile (but only has to be done once) and may need a few attempts; quickly acknowledge prompts and when starting over, remove the pump device from the Bluetooth settings beforehand. Another option to try is to go to the Bluetooth menu after initiating the pairing process (this keeps the phone's Bluetooth discoverable as long as the menu is displayed) and switch back to ruffy after confirming the pairing on the pump, when the pump displays the authorization code. If you're unsuccessful in pairing the pump (say after 10 attempts), try waiting up to 10s before confirming the pairing on the pump (when the name of the phone is displayed on the pump). If you have configured the menu timeout to be 5s above, you need to increase it again. Some users reported they needed to do this. Lastly, consider moving from one room to another in case of local radio interference. At least one user immediately overcame pairing problems by simply changing rooms.
- When AAPS is using ruffy, the ruffy app can't be used. The easiest way is to just reboot the phone after the pairing process and let AAPS start ruffy in the background.
- If the pump is completely new, you need to do one bolus on the pump, so the pump creates a first history entry.
- Before enabling the Combo plugin in AAPS make sure your profile is set up correctly and activated(!) and your basal profile is up to date as AAPS will sync the basal profile to the pump. Then activate the Combo plugin. Press the *Refresh* button on the Combo tab to initialize the pump.
- To verify your setup, with the pump **disconnected**, use AAPS to set a TBR of 500% for 15 min and issue a bolus. The pump should now have a TBR running and the bolus in the history. AAPS should also show the active TBR and delivered bolus.

## Why does pairing with the pump does not work with the app "ruffy"?

There are serveral possible reasons. Probeer de volgende stappen:

1. Plaats een **verse of volle batterij** in de pomp. Kijk in de batterij sectie voor details. Zorg ervoor dat de pomp heel dicht bij de smartphone is.

![Combo moet naast de telefoon zijn](../images/Combo_next_to_Phone.png)

2. Turn off or remove any other bluetooth devices so they will not be able to establish a connection to the phone while pairing is in progress. Any parallel bluetooth communication or prompt to establish connections might disturb the pairing process.

3. Delete already connected devices in the Bluetooth menu of the pump: **BLUETOOTH SETTINGS / CONNECTION / REMOVE** until **NO DEVICE** is shown.

4. Delete a pump already connected to the phone via Bluetooth: Under Settings / Bluetooth, remove the paired device "**SpiritCombo**"
5. Zorg ervoor dat AAPS niet op de achtergrond draait in loop. Deaktivate Loop in AAPS.
6. Try using the '**pairing**' branch from the [MilosKozak/ruffy](https://github.com/MilosKozak/ruffy/tree/pairing) repository to establish the connection 
7. Now start ruffy on the phone. You may press Reset! and remove the old connection. Then hit **Connect!**.
8. In the Bluetooth menu of the pump, go to **ADD DEVICE / ADD CONNECTION**. Press *CONNECT!** 
    - The next three steps are timing-sensitive, so you might need to try different pauses/speed if pairing fails. Read the full sequence before trying it.

9. Now the Pump should show up the BT Name of phone to select for pairing. Here it is importand to wait at least 5s before you hit the select button on Pump. Otherwise the Pumpe will not send the Paring request to the Phone proberly.
    
    - If Combo Pump is set to 5s Screentime out, you may test it with 40s (original setting). From experiance the time between pump is showing up in phone until select phone is around 5-10s. In many other cases pairing just times out without successfully pair. Later you should set it back to 5s, to meet AAPS Combo settings and speed up connections.
    - If the pump does not show the phone as a pairing device at all, your phone's Bluetooth stack is probably not compatible with the pump. Make sure you are running a new **LineageOS ≥ 14.1** or **Android ≥ 8.1 (Oreo)**. If possible, try another smartphone. You can find a list of already successfully used smartphones under \[AAPS Phones\] (https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). 

10. Sometimes the phone asks for a (typically 4 digit) bluetooth PIN number that is not related to the 10 digit PIN later shown on the pump. Usually, ruffy will set this PIN automatically, but due to timing issues, this does not always work. If a request for a Bluetooth pairing PIN appears on the phone before any code is shown on the pump, you need to enter **}gZ='GD?gj2r|B}>** as the PIN. This is easiest done if you copy this 16 character text into the clipboard before starting the pairing sequence and just paste it in the dialog at this step. See related [Github issue](https://github.com/MilosKozak/ruffy/issues/14) for details.

11. At next the pump should show up a 10 digit security code. And Ruffy shold show a screen to enter it. So enter the code in Ruffy and you should be ready to go.
12. If pairing was not successful and you got a timeout on the pump, you will need to restart the process from scratch.
13. If you have used the 'Pairing' branch to build the ruffy app, now install the version build from the 'combo' branch on top of it. Make sure that you have used the same keys when signing the two versions of the app to be able to keep all setting and data, as they also contain the connection properties.
14. Reboot the phone.
15. Now you can restart AAPS loop.

## Gebruik

- Keep in mind that this is not a product, esp. in the beginning the user needs to monitor and understand the system, its limitations and how it can fail. It is strongly advised NOT to use this system when the person using it is not able to fully understand the system.
- Read the OpenAPS documentation https://openaps.org to understand the loop algorithm AndroidAPS is based upon.
- Read the online documentation to learn about and understand AndroidAPS https://androidaps.readthedocs.io/
- This integration uses the same functionality which the meter provides that comes with the Combo. The meter allows to mirror the pump screen and forwards button presses to the pump. The connection to the pump and this forwarding is what the ruffy app does. A `scripter` component reads the screen and automates entering boluses, TBRs etc and making sure inputs are processed correctly. AAPS then interacts with the scripter to apply loop commands and to administer boluses. This mode has some restrictions: it's comparatively slow (but well fast enough for what it is used for), and setting a TBR or giving a bolus causes the pump to vibrate.
- The integration of the Combo with AndroidAPS is designed with the assumption that all inputs are made via AndroidAPS. Boluses entered on the pump directly will be detected by AAPS, but it can take up to 20 min before AndroidAPS becomes aware of such a bolus. Reading boluses delivered directly on the pump is a safety feature and not meant to be regularly used (the loop requires knowledge of carbs consumed, which can't be entered on the pump, which is another reason why all inputs should be done in AndroidAPS). 
- Don't set or cancel a TBR on the pump. The loop assumes control of TBR and cannot work reliably otherwise, since it's not possible to determine the start time of a TBR that was set by the user on the pump.
- The pump's first basal rate profile is read on application start and is updated by AAPS. The basal rate should not be manually changed on the pump, but will be detected and corrected as a safety measure (don't rely on safety measures by default, this is meant to detect an unintended change on the pump).
- It's recommended to enable key lock on the pump to prevent bolusing from the pump, esp. when the pump was used before and using the "quick bolus" feature was a habit. Also, with keylock enabled, accidentally pressing a key will NOT interrupt active communication between AAPS and pump.
- When a BOLUS/TBR CANCELLED alert starts on the pump during bolusing or setting a TBR, this is caused by a disconnect between pump and phone, which happens from time to time. AAPS will try to reconnect and confirm the alert and then retry the last action (boluses are NOT retried for safety reasons). Therefore, such an alarm can be ignored as AAPS will confirm it automatically, usually within 30s (cancelling it is not problem, but will lead to the currently active action to have to wait till the pump's display turns off before it can reconnect to the pump). If the pump's alarm continues, automatic corfirmation failed, in which case the user needs to confirm the alarm manually.
- When a low cartridge or low battery alarm is raised during a bolus, they are confirmed and shown as a notification in AAPS. If they occur while no connection is open to the pump, going to the Combo tab and hitting the Refresh button will take over those alerts by confirming them and show a notification in AAPS.
- When AAPS fails to confirm a TBR CANCELLED alert, or one is raised for a different reason, hitting Refresh in the Combo tab establishes a connection, confirms the alert and shows a notification for it in AAPS. This can safely be done, since those alerts are benign - an appropriate TBR will be set again during the next loop iteration.
- For all other alerts raised by the pump: connecting to the pump will show the alert message in the Combo tab, e.g. "State: E4: Occlusion" as well as showing a notification on the main screen. An error will raise an urgent notification. AAPS never confirms serious errors on the pump, but let's the pump vibrate and ring to make sure the user is informed of a critical situation that needs action.
- After pairing, ruffy should not be used directly (AAPS will start in the background as needed), since using ruffy at AAPS at the same time is not supported.
- If AAPS crashes (or is stopped from the debugger) while AAPS and the pump were communicating (using ruffy), it might be necessary to force close ruffy. Restarting AAPS will start ruffy again. Restarting the phone is also an easy way to resolve this if you don't know how to force kill an app.
- Don't press any buttons on the pump while AAPS communicates with the pump (Bluetooth logo is shown on the pump).