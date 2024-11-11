# For Clinicians – A General Introduction and Guide to AAPS

This page is intended for clinicians who have expressed interest in open source artificial pancreas technology such as AAPS, or for patients who want to share such information with their clinicians.

This guide has some high-level information about DIY closed looping and specifically how AAPS works. For more details on all of these topics, please view the [comprehensive AAPS documentation online](../index.md). Jeśli masz pytania, o więcej szczegółów proszę zapytać pacjenta ewentualnie ni krępuj się kierować pytań do naszej społeczności. (Jeśli nie korzystasz z mediów społecznościowych (np. [Twitter](https://twitter.com/kozakmilos) lub Facebook), prosimy o kontakt mailowy na adres developers@AndroidAPS.org). [Tutaj można również znaleźć niektóre z najnowszych badań i danych dotyczących wyników](https://openaps.org/outcomes/).

## The steps for building a DIY Closed Loop:

To start using AAPS, the following steps should be taken:

* Find a [compatible pump](../Getting-Started/CompatiblePumps.md), a [compatible Android device](../Getting-Started/Phones.md), and a [compatible CGM source](../Getting-Started/CompatiblesCgms.md).
* [Download the AAPS source code and build the software](../SettingUpAaps/BuildingAaps.md).
* [Configure the software to talk to their diabetes devices and specify settings and safety preferences](../SettingUpAaps/SetupWizard.md).

## How A DIY Closed Loop Works

Bez systemu zamkniętej pętli, osoba cierpiąca na cukrzycę samodzielnie gromadzi dane z pompy i CGM (systemu ciągłego pomiaru glukozy), decyduje, co ma robić i podejmuje działania.

Przy automatycznym podawaniu insuliny, system robi to samo: zbiera dane z pompy, CGM oraz z innych miejsc w których informacje są rejestrowane (takie jak Nightscout), wykorzystuje te informacje do wykonania obliczeń i decyduje o tym, ile więcej lub mniej insuliny jest potrzebne (powyżej lub poniżej podstawowej bazy), a także wykorzystuje tymczasowe bazę w celu dokonania niezbędnych korekt, aby utrzymać lub sprowadzić stężenia glukozy do docelowego zakresu.

If the device running AAPS breaks or goes out of range of the pump, once the latest temporary basal rate ends, the pump falls back to being a standard pump with the preprogrammed basals rates runnning.

## How data is gathered:

With AAPS, an Android device runs a special app to do the math, the device communicates using Bluetooth with a supported pump. AAPS can communicate with other devices and to the cloud via wifi or mobile data to gather additional information, and to report to the patient, caregivers, and loved ones about what it’s doing and why.

Urządzenie z Androidem musi:

* komunikować się z pompą oraz pobierać historię - ile insuliny zostało dostarczone
* komunikować się z CGM (systemem ciągłego pomiaru glukozy) (bezpośrednio lub za pośrednictwem chmury) - aby zobaczyć jaki jest aktualnie/jak się kształtowały uprzednio stężenia glukozy we krwi

Po zebraniu tych danych przez urządzenie, algorytm uruchamia się i podejmuje decyzje w oparciu o ustawienia (ISF [współczynnik wrażliwości na insulinę], carb ratio [współczynnik węglowodanowy], DIA [współczynnik - czas aktywności insuliny], docelowy poziom cukru, itd.). W razie potrzeby wydaje polecenia do pompy, aby zmienić szybkość podawania insuliny. W razie potrzeby wydaje polecenia do pompy, aby zmienić szybkość podawania insuliny.

Aby obliczać dawki insuliny, system zbiera również wszelkie informacje o bolusach, wchłanianiu węglowodanów oraz tymczasowych celach poziomów cukrów z pompy lub z Nightscout-a.

## How does it know what to do?

Oprogramowanie zostało zaprojektowane w taki sposób aby sprawić, że urządzenie będzie przyjazne w obsłudze dla osób przyzwyczajonych (w trybie ręcznym) do obliczania niezbędnych do podania jednostek insuliny. W pierwszej kolejności zbiera dane ze wszystkich urządzeń wspomagających oraz z chmury, przygotowuje dane, wykonuje obliczenia, prognozuje poziomy cukrów w ciągu najbliższych godzin według różnych scenariuszy, a następnie oblicza niezbędne korekty tak, aby utrzymać lub doprowadzić poziom glukozy do docelowego zakresu. Następnie przesyła wszelkie niezbędne korekty do pompy. Następnie ponowne odczytuje dane, ponawiając procedurę... i tak w kółko.

Ponieważ najważniejszym parametrem wejściowym jest poziom glukozy we krwi pochodzący z CGM (systemu ciągłego monitorowania glukozy), ważne jest posiadanie wysokiej jakości danych CGM.

AAPS is designed to transparently track all input data it gathers, the resulting recommendation, and any action taken. Z tych względów, w dowolnym momencie przeglądając logi łatwo odpowiedzieć na pytanie "dlaczego akurat system robi X?".

## Examples of AAPS algorithm decision making:

AAPS uses the same core algorithm and feature set as OpenAPS. Algorytm dokonuje wielu prognoz (na podstawie ustawień i sytuacji) reprezentujących różne scenariusze tego, co może się wydarzyć w przyszłości. W Nightscout prognozy te są wyświetlane jako "purpurowe linie". AAPS uses different colors to separate these [prediction lines](#aaps-screens-prediction-lines). W logach system natomiast będzie opisywał, które z tych prognoz (i w jakich ramach czasowych) wykorzystuje się do podejmowania niezbędnych działań.

### Here are examples of the purple prediction lines, and how they might differ:

![Przykładowe, fioletowe linie prognoz](../images/Prediction_lines.jpg)

### Here are examples of different time frames that influence the needed adjustments to insulin delivery:

### Scenario 1 - Zero Temp for safety

Na tym przykładzie poziom cukru rośnie w krótkim okresie czasu, jednak przewiduje się, że w dłuższym okresie czasu poziom cukru będzie niski. W rzeczywistości prognozuje się, że cukier spadnie poniżej poziomu docelowego *i* progu bezpieczeństwa. For safety to prevent the low, AAPS will issue a zero temp (temporary basal rate at 0%), until the eventualBG (in any time frame) is above threshold.

![Scenariusz dawkowania 1](../images/Dosing_scenario_1.jpg)

### Scenario 2 - Zero temp for safety

Na tym przykładzie prognozuje się, że w najbliższym czasie stężenie cukru spadnie poniżej zera, ale przewiduje się, że ostatecznie przekroczy wartość docelową. However, because the near-term low is actually below the safety threshold, AAPS will issue a zero temp, until there is no longer any point of the prediction line that is below threshold.

![Scenariusz dawkowania 2](../images/Dosing_scenario_2.jpg)

### Scenario 3 - More insulin needed

Na tym przykładzie krótkoterminowa prognoza pokazuje spadek cukru poniżej celu. Nie przewiduje się jednak, aby ten spadek był poniżej progu bezpieczeństwa. Prognozowany cukier (eventualBG) jest powyżej wartości docelowej. Therefore, AAPS will restrain from adding any insulin that would contribute to a near-term low (by adding insulin that would make the prediction go below threshold). Następnie, gdy to tylko będzie bezpieczne, system oszacuje dodanie insuliny w celu obniżenia do poziomu docelowego, według najniższego poziomu z możliwych prognoz cukrów. *(W zależności od ustawień oraz wymaganej ilości i czasu podawania insuliny, insulina ta może być podawana przez bazę tymczasową lub SMB (super-mikro bolusy) )*

![Scenariusz dawkowania 3](../images/Dosing_scenario_3.jpg)

### Scenario 4 - Low temping for safety

In this example, AAPS sees that BG is spiking well above target. Jednakże, ze względu na czas działania insuliny, w organizmie jest już wystarczająco dużo insuliny, aby ostatecznie doprowadzić BG do prawidłowego zakresu. W rzeczywistości przewiduje się, że stężenie glukozy w organizmie będzie ostatecznie niższe od wartości docelowej. Therefore, AAPS will not provide extra insulin so it will not contribute to a longer-timeframe low. Pomimo, iż poziom glukozy jest wysoki/wzrastający, to jednak w tym przypadku zasadne jest obniżenie bazy.

![Scenariusz dawkowania 4](../images/Dosing_scenario_4.jpg)

## Optimizing settings and making changes

As a clinician who may not have experience with AAPS or DIY closed loops, you may find it challenging to help your patient optimize their settings or make changes to improve their outcomes. We have multiple tools and [guides](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/optimize-your-settings.html) in the community that help patients make small, tested adjustments to improve their settings.

Przy dostrajaniu systemu pacjenci powinni przyjąć jedną podstawową zasadę - należy dokonywać wyłącznie jednej zmiany na raz, a następnie obserwować wpływ tej zmiany przez około 2-3 dni. Ewentualne, kolejne pojedyncze zmiany systemu należy wykonywać stopniowo, dopiero po weryfikacji wpływu poprzedzającej zmiany (z tym zastrzeżeniem, iż jeśli okaże się, że zmiana źle wpływa na funkcjonowanie systemu, pacjenci powinni natychmiast powrócić do poprzedniego ustawienia). Natura ludzka skłania do obracania wszystkich pokręteł i zmieniania wszystkiego na raz, ale jeśli ktoś tak postępuje, z dużym prawdopodobieństwem spowoduje powstanie kolejnych wadliwych ustawień, a w konsekwencji nawet utrudni sobie powrót do ostatniego, znanego zadowalającego stanu.

Jednym z najbardziej przydatnych narzędzi do dostrajania systemu jest zautomatyzowane narzędzie służące do obliczania bazy, ISF (współczynnika wrażliwości na insulinę) i współczynnika węglowodanowego. This is called “[Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html)”. Zostało ono zaprojektowane tak, aby mogło być uruchamiane niezależnie/ręcznie, dostarczając dane, które pomagają pacjentowi w stopniowym dokonywaniu zmian ustawień. Najlepszą praktyką jest najpierw uruchamianie (lub przeglądanie raportów) Autotune, a dopiero następnie ewentualna modyfikacja ustawień. With AAPS, Autotune will be run as a "one-off", although there are ongoing efforts to incorporate it directly into AAPS as well. As these parameters are a prerequisite both for standard pump insulin delivery and for closed loop insulin delivery, discussion of the autotune results and adustment of these parameters would be the natural link to the clinician.

Dodatkowo należy wskazać, iż zachowanie człowieka (uczonego i przyzwyczajonego do normalnego prowadzenia cukrzycy) często wpływa na wyniki, nawet przy zamkniętej pętli. For example, if BG is predicted to go low and AAPS reduces insulin on the way down, only a small amount of carbs (e.g. 3-4g carbs) may be needed to bring BG up from 70 mg/dl (3.9 mmol). Jednak w wielu przypadkach ktoś może zdecydować się na przyjęcie dużo większej ilości węglowodanów (np. trzymając się zasady 15), co spowoduje szybszy skok zarówno od dodatkowej glukozy, jak i dlatego, że insulina została zmniejszona przez AndroidAPS w okresie spadku glukozy.

## OpenAPS

**Niniejszy przewodnik został oparty na [Przewodniku klinicznym do OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/clinician-guide-to-OpenAPS.html).** OpenAPS jest systemem opracowanym do pracy na małym przenośnym komputerze (ogólnie nazywanym "platformą" ["rig"]). AAPS uses many of the techniques implemented in OpenAPS, and shares much of the logic and algorithms, which is why this guide is very similar to the original guide. Much of the information about OpenAPS can be easily adapted to AAPS, with the main difference being the hardware platform where each piece of software is run.

## Summary

This is meant to be a high-level overview of how AAPS works. For more details, ask your patient, reach out to the community, or read the full AAPS documentation available online.

Dodatkowo warto przeczytać:

* The [full AAPS documentation](../index.md)
* [Projekt Referencyjny OpenAPS](https://OpenAPS.org/reference-design/), wyjaśniający mechanizmy bezpieczeństwa zaprojektowane w OpenAPS: https://openaps.org/reference-design/
* The [full OpenAPS documentation](https://openaps.readthedocs.io/en/latest/index.html) 
  * More [details on OpenAPS calculations](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html#understanding-the-determine-basal-logic)