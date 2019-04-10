# Accu Chek Combo Pump

**Tento software je součástí DIY řešení a není to produkt, vyžaduje, abyste si přečetli dokumentaci, pochopili celý systém a naučili se ho používat. Není to něco, co za Vás udělá veškerý management diabetu, ale pomůže Vám k lepším výsledkům a kvalitě života, pokud investujete čas k tomu potřebný. Zbytečně nespěchejte, a vytvořte si čas pro učení. Pouze Vy jste zodpovědní za to, jak ze systémem zacházíte.**

## Hardwarové požadavky

- Roche Accu-Chek Combo (jakýkoliv firmware, funguje se všemi)
- Čtečka Smartpix, nebo jiné zařízení pro komunikaci. 360 Configuration Software pro úpravu parametrů pumpy. Roche posílá Smartpix zařízení a konfigurační software zdarma svým zákazníkům na vyžádání.
- Kompatibilní telefon: Android telefon s ROM LineageOS 14.1 (dříve CyanogenMod) nebo Android 8.1 (Oreo). LineageOS 14.1 musí být nejnovější verze od června 2017, protože potřebné změny pro párování s Combo pumpou jsou až od této doby. Seznam telefonů lze nalézt v dokumentu [AAPS telefony](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). Prosím uvědomte si, že to není úplný seznam a odráží osobní uživatelské zkušenosti. Máte možnost doplnit své vlastní zkušenosti a tím pomoci dalším uživatelům.

- Vezměte na vědomí, že pokud Android 8.1 povoluje komunikaci s Combo, zůstávají nedořešené záležitosti mezi AAPS a Androidem 8.1. Zkušenější uživatelé mohou provést párování pomocí "rootnutého" telefonu a následně jej přenést na jiný "rootnutý" telefon, ve kterém jsou nainstalovány aplikace ruffy/AAPS. To umožňuje používat telefony s Android < 8.1, ale nebylo to široce testováno: https://github.com/gregorybel/combo-pairing/blob/master/README.md

## Omezení

- Prodloužené bolusy a rozložené bolusy nejsou podporovány (podívejte se na [Extended Carbs](../Usage/Extended-Carbs))
- Je podporován pouze jeden bazální profil.
- Nastavení více než jednoho bazálního profilu na pumpě nebo rozloženého bolusu z pumpy naruší dočasný bazál a uvede smyčku do režimu zastavení při nízké glykémii na dobu 6 hodin. Za těchto podmínek nemůže smyčka správně pracovat.
- Aktuálně není možné nastavit čas a datum na pumpě, stejně jako změny času, které musí být zadány ručně (můžete deaktivovat automatickou aktualizaci času, abyste předešli alarmům v průběhu noci).
- Aktuální rozsah bazálních dávek je od 0,05 do 10 U/h. To platí i při úpravách profilu, například při zvýšení na 200 % nesmí nejvyšší bazál přesáhnout 5 U/h, protože tato hodnota bude zdvojnásobena. Obdobně platí, že při snížení na 50% musí být nejnižší bazální dávka 0,10 U/h.
- Pokud smyčka požaduje zrušení spuštěného dočasného bazálu, Combo nastaví dočasný bazál na 90 % nebo 110 % na dobu 15 minut. Důvodem je, že zrušení dočasného bazálu vyvolá alarm na pumpě, což způsobuje četné vibrace.
- Občas (jednou za pár dní) se může stát, že AAPS automaticky zruší alarm TBR CANCELLED. Funkci obnovíte stisknutím tlačítka pro obnovení v AAPS pro přenesení varování do AAPS nebo potvrzením alarmu na pumpě.
- Stabilita připojení Bluetooth se u různých telefonů liší a může způsobovat výstrahu „pumpa nedostupná“, pokud spojení není opětovně obnoveno. Pokud se tato chyba objeví, ujistěte se, že Bluetooth je aktivní a stiskněte tlačítko pro obnovení na kartě Combo, abyste zjistili, jestli to bylo příčinou problému. Pokud chyba přetrvává, restartujte telefon, což většinou pomůže. Jestliže restart nepomůže, existuje ještě další možnost. Stiskněte tlačítko na pumpě (což resetuje Bluetooth na pumpě), pumpa by měla znovu navázat spojení. Pro odstranění některého z těchto problémů se toho v tomto okamžiku příliš mnoho udělat nedá. Pokud se tyto chyby budou často opakovat, jedinou možností je vybrat jiný doporučený telefon, který bude správně fungovat s AndroidAPS a Combem (viz výše).
- Vydání bolusu z pumpy nebude vždy detekováno okamžitě (zaznamenává se při každém spojení s pumpou), v nejhorším případě to může trvat 20 minut. Bolusy na pumpě jsou kontrolovány před každým nastavením vyššího dočasného bazálu nebo bolusu pomocí AAPS, ale z důvodu omezení AAPS odmítne zapsat dočasný bazál / bolus, protože byl vypočítán podle falešných předpokladů. (-> nepodávejte bolus z pumpy! Viz kapitola *Používání*)
- Vyhněte se tomu, abyste nastavovali dočasný bazál na pumpě, smyčka předpokládá, že dočasné bazály řídí ona. Zaznamenání nového dočasného bazálu na pumpě může trvat až 20 minut a délka dočasného bazálu bude vypočítána pouze od momentu, kdy je načtena. Což v nejhorším případě může být 20 minut, které nebudou započítány do IOB. 

