# Pompa Accu-Chek Spirit Combo

**To oprogramowanie jest częścią rozwiązania DIY (ang. do it yourself, zrób to sam) i nie jest produktem komercyjnym, lecz wymaga od Ciebie, abyś przeczytał dokumentację, uczył się i zrozumiał system - łącznie z tym, jak go używać. To nie jest coś, co będzie za Ciebie zarządzać leczeniem cukrzycy, lecz pozwala poprawić wyrównanie cukrzycy i jakość życia pod warunkiem, że chcesz poświęcić temu wymagany czas. Nie śpiesz się, daj sobie czas na naukę. Tylko Ty jesteś odpowiedzialny za to co robisz.**

## Wymagania sprzętowe

- Pompa Roche Accu-Chek Spirit Combo (dalej nazywana Combo, dowolna wersja firmware, wszystkie działają)
- Urządzenie Accu-Chek Smart-Pix lub Realtyme wraz z oprogramowaniem 360 Configuration Software do konfiguracji pompy. Oprogramowanie do konfiguracji pompy współpracuje jedynie ze starszą wersją urządzenia Smart-Pix (obudowa w kolorze srebrnym).
- Kompatybilny smartfon z systemem LineageOS 14.1 (dawniej CyanogenMod) lub Android 8.1 (Oreo), lub Android 9.0 (Pie). W przypadku systemu LineageOS należy zastosować najnowszą wersją datowaną na co najmniej czerwca 2017 r., ponieważ zmiana potrzebna do sparowania pompy Combo została wprowadzona dopiero w tym czasie. Listę kompatybilnych smartfonów można znaleźć w dokumencie [AAPS telefony](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). Należy pamiętać, że nie jest to pełna lista jednak odzwierciedla ona doświadczenia użytkowników. Zachęcamy abyście dzielili się swoimi doświadczeniami, zgłaszali problemy, a przede wszystkim polecali innym użytkownikom działające rozwiązania i współpracujące modele urządzeń.

- Pamiętaj, że chociaż Android 8.1/9.0 umożliwia poprawną komunikację z Combo, to nadal występują problemy z AAPS pracującym na telefonach z tymi wersjami Androida. Dla zaawansowanych użytkowników możliwe jest sparowanie pompy z wykorzystaniem zrootowanego telefonu i następnie przeniesienie ustawień ruffy/AAPS do telefonu docelowego, który także musi być zrootowany. Procedura ta pozwala na poszerzenie bazy dostępnych smartfonów również o te, na których nie udaje się sparować pompy bezpośrednio oraz na korzystanie z telefonów z systemem Android w wersji niższej niż 8.1. Pamiętaj jednak, że nie było to szeroko testowane: https://github.com/gregorybel/combo-pairing/blob/master/README.md

## Ograniczenia

