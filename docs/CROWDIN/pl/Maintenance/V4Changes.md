(v4-changes)=
# Co zmieniło się w AAPS v4

Ta strona zbiera ważne **zmiany w działaniu** między **AAPS** v3 i v4 – rzeczy, które działają inaczej, zostały przeniesione lub usunięte – aby obecni użytkownicy wiedzieli, czego się spodziewać po aktualizacji. Zobacz też [Informacje o wersji](ReleaseNotes.md) i [instrukcję aktualizacji](UpdateToNewVersion.md).

```{contents} Table of contents
:depth: 2
:local: true
```

---

## NSClient v1 został usunięty

**AAPS** v3 miał **dwie** wtyczki do synchronizacji z Nightscout:

- **NSClient** – stary klient (stare API Nightscout REST / socket.io, nazywane też *„v1”*) oraz
- **NSClientV3** – klient dla nowszego **API v3** Nightscout.

W **AAPS** v4 stara wtyczka **NSClient (v1)** została **usunięta**. Do synchronizacji z Nightscout zostaje tylko **NSClientV3**.

```{admonition} What you need to do
:class: important
Jeśli dane były nadal synchronizowane przez starą wtyczkę **NSClient (v1)** (u Ciebie lub u obserwującego w **AAPSClient**), przełącz się na **NSClientV3** przed aktualizacją lub po niej:

- Otwórz **[Konfiguracja](../SettingUpAaps/ConfigBuilder.md) → Komunikacja → NSClientV3**.
- Wpisz **Adres URL strony Nightscout** i **token dostępu** (NSClientV3 używa tokena dostępu, *nie* starego API secret – zobacz [tworzenie tokena](https://nightscout.github.io/nightscout/security/#create-a-token)).
- Twoja strona Nightscout musi obsługiwać **API v3** (Nightscout 15 lub nowszy).
- Jeśli używasz **websockets**, włącz je lub wyłącz na **obu** urządzeniach – na urządzeniu pacjenta i u obserwującego – nigdy tylko na jednym.
```

Zmienia to tylko sposób, w jaki aplikacja komunikuje się z Nightscout. Twoje dane w Nightscout się nie zmieniają.

---

## Dolny pasek nawigacji: Leczenie, Sceny i Zarządzaj

W **AAPS** v3 poruszałeś się po aplikacji za pomocą rzędu **zakładek** (Przegląd, Akcje, Leczenie, …), a kilka funkcji było **wtyczkami**, które włączałeś w Konfiguracji (**Akcje**, **Automatyzacja**, **Żywność**, …).

W **AAPS** v4 nie ma już zakładek. Nie ma też pola wyboru z okiem w Konfiguracji, które pokazywało wtyczkę jako zakładkę. Ekranem głównym jest **Przegląd** (Overview), a **dolny pasek nawigacji** daje Ci trzy panele. **Akcje, Automatyzacja i Żywność nie są już wtyczkami** – w [Konfiguracji](../SettingUpAaps/ConfigBuilder.md) (nowa nazwa Config Builder) nie trzeba niczego włączać. Ich funkcje są teraz w tych panelach.

(v4changes-treatments)=
### Leczenie – wprowadzanie i podawanie

Panel **Leczenie** służy do zapisywania lub podawania leczenia: **Kalkulator bolusa**, **Insulina** (ręczny bolus), **Węglowodany**, **Bolus i węglowodany** (insulina i węglowodany razem), **Kalibracja**, **CGM** (otwiera Twoją aplikację CGM, jeśli jest skonfigurowana) oraz Twoje **[Szybkie kalkulatory](../DailyLifeWithAaps/QuickWizards.md)**.

![Panel Leczenie na dole ekranu](../images/v4/BehavioralChanges/treatments_sheet.png)

Na **zegarku z Wear OS** te same rodzaje leczenia wprowadzasz z **menu AAPS** na zegarku (Kalkulator bolusa / Kalkulator, eCarbs, Terapia, …):

![Akcje leczenia w menu AAPS na zegarku](../images/v4/BehavioralChanges/treatments_watch.png)

### Sceny

Twoje ustawienia dla różnych sytuacji – zobacz [Sceny (ustawienia dla sytuacji)](../DailyLifeWithAaps/Scenes.md).

(v4changes-manage)=
### Zarządzaj – zarządzanie i aktywacja

