# Konfiguracja Nightscout

Zakładamy, że masz już stronę Nightscout, jeśli nie odwiedź stronę [Nightscout](http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku) w celu uzyskania pełnych instrukcji dotyczących konfiguracji, poniższe instrukcje są ustawieniami, które musisz dodać do swojej strony Nightscout. Twoja strona Nightscout musi być co najmniej w wersji 10 (wyświetlana jako 0.10 ...), sprawdź, czy korzystasz z najnowszej wersji, w przeciwnym razie pojawi się komunikat o błędzie w twojej aplikacji AAPS.

* Przejdź do https://herokuapp.com/

* Kliknij nazwę Twojej aplikacji.

* Kliknij Application settings (azure) lub Settings > Reveal Config Vars (heroku)

* Dodaj lub edytuj zmienne w następujący sposób:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal ar2 rawbg pushover bgi pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Można ustawić różne alarmy dla [ monitorowania pompy](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring), w szczególności baterii: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 
  * Opcjonalnie: Można ustawić następujące „liczniki” dla kolorystyki w raporcie AAPS: 
    * ` BAGE_WARN ` = ` 480 ` (Ostrzeżenie po x godzinach od ostatniej zmiany baterii w Careportalu)
  * ` BAGE_URGENT ` = ` 504 ` (Pilne ostrzeżenie po x godzinach od ostatniej zmiany baterii w Careportalu)
  * ` CAGE_WARN ` = ` 40 ` (Ostrzeżenie po x godzinach od ostatniej zmiany Kaniuli w wydarzeniu w Careportal)
  * ` CAGE_URGENT ` = ` 48 ` (Pilne ostrzeżenie po x godzinach od ostatniej zmiany kaniuli w wydarzeniu w Careportal)
  * ` IAGE_WARN ` = ` 144 ` (Ostrzeżenie po x godzinach od ostatniej zmiany wkładu insulinowego w wydarzeniu w Careportal)
  * ` IAGE_URGENT ` = ` 192 ` (Pilne ostrzeżenie po x godzinach od ostatniej zmiany wkładu insulinowego w wydarzeniu w Careportal)
  * ` SAGE_WARN ` = ` 160 ` (Ostrzeżenie po x godzinach od ostatniego wstawienia zdarzenia CGM Sensor w Careportal)
  * ` SAGE_URGENT ` = ` 168 ` (Pilne ostrzeżenie po x godzinach od ostatniego wstawienia czujnika CGM w Careportal)

![Azure](../../images/nightscout1.png)

* Kliknij "Save" u góry panelu.

## Półautomatyczna konfiguracja Nightcout

Ten serwis jest obecnie oferowany bezpłatnie przez członka społeczności loop Martina Schiftana. Jeśli podoba Ci się usługa, możesz rozważyć wysłanie mu małej darowizny (link w nawigacji po lewej stronie).

**Półautomatyczna konfiguracja Nightcout**

* Możesz zainstalować Nightscout za pomocą kilku kliknięć i od razu go używać. 
* Redukcja ilości ręcznych ustawień, Martin próbuje zautomatyzować zarządzanie konfiguracją.
* Wszystkie ustawienia można wprowadzić za pomocą przyjaznego dla użytkownika interfejsu web. 
* Usługa obejmuje zautomatyzowaną kontrolę dawki bazowej za pomocą funkcji automatycznego dostrajania (Autotune). 
* Serwer znajduje się w Niemczech.

<http://ns.10be.de/en/index.html>