- Bolus przedłużony i bolus wielofalowy nie są obsługiwane (zamiast tego patrz wydłużone węglowodany - [Extended Carbs](../Usage/Extended-Carbs))
- Pompa obsługuje tylko jeden schemat (profil) bazy.
- Ręczne ustawienie profilu podstawowego innego niż 1 na pompie lub podanie bolusa przedłużonego, lub wielofalowego kolidują z TBR i powodują, że pętla przechodzi w tryb niskiego zawieszenia na 6 godzin. Wynika to z faktu, że pętla nie może bezpiecznie działać w tych warunkach.
- Obecnie nie można ustawić godziny i daty zdalnie na pompie, więc zmiany na czas letni czy zimowy muszą być wykonywane ręcznie. Aby zapobiec komplikacjom związanym z brakiem synchronizacji zegarów w pompie i smartfonie (w czasie zmiany czasu z letniego na zimowy i odwrotnie) możesz wyłączyć automatyczną aktualizację zegara w telefonie w godzinach wieczornych i zmienić go rano razem z zegarem pompy, aby uniknąć alarmu w nocy.
- Obecnie obsługiwane są tylko dawki podstawowe w zakresie od 0,05 do 10 U/h. Należy brać to pod uwagę także w przypadku modyfikacji profili, np. gdy TBR wzrasta do 200%, najwyższa zaprogramowana dawka podstawowa nie może przekraczać 5 U/h, ponieważ będzie podwojona i wówczas osiągnie limit 10 U/h. Podobnie, przy zmniejszeniu do 50%, najniższa dawka podstawowa musi wynosić co najmniej 0,10 U/h.
- Jeśli pętla zażąda anulowania działającego TBR, Combo ustawi TBR na 90% lub 110% przez 15 minut. Wynika to z faktu, że anulowanie TBR powoduje alarm na pompie i wiele wibracji.
- Czasami (przeważnie co kilka dni) AAPS może nie zdołać automatycznie anulować TBR co skutkować będzie alarmem na pompie "CANCELLED alert". W takiej sytuacji należy odświeżyć stan pompy korzystając z przycisku "Odśwież" w zakładce Accu-Chek Combo w AAPS lub anulować alarm bezpośrednio na pompie (dwukrotne naciśnięcie klawisza zatwierdzania).
- Stabilność połączenia Bluetooth różni się w zależności od wykorzystywanego telefonu. W przypadku zerwania połączenia generowane jest ostrzeżenie "pompa niedostępna". Jeśli ten błąd wystąpi, upewnij się, że Bluetooth jest włączony, a następnie naciśnij przycisk Odśwież w zakładce Combo, co powinno rozwiązać problem. Jeśli nadal połączenie nie zostanie nawiązane, uruchom ponownie telefon. Gdy te metody zawiodą pozostaje jeszcze jedno wyjście - należy nacisnąć przycisk na pompie (który resetuje Bluetooth pompy), zanim pompa ponownie odbierze połączenia z telefonu. Niestety niewiele można zrobić, aby zaradzić któremukolwiek z tych problemów w tym momencie. Zatem jeśli często widzisz te błędy, jedyną opcją pozostaje wymiana telefonu, na taki z którym AndroidAPS i Combo dobrze współpracują (patrz wyżej).
- Podanie bolusa z pompy nie zawsze zostaje wykryta w odpowiednio krótkim czasie (jest to sprawdzane, gdy AAPS łączy się z pompą) - w najgorszym przypadku może to zająć do 20 minut. Bolusy na pompie są zawsze sprawdzane przed ustawieniem wysokiego TBR lub bolusem podanym przez AAPS, jednakże z powodu narzuconych ograniczeń AAPS odmówi ustawienia TBR lub podania Bolusa, jeśli te zostały wyliczone dla nieprawidłowych danych. (-> Nie podawaj bolusa z pompy! Patrz rozdział * Wykorzystanie *)
- Należy unikać ustawiania TBR bezpośrednio na pompie, ponieważ pętla zakłada przejęcie całkowitej kontroli nad TBR. Wykrycie nowego TBR na pompie może zająć do 20 minut, a efekt TBR zostanie uwzględniony dopiero od momentu wykrycia. W najgorszym więc przypadku należy liczyć się z dwudziestominutowym wpływem TBR na glikemię, który nie jest odzwierciedlony w wyliczeniach IOB. 

## Ustawienia

