# Accu Chek Combo pompa

**Ši programinė įranga yra ne paruoštas produktas, o Pasidaryk Pats sprendimo dalis, todėl Jūs turite skaityti, mokytis ir suprasti sistemos veikimą savarankiškai. Tai nėra kažkas, kas kontroliuos Jūsų diabetą už Jus, tačiau jei skirsite tiek laiko, kiek reikia, sistema leis Jums pagerinti diabeto kontrolę ir gyvenimo kokybę. Nepulkite stačia galva, skirkite laiko mokymuisi. Tik Jūs pats atsakote už tai, ką darysite su šia sistema.**

(hardware-requirements)=

## Reikalavimai įrangai

- Roche Accu-Chek Combo pompa (bet kuri versija)
- Smartpix arba Realtime kabelis bei 360 Configuration Software programėlė pompos modifikavimui. (Klientui pageidaujant Roche nemokamai išsiunčia Smartpix ir konfigūravimo programėlę.)
- A compatible phone: An Android phone with a phone running LineageOS 14.1 (formerly CyanogenMod) or at least Android 8.1 (Oreo). As of AndroidAPS 3.0 Android 9 is mandatory. See [release notes](https://androidaps.readthedocs.io/en/latest/Installing-AndroidAPS/Releasenotes.html#android-version-and-aaps-version) for details.
- With LineageOS 14.1 it has to be a recent version from at least June 2017 since the change needed to pair the Combo pump was only introduced at that time. 
- Telefonų sąrašas peteikiamas dokumente [AAPS telefonai](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit).
- Atkreipkite dėmesį, kad šis sąrašas remiasi tik asmenine vartotojų patirtimi ir gali būti nepilnas. Jūs taip pat galite prisidėti pranešdami apie savo patirtį (pagrindinis šio projekto principas - neatlygintinas asmeninis įnašas).
- Atminkite, kad nors Android 8.1 leidžia jungtis prie Combo pompos, vis tiek kyla sunkumų naudojant AAPS su Android 8.1.
- Informacija pažengusiems vartotojams: galima susieti "nulaužtos OS" telefoną ir perkelti jį į kitą telefoną, kurio OS taip pat turi būti "nulaužtas", kad būtų galima naudoti su Ruffy / AAPS. Čia aprašoma, kaip susieti pompą su Android, senesniu nei 8.1 versija, bet tai nėra visiškai ištestuota: https://github.com/gregorybel/combo-pairing/blob/master/README.md

## Apribojimai

- Extended bolus and multiwave bolus are not supported (see [Extended Carbs](../Usage/Extended-Carbs.md) instead).
- Galimas tik vienas bazės profilis.
- Daugiau nei 1 bazinio profilio nustatymas, ištęsto ar daugiabangio boluso suleidimas iš pompos trukdo laikinų bazių nustatymui (TBR) ir išjungia ciklą 6 valandoms, todėl ciklas negali saugiai veikti tokiomis sąlygomis.
- It's currently not possible to set the time and date on the pump, so [daylight saving time changes](../Usage/Timezone-traveling.md#accu-chek-combo) have to be performed manually (you may disable the phone's automatic clock update in the evening and change it back in the morning together with the pump clock to avoid an alarm during the night).
- Šiuo metu yra palaikomi baziniai greičiai nuo 0.05 iki 10 vv/h. Tai taip pat taikoma koreguojant profilį, pvz., kai padidinama 200%, didžiausia bazė negali viršyti 5 vv/h, nes ji padvigubės. Analogiškai, kai reikia sumažinti iki 50%, mažiausias bazinis greitis turi būti bent 0.10 vv/h.
- Jei Ciklas reikalauja atšaukti veikiančią laikiną bazę (TBR), vietoje 100% Combo nustatys 90% arba 110% 15-ai minučių. Taip nustatyta, nes laikinos bazės atšaukimas įjungia pompos aliarmą, kuris sukelia intensyvų vibravimą.
- Retkarčiais (kartą per keletą dienų) AAPS gali nepasisekti automatiškai išjungti LAIKINOS BAZĖS ATŠAUKIMAS aliarmo, dėl to reikalingi vartotojo veiksmai (paspaudžiant ATNAUJINTI mygtuką AAPS, kad įspėjimas būtų perduotas AAPS, arba patvirtinant aliarmą pompoje).
- Bluetooth ryšio stabilumas priklauso nuo telefono modelio, kai ryšys su pompa tampa negalimas, įjungiamas perspėjimas "Pompa nepasiekiama". 
- Jei ši klaida atsiranda, įsitikinkite, kad Bluetooth yrayra įjungtas, paspauskite mygtuką Atnaujinti, esantį skirtuke „Combo“, kad pamatytumėte, ar tai įvyko dėl atsitiktinio trikdžio.Jei vis tiek nėra ryšio, iš naujo paleiskite telefoną, paprastai tai išsprendžia problemą. 
- Jei paleidimas iš naujo nepadeda, turi būti paspaustas pompos mygtukas, kuris iš naujo atkuria pompos Bluetooth. Tada pompa vėl atnaujins ryšį su telefonu. 
- Šiuo metu kitų sprendimų ryšio problemoms nėra. Taigi, jei dažnai matote tas klaidas, jūsų vienintelė galimybė yra įsigyti kitą telefoną, kuris, kaip tvirtina kiti vartotojai, gerai veikia su AndroidAPS ir Combo (žr. Aukščiau).
- Boluso suleidimas tiesiai iš pompos gali būti ne iš karto matomas programoje (tikrinama kaskart, kai AAPS prisijungia prie pompos) ir gali blogiausiu atveju užtrukti iki 20 min. 
- Tokie bolusai visada tikrinami prieš nustatant aukštą laikiną bazę arba bolusuojant per AAPS, taigi AAPS gali atsisakyti nustatyti laikiną bazę ar suleisti bolusą, nes jis galėjo būti apskaičiuotas pagal neteisingas prielaidas. (-> neleiskite boluso tiesiogiai per pompą! Žr. skyrių [Naudojimas](#usage))
- Nenustatinėkite laikinų bazių pompoje, nes jas kontroliuoja Ciklas. Aptikti naują laikiną bazę pompoje gali užtrukti iki 20 minučių, ir jos efektas bus skaičiuojamas tik nuo aptikimo momento, todėl gali nutikti, kad 20 min trukmės laikina bazė neatsispindės AIO. 

## Sąranka

- Konfigūruokite pompą naudodami "360° Pump Configuration Software" programą. 
- Jei jos neturite, susisiekite su Accu-Check atstovybe. Dažniausiai registruoti vartotojai turi galimybę gauti "360° Pump Configuration Software" ir SmartPix IR kabelį (Realtime prietaisas irgi tinka, jei tokį turite).
- **Privalomi nustatymai** (pažymėti žaliai ekrano nuotraukose):
    
    - Nustatykite meniu konfigūraciją "Standart", tada matysite tik tuos meniu pasirinkimus ir funkcijas, kurios yra palaikomos, o nepalaikomos bus paslėptos (ištęstas/daugiabangis bolusas, keletas bazės profilių). Jos nedera su saugumo reikalavimais, todėl sukelia Ciklo funkcionalumo sutrikimus, jei yra naudojamos.
    - Patikrinkite, kad *Insulin Pump Options* laukelyje *Quick Info Text* būtų įrašyta QUICK INFO (be kabučių). Būtinai nustatykite pompoje anglų kalbą.
    - Nustatykite 500% laikiną bazę TBR *Maximum Adjustment*
    - Išjunkite *Signal End of Temporary Basal Rate*
    - TBR *Duration increment* nustatykite 15 min
    - Įjunkite Bluetooth

- **Rekomenduojami nustatymai** (pažymėti mėlynai ekrano nuotraukose)
    
    - Nustatykite pageidaujamą senkančio rezervuaro perspėjimą
    - Kad išvengtumėt programos klaidų, nustatykite maksimalų boluso kiekį, atsižvelgdami į savo terapijos ypatumus
    - Taip pat nustatykite maksimalią laikinos bazės trukmę kaip saugiklį. Leiskite bent 3 val., nes jei prireiks atjungti pompą 3 valandoms, bus nustatyta 0% bazė toms 3 val.
    - Įjunkite mygtukų užraktą pompoje, kuris apsaugos nuo bolusų leidimo tiesiogiai iš pompos, ypač jei pompą naudojate seniai ir greitasis bolusų leidimas yra tapęs įpročiu.
    - Nustatykite display timeout 5.5, o menu timeout - 5 s. Tai leis AAPS greičiau atsistatyti įvykus klaidai ir sumažins vibracijų, kurios susijusios su klaidomis, skaičių

![Screenshot of user menu settings](../images/combo/combo-menu-settings.png)

![Screenshot of TBR settings](../images/combo/combo-tbr-settings.png)

![Screenshot of bolus settings](../images/combo/combo-bolus-settings.png)

![Screenshot of insulin cartridge settings](../images/combo/combo-insulin-settings.png)

- Install AndroidAPS as described in the [AndroidAPS wiki](https://androidaps.readthedocs.io/)
- Make sure to read the wiki to understand how to setup AndroidAPS.
- Select the MDI plugin in AndroidAPS, not the Combo plugin at this point to avoid the Combo plugin from interfering with ruffy during the pairing process.
- Clone ruffy via git from [MilosKozak/ruffy](https://github.com/MilosKozak/ruffy). At the moment, the primary branch is the `combo` branch, in case of problems you might also try the 'pairing' branch (see below).
- Build and install ruffy and use it to pair the pump. If it doesn't work after multiple attempts, switch to the `pairing` branch, pair the pump and then switch back the original branch. If the pump is already paired and can be controlled via ruffy, installing the `combo` branch is sufficient. Note that the pairing processing is somewhat fragile (but only has to be done once) and may need a few attempts; quickly acknowledge prompts and when starting over, remove the pump device from the Bluetooth settings beforehand. Another option to try is to go to the Bluetooth menu after initiating the pairing process (this keeps the phone's Bluetooth discoverable as long as the menu is displayed) and switch back to ruffy after confirming the pairing on the pump, when the pump displays the authorization code. If you're unsuccessful in pairing the pump (say after 10 attempts), try waiting up to 10s before confirming the pairing on the pump (when the name of the phone is displayed on the pump). If you have configured the menu timeout to be 5s above, you need to increase it again. Some users reported they needed to do this. Lastly, consider moving from one room to another in case of local radio interference. At least one user immediately overcame pairing problems by simply changing rooms.
- When AAPS is using ruffy, the ruffy app can't be used. The easiest way is to just reboot the phone after the pairing process and let AAPS start ruffy in the background.
- If the pump is completely new, you need to do one bolus on the pump, so the pump creates a first history entry.
- Before enabling the Combo plugin in AAPS make sure your profile is set up correctly and activated(!) and your basal profile is up to date as AAPS will sync the basal profile to the pump. Then activate the Combo plugin. Press the *Refresh* button on the Combo tab to initialize the pump.
- To verify your setup, with the pump **disconnected**, use AAPS to set a TBR of 500% for 15 min and issue a bolus. The pump should now have a TBR running and the bolus in the history. AAPS should also show the active TBR and delivered bolus.

(why-pairing-with-the-pump-does-not-work-with-the-app-ruffy)=

## Why pairing with the pump does not work with the app "ruffy"?

There are serveral possible reasons. Try the following steps:

1. Įdėkite naują **arba pilnai įkrautą bateriją** į pompą. Pažvelkite į baterijos skyrių dėl papildomos informacijos. Įsitikinkite, kad pompa yra labai arti telefono.

![Combo should be next to phone](../images/Combo_next_to_Phone.png)

2. Turn off or remove any other bluetooth devices so they will not be able to establish a connection to the phone while pairing is in progress. Any parallel bluetooth communication or prompt to establish connections might disturb the pairing process.

3. Delete already connected devices in the Bluetooth menu of the pump: **BLUETOOTH SETTINGS / CONNECTION / REMOVE** until **NO DEVICE** is shown.

4. Delete a pump already connected to the phone via Bluetooth: Under Settings / Bluetooth, remove the paired device "**SpiritCombo**"
5. Įsitikinkite, kad AAPS nepaleido Ciklo foniniame režime. Deaktivate Loop in AAPS.
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

## Naudojimas

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