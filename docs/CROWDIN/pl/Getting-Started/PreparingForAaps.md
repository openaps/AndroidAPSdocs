# Przygotowanie do rozpoczęcia pracy z AAPS

Witaj. Ta dokumentacja ma pomóc użytkownikom, którzy przygotowują się do konfiguracji i rozpoczęcia używania systemu sztucznej trzustki na Androida (**AAPS**).

## Poruszanie się po dokumentacji

**Spis treści** i opis struktury dokumentacji znajdziesz [tutaj](../index.md). Możesz też do niego przejść, klikając symbol **AAPS** w lewym górnym rogu dokumentacji. Znajdziesz tam przegląd przeznaczenia poszczególnych rozdziałów dokumentacji. Do poruszania się po dokumentacji możesz też używać nagłówków po lewej stronie tej strony. I wreszcie, istnieje wygodna funkcja wyszukiwania, bezpośrednio pod symbolem **AAPS**.

Chcemy, aby łatwo było poznać zarówno możliwości, jak i ograniczenia **AAPS**. Rozczarowujące może być odkrycie, po zainwestowaniu czasu w czytanie dokumentacji, że nie masz kompatybilnej pompy insulinowej lub systemu CGM, lub że **AAPS** oferuje inne funkcje, niż te, na które liczyłeś.

Wiele szczegółów w dokumentacji **AAPS**, które dotyczą praktyki, stanie się bardziej zrozumiałych, gdy zaczniesz naprawdę używać **AAPS** na co dzień. Tak jak trudno nauczyć się sportu tylko przez czytanie zasad, tak tutaj musisz najpierw poznać podstawowe zasady bezpiecznego używania **AAPS**, a potem uczyć się, jak najlepiej je stosować, gdy zaczniesz używać **AAPS**.

(preparing-safety-first)=

## Najpierw bezpieczeństwo
„Z wielką mocą wiąże się wielka odpowiedzialność…”

### Bezpieczeństwo techniczne
**AAPS** ma szeroki zestaw funkcji bezpieczeństwa. Wprowadzają one ograniczenia, które są stopniowo usuwane, gdy kończysz kolejne [zadania](../SettingUpAaps/CompletingTheObjectives.md). Zadania obejmują testowanie określonych parametrów i odpowiadanie na pytania wielokrotnego wyboru. Funkcje **AAPS** są odblokowywane w miarę pomyślnego ukończenia kolejnych zadań. Dzięki temu możesz bezpiecznie, krok po kroku, przejść od otwartej pętli do zamkniętej pętli i przy tym poznać różne funkcje **AAPS**.

[Zadania](../SettingUpAaps/CompletingTheObjectives.md) zaprojektowano tak, aby jak najlepiej wprowadzić Cię w **AAPS**. Uwzględniają one typowe błędy i ogólne tendencje, które twórcy **AAPS** zauważyli u nowych użytkowników. Błędy mogą się zdarzyć, bo początkujący nie ma doświadczenia i zbyt szybko chce zacząć używać **AAPS** albo przeoczył ważne kwestie. [Zadania](../SettingUpAaps/CompletingTheObjectives.md) mają ograniczyć te problemy do minimum.

### Bezpieczeństwo medyczne
```{admonition} Avoid permanent and painful damage to your eyes and nerves
:class: danger
Zaleca się zachowanie ostrożności przy szybkiej poprawie kontroli poziomu glukozy i obniżaniu HbA1c 
```

Ważnym aspektem bezpieczeństwa jest to, że **szybkie obniżenie poziomu HbA1c i poprawa kontroli poziomu glukozy we krwi u pacjentów, którzy mieli od pewnego czasu podwyższone poziomy glukozy może spowodować trwałe szkody**. Wiele osób z cukrzycą o tym nie wie i nie wszyscy lekarze informują o tym swoich pacjentów.

Te szkody to m.in. **utrata wzroku i trwała neuropatia (ból)**. Można uniknąć tych szkód, obniżając średni poziom glukozy wolniej. Jeśli masz teraz podwyższone HbA1c i przechodzisz na **AAPS** (lub inny system zamkniętej pętli), _koniecznie_ omów to ryzyko ze swoim zespołem diabetologicznym przed rozpoczęciem i ustal z nim harmonogram stopniowego obniżania bezpiecznych docelowych wartości glukozy. Na początku możesz łatwo ustawić w **AAPS** wyższe cele glukozy (obecnie najwyższy cel, jaki możesz wybrać, to 11,1 mmol/l, ale w razie potrzeby możesz też celowo używać słabszego profilu), a potem obniżać cel z upływem miesięcy.

#### Jak szybko mogę obniżyć HbA1c bez ryzyka trwałych uszkodzeń?

One retrospective [study](https://pubmed.ncbi.nlm.nih.gov/1464975/) of 76 patients reported that the risk of progression of retinopathy increased by 1.6 times, 2.4 times and 3.8 times if the HbA1c dropped 1%, 2% or 3% respectively over a 6 month period. Autorzy zalecili, że **„spadek wartości HbA1c w każdym okresie 6 miesięcy powinien być mniejszy niż 2%, aby zapobiec postępowi retinopatii.... Zbyt szybki spadek na początku kontroli glikemii może spowodować ciężkie lub przejściowe zaostrzenie postępu retinopatii.”**

Uwaga Jeśli używasz innych jednostek HbA1c (mmol/mol zamiast %), kliknij [tutaj](https://www.diabetes.co.uk/hba1c-units-converter.html), aby otworzyć kalkulator HbA1c.

W innej retrospektywnej [ocenie](https://academic.oup.com/brain/article/138/1/43/337923) 954 pacjentów, badacze zauważyli, że:

**„Przy spadku wartości HbA1c o 2–3 punkty proc. w ciągu 3 miesięcy występowało 20% bezwzględne ryzyko wystąpienia neuropatii wywołanej leczeniem w cukrzycy, przy zmniejszeniu wartości HbA1c o >4 punkty proc. w ciągu 3 miesięcy bezwzględne ryzyko wystąpienia neuropatii wywołanej leczeniem w cukrzycy przekroczyło 80%.”**

[Komentarz](https://academic.oup.com/brain/article/138/1/2/340563) do tej pracy potwierdził, że aby uniknąć powikłań, **celem powinno być obniżenie A1c o <2 punkty proc. w ciągu 3 miesięcy.** Inne przeglądy na ten temat możesz przeczytać [tutaj](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6587545/pdf/DOM-21-454.pdf) i [tutaj](https://www.mdpi.com/1999-4923/15/7/1791).

Ogólnie uważa się, że osoby z _nowo_ zdiagnozowaną cukrzycą typu 1 (które przy diagnozie, przed rozpoczęciem leczenia insuliną, często mają bardzo wysokie HbA1c) mogą szybko obniżyć HbA1c zaraz po diagnozie bez takiego samego ryzyka, ponieważ nie miały podwyższonej glikemii przez tak długi czas. Jednakże nadal jest to zagadnienie, które powinieneś omówić ze swoim lekarzem.

(PreparingForAaps-no-sglt-2-inhibitors)=
### Nie stosuj inhibitorów SGLT-2

```{admonition} NO SGLT-2 inhibitors
:class: danger
Inhibitory SGLT-2, zwane też flozynami, hamują wchłanianie zwrotne glukozy w nerkach. Flozyny obniżają poziom glukozy we krwi w sposób, którego nie da się obliczyć, dlatego NIE WOLNO Ci ich przyjmować, gdy używasz systemu zamkniętej pętli, takiego jak AAPS! Istnieje znaczne ryzyko kwasicy ketonowej i/lub hipoglikemii! Połączenie tego leku z systemem, który obniża dawki bazowe, aby podnieść glikemię, jest szczególnie niebezpieczne. 

W skrócie:
- **Przykład 1: ryzyko hipoglikemii**
>Podczas obiadu używasz **AAPS**, aby podać bolus na 45 g glukozy. Problem polega na tym, że inhibitory powodują, że organizm usuwa część węglowodanów, a AAPS o tym nie wie. W efekcie w organizmie jest za dużo insuliny w stosunku do wchłoniętych węglowodanów, co powoduje hipoglikemię.

- **Przykład 2: ryzyko kwasicy ketonowej**
>Inhibitory w tle usuwają część węglowodanów, przez co Twoja glikemia spada. **AAPS** automatycznie każe pompie zmniejszyć podawanie insuliny, także bazy. Z czasem Twoja glikemia może utrzymywać się poniżej celu, aż organizm nie będzie miał wystarczającej ilości insuliny bazowej, aby przyswoić węglowodany, co prowadzi do kwasicy ketonowej. Zwykle kwasica ketonowa rozwija się u osób z cukrzycą typu 1, gdy zawiedzie pompa. Wtedy telefon pokazuje alarmy, a problem widać po wysokiej glikemii. Niebezpieczeństwo przy flozynach polega jednak na tym, że AAPS nie pokaże żadnych alarmów, bo pompa działa normalnie, a glikemia może pozostawać w zakresie docelowym.

Do typowych nazw inhibitorów SGLT-2 należą: Invokana, Farxiga, Jardiance, Glyxambi, Synjardy, Steglatro i Xigduo XR oraz inne.
```


### Najważniejsze zasady korzystania z pętli AAPS

Zanim zaczniesz używać **AAPS**, musisz zrozumieć najważniejsze zasady i pojęcia pętli. Aby to osiągnąć, poświęć swój czas na przeczytanie dokumentacji **AAPS** i ukończenie zadań, które mają dać Ci solidną podstawę do bezpiecznego i skutecznego używania **AAPS**. Ilość dokumentacji **AAPS** może na początku przytłaczać, ale bądź cierpliwy i zaufaj procesowi – przy właściwym podejściu na pewno Ci się uda!

Tempo postępów zależy od osoby, ale pamiętaj, że ukończenie wszystkich zadań zwykle zajmuje 6–9 tygodni. Wiele osób buduje, instaluje i konfiguruje **AAPS** dużo wcześniej, niż zaczyna go używać. Pomaga w tym „wirtualna pompa”, której możesz używać podczas pierwszych zadań. Dzięki niej poznasz **AAPS**, zanim zaczniesz używać go do podawania insuliny. Poniżej znajdziesz szczegółowy harmonogram. Pamiętaj, że od zadania 7 w **AAPS** używasz już zamkniętej pętli. Dalsze zadania dodają funkcje, takie jak **SMB** i **automatyzacje**, które są przydatne dla części użytkowników, ale nie są niezbędne do podstawowego działania **AAPS**.

Sukces z **AAPS** wymaga aktywnego podejścia, gotowości do analizowania danych glikemii i elastyczności we wprowadzaniu potrzebnych zmian w **AAPS**, aby poprawić Twoje wyniki. Tak jak prawie nie da się nauczyć uprawiania sportu tylko przez czytanie zasad, tak samo jest z **AAPS**.

#### Zaplanuj czas na opóźnienia i drobne problemy przy konfiguracji i uruchamianiu wszystkiego

Na początku pracy z **AAPS** możesz mieć trudności z tym, aby wszystkie elementy pętli dobrze komunikowały się ze sobą (i z ewentualnymi obserwującymi), a także z dostrajaniem ustawień. Niektórych usterek nie da się rozwiązać, dopóki nie zaczniesz używać **AAPS** na co dzień, ale dużo pomocy znajdziesz na grupie na Facebooku i na Discordzie. Zaplanuj to dobrze i do szukania i rozwiązywania problemów wybieraj „dobre” momenty, np. spokojny poranek w weekend (czyli nie późno w nocy, nie gdy jesteś zmęczony i nie przed ważnym spotkaniem lub podróżą).

#### Zgodność technologiczna

**AAPS** jest kompatybilny tylko z niektórymi rodzajami pomp insulinowych, systemami CGM i telefonami, a niektóre technologie mogą nie być dostępne do użytku w różnych krajach. Aby uniknąć rozczarowania i frustracji, przeczytaj rozdziały o [CGM](../Getting-Started/CompatiblesCgms.md), [pompach](../Getting-Started/CompatiblePumps.md) i [telefonach](../Getting-Started/Phones.md).

#### Czas budowania aplikacji i przejście do pełnej pętli

Czas potrzebny na zbudowanie aplikacji **AAPS** zależy od Twojej wiedzy i umiejętności technicznych. Niedoświadczonym użytkownikom zbudowanie **AAPS** zajmuje zwykle do pół dnia lub cały dzień (z pomocą społeczności). Przy kolejnych wersjach **AAPS** proces będzie dużo szybszy, bo zdobędziesz doświadczenie.

Kilka części tej dokumentacji pomaga Ci w procesie budowania:

- [Budowanie AAPS](../SettingUpAaps/BuildingAaps.md) prowadzi Cię krok po kroku przez budowanie aplikacji i instalowanie jej na telefonie;

- [FAQ](../UsefulLinks/FAQ.md) odpowiada na częste pytania i wyjaśnia najczęstsze błędy;

- [Rozwiązywanie problemów](../GettingHelp/GeneralTroubleshooting.md) zbiera rozwiązania najczęstszych problemów, uporządkowane według tematów.

Czas dojścia do zamkniętej pętli zależy od osoby; przybliżony harmonogram osiągnięcia pełnej pętli z **AAPS** znajdziesz [poniżej](#preparing-how-long-will-it-take).


#### Magazyn kluczy (keystore) i plik eksportu ustawień konfiguracji

Magazyn kluczy („keystore”, plik .jks) to zaszyfrowany hasłem plik, który należy tylko do Twojej kopii **AAPS**. Twój telefon z Androidem używa go, aby nikt inny nie mógł zaktualizować Twojej kopii bez tego magazynu kluczy. Krótko mówiąc, w ramach zbudowania **AAPS** powinieneś:

1.  Zapisać plik magazynu kluczy (plik .jks, którym podpisujesz aplikację) w bezpiecznym miejscu;

2.  Zapisać hasło do swojego pliku magazynu kluczy.

Sposób zapisania magazynu kluczy zależy od metody budowania:

- **Budowanie w Android Studio (na komputerze)**: magazyn kluczy jest tworzony podczas budowania – zobacz [Generowanie podpisanego APK](#Building-APK-generate-signed-apk), aby dowiedzieć się, gdzie go zapisać.
- **AAPS Builder**: zachowaj plik kopii zapasowej `aaps-keystore.jks`, który strona konfiguracji zaproponowała przy tworzeniu klucza, razem z jego hasłem i aliasem. Jeśli przesłałeś własny magazyn kluczy, zachowaj ten plik.
- **Budowanie w przeglądarce z forkiem**: użyj specjalnego workflow [Export keystore](#ci-keystore-export), aby pobrać kopię na swój Dysk Google.

Dzięki temu będziesz mógł używać dokładnie tego samego pliku magazynu kluczy za każdym razem, gdy budujesz nową wersję **AAPS**. Średnio potrzebne są 2 aktualizacje **AAPS** w roku.

Ponadto **AAPS** zapewnia możliwość [eksportu wszystkich ustawień konfiguracji](../Maintenance/ExportImportSettings.md). Zapewnia to możliwość bezpiecznego odzyskania systemu podczas zmiany telefonu, aktualizacji/reinstalacji aplikacji z minimalnymi zakłóceniami. 

#### Rozwiązywanie problemów

Jeśli czujesz się niepewnie w jakimkolwiek temacie, nie krępuj się skontaktować ze społecznością AAPS — nie ma głupich pytań! Zachęcamy do zadawania pytań wszystkich użytkowników, bez względu na poziom doświadczenia. Odpowiedzi przychodzą zwykle szybko, bo użytkowników **AAPS** jest wielu.

##### [zapytaj na grupie AAPS na Facebooku](https://www.facebook.com/groups/AndroidAPSUsers/)

##### [zapytaj na kanale AAPS na Discordzie](https://discord.gg/4fQUWHZ4Mw)





#### [Where to go for help](../GettingHelp/WhereCanIGetHelp.md)?

Ten rozdział daje nowym użytkownikom linki do źródeł pomocy, w tym do społeczności nowych i doświadczonych użytkowników, którzy mogą odpowiedzieć na pytania i pomóc w typowych problemach z AAPS.

#### [Rozdział dla lekarzy](../UsefulLinks/ClinicianGuideToAaps.md)

To jest [rozdział specjalnie dla lekarzy](../UsefulLinks/ClinicianGuideToAaps.md), którzy chcą dowiedzieć się więcej o AAPS i technologii sztucznej trzustki open source. We wprowadzeniu znajdziesz też wskazówki, [jak rozmawiać ze swoim zespołem diabetologicznym](#introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team).

## Co zamierzamy zbudować i zainstalować?

Ten schemat przedstawia przegląd kluczowych komponentów (sprzętowych i oprogramowania) systemu **AAPS**:

![preparing_overview](../images/preparing_images/AAPS_preparing_overview_01.png)


Oprócz trzech podstawowych elementów sprzętowych (telefon, pompa, sensor glukozy) potrzebujemy też: 1) aplikacji **AAPS** 2) serwera raportów i 3) aplikacji do ciągłego monitorowania glukozy (CGM)

### 1) Aplikacja na Androida: **AAPS**

**AAPS** to aplikacja działająca na smartfonach i urządzeniach z Androidem. Samodzielnie zbudujesz aplikację **AAPS** (plik apk) według instrukcji krok po kroku: pobierzesz kod źródłowy **AAPS** z GitHub, zainstalujesz na komputerze potrzebne programy (Android Studio, GitHub Desktop) i zbudujesz własną kopię aplikacji **AAPS**. Następnie przeniesiesz aplikację **AAPS** na swój smartfon (e-mailem, kablem USB _itp._) i ją zainstalujesz.

### 2) Serwer raportów: Nightscout (Tidepool*)

Aby w pełni korzystać z **AAPS**, musisz skonfigurować serwer Nightscout. Możesz [zrobić to sam](https://nightscout.github.io/nightscout/new_user/#free-diy) albo za niewielką opłatą zlecić konfigurację [zarządzanej usługi Nightscout](https://nightscout.github.io/#nightscout-as-a-service). Nightscout zbiera dane z **AAPS** przez dłuższy czas i może tworzyć szczegółowe raporty, które pokazują zależności między danymi CGM a insuliną. Opiekunowie mogą też używać Nightscout do zdalnej komunikacji z aplikacją **AAPS**, aby nadzorować leczenie cukrzycy swojego dziecka. Takie funkcje zdalne to m.in. monitorowanie glukozy i insuliny w czasie rzeczywistym, zdalne podawanie bolusów insuliny (przez SMS) i ogłaszanie posiłków. Analizowanie leczenia cukrzycy na podstawie danych CGM oddzielnie od danych pompy przypomina jazdę samochodem, w którym kierowca nic nie widzi, a pasażer opisuje mu drogę. Zamiast Nightscout możesz też używać Tidepool.

### 3) Aplikacja sensora CGM

W zależności od Twojego sensora glukozy/CGM potrzebujesz zgodnej aplikacji, która odbiera odczyty glukozy i wysyła je do **AAPS**. Różne opcje pokazano poniżej, a więcej informacji znajdziesz w [rozdziale o kompatybilnych systemach CGM](../Getting-Started/CompatiblesCgms.md):

![dexcom_options](../images/preparing_images/AAPS_connectivity_Dex_02.png) ![libre_options](../images/preparing_images/AAPSconnectivity_libre.png) ![eversense_options](../images/preparing_images/AAPS_connectivity_eversense.png)

### Konserwacja systemu **AAPS**

Zarówno **Nightscout**, jak i **AAPS** trzeba aktualizować mniej więcej raz w roku, gdy pojawiają się ulepszone wersje. Czasem aktualizację można odłożyć, a czasem jest ona zdecydowanie zalecana lub konieczna ze względów bezpieczeństwa. Informacje o aktualizacjach pojawiają się na grupach na Facebooku i na serwerach Discord. Z informacji o wersji jasno wynika, która sytuacja ma miejsce. W czasie aktualizacji wiele osób zwykle zadaje podobne pytania jak Ty, więc otrzymasz pomoc przy aktualizacji.

(preparing-how-long-will-it-take)=
## Ile czasu zajmie konfiguracja wszystkiego?

Jak wspomnieliśmy wcześniej, używanie **AAPS** to raczej „podróż”, która wymaga poświęcenia Twojego czasu. To nie jest jednorazowa konfiguracja. Według obecnych szacunków zbudowanie **AAPS**, instalacja i konfiguracja **AAPS** oraz oprogramowania **CGM** i przejście od otwartej pętli do hybrydowej zamkniętej pętli z **AAPS** zajmuje łącznie około 4 do 6 miesięcy. Dlatego zalecamy, aby jak najszybciej zbudować aplikację **AAPS** i zacząć wykonywać pierwsze zadania, nawet jeśli nadal używasz innego systemu podawania insuliny (wirtualnej pompy możesz używać do zadania 5).

Niektóre zadania wymagają, aby minęła określona liczba dni. Dzięki temu masz pewność, że rozumiesz nowe funkcje. Nie można pominąć tego czasu oczekiwania; minimalne czasy oczekiwania ustalono dla Twojego bezpieczeństwa.

Oto przybliżony harmonogram:

| Czynności                                                                    |            Przybliżony czas            |
| ---------------------------------------------------------------------------- |:--------------------------------------:|
| Pierwsze czytanie dokumentacji                                               |                1–2 dni                 |
| Konfiguracja GitHub do budowania w przeglądarce                              |               1–4 godz.                |
| Konfiguracja serwera raportów                                                |               1 godzina                |
| Instalacja aplikacji CGM (xDrip, BYODA, …)                                   |               1 godzina                |
| Configuring CGM → xDrip → AAPS initially                                     |               1 godzina                |
| Wstępna konfiguracja AAPS → pompa                                            |               1 godzina                |
| Konfiguracja AAPS → Nightscout/Tidepool (tylko raportowanie)                 |               1 godzina                |
| Optional: Configuring Nightscout ↔ **AAPS** & NSFollowers                    |               1 godzina                |
| Zadanie 1: Konfiguracja wizualizacji i monitorowania                         |               1 godzina                |
| Zadanie 2: Dowiedz się, jak kontrolować AAPS                                 |                2 hours                 |
| Zadanie 3: Sprawdź swoją wiedzę                                              |               Do 14 dni                |
| Zadanie 4: Rozpoczęcie w trybie otwartej pętli                               |           Co najmniej 7 dni            |
| Zadanie 5: Zrozumienie działania otwartej pętli                              |                 7 dni                  |
| Zadanie 6: Rozpoczęcie zamknięcia pętli z zawieszeniem przy niskiej glikemii |   Co najmniej 5, maksymalnie 14 dni    |
| Zadanie 7: Dostrajanie zamkniętej pętli                                      | Co najmniej 1 dzień, maksymalnie 7 dni |
| Zadanie 8: Dostosowanie bazy i współczynników, włączenie Autosens            | Co najmniej 7 dni, maksymalnie 14 dni  |
| Zadanie 9: Włączenie SMB (Super Mikro Bolusy)                                |           Co najmniej 28 dni           |
| Zadanie 10: Włączanie automatyzacji                                          |           Co najmniej 28 dni           |

Nawet gdy **AAPS** będzie już w pełni działać, nadal musisz regularnie dostrajać ustawienia, aby poprawić ogólne leczenie cukrzycy.

## Wymagania

### Kwestie medyczne

Oprócz ostrzeżeń medycznych w [rozdziale o bezpieczeństwie](#preparing-safety-first) są też różne parametry, zależne od insuliny, której używasz w pompie.

#### Wybór insuliny

Obliczenia **AAPS** opierają się na stężeniu insuliny 100 U/ml (tak jak standard w pompach). Insulinę konfigurujesz w **Zarządzaj → Ustawienia insuliny**: ustaw jej **Szczyt** i **DIA** albo użyj **Pobierz szczyt z**, aby wpisać standardowy czas szczytu z jednego z gotowych ustawień:

- **Novorapid** (także dla Humalog i NovoLog)
- **Fiasp**
- **Lyumjev**

Zaawansowani użytkownicy mogą bezpośrednio wpisać dowolny czas szczytu (od 35 do 120 minut), np. dla mieszanki insulin. Zobacz [Ustawienia insuliny](#Config-Builder-insulin).


### Kwestie techniczne

Ta dokumentacja ma na celu ograniczenie potrzebnej wiedzy technicznej do absolutnego minimum. Aplikację **AAPS** możesz zbudować na kilka sposobów – przegląd znajdziesz na stronie [Budowanie AAPS](../SettingUpAaps/BuildingAaps.md):

- **Budowanie w przeglądarce** (zalecane): zbuduj aplikację bezpośrednio ze smartfona za pomocą GitHub Actions, bez komputera i bez Android Studio. Z [AAPS Builder](../SettingUpAaps/BrowserBuildAapsBuilder.md) potrzebujesz tylko konta GitHub: aplikację pobierasz bezpośrednio z GitHub. Metoda z forkiem wymaga też konta Google, aby zapisać aplikację na Twoim Dysku Google.
- **Budowanie w Android Studio**: zbuduj aplikację na komputerze za pomocą Android Studio. Używają tego głównie programiści, którzy chcą zmieniać kod.
- **Budowanie z wiersza poleceń**: dla użytkowników, którzy wolą budować lokalnie bez instalowania Android Studio.

Oprócz zbudowania aplikacji musisz też skonfigurować serwer raportów, kilka aplikacji na telefonie z Androidem i zdobyć wiedzę o leczeniu cukrzycy. Uda Ci się to, jeśli będziesz działać krok po kroku, cierpliwie i z pomocą społeczności **AAPS**. Jeśli potrafisz poruszać się po internecie i obsługiwać swoją pocztę Gmail, zbudowanie **AAPS** jest w Twoim zasięgu. Po prostu nie spiesz się.

### Smartfony

#### AAPS i wersje Androida

Obecna wersja **AAPS** (4.0) wymaga smartfona z systemem Google **Android 12.0 lub nowszym**. Jeśli planujesz kupić nowy telefon (stan na styczeń 2026), zalecany jest Android 16.<br/> Ze względów bezpieczeństwa zdecydowanie zalecamy, aby zawsze używać aktualnej wersji **AAPS**. Jeśli jednak nie możesz używać urządzenia z Androidem 12.0 lub nowszym, nadal są dostępne starsze wersje **AAPS** zgodne ze starszymi wersjami Androida, zobacz: [Informacje o wersji](#maintenance-android-version-aaps-version).

#### Wybór modelu smartfona
Wybór konkretnego modelu zależy od funkcji, których potrzebujesz. Na [stronie Telefony](../Getting-Started/Phones.md) znajdziesz zalecenia i opinie użytkowników o działających konfiguracjach.

Zachęcamy, aby aktualizować wersję Androida na telefonie, w tym poprawki zabezpieczeń. Jeśli jednak dopiero zaczynasz z **AAPS** lub nie jesteś ekspertem technicznym, możesz wstrzymać się z aktualizacją telefonu, dopóki inni jej nie wykonają i nie potwierdzą na naszych forach, że jest bezpieczna.

```{admonition} Delaying Samsung phone updates
:class: warning
Samsung niestety ma zwyczaj wymuszania aktualizacji na swoich telefonach, co może powodować problemy z połączeniem Bluetooth. Aby wyłączyć te wymuszone aktualizacje, musisz przełączyć telefon w „tryb programisty”:

1. Przejdź do **Ustawienia** > **Informacje o telefonie** (About phone) > **Informacje o oprogramowaniu** (Software information), a potem stukaj w **Numer wersji** (Build number), aż telefon potwierdzi, że tryb programisty jest odblokowany.
2. Wróć do głównego menu **Ustawienia**. Powinna się w nim pojawić nowa pozycja **Opcje programisty** (Developer options).
3. Otwórz **Opcje programisty**, znajdź **Automatyczne aktualizacje systemu** (Auto system update) i wyłącz tę opcję.
```

```{admonition} Google Play Protect potential issue
:class: warning
Było kilka zgłoszeń, że **AAPS** jest co rano bez powodu zamykany przez Google Play Protect. Jeśli tak się dzieje, musisz przejść do opcji Google Play i wyłączyć **Google Play Protect**. Nie dotyczy to wszystkich modeli telefonów ani wszystkich wersji Androida.
```

```{admonition} Android developer verification
:class: note
Od września 2026 Google stopniowo wprowadza [weryfikację deweloperów Androida](#android-developer-verification), która zmienia sposób instalowania samodzielnie zbudowanej aplikacji na telefonie. Nie ma to wpływu na budowanie **AAPS**, a darmowe metody instalacji nadal są dostępne – szczegóły znajdziesz na podlinkowanej stronie.
```

