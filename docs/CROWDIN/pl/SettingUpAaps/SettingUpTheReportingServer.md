# Setting up the Reporting Server

Obecnie z **AAPS** możesz używać dwóch serwerów raportów:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Serwery raportów](../images/Building-the-App/ReportingServer.png)

We recommend using Nightscout.

(SettingUpTheReportingServer-nightscout)=
## Nightscout

Nightscout to aplikacja internetowa, która zapisuje i pokazuje dane z CGM i dane z **AAPS** oraz tworzy raporty. To rozbudowana platforma, która od wielu lat jest zintegrowana z **AAPS**. It enables users and caregivers to track the patient's diabetes data in near real-time (only a few seconds may pass between data reception and data provision if there is a sufficient Internet connection between all components involved). Pozwala też opiekunom wysyłać zdalne polecenia do **AAPS**.

Nightscout is provided as open-source software. Anyone can create and operate a Nightscout server, using either free or paid-for services.

Więcej informacji znajdziesz na [stronie projektu Nightscout](http://nightscout.github.io/).

### Option 1 - Set up your Nightscout server yourself

Creating your Nightscout reporting server can require one or more web-based applications that will require maintenance. In order to have a completely free service, you may need to migrate your Nightscout site and data, if and when providers remove the free tier.

Opis, jak skonfigurować Nightscout, wraz z zaletami i wadami różnych sposobów uruchomienia oraz szacunkowymi kosztami, znajdziesz [tutaj](https://nightscout.github.io/nightscout/new_user/#free-diy).

### Option 2 - Pay for a hosted Nightscout service

There are also options from different service providers who host Nightscout for you, with a monthly fee. The costs are manageable, and the advantage of a hosted option is that you do not need to be IT-literate, or have any operating infrastructure.


Existing Nightscout users can reconsider where and how their Nightscout server is hosted from time to time, and change to a different option if it becomes more suitable.

Niektóre usługi hostingu Nightscout są wymienione [tutaj](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

### Further configuration of Nightscout

Gdy twój Nightscout już działa, zajrzyj na [stronę konfiguracji Nightscout](../SettingUpAaps/Nightscout.md), gdzie znajdziesz dodatkowe wskazówki.

(SettingUpTheReportingServer-tidepool)=
## Tidepool

Tidepool jest dostępny w **AAPS** od wersji 3.2, wydanej pod koniec 2023 roku.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger  
Przy używaniu **AAPS** między otrzymaniem danych a ich pokazaniem w raporcie mijają trzy godziny, dlatego Tidepool nie nadaje się do udostępniania opiekunom informacji w czasie rzeczywistym.  
Z kolei Tidepool może być świetnym rozwiązaniem do udostępniania raportów diabetologowi pacjenta, jeśli Nightscout nie jest akceptowany.  
```

Tidepool to projekt [open source](https://github.com/tidepool-org). It offers to run an account free of charge on the Tidepool servers.

Więcej informacji o konfiguracji Tidepool z AAPS znajdziesz [tutaj](../SettingUpAaps/Tidepool.md).

```{admonition} **AAPS** has the uploader for Tidepool integrated
:class: note
**Nie** musisz używać aplikacji Tidepool Uploader: **AAPS** sam wyśle do Tidepool dane o glikemii, leczeniu i bazie. Potrzebujesz tylko osobistego konta w Tidepool. Nie wysyłaj danych osobnym narzędziem Tidepool Uploader, bo spowoduje to zduplikowane wartości.  
```

## Next step

Gdy skonfigurujesz już serwer raportów, możesz skonfigurować **AAPS** na telefonie za pomocą [Kreatora konfiguracji](./SetupWizard.md), który połączy też **AAPS** z twoim serwerem raportów.