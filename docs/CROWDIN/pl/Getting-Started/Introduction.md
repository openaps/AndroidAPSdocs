# Wprowadzenie do APS i AAPS

```{contents} In this page
:backlinks: entry
:depth: 2
```

## Co to jest „system sztucznej trzustki” (ang. Artificial Pancreas System)?

Ludzka trzustka robi wiele rzeczy poza regulacją poziomu cukru we krwi. Jednak określenie **„Artificial Pancreas System” (APS, system sztucznej trzustki)** zwykle oznacza system, który automatycznie utrzymuje poziom cukru we krwi w zdrowych granicach.

Najbardziej podstawowym sposobem na to jest pomiar **poziomu glukozy**, wykorzystanie tych wartości do **obliczeń**, a następnie dostarczenie (przewidywanej) odpowiedniej ilości **insuliny** do organizmu. System powtarza obliczenia co kilka minut, 24/7. Używa **alarmów** i **alertów**, aby poinformować użytkownika, gdy potrzebna jest jego reakcja lub uwaga. Taki system składa się zwykle z **sensora glukozy**, **pompy insulinowej** i **sterownika**, który wykonuje obliczenia. W **AAPS** i innych systemach open-source sterownikiem jest aplikacja na telefonie. W większości systemów komercyjnych jest to oprogramowanie wbudowane w samą pompę, a aplikacja na telefonie służy głównie do wyświetlania danych i sterowania.

Jeśli chcesz poznać historię rozwoju systemów zamkniętej pętli i sposób ich działania, dobrym punktem wyjścia jest ten artykuł przeglądowy z 2022 roku. Pamiętaj, że powstał on przed większością dostępnych dziś systemów, więc nie opisuje tego, co jest obecnie na rynku:

![Frontiers](../images/FRONTIERS_Logo_Grey_RGB.png) [Closed-Loop Insulin Delivery Systems: Past, Present, and Future Directions](https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2022.919942/full) (Templer, _Frontiers in Endocrinology_, 2022).

Tak zwane systemy „dwuhormonalne” podają oprócz insuliny także glukagon, aby zapobiegać ciężkim hipoglikemiom i pozwolić na jeszcze lepszą kontrolę poziomu glukozy we krwi. Pierwszy taki system został dopuszczony w Europie, ale jest dostępny tylko w ramach badań i projektów, a inne są nadal w fazie rozwoju. Żaden z nich nie jest jeszcze w ogólnej sprzedaży.