## Nastavení

- Nastavte pumpu pomocí 360 Config Software. Pokud tento software nemáte, kontaktujte svého obchodního zástupce Roche nebo zákaznickou linku. Registrovaným uživatelům poskytují software a také hardwarovou čtečku SmartPix pro komunikaci s pumpou. 
  - Požadované nastavení: 
    - Set/leave the menu configuration as "Standard", this will show only the supported menus/actions on the pump and hide those which are unsupported (extended/multiwave bolus, multiple basal rates), which cause the loop functionality to be restricted when used because it's not possible to run the loop in a safe manner when used.
    - Verify the *Quick Info Text* is set to "QUICK INFO" (without the quotes, found under *Insulin Pump Options*).
    - Set TBR *Maximum Adjustment* to 500%
    - Disable *Signal End of Temporary Basal Rate*
    - Set TBR *Duration increment* to 15 min
    - Enable Bluetooth
  - Doporučené (označeno modře na snímcích obrazovky): 
    - Nastavte si upozornění na nízký stav zásobníku.
    - Nastavte si maximální bolus s ohledem na svou léčbu jako ochranu před chybami softwaru.
    - Podobně si nastavte maximální hodnotu dočasného bazálu jako pojistku. Allow at least 3 hours, since the option to disconnect the pump for 3 hours sets a 0% for 3 hours.
    - Aktivujte zámek tlačítek na pumpě, abyste předešli nechtěnému vydání bolusů z pumpy, zvláště pokud jste byli zvyklí používat rychlé bolusy.
    - Nastavte čas zhasnutí displeje na 5,5 s a čas opuštění menu na 5 s. Toto pomůže AAPS k rychlejšímu obnovení v případě chyb a předejde četným vibracím, které se mohou objevit během těchto chyb.

![Screenshot of user menu settings](../images/combo/combo-menu-settings.png)

![Screenshot of TBR settings](../images/combo/combo-tbr-settings.png)

![Screenshot of bolus settings](../images/combo/combo-bolus-settings.png)

![Screenshot of insulin cartridge settings](../images/combo/combo-insulin-settings.png)

- Install AndroidAPS as described in the [AndroidAPS wiki](http://wiki.AndroidAPS.org).
- Přečtěte si dokumentaci, abyste pochopili, jak nastavit AndroidAPS.
- Select the MDI plugin in AndroidAPS, not the Combo plugin at this point to avoid the Combo plugin from interfering with ruffy during the pairing process.
- Follow the link http://ruffy.AndroidAPS.org and clone ruffy via git.
- Install ruffy and use it to pair the pump. If it doesn't work after multiple attempts, switch to the `pairing` branch, pair the pump and then switch back the original branch. Note that the pairing processing is somewhat fragile (but only has to be done once) and may need a few attempts; quickly acknowledge prompts and when starting over, remove the pump device from the Bluetooth settings beforehand. Another option to try is to go to the Bluetooth menu after initiating the pairing process (this keeps the phone's Bluetooth discoverable as long as the menu is displayed) and switch back to ruffy after confirming the pairing on the pump, when the pump displays the authorization code. If you're unsuccessful in pairing the pump (say after 10 attempts), try waiting up to 10s before confirming the pairing on the pump (when the name of the phone is displayed on the pump). If you have configured the menu timeout to be 5s above, you need to increase it again. Some users reported they needed to do this. Lastly, consider moving from one room to another in case of local radio interference. At least one user immediately overcame pairing problems by simply changing rooms.
- When AAPS is using ruffy, the ruffy app can't be used. The easiest way is to just reboot the phone after the pairing process and let AAPS start ruffy in the background.
- If the pump is completely new, you need to do one bolus on the pump, so the pump creates a first history entry.
- Before enabling the Combo plugin in AAPS make sure your profile is set up correctly and activated(!) and your basal profile is up to date as AAPS will sync the basal profile to the pump. Then activate the Combo plugin. Press the *Refresh* button on the Combo tab to initialize the pump.
- To verify your setup, with the pump **disconnected**, use AAPS to set a TBR of 500% for 15 min and issue a bolus. The pump should now have a TBR running and the bolus in the history. AAPS should also show the active TBR and delivered bolus.

