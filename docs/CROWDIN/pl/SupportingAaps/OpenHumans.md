# Open Humans Uploader

## Przekaż swoje dane na rzecz nauki

Możesz pomóc społeczności, przekazując swoje dane do projektów badawczych! To pomaga naukowcom oddać coś społeczności, rozwijać nowe pomysły naukowe i poszerzać wiedzę o systemach zamkniętej pętli open source. AAPS jest gotowy do synchronizacji Twoich danych z [Open Humans](https://www.openhumans.org), platformą, na którą możesz przesyłać, łączyć i przechowywać swoje dane osobowe – takie jak dane genetyczne, dane o aktywności i dane o zdrowiu.

Masz pełną kontrolę nad tym, co dzieje się z Twoimi danymi i które projekty chcesz wspierać, dając im dostęp do swoich danych. Zależnie od projektu, do którego dołączysz, dane są oceniane i używane na różne sposoby i w różnym zakresie.

Na Twoje konto Open Humans zostaną przesłane następujące dane:

- Wartości glukozy
- Zdarzenia Careportalu (poza notatkami)
- Bolus przedłużony
- Zmiany Profilu
- Całkowita dzienna dawka
- Tymczasowa dawka bazowa
- Cel tymczasowy (TT)
- Ustawienia
- Wersja aplikacji
- Model urządzenia
- Wymiary ekranu

Tajne lub prywatne informacje, takie jak adres URL Nightscout lub API secret, nie zostaną przesłane.

## Konfiguracja

1. Utwórz konto w [Open Humans](https://www.openhumans.org), jeśli jeszcze go nie masz. Jeśli chcesz, możesz użyć swojego istniejącego konta Google lub Facebook.
2. Włącz wtyczkę **Open Humans** w [**Konfiguracja** > **Komunikacja**](../SettingUpAaps/ConfigBuilder.md).

![Open Humans włączony w Konfiguracja > Komunikacja](../images/OHUploader1.png)

3. Dotknij **Ustawienia** na karcie **Open Humans**. Możesz ograniczyć przesyłanie do czasu, gdy telefon używa Wi-Fi (**Tylko przez WiFi**) i/lub jest ładowany (**Tylko podczas ładowania**).

![Ustawienia Open Humans z opcjami Tylko przez WiFi i Tylko podczas ładowania](../images/OHUploader_settings.png)

4. Dotknij **Otwórz wtyczkę** na karcie **Open Humans**, a następnie dotknij **Konfiguracja**.

![Ekran wtyczki Open Humans z przyciskiem Konfiguracja](../images/OHUploader_setup.png)

5. Na ekranie **Witaj w Open Humans** dotknij **Dalej**. Uważnie przeczytaj ekran **Zgoda**: pokazuje on warunki użytkowania oraz to, które dane są przesyłane, a które nie.
6. Włącz **Rozumiem i zgadzam się.** (1) i dotknij **Zaloguj się do Open Humans** (2).

![Ekrany Witaj i Zgoda dla Open Humans w AAPS](../images/OHUploader2.png)

7. Otworzy się strona Open Humans. Zaloguj się swoimi danymi logowania.
8. Zdecyduj, czy chcesz ukryć swoje członkostwo w AAPS Uploader w publicznym profilu Open Humans (1).
9. Kliknij **Authorize project** (2) (autoryzuj projekt).

![Logowanie i autoryzacja projektu na stronie Open Humans](../images/OHUploader_web.png)

```{admonition} Older screenshot
:class: note
Powyższe zrzuty ekranu pokazują starszą wersję strony Open Humans i nadal używają starej nazwy projektu **AndroidAPS Uploader**. Kroki są takie same.
```

10. Po powrocie do **AAPS** ekran **Ostatnie szlify** pyta, czy chcesz kontynuować. Dotknij **Kontynuuj**.
11. Poczekaj, aż pojawi się **Gotowe!**, a następnie dotknij **Zamknij**. Od teraz Twój telefon będzie od czasu do czasu przesyłać dane w tle.
12. Ekran wtyczki **Open Humans** pokazuje teraz Twój **Identyfikator członka projektu**. Dotknij **Prześlij teraz**, jeśli chcesz od razu rozpocząć przesyłanie.
13. Dotknij **Wyloguj się**, jeśli chcesz przestać przesyłać dane do Open Humans.
14. Powiadomienie Androida poinformuje Cię o trwającym przesyłaniu.

![Open Humans – zakończenie konfiguracji](../images/OHUploader3.png)

```{admonition} Older screenshot
:class: note
Zrzut ekranu powyżej pochodzi z wcześniejszej wersji **AAPS**. W **AAPS** 4 ekrany potwierdzenia to **Ostatnie szlify** i **Gotowe!**, nie ma rozmiaru kolejki, a przyciski to **Prześlij teraz** i **Wyloguj się**.
```

15. Możesz zarządzać swoimi danymi po zalogowaniu się na [stronie Open Humans](https://www.openhumans.org).

![Open Humans – zarządzanie danymi](../images/OHWeb.png)

## Możliwości udostępniania danych

### [Projekt „OPEN”](https://www.open-diabetes.eu/)

Projekt „OPEN” łączy międzynarodowe i międzysektorowe konsorcjum pacjentów-innowatorów, lekarzy, socjologów, informatyków i organizacji wspierających pacjentów. Celem jest badanie różnych aspektów systemów sztucznej trzustki „zrób to sam” (DIY APS), których używa coraz więcej osób z cukrzycą. Więcej informacji znajdziesz na ich [stronie](https://www.open-diabetes.eu/).

We wrześniu 2020 projekt „OPEN” uruchomił [ankietę](https://survey.open-diabetes.eu/), w której można też przekazać dane przesłane do Open Humans. [Poradnik](https://open-diabetes.eu/en/open-survey/survey-tutorials/), jak przekazać swoje dane do projektu „OPEN”, jest dostępny na ich stronie i w samej ankiecie.

### [OpenAPS Data Commons](https://www.openhumans.org/activity/openaps-data-commons/)

OpenAPS Data Commons powstał, aby w prosty sposób udostępniać zbiory danych społeczności DIYAPS do badań. Dane są udostępniane zarówno tradycyjnym naukowcom, którzy prowadzą tradycyjne badania, jak i grupom lub osobom ze społeczności, które chcą przejrzeć dane w ramach własnych projektów badawczych. OpenAPS Data Commons używa platformy „Open Humans”, aby ludzie mogli łatwo przesyłać i udostępniać swoje dane z systemów DIYAPS, w tym AAPS, Loop i OpenAPS.

Możesz przesłać swoje dane do Open Humans na jeden z trzech sposobów:

1. użyj opcji AAPS uploader, aby przesłać dane do Open Humans
2. użyj Nightscout Data Transfer, aby przesłać dane do Open Humans
3. ręcznie prześlij pliki z danymi do Open Humans.

Gdy utworzysz konto i Twoje dane zaczną trafiać do Open Humans, dołącz też do OpenAPS Data Commons, jeśli chcesz przekazać swoje dane do badań.

## Warunki użytkowania

To jest narzędzie open source, które kopiuje Twoje dane do [Open Humans](https://www.openhumans.org). Nie zachowujemy żadnych praw do udostępniania Twoich danych osobom trzecim bez Twojej wyraźnej zgody. Dane, które otrzymują projekt i aplikacja, są oznaczone losowym identyfikatorem użytkownika. Zostaną bezpiecznie przesłane na konto Open Humans tylko za Twoją zgodą na ten proces. W każdej chwili możesz zatrzymać przesyłanie i usunąć przesłane dane przez [www.openhumans.org](https://www.openhumans.org). Uwaga: niektóre projekty, które otrzymują dane, mogą tego nie obsługiwać.

Zobacz też [Warunki użytkowania Open Humans](https://www.openhumans.org/terms/).

## Prywatność danych

Open Humans chroni Twoją prywatność, nadając Ci numeryczny identyfikator osobno dla każdego projektu. This allows projects to recognize but not identify you. Identyfikator aplikacji (Application ID) przesyłany przez AAPS działa podobnie i służy tylko do zarządzania danymi. Więcej informacji znajdziesz tutaj:

- [Zasady używania danych Open Humans](https://www.openhumans.org/data-use/)
- [Open Humans i RODO (GDPR)](https://www.openhumans.org/gdpr/)
