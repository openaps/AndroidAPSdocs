# Zdalny monitoring

![Monitorowanie dzieci](../images/KidsMonitoring.png)

__AAPS__ oferuje kilka funkcji do zdalnego monitorowania dzieci z cukrzycą typu 1. Umożliwia też zdalne polecenia, które wysyłają instrukcje do __AAPS__ na odległość. Podobnie __AAPSClient__ może służyć do zdalnego monitorowania __AAPS__ partnera lub przyjaciela.

## Funkcje

- Pompa dziecka jest sterowana przez telefon dziecka za pomocą __AAPS__.
- Opiekunowie mogą zdalnie obserwować wszystkie ważne dane, takie jak poziom glukozy, aktywne węglowodany, aktywna insulina itp., za pomocą **AAPSClient apk** na swoim telefonie z Androidem (wersja **AAPSClient** na iPhone jest w przygotowaniu, zobacz [AAPSClient](AapsClient.md)). Ustawienia zmienione w __AAPS__ synchronizują się z __AAPSClient__ i odwrotnie.
- Opiekunowie mogą otrzymywać alarmy za pomocą **aplikacji xDrip w trybie obserwującego (follower)** na swoim telefonie z Androidem, jeśli skonfigurowano tryb companion w xDrip.
- Zdalne sterowanie __AAPS__ za pomocą [poleceń SMS](../RemoteFeatures/SMSCommands.md) jest zabezpieczone uwierzytelnianiem dwuskładnikowym.
- Zdalne sterowanie przez __AAPSClient__ używa podpisanego kanału poleceń, wprowadzonego w **AAPS** 4: urządzenie opiekuna (client) musi najpierw zostać **sparowane** z urządzeniem pacjenta (master) za pomocą kodu QR lub PIN-u, a każde polecenie jest potwierdzane i wykonywane przez urządzenie pacjenta. Telefon każdego opiekuna może dostać własną [rolę](#client-master-control-roles), od samego odczytu do pełnej kontroli — zobacz [Sterowanie Master ↔ Client](#client-master-control).

## Narzędzia i aplikacje do zdalnego monitorowania

- [Nightscout](https://nightscout.github.io/) w przeglądarce internetowej (głównie wyświetlanie danych).
- [__AAPSClient__](AapsClient.md) to uproszczona wersja __AAPS__, która może obserwować główny __AAPS__ (master), a po **sparowaniu** wysyłać zdalne polecenia: węglowodany, __Cele tymczasowe__, __Zmiany Profilu__, a nawet bolusy (zobacz [Sterowanie Master ↔ Client](#client-master-control)). Są 3 aplikacje: [AAPSClient, AAPSClient2 i AAPSClient3 do pobrania](https://github.com/nightscout/AndroidAPS/releases/), więc opiekun może obserwować do trzech różnych osób z jednego telefonu (np. dwoje dzieci z cukrzycą typu 1, każde z własnym kontem Nightscout i własnym głównym __AAPS__).
- Dexcom Follow, jeśli używasz oryginalnej aplikacji Dexcom (tylko wartości BG).
- [xDrip](../CompatibleCgms/xDrip.md) w trybie obserwującego (follower) (głównie wartości BG i **alarmy**).
- [Sugarmate](https://sugarmate.io/) lub [Spike](https://spike-app.com/) na iOS (głównie wartości BG i **alarmy**).
- Niektórym użytkownikom przy zaawansowanym zdalnym rozwiązywaniu problemów pomaga narzędzie do pełnego zdalnego dostępu, takie jak [TeamViewer](https://www.teamviewer.com/).

## Opcje ze smartwatchem

Smartwatch może być bardzo przydatnym narzędziem do zarządzania __AAPS__ u dzieci z cukrzycą typu 1. Możliwych jest kilka różnych opcji:

- Opcja 1 - Jeśli __AAPSClient__ jest zainstalowany na telefonie opiekuna, na kompatybilnym smartwatchu połączonym z telefonem opiekuna można zainstalować [aplikację AAPSClient WearOS](https://github.com/nightscout/AndroidAPS/releases/). Pokazuje aktualną __BG__, stan pętli i historię bolusów oraz pozwala wprowadzać węglowodany, __Cele tymczasowe__ i zmiany __Profilu__. Jeśli urządzenie opiekuna jest **sparowane** z urządzeniem pacjenta, zegarek może też podać **bolus**: polecenie idzie przez urządzenie opiekuna do urządzenia pacjenta, które je potwierdza i podaje bolus (zobacz [Sterowanie Master ↔ Client](#client-master-control)).
- Opcja 2 - Można też zbudować [aplikację AAPS WearOS](../WearOS/WearOsSmartwatch.md) i zainstalować ją na kompatybilnym smartwatchu, który jest połączony z telefonem dziecka, ale noszony przez opiekuna. Obejmuje to wszystkie funkcje wymienione powyżej, a także możliwość podania bolusa insuliny bezpośrednio, bez potrzeby zabierania telefonu dziecku.
- Opcja 3 - Tylko wyświetlanie: zegarek, którego **AAPS** nie obsługuje bezpośrednio (Xiaomi, Amazfit lub zegarek z Wear OS z komplikacją), może wyświetlać glukozę, IOB, COB i stan pętli przez aplikację towarzyszącą, np. WatchDrip+ lub GlucoDataHandler. Dane dostarcza wtyczka **Zewnętrzne aplikacje towarzyszące** w telefonie z **AAPS** lub **AAPSClient**, z którym zegarek jest połączony. Zobacz [Zewnętrzne aplikacje towarzyszące](#watches-external-companion-apps).

## Rzeczy, o których warto pamiętać

- Weź pod uwagę opóźnienie między urządzeniem głównym (master) a obserwującym, wynikające z czasu wysyłania i pobierania danych. Pamiętaj też, że telefon główny z __AAPS__ wysyła dane dopiero po przebiegu pętli.
- Jaki masz plan awaryjny na sytuację, gdy zdalne sterowanie nie działa (_np._ problemy z siecią lub utrata połączenia Bluetooth)? Zawsze zastanów się, co stanie się z **AAPS**, jeśli nagle nie będziesz w stanie wysłać nowego polecenia. **AAPS** nadpisuje bazę, ISF i ICR w pompie wartościami z aktualnego profilu. Jeśli przełączasz na silniejszy profil insuliny, używaj tylko tymczasowych zmian profilu (_tj._ z ustawionym czasem trwania), na wypadek gdyby połączenie zdalne zostało przerwane. Wtedy pompa wróci do pierwotnego profilu, gdy minie ustawiony czas.