Sztuczną trzustkę można porównać do [„autopilota dla twojej cukrzycy”](https://www.artificialpancreasbook.com/). Co to oznacza?

W samolocie autopilot nie wykonuje wszystkich obowiązków pilota, nie może on przespać całego lotu. Autopilot wspomaga pracę pilota. Zdejmuje to z pilota ciężar ciągłego sterowania samolotem i pozwala mu skupić się na szerszym nadzorze. Autopilot odbiera sygnały z różnych czujników, komputer analizuje te dane razem z ustawieniami pilota, a następnie wprowadza potrzebne korekty i ostrzega pilota o wszelkich problemach. Pilot nie musi już martwić się ciągłym podejmowaniem decyzji. To porównanie można odnieść do **AAPS**.

![image](../images/autopilot.png)

(Introduction-what-does-hybrid-closed-loop-mean)=
## Co oznacza hybrydowa zamknięta pętla?

Najlepszym rozwiązaniem na cukrzycę typu 1 byłoby „wyleczenie funkcjonalne” (prawdopodobnie przeszczep komórek trzustki, które byłyby chronione przed układem odpornościowym). Zanim społeczność osób z cukrzycą typu 1 (T1D) się tego doczeka, sztuczna trzustka z „w pełni zamkniętą pętlą” jest prawdopodobnie najlepszym rozwiązaniem. To system, który nie wymaga żadnej interakcji ze strony użytkownika (takich jak podawanie bolusów do posiłków, czy zapowiadanie wysiłku fizycznego), utrzymując dobry poziom cukru we krwi. Prawie każdy system używany na co dzień to „hybrydowa” zamknięta pętla, ponieważ łączy zautomatyzowaną technologię z działaniami użytkownika. Pierwsze systemy w pełni zamkniętej pętli zostały dopuszczone w Europie w 2026 roku, ale żaden z nich nie jest jeszcze szeroko dostępny.

## Jak i dlaczego zaczęło się korzystanie z pętli?

Rozwój technologii komercyjnych dla osób z cukrzycą typu 1 (T1D, ang. type 1 diabetes) przebiega bardzo powoli. W 2013 roku społeczność T1D założyła ruch #WeAreNotWaiting (z ang. „nie czekamy”). Samodzielnie opracowali systemy, używając istniejących, zatwierdzonych technologii (pomp insulinowych i sensorów), aby poprawić kontrolę poziomu cukru we krwi, bezpieczeństwo i jakość życia. Są one znane jako systemy OS-AID (Open-Source Automated Insulin Delivery, czyli automatyczne podawanie insuliny open-source; wcześniej nazywane systemami DIY), ponieważ nie są formalnie zatwierdzone przez instytucje ochrony zdrowia (FDA, NHS itp.). Dostępne są cztery główne systemy OS-AID: [OpenAPS](https://openaps.org/what-is-openaps/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) i [Trio](https://triodocs.org).

Świetnym sposobem na zrozumienie podstaw pętli OS-AID jest przeczytanie książki Dany Lewis „Automated Insulin Delivery”. Możesz ją przeczytać za darmo [tutaj](https://www.artificialpancreasbook.com/) (lub kupić wersję drukowaną). Jeśli chcesz dowiedzieć się więcej o [OpenAPS](https://openaps.org/what-is-openaps/), z którego wyewoluował **AAPS**, [strona OpenAPS](https://openaps.org/what-is-openaps/) jest świetnym źródłem.

Na rynku pojawiło się też kilka komercyjnych systemów hybrydowej zamkniętej pętli. Bardzo różnią się one od systemów OS-AID, głównie dlatego, że wiele z nich ma „algorytm uczący się”, który dostosowuje ilość podawanej insuliny do twojego zapotrzebowania na insulinę z poprzednich dni. Wiele osób ze społeczności OS-AID wypróbowało już systemy komercyjne i porównało je ze swoim systemem OS-AID. Więcej o tym, jak wypadają różne systemy w porównaniu, dowiesz się, pytając w grupach na Facebooku poświęconych tym systemom, w [grupie AAPS na Facebooku](https://www.facebook.com/groups/AndroidAPSUsers/) lub na [Discordzie](https://discord.com/invite/4fQUWHZ4Mw).

## Czym jest Android APS (AAPS)?

![image](../images/basic-outline-of-AAPS.png)

**Rysunek 1**. Podstawowy zarys Android APS (Artificial Pancreas System, system sztucznej trzustki), AAPS.

Android APS (**AAPS**) to hybrydowa zamknięta pętla, czyli system sztucznej trzustki (APS). Do obliczania dawek insuliny używa sprawdzonych algorytmów [OpenAPS](https://openaps.org/) (zestawu reguł), opracowanych przez społeczność T1D #WeAreNotWaiting.

Ponieważ OpenAPS działa tylko z niektórymi starszymi pompami insulinowymi, w 2016 roku powstał **AAPS** (który działa z większą liczbą pomp insulinowych) – początkowo dla członka rodziny z cukrzycą typu 1. Od tych wczesnych dni **AAPS** jest stale rozwijany i udoskonalany przez zespół programistów-wolontariuszy i innych entuzjastów, którzy mają związek ze światem cukrzycy typu 1. Dziś **AAPS** używa wiele tysięcy osób na całym świecie. To bardzo konfigurowalny i wszechstronny system, a ponieważ jest open-source'owy, jest bez problemu kompatybilny z wieloma innymi open-source'owymi programami i platformami związanymi z cukrzycą. Podstawowe elementy obecnego systemu **AAPS** są przedstawione na **Rysunku 1** powyżej.



## Jakie są podstawowe komponenty AAPS?

„Mózgiem” AAPS jest **aplikacja**, którą budujesz samodzielnie. Istnieją szczegółowe instrukcje krok po kroku jak to zrobić. Następnie instalujesz **aplikację AAPS** na [zgodnym](../Getting-Started/Phones.md) **smartfonie z Androidem** (**1**). Część użytkowników woli mieć swoją pętlę na osobnym telefonie, a nie na swoim głównym telefonie. Nie musisz więc używać telefonu z Androidem do wszystkiego innego w życiu, tylko do obsługi swojej pętli AAPS.

Na **smartfonie z Androidem** oprócz **AAPS** musi być zainstalowana jeszcze jedna aplikacja. Ta [dodatkowa aplikacja](../Getting-Started/CompatiblesCgms.md) odbiera dane o glukozie z sensora (**2**) przez Bluetooth, a potem przesyła je wewnątrz telefonu do **aplikacji AAPS**.

**Aplikacja AAPS** używa procesu podejmowania decyzji (**algorytmu**) z OpenAPS. Początkujący zaczynają korzystając z podstawowego algorytmu **oref0**, ale w miarę postępów z AAPS można przełączyć się na nowszy algorytm **oref1**. To, którego algorytmu używasz (oref0 lub oref1), zależy od tego, który lepiej pasuje do twojej sytuacji.  W obu przypadkach algorytm uwzględnia wiele czynników i wykonuje błyskawiczne obliczenia za każdym razem, gdy nowy odczyt dochodzi z sensora. Następnie algorytm wysyła przez Bluetooth do pompy insulinowej (**3**) polecenia, ile insuliny ma podać. Wszystkie informacje mogą być wysyłane do internetu (**4**) przez dane komórkowe lub Wi-Fi. Dane te można również udostępnić obserwującym w razie potrzeby i/lub zebrać je do analizy. Możesz też połączyć z telefonem [smartwatch](../Getting-Started/Watches.md) (**5**), aby szybko zobaczyć swoje dane, a na niektórych zegarkach także wysyłać proste polecenia do **AAPS**.

## Jakie są zalety systemu AAPS?

Algorytm OpenAPS używany przez **AAPS** kontroluje poziom cukru we krwi bez działań użytkownika, zgodnie z ustawionymi przez niego parametrami (najważniejsze z nich to dawki bazowe, współczynniki wrażliwości na insulinę, współczynniki insulina/węglowodany, czas działania insuliny itd.), i reaguje co 5 minut na nowe dane z sensora.

Według użytkowników zalety **AAPS** to między innymi wiele opcji do dokładnego dostrojenia, **Automatyzacje** i większa przejrzystość systemu dla pacjenta/opiekuna. Może to dać lepszą kontrolę nad twoją cukrzycą (lub cukrzycą osoby, którą się opiekujesz), a to z kolei może poprawić jakość życia i dać większy spokój.

Jeśli poświęcisz na to swój czas, **AAPS** może dać ci:

- złagodzenie stresu i ciężaru zarządzania cukrzycą typu 1;

- zmniejszenie ilości żmudnych decyzji związanych z cukrzycą typu 1;

- dostarczenie spersonalizowanego i dynamicznego dozowania insuliny w oparciu o dane w czasie rzeczywistym, co może prowadzić do zmniejszenia konieczności leczenia hipo- i hiperglikemii;

- większą wiedzę o dawkowaniu insuliny i pewność, aby lepiej dostroić swoje ustawienia;

- możliwość tworzenia ustawień automatycznych (**automatyzacji**), które są dostosowane do twojego stylu życia;

- lepszą jakość snu i ogólnie rzadsze nocne interwencje;

- zdalne monitorowanie i zarządzanie podawaniem insuliny dla opiekunów cukrzyków typu 1; oraz

- usprawnienie twojego przenośnego sprzętu cukrzycowego (odbiornika CGM i urządzenia kontrolującego insulinę) przez użycie telefonu z Androidem kontrolowanego przez **AAPS**.


W ostatecznym rozrachunku, **AAPS** może umożliwić osobom lepsze zarządzanie cukrzycą, co prowadzi do stabilnego stężenia cukru we krwi i poprawy długoterminowych skutków zdrowotnych.

### Konkretne zalety to:

#### 1) Wbudowane bezpieczeństwo
Aby przeczytać o funkcjach bezpieczeństwa algorytmów, znanych jako oref0 i oref1, [kliknij tutaj](https://openaps.org/reference-design/). Użytkownik kontroluje własne ograniczenia bezpieczeństwa.

#### 2) Elastyczność sprzętowa

**AAPS** działa z wieloma pompami insulinowymi i sensorami, więc łatwo go dopasować, gdy zmienia się twoje życie. Na przykład jeśli pojawi się u ciebie alergia na klej plastra sensora Dexcom, możesz zamiast niego używać sensora Libre. Nie musisz ponownie budować ani instalować aplikacji **AAPS**, aby zmienić sprzęt – wystarczy wybrać inną pompę lub źródło BG w **Konfiguracji**. **AAPS** nie zależy od konkretnych sterowników pomp i ma też „wirtualną pompę”, dzięki której możesz bezpiecznie testować, zanim zaczniesz używać go na sobie.

#### 3) Wysoce dostosowywalny, z szerokim zakresem parametrów

Użytkownicy mogą łatwo dodawać lub usuwać moduły i funkcje, a **AAPS** może działać zarówno w trybie otwartej, jak i zamkniętej pętli. Oto kilka przykładów możliwości systemu **AAPS**:

 a) Możliwość ustawienia niższego celu **BG** 30 min przed jedzeniem; cel możesz ustawić nawet na 72 mg/dl (4,0 mmol/l).

 b) Jeśli masz insulinooporność, która powoduje wysoki poziom cukru we krwi, **AAPS** pozwala ustawić regułę **automatyzacji**, która włącza się, gdy BG wzrośnie powyżej 8 mmol/l (144 mg/dl), i zmienia profil na (na przykład) 120% (to zwiększa bazę o 20% i wzmacnia też inne współczynniki w porównaniu z twoim zwykłym **profilem**). Automatyzacja będzie trwać zgodnie z ustalonym przez ciebie czasem. Taka automatyzacja może być ustawiona jako aktywna tylko w określonych dniach tygodnia, w określonych porach dnia, a nawet w określonych miejscach.

 c) Jeśli twoje dziecko nagle, bez uprzedzenia, skacze na trampolinie, **AAPS** pozwala wstrzymać podawanie insuliny na ustalony czas, bezpośrednio z telefonu.

 d) Po ponownym podłączeniu pompy z drenem, odłączonej na czas pływania, **AAPS** obliczy ilość insuliny bazowej, której nie dostarczono podczas rozłączenia i dostarczy ją ostrożnie, uwzględniając obecny poziom cukru we krwi. Jeśli ta insulina nie jest potrzebna, możesz z niej zrezygnować, po prostu „anulując” pominiętą bazę.

 e) **AAPS** ma możliwość ustawiania różnych profili dla różnych sytuacji i łatwego przełączania się między nimi. Na przykład funkcje, które pomagają algorytmowi szybciej obniżyć wysoki poziom cukru (takie jak super mikro bolusy („**SMB**”) i niezapowiedziane posiłki („**UAM**”, z ang. unannounced meals)), można ustawić tak, aby działały tylko w ciągu dnia, jeśli obawiasz się nocnych hipoglikemii.

Są to tylko przykłady, pełen wachlarz funkcji daje ogromną elastyczność w codziennym życiu, w tym w sporcie, chorobach czy cyklach hormonalnych _itp._ Ostatecznie to użytkownik musi zdecydować, jak korzystać z tej elastyczności, nie ma do tego jednej uniwersalnej automatyzacji.

