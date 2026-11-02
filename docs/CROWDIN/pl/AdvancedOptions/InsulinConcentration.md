(Insulin-Concentration)=
# Stężenie insuliny

```{warning}
Wszystkie komercyjne pompy są przeznaczone **WYŁĄCZNIE** do insuliny U100. Używanie w pompie insuliny o innym stężeniu może być niebezpieczne. Coraz więcej użytkowników używa AAPS z innymi stężeniami, ale przeliczanie trzeba zawsze kontrolować i często prowadzi ono do błędów (nawet u bardzo doświadczonych użytkowników!).
```

## Przypomnienie podstaw o insulinie

Ten rozdział opisuje podstawowe pojęcia dotyczące mierzenia i podawania insuliny.

### Jednostka insuliny: miara działania

Insulinę mierzy się w **jednostkach międzynarodowych (IU)**. Określają one jej aktywność biologiczną (zdolność obniżania poziomu glukozy), a nie tylko jej masę.

- **Definicja:** 1 IU to aktywność określonej ilości insuliny, ustalona na **około 0,04167 mg**.
- **Najważniejsze:** „Jednostka” oznacza ten sam efekt biologiczny we wszystkich rodzajach insuliny. Dzięki temu dawkowanie jest spójne.

### Stężenia insuliny

Insulina ma różne stężenia, określone liczbą jednostek na mililitr (ml).

- **U100:** Światowy standard, zawiera **100 IU/ml**.
- **U200-U500:** Insuliny bardziej stężone (np. U200 ma 200 IU/ml), aby wstrzykiwać mniejszą objętość.
- **U40/U50:** Less common, historical concentrations (40 IU/ml and 50 IU/ml). **U40 wymaga strzykawek przeznaczonych do U40.**
- **Ręczne rozcieńczanie:** Praktyka kliniczna, w której przygotowuje się mocno rozcieńczoną insulinę (np. U50, U10) w rzadkich przypadkach, np. u noworodków lub przy skrajnej wrażliwości na insulinę. Wymaga to bardzo starannego przygotowania w aptece.

```{admonition} Critical Warning
:class: danger
Używanie insuliny o stężeniu niepasującym do urządzenia jest skrajnie niebezpieczne i może spowodować ciężkie przedawkowanie lub zbyt małą dawkę. **Zawsze sprawdź trzy razy, czy stężenie insuliny pasuje do strzykawki, pena lub pompy.**
```

## When is a non-standard concentration used?

Pompy insulinowe są przeznaczone do insuliny U100, ale w niektórych szczególnych sytuacjach medycznych potrzebne są niestandardowe stężenia. Takie sytuacje wymagają ogromnej ostrożności i bardzo starannego prowadzenia terapii.

### Przypadek 1: rozcieńczona insulina do bardzo małych dawek

- **Sytuacja:** Leczenie cukrzycy typu 1 u bardzo małych niemowląt i małych dzieci.
- **Problem:** Ich zapotrzebowanie na insulinę jest tak małe, że najmniejsza dawka, jaką może podać pompa (np. 0,05 U), może nadal być za duża. Utrudnia to dokładną kontrolę glikemii i daje duże ryzyko hipoglikemii.
- **Rozwiązanie:** Użyj mocno rozcieńczonej insuliny (np. U10, czyli 10 IU/ml).
- **Efekt:** Zwiększa to objętość płynu podawanego na jednostkę insuliny. „Porcje” insuliny mają wtedy większą objętość, ale mniejsze stężenie. Pozwala to na dużo drobniejsze zmiany i dokładniejsze dawkowanie przy obecnych ustawieniach pompy.

```{admonition} Critical Safety Note on Dilution
:class: danger
Rozcieńczanie insuliny to procedura wysokiego ryzyka. Nigdy nie próbuj tego w domu bez specjalnego przeszkolenia i nadzoru lekarza. Musi to zrobić pracownik ochrony zdrowia lub przeszkolony opiekun, używając sterylnego rozcieńczalnika przeznaczonego dla danego rodzaju insuliny. **Nigdy nie używaj wody z kranu, soli fizjologicznej ani żadnego innego płynu**, ponieważ może to dezaktywować insulinę, zmienić jej działanie i wprowadzić niebezpieczne zanieczyszczenia.
```

