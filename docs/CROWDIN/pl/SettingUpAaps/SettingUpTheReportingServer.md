# Konfiguracja serwera raportów

Obecnie z **AAPS** możesz używać dwóch serwerów raportów:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Serwery raportów](../images/Building-the-App/ReportingServer.png)

Zalecamy używanie Nightscout.

(SettingUpTheReportingServer-nightscout)=
## Nightscout

Nightscout to aplikacja internetowa, która zapisuje i pokazuje dane z CGM i dane z **AAPS** oraz tworzy raporty. To rozbudowana platforma, która od wielu lat jest zintegrowana z **AAPS**. Pozwala użytkownikom i opiekunom śledzić dane cukrzycowe pacjenta prawie w czasie rzeczywistym (jeśli wszystkie elementy mają dobre połączenie z internetem, między odbiorem danych a ich udostępnieniem mija tylko kilka sekund). It also carries the remote commands that caregivers send to **AAPS** from **AAPSClient** (see [Master ↔ Client control](#client-master-control)).

Nightscout jest oprogramowaniem open source. Każdy może utworzyć i prowadzić serwer Nightscout, korzystając z darmowych lub płatnych usług.

Więcej informacji znajdziesz na [stronie projektu Nightscout](http://nightscout.github.io/).

### Opcja 1 - Skonfiguruj serwer Nightscout samodzielnie

Utworzenie serwera raportów Nightscout może wymagać jednej lub kilku aplikacji internetowych, które trzeba utrzymywać. Aby usługa była całkowicie darmowa, może być konieczne przeniesienie strony Nightscout i danych, jeśli dostawcy wycofają darmową wersję.

Opis, jak skonfigurować Nightscout, wraz z zaletami i wadami różnych sposobów uruchomienia oraz szacunkowymi kosztami, znajdziesz [tutaj](https://nightscout.github.io/nightscout/new_user/#free-diy).

### Opcja 2 - Zapłać za Nightscout prowadzony przez dostawcę

Są też różni dostawcy usług, którzy prowadzą Nightscout za Ciebie za miesięczną opłatą. Koszty są umiarkowane, a zaletą takiej opcji jest to, że nie musisz znać się na informatyce ani mieć własnej infrastruktury.


Obecni użytkownicy Nightscout mogą co jakiś czas sprawdzić, gdzie i jak działa ich serwer Nightscout, i przejść na inną opcję, jeśli będzie lepiej pasować.

Niektóre usługi hostingu Nightscout są wymienione [tutaj](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

### Dalsza konfiguracja Nightscout

Gdy twój Nightscout już działa, zajrzyj na [stronę konfiguracji Nightscout](../SettingUpAaps/Nightscout.md), gdzie znajdziesz dodatkowe wskazówki.

(SettingUpTheReportingServer-tidepool)=
## Tidepool

Tidepool jest dostępny w **AAPS** od wersji 3.2, wydanej pod koniec 2023 roku.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger  
Przy używaniu **AAPS** między otrzymaniem danych a ich pokazaniem w raporcie mijają trzy godziny, dlatego Tidepool nie nadaje się do udostępniania opiekunom informacji w czasie rzeczywistym.  
Z kolei Tidepool może być świetnym rozwiązaniem do udostępniania raportów diabetologowi pacjenta, jeśli Nightscout nie jest akceptowany.  
```

Tidepool to projekt [open source](https://github.com/tidepool-org). Oferuje darmowe konto na serwerach Tidepool.

Więcej informacji o konfiguracji Tidepool z AAPS znajdziesz [tutaj](../SettingUpAaps/Tidepool.md).

```{admonition} **AAPS** has the uploader for Tidepool integrated
:class: note
**Nie** musisz używać aplikacji Tidepool Uploader: **AAPS** sam wyśle do Tidepool dane o glikemii, leczeniu i bazie. Potrzebujesz tylko osobistego konta w Tidepool. Nie wysyłaj danych osobnym narzędziem Tidepool Uploader, bo spowoduje to zduplikowane wartości.  
```

## Następny krok

Gdy skonfigurujesz już serwer raportów, możesz skonfigurować **AAPS** na telefonie za pomocą [Kreatora konfiguracji](./SetupWizard.md), który połączy też **AAPS** z twoim serwerem raportów.