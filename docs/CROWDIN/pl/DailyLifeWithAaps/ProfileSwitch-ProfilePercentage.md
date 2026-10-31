# Zmiana profilu i procent profilu

W tej części wyjaśniamy, czym jest **zmiana profilu** i **procent profilu**. Jak utworzyć **profil**, dowiesz się na stronie [Twój profil AAPS](#your-aaps-profile-create-and-edit-profiles).

Gdy zaczynasz pracę z **AAPS**, musisz utworzyć **profil**, nauczyć się wykonywać **zmianę profilu** i zrozumieć, jak działa **procent profilu** w **AAPS**. **Zmiana profilu** lub **procent profilu** mogą być szczególnie przydatne w takich sytuacjach:

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
    3. Dotknij okrągłego przycisku **▶** (**Aktywuj**) w prawym dolnym rogu. The **Activate** screen opens.
    4. Set the **Percentage** with **−** / **+** (steps of 5 %), or type it in (30 to 250 %). The field always starts at **100 %**: it does not show the percentage that is running now. For example, enter **80** for 20 % less insulin, or **120** for 20 % more.
    5. Set the **Duration** in minutes:
       * **0** keeps the new percentage until you make another **Profile Switch**;
       * any other value ends the switch after that time, and **AAPS** goes back to the **Profile** that was running before.
    
       ![The Activate screen set to 80 % for 60 minutes](../images/v4/Profiles/profile_activate_percentage.png)
    
    6. Tap **▶ Activate** at the bottom of the screen. Check the summary in the **Profile switch** dialog and tap **OK**.
    
       ![The confirmation dialog — profile, percentage and duration](../images/v4/Profiles/profile_activate_confirm.png)
    
    Back on the main screen, the profile name shows the percentage and the remaining time, for example *Normal (80%) (59')*, and turns yellow while a switch with a duration is running. A star marks the switch on the glucose graph. See [the main screen](#aaps-screens-profile--target).
    
    ![The main screen while an 80 % profile switch is running](../images/v4/Profiles/profile_switch_running.png)
    
    To **go back to 100 %** before the end, repeat the steps and keep **Percentage** at 100 and **Duration** at 0.
    
    ```{admonition} One-tap percentages
    :class: tip
    If you often use the same percentage (sport, illness), add a [Profile shortcut](#profile-shortcuts) to the Quick Launch bar, or create a [scene](Scenes.md). Both apply a profile with a preset percentage and duration in one tap.
    

(ProfileSwitch-manage-v4)=

## Managing and activating profiles (Manage → Profile)

In **AAPS** v4 profiles are managed and activated from the **Manage** screen (bottom navigation) → **Profile** (*“Manage and activate profiles”*).

The Profile screen shows your profiles as a **swipeable card carousel**. The card of the running profile is marked **ACTIVE** and shows its total daily basal (e.g. *∑ 30.15 U*). Below the selected card you see that profile's details — **Units**, **Insulin** type, and the **IC**, **ISF**, **basal** and **target** schedules with graphs.

![The Profile screen — profile carousel, details and action bar](../images/v4/Profiles/profile_manage.png)

The buttons at the bottom act on the **selected** profile: **➕ Add**, **✏️ Edit**, **⧉ Clone** and **‘️ Delete**, and the round **▶ Activate** button on the right. For how to fill in the four schedules in the editor (IC / ISF / BAS / TARG), see [Create and edit Profiles](#your-aaps-profile-create-and-edit-profiles).

**⧉ Clone** uses the two-squares icon often used for *copy*, but there is nothing to paste: it makes the duplicate in one step. Confirm *Clone profile "Normal"?* and a new profile named *Normal copy* is added at the end of the carousel and selected, ready for **✏️ Edit** (where you can also rename it). This is not the same as cloning a past **Profile Switch** from the Treatments history, which creates a new profile *with the percentage and time shift applied*. See [Keep a profile switch for later use](#ProfileSwitch-keep-for-later).

(ProfileSwitch-read-only-mode)= **Only the ▶ Activate button?** Your settings are protected, so the screen opens read-only. Tap the **✏️ pencil** in the top bar and enter your settings password. Zobacz [Ochrona ustawień blokuje teraz także ekrany zarządzania](#v4changes-read-only-management).

### Reordering profiles

If you have more than one profile you can choose their order in the carousel: tap the **Reorder** icon (⇅, two arrows pointing up and down) in the top bar. The page indicator is replaced by **◀ / ▶ move buttons** with a *position / total* readout — step the centred card earlier or later, then confirm with **✓** (or discard with **✕**). The new order is saved once, when you confirm.

![Reorder mode — move buttons and position readout](../images/v4/Profiles/profile_reorder.png)

### Activating a profile

Select a profile and tap **▶ Activate**. The **Activate** screen lets you tailor how the **Profile Switch** is applied:

![The Activate screen — percentage, duration, time shift, time](../images/v4/Profiles/profile_activate.png)

- **Percentage** (30–250 %, starts at 100 % every time) — scale the whole profile. 100 % uses it as-is; for example 70 % reduces basal and the calculated insulin dose (both meal boluses and corrections) by 30 %. It does not change your glucose targets or carb absorption. See [Profile Percentage](#profile-percentage) for the full effect.
- **Duration** (0–10080 minutes, that is up to 7 days) — how long the switch lasts. **0 = indefinite** (until you switch again); a non-zero value reverts to the previous profile when it ends.
- **Temporary target / Activity** — appears only when you set a **Duration** and a **Percentage** below 100 %. Switch it on to also start an [Activity temp target](#TempTargets-activity-temp-target) for the same duration, as you would before exercise.
- **Time shift** — shows *0h*; tap **Change** to move the schedule forward or back by up to 23 hours (useful for shift work or travel). See [Time shift](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile).
- **Reuse** — appears when the running switch has a percentage other than 100 % or a time shift, for example **Reuse 80% 0h**. Tap it to fill in the same percentage and time shift, for instance to prolong a switch that is about to end.
    
    ![The Reuse button while an 80 % switch is running](../images/v4/Profiles/profile_activate_reuse.png)

- **Time** — *Now* by default. You can pick another time, up to 24 hours before or after now. A switch set in the future starts at that time; an Activity temp target set with it then also starts at that time.
    
    ![Choosing the time of a profile switch](../images/v4/Profiles/profile_activate_time_picker.png)

- **Notes** — only shown if [Show notes in dialogs](#Preferences-show-notes-field-in-treatments-dialogs) is on.

If the basal rates at the chosen percentage are not compatible with your pump, a warning appears at the top and **▶ Activate** stays disabled: choose another percentage.

Tap **▶ Activate**, then **OK** in the confirmation dialog. The running profile then carries the **ACTIVE** badge on its card.

```{admonition} Your pump may round the basal rates :class: note Each pump can only give basal rates in its own steps (for example 0.05 U/h), so it rounds the rates of your **Profile**. **AAPS** then uses the basal the pump really gives, so IOB and TDD stay correct. If the pump gives a little more or less insulin per day than your **Profile**, the notice *"Basal profile in pump updated"* tells you how much, for example *"it gives 10.00 U per day instead of 10.12 U"*.

If the pump reports a basal that is far from your **Profile**, **AAPS** keeps the **Profile** basal and asks you to check the basal rates in the pump.

    <br />```{admonition} Percentage and time shift make one profile go a long way
    :class: note
    Rather than building many similar profiles, keep one base profile and apply it at a different **percentage** or **time shift** for recurring situations (illness, exercise, travel). This is exactly what [scenes](Scenes.md) automate.
    

A profile switch is not limited to this screen. The same switch can also be triggered from a **Wear OS watch**, a paired **client** (see [Master ↔ Client control](../RemoteFeatures/ClientMasterControl.md)), a **[scene](Scenes.md)**, or an **Automation** rule.

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
15 g |         ISF  
mmol/L/UI  
mg/dL/UI         | UI to lower  
2mmol/L  
40mg/dL |
|:------------------------:|:---------------:|:-----------------:|:---------------:|:------------------------------------------:|:-------------------------------:|
|           90%            |     Słabszy     | 5/0,9  
=**5,55** |      2,7 U      | 2,2/0,9  
=**2,4**  
  
40/0,9  
=**44,4** |              0,8 U              |
|         **100%**         | **Standardowy** |       **5**       |     **3 U**     |                **2,2  
40**                |            **0,9** U            |
|           130%           |   Silniejszy    | 5/1,3  
=**3,85** |      3,9 U      | 2,2/1,3  
=**1,7**  
  
40/1,3  
=**30,8** |              1,2 U              |

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

To do this, open the menu (☰) → **Treatments** and go to the **Profile switch** tab, see [Clone a Profile switch to a new Profile](#your-aaps-profile-clone-profile-switch).