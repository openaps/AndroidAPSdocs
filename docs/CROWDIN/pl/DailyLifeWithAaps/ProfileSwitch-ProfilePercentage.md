# Zmiana profilu i procent profilu

W tej części wyjaśniamy, czym jest **zmiana profilu** i **procent profilu**. Jak utworzyć **profil**, dowiesz się na stronie [Twój profil AAPS](#your-aaps-profile-create-and-edit-profiles).

Gdy zaczynasz pracę z **AAPS**, musisz utworzyć **profil**, nauczyć się wykonywać **zmianę profilu** i zrozumieć, jak działa **procent profilu** w **AAPS**. The features of a **Profile Switch** or **Profile Percentage** can be particularly beneficial for:

- cykl menstruacyjny – w **Automatyzacji** możesz ustawić zmianę procentu **profilu**, aby **AAPS** dopasował się do różnych faz cyklu hormonalnego i do przewidywanej insulinooporności.

- ćwiczenia – w **Automatyzacji** możesz ustawić zmianę procentu **profilu** na czas ćwiczeń, aby zmniejszyć dawkę bazową.

- praca na noce lub w systemie zmianowym – w **profilu** możesz ustawić przesunięcie czasu: zmień liczbę godzin w **profilu** o tyle, o ile później lub wcześniej idziesz spać albo wstajesz.

Dlaczego używać **procentu profilu** zamiast tymczasowej zmiany dawki bazowej? **Procent profilu** działa skuteczniej, bo zmniejsza lub zwiększa w tej samej proporcji: dawkę bazową, ISF i I:C. Dzięki temu **AAPS** liczy dawki insuliny w zrównoważony sposób. Samo zmniejszenie dawki bazowej w **profilu** w **AAPS** daje niewiele, jeśli algorytm dalej używa tych samych współczynników ISF i I:C.

(ProfileSwitch-change-percentage)=

## Zmiana procentu profilu z ekranu głównego

Potrzebujesz co najmniej jednego zapisanego **profilu**. **Procent profilu** zawsze ustawiasz przez **zmianę profilu**: aktywujesz **profil** jeszcze raz, tym razem z procentem.

```{admonition} Przechodzisz z AAPS 3? :class: note Długie naciśnięcie nazwy profilu nie otwiera już okna zmiany profilu. **Dotknij** nazwy profilu, a potem okrągłego przycisku **▶** w prawym dolnym rogu: otwiera te same ustawienia (procent, czas trwania, cel tymczasowy Aktywność).

    <br />1. Na ekranie głównym **dotknij nazwy profilu** (obok ikony gwiazdki). Otworzy się [ekran Profil](#ProfileSwitch-manage-v4) na karcie działającego **profilu**, oznaczonej **AKTYWNY**.
    
       ![Dotknij nazwy profilu na ekranie głównym, aby otworzyć ekran Profil](../images/ProfileSwitch2.png)
    
    2. Aby zostawić ten sam **profil**, zostaw zaznaczoną kartę **AKTYWNY**. Aby jednocześnie zmienić **profil**, przesuń palcem do innej karty.
    3. Dotknij okrągłego przycisku **▶** (**Aktywuj**) w prawym dolnym rogu. Otworzy się ekran **Aktywuj**.
    4. Ustaw **Procent** przyciskami **−** / **+** (co 5%) albo wpisz wartość (od 30 do 250%). Pole zawsze zaczyna od **100%**: nie pokazuje procentu, który działa teraz. Na przykład wpisz **80**, aby dostać 20% mniej insuliny, albo **120**, aby dostać 20% więcej.
    5. Ustaw **Czas trwania** w minutach:
       * **0** zostawia nowy procent, aż wykonasz kolejną **zmianę profilu**;
       * każda inna wartość kończy zmianę po tym czasie i **AAPS** wraca do **profilu**, który działał wcześniej.
    
       ![Ekran Aktywuj ustawiony na 80% przez 60 minut](../images/v4/Profiles/profile_activate_percentage.png)
    
    6. Dotknij **▶ Aktywuj** na dole ekranu. Sprawdź podsumowanie w oknie **Zmiana profilu** i dotknij **OK**.
    
       ![Okno potwierdzenia — profil, procent i czas trwania](../images/v4/Profiles/profile_activate_confirm.png)
    
    Po powrocie na ekran główny nazwa profilu pokazuje procent i pozostały czas, na przykład *Normal (80%) (59')*. Gdy działa zmiana z czasem trwania, nazwa jest żółta. Gwiazdka oznacza zmianę na wykresie glukozy. Zobacz [ekran główny](#aaps-screens-profile--target).
    
    ![Ekran główny podczas zmiany profilu na 80%](../images/v4/Profiles/profile_switch_running.png)
    
    Aby **wrócić do 100%** przed końcem, powtórz te kroki i zostaw **Procent** na 100, a **Czas trwania** na 0.
    
    ```{admonition} Procent jednym dotknięciem
    :class: tip
    Jeśli często używasz tego samego procentu (sport, choroba), dodaj [skrót profilu](#profile-shortcuts) do paska QuickLaunch albo utwórz [scenę](Scenes.md). Oba sposoby jednym dotknięciem aktywują profil z ustawionym procentem i czasem trwania.
    

(ProfileSwitch-manage-v4)=

## Zarządzanie profilami i ich aktywacja (Zarządzaj → Profil)

W **AAPS** v4 profilami zarządzasz i aktywujesz je z ekranu **Zarządzaj** (dolny pasek nawigacji) → **Profil** (*„Zarządzaj i aktywuj profile”*).

Ekran Profil pokazuje Twoje profile jako **karuzelę kart, które przesuwasz palcem**. Karta działającego profilu ma oznaczenie **AKTYWNY** i pokazuje jego dzienną sumę dawki bazowej (np. *∑ 30,15 U*). Below the selected card you see that profile's details — the **Insulin** type, and the **IC**, **ISF**, **basal** and **target** schedules with graphs.

When a temporary switch is running, the **ACTIVE** card shows its percentage and time shift with the time left, for example *110% +2 h · 2 h 40 min*, above a progress bar. Both are refreshed every 30 seconds. The details below then have two columns: the values of the profile in blue, and the values in use with the percentage in red.

![Ekran Profil — karuzela profili, szczegóły i pasek akcji](../images/v4/Profiles/profile_manage.png)

Przyciski na dole działają na **wybrany** profil: **➕ Dodaj**, **✏️ Edytuj**, **⧉ Sklonuj** i **‘️ Usuń**, a po prawej okrągły przycisk **▶ Aktywuj**. Jak wypełnić cztery harmonogramy w edytorze (IC / ISF / BAS / CEL), opisuje część [Tworzenie i edycja profili](#your-aaps-profile-create-and-edit-profiles).

**⧉ Sklonuj** ma ikonę dwóch kwadratów, często używaną do *kopiowania*, ale niczego nie trzeba wklejać: duplikat powstaje w jednym kroku. Potwierdź *Sklonować profil „Normal”?*, a nowy profil o nazwie *Normal copy* zostanie dodany na końcu karuzeli i wybrany. Możesz go od razu zmienić przez **✏️ Edytuj** (tam możesz też zmienić jego nazwę). To nie to samo co klonowanie dawnej **zmiany profilu** z Historii leczenia. Tamto tworzy nowy profil *z już uwzględnionym procentem i przesunięciem czasu*. Zobacz [Zachowaj zmianę profilu na później](#ProfileSwitch-keep-for-later).

(ProfileSwitch-read-only-mode)= **Widzisz tylko przycisk ▶ Aktywuj?** Twoje ustawienia są chronione, więc ekran otwiera się tylko do odczytu. Dotknij **✏️ ołówka** na górnym pasku i wpisz hasło ustawień. Zobacz [Ochrona ustawień blokuje teraz także ekrany zarządzania](#v4changes-read-only-management).

### Zmiana kolejności profili

Jeśli masz więcej niż jeden profil, możesz ustawić ich kolejność w karuzeli: dotknij ikony **Zmień kolejność** (⇅, dwie strzałki w górę i w dół) na górnym pasku. Zamiast wskaźnika strony pojawią się **przyciski przesuwania ◀ / ▶** i licznik *pozycja / razem*. Przesuń środkową kartę wcześniej lub dalej, potem potwierdź przyciskiem **✓** (albo odrzuć zmiany przyciskiem **✕**). Nowa kolejność zostanie zapisana raz, gdy ją potwierdzisz.

![Tryb zmiany kolejności — przyciski przesuwania i licznik pozycji](../images/v4/Profiles/profile_reorder.png)

### Aktywacja profilu

Wybierz profil i dotknij **▶ Aktywuj**. Na ekranie **Aktywuj** możesz ustawić, jak ma działać **zmiana profilu**:

![Ekran Aktywuj — procent, czas trwania, przesunięcie czasu, czas](../images/v4/Profiles/profile_activate.png)

- **Procent** (30–250%, za każdym razem zaczyna od 100%) — zmienia cały profil w tej samej proporcji. 100% używa profilu bez zmian; na przykład 70% zmniejsza o 30% dawkę bazową i liczoną dawkę insuliny (zarówno bolusy do posiłków, jak i korekty). Nie zmienia celów glikemii ani wchłaniania węglowodanów. Pełne działanie opisuje część [Procent profilu](#profile-percentage).
- **Czas trwania** (0–10080 minut, czyli do 7 dni) — jak długo działa zmiana. **0 = bez końca** (aż zmienisz profil ponownie); inna wartość niż zero przywraca poprzedni profil, gdy czas się skończy.
- **Cel tymczasowy / Aktywność** — pojawia się tylko wtedy, gdy ustawisz **Czas trwania** i **Procent** poniżej 100%. Włącz go, aby na ten sam czas uruchomić także [cel tymczasowy Aktywność](#TempTargets-activity-temp-target), tak jak przed ćwiczeniami.
- **Zmiana czasu** — pokazuje *0h*; dotknij **Zmień**, aby przesunąć harmonogram do przodu lub do tyłu o maksymalnie 23 godziny (przydatne przy pracy zmianowej lub w podróży). Zobacz [Przesunięcie czasu](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile).
- **Użyj ponownie** — pojawia się, gdy działająca zmiana ma procent inny niż 100% lub przesunięcie czasu, na przykład **Użyj ponownie 80% 0h**. Dotknij go, aby wpisać ten sam procent i przesunięcie czasu, na przykład żeby przedłużyć zmianę, która zaraz się skończy.
    
    ![Przycisk Użyj ponownie, gdy działa zmiana na 80%](../images/v4/Profiles/profile_activate_reuse.png)

- **Czas** — domyślnie *Teraz*. Możesz wybrać inny czas, maksymalnie 24 godziny przed lub po teraz. Zmiana ustawiona na przyszłość zacznie się o tym czasie; cel tymczasowy Aktywność ustawiony razem z nią też zacznie się wtedy.
    
    ![Wybór czasu zmiany profilu](../images/v4/Profiles/profile_activate_time_picker.png)

- **Notatki** — widoczne tylko wtedy, gdy włączona jest opcja [Pokaż notatki w oknach dialogowych](#Preferences-show-notes-field-in-treatments-dialogs).

Jeśli dawki bazowe przy wybranym procencie nie pasują do Twojej pompy, na górze pojawi się ostrzeżenie, a **▶ Aktywuj** pozostanie nieaktywny: wybierz inny procent.

Dotknij **▶ Aktywuj**, potem **OK** w oknie potwierdzenia. Działający profil ma wtedy na karcie oznaczenie **AKTYWNY**.

```{admonition} Twoja pompa może zaokrąglać dawki bazowe :class: note Każda pompa może podawać dawkę bazową tylko w swoich krokach (na przykład 0,05 U/h), więc zaokrągla dawki z Twojego **profilu**. **AAPS** używa wtedy dawki bazowej, którą pompa naprawdę podaje, więc IOB i TDD pozostają poprawne. Jeśli pompa podaje dziennie trochę więcej lub mniej insuliny niż Twój **profil**, komunikat *„Profil bazowy w pompie uaktualniony”* pokazuje, o ile, na przykład *„podaje 10,00 U dziennie zamiast 10,12 U”*.

Jeśli pompa zgłasza dawkę bazową, która bardzo różni się od Twojego **profilu**, **AAPS** zostawia dawkę bazową z **profilu** i prosi Cię o sprawdzenie dawek bazowych w pompie.

    <br />```{admonition} Procent i przesunięcie czasu pozwalają długo korzystać z jednego profilu
    :class: note
    Zamiast tworzyć wiele podobnych profili, zachowaj jeden profil podstawowy i w powtarzających się sytuacjach (choroba, ćwiczenia, podróż) aktywuj go z innym **procentem** lub **przesunięciem czasu**. Właśnie to automatyzują [sceny](Scenes.md).
    

Zmianę profilu możesz wykonać nie tylko z tego ekranu. Tę samą zmianę można też uruchomić z **zegarka z Wear OS**, ze sparowanego **urządzenia opiekuna** (zobacz [Sterowanie Master ↔ Client](../RemoteFeatures/ClientMasterControl.md)), ze **[sceny](Scenes.md)** albo z reguły **Automatyzacji**.

## Procent profilu

Ważne jest, aby rozumieć najważniejsze cechy **procentu profilu**. Gdy ustawisz w **zmianie profilu** wyższy lub niższy procent, wszystkie ustawienia z **profilu** zostaną podniesione lub obniżone o ten sam procent.

Przykład: **zmiana profilu** na 130% (oznacza, że jesteś o 30% bardziej insulinooporny) każe **AAPS**:

- **zwiększyć** dawkę bazową o 30%; 
- **obniżyć** **ISF**: dzieląc go przez 1,3;
- **obniżyć** **I:C**: dzieląc go przez 1,3.

Pamiętaj: niższy **ISF** lub **I:C** oznacza silniejszy współczynnik i więcej podanej insuliny. Nowi użytkownicy **AAPS** łatwo o tym zapominają.

Po wybraniu procentu **AAPS** przelicza domyślną dawkę bazową, a **AAPS** (w otwartej lub zamkniętej pętli) dalej działa na podstawie wybranego procentu **profilu**.

Działanie **procentu profilu** pokazuje poniższa tabela:

| Zmiana profilu  
Procent |    Działanie    |     I:C  
g/U     | przykład  
15 g |          ISF  
mmol/L/U  
mg/dL/U          | U to lower  
2mmol/L  
40mg/dL |
|:------------------------:|:---------------:|:-----------------:|:---------------:|:------------------------------------------:|:------------------------------:|
|           90%            |     Słabszy     | 5/0,9  
=**5,55** |      2.7 U      | 2,2/0,9  
=**2,4**  
  
40/0,9  
=**44,4** |             0.8 U              |
|         **100%**         | **Standardowy** |       **5**       |     **3 U**     |                **2,2  
40**                |           **0.9** U            |
|           130%           |   Silniejszy    | 5/1,3  
=**3,85** |      3.9 U      | 2,2/1,3  
=**1,7**  
  
40/1,3  
=**30,8** |             1.2 U              |

(ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile)=

## Przesunięcie czasu w profilu dobowym

„Przesunięcie czasu” w **profilu** przesuwa ustawienia **profilu** na zegarze dobowym („okołodobowym”) o podaną liczbę godzin. Może to pomóc:

- **osobom pracującym na noce lub w systemie zmianowym**: przy pracy na noce ustaw w **profilu** liczbę godzin, o którą później lub wcześniej idziesz spać albo wstajesz; 
- **osobom zmieniającym strefę czasową w podróży**; lub
- **dzieciom z cukrzycą typu 1**: które mają stałą porę snu i insulinooporność uwzględnioną w **profilu**. Jeśli z jakiegoś powodu dziecko pójdzie spać później, opiekun może ustawić „przesunięcie czasu” w **profilu** dziecka. Wtedy **AAPS** zareaguje na insulinooporność w wybranym czasie.

Zawsze chodzi o to, ustawienia **profilu** z której godziny mają zastąpić ustawienia z aktualnej godziny. Ten czas trzeba przesunąć o x godzin. Dlatego uważaj na kierunek, tak jak w tym przykładzie:

- Aktualny czas: 12:00
- **Dodatnie** przesunięcie czasu 
    - 2:00 **+10 h** -> 12:00
    - Z powodu dodatniego przesunięcia czasu zamiast ustawień, które normalnie obowiązują o 12:00, zostaną użyte ustawienia z 2:00.
- **Ujemne** przesunięcie czasu 
    - 22:00 **-10 h** -> 12:00
    - Z powodu ujemnego przesunięcia czasu zamiast ustawień, które normalnie obowiązują o 12:00, zostaną użyte ustawienia z 22:00.

![Kierunki przesunięcia czasu w zmianie profilu](../images/ProfileSwitch_PlusMinus2.png)

Ten mechanizm zapisywania kopii **profilu** pozwala dużo dokładniej liczyć przeszłe wartości i śledzić zmiany **profilu**.

(ProfileSwitch-keep-for-later)=

## Zachowaj zmianę profilu na później

Gdy wykonasz zmianę profilu z procentem i/lub przesunięciem czasu, możesz skopiować ten tymczasowy profil do nowego profilu.

W tym celu otwórz menu (☰) → **Leczenie** i przejdź do zakładki **Zmiana profilu**, zobacz [Klonowanie zmiany profilu do nowego profilu](#your-aaps-profile-clone-profile-switch).