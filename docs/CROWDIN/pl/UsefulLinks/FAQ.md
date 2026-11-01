# FAQ dla osób korzystających z pętli

Jak dodać pytania do FAQ: postępuj zgodnie z tymi [instrukcjami](../SupportingAaps/HowToEditTheDocs.md)

## Ogólne

### Czy mogę po prostu pobrać plik instalacyjny AAPS?

Nie. Nie ma pliku APK AAPS do pobrania. Musisz go [zbudować](../SettingUpAaps/BuildingAaps.md) sam. Oto powód:

AAPS służy do sterowania pompą i podawania insuliny. Zgodnie z obecnymi przepisami w Europie wszystkie systemy z klasy IIa lub IIb są wyrobami medycznymi, które wymagają zatwierdzenia (oznakowania CE), a to wymaga wielu badań i zatwierdzeń. Rozpowszechnianie niezatwierdzonego urządzenia jest nielegalne. Podobne przepisy istnieją w innych częściach świata.

Te przepisy dotyczą nie tylko sprzedaży (czyli otrzymywania pieniędzy za coś), ale każdej formy dystrybucji (nawet oddawania za darmo). Zbudowanie urządzenia medycznego dla siebie jest jedynym sposobem na korzystanie z aplikacji zgodnie z tymi przepisami.

Właśnie dlatego pliki APK nie są dostępne.

(FAQ-how-to-begin)=

### Jak zacząć?

Zacznij od strony [Przygotowanie do rozpoczęcia pracy z AAPS](../Getting-Started/PreparingForAaps.md): dokładniej przeprowadzi Cię przez wszystko, co opisano poniżej.

Po pierwsze, musisz **zdobyć sprzęt, który działa z pętlą**:

* [obsługiwaną pompę insulinową](../Getting-Started/CompatiblePumps.md), 
* [smartfon z Androidem](../Getting-Started/Phones.md) (Apple iOS nie jest obsługiwany przez AAPS – możesz sprawdzić [iOS Loop](https://loopkit.github.io/loopdocs/)) i
* [system ciągłego monitorowania glukozy (CGM)](../Getting-Started/CompatiblesCgms.md). 

Po drugie, musisz **skonfigurować oprogramowanie**: [AAPS](../SettingUpAaps/BuildingAaps.md), [źródło danych CGM/FGM](../Getting-Started/CompatiblesCgms.md) oraz [serwer raportów](../SettingUpAaps/SettingUpTheReportingServer.md).

Po trzecie, musisz poznać i **zrozumieć projekt referencyjny OpenAPS, aby sprawdzić swoje ustawienia leczenia**. Podstawową zasadą zamkniętej pętli jest to, że Twoja [dawka bazowa i współczynnik insulina/węglowodany (IC)](../SettingUpAaps/YourAapsProfile.md) są dobrze ustawione. Wszystkie zalecenia zakładają, że Twoja baza jest dobrze ustawiona, a wzrosty lub spadki glikemii, które widzisz, mają inne przyczyny i wymagają tylko jednorazowych zmian (wysiłek, stres itp.). Zmiany, które zamknięta pętla może wprowadzić, są ze względów bezpieczeństwa ograniczone (zobacz maksymalną dozwoloną tymczasową dawkę bazową w [OpenAPS Reference Design](https://openaps.org/reference-design/)). Dlatego nie chcesz marnować dozwolonej dawki na korygowanie źle ustawionej bazy. Jeśli na przykład przed posiłkiem często masz niską bazę tymczasową, to prawdopodobnie Twoja baza wymaga zmiany. Możesz użyć [Autotune](#autotune-how-autotune-calculates-adjustments), aby na podstawie dużej ilości danych sprawdzić, czy i jak trzeba zmienić bazę i/lub współczynnik wrażliwości na insulinę (ISF), a także czy trzeba zmienić współczynnik insulina/węglowodany (IC). Możesz też przetestować i ustawić bazę [tradycyjnym sposobem](https://integrateddiabetes.com/basal-testing/).

### Jakie są praktyczne aspekty korzystania z pętli?

#### Ochrona hasłem

Jeśli nie chcesz, aby Twoje ustawienia można było łatwo zmienić, możesz je chronić hasłem, kodem PIN lub biometrią telefonu (odcisk palca, twarz). Otwórz **Ustawienia** > **Ochrona aplikacji** > **Ochrona ustawień** i wybierz rodzaj ochrony. W tym samym miejscu możesz też chronić całą aplikację lub tylko bolusy. Szczegóły znajdziesz w części [Ochrona ustawień](#Preferences-settings-protection).

#### Smartwatche z Android Wear

Jeśli używasz aplikacji AAPS na zegarku do podawania bolusów lub zmiany ustawień, każde polecenie musi zostać potwierdzone na zegarku: po wysłaniu zegarek pokazuje podsumowanie z przyciskiem **POTWIERDŹ**. Zobacz [Obsługa AAPS ze smartwatcha z Wear OS](../RemoteFeatures/RemoteControlWearOS.md).

(FAQ-disconnect-pump)=

#### Odłącz pompę

Jeśli zdejmujesz pompę na czas prysznica, kąpieli, pływania, sportu lub innych aktywności, MUSISZ poinformować AAPS, że insulina nie jest podawana, aby IOB było poprawne.

Pompę możesz odłączyć za pomocą [ikony pętli](#AapsScreens-loop-status) na ekranie głównym AAPS: naciśnij ją i wybierz **Odłącz pompę** na potrzebny czas. Jeśli aktywność trwa dłużej niż planowano, naciśnij ikonę ponownie i wybierz nowy czas: nie musisz najpierw podłączać pompy z powrotem. Jak uniknąć braku insuliny przy dłuższym odłączeniu, przeczytasz w części [Odłączanie pompy na czas prysznica lub aktywności](#pumps-cannulas-disconnecting).

#### Zalecenia oparte nie tylko na jednym odczycie z CGM

Dla bezpieczeństwa zalecenia nie są oparte na jednym odczycie z CGM, ale na średniej zmianie (delta). Dlatego, jeśli brakuje kilku odczytów, po powrocie danych może minąć trochę czasu, zanim AAPS znowu zacznie działać w pętli.

#### Dodatkowe materiały do czytania

Istnieje kilka blogów z dobrymi radami, które pomogą ci zrozumieć praktyczne aspekty korzystania z pętli. Niektóre z nich nie są już dostępne online: linki poniżej oznaczone „kopia archiwalna” otwierają zapisaną kopię w Internet Archive.

    * [Dostrajanie ustawień](https://web.archive.org/web/20171029031305/http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM (kopia archiwalna)
    * [Dlaczego DIA ma znaczenie](https://web.archive.org/web/20231130035027/http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM (kopia archiwalna)
    * [Ograniczanie wzrostów glikemii po posiłkach](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
    * [Hormony i Autosens](https://web.archive.org/web/20170902081839/http://seemycgm.com/2017/06/06/hormones-2/) See my CGM (kopia archiwalna)
    

(what-emergency-equipment-is-recommended-to-take-with-me)= (FAQ-emergency-equipment)=

### Jaki sprzęt awaryjny warto mieć przy sobie?

Musisz mieć przy sobie ten sam sprzęt awaryjny, co każda inna osoba z cukrzycą typu 1 leczona pompą insulinową. Korzystając z pętli AAPS, zdecydowanie zalecamy mieć przy sobie lub w pobliżu dodatkowo:

* Powerbank i kable do ładowania smartfona, zegarka i (jeśli trzeba) czytnika BT lub urządzenia Link
* Baterie do pompy
* Dostęp do kopii zapasowych, zarówno w telefonie, jak i w chmurze (np. Dysk Google, Dropbox), aby móc ponownie skonfigurować AAPS na innym telefonie (zobacz [Tworzenie i przywracanie kopii zapasowych](../Maintenance/ExportImportSettings.md)): 
  * aktualny plik [APK](../SettingUpAaps/BuildingAaps.md) AAPS i innych aplikacji, których używasz (np. xDrip, Juggluco, BYODA).
  * plik magazynu kluczy (keystore) z budowania APK i jego hasło,
  * najnowsze pliki eksportu ustawień z AAPS i innych aplikacji,
  * hasło główne **AAPS**: bez niego nie zaimportujesz pliku ustawień.

(FAQ-organize-backups)=

#### Jak przechowywać kopie zapasowe?

Eksportuj ustawienia bardzo regularnie: po każdej wymianie poda lub zbiornika, po zmianie profilu, po zaliczeniu zadania, po zmianie pompy… Nawet jeśli nic się nie zmienia, eksportuj raz w miesiącu. Przechowuj kilka starszych plików eksportu.

**AAPS** może zrobić to za Ciebie: potrafi automatycznie eksportować ustawienia (na przykład za pomocą [Automatyzacji](#ExportImportSettings-Automating-Settings-Export) po każdej wymianie poda) i zapisywać eksport bezpośrednio w folderze w chmurze (Dysk Google). Zobacz [Tworzenie i przywracanie kopii zapasowych](../Maintenance/ExportImportSettings.md).

### Jak bezpiecznie i pewnie przymocować CGM/FGM?

Możesz go okleić plastrem. Dostępne są gotowe, perforowane plastry mocujące („overpatch”) do popularnych systemów CGM (szukaj w Google, na eBay lub Amazon). Niektórzy użytkownicy pętli używają tańszej zwykłej taśmy kinezjologicznej lub taśmy rocktape.

Możesz go przymocować. Możesz też kupić opaski na ramię, które przytrzymują CGM/FGM (szukaj w Google, na eBay lub Amazon).

## Algorytm APS

### Dlaczego OpenAPS AMA pokazuje „dia: 3”, chociaż w moim profilu jest inny DIA?

Gdy w **Konfiguracja** > **APS** wybrany jest **OpenAPS AMA**, **Otwórz wtyczkę** pokazuje dane wysyłane do algorytmu. W sekcji **Profil** wartość `dia` wynosi zawsze 3.0 lub mniej:

![Ekran wtyczki OpenAPS AMA z dia 3.0 w danych profilu](../images/screens/openaps_ama_plugin.png)

W AMA parametr DIA tak naprawdę nie oznacza „czasu działania insuliny”. Jest to parametr, który kiedyś był powiązany z DIA. Teraz oznacza on „w jakim czasie korekta powinna się zakończyć”. Nie ma on nic wspólnego z obliczaniem IOB. W OpenAPS SMB ten parametr nie jest już potrzebny.

## Inne ustawienia

### Ustawienia Nightscout

(FAQ-nsclient-blocked)=

#### AAPSClient (lub AAPS) nie wysyła danych: „Zablokowane przez…”. Co mogę zrobić?

Status NSClient pokazuje, dlaczego dane nie są wysyłane:

* **Zablokowane przez opcje połączenia z internetem**: ustawienia połączenia nie pozwalają na obecne połączenie. Na przykład używasz danych komórkowych, a dozwolone jest tylko Wi-Fi, albo nie jesteś połączony z żadną z dozwolonych sieci Wi-Fi (SSID).
* **Zablokowane przez opcje ładowania**: ustawienia połączenia pozwalają na synchronizację tylko podczas ładowania telefonu (lub tylko na baterii), a teraz tak nie jest.
* **Brak połączenia**: telefon nie ma połączenia z internetem.

Sprawdź [ustawienia połączenia NSClient](#Preferences-nsclient): **Używaj danych komórkowych**, **Użyj na roamingu**, **Używaj WiFi**, **WiFi SSID**, **Synchronizuj przy pracy na baterii** i **Synchronizuj podczas ładowania**.

### Ustawienia CGM

(FAQ-advanced-filtering)=

#### Dlaczego AAPS pokazuje komunikat 'SMB zawsze i po węglow. wyłączone z uwagi na brak źródła BG z zaawansowanym filtrowaniem'?

Opcji **Zawsze włącz SMB** i **Włącz SMB po węglowodanach** można używać tylko z [zaufanym źródłem danych BG](#GettingStarted-TrustedBGSource): sensorem i aplikacją CGM, które mogą przekazać **AAPS**, z jakiego sensora pochodzą odczyty. Przy każdym innym źródle BG **AAPS** wyłącza te dwie opcje i pokazuje ten komunikat. Sprawdź listę zaufanych źródeł i jeśli Twój sensor jest na liście, upewnij się, że używasz jednej z podanych dla niego aplikacji CGM. Zobacz też [Wygładzanie danych dotyczących poziomu glukozy we krwi](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Pompa

#### Baterie

Korzystanie z pętli może szybciej rozładowywać baterię pompy niż zwykłe używanie, ponieważ system komunikuje się przez Bluetooth dużo częściej niż osoba obsługująca pompę ręcznie. Najlepiej wymienić baterię przy 25%, ponieważ wtedy komunikacja z pompą staje się trudna. Możesz ustawić alarmy ostrzegające o baterii pompy za pomocą zmiennej PUMP_WARN_BATT_P w Twojej stronie Nightscout. Sposoby na wydłużenie czasu pracy baterii:

* skróć czas, przez jaki ekran LCD pozostaje włączony (w menu ustawień pompy)
* skróć czas, przez jaki pozostaje włączone podświetlenie (w menu ustawień pompy)
* ustaw powiadomienia na sygnał dźwiękowy zamiast wibracji (w menu ustawień pompy)
* naciskaj przyciski na pompie tylko przy wymianie zbiornika, a całą historię, poziom baterii i ilość insuliny w zbiorniku sprawdzaj w AAPS.
* W niektórych telefonach aplikacja AAPS może być często zamykana, aby oszczędzać energię lub zwolnić pamięć RAM. Gdy AAPS uruchamia się ponownie, przy każdym starcie łączy się z pompą przez Bluetooth i ponownie odczytuje aktualną dawkę bazową i historię bolusów. To zużywa baterię. Aby sprawdzić, czy tak się dzieje, włącz **Odnotuj uruchomienie aplikacji** w **Ustawieniach zaawansowanych** NSClient: Nightscout otrzyma zdarzenie przy każdym ponownym uruchomieniu AAPS, co ułatwia śledzenie problemu. Aby to ograniczyć, wyłącz optymalizację baterii dla AAPS, żeby telefon przestał go zamykać: zobacz [oszczędzanie baterii](#FAQ-battery-savings) poniżej.
* wyczyść styki baterii gazikiem z alkoholem, aby usunąć resztki wosku lub smaru z produkcji.
* w [pompach Dana R/RS](../CompatiblePumps/DanaRS-Insulin-Pump.md) procedura uruchamiania celowo pobiera z baterii duży prąd, aby przerwać warstwę pasywacyjną (chroni ona przed utratą energii podczas przechowywania), ale nie zawsze udaje się to w 100%. Wyjmij i włóż baterię 2–3 razy, aż na ekranie pokaże się 100%, albo przed włożeniem baterii użyj klucza do baterii, aby na ułamek sekundy zewrzeć oba jej bieguny.
* zobacz też więcej wskazówek dla [poszczególnych typów baterii](#Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)

#### Wymiana zbiorników i kaniul

Zbiornik trzeba wymienić bezpośrednio w pompie, a następnie zapisać wymianę w **AAPS**. Postępuj zgodnie z [instrukcją wymiany zbiornika i kaniuli](#pumps-cannulas-changing-reservoir-and-cannula) krok po kroku.

### Tapeta

Tapetę AAPS na telefon znajdziesz na [stronie o telefonach](#Phones-phone-wallpaper).

### Codzienne używanie

Wiele z poniższych sytuacji możesz raz przygotować jako [scenę](#scenes): zestaw ustawień, który jednym dotknięciem zmienia profil, cel tymczasowy i inne ustawienia. **AAPS** ma gotowe szablony, na przykład *Ćwiczenia*, *Sen*, *Alkohol* lub *Kąpiel*.

#### Higiena

(what-to-do-when-taking-a-shower-or-bath)=

##### Co zrobić, gdy bierzesz prysznic lub kąpiel?

Możesz zdjąć pompę na czas prysznica lub kąpieli. Przez ten krótki czas możesz jej nie potrzebować, ale musisz powiedzieć AAPS, że pompa jest odłączona, aby obliczenia IOB były poprawne. Zobacz [opis powyżej](#FAQ-disconnect-pump). Szablon [sceny](#scenes) *Kąpiel* zrobi to za Ciebie.

#### Praca

W zależności od Twojej pracy możesz chcieć używać innych ustawień leczenia w dni robocze. Jako użytkownik pętli rozważ [zmianę profilu](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) na typowy dzień pracy. Na przykład możesz przełączyć się na profil powyżej 100%, jeśli masz mało ruchu w pracy (np. siedzisz przy biurku), albo poniżej 100%, jeśli jesteś aktywny i cały dzień na nogach. You could also consider a high or low temporary target or a [time shift of your profile](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) when working much earlier or later than regular, or if you work different shifts. Możesz też utworzyć drugi profil (np. „dom” i „dzień pracy”) i codziennie zmieniać profil na ten, którego potrzebujesz, albo zapisać ustawienia na dzień pracy jako [scenę](#scenes).

### Czas wolny

(FAQ-sports)=

#### Sport

Musisz zmienić swoje dawne nawyki sportowe z czasów przed pętlą. Jeśli po prostu zjesz jedną lub więcej porcji węglowodanów na sport, jak wcześniej, zamknięta pętla je rozpozna i odpowiednio skoryguje.

W ten sposób miałbyś więcej aktywnych węglowodanów, ale jednocześnie pętla działałaby przeciwnie i podawała insulinę.

Korzystając z pętli, wypróbuj te kroki:

* Make a [profile switch](#ProfileSwitch-change-percentage) below 100%: tap the profile name on the main screen, tap the round **▶** button, then set **Percentage** and **Duration**.
* Ustaw [cel tymczasowy Ćwiczenia](#TempTargets-activity-temp-target) powyżej Twojego zwykłego celu. Przy procencie poniżej 100% i ustawionym czasie trwania ten sam ekran **Aktywuj** pokazuje przełącznik **Cel tymczasowy (TT) / Aktywność**, który uruchamia obie rzeczy jednocześnie.
* Jeśli używasz SMB, upewnij się, że opcje [„Włącz SMB z wysokim tymczasowym poziomem docelowym”](#Open-APS-features-enable-smb-with-high-temp-targets) i [„Zawsze włącz SMB”](#Open-APS-features-enable-smb-always) są wyłączone.

Ważne jest przygotowanie przed wysiłkiem i działania po nim. Wprowadź zmiany odpowiednio wcześnie przed sportem i weź pod uwagę efekt uzupełniania glikogenu w mięśniach.

Szablony [scen](#scenes) *Ćwiczenia* i *Noc po treningu* łączą te ustawienia, więc możesz je uruchomić jednym dotknięciem. Jeśli regularnie uprawiasz sport o tej samej porze (np. zajęcia na siłowni), możesz użyć [automatyzacji](../DailyLifeWithAaps/Automations.md), aby uruchomić zmianę profilu i TT albo scenę. Można też użyć automatyzacji opartej na lokalizacji, ale wtedy trudniej jest przygotować się wcześniej.

Procent zmiany profilu, wartość celu tymczasowego dla aktywności i najlepszy czas na zmiany są indywidualne. Szukając właściwej wartości dla siebie, zacznij ostrożnie (od niższego procentu i wyższego TT).

#### Seks

Możesz zdjąć pompę, aby być „wolnym”, ale musisz powiedzieć o tym AAPS, aby obliczenia IOB były poprawne. Zobacz [opis powyżej](#FAQ-disconnect-pump).

#### Picie alkoholu

Picie alkoholu w trybie zamkniętej pętli jest ryzykowne, ponieważ algorytm nie potrafi poprawnie przewidzieć glikemii pod wpływem alkoholu. Musisz wypracować własny sposób postępowania, korzystając z następujących funkcji AAPS:

* Wyłączenie trybu zamkniętej pętli i ręczne leczenie cukrzycy albo
* setting high temp targets and deactivating UAM to avoid the loop increasing IOB due to an unannounced meal or
* wykonaj [zmianę profilu](#ProfileSwitch-change-percentage) na wyraźnie mniej niż 100% 

Szablon [sceny](#scenes) *Alkohol* to punkt wyjścia, który możesz dopasować do własnego sposobu postępowania.

Gdy pijesz alkohol, musisz cały czas obserwować CGM, aby samodzielnie zapobiec hipoglikemii, jedząc węglowodany.

#### Sen

##### Jak korzystać z pętli w nocy bez promieniowania sieci komórkowej i Wi-Fi?

Wiele osób włącza w nocy tryb samolotowy w telefonie. Jeśli chcesz, aby pętla wspierała Cię podczas snu, postępuj w ten sposób (działa to tylko wtedy, gdy aplikacja CGM działa na tym samym telefonie co AAPS, np. xDrip, Juggluco lub BYODA; NIE zadziała, jeśli odczyty BG dostajesz przez Nightscout):

1. Włącz tryb samolotowy w swoim telefonie.
2. Poczekaj, aż tryb samolotowy zostanie aktywowany.
3. Włącz Bluetooth.

Nie odbierasz wtedy połączeń i nie masz dostępu do internetu. Ale pętla nadal działa.

Niektórzy zauważyli problemy z lokalnym przesyłaniem danych (AAPS nie otrzymuje wartości BG z xDrip), gdy telefon jest w trybie samolotowym. W xDrip przejdź do Settings > Inter-app settings > Identify receiver i wpisz `info.nightscout.androidaps`.

![xDrip – Basic Inter-app Settings – Identify receiver](../images/xDrip_InterApp_NS.png)

Jeśli w nocy chcesz mieć inne ustawienia (na przykład wyższy cel), dobrym punktem wyjścia jest szablon [sceny](#scenes) *Sen*.

#### Podróże

##### Jak sobie radzić ze zmianą strefy czasowej?

Przy pompach DanaR i DanaR w wersji koreańskiej nie musisz nic robić. Więcej informacji o innych pompach znajdziesz na stronie [Zmiana strefy czasowej i czas letni](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

### Tematy medyczne

#### Hospitalizacja

Jeśli chcesz przekazać swoim lekarzom informacje o AAPS i pętli DIY, możesz wydrukować [przewodnik po AAPS dla lekarzy](../UsefulLinks/ClinicianGuideToAaps.md).

#### Wizyta u endokrynologa

##### Raportowanie

Możesz pokazać swoje raporty z Nightscout (https://YOUR-NS-SITE.com/report) albo sprawdzić [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).

## Częste pytania na Discordzie i odpowiedzi na nie...

### Mojego problemu nie ma na tej liście.

Zobacz, [gdzie uzyskać pomoc](../GettingHelp/WhereCanIGetHelp.md). Jeśli sam znajdziesz rozwiązanie, **przypomnij nam, żeby dodać je do tej listy!**

### Budowanie i instalacja

(FAQ-build-errors)=

#### Mam problemy lub błędy przy budowaniu aplikacji.

Sprawdź stronę rozwiązywania problemów dla sposobu, w jaki budujesz **AAPS** (zobacz [Budowanie AAPS](../SettingUpAaps/BuildingAaps.md)):

* budowanie w przeglądarce: [Budowanie w przeglądarce: rozwiązywanie problemów](#aaps-ci-troubleshooting),
* budowanie w Android Studio: [Rozwiązywanie problemów z Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md).

(FAQ-build-error-file-name-too-long)=

#### Błąd budowania: za długa nazwa pliku

Ten błąd może wystąpić przy budowaniu w Android Studio: budowanie zatrzymuje się z błędem, że nazwa pliku jest za długa. Możliwe rozwiązania: Przenieś pliki źródłowe do katalogu bliżej katalogu głównego dysku (np. „C:\src\AndroidAPS”).

W Android Studio: Upewnij się, że „Gradle” zakończył synchronizację i indeksowanie po otwarciu projektu i pobraniu zmian z GitHub. Wykonaj Build->Clean Project przed Rebuild Project. Wykonaj File->Invalidate Caches i uruchom ponownie Android Studio.

(FAQ-running-dev-version)=

#### Ostrzeżenie: działa wersja rozwojowa (dev). Zamknięta pętla jest wyłączona

**AAPS** pokazuje ten komunikat, gdy używasz wersji rozwojowej (dev) bez trybu inżynierskiego: w wersji dev zamknięta pętla działa tylko w trybie inżynierskim.

Wersja dev służy do testów, a nie do codziennego korzystania z pętli: zanim pójdziesz dalej, przeczytaj stronę [Gałąź rozwojowa (dev)](../AdvancedOptions/DevBranch.md).

Aby włączyć tryb inżynierski:

1. Umieść plik o nazwie `engineering_mode` w podfolderze `extra` katalogu AAPS (folderu wybranego w kreatorze konfiguracji, zwykle `AAPS/extra`). Wystarczy dowolny plik, jeśli ma poprawną nazwę.
2. Uruchom ponownie **AAPS**, aby znalazł ten plik.

Podpowiedź: zrób kopię istniejącego pliku logów i zmień jej nazwę na „engineering_mode” (uwaga: bez rozszerzenia pliku!).

### Zadania

#### Utknąłem na jednym z zadań i potrzebuję pomocy.

Najpierw przeczytaj stronę [Ukończenie zadań](../SettingUpAaps/CompletingTheObjectives.md). Jeśli nadal nie możesz przejść dalej, zrób zrzut ekranu z pytaniem i odpowiedziami i opublikuj go na kanale AAPS na Discordzie. Nie zapomnij napisać, które opcje wybierasz (lub nie) i dlaczego. Dostaniesz podpowiedzi i pomoc, ale odpowiedzi musisz znaleźć sam.

### Ustawienia, hasła i kopie zapasowe

(FAQ-reset-master-password)=

#### Jak zresetować hasło główne?

Jeśli zapomnisz hasła głównego, możesz je zresetować na numer seryjny pompy:

1. Utwórz pusty plik o nazwie `PasswordReset` (bez rozszerzenia) w podfolderze `extra` katalogu AAPS (zwykle `AAPS/extra`).
2. Uruchom ponownie **AAPS**. Pompa musi być połączona: **AAPS** pokazuje „Oczekiwanie na pompę…” i musi odczytać numer seryjny pompy w ciągu 30 sekund.
3. **AAPS** pokazuje „Hasło ustawione!”: Twoje hasło główne to teraz **numer seryjny pompy**. Plik `PasswordReset` zostanie usunięty automatycznie.
4. Otwórz **Ustawienia** > **Ochrona aplikacji** > **Hasło główne** i ustaw nowe hasło.

Jeśli AAPS nie połączy się z pompą na czas, nic się nie zmieni: sprawdź połączenie z pompą i spróbuj ponownie.

Resetowane jest tylko hasło główne. Hasło lub PIN do ustawień, aplikacji lub bolusa nie są resetowane, ale zawsze możesz zamiast nich użyć hasła głównego.

    {admonition} Stare pliki ustawień
    :class: warning
    Pliki ustawień wyeksportowane ze starym hasłem głównym można zaimportować tylko z tym starym hasłem.

(FAQ-where-are-settings-files)=

#### Gdzie znajdę pliki ustawień?

Pliki ustawień są zapisywane w podfolderze `preferences` katalogu AAPS wybranego w [kreatorze konfiguracji](#SetupWizard-StoragePermission) (na przykład `/internal storage/AAPS/preferences`). Jeśli skonfigurujesz folder w chmurze (Dysk Google), eksporty mogą być zapisywane także tam. Zobacz [Tworzenie i przywracanie kopii zapasowych](../Maintenance/ExportImportSettings.md).

OSTRZEŻENIE: nie zgub hasła, ponieważ bez niego nie zaimportujesz zaszyfrowanego pliku ustawień!

(FAQ-import-settings-earlier-versions)=

#### Jak zaimportować ustawienia z wcześniejszych wersji AAPS do AAPS v3 lub v4?

W AAPS v3 lub v4 możesz zaimportować tylko ustawienia wyeksportowane w AAPS v2.8x lub nowszym. Jeśli używałeś wersji AAPS starszej niż v2.8x albo musisz użyć eksportu ustawień starszego niż v2.8x, najpierw zainstaluj AAPS v2.8. Zaimportuj starsze ustawienia z v2.x do v2.8. Gdy sprawdzisz, że wszystko jest w porządku, możesz wyeksportować ustawienia z v2.8. Zainstaluj aktualną wersję AAPS i zaimportuj do niej ustawienia z v2.8.

Jeśli do zbudowania starej i nowej wersji użyjesz tego samego klucza, nie musisz nawet importować ustawień. Możesz zainstalować nową wersję na starszej.

Dodano kilka nowych zadań. Musisz je zaliczyć.

(FAQ-delete-treatments)=

#### Gdzie mogę usunąć wpisy leczenia?

Otwórz **menu** (☰) i wybierz **Historia leczenia**. Przytrzymaj wpis, aby go zaznaczyć, w razie potrzeby dotknij kolejnych wpisów, a następnie dotknij ikony **kosza** i potwierdź. Zobacz [Historia leczenia](#aaps-screens-treatments).

### Problemy z telefonem i połączeniem

(FAQ-aaps-stops)=

#### AAPS zatrzymuje się codziennie mniej więcej o tej samej porze.

* W niektórych telefonach Google Play Protect może codziennie rano zamykać **AAPS**. Jeśli tak się dzieje, przejdź do opcji Google Play i wyłącz **Google Play Protect**.
* Sprawdź, czy masz aplikacje „czyszczące” (np. CCleaner itp.), i odinstaluj je.
* Wyłącz wszystkie optymalizacje baterii dla **AAPS** (zobacz [oszczędzanie baterii](#FAQ-battery-savings) poniżej).

(FAQ-battery-savings)=

#### Jak ustawić oszczędzanie baterii?

Telefon może usypiać **AAPS** i powiązane aplikacje (aplikację CGM, Bluetooth), gdy go nie używasz. **AAPS** nie może wtedy wykonywać swojej pracy, a połączenia Bluetooth z sensorem i pompą (lub RileyLink) mogą zostać zamknięte, co powoduje alarmy „pompa nieosiągalna” i błędy komunikacji.

Wyłącz optymalizację baterii dla **AAPS**, Twojej aplikacji CGM (np. xDrip) i systemowej aplikacji Bluetooth. Sposób zależy od marki i modelu telefonu oraz wersji Androida:

* zobacz [Optymalizacja baterii](#generaltroubleshooting-android-related-issues) dla telefonów Pixel, Samsung i Huawei,
* w **AAPS** otwórz **menu** (☰) > **O aplikacji** i dotknij **Nie zabij mojej aplikacji?** albo odwiedź stronę [Don't kill my app](https://dontkillmyapp.com/) dla innych marek.

Jeśli nie masz pewności, czy problem powoduje oszczędzanie baterii, możesz tymczasowo wyłączyć całe oszczędzanie baterii w telefonie: bateria będzie się szybciej rozładowywać, ale szybko zobaczysz, czy problem zniknie.

(FAQ-pump-unreachable-alerts)=

#### Alarmy „pompa nieosiągalna” kilka razy dziennie lub w nocy.

Telefon może usypiać **AAPS** lub nawet Bluetooth, przez co traci połączenie z pompą lub RileyLink (zobacz [oszczędzanie baterii](#FAQ-battery-savings) powyżej).

Możesz też zmienić, kiedy pojawia się alarm: naciśnij ikonę **Ustawienia** (koło zębate) w prawym górnym rogu ekranu głównego, a następnie wybierz **Lokalne alarmy** > **Próg niedostępności pompy** (od 30 do 300 minut). Sprawdź stronę swojej pompy: dla niektórych zalecana jest konkretna wartość, np. 120 minut dla [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md).

(FAQ-link-unresponsive)=

#### Moje urządzenie Link/pompa/pod nie odpowiada (RL/OL/EmaLink…)

With some phones, there are Bluetooth disconnects from the Links (RL/OL/EmaLink).

Some also have non responsive Links (AAPS says that they are connected but the Links can't reach or command the pump).

Najpierw spróbuj przycisku **Resetuj RileyLink** na ekranie pompy (zobacz stronę swojej pompy: [Medtronic](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump), [Omnipod Eros](#OmnipodEros-reset-rileylink-config-notes)). Jeśli to nie pomoże, najprostszy sposób, aby wszystkie te elementy znowu działały razem:

1. Wyłącz urządzenie Link.
2. Zamknij **AAPS** (**menu** (☰) > **Wyjście**).
3. Przytrzymaj ikonę **AAPS**, otwórz w Androidzie **Informacje o aplikacji**, dotknij **Wymuś zatrzymanie**, a następnie **Pamięć** > **Wyczyść pamięć podręczną** (NIE czyść pamięci/danych!).
4. Rzadko niektóre telefony wymagają w tym miejscu ponownego uruchomienia. Możesz spróbować bez ponownego uruchamiania.
5. Włącz urządzenie Link.
6. Uruchom **AAPS**.
7. Na ekranie pompy dotknij **Sparuj RileyLink** i ponownie wybierz swoje urządzenie Link.

### Zdalne sterowanie

(FAQ-aapsclient)=

#### Konfiguracja i używanie aplikacji AAPSClient do zdalnego sterowania

**AAPSClient** to osobna aplikacja, która pozwala opiekunowi zdalnie obserwować **AAPS** i sterować nim. Od **AAPS** v4 sterowanie **AAPS** z AAPSClient wymaga jednorazowego sparowania obu aplikacji. Zobacz:

* [Aplikacja AAPSClient](#aapsclient-app): instalacja, pierwsze uruchomienie i parowanie,
* [Sterowanie Master ↔ Client](#client-master-control): co można sterować i jak działa parowanie,
* [AAPSClient na smartwatchu](#remotecontrol-smartwatches).

(FAQ-hardened-mode)=

#### Leczenie wprowadzone na stronie Nightscout nie jest stosowane

To [tryb silniejszych zabezpieczeń](#client-master-control-hardened-mode). Gdy sterowanie z urządzenia opiekuna jest włączone — w Trybie uproszczonym zawsze — **AAPS** przyjmuje zmiany tylko ze sparowanych urządzeń opiekuna, a nie ze strony Nightscout ani z innych aplikacji. Wprowadzaj je zamiast tego w sparowanym **AAPSClient**.

### Alarmy i ostrzeżenia

#### Mam czerwony znak ostrzeżenia (czerwony trójkąt) / AAPS nie chce włączyć zamkniętej pętli / Pętla zostaje w LGS / Miałem żółty trójkąt

Czerwony znak ostrzeżenia przy skrócie do źródła BG to funkcja bezpieczeństwa w AAPS. Pełne wyjaśnienie znajdziesz w części [Znak ostrzeżenia BG](#aaps-screens-bg-warning-sign).

Czerwony znak ostrzeżenia przy skrócie do źródła BG na dolnym pasku nawigacji (czerwony trójkąt w starszych wersjach) oznacza, że masz zdublowane wartości BG i AAPS nie może dokładnie obliczyć zmian (delta). Zamknięta pętla zostaje przełączona w tryb **Zawieszenie przy niskiej glikemii**: nadal zmniejsza lub wstrzymuje bazę, aby chronić Cię przed niskimi wartościami, ale nie podaje insuliny korekcyjnej. Aby usunąć ostrzeżenie, musisz usunąć po jednej wartości BG z każdej zdublowanej pary. Dotknij skrótu, aby otworzyć [ekran źródła BG](#aaps-screens-bg-source): duplikat jest zaznaczony na czerwono. Przytrzymaj jeden wiersz, który chcesz usunąć, zaznacz po jednym wierszu z każdej zdublowanej pary i dotknij ikony kosza. Jeśli jest za dużo zdublowanych BG, może być konieczne wyczyszczenie baz danych AAPS. In this case, you'll also lose stats, IOB, COB, selected profile.

Gdy ostrzeżenie zniknie, AAPS nie wraca sam do trybu **Zamknięta pętla**. Naciśnij ikonę pętli na ekranie głównym i ponownie wybierz **Zamknięta pętla**.

Możliwa przyczyna problemu: xDrip i/lub NS uzupełniają brakujące dane BG (backfill).

Żółty trójkąt w starszych wersjach oznaczał nieregularne odstępy między odczytami BG (BG nie przychodzą regularnie co 5 min lub brakuje odczytów), co często zdarza się przy Libre lub po wymianie nadajnika G6. **AAPS** 4 już go nie pokazuje: przelicza wartości w tle, a pętla działa poprawnie.

### Omnipod DASH

(FAQ-move-dash-pod)=

#### Czy mogę przenieść aktywny pod DASH na inny telefon?

Stan poda jest zapisywany w eksportowanych ustawieniach, więc aktywny pod można przenieść na inny telefon: wyeksportuj ustawienia tuż przed przeniesieniem i zaimportuj je na drugim telefonie. Nie jest to oficjalnie wspierane i istnieje ryzyko utraty poda: jeśli to możliwe, spróbuj, gdy pod i tak niedługo wygaśnie.

Najpierw przeczytaj te części:

* [Export and import settings](#omnipod-dash-export-import) on the Omnipod DASH page, and [Tubeless pumps](#ExportImportSettings-tubeless-pumps): on the new phone, tick **Also replace pump settings** and use a file exported while wearing your current Pod,
* [Odrzucanie poda](#omnipod-dash-discard-pod), aby potem usunąć pod ze starego telefonu. Keep the old phone in airplane mode until the Pod is discarded, so that the two phones never talk to the Pod at the same time.