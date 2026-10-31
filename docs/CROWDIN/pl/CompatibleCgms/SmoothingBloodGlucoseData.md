# Wygładzanie danych dotyczących poziomu glukozy we krwi

Jeśli dane **BG** skaczą lub mają szumy, **AAPS** może podać złą dawkę insuliny, co prowadzi do wysokich lub niskich glikemii. Jeśli widzisz błędy lub dane z CGM skaczą, ważne jest, aby wyłączyć pętlę, dopóki problem nie zostanie rozwiązany. Zależnie od Twojego CGM takie problemy mogą wynikać z konfiguracji CGM w **AAPS** (opisanej niżej) albo z problemu z miejscem założenia sensora CGM (wtedy może być potrzebna wymiana sensora).

## Wygładzanie danych w AAPS

**AAPS** pozwala wygładzać dane w **AAPS** zamiast w aplikacji CGM. Otwórz **menu** (☰), wybierz [**Konfiguracja**](../SettingUpAaps/ConfigBuilder.md), a następnie **Wygładzanie**. Są cztery opcje i tylko jedna może być aktywna naraz: **Bez wygładzania**, **Wygładzanie wykładnicze**, **Wygładzanie uśredniające** i **Bezśladowy filtr Kalmana (UKF)**.

![Konfiguracja > Wygładzanie](../images/v4/Configuration/configuration_smoothing.png)

### Wygładzanie wykładnicze

Zwykle od tej opcji warto zacząć, bo najmocniej usuwa szumy i nadpisuje najnowszą wartość. W tabeli poniżej znajdziesz jednak inne, szczegółowe zalecenia.

### Wygładzanie uśredniające

Ta opcja działa podobnie do wygładzania wstecznego (back smoothing), które było wcześniej dostępne na niektórych platformach CGM. Szybciej reaguje na ostatnie zmiany wartości BG, dlatego łatwiej może źle zareagować na zaszumione dane CGM.

### Bez wygładzania

Używaj tej opcji tylko wtedy, gdy dane CGM są już poprawnie wygładzane przez aplikację zbierającą dane, zanim zostaną wysłane do **AAPS**.

### Bezśladowy filtr Kalmana (UKF)

Ta opcja używa modelu statystycznego. Na podstawie przychodzących (być może zaszumionych) odczytów stale szacuje Twoją prawdziwą wartość glukozy i tempo jej zmian. Sama dopasowuje się do tego, jak duże są w danej chwili szumy Twojego sensora. Wykrywa też i odrzuca nagłe, odstające odczyty. Jest to bardziej zaawansowana alternatywa dla wygładzania wykładniczego i uśredniającego. Przydaje się, gdy chcesz, aby wygładzanie samo dopasowywało się do zmieniającego się poziomu szumów sensora, zamiast używać stałej metody.

(smoothing-xdrip-dexcom-g6)=

## Zalecenia dotyczące wygładzania

Możesz też zmieniać metodę wygładzania automatycznie, na przykład zależnie od wieku sensora, za pomocą [akcji automatyzacji](#automations-automation-action) **Zmień wygładzanie**.

|               |      Wykładnicze      |      Uśredniające      | Bez wygładzania |
| ------------- |:---------------------:|:----------------------:|:---------------:|
| G5/G6/ONE     | Jeśli dane mają szumy |                        |    Zalecane     |
| G7/ONE+/Stelo | Jeśli dane mają szumy | Jeśli dane są stabilne |                 |

Sensory Libre mają szumy i mogą wymagać wygładzania. Gdy używasz bezpośredniego połączenia xDrip lub źródła danych ze zmodyfikowanej aplikacji (patched) (odbieranie z innej aplikacji, także z Juggluco), [wygładzanie jest już wykonywane w tej aplikacji](#libre2-value-smoothing-raw-values).

| Sensor / źródło danych |   Juggluco   | xDrip direct | xDrip bridge | xDrip patched app |
| ---------------------- |:------------:|:------------:|:------------:|:-----------------:|
| Libre 1/14 dni/Pro     |     nd.      |     nd.      | Uśredniające |        nd.        |
| Libre 2/2+ (EU)        | Uśredniające |     Brak     | Uśredniające |       Brak        |
| Libre 2/2+/3/3+        | Uśredniające |     nd.      |     nd.      |       Brak        |