- Skonfiguruj pompę za pomocą oprogramowania konfiguracyjnego Accu-Chek 360. Jeśli nie masz oprogramowania, skontaktuj się z infolinią Accu-Chek. Zwykle wysyłają zarejestrowanym użytkownikom płytę CD z "oprogramowaniem konfiguracyjnym pompy 360°" i urządzeniem do połączenia przez podczerwień SmartPix USB. 
  - Ustawienia wymagane (zaznaczone na zielono na zrzutach ekranu): 
    - Ustaw/pozostaw konfigurację menu użytkownika jako "Standardowa" - pokazane zostaną tylko obsługiwane menu i czynności na pompie a ukryte te, które nie będą obsługiwane. Przykładem może być bolus rozszerzony i wielofalowy czy wiele schematów baz których użycie spowoduje znaczne ograniczenie funkcji systemu, ponieważ nie można użytkować pętli w bezpieczny sposób, gdy te funkcje i czynności zostaną uruchomione bezpośrednio z pompy.
    - Upewnij się, że *Opcje pompy insulinowej->operacje->Tekst krótkiej informacji* jest naprawdę nazywany "QUICK INFO" (bez cudzysłowów, które można znaleźć w *Ustawieniach wyświetlania/komunikacji*).
    - Ustaw Dawki podstawowe i bolus->Tymczasowa dawka podstawowa (TBR)->*Ustawienia maksymalne* na 500%
    - Wyłącz * Sygnalizowanie końca tymczasowej dawki podstawowej *
    - Ustaw TBR * Przyrost czasu trwania * do 15 min>
    - Włącz Bluetooth
  - Ustawienia zalecane (zaznaczone na niebiesko na zrzutach ekranu): 
    - Ustaw alarm niskiego poziomu insuliny w zbiorniczku zgodnie z własnymi upodobaniami
    - Skonfiguruj Bolus -> <o>Maksymalna dawka</o> odpowiednio do terapii, aby zabezpieczyć się przed błędami w oprogramowaniu
    - Podobnie skonfiguruj Bolus -> Maksymalny czas trwania (TBR) jako zabezpieczenie. Pozostaw co najmniej 3 godziny, ponieważ opcja odłączenia pompy na 3 godziny ustala 0% na 3 godziny.
    - Włącz blokadę przycisków na pompie, aby zapobiec podaniu bolusa z pompy, szczególnie kiedy pompa była używana wcześniej i masz nawyk podawania szybkiego bolusa.
    - Ustaw <o>Czas trwania wyświetlania</o> i <o>Limit czasu menu</o> na minimum (odpowiednio 5,5 s i 5 s). Dzięki temu AndroidAPS może wznowić działanie szybciej w warunkach błędu i zmniejszyć liczbę wibracji, które mogą wystąpić podczas takiego błędu.

![Screenshot of user menu settings](../images/combo/combo-menu-settings.png)

![Screenshot of TBR settings](../images/combo/combo-tbr-settings.png)

![Screenshot of bolus settings](../images/combo/combo-bolus-settings.png)

![Screenshot of insulin cartridge settings](../images/combo/combo-insulin-settings.png)

- Zainstaluj AndroidAPS zgodnie z opisem w [AndroidAPS wiki](http://wiki.AndroidAPS.org).
- Przeczytaj wiki, aby dowiedzieć się, jak skonfigurować AndroidAPS.
- Wybierz wtyczkę "pompa wirtualna" w AndroidAPS, a nie wtyczkę Combo w tym miejscu, aby uniknąć próby jednoczesnego dostępu do ruffy podczas procesu parowania.
- Przejdź na stronę [ http://ruffy.AndroidAPS.org ](http://ruffy.AndroidAPS.org) i sklonuj ruffy poprzez git.
- Zainstaluj ruffy i użyj go do parowania pompy. Przed pierwszą próbą parowania zalecany jest restart smartfona. Jeśli po wielu próbach nadal nie udaje się sparować pompy i telefonu, przejdź do gałęzi `parowanie`, sparuj pompę, a następnie przełącz na pierwotną gałąź. Note that the pairing processing is somewhat fragile (but only has to be done once) and may need a few attempts; quickly acknowledge prompts and when starting over, remove the pump device from the Bluetooth settings beforehand. Another option to try is to go to the Bluetooth menu after initiating the pairing process (this keeps the phone's Bluetooth discoverable as long as the menu is displayed) and switch back to ruffy after confirming the pairing on the pump, when the pump displays the authorization code. If you're unsuccessful in pairing the pump (say after 10 attempts), try waiting up to 10s before confirming the pairing on the pump (when the name of the phone is displayed on the pump). If you have configured the menu timeout to be 5s above, you need to increase it again. Some users reported they needed to do this. Lastly, consider moving from one room to another in case of local radio interference. At least one user immediately overcame pairing problems by simply changing rooms.
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