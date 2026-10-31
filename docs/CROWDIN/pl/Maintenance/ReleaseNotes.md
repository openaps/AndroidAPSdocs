
# Informacje o wersji

```{toctree}
:hidden:

Update2_7.md
Update3_0.md
UpdateAaps3204.md
```

Please follow the instructions in the [update manual](UpdateToNewVersion.md) to update to a new version. Rozdział o rozwiązywaniu problemów na stronie z instrukcją aktualizacji opisuje też najczęstsze trudności przy aktualizacji **AAPS**.

```{admonition} Upgrading from AAPS v3?
:class: tip
Zobacz [Co zmieniło się w AAPS v4](V4Changes.md), aby poznać ważne zmiany w działaniu – funkcje, które zostały przeniesione, mają nową nazwę albo zostały usunięte.
```

Gdy dostępna jest nowa aktualizacja, dostaniesz takie powiadomienie:

![Informacje o aktualizacji](../images/AAPS_LoopDisable90days.png)

Jeśli nie zaktualizujesz do daty wygaśnięcia, **AAPS** przełączy się na Otwartą pętlę.

Daty końca wsparcia wersji AAPS znajdziesz na stronie [Koniec wsparcia](EndOfLife.md).

**Nie ignoruj tego powiadomienia.** Nowe wersje **AAPS** zawierają ważne poprawki bezpieczeństwa. Dlatego każdy użytkownik **AAPS** musi jak najszybciej zaktualizować do najnowszej wersji. This is an effort to try to improve the safety for each **AAPS** user and the DIY community. Dziękujemy za zrozumienie.

(maintenance-android-version-aaps-version)=

## Wersja Androida i wersja AAPS

Jeśli Twój smartfon ma Androida starszego niż Android 12, nie możesz używać AAPS v3.4 i nowszych, bo wymagają co najmniej Androida 12.

Aby użytkownicy ze starszym Androidem mogli używać starszej wersji AAPS, wydano nowe wersje, które zmieniają tylko sprawdzanie wersji. Nie zawierają innych ulepszeń.

Znajdź swoją wersję Androida w tabeli poniżej i użyj pasującej wersji **AAPS**. Kod pobierasz z <https://github.com/nightscout/AndroidAPS>, z podanej gałęzi.