### Przypadek 2: stężona insulina przy dużym zapotrzebowaniu na insulinę lub znacznej insulinooporności

- **Sytuacja:** Leczenie dorosłych lub nastolatków ze znaczną insulinoopornością albo osób, które odczuwają miejscowy ból z powodu dodatków w standardowej insulinie.
- **Problem:**
  1. **Duże zapotrzebowanie:** Bardzo duże dzienne zapotrzebowanie na insulinę może przekraczać maksymalny bolus pompy lub jej dzienne limity podawania.
  1. **Ból:** Konserwanty w insulinie mogą powodować pieczenie lub podrażnienie podczas wlewu.
- **Rozwiązanie:** Użyj bardziej stężonej insuliny, np. U200 (200 IU/ml).
- **Efekt:** Potrzebna dawka insuliny jest podawana w połowie objętości. Ze względu na podwójne stężenie trzeba dostosować wewnętrzne ustawienia pompy (np. zmniejszyć o połowę dawki bazowe i bolusy), aby została podana właściwa liczba jednostek. Zmniejsza to też objętość płynu podawanego pod skórę, który może podrażniać.

## Jak obsłużyć stężenie insuliny w AAPS (AAPS 3 i starsze)?

Używanie insuliny innej niż U100 w pętli AAPS wymaga bardzo starannej konfiguracji, aby obliczenia programu zgadzały się z insuliną, która jest naprawdę podawana. Jedna z popularnych metod to „Użycie zmodyfikowanego profilu”.

### Użycie zmodyfikowanego profilu

Ta metoda polega na „oszukaniu” AAPS, aby uważał, że zapotrzebowanie pacjenta na insulinę jest mniejsze niż w rzeczywistości. Wyrównuje to fakt, że pompa podaje insulinę bardziej stężoną niż ta, do której jest przeznaczona. Poniższy przykład dotyczy insuliny U200 w pompie przeznaczonej do U100.

- **Główny problem:** Pompa przeznaczona do U100 jest skalibrowana tak, aby podawać **10 µl** na **1 jednostkę**. Jeśli napełnisz ją insuliną U200 (1 jednostka U200 to **5 µl** insuliny), to gdy wybierzesz w pompie **1 jednostkę**, poda ona **10 µl** insuliny. Ta objętość zawiera jednak **2 jednostki insuliny U200**. Prowadzi to do przedawkowania o 100%.
- **Rozwiązanie „Zmiana profilu 50%”:** Aby to poprawić, cały profil terapii pacjenta jest w AAPS przeskalowany tak, aby był „dwa razy słabszy”.
  1. Użytkownik tworzy nowy profil na podstawie swojego standardowego profilu U100, używając funkcji „Zmiana profilu **50%**”.
  1. Powstaje nowy profil, w którym:
     - **Dawki bazowe** są zmniejszone o połowę.
     - **Współczynnik insulina/węglowodany (IC)** jest podwojony (np. 1:10 g zmienia się na 1:20 g).
     - **Współczynnik wrażliwości na insulinę (ISF)** jest podwojony (np. „1 jednostka obniża BG o 50 mg/dl (2,8 mmol/l)” zmienia się na „1 jednostka obniża BG o 100 mg/dl (5,6 mmol/l)”).
- **Poprawiony wynik:** AAPS uważa teraz, że pacjent potrzebuje tylko połowy insuliny. Gdy AAPS obliczy i zleci bolus **1 jednostki**, pompa (przeznaczona do U100, ale napełniona U200) poda **10 µl**, które zawierają **2 rzeczywiste jednostki insuliny U200**. Ponieważ AAPS obliczył tę dawkę na podstawie profilu „o połowie mocy”, podanie **2 rzeczywistych jednostek** to właściwa, zamierzona dawka. Obliczenia pętli „o połowie mocy” zgadzają się z podawaniem „podwójnej mocy” przez pompę.

