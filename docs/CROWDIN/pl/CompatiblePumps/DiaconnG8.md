# Diaconn G8

```{contents} Table of contents
:depth: 1
:local: true
```

## Funkcje pompy w AAPS

* Komunikuje się z **AAPS** przez wbudowany Bluetooth telefonu, bez dodatkowego urządzenia pośredniczącego.
* Zmiany czasu letniego/zimowego i strefy czasowej trzeba obsłużyć ręcznie.

## Parowanie pompy insulinowej przez Bluetooth

- Dotknij **menu** (☰) w lewym górnym rogu.

![Menu z pozycją Konfiguracja](../images/v4/Configuration/configuration_menu.png)

- Dotknij **Konfiguracja** > **Pompa** i wybierz **Diaconn G8**.

![Konfiguracja > Pompa z wtyczką Diaconn G8](../images/v4/Configuration/configuration_pump_list_3.png)

Po wybraniu karta **Diaconn G8** pokazuje dwa przyciski: **Ustawienia** i **Otwórz wtyczkę**:

![Wtyczka Diaconn G8 wybrana w Konfiguracja > Pompa](../images/v4/Pumps/diaconn_g8_enabled.png)

**Ustawienia** otwierają ustawienia sterownika Diaconn G8 (patrz [Ustawienia pompy insulinowej Diaconn G8](#diaconn-g8-insulin-pump-option-setting) poniżej).

**Otwórz wtyczkę** (lub **Zarządzaj** > **Pompa**) otwiera ekran pompy Diaconn G8. Zanim pompa zostanie sparowana, ekran wygląda tak:

![Ekran pompy Diaconn G8 przed parowaniem](../images/v4/Pumps/diaconn_g8_pump_screen.png)

![image](../images/DiaconnG8/DiaconnG8_04.jpg)

```{admonition} Older screenshot
:class: note
Zrzut ekranu powyżej pochodzi z wcześniejszej wersji **AAPS**. W **AAPS** 4 parowanie zaczyna się od przycisku **Sparuj** na ekranie pompy; nie ma ustawienia **Wybrana pompa**.
```

- Na ekranie pompy dotknij **Sparuj**. Otworzy się ekran **Parowanie pompy Diaconn**, a **AAPS** wyszuka pompy w pobliżu.
- Gdy numer modelu Twojej pompy pojawi się na liście, dotknij go (na przykład **DIACONN-65010**).

![Ekran Parowanie pompy Diaconn podczas wyszukiwania pomp](../images/DiaconnG8/DiaconnG8_05.png)

- Numer modelu możesz sprawdzić na dwa sposoby:

1. Ostatnie 5 cyfr numeru SN na tylnej ściance pompy.
2. Naciśnij przycisk O > Information > BLE > ostatnie 5 cyfr.

![image](../images/DiaconnG8/DiaconnG8_06.jpg)

- Po wybraniu pompy pojawi się okno z prośbą o kod PIN. Wpisz numer PIN wyświetlony na pompie, aby zakończyć łączenie.

 ![image](../images/DiaconnG8/DiaconnG8_07.jpg)

- Gdy pojawi się **Sparowano pomyślnie!**, dotknij **OK**, aby wrócić do ekranu pompy.

## Sprawdzanie stanu pompy i synchronizacja logów

- Gdy pompa jest połączona, otwórz ekran pompy (**Zarządzaj** > **Pompa**). Pokazuje on stan pompy (bateria, zbiornik, ostatnie połączenie, ostatni bolus, dawka bazowa i inne).
- Dotknij **Odśwież**, aby połączyć się z pompą, zaktualizować stan i zsynchronizować logi.
- Dotknij **Historia pompy**, aby zobaczyć historię odczytaną z pompy.

![image](../images/DiaconnG8/DiaconnG8_08.jpg)

```{admonition} Older screenshot
:class: note
Zrzut ekranu powyżej pochodzi z wcześniejszej wersji **AAPS**. W **AAPS** 4 stan pompy jest widoczny na ekranie pompy (**Zarządzaj** > **Pompa**) i synchronizowany przyciskiem **Odśwież**.
```

(diaconn-g8-bluetooth-troubleshooting)=

## Rozwiązywanie problemów z Bluetooth

**Co zrobić, gdy połączenie Bluetooth z pompą jest niestabilne.**

### Metoda 1) Uruchom ponownie AAPS, a potem znowu sprawdź pompę

- Dotknij **menu** (☰) w lewym górnym rogu.
- Dotknij **Wyjście** na dole menu.

![Menu z pozycją Wyjście na dole](../images/v4/Configuration/configuration_menu.png)

- Uruchom ponownie **AAPS** i sprawdź połączenie z pompą.

### Metoda 2) Jeśli pierwsza metoda nie działa, rozłącz Bluetooth i połącz ponownie.

- Naciśnij i przytrzymaj przycisk Bluetooth na górze przez około 3 sekundy.

![image](../images/DiaconnG8/DiaconnG8_11.jpg)

- Naciśnij przycisk ustawień (Setting) przy sparowanej pompie insulinowej Diaconn G8.

![image](../images/DiaconnG8/DiaconnG8_12.jpg)

- Rozparuj.

![image](../images/DiaconnG8/DiaconnG8_13.jpg)

- W **AAPS** otwórz ekran pompy (**Zarządzaj** > **Pompa**), dotknij **Rozparuj** i potwierdź **Zresetować sparowanie?**.
- Powtórz parowanie pompy przez Bluetooth (patrz wyżej).

## Więcej informacji

(diaconn-g8-insulin-pump-option-setting)=

### Ustawienia pompy insulinowej Diaconn G8

- **Konfiguracja** > **Pompa** > **Diaconn G8** > **Ustawienia**
- Możesz też na ekranie pompy (**Zarządzaj** > **Pompa**) dotknąć ikony ustawień (koło zębate) w prawym górnym rogu.

![Ustawienia sterownika Diaconn G8](../images/v4/Pumps/diaconn_g8_settings.png)

- **Prędkość podawania bolusa** określa, jak szybko pompa podaje bolus.
- Jeśli opcja **Zapisz zmianę zbiorniczka** jest włączona, odpowiednie dane są automatycznie wysyłane do Portalu opieki, gdy wystąpi zdarzenie „Insulin Change” (wymiana insuliny).
- Jeśli opcja **Zapisz zmianę wkłucia** jest włączona, odpowiednie dane są automatycznie wysyłane do Portalu opieki, gdy wystąpi zdarzenie „Site Change” (zmiana wkłucia).
- Jeśli opcja **Zapisz zmianę drenu** jest włączona, odpowiednie dane są automatycznie dodawane jako notatka, gdy wystąpi zdarzenie „Tube Change” (zmiana drenu).
- Jeśli opcja **Zapisz zmianę baterii** jest włączona, odpowiednie dane są automatycznie wysyłane do Portalu opieki, gdy wystąpi zdarzenie „Battery Change” (zmiana baterii). Zmianę baterii możesz też zapisać sam przez **Zarządzaj** > **Zmiana baterii pompy**. (Uwaga: przed wymianą baterii zatrzymaj wszystkie trwające funkcje podawania insuliny.)
- **Synchronizacja z Diaconn Cloud** wysyła logi pompy do Diaconn Cloud.

![Menu akcji Diaconn G8](../images/DiaconnG8/DiaconnG8_15.jpg)

```{admonition} Older screenshot
:class: note
Zrzut ekranu powyżej pochodzi z wcześniejszej wersji **AAPS**. W **AAPS** 4 zmianę baterii zapisuje się przez **Zarządzaj** > **Zmiana baterii pompy**; nie ma zakładki **Akcje**.
```

### Funkcja bolusa przedłużonego

- Jeśli używasz bolusa przedłużonego, zamknięta pętla zostanie wyłączona.
- Na [tej stronie](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) znajdziesz wyjaśnienie, dlaczego bolus przedłużony nie działa w zamkniętej pętli.

## Gdzie uzyskać pomoc

Sterownik Diaconn G8 jest rozwijany przez społeczność na zasadzie **wolontariatu**. Zanim poprosisz o pomoc:

1. **Przeczytaj** odpowiedni rozdział tej dokumentacji, aby sprawdzić, jak dana funkcja ma działać.
2. **Zapytaj** na kanale *#AAPS* na [Discordzie](https://discord.gg/4fQUWHZ4Mw) lub na jednym z innych [kanałów społeczności](../GettingHelp/WhereCanIGetHelp.md).
3. **Zgłoś błąd**: najpierw przeszukaj [istniejące zgłoszenia](https://github.com/nightscout/AndroidAPS/issues); jeśli Twojego problemu tam nie ma, utwórz [nowe zgłoszenie](https://github.com/nightscout/AndroidAPS/issues) i dołącz [pliki logów](../GettingHelp/AccessingLogFiles.md).

Gdy prosisz o pomoc, podaj markę i model telefonu, wersję Androida, wersję **AAPS** oraz prosty, jasny opis problemu (co się zmieniło, kiedy ostatnio działało).
