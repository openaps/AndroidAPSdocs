# Completing the Objectives

**AAPS** ma serię **Zadań**, które musisz ukończyć. Prowadzą Cię one od podstawowej otwartej pętli do hybrydowej zamkniętej pętli i pełnych możliwości **AAPS**. Ukończenie **Zadań** ma zapewnić, że:

* wszystko w **AAPS** jest poprawnie skonfigurowane;
* poznałeś najważniejsze funkcje **AAPS**; oraz
* podstawowo rozumiesz, co potrafi Twój system. To pomaga nabrać pewności podczas używania **AAPS**.

Gdy instalujesz **AAPS** po raz pierwszy, musisz ukończyć każde zadanie, zanim przejdziesz do następnego. Nowe funkcje odblokowują się stopniowo, w miarę postępów w kolejnych **Zadaniach**.

**Zadania 1 do 8** prowadzą Cię od konfiguracji **AAPS** w smartfonie do „podstawowej” hybrydowej zamkniętej pętli. This will take about 6 weeks to complete. Do **Zadania 5** możesz dojść, używając wirtualnej pompy (a w tym czasie podawać insulinę w inny sposób). **Zadania 9 i 10** sprawdzają bardziej zaawansowane funkcje **AAPS**, które mają poprawić kontrolę cukrzycy. Ich ukończenie zajmie do 3 miesięcy, a może dłużej. Więcej szczegółów o szacowanym czasie znajdziesz tutaj: [Ile to potrwa?](#preparing-how-long-will-it-take)

Oprócz przechodzenia przez kolejne **Zadania** możesz też, w razie potrzeby, usunąć swoje postępy i [wrócić do wcześniejszego zadania](#go-back-in-objectives).

## Backup your settings

```{admonition} Note
:class: note

Exporting your **AAPS** settings is recommended after completing each **Objective**!
```

Zdecydowanie zalecamy [eksport ustawień](../Maintenance/ExportImportSettings.md) po ukończeniu każdego zadania, aby nie stracić postępów w **AAPS**. Eksport tworzy **plik ustawień** (.json). Zachowaj jego kopię w jednym lub kilku bezpiecznych miejscach (np. Dysk Google, dysk twardy, załącznik e-mail _itp._). Dzięki temu wszystkie postępy w **AAPS** są zapisane. Jeśli zgubisz telefon albo przypadkiem usuniesz postępy, możesz wczytać plik json z powrotem do **AAPS**, importując ostatni plik ustawień. Kopia **pliku ustawień** jest też potrzebna, gdy z jakiegoś powodu potrzebujesz nowego smartfona do **AAPS** (wymiana na nowszy, zgubiony lub zepsuty telefon _itp._)

Plik **ustawień** zapisuje nie tylko postępy w **Zadaniach**, ale też wszystkie ustawienia **AAPS**, takie jak **maks. bolus** _itp._

Jeśli nie masz kopii ustawień, a coś stanie się z Twoim smartfonem z **AAPS**, **Zadania** trzeba będzie zacząć od początku. Przejście przez **Zadania** zajmuje czas. Lepiej uniknąć sytuacji, w której musisz je robić jeszcze raz, bo na przykład zgubiłeś smartfon.

(objectives-objective1)=
## Objective 1: Setting up visualization and monitoring, analyzing basals and ratios

W **Zadaniu 1** ustawiasz podstawową konfigurację techniczną w **AAPS**. No progress can be made until this step has been completed.

- Wybierz właściwy CGM/FGM w [Konfiguracja → Źródło BG](#Config-Builder-bg-source). Więcej informacji znajdziesz w [Źródło BG](../Getting-Started/CompatiblesCgms.md).
- Wybierz właściwą pompę w [Konfiguracja → Pompa](#Config-Builder-pump), aby pompa mogła komunikować się z **AAPS**. Wybierz **wirtualną pompę**, jeśli używasz modelu pompy bez sterownika **AAPS** do pętli albo jeśli chcesz przejść pierwsze **Zadania**, podając insulinę innym systemem. Więcej informacji znajdziesz w [pompa insulinowa](../Getting-Started/CompatiblePumps.md).
- If using Nightscout:
  - Wykonaj instrukcje ze strony [Nightscout](../SettingUpAaps/Nightscout.md), aby **Nightscout** mógł odbierać i wyświetlać dane z **AAPS**.
  - Pamiętaj, że adres URL w **NSClientV3** musi być **_bez_ „/api/v1/”** na końcu – zobacz [Ustawienia → NSClientV3](#Preferences-nsclient).
- If using Tidepool:
  - Wykonaj instrukcje ze strony [Tidepool](../SettingUpAaps/Tidepool.md), aby **Tidepool** mógł odbierać i wyświetlać dane z **AAPS**.

Uwaga – *może być konieczne odczekanie na następny odczyt glukozy z sensora, zanim **AAPS** go rozpozna.*

(objectives-objective2)=
## Objective 2: Learn how to control AAPS

**Zadanie 2** wymaga wykonania kilku „kroków”, jak na zrzucie ekranu poniżej. Każdy krok pokazuje swój stan (**1**): pomarańczowy napis „**Nie ukończono**” zmienia się w „**Ukończono, dobra robota!**”, gdy tylko **AAPS** zarejestruje działanie. Dotknij **Podpowiedź** (**2**) pod krokiem, aby otworzyć powiązaną dokumentację, jeśli nie znasz jeszcze danego działania.

![Zrzut ekranu zadania 2](../images/Objective2_V2_5.png)

Kroki do ukończenia **Zadania 2**:
- Ustaw **Profil** na 90% na 10 min.
  - _Podpowiedź_: dotknij nazwy profilu na ekranie głównym, aby otworzyć ekran **Profil**. Potem użyj przycisku **Aktywuj** (▶) i ustaw procent i czas trwania. Więcej informacji w [Zmiana profilu i procent profilu](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md).
  - _Uwaga_: **AAPS** nie akceptuje dawek bazowych poniżej 0,05 U/godz. Jeśli Twój **Profil** zawiera dawki 0,06 U/godz. lub niższe, przed wykonaniem tego kroku musisz utworzyć tymczasowy **Profil** z wyższymi dawkami bazowymi. Po wykonaniu tego kroku wróć do swojego zwykłego **Profilu**.
- Zasymuluj „branie prysznica”, [odłączając pompę](#AapsScreens-loop-status) w **AAPS** na 1 godz.
  - _Podpowiedź_: naciśnij ikonę pętli na ekranie głównym, aby otworzyć okno pętli, a potem wybierz czas w sekcji **Odłącz pompę**.
- End "taking a shower" by reconnecting your pump.
  - _Podpowiedź_: naciśnij ikonę „odłączona”, aby znowu otworzyć okno pętli, i wybierz **Połącz ponownie pompę**.
- Ustaw własny [**Cel tymczasowy**](../DailyLifeWithAaps/TempTargets.md) na 10 min.
  - _Podpowiedź_: naciśnij zakres docelowy na ekranie głównym, aby otworzyć ekran celu tymczasowego.
- Wyświetl zawartość wtyczki **Pętla**.
  - _Podpowiedź_: otwórz **Konfiguracja → Pętla** i dotknij „**Otwórz wtyczkę**”.
- Przewijaj lub powiększaj wykres BG, aby oglądać dłuższe lub krótsze okresy czasu.


(objectives-objective3)=
## Objective 3: Prove your knowledge

W **Zadaniu 3** musisz zdać test wielokrotnego wyboru, który sprawdza Twoją wiedzę o **AAPS**.

Dla niektórych osób **Zadanie 3** jest najtrudniejsze do ukończenia. Czytaj dokumentację **AAPS** razem z pytaniami. Jeśli po przeszukaniu dokumentacji **AAPS** naprawdę nie wiesz, co dalej, wyszukaj „Objective 3” w grupie na [Facebooku](https://www.facebook.com/groups/AndroidAPSUsers) lub [Discordzie](https://discord.gg/4fQUWHZ4Mw) (bo Twoje pytanie najpewniej padło już wcześniej i grupa na nie odpowiedziała). Te grupy mogą dać przyjazne wskazówki albo wskazać właściwą część dokumentacji **AAPS**.

In the meantime :
- Aby zmniejszyć liczbę powiadomień / decyzji, o które jesteś proszony (bazy tymczasowe) w otwartej pętli, ustaw w **Profilu** szeroki zakres docelowy, _np._ 90–150 mg/dl lub 5,0–8,5 mmol/l.
- You might want to set a wider upper limit, or even disable Open Loop, at night.

Aby przejść dalej w **Zadaniu 3**, dotknij wiersza pytania, aby je otworzyć. Please read each question carefully and select your answer(s).

For each question, there may be more than one answer that is correct! If an incorrect answer is selected, the question will be time-locked for 1 hour before you can go back and answer the question again. Be aware that the order of the answers may have changed when you next try to answer, this is to make sure you read them carefully and really understand the validity (or not) of each response.

```{admonition} __What happens if new question(s) are added to an Objective when I update to a newer version of AAPS?__
:class: note
Od czasu do czasu do **AAPS** dodawane są nowe funkcje, które mogą wymagać dodania nowego pytania do **Zadań**, zwłaszcza do **Zadania 3**. Dlatego każde nowe pytanie dodane do **Zadania 3** będzie oznaczone jako „nieukończone”, bo **AAPS** będzie wymagać, abyś na nie odpowiedział. Nie martw się: każde **Zadanie** jest niezależne, więc **nie stracisz dotychczasowych funkcji AAPS**, o ile pozostałe **Zadania** pozostaną ukończone.
```

## Objective 4: Starting on an open loop

Celem **Zadania 4** jest zauważenie, jak często **AAPS** porównuje bazę użytkownika z poziomem glukozy i zaleca zmiany bazy tymczasowej. W tym **Zadaniu** po raz pierwszy włączysz otwartą pętlę. Zaakceptujesz 20 proponowanych zmian dawki bazy tymczasowej i w razie potrzeby wprowadzisz je ręcznie w pompie. Zobaczysz też, jak działają [**Cele tymczasowe**](../DailyLifeWithAaps/TempTargets.md). Jeśli nie wiesz jeszcze, jak ustawić bazę tymczasową w **AAPS**, zobacz działania pompy w arkuszu **Zarządzaj** ([Gdzie jest karta Akcje?](#screens-action-tab)).

Minimalny czas ukończenia tego zadania: **7 dni**. This is a mandatory wait time. Nie można przejść do następnego **Zadania** wcześniej, nawet jeśli wszystkie zmiany dawki bazowej zostały już wykonane.

- Wybierz otwartą pętlę: naciśnij [ikonę pętli](#AapsScreens-loop-status) na ekranie głównym i wybierz **Otwarta pętla** jako tryb pracy.
- Manually enact at least 20 of the temporary basal rate suggestions over a period of 7 days; key them into your (physical) pump and confirm in AAPS that you have accepted them. Upewnij się, że te zmiany dawki bazowej są widoczne w **AAPS** i w **Nightscout**.
- W razie potrzeby używaj [**Celów tymczasowych**](../DailyLifeWithAaps/TempTargets.md). After treating a hypo, use the predefined "hypo temp target" to prevent the system from overcorrecting upon the bounce back.
- Jeśli w tym momencie nadal używasz [Trybu uproszczonego](#preferences-simple-mode), to prawdopodobnie dobry czas, aby go wyłączyć.

Aby zmniejszyć liczbę proponowanych zmian dawki bazowej w otwartej pętli, możesz nadal korzystać ze wskazówek opisanych w [**Zadaniu 3**](#objective-3-prove-your-knowledge). Możesz też zmienić minimalny procent zalecanych zmian bazy ustawieniem „**Minimalna zmiana w trybie otwartej pętli**” w **Ustawienia → Pętla**. The higher the value, the fewer change notifications you will receive.

![Minimalna zmiana w trybie otwartej pętli](../images/OpenLoop_MinimalRequestChange2.png)

```{admonition} Note
:class: note

Nie musisz wykonywać każdego zalecenia systemu!
```
(objectives-objective5)=
## Objective 5: Understanding your open loop, including its temp basal recommendations

W **Zadaniu 5** zaczniesz rozumieć, skąd biorą się zalecenia bazy tymczasowej. Obejmuje to [logikę ustalania bazy](#aaps-screens-how-predictions-become-a-dosing-decision), analizę wpływu przez obserwację [linii prognozy w **przeglądzie AAPS**](#aaps-screens-prediction-lines) (lub w Nightscout) oraz przeglądanie szczegółowych obliczeń na ekranie wtyczki **OpenAPS SMB** (**Konfiguracja → APS → Otwórz wtyczkę**).

Szacowany czas ukończenia tego zadania: **7 dni**.

W tym **Zadaniu** musisz ustalić i ustawić wartość „Maks. U/godz. dla bazy tymczasowej” (max-basal), jak opisano w [funkcjach OpenAPS](#Open-APS-features-max-u-h-a-temp-basal-can-be-set-to). Tę wartość możesz ustawić w [Ustawienia → OpenAPS SMB](#Preferences-openaps-smb-settings). W [trybie uproszczonym](#preferences-simple-mode) **AAPS** ustawia tę wartość automatycznie i nie musisz jej zmieniać. Jeśli nadal używasz wirtualnej pompy, upewnij się, że to ustawienie bezpieczeństwa jest ustawione zarówno w **AAPS**, jak i w Twojej pompie insulinowej.

Możesz ustawić [cel BG w **Profilu**](#profile-glucose-targets) wyżej niż zwykle, dopóki nie poczujesz się pewnie z obliczeniami i ustawieniami **AAPS**. Możesz wypróbować ustawienie w **Profilu** węższego zakresu **celu BG** (np. o szerokości 1 mmol/l lub mniej [20 mg/dl lub mniej]) i obserwować, jak system się zachowuje.

![Znak stop](../images/sign_stop.png)

```{admonition} If you have been using a virtual pump, change to a real insulin pump now!
:class: note

Jeśli używasz otwartej pętli z wirtualną pompą, **zatrzymaj się tutaj**. Kliknij „Zweryfikuj” na końcu tego **Zadania** dopiero wtedy, gdy przejdziesz na „prawdziwą” pompę, która podaje insulinę.

```

![blank](../images/blank.png)

(objectives-objective6)=
## Objective 6: Starting to close the loop with Low Glucose Suspend

![Znak ostrzegawczy](../images/sign_warning.png)
```{admonition} Closed loop will not correct high **BG** values in **Objective 6** as it is limited to **Low Glucose Suspend** only!
:class: note
Nadal musisz samodzielnie korygować wysokie wartości BG (ręcznie, korektami z pompy lub penem)!
```

W **Zadaniu 6** zamkniesz pętlę i włączysz tryb **Zawieszenie przy niskiej glikemii** (LGS), gdy [max IOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over) jest ustawione na zero. Aby ukończyć to **zadanie**, musisz pozostać w trybie LGS przez 5 dni. Wykorzystaj ten czas, aby sprawdzić, czy ustawienia **Profilu** są dokładne i czy zdarzenia LGS nie występują zbyt często.

Minimalny czas ukończenia tego zadania: **5 dni**. This is a mandatory wait time. Nie możesz przejść do następnego **Zadania**, zanim ten czas nie minie.

To bardzo ważne, aby Twój obecny **Profil** (baza, ISF, IC) był dobrze przetestowany, zanim zamkniesz pętlę w trybie **LGS**. Błędne ustawienia **Profilu** mogą prowadzić do hipoglikemii, które trzeba leczyć ręcznie. Dokładny **Profil** pomoże ograniczyć potrzebę leczenia niskiej glikemii w ciągu tych 5 dni.

**Jeśli nadal często lub ciężko masz niską glikemię, rozważ dopracowanie [DIA dla Twojego typu insuliny](#Config-Builder-insulin-dia), bazy, ISF i współczynników węglowodanowych.** Zajrzyj do grupy na [Facebooku](https://www.facebook.com/groups/AndroidAPSUsers) lub [Discordzie](https://discord.gg/4fQUWHZ4Mw), gdzie dużo się o tym dyskutuje.


W czasie **Zadania 6** **AAPS** nadpisze ustawienie maxIOB wartością zero. **To nadpisanie skończy się po przejściu do Zadania 7.**

Oznacza to, że w **Zadaniu 6**, gdy poziom glukozy z sensora spada, **AAPS** zmniejszy za Ciebie dawkę insuliny bazowej. Jeśli jednak poziom glukozy z sensora rośnie, **AAPS** zwiększy bazę powyżej wartości z **Profilu** tylko wtedy, gdy **IOB bazy** jest ujemne w wyniku wcześniejszego **LGS**. W przeciwnym razie **AAPS** nie zwiększy bazy powyżej obecnej wartości z profilu, nawet jeśli poziom glukozy rośnie. Ta ostrożność ma chronić przed hipoglikemią, gdy uczysz się używać **AAPS**.

**Dlatego wysokie wartości glukozy musisz korygować ręcznie bolusami insuliny.**

- Jeśli Twoje IOB jest ujemne (zobacz zrzut ekranu poniżej), w **Zadaniu 6** może zostać włączona baza tymczasowa (TBR) > 100%.

![Przykład ujemnego IOB](../images/Objective6_negIOB.png)

- Set your target range slightly higher than you usually would aim at, just to be safe and to add a safety buffer.
- Włącz tryb „Zawieszenie przy niskiej glikemii”: naciśnij ikonę pętli na ekranie głównym i wybierz **Zawieszenie przy niskiej glikemii** jako tryb pracy.
- Watch active temporary basals by looking at the turquoise basal text on the OVERVIEW screen or the turquoise basal render as part of the OVERVIEW graph.
- You may temporarily experience spikes following treated hypos without being able to increase basals on the rebound.

(objectives-objective7)=
## Objective 7: Tuning the closed loop, raising maxIOB above 0 and gradually lowering BG targets

Aby ukończyć **Zadanie 7**, musisz zamknąć pętlę i podnieść [maxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over). **maxIOB** było automatycznie wyzerowane w **Zadaniu 6** z powodu trybu zawieszenia przy niskiej glikemii. Teraz już tak nie jest. **AAPS** zacznie używać ustawionej przez Ciebie wartości maxIOB do korygowania wysokich wartości glukozy. W [trybie uproszczonym](#preferences-simple-mode) **AAPS** ustawia maxIOB automatycznie i nie musisz go zmieniać.

Minimalny czas ukończenia tego zadania: **1 dzień**. This is a mandatory wait time. Nie można przejść do następnego **Zadania**, dopóki ten czas nie minie.

- Wybierz **Zamknięta pętla**: naciśnij [ikonę pętli](#AapsScreens-loop-status) na ekranie głównym i wybierz **Zamknięta pętla** jako tryb pracy. Pozostań w trybie **Zamknięta pętla** przez 1 dzień.

- Slowly raise your 'Maximum total IOB OpenAPS can’t go over' (in OpenAPS called 'max-iob') above 0, until you find the settings that work best for you.

Domyślnie zalecana wartość tego ustawienia to „**średni bolus do posiłku + 3x maks. dzienna baza**”, gdzie „maks. dzienna baza” to najwyższa wartość godzinowa w dowolnym przedziale czasu w ciągu dnia.

![maks. dzienna baza](../images/MaxDailyBasal2.png)

This recommendation should be seen as a starting point. If you use this rule but are experiencing AAPS delivering too much insulin as glucose levels rise, you may need to :
* lower the "Maximum total IOB OpenAPS can’t go over" value;
* przejrzyj ustawienia **Profilu** i zmieniaj tylko jedną rzecz naraz.

Jeśli masz dużą insulinooporność, możesz też bardzo ostrożnie podnieść wartość **maxIOB**.

Gdy będziesz pewien, jaka wartość **maxIOB** pasuje do Twojej pętli, obniż **cele BG** do wybranego poziomu.

(objectives-objective8)=
## Objective 8: Adjust basals and ratios if needed, and then enable Autosens

W tym **zadaniu** ponownie ocenisz działanie swojego **Profilu** i użyjesz funkcji [Autosens](#Open-APS-features-autosens) jako wskaźnika błędnych ustawień.

Minimalny czas ukończenia tego zadania: **7 dni**. This is a mandatory wait time. Nie można przejść do następnego **Zadania**, dopóki ten czas nie minie.

Włącz [Autosens](../DailyLifeWithAaps/KeyAapsFeatures.md) na 7 dni (w [trybie uproszczonym](#preferences-simple-mode) jest domyślnie włączony) i obserwuj [białą linię na wykresie w **przeglądzie**](#AapsScreens-section-g-additional-graphs), która pokazuje wzrost lub spadek Twojej wrażliwości na insulinę, np. z powodu wysiłku lub hormonów. Obserwuj ekran wtyczki **OpenAPS SMB** (**Konfiguracja → APS → Otwórz wtyczkę**), który pokazuje, jak **AAPS** dostosowuje wrażliwość, bazy i cele.

To dobry moment, aby przejrzeć ustawienia [Detekcji wrażliwości](#Config-Builder-sensitivity-detection). Swoją wrażliwość możesz zobaczyć na ekranie głównym na [dodatkowym wykresie](#AapsScreens-section-g-additional-graphs).

Możesz też jednorazowo użyć [Autotune](#autotune-how-autotune-calculates-adjustments), aby sprawdzić, czy bazy są nadal dokładne, albo wykonać tradycyjny test bazy.

(objectives-objective9)=
## Objective 9: Enabling additional oref1 features for daytime use, such as super micro bolus (SMB)

W **Zadaniu 9** poznasz i zaczniesz używać **„Super Mikro Bolusów (SMB)”** jako jednej z głównych funkcji. After working through the mandatory readings you will have a good understanding of what SMBs are, how these work, and why basal is set to zero temporarily after SMBs are given (zero-temping).

Minimalny czas ukończenia tego zadania: **28 dni**. This is a mandatory wait time. You can’t proceed to the next Objective before this time is up.

- [Sekcja SMB w tej dokumentacji](#Open-APS-features-super-micro-bolus-smb) i [opis oref1 w dokumentacji openAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) to obowiązkowa lektura, aby zrozumieć **SMB** i pojęcie **zero-temping** (baza tymczasowa 0%).
- Potem możesz [podnieść maxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over), aby **SMB** działały skuteczniej. maxIOB obejmuje teraz całe **IOB**, a nie tylko zgromadzoną bazę. Ten próg wstrzymuje **SMB**, dopóki IOB nie spadnie poniżej tej wartości (_np._ **maxIOB** wynosi 7 U i podajesz bolus 8 U do posiłku: SMB zostaną wstrzymane i nie będą podawane, dopóki **IOB** nie spadnie poniżej 7 U). Dobrym początkiem jest ustawienie **maxIOB** = **średni bolus do posiłku + 3x maks. dzienna baza**, gdzie „maks. dzienna baza” to najwyższa wartość godzinowa w dowolnym przedziale czasu w ciągu dnia. Zobacz [zadanie 7](#objective-7-tuning-the-closed-loop-raising-maxiob-above-0-and-gradually-lowering-bg-targets).
- Oceń szybkość wchłaniania węglowodanów i rozważ zmianę parametru „min_5m_carbimpact” w [Ustawienia → Ustawienia wchłaniania → min_5m_carbimpact](#Preferences-min_5m_carbimpact), jeśli jest dla Ciebie za wolna lub za szybka.

(objectives-objective10)=
## Objective 10: Automation

**Automatyzacje** stają się dostępne po rozpoczęciu **Zadania 10**.

Minimalny czas ukończenia tego zadania: **28 dni**. This is a mandatory wait time. You can’t proceed to the next Objective before this time is up.

Najpierw przeczytaj stronę dokumentacji [Automatyzacja](../DailyLifeWithAaps/Automations.md).

Utwórz najprostszą regułę automatyzacji, np. wywołaj powiadomienie Androida za kilka minut:
- Otwórz **Zarządzaj → Automatyzacja** i dotknij przycisku **+** (**Dodaj regułę**).
- Wpisz **Nazwa zadania**, na przykład „Moje pierwsze powiadomienie z automatyzacji”.
- W sekcji **Warunek** dotknij „**EDYTUJ**”.
  - Dotknij „**Dodaj wyzwalacz**” i wybierz „**Czas**”. **AAPS** tworzy wpis na dziś z bieżącą godziną.
  - Zmień godzinę tak, aby reguła zadziałała za kilka minut.
  - Dotknij ikony **Zachowaj** (w prawym górnym rogu), aby wrócić do reguły.
- W sekcji **Działanie** dotknij „**DODAJ**” i wybierz „**Powiadomienie**”.
  - Wpisz wiadomość na karcie działania, na przykład „Moja pierwsza automatyzacja”.
- Dotknij ikony **Zachowaj** (w prawym górnym rogu) i upewnij się, że reguła jest **Włączona**.
- Wait until the time triggers the notification (note that depending on your phone, it can be a few minutes late)

Potem możesz wypróbować bardziej przydatną **Automatyzację**. Strona dokumentacji podaje kilka przykładów. Możesz też wyszukać zrzuty ekranu „Automation” w grupie na [Facebooku](https://www.facebook.com/groups/AndroidAPSUsers). Jest też osobny kanał w społeczności na [Discordzie](https://discord.gg/4fQUWHZ4Mw).

Na przykład, jeśli codziennie rano jesz to samo śniadanie o tej samej porze przed szkołą/pracą, możesz utworzyć **Automatyzację**, np. „cel-przed-śniadaniem”, która ustawi nieco niższy **Cel tymczasowy** 30 minut przed śniadaniem. In such case, your condition is likely to include "recurring time" which consists of selecting specific days of the week (Monday, Tuesday, Wednesday, Thursday, Friday) and a specific time (06:30 am). The action will consist of "Start temp target" with a lower than usual target value and a 30 minutes duration.

## Gdy wszystkie zadania są ukończone

Gdy ukończysz wszystkie **Zadania**, lista pokaże każde z nich z zaznaczeniem i datą ukończenia. Pozycja **Zadania** znika z dolnej nawigacji. Listę nadal możesz otworzyć przez **Konfiguracja → Ograniczenia → Zadania → Otwórz wtyczkę**.

![Wszystkie zadania ukończone](../images/objectives/objectives_completed.png)

Naciśnij „**Więcej**” pod zadaniem, aby znowu zobaczyć jego kroki:

![Szczegóły ukończonego zadania](../images/objectives/objective_1_details.png)

(CompletingTheObjectives-go-back-in-objectives)=
## Go back in objectives

Jeśli z jakiegoś powodu chcesz cofnąć się w **Zadaniach**, otwórz ukończone **Zadanie** przez „**Więcej**” i dotknij „**Resetuj stan zakończenia**”:

![Go back in objectives](../images/Objective_ClearFinished.png)

W ten sam sposób **Zadanie**, nad którym teraz pracujesz, możesz zacząć od nowa przez „**Resetuj stan rozpoczęcia**”.