```{admonition} Critical Risks and Common Errors
:class: caution

Ta metoda niesie duże ryzyko, ponieważ tworzy stały rozdźwięk między danymi w aplikacji a rzeczywistością.

**Główny błąd: niezgodność przy „bolusie zewnętrznym”**

Najczęstszy błąd zdarza się, gdy insulina jest podawana i zapisywana **poza** systemem AAPS i pompy.

- **Sytuacja:** AAPS ze zmodyfikowanym profilem oblicza bolus **5 jednostek** na posiłek. Użytkownik wstrzykuje go penem U200.
- **Podwójny błąd:**
  1. **Wybór złej dawki:** Użytkownik myśli „AAPS oblicza 5 jednostek” i, ponieważ ma pen U200, chce podać **5 rzeczywistych jednostek U200** bez żadnego przeliczania. Jednak ponieważ profil jest zmniejszony o połowę, organizm naprawdę potrzebuje **10 rzeczywistych jednostek**. To jest **dawka mniejsza o 50%**, co może prowadzić do hiperglikemii.
  1. **Złe obliczenie aktywnej insuliny (IOB) (zawyżona IOB):** Gdy użytkownik zapisuje ten zewnętrzny bolus w AAPS, wpisuje **5 jednostek**. To jest błąd. Ponieważ profil AAPS jest dla U200, **1 jednostka w AAPS to 2 rzeczywiste jednostki**. Dlatego 5 rzeczywistych jednostek podanych penem trzeba zapisać w aplikacji jako **2,5 jednostki**. Wpisując 5 jednostek, użytkownik zawyża IOB o 100%. AAPS uważa teraz, że aktywne jest 5 „jednostek skoncentrowanych” (czyli 10 rzeczywistych jednostek), a naprawdę aktywnych jest tylko 5 rzeczywistych jednostek. Może to sprawić, że pętla ograniczy insulinę bazową lub zmniejszy kolejne bolusy. Zwiększa to ryzyko hiperglikemii po zbyt małej pierwszej dawce.

**Inne ryzyka:**

- **Mylące dane i raporty:** Wszystkie dane w AAPS lub Nightscout, w tym IOB, całkowita dawka dobowa (TDD) i raporty historyczne, są w „jednostkach skoncentrowanych”. Daje to użytkownikowi i jego zespołowi diabetologicznemu fałszywy obraz. Lekarz, który przegląda raport, może zobaczyć TDD 30 jednostek i nie zauważyć, że pacjent naprawdę dostał 60 rzeczywistych jednostek. Prowadzi to do błędnej oceny terapii.
- **Zmieniony sposób myślenia:** Po dłuższym czasie użytkownik zaczyna „myśleć” wartościami z aplikacji, zmniejszonymi o połowę. Zapamiętuje, że jego ISF to 100 mg/dl (5,6 mmol/l) lub jego baza to 0,5 U/godz., i zapomina, że są to wartości „skoncentrowane”. Tworzy to niebezpieczną zależność od systemu i utratę wyczucia rzeczywistego zapotrzebowania na insulinę, co jest kluczowe dla bezpieczeństwa przy awarii pompy lub problemach z aplikacją.

**Podsumowanie:** Ta metoda wymaga stałej czujności. Użytkownik musi ciągle przeliczać między „skoncentrowanym światem” w aplikacji a światem rzeczywistym. Każde podanie insuliny poza systemem lub każdy przegląd danych łamie ten sposób myślenia i stwarza poważne ryzyko. Zmienia to od podstaw znaczenie każdej liczby w systemie.
```

## Użycie parametru stężenia (nowa funkcja w AAPS 4.0)

Aby zmniejszyć ryzyko związane ze zmodyfikowanym profilem, nowa funkcja obsługuje stężenie insuliny bezpośrednio w AAPS. Ta funkcja wykonuje przeliczenia automatycznie, dzięki czemu główna aplikacja zawsze pracuje na **rzeczywistych jednostkach międzynarodowych (IU)**.

