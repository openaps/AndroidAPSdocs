# Nightscout

## Security considerations

Besides reporting Nightscout can also be used to control AAPS. I.e. you can set temp targets or add future carbs. This information will be picked up by AAPS and it will act correspondingly. Therefore it is worth thinking about securing your Nightscout website.

### Ustawienia Nightscout

You can deny public access to your Nightscout site by using [authentication roles](http://www.nightscout.info/wiki/welcome/website-features/0-9-features/authentication-roles).

### Ustawienia AndroidAPS

There is an NS upload only (no sync) function in AAPS settings. By doing so AAPS will not pick up changes done in Nightscout such as temp targets or future carbs. If you are using [NS profile](../Configuration/Config-Builder#ns-profile) the profiles will be synced between AAPS and Nightscout despite the setting "upload only".

* Tap 3-dot menu on top right corner on your AAPS homescreen.
* Select "Preferences".
* Scroll down and tap "Advanced settings".
* Activate "NS upload only

![Nightscout upload only](../images/NSsafety.png)

### Further security settings

Keep your phone up to date as described in [safety first](../Getting-Started/Safety-first.rst).

## Manual Nightscout setup

It is assumed you already have a Nightscout site, if not visit the [Nightscout](http://nightscout.github.io/nightscout/new_user/) page for full instructions on set up, the instructions below are then settings you will also need to add to your Nightscout site. Twoja strona Nightscout musi być co najmniej w wersji 10 (wyświetlana jako 0.10 ...), sprawdź, czy korzystasz z najnowszej wersji, w przeciwnym razie pojawi się komunikat o błędzie w twojej aplikacji AAPS.

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

[ http://ns.10be.de/en/index.html](http://ns.10be.de/en/index.html)