Panel **Zarządzaj** służy do zarządzania i aktywacji wszystkiego innego: **[Profil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)**, **Ustawienia insuliny** (Twoje konfiguracje insuliny), **[Cel tymczasowy](../DailyLifeWithAaps/TempTargets.md)**, ustawienia **[Szybki kalkulator](../DailyLifeWithAaps/QuickWizards.md)**, **[Sceny](../DailyLifeWithAaps/Scenes.md)**, **Automatyzacja**, **Żywność**, **Zmiana miejsca**, **Pompa**, **[Autoryzowani opiekunowie](../RemoteFeatures/ClientMasterControl.md)** – oraz akcje pompy, które wcześniej były na zakładce *Akcje* (**Bolus Przedłużony**, **Anuluj bazę tymczasową**, **Napełnij/Wypełnij**, **Założenie sensora**, **Zmiana baterii pompy**).

![Panel Zarządzaj na dole ekranu](../images/v4/BehavioralChanges/manage_sheet.png)

Wszystkie Twoje reguły automatyzacji i wpisy żywności zostają zachowane. Zmienił się tylko sposób, w jaki do nich docierasz.

(screens-action-tab)=
#### Gdzie jest zakładka Akcje?

**AAPS** 3.x miał zakładkę „Akcje”. W **AAPS** 4 jej funkcje są w innych miejscach:

* **Zmiana profilu** i **Procent profilu**: dotknij [nazwy profilu](#aaps-screens-profile--target) na ekranie głównym albo wybierz **Zarządzaj → Profil**. Zobacz [Zmiana procentu profilu](#ProfileSwitch-change-percentage).
* **Cel tymczasowy**: naciśnij [cel](#aaps-screens-profile--target) na ekranie głównym albo wybierz **Zarządzaj → Cel tymczasowy**.
* **Napełnij/Wypełnij**, **Założenie sensora**, **Sprawdź BG** i inne wpisy portalu opieki: w rozwiniętym [panelu stanu](#aaps-screens-careportal), w **Zarządzaj** lub jako przyciski [QuickLaunch](../DailyLifeWithAaps/QuickLaunch.md).
* **Przegląd historii**, **Statystyki** (TDD): w **menu** (☰).

```{admonition} Profile switch and profile percentage
:class: note
W **AAPS** v3 długie naciśnięcie nazwy profilu otwierało okno zmiany profilu (procent, czas trwania, cel tymczasowy Ćwiczenia). W **AAPS** v4 **dotknij** nazwy profilu (lub wybierz **Zarządzaj → Profil**), a potem dotknij okrągłego przycisku **▶** w prawym dolnym rogu, aby otworzyć te same ustawienia. Zobacz [Zmiana procentu profilu](#ProfileSwitch-change-percentage).
```

---

(v4changes-read-only-management)=
## Ochrona ustawień blokuje teraz także ekrany zarządzania

W **AAPS** v3 [Ochrona ustawień](#Preferences-settings-protection) pytała o hasło tylko przy otwieraniu ustawień. Bez hasła mogłeś nadal dodawać lub edytować profile na zakładce **Profil lokalny**.

W **AAPS** v4 Ochrona ustawień obejmuje też edycję na ekranach zarządzania: **Profil**, **Ustawienia insuliny**, **Cel tymczasowy** i **Szybki kalkulator**. Jeśli Twoje ustawienia są zablokowane, te ekrany otwierają się **tylko do odczytu**:

- Możesz przeglądać wpisy i używać ich (lub nacisnąć **▶ Aktywuj**).
- Przyciski **Dodaj / Edytuj / Sklonuj / Usuń** są **ukryte**. Tylko **✏️ ołówek** na górnym pasku pokazuje, że możesz odblokować edycję.

![Ekran Profil tylko do odczytu – na dole tylko Aktywuj, ołówek na górnym pasku](../images/v4/Profiles/profile_manage_readonly.png)

```{admonition} What you need to do
:class: important
Aby dodać, edytować, sklonować lub usunąć wpis, dotknij **✏️ ołówka** na górnym pasku i wpisz hasło do ustawień (lub użyj biometrii). Pojawią się przyciski.

Jeśli nie potrzebujesz chronić ustawień, możesz wyłączyć Ochronę ustawień w **Ustawienia → Ochrona aplikacji**.
```

---

(v4changes-active-insulin)=
## Używanej insuliny nie można edytować

W **AAPS** v3 mogłeś w każdej chwili zmienić DIA używanej insuliny.

W **AAPS** v4 insulina oznaczona jako **AKTYWNY** w **Zarządzaj → Ustawienia insuliny** jest wyszarzona: nie możesz jej edytować ani usunąć.

Po aktualizacji **AAPS** zachowuje insulinę i DIA, które zapisały już Twoje zmiany profilu z v3. Jeśli znajdzie starsze wpisy ze znaną insuliną, ale bez DIA, użyje dla nich domyślnego DIA i raz pokaże komunikat, na przykład *Starsze wpisy nie miały czasu aktywności insuliny (DIA), więc dla Lyumjev zastosowano 9,0 godziny. Sprawdź ustawienia insuliny - wpisy, które zostały już zmigrowane, nie są później aktualizowane.* Gdy zobaczysz ten komunikat, sprawdź swoje ustawienia insuliny.

```{admonition} What you need to do
:class: important
Aby zmienić DIA lub szczyt, dodaj nową insulinę przyciskiem **+**, dostosuj ją, zapisz i **▶ Aktywuj**. Zobacz [Zmiana używanej insuliny](#Config-Builder-insulin-change-active).
```

---

(v4changes-remote-control)=
## Zdalne sterowanie z AAPSClient wymaga sparowania

W **AAPS** v3 **AAPSClient** sterował **AAPS** przez zapisywanie wpisów portalu opieki w Nightscout i nie mógł podać bolusa.

W **AAPS** v4 urządzenie opiekuna i główny telefon są raz **parowane**, a każde polecenie jest podpisane. Główny telefon sprawdza i potwierdza każde polecenie, a urządzenie opiekuna może teraz także podać bolus.

- Każde urządzenie opiekuna ma **[rolę](#client-master-control-roles)**, która ogranicza, co może robić.
- Gdy sterowanie z urządzenia opiekuna jest włączone, główny telefon działa w **[trybie silniejszych zabezpieczeń](#client-master-control-hardened-mode)**: leczenie i zmiany wpisane bezpośrednio do Nightscout (na stronie, w innych aplikacjach) nie są już stosowane.
- Każde urządzenie opiekuna dostaje **[własny token Nightscout](#client-master-control-own-token)** tylko z potrzebnymi uprawnieniami.

```{admonition} What you need to do
:class: important
Sparuj każdy **AAPSClient** z głównym telefonem: zobacz [Sterowanie Master ↔ Client](#client-master-control). Jeśli główny telefon ma token administratora, pokazuje kod QR, który jednym skanem konfiguruje i paruje urządzenie opiekuna. Jeśli wcześniej wpisywałeś leczenie na stronie Nightscout, wpisuj je teraz na sparowanym urządzeniu opiekuna.
```

---

## Zduplikowane dane BG przełączają teraz pętlę w tryb zawieszenia przy niskiej glikemii

Gdy **AAPS** otrzyma ten sam odczyt BG dwa razy (czerwony znak ostrzeżenia na skrócie źródła BG na dolnym pasku), nie może wiarygodnie obliczyć trendu, więc przestaje podawać insulinę korekcyjną.

W **AAPS** v3 działo się to po cichu w tle: pętla nadal była pokazywana jako **Zamknięta pętla**, chociaż nie mogła już korygować.

W **AAPS** v4 ta zmiana jest widoczna. Zamknięta pętla przełącza się w tryb **Zawieszenie przy niskiej glikemii**, a okno pętli podaje powód: *„Tryb LGS z powodu zduplikowanych wartości w źródle glikemii”*. **AAPS** nadal może zmniejszyć lub wstrzymać bazę, aby chronić Cię przed niedocukrzeniem.

```{admonition} What you need to do
:class: important
Znajdź i usuń zduplikowane odczyty – zobacz [Znak ostrzeżenia BG](#aaps-screens-bg-warning-sign).

Gdy znikną, **AAPS** zostaje w trybie **Zawieszenie przy niskiej glikemii**. Nie wraca sam do **Zamknięta pętla**: naciśnij i przytrzymaj ikonę pętli i wybierz ponownie **Zamknięta pętla**.
```

---

(v4changes-tidepool)=
## Tidepool: dane są teraz pokazywane pod nazwą urządzenia AAPS

W **AAPS** v3 dane wysłane do [Tidepool](../SettingUpAaps/Tidepool.md) były pokazywane w Tidepool pod inną nazwą urządzenia.

W **AAPS** v4 dane są pokazywane pod nazwą urządzenia **AAPS**. Po aktualizacji **AAPS** zaczyna w Tidepool nowy zestaw danych. Twoje starsze dane zostają w Tidepool pod starą nazwą urządzenia.

```{admonition} What you need to do
:class: important
Zwykle nic: nowe dane po prostu pojawiają się pod **AAPS**.

**Nie** uruchamiaj „**Pełna synchronizacja**”, gdy stare dane są nadal w Tidepool: te same dane byłyby wtedy dwa razy. Jeśli chcesz mieć wszystkie dane pod nową nazwą, najpierw użyj przycisku „**Wyczyść wszystkie dane**” na [ekranie Tidepool](#tidepool-menu) (usuwa on też stare dane wysłane przez **AAPS**), a potem uruchom „**Pełna synchronizacja**”. Tylko dane, które są nadal zapisane w **AAPS** na Twoim telefonie, można wysłać ponownie.
```

---


<!-- =====================================================================
     This page is a growing list of v4 behavioral changes.
     Add new changes as their own "## " section, newest grouping as agreed.
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
