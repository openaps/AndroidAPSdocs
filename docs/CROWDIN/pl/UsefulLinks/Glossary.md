# Słowniczek pojęć

**AAPS** = AndroidAPS to nazwa aplikacji na Androida.

**AAPSClient** = aplikacja do obserwowania dla opiekunów. Na telefonie obserwującego śledzi **AAPS** użytkownika przez jego stronę **Nightscout**, a po sparowaniu z telefonem z **AAPS** steruje nim zdalnie. Nie należy mylić z **NSClient**. Więcej informacji → [Wiki - „Aplikacja AAPSClient”](../RemoteFeatures/AapsClient.md) i [Sterowanie Master ↔ Client](#client-master-control).

**Aktywność** (Activity) = aktywność insuliny, która pokazuje, jak szybko spada IOB. Zobacz [Wiki - „DIA”](#Config-Builder-insulin-dia) oraz powiązany **BGI**.

**AID** = Automated Insulin Delivery (automatyczne podawanie insuliny). Termin używany w praktyce klinicznej i w badaniach dla systemu, który automatycznie dostosowuje podawanie insuliny na podstawie danych z **CGM**. **APS** i **zamknięta pętla** oznaczają to samo → zobacz też **OS-AID**.

**APS** = Artificial Pancreas System (system sztucznej trzustki) → zobacz też **AID**.

**AMA** = Advanced Meal Assist (zaawansowane wsparcie posiłków). Algorytm, który pozwala **AAPS** po bolusie posiłkowym zwiększać bazę użytkownika w bardziej agresywny sposób. Więcej informacji → [Wiki - „Advanced Meal Assist (AMA)”](#Open-APS-features-advanced-meal-assist-ama).

**Współczynnik korygujący** (Adjustment Factor) = używany przez funkcję **Dynamiczny ISF**. To wartość od 1% do 300%, którą użytkownik ustawia w menu **Ustawienia**. Działa to jako mnożnik wartości **TDD**. Zobacz [Wiki - Współczynnik korygujący DynamicISF](#dyn-isf-adjustment-factor)

**Android Auto** = system, który pokazuje niektóre funkcje smartfona z Androidem, w tym **AAPS**, na wyświetlaczu samochodu. Więcej informacji → [Wiki - „Android Auto”](../RemoteFeatures/AndroidAuto.md).

**APK** = Android Application Package (pakiet aplikacji Android). Plik instalacyjny oprogramowania. Więcej informacji → [Wiki - „Budowanie AAPS”](../SettingUpAaps/BuildingAaps.md).

**Autosens** = obliczanie wrażliwości na insulinę w oknie czasowym od 8 do 24 godzin itp. Więcej informacji → [DIABETTECH - **Autosens**](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Azure** = platforma chmurowa, na której można uruchomić aplikację webową **Nightscout** → zobacz też **Nightscout**.

**BAT** = wskaźnik stanu niskiego poziomu baterii pompy, widoczny w wierszu stanu na ekranie głównym **AAPS** → zobacz też **CAN** / **RES** / **SEN**.

**BG** = blood glucose (glikemia, poziom glukozy we krwi).

**BGI** = blood glucose impact (wpływ na glikemię). Stopień, w jakim **BG** „powinna” rosnąć lub spadać tylko na skutek aktywności insuliny.

**Źródło BG** (BG source) = ustawienie AAPS, w którym wybierasz źródło danych o glikemii. Zobacz [Wiki - Źródło BG](#Config-Builder-bg-source)

**Bridge** = mostek (bridge), dodatkowe urządzenie, które zmienia **FGM** w **CGM**.

**BR** = Basal Rate (dawka bazowa). Ilość insuliny w danym bloku czasowym, która utrzymuje **BG** na stabilnym poziomie. → zobacz też **IC** / **ISF**.

**BYODA** = Build Your Own Dexcom App (zbuduj własną aplikację Dexcom). Sposób na wygenerowanie własnej aplikacji Dexcom do odczytu danych z sensora Dexcom G6.

**CAGE** = Cannula AGE (wiek kaniuli). Jest wyświetlany na ekranie głównym **AAPS** i w Nightscout, na podstawie wpisów **Napełnij/Wypełnij** w portalu opieki → zobacz też **Nightscout**.

**CAN** = wskaźnik stanu, gdy wymiana kaniuli jest spóźniona, widoczny w wierszu stanu na ekranie głównym **AAPS** → zobacz też **BAT** / **RES** / **SEN**.

**CGM** = Continuous Glucose Monitor (system ciągłego monitorowania glikemii) → zobacz też **FGM**.

**Zamknięta pętla** (Closed Loop) = system, który automatycznie dostosowuje podawanie bazy na podstawie algorytmu **AAPS** i ustawień **profilu** użytkownika, bez potrzeby zatwierdzania zmian przez użytkownika. Więcej informacji → Wiki - „zamknięta pętla” i zobacz też **HCL** / **FCL**.

**COB** = Carbs On Board (aktywne węglowodany). To ilość węglowodanów, które organizm użytkownika jeszcze trawi i wchłania → zobacz też IOB.

**CSF** = Carbs Sensitivity Factor (współczynnik wrażliwości na węglowodany). czyli o ile wzrośnie **BG** użytkownika po wchłonięciu 1 g węglowodanów.

**DIA** = Duration of Insulin Action (czas działania insuliny). Więcej informacji → [Wiki - „DIA”](#Config-Builder-insulin-dia) i zobacz też → [DIABETTECH - „DIA”](https://www.diabettech.com/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/).

**DST** = Daylight Savings Time (czas letni). Zobacz [Wiki - Zmiana strefy czasowej i czas letni](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

**Dynamiczny ISF (lub DynISF)** = funkcja **AAPS**, która dynamicznie dostosowuje współczynnik wrażliwości na insulinę (**ISF**) na podstawie **TDD** i **BG** użytkownika.

**eCarbs** = extended Carbs (przedłużone węglowodany). Węglowodany rozłożone na kilka godzin (np. aby uwzględnić białko), co pozwala **AAPS** podawać przedłużone bolusy. Więcej informacji → [Wiki - „Przedłużone węglowodany”](../DailyLifeWithAaps/ExtendedCarbs.md)

**FCL** = Full Closed Loop (w pełni zamknięta pętla). Pętla, która nie wymaga od użytkownika żadnych danych o posiłkach: bez liczenia węglowodanów i bez bolusa posiłkowego. Więcej informacji → Wiki - „W pełni zamknięta pętla” i zobacz też **HCL**.

**FGM** = Flash Glucose Monitor (system monitorowania glikemii typu flash), produkowany jako Freestyle Libre. Więcej informacji → Wiki - „Źródło BG” i zobacz też „CGM”.

**git** = narzędzie do przechowywania i pobierania kodu źródłowego **AAPS**.

**GitHub** = serwis internetowy, który przechowuje kod **AAPS** i buduje aplikację. Ma system kontroli wersji, który śledzi zmiany w plikach i pomaga koordynować pracę nad nimi, zwłaszcza w zespołach. Jest też potrzebny do aktualizacji **APK**. Więcej informacji → Wiki - „aktualizacja APK”.

**Glimp** = aplikacja do zbierania wartości z Freestyle Libre (Glimp).

**HCL (Hybrid Closed Loop, hybrydowa zamknięta pętla)** = pętla, która automatyzuje podawanie insuliny między posiłkami, ale nadal wymaga od użytkownika bolusa do posiłków. Prawie każdy system używany na co dzień, w tym **AAPS**, jest hybrydową zamkniętą pętlą → zobacz też **FCL** / **Zamknięta pętla**.

**IC (I:C, ICR, CR, carb ratio)** = Insulin to Carb ratio (współczynnik insulina/węglowodany). Zwykle podaje się go w g/U, choć skrót sugeruje odwrotną jednostkę.

**IOB** = Insulin On Board (aktywna insulina). Insulina, która nadal działa w organizmie użytkownika. Zobacz [Wiki - Aktywna insulina (IOB)](#aaps-screens-iob)

**ISF** = Insulin Sensitivity Factor (współczynnik wrażliwości na insulinę). Oczekiwany spadek BG po podaniu jednej jednostki insuliny. Jednostka to mg/dl/U lub mmol/l/U. Nie są one równoważne bez przeliczenia!

**Magazyn kluczy (keystore lub JKS)** = Java Key Store, czyli zaszyfrowany plik z Twoimi osobistymi certyfikatami i kluczami dewelopera. Jest potrzebny do budowania (i ponownego budowania) **AAPS**.

**LGS** = Low Glucose Suspend (zawieszenie przy niskiej glikemii). Zobacz [Wiki - Zawieszenie przy niskiej glikemii](#KeyAapsFeatures-LGS)

**LineageOS** = darmowy system operacyjny o otwartym kodzie źródłowym dla smartfonów itp. Jeśli używasz pompy Accu-Chek Combo, zobacz [Wiki - pompa Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md).

**Pliki logów** (Log files) = zapisy **AAPS** o działaniach użytkownika (przydatne do rozwiązywania problemów i debugowania). Więcej informacji → [Wiki - „Dostęp do plików logów”](../GettingHelp/AccessingLogFiles.md).

**maxIOB** = maksymalna całkowita aktywna insulina (IOB). To funkcja bezpieczeństwa. Nie pozwala **AAPS** podać więcej insuliny, niż pozwalają ustawienia użytkownika. Więcej informacji → [Wiki - „Maksymalna całkowita IOB, której OpenAPS nie może przekroczyć”](#Open-APS-features-maximum-total-iob-openaps-cant-go-over).

**min_5m_carbimpact** = funkcja bezpieczeństwa: domyślne tempo wchłaniania węglowodanów, którego AAPS używa, gdy nie da się go ustalić na podstawie reakcji glikemii użytkownika. Więcej informacji → [Wiki - „Ustawienia (Preferencje)”](#Preferences-min_5m_carbimpact).

**Nightscout** = projekt open source do odczytu i raportowania danych z **CGM**. Centralne miejsce na dane **AAPS** użytkownika. Może tworzyć raporty z historycznych danych **Nightscout**: przewidywane HbA1c, czas w zakresie albo wyszukiwanie wzorców w danych za pomocą wykresu percentylowego itp.

**Nightscout** → zobacz też **Nightscout Reporter**. Jest to szczególnie przydatne dla rodziców, którzy obserwują leczenie cukrzycy swojego dziecka.

**Nightscout Reporter Tool** = narzędzie, które tworzy raporty PDF z danych aplikacji webowej Nightscout. Zobacz „Nightscout Reporter”, „NS Reporter” na Facebooku.

**NSClient** (**NSClientV3**) = wtyczka **AAPS**, która synchronizuje dane z **Nightscout** (**Konfiguracja** → **Komunikacja**). To nie to samo co **AAPSClient**, aplikacja do obserwowania. Więcej informacji → [Wiki - „NSClient”](#Preferences-nsclient).

**OpenAPS** = Open Artificial Pancreas System, wcześniejszy projekt, na którym opiera się AAPS.

**Otwarta pętla** (Open Loop system) = funkcja **AAPS**, która proponuje zmiany, ale użytkownik musi je wykonać ręcznie w **AAPS**. Więcej informacji → [Wiki - „Otwarta pętla”](#KeyAapsFeatures-OpenLoop).

**Oref0 / Oref1** = wykrywanie wrażliwości i „reference design implementation version 0/1” (wersja 0/1 implementacji referencyjnej). To kluczowy algorytm OpenAPS (Wiki OpenAPS - wykrywanie wrażliwości).

**OS-AID** = Open-Source Automated Insulin Delivery (automatyczne podawanie insuliny z otwartym kodem źródłowym). System **AID** zbudowany z oprogramowania open source, np. **AAPS**, **OpenAPS**, Loop lub Trio. Te systemy nie są formalnie zatwierdzone przez instytucje ochrony zdrowia (FDA, NHS itp.) → zobacz też **AID**.

**Czas szczytu** (Peak time) = czas największego działania podanej insuliny. Więcej informacji → [Wiki - „Czas działania insuliny (DIA) i szczyt”](#Config-Builder-insulin-dia).

**PH** = Pump History (historia pompy). Można ją zobaczyć w historii leczenia **AAPS**: otwórz **menu** (☰) w lewym górnym rogu ekranu głównego i wybierz **Leczenie**.

**Prognozy** (Predictions) = prognozy przyszłej **BG** na podstawie różnych obliczeń. Więcej informacji → [Wiki - „Linie prognozy”](#aaps-screens-prediction-lines).

**Profil** (Profile) = podstawowe ustawienia leczenia użytkownika (dawka bazowa, **DIA**, **IC**, **ISF**, cel **BG**). **AAPS** używa tylko profili utworzonych w **AAPS** (**Zarządzaj** → **Profil**), ale **profile** z **Nightscout** można skopiować (zsynchronizować) do **AAPS**. Więcej informacji → [Wiki - „Twój profil AAPS”](../SettingUpAaps/YourAapsProfile.md).

**Zmiana profilu** (Profile switch) = (tymczasowa) zmiana **profilu** użytkownika na inny **profil** zapisany w **AAPS**.

**Procent profilu** (Profile Percentage) = (tymczasowe) procentowe zwiększenie lub zmniejszenie **profilu** użytkownika na wybrany czas.

**RES** = wskaźnik stanu, gdy wymiana zbiornika jest spóźniona, widoczny w wierszu stanu na ekranie głównym **AAPS** → zobacz też **BAT** / **CAN** / **SEN**.

**RileyLink** = urządzenie open source, które łączy Bluetooth Low Energy (BLE) z komunikacją radiową 916 MHz (stare pompy Medtronic) lub 433 MHz (pompy Omnipod Eros).

**SAGE** = sensor age (wiek sensora). Jest wyświetlany na ekranie głównym **AAPS** i w **Nightscout**, na podstawie wpisów **Założenie sensora** w portalu opieki → zobacz też **Nightscout**.

**SEN** = wskaźnik stanu, gdy wymiana sensora jest spóźniona, widoczny w wierszu stanu na ekranie głównym **AAPS** → zobacz też **BAT** / **CAN** / **RES**.

**Wykrywanie wrażliwości** (Sensitivity detection) = obliczanie wrażliwości na insulinę, która zmienia się np. przez wysiłek, hormony itp. zobacz też → [DIABETTECH - „Autosens”](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Szum sensora** (Sensor noise) = niestabilne odczyty **CGM**, przez które wartości **BG** „skaczą”. Więcej informacji → [Wiki - „Wygładzanie danych dotyczących poziomu glukozy we krwi”](../CompatibleCgms/SmoothingBloodGlucoseData.md).

**SMB** = Super Micro Bolus (Super Mikro Bolus). Funkcja **AAPS** do szybszego podawania insuliny, aby skorygować **BG**. Więcej informacji → [Wiki - „**SMB**”](#Open-APS-features-super-micro-bolus-smb) i zobacz też **UAM**.

**Superbolus** (Super bolus) = przeniesienie insuliny bazowej do bolusa, aby szybciej skorygować **BG**.

**TBB** = total base basal (całkowita baza, czyli suma dawek bazowych w ciągu 24 godzin) → zobacz też **TBR** / **TDD**.

**TBR** = temporary basal rate (baza tymczasowa) → zobacz też **TBB** / **TDD**.

**TDD** = total daily dose (całkowita dawka dobowa: bolus + baza na dzień) → zobacz też **TBB** / **TBR**.

**TT** = temporary target (cel tymczasowy), tymczasowe podniesienie lub obniżenie celu (zakresu) **BG** użytkownika, np. przed jedzeniem lub sportem. Więcej informacji → [Wiki - „Cele tymczasowe”](../DailyLifeWithAaps/TempTargets.md).

**UAM** = unannounced meals (nieogłoszone posiłki). Wykrywanie znacznego wzrostu **BG** spowodowanego posiłkiem, adrenaliną lub innymi czynnikami i próba jego skorygowania. Więcej informacji → [Wiki - „UAM”](#enable-uam) i zobacz też **SMB**.

**Wirtualna pompa** (Virtual pump) = funkcja **AAPS**, która pozwala wypróbować funkcje **AAPS**. Służy też osobom z cukrzycą (PWD), które używają modelu pompy bez sterownika **AAPS** do pętli → zobacz też **Otwarta pętla**.

**Tapeta** (Wallpaper) = obraz tła **AAPS**, zobacz stronę Telefony.

**xDrip** = oprogramowanie open source do odczytu danych z systemów **CGM**.

**Zero-temp** = zerowa baza tymczasowa, czyli baza tymczasowa 0% (bez podawania insuliny bazowej).

→ zobacz też [dokumentację OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)