| Twoja wersja Androida | Wersja AAPS do użycia | Gałąź do pobrania                                                |
| --------------------- | --------------------- | ---------------------------------------------------------------- |
| Android 12 i nowszy   | Najnowsza wersja      | [master](https://github.com/nightscout/AndroidAPS) (domyślna)    |
| Android 11            | **3.3.2.1**           | [3.3.2.1](https://github.com/nightscout/AndroidAPS/tree/3.3.2.1) |
| Android 9, 10         | **3.2.0.4**           | [3.2.0.4](https://github.com/nightscout/AndroidAPS/tree/3.2.0.4) |
| Android 8             | **2.8.2.1**           | [2.8.2.1](https://github.com/nightscout/AndroidAPS/tree/2.8.2.1) |
| Android 7             | **2.6.2**             | [2.6.2](https://github.com/nightscout/AndroidAPS/tree/2.6.2)     |

## Wersja na WearOS

- AAPS wymaga WearOS 3.0, 3.2 lub 3.5 (Android 11, API level 30) albo nowszego. Zegarki z WearOS 2 nie są obsługiwane.

```{tip}
WearOS 5, API level 34 (Android 14) ma [ograniczenia](#BuildingAapsWearOs-WearOS5).
```

**Release notes of the latest version of each major release**. For all other versions, see the [releases on GitHub](https://github.com/nightscout/AndroidAPS/releases).

(latestrelease)=

(version400)=

**Wersja 4.0.0**

Data wydania: 31.10.2026

**Nowe funkcje**

- Nowy interfejs: aplikacja na telefon przebudowana w Jetpack Compose @MilosKozak
- [Wyszukiwanie globalne](../DailyLifeWithAaps/GlobalSearch.md) @MilosKozak
- Migracja do Kotlin Multiplatform, klient dla komputerów z Windows, Mac i Linux oraz dla iOS @MilosKozak
- [Sceny](../DailyLifeWithAaps/Scenes.md): zapisz zestaw akcji i uruchamiaj je razem @MilosKozak
- [Sterowanie Master ↔ Client](../RemoteFeatures/ClientMasterControl.md): wysyłanie poleceń z telefonu opiekuna do urządzenia pacjenta @MilosKozak
  - [Role opiekunów](#client-master-control-roles): Tylko odczyt, Posiłki, Opiekun lub Administrator dla każdego urządzenia opiekuna @MilosKozak
  - [Tryb silniejszych zabezpieczeń](#client-master-control-hardened-mode): gdy sterowanie z urządzenia opiekuna jest włączone, urządzenie pacjenta przyjmuje zmiany tylko od sparowanych urządzeń opiekuna @MilosKozak
  - Parowanie kodem QR, który ustawia też Nightscout na urządzeniu opiekuna, albo kodem PIN; sekret parowania jest wymieniany zaraz po sparowaniu @MilosKozak
  - [Własny token Nightscout](#client-master-control-own-token) dla każdego urządzenia opiekuna, tylko z prawami, których ono potrzebuje @MilosKozak
- Obsługa [stężenia insuliny](../AdvancedOptions/InsulinConcentration.md) (U200, U500) w pompach, kalkulatorze i profilach @Philoul @MilosKozak
- Zarządzanie insuliną: katalog insulin, nazwy własne, wybór w profilu i kalkulatorze @Philoul
- Wtyczka kalibracji @MilosKozak
- [Wygładzanie](../CompatibleCgms/SmoothingBloodGlucoseData.md): Bezśladowy filtr Kalmana (UKF) @piecycle
- New [automation actions](#automations-automation-action): **Change smoothing** @olorinmaia, and **Run**, **Enable** or **Disable scene** @MilosKozak
- [Zmiana miejsca wkłucia](#Aapsscreens-site-rotation): śledzenie i zmiana miejsc wkłucia @Philoul @MilosKozak
- Przebudowany [Autotune](../AdvancedOptions/Autotune.md) @Philoul
- Nowe [widżety](../DailyLifeWithAaps/Widgets.md) @MilosKozak @t1dude
- Dostępność: aplikacja na telefon działa z czytnikiem ekranu – nazwane elementy sterujące, odczytywany stan, opisy wykresów i nagłówki do szybkiego przeglądania @MilosKozak
- [Import ustawień](../Maintenance/ExportImportSettings.md): może zachować ustawienia pompy @MilosKozak
- Stałe powiadomienie używa aktualizacji na żywo (live updates) Androida, z obsługą Samsung Now bar i zmianą (delta) @premnirmal
- Wykres BG: [naciśnij i przytrzymaj](#aaps-screens-graph-press-and-hold), aby zobaczyć wartości w danym punkcie, na każdym wykresie ekranu głównego @t1dude @olorinmaia
- Poprawa wydajności @MilosKozak
- Automatyczne eCarbs w Kalkulatorze bolusa @MilosKozak

**Nowe urządzenia**

- **CareLevo**: nowy [sterownik pompy](../CompatiblePumps/CareLevo.md) @Kisu-Choi @MilosKozak
- **Dana-i2**: obsługa @MilosKozak
- **Instara**: nowe źródło CGM @leohunt

**Ulepszenia sterowników pomp**

- Przebudowane ekrany przeglądu pompy dla Insight, Medtronic, Medtrum, Omnipod, Dana, Diaconn i Equil @MilosKozak
- **Omnipod Dash**: kody Ref jak w PDM i czytelne opisy błędów, kompensacja dryfu zawsze włączona, lepsze raportowanie typu bolusa @nl-ruud
- **Omnipod**: twarda data końca dla Dash i Eros @mcnelson
- **DanaR, RS**: emulator pompy do testów @MilosKozak
- **Equil**: emulator pompy do testów @MilosKozak
- Wiele poprawek pomp i pętli @MilosKozak i inni

**Wear OS**

- [Aplikacja na zegarek](../WearOS/WearOsSmartwatch.md) przebudowana w Compose, nowe kafelki i komplikacje, automatyczna instalacja tarczy zegarka (Watch Face Push) na Wear OS 6+ @olorinmaia @Philoul
- CustomWatchface dostępna dla WearOS 6.0 (GW7, GW8, GW9...) z osobną tarczą zegarka WFF @Philoul @olorinmaia
- CustomWatchface może teraz mieć 5 miejsc na komplikacje, które możesz dostosować (nowa funkcja dostępna tylko dla starszych zegarków) @Philoul
- Nowa [tarcza zegarka WFF oparta na komplikacjach AAPS](#wearos-complications-watchface-setup) @olorinmaia
- Poprawki w wyniku Kalkulatora bolusa i Szybkiego kalkulatora @olorinmaia
- Nowy wykres BG i aktywność Tryb pracy w głównym menu @olorinmaia
- Kalkulator bolusa: strona [rodzaju posiłku](#WearOsSmartwatch-wizard-meal-type), która dzieli węglowodany jak kalkulator w telefonie, oraz [czas węglowodanów](#WearOsSmartwatch-wizard-carb-time) z przypomnieniem *czas jeść* na zegarku @olorinmaia
- [Alarmy z telefonu na zegarku](#WearOsSmartwatch-phone-alarms): zegarek pokazuje alarm i oferuje Wycisz (Silence) i Wycisz na 5 min (Mute 5 min) @olorinmaia

**Budowanie**

- Workflow CI do budowania z tagów/gałęzi, mapowanie wersji JDK @Angus-repo

**Współtwórcy**

@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

Pełna lista zmian: <https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

---

(version3426)=

**Wersja 3.4.2.6**

- Equil: poprawa stabilności @MilosKozak

---

(version3321)=

**Wersja 3.3.2.1**

Data wydania: 13.08.2025

- Naprawiono połączenie Bluetooth z Omnipod na Androidzie 16
- Proces CI (Budowanie w przeglądarce)
- Naprawiono przeliczanie mmol/mg/dl
- Naprawiono zły wybór czasu w oknach dialogowych w niektórych strefach czasowych
- Naprawiono odczyt kluczy w trybie uproszczonym
- Naprawiono brakujące prognozy na zegarku
- Ulepszona Konfiguracja (Config Builder)
- Ulepszona pełna synchronizacja NSCv3

---

(version3300)=

**Wersja 3.3.2.0**

Data wydania: 27.03.2025

**Jak zaktualizować**

* Do zbudowania tej wersji potrzebujesz [Android Studio w wersji „Meerkat”](#Building-APK-recommended-specification-of-computer-for-building-apk-file) lub nowszej. Jeśli już zbudowałeś wersję 3.3.x, musisz ponownie zaktualizować Android Studio.

(version-enforcement)=

**Starting this version, notification and version enforcement has been simplified and softened and works following way:**

*  Brak wygaśnięcia, gdy urządzenie jest offline (bez połączenia z internetem). Oznacza to, że nie ma już okresów przejściowych 60 i 90 dni.
*  Po wygaśnięciu wymuszany jest tryb LGS
*  Ostrzeżenia/powiadomienia będziesz dostawać rzadziej:
   - pozostało 28+ dni: co 7 dni
   - pozostało 27–14 dni: co 3 dni
   - potem raz dziennie
   - Powiadomienie pojawia się po południu, aby nie przeszkadzać Ci w nocy
* Są tylko 2 rodzaje powiadomień
   - Dostępna jest nowa wersja (nie ma wpływu na AAPS)
   - Aplikacja wygaśnie w określonym dniu w przyszłości (nadal bez wpływu na AAPS) / wygasła (AAPS przejdzie w tryb LGS)

Other changes: [release notes on GitHub](https://github.com/nightscout/AndroidAPS/releases/tag/3.3.2.0).

---

(version3204)=

**[Wersja 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)**

Data wydania: 27.02.2024

To ostatnia wersja obsługująca Androida 10. Jeśli nie możesz zaktualizować do Androida 11, [zaktualizuj AAPS do wersji 3.2.0.4](#update-aaps-3204).

**Zmiany**

- Obsługa G7 przez xDrip
- Poprawki Medtrum
- Poprawka ikony automatyzacji
- Poprawka zaliczania zadania 1

---

**Wersja 2.8.2**

Data wydania: 23.01.2021

[Informacje o wersji](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

---

**Wersja 1.0**

```{admonition} First version of **AAPS**
:class: note

Pierwsza wersja testowa powstała w 2015 roku, a pierwsze wydanie w 2016 roku.

Dokładna chronologia tych wydań nie jest obecnie dostępna, ale to pytanie padało już kilka razy, więc zapisujemy to tutaj.

```
![AAPS 1.0](../images/update/AAPS1.0.png)
