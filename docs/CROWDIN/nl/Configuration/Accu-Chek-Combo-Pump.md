# Accu Chek Combo Pomp

**Deze software is onderdeel van een doe-het-zelf oplossing en is niet een product, maar vraagt JOU te lezen, leren en te begrijpen hoe het systeem werkt en hoe je het kunt gebruiken. Het neemt niet je gehele diabetes management van je over, maar stelt je wel in staat om je diabetes beter onder controle te krijgen en je kwaliteit van leven te verhogen, als je bereid bent de benodigde tijd erin te investeren. Haast je niet, maar geef jezelf de tijd om te leren. Jij alleen bent verantwoordelijk voor wat je ermee doet.**

## Hardware vereisten

- Een Roche Accu-Chek Combo pomp (elke firmware is geschikt).
- Een Smartpix of Realtyme apparaatje met bijbehorende 360 Configuratie software om de pomp te configureren. Op verzoek stuurt Roche de Smartpix met software gratis op aan haar klanten.
- Een geschikte telefoon: een Android telefoon met als Operating System LineageOS 14.1 (of hoger) - ook wel bekend als CyanogenMod - of met Android 8.1 (Oreo). De LineageOS 14.1 dient een recente versie te zijn, van minimaal Juni 2017, aangezien toen de functionaliteit beschikbaar is gekomen, die nodig is om de Combo pomp te kunnen verbinden met de telefoon. Een lijst met telefoons vind je in dit document: [AAPS Phones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). NB: deze lijst is niet compleet en bevat persoonlijke ervaringen. Je wordt gevraagd om jouw eigen ervaring hier ook aan toe te voegen en zodoende anderen te helpen (deze projecten draaien allemaal om #payitforward mentaliteit).

- Weet dat er nog steeds issues zijn met AAPS op Android 8.1, ook al kan deze wel communiceren met de Combo. Voor ervaren gebruikers is het mogelijk om de de Pairing op een geroote telefoon te doen en deze over te zetten naar een andere geroote telefoon met ruffy/AAPS. Hiermee wordt het mogelijk om het over te zetten naar telefoons met Android <8.1, maar dit is niet uitgebreid getest: https://github.com/gregorybel/combo-pairing/blob/master/README.md

## Beperkingen

- Extended bolus and multiwave bolus are not supported (see [Extended Carbs](../Usage/Extended-Carbs.rst) instead)
- Slechts één basaal profiel wordt ondersteund.
- Als je in de pomp meer dan één basaalprofiel instelt of wanneer je extended bolus of multiwave bolus geeft vanaf de pomp dan zal dit ingrijpen op de TBR en zal AAPS de loop dwingen tot een beperkte gebruiksmodus voor de duur van 6 uur, omdat de loop onder deze omstandigheden anders niet veilig kan blijven werken.
- Het is momenteel niet mogelijk om de tijd en datum automatisch in te stellen op de pomp, waardoor zomer- en wintertijd handmatig moeten worden ingesteld. Je kunt op de telefoon het automatische bijwerken van de zomer- en winter tijd uitzetten in de avond en in de ochtend weer aanzetten, tegelijk met het handmatig wijzigen van de tijd op de pomp. Zo voorkom je alarmen in de nacht.
- Op dit moment worden alleen basaal standen tussen de 0.05 en 10 E/uur ondersteund. Dit geldt ook voor profielwissels, bijvoorbeeld bij een verhoging tot 200% mag de hoogste basaalstand niet boven de 5 E/uur liggen omdat het nog wordt verdubbeld. Dit geldt ook voor de ondergrens: bij een verlaging tot 50% moet de laagste basaalstand minstens 0,10 E/uur zijn.
- Als de loop een actieve TBR (tijdelijke basaalstand) eigenlijk zou willen cancellen, dan zal de Combo een TBR instellen van 90% of 110% gedurende 15 minuten. Dit is omdat het annuleren van een TBR een trilalarm geeft op de pomp. Op deze manier worden veelvuldige trilalarmen vermeden.
- Zo nu en dan (ruwweg elke paar dagen) gebeurt het dat AAPS het TBR CANCELLED alarm niet automatisch kan onderdrukken. Dan moet jij zelf de Vernieuw-knop in AAPS gebruiken om de waarschuwing in AAPS te krijgen, of je moet het alarm wegdrukken via de knoppen op je pomp.
- De stabiliteit van de Bluetooth verbinding verschilt per telefoon, waardoor "pomp niet bereikbaar" foutmeldingen kunnen voorkomen als er geen verbinding meer kan worden gemaakt met de pomp. Als deze foutmelding verschijnt, zorg ervoor dat Bluetooth is ingeschakeld, druk op de knop Vernieuwen in het tabblad Combo om te zien of dit is veroorzaakt door een tijdelijk probleem, en als er nog geen verbinding kan worden gemaakt herstart je de telefoon. Meestal is het probleem dan opgelost. Er is een ander probleem wanneer een herstart niet helpt, maar een knop op de pomp moet worden ingedrukt (hierdoor wordt de Bluetooth van de pomp gereset), voordat de pomp opnieuw verbindingen kan maken met de telefoon. Er is heel weinig dat kan worden gedaan om beide problemen op dit moment te verhelpen. Dus als je deze fouten vaak ziet, is je enige optie op dit moment om een andere telefoon te zoeken die goed werkt met AndroidAPS en de Combo (zie hierboven).
- Het afgeven van een handmatige bolus via de pomp zal niet altijd op tijd worden gedetecteerd (de pomp controleert elke keer dat AAPS verbinding maakt met de pomp of er een bolus is afgegeven), en dit kan in het slechtste geval tot 20 minuten duren. Voordat AAPS een commando voor een bolus of hoge TBR geeft, zal hij altijd de bolusgeschiedenis in de pomp controleren. Wanneer hij dan de handmatige bolus opmerkt, zal AAPS geen Bolus/TBR commando geven omdat deze was berekend met verkeerde aannames. (-> Niet bolussen vanaf de pomp! Zie hoofdstuk *Gebruik*)
- Het instellen van een TBR op de pomp moet worden vermeden, aangezien AAPS de controle zou moeten houden over TBRs. Wanneer je dit wel zou doen, dan kan het tot 20 minuten duren voordat AAPS contact maakt met de pomp en de nieuwe TBR detecteert. De TBR zal alleen worden geregistreerd vanaf het moment dat hij wordt gedetecteerd, dus in het ergste geval zou er al twintig minuten lang een TBR zijn afgegeven die niet in de IOB wordt meegerekend. 

## Pomp koppelen

- Stel de pomp in met de 360 configuratie software. Als je de software niet hebt, neem dan contact op met de Accu-Chek klantenservice. Ze sturen meestal een CD met de "360° Pump ConfiguratieSoftware" en een SmartPix USB-infrarood verbindingsapparaat (het Realtyme apparaat werkt ook als je dat hebt). 
  - Vereist (groen gemarkeerd in schermafbeeldingen): 
    - Zorg dat de menu configuratie op "Standaard" staat, dit zal alleen de ondersteunde menu's/acties op de pomp weergeven en de niet-ondersteunde verbergen (zoals vertraagde/multiwave bolus, meerdere basaalstanden). Wanneer je de niet-ondersteunde opties toch gebruikt, dan zullen bepaalde loop functies worden beperkt omdat het niet mogelijk is om veilig te loopen met deze opties.
    - Verify the *Quick Info Text* is set to "QUICK INFO" (without the quotes, found under *Insulin Pump Options*).
    - Set TBR *Maximum Adjustment* to 500%
    - Disable *Signal End of Temporary Basal Rate*
    - Set TBR *Duration increment* to 15 min
    - Enable Bluetooth
  - Recommended (marked blue in screenshots) 
    - Set low cartridge alarm to your liking
    - Configure a max bolus suited for your therapy to protect against bugs in the software
    - Similarly, configure maximum TBR duration as a safeguard. Allow at least 3 hours, since the option to disconnect the pump for 3 hours sets a 0% for 3 hours.
    - Enable key lock on the pump to prevent bolusing from the pump, esp. when the pump was used before and quick bolusing was a habit.
    - Set display timeout and menu timeout to the minimum of 5.5 and 5 respectively. This allows the AAPS to recover more quickly from error situations and reduces the amount of vibrations that can occur during such errors

![Screenshot of user menu settings](../images/combo/combo-menu-settings.png)

![Screenshot of TBR settings](../images/combo/combo-tbr-settings.png)

![Screenshot of bolus settings](../images/combo/combo-bolus-settings.png)

![Screenshot of insulin cartridge settings](../images/combo/combo-insulin-settings.png)

- Install AndroidAPS as described in the [AndroidAPS wiki](http://wiki.AndroidAPS.org).
- Make sure to read the wiki to understand how to setup AndroidAPS.
- Select the MDI plugin in AndroidAPS, not the Combo plugin at this point to avoid the Combo plugin from interfering with ruffy during the pairing process.
- Follow the link <http://ruffy.AndroidAPS.org> and clone ruffy via git.
- Install ruffy and use it to pair the pump. If it doesn't work after multiple attempts, switch to the `pairing` branch, pair the pump and then switch back the original branch. Note that the pairing processing is somewhat fragile (but only has to be done once) and may need a few attempts; quickly acknowledge prompts and when starting over, remove the pump device from the Bluetooth settings beforehand. Another option to try is to go to the Bluetooth menu after initiating the pairing process (this keeps the phone's Bluetooth discoverable as long as the menu is displayed) and switch back to ruffy after confirming the pairing on the pump, when the pump displays the authorization code. If you're unsuccessful in pairing the pump (say after 10 attempts), try waiting up to 10s before confirming the pairing on the pump (when the name of the phone is displayed on the pump). If you have configured the menu timeout to be 5s above, you need to increase it again. Some users reported they needed to do this. Lastly, consider moving from one room to another in case of local radio interference. At least one user immediately overcame pairing problems by simply changing rooms.
- When AAPS is using ruffy, the ruffy app can't be used. The easiest way is to just reboot the phone after the pairing process and let AAPS start ruffy in the background.
- If the pump is completely new, you need to do one bolus on the pump, so the pump creates a first history entry.
- Before enabling the Combo plugin in AAPS make sure your profile is set up correctly and activated(!) and your basal profile is up to date as AAPS will sync the basal profile to the pump. Then activate the Combo plugin. Press the *Refresh* button on the Combo tab to initialize the pump.
- To verify your setup, with the pump **disconnected**, use AAPS to set a TBR of 500% for 15 min and issue a bolus. The pump should now have a TBR running and the bolus in the history. AAPS should also show the active TBR and delivered bolus.

## Why does pairing with the pump does not work with the app "ruffy"?

There are serveral possible reasons. Try the following steps:

1. Insert a **fresh or full battery** into the pump. Look at the battery section for details. Make sure that the pump is very close to the smartphone.

![Combo should be next to phone](../images/Combo_next_to_Phone.png)

2. Turn off or remove any other bluetooth devices so they will not be able to establish a connection to the phone while pairing is in progress. Any parallel bluetooth communication or prompt to establish connections might disturb the pairing process.

3.     Delete already connected devices in the Bluetooth menu of the pump: **BLUETOOTH SETTINGS / CONNECTION / REMOVE** until 
      **NO DEVICE** is shown.
      

4. Delete a pump already connected to the phone via Bluetooth: Under Settings / Bluetooth, remove the paired device "**SpiritCombo**"
5. Make sure, that AAPS not running in background the loop. Deaktivate Loop in AAPS.
6. Now start ruffy on the phone. You may press Reset! and remove old Bonding. Then hit Connect!.
7. In the Bluetooth menu of the pump, go to **ADD DEVICE / ADD CONNECTION**. Press *CONNECT!** * Step 5 and 6 have to be in a short timing.
8.     Now the Pump should show up the BT Name of phone to select for pairing. Here it is importand to whait at least 5s 
      bevore you hit the select button on Pump. Otherwise the Pumpe will not send the Paring request to the Phone proberly.
      
      * If Combo Pump is set to 5s Screentime out, you may test it with 40s (original setting). From experiance the time 
        between pump is showing up in phone until select phone is around 5-10s. In many other cases pairing just times out 
        without successfully Pair. Later you should set it back to 5s, to meet AAPS Combo settings.
      * If the pump does not show the phone as a pairing device at all, your phone's Bluetooth stack is probably not 
        compatible with the pump. Make sure you are running a new **LineageOS ≥ 14.1** or **Android ≥ 8.1 (Oreo)**. If 
        possible, try another smartphone. You can find a list of already successfully used smartphones under [AAPS Phones] 
        (https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). 
      

9.     At next Pump should show up a 10 digit security code. And Ruffy a screen to enter it. So enter it in Ruffy and you 
      should be ready to go.
      

10. Reboot the phone.
11. Now you can restart AAPS loop.

## Usage

- Keep in mind that this is not a product, esp. in the beginning the user needs to monitor and understand the system, its limitations and how it can fail. It is strongly advised NOT to use this system when the person using it is not able to fully understand the system.
- Read the OpenAPS documentation https://openaps.org to understand the loop algorithm AndroidAPS is based upon.
- Read the wiki to learn about and understand AndroidAPS http://wiki.AndroidAPS.org
- This integration uses the same functionality which the meter provides that comes with the Combo. The meter allows to mirror the pump screen and forwards button presses to the pump. The connection to the pump and this forwarding is what the ruffy app does. A `scripter` components reads the screen and automates entering boluses, TBRs etc and making sure inputs are processed correctly. AAPS then interacts with the scripter to apply loop commands and to administer boluses. This mode has some restrictions: it's comparatively slow (but well fast enough for what it is used for), and setting a TBR or giving a bolus causes the pump to vibrate.
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