### Jak to działa: automatyczne przeliczanie

Główna zasada to wyraźny podział między logiką aplikacji a komunikacją z pompą:

- **AAPS używa jednostek międzynarodowych:** Główna baza danych AAPS, algorytmy, raporty i logi **zawsze używają rzeczywistych IU**. Oznacza to, że Twoja IOB, TDD i ustawienia terapii (baza, ISF, IC) odpowiadają rzeczywistym biologicznym jednostkom insuliny.
- **Sterownik pompy używa jednostek skoncentrowanych:** Wszystkie wartości wysyłane do sterownika pompy lub z niego odbierane są automatycznie przeliczane na „jednostki skoncentrowane” wewnątrz sterownika pompy, na podstawie wybranego stężenia.
  - **Przykład z U200:** Gdy użytkownik zleca **bolus 1 jednostki**, sterownik pompy otrzymuje **0,5 CU (jednostki skoncentrowanej)**, zanim wyśle go do pompy. Pompa (ustawiona na U100) podaje wtedy **5 µl**, które zawierają **1 IU insuliny U200**.

### Zalety i pozostałe ryzyka

**Zalety:**

- Nie trzeba używać zmodyfikowanego profilu, więc znikają błędy w przeliczaniu w głowie.
- Użytkownik zawsze może „myśleć” w rzeczywistych IU.
- Przy bolusie zewnętrznym penem po prostu wybierz na penie potrzebną ilość insuliny (bez względu na rodzaj pena i stężenie insuliny). Nie trzeba niczego przeliczać, ponieważ peny U100 i U200 zawsze wybierają dawkę w IU.
- Wszystkie raporty i dane AAPS (TDD, IOB) są w rzeczywistych IU, co daje jasny obraz użytkownikowi i jego zespołowi diabetologicznemu.
- Znika ryzyko błędnego obliczenia bolusów zewnętrznych, ponieważ zapisuje się je w rzeczywistych IU.

**Pozostałe ryzyka:**

- **Zmiana sposobu myślenia:** Użytkownicy, którzy przechodzą z metody „zmodyfikowanego profilu”, muszą przełączyć profil z powrotem na prawidłowy, rzeczywisty profil (czyli dwa razy silniejszy, jeśli używali U200). Potrzebują też czasu, aby zmienić swój **sposób myślenia**. Po przyzwyczajeniu się do wartości „skoncentrowanych” w aplikacji muszą na nowo nauczyć się ufać **rzeczywistym, nieukrytym wartościom w IU**, które są wyświetlane wszędzie. W tym okresie przyzwyczajania się jest ryzyko błędnej interpretacji.
- **Ręczny bolus z pompy:** Użycie funkcji bolusa w samej pompie (z pominięciem AAPS) powoduje przedawkowanie o 100%, ponieważ pompa podaje insulinę U200 według obliczeń objętości dla U100.
- **Ostrzeżenie ogólne:** Używanie niestandardowych stężeń pozostaje zaawansowaną procedurą z ryzykiem i nie jest oficjalnie zalecane.

```{admonition} Never use the pump's own interface (tube pump users) to deliver a bolus manually
:class: danger
Przyklej na pompie stałą etykietę **„U200 Insulin”** jako przypomnienie, aby nigdy o tym nie zapomnieć!
```

### Wyświetlanie w interfejsie

Dla jasności interfejs pokazuje, tam gdzie to ważne, zarówno jednostki rzeczywiste, jak i skoncentrowane. Pamiętaj, że interfejs się nie zmienia, jeśli aktualna insulina to U100.

**Przykłady wyświetlania:**

- **Okno postępu bolusa:**
  - Okno Postęp bolusa jest częścią głównej aplikacji AAPS, więc pokazuje tylko informacje w IU (zgodnie z wyborem użytkownika): **`2.50 U / 10.00 U delivered`**
