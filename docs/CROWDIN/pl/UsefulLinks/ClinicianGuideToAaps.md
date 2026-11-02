# Dla lekarzy – ogólne wprowadzenie i przewodnik po AAPS

```{note}
Ta strona to ogólne wprowadzenie dla lekarzy. Ostatni przegląd treści: czerwiec 2026. AAPS stale się rozwija, dlatego najdokładniejsze i aktualne informacje zawsze znajdziesz w [głównej dokumentacji AAPS](../index.md).
```

Ta strona jest przeznaczona dla lekarzy, którzy interesują się technologią sztucznej trzustki o otwartym kodzie źródłowym (open source), taką jak AAPS, oraz dla pacjentów, którzy chcą przekazać te informacje swoim lekarzom.

Ten przewodnik zawiera ogólne informacje o zamkniętej pętli DIY i o tym, jak działa AAPS. Więcej szczegółów na wszystkie te tematy znajdziesz w [pełnej dokumentacji AAPS online](../index.md). Jeśli masz pytania, poproś pacjenta o więcej szczegółów albo śmiało zadaj pytanie naszej społeczności. (Jeśli nie korzystasz z mediów społecznościowych (np. [Twitter](https://twitter.com/kozakmilos) lub Facebook), napisz e-mail na adres developers@aaps.app). [Tutaj można również znaleźć niektóre z najnowszych badań i danych dotyczących wyników](https://openaps.org/outcomes/).

## Kroki potrzebne do zbudowania zamkniętej pętli DIY („zrób to sam”):

Aby rozpocząć korzystanie z AAPS, należy podjąć poniższe kroki:

* Znaleźć [kompatybilną pompę](../Getting-Started/CompatiblePumps.md), [kompatybilne urządzenie z Androidem](../Getting-Started/Phones.md) i [kompatybilne źródło danych CGM](../Getting-Started/CompatiblesCgms.md).
* [Pobrać kod źródłowy AAPS i zbudować oprogramowanie](../SettingUpAaps/BuildingAaps.md).
* [Skonfigurować oprogramowanie, aby komunikowało się z urządzeniami do leczenia cukrzycy, oraz określić ustawienia i preferencje bezpieczeństwa](../SettingUpAaps/SetupWizard.md).

## Jak działa zamknięta pętla DIY

Bez systemu zamkniętej pętli, osoba cierpiąca na cukrzycę samodzielnie gromadzi dane z pompy i CGM (systemu ciągłego pomiaru glukozy), decyduje, co ma robić i podejmuje działania.

Przy automatycznym podawaniu insuliny system robi to samo: zbiera dane z pompy, CGM i z innych miejsc, w których informacje są zapisywane (np. Nightscout), wykorzystuje te informacje do obliczeń i decyduje, ile więcej lub mniej insuliny jest potrzebne (powyżej lub poniżej zaprogramowanej dawki bazowej), a następnie używa tymczasowych dawek bazowych do niezbędnych korekt, aby utrzymać glikemię w zakresie docelowym lub ostatecznie do niego ją sprowadzić.

If the device running AAPS breaks or goes out of range of the pump, once the latest temporary basal rate ends, the pump falls back to being a standard pump with the preprogrammed basal rates running.

## Jak gromadzone są dane:

W AAPS urządzenie z Androidem uruchamia specjalną aplikację, która wykonuje obliczenia. Urządzenie komunikuje się przez Bluetooth z obsługiwaną pompą. AAPS może komunikować się z innymi urządzeniami i z chmurą przez Wi-Fi lub dane komórkowe. Dzięki temu zbiera dodatkowe informacje i informuje pacjenta, opiekunów i bliskich o tym, co robi i dlaczego.

Urządzenie z Androidem musi:

* komunikować się z pompą oraz pobierać historię - ile insuliny zostało dostarczone
* komunikować się z CGM (systemem ciągłego pomiaru glukozy) (bezpośrednio lub za pośrednictwem chmury) - aby zobaczyć jaki jest aktualnie/jak się kształtowały uprzednio stężenia glukozy we krwi

Gdy urządzenie zbierze te dane, uruchamia się algorytm i podejmuje decyzje na podstawie ustawień (ISF – współczynnik wrażliwości na insulinę, IC – współczynnik insulina/węglowodany, DIA – czas działania insuliny, cel glikemii itd.). W razie potrzeby wydaje polecenia do pompy, aby zmienić szybkość podawania insuliny.

System zbiera też z pompy lub z Nightscout wszystkie informacje o bolusach, spożytych węglowodanach i celach tymczasowych, aby wykorzystać je do obliczania szybkości podawania insuliny.

## Skąd system wie, co należy zrobić?

Oprogramowanie open source zaprojektowano tak, aby urządzenie mogło łatwo wykonywać pracę, którą ludzie wcześniej wykonywali sami (w trybie ręcznym), czyli obliczać, jak należy zmienić podawanie insuliny. It first collects data from all the supporting devices and from the cloud, prepares the data and runs the calculations, makes predictions of what BG levels are expected to do during the next hours in different scenarios, and calculates the needed adjustments to keep or bring BG back into target range. Następnie przesyła wszelkie niezbędne korekty do pompy. Następnie ponownie odczytuje dane i powtarza cały proces w kółko.

Ponieważ najważniejszym parametrem wejściowym jest poziom glukozy we krwi pochodzący z CGM (systemu ciągłego monitorowania glukozy), ważne jest posiadanie wysokiej jakości danych CGM.

AAPS jest zaprojektowany tak, aby w przejrzysty sposób zapisywać wszystkie zebrane dane wejściowe, wynikające z nich zalecenie i każde podjęte działanie. Z tych względów, w dowolnym momencie przeglądając logi łatwo odpowiedzieć na pytanie "dlaczego akurat system robi X?".

## Przykłady podejmowania decyzji przez algorytm AAPS:

AAPS używa tego samego podstawowego algorytmu i zestawu funkcji co OpenAPS. Algorytm dokonuje wielu prognoz (na podstawie ustawień i sytuacji) reprezentujących różne scenariusze tego, co może się wydarzyć w przyszłości. W Nightscout prognozy te są wyświetlane jako „fioletowe linie”. AAPS używa różnych kolorów, aby odróżnić te [linie prognoz](#aaps-screens-prediction-lines). W logach system natomiast będzie opisywał, które z tych prognoz (i w jakich ramach czasowych) wykorzystuje się do podejmowania niezbędnych działań.

### Oto przykłady fioletowych linii prognoz i ich ewentualne różnice:

![Przykłady fioletowych linii prognoz](../images/Prediction_lines.jpg)

(clinicianguide-dosing-scenarios)=

### Oto przykłady różnych przedziałów czasowych, które mają wpływ na niezbędne zmiany w podawaniu insuliny:

### Scenariusz 1 – zerowa baza tymczasowa dla bezpieczeństwa

Na tym przykładzie poziom cukru rośnie w krótkim okresie czasu, jednak przewiduje się, że w dłuższym okresie czasu poziom cukru będzie niski. W rzeczywistości prognozuje się, że cukier spadnie poniżej poziomu docelowego *i* progu bezpieczeństwa. Dla bezpieczeństwa, aby zapobiec hipoglikemii, AAPS ustawi zerową bazę tymczasową (bazę tymczasową 0%), aż końcowa prognozowana glikemia (eventualBG) w każdym przedziale czasowym będzie powyżej progu.

![Scenariusz dawkowania 1](../images/Dosing_scenario_1.jpg)

### Scenariusz 2 – zerowa baza tymczasowa dla bezpieczeństwa

W tym przykładzie prognoza pokazuje, że w krótkim czasie glikemia spadnie nisko, ale ostatecznie będzie powyżej celu. Jednakże, ponieważ w najbliższym czasie poziom cukru jest poniżej progu bezpieczeństwa, AAPS ustawi zerową bazę tymczasową, aż do momentu, gdy nie będzie już żadnego punktu linii prognozowania, który jest poniżej progu.

![Scenariusz dawkowania 2](../images/Dosing_scenario_2.jpg)

### Scenariusz 3 – potrzeba więcej insuliny

Na tym przykładzie krótkoterminowa prognoza pokazuje spadek cukru poniżej celu. Nie przewiduje się jednak, aby ten spadek był poniżej progu bezpieczeństwa. Prognozowany cukier (eventualBG) jest powyżej wartości docelowej. Therefore, AAPS will refrain from adding any insulin that would contribute to a near-term low (by adding insulin that would make the prediction go below threshold). Następnie, gdy będzie to bezpieczne, system rozważy podanie insuliny, aby obniżyć najniższy poziom końcowej prognozowanej glikemii do wartości docelowej. *(Depending on settings and the amount and timing of insulin required, this insulin may be delivered via temp basals or SMBs (super micro boluses)).*

![Scenariusz dawkowania 3](../images/Dosing_scenario_3.jpg)

### Scenariusz 4 – niska baza tymczasowa dla bezpieczeństwa

W tym przykładzie AAPS widzi, że glikemia szybko rośnie znacznie powyżej celu. Jednakże, ze względu na czas działania insuliny, w organizmie jest już wystarczająco dużo insuliny, aby ostatecznie doprowadzić BG do prawidłowego zakresu. W rzeczywistości przewiduje się, że stężenie glukozy w organizmie będzie ostatecznie niższe od wartości docelowej. Dlatego AAPS nie dostarczy dodatkowej insuliny, więc nie przyczyni się do niskiego poziomu cukru w dłuższym okresie. Chociaż glikemia jest wysoka lub rośnie, w tej sytuacji prawdopodobnie zostanie ustawiona niska baza tymczasowa.

![Scenariusz dawkowania 4](../images/Dosing_scenario_4.jpg)

## Optymalizacja ustawień i wprowadzanie zmian

Jako lekarz bez doświadczenia z AAPS lub zamkniętymi pętlami DIY możesz mieć trudność z pomocą pacjentowi w optymalizacji jego ustawień lub we wprowadzaniu zmian, które poprawią wyniki leczenia. Nasza społeczność oferuje wiele narzędzi i [przewodników](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/optimize-your-settings.html), które pomagają pacjentom w dokonywaniu drobnych, sprawdzonych korekt w celu poprawy ustawień.

Przy dostrajaniu systemu pacjenci powinni przyjąć jedną podstawową zasadę - należy dokonywać wyłącznie jednej zmiany na raz, a następnie obserwować wpływ tej zmiany przez około 2-3 dni. Ewentualne, kolejne pojedyncze zmiany systemu należy wykonywać stopniowo, dopiero po weryfikacji wpływu poprzedzającej zmiany (z tym zastrzeżeniem, iż jeśli okaże się, że zmiana źle wpływa na funkcjonowanie systemu, pacjenci powinni natychmiast powrócić do poprzedniego ustawienia). Natura ludzka skłania do obracania wszystkich pokręteł i zmieniania wszystkiego na raz, ale jeśli ktoś tak postępuje, z dużym prawdopodobieństwem spowoduje powstanie kolejnych wadliwych ustawień, a w konsekwencji nawet utrudni sobie powrót do ostatniego, znanego zadowalającego stanu.

Jednym z najbardziej przydatnych narzędzi do dostrajania systemu jest zautomatyzowane narzędzie służące do obliczania bazy, ISF (współczynnika wrażliwości na insulinę) i współczynnika węglowodanowego. Nazywa się ono „[Autotune](#autotune-how-autotune-calculates-adjustments)”. It is designed to allow the data to guide you or your patient in making incremental changes to settings. Najlepszą praktyką jest najpierw uruchamianie (lub przeglądanie raportów) Autotune, a dopiero następnie ewentualna modyfikacja ustawień. Autotune jest wbudowany w AAPS jako wtyczka (**Konfiguracja** → **Ogólne** → **Autotune**); zobacz [Autotune](../AdvancedOptions/Autotune.md). Można go uruchomić na żądanie lub automatycznie. Te parametry są podstawą zarówno przy podawaniu insuliny zwykłą pompą, jak i w zamkniętej pętli. Dlatego omówienie wyników Autotune i dostosowanie tych parametrów to naturalny punkt współpracy z lekarzem.

Dodatkowo należy wskazać, iż zachowanie człowieka (uczonego i przyzwyczajonego do normalnego prowadzenia cukrzycy) często wpływa na wyniki, nawet przy zamkniętej pętli. Na przykład, jeśli prognoza pokazuje spadek glikemii i AAPS zmniejsza podawanie insuliny już w trakcie spadku, do podniesienia glikemii z 70 mg/dl (3,9 mmol/l) może wystarczyć niewielka ilość węglowodanów (np. 3–4 g). Jednak w wielu przypadkach pacjent może zdecydować się na leczenie dużo większą ilością węglowodanów (np. trzymając się zasady 15), co spowoduje szybszy wzrost glikemii – zarówno z powodu dodatkowej glukozy, jak i dlatego, że w okresie przed niską glikemią podawanie insuliny było już zmniejszone.

## OpenAPS

**This guide was adapted from [The clinician's guide to OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/clinician-guide-to-OpenAPS.html).** OpenAPS is a system developed to be run on a small portable computer (generally referred to as the "rig"). AAPS wykorzystuje wiele technik zaimplementowanych w OpenAPS i w dużej mierze wykorzystuje logikę i algorytmy OpenAPS. Z tych względów niniejszy przewodnik jest bardzo podobny do oryginalnego opracowania. Wiele informacji o OpenAPS można łatwo odnieść do AAPS, główną różnicą obydwu systemów jest platforma sprzętowa, na której funkcjonują.

## Podsumowanie

Ta strona to ogólny przegląd tego, jak działa AAPS. Aby uzyskać więcej informacji, zapytaj pacjenta, skontaktuj się ze społecznością lub przeczytaj pełną dokumentację AAPS dostępną online.

Dodatkowo warto przeczytać:

* [Pełna dokumentacja AAPS](../index.md)
* [OpenAPS Reference Design](https://OpenAPS.org/reference-design/) – opis tego, jak OpenAPS zaprojektowano z myślą o bezpieczeństwie: https://openaps.org/reference-design/
* [Pełna dokumentacja OpenAPS](https://openaps.readthedocs.io/en/latest/index.html) 
  * Zobacz w tej dokumentacji, [jak AAPS zamienia prognozy w decyzję o dawkowaniu](#aaps-screens-how-predictions-become-a-dosing-decision), lub przeczytaj [dokumentację determine-basal w OpenAPS](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html#understanding-the-determine-basal-logic), gdzie znajdziesz pełny techniczny opis algorytmu