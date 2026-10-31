# Freestyle Libre 2 i 2+

Sensor Freestyle Libre 2 jest teraz prawdziwym CGM, także z oficjalną aplikacją. Mimo to LibreLink nie może wysyłać danych do AAPS. Jest kilka sposobów, aby używać go z AAPS.

## 1. Użyj mostka Bluetooth i OOP

Nadajników Bluetooth można używać z Libre 2 (EU) lub 2+ (EU) i aplikacją z zewnętrznym algorytmem (OOP, out of process). Możesz otrzymywać odczyty glukozy co 5 minut, tak jak z [Libre 1](./Libre1.md).

Sprawdź, czy mostek i aplikacja, której chcesz używać, są zgodne z Twoim sensorem i z xDrip.

Libre2 OOP (znajdziesz go [tutaj](#Libre2_OOP2)) tworzy takie same odczyty BG jak oryginalny czytnik. AAPS z Libre 2 wygładza dane z ostatnich 10–25 minut, aby uniknąć niektórych skoków. Zobacz niżej [Wygładzanie wartości i wartości surowe](#libre2-value-smoothing-raw-values). OOP tworzy odczyty co 5 minut jako średnią z ostatnich 5 minut. Dlatego odczyty BG nie są tak gładkie, ale zgadzają się z oryginalnym czytnikiem i szybciej podążają za „prawdziwymi” wartościami BG. Jeśli chcesz używać pętli z OOP, włącz w xDrip wszystkie ustawienia wygładzania.

Jest kilka dobrych powodów, aby używać nadajnika Bluetooth:

-   You can choose various OOP2 calibration strategies (1): have the reader values using "no calibration", or calibrate the sensor like a Libre 1 using "calibrate based on raw" or ultimately calibrate the reader-like values with "calibrate based on glucose".  
  Make sure to leave OOP1 disabled (2).

    → Menu (☰) → Settings → Less common settings → Other misc. options

![Kalibracja OOP2](../images/Libre2_OOP2Calibration.png)

-   Sensora Libre 2 można używać przez 14,5 dnia, tak jak Libre 1
-   Uzupełnianie danych z 8 godzin jest w pełni obsługiwane

Uwaga: nadajnika można używać razem z aplikacją LibreLink, nie przeszkadza jej to.

### Uruchom sensor

- → Menu (☰) (1) → Start sensor (2) → Start sensor (3) → odpowiedz „Not Today” (4).

![xDrip: uruchomienie nadajnika Libre i sensora 3](../images/xDrip_Libre_Transmitter03.png)

To w żaden sposób fizycznie nie uruchamia sensora Libre2 ani nie komunikuje się z nim. Służy to tylko do poinformowania xDrip, że nowy sensor dostarcza wartości glukozy. If available, enter two blood-measured values for the initial calibration. Teraz wartości glukozy powinny pojawiać się w xDrip co 5 minut. Pominięte wartości, np. gdy byłeś za daleko od telefonu, nie zostaną uzupełnione.

Po zmianie sensora xDrip automatycznie wykryje nowy sensor i usunie wszystkie dane kalibracji. You may check your blood glucose after activation and make a new initial calibration.

### Konfiguracja AAPS (tylko do używania pętli)

-   W **AAPS** otwórz **menu** (☰) w lewym górnym rogu, przejdź do **Konfiguracja** > **Źródło BG** i wybierz **xDrip+**

![Konfiguracja > Źródło BG z wybranym xDrip+ BG](../images/v4/Configuration/configuration_bg_source.png)

-   Jeśli AAPS nie otrzymuje wartości BG, gdy telefon jest w trybie samolotowym, użyj „Identify receiver”, jak opisano na [stronie ustawień xDrip](#xdrip-identify-receiver).

## 2. Użyj bezpośredniego połączenia xDrip

```{admonition} Libre 2 EU only
:class: warning
xDrip nie obsługuje bezpośredniego połączenia z Libre 2 US i AUS.
Tylko modele Libre 2 i 2+ **EU**.
```

- Postępuj według [tych instrukcji](./Libre2MinimalL00per.md), aby skonfigurować xDrip, ponieważ oryginalna dokumentacja odsyła do starej wersji OOP2.
- Postępuj według instrukcji konfiguracji na [stronie ustawień xDrip](../CompatibleCgms/xDrip.md).

-   Wybierz xDrip+ w [Konfiguracja > Źródło BG](#Config-Builder-bg-source).

(libre2-value-smoothing-raw-values)=

### Wygładzanie wartości i wartości surowe

Technicznie aktualna wartość glukozy jest wysyłana do xDrip co minutę. Domyślnie filtr średniej ważonej oblicza wygładzoną wartość z ostatnich 25 minut. Ten okres możesz zmienić w menu NFC Scan features.

→ Menu (☰) → Settings → NFC Scan features → Smooth libre 3 data when using xxx method

![xDrip: ustawienia zaawansowane Libre 2 i wartości surowe](../images/xDrip_Libre3_Smooth.png)

Jest to konieczne do używania pętli. Krzywe są gładkie, a wyniki pętli są bardzo dobre. Wartości surowe, na których opierają się alarmy, skaczą trochę bardziej, ale odpowiadają wartościom, które pokazuje też czytnik. Dodatkowo wartości surowe można pokazać na wykresie xDrip, aby na czas reagować na szybkie zmiany. Włącz Less Common Settings \> Advanced Settings for Libre2 \> „show Raw values” i „show Sensors Infos”. Wtedy wartości surowe są dodatkowo pokazywane jako małe białe kropki, a dodatkowe informacje o sensorze są dostępne w menu systemowym.

Wartości surowe są bardzo pomocne, gdy poziom glukozy szybko się zmienia. Nawet jeśli kropki bardziej skaczą, zobaczysz trend dużo lepiej niż na wygładzonej linii i podejmiesz właściwe decyzje dotyczące leczenia.

→ Menu (☰) → Settings → Less common settings → Advanced settings for Libre 2

![xDrip: ustawienia zaawansowane Libre 2 i wartości surowe](../images/Libre2_RawValues.png)



#### Kalibracja

Możesz kalibrować Libre2 **z przesunięciem od -40 mg/dl do +20 mg/dl \[-2,2 mmol/l do +1,1 mmol/l\]** (intercept). Nachylenia (slope) nie można zmienić. Po założeniu nowego sensora sprawdź wartości pomiarem z palca. Pamiętaj, że w pierwszych 12 godzinach po założeniu sensor może być niedokładny. Ponieważ różnice względem pomiarów z krwi mogą być duże, sprawdzaj co 24 godziny i w razie potrzeby kalibruj. Jeśli po kilku dniach sensor pokazuje zupełnie złe wartości, należy go wymienić.

## 3. Użyj Diabox

- Zainstaluj [Diabox](https://www.bubblesmartreader.com/_files/ugd/6afd37_f183eabd4fbd44fcac4b1926a79b094f.pdf). W Diabox otwórz Settings (Ustawienia), Integration (Integracja) i włącz Share data with other apps (Udostępniaj dane innym aplikacjom).

![Diabox](../images/Diabox.png)

- Wybierz xDrip+ w [Konfiguracja > Źródło BG](#Config-Builder-bg-source).

## 4. Użyj Juggluco

Zobacz [tutaj](./Juggluco.md).
