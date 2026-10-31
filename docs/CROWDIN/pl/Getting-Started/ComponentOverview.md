# Przegląd komponentów

**AAPS** to nie tylko (samodzielnie zbudowana) aplikacja. To jeden z kilku modułów Twojego systemu zamkniętej pętli. Zanim wybierzesz komponenty, warto przejrzeć ich dokumentację.

![Przegląd komponentów](../images/modules.png)

```{admonition} IMPORTANT SAFETY NOTICE
:class: important

Podstawą funkcji bezpieczeństwa **AAPS** opisanych w tej dokumentacji są funkcje bezpieczeństwa sprzętu, z którego budujesz swój system. Aby zamknąć pętlę automatycznego dawkowania insuliny, bardzo ważne jest, aby używać tylko takiej pompy insulinowej i takiego CGM, które są przetestowane, w pełni sprawne i dopuszczone przez urzędy w Twoim kraju. Modyfikacje sprzętu lub oprogramowania tych komponentów mogą powodować nieprzewidziane dawkowanie insuliny, powodując znaczne ryzyko dla użytkownika. Jeśli znajdziesz lub ktoś Ci zaoferuje uszkodzoną, zmodyfikowaną lub samodzielnie wykonaną pompę insulinową albo odbiornik CGM, **nie używaj** ich do budowy systemu **AAPS**.

Dodatkowo równie ważne jest używanie tylko oryginalnych materiałów zaopatrzenia, takich jak sertery, kaniule i pojemniki na insulinę, zatwierdzone przez producenta do stosowania z twoją pompą lub systemem CGM. Używanie nieprzetestowanych lub zmodyfikowanych materiałów zaopatrzenia może spowodować niedokładność CGM lub błędy w dawkowaniu insuliny. Źle dawkowana insulina jest bardzo niebezpieczna. Nie ryzykuj życia, przerabiając swoje materiały.

I na koniec, co bardzo ważne: nie wolno Ci przyjmować inhibitorów SGLT-2 (flozyn), ponieważ obniżają one poziom glukozy w sposób, którego nie da się przewidzieć. Połączenie z systemem, który obniża dawki bazowe, aby podnieść glikemię, jest szczególnie niebezpieczne. Przez flozyny ten wzrost glikemii może nie nastąpić i może dojść do groźnego niedoboru insuliny. [Więcej informacji tutaj](#PreparingForAaps-no-sglt-2-inhibitors).
```

## Niezbędne moduły

### Dobry, indywidualny algorytm dawkowania dla Twojej terapii cukrzycy

Nie da się go zbudować ani kupić, ale to prawdopodobnie najbardziej niedoceniany „moduł” — a przy tym niezbędny. Gdy pozwalasz algorytmowi pomagać w leczeniu cukrzycy, musi on znać właściwe ustawienia, aby nie popełniać poważnych błędów. Nawet jeśli wciąż brakuje Ci innych modułów, już teraz możesz sprawdzić i dostosować swój **Profil** razem ze swoim zespołem diabetologicznym.

**Profil** zawiera:

- BR (dawki bazowe): zapewniają insulinę w tle;
- ISF (współczynnik wrażliwości na insulinę): o ile 1 jednostka insuliny obniży Twoją glikemię;
- CR (współczynnik insulina/węglowodany): ile gramów węglowodanów pokrywa 1 jednostka insuliny.

Większość użytkowników pętli używa dobowych schematów BR, ISF i CR, które dostosowują się do hormonalnej wrażliwości na insulinę w ciągu dnia.

Oprócz **Profilu** musisz też skonfigurować swoją **insulinę** w **Zarządzaj → Ustawienia insuliny**, w tym czas działania insuliny (DIA) — zobacz [Ustawienia insuliny](#Config-Builder-insulin-dia).

Więcej informacji o **Profilu** znajdziesz [na osobnej stronie](../SettingUpAaps/YourAapsProfile.md).

### Telefon

Zobacz osobną stronę [Telefony](../Getting-Started/Phones.md).

### Pompa insulinowa

Zobacz osobną stronę [Kompatybilne pompy](../Getting-Started/CompatiblePumps.md).

**Zalety i wady niektórych modeli pomp**

Combo, Insight i starsze pompy Medtronic to solidne pompy, które działają w pętli. Zaletą Combo jest o wiele więcej typów zestawów infuzyjnych do wyboru, ponieważ ma standardowe złącze Luer-Lock. Bateria jest standardowa. Kupisz ją na każdej stacji benzynowej i w całodobowym sklepie, a jeśli naprawdę jej potrzebujesz, możesz ją ukraść/pożyczyć z pilota w pokoju hotelowym ;-).

Zaletami DanaR/RS i Dana-i w porównaniu z Combo są jednak:

- Początkowe parowanie jest prostsze z Dana-i/RS. Ale zwykle robisz to tylko raz, więc ma to wpływ tylko wtedy, gdy chcesz przetestować nową funkcję za pomocą różnych pomp.
- Na razie Combo działa przez odczytywanie ekranu (screen parsing). Generalnie działa to świetnie, ale jest powolne. Dla pętli nie ma to dużego znaczenia, ponieważ wszystko działa w tle. Nadal jednak musisz być połączony z pompą dużo dłużej, więc jest więcej czasu, w którym połączenie Bluetooth może zostać przerwane. To nie jest wygodne, jeśli odchodzisz od telefonu podczas podawania bolusa i gotowania.
- Combo wibruje na koniec TBR, a DanaR wibruje (lub piszczy) przy SMB. W nocy prawdopodobnie będziesz używać TBR częściej niż SMB.  Dana-i/RS można skonfigurować tak, aby nie wibrowała i nie wydawała dźwięku.
- Dana-i/RS odczytuje historię razem z węglowodanami w kilka sekund. Dzięki temu możesz łatwo zmienić telefon bez połączenia z internetem i kontynuować pętlę, gdy tylko pojawią się pierwsze wartości z CGM.
- Wszystkie pompy, z którymi **AAPS** może się komunikować, są wodoszczelne w chwili dostawy. Tylko pompy Dana są „wodoszczelne w ramach gwarancji” dzięki szczelnej komorze baterii i systemowi napełniania zbiornika.

### Źródło BG

Zobacz osobną stronę [Kompatybilne systemy CGM](../Getting-Started/CompatiblesCgms.md).

### Plik .apk **AAPS**

Główny komponent systemu. Aby zainstalować aplikację, musisz najpierw samodzielnie zbudować plik apk. Instrukcje są dostępne [tutaj](../SettingUpAaps/BuildingAaps.md).

### Serwer raportów

Serwer raportów pokazuje Twoje dane o glukozie i leczeniu oraz tworzy raporty do szczegółowej analizy. Obecnie z AAPS można używać dwóch serwerów raportów: [Nightscout](#SettingUpTheReportingServer-nightscout) i [Tidepool](#SettingUpTheReportingServer-tidepool). Oba pozwalają zobaczyć dane o Twojej cukrzycy w czasie oraz pokazują statystyki **czasu w zakresie** (TIR) i inne miary.

Serwer raportów jest niezależny od innych modułów. Jeśli nie chcesz używać serwera raportów, wiedz, że na dłuższą metę nie jest on wymagany do działania **AAPS**. Mimo to musisz go skonfigurować, ponieważ jest wymagany do ukończenia [**Zadania 1**](#objectives-objective1).

Więcej informacji o tym, jak skonfigurować serwer raportów, znajdziesz [tutaj](../SettingUpAaps/SettingUpTheReportingServer.md).

## Opcjonalne moduły

### Smartwatch

Możesz wybrać dowolny smartwatch z systemem **Wear OS 3** lub nowszym. Szczegóły znajdziesz na stronie [Smartwatche i AAPS](../Getting-Started/Watches.md).

Użytkownicy tworzą listę [sprawdzonych telefonów i zegarków](#Phones-list-of-tested-phones). Istnieją różne tarcze zegarka przeznaczone dla **AAPS**, możesz je znaleźć [tutaj](../WearOS/WearOsSmartwatch.md).

### xDrip

Nawet jeśli nie potrzebujesz aplikacji xDrip jako **Źródło BG**, nadal możesz jej używać, na przykład do alarmów lub do innego wyświetlania glikemii. Możesz ustawić dowolnie dużo alarmów, określić, w jakich godzinach alarm ma być aktywny, wybrać, czy może pominąć tryb cichy itd. Część informacji o xDrip znajdziesz [tutaj](../CompatibleCgms/xDrip.md). Pamiętaj, że dokumentacja tej aplikacji nie zawsze jest aktualna, ponieważ aplikacja szybko się zmienia.

## Co robić, czekając na moduły

Czasem trzeba trochę poczekać, zanim zbierzesz wszystkie moduły potrzebne do zamknięcia pętli. Ale nie martw się, w tym czasie możesz zrobić wiele rzeczy. **Koniecznie** sprawdź i (w razie potrzeby) dostosuj dawki bazowe (BR), współczynnik insulina/węglowodany (IC), współczynnik wrażliwości na insulinę (ISF) itd. I być może otwarta pętla będzie dobrym sposobem na przetestowanie systemu i zapoznanie się z **AAPS**. Korzystając z tego trybu, **AAPS** podaje rekomendacje dotyczące leczenia, które możesz wykonać ręcznie.

Możesz dalej czytać tę dokumentację, kontaktować się z innymi użytkownikami pętli online lub offline, [czytać](../UsefulLinks/BackgroundReading.md) materiały lub to, co piszą inni użytkownicy pętli (zachowaj jednak ostrożność: nie wszystko jest poprawne lub dobre do powtórzenia u Ciebie).

**Gotowe?** Jeśli masz już wszystkie komponenty **AAPS** (gratulacje!) albo przynajmniej tyle, by zacząć w trybie otwartej pętli, przed każdym nowym zadaniem najpierw przeczytaj [opis zadań](../SettingUpAaps/CompletingTheObjectives.md) i skonfiguruj swój sprzęt.
