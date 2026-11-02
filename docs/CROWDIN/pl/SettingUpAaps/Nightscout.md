# Nightscout

(Nightscout-security-considerations)=

## Kwestie bezpieczeństwa

Nightscout to serwer raportów i monitorowania dla **AAPS**: **AAPS** wysyła do niego Twoje dane, a Ty lub Twoi opiekunowie oglądacie je na stronie Nightscout albo w aplikacjach dla obserwujących. Przechowuje on Twoje dane medyczne, profile i leczenie, więc warto pomyśleć o zabezpieczeniu swojej strony Nightscout.

W **AAPS** 4 zdalne sterowanie nie odbywa się przez stronę Nightscout. Gdy sterowanie z urządzenia opiekuna jest włączone ([tryb silniejszych zabezpieczeń](#client-master-control-hardened-mode)), leczenie lub cele wpisane bezpośrednio w Nightscout **nie są stosowane** przez **AAPS**. Zamiast tego zdalne polecenia przychodzą ze sparowanej aplikacji **AAPSClient** — zobacz [Sterowanie Master ↔ Client](#client-master-control).

Zachowaj największą ostrożność, jeśli używasz Nightscout jako źródła danych BG dla AAPS.

### Ustawienia Nightscout

Możesz zablokować publiczny dostęp do swojej strony Nightscout za pomocą [ról uwierzytelniania](https://nightscout.github.io/nightscout/security): udostępniaj swój adres URL tylko z tokenem `readable`, nigdy z tokenem `admin`.

`API_SECRET` Nightscout to główne hasło do Twojej strony: nie udostępniaj go publicznie.

(Nightscout-aaps-settings)=

### Ustawienia AAPS

Akceptowanie danych z Nightscout (zmiany profilu, leczenie, ...) jest opcjonalne i domyślnie wyłączone. Przełączniki opisane poniżej są ukryte, gdy włączone jest sterowanie z urządzenia opiekuna (tryb silniejszych zabezpieczeń) oraz w [trybie uproszczonym](#preferences-simple-mode).

* Otwórz ustawienia **Synchronizacja** wtyczki NSClientV3 na jeden z dwóch sposobów: 1) **Ustawienia** (ikona koła zębatego na ekranie głównym) -> **NSClientV3** -> **Synchronizacja** albo 2) **Konfiguracja** (menu ☰) -> **Komunikacja** -> „**Ustawienia**” pod NSClientV3.
* Włącz „Przesyłaj dane do NS”.
* „Przekaż glikemię do NS” znajdziesz w ustawieniach swojego źródła BG (**Konfiguracja → Źródło BG → Ustawienia**). Włącz tę opcję, chyba że źródłem danych BG w AAPS jest Nightscout: wtedy jej **nie** włączaj.
* Nie włączaj „Odbieraj dane CGM z NS”, chyba że Nightscout jest Twoim źródłem danych BG.

#### Nie synchronizuj z Nightscout

Keeping all the "Receive … from NS" options disabled makes sure no Nightscout change will be used by AAPS:

![Tylko wysyłanie do Nightscout](../images/preferences/settings_nsclient_sync.png)

#### Akceptuj zmiany z Nightscout

Włączenie tych opcji pozwala zmieniać ustawienia AAPS przez Nightscout, na przykład zmieniać i przełączać profile, ustawiać cele tymczasowe i dodawać węglowodany, które AAPS weźmie pod uwagę. Są widoczne tylko wtedy, gdy sterowanie z urządzenia opiekuna i tryb uproszczony są wyłączone.  
Pamiętaj, że leczenie insuliną będzie używane tylko do obliczeń, jak przy „Nie podawaj bolusa, tylko zapisz”.

![Włączone opcje odbierania z Nightscout](../images/NSsafety3.png)

### Dalsze ustawienia bezpieczeństwa

Aktualizuj swój telefon, jak opisano w części [Najpierw bezpieczeństwo](#preparing-safety-first).

(Nightscout-manual-nightscout-setup)=

## Ręczna konfiguracja Nightscout

Zakładamy, że masz już stronę Nightscout. Jeśli nie, zobacz stronę [Nightscout](http://nightscout.github.io/nightscout/new_user/) z pełną instrukcją konfiguracji. Poniższe instrukcje to ustawienia, które musisz też dodać do swojej strony Nightscout. Twoja strona Nightscout musi mieć co najmniej wersję 15, więc sprawdź, czy używasz [najnowszej wersji](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version). W przeciwnym razie aplikacja AAPS pokaże komunikat o błędzie.

* [Edytuj swoje zmienne](https://nightscout.github.io/nightscout/setup_variables/#nightscout-configuration)

* Dodaj lub edytuj zmienne w następujący sposób:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Możesz ustawić różne alarmy do [monitorowania pompy](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring), szczególnie zalecany jest alarm % baterii: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

* Zapisz zmiany. Twoja strona Nightscout powinna teraz pozwalać na wyświetlanie „pigułek” (pills). Możesz wymusić ich domyślne wyświetlanie, dodając je do `SHOW_PLUGINS`.
  
  * `SHOW_PLUGINS` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  
  ![„Pigułki” Nightscout (pills)](../images/nightscout1.png)

## Nightscout jako płatna usługa SaaS (Software as a Service, oprogramowanie jako usługa)

Ustaw zmienne w interfejsie internetowym dostawcy. W razie potrzeby skontaktuj się z pomocą techniczną dostawcy.