## Why does pairing with the pump does not work with the app "ruffy"?

Má to několik možných důvodů. Vyzkoušejte tyto kroky:

1. Vložte ** novou nebo nabitou baterii ** do pumpy. Podívejte se na podrobnosti do návodu do části Baterie. Ujistěte se, že pumpa je velmi blízko telefonu.

![Combo should be next to phone](../images/Combo_next_to_Phone.png)

2. Vypněte nebo odstraňte jakékoliv jiné Bluetooth zařízení, abyste eliminovali možné rušení při párování. Jakákoliv paralelní komunikace s rozhraním Bluetooth nebo výzva k vytvoření připojení může narušit proces párování.

3.     Odstraňte všechna současná připojená zařízení v Bluetooth menu pumpy. 
      ** Bluetooth nastavení / připojení / odebrat **, dokud nebude zobrazeno **No Device**.
      

4. Vymažte již spárovaný telefon z pumpy. Settings / Bluetooth, remove the paired device
5. Ujistěte se, že na pozadí není spuštěna smyčka aplikace AAPS. Deaktivuje smyčku v AAPS.
6. Nyní spusťte aplikaci Ruffy v telefonu. Stiskněte tlačítko Reset a vymažte staré párování. Poté stiskněte tlačítko Connect.
7. V Bluetooth menu pumpy přejděte na ** ADD DEVICE / ADD CONNECTION**. Stiskněte *CONNECT!* Kroky 5 a 6 musí následovat za sebou v krátkém časovém intervalu.
8.     Nyní se na pumpě ukáže BT název telefonu a nabídne možnost párování. S potvrzením a stisknutím na pumpě je nutné počkat aspoň 5 s. Jinak pumpa neodešle požadavek pro párování korektně.
      
      * If Combo Pump is set to 5s Screentime out, you may test it with 40s (original setting). From experiance the time 
        between pump is showing up in phone until select phone is around 5-10s. In many other cases pairing just times out 
        without successfully Pair. Later you should set it back to 5s, to meet AAPS Combo settings.
      * If the pump does not show the phone as a pairing device at all, your phone's Bluetooth stack is probably not 
        compatible with the pump. Make sure you are running a new **LineageOS ≥ 14.1** or **Android ≥ 8.1 (Oreo)**. If 
        possible, try another smartphone. You can find a list of already successfully used smartphones under [AAPS Phones] 
        (https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). 
      

9.     Na pumpě se zobrazí desetimístný bezpečnostní kód. Ruffy zobrazí obrazovku pro zadání. Po zadání kódu do aplikace Ruffy byste měli být připraveni.
      

10. Restartujte telefon.
11. Nyní můžete restartovat AAPS smyčku.

## Používání

- Mějte na pamětí, že toto není produkt, zvláště na začátku potřebuje uživatel pochopit a monitorovat systém, jeho limity a jak může dojít k chybě. Je důrazně doporučováno nepoužívat tento systém, pokud ho uživatel není schopen plně pochopit.
- Přečtěte si dokumentaci k OpenAPS na https://openaps.org, abyste pochopili algoritmus smyčky, na které je systém AndroidAPS založen.
- Přečtěte si Wiki, abyste se seznámili se systémem AndroidAPS a pochopili, jak funguje: http://wiki.AndroidAPS.org
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
- Pokud dojde k chybě AAPS (nebo zastavení z debugger) při vzájemné komunikaci AAPS a pumpy, je nutné ukončit RUFFY v systémových prostředcích. Po restartování AAPS se RUFFY znovu spustí. Restartování telefonu je většinou nejjednodušší cesta, pokud nejde aplikace ukončit prostřednictvím systému.
- Jestliže probíhá komunikace AAPS s pumpou (na pumpě je zobrazeno logo Bluetooth), nemačkejte žádná tlačítka na pumpě.