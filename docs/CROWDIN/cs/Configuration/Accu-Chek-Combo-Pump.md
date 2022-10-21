# Pumpa Accu-Chek Combo

**Tento software je součástí DIY řešení a není to produkt, ale vyžaduje, abyste si přečetli dokumentaci, pochopili celý systém a naučili se ho používat. Není to něco, co za Vás udělá veškerý management diabetu, ale pomůže Vám k lepším výsledkům a kvalitě života, pokud investujete čas k tomu potřebný. Zbytečně nespěchejte, nechejte si na učení dostatek času. Pouze Vy jste zodpovědní za to, jak ze systémem zacházíte.**

## Hardwarové požadavky

- Roche Accu-Chek Combo (jakýkoliv firmware, funguje se všemi)
- Zařízení Smartpix nebo Realtyme spolu s programem 360 Configuration Software pro úpravu parametrů pumpy. (Roche posílá zařízení Smartpix a konfigurační software zdarma svým zákazníkům na vyžádání.)
- A compatible phone: An Android phone with a phone running LineageOS 14.1 (formerly CyanogenMod) or at least Android 8.1 (Oreo). As of AndroidAPS 3.0 Android 9 is mandatory. See [release notes](https://androidaps.readthedocs.io/en/latest/Installing-AndroidAPS/Releasenotes.html#android-version-and-aaps-version) for details.
- With LineageOS 14.1 it has to be a recent version from at least June 2017 since the change needed to pair the Combo pump was only introduced at that time. 
- Seznam telefonů lze nalézt v dokumentu [AAPS telefony](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit).
- Prosím uvědomte si, že to není úplný seznam a odráží osobní uživatelské zkušenosti. Máte možnost doplnit své vlastní zkušenosti a tím pomoci dalším uživatelům.
- Mějte na paměti, že ačkoliv Android 8.1 umožňuje komunikaci s Combem, stále na Androidu 8.1 existují problémy s AAPS.
- Pokročilí uživatelé mohou provést párování na rootovaném telefonu a přenést jej do jiného rootovaného telefonu pro použití s ruffy/AAPS. To umožňuje používat telefony s Android < 8.1, ale nebylo to široce testováno: https://github.com/gregorybel/combo-pairing/blob/master/README.md

## Omezení

- Rozložené bolusy a kombinované bolusy nejsou podporovány (podívejte se na [Extended Carbs](../Usage/Extended-Carbs.rst)).
- Je podporován pouze jeden bazální profil.
- Setting a basal profile other than 1 on the pump or delivering extended boluses or multiwave boluses from the pump interferes with TBRs and forces the loop into low-suspend only mode for 6 hours as the the loop can't run safely under these conditions.
- It's currently not possible to set the time and date on the pump, so [daylight saving time changes](../Usage/Timezone-traveling#accu-chek-combo) have to be performed manually (you may disable the phone's automatic clock update in the evening and change it back in the morning together with the pump clock to avoid an alarm during the night).
- Aktuální rozsah bazálních dávek je od 0,05 do 10 U/h. This also applies when modifying a profile, e.g. when increasing to 200%, the highest basal rate must not exceed 5 U/h since it will be doubled. Obdobně platí, že při snížení na 50% musí být nejnižší bazální dávka 0,10 U/h.
- If the loop requests a running TBR to be cancelled the Combo will set a TBR of 90% or 110% for 15 minutes instead. This is because cancelling a TBR causes an alert on the pump which causes a lot of vibrations.
- Occasionally (every couple of days or so) AAPS might fail to automatically cancel a TBR CANCELLED alert, which the user then needs to deal with (by pressing the refresh button in AAPS to transfer the warning to AAPS or confirming the alert on the pump).
- Bluetooth connection stability varies with different phones, causing "pump unreachable" alerts, where no connection to the pump is established anymore. 
- If that error occurs, make sure Bluetooth is enabled, press the Refresh button in the Combo tab to see if this was caused by an intermitted issue and if still no connection is established, reboot the phone which should usually fix this. 
- There is another issue were a restart doesn't help but a button on the pump must be pressed (which resets the pump's Bluetooth), before the pump accepts connections from the phone again. 
- There is very little that can be done to remedy either of those issues at this point. So if you see those errors frequently your only option at this time is to get another phone that's known to work well with AndroidAPS and the Combo (see above).
- Vydání bolusu z pumpy nebude vždy detekováno okamžitě (zaznamenává se při každém spojení s pumpou), v nejhorším případě to může trvat 20 minut. 
- Bolusy na pumpě jsou kontrolovány před každým nastavením vyššího dočasného bazálu nebo bolusu pomocí AAPS, ale z důvodu omezení AAPS odmítne zapsat dočasný bazál / bolus, protože byl vypočítán podle falešných předpokladů. (-> nepodávejte bolus z pumpy! See chapter [Usage](#usage) below)
- Vyhněte se tomu, abyste nastavovali dočasný bazál na pumpě, smyčka předpokládá, že dočasné bazály řídí ona. Zaznamenání nového dočasného bazálu na pumpě může trvat až 20 minut a délka dočasného bazálu bude vypočítána pouze od momentu, kdy je načtena. Což v nejhorším případě může být 20 minut, které nebudou započítány do IOB. 

## Nastavení

- Nastavte pumpu pomocí 360 Config Software. 
- Pokud tento software nemáte, kontaktujte svého obchodního zástupce Roche nebo zákaznickou linku. Registrovaným uživatelům poskytují software a také hardwarovou čtečku SmartPix pro komunikaci s pumpou.
- **Required settings** (marked green in screenshots):
    
    - Set/leave the menu configuration as "Standard", this will show only the supported menus/actions on the pump and hide those which are unsupported (extended/multiwave bolus, multiple basal rates), which cause the loop functionality to be restricted when used because it's not possible to run the loop in a safe manner when used.
    - Ověřte, že *Quick Info Text* je nastaven přesně na "QUICK INFO" (bez uvozovek, nastavení najdete pod *Insulin Pump Options*).
    - Nastavte maximální velikost dočasného bazálu (TBR) *Maximum Adjustment* na 500%
    - Vypněte *Signal End of Temporary Basal Rate* - alarm na konci dočasného bazálu
    - Nastavte časový krok dočasného bazálu na 15 min
    - Zapněte Bluetooth

- **Recommended settings** (marked blue in screenshots)
    
    - Nastavte si upozornění na nízký stav zásobníku.
    - Nastavte si maximální bolus s ohledem na svou léčbu jako ochranu před chybami softwaru.
    - Podobně si nastavte maximální hodnotu dočasného bazálu jako pojistku. Allow at least 3 hours, since the option to disconnect the pump for 3 hours sets a 0% for 3 hours.
    - Aktivujte zámek tlačítek na pumpě, abyste předešli nechtěnému vydání bolusů z pumpy, when the pump was used before and quick bolusing was a habit.
    - Nastavte čas zhasnutí displeje na 5,5 s a čas opuštění menu na 5 s. This allows the AAPS to recover more quickly from error situations and reduces the amount of vibrations that can occur during such errors

![Screenshot z nastavení uživatelského menu](../images/combo/combo-menu-settings.png)

![Screenshot nastavení dočasného bazálu](../images/combo/combo-tbr-settings.png)

![Screenshot nastavení bolusu](../images/combo/combo-bolus-settings.png)

![Screenshot nastavení zásobníku](../images/combo/combo-insulin-settings.png)

- Nainstalujte AndroidAPS tak, jak je popsáno v [AndroidAPS wiki](https://androidaps.readthedocs.io/)
- Přečtěte si dokumentaci, abyste pochopili, jak nastavit AndroidAPS.
- Zvolte v konfigurátoru AndroidAPS pera jako plugin pro pumpu. V tuto chvíli nenastavujte plugin Combo, aby nedocházelo k narušování procesu párovaní.
- Clone ruffy via git from [MilosKozak/ruffy](https://github.com/MilosKozak/ruffy). At the moment, the primary branch is the `combo` branch, in case of problems you might also try the 'pairing' branch (see below).
- Build and install ruffy and use it to pair the pump. If it doesn't work after multiple attempts, switch to the `pairing` branch, pair the pump and then switch back the original branch. If the pump is already paired and can be controlled via ruffy, installing the `combo` branch is sufficient. Párovaní je v některých případech náročný proces (naštěstí se dělá pouze jednou). Může vyžadovat několik pokusů. Je potřeba rychle odpovídat na potvrzovací výzvy a často začít znovu. Když začínáte znovu, nezapomeňte odstranit párovaní z nastavení bluetooh. Jiný postup, který je možné vyzkoušet, je přejít do nastavení bluetooth ihned po začátku párovaní (to zajistí, že telefon je stále viditelný po celou dobu, co je nastavení otevřené), jakmile pumpa najde telefon, vrátit se ihned do ruffy a potvrdit párování i tam (ve chvíli, kdy pumpa zobrazí autorizační kód). Pokud se párovaní nepodaří ani po desátém pokusu, zkuste počkat 5–10 sekund, než potvrdíte na pumpě párování potom, co je zobrazen název telefonu. Pokud jste v předchozím kroku výše nastavili timeout menu na 5 s, je potřeba tuto hodnotu zvýšit. Tento postup byl u některých uživatelů úspěšný. Jedna z posledních možností při neúspěchu párovaní je možné rušení, zkuste párování v jiné místnosti, ideálně tam, kde není příliš WiFi a bluetooth zařízení. Minimálně jednomu člověku velmi pomohlo párovat mimo radiově zarušený prostor.
- Pokud použiváte AAPS s ruffy, nikdy nespouštějte a nepoužívejte ruffy přímo. Po úspěšném párovaní restartujte telefon, aby si AAPS mohl spustit ruffy na pozadí a sami už ruffy nespouštějte.
- U nikdy nepoužité pumpy je nutné před zahájením párovaní vydat aspoň jeden bolus, aby se vytvořil záznam v historii. Bez aspoň jednoho záznamu v historii je AAPS nefunkční.
- Před spuštěním Combo pluginu v AAPS ověřte, že máte správně nastavený a aktivovaný (!) profil. Ověřte dvakrát, že profil v AAPS odpovídá vašemu bazálnímu profilu. AAPS po spojení s pumpou zapíše bazální profil z AAPS do pumpy do profilu 1. Potom aktivujte Combo plugin. Stiskněte tlačítko *Obnovit* na záložce Combo, abyste zahájili komunikaci s pumpou Combo.
- Ověřte správné nastavení pumpy. Ve chvíli, kdy je pumpa ve stavu **Odpojeno**, použijte AAPS k nastavení dočasného bazálu (TBR) na 500 % po dobu 15 min a následně zkuste vydat malý bolus. Ověřte na pumpě, že dočasný bazál se nastavil na 500 % a bolus je zaznamenán v historii. AAPS také zobrazí, že obě akce (dočasný bazál a bolus) byly provedeny.

## Why pairing with the pump does not work with the app "ruffy"?

Má to několik možných důvodů. Vyzkoušejte tyto kroky:

1. Vložte ** novou nebo nabitou baterii ** do pumpy. Podívejte se na podrobnosti do návodu do části Baterie. Ujistěte se, že pumpa je velmi blízko telefonu.

![Combo by mělo být vedle telefonu](../images/Combo_next_to_Phone.png)

2. Vypněte nebo odstraňte jakékoliv jiné Bluetooth zařízení, abyste eliminovali možné rušení při párování. Jakákoliv paralelní komunikace s rozhraním Bluetooth nebo výzva k vytvoření připojení může narušit proces párování.

3. Delete already connected devices in the Bluetooth menu of the pump: **BLUETOOTH SETTINGS / CONNECTION / REMOVE** until **NO DEVICE** is shown.

4. Delete a pump already connected to the phone via Bluetooth: Under Settings / Bluetooth, remove the paired device "**SpiritCombo**"
5. Ujistěte se, že na pozadí není spuštěna smyčka aplikace AAPS. Deaktivuje smyčku v AAPS.
6. Try using the '**pairing**' branch from the [MilosKozak/ruffy](https://github.com/MilosKozak/ruffy/tree/pairing) repository to establish the connection 
7. Nyní spusťte aplikaci Ruffy v telefonu. Stiskněte tlačítko Reset and remove the old connection. Then hit **Connect!**.
8. V Bluetooth menu pumpy přejděte na ** ADD DEVICE / ADD CONNECTION**. Press *CONNECT!** 
    - The next three steps are timing-sensitive, so you might need to try different pauses/speed if pairing fails. Read the full sequence before trying it.

9. Nyní se na pumpě ukáže BT název telefonu a nabídne možnost párování. Here it is importand to wait at least 5s before you hit the select button on Pump. Jinak pumpa neodešle požadavek pro párování korektně.
    
    - Jestliže je nastaveno zhasnutí displeje na 5 s, můžete zkusit nastavit na 40 s (původní nastavení). From experiance the time between pump is showing up in phone until select phone is around 5-10s. In many other cases pairing just times out without successfully pair. Later you should set it back to 5s, to meet AAPS Combo settings and speed up connections.
    - If the pump does not show the phone as a pairing device at all, your phone's Bluetooth stack is probably not compatible with the pump. Ujistěte se, že používáte novou verzi systému **LineageOS ≥ 14.1** nebo **Android ≥ 8.1 (Oreo)**. If possible, try another smartphone. You can find a list of already successfully used smartphones under \[AAPS Phones\] (https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). 

10. Sometimes the phone asks for a (typically 4 digit) bluetooth PIN number that is not related to the 10 digit PIN later shown on the pump. Usually, ruffy will set this PIN automatically, but due to timing issues, this does not always work. If a request for a Bluetooth pairing PIN appears on the phone before any code is shown on the pump, you need to enter **}gZ='GD?gj2r|B}>** as the PIN. This is easiest done if you copy this 16 character text into the clipboard before starting the pairing sequence and just paste it in the dialog at this step. See related [Github issue](https://github.com/MilosKozak/ruffy/issues/14) for details.

11. At next the pump should show up a 10 digit security code. And Ruffy shold show a screen to enter it. So enter the code in Ruffy and you should be ready to go.
12. If pairing was not successful and you got a timeout on the pump, you will need to restart the process from scratch.
13. If you have used the 'Pairing' branch to build the ruffy app, now install the version build from the 'combo' branch on top of it. Make sure that you have used the same keys when signing the two versions of the app to be able to keep all setting and data, as they also contain the connection properties.
14. Restartujte telefon.
15. Nyní můžete restartovat AAPS smyčku.

## Používání

- Keep in mind that this is not a product, esp. na začátku potřebuje uživatel pochopit a monitorovat systém, jeho limity a jak může dojít k chybě. Je důrazně doporučováno nepoužívat tento systém, pokud ho uživatel není schopen plně pochopit.
- Přečtěte si dokumentaci k OpenAPS na https://openaps.org, abyste pochopili algoritmus smyčky, na které je systém AndroidAPS založen.
- Read the online documentation to learn about and understand AndroidAPS https://androidaps.readthedocs.io/
- Propojení combo s ruffy/aaps používá stejné rozhraní jako originální glukometr. Glukometr zrcadlí obrazovku pumpy a simuluje stisk tlačítek na pumpě. Přenos obrazovky a zpětný přenos tlačítek je to, co dělá aplikace ruffy. A `scripter` component reads the screen and automates entering boluses, TBRs etc and making sure inputs are processed correctly. AAPS then interacts with the scripter to apply loop commands and to administer boluses. This mode has some restrictions: it's comparatively slow (but well fast enough for what it is used for), and setting a TBR or giving a bolus causes the pump to vibrate.
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