#### 4) Zdalny monitoring
Jest wiele możliwych kanałów monitorowania (Sugarmate, Dexcom Follow, xDrip, Android Auto _itp._), przydatnych dla rodziców/opiekunów oraz dla dorosłych w pewnych sytuacjach (sen/prowadzenie auta), którzy potrzebują alarmów dopasowanych do siebie. W niektórych aplikacjach (xDrip) możesz też całkowicie wyłączyć alarmy. To bardzo przydatne, gdy masz nowy sensor, który się „wygrzewa” lub stabilizuje i jeszcze nie chcesz go używać w pętli.

#### 5) Zdalne sterowanie
Ważną przewagą **AAPS** nad systemami komercyjnymi jest to, że obserwujący mogą wysyłać do systemu **AAPS** wiele różnych poleceń za pomocą uwierzytelnionych poleceń tekstowych (SMS) lub sparowanej aplikacji **AAPSClient**. Z tej funkcji bardzo często korzystają rodzice dzieci z cukrzycą typu 1, które używają **AAPS**.

Funkcje zdalnego sterowania mogą być bardzo przydatne: na przykład na placu zabaw, gdy chcesz ze swojego telefonu podać bolus przed przekąską, a twoje dziecko jest zajęte zabawą. Możesz też monitorować system na smartwatchu (_np._ Garmin) lub wysyłać z niego proste polecenia (_np._ z zegarka Wear OS, takiego jak Samsung Galaxy Watch).

#### 6) Brak ograniczeń komercyjnych, ze względu na otwarte interfejsy aplikacji
Poza podejściem open-source, które pozwala w każdej chwili przeglądać kod źródłowy **AAPS**, ogólna zasada udostępniania otwartych interfejsów programistycznych daje też innym programistom możliwość wnoszenia nowych pomysłów. **AAPS** jest ściśle zintegrowany z Nightscout. Przyspiesza to rozwój i umożliwia użytkownikom dodawanie funkcji czyniących życie z cukrzycą jeszcze bardziej wygodnym. Dobre przykłady takich integracji to [Nightscout](https://nightscout.github.io/), [Nightscout Reporter](https://nightscout-reporter.zreptil.de/), xDrip, [M5 stack](https://github.com/mlukasek/M5_NightscoutMon/wiki) itp. Między programistami open-source a twórcami systemów komercyjnych toczy się stały dialog. Wiele innowacji OS-AID jest stopniowo przejmowanych przez systemy komercyjne, w których rozwój jest, co zrozumiałe, wolniejszy, między innymi dlatego, że interfejsy między systemami różnych firm (pompy, aplikacje, sensory _itp._) wymagają starannych negocjacji i licencji. Może to także spowolnić innowacje, które są wygodne dla pacjenta (lub dla małej grupy pacjentów o bardzo szczególnych potrzebach), ale nie przynoszą dużego zysku.

#### 7) Szczegółowy interfejs aplikacji
Z **AAPS** łatwo śledzić rzeczy takie jak poziom insuliny w pompie, wiek kaniuli, wiek sensora, wiek baterii w pompie, IOB (ang. insulin-on-board) _itd_. Wiele czynności możesz wykonać w aplikacji **AAPS** (napełnianie pompy, odłączanie pompy _itp._) zamiast na samej pompie. Dzięki temu pompa może zostać w kieszeni lub przy pasku (twoim lub osoby, którą się opiekujesz).

#### 8) Dostępność i przystępność cenowa
**AAPS** daje osobom, których obecnie nie stać na samodzielne finansowanie lub które nie mają refundacji/ubezpieczenia, dostęp do systemu hybrydowej zamkniętej pętli, który pod względem rozwoju jest koncepcyjnie o lata przed systemami komercyjnymi. Obecnie do konfiguracji **AAPS** potrzebujesz serwera raportów (Nightscout lub Tidepool), ale nie jest on wymagany do codziennej pracy pętli **AAPS**. Wiele osób nadal używa Nightscout do zbierania swoich danych i do zdalnego monitoringu. Chociaż sam **AAPS** jest darmowy, konfiguracja Nightscout na jednej z różnych platform może kosztować (0–12 €), w zależności od tego, jakiego poziomu wsparcia potrzebujesz (zobacz tabelę porównawczą) i czy chcesz nadal korzystać z Nightscout po konfiguracji. **AAPS** działa z wieloma niedrogimi (od około 150 €) [telefonami z Androidem](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true). Dostępne są różne wersje dla konkretnych regionów i języków, a z AAPS mogą korzystać także osoby [niewidome](#accessibility-for-users-aaps-who-are-partially-or-completely-blind).

#### 9) Wsparcie
Żaden zautomatyzowany system podawania insuliny nie jest idealny. Systemy komercyjne i open-source miewają wiele takich samych usterek, zarówno w zakresie komunikacji, jak i czasowej awarii sprzętu. Wsparcie oferuje społeczność użytkowników AAPS na Facebooku, Discordzie i GitHubie – osoby z całego świata, które zaprojektowały i rozwijały **AAPS** i obecnie go używają. Dla komercyjnych systemów APS istnieją też grupy wsparcia na Facebooku oraz pomoc ze strony klinik i firm. Warto porozmawiać z obecnymi lub byłymi użytkownikami tych systemów, aby dowiedzieć się o typowych usterkach, jakości szkoleń i poziomie stałego wsparcia.

#### 10) Przewidywalność, przejrzystość i bezpieczeństwo
**AAPS** jest przejrzysty, logiczny i przewidywalny, dzięki czemu łatwiej może być zauważyć, że jakieś ustawienie jest złe, i odpowiednio je poprawić. Możesz dokładnie zobaczyć, co robi system i dlaczego, oraz ustawić jego limity działania. Dzięki temu kontrola (i odpowiedzialność) jest w twoich rękach. Może to zapewnić użytkownikowi pewność i spokojniejszy sen.

#### 11) Dostęp do zaawansowanych funkcji w wersjach rozwojowych (dev), w tym do w pełni zamkniętej pętli
Ta dokumentacja **AAPS** opisuje główną gałąź **„master”** **AAPS**. Jednakże badania i rozwój trwają nieustannie. Bardziej doświadczeni użytkownicy mogą chcieć wypróbować funkcje eksperymentalne w gałęzi (ang. branch) **rozwojowej** (development). Prace rozwojowe skupiają się na sposobach na w pełni zamkniętą pętlę (bez bolusów do posiłków _itd._) i ogólnie na tym, aby życie z cukrzycą typu 1 było jak najwygodniejsze.

#### 12) Możliwość przyczynienia się do dalszych ulepszeń
Cukrzyca typu 1 może być bardzo frustrująca i izolująca. Kontrola nad własną technologią do leczenia cukrzycy i możliwość „przekazania dalej” tego, czego się nauczysz, przez pomoc innym na ich drodze, gdy tylko zrobisz postępy, może dawać dużo satysfakcji. Możesz się szkolić, odkrywać przeszkody na drodze i szukać, a nawet przyczyniać się do rozwoju nowych rozwiązań i dokumentacji. W społeczności znajdą się inne osoby z tym samym celem, z którymi możesz dzielić się pomysłami i współpracować. To jest sedno ruchu #WeAreNotWaiting.

## Jak AAPS wypada na tle kuracji zastrzykami (ang. MDI — multiple daily injections) i otwartej pętli?

Kuracja zastrzykami (MDI, (a) na **Rysunku 2** poniżej) zazwyczaj polega na podawaniu długo działającej insuliny (_np._ Tresiba) raz dziennie oraz podawaniu szybko działającej insuliny (_np._ Novorapid, Fiasp) do posiłków lub w celu korekty. Używanie pompy w otwartej pętli (b) polega na podawaniu przez pompę zaprogramowanej dawki bazowej insuliny szybko działającej oraz podawaniu bolusów przez pompę do posiłków lub w celu korekty. Podstawą systemu pętli jest to, że aplikacja pętli używa danych z sensora glukozy, aby polecić pompie zatrzymanie podawania insuliny, gdy przewiduje, że zmierzasz do niskiego poziomu glukozy, oraz podanie dodatkowej insuliny, gdy poziom glukozy rośnie i według prognozy będzie za wysoki (c). Chociaż rysunek poniżej jest przesadnie uproszczony w porównaniu z rzeczywistością, ma on na celu pokazanie głównych różnic w tych podejściach. Możliwe jest osiągnięcie wyjątkowo dobrej kontroli glukozy przy zastosowaniu któregokolwiek z tych trzech podejść.

![21-06-23 AAPS glucose MDI etc](../images/basic-overview-mdi-open-and-closed-loop.png)


**Rysunek 2**. Podstawowy przegląd (a) kuracji zastrzykami (MDI), (b) użycia pompy w systemie otwartej pętli oraz (c) hybrydowego systemu zamkniętej pętli.

## Jak wypada AAPS na tle innych systemów pętli?

Na dzień 25 czerwca 2023 r. dostępne są cztery główne systemy zamkniętej pętli open-source: [OpenAPS](https://openaps.readthedocs.io/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) i [Trio](https://triodocs.org) (wcześniej FreeAPS X). Porównanie różnych systemów przedstawiono w poniższej tabeli:


| Typ urządzenia | Nazwa                                                                 | [AAPS](https://wiki.aaps.app)             | [Pętla](https://loopkit.github.io/loopdocs/) | [Open APS](https://openaps.readthedocs.io/en/latest/) | [Trio](https://triodocs.org)              |
| -------------- | --------------------------------------------------------------------- | ----------------------------------------- | -------------------------------------------- | ----------------------------------------------------- | ----------------------------------------- |
| Telefon        | Android                                                               | ![dostępny](../images/available.png)      | ![niedostępny](../images/unavailable.png)    | ![niedostępny](../images/unavailable.png)             | ![niedostępny](../images/unavailable.png) |
| Telefon        | iPhone                                                                | ![niedostępny](../images/unavailable.png) | ![dostępny](../images/available.png)         | ![niedostępny](../images/unavailable.png)             | ![dostępny](../images/available.png)      |
| Rig            | niewielki komputer (1)                                                | ![niedostępny](../images/unavailable.png) | ![niedostępny](../images/unavailable.png)    | ![dostępny](../images/available.png)                  | ![niedostępny](../images/unavailable.png) |
| POMPA          | [Dana I](../CompatiblePumps/DanaRS-Insulin-Pump.md)                   | ![dostępny](../images/available.png)      | ![dostępny](../images/available.png)         | ![niedostępny](../images/unavailable.png)             | ![dostępny](../images/available.png)      |
| POMPA          | [Dana RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)                  | ![dostępny](../images/available.png)      | ![dostępny](../images/available.png)         | ![niedostępny](../images/unavailable.png)             | ![dostępny](../images/available.png)      |
| POMPA          | [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)                    | ![dostępny](../images/available.png)      | ![niedostępny](../images/unavailable.png)    | ![niedostępny](../images/unavailable.png)             | ![niedostępny](../images/unavailable.png) |
| POMPA          | [Omnipod (Dash)](../CompatiblePumps/OmnipodDASH.md)                   | ![dostępny](../images/available.png)      | ![dostępny](../images/available.png)         | ![niedostępny](../images/unavailable.png)             | ![dostępny](../images/available.png)      |
| POMPA          | [Omnipod (Eros)](../CompatiblePumps/OmnipodEros.md)                   | ![dostępny](../images/available.png)      | ![dostępny](../images/available.png)         | ![niedostępny](../images/unavailable.png)             | ![dostępny](../images/available.png)      |
| POMPA          | [Diaconn G8](../CompatiblePumps/DiaconnG8.md)                         | ![dostępny](../images/available.png)      | ![niedostępny](../images/unavailable.png)    | ![niedostępny](../images/unavailable.png)             | ![niedostępny](../images/unavailable.png) |
| POMPA          | [EOPatch 2](../CompatiblePumps/EOPatch2.md)                           | ![dostępny](../images/available.png)      | ![niedostępny](../images/unavailable.png)    | ![niedostępny](../images/unavailable.png)             | ![niedostępny](../images/unavailable.png) |
| POMPA          | [Medtrum TouchCare Nano 200U](../CompatiblePumps/MedtrumNano.md)      | ![dostępny](../images/available.png)      | ![dostępny](../images/available.png)         | ![niedostępny](../images/unavailable.png)             | ![dostępny](../images/available.png)      |
| POMPA          | [Medtrum TouchCare 300U](../CompatiblePumps/MedtrumNano.md)           | ![dostępny](../images/available.png)      | ![dostępny](../images/available.png)         | ![niedostępny](../images/unavailable.png)             | ![dostępny](../images/available.png)      |
| POMPA          | [Roche Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)          | ![dostępny](../images/available.png)      | ![niedostępny](../images/unavailable.png)    | ![niedostępny](../images/unavailable.png)             | ![niedostępny](../images/unavailable.png) |
| POMPA          | [Roche Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)         | ![dostępny](../images/available.png)      | ![niedostępny](../images/unavailable.png)    | ![niedostępny](../images/unavailable.png)             | ![niedostępny](../images/unavailable.png) |
| POMPA          | [Starsze Medtronic](../CompatiblePumps/MedtronicPump.md)              | ![dostępny](../images/available.png)      | ![dostępny](../images/available.png)         | ![dostępny](../images/available.png)                  | ![dostępny](../images/available.png)      |
| POMPA          | [Equil 5.3](../CompatiblePumps/Equil5.3.md)                           | ![dostępny](../images/available.png)      | ![niedostępny](../images/unavailable.png)    | ![niedostępny](../images/unavailable.png)             | ![niedostępny](../images/unavailable.png) |
| POMPA          | [CareLevo](../CompatiblePumps/CareLevo.md)                            | ![dostępny](../images/available.png)      | ![niedostępny](../images/unavailable.png)    | ![niedostępny](../images/unavailable.png)             | ![niedostępny](../images/unavailable.png) |
| CGM            | [Dexcom G7/One+/Stelo](../CompatibleCgms/DexcomG7.md)                 | ![dostępny](../images/available.png)      | ![dostępny](../images/available.png)         | ![niedostępny](../images/unavailable.png)             | ![dostępny](../images/available.png)      |
| CGM            | [Dexcom One](../CompatibleCgms/DexcomG6.md)                           | ![dostępny](../images/available.png)      | ![dostępny](../images/available.png)         | ![niedostępny](../images/unavailable.png)             | ![dostępny](../images/available.png)      |
| CGM            | [Dexcom G6](../CompatibleCgms/DexcomG6.md)                            | ![dostępny](../images/available.png)      | ![dostępny](../images/available.png)         | ![dostępny](../images/available.png)                  | ![dostępny](../images/available.png)      |
| CGM            | [Libre 3/3+](../CompatibleCgms/Libre3.md)                             | ![dostępny](../images/available.png)      | ![dostępny](../images/available.png)         | ![niedostępny](../images/unavailable.png)             | ![dostępny](../images/available.png)      |
| CGM            | [Libre 2/2+](../CompatibleCgms/Libre2.md)                             | ![dostępny](../images/available.png)      | ![dostępny](../images/available.png)         | ![niedostępny](../images/unavailable.png)             | ![dostępny](../images/available.png)      |
| CGM            | [Libre 1](../CompatibleCgms/Libre1.md)                                | ![dostępny](../images/available.png)      | ![dostępny](../images/available.png)         | ![niedostępny](../images/unavailable.png)             | ![dostępny](../images/available.png)      |
| CGM            | [Eversense](../CompatibleCgms/Eversense.md)                           | ![dostępny](../images/available.png)      | ![dostępny](../images/available.png)         | ![niedostępny](../images/unavailable.png)             | ![dostępny](../images/available.png)      |
| CGM            | [MM640g/MM630g](../CompatibleCgms/MM640g.md)                          | ![dostępny](../images/available.png)      | ![niedostępny](../images/unavailable.png)    | ![niedostępny](../images/unavailable.png)             | ![niedostępny](../images/unavailable.png) |
| CGM            | [PocTech](../CompatibleCgms/PocTech.md)                               | ![dostępny](../images/available.png)      | ![niedostępny](../images/unavailable.png)    | ![niedostępny](../images/unavailable.png)             | ![niedostępny](../images/unavailable.png) |
| CGM            | [Ottai](../CompatibleCgms/OttaiM8.md)                                 | ![dostępny](../images/available.png)      | ![niedostępny](../images/unavailable.png)    | ![niedostępny](../images/unavailable.png)             | ![niedostępny](../images/unavailable.png) |
| CGM            | [Syai Tag](../CompatibleCgms/SyaiTagX1.md)                            | ![dostępny](../images/available.png)      | ![niedostępny](../images/unavailable.png)    | ![niedostępny](../images/unavailable.png)             | ![niedostępny](../images/unavailable.png) |
| CGM            | [Nightscout jako źródło BG](../CompatibleCgms/CgmNightscoutUpload.md) | ![dostępny](../images/available.png)      | ![dostępny](../images/available.png)         | ![dostępny](../images/available.png)                  | ![dostępny](../images/available.png)      |

_Przypisy do tabeli:_
1. **Rig** to mały komputer, który nosisz ze sobą, nieposiadający monitora. Jednym z obsługiwanych typów urządzeń jest Intel Edison + Explorer Board, innym Raspberry Pi + Explorer HAT lub Adafruit RFM69HCW Bonnet. Pierwsze systemy APS były oparte na takim zestawie, ponieważ telefony komórkowe nie mogły jeszcze uruchamiać potrzebnych algorytmów. Użycie tych systemów spadło, gdy konfiguracja na telefonach komórkowych stała się łatwiejsza, a telefony mają wbudowany wyświetlacz. Intel przestał również sprzedawać Intel Edison. Doskonałe algorytmy OpenAPS **oref0** i **oref1** są teraz częścią AAPS i Trio.


Międzynarodowe, recenzowane stanowisko (konsensus) z praktycznymi wskazówkami o pętlach open-source zostało napisane przez pracowników ochrony zdrowia i dla nich, a w 2022 roku opublikowano je w czołowym czasopiśmie medycznym: [_Lancet Diabetes Endocrinol_, 2022; 10: 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_). Naprawdę warto go przeczytać (także w twojej poradni diabetologicznej). Podsumowuje on główne różnice techniczne między różnymi systemami hybrydowej zamkniętej pętli open-source.

Trudno „wyczuć” jakikolwiek system bez używania go lub bez rozmowy z osobami, które go używają, więc śmiało pytaj innych na Facebooku/Discordzie. Większość osób uważa, że **AAPS** jest niezwykle zaawansowany w porównaniu z innymi systemami hybrydowej zamkniętej pętli (zwłaszcza komercyjnymi) i ma ogromną liczbę ustawień i funkcji do dopasowania, opisanych powyżej. Na początku dla niektórych osób może to być trochę przytłaczające, ale nie musisz poznawać wszystkich możliwości naraz. Możesz iść do przodu tak wolno lub tak szybko, jak chcesz, a na każdym kroku możesz liczyć na pomoc.


## Czy AAPS używa sztucznej inteligencji lub jakiegoś algorytmu uczącego się?

Obecna wersja **AAPS** (4.0) nie ma żadnych algorytmów uczenia maszynowego, wieloparametrowych modeli reakcji na insulinę ani sztucznej inteligencji. W związku z tym system jest otwarty i przejrzysty pod względem funkcjonowania i mogą go zrozumieć nie tylko eksperci, ale także lekarze i pacjenci. Oznacza to też, że jeśli twój plan dnia mocno się zmienia (na przykład ze stresującego tygodnia w pracy na spokojny urlop) i prawdopodobnie potrzebujesz wyraźnie innej ilości insuliny, możesz od razu przełączyć **AAPS** na słabszy/silniejszy dopasowany profil. System „uczący się” zrobi to dla ciebie automatycznie, ale prawdopodobnie dłużej zajmie mu dostosowanie ilości podawanej insuliny.

(which-system-is-right-for-me-or-my-dependent)=
## Jaki system jest odpowiedni dla mnie lub osoby, którą się opiekuję?

W praktyce wybór systemu jest często ograniczony tym, którą pompę posiadasz lub możesz otrzymać od dostawcy usług medycznych i twoim wyborem telefonu (Apple lub Android). Jeśli nie masz jeszcze pompy, masz największy wybór systemów. Technologia ciągle ewoluuje, pompy są wycofywane ze sprzedaży, wypuszczane są nowe pompy i sensory. Większość systemów open-source współpracuje z najpopularniejszymi sensorami (Libre i Dexcom) lub jest szybko przystosowywana do pracy z nowymi sensorami w ok. rok od ich wypuszczenia (z pewnym opóźnieniem na testy bezpieczeństwa i stabilności).

Większość użytkowników **AAPS** zgłasza więcej czasu w zakresie, spadek HbA1c oraz lepszą jakość życia dzięki systemowi, który może sam dostosowywać dawki bazowe w nocy podczas snu. Dotyczy to większości hybrydowych systemów zamkniętej pętli. Niektórzy wolą bardzo prosty system z małą liczbą ustawień (wtedy lepszy może być dla ciebie system komercyjny), a inni uważają taki brak kontroli za bardzo frustrujący (wtedy lepszy może być system open-source). Jeśli cukrzycę rozpoznano u ciebie (lub u osoby, którą się opiekujesz) niedawno, częstą drogą jest najpierw przyzwyczajenie się do MDI z sensorem glukozy, potem przejście na pompę, która może działać w pętli, a potem przejście na **AAPS**. Niektórzy (zwłaszcza małe dzieci) mogą od razu zacząć od pompy.

Należy zauważyć, że użytkownik **AAPS** musi być proaktywny, aby samodzielnie diagnozować i rozwiązywać problemy ze wsparciem społeczności. To zupełnie inny sposób myślenia niż w przypadku korzystania z systemu komercyjnego. Z **AAPS** użytkownik ma większą kontrolę, ale również odpowiedzialność i musi czuć się z tym komfortowo.

## Czy używanie systemów open-source, takich jak AAPS, jest bezpieczne?

### Bezpieczeństwo systemu AAPS
Bardziej trafne pytanie to prawdopodobnie „czy jest to bezpieczne **w porównaniu** z moim obecnym sposobem podawania insuliny?”, ponieważ żadna metoda podawania insuliny nie jest bez ryzyka. Jest wiele zabezpieczeń wbudowanych w **AAPS**. Niedawny [artykuł](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375) opisywał użycie **AAPS** w symulacji komputerowej, co było skutecznym sposobem na obiektywne sprawdzenie, jak bezpieczny i skuteczny jest ten system. Ogólnie rzecz biorąc, wiele tysięcy osób na całym świecie używa systemów automatycznego podawania insuliny open-source, a ich liczba na świecie stale rośnie.

Każde urządzenie wykorzystujące łączność radiową może zostać zhakowane, dotyczy to również niezapętlonej pompy insulinowej. Obecnie nie są nam znane przypadki prób zaszkodzenia osobom poprzez zhakowanie ich sprzętu medycznego do leczenia cukrzycy. Istnieje jednak wiele sposobów ochrony przed takim ryzykiem:

1.  W ustawieniach pompy ogranicz maksymalny dozwolony bolus i maksymalną bazę tymczasową do wartości, które uważasz za najbezpieczniejsze. To twarde limity, których naszym zdaniem żaden złośliwy haker nie jest w stanie obejść.

2.  Włącz alarmy CGM dla wysokich i niskich poziomów cukru.

3.  Monitoruj podawanie insuliny online. Użytkownicy Nightscout mogą ustawić dodatkowe alarmy na wypadek wielu różnych sytuacji, w tym takich, które są o wiele bardziej prawdopodobne niż złośliwy atak. Poza wysokimi i niskimi wartościami cukru Nightscout może wyświetlać dane diagnostyczne przydatne do sprawdzenia, czy pompa działa tak, jak należy, włączając aktualną aktywną insulinę (IOB), historię baz tymczasowych z pompy czy historię bolusów pompy. Można go również skonfigurować tak, aby proaktywnie ostrzegał użytkowników o niepożądanych sytuacjach, takich jak przewidywane wysokie i niskie poziomy cukru, niski poziom insuliny w zbiorniku i niski poziom naładowania baterii pompy.

W przypadku wystąpienia złośliwego ataku na pompę insulinową te sposoby znacznie zmniejszyłyby ryzyko. Każdy potencjalny użytkownik **AAPS** musi rozważyć ryzyka związane z użyciem **AAPS** w porównaniu do tych związanych z użyciem innego systemu.

#### Kwestie bezpieczeństwa związane ze zbyt gwałtowną poprawą kontroli poziomu glukozy we krwi

Szybka redukcja HbA1c i poprawiona kontrola poziomu cukru we krwi brzmią kusząco. Jednakże _zbyt szybkie_ obniżenie średniego poziomu cukru we krwi, przez rozpoczęcie używania systemu zamkniętej pętli może spowodować trwałe szkody, w tym uszkodzenia oczu i bolesną permanentną neuropatię. Szkód tych można w prosty sposób uniknąć, przez wolniejsze obniżanie poziomów glukozy. Jeśli masz obecnie wysokie HbA1c i przechodzisz na AAPS (lub inny system zamkniętej pętli), przed rozpoczęciem omów to możliwe ryzyko ze swoim zespołem diabetologicznym i uzgodnij z nim plan czasowy. Więcej ogólnych informacji o tym, jak bezpiecznie obniżać poziom glukozy, w tym linki do literatury medycznej, znajdziesz w sekcji o bezpieczeństwie [tutaj](#preparing-safety-first).

#### Bezpieczeństwo medyczne dotyczące sprzętu, materiałów eksploatacyjnych i innych lekarstw

Użyj sprawdzonej, w pełni działającej i zatwierdzonej przez FDA lub CE pompy insulinowej i systemu CGM do systemu pętli sztucznej trzustki. Modyfikacje sprzętu lub oprogramowania tych komponentów mogą powodować nieprzewidziane dawkowanie insuliny, powodując znaczne ryzyko dla użytkownika. Jeśli znajdziesz lub ktoś zaoferuje ci uszkodzoną, zmodyfikowaną lub zrobioną samodzielnie pompę insulinową albo odbiornik CGM, nie używaj ich do budowy systemu AAPS.

Używaj oryginalnych materiałów eksploatacyjnych takich jak sertery, kaniule i zbiorniki na insulinę zatwierdzone przez producenta do użytku z twoją pompą i systemem CGM. Używanie nieprzetestowanych lub zmodyfikowanych materiałów zaopatrzenia może spowodować niedokładność CGM lub błędy w dawkowaniu insuliny. Źle dobrana dawka insuliny jest bardzo niebezpieczna – nie igraj ze swoim życiem, przerabiając materiały eksploatacyjne.

Nie przyjmuj inhibitorów SGLT-2 (flozyn) podczas stosowania **AAPS**, ponieważ obniżają one poziom cukru we krwi w sposób, którego nie da się przewidzieć ani obliczyć. Połączenie tego efektu z systemem, który obniża dawki bazowe, w celu zwiększenia stężenia cukru we krwi jest niebezpieczne, więcej szczegółów na ten temat znajduje się w głównej sekcji [dotyczącej bezpieczeństwa](#preparing-safety-first).

(introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team)=
## Jak rozpocząć rozmowę o AAPS z moim zespołem diabetologicznym?

Użytkownicy są zachęcani do rozmów ze swoimi lekarzami na temat zamiaru stosowania **AAPS**. Nie bój się szczerej rozmowy ze swoim zespołem diabetologicznym, jeśli zamierzasz używać **AAPS** (lub dowolnej innej pętli OS-AID). Przejrzystość i zaufanie między pacjentem a lekarzem mają pierwszorzędne znaczenie.

### Sugerowane podejście:
Rozpocznij rozmowę z lekarzem, aby sprawdzić, co wie o technologiach dla diabetyków, takich jak CGM, pompy, pętle hybrydowe i pętle komercyjne, i jakie ma do nich podejście. Twój lekarz/endokrynolog powinien być świadomy podstaw technologii i być skłonny porozmawiać z tobą o ostatnich postępach produktów pętli komercyjnych, które są dostępne w twoim regionie.

#### Precedens lokalny

Poznaj zdanie swoich lekarzy/endokrynologów na temat pętli OS-AID _w porównaniu z_ pętlami komercyjnymi i oceń ich wiedzę w tej dziedzinie. Czy znają **AAPS** i czy mogą podzielić się z tobą przydatnym doświadczeniem z pracy z pacjentami używającymi pętli OS-AID?

Zapytaj, czy twój zespół ma pod opieką pacjentów, którzy już używają pętli OS-AID. Ze względu na poufność danych pacjenta, lekarze nie mogą przekazać ci danych innych pacjentów, bez uzyskania zgody danej osoby. Jeśli jednak chcesz, **możesz** poprosić lekarza, aby przekazał **twoje** dane kontaktowe pacjentowi, który już używa pętli OS-AID, jeśli jest ktoś, z kim według lekarza możesz „złapać kontakt”. Powiedz, że chętnie porozmawiasz z tym pacjentem o pętli OS-AID. Lekarze nie mają obowiązku tego robić, ale część chętnie pomoże, ponieważ zdają sobie sprawę ze znaczenia wzajemnego wsparcia w leczeniu cukrzycy typu 1. Przydatne może być też spotkanie z życzliwymi osobami z twojej okolicy, które używają pętli OS-AID. To oczywiście zależy od ciebie i nie jest absolutnie konieczne.

#### Precedens krajowy i międzynarodowy

Jeśli czujesz, że twój zespół nie wspiera cię w korzystaniu z pętli **AAPS**, mogą pomóc następujące argumenty:

a) System **AAPS** został zaprojektowany PRZEZ pacjentów i ich opiekunów. Został on zaprojektowany z myślą o bezpieczeństwie, ale także na podstawie dogłębnych doświadczeń pacjentów. Na całym świecie jest wiele tysięcy użytkowników **AAPS**. Dlatego prawdopodobnie wśród pacjentów twojej poradni są inne osoby używające pętli OS-AID (niezależnie od tego, czy poradnia o tym wie, czy nie).

b) Recent peer-reviewed published guidance in the internationally leading medical journal [The Lancet](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/pdf/nihms-1765784.pdf)(_1_) has confirmed that OS-AID loops are **safe** and **effective at improving diabetic control**, including time in range. There are regular articles in leading journals like [Nature](https://doi.org/10.1038/d41586-023-02648-9)(_3_) which highlight the progress of the OS-AID looping community.

c) Rozpoczęcie pracy z **AAPS** oznacza _stopniowe_ przejście od używania pompy w „otwartej” pętli, przez zawieszenie przy niskiej glikemii, aż do hybrydowej „zamkniętej” pętli, przez zaliczenie kolejnych zadań. Istnieje zatem ustrukturyzowany program, wymagający od użytkownika wykazania kompetencji na każdym etapie i odpowiedniego dostosowania ich podstawowych ustawień (bazy, współczynnika wrażliwości na insulinę (ISF) i współczynnika insuliny do węglowodanów (ICR)) przed zamknięciem pętli.

d) Wsparcie techniczne zapewnia społeczność OS-AID przez GitHub, Discord i zamknięte grupy na Facebooku.

e) Będziesz w stanie dostarczyć **zarówno dane CGM, jak i informacje o pętli insulinowej/pompie** jako zebrane raporty na spotkania kontrolne (za pośrednictwem Nightscout lub Tidepool), wydrukowane lub na ekranie (jeśli weźmiesz ze sobą laptop/tablet). Zebranie zarówno danych CGM, jak i dot. insuliny pozwoli na efektywniejsze spożytkowanie czasu twojego lekarza na zapoznanie się z raportami i pomoże w rozmowach o ocenie twoich postępów.

f) Jeśli zespół nadal ma poważne zastrzeżenia, przekaż lekarzom wydruki artykułów referencyjnych podlinkowanych w niniejszym tekście i daj im link do sekcji **AAPS** dla lekarzy: [Dla lekarzy – ogólne wprowadzenie i przewodnik po **AAPS**](../UsefulLinks/ClinicianGuideToAaps.md)

#### Wsparcie dla pętli OS-AID ze strony innych lekarzy

The paper published in the [Lancet Diabetes Endocrinology](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_) (co-led by King’s and Guy’s and St Thomas’ NHS Foundation Trust, and co-led by Dr Sufyan Hussain, a consultant diabetologist and honorary senior lecturer from King’s in London) provides:

a) **Zapewnienie** dla profesjonalistów, że systemy sztucznej trzustki OS-AID / open-source są „bezpieczną i skuteczną” opcją leczenia cukrzycy typu 1, oraz wskazówki dotyczące zaleceń, rozmów, wsparcia i dokumentacji;

b) **Uznanie**, że open-source'owe systemy zautomatyzowanego podawania insuliny (ang. AID — automated insulin delivery) mogą zwiększyć czas w zakresie (ang. TIR — time in range), jednocześnie obniżając zmienność stężenia glukozy we krwi oraz ilość epizodów hipo- i hiperglikemii w różnych grupach wiekowych, płciowych i społecznościach;

c) **Zalecenie**, zgodnie z którym pracownicy służby zdrowia powinni **wspierać** pacjentów typu 1 lub ich opiekunów, którzy zdecydują się zarządzać swoją cukrzycą za pomocą open-source'owego systemu AID;

d) Zalecenie, aby pracownicy służby zdrowia starali się dowiedzieć o wszystkich możliwościach leczenia, które mogą przynieść korzyści pacjentom, w tym o dostępnych otwartych systemach AID.  Jeżeli pracownicy służby zdrowia nie dysponują zasobami umożliwiającymi im samokształcenie lub mają obawy prawne lub regulacyjne, powinni rozważyć **współpracę z innymi pracownikami służby zdrowia**, którzy mają takie zasoby;

e) Podkreślenie, że wszyscy użytkownicy CGM powinni zawsze mieć otwarty dostęp w czasie rzeczywistym do **własnych danych o zdrowiu**

f) Podkreślenie, że te systemy open-source nie zostały poddane takim samym ocenom regulacyjnym jak dostępne komercyjnie technologie medyczne, i nie mają komercyjnego wsparcia technicznego. Jednakże, **szerokie wsparcie społeczności jest dostępne**; oraz

g) Zalecenie, aby **regulacje i ramy prawne** zostały zaktualizowane, w celu zapewnienia jasności w sprawie etycznego i efektywnego traktowania takich systemów open-source.

Inny artykuł z [Medical Law International, 2021](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)(_4_) także podkreśla, że „wytyczne dotyczące zgody” brytyjskiej General Medical Council (naczelnej rady lekarskiej) kładą duży nacisk na wspólne podejmowanie decyzji przez lekarza i pacjenta. Lekarz powinien wyjaśnić możliwe korzyści, ryzyka, obciążenia i skutki uboczne systemów APS OS-AID i może polecić konkretną opcję, ale bez wywierania presji na pacjenta.

Ostatecznie ocena tych czynników, wraz z wszelkimi istotnymi dla nich kwestiami nieklinicznymi zależy od pacjenta i to on powinien zdecydować, którą z opcji leczenia, jeśli jakąkolwiek, zaakceptować.

Jeśli lekarz odkryje w poradni, że jego pacjent używa pętli OS-AID, nie jest zwolniony z obowiązku monitorowania pacjenta tylko dlatego, że nie przepisał tej konkretnej technologii, której używa pacjent; lekarze muszą nadal monitorować pacjentów.

Lekarze (przynajmniej w Zjednoczonym Królestwie) nie mają zakazu przepisywania leków nieposiadających pozwolenia na dopuszczenie do obrotu i mogą korzystać z własnego lekarskiego uznania. Dlatego powinni na podstawie własnej oceny klinicznej zdecydować, czy APS OS-AID jest odpowiedni dla danego pacjenta, i omówić z nim zalety i wady, które widzą.

#### Artykuły, do których odnoszono się powyżej, inne użyteczne linki i prezentacje stanowisk są wymienione poniżej:

1. Open-source automated insulin delivery: international consensus statement and practical guidance for health-care professionals [_Lancet Diabetes Endocrinol_, (2022) _10_, 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)
2. [In Silico Trials of an Open-Source Android-Based Artificial Pancreas: A New Paradigm to Test Safety and Efficacy of Do-It-Yourself Systems, 2020](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375)
3. A DIY ‘bionic pancreas’ is changing diabetes care — what's next? [_Nature_ (2023), _620_, 940-941](https://doi.org/10.1038/d41586-023-02648-9)
4. Prescribing unapproved medical devices? The case of DIY artificial pancreas systems [_Medical law international_, (2021), _21_, 42-68](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)
5. [Berlin Institute of Health position statement, 2022](https://www.bihealth.org/en/notices/do-it-yourself-solutions-for-people-with-diabetes-are-safe-and-recommended)
6. Do-It-Yourself Automated Insulin Delivery: A Health-care Practitioner User’s Guide (Diabetes Canada position and guide) [_Canadian Journal of Diabetes_, (2023)_47_, E8, 389-397](https://www.canadianjournalofdiabetes.com/article/S1499-2671(23)00138-7/fulltext)
7.  Holandia (EN/NL) – dla lekarzy – [how to help people on open source automated insulin delivery systems](https://www.diabetotech.com/blog/how-to-help-people-on-open-source-automated-insulin-delivery-systems)
8. First Use of Open-Source Automated Insulin Delivery AndroidAPS in Full Closed-Loop Scenario: Pancreas4ALLRandomized Pilot Study [_Diabetes Technol. Ther._, 25, _5_, 2023](https://www.liebertpub.com/doi/pdf/10.1089/dia.2022.0562?casa_token=D13eFx5vCwwAAAAA:MYvO8hChbViXVJFgov1T11RXBPx2N_wOMThLHwl3TVUxbCuANegPrIFRC5R5VXx_S71FoQYW-qg)
9. Pre-school and school-aged children benefit from the switch from a sensor-augmented pump to an AndroidAPS hybrid closed loop: A retrospective analysis [_Pediatr. Diabetes_ 2021, _22_, 594-604. 2021](https://onlinelibrary.wiley.com/doi/epdf/10.1111/pedi.13190)
10. Wyniki projektu OPEN – projektu finansowanego przez UE, który bada efekty u pacjentów korzystających z nowej technologii sztucznej trzustki typu „zrób to sam” (Outcomes of Patient’s Evidence with Novel, Do-it-Yourself Artificial Pancreas Technology) (https://www.open-diabetes.eu/publications)



## Dlaczego nie mogę po prostu pobrać AAPS i zwyczajnie go użyć?

Aplikacja **AAPS** nie jest dostępna w Google Play — ze względów prawnych musisz ją samodzielnie zbudować z kodu źródłowego. **AAPS** jest nielicencjonowany, co oznacza, że nie posiada zatwierdzenia żadnego organu regulacyjnego w żadnym kraju. **AAPS** jest uważany za przeprowadzany na sobie eksperyment medyczny i jest używany na własne ryzyko użytkownika.

Konfiguracja systemu wymaga cierpliwości, determinacji i stopniowego rozwoju wiedzy technicznej. Wszelkie informacje i wsparcie można odnaleźć w tej dokumentacji, w innych miejscach w Internecie lub u innych, którzy już to zrobili. Wiele tysięcy osób na całym świecie z powodzeniem zbudowało **AAPS** i obecnie go używa.

Twórcy **AAPS** traktują bezpieczeństwo bardzo poważnie i chcą, aby inni mieli dobre doświadczenia z używania **AAPS**. Dlatego niezbędne jest, aby każdy użytkownik (lub opiekun, jeśli użytkownikiem jest dziecko):

- samodzielnie zbudował system AAPS i przeszedł przez **zadania**, aby mieć dość dobre, dopasowane do siebie ustawienia i rozumieć podstawy działania **AAPS**, zanim „zamknie pętlę”;

- robił kopię zapasową systemu, eksportując i zapisując ważne pliki (takie jak magazyn kluczy (keystore) i plik ustawień .json) w bezpiecznym miejscu, aby w razie potrzeby móc szybko wszystko ponownie skonfigurować;

- aktualizował AAPS do nowszych wersji „master”, gdy tylko się pojawiają; oraz

- utrzymywał i monitorował system w celu zapewnienia jego prawidłowego funkcjonowania.

## Jak wygląda łączność systemu AAPS?

**Rysunek 3 (poniżej)** pokazuje przykład systemu **AAPS** dla użytkownika, który nie potrzebuje obserwujących, którzy wpływają na system. Dodatkowe oprogramowanie open-source i platformy, które nie są pokazane, również mogą zostać zintegrowane.

![21-06-23 łączność AAPS bez obserwatorów](../images/AAPS-connectivity-no-followers.png)


**Rysunek 4 (poniżej)** pokazuje pełne możliwości systemu **AAPS** dla użytkownika, który ma obserwujących i potrzebuje zdalnie monitorować i dostosowywać system (na przykład dziecko z cukrzycą typu 1). Dodatkowe oprogramowanie open-source i platformy, które nie są pokazane, również mogą zostać zintegrowane.

![21-06-23 przegląd AAPS z obserwatorami](../images/AAPS-overview-with-followers.png)

## Jak AAPS jest stale rozwijany i ulepszany?

Większość użytkowników **AAPS** używa w pełni przetestowanej wersji **master** AAPS, którą przed udostępnieniem społeczności sprawdzono pod kątem błędów i problemów. Za kulisami programiści wypróbowują nowe ulepszenia i testują je w wersjach „deweloperskich” (**dev**) **AAPS** razem z grupą użytkowników, którzy chętnie szybko instalują aktualizacje z poprawkami błędów. Jeśli ulepszenia działają dobrze, są potem wydawane jako nowa wersja „master” **AAPS**. Każda nowa wersja „master” jest ogłaszana w grupie na Facebooku, aby większość użytkowników **AAPS** mogła o niej przeczytać i zaktualizować aplikację do nowej wersji „master”.

Niektórzy doświadczeni i pewni użytkownicy **AAPS** przeprowadzają eksperymenty z nowymi technologiami oraz z deweloperskimi wersjami aplikacji **AAPS**, co może być interesującą lekturą dla mniej śmiałych użytkowników, bez konieczności samodzielnego ich wykonywania! Ludzie zazwyczaj dzielą się też tymi eksperymentami na grupie na Facebooku.

Możesz przeczytać więcej o niektórych z tych eksperymentów i dyskusje na temat nowych technologii tutaj:

Tim Street [https://www.diabettech.com/](https://www.diabettech.com/)

David Burren [https://bionicwookie.com/](https://bionicwookie.com/)

## Kto może skorzystać na AAPS?

| Typ użytkownika                          |
| ---------------------------------------- |
| ✔️ diabetyk typu 1                       |
| ✔️ opiekun lub rodzic diabetyka typu 1   |
| ✔️ osoby niewidome z cukrzycą typu 1     |
| ✔️ *lekarze i pracownicy ochrony zdrowia |

Powyższa tabela zakłada, że użytkownik ma dostęp zarówno do systemu ciągłego monitorowania glukozy (CGM), jak i do pompy insulinowej.

*Wszystkie dane z **AAPS** mogą być udostępniane pracownikom służby zdrowia za pośrednictwem platform wymiany danych, w tym Nightscout, który zapewnia rejestrowanie i monitorowanie danych CGM w czasie rzeczywistym, dostarczania insuliny, wpisów węglowodanów, przewidywań i ustawień. Nightscout zawiera raporty dzienne i tygodniowe, które mogą pomóc pracownikom ochrony zdrowia w rozmowach z pacjentami z cukrzycą typu 1 dzięki dokładniejszym danym o kontroli glikemii i o zachowaniach pacjenta.

(accessibility-for-users-aaps-who-are-partially-or-completely-blind)=

### Dostępność AAPS dla osób słabowidzących i niewidomych

#### Codzienne używanie AAPS:
AAPS może być używany przez osoby niewidome. Na urządzeniach z systemem Android, system operacyjny ma program o nazwie TalkBack. Umożliwia to orientację po ekranie za pomocą wyjścia głosowego, jako część systemu operacyjnego. Dzięki TalkBack możesz obsługiwać zarówno smartfon, jak i AAPS bez potrzeby patrzenia na ekran.

#### Budowanie aplikacji AAPS:
Jako użytkownik zbudujesz aplikację AAPS w Android Studio. Wiele osób używa do tego systemu Microsoft Windows, który ma czytnik ekranu podobny do TalkBack. Ponieważ Android Studio jest aplikacją Java, w Panelu sterowania musi być włączony komponent „Java Access Bridge”. W przeciwnym razie czytnik ekranu komputera nie będzie mówił w Android Studio.

Sposób, w jaki to zrobisz, zależy od systemu operacyjnego, poniżej przedstawiono dwie metody:

1) W menu Start systemu Windows wpisz „Panel sterowania” w polu wyszukiwania i otwórz klawiszem Enter. Otworzy się okno „Wszystkie elementy Panelu sterowania”.

Otwórz „Centrum ułatwień dostępu”.

Następnie otwórz „Używaj komputera bez ekranu” naciskając Enter.

W sekcji **Słuchaj tekstu czytanego na głos** zaznacz **Włącz Narratora** i **Włącz opis audio**, a potem kliknij **Zastosuj**.

lub:

2) Naciśnij klawisz Windows i wpisz „Panel sterowania” w polu wyszukiwania, a potem otwórz klawiszem Enter. Otworzy się okno „Wszystkie elementy Panelu sterowania”.

Naciśnij literę C, aby przejść do „Centrum ułatwień dostępu”, i otwórz klawiszem Enter.

Następnie otwórz „Używaj komputera bez ekranu” naciskając Enter.

Na dole znajdziesz pole wyboru „Włącz Java Access Bridge” – zaznacz je.

Zrobione, teraz po prostu zamknij okno! Czytnik ekranu powinien teraz działać.



Jesteś zainteresowany tym, jak rozpocząć konfigurację AAPS? Zajrzyj do rozdziału [Przygotowanie do rozpoczęcia pracy z AAPS](../Getting-Started/PreparingForAaps.md).
