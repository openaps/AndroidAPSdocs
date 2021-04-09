# Nightscout

## Bezpečnostní pokyny

Kromě sledování může být Nightscout použit také k ovládání AAPS. Tj. můžete nastavit dočasné cíle nebo přidat budoucí sacharidy. Tyto informace budou sbírány AAPS a bude to fungovat odpovídajícím způsobem. Proto stojí za to přemýšlet o zabezpečení Nightscout webové stránky.

### Nastavení Nightscoutu

You can deny public access to your Nightscout site by using [authentication roles](https://nightscout.github.io/nightscout/security).

### Nastavení AndroidAPS

V nastavení AAPS existuje funkce pouze nahrávání do NS (ne synchronizace). Tím AAPS nebude provádět změny zadané v Nightscoutu, jako jsou dočasné cíle nebo budoucí sacharidy. Pokud používáte [NS Profil](../Configuration/Config-Builder#ns-profile), budou profily synchronizovány mezi AAPS a Nightscoutem i přes nastavení „pouze nahrávání“.

* Klepněte na menu (3 tečky v pravém horním rohu) na hlavní obrazovce AAPS.
* Zvolte „Nastavení“.
* Posuňte se dolů a klepněte na „Rozšířená nastavení“.
* Aktivujte možnost „pouze nahrávání do NS“

![Nightscout pouze nahrávání](../images/NSsafety.png)

### Další nastavení zabezpečení

Udržujte svůj telefon aktualizovaný, jak je popsáno v části [bezpečnost na prvním místě](../Getting-Started/Safety-first.rst).

## Ruční nastavení Nightscoutu

Předpokládá se, že Nightscout stránky už máte, pokud ne, tak navštivte stránku [Nightscout](http://nightscout.github.io/nightscout/new_user/) pro návod k založení. Následující pokyny jsou nastavení, která potřebujete provést v Nightscoutu pro správnou funkčnost AndroidAPS. Your Nightscout site needs to be at least version 10 (displayed as 0.10...), so please check you are running the [latest version](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version) otherwise you will get an error message on your AAPS app. Some people find looping uses more than the azure free quota allowed, so heroku is the preferred choice.

* Běžte na https://herokuapp.com/

* Klikněte na název své aplikace.

* Klikněte na "Application settings" (Azure) nebo "Settings" > "Reveal Config Variables" (Heroku)

* Přidejte nebo upravte proměnné takto:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal ar2 rawbg pushover bgi pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Various alarms can be set for [monitoring the pump](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring), battery % in particular is encouraged: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

![Azure](../images/nightscout1.png)

* Klikněte na "Save" ve vrchní části panelu.

## Poloautomatickíé zřízení Nightscoutu

Tuto službu nabízí kolega looper Martin Schiftan a v současnosti je zdarma. Pokud se vám služba líbí, můžete zvážit odeslání drobného příspěvku (odkaz v navigačním panelu vlevo).

**Výhody**

* Nightscout si pomocí této služby můžete nainstalovat pomocí několika málo kliknutí a ihned jej začít používat. 
* Téměř žádná manuální práce, protože Martin se snaží celou administraci zautomatizovat.
* Všechna nastavení lze provádět prostřednictvím uživatelsky přívětivého webového rozhraní. 
* Tato služba obsahuje rovněž automatické kontroly bazálů prostřednictvím nástroje Autotune. 
* Server se nachází v Německu.

<https://ns.10be.de/en/index.html>