- **Interfejs sterownika pompy (aktualny stan):**
  - Na ekranie przeglądu pompy podana ilość jest pokazana w obu jednostkach. Na przykład, jeśli wybrano `U200`: **`Last Bolus: 10 U (5 CU) (10')`**

**Uwaga:** Obie jednostki (U i CU) są widoczne tylko na głównym ekranie przeglądu pompy. W zależności od Twojej pompy mogą być inne ekrany, na których widać tylko jednostki skoncentrowane. Dane historyczne w sterownikach pomp zwykle pozostają w „jednostkach skoncentrowanych”.

### Włączanie funkcji

Ze względu na związane z nią ryzyko ta opcja domyślnie jest wyłączona. Aby ją włączyć, ukończ Zadanie 3 i włącz **Obsługa stężenia insuliny** w sekcji Ustawienia ogólne.

### Tworzenie nowej insuliny o innym stężeniu

Aby utworzyć insulinę o innym stężeniu, najpierw otwórz **Zarządzaj → Ustawienia insuliny**.

- Kliknij ikonę „+” na dole ekranu.
- Wybierz z listy rozwijanej nowe stężenie (dostępne są U10, U20, U50, U100, U200).
  - Diluted concentrations like U10, U20 or U50 are for children with very low basal rates.
  - U200 jest raczej dla dorosłych z dużym zapotrzebowaniem na insulinę.

  ![Lista rozwijana stężenia w Ustawieniach insuliny](../images/v4/Insulin/insulin_concentration_dropdown.png)

- Dostosuj czas szczytu, czas działania insuliny (DIA) i, jeśli chcesz, zmień Pseudonim insuliny.
- Użyj przycisku zapisu w prawym górnym rogu ekranu.

Na tym etapie insulina jest już utworzona, ale nie można jej wybrać bezpośrednio w **Ustawienia insuliny**.

### Zmiana stężenia z U100 na Uxxx (AAPS 4)

```{admonition} Switching concentration is only allowed during a reservoir or patch/pod change
:class: warning
Ze względów bezpieczeństwa AAPS zapisuje zmianę stężenia tylko podczas wymiany zbiornika lub wymiany plastra/poda.
```

Gdy zaczynasz od insuliny U100, cały Twój profil, dane historyczne i raporty są zgodne ze standardem jednostek międzynarodowych, więc zmiana jest bardzo „łatwa”:

- W pompie plastrowej/Pod przy wymianie pompy masz osobny krok, w którym wybierasz insulinę, którą do niej wlewasz.
- W pompie z drenem kliknij przycisk Napełnij/Wypełnij (do wymiany insuliny) na ekranie głównym (rozwinięty widok paska stanu), a potem kliknij przycisk „Zmień”.

1. Wybierz z listy rozwijanej docelowe stężenie (np. `U200`).
1. Następnie poniżej wybierz właściwą insulinę. Dopóki nie potwierdzisz, napis nad jej nazwą brzmi **Zostanie aktywowana** (zamiast **Aktualnie aktywna**).

   ![Insulina wybrana, ale jeszcze niepotwierdzona: Zostanie aktywowana](../images/v4/Insulin/insulin_will_be_activated.png)

1. **Ważne:** zmiana stężenia jest zapisywana w AAPS dopiero wtedy, gdy Zmiana profilu zostanie zastosowana w pompie.
   - Ten krok jest obowiązkowy dla wszystkich pomp plastrowych/Pod.
   - W pompach z drenem poczekaj, aż Zmiana profilu zostanie zastosowana w pompie, albo zrób to w **Zarządzaj → Profil** lub **Ustawienia insuliny**.

To wszystko!

Jeśli podczas zmiany insuliny działa tymczasowa **Zmiana profilu** (z czasem trwania), nowa insulina zostanie też przypisana do profilu, który wróci po końcu tymczasowej zmiany. Stara insulina nie wraca.

### Zmiana stężenia dla użytkowników insuliny U200 z profilem 50% (AAPS 4)

Jeśli zaczynasz od insuliny U200, której już używasz w pompie, ale z profilem 50%, musisz wykonać dodatkowe kroki w porównaniu ze standardową zmianą z insuliny U100.

Pamiętaj, że najtrudniejsze prawdopodobnie nie będzie poprawne przeprowadzenie zmiany w AAPS, ale nauczenie się na nowo myślenia w „IU” zamiast w „CU”. Wszystkie Twoje standardowe wartości bolusów (śniadanie, obiad, kolacja...) będą dwa razy większe. To samo dotyczy TDD, dawek bazowych itd. Musisz bardzo uważać, aby nie popełniać błędów przez pierwsze kilka tygodni, dopóki znowu nie zaczniesz „myśleć” w jednostkach międzynarodowych.

- Najpierw przygotuj nowy profil ze wszystkimi wartościami zgodnymi z jednostkami międzynarodowymi:
  - Zrób tymczasową Zmianę profilu na 200% swojego standardowego, działającego profilu.
  - Otwórz menu (☰) → **Leczenie**, przejdź do zakładki **Zmiana profilu** i sklonuj nowy profil 200% (zobacz [Klonowanie zmiany profilu](#your-aaps-profile-clone-profile-switch)).
  - Przełącz się z powrotem na swój standardowy profil do następnej wymiany zbiornika lub plastra.
  - Przejdź do **Zarządzaj → Profil** i zmień nazwę tego nowego profilu na jasną nazwę (to będzie Twój przyszły profil dla insuliny U200 ustawionej w AAPS 4).
- Jeśli używasz funkcji Dynamiczny ISF (DynISF), musisz ją wyłączyć na co najmniej tydzień:
  - Cała Twoja historia zapisana w AAPS lub Nightscout jest w złych jednostkach (CU), czyli połowie rzeczywistej wartości w jednostkach międzynarodowych. Poczekaj co najmniej tydzień z działającą insuliną U200, zanim włączysz ją ponownie.
- Teraz możesz zmienić insulinę (na nową U200 zdefiniowaną w **Ustawienia insuliny**) przy następnej wymianie insuliny lub wymianie poda.
- Gdy nowa insulina U200 zostanie poprawnie zastosowana, nie zapomnij włączyć nowego standardowego profilu przygotowanego w pierwszym kroku.

## Jak obsługiwać bolusy zewnętrzne różnymi penami?

### Z insuliną U200 i profilem 50% (AAPS 3)

Pamiętaj, że wszystkie podziałki na penach są w jednostkach międzynarodowych. Bez względu na to, jakiego pena używasz (U100, U200), przy bolusie zewnętrznym penem musisz przeliczać w obu kierunkach:

- Z AAPS do pena: jeśli Kalkulator proponuje bolus albo masz na myśli konkretną ilość, pomnóż ją przez 2, gdy wybierasz dawkę na penie, w porównaniu z takim samym bolusem podanym z AAPS.
- Z pena do AAPS: jeśli wybrałeś na penie ilość do bolusa zewnętrznego, podziel ją przez 2, aby zapisać w AAPS właściwą ilość (przycisk Insulina, bolus zewnętrzny). Dzięki temu IOB będzie poprawnie obliczona w CU (jednostkach skoncentrowanych).

### Z insuliną U200 i obsługą stężenia wbudowaną w AAPS 4

Z wbudowaną obsługą stężenia w AAPS wszystko jest dużo prostsze: po prostu wybierz na penie potrzebną ilość (bez względu na rodzaj pena i insuliny) i zapisz ją w AAPS.

- Jeśli w oknie przycisku Insulina wybierzesz bolus zewnętrzny, możesz wybrać dowolny rodzaj insuliny zdefiniowany w **Ustawienia insuliny** (głównie U100, U200 dla penów). Dzięki temu obliczona IOB jest bardzo dokładna, nawet jeśli szczyt/DIA insuliny w penie bardzo się różni od szczytu/DIA insuliny w pompie.
