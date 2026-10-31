(Open-APS-features-DynamicISF)=
# Dynamiczny ISF (DynISF)

Do tej pory, przy **AMA** i **SMB**, **ISF** był określony w **Profilu** i był stały dla każdego ustawionego okresu dnia. Ale w rzeczywistości **ISF** nie jest taki stały i zmienia się zależnie od poziomu **BG**: przy wysokiej BG potrzeba więcej insuliny, aby obniżyć **BG** o 50 mg/dl / 3 mmol/l, niż przy niższej **BG**. [Autosens](#Open-APS-features-autosens) był pierwszym algorytmem, który próbował rozwiązać ten problem, zmieniając **ISF** poza porami posiłków.

**Dynamiczny ISF** (nazywany też **DynISF**) ma ten sam cel, ale jest bardziej zaawansowany, bo może działać przez cały czas. Jest zalecany tylko dla zaawansowanych użytkowników, którzy dobrze znają sterowanie i monitorowanie **AAPS**. Zanim go wypróbujesz, przeczytaj poniżej sekcję [Co wziąć pod uwagę przed włączeniem dynamicznego ISF](#dyn-isf-things-to-consider-when-activating-dynamicisf).

```{admonition} CAUTION - Automations or Profile Percentage change
:class: warning

**Automatyzacji** zawsze używaj ostrożnie. Dotyczy to szczególnie **dynamicznego ISF**.

Gdy używasz **dynamicznego ISF**, wyłącz wszystkie reguły **Automatyzacji**, które tymczasowo zmieniają **Profil**, bo przez nie **dynamiczny ISF** byłby zbyt agresywny w bolusach korekcyjnych, co prowadziłoby do hipoglikemii. Właśnie do tego służy **dynamiczny ISF**, więc nie trzeba przez Automatyzację kazać **AAPS** podawać dodatkowej insuliny przy wysokiej **BG**.

```

Aby używać **dynamicznego ISF**, baza danych **AAPS** musi zawierać co najmniej 7 dni Twoich danych **AAPS**.

## Co robi dynamiczny ISF?

**Dynamiczny ISF** dynamicznie dostosowuje współczynnik wrażliwości na insulinę (**ISF**) na podstawie Twojej:

- dobowej dawki insuliny (**TDD**); oraz
- aktualnych i prognozowanych wartości glikemii.

Gdy używasz **dynamicznego ISF**, wartości **ISF** wpisane w **Profilu** nie są już w ogóle używane, z wyjątkiem sytuacji awaryjnej, gdy w bazie danych **AAPS** nie ma dość danych TDD (*np.* po nowej instalacji aplikacji).

**SMB/AMA** - przykład **Profilu** ze stałym **ISF**, ustawionym przez użytkownika i używanym przez **SMB** i **AMA**.

![Stały ISF](../images/DynamicISF/profile_viewer_isf.png)

**Dynamiczny ISF** - przykład **ISF**, który zmienia się zgodnie z obliczeniami **dynamicznego ISF**.

![Dyn ISF](../images/DynamicISF/DynISF2.png)

Sekcja zakreślona na czerwono pokazuje: `profile ISF` -> `ISF as calculated by DynISF`. <br/> Tapping on this section shows a dialog with additional information, such as the **ISF** used for the calculator and carbs absorption (see [Other usages of ISF](#dynisf-other-usages-of-isf) below).

Wartość **DynISF** można też pokazać na wykresie: dotknij **Dodaj wykres** pod wykresami na ekranie głównym i wybierz **VSENS** (zmienna wrażliwość). Jest pokazywana jako biała linia (na dole powyższego obrazka).

## Jak obliczany jest dynamiczny ISF?

**Dynamiczny ISF** używa modelu Chrisa Wilsona do wyznaczenia **ISF** zamiast stałej wartości **ISF** ustawionej w **Profilu**. Szczegółowe wyjaśnienie znajdziesz tutaj (po angielsku): [Chris Wilson on Insulin Sensitivity (Correction Factor) with Loop and Learn, 2/6/2022](https://www.youtube.com/watch?v=oL49FhOts3c).

Używane równanie **dynamicznego ISF**: `ISF = 1800 / ((TDD * DynISF Adjust Factor) * Ln (( current BG / insulin divisor) + 1 ))`

Zmienne użyte w tym równaniu opisano poniżej.<br/> Uwaga: `Ln` oznacza logarytm naturalny, funkcję matematyczną.

To równanie służy do obliczenia aktualnego **ISF** oraz w [prognozach oref1 dla **IOB**, **ZT** (zerowa baza tymczasowa) i **UAM**](#aaps-screens-prediction-lines). Jest też używane dla **COB** i w kalkulatorze bolusa (zobacz poniżej [Inne zastosowania ISF](#dynisf-other-usages-of-isf)).

### TDD (dobowa dawka insuliny)
TDD to połączenie następujących wartości:
1.  średnia **TDD** z 7 dni;
2.  **TDD** z poprzedniego dnia; oraz
3.  średnia ważona zużycia insuliny z ostatnich ośmiu (8) godzin, przeliczona na 24 godziny.

**TDD** używane w powyższym równaniu to średnia ważona, w której każda z powyższych wartości ma wagę jednej trzeciej.

### Współczynnik korygujący DynamicISF

Ustawia się go w **Ustawieniach**. Służy do tego, aby **dynamiczny ISF** był bardziej lub mniej agresywny. Zobacz poniżej sekcję [Ustawienia](#dyn-isf-preferences).

### Dzielnik insuliny
Dzielnik insuliny zależy od szczytu działania używanej insuliny i jest odwrotnie proporcjonalny do czasu szczytu. Dla Lyumjev ta wartość wynosi 75, dla Fiasp 65, a dla zwykłej szybkodziałającej insuliny 55.

### ISF na podstawie prognozowanej BG przy decyzjach o dawkowaniu

Dynamiczna wrażliwość jest obliczana z **aktualnej BG** i pokazywana w **AAPS** jako Twój aktualny ISF. Ale przy obliczaniu dawek algorytm oref1 oblicza i używa zamiast tego **przyszłego ISF** (Future ISF).

Ma to zapobiec podaniu za dużej ilości insuliny, gdy **BG** jest niska lub ma spaść nisko.

**Przyszły ISF** używa tego samego wzoru co powyżej, ale zamiast **aktualnej BG** może użyć **minimalnej prognozowanej BG**. **Minimalna prognozowana BG**, [obliczana w oref1](#aaps-screens-how-predictions-become-a-dosing-decision), to najniższa wartość, do jakiej według prognoz może spaść Twoja BG w całym okresie prognozy.

* Jeśli aktualna **BG** jest powyżej celu <br/> **oraz** jeśli poziom **BG** jest stabilny, w granicach +/- 3 mg/dl:<br/>BG we wzorze to: `average(minimum predicted BG, current BG)`.
* Jeśli końcowa **BG** (eventual BG) jest powyżej celu i glukoza rośnie,<br/>  
  **lub** końcowa **BG** jest wyższa niż aktualna **BG**:<br/>BG we wzorze to: `current BG`.
* W pozostałych przypadkach:<br/>BG we wzorze to: `minimum predicted BG`.

Prostsze wyjaśnienie pokazuje poniższy zrzut ekranu, który ilustruje opisane sytuacje. Pomarańczowe kropki używają **prognozowanej BG**, fioletowe kropki używają **average(predicted BG, current BG)**, a niebieskie kropki używają **aktualnej BG**.

![DynISF_BGValue.png](../images/DynamicISF/DynISF_BGValue.png)

(dynisf-other-usages-of-isf)=
## Inne zastosowania ISF

### ISF a wchłanianie COB

Jak opisano na stronie [Obliczanie COB](../DailyLifeWithAaps/CobCalculation.md), wchłanianie COB jest zwykle obliczane wzorem:   
`absorbed_carbs = deviation * ic / isf`  
Gdy używasz **dynamicznego ISF**, używany tu **ISF** to średnia wartości dynamicznego ISF z ostatnich 24 godz.

### ISF w kalkulatorze bolusa

Gdy używasz [Kalkulatora bolusa](#aaps-screens-bolus-wizard), **ISF** jest używany do dodania korekty, jeśli **BG** jest powyżej celu.

Gdy używasz **dynamicznego ISF**, używany tu **ISF** to średnia wartości dynamicznego ISF z ostatnich 24 godz.

(dyn-isf-preferences)=
## Ustawienia

Aby włączyć, zaznacz **Włącz wrażliwość dynamiczną** w [Ustawienia > OpenAPS SMB](#Preferences-openaps-smb-settings). Po włączeniu pojawiają się nowe ustawienia.

![Ustawienia dynamicznego ISF](../images/preferences/settings_dynamic_isf.png)

(dyn-isf-adjustment-factor)=
### Współczynnik korygujący DynamicISF
**Dynamiczny ISF** działa według jednej reguły, która ma pasować do wszystkich. Oznacza to, że osoby z taką samą **TDD** miałyby taką samą wrażliwość. Każdy ma jednak własną wrażliwość, dlatego **Współczynnik korygujący** pozwala ustawić, czy jesteś bardziej czy mniej wrażliwy na insulinę niż „standardowa” osoba.

**Współczynnik korygujący** to wartość od 1% do 300%. Działa on jak mnożnik wartości **TDD**.

* Zwiększenie tej wartości powyżej 100% sprawia, że **DynISF** jest bardziej agresywny: wartości **ISF** stają się *mniejsze* (_tzn._ potrzeba więcej insuliny, aby trochę obniżyć **BG**)
* Zmniejszenie tej wartości poniżej 100% sprawia, że **DynISF** jest mniej agresywny: wartości **ISF** stają się większe (_tzn._ potrzeba mniej insuliny, aby trochę obniżyć **BG**).

**Współczynnik korygujący** zmienia się też, gdy włączysz [**Zmianę profilu** z procentem](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md). Niższy **procent profilu** obniża **Współczynnik korygujący**, a wyższy **procent profilu** go podwyższa.

Na przykład jeśli Twój **Współczynnik korygujący** wynosi 80% i włączysz **Zmianę profilu** na 80%, wynikowy **Współczynnik korygujący** wyniesie `0.8*0.8=0.64`.

Oznacza to, że przy **DynISF** możesz użyć **procentu profilu**, aby tymczasowo ręcznie dostroić swoją wrażliwość. Może to być przydatne przy aktywności fizycznej (niższy procent), chorobie (wyższy procent) itp.

### Próg LGS

Wartość **BG**, poniżej której insulina jest wstrzymywana (zawieszenie przy niskiej glikemii). Wartość domyślna używa standardowego modelu celu. Możesz ustawić tę wartość od 60 mg/dl (3,3 mmol/l) do 100 mg/dl (5,5 mmol/l). Wartości poniżej 65/3,6 powodują użycie modelu domyślnego.

### DynamicISF zmienia wrażliwość

To ustawienie (*„Dostosuj obliczenia wrażliwości podczas korzystania z DynamicISF”*) zastępuje Autosens i używa **TDD** z ostatnich 24 godz./**TDD** z 7 dni jako podstawy do zwiększania i zmniejszania dawki bazowej, tak samo jak standardowy Autosens. Ta obliczona wartość służy też do dostosowania celu, jeśli opcje dostosowania celu na podstawie wrażliwości są włączone. W przeciwieństwie do Autosens ta opcja nie zmienia wartości **ISF**.

(dyn-isf-things-to-consider-when-activating-dynamicisf)=
## Co wziąć pod uwagę przed włączeniem dynamicznego ISF

* **Dynamiczny ISF** jest zalecany tylko dla zaawansowanych użytkowników, którzy dobrze znają sterowanie i monitorowanie **AAPS**. Najlepiej, jeśli przed przejściem na **dynamiczny ISF** osiągniesz dobrą kontrolę z **SMB**.
* Jak wspomniano wyżej, wyłącz wszystkie [**Automatyzacje**](../DailyLifeWithAaps/Automations.md), które włączają **procent profilu** zależnie od **BG**, bo będą zbyt agresywne i mogą podać za dużo insuliny! To jest już częścią algorytmu **dynamicznego ISF**.
* [Procent profilu](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) jest uwzględniany w obliczeniu dynamicznego ISF (zobacz powyżej [Współczynnik korygujący DynamicISF](#dyn-isf-adjustment-factor)). Używanie przez długi czas **procentu profilu** innego niż 100% to zła praktyka. Jeśli uznasz, że Twój **Profil** się zmienił, utwórz nowy **Profil** z poprawionymi wartościami, zamiast używać **Profilu** z określonym procentem.
* **Dynamiczny ISF** może nie działać dobrze u każdego. Szczególnie możesz zobaczyć nieoczekiwane wyniki, jeśli dotyczy Cię jedna z tych sytuacji:
  * Zmienny tryb życia (nieregularne posiłki lub aktywność fizyczna)
  * Niestała TDD lub wrażliwość z dnia na dzień.
* Nie ma dokładnej instrukcji, jak ustawić początkową wartość **Współczynnika korygującego**. Na początek jednak: jeśli wartości Twojego **Profilu** są poprawne, to gdy jesteś w zakresie, a poziom **BG** jest stabilny, wartość **DynISF** powinna być mniej więcej taka sama jak wcześniej w Twoim **Profilu**.<br/>Jeśli widzisz, że **dynamiczny ISF** jest zbyt agresywny, obniż **Współczynnik korygujący**, a w odwrotnym przypadku go podnieś.
* Choć **DynISF** w ogóle nie używa **ISF z Profilu**, jeśli zauważysz, że Twoja wrażliwość bardzo różni się od zapisanej w **Profilu**, warto ją aktualizować. This may be useful in case you lose your **AAPS** data (_e.g._ new phone, new **AAPS** version…), as your **Profile ISF** will be used as fallback for